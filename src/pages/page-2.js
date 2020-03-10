import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Please see the below the details provided</h1>
    <p>Hi we are sorry that you are not able to access our site, please email the person listed test@123 to 
      help you with your password : ), Please note that your password may have extra spaces causing issues 
      for you to sign in also if you are a unilever employee please use single sign on. Thank you.
    </p>
    <Link to="/">Go back to the sign on page </Link>
  </Layout>
)

export default SecondPage
