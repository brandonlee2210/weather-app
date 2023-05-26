import WeekForecastItem from "./WeekForecastItem";

export type DayForecast = {
  date: string;
  day: {
    condition: {
      icon: string;
      text: string;
    };
    maxtemp_c: number;
    mintemp_c: number;
  };
};

type WeekForecastProps = {
  data: {
    forecast?: {
      forecastday: DayForecast[];
    };
  };
};

const WeekForecast = ({ data }: WeekForecastProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 w-full">
      {data.forecast
        ? data.forecast.forecastday.map((day, index) => (
            <WeekForecastItem day={day} key={index} />
          ))
        : null}
    </div>
  );
};

export default WeekForecast;
