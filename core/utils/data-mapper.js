export const DataMapper = (data, headings) => {
  return new Promise((resolve, reject) => {
    try {
      console.log("HEADINGS: ", headings);
      data.shift();
      const mainMap = [];
      for (let i = 0; i < headings.length; i++) {
        console.log("HEADIUNG ", headings[i]);
        mainMap.push({ [headings[i]]: headings[i] });
      }

      const mapped = data.map((items, idx) => {
        console.log("Items: ", items);
        // console.log("HEADING: ", headings[idx]);
        // return items.map((item) => {
        //   return item;
        // });
        // const index = items.length - 1;
        // console.log("index: ", index);
        // return {
        //   [items[0]]: items[1],
        // };
        return items.map((item, i) => {
          console.log("item: ", item, i);
          return {
            [headings[i]]: item,
          };
        });
      });

      console.log("MAPPED: ", mapped);

      console.log("MAIN MAP: ", mainMap);

      // resolve(mapped);
    } catch (error) {
      reject(error);
    }
  });
};
