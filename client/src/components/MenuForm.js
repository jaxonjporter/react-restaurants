import React from "react";
import { Form, } from "semantic-ui-react";

export default class MenuForm extends React.Component {
  state = {name: "", };

  handleChange = (e) => {
    this.setState({ name: e.target.value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addMenu(this.state.name);
    this.setState({ name: "", });
    // todo call a function that will make post request
  }


  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Menu"
          placeholder="Add a Menu"
          name="menu"
          requiredvalue={this.state.name}
          onChange={this.handleChange}
        />
      </Form>
    )
  }
}