import Time from "@/types/time";

function getCurrentTime() {
  const days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const DATE = new Date();

  const time: Time = {
    day: days[DATE.getDay()],
    date:  DATE.getDate(),
    month: months[DATE.getMonth()],
    year: DATE.getFullYear()
  }

  const formatTime = `${time.day}, ${time.month} ${time.date}, ${time.year}`
  return formatTime
}


export default getCurrentTime;