import React, { Component } from 'react';
import {Container, Grid, } from "semantic-ui-react";
import MenuList from './components/MenuList';
import axios from "axios";
import MenuForm from './components/MenuForm';

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

  addMenu = (name) => {
    // TODO make api call to rails server
    // TODO update state with new todo
    axios.post("/api/menus", { name })
      .then( res => {
        const { menus, } = this.state;
        this.setState({ menus: [...menus, res.data],});
      })
  }

  updateMenu = (id) => {
// I need to make a form for the update
    axios.put(`/api/menus/${id}`)
      .then( res => {
        const menus = this.state.menus.map( m => {
          if (m.id === id)
          return res.data;
        return m;
        })
        this.setState({ menus, });
      })
  }

  deleteMenu = (id) => {
    // TODO make api to destroy todo
    // TODO update state
    axios.delete(`/api/menus/${id}`)
      .then( res => {
        const { menus, } = this.state;
        this.setState({ menus: menus.filter( m => m.id !== id ), })
      })
  }
  

  render() {
    return (
      <Container>
      <h1>Welcome A Restaurante da Comida Bonita</h1>
      <Grid>
        <MenuList menus={this.state.menus} updateMenu={this.updateMenu} deleteMenu={this.deleteMenu} />
      </Grid>
      <MenuForm addMenu={this.addMenu}/>

      </Container>
    );
  }
}

export default App;
