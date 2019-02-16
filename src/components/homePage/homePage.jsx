import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`,
  },
});

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <React.Fragment>
        <Grid container spacing={24}>
          <Grid item xs={8}>
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
          </Grid>
          <Grid item xs={4}>
            Image here
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(HomePage);
