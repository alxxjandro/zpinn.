import navbar from "../styles/navbar.module.css";
import { RiShoppingCartLine } from "react-icons/ri";
import IconBtn from "./IconBtn";
import Navbtn from "./NavBtn";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function Navbar({selected, setSelected}) {
  return (
    <div className={navbar.navbar}>
      <div className={navbar.btns}>
        <Navbtn
          classN={navbar.textBtn}
          setSelected={setSelected}
          selected={selected}
          textcontent="home"
          route={"/"}
        />
        <Navbtn
          classN={navbar.textBtn}
          setSelected={setSelected}
          selected={selected}
          textcontent="shop"
          route={"/shop"}
        />
      </div>
      <div className={navbar.title}>
        <h1>zpinn.</h1>
      </div>
      <div className={navbar.btns}>
        <IconBtn
          classN={navbar.cart}
          Icon={RiShoppingCartLine}
          route={"/shop/cart"}
          setSelected={setSelected}
          selected={selected}
          textcontent="cart"
        />
      </div>
    </div>
  );
}

export default Navbar;
