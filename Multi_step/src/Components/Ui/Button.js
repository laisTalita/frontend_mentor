function Button({children, onClick, className, disabled }) {
  return (
    <button
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
