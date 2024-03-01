import CheckBox from "./Checkbox";

export default {
  title: "CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
  args: {
    isChecked: true,
    isVerification: false,
  },
  argTypes: {
    isChecked: {
      options: [true, false],
      control: { type: "boolean" },
    },
    isVerification: {
      options: [true, false],
      control: { type: "boolean" },
    },
  },
};

export const Component = (args) => <CheckBox {...args} />;
