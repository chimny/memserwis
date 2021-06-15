import React, {useContext} from "react";

import {AppContext} from "../../../Context/AppContext";
import { StyledBurger } from "./StyledBurger";




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

