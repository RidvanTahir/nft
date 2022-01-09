import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Footer } from '../components/footer';
import { container, banner, nav, navLinks, navLinkItem, navLinkText,siteTitle  } from './layout.module.css'


const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          title
        }
      }
      wpPage {
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
    <title>{pageTitle} | {data.site.siteMetadata.title}</title>
    <nav className={nav}>
        <header className={siteTitle}>
          {data.site.siteMetadata.title}
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
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout