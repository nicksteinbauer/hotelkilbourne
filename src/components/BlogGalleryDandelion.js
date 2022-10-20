import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

import Slider from "react-slick"

  

class BlogGalleryDandelion extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
          nav1: null,
          nav2: null
        };
      }
    
      componentDidMount() {
        this.setState({
          nav1: this.slider1,
          nav2: this.slider2
        });
      }



  render() {

    var settings = {
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            }
          ]
        }



    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    

      return (
        <div className="project-pre-loop">
            <Slider
                asNavFor={this.state.nav2}
                ref={slider => (this.slider1 = slider)}
                className='main-slider'
            >
              {posts &&
                posts.map(({ node: post }) => (
                <div className="pro-loop" key={post.id}>
                    <article
                    className={`blog-list-item tile is-child box notification ${
                        post.frontmatter.featuredpost ? 'is-featured' : ''
                    }`}
                    >
                    <div className="test-gallery">
                        
                        {post.frontmatter.featuredimage ? (
                        <div className="featured-thumbnail animateThis">
                            <div className="animateThat">
                                <PreviewCompatibleImage
                                    imageInfo={{
                                    image: post.frontmatter.featuredimage,
                                    alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                    }}
                                />
                            </div>
                            
                        </div>
                        ) : null}

                    </div>
                  </article>
                </div>
                
              ))}
            </Slider>
            <Slider
                asNavFor={this.state.nav1}
                ref={slider => (this.slider2 = slider)}
                slidesToShow={3}
                centerMode={true}
                swipeToSlide={true}
                focusOnSelect={true}
                arrows={false}
                infinite={true}
                className='slider-nav'
                {...settings}
            >
              {posts &&
                posts.map(({ node: post }) => (
                <div className="pro-loop" key={post.id}>
                    <article
                    className={`blog-list-item tile is-child box notification ${
                        post.frontmatter.featuredpost ? 'is-featured' : ''
                    }`}
                    >
                    <div className="test-gallery">
                        
                        {post.frontmatter.featuredimage ? (
                        <div className="featured-thumbnail animateThis">
                            <div className="animateThat">
                            <PreviewCompatibleImage
                            imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                            }}
                            />
                            </div>
                        </div>
                        ) : null}

                    </div>
                  </article>
                </div>
                
              ))}
            </Slider>
        </div>
      )
  }
}

BlogGalleryDandelion.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query BlogGalleryDandelionQuery {
        allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {roomassociated: {eq: "dandelion"}}}) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                subtitle
                linktext
                link
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 2560, quality: 70) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }            
    `}
    render={(data, count) => <BlogGalleryDandelion data={data} count={count} />}
  />
)
