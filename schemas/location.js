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
          type: "locationCard",
        },
      ],
    },
    {
      name: "ceremonyLocationDesc",
      title: "Ceremony Location Description",
      type: "blockContent",
    },
    {
      name: "interestPlaces",
      title: "Places Around Title",
      type: "array",
      of: [
        {
          type: "string",
          name: "title",
        },
      ],
    },
    {
      name: "interestPlacesDesc",
      title: "Places Around description",
      type: "array",
      of: [
        {
          type: "string",
          name: "desc",
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
