import React from "react"

import Layout from "../layout"
import SEO from "../seo"

import Hero from "./hero"
import About from "./about"

const Top = () => (
  <Layout>
    <SEO title="Home" keywords={[`同人誌即売会`, `技術同人誌`, `技書博`]} />
    <Hero />
    <About />
  </Layout>
)

export default Top
