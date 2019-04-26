/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"

import Header from "./header"
import Footer from "./footer"
import SponsorLink from "../atoms/SponsorLink"

import "minireset.css"

const Layout = ({ children, hideHeader, hideSponsorLink }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Global
          styles={css`
            @import url(
              https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,
              700
            );
            body {
              /* TODO: 諸々指定 */
              font-family: "Noto Sans JP";
              -webkit-font-smoothing: antialiased;
              font-feature-settings: "palt";
              font-size: 15px;
              line-height: 1.8;
              color: #444;
            }
          `}
        />
        <div
          style={{
            margin: `0 auto`,
            paddingTop: 0,
          }}
        >
          {!hideHeader && <Header />}
          <main>
            {children}
            {!hideSponsorLink && (
              <SponsorLink
                css={css`
                  max-width: 740px;
                  margin: 0 auto 32px;
                `}
              />
            )}
          </main>
          <Footer />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
