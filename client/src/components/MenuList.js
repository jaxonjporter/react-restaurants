import React from "react";
import Menu from "./Menu";
import { Grid, } from "semantic-ui-react"


const MenuList = ({ menus, deleteMenu, updateMenu }) => (
  <Grid.Row columns={2}>
    {menus.map( menu => 
      <Menu key={menu.id} {...menu} deleteMenu={deleteMenu} updateMenu={updateMenu} />
      )}
  </Grid.Row>
)

export default MenuList