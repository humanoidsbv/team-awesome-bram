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

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100%;
  justify-content: space-between;
`;

export const DateTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: stretch;

  @media screen and (min-width: ${({ theme }) => theme.breakpointTablet}) {
    flex-direction: row;
  }
`;

export const DateInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpointTablet}) {
    width: 200px;
  }
`;

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
`;

export const TimeInputContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 20px;
  justify-content: flex-start;
`;

export const TimeInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  width: 100px;
`;

export const Label = styled.p`
  color: ${({ theme }) => theme.greyShade600};
  font-size: 14px;
  font-weight: 600;
  margin-bottom: auto;
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.greyShade400};
  box-shadow: none;
  flex: 1 0 auto;
  font-size: 14px;
  height: 40px;
  margin-bottom: 20px;
  padding-left: 15px;
  width: 100%;
`;

export const TotalTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TotalTime = styled.p`
  align-items: center;
  align-self: flex-end;
  color: ${({ theme }) => theme.greyShade600};
  display: flex;
  font-size: 24px;
  height: 40px;
`;

export const Select = styled.select`
  font-size: 24px;
`;
