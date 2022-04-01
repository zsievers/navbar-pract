import Layout from "./../components/navbar/Layout";
import Services from "../components/services/services";
import Hero from "../components/hero/hero";
import Testimonials from "../components/testimonials/testimonials";
import Footer from "../components/footer/footer";
export default function Home() {
  return (
    <>
      <Layout />
      <Hero />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}
