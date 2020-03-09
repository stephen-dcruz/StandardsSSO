import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Log in Page"/>
  <div class="login-section">

    <div class="panel-login position1">
      <div class="panel-heading1 panel-heading-font" >
        <h3>Unilever Login</h3>
      </div>
      <h2 class="panel-font1">
        <b>Unilever user?</b>
      </h2>
      <h3>
        <b>You can access Eva using your Unilever ID</b>
      </h3>
      <a href="#standards-site" class="btn-login panel1-btn">
        <b>Login</b>
      </a>
    </div>

  
    <div class="panel-login position2">
    <div class="panel-heading2 panel-heading-font" >
          <h3>Non-Unilever Login</h3>
      </div>
      <div class="">
          <b>Non-Unilever members sign in below :</b>
      </div>
      <form>
      <div class="form-container">
          <input type="text" placeholder="Enter Username" name="uname" required>
        </input>
        
      </div>
      <div class="form-container">
        <input type="text" placeholder="Password" name="pwrd" required>
        </input>
      </div>
      </form>
      <a href="#standards-site" class="btn-login panel2-btn">
        <b>Login</b>
      </a>

       </div>


    


    </div>

  </Layout>
)

export default IndexPage
