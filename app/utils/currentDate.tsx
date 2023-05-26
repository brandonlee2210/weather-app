export const getCurrentDate = () => {
  const currentDate = new Date().toLocaleDateString("vn-VN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return currentDate;
};
