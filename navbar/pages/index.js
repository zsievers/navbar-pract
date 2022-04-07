import Layout from "./../components/navbar/Layout";
import Services from "../components/services/services";
import Hero from "../components/main-hero/carousel";
import Testimonials from "../components/testimonials/testimonials";
import Footer from "../components/footer/footer";
import MainInfo from "../components/main-info/info";
export default function Home() {
  return (
    <>
      <Layout />
      <Hero />
      <MainInfo />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}
