import type { DayForecast } from "./WeekForecast";

type WeekForecastItemProps = {
  day: DayForecast;
};
function WeekForecastItem({ day }: WeekForecastItemProps) {
  return (
    <div className="bg-white/40 p-2 text-center rounded-lg flex flex-col items-center ">
      <p>
        {new Date(day.date).toLocaleString("en-US", {
          weekday: "short",
        })}
      </p>
      <img
        className="forecast-icon"
        src={day.day.condition.icon}
        alt={day.day.condition.text}
      />
      <div className="forecast-temps">
        <p className="forecast-temp-high">
          H {day.day.maxtemp_c.toFixed()}° c{" "}
        </p>
        <p className="forecast-temp-low">L {day.day.mintemp_c.toFixed()}° c</p>
      </div>
    </div>
  );
}
export default WeekForecastItem;
