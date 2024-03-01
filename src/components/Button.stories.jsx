import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Default Button",
    variant: "primary",
    size: "regular",
    isFullyRounded: false,
    iconLeft: null,
    iconRight: null,
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "inline-radio" },
    },
    size: {
      options: ["regular", "large", "small"],
      control: { type: "inline-check" },
    },
    isFullyRounded: {
      options: [true, false],
      control: { type: "boolean" },
    },
    iconLeft: {
      options: ["default", "Custom Icon", null],
      control: { type: "inline-radio" },
    },
    iconRight: {
      options: ["default", "Custom Icon", null],
      control: { type: "inline-radio" },
    },
  },
};

export const Component = (args) => <Button {...args} />;
