m = Menu.create(
    name: "Breakfast",
  )
  5.times do
    f = m.foods.create(
      name: Faker::Food.dish,
      menu_id: m.id
    )
  end
m = Menu.create(
    name: "Dinner",
  )
  5.times do
    f = m.foods.create(
      name: Faker::Food.dish,
      menu_id: m.id
    )
  end