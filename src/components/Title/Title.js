import "./Title.scss";

export function Title({ text, hasUnderline, align, children }) {
  return (
    <div className="title">
      {text ? <span>{text}</span> : children}
      <div
        className={
          align === "center"
            ? "underline-center"
            : align === "right"
            ? "underline-right"
            : null
        }
      />
    </div>
  );
}
