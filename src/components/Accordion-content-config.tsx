import ByCountryRegion from "./Content/ByCountryRegion";
import ChemicalIdentifier from "./Content/ChemicalIdentifier";
import ChemicalList from "./Content/ChemicalList";

export const accordionConfig = [
  {
    title: "Search by chemical identifier",
    content: <ChemicalIdentifier />,
  },
  {
    title: "Search by country and/or region",
    content: <ByCountryRegion />,
  },
  {
    title: "Chemical lists",
    content: <ChemicalList />,
  },
];
