export const timestampToDateString = (timestamp: string, options: {}) => {
  return new Date(timestamp).toLocaleDateString("en-NL", options);
};
