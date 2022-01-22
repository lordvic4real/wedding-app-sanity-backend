export default {
  title: "Location",
  name: "location",
  type: "document",

  fields: [
    {
      name: "bannerImage",
      title: "Banner Image",
      type: "image",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },

    {
      name: "locationDetails",
      title: "Ceremony Location Details",
      type: "array",
      of: [
        {
          type: "card",
        },
      ],
    },
    {
      name: "interestPlaces",
      title: "Places Around",
      type: "array",
      of: [
        {
          type: "places",
        },
      ],
    },

    {
      name: "locationArea",
      title: "Location Map",
      type: "geopoint",
    },
  ],
  options: {
    hotspot: true,
  },
};
