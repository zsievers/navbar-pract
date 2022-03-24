import Layout from "./../components/navbar/Layout";
import Services from "../components/services/services";
import Hero from "../components/hero/hero";
import Testimonials from "../components/testimonials/testimonials";

export default function Home() {
  return (
    <>
      <Layout />
      <Hero />
      <Services />
      <Testimonials />
    </>
  );
}
