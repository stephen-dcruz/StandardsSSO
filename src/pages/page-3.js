import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page three" />
    <h1>Login success</h1>
    <p>If You see this page the login credentials have worked 
    </p>
    <Link to="/">Go back to the sign on page </Link>
  </Layout>
)

export default SecondPage
