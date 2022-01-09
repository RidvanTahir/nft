import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import {
  header,
  headerInfo,
  headerPicture,
  subtitle,
  companyInfo,
  socials,
  facebook,
  instagram,
  link,
  twitter,
  telegram,
  medium,
  discord
} from "../page.module.css"

// Contact Page Component

// Imports

const ContactPage = ({
    data: {
      wpPage: {
        communityPage: { community, headerContact },
      },
    },
  }) => {
    const image = getImage(headerContact.picture.localFile)
  
    return (
      <Layout>
        <div className={header}>
          <div className={headerInfo}>
            <h2 className={subtitle}>{headerContact.title}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: headerContact.description,
              }}
            />
            <div className={companyInfo}>
              <a className={link} href={`mailto:${community.email}`}>
                {community.email}
              </a>
              <div className={socials}>
                Join the Fam:
                <a
                  target="__blank"
                  className={instagram}
                  href={community.socials.instagram}
                >
                  {" "}
                </a>
                <a
                  target="__blank"
                  className={telegram}
                  href={community.socials.telegram}
                >
                  {" "}
                </a>
                <a
                  target="__blank"
                  className={discord}
                  href={community.socials.discord}
                >
                  {" "}
                </a>
                <a
                  target="__blank"
                  className={medium}
                  href={community.socials.medium}
                >
                  {" "}
                </a>
                <a
                  target="__blank"
                  className={twitter}
                  href={community.socials.twitter}
                >
                  {" "}
                </a>
                <a
                  target="__blank"
                  className={facebook}
                  href={community.socials.facebook}
                >
                  {" "}
                </a>
              </div>
            </div>
          </div>
          <GatsbyImage
            className={headerPicture}
            image={image}
            alt={headerContact.picture.altText}
          />
        </div>
      </Layout>
    )
  }
  export const query = graphql`
  query MyQuery {
    wpPage(slug: {eq: "community"}) {
      communityPage {
        headerContact {
          description
          title
          picture {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
        community {
          email
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
  
  `
  export default ContactPage;