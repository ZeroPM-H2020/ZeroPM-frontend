import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { additionalDataConfig } from "./configs/ContentConfigs";
import { CheckboxWrapper } from "../Selectors/CheckboxWrapper";
import { useState } from "react";
import useQueryBuilder, { QueryBuilderParams } from "../../hooks/useQueryBuilder";

const ChemicalIdentifier = () => {
  const [inputIdentifiers, setInputIdentifiers] = useState<string>("");

  const initialQueryOptions: QueryBuilderParams = {
    selectFields: [
      "substances.inchi",
      "substances.inchikey",
      "inventories.identifier",
      "zeropm_chemicals.zeropm_id",
      "sources.source_name",
    ],
    whereConditions: [],
  };

  const { queryOptions, buildQuery, updateSelectFields, updateWhereConditions } =
    useQueryBuilder(initialQueryOptions);

  const handleWhereConditions = () => {
    const whereConditonsFromInput = inputIdentifiers
      .split("\n")
      .map((identifier) => identifier.trim())
      .filter((identifier) => identifier)
      .map(
        (identifier) =>
          ` (';' || inventories.identifier || ';') LIKE '%;' || '${identifier}' || ';%'`
      );
    updateWhereConditions(whereConditonsFromInput);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = event.target.value;
    if (event.target.checked) {
      updateSelectFields([fieldName, ...queryOptions.selectFields]);
    } else {
      updateSelectFields(queryOptions.selectFields.filter((field) => field !== fieldName));
    }
  };

  console.log("Generated Query:", buildQuery());

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="body2">Search: </Typography>
          <Typography variant="body1">
            Search by name or CAS No, enter the chemical identifiers below. One identifier per row.
            Max 100 entries.
          </Typography>
          <TextField
            multiline
            fullWidth
            rows={17}
            value={inputIdentifiers}
            onChange={(e) => setInputIdentifiers(e.target.value)}
            onBlur={handleWhereConditions}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body2">Include additional data: </Typography>
          {additionalDataConfig.map((additionalData, index) => (
            <div key={`chemical-list-group-${index}`}>
              <Typography variant="body1" key={`additionalData-${index}`}>
                {additionalData.groupName}
              </Typography>
              {additionalData.choices.map((choice, index) => (
                <CheckboxWrapper
                  key={`additionalData-${index}`}
                  label={choice.label}
                  info={choice.info}
                  value={choice.value}
                  checked={queryOptions.selectFields.includes(choice.value)}
                  onChange={(e) => handleCheckboxChange(e)}
                  isImplemented={choice.isImplemented}
                />
              ))}
            </div>
          ))}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption">
            * Including inventory names, countries and/or regional data will result in chemical
            appearing multiple times in different rows.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div style={{ display: "flex", gap: "8px" }}>
            <div style={{ width: "100%" }}>
              <Button
                variant="contained"
                fullWidth
                component={Link}
                href={`/zeropm/zeropm-v0-0-4.csv?_dl=on&_stream=on&sql=${buildQuery()}`}
              >
                Download .csv
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ChemicalIdentifier;
