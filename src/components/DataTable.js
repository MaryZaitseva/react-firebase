import React, { Component }  from 'react';
import moment from 'moment';
import _ from 'lodash';
import { browserHistory } from 'react-router';
import { Table, Grid, Button, Icon, Dropdown, Menu, Input } from 'semantic-ui-react';
import { Link } from 'react-router';
import firebase from '../firebase';

export default class DataTable extends Component {
	state = {
		userId: 0,
		cars: [], 
		direction: '',
		filtered: null,
		deletedItems: [],
        searchQuery: ''
	}

    componentWillMount() {
        var starCountRef = firebase.database().ref('/users/' + this.state.userId + '/cars');
        starCountRef.on('value', snapshot => {
          this.setState({cars: snapshot.val()})
        });
    };

    getHeaderRows = () => (
        <Table.Row>
            <Table.HeaderCell
            	sorted={this.state.column === 'id' ? this.state.direction : null}
                onClick={ e => this.handleSort('id')}>
            	ID
            </Table.HeaderCell>
            <Table.HeaderCell
            	sorted={this.state.column === 'invoice' ? this.state.direction : null}
                onClick={ e => this.handleSort('invoice')}>
            	Invoice Number
            </Table.HeaderCell>
            <Table.HeaderCell
            	sorted={this.state.column === 'd1' ? this.state.direction : null}
                onClick={ e => this.handleSort('d1')}>
            	d1
            </Table.HeaderCell>
            <Table.HeaderCell
            	sorted={this.state.column === 'd3' ? this.state.direction : null}
                onClick={ e => this.handleSort('d3')}>
            	d3
            </Table.HeaderCell>
            <Table.HeaderCell
            	sorted={this.state.column === '5' ? this.state.direction : null}
                onClick={ e => this.handleSort('5')}>
            	5
            </Table.HeaderCell>
            <Table.HeaderCell
            	sorted={this.state.column === 'B' ? this.state.direction : null}
                onClick={ e => this.handleSort('B')}>
            	B
            </Table.HeaderCell>
            <Table.HeaderCell
            	sorted={this.state.column === 'vin' ? this.state.direction : null}
                onClick={ e => this.handleSort('vin')}>
            	VIN
            </Table.HeaderCell>
            <Table.HeaderCell
            	sorted={this.state.column === '21' ? this.state.direction : null}
                onClick={ e => this.handleSort('21')}>
            	2.1
            </Table.HeaderCell>
            <Table.HeaderCell
            	sorted={this.state.column === '22' ? this.state.direction : null}
                onClick={ e => this.handleSort('22')}>
            	2.2
            </Table.HeaderCell>
            <Table.HeaderCell
            	sorted={this.state.column === 'kilometer' ? this.state.direction : null}
                onClick={ e => this.handleSort('kilometer')}>
            	Kilometer
            </Table.HeaderCell>
            <Table.HeaderCell
            	sorted={this.state.column === 'HU' ? this.state.direction : null}
                onClick={ e => this.handleSort('HU')}>
            	HU
            </Table.HeaderCell>
            <Table.HeaderCell
            	sorted={this.state.column === 'number' ? this.state.direction : null}
                onClick={ e => this.handleSort('number')}>
            	Number
            </Table.HeaderCell>
            <Table.HeaderCell
            	sorted={this.state.column === 'p2' ? this.state.direction : null}
                onClick={ e => this.handleSort('p2')}>
            	p2
            </Table.HeaderCell>
            <Table.HeaderCell
            	sorted={this.state.column === 'p21' ? this.state.direction : null}
                onClick={ e => this.handleSort('p21')}>
            	p21
            </Table.HeaderCell>
            <Table.HeaderCell
            	sorted={this.state.column === 'p1' ? this.state.direction : null}
                onClick={ e => this.handleSort('p1')}>
            	p1
            </Table.HeaderCell>
            <Table.HeaderCell
            	sorted={this.state.column === 'p3' ? this.state.direction : null}
                onClick={ e => this.handleSort('p3')}>
            	p3
            </Table.HeaderCell>
            <Table.HeaderCell
            	sorted={this.state.column === 'euro' ? this.state.direction : null}
                onClick={ e => this.handleSort('euro')}>
            	Euro
            </Table.HeaderCell>
            <Table.HeaderCell
            	sorted={this.state.column === 'gear' ? this.state.direction : null}
                onClick={ e => this.handleSort('gear')}>
            	Gear
            </Table.HeaderCell>
            <Table.HeaderCell
            	sorted={this.state.column === 'owner' ? this.state.direction : null}
                onClick={ e => this.handleSort('owner')}>
            	Owner
            </Table.HeaderCell>
            <Table.HeaderCell
            	sorted={this.state.column === 'name' ? this.state.direction : null}
                onClick={ e => this.handleSort('name')}>
            	Name
            </Table.HeaderCell>
            <Table.HeaderCell
            	sorted={this.state.column === 'street' ? this.state.direction : null}
                onClick={ e => this.handleSort('street')}>
            	Street
            </Table.HeaderCell>
            <Table.HeaderCell
            	sorted={this.state.column === 'postCode' ? this.state.direction : null}
                onClick={ e => this.handleSort('postCode')}>
            	Post Code
            </Table.HeaderCell>
            <Table.HeaderCell
            	sorted={this.state.column === 'city' ? this.state.direction : null}
                onClick={ e => this.handleSort('city')}>
            	City
            </Table.HeaderCell>
            <Table.HeaderCell
            	sorted={this.state.column === 'country' ? this.state.direction : null}
                onClick={ e => this.handleSort('country')}>
            	Country
            </Table.HeaderCell>
            <Table.HeaderCell
            	sorted={this.state.column === 'amount' ? this.state.direction : null}
                onClick={ e => this.handleSort('amount')}>
            	Amount
            </Table.HeaderCell>
            <Table.HeaderCell
            	sorted={this.state.column === 'vat' ? this.state.direction : null}
                onClick={ e => this.handleSort('vat')}>
            	Vat
            </Table.HeaderCell>
            <Table.HeaderCell
            	sorted={this.state.column === 'amountWithVat' ? this.state.direction : null}
                onClick={ e => this.handleSort('amountWithVat')}>
            	Amount with vat
            </Table.HeaderCell>
            <Table.HeaderCell
            	sorted={this.state.column === 'sellingDate' ? this.state.direction : null}
                onClick={ e => this.handleSort('sellingDate')}>
            	Selling Date
            </Table.HeaderCell>
            <Table.HeaderCell>
            	Delete Item
            </Table.HeaderCell>
        </Table.Row>
    );

