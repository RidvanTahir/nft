// Imports

import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import NFT from "../../components/nft"
import {
  hero,
  section,
  subtitle,
  artists,
  description,
} from "../../page.module.css"

// Artists Page Component

const nftsPage = ({
    data: {
        allWpNft: { nodes: nodes },
        wpPage: { nftsPage: nftsPage }
    },
  }) => {
   console.log(nodes)
    return (
      <Layout pageTitle="Artists of Inghelbrecht Agency">
        <div className={section}>
          <h2 className={subtitle}>{nftsPage.title}</h2>
          <div
            className={description}
           dangerouslySetInnerHTML={{
              __html: nftsPage.description,
           }}
          />
          <div className={artists}>
            {nodes.map((nft) => (
              <NFT key={nft.id} slug={nft.slug} nft={nft.ntf} />
            ))}
          </div>
        </div>
      </Layout>
    )
  }
  // Page Query
  export const query = graphql`
  query {
    wpPage(slug: {eq: "nfts"}) {
      nftsPage {
        description
        title
      }
    }
    allWpNft {
      nodes {
        ntf {
          background
          base
          fieldGroupName
          leaves
          name
          number
          pot
          trunk
          soil
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
        slug
      }
    }
  }
  `

  export default nftsPage