import React from "react";
import { Header, Grid, } from "semantic-ui-react";
import axios from "axios"
import MenuFood from "./MenuFood"

class Menu extends React.Component {
  state = { foods: [], }

  componentDidMount() {
    // yarn add axios
    // make an axios call to our rails server to get items
    axios.get(`/api/menus/${this.props.id}/foods`)
      .then( res => {
        this.setState({ foods: res.data, })
      })
      .catch( err => {
        console.log(err);
      })
  }  
  render (){
    return (
      <div>
        <Grid.Column width={8}>
          <Header as="h2">{this.props.name}</Header>
          <MenuFood foods={this.state.foods} />
        </Grid.Column>


      </div>
    )
  }
}

export default Menu;