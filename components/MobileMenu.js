import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./MobileMenu.module.scss";

export default function MobileMenu(props) {
  // useEffect(() => {
  //   //
  // }, []);

  const activepage = props.activepage;
  const menuClicked = props.menuClicked;
  const handleMenuClicked = props.handleMenuClicked;

  const hamburgerref = useRef();

  // const [closeMenuClicked, setCloseMenuClicked] = useState(false);

  // const handleCloseMenuClicked = () => {
  //   console.log("You clicked");
  //   setMenuClicked(false);
  // };

  return (
    <>
      {/* <div className={`${style.mobileMenu} ${style.showMobileMenu}`}> */}
      <div
        className={`${style.mobileMenu} ${
          menuClicked ? style.showMobileMenu : ""
        } `}
      >
        <div className={style.mobileMenuHeader}>
          <div className={style.navLogo}>The Planets</div>
          <div
            className={style.hamburgerContainer}
            ref={hamburgerref}
            onClick={handleMenuClicked}
          >
            <Image
              src="/assets/icon-hamburger.svg"
              height={20}
              width={30}
            ></Image>
          </div>
        </div>
        <ul className={style.mobileNavUl}>
          <li
          // className={`${style.lI} ${style.mercury} ${
          //   activepage === "mercury" ? style.mercuryActive : ""
          // }`}
          >
            <Link href="/mercury" className={style.navLink}>
              Mercury
            </Link>
          </li>
          <li
          // className={`${style.lI} ${style.venus} ${
          //   activepage === "venus" ? style.venusActive : ""
          // }`}
          >
            <Link href="/venus" className={`${style.navLink} ${style.venus}`}>
              Venus
            </Link>
          </li>
          <li
          // className={`${style.lI} ${style.earth} ${
          //   activepage === "earth" ? style.earthActive : ""
          // }`}
          >
            <Link href="/earth" className={`${style.navLink} ${style.earth}`}>
              Earth
            </Link>
          </li>
          <li
          // className={`${style.lI} ${style.mars} ${
          //   activepage === "mars" ? style.marsActive : ""
          // }`}
          >
            <Link href="/mars" className={`${style.navLink} ${style.mars}`}>
              Mars
            </Link>
          </li>
          <li
          // className={`${style.lI} ${style.jupiter} ${
          //   activepage === "jupiter" ? style.jupiterActive : ""
          // }`}
          >
            <Link
              href="/jupiter"
              className={`${style.navLink} ${style.jupiter}`}
            >
              Jupiter
            </Link>
          </li>
          <li
          // className={`${style.lI} ${style.saturn} ${
          //   activepage === "saturn" ? style.saturnActive : ""
          // }`}
          >
            <Link href="/saturn" className={`${style.navLink} ${style.saturn}`}>
              Saturn
            </Link>
          </li>
          <li
          // className={`${style.lI} ${style.uranus} ${
          //   activepage === "uranus" ? style.uranusActive : ""
          // }`}
          >
            <Link href="/uranus" className={`${style.navLink} ${style.uranus}`}>
              Uranus
            </Link>
          </li>
          <li
          // className={`${style.lI} ${style.neptune} ${
          //   activepage === "neptune" ? style.neptuneActive : ""
          // }`}
          >
            <Link
              href="/neptune"
              className={`${style.navLink} ${style.neptune}`}
            >
              Neptune
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
