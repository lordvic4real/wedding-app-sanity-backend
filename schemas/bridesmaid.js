export default {
  title: "Bridesmaids",
  name: "bridesmaids",
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
      name: "maids",
      title: "Maids",
      type: "array",
      of: [
        {
          type: "image",
        },
        {
          name: "cardDetail",
          type: "object",
          fields: [
            {
              name: "cardTitle",
              type: "string",
              title: "Title",
            },
            {
              name: "cardDescription",
              type: "string",
              title: "Description",
            },
          ],
        },
      ],
    },
    {
      name: "footerTitle",
      title: "Footer Title",
      type: "string",
    },
    {
      name: "footerSubTitle",
      title: " Footer SubTitle",
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
