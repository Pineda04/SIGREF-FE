export const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  touched,
}) => {
  const autoComplete =
    type === "password"
      ? "current-password"
      : type === "text"
      ? "username"
      : undefined;

  return (
    <div className="mb-6 w-full">
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={label}
        autoComplete={autoComplete}
        className={`
          w-full px-4 py-4 font-roboto font-bold text-lg border-2 rounded-lg shadow-default my-3
          focus:outline-none focus:ring-2 focus:ring-background-primary focus:border-transparent
          ${error && touched ? "border-error" : "border-background-secondary"}
          text-general-secondary
        `}
      />
      {error && touched && <p className="text-error font-roboto text-md">{error}</p>}
    </div>
  );
};
