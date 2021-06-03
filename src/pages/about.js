// import * as React from "react"
import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function SecondPage() {

  // ----------------------
  // RUNTIME DATA FETCHING
  // ----------------------
  const [data, setData] = useState('')

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
    })();
  });
  
  return (
    <Layout>
      <SEO title="Blokos" />
      <h1>About this site</h1>
      <p>Placeholder for Blokos projects.</p>
      <p>{data}</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
export default SecondPage
