export const prepareTimeObject = (unix: number) => {
  const dateMain = new Date(unix * 1000);

  return {
    hours: dateMain.getHours(),
    dayName: dateMain.toLocaleDateString("en-US", { weekday: "long" }),
    date: dateMain.getDate(),
    month: dateMain.toLocaleString("default", { month: "long" }),
  };
};
