import React, { useState } from "react";
import styled from "styled-components";
import { colorsSet } from "../Global/Colors";
import { Icon } from "react-icons-kit";
import { x } from "react-icons-kit/feather/x";
import { useDispatch } from "react-redux";
import { removeItem } from "../actions";
import { range } from "../utils";
import Item from "./Item";

const CartItem = ({ name, quantity, id, numInStock }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <TopDiv>
        <Title>{name}</Title>
        <RemoveBtn>
          <Icon
            onClick={() => dispatch(removeItem(id))}
            icon={x}
            size={"100%"}
            style={{ color: `${colorsSet.primary}` }}
          />
        </RemoveBtn>
      </TopDiv>
      {/* <QtyDiv>
        Quantity: {quantity}
        <Input type="quantity" />
      </QtyDiv> */}
      <Form>
        <Label for="quantity">Quantity:</Label>
        <Dropdown
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max={numInStock}
          step="1"
        />
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  width: 88%;
  border-radius: 12px;
  box-shadow: 0px 8px 23px -2px rgba(22, 98, 108, 0.3);
  margin-top: 20%;
  padding: 10px;
`;

const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  color: black;
  font-size: 1.2em;
  padding: 8px;
`;

const RemoveBtn = styled.button`
  height: 35px;
  width: 35px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const QtyDiv = styled.div`
  padding: 8px;
  color: black;
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid ${colorsSet.primary};
  height: 20px;
  width: 20px;
  font-size: inherit;
  display: inline-block;
`;

const Form = styled.form``;
const Label = styled.label``;
const Dropdown = styled.input``;

export default CartItem;
