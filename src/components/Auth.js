import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Grid, Form, Button, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import firebase from '../firebase';


export default class Auth extends Component {

    state = {
        login: '',
        password: ''
    };

    render() {
      var starCountRef = firebase.database().ref('/');
starCountRef.on('value', function(snapshot) {
  console.log(snapshot.val())
});
        return (
            <Grid container centered columns={2}>
                <Grid.Column>
                        <Form onSubmit={ () => { browserHistory.push('/') }} style={{ marginTop:'50px' }}>
                            <Form.Field>
                                <label style={{ display:'inline-block', textAlign: 'right' }}>Login</label>
                                <input type="text"
                                       placeholder="Type your login"
                                       name="login"
                                       value={ this.state.login }
                                       onChange={(e) => { this.setState({ login: e.target.value }) } } />
                            </Form.Field>
                            <Form.Field>
                                <label style={{ display:'inline-block', textAlign: 'right' }}>Password</label>
                                <input type="password"
                                       placeholder="Type your password"
                                       name="password"
                                       value={ this.state.password }
                                       onChange={ (e) => { this.setState({ password: e.target.value }) } }/>
                            </Form.Field>
                            
                            <Form.Field>
                                <Button type='submit' color="grey">Submit</Button>
                            </Form.Field>
                        </Form>
                </Grid.Column>
            </Grid>
        );
    }
}