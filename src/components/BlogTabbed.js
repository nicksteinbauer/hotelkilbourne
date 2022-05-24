import React, { useState } from 'react';

import Reservationsnew from './Reservation';
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import paragraphs from 'lines-to-paragraphs'

//import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

import { 
  Modal, ModalHeader, ModalBody, 
  Button 
} from 'reactstrap';



  const BlogTabbed = ( {data} ) => {
  
    const { edges: posts } = data.allMarkdownRemark

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    
      return (

        <>
        
       
        <div className="tabbed-container">

        <Tab.Container id="left-tabs-example" defaultActiveKey="lakeviewking">
          <Nav variant="pills">
            {posts &&
              posts.map(({ node: post }) => (
              
                <Nav.Item>
                  <Nav.Link eventKey={post.frontmatter.tabkey}>
                    <div className="flex-vertical">
                    <h2>
                      {post.frontmatter.prettytitle1 ? (
                        <div>{post.frontmatter.prettytitle1}</div>
                      ) : null}
                      {post.frontmatter.prettytitle2 ? (
                        <div>{post.frontmatter.prettytitle2}</div>
                      ) : null}
                      {post.frontmatter.prettytitle3 ? (
                        <div>{post.frontmatter.prettytitle3}</div>
                      ) : null}
                    </h2>
                    </div>
                  </Nav.Link>
                </Nav.Item>

            ))}
          </Nav>
          <div className="padding-20">
          <Tab.Content>
            
            {posts &&
              posts.map(({ node: post }) => (
              <Tab.Pane eventKey={post.frontmatter.tabkey}>
                <article
                    className={`tab-content flex-md ${
                        post.frontmatter.featuredpost ? 'is-featured' : ''
                    }`} 
                  >
                    <div className="fifty padding-20">
                      <PreviewCompatibleImage
                        imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>

                    <div className="fifty flex-vertical">

                      <div className="contain padding-20 text-center">

                        <h2>
                          {post.frontmatter.prettytitle1 ? (
                            <div>{post.frontmatter.prettytitle1}</div>
                          ) : null}
                          {post.frontmatter.prettytitle2 ? (
                            <div>{post.frontmatter.prettytitle2}</div>
                          ) : null}
                          {post.frontmatter.prettytitle3 ? (
                            <div>{post.frontmatter.prettytitle3}</div>
                          ) : null}
                        </h2>
                        <div className='title' dangerouslySetInnerHTML={{ __html: paragraphs(post.frontmatter.description) }} />
                        
                        <div className="flex-xl justify-center">
                            <Link className="btn-warning button-book btn" to={post.fields.slug}>View Room</Link>
                            <Button className="button-book" color="warning" size="md" onClick={toggle}>Book Now</Button>
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

                      </div>

                    </div>
                    
                  </article>
              </Tab.Pane>
            ))}
            
          </Tab.Content>
          </div>
        </Tab.Container>

       
        </div>

        


        </>


      )
  
}

BlogTabbed.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query BlogTabbedQuery {
      allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {featuredroom: {eq: true}}})  {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                prettytitle1
                prettytitle2
                prettytitle3
                tabkey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                description
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 80) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogTabbed data={data} count={count} />}
  />
)
