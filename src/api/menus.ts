import axios from "axios"
import type { Item } from "../types"

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-type": "application/json",
  },
})

export const getMenusAll = () => {
  const Items = apiClient.get("/items").then((res) => {
    return res.data.Items
  })
  return Items
}

export const createMenu = async ({ id, price, name }: Item) => {
  console.log(id, price, name)
  const { data } = await apiClient.put("/items", {
    price: price,
    name: name,
    id: id,
  })

  return data
}

export const deleteMenu = async (id: string) => {
  const { data } = await apiClient.delete(`/items/${id}`)
  return data
}
