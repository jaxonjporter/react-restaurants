import React from "react";
import Menu from "./Menu";
import { Grid, } from "semantic-ui-react"


const MenuList = ({ menus }) => (
  <Grid.Row columns={2}>
    {menus.map( menu => 
      <Menu key={menu.id} {...menu} />
      )}
  </Grid.Row>
)

export default MenuList