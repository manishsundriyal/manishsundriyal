import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <React.Fragment>
        <Typography paragraph>
          Add Main content here for BLog Page
        </Typography>
        <Typography paragraph>
          Add Sub Main content here for Blog Page
        </Typography>
      </React.Fragment>
    );
  }
}
export default BlogPage;
