import React from "react"
import Layout from "../components/Layout/"
import {Link} from "gatsby"

export default () => (
  <Layout>
    <h1>Page Not Found</h1>
    <p>Oops, we couldn't find this page!</p>
    <Link to="/"> Go back home </Link>
  </Layout>
)