    handleItemDelete = key => {
    	this.setState({ 
    		deletedItems: [...this.state.deletedItems, this.state.cars[key]],
    		cars: _.omit(this.state.cars, key)
    	})
    }

    handleSort = clickedColumn => {
        const { column, cars, direction } = this.state;
        let sortedKeys = Object.keys(cars).sort((a,b) => {
        	if(cars[a][clickedColumn] < cars[b][clickedColumn]) return -1;
        	if(cars[a][clickedColumn] > cars[b][clickedColumn]) return 1;
        	return 0
        })
        
        let sortedItems = sortedKeys.map(key => (cars[key]));
        if (column !== clickedColumn) {
            this.setState({
                column: clickedColumn,
                cars: sortedItems,
                direction: 'ascending',
            });
            return
        }
        else{
        	this.setState({
            	cars: direction === 'ascending' ? sortedItems.reverse() : sortedItems,
            	direction: direction === 'ascending' ? 'descending' : 'ascending',
        	});
        }        
    };

    getTableData = projects => {
        let columns = [ 'id', 'invoice', 'd1', 'd3', '5', 'B', 'vin', '21', '22', 
            'kilometer', 'HU', 'number', 'p2', 'p21', 'p1', 'p3', 'euro', 'gear', 'owner', 
            'name', 'street', 'postCode', 'city', 'country', 'amount', 
            'vat', 'amountWithVat', 'sellingDate'
        ]
        let items = this.state.filtered || this.state.cars;
        let keys = Object.keys(items);
        return keys.map((key, keyIndex) => {
        	return (
        		<Table.Row key={ keyIndex }> {
        			columns.map((column, columnIndex) => {
            			return (
                			<Table.Cell key={ columnIndex }>
			                    <Input
			                        type={ column === 'sellingDate' ? 'date' : 'text'}
			                        style={{ width: column === 'sellingDate' ? '170px' : '90px'}}
			                        onChange={ e => { 
			                        	let cars = { ...this.state.cars };
			                        	cars[key][column] = e.target.value;
			                        	this.setState({ cars: cars }) 
			                    	}}
			                        value = { items[key][column] }
			                    />
			                </Table.Cell>
            )
        })
        		} 
        		<Table.Cell>
        			<Icon 
        				name='trash'
        				onClick={ e => { this.handleItemDelete(key) }}
        			/>
        		</Table.Cell>
        		</Table.Row>)	  
        }) 
    };

    saveData = () => {
        firebase.database().ref('users/' + this.state.userId).set({
            cars: this.state.cars
        }, err => {
            if(err){
                console.log(err)
            } else{
                browserHistory.push('/')
            }
        });
    }

    handleSearchChange = () => {
        console.log(query)
        let query = this.state.searchQuery;
        let cars = this.state.cars;
        if(query){
            let filteredKeys = Object.keys(cars).filter(key => {
            return cars[key].vin.toLowerCase().includes(query) || cars[key].d3.toLowerCase().includes(query)
            })
             let filtered = {};
            filteredKeys.map(key => {
                filtered[key] = cars[key]
            })
            this.setState({ filtered })
        }else{
            this.setState({filtered: null, searchQuery: ''})
        }
        
    }

    render(){
    	return (
            <Grid>
            <Grid.Row>
                <Grid.Column style={{ width: '90%'}}>
                <Input 
                    placeholder='Search for VIN or Model' 
                    style={{ marginLeft: '10%', marginTop: '20px'}}
                    onChange = { e => {
                         this.setState({searchQuery: e.target.value}, () => this.handleSearchChange())
                    } }
                />
                </Grid.Column>
            </Grid.Row>            
                <Grid.Row>
                    <Grid.Column style={{ width: '90%', overflowX: 'scroll', margin: '0px auto'}}>
                        <Table sortable celled
                            color="grey">
                            <Table.Header>
                            { this.getHeaderRows() }
                            </Table.Header>
                            <Table.Body>
                            { this.getTableData() }
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