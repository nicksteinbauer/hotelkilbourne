import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

//import Slider from "react-slick"

export const RoomPostTemplate = ({
  content,
  contentComponent,
 
  featuredimage,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
<>
    <section id='page-container' className='single-post'>
      {helmet || ''}
      <div className='top-gradient'></div>
      <div className="full-site-image flex-vertical">

          <div id='hero' className="text-center inside-xl">
              <h1 className="title">{title}</h1>
              
          </div>

          <PreviewCompatibleImage imageInfo={featuredimage} />


      </div>

    </section>

    <div className='inside-xl section post-content'>
      <PostContent content={content} />
    </div>


    
    </>
  )
}

RoomPostTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const RoomPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <RoomPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        featuredimage={post.frontmatter.featuredimage}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Room">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

RoomPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default RoomPost

export const pageQuery = graphql`
  query RoomPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 840, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        tags
      }
    }
  }
`
