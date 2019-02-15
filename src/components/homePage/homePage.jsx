import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import Typography from '@material-ui/core/Typography';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <React.Fragment>
        <Typography paragraph>
        <Typing>
          <span>Hello, my name is Manish.</span>
          <br />
          <span> This span will get typed, then erased.</span>
          <Typing.Backspace count={38} />
          <span> This span will get typed, then erased.</span>
          <Typing.Backspace count={38} />
          <span> This span will get typed, not erased.</span>          
        </Typing>
        </Typography>
        <Typography paragraph>
          Add Sub Main content here
        </Typography>
      </React.Fragment>
    );
  }
}
export default HomePage;
