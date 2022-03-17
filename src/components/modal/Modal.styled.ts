import styled from "styled-components";

export const ModalBackdrop = styled.div`
  align-items: center;
  background-color: rgba(75, 84, 100, 0.8);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 30;
`;

export const Modal = styled.dialog`
  background-color: white;
  border-radius: 4px;
  border: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  font-family: "Proxima Nova";
  gap: 20px;
  height: auto;
  height: auto;
  justify-content: start;
  left: 0;
  overflow-y: auto;
  padding: 30px;
  position: absolute;
  right: 0;
  top: 0;
  width: 100vw;

  @media screen and (min-width: ${({ theme }) => theme.breakpointTablet}) {
    gap: 40px;
    position: relative;
    width: 560px;
  }
`;
