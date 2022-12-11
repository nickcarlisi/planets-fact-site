import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Nav from "../components/Header.js";
import data from "/data/data.json";
import PlanetDescription from "../components/PlanetDescription";
import Stats from "../components/Stats";

export default function Mars() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Planets | Mars</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav activepage="mars" />
        <PlanetDescription
          planetName={data[3].name}
          planetImg={data[3].images.planet}
          internalImg={data[3].images.internal}
          geologyImg={data[3].images.geology}
          overviewContent={data[3].overview.content}
          structureContent={data[3].structure.content}
          geologyContent={data[3].geology.content}
          overviewSrc={data[3].overview.source}
          structureSrc={data[3].structure.source}
          geologySrc={data[3].geology.source}
        />
        <Stats
          rotationTime={data[3].rotation}
          revolutionTime={data[3].revolution}
          radius={data[3].radius}
          temperature={data[3].temperature}
        />
      </main>
    </div>
  );
}
