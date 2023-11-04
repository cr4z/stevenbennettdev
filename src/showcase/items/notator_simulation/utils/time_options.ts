function formatHour(hourIn24: number): string {
  const hourIn12 = hourIn24 % 12 === 0 ? 12 : hourIn24 % 12;
  return hourIn12.toString();
}

function formatMinute(minute: number): string {
  return minute.toString().padStart(2, "0"); // Pad the minute to ensure two digits
}

function getAmOrPm(hourIn24: number): string {
  return hourIn24 < 12 ? "AM" : "PM";
}

function createTimeOptions(minuteIncrement: number): string[] {
  const timeOptions: string[] = [];
  const hourIncrement = 1;

  for (let hour = 0; hour < 24; hour += hourIncrement) {
    for (let minute = 0; minute < 60; minute += minuteIncrement) {
      const formattedHour = formatHour(hour);
      const formattedMinute = formatMinute(minute);
      const amPm = getAmOrPm(hour);
      const time = `${formattedHour}:${formattedMinute} ${amPm}`;
      timeOptions.push(time);
    }
  }

  return timeOptions;
}

const minuteIncrement = 15;
export const timeOptions = createTimeOptions(minuteIncrement);
