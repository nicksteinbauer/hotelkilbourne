import React from 'react';
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import 
//Content, 
{ HTMLContent } from '../components/Content'

import { Button } from 'reactstrap';

import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Layout from '../components/Layout'

import BlogTabbed from '../components/BlogTabbed';
//import BlogRoll from '../components/BlogRoll'

import { Link } from 'react-scroll'

export const IndexPageTemplate = ({ image, title, description, content, contentComponent }) => {
  //const PageContent = contentComponent || Content

  
  return (


    <>
    <section id='hero-container'>
      <div className='top-gradient'></div>
      <div className="full-site-image flex-vertical">

        <div id='hero' className="text-center">
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">{description}</h2>
          <Button className="button-book" color="warning" size="lg">
            <Link activeClass="active" className="pointy-button" to="linky-tabbed" spy={true} smooth={true} duration={1000}>
              View Rooms
            </Link>

          </Button>
        </div>


        <PreviewCompatibleImage
          imageInfo={{
            image: image.childImageSharp.fluid.src,
            alt: "background",
          }}
        />

        
      </div>

    </section>

    <section id='tabbed'>
      <span className='linky' id='linky-tabbed'> Linky </span>
      <BlogTabbed />

    </section>
      
      
      {/*

        <PageContent className="content" content={content} />
          
      */}

      
      

    </>


  )
}





IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { markdownRemark: post } = data
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        description={frontmatter.description}
        contentComponent={HTMLContent}
        content={post.html}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
      }
    }
  }
`
