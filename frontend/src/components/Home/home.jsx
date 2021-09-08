import React, { Component } from "react";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <img
          alt='Uber Eats Home'
          src='https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg'
          width='146'
          height='24'
          // class='ca c3 cb'
        />
      </div>
    );
  }
}

export default HomePage;
