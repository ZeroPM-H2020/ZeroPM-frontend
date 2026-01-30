import { useState } from "react";

export interface QueryBuilderParams {
  selectFields: string[];
  whereConditions: string[];
}

function useQueryBuilder(initialOptions: QueryBuilderParams) {
  const [queryOptions, setQueryOptions] = useState<QueryBuilderParams>(initialOptions);

  const buildQuery = (): string => {
    const { selectFields, whereConditions } = queryOptions;
    const pmFields = selectFields.filter((field) => field.includes("pm_probabilities."));
    const orderedBaseFields = [
      "zeropm_chemicals.zeropm_id",
      "substances.inchi",
      "substances.inchikey",
      "inventories.identifier",
    ];
    const orderedSelectFields = [
      ...orderedBaseFields.filter((field) => selectFields.includes(field)),
      ...selectFields.filter(
        (field) => !orderedBaseFields.includes(field) && !field.includes("pm_probabilities.")
      ),
      ...pmFields,
    ];
    const usesPmProbabilities =
      pmFields.length > 0 ||
      whereConditions.some((condition) => condition.includes("pm_probabilities."));

    // SELECT statement
    let query = `SELECT ${orderedSelectFields.join(", ")}`;

    query +=
      " FROM substances JOIN cleanventory_chemicals ON cleanventory_chemicals.inchi_id = substances.inchi_id JOIN inventories ON inventories.inventory_id = cleanventory_chemicals.inventory_id JOIN sources ON sources.source_id = inventories.source_id JOIN country_sources_index ON country_sources_index.source_id = inventories.source_id JOIN zeropm_chemicals ON substances.inchi_id = zeropm_chemicals.inchi_id";

    if (usesPmProbabilities) {
      query +=
        " LEFT JOIN pm_probabilities ON pm_probabilities.inchi_id = zeropm_chemicals.inchi_id";
    }

    if (
      selectFields.includes("countries.country") ||
      selectFields.includes("global_regions.region")
    ) {
      query +=
        " JOIN countries ON country_sources_index.country_id = countries.country_id JOIN region_country_index ON region_country_index.country_id = countries.country_id JOIN global_regions ON global_regions.region_id = region_country_index.region_id ";
    }

    //" FROM substances LEFT JOIN zeropm_chemicals ON substances.inchi_id = zeropm_chemicals.inchi_id LEFT JOIN cleanventory_chemicals ON cleanventory_chemicals.inchi_id = substances.inchi_id LEFT JOIN inventories ON inventories.inventory_id = cleanventory_chemicals.inventory_id LEFT JOIN sources ON sources.source_id = inventories.source_id LEFT JOIN country_sources_index ON country_sources_index.source_id = inventories.source_id LEFT JOIN countries ON country_sources_index.country_id = countries.country_id LEFT JOIN region_country_index ON region_country_index.country_id = countries.country_id LEFT JOIN global_regions ON global_regions.region_id = region_country_index.region_id";

    // WHERE conditions
    if (whereConditions.length > 0) {
      query += ` WHERE ${whereConditions.join(" OR ")}`;
    }
    /** 
    if (!selectFields.includes("countries.country") && !selectFields.includes("global_regions.region")) {
      query += " GROUP BY substances.inchi_id";
    }
*/
    if (
      selectFields.includes("countries.country") &&
      !whereConditions.some((string) => string.includes("countries.country"))
    ) {
      query += " GROUP BY countries.country_id";
    } else if (
      selectFields.includes("global_regions.region") &&
      !selectFields.includes("countries.country") &&
      !whereConditions.some((string) => string.includes("global_regions.region"))
    ) {
      query += " GROUP BY global_regions.region_id";
    } else {
      query += " GROUP BY substances.inchi_id";
    }

    if (selectFields.includes("global_regions.region")) {
      query += " ORDER BY global_regions.region_id";
    }

    // Add semicolon at the end
    query += ";";

    return query;
  };

  const updateSelectFields = (selectedFields: string[]) => {
    setQueryOptions({ ...queryOptions, selectFields: selectedFields });
  };

  const updateWhereConditions = (selectedConditions: string[]) => {
    setQueryOptions({ ...queryOptions, whereConditions: selectedConditions });
  };

  return {
    queryOptions,
    buildQuery,
    updateSelectFields,
    updateWhereConditions,
  };
}

export default useQueryBuilder;
