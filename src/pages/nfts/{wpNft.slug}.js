import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 

const NFTPage = ({data:{wpNft:{ntf:nft}}}) => {
  const image = getImage(nft.image.localFile)
  console.log(nft);
  return (
    <Layout pageTitle="NFT Template">
      <p>Name: {nft.name}#{nft.number}</p>
      <GatsbyImage image={image} />
      <p>Leaves: {nft.leaves}</p>
      <p>Trunk: {nft.trunk}</p>
      <p>Soil: {nft.soil}</p>
      <p>Pot: {nft.pot}</p>
      <p>Base: {nft.base}</p>
      <p>Background: {nft.background}</p>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    wpNft(id: {eq: $id}) {
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
`

export default NFTPage