import { InitApp, getEntry } from "../../core/main-application";
import { DataMapper } from "../../core/utils/data-mapper";

const Posts = ({ posts }) => {
  return posts.map((post, i) => (
    <div key={i} style={{ border: "1px solid black" }}>
      <h1>{post[0].Title}</h1>
    </div>
  ));
};

export async function getServerSideProps() {
  const range = "Posts";
  const service = await InitApp();
  const response = await getEntry(service, range);

  const data = response.data.values;
  const headings = data[0];

  console.log("DATA: ", data);

  const mapped = await DataMapper(data, headings);

  console.log("MAPPED: ", mapped);

  // const post = mapped.map((post) => {
  //   console.log("POST: ", post);
  // });

  return {
    props: {
      posts: mapped,
    },
  };
}

export default Posts;
