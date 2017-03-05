import React from 'react';
import axios from 'axios';
import GraphsPane from './graphs_pane';
import Header from './header';

class MonitoringPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceHost: null,
      user: null,
      timestamp: null,
      alarms: null,
      graphs: null
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.fetchData(), 60000);
    this.fetchData();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  fetchData() {
    const url = "/monitoring";
    axios.get(url, {timeout: 10000})
      .then(res => {
        const generated_at = res.data.generated_at;
        const graphs = res.data.graphs.sort(function(a, b) { return a.title.localeCompare(b.title) });

        this.setState({
          generated_at: generated_at,
          graphs : graphs
        });
      }).catch(err => {
        console.log(err);
        this.setState({
          generated_at: null,
          graphs: null
        });
      });
  }

  isDataValid(state) {
    return state.generated_at != null && state.graphs != null;
  }

  render() {
    let element;
    if (this.isDataValid(this.state)) {
      const fetchInfo = {
        timestamp: this.state.timestamp,
        sourceHost: this.state.sourceHost,
        user: this.state.user
      }
      element = (
        <div className="main">
          <Header fetchInfo={fetchInfo} />
          <GraphsPane graphs={this.state.graphs} />
        </div>
      );
    } else {
      element = <NoResult />;
    }

    return (element);
  }
}

function NoResult(props) {
  return (
    <div className="results red">
      <h2>Something wrong has happened :-(</h2>
    </div>
  );
}

export default MonitoringPanel;