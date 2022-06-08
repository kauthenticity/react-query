import { useCallback, useState } from "react"
import styled from "styled-components"
import { v4 as uuidv4 } from "uuid"
import { createMenu } from "../api/menus"
import { useMutation, useQueryClient } from "react-query"

export const MenuInput = () => {
  const queryClient = useQueryClient()
  const [name, setName] = useState<string>("")
  const [price, setPrice] = useState<number>(0)
  const { mutate } = useMutation(createMenu, {
    onSuccess: () => queryClient.invalidateQueries("menus"),
  })

  return (
    <Container>
      <Input
        value={name}
        placeholder="메뉴 이름"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="number"
        placeholder="가격"
        onChange={(e) => setPrice(parseInt(e.target.value))}
      />
      <Button onClick={() => mutate({ id: uuidv4(), name, price })}>Go</Button>
    </Container>
  )
}

const Container = styled.div`
  width: 80%;

  display: flex;
  justify-content: space-between;
  margin: 2rem auto;
`

const Input = styled.input`
  width: 100%;
`
const Button = styled.button``
