import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function BlogIndex({ data }) {
  console.log(data)
  return (
    <Layout>
      <SEO
        title="Blog"
        description="El blog de nuestra empresa, en donde hablamos sobre nuestra experiencia en Candy Sweet"
      ></SEO>
      <div>
        <h1 style={{ display: "inline-block", borderBottom: "1px solid" }}>
          Candy Sweet Blog
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Entradas</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <h3 style={{ marginBottom: "1rem" }}>
                {node.frontmatter.title}{" "}
                <span
                  style={{
                    color: "#555",
                  }}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY", locale: "es")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
