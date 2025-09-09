/**
 * Componente reutilizable de botón con estilos variables y personalizables.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {"primary" | "secondary" | "icon" | "custom"} [props.variant="primary"] - Tipo de variante del botón.
 * @param {string} [props.text] - Texto del botón (alternativa a children).
 * @param {React.ReactNode} [props.icon] - Icono opcional para el botón.
 * @param {React.ReactNode} [props.children] - Contenido del botón (prioritario sobre text).
 * @param {function} [props.onClick] - Función que se ejecuta al hacer clic.
 * @param {boolean} [props.disabled=false] - Indica si el botón está deshabilitado.
 * @param {string} [props.type="button"] - Tipo de botón (button, submit, reset).
 * @param {boolean} [props.fullWidth=false] - Si el botón debe ocupar todo el ancho disponible.
 * @param {boolean} [props.shadow=true] - Mostrar botón con sombra.
 * @param {string} [props.className=""] - Clases CSS adicionales.
 * @param {string} [props.bgColor="bg-background-primary"] - Color de fondo personalizado (solo variant="custom").
 * @param {string} [props.textColor="text-third"] - Color de texto personalizado (solo variant="custom").
 * @param {string} [props.hoverColor="hover:bg-background-secondary"] - Color al pasar el cursor (solo variant="custom").
 *
 * @returns {JSX.Element} Botón reutilizable con estilos y variantes.
 */

export const ThemedButton = ({
  variant = "primary",
  text,
  icon,
  children,
  onClick,
  disabled = false,
  type = "button",
  fullWidth = false,
  shadow = true,
  className = "",
  bgColor = "bg-background-primary",
  textColor = "text-third",
  hoverColor = "hover:bg-background-secondary",
}) => {
  const content = children || text;

  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-xl py-3 px-6 font-roboto font-semibold text-lg sm:text-xl md:text-2xl transition duration-200";

  const variants = {
    primary: "bg-background-primary text-white hover:bg-background-secondary",
    secondary: "bg-white border border-gray-400 text-gray-700 hover:bg-gray-100",
    icon: "bg-background-primary text-white hover:bg-background-secondary px-4",
    custom: `${bgColor} ${textColor} ${hoverColor}`,
  };

  const widthClass = fullWidth ? "w-full" : "w-auto";
  const shadowClass = shadow ? "shadow-default" : "";
  const disabledClass = disabled ? "cursor-not-allowed bg-gray-300 text-black" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${widthClass}
        ${shadowClass}
        ${disabledClass}
        ${className}
      `}
    >
      {icon && <span>{icon}</span>}
      {content}
    </button>
  );
};