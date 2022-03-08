import Layout from "./../components/navbar/Layout";
import Masonry from "./../components/masonry/masonry";
import Hero from "../components/hero/hero";
import Testimonials from "../components/testimonials/testimonials";

export default function Home() {
  return (
    <>
      <Layout />
      <Hero />
      <Masonry />
      <Testimonials />
    </>
  );
}
