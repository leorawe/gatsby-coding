import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'

const ProjectInner = styled.div`
    flex: 1 33.333%;
    max-width: 280px;
    min-width: 200px;
    padding: 15px;
    background: #e4e4e4;
    margin-right: 5px;
    border-radius: 20px;
`
const ProjectPreview = ( {imageData, title, description}) => {
  return (

      <ProjectInner>
      <h2>{title}</h2>
      <Image fluid={imageData} alt="title" />
      <p>{description}</p>
      </ProjectInner>
    
  )
}

export default ProjectPreview
