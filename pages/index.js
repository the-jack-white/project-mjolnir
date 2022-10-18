import { InitApp, getEntry } from "../core/main-application";

const Home = () => {
  return <></>;
};

export async function getServerSideProps() {
  const range = "settings";
  const service = await InitApp();
  const response = await getEntry(service, range);

  const data = response.data.values;
  const homePath = data.find((item) => item[0] === "homePath");

  return {
    redirect: {
      permanent: true,
      destination: `/${homePath[1]}`,
    },
  };
}

export default Home;
