import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { chartData } from "../../../services/chartData";
export default class DinamicChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          type: this.props.type ? this.props.type : 'line',
        },
        yAxis: {
          labels: false,
        },
        xAxis: {
          labels: {
            formatter: function () {
              return "00:00:" + this.value;
            },
          },
        },
        title: false,
        legend: {
          layout: "vertical",
          align: "right",
          verticalAlign: "middle",
        },
        plotOptions: {
          series: {
            label: {},
          },
        },
        series: chartData(this.props.chartData).seriesChartValues,
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500,
              },
              chartOptions: {
                legend: {
                  layout: "horizontal",
                  align: "center",
                  verticalAlign: "bottom",
                },
              },
            },
          ],
        },
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    const newOptions = {
      chart: {
        type: "line",
      },
      yAxis: {
        labels: false,
      },
      xAxis: {
        labels: {
          formatter: function () {
            return "00:00:" + this.value;
          },
        },
      },
      title: false,
      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "middle",
      },
      plotOptions: {
        series: {
          label: {},
        },
      },
      series: chartData(nextProps.chartData).seriesChartValues,
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom",
              },
            },
          },
        ],
      },
    };

    this.setState({ options: newOptions });
  }

  render() {
    const { options } = this.state;
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}
