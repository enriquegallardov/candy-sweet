import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
    return (
    <Layout>
        <SEO title={post.frontmatter.title} description={post.excerpt}></SEO>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <h4>{post.frontmatter.author} &bull; {post.frontmatter.date}</h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        frontmatter {
            title
            author
            date(formatString: "DD MMMM, YYYY", locale: "es")
        }
    }
  }
`
