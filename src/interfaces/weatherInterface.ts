//#region for the ones coming from the API
export interface HourTempMainInterface {
  grnd_level?: number;
  humidity?: number;
  pressure?: number;
  sea_level?: number;
  temp: number;
  temp_kf?: number;
  temp_max: number;
  temp_min: number;
}

export interface HourTempInterface {
  dt: number;
  main: HourTempMainInterface;
  weather: [{ id: number; main: string; description: string; icon: string }];
  clouds: { all: number };
  wind: { speed: number; deg: number };
  sys: { pod: number };
  dt_txt: string;
}
//#endregion

export default interface weatherHourInterface {
  dt: number;
  hours: number;
  dayName: string;
  date: number;
  month: string;
  temp: number;
  tempMax: number;
  tempMin: number;
  condition: string;
  isSelected: boolean;
}

export interface weatherDictionaryInterface {
  [key: string | number]: weatherHourInterface;
}

export interface weatherReducerInterface {
  weatherDictionary: weatherDictionaryInterface;
  selectedCardDt: number;
}
