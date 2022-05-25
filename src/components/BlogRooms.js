import React from 'react';

import PropTypes from 'prop-types'

import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import paragraphs from 'lines-to-paragraphs'




  const BlogRooms = ( {data} ) => {
  
    const { edges: posts } = data.allMarkdownRemark

    

    
      return (

        <>
        
       
        <div className="tabbed-container page-content">

          
          <div className="padding-20">
          
            
            {posts &&
              posts.map(({ node: post }) => (
              
                <article
                    className={`tab-content flex-md padding-20 ${
                        post.frontmatter.featuredpost ? 'is-featured' : ''
                    }`} 
                  >
                    <div className="fifty padding-20 flex-vertical">
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
                           
                        </div>

                      </div>

                    </div>
                    
                  </article>
              
            ))}
            
         
          </div>
        

       
        </div>

        


        </>


      )
  
}

BlogRooms.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query BlogRoomsQuery {
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
    render={(data, count) => <BlogRooms data={data} count={count} />}
  />
)
