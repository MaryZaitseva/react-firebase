import React from 'react';
import { Link } from 'react-router';
import { Grid, Button, Dropdown } from 'semantic-ui-react';

const Home = (props) => (
    <Grid container>
        <Grid.Row>
            <Grid.Column floated="left">
                <Link to="/create">
                    <Button floated="left" color="grey" style={{ marginTop: '40px' }}>
                        Create new car
                    </Button>
                </Link>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column floated="left">
                <Link to="/data">
                    <Button floated="left" color="grey" style={{ marginTop: '40px' }}>
                        Dataset
                    </Button>
                </Link>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column floated="left">
                <Link to="/setup">
                    <Button floated="left" color="grey" style={{ marginTop: '40px' }}>
                        Setup
                    </Button>
                </Link>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

export default Home;