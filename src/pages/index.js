import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Banner from "../components/banner/banner"
import About from "../components/sections/about/about"
import Timeline from "../components/sections/timeline/timeline"
import Portfolio from "../components/sections/portfolio/portfolio"

export default function IndexPage({ data }) {
  return (
    <Layout isNotFound={false}>
      <main>
        <Banner data={data.hero.edges} />
        <About data={data.about.edges} />
        <Timeline data={data.experience.edges} />
        <Portfolio data={data.portfolio.edges} />
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            slogan
          }
          html
        }
      }
    }
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            education {
              date
              degree
              school
              web
            }
            languages {
              language
              icon
              level
            }
          }
          html
        }
      }
    }
    experience: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/experience/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            jobs {
              date
              title
              company
              web
              description
              tasks
            }
          }
          html
        }
      }
    }
    portfolio: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/portfolio/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            projects {
              title
              abstract
              github
              keywords
            }
          }
          html
        }
      }
    }
  }
`
