import React from "react"

import Layout from "../layout"
import SEO from "../seo"

import Hero from "./hero"
import About from "./about"

const Top = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <About />
  </Layout>
)

export default Top
