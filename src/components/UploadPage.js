import React from 'react';
import { Link } from 'react-router';
import { Grid, Button, Dropdown, Form, Input, Label, Icon } from 'semantic-ui-react';

const CreateMenu = (props) => (
    <Grid container>
        <Grid.Row>
            <Grid.Column floated="left">
            <Label width="4" as="label" htmlFor="file" size="big" style={{ marginTop:'50px', cursor: 'pointer' }}>
			  <Icon name="file" />
			  Upload file
			</Label>
			<input id="file" hidden type="file" />
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

export default CreateMenu;