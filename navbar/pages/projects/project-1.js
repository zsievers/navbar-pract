import Image from "next/image";

export default function firstProject() {
  return (
    <>
      <h1>First Project</h1>

      <Image src="/hero2wide.jpg" height={500} width={800} alt="Your Name" />
    </>
  );
}
