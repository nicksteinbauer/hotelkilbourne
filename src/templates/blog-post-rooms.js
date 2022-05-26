import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Reservationsnew from '../components/Reservation';

import Slider from "react-slick"

import { 
  Modal, ModalHeader, ModalBody, 
  Button 
} from 'reactstrap';

export const RoomPostTemplate = ({
  content,
  contentComponent,
  featuredimage,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  const settings = {
    className: "slide-center",
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

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

    <div className='inside-md text-center section post-content'>
      <PostContent content={content} />

      <div className="button-holder text-center padding-20">
          <Button className="button-book desktop inline-block" color="warning" size="lg" onClick={toggle}>Book Now</Button>
      </div>

      <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>
            <span className="title">Reservations</span>
          </ModalHeader>
          <ModalBody>

            <div className="modal-window">
                <div className="padding-10">
                <Reservationsnew />
                </div>
            </div>

          </ModalBody>
      </Modal>

    </div>

    {gallery1 ? (
    <div className='inside-lg section post-content'>

      <h3 className='heading text-center'>Gallery</h3>
      
      <Slider {...settings}>

        {gallery1 ? (
          <PreviewCompatibleImage
            imageInfo={{
            image: gallery1,
            alt: "Room Slide 1",
            }}
          />
        ) : null}

        {gallery2 ? (
          <PreviewCompatibleImage
            imageInfo={{
            image: gallery2,
            alt: "Room Slide 2",
            }}
          />
        ) : null}

        {gallery3 ? (
          <PreviewCompatibleImage
            imageInfo={{
            image: gallery3,
            alt: "Room Slide 3",
            }}
          />
        ) : null}

        {gallery4 ? (
          <PreviewCompatibleImage
            imageInfo={{
            image: gallery4,
            alt: "Room Slide 4",
            }}
          />
        ) : null}

        {gallery5 ? (
          <PreviewCompatibleImage
            imageInfo={{
            image: gallery5,
            alt: "Room Slide 5",
            }}
          />
        ) : null}

        {gallery6 ? (
          <PreviewCompatibleImage
            imageInfo={{
            image: gallery6,
            alt: "Room Slide 6",
            }}
          />
        ) : null}

        {gallery7 ? (
          <PreviewCompatibleImage
            imageInfo={{
            image: gallery7,
            alt: "Room Slide 7",
            }}
          />
        ) : null}

        {gallery8 ? (
          <PreviewCompatibleImage
            imageInfo={{
            image: gallery8,
            alt: "Room Slide 8",
            }}
          />
        ) : null}

      </Slider>

    </div>

    ) : null}

    
    </>
  )
}

RoomPostTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  gallery1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  gallery2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  gallery3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  gallery4: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  gallery5: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  gallery6: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  gallery7: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  gallery8: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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
        gallery1={post.frontmatter.gallery1}
        gallery2={post.frontmatter.gallery2}
        gallery3={post.frontmatter.gallery3}
        gallery4={post.frontmatter.gallery4}
        gallery5={post.frontmatter.gallery5}
        gallery6={post.frontmatter.gallery6}
        gallery7={post.frontmatter.gallery7}
        gallery8={post.frontmatter.gallery8}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Room">
            <title>{`${post.frontmatter.title}`} | Hotel Kilbourne - Boutique Hotel in downtown Sandusky, Ohio</title>
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
            fluid(maxWidth: 2000, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        gallery1 {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        gallery2 {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        gallery3 {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        gallery4 {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        gallery5 {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        gallery6 {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        gallery7 {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        gallery8 {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 60) {
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
