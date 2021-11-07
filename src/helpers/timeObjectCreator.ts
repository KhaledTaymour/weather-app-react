export interface preparedTimeObjectInterface {
  hours: number;
  dayName: string;
  date: number;
  month: string;
}

export const prepareTimeObject = (
  unix: number
): preparedTimeObjectInterface => {
  const dateMain = new Date(unix * 1000);

  return {
    hours: dateMain.getHours(),
    dayName: dateMain.toLocaleDateString("en-US", { weekday: "long" }),
    date: dateMain.getDate(),
    month: dateMain.toLocaleString("default", { month: "long" }),
  };
};
