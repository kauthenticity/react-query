import { useState } from "react"
import { useQuery } from "react-query"
import { getMenusAll } from "./api/menus"
import { queryKeys } from "./query/queryKey"
import { Menus, MenuInput, MenuModal, Loading, CilckHere } from "./components"
import { RootContainer, Container, Header } from "./theme"

function App() {
  const { data, isLoading, error } = useQuery(queryKeys.menus, getMenusAll)
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <RootContainer>
      <Container>
        <Header>MENU</Header>
        <CilckHere visible={visible} setVisible={setVisible} />
        {visible && <MenuModal visible={visible} setVisible={setVisible} />}

        {isLoading ? <Loading /> : <Menus Items={data} />}
      </Container>
    </RootContainer>
  )
}

export default App
