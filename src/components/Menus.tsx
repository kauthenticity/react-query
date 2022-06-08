import styled from "styled-components"
import type { Item } from "../types"

type MenuProps = {
  Items: Item[]
}

type MenuItemProps = {
  item: Item
}

const MenuItem = ({ item }: MenuItemProps) => {
  const { id, price, name } = item
  return (
    <Li>
      {id}
      {price}
      {name}
    </Li>
  )
}

export const Menus = ({ Items }: MenuProps) => {
  return (
    <Container>
      {Items.map((item) => (
        <MenuItem item={item} />
      ))}
    </Container>
  )
}

const Container = styled.ul``
const Li = styled.li``
