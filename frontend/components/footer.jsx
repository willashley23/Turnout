import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="footer-container">
        <div className="footer-content">
          <ul>
            <li className="footer-li"><i className="fa fa-github footer-icon" aria-hidden="true"></i><a href="https://github.com/willashley23/Turnout" className="footer-a">Github</a></li>
            <li className="footer-li"><i className="fa fa-google footer-icon" aria-hidden="true"></i>willashley23@gmail.com</li>
            <br/>
            <li className="footer-li"><i className="fa fa-linkedin footer-icon" aria-hidden="true"></i><a href="https://www.linkedin.com/in/willashley23?trk=hp-identity-name" className="footer-a">LinkedIn</a></li>
            <li className="footer-li"><i className="fa fa-code footer-icon" aria-hidden="true"></i><a href="http://willashley23.github.io/webdev.html" className="footer-a">willashley23.github.io/webdev.html</a></li>
          </ul>
        </div>
      </div>
    )
  };
}