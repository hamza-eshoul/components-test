import IconButton from "./IconButton";

export default {
  title: "IconButton",
  component: IconButton,
  tags: ["autodocs"],
  args: {
    icon: "default",
    variant: "primary",
    size: "regular",
    isFullyRounded: true,
  },
  argTypes: {
    icon: {
      options: ["default", "Custom Icon"],
      control: { type: "inline-radio" },
    },
    variant: {
      options: ["primary", "secondary"],
      control: { type: "inline-radio" },
    },
    size: {
      options: ["regular", "small"],
      control: { type: "inline-check" },
    },
    isFullyRounded: {
      options: [true, false],
      control: { type: "boolean" },
    },
  },
};

export const Component = (args) => <IconButton {...args} />;
