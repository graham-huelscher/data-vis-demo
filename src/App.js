import React, { Component } from 'react';
import './App.css';

import { Container } from 'semantic-ui-react'
import DoughnutChart from './components/DoughnutChart'
import Table from './components/Table'
import LineChart from './components/LineChart'
import 'semantic-ui-css/semantic.css'

import data from './data/trips'
import { Button } from 'semantic-ui-react';

const greaterThan10 = data.filter(item => {
  return (item.difference >= 10 && item.difference < 20)
})
let greaterThan10Count = greaterThan10.length

const greaterThan20 = data.filter(item => {
  return (item.difference >= 20 && item.difference < 25)
})
let greaterThan20Count = greaterThan20.length

const greaterThan25 = data.filter(item => {
  return item.difference >= 25
})
let greaterThan25Count = greaterThan25.length

const graphData = {
  title: "Estimated to Real Time Trip Difference",
  labels: ["Greater than 10 mins ", "Greater than 20 mins", "Greater than 25 mins"], 
  values: [greaterThan10Count, greaterThan20Count, greaterThan25Count]
}

const tripsArr = [greaterThan10, greaterThan20, greaterThan25]



class App extends Component {

  state = {
    stack: []
  }

  componentDidMount() {
    this.setState({
      stack: [<DoughnutChart
        data={graphData}
        handleClick={this.handleDonutClick}
      />]
    })
  }

  handleDonutClick = (indexToDrill) => {
    this.setState({
      stack: [...this.state.stack, <Table clickable={true} handleTableClick={this.handleTableClick} trips={tripsArr[indexToDrill]} />]
    })
  }

  handleTableClick = (row) => {
    const trips = data.filter(item => item.id === row.id)
    const lineData = {
      values: [],
      times: []
    }

    trips.forEach(trip => {
      lineData.values.push(trip.difference)
      lineData.times.push(trip.date)
    })



    this.setState({
      stack: [...this.state.stack, (
        <div>
          <Table trips={trips} clickable={false}/>
          <LineChart title={`${trips[0].firstName} ${trips[0].lastName}'s Performance Over Time`}
            data={lineData}
          />
        </div>
      )]
    })
  }

  handleBack = () => {
    const newStack = this.state.stack
    newStack.pop()
    this.setState({
      stack: newStack
    })
  }

  render() {
    return (
      <Container>
        {this.state.stack.length > 1 ? <Button onClick={() => this.handleBack()}>Back</Button> : null}
        {this.state.stack[this.state.stack.length - 1]}
      </Container>
    )
  }

}

export default App;
