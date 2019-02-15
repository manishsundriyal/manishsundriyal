import React, { Component } from 'react';

// import components
import ResponsiveDrawer from '../responsiveDrawer/responsiveDrawer';


class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <ResponsiveDrawer />
    );
  }
}
export default MainLayout;