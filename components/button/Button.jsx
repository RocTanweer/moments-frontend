function Button({ size, type, cat, block, children }) {
  const bgColor = `${cat === "primary" ? "bg-primary-900 hover:bg-primary-700" : "bg-secondary-900 hover:bg-secondary-700"}`;
  const structure = `${size === "md" ? "py-2 px-4" : "py-1.5 px-3"} ${block ? "w-full" : null}  rounded-md shadow-md`;
  const text = `text-white`;

  return (
    <button className={`${structure} ${text} ${bgColor}`} type={type && type}>
      {" "}
      {children}
    </button>
  );
}

export default Button;
