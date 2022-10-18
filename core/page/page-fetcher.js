import { InitApp, getEntry } from "../../core/main-application";
import { DataMapper } from "../../core/utils/data-mapper";

export const fetchPageProps = async (context, sheet) => {
  const service = await InitApp();
  const response = await getEntry(service, sheet);

  const data = response.data.values;
  const headings = data[0];
  const mapped = await DataMapper(data, headings);

  console.log("MAPPED: ", mapped);

  return {
    data: mapped,
  };
  // return {
  //   context,
  //   site: {
  //     title: "My App Title",
  //     id: "site-id",
  //   },
  //   pageLayout: {
  //     header: {
  //       id: "header-id",
  //       type: "header",
  //       fields: {
  //         title: "Header",
  //         imageUrl: "test_url",
  //       },
  //     },
  //     renderZones: [
  //       {
  //         id: "renderZone-id",
  //         components: [
  //           {
  //             id: "component-id",
  //             type: "banner",
  //             fields: {
  //               title: "banner-title",
  //               imageUrl: "background-image",
  //             },
  //           },
  //         ],
  //       },
  //     ],
  //     footer: {
  //       id: "footer-id",
  //       type: "footer",
  //       fields: {
  //         title: "Footer",
  //         imageUrl: "test_url",
  //       },
  //     },
  //   },
  // };
};
