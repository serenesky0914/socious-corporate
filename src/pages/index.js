import * as React from "react"
import "../styles/main.scss"

import Layout from "../components/Layout"
import Seo from "../components/seo"

import Intro from "../components/Homepage/Intro/Intro"
import AppLinks from "../components/Homepage/AppLinks"
import JobsSection from "../components/Homepage/JobsSection/JobsSection"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <Seo
        title='Home'
      />
      <Intro />
      <AppLinks />
      <JobsSection />
    </Layout>
  )
}

export default IndexPage
