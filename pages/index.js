import { useState } from "react";
import Head from "next/head";
import React from "react";
import Title from "../components/title";

export default function Home() {
  const [name, setName] = useState("Bayley");

  return (
    <div className="bg-green-50">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <Title name={name} />
        <p>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </p>
      </main>
    </div>
  );
}
