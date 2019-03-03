import React from "react"
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectPreview from "../components/project-preview"

const ProjectWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 5rem auto;
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  {
    allProjectsJson {
      edges {
        node {
          description
          title
          slug
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid }
            }
          }
        }
      }
    }
  }  
  `);
  const projects = data.allProjectsJson.edges;
  
  return (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Coding Samples</h1>
    <ProjectWrap>
    {projects.map(({node: project})=>{
    const title = project.title;
    const description = project.description;
    const imageData = project.image.childImageSharp.fluid;
    const slug = project.slug;
  return(
    <ProjectPreview
      title={title}
      description={description}
      imageData={imageData}
      key={slug}
    />
    );
   })}
   </ProjectWrap>
  </Layout>
)
  }

export default IndexPage
