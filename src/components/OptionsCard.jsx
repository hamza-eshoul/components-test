// components
import RadioButton from "./RadioButton";
import CheckBox from "../components/Checkbox";
import Switch from "./Switch";

const CardRightSide = ({
  variant,
  isCardSelected,
  price,
  isReductionSwitch,
}) => {
  if (variant == "payment") {
    return (
      <div className="flex flex-col justify-center">
        <span className="text-[18px] font-semibold text-black">
          {price.amount}
        </span>

        {price.isHalfPayment && (
          <span className="text-[12px] text-[#5E5E5E]">Maintenant</span>
        )}
      </div>
    );
  }

  if (variant == "info") {
    return <RadioButton isChecked={isCardSelected} />;
  }

  if (variant == "reduction") {
    return (
      <>
        {!isReductionSwitch && <CheckBox isChecked={isCardSelected} />}
        {isReductionSwitch && <Switch isChecked={isCardSelected} />}
      </>
    );
  }
};

const CardLeftSide = ({ variant, isCardSelected, icon, reduction }) => {
  if (variant == "payment") {
    return <RadioButton isChecked={isCardSelected} />;
  }

  if (variant == "info") {
    return (
      <div className={`${isCardSelected ? "text-primary" : ""}`}>{icon}</div>
    );
  }

  if (variant == "reduction") {
    return (
      <div className="rounded-lg bg-[#E5E7EB] px-2 py-3 font-semibold">
        {reduction}
      </div>
    );
  }
};

const CardBody = ({ variant, title, description, knowMoreHref }) => {
  return (
    <div className="flex flex-col gap-[7px]">
      <span className="text-[18px] font-semibold">{title}</span>
      {description && (
        <p
          className={`${variant == "payment" ? "max-w- max-w-80 text-[12px]" : "max-w-md text-[14px]"}  text-[#5E5E5E]`}
        >
          {description}
          {knowMoreHref && (
            <a href={knowMoreHref} className="font-semibold text-primary">
              {" "}
              En savoir plus
            </a>
          )}
        </p>
      )}
    </div>
  );
};

const OptionsCard = ({
  variant,
  title,
  description,
  isCardSelected,
  price,
  knowMoreHref,
  icon,
  reduction,
  isReductionSwitch,
  onClick,
}) => {
  const containerStyles = `${isCardSelected ? "bg-gradient-to-r from-primary to-[#FE7C48] p-0.5" : "border-[2px] border-[#E5E8ED]"} cursor-pointer rounded-xl`;

  const cardLeftSideGap = {
    info: "gap-4",
    reduction: "gap-5",
    payment: "gap-7",
  };

  return (
    <article className={containerStyles} onClick={onClick}>
      <div className="flex items-center justify-between rounded-xl bg-white px-6 pb-7 pt-6">
        <div className={`flex items-center ${cardLeftSideGap[variant]}`}>
          <CardLeftSide
            variant={variant}
            isCardSelected={isCardSelected}
            icon={icon}
            reduction={reduction}
          />
          <CardBody
            variant={variant}
            title={title}
            description={description}
            knowMoreHref={knowMoreHref}
          />
        </div>
        <CardRightSide
          variant={variant}
          isCardSelected={isCardSelected}
          price={price}
          isReductionSwitch={isReductionSwitch}
        />
      </div>
    </article>
  );
};

export default OptionsCard;
