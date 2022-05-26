import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const AmenitiesPageTemplate = ({ title, content, contentComponent, featuredimage }) => {
  const PageContent = contentComponent || Content

  return (
    
    <>
    <section id='page-container' className='single-post'>
     
      <div className='top-gradient'></div>
      <div className="full-site-image flex-vertical">

          <div id='hero' className="text-center inside-xl">
              <h1 className="title">{title}</h1>
              
          </div>

          <PreviewCompatibleImage
          imageInfo={{
            image: featuredimage,
            alt: "background",
          }}
        />


      </div>

    </section>
             
      <PageContent className="content" content={content} />

    </>
 
  )
}

AmenitiesPageTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AmenitiesPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AmenitiesPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        featuredimage={post.frontmatter.featuredimage}
      />
    </Layout>
  )
}

AmenitiesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AmenitiesPage

export const amenitiesPageQuery = graphql`
  query AmenitiesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
