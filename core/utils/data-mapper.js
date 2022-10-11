export const DataMapper = (data) => {
  if (data) {
    const headings = data[0];
    data.shift();
    const mapped = data.map((items) => {
      return items.map((item, i) => {
        return {
          [headings[i]]: item,
        };
      });
    });
    return mapped;
  }
};
