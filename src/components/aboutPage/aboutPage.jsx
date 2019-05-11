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
        <Typography variant="h4">
          I'm Manish Sundriyal, <br/> A Software Developer from Delhi, India.
          <br/> Please take a look around!
        </Typography>
        <br />
        <Typography variant="h6">
          I am passionate about building things that make a difference.<br />
          I love to solve problems that may or may not related to code.<br />
          Always up to learn, explore and build cool things.
        </Typography>
      </React.Fragment>
    );
  }
}
export default AboutPage;
