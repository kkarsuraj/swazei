import React, { useState, useEffect } from "react";
import { Link } from "gatsby"
import Logo from "../images/swazei-color-logo.png";
import "../styles/global.css";

const Header = ({ siteTitle }) => {

  const [Menu, setMenu] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    fetch("http://localhost/swazei-admin/wp-json/wp/v2/menu/header-menu")
      .then((response) => response.json())
      .then((menu) => {
        // if (data.length > 0) {
          setMenu(menu); // Store fetched posts
        // }
      })
      .catch((error) => console.error("Error fetching WordPress data:", error));
  }, []);

  return (
    <>
      <header className="mx-[5%] py-[20px] flex justify-between items-center">
        <Link
          to="/"
          style={{
            fontSize: `var(--font-sm)`,
            textDecoration: `none`,
          }}
        >
          <img
            alt={siteTitle}
            height={60}
            style={{ margin: 0 }}
            src={Logo}
          />
        </Link>
        <div className="nav-menu">
          {Menu?.map((menu, index) => (
            <a key={menu.id} href={menu.url} className="text-[#1c1c25] font-[800] text-[17px] hover:text-[#ff9083]">{menu.title}</a>
          ))}
        </div>
        <div onClick={toggleMenu} className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <button className="quote-button">Get Free Quote</button>
        {isOpen && (
          <div onClick={toggleMenu} className="fixed top-[0] left-[0] bg-[#0000004D] w-full h-full">
            <div onClick={(e) => e.stopPropagation()} className="hamburger-menu flex flex-col bg-[#ffffff] h-full w-fit px-[5%] py-[2%] gap-[20px]">
              <Link
                to="/"
                style={{
                  fontSize: `var(--font-sm)`,
                  textDecoration: `none`,
                }}
              >
                <img
                  alt={siteTitle}
                  height={60}
                  style={{ margin: 0 }}
                  src={Logo}
                />
              </Link>
              {Menu?.map((menu, index) => (
                <a key={menu.id} href={menu.url} className="text-[#1c1c25] font-[800] text-[17px] hover:text-[#ff9083]">{menu.title}</a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
