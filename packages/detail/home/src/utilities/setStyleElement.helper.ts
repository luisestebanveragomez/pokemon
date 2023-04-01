export const setStyleElementHelper = (
  element: string,
  property: string,
  style: string
): void => {
  const el: HTMLElement = document.querySelector(element);
  el.style[property] = style;
};
