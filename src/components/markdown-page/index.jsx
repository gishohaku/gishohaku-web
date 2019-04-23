import React from "react"

import Layout from "../layout"
import SEO from "../seo"
import { css } from "@emotion/core"

import SectionHeader from "../atoms/SectionHeader"
import TextBlock from "../atoms/TextBlock"

const section = css`
  padding: 32px 0 48px;
`

const contents = css`
  h2 {
    font-size: 28px;
    margin-top: 48px;
    margin-bottom: 24px;
    font-weight: 600;
  }

  h3 {
    font-size: 20px;
    margin: 32px 0 24px;
    font-weight: 600;
  }

  h2 + h3 {
    margin-top: 0;
  }

  ul,
  ol {
    padding-left: 24px;
  }

  li {
    margin: 10px 0;
  }

  ul > li {
    list-style-type: disc;
  }

  li > p {
    margin: 0;
  }

  table {
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    margin: 20px 0;
    margin-bottom: 30px;
  }

  table tr:nth-child(odd) td {
    background-color: #f9f9f9;
  }

  table tr th,
  table tr td {
    padding: 8px;
    line-height: 1.6;
    vertical-align: top;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  table tr th {
    white-space: nowrap;
  }
`

const Top = ({ markdownPage }) => (
  <Layout>
    <SEO title="利用規約" keywords={[`同人誌即売会`, `技術同人誌`, `技書博`]} />
    <section css={section}>
      <SectionHeader text={markdownPage.frontmatter.subtitle}>
        {markdownPage.frontmatter.title}
      </SectionHeader>
      <TextBlock>
        <div
          css={contents}
          dangerouslySetInnerHTML={{ __html: markdownPage.html }}
        />
      </TextBlock>
    </section>
  </Layout>
)

export default Top
