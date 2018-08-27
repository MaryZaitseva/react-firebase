import React from 'react';
import { Link } from 'react-router';
import { Grid, Button, Dropdown, Form } from 'semantic-ui-react';

const CreateMenu = (props) => (
    <Grid container>
        <Grid.Row>
            <Grid.Column floated="left">
                
                    <Button floated="left" color="grey" style={{ marginTop: '40px' }}>
                        Upload
                    </Button>
                
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

export default CreateMenu;