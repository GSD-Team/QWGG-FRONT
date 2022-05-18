import Image from "next/image";
import Layout from "components/layout";
import Search from "components/Home/Search";

let style={
  filter:'opacity(0.5)'
}

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="logo flex justify-center mt-52 mb-10">
          <Image src="/image/logo.png" width={450} height={67}></Image>
        </div>
        {/* search */}
        <Search />
        <div className="flex items-end justify-end mt-32">
          <Image src="/image/cover3.png" width={400} height={400} style={style}></Image>
        </div>
      </div>
    </Layout>
  );
}
