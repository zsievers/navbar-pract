import Layout from "./../components/navbar/Layout";
import Footer from "../components/footer/footer";
import Mailer from "../components/contact/contact1";
// import Mailer2 from "../components/contact/contact2";

export default function freeEstimate() {
  return (
    <>
      <Layout />

      <Mailer />
      {/* <Mailer2 /> */}
      <Footer />
    </>
  );
}
