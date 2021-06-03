import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Button from "../components/button"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Placeholder for cloud development projects.</p>
    <br />
    <Button target="/about/">About</Button> <br /><br /><br /><br />
  </Layout>
)

export default IndexPage
