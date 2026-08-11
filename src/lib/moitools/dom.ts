export const set = (id: string, value: string): void => {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
};
