import React from "react"
import {
    wrapper,
    title,
    socials,
    instagram,
    twitter,
    discord,
    medium,
    telegram,
    facebook
  } from "./footer.module.css"

const Footer = ({ siteTitle, companyInfo }) => {
  return (
    <div className={wrapper}>
      <div>
        <p className={title}>{siteTitle}</p>
        <p>Ridvan Tahir</p>
        <p>All rights reserved.</p>
      </div>
      <div>
      Become a Family:
        <div className={socials}>
          <a
            className={twitter}
            target="__blank"
            href={companyInfo.socials.twitter}
          />
          <a
            className={instagram}
            target="__blank"
            href={companyInfo.socials.instagram}
          />
           <a
            className={medium}
            target="__blank"
            href={companyInfo.socials.medium}
          />
           <a
            className={telegram}
            target="__blank"
            href={companyInfo.socials.telegram}
          />
           <a
            className={discord}
            target="__blank"
            href={companyInfo.socials.discord}
          />
            <a
            className={facebook}
            target="__blank"
            href={companyInfo.socials.facebook}
          />
        </div>
      </div>
    </div>
  )
}

export default Footer