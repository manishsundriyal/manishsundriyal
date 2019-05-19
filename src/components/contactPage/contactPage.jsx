import React, { Component } from 'react';
import { unstable_Box as Box } from '@material-ui/core/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faMedium, faFacebookSquare, faTwitterSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <React.Fragment>
        <Box display="flex" justifyContent="center" m={5} p={5}>
        <Box p={5}>
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </Box>
        <Box p={5}>
          <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
        </Box>
        <Box p={5}>
          <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
        </Box>
        <Box p={5}>
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </Box>
        <Box p={5}>
          <FontAwesomeIcon icon={faGithubSquare} size="2x" />
        </Box>
        <Box p={5}>
          <FontAwesomeIcon icon={faMedium} size="2x" />
        </Box>
      </Box>
      </React.Fragment>
    );
  }
}
export default ContactPage;
