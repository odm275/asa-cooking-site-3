import React from "react"
import Layout from "../components/layout"

interface Service {
  title: string
  description: string
}

interface PropsServicePageTemplate {
  services?: [Service]
}

export const ServicePageTemplate: React.FC<PropsServicePageTemplate> = ({
  services,
}) => {
  console.log(services)
  return (
    <>
      <h2>Main Pitch</h2>
      <p>Here is the main pitch</p>
    </>
  )
}

interface ServicePageProps {
  data: object
}

const ServicePage: React.FC<ServicePageProps> = ({ data = {} }) => {
  console.log(data)
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <IndexPageTemplate services={frontmatter.heading} />
    </Layout>
  )
}

export default ServicePage
