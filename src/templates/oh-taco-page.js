import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import BlogGalleryTaco from '../components/BlogGalleryTaco'

export const OhTacoPageTemplate = ({ title, content, contentComponent, featuredimage }) => {
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

    <section className='inside-md text-center padding-40 post-content'>
             
      <PageContent className="content" content={content} />

    </section>

    <section className='inside-lg text-center padding-40 post-content'>
      <BlogGalleryTaco />
    </section>

    </>
 
  )
}

OhTacoPageTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const OhTacoPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <OhTacoPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        featuredimage={post.frontmatter.featuredimage}
      />
    </Layout>
  )
}

OhTacoPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default OhTacoPage

export const ohTacoPageQuery = graphql`
  query OhTacoPage($id: String!) {
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
