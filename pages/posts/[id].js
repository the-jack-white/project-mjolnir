import { InitApp, getEntry } from "../../core/main-application";

export async function getServerSideProps({ query }) {
  const { id } = query;
  const range = `Posts!A${id}:C${id}`;

  const service = await InitApp();
  const response = await getEntry(service, range);

  console.log("RESPONSE: ", response);
  console.log("RESPONSE data: ", response.data);
  console.log("RESPONSE VALUES: ", response.data.values);

  const data = response.data.values;

  if (data) {
    const [title, slug, content] = data[0];

    return {
      props: {
        title,
        slug,
        content,
      },
    };
  } else {
    return {
      redirect: {
        permanent: false,
        destination: `/${voltaneApplication.homePath}`,
      },
    };
  }
}

export default function Post({ title, slug, content }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{slug}</h3>
      <p>{content}</p>
    </div>
  );
}
