import Head from "next/head";
import Canvas from "../components/Canvas";
import Navbar from "../components/Navbar";
import TeamsSection from "../components/TeamsSection";
import Footer from "../components/Footer";

function Teams() {
  return (
    <div>
      <Head>
        <title>Raiona || Teams</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Canvas />
      <Navbar />
      <TeamsSection />
      <Footer />
    </div>
  );
}

export default Teams;
