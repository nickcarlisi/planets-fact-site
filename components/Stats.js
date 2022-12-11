import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import data from "/data/data.json";
import style from "./Stats.module.scss";

export default function Stats(props) {
  useEffect(() => {
    //
  }, []);

  return (
    <div className={style.container}>
      <div className={style.grid}>
        <div className={style.statContainer}>
          <h4 className={style.statType}>Rotation Time</h4>
          <span className={style.statProp}>{props.rotationTime}</span>
        </div>
        <div className={style.statContainer}>
          <h4 className={style.statType}>Revolution Time</h4>
          <span className={style.statProp}>{props.revolutionTime}</span>
        </div>
        <div className={style.statContainer}>
          <h4 className={style.statType}>Radius</h4>
          <span className={style.statProp}>{props.radius}</span>
        </div>
        <div className={style.statContainer}>
          <h4 className={style.statType}>Average Temp.</h4>
          <span className={style.statProp}>{props.temperature}</span>
        </div>
      </div>
    </div>
  );
}
