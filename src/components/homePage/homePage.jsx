import React, { Component } from 'react';
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
      <>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h2">
              <span>Hi, I'm Manish</span>
            </Typography>
            <Typography variant="h4" color="textSecondary">
              Software Artisan
          </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <img
              src="https://amp.businessinsider.com/images/5be9ede366be501cf82e377b-750-422.jpg"
              alt="Nature"
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '100%',
                maxWidth: '500px',
                height: 'auto'
              }}
              width="800" height="500" />
          </Grid>
        </Grid>
      </>
    );
  }
}
export default withStyles(styles)(HomePage);
