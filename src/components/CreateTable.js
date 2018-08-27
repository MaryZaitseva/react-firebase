import React, { Component }  from 'react';
import moment from 'moment';
import _ from 'lodash';
import { Table, Grid, Button, Icon, Dropdown, Menu, Input } from 'semantic-ui-react';
import { Link } from 'react-router';
import firebase from '../firebase';

class CreateTable extends Component {
    state = {
        id: '',
        invoice: '',
        d1: '',
        d3: '',
        '5': '',
        B: '',
        E: '',
        '21': '',
        '22': '',
        kilometer: '',
        HU: '',
        number: '',
        p2: '',
        p21: '',
        p1: '',
        p3: '',
        euro: '',
        gear: '',
        owner: '',
        name: '',
        street: '',
        postCode: '',
        city: '',
        country: '',
        amount: '',
        vat: '',
        amountWithVat: '',
        sellingDate: null
    };

    dropdownOptions = [
        {
            text: '5',
            value: 5
        },
        {
            text: '10',
            value: 10
        },
        {
            text: '15',
            value: 15
        },
        {
            text: '20',
            value: 20
        },
        {
            text: '25',
            value: 25
        },
        {
            text: '30',
            value: 30
        },
        {
            text: '40',
            value: 40
        },
        {
            text: '50',
            value: 50
        }
    ];


    componentDidMount() {
        var starCountRef = firebase.database().ref('/');
        starCountRef.on('value', snapshot => {
          let dataObject = snapshot.val().cars;
          this.setState({ ...dataObject })
        });
    }

    getHeaderRows = () => (
        <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Invoice Number</Table.HeaderCell>
            <Table.HeaderCell>d1</Table.HeaderCell>
            <Table.HeaderCell>d3</Table.HeaderCell>
            <Table.HeaderCell>5</Table.HeaderCell>
            <Table.HeaderCell>B</Table.HeaderCell>
            <Table.HeaderCell>E</Table.HeaderCell>
            <Table.HeaderCell>2.1</Table.HeaderCell>
            <Table.HeaderCell>2.2</Table.HeaderCell>
            <Table.HeaderCell>Kilometer</Table.HeaderCell>
            <Table.HeaderCell>HU</Table.HeaderCell>
            <Table.HeaderCell>Number</Table.HeaderCell>
            <Table.HeaderCell>p2</Table.HeaderCell>
            <Table.HeaderCell>p21</Table.HeaderCell>
            <Table.HeaderCell>p1</Table.HeaderCell>
            <Table.HeaderCell>p3</Table.HeaderCell>
            <Table.HeaderCell>Euro</Table.HeaderCell>
            <Table.HeaderCell>Gear</Table.HeaderCell>
            <Table.HeaderCell>Owner</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Street</Table.HeaderCell>
            <Table.HeaderCell>Post Code</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Country</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.HeaderCell>Vat</Table.HeaderCell>
            <Table.HeaderCell>Amount with vat</Table.HeaderCell>
            <Table.HeaderCell>Selling Date</Table.HeaderCell>
        </Table.Row>
    );

    getTableData = projects => {
        return Object.keys(this.state).map((objectKey, index) => {
                    console.log(objectKey)
                    let value = this.state[objectKey];
                    return (
                        <Table.Cell key={ index }>
                            <Input
                                style={{ width: '90px'}}
                                onChange={ e => { this.setState({ [objectKey]: e.target.value }) }}
                                value = { value }
                            />
                        </Table.Cell>
                    )
                })
            
    };

    render() {
        return (
            <Grid>                
                <Grid.Row>
                    <Grid.Column style={{ width: '90%', overflowX: 'scroll', margin: '100px auto'}}>
                        <Table 
                            color="grey">
                            <Table.Header>
                            { this.getHeaderRows() }
                            </Table.Header>
                            <Table.Body>
                            <Table.Row>
                            { this.getTableData() }
                            </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                    <Grid.Row style={{ width: '100%' }}> 
                    <Grid.Column >
                            <Button floated='right' color="grey" style={{ marginRight: '10%' }}>
                                Save
                            </Button>
                    </Grid.Column>
                </Grid.Row>
                </Grid.Row>
            </Grid>
        )
    }
}

export default CreateTable;