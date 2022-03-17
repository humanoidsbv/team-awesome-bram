import styled from "styled-components";

export const TitleBar = styled.div`
  align-items: baseline;
  background-color: whirte;
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  left: 0;
  opacity: 0.9;
  padding: 30px 20px;
  position: absolute;
  top: 0;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpointTablet}) {
    font-size: 24px;
    padding: 0px;
    position: relative;
  }
`;

export const AvatarWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Avatar = styled.img`
  border-radius: 100%;
  height: 100px;
  margin: 2px;
  width: 100px;
`;

export const AvatarLabel = styled.label`
  color: ${({ theme }) => theme.greyShade700};
  font-size: 18px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.greyShade600};
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: auto;
  justify-content: space-between;
  margin-bottom: 60px;
  min-height: 100vh;
  padding-top: 60px;

  @media screen and (min-width: ${({ theme }) => theme.breakpointTablet}) {
    margin: 0;
    min-height: auto;
    padding: 0;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-around;
  width: 100%;
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
  width: 100%;

  button {
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpointTablet}) {
    margin-top: 40px;
  }
`;
