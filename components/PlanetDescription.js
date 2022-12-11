import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import data from "/data/data.json";
import style from "./PlanetDescription.module.scss";

export default function PlanetDescription(props) {
  useEffect(() => {
    //
  }, []);

  const [overview, setoverview] = useState(true);
  const [structure, setStructure] = useState(false);
  const [geology, setGeology] = useState(false);

  const handleOverviewClick = () => {
    setGeology(false);
    setStructure(false);
    setoverview(true);
    console.log(overview);
  };

  const handleStructureClick = () => {
    setoverview(false);
    setGeology(false);
    setStructure(true);
    console.log(structure);
  };

  const handleGeologyClick = () => {
    setoverview(false);
    setStructure(false);
    setGeology(true);
    console.log(geology);
  };

  let para;
  let src;
  let imgSrc;
  if (overview) {
    para = props.overviewContent;
    src = props.overviewSrc;
    imgSrc = props.planetImg;
  } else if (structure) {
    para = props.structureContent;
    src = props.structureSrc;
    imgSrc = props.internalImg;
  } else if (geology) {
    para = props.geologyContent;
    src = props.geologySrc;
    imgSrc = props.planetImg;
    // geologyImgSrc = props.geologyImg;
  }

  let btnColor;
  let planetSize;
  if (props.planetName === "Mercury") {
    btnColor = style.mercury;
    planetSize = style.sizeMercury;
  } else if (props.planetName === "Venus") {
    btnColor = style.venus;
    planetSize = style.sizeVenus;
  } else if (props.planetName === "Earth") {
    btnColor = style.earth;
    planetSize = style.sizeEarth;
  } else if (props.planetName === "Mars") {
    btnColor = style.mars;
    planetSize = style.sizeMars;
  } else if (props.planetName === "Jupiter") {
    btnColor = style.jupiter;
    planetSize = style.sizeJupiter;
  } else if (props.planetName === "Saturn") {
    btnColor = style.saturn;
    planetSize = style.sizeSaturn;
  } else if (props.planetName === "Uranus") {
    btnColor = style.uranus;
    planetSize = style.sizeUranus;
  } else if (props.planetName === "Neptune") {
    btnColor = style.neptune;
    planetSize = style.sizeNeptune;
  }

  return (
    <div className={style.container}>
      <div className={style.grid}>
        <div className={style.btnContainer}>
          <button
            className={`${style.btn}  ${overview ? btnColor : ""}`}
            onClick={handleOverviewClick}
          >
            <span className={style.btnNum}>01</span> Overview
          </button>
          <button
            className={`${style.btn}  ${structure ? btnColor : ""}`}
            onClick={handleStructureClick}
          >
            <span className={style.btnNum}>02</span>{" "}
            <span className={style.internal}>Internal</span> Structure
          </button>
          <button
            className={`${style.btn}  ${geology ? btnColor : ""}`}
            onClick={handleGeologyClick}
          >
            <span className={style.btnNum}>03</span> Surface{" "}
            <span className={style.geology}>Geology</span>
          </button>
        </div>

        <div className={style.imgContainer}>
          <div className={`${style.planetContainer} ${planetSize}`}>
            <Image src={imgSrc} fill></Image>
          </div>
          {geology ? (
            <div className={style.zoomedImg}>
              <Image
                src={props.geologyImg}
                layout="fill"
                objectFit="contain"
              ></Image>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className={style.copyContainer}>
          <h1 className={style.planetName}>{props.planetName}</h1>
          {/* <p>{props.structureContent}</p> */}
          <p className={style.planetPara}>{para}</p>
          <p className={style.source}>
            Source :{" "}
            <a href={src} target="_blank" className={style.wiki}>
              Wikipedia
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
