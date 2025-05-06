export default function getElapsedTime(dateString) {
  const now = new Date();
  const postDate = new Date(dateString);
  const seconds = Math.floor((now - postDate) / 1000);

  if (seconds < 5) return "just now";

  const intervals = {
    year: 31536000,
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const interval = seconds / secondsInUnit;
    if (interval >= 1) {
      const rounded = Math.floor(interval);
      return `${rounded} ${unit}${rounded !== 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}
