import {
  TiWeatherCloudy,
  TiWeatherPartlySunny,
  TiWeatherShower,
  TiWeatherSnow,
  TiWeatherStormy,
  TiWeatherSunny,
} from "react-icons/ti";
import { RiFoggyLine } from "react-icons/ri";

export function dayWeatherIcon(code: number): React.ReactNode {
  switch (code) {
    case 0:
    case 1:
      return <TiWeatherSunny />;
    case 2:
      return <TiWeatherPartlySunny />;
    case 3:
      return <TiWeatherCloudy />;
    case 45:
    case 48:
      return <RiFoggyLine />;
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      return <TiWeatherShower />;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return <TiWeatherSnow />;
    case 95:
    case 96:
    case 99:
      return <TiWeatherStormy />;

    default:
      return <TiWeatherSunny />;
  }
}
