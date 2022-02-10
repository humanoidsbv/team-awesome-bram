import styled from "styled-components";

export const HeaderBar = styled.div`
  position: fixed;
  width: 100vw;
  background-color: ${(props) =>
    !props.scrollPosition ? "rgba(79, 136, 239, 0.9)" : "rgb(79, 136, 239)"};
  display: flex;
  justify-content: space-between;
  height: 70px;
  padding: 0 30px;
  align-items: center;
  gap: 50px;
`;
