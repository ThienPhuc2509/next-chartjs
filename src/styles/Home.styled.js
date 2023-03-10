import styled from "styled-components";
import { mobile } from "./responsive";

export const Container = styled.div`
  background-color: #dbdfe1;
  border-radius: 4px;
  margin-top: 30px;
  padding: 40px 41px 40px 41px;

  ${mobile({
    backgroundColor: "#fff",
    padding: "0",
  })}
`;
