/** 
import axios from "axios";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getData = async () => await axios.get(
  "/zeropm/zeropm-v0-0-3.csv?_dl=on&_stream=on&sql=SELECT+country%2C+inchi%2C+identifier%2C+source_name+%0D%0AFROM+substances%0D%0A++JOIN+cleanventory_chemicals+ON+cleanventory_chemicals.inchi_id+%3D+substances.inchi_id%0D%0A++JOIN+inventories+ON+inventories.inventory_id+%3D+cleanventory_chemicals.inventory_id%0D%0A++JOIN+sources+ON+sources.source_id+%3D+inventories.source_id%0D%0A++JOIN+country_sources_index+ON+country_sources_index.source_id+%3D+inventories.source_id%0D%0A++JOIN+countries+ON+country_sources_index.country_id+%3D+countries.country_id%0D%0A++JOIN+region_country_index+ON+region_country_index.country_id+%3D+countries.country_id%0D%0A++JOIN+global_regions+ON+global_regions.region_id+%3D+region_country_index.region_id%0D%0AWHERE+%22Europe%22+in+%28global_regions.region%29+ORDER+BY+countries.country_id%3B",
 )

export const getCSV = async (query: string) => {
  console.log("getCSV query", query);
  try {
    return await getData()
    /*.then((response) => {
     if (response.data) {
      console.log("getCSV data", response.data);
      const fileName = "test:).csv";
      const url = window.URL.createObjectURL(new Blob([response.data], { type: "text/csv" }));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
     }
     })
  } catch (error) {
    console.error("getCSV", error);
  }
};

export const getXLS = async () => {
  try {
    return await getData().then((response) => {
     if (response.data) {
      console.log("getCSV data", response.data);
      const fileName = "test:).xlsx";
      const url = window.URL.createObjectURL(new Blob([response.data], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
     }
     })
  } catch (error) {
    console.error("getCSV", error);
  }
};
*/