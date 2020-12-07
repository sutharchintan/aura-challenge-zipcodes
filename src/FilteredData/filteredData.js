import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import "./filteredData.css";

class FilteredData extends Component {

    render() {
        return (
            <Table>            
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>zip</Table.HeaderCell>
                        <Table.HeaderCell>type</Table.HeaderCell>
                        <Table.HeaderCell>primary_city</Table.HeaderCell>
                        <Table.HeaderCell>acceptable_cities</Table.HeaderCell>
                        <Table.HeaderCell>unacceptable_cities</Table.HeaderCell>
                        <Table.HeaderCell>state</Table.HeaderCell>
                        <Table.HeaderCell>county</Table.HeaderCell>
                        <Table.HeaderCell>timezone</Table.HeaderCell>
                        <Table.HeaderCell>area_codes</Table.HeaderCell>
                        <Table.HeaderCell>latitude</Table.HeaderCell>
                        <Table.HeaderCell>longitude</Table.HeaderCell>
                        <Table.HeaderCell>country</Table.HeaderCell>
                        <Table.HeaderCell>estimated_population</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {this.props.zipcodes.map(item => {
                        return (
                            <Table.Row key={item.zip}>
                                <Table.Cell>{item.zip}</Table.Cell>
                                <Table.Cell>{item.type}</Table.Cell>
                                <Table.Cell>{item.primary_city}</Table.Cell>
                                <Table.Cell className="breakcolumn">{item.acceptable_cities}</Table.Cell>
                                <Table.Cell className="breakcolumn">{item.unacceptable_cities}</Table.Cell>
                                <Table.Cell>{item.state}</Table.Cell>
                                <Table.Cell>{item.county}</Table.Cell>
                                <Table.Cell>{item.timezone}</Table.Cell>
                                <Table.Cell>{item.area_codes}</Table.Cell>
                                <Table.Cell>{item.latitude}</Table.Cell>
                                <Table.Cell>{item.longitude}</Table.Cell>
                                <Table.Cell>{item.country}</Table.Cell>
                                <Table.Cell>{item.estimated_population}</Table.Cell>
                            </Table.Row>
                        );
                    })}
                </Table.Body>
            </Table>
        );
    }
}

export default FilteredData;