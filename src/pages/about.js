import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Blokos" />
    <h1>About this site</h1>
    <p>Placeholder for Blokos projects.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
