import { Block } from "payload/types";

const Quote: Block = {
  slug: "quote",
  labels: {
    singular: "quote",
    plural: "quotes",
  },
  fields: [
    {
      name: "backgroundColor",
      label: "Background Color",
      type: "radio",
      defaultValue: "None",
      options: [
        {
          label: "Red",
          value: "red",
        },
        {
          label: "Black",
          value: "black",
        },
        {
          label: "None",
          value: "none",
        },
      ],
      admin: {
        layout: "horizontal",
      },
    },
    {
      name: "quote",
      label: "Quote",
      type: "richText",
    },
  ],
};

export default Quote;
