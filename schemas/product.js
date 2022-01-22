export default {
  name: "product",
  title: "Product",
  type: "document",

  fields: [
    {
      title: "Product Image",
      type: "image",
      name: "image",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      type: "text",
      name: "description",
      title: "Description",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
  ],
  options: {
    hotspot: true,
  },
};
