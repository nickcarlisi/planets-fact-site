import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./Header.module.scss";
import MobileMenu from "./MobileMenu";

export default function Header(props) {
  // useEffect(() => {
  //   //
  // }, []);

  const activepage = props.activepage;

  const [menuClicked, setMenuClicked] = useState(false);

  const hamburgerref = useRef();

  const handleMenuClicked = () => {
    setMenuClicked(!menuClicked);
    if (menuClicked === false) {
      // document.body.classList.add("noScroll")
    } else {
      // document.body.classList.remove("noScroll")
    }
  };

  return (
    <header className={style.header}>
      <MobileMenu
        menuClicked={menuClicked}
        handleMenuClicked={handleMenuClicked}
      />
      <nav className={style.nav}>
        <div className={style.navLogo}>The Planets</div>
        <ul className={style.navUl}>
          <li
            className={`${style.lI} ${style.mercury} ${
              activepage === "mercury" ? style.mercuryActive : ""
            }`}
          >
            <Link href="/mercury">Mercury</Link>
          </li>
          <li
            className={`${style.lI} ${style.venus} ${
              activepage === "venus" ? style.venusActive : ""
            }`}
          >
            <Link href="/venus">Venus</Link>
          </li>
          <li
            className={`${style.lI} ${style.earth} ${
              activepage === "earth" ? style.earthActive : ""
            }`}
          >
            <Link href="/earth">Earth</Link>
          </li>
          <li
            className={`${style.lI} ${style.mars} ${
              activepage === "mars" ? style.marsActive : ""
            }`}
          >
            <Link href="/mars">Mars</Link>
          </li>
          <li
            className={`${style.lI} ${style.jupiter} ${
              activepage === "jupiter" ? style.jupiterActive : ""
            }`}
          >
            <Link href="/jupiter">Jupiter</Link>
          </li>
          <li
            className={`${style.lI} ${style.saturn} ${
              activepage === "saturn" ? style.saturnActive : ""
            }`}
          >
            <Link href="/saturn">Saturn</Link>
          </li>
          <li
            className={`${style.lI} ${style.uranus} ${
              activepage === "uranus" ? style.uranusActive : ""
            }`}
          >
            <Link href="/uranus">Uranus</Link>
          </li>
          <li
            className={`${style.lI} ${style.neptune} ${
              activepage === "neptune" ? style.neptuneActive : ""
            }`}
          >
            <Link href="/neptune">Neptune</Link>
          </li>
        </ul>
        <div
          className={style.hamburgerContainer}
          onClick={handleMenuClicked}
          ref={hamburgerref}
        >
          <Image
            src="/assets/icon-hamburger.svg"
            height={20}
            width={30}
          ></Image>
        </div>
      </nav>
    </header>
  );
}
