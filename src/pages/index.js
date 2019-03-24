import React from "react"
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectPreview from "../components/project-preview"

const MyHeading = styled.h1`
margin: .5rem auto;
padding: 0 10%;
`

const ProjectWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: .5rem auto;
    justify-content: center;
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
          source
          url
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
    <SEO title="Coding Samples by Leora Wenger" keywords={[`gatsby`, `application`, `react`]} />
    <MyHeading>Coding Samples</MyHeading>
    <ProjectWrap>
    
    {projects.map(({node: project})=>{
    const title = project.title;
    const description = project.description;
    const imageData = project.image.childImageSharp.fluid;
    const slug = project.slug;
    const source = project.source;
    const url = project.url;
  return(
    <ProjectPreview
      title={title}
      description={description}
      imageData={imageData}
      source={source}
      url={url}
      key={slug}
    />
    );
   })}
   </ProjectWrap>
  </Layout>
)
  }

export default IndexPage
