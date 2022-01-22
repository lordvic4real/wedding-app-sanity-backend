export default {
  title: "Accomodation",
  name: "accomodation",
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
      name: "bannerDescription",
      title: "Banner Description",
      type: "string",
    },
    {
      name: "accomodationDetail",
      title: "Accomodation Detail",
      type: "array",
      of: [
        {
          type: "card",
        },
      ],
    },
    {
      name: "FooterTitle",
      title: "Footer Title",
      type: "string",
    },

    {
      name: "footerImage",
      title: "Footer Image",
      type: "image",
    },
  ],
  options: {
    hotspot: true,
  },
};
