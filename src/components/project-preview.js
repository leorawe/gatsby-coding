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
    p {
      font-size: .65rem;
      line-height: .75rem;
      padding: 10px 0;
      
      }
    a, a:link, a:visited, :any-link {
      text-decoration: none;
      border-bottom: 2px dotted #ddd;
      color: #666666;
      }  
    a:hover {
      border-bottom: 2px solid #ddd;
    }
`
const ProjectPreview = ( {imageData, title, description, source, url}) => {
  return (

      <ProjectInner>
      <h2><a href={url} target="_blank" rel="noopener noreferrer">{title}</a></h2>
      <Image fluid={imageData} alt="title" />
      <p>{description}</p>
      <p><a href={source} target="_blank" rel="noopener noreferrer">View source code</a> <br />
      <a href={url} target="_blank" rel="noopener noreferrer">View project demo</a></p>
      </ProjectInner>
    
  )
}

export default ProjectPreview
