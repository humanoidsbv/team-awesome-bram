export const timestampToDateString = (timestamp: string, options: {}) => {
  return new Date(timestamp).toLocaleDateString("us-NL", options);
};
