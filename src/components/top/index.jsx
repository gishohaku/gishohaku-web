import React from "react"

import Layout from "../layout"
import SEO from "../seo"

import Hero from "./hero"
import Sections from "./sections"

const Top = () => (
  <Layout>
    <SEO title="Home" keywords={[`同人誌即売会`, `技術同人誌`, `技書博`]} />
    <Hero />
    <Sections />
  </Layout>
)

export default Top
