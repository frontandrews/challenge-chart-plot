import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import AceCodeEditor from "./components/AceCodeEditor";
import DinamicChart from "./components/HighCharts/DinamicChart";
import SplitterLayout from "react-splitter-layout";

import "react-splitter-layout/lib/index.css";

const initialData = `{type: 'start', timestamp: 1519862400000, select: ['min_response_time', 'max_response_time'], group: ['os', 'browser']}
{type: 'span', timestamp: 1519862400000, begin: 1519862400000, end: 1519862600000}
{type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}
{type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'chrome', min_response_time: 0.2, max_response_time: 1.2}
{type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.2}
{type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'firefox', min_response_time: 0.1, max_response_time: 1.0}
{type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'chrome', min_response_time: 0.2, max_response_time: 0.9}
{type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.0}
{type: 'data', timestamp: 1519862600000, os: 'mac', browser: 'firefox', min_response_time: 0.2, max_response_time: 1.1}
{type: 'data', timestamp: 1519862600000, os: 'linux', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.4}
{type: 'stop', timestamp: 1519862600000}`;

const jsonInitialData = [
  {
     "type":"start",
     "timestamp":1519862400000,
     "select":[
        "min_response_time",
        "max_response_time"
     ],
     "group":[
        "os",
        "browser"
     ]
  },
  {
     "type":"span",
     "timestamp":1519862400000,
     "begin":1519862400000,
     "end":1519862600000
  },
  {
     "type":"data",
     "timestamp":1519862400000,
     "os":"linux",
     "browser":"chrome",
     "min_response_time":0.1,
     "max_response_time":1.3
  },
  {
     "type":"data",
     "timestamp":1519862400000,
     "os":"mac",
     "browser":"chrome",
     "min_response_time":0.2,
     "max_response_time":1.2
  },
  {
     "type":"data",
     "timestamp":1519862400000,
     "os":"mac",
     "browser":"firefox",
     "min_response_time":0.3,
     "max_response_time":1.2
  },
  {
     "type":"data",
     "timestamp":1519862400000,
     "os":"linux",
     "browser":"firefox",
     "min_response_time":0.1,
     "max_response_time":1.0
  },
  {
     "type":"data",
     "timestamp":1519862400000,
     "os":"linux",
     "browser":"chrome",
     "min_response_time":0.2,
     "max_response_time":0.9
  },
  {
     "type":"data",
     "timestamp":1519862400000,
     "os":"mac",
     "browser":"chrome",
     "min_response_time":0.1,
     "max_response_time":1.0
  },
  {
     "type":"data",
     "timestamp":1519862600000,
     "os":"mac",
     "browser":"firefox",
     "min_response_time":0.2,
     "max_response_time":1.1
  },
  {
     "type":"data",
     "timestamp":1519862600000,
     "os":"linux",
     "browser":"firefox",
     "min_response_time":0.3,
     "max_response_time":1.4
  },
  {
     "type":"stop",
     "timestamp":1519862600000
}];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      name: "Andrews Ribeiro Gomes",
      code: initialData,
      chartData: initialData,
      chartHeight: "370px",
      chartType: "line"
    };
  }

  handleClick = () => {
    this.setState({ chartData: this.state.code });
  };

  handleChange = (newValue) => {
    this.setState({ code: newValue });
  };

  render() {
    const { name, code, chartData, chartType } = this.state;
    return (
      <div className="App">
        <Header myName={name} />
        <SplitterLayout
          vertical={true}
          percentage={true}
          primaryIndex={0}
          secondaryInitialSize={60}
          primaryMinSize={26}
          secondaryMinSize={52}
        >
          <div className="input">
            <AceCodeEditor
              value={code}
              defaultValue={code}
              onChange={this.handleChange}
            />
          </div>
          <DinamicChart chartData={chartData} type={chartType} />
        </SplitterLayout>
        <Footer handleClick={this.handleClick} />
      </div>
    );
  }
}
