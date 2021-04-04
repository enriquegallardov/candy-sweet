import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export function ContactForm() {
  return (
    <div
      style={{ border: "2px solid #ccc", borderRadius: "8px", padding: "2rem" }}
    > <h2>Contáctenos</h2>
      <form
        method="post"
        action="https://getform.io/f/3d0f7730-6777-40ff-afe3-44c9a4a49eee"
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nombre"
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Asunto"
          required
        />
        <textarea
          name="message"
          id="message"
          placeholder="Escriba su mensaje aquí..."
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

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
      <SEO
        title="Inicio"
        description="Candy Sweet es una empresa de dulces comprometida con la calidad y satisfaccion al cliente"
      />
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
      <ContactForm></ContactForm>
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
