const data = [
  {
    category: "anti-social-behaviour",
    location_type: "Force",
    location: {
      latitude: "51.517741",
      street: { id: 1676209, name: "On or near Langham Place" },
      longitude: "-0.143126",
    },
    context: "",
    outcome_status: null,
    persistent_id: "",
    id: 108508961,
    location_subtype: "",
    month: "2023-02",
  },
  {
    category: "anti-social-behaviour",
    location_type: "Force",
    location: {
      latitude: "51.511310",
      street: { id: 1677411, name: "On or near Ham Yard" },
      longitude: "-0.134539",
    },
    context: "",
    outcome_status: null,
    persistent_id: "",
    id: 108508022,
    location_subtype: "",
    month: "2023-02",
  },
  {
    category: "anti-social-behaviour",
    location_type: "Force",
    location: {
      latitude: "51.523221",
      street: { id: 1674069, name: "On or near Siddons Lane" },
      longitude: "-0.158717",
    },
    context: "",
    outcome_status: null,
    persistent_id: "",
    id: 108506913,
    location_subtype: "",
    month: "2023-02",
  },
  {
    category: "anti-social-behaviour",
    location_type: "Force",
    location: {
      latitude: "51.514564",
      street: { id: 1675376, name: "On or near Stratford Place" },
      longitude: "-0.149193",
    },
    context: "",
    outcome_status: null,
    persistent_id: "",
    id: 108507128,
    location_subtype: "",
    month: "2023-02",
  },
];

const extractedData = data.map(
  ({
    location: { latitude, longitude },
    location: {
      street: { name },
    },
  }) => ({
    name,
    latitude,
    longitude,
  })
);

console.log(extractedData);
