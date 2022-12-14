import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Nav from "../components/Header.js";
import data from "/data/data.json";
import PlanetDescription from "../components/PlanetDescription";
import Stats from "../components/Stats";

export default function Jupiter() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Planets | Jupiter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav activepage="jupiter" />
        <PlanetDescription
          planetName={data[4].name}
          planetImg={data[4].images.planet}
          internalImg={data[4].images.internal}
          geologyImg={data[4].images.geology}
          overviewContent={data[4].overview.content}
          structureContent={data[4].structure.content}
          geologyContent={data[4].geology.content}
          overviewSrc={data[4].overview.source}
          structureSrc={data[4].structure.source}
          geologySrc={data[4].geology.source}
        />
        <Stats
          rotationTime={data[4].rotation}
          revolutionTime={data[4].revolution}
          radius={data[4].radius}
          temperature={data[4].temperature}
        />
      </main>
    </div>
  );
}
