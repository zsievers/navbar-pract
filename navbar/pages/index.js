import Layout from "./../components/navbar/Layout";
import Services from "../components/services/services";
import Hero from "../components/main-hero/carousel";
import Footer from "../components/footer/footer";
import MainInfo from "../components/main-info/info";
import Testimonial from "../components/testimonial/testimonial";
import Fbanner from "../components/footer-banner/fbanner";
export default function Home() {
  return (
    <>
      <Layout />
      <Hero />
      <MainInfo />
      <Services />
      <Fbanner />
      <Testimonial />
      <Footer />
    </>
  );
}
