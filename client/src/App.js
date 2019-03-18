import React, { Component } from 'react';
import {Container, Grid, } from "semantic-ui-react"
import MenuList from './components/MenuList'
import axios from "axios"

class App extends Component {
  state = { menus: [], }

  componentDidMount() {
    // yarn add axios
    // make an axios call to our rails server to get items
    axios.get("/api/menus")
      .then( res => {
        this.setState({ menus: res.data, })
      })
      .catch( err => {
        console.log(err);
      })
  }

  render() {
    return (
      <Container>
      <h1>Welcome A Restaurante da Comida Bonita</h1>
      <Grid>
        <MenuList menus={this.state.menus} />
      </Grid>

      </Container>
    );
  }
}

export default App;
