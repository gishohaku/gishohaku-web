import React from "react"
import { graphql } from "gatsby"
import Page from "../components/markdown-page"

export default ({ data }) => {
  console.log(data)
  const markdownPage = data.markdownRemark
  return <Page markdownPage={markdownPage} />
}

export const pageQuery = graphql`
  query markdownPageByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`
