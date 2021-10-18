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
          type: "image",
          title: "Image",
          name: "accImg",
        },
        {
          title: "Accomodation Info",
          name: "accomodationIfo",
          type: "object",
          fields: [
            {
              title: "Title",
              name: "title",
              type: "string",
            },
            {
              title: "Description",
              name: "description",
              type: "string",
            },
          ],
        },
        // {
        //   type: "string",
        //   title: "Accomodation Title",
        //   name: "accomodationTitle",
        // },
        // {
        //   type: "string",
        //   title: "Accomodation Description",
        //   name: "accomodationDescription",
        // },
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
