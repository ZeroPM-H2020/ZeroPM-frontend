import { Button, Grid, Typography } from "@mui/material";
import { chemicalListConfig } from "./configs/ContentConfigs";
import { CheckboxWrapper } from "../Selectors/CheckboxWrapper";
import useQueryBuilder, { QueryBuilderParams } from "../../hooks/useQueryBuilder";

const ChemicalList = () => {
  const initialQueryOptions: QueryBuilderParams = {
    selectFields: ["substances.inchi", "substances.inchikey", "inventories.identifier", "zeropm_chemicals.zeropm_id", "sources.source_name"],
    whereConditions: [],
  };
  
  const {
    queryOptions,
    updateSelectFields,
  } = useQueryBuilder(initialQueryOptions);

  
  
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = event.target.value;
    if (event.target.checked) {
      updateSelectFields([fieldName, ...queryOptions.selectFields]);
    } else {
      updateSelectFields(queryOptions.selectFields.filter(field => field !== fieldName));
    }
  };

  return (
    <div>
      <Grid container spacing={2}>
        {chemicalListConfig.map((additionalData, index) => (
          <Grid item xs={12} md={6} key={`chemical-list-grid-${index}`}>
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
        <Grid item xs={12}>
          <Typography variant="caption">
            * Including inventory names, countries and/or regional data will
            result in chemical appearing multiple times in different rows.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div style={{ display: "flex", gap: "8px" }}>
            <div style={{ width: "100%" }}>
              <Button variant="contained" fullWidth disabled={true}>
                Download .csv
              </Button>
            </div>
            {/** 
            <div style={{ width: "50%" }}>
              <Button variant="contained" fullWidth>
                Download .xls
              </Button>
            </div>
            */}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ChemicalList;
