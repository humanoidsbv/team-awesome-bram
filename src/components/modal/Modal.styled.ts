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
  display: flex;
  flex-direction: column;
  font-family: "Proxima Nova";
  gap: 40px;
  height: 100vh;
  min-width: 360px;
  overflow: hidden;
  padding: 30px;
  position: absolute;
  width: 100vw;

  @media screen and (min-width: ${({ theme }) => theme.breakpointTablet}) {
    height: auto;
    width: 560px;
    position: relative;
  }
`;

export const TitleBar = styled.div`
  align-items: baseline;
  display: flex;
  font-size: 18px;
  justify-content: space-between;

  @media screen and (min-width: ${({ theme }) => theme.breakpointTablet}) {
    font-size: 24px;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.greyShade600};
`;

export const CloseButton = styled.button`
  background-color: white;
  border: 0;
`;

export const ButtonBar = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  margin-top: auto;

  button {
    width: 100%;
  }
`;
