import { useCallback, useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { v4 as uuidv4 } from "uuid"
import { useMutation, useQueryClient } from "react-query"
import { createMenu } from "../api/menus"
import { Item, categories } from "../types"

type MenuModalProps = {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuModal = ({ visible, setVisible }: MenuModalProps) => {
  const queryClient = useQueryClient()
  const [form, setForm] = useState<Item>({
    id: uuidv4(),
    name: "",
    price: 0,
    category: "APPITIZER & PLATE",
  })
  const overlayRef = useRef(null)

  const { mutate } = useMutation(createMenu, {
    onSuccess: () => {
      queryClient.invalidateQueries("menus")
      // clear form state
      setForm({
        id: uuidv4(),
        name: "",
        price: 0,
        category: "APPITIZER & PLATE",
      })

      // close Modal
      closeModal()
    },
  })

  const closeModal = useCallback(() => {
    setVisible(false)
  }, [])

  const onChangeForm = useCallback(
    (e: any) => {
      setForm({ ...form, [e.target.name]: e.target.value })
    },
    [form]
  )

  const onClickOverlay = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (overlayRef.current === e.target) {
        setVisible(false)
      }
    },
    []
  )

  useEffect(() => {
    console.log(form)
  }, [form])

  return (
    <Container ref={overlayRef} onClick={onClickOverlay}>
      <Content tabIndex={0}>
        <Header>Add New Menu</Header>
        <FormContainer>
          <InputContainer>
            <Label>category</Label>
            <Select
              name="category"
              value={form.category}
              onChange={onChangeForm}
            >
              {categories.map((category) => (
                <Option key={category} value={category}>
                  {category}
                </Option>
              ))}
            </Select>
          </InputContainer>

          <InputContainer>
            <Label>menu name</Label>
            <Input
              name="name"
              value={form.name}
              placeholder="name"
              onChange={onChangeForm}
            />
          </InputContainer>

          <InputContainer>
            <Label>menu price</Label>
            <Input
              name="price"
              type="number"
              value={form.price}
              placeholder="price"
              onChange={onChangeForm}
            />
          </InputContainer>
        </FormContainer>
        <ButtonsContainer>
          <Button add={false} onClick={closeModal}>
            Cancel
          </Button>
          <Button add={true} onClick={() => mutate(form)}>
            Add
          </Button>
        </ButtonsContainer>
      </Content>
    </Container>
  )
}

const InputContainer = styled.div`
  margin-top: 0.5rem;
`

const Label = styled.label`
  font-size: 0.75rem;
  margin-left: 0.25rem;
`

const Input = styled.input`
  width: 100%;
  border: 1px solid #d7d7d9;
  border-radius: 8px;
  padding: 10px;
  outline: none;
  margin-top: 0.25rem;
  box-sizing: border-box;
`

const FormContainer = styled.div`
  width: 100%;
`

const Option = styled.option``

const Select = styled.select`
  width: 100%;
  border-color: #d7d7d9;
  border-radius: 4px;
  padding: 10px;
  outline: none;
  margin-top: 0.25rem;
`

const Container = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(48, 48, 48, 0.6);
  z-index: 999;
`

const Content = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  //border-radius: 12px;
  width: 400px;
  height: 360px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 30px 20px;
`

const Header = styled.header`
  font-weight: 600;
`
const Button = styled.button<{ add: boolean }>`
  margin-left: 1rem;
  outline: none;
  border: none;
  font-family: "Lora";
  padding: 0.8rem 1.6rem;
  cursor: pointer;
  background-color: ${(props) => (props.add ? "#000" : "#fff")};
  color: ${(props) => (props.add ? "#fff" : "#000")};
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
