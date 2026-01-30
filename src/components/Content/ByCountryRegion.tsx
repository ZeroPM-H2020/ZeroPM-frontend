import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { CheckboxWrapper } from "../Selectors/CheckboxWrapper";
import { additionalDataConfig } from "./configs/ContentConfigs";
import { regionsConfig } from "./configs/regions";
import { useState } from "react";
import { countriesConfig } from "./configs/countries";
import useQueryBuilder, {
  QueryBuilderParams,
} from "../../hooks/useQueryBuilder";

const ByCountryRegion = () => {
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

  const {
    queryOptions,
    buildQuery,
    updateSelectFields,
    updateWhereConditions,
  } = useQueryBuilder(initialQueryOptions);

  // Handler for where conditions change
  const handleWhereConditions = () => {
    updateWhereConditions([...country, ...region]);
  };

  const [country, setCountry] = useState<string[]>([]);
  const [region, setRegion] = useState<string[]>([]);

  const onChangeCountry = (event: SelectChangeEvent<typeof country>) => {
    const {
      target: { value },
    } = event;
    console.log("Value:", value);
    setCountry(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    if (value.length > 0 && !queryOptions.selectFields.includes("countries.country")) {
      updateSelectFields(["countries.country", ...queryOptions.selectFields]);
    }
    if (value.length === 0) {
      updateSelectFields(queryOptions.selectFields.filter(field => field !== "countries.country"));
    }
  };

  const onChangeRegion = (event: SelectChangeEvent<typeof region>) => {
    const {
      target: { value },
    } = event;
    setRegion(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    if (value.length > 0 && !queryOptions.selectFields.includes("global_regions.region")) {
      updateSelectFields(["global_regions.region", ...queryOptions.selectFields]);
    }
    if (value.length === 0) {
      updateSelectFields(queryOptions.selectFields.filter(field => field !== "global_regions.region"));
    }
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = event.target.value;
    if (event.target.checked) {
      updateSelectFields([fieldName, ...queryOptions.selectFields]);
    } else {
      updateSelectFields(queryOptions.selectFields.filter(field => field !== fieldName));
    }
  };

  console.log("Generated Query:", buildQuery());
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item container gap={0}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="select-country-label">
                Select country from list
              </InputLabel>
              <Select
                labelId="select-country-label"
                id="select-country"
                label="Select country from list"
                multiple
                value={country}
                onChange={onChangeCountry}
                onBlur={handleWhereConditions}
              >
                {countriesConfig.map((country, index) => (
                  <MenuItem key={`country-${index}`} value={country.value}>
                    {country.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="select-region-label">
                Select region from list
              </InputLabel>
              <Select
                labelId="select-region-label"
                id="select-region"
                label="Select region from list"
                multiple
                value={region}
                onChange={onChangeRegion}
                onBlur={handleWhereConditions}
              >
                {regionsConfig.map((region, index) => (
                  <MenuItem key={`region-${index}`} value={region.value}>
                    {region.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">Include additional data:</Typography>
        </Grid>

        <Grid item container>
          {additionalDataConfig.map((additionalData, index) => (
            <Grid item xs={12} md={6} key={`country-region-grid-${index}`}>
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
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption">
            * Including inventory names, countries and/or regional data will
            result in chemical appearing multiple times in different rows.
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
                disabled={country.length === 0 && region.length === 0}
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

export default ByCountryRegion;
