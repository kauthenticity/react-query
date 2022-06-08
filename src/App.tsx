import { useQuery } from "react-query"
import { getMenusAll } from "./api/menus"
import { queryKeys } from "./query/queryKey"
import { Menus, MenuInput, Loading } from "./components"
import { RootContainer, Container, Header } from "./theme"

function App() {
  const { data, isLoading, error } = useQuery(queryKeys.menus, getMenusAll)
  return (
    <RootContainer>
      <Container>
        <Header>MENU</Header>
        <MenuInput />
        {isLoading ? <Loading /> : <Menus Items={data} />}
      </Container>
    </RootContainer>
  )
}

export default App
