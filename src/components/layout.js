import React, { useState, useEffect } from "react";
import he from "he";
import Header from "./header";
import "../styles/global.css";
import { Link } from "gatsby"
import Logo from "../images/swazei-white-logo.png";
import Shape1 from "../images/footer_shapes_01.png";
import Shape2 from "../images/footer_shapes_02.png";
import Shape3 from "../images/footer_shapes_03.png";
import Location from "../images/location-pin.png";
import Email from "../images/mail.png";
import Phone from "../images/phone-call.png";
import Twitter from "../images/twitter.png";
import Facebok from "../images/facebook.png";
import Linkedin from "../images/linkedin.png";
import Instagram from "../images/instagram.png";

const Layout = ({ children }) => {
  const [Data, setData] = useState(null);
  const [Menu, setMenu] = useState(null);

  // Fetch latest post from WordPress REST API
  useEffect(() => {
    // Fetch Settings Data
    const fetchSettings = fetch("http://localhost/swazei-admin/wp-json/wp/v2/swazei-settings")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error fetching settings:", err));

    // Fetch Menu Data
    const fetchMenu = fetch("http://localhost/swazei-admin/wp-json/wp/v2/menu/footer-menu")
      .then((res) => res.json())
      .then((menu) => setMenu(menu))
      .catch((err) => console.error("Error fetching menu:", err));

    Promise.all([fetchSettings, fetchMenu]); // Run both API calls in parallel
  }, []);

  // console.log(Menu); // Debugging output

  return (
    <>
      <Header siteTitle={Data?.company_name || `Title`} />

      <main style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
        }}>{children}</main>

      <footer className="relative overflow-hidden">
        <img
          className="absolute top-[45%] left-[-5%] translate-y-[-41px]"
          alt={Data?.company_name}
          style={{ margin: 0 }}
          src={Shape1}
        />
        <img
          className="absolute top-[20%] left-[86%] translate-y-[21px]"
          alt={Data?.company_name}
          style={{ margin: 0 }}
          src={Shape2}
        />
        <img
          className="absolute top-[45%] left-[87%] translate-y-[-22px]"
          alt={Data?.company_name}
          style={{ margin: 0 }}
          src={Shape3}
        />
        <div className="flex flex-col items-center gap-[70px] w-full max-w-[80%] justify-self-center relative z-1">
          <Link to="/">
            <img
              alt={Data?.company_name}
              height={40}
              style={{ margin: 0 }}
              src={Logo}
            />
          </Link>

          <div className="content-wrapper">
            {Data?.swazei_address &&
              <div className="flex gap-[28px] items-center">
                <img
                  className="bg-[#a8aaf1]"
                  alt={Data?.swazei_address}
                  height={23}
                  width={25}
                  style={{ margin: 0 }}
                  src={Location}
                />
                <p>{Data.swazei_address}</p>
              </div>
            }
            {Data?.swazei_support_email &&
              <a href={`mailto:`+Data.swazei_support_email} className="flex gap-[28px] items-center">
                <img
                  className="bg-[#ff9083]"
                  alt={Data?.swazei_support_email}
                  height={23}
                  style={{ margin: 0 }}
                  src={Email}
                />
                <p>{Data.swazei_support_email}</p>
              </a>
            }
            {Data?.swazei_number &&
              <a href={`tel:`+Data.swazei_number} className="flex gap-[28px] items-center">
                <img
                  className="bg-[#75e8ef]"
                  alt={Data?.swazei_number}
                  height={23}
                  style={{ margin: 0 }}
                  src={Phone}
                />
                <p>{Data.swazei_number}</p>
              </a>
            }
          </div>

          <span className="block w-full h-[1px] bg-[#ffffff26]"></span>

          <div className="flex flex-col gap-[24px]">
            <div className="menu-wrapper">
              {Menu?.map((menu, index) => (
                <a key={menu.id} href={menu.url}>{he.decode(menu.title)}</a>
              ))}
            </div>

            <p className="text-[#b0b0b0] self-center">
              Copyright © {new Date().getFullYear()}{" "}
              {Data?.swazei_website ? (
                <a className="text-[#b0b0b0]" href={Data.swazei_website} target="_blank" rel="noopener noreferrer">Swazei</a>
              ) : (
                "Swazei"
              )}. All Rights Reserved.
            </p>
          </div>

          <div className="flex gap-[8px] justify-center">
            {Data?.swazei_twitter &&
              <a href={Data.swazei_twitter}>
                <img
                  className="p-[9px] border-[#ffffff1a] rounded-full border"
                  alt={Data?.swazei_number}
                  height={12}
                  style={{ margin: 0 }}
                  src={Twitter}
                />
              </a>
            }
            {Data?.swazei_facebook &&
              <a href={Data.swazei_facebook}>
                <img
                  className="p-[9px] border-[#ffffff1a] rounded-full border"
                  alt={Data?.swazei_number}
                  height={12}
                  style={{ margin: 0 }}
                  src={Facebok}
                />
              </a>
            }
            {Data?.swazei_linkedin &&
              <a href={Data.swazei_linkedin}>
                <img
                  className="p-[9px] border-[#ffffff1a] rounded-full border"
                  alt={Data?.swazei_number}
                  height={12}
                  style={{ margin: 0 }}
                  src={Linkedin}
                />
              </a>
            }
            {Data?.swazei_instagram &&
              <a href={Data.swazei_instagram}>
                <img
                  className="p-[9px] border-[#ffffff1a] rounded-full border"
                  alt={Data?.swazei_number}
                  height={12}
                  style={{ margin: 0 }}
                  src={Instagram}
                />
              </a>
            }
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
