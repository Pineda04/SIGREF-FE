export const Button = ({
  text,
  type = "button",
  onClick,
  fullWidth = false,
  bgColor = "bg-background-primary",
  textColor = "text-third",
  hoverColor = "hover:bg-background-secondary",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        ${fullWidth ? "w-full" : "w-auto"} 
        w-100
        ${bgColor} ${textColor} ${hoverColor} 
        py-3 px-6 rounded-xl font-roboto font-semibold 
        text-lg sm:text-xl md:text-2xl shadow-default 
        transition duration-200
      `}
    >
      {text}
    </button>
  );
};
