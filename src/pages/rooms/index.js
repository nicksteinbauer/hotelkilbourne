import React from 'react'

import { Helmet } from 'react-helmet'
import Layout from '../../components/Layout'
import BlogRooms from '../../components/BlogRooms'
export default class RoomsIndexPage extends React.Component {
  render() {
    return (
      <Layout>

        <Helmet titleTemplate="%s | Room">
            <title>Our Rooms | Hotel Kilbourne - Boutique Hotel in downtown Sandusky, Ohio </title>
            <meta
                name="description"
                content="Lake or City View Rooms and Suites"
            />
        </Helmet>
        
        <section id='page-container'>
        <div className='top-gradient'></div>
        <div className="full-site-image flex-vertical">

            <div id='hero' className="text-center inside-xl">
                <h1 className="title">Rooms</h1>
                <h2 className="subtitle">Lake or City View Rooms and Suites</h2>
            </div>

        </div>

        </section>

        <BlogRooms />


      </Layout>
    )
  }
}
