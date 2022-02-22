import styled from "styled-components";

export const TimeEntryWrapper = styled.div`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.greyShade300};
  border-left: 4px solid ${({ theme }) => theme.blueShade300};
  border-radius: 4px;
  display: flex;
  height: 80px;
  width: 100%;
`;

export const TimeEntry = styled.div`
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  justify-content: space-between;
  padding: 0 15px;
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  flex: 0 0 auto;
  height: 100%;
  width: 40px;

  :hover {
    border: 1px dashed rgba(0, 0, 0, 0.2);

    svg {
      fill: ${({ theme }) => theme.redShade300};
    }
  }
`;

export const ClientLabel = styled.h4`
  color: ${({ theme }) => theme.greyShade700};
  font-size: 18px;
`;

export const HoursWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: right;
`;

export const Hours = styled.p`
  font-size: 18px;
`;

export const TotalHours = styled.p`
  color: ${({ theme }) => theme.greyShade500};
  font-size: 14px;
`;
