export const calculateDuration = (startTimestamp: string, endTimestamp: string) => {
  const startTimestampDate = new Date(startTimestamp);
  const endTimestampDate = new Date(endTimestamp);

  const duration = new Date(endTimestampDate.getTime() - startTimestampDate.getTime() - 3600000);

  return [duration, startTimestampDate, endTimestampDate];
};
