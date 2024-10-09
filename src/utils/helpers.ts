import { daysOfWeek } from "./constants";

export function DayOfWeek(arr: string[], i: number): string {
  let date;
  if (i === 0) {
    date = "Сегодня";
  } else if (i === 1) {
    date = "Завтра";
  } else {
    const dateConv = new Date(arr[i]);
    date = daysOfWeek[dateConv.getDay()];
  }

  return date;
}

export function WindDirection(
  direction: number,
  fullLabel: boolean = false
): string {
  switch (true) {
    case (direction >= 337.5 && direction <= 360) ||
      (direction < 22.5 && direction >= 0):
      return fullLabel ? "Северный" : "С";
    case direction >= 22.5 && direction < 67.5:
      return fullLabel ? "Северо-восточный" : "СВ";
    case direction >= 67.5 && direction < 112.5:
      return fullLabel ? "Восточный" : "В";
    case direction >= 112.5 && direction < 157.5:
      return fullLabel ? "Юго-восточный" : "ЮВ";
    case direction >= 157.5 && direction < 202.5:
      return fullLabel ? "Южный" : "Ю";
    case direction >= 202.5 && direction < 247.5:
      return fullLabel ? "Юго-западный" : "ЮЗ";
    case direction >= 247.5 && direction < 292.5:
      return fullLabel ? "Западный" : "З";
    case direction >= 292.5 && direction < 337.5:
      return fullLabel ? "Северо-западный" : "СЗ";
    default:
      return "Неизвестно";
  }
}

export function filterWeatherData(
  arr: number[],
  timeArr: string[],
  currentTime: Date
): number[] {
  return arr.filter(
    (_data, i) => new Date(timeArr[i]).getTime() > currentTime.getTime()
  );
}
