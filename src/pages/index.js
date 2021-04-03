import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home({ data }) {
  function convertToTitle(filename) {
    let name = filename
      .replace(/\.[^.]*$/, "")
      .toLowerCase()
      .split("-")
    for (let i = 0; i < name.length; i++) {
      name[i] = name[i][0].toUpperCase() + name[i].slice(1)
    }
    return name.join(" ")
  }

  return (
    <Layout>
      <SEO title="Inicio" />
      <h1>Nuestros productos</h1>
      {data.allImageSharp.edges.map(({ node }) => (
        <div key={node.id} style={{ marginBottom: `2rem` }}>
          <h2>{convertToTitle(node.fixed.originalName)}</h2>
          <GatsbyImage
            image={node.gatsbyImageData}
            alt={convertToTitle(node.fixed.originalName)}
          ></GatsbyImage>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allImageSharp(
      filter: { fixed: { originalName: { ne: "gatsby-icon.png" } } }
    ) {
      edges {
        node {
          id
          gatsbyImageData(quality: 95, height: 800, width: 1200)
          fixed {
            originalName
          }
        }
      }
    }
  }
`
