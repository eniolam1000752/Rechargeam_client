import "./Title.scss";

export function Title({ text, hasUnderline, align }) {
  return (
    <div className="title">
      <span>{text}</span>
    </div>
  );
}
