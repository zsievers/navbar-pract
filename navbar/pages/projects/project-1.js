import Layout from "../../components/Layout";

export default function Project1() {
  return (
    <>
      <Layout>
        <h1>First Project</h1>
      </Layout>
      <div className="container">
        <div className="grid-2">
          <img src={"./images/project1/IMG_1068.JPG"} className="image" />
          <img src={"./images/project1/IMG_1069.JPG"} className="image" />
          <img src={"./images/project1/IMG_1629.JPG"} className="image" />
          <img src={"./images/project1/IMG_1630.JPG"} className="image" />
        </div>
      </div>
    </>
  );
}
