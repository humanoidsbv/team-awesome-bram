export const formatDuration = (duration: number) => {
  const hours = Math.round(duration / 1000 / 60 / 60).toString();
  const minutes = Math.round((duration / 1000 / 60) % 60).toString();
  return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
};
