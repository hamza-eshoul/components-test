import Switch from "./Switch";

export default {
  title: "Switch",
  component: Switch,
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

export const Component = (args) => <Switch {...args} />;
