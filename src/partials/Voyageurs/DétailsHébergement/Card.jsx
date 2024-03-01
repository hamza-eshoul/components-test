const Card = ({ icon, title, detail }) => {
  return (
    <article className="flex flex-col gap-6 rounded-xl border-[1px] border-[#E5E8ED] pb-9 pl-6 pr-[60px] pt-5">
      {icon}
      <div className="flex flex-col gap-2">
        <span className="font-semibold">{title}</span>
        <span className="text-sm">{detail}</span>
      </div>
    </article>
  );
};

export default Card;
