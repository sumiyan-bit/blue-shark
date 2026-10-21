// Calcula se o Blue Shark está aberto agora, sempre no horário de Brasília
// (não importa o fuso de quem está vendo o site).
// Regra: terça a domingo, 18h às 23h, fechado no último domingo do mês.

const OPEN_HOUR = 18;
const CLOSE_HOUR = 23;
const CLOSED_WEEKDAY = 1; // segunda-feira

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function nowInSaoPaulo() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date());

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return {
    weekday: WEEKDAYS.indexOf(get("weekday")),
    year: Number(get("year")),
    month: Number(get("month")),
    day: Number(get("day")),
    hour: Number(get("hour")),
  };
}

function isLastSundayOfMonth(year: number, month: number, day: number) {
  const daysInMonth = new Date(year, month, 0).getDate();
  return day + 7 > daysInMonth;
}

export type OpenStatus = "open" | "opens-today" | "closed";

export function getOpenStatus(): OpenStatus {
  const { weekday, year, month, day, hour } = nowInSaoPaulo();
  if (weekday === CLOSED_WEEKDAY) return "closed";
  if (weekday === 0 && isLastSundayOfMonth(year, month, day)) return "closed";
  if (hour < OPEN_HOUR) return "opens-today";
  return hour < CLOSE_HOUR ? "open" : "closed";
}
