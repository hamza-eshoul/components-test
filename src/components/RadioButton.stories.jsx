import RadioButton from "./RadioButton";

export default {
  title: "RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
  args: {
    isChecked: true,
  },
  argTypes: {
    isChecked: {
      options: [true, false],
      control: { type: "boolean" },
    },
  },
};

export const Component = (args) => <RadioButton {...args} />;
