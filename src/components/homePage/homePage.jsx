import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

// import components
import ResponsiveDrawer from '../responsiveDrawer/responsiveDrawer';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <ResponsiveDrawer>
        <Typography paragraph>
            Add Main content here
          </Typography>
          <Typography paragraph>
          Add Sub Main content here
          </Typography>
      </ResponsiveDrawer>
    );
  }
}
export default HomePage;
