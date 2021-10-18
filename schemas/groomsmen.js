export default {
  title: "Groomsmen",
  name: "groomsmen",
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
      name: "men",
      title: "Groomsmen",
      type: "array",
      of: [
        {
          type: "image",
        },
        {
          title: "Card Detail",
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
            },
            {
              name: "description",
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
