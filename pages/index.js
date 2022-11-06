import Head from "next/head";

// Components
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spotify - Web App</title>
        <meta
          name="description"
          content="Spotify is a digital music service that gives you access to millions of songs."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-black h-screen overflow-hidden">
        <main>
          <Sidebar />
          {/* Center */}
        </main>
      </div>

      {/* Player */}
    </div>
  );
}
