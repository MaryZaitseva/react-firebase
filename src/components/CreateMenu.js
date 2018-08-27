import React from 'react';
import { Link } from 'react-router';
import { Grid, Button, Dropdown } from 'semantic-ui-react';

const CreateMenu = (props) => (
    <Grid container>
        <Grid.Row>
            <Grid.Column floated="left">
                <Link to="/create/upload">
                    <Button floated="left" color="grey" style={{ marginTop: '40px' }}>
                        Create automatically
                    </Button>
                </Link>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column floated="left">
                <Link to="/create/manually">
                    <Button floated="left" color="grey" style={{ marginTop: '40px' }}>
                        Create manually
                    </Button>
                </Link>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

export default CreateMenu;