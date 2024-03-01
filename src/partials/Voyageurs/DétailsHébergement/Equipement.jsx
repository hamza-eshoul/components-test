const Equipement = ({ icon, text, isAvailable }) => {
  return (
    <article className="flex items-center gap-3.5">
      <div className={`${!isAvailable && "text-[#6B7280]"}`}>{icon}</div>

      <span className={`${!isAvailable && "text-[#6B7280] line-through"}`}>
        {text}
      </span>
    </article>
  );
};

Equipement.defaultProps = {
  icon: null,
  text: "",
  isAvailable: true,
};

export default Equipement;
