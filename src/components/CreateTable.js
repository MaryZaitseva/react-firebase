import React, { Component }  from 'react';
import moment from 'moment';
import { browserHistory } from 'react-router';
import _ from 'lodash';
import { Table, Grid, Button, Icon, Dropdown, Menu, Input } from 'semantic-ui-react';
import { Link } from 'react-router';
import firebase from '../firebase';

class CreateTable extends Component {
    state = {
        userId: 0,
        id: '',
        invoice: '',
        brand: '',
        model: '',
        class: '',
        registrationDate: '',
        vin: '',
        '21': '',
        '22': '',
        kilometer: '',
        HU: '',
        number: '',
        p2: '',
        p21: '',
        capacity: '',
        fuel: '',
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
        sellingDate: ''
    };

    componentWillMount() {
        /*var starCountRef = firebase.database().ref('/users/' + this.state.userId + '/cars');
        starCountRef.on('value', snapshot => {
          let dataObject = snapshot.val();
          this.setState({ ...dataObject })
        });*/
    }

    getHeaderRows = () => (
        <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Invoice Number</Table.HeaderCell>
            <Table.HeaderCell>Brand</Table.HeaderCell>
            <Table.HeaderCell>Model</Table.HeaderCell>
            <Table.HeaderCell>Class</Table.HeaderCell>
            <Table.HeaderCell>Registration Date</Table.HeaderCell>
            <Table.HeaderCell>VIN</Table.HeaderCell>
            <Table.HeaderCell>2.1</Table.HeaderCell>
            <Table.HeaderCell>2.2</Table.HeaderCell>
            <Table.HeaderCell>Kilometer</Table.HeaderCell>
            <Table.HeaderCell>HU</Table.HeaderCell>
            <Table.HeaderCell>Number</Table.HeaderCell>
            <Table.HeaderCell>p2</Table.HeaderCell>
            <Table.HeaderCell>p21</Table.HeaderCell>
            <Table.HeaderCell>Capacity</Table.HeaderCell>
            <Table.HeaderCell>Fuel</Table.HeaderCell>
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
        let columns = [ 'id', 'invoice', 'brand', 'model', 'class', 'registrationDate', 'vin', '21', '22', 
            'kilometer', 'HU', 'number', 'p2', 'p21', 'capacity', 'fuel', 'euro', 'gear', 'owner', 
            'name', 'street', 'postCode', 'city', 'country', 'amount', 
            'vat', 'amountWithVat', 'sellingDate'
        ]
        return columns.map((column, index) => {
            return (
                <Table.Cell key={ index }>
                    <Input
                        type={ column.includes('Date') ? 'date' : 'text'}
                        style={{ width: '90px'}}
                        onChange={ e => { this.setState({ [column]: e.target.value }) }}
                        value = { this.state[column] }
                    />
                </Table.Cell>
            )
        })              
    };

    saveData = () => {
        let newData = this.state;
        let { userId, ...rest } = newData;
        let newCar = firebase.database().ref('users/' + userId + '/cars').push();
        newCar.set({
            ...rest
        }, err => {
            if(err){
                console.log(err)
            } else{
                browserHistory.push('/')
            }
        })
    }

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
                            <Button 
                                floated='right' 
                                color="grey" 
                                style={{ marginRight: '10%' }}
                                onClick={ this.saveData }
                            >
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