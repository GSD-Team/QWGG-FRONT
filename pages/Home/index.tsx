import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Image src="/image/logo.png" layout='fill'></Image>
    </div>
  );
}
