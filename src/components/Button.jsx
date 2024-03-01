import { twMerge } from "tailwind-merge";

// icons
import { ArrowDown } from "../assets/icons";
import { Settings } from "../assets/icons";

/** A Button Component capturing the main use cases of buttons in the project.
 *Most of the buttons are either primary or secondary buttons with various other customizable props. The remaining different buttons are handled through the tailwind merge package that allows for more customization if it is required.
 */
const Button = ({
  size,
  variant,
  isFullyRounded,
  iconLeft,
  iconRight,
  className,
  onClick,
  children,
}) => {
  const buttonSize = {
    regular: "py-3 px-[23px]",
    large: "py-4 px-6",
    small: "py-1 px-2",
  };

  const buttonVariant = {
    primary: "bg-primary text-white hover:bg-[#6467F2]",
    secondary:
      "bg-white text-black hover:bg-[#F9FAFB] border-[1px] border-[#E5E7EB] hover:border-[#D1D5DB]",
  };

  const buttonRadius = {
    primary: `${isFullyRounded ? "rounded-full" : "rounded-lg"}`,
    secondary: `${isFullyRounded ? "rounded-full" : "rounded-md"}`,
  };

  const buttonLayout = iconLeft || iconRight ? "flex gap-2" : "";

  const buttonStyles = `text-sm font-medium transition duration-100 ease-out ${buttonSize[size]} ${buttonVariant[variant]} ${buttonRadius[variant]} ${buttonLayout}`;

  return (
    <button className={twMerge(buttonStyles, className)} onClick={onClick}>
      {iconLeft && iconLeft == "default" ? <Settings /> : iconLeft}
      <span>{children}</span>
      {iconRight && iconRight == "default" ? <ArrowDown /> : iconRight}
    </button>
  );
};

Button.defaultProps = {
  size: "regular",
  variant: "primary",
  iconLeft: null,
  iconRight: null,
  isFullyRounded: false,
};

export default Button;
