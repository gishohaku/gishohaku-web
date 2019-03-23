import React from "react"

import Layout from "../layout"
import SEO from "../seo"
import { css } from "@emotion/core"

import SectionHeader from "../atoms/SectionHeader"
import TextBlock from "../atoms/TextBlock"

const section = css`
  padding: 32px 0 48px;
`

const Top = ({ markdownPage }) => (
  <Layout>
    <SEO title="利用規約" keywords={[`同人誌即売会`, `技術同人誌`, `技書博`]} />
    <section css={section}>
      <SectionHeader text={markdownPage.frontmatter.subtitle}>
        {markdownPage.frontmatter.title}
      </SectionHeader>
      <TextBlock>
        <div dangerouslySetInnerHTML={{ __html: markdownPage.html }} />
      </TextBlock>
    </section>
  </Layout>
)

export default Top
