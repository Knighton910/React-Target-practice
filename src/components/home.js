import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import SimpleSlider from './carousel'
import MapView from './leaflet'


const Home = React.createClass({
  render: function() {
    return(
      <div className="home-content">
        <div className="billboard">
          <h1 className="h1">Los Angeles</h1>

          <h4>
            1333 2nd Street
            <br />
              Suite 200
            <br />
              Santa Monica, CA 90401
          </h4>
        </div>

        <div className="body-wrapper">
          <div className="center">
            <h2 className="h2">About this Office</h2>
            <p className="intro">
              Located in the heart of downtown Santa Monica, our Los Angeles office is rapidly growing alongside the thriving 'Silicon Beach' tech community. As the central outpost for Southern Californian, Pivotal LA builds everything from mobile applications at the intersection of entertainment and technology to the next generation of financial internet backbone. Outside of work we keep busy with morning surf sessions, evening beach volleyball games, and the local tech community night life.
            </p>
          </div>

          <div className="product-nav">
            <ul>
              <li>Contact</li>
              <li>Events</li>
              <li>Featured</li>
              <li>Gallery</li>
              <li>Jobs</li>
            </ul>
          </div>

          <div className="map-director">
              <MapView/>

            <div className="director-section">
              <div className="director">
              </div>
              <h2 id="name">Sir Cookie Monster</h2>
              <h4>Office Director</h4>
              <div id="name-contact"><a>Contact</a></div>
            </div>
          </div>


          <div className="carousel">
            <SimpleSlider/>
          </div>

        </div>
      </div>
    )
  }
});

export default Home;
