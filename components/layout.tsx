import Head from "next/head";

interface IProps {
  children: JSX.Element;
}

export default function Layout({ children }: IProps) {
  return (
    <div className="h-full">
      <Head>
        <title>qwqw.gg</title>
      </Head>
      {children}
    </div>
  );
}
