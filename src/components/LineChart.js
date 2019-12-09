import React, { Component } from 'react'
import Chart from "chart.js";

class LineChart extends Component {
    constructor(props) {
      super(props);
      this.chartRef = React.createRef();
    }
  
    componentDidMount() {
      this.myChart = new Chart(this.chartRef.current, {
        type: 'line',
        options: {
          scales: {
            xAxes: [
              {
                type: 'time',
                time: {
                  unit: 'day'
                }
              }
            ],
            yAxes: [
              {
                ticks: {
                  min: 0
                }
              }
            ]
          }
        },
        data: {
          labels: this.props.data.times,
          datasets: [{
            label: this.props.title,
            data: this.props.data.values,
            fill: 'none',
            backgroundColor: "blue",
            pointRadius: 2,
            borderColor: "blue",
            borderWidth: 1
          }]
        }
      });
    }
  
    render() {
      return <canvas ref={this.chartRef} />;
    }
  }

  export default LineChart