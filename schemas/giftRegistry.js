export default {
  title: "Gift Registry",
  name: "giftRegistry",
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
      name: "gift",
      title: "Gift",
      type: "array",
      of: [
        { type: "image" },
        {
          title: "Gift Detail ",
          type: "object",
          fields: [
            {
              type: "number",
              name: "price",
              title: "Price",
            },
            {
              type: "string",
              name: "title",
              title: "Gift Title",
            },
          ],
        },
      ],
    },
    {
      name: "FooterTitle",
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
