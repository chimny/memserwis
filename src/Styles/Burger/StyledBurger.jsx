import styled from "styled-components";
import React, {useContext} from "react";
import {AppContext} from "../../Context/AppContext";

const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${props => props.open ? ({ theme }) => theme.primaryDark : ({ theme }) => theme.primaryLight};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

export const Burger = () => {
 const {open, setOpen} = useContext(AppContext);

 const openHandler= ()=> {
     setOpen((openState)=>!openState);
 }
  return (
    <StyledBurger onClick={openHandler} open={open}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}