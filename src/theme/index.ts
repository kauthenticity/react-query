import styled from "styled-components"

export const RootContainer = styled.div`
  height: 100vh;
  display: flex;
  background-color: #fafafa;
`

export const Container = styled.div`
  width: 400px;
  height: 600px;
  padding: 1.5rem 3rem;
  background-color: white;
  margin: auto;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`
export const Header = styled.h1`
  text-align: center;
  color: #202021;
  font-weight: 400;
  margin: 1rem 0;
  letter-spacing: 2px;
`
