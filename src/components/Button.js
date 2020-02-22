import styled from "styled-components"


export const BUttonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.1rem solid var(--mainBlue); 
  color: var(--mainBlue);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margine: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.2s ease-in-out;
  &: hover{
    background: var(--mainBlue);
    color: var(--lightBlue);
  }
  &: focus{
    outline: none;
  }
`;