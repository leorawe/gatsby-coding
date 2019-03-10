import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'

const ProjectInner = styled.div`
    flex: 1 33.333%;
    max-width: 250px;
    min-width: 220px;
    padding: 10px;
    background: linen;
    margin-right: 5px;
    border-radius: 20px;
    border: 1px solid #999999;
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
