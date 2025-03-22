import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "../styles/global.css";
import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <section className="main-wrapper">
      <div className="main-content">
        <span className="text-[#33358c] bg-[#e7e7fb] py-[3px] px-[10px] rounded-[25px] uppercase text-[12px] font-[700] w-fit">our services</span>
        <h3 className="text-[46px] font-[800] text-[#1c1c25] leading-[52px]">Custom Digital Transformation Solutions for Your Business</h3>
        <p className="text-[#616161] text-[20px]">Swazei is an innovative and dynamic enterprise software solutions, website development, digital marketing and web/mobile app development company in the USA.  We have proven expertise and experience in creating success stories of business transformation through our digital marketing and top-tier custom software and website development solutions for all digital transformation needs of our clients.</p>
        <div className="content-wrapper">
          <div className="flex gap-[20px]">
            <span className="text-[#ff9083] text-[30px]">01</span>
            <div className="flex flex-col gap-[7px]">
              <h4 className="text-[#232323] text-[24px] hover:text-[#ff9083]">Custom Software Development</h4>
              <p className="text-[#616161] text-[18px]">State-of-the-art technologies like static, eCommerce, and custom web app development.</p>
            </div>
          </div>
          <div className="flex gap-[20px]">
            <span className="text-[#ff9083] text-[30px]">02</span>
            <div className="flex flex-col gap-[7px]">
              <h4 className="text-[#232323] text-[24px] hover:text-[#ff9083]">Mobile & Web Apps</h4>
              <p className="text-[#616161] text-[18px]">Designing and developing Mobile apps on Hybrid, iOS, or Android platforms and ERP solutions-based Web Apps.</p>
            </div>
          </div>
          <div className="flex gap-[20px]">
            <span className="text-[#ff9083] text-[30px]">03</span>
            <div className="flex flex-col gap-[7px]">
              <h4 className="text-[#232323] text-[24px] hover:text-[#ff9083]">Designing</h4>
              <p className="text-[#616161] text-[18px]">Graphic and UI/UX designing expertise for logo and other custom graphic needs.Distinctly modern and interactive designs that bring your vision to life and beyond.</p>
            </div>
          </div>
          <div className="flex gap-[20px]">
            <span className="text-[#ff9083] text-[30px]">04</span>
            <div className="flex flex-col gap-[7px]">
              <h4 className="text-[#232323] text-[24px] hover:text-[#ff9083]">SEO, SMM and Content</h4>
              <p className="text-[#616161] text-[18px]">Customizable plans for your Content, SEO, and Social Media for organic & paid marketing needs to drive business growth.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar"><Sidebar/></div>
    </section>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
