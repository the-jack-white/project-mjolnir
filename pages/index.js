import { InitApp, getEntry } from "../core/main-application";

const Home = () => {
  return <></>;
};

export async function getServerSideProps() {
  const range = "Settings";
  // const ranges = ["Settings!A1:B1", "Settings!A4:B4"];
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
