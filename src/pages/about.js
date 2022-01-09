import * as React from 'react'
import { Link, graphql } from 'gatsby'
import {
  header,
  headerInfo,
  headerPicture,
  subtitle,
  missionSection,
  missionInfo,
  section
} from "../page.module.css"

import Layout from "../components/layout"

const AboutPage = ({
  data: {
    wpPage: {
      aboutPage: { headerAboutUs, mission },
    },
  },
}) =>  {
  return (
    <main>
    <Layout pageTitle="About Us">
    <div className={section}>
        <div >
          <h2 className={subtitle}>{headerAboutUs.title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: headerAboutUs.description,
            }}
          />
        </div>
      </div>
      <div className={section}>
        <div>
          <h2 className={subtitle}>{mission.title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: mission.description,
            }}
          />
        </div>
      </div>
      </Layout>
    </main>
  )
}

export const quity = graphql`
query {
  wpPage(slug: {eq: "about-us"}) {
    aboutPage {
      headerAboutUs {
        description
        title
      }
      mission {
        description
        title
      }
    }
  }
}
`

export default AboutPage