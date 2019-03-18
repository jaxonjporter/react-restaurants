import React from "react";
import Food from './Food'

const MenuFood = ({ foods }) => (
  <div>
  {foods.map( food => 
    <Food key={food.id} {...food} />
    )}
  </div>
)

export default MenuFood;