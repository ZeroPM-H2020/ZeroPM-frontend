import ByCountryRegion from "./Content/ByCountryRegion";
import ChemicalIdentifier from "./Content/ChemicalIdentifier";
import ChemicalList from "./Content/ChemicalList";
// import Instructions from "./Content/Instructions";

export const accordionConfig = [
 /** {
    title: "Instructions",
    content: <Instructions />,
  }, */ 
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
