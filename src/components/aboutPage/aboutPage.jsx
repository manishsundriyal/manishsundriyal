import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <React.Fragment>
        <Typography paragraph>
          Add Main content here for About Page
        </Typography>
        <Typography paragraph>
          Add Sub Main content here for About Page
        </Typography>
      </React.Fragment>
    );
  }
}
export default AboutPage;
