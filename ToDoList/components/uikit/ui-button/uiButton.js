import { createElement } from "../../../model/createElement.js";
/**
 *
 * size: lg md
 * @param {{
 * children: any,
 * className: string,
 * size: 'md' | 'lg',
 * variant: 'primary' | 'outline'
 * type: 'button' | 'submit' | 'reset'
 * }} props
 */

createElement;

export function UiButton({
  children,
  className,
  size,
  variant,
  onclick,
  type = "button ",
}) {
  const buttonClassName = clsx(
    className,
    "to-do_button",
    {
      md: "md_btn",
      lg: "lg_btn",
    }[size],
    {
      primary: "primary_btn",
      outline: "outline_btn",
    }[variant]
  );
  return createElement(
    "button",
    {
      className: buttonClassName,
      size,
      variant,
      onclick,
      type: type,
    },
    children
  );
}
