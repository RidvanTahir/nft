import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from 'gatsby'
import { NFT } from '../components/nft'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  header,
  headerInfo,
  headerPicture,
  headerTitle,
  CTA,
  section,
  subtitle,
  artists,
} from "../page.module.css"

const IndexPage = ({data:{wpPage:{homePage}}}) => {
  const image = getImage(homePage.header.picture.localFile)
   return(
    <Layout pageTitle="Welcome to Psycodelic Bonsais">
    <div className={header}>
        <div className={headerInfo}>
          <h1 className={headerTitle}>{homePage.header.title}</h1>
          <div>{homePage.header.desctription}</div>
          <a className={CTA} target="__blank" href={homePage.callToAction.link}>{homePage.callToAction.description}</a>
        </div>
        <div>
          <GatsbyImage
            image={image}
            className={headerPicture}

          />
        </div>
      </div>
      <div>
    <div>
    <div className={section}>
      <div className={subtitle}>
          {homePage.featuredNfts.title}
      </div>
      <p>{homePage.featuredNfts.description}</p>
    </div>
    <div className={artists}>
      {homePage.featuredNfts.nfts.map(nft => (
              <NFT
                slug={`nfts/${nft.slug}`}
                key={nft.id}
                nft={nft.ntf}
              />
            ))}
    </div>
    </div>
  </div>
    </Layout>
  )
 }

export const query = graphql`
query{
  wpPage(slug: {eq: "home"}) {
    homePage {
      callToAction {
        description
        fieldGroupName
        link
      }
      header {
        desctription
        title
        picture {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
      featuredNfts {
        description
        fieldGroupName
        title
        nfts {
          ... on WpNFT {
            ntf {
              background
              base
              fieldGroupName
              leaves
              name
              number
              pot
              soil
              trunk
              marketPlaceLink {
                link
                name
              }
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}


`


export default IndexPage
