import styled from "styled-components"
import { useMutation, useQueryClient } from "react-query"
import type { Item } from "../types"
import { FiX } from "react-icons/fi"
import { deleteMenu } from "../api/menus"

type MenuProps = {
  Items: Item[]
}

type MenuItemProps = {
  item: Item
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
        <Price>{price}원</Price>
        <a onClick={() => mutate(id)}>
          <FiX className="icon" color="#121212" />
        </a>
      </Right>
    </Li>
  )
}

export const Menus = ({ Items }: MenuProps) => {
  return (
    <Container>
      {Items?.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </Container>
  )
}

const Container = styled.ul`
  list-style-type: none;
  overflow-y: scroll;
  margin-block-start: 0;
  padding-inline-start: 0;
`
const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0;
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
