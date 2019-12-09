import React, { Component } from 'react'
import Chart from "chart.js";

class DoughnutChart extends Component {
  chartRef = React.createRef();


  componentDidUpdate() {
    this.myChart.data.labels = this.props.data.labels;
    this.myChart.data.datasets[0].data = this.props.data.values;
    this.myChart.update();
  }

  componentDidMount() {
    this.myChart = new Chart(this.chartRef.current, {
      type: 'doughnut',
      data: {
        labels: this.props.data.labels,
        datasets: [{
          data: this.props.data.values,
          backgroundColor: ["blue", "black", "red"]
        }]
      },
      options: {
        title: {
          display: true,
          text: this.props.data.title,
          fontSize: 34,
          fontColor: "black"
        },
        onClick: (e) => {
          const chartElement = this.myChart.getElementAtEvent(e)[0]
          if (chartElement) {
            this.props.handleClick(chartElement._index);
          }
        }
      }
    });
  }

  render() {
    return <canvas ref={this.chartRef} />;
  }
}

export default DoughnutChart