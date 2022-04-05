import Layout from "./../components/navbar/Layout";
import Footer from "../components/footer/footer";
import Mailer from "../components/contact";
import Mailer2 from "../components/contact2";

export default function freeEstimate() {
  return (
    <>
      <Layout>
        <h1>Free Estimate</h1>
      </Layout>{" "}
      <Mailer />
      <Mailer2 />
      <Footer />
    </>
  );
}
