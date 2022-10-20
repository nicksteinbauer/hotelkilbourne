import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import BlogGalleryMoseleys from '../components/BlogGalleryMoseleys'

export const MoseleysPageTemplate = ({ title, content, contentComponent, featuredimage }) => {
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
      <BlogGalleryMoseleys />
    </section>


    </>
 
  )
}

MoseleysPageTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const MoseleysPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <MoseleysPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        featuredimage={post.frontmatter.featuredimage}
      />
    </Layout>
  )
}

MoseleysPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MoseleysPage

export const moseleysPageQuery = graphql`
  query MoseleysPage($id: String!) {
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
