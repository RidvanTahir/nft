import * as React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'


const nftsPage = ({data:{allWpNft:{nodes}}}) => {
  return (
    <Layout pageTitle="The trees">
      <p>A list of bonsai trees will be displayed here.</p>
      {nodes.map((item)=>{
        console.log(item)
          const nft = item.ntf;
          const slug = item.slug;
          return <Link to={`/nfts/${slug}`}>
            <p key={item.id}>{nft.name}#{nft.number}</p>
           </Link>
      })}
    </Layout>
  )
}
export default nftsPage


export const query = graphql`
query {
    wpPage {
      nftsPage {
        description
        fieldGroupName
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
                gatsbyImageData(placeholder: BLURRED, transformOptions: {grayscale: true})
              }
            }
          }
        }
        slug
      }
    }
}
`