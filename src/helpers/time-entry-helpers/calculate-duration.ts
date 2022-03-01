export const calculateDuration = (startTimestamp: string, endTimestamp: string) => {
  const startTimestampDate = new Date(startTimestamp);
  const endTimestampDate = new Date(endTimestamp);

  const duration = new Date(endTimestampDate.getTime() - startTimestampDate.getTime());

  return [duration, startTimestampDate, endTimestampDate];
};
