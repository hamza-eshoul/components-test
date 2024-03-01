import OptionsCard from "../components/OptionsCard";

export default {
  title: "OptionsCard",
  component: OptionsCard,
  tags: ["autodocs"],
  args: {
    variant: "primary",
    title: "Options Card",
    description: "Options Card Description",
    isCardSelected: true,
    price: { amount: "100", isHalfPayment: true },
    knowMoreHref: "",
    icon: "Custom Icon",
    reduction: "100$",
    isReductionSwitch: false,
  },
  argTypes: {
    variant: {
      options: ["payment", "info", "reduction"],
      control: { type: "inline-radio" },
    },
    isCardSelected: {
      options: [true, false],
      control: { type: "boolean" },
    },
  },
};

export const Component = (args) => (
  <div style={{ maxWidth: "550px" }}>
    <OptionsCard {...args} />
  </div>
);
