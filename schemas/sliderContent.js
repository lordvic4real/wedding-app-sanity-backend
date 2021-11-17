export default {
  name: "slides",
  title: "Carousel ",
  type: "document",

  fields: [
    {
      title: "Slider Images ",
      type: "image",
      name: "sliderImage",
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
      name: "weddingDate",
      title: "Wedding Date",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
        calendarTodayLabel: "Today",
      },
    },
  ],
  options: {
    hotspot: true,
  },
};
