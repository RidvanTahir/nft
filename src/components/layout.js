import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { container, banner, nav, navLinks, navLinkItem, navLinkText,siteTitle  } from './layout.module.css'
import Footer from './footer'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
  query{
    site {
      siteMetadata {
        title
      }
    }
    wpPage(slug: {eq: "community"}) {
      communityPage {
        community {
          socials {
            discord
            instagram
            medium
            telegram
            twitter
          }
        }
      }
    }
  }
  `)


  return (
    <div className={container}>
    <title>{data.site.siteMetadata.title}</title>
    <nav className={nav}>
        <header className={siteTitle}>
          <Link className={navLinkText} to="/">
            {data.site.siteMetadata.title}
          </Link>
        </header>
        <ul className={navLinks}>
        <li>
        </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/nfts">
              nfts
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/community">
              community
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
      <Footer companyInfo={data.wpPage.communityPage.community} siteTitle={data.site.siteMetadata.title}/>
    </div>
  )
}

export default Layout