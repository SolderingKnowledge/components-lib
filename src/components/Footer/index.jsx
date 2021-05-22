import React from 'react';
import PropTypes from "prop-types"
import './index.css';

const Footer = ({backgroundColor}) => {
  return (
    <div id="footer" style={{backgroundColor: backgroundColor }}>
		  <p>Content of footer  </p>
		    <hr />
		      <div id="copyright">
			Copyright&copy; 2019 open source
		    </div>
	   </div>
  );
}

Footer.propTypes = {
    backgroundColor: PropTypes.string,
}

export default Footer;
