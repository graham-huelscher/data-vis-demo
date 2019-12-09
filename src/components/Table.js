import React from 'react'
import { Table } from 'semantic-ui-react'

class TableSelectable extends React.Component {

    render() {

        const clickable = this.props.clickable
        const rowsJSX = this.props.trips.map((trip, i) => {
            return (
                <Table.Row key={i} onClick={() => clickable ? this.props.handleTableClick(trip): null}>
                    <Table.Cell>{trip.firstName + " " + trip.lastName}</Table.Cell>
                    <Table.Cell>{trip.date}</Table.Cell>
                    <Table.Cell>{trip.estimatedTime}</Table.Cell>
                    <Table.Cell>{trip.realTime}</Table.Cell>
                    <Table.Cell>{trip.difference}</Table.Cell>
                </Table.Row>
            )
        })

        return (
            <Table selectable = {clickable} textAlign={"center"}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Trip Date</Table.HeaderCell>
                        <Table.HeaderCell>Estimated Trip Time</Table.HeaderCell>
                        <Table.HeaderCell>Real Trip Time</Table.HeaderCell>
                        <Table.HeaderCell>Difference</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>

                    {rowsJSX}
                </Table.Body>
            </Table>)
    }
}

export default TableSelectable