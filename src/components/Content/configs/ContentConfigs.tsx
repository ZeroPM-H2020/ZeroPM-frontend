export const additionalDataConfig = [
  {
    groupName: "Sources and regions*",
    choices: [
      {
        label: "Inventory",
        info: "",
        value: "inventories.identifier",
        isImplemented: true,
      },
      {
        label: "Countries",
        info: "",
        value: "countries.country",
        isImplemented: true,
      },
      {
        label: "Regions",
        info: "",
        value: "global_regions.region",
        isImplemented: true,
      },
    ],
  },
  {
    groupName: "PM classification data",
    choices: [
      {
        label: "Mobile",
        info: "",
        value:
          "pm_probabilities.probability_of_not_m, pm_probabilities.probability_of_m_or_vm, pm_probabilities.probability_of_m, pm_probabilities.probability_of_vm",
        isImplemented: true,
      },
      {
        label: "Persistent",
        info: "",
        value:
          "pm_probabilities.probability_of_not_p, pm_probabilities.probability_of_p_or_vp, pm_probabilities.probability_of_p, pm_probabilities.probability_of_vp",
        isImplemented: true,
      },
    ],
  },
  {
    groupName: "External identifiers",
    choices: [
      {
        label: "PubChem CID",
        value: "",
        info: (
          <span>
            PubChem Compound Identification, a non-zero integer PubChem accession identifier for a
            unique chemical structure. (Source:{" "}
            <a href=" http://dx.doi.org/10.1093/nar/gkv951" target="_blank">
              doi:10.1093/nar/gkv951
            </a>
            )
          </span>
        ),
        isImplemented: false,
      },
      {
        label: "CompTox DTXCID",
        info: (
          <span>
            DSSTox substance identifier (DTXSID) used in the Environmental Protection Agency CompTox
            Dashboard. (Source:{" "}
            <a href="https://www.wikidata.org/wiki/Property:P3117" target="_blank">
              https://www.wikidata.org/wiki/Property:P3117
            </a>
            )
          </span>
        ),
        value: "",
        isImplemented: false,
      },
      {
        label: "CAS No",
        info: (
          <span>
            A CAS Registry Number Is a unique numeric identifier that designates only one substance
            and has no chemical significance. It is a link to a wealth of information about a
            specific chemical substance. (Source:{" "}
            <a
              href="https://www.cas.org/support/documentation/chemical-substances/faqs#WhatisaCASRegistryNumberCASRN"
              target="_blank"
            >
              https://www.cas.org/support/documentation/chemical-substances/faqs#WhatisaCASRegistryNumberCASRN
            </a>
            )
          </span>
        ),
        value: "",
        isImplemented: false,
      },
    ],
  },
  {
    groupName: "Categorical data",
    choices: [
      {
        label: "Substance groups",
        info: "",
        value: "",
        isImplemented: false,
      },
      {
        label: "Alternative database",
        info: "",
        value: "",
        isImplemented: false,
      },
    ],
  },
];

export const chemicalListConfig = [
  {
    groupName: "Hazard information",
    choices: [
      {
        label: "Persistency",
        info: "",
        value: "",
        isImplemented: false,
      },
      { label: "Mobility", info: "", value: "", isImplemented: false },
      {
        label: "No hazard information",
        info: "",
        value: "",
        isImplemented: false,
      },
    ],
  },

  {
    groupName: "Alternative information",
    choices: [
      {
        label: "Safe alternative identified",
        info: "",
        value: "",
        isImplemented: false,
      },
      { label: "No information", info: "", value: "", isImplemented: false },
    ],
  },
  {
    groupName: "The ZeroPM list",
    choices: [
      {
        label: "With hazard information",
        info: "",
        value: "",
        isImplemented: false,
      },
      {
        label: "Without hazard information",
        info: "",
        value: "",
        isImplemented: false,
      },
    ],
  },
  {
    groupName: "Substructure",
    choices: [
      {
        label: "Belonging to >1 group",
        info: "",
        value: "",
        isImplemented: false,
      },
      { label: "No information", info: "", value: "", isImplemented: false },
    ],
  },
];
