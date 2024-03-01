import { twMerge } from "tailwind-merge";

/** A Radio Button that can be checked or unchecked through the isChecked prop.
 */
const RadioButton = ({ isChecked, className }) => {
  const buttonLayout = isChecked ? "flex items-center justify-center" : "";

  const buttonColors = isChecked ? "bg-primary" : "bg-white";

  const buttonBorder = isChecked
    ? ""
    : "border-[1px] border-[#DDDDDD] hover:border-[#222222]";

  const buttonStyles = `h-6 w-6 rounded-full ${buttonLayout} ${buttonColors} ${buttonBorder}`;
  return (
    <button className={twMerge(buttonStyles, className)}>
      {isChecked && <div className="h-2 w-2 rounded-full bg-white" />}
    </button>
  );
};

export default RadioButton;
