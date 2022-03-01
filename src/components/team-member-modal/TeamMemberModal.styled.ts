import styled from "styled-components";

export const TitleBar = styled.div`
  align-items: baseline;
  display: flex;
  font-size: 18px;
  justify-content: space-between;

  @media screen and (min-width: ${({ theme }) => theme.breakpointTablet}) {
    font-size: 24px;
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
  height: 100%;
  justify-content: space-between;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.p`
  color: ${({ theme }) => theme.greyShade600};
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Input = styled.input<{ moreHeight?: true }>`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.greyShade400};
  box-shadow: none;
  flex: 1 0 auto;
  font-size: 14px;
  height: ${({ moreHeight }) => (moreHeight ? "70px" : "40px")};
  padding-left: 15px;
  width: 100%;
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
`;
