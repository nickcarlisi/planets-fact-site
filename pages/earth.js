import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Nav from "../components/Header.js";
import data from "/data/data.json";
import PlanetDescription from "../components/PlanetDescription";
import Stats from "../components/Stats";

export default function Earth() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Planets | Earth</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav activepage="earth" />
        <PlanetDescription
          planetName={data[2].name}
          planetImg={data[2].images.planet}
          internalImg={data[2].images.internal}
          geologyImg={data[2].images.geology}
          overviewContent={data[2].overview.content}
          structureContent={data[2].structure.content}
          geologyContent={data[2].geology.content}
          overviewSrc={data[2].overview.source}
          structureSrc={data[2].structure.source}
          geologySrc={data[2].geology.source}
        />
        <Stats
          rotationTime={data[2].rotation}
          revolutionTime={data[2].revolution}
          radius={data[2].radius}
          temperature={data[2].temperature}
        />
      </main>
    </div>
  );
}
