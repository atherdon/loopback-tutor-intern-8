import React, { Component } from 'react';
import './App.css';

import Body from './body.js';
import Features from './features.js';
import { Carousel } from 'react-bootstrap';
import Bottom from './bottom.js';
import Featureslist from './featureslist.js';

class App extends Component {
  render() {
    return (
      <div>
      <div className="body">

      <Body />
      </div>
      <div className="sectiontwo">
        <Features img="fas fa-shopping-cart fa-2x" heading="Organize your shopping experience" content="Do you want to spend less? Do you want to reduce your impulse purchases? Grocery lists can help you. You'll buy only foods that you need."/>
        <Features img="fas fa-mobile-alt fa-2x" heading="Mobile-oriented design (completed by Bootstrap)" content="You can manage all data from your phone. You always carry your smartphone, instead of paper lists. Your lists on your phone, period."/>
        <Features img="fas fa-cogs fa-2x" heading="Customization" content="This is your own lists. You can do anything."/>
        </div>
        <div className="sectiontwo">
        <Features img="" heading="Quick access (coming soon)" content="Search ingredients in database, at your lists"/>
        <Features img="" heading="Favourite ingredients (Coming soon)" content="Save your favorite ingredients for fast access later"/>
        <Features img="" heading="Plan your family budget (coming soon)" content="You can calculate and plan your purchases. Control how much do you spend on this shopping session"/>
        </div>
        <div className="row">
        <div className="sectionthree col-md-6 col-md-push-3 col-md-pull-3">
       <Carousel>
          <Carousel.Item>
           <p className="caraouseltext">Food shoppers who reported “always” using a shopping list had significantly higher dietary quality. ... After applying a Bonferroni correction ... the association between those who always used a list and knowledge of eating fruits and vegetables, and trying to eat fewer calories [was eliminated]. </p>
            </Carousel.Item>
          <Carousel.Item>
          <p className="caraouseltext"> Food shoppers who reported “always” using a shopping list had significantly higher dietary quality. ... After applying a Bonferroni correction ... the association between those who always used a list and knowledge of eating fruits and vegetables, and trying to eat fewer calories [was eliminated].  </p>
            </Carousel.Item>
          <Carousel.Item>
          <p className="caraouseltext"> Food shoppers who reported “always” using a shopping list had significantly higher dietary quality. ... After applying a Bonferroni correction ... the association between those who always used a list and knowledge of eating fruits and vegetables, and trying to eat fewer calories [was eliminated]. </p>
            </Carousel.Item>
        </Carousel>
      </div>
      </div>
  <div className="row"> 
  <Bottom / >
  < /div>
  <div className="outer-container container">
  <Featureslist content="Instant Handles (coming soon)" />
  <Featureslist content="Save and share your lists (coming soon)" />
  <Featureslist content="Plan your family budget (coming soon)" />
  <Featureslist content="Improve your health and live longer" />
  <Featureslist content="Save time by cloning Ultimate Template" />
  </div>
  <div className="social-container">
    <div className="social-icon">
    <i className="fab  fa-facebook-f"></i>
    </div>
    <i className="fab social-icon fa-2x fa-twitter"></i>
    <i className="fas social-icon fa-2x fa-envelope"></i>
    <i className="fab social-icon fa-2x fa-github"></i>
  </div>
  </div>

    );
  }
}

export default App;
