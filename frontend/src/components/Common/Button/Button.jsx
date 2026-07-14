import "./Button.css";

function Button({
  text,
  onClick,
  dataBsToggle,
  dataBsTarget,
}) {
  return (
    <button
      className="custom-button"
      onClick={onClick}
      data-bs-toggle={dataBsToggle}
      data-bs-target={dataBsTarget}
    >
      {text}
    </button>
  );
}

export default Button;