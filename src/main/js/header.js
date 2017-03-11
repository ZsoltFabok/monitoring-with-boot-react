import React from 'react';

function Header(props) {
  return (
  <div className="header">
    <div className="title">
      Monitoring
    </div>
    <div className="information">
      <b>generated at:</b> {props.fetchInfo.generated_at}
    </div>
  </div>
  );
}

export default Header;