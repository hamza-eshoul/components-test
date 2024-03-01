import Card from "./Card";
import { data } from "../data/Data";
import "../../src/index.css";

export default {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    direction: "default",
    data: data,
  },
  argTypes: {
    direction: {
      options: ["default", "row"],
      control: { type: "inline-radio" },
    },
  },
};

export const Component = (args) => (
  <div style={{ margin: "10px" }}>
    <Card {...args} />
  </div>
);
