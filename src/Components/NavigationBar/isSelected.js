export const isSelected = (pathName, linkPath) => {
  const isRootPath = linkPath === pathName;
  return isRootPath ? true : false;
};
