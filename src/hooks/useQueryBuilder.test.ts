import { describe, expect, it } from "vitest";

import { buildQueryFromOptions } from "./useQueryBuilder";

describe("buildQueryFromOptions", () => {
  it("orders select fields with base fields first and pm fields last", () => {
    const query = buildQueryFromOptions({
      selectFields: [
        "inventories.identifier",
        "pm_probabilities.some_score",
        "foo.custom",
        "substances.inchi",
        "zeropm_chemicals.zeropm_id",
      ],
      whereConditions: [],
    });

    const selectLine = query.split(" FROM ")[0];
    expect(selectLine).toBe(
      "SELECT zeropm_chemicals.zeropm_id, substances.inchi, inventories.identifier, foo.custom, pm_probabilities.some_score"
    );
  });

  it("adds pm_probabilities join when selecting pm fields", () => {
    const query = buildQueryFromOptions({
      selectFields: ["pm_probabilities.score"],
      whereConditions: [],
    });

    expect(query).toContain(
      " LEFT JOIN pm_probabilities ON pm_probabilities.inchi_id = zeropm_chemicals.inchi_id"
    );
  });

  it("adds pm_probabilities join when filtering on pm fields", () => {
    const query = buildQueryFromOptions({
      selectFields: ["substances.inchi"],
      whereConditions: ["pm_probabilities.score > 0.5"],
    });

    expect(query).toContain(
      " LEFT JOIN pm_probabilities ON pm_probabilities.inchi_id = zeropm_chemicals.inchi_id"
    );
  });

  it("adds country and region joins when country or region is selected", () => {
    const query = buildQueryFromOptions({
      selectFields: ["countries.country"],
      whereConditions: [],
    });

    expect(query).toContain(
      " JOIN countries ON country_sources_index.country_id = countries.country_id"
    );
    expect(query).toContain(
      " JOIN global_regions ON global_regions.region_id = region_country_index.region_id"
    );
  });

  it("groups by country when country is selected without country filters", () => {
    const query = buildQueryFromOptions({
      selectFields: ["countries.country"],
      whereConditions: [],
    });

    expect(query).toContain(" GROUP BY countries.country_id");
  });

  it("groups by region when region is selected without country selection or region filters", () => {
    const query = buildQueryFromOptions({
      selectFields: ["global_regions.region"],
      whereConditions: [],
    });

    expect(query).toContain(" GROUP BY global_regions.region_id");
    expect(query).toContain(" ORDER BY global_regions.region_id");
  });

  it("groups by substances when selecting neither country nor region", () => {
    const query = buildQueryFromOptions({
      selectFields: ["substances.inchi"],
      whereConditions: [],
    });

    expect(query).toContain(" GROUP BY substances.inchi_id");
  });

  it("joins where conditions with OR", () => {
    const query = buildQueryFromOptions({
      selectFields: ["substances.inchi"],
      whereConditions: ["foo = 1", "bar = 2"],
    });

    expect(query).toContain(" WHERE foo = 1 OR bar = 2");
  });

  it("always ends the query with a semicolon", () => {
    const query = buildQueryFromOptions({
      selectFields: ["substances.inchi"],
      whereConditions: [],
    });

    expect(query.endsWith(";")).toBe(true);
  });
});
