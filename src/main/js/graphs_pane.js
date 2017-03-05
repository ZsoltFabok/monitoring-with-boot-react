import React from 'react';
import {AreaChart, Area, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';


function Graph(props) {
  const data = props.data.data;
  const title = props.data.title;
  const colors = ['#17A589', '#D4AC0D', '#CB4335', '#17202A', '#7D3C98'];
  var colorId = 0;

  var areas = [];
  Object.keys(data[0]).forEach((area) => {
      areas.push(<Area key={area}
        type='monotone'
        dataKey={area}
        stackId="1"
        stroke={colors[colorId]}
        fill={colors[colorId]}
        isAnimationActive={false}/>);
      ++colorId;
  });
  areas.reverse();

  return (
    <div className="figure">
      <div className="chart_title">{title}</div>
      <ResponsiveContainer width="90%" height={250}>
        <AreaChart
          data={data}
          margin={{top: 20, bottom: 20, left: 0, right: 0}} >
          <Tooltip/>
          <YAxis />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          {areas}
          <Legend layout="horizontal" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

function GraphsPane(props) {
  var graphs = [];
  if (props.graphs) {
    props.graphs.forEach((graph) => {
      graphs.push(<Graph key={graph.title} data={graph} />)
    });
  }

  return (
    <div className="graphs">
      {graphs}
    </div>
  );
}

export default GraphsPane;