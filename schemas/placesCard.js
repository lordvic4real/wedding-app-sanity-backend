export default {
  name: "places",
  title: "Interested Places Around",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      title: "Description",
      name: "description",
      type: "text",
    },

    // {
    //   name: "image",
    //   title: "Image",
    //   type: "image",
    //   options: {
    //     hotspot: true,
    //   },
    // },
  ],
};
