/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
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
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            // maxWidth: 960,
            padding: `0px 0px 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer 
           style={{
            margin: `0 auto`,
            // backgroundColor:'#000000',
            // display: 'flex',
            // flex:1,
            flex: 1,
            // flexDirection: 'column',
            alignItems: 'center',
            padding: `auto`,
            paddingTop: 0,
            textAlign: 'center'
          }}
          >
            @{new Date().getFullYear()}, Built with
            {` `}
            <a href="https://binstd.com">Binstd</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
