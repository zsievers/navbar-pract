import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.css";
// import Head from "next/head";
// import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
