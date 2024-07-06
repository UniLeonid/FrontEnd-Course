import { MouseEventHandler } from "react";

export default function Button({
  selected,
  onClick,
  children,
}: {
  selected?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  children?: React.ReactNode;
}) {
  return (
    <a
      className={selected ? "button selected-button" : "button"}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
