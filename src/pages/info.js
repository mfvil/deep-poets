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
             <p>Deepest poets, bringing deep thoughts to you.</p>
            <p>&nbsp;</p>
            <p>Anita Artaud:<br />
            Cult’s greatest bicep warrior <br />
            Cackling squat genius 
            </p>
            <p>&nbsp;</p>
            <p>Richard Rockland says:<br />
               Tangle that fortune deep true<br />
               Crack precious dad cheeks
           </p>
           <p>&nbsp;</p>
           <p>Tanya K Lockhart:</p>
           <p>Madam of the cubes<br />
              Witchy fingers write, write, write<br />
              Waiting for Jason</p>
          </li>
        </ul>
      </section>
    </Layout>
  )
}