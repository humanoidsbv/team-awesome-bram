export const calculateDuration = (startTimestamp: string, endTimestamp: string) => {
  const startTimestampDate: Date = new Date(startTimestamp);
  const endTimestampDate: Date = new Date(endTimestamp);

  const duration: Date = new Date(
    endTimestampDate.getTime() - startTimestampDate.getTime() - 3600000,
  );

  return [duration, startTimestampDate, endTimestampDate];
};
