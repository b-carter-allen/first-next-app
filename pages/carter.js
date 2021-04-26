import Head from "next/head";
import Title from "../components/title";

export default function Home() {
  return (
    <div className="bg-green-50 min-h-screen">
      <Head>
        <title>Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center">
        <Title name="Carter" />
      </main>
    </div>
  );
}
