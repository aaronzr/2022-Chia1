import "./button.css";
import Button from "react-bootstrap/Button";

/**
 * Primary Button
 * @param {function} onClick function to invoke when click button
 * @param {element} children elements to display in button (can include icon)
 * @returns primary button
 */
export function PButton({ onClick, children }) {
  return (
    <Button variant="primary" className="btn btn-primary h6" onClick={onClick}>
      {children}
    </Button>
  );
}

/**
 * Secondary Button
 * The text needs to be surrounded by a <span> tag
 * @param {function} onClick function to invoke when click button
 * @param {element} children elements to display in button (can include icon)
 * @returns secondary button
 */
export function SButton({ onClick, children, disabled }) {
  return (
    <Button
      variant="secondary"
      className="btn btn-secondary h6"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}

/**
 * Tertiary Button
 * The text needs to be surrounded by a <span> tag
 * @param {function} onClick function to invoke when click button
 * @param {element} children elements to display in button (can include icon)
 * @returns tertiary button
 */
export function TButton({ onClick, children }) {
  return (
    <Button
      variant="secondary"
      className="btn btn-tertiary h6"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}