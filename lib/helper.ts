export const  getIconName = (fileName: string, darkMode: boolean) => {
  if (darkMode)
    return `/${fileName}-dark.svg`;

  return `/${fileName}.svg`;
}