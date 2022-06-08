import { useQuery } from "react-query"
import { getMenusAll } from "./api/menus"
import { queryKeys } from "./query/queryKey"
import { Menus, MenuInput } from "./components"
import { RootContainer, Container } from "./theme"

function App() {
  const { data, isLoading, error } = useQuery(queryKeys.menus, getMenusAll)
  console.log(data)
  return (
    <RootContainer>
      <Container>
        <MenuInput />
        <Menus Items={data} />
      </Container>
    </RootContainer>
  )
}

export default App
