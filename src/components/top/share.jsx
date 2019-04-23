import React from "react"
import { css } from "@emotion/core"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share"
import { useStaticQuery, graphql } from "gatsby"

const wrapper = css`
  position: fixed;
  top: 12px;
  right: 12px;
  display: flex;
  z-index: 10;
`

const shareButton = css`
  display: inline-block;
  border-radius: 48px;
  overflow: hidden;
  margin-left: 8px;
`

const Share = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
      }
    `
  )
  const { siteUrl, title } = site.siteMetadata
  return (
    <div css={wrapper}>
      <FacebookShareButton css={shareButton} quote={title} url={siteUrl}>
        <FacebookIcon size={42} />
      </FacebookShareButton>
      <TwitterShareButton
        css={shareButton}
        title={title}
        url={siteUrl}
        hashtags={["技書博"]}
      >
        <TwitterIcon size={42} />
      </TwitterShareButton>
    </div>
  )
}

export default Share
