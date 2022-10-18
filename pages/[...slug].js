import Head from "next/head";
import { fetchPageProps } from "../core/page/page-fetcher";

// import PageRenderer from "../components/renderers/PageRenderer/PageRenderer";

const SlugLandingPage = ({ pageProps, siteSettings }) => {
  console.log("LayooutPage: ", pageProps);
  console.log("site: ", siteSettings);

  return (
    <div>
      {/* <Head>
        <title>{site.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <div>
        <p>RENDER PAGE RENDER</p>
      </div>
      {/* <PageRenderer pageLayout={pageLayout} site={site} /> */}
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  console.log("PARAMS: ", params);
  console.log("SLUG: ", params.slug[0]);
  const sheet = params.slug[0];
  const pageProps = await fetchPageProps(params, sheet);
  const siteSettings = await fetchPageProps(params, "settings");
  console.log("PAGE PROPS: ", JSON.stringify(pageProps));
  console.log("PAGE SETTINGS: ", JSON.stringify(siteSettings));

  return {
    props: {
      pageProps,
      siteSettings,
    },
  };
}

export default SlugLandingPage;
