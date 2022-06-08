import { useCallback } from "react"
import styled from "styled-components"

type ClickHereProps = {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const CilckHere = ({ visible, setVisible }: ClickHereProps) => {
  const onClickAdd = useCallback(() => {
    setVisible(true)
  }, [])
  return (
    <Container>
      <A onClick={onClickAdd}>click HERE to add more menu.</A>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const A = styled.a`
  cursor: pointer;
  &:after {
    display: block;
    content: "";
    padding-bottom: 2px;
    border-bottom: solid 1px #202021;
    transform: scaleX(0);
    transition: transform 0.3s linear;
  }
  &:hover {
    &:after {
      padding-bottom: 2px;
      transform: scaleX(1);
      /* transform-origin: 0% 50%; */
    }
  }
`
