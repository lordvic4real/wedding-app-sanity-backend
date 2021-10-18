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
      name: "bannerTitle",
      title: "Banner Title",
      type: "string",
    },

    {
      name: "ceremonyLocation",
      title: "Ceremony Location",
      type: "array",
      of: [
        {
          type: "string",
          name: "ceremonyLocationTitle",
        },
      ],
    },
    {
      name: "ceremonyLocationSubtitle",
      title: "Ceremony Location Subtitle",
      type: "array",
      of: [
        {
          type: "string",
          name: "ceremonyLocationSubtitle",
        },
      ],
    },
    {
      name: "ceremonyLocationImage",
      title: "Ceremony Location Image",
      type: "array",
      of: [
        {
          type: "image",
          name: "image",
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
