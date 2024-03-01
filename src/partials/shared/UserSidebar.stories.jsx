import UserSidebar from "./UserSidebar";

export default {
  title: "UserSidebar",
  component: UserSidebar,
  tags: ["autodocs"],
  args: {
    userType: "voyageur",
    user: {
      name: "John Doe",
      email: "moha.hameid@gmail.com",
    },
    isIdentityVerified: false,
    isEmailVerified: true,
    isPhoneVerified: false,
  },
  argTypes: {
    userType: {
      options: ["voyageur", "hote"],
      control: { type: "inline-radio" },
    },
    isIdentityVerified: {
      options: [true, false],
      control: { type: "boolean" },
    },
    isEmailVerified: {
      options: [true, false],
      control: { type: "boolean" },
    },
    isPhoneVerified: {
      options: [true, false],
      control: { type: "boolean" },
    },
  },
};

export const Component = (args) => <UserSidebar {...args} />;
