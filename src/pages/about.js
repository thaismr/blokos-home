// import * as React from "react"
import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function SecondPage() {

  // ----------------------
  // RUNTIME DATA FETCHING
  // ----------------------
  const [post, setPost] = useState('initial value')

  // useEffect(() => {
  //   (async function () {
  //     const posts = await(await fetch(`/api/message`)).json();
  //     setPost(posts.name);
  //   })();
  // });
  
  return (
    <Layout>
      <SEO title="Blokos" />
      <h1>About this site</h1>
      <p>Placeholder for Blokos projects.</p>
      {/* <p>{post}</p> */}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
export default SecondPage
