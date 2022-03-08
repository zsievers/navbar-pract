import Layout from "./../components/navbar/Layout";
import ImageSlider from "../components/imageSlider/imageSlider";
import { SliderData } from "../components/imageSlider/sliderData";

export default function projects() {
  return (
    <Layout>
      <ImageSlider slides={SliderData} />
    </Layout>
  );
}
