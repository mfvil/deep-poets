import React from "react"
import Layout from "../components/Layout"
import infoStyles from "../styles/pages/info.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"

export default function Info() {
  const { infoData } = useSiteMetaData()
  return (
    <Layout page="info" bgColor={infoData.background_color}>
      <section className={infoStyles.info_blurb}>
        <h2>
          Deep Poets blog
        </h2>
        <ul>
          <li>
            <p>
              Created by Richard Rockland and friends/colleagues.
            </p>
          </li>
        </ul>
      </section>
    </Layout>
  )
}