import React from "react";
//import VisibilitySensor from "react-visibility-sensor";


import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import paragraphs from 'lines-to-paragraphs'

//import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';


  const BlogTabbed = ( {data} ) => {
  
    const { edges: posts } = data.allMarkdownRemark

    
      return (

        <>
        
       
        <div className="tabbed-container">

        <Tab.Container id="left-tabs-example" defaultActiveKey="57c4edc3-1756-5646-a0fd-9ab3b9da559d">
          <Nav variant="pills">
            {posts &&
              posts.map(({ node: post }) => (
              
                <Nav.Item>
                  <Nav.Link eventKey={post.id}>
                    <h2>
                      {post.frontmatter.prettytitle1 ? (
                        <>
                        <span>{post.frontmatter.prettytitle1}</span><br/>
                        </>
                      ) : null}
                      {post.frontmatter.prettytitle2}
                    </h2>
                  </Nav.Link>
                </Nav.Item>

            ))}
          </Nav>

          <Tab.Content>
            {posts &&
              posts.map(({ node: post }) => (
              <Tab.Pane eventKey={post.id}>
                <article
                    className={`tab-content flex-md ${
                        post.frontmatter.featuredpost ? 'is-featured' : ''
                    }`} 
                  >
                    <div className="fifty">
                      <PreviewCompatibleImage
                        imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>

                    <div className="fifty flex-vertical">

                      <div className="contain padding-20 text-center">

                        <h2 className="h1">
                          {post.frontmatter.prettytitle1 ? (
                            <>
                            <span>{post.frontmatter.prettytitle1}</span><br/>
                            </>
                          ) : null}
                          {post.frontmatter.prettytitle2}
                        </h2>
                        <div dangerouslySetInnerHTML={{ __html: paragraphs(post.frontmatter.description) }} />
                        
                        <div className="flex-xl">
                            <Link className="button thirty3" to={post.fields.slug}>View More</Link>
                        </div>

                      </div>

                    </div>
                    
                  </article>
              </Tab.Pane>
            ))}
          </Tab.Content>

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
