export default {
  name: "card",
  title: "Card",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subTitle",
      title: "SubTitle",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },

    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
