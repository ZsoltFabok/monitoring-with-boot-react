import React from 'react';
import ReactDOM from 'react-dom';
import MonitoringPanel from './monitoring_panel';


function Monitoring(props) {
  return (
    <MonitoringPanel />
  );
}

ReactDOM.render(
  <Monitoring />,
  document.getElementById('monitoring')
);
