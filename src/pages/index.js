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
        <h2>Unilever Login</h2>
      </div>
      <h2 class="panel-font1"></h2>
        <h3>Unilever user?</h3>
      
        <p>You can access standards site using your Unilever ID.
          To do this click the log in button below 
        </p>
      <a  class="btn-login panel1-btn"><><Link to="/regression">Login</Link></></a>
    </div>

  
      <div class="panel-login position2">
      <div class="panel-heading2 panel-heading-font" >
            <h2>Non-Unilever Login</h2>
        </div>
        <div class="">
            <h3>Non-Unilever members sign in below :</h3>
        </div>
        <form>
        <div class="usrnm-pos">
            <input type="text" placeholder="Enter Username" name="uname" required>
          </input>
          
        </div>
        <div class="pswrd-pos">
          <input type="text" placeholder="Password" name="pwrd" required>
          </input>
        </div>
        <a  class="btn-login panel2-btn"><><Link to="/regression">Login</Link></></a>
        </form>
       </div>
    </div>

  </Layout>
)

export default IndexPage
