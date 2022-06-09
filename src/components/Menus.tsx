import styled from "styled-components"
import { useMutation, useQueryClient } from "react-query"
import { Item, categories } from "../types"
import { FiX } from "react-icons/fi"
import { deleteMenu } from "../api/menus"

type MenuProps = {
  Items: Item[]
}

type MenuItemProps = {
  item: Item
}

type CategoryItemProps = {
  Items: Item[]
  category: string
}

const MenuItem = ({ item }: MenuItemProps) => {
  const queryClient = useQueryClient()
  const { id, price, name } = item

  const { mutate } = useMutation(deleteMenu, {
    onSuccess: () => queryClient.invalidateQueries("menus"),
  })

  return (
    <Li>
      <Name>{name}</Name>
      <Right>
        <Price>{Number(price).toLocaleString("ko-KR")}</Price>
        <A onClick={() => mutate(id)}>
          <FiX className="icon" color="#121212" size={10} />
        </A>
      </Right>
    </Li>
  )
}

const CategoryItem = ({ Items, category }: CategoryItemProps) => {
  console.log(Items[0].category)
  const menus = Items.filter((item) => item.category == category)
  console.log(menus)
  return (
    <CategoryItemContainer>
      <Category>{category}</Category>
      <Ul>
        {menus.map((menu) => (
          <MenuItem item={menu} />
        ))}
      </Ul>
    </CategoryItemContainer>
  )
}

export const Menus = ({ Items }: MenuProps) => {
  return (
    <Container>
      {categories.map((category) => (
        <CategoryItem category={category} Items={Items} />
      ))}
    </Container>
  )
}

const A = styled.a`
  display: flex;
`

const Category = styled.span`
  font-size: 1.1rem;
`

const Container = styled.div`
  overflow-y: scroll;
  height: 450px;
`

const CategoryItemContainer = styled.div`
  margin-bottom: 2rem;
`

const Ul = styled.ul`
  list-style-type: none;

  margin-block-start: 0;
  padding-inline-start: 0;
`
const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0;
  padding-inline-start: 1rem;
  //font-size: 0.8rem;
`

const Right = styled.div`
  display: flex;
  align-items: center;

  .icon {
    cursor: pointer;
  }
`

const Price = styled.div`
  margin-right: 0.5rem;
`

const Name = styled.div``
