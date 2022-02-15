import styled from "styled-components";

export const TimeEntryWrapper = styled.div`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.greyShade300};
  border-radius: 4px;
  border-left: 4px solid ${({ theme }) => theme.blueShade300};
  display: flex;
  height: 80px;
  width: 100%;
`;

export const TimeEntry = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 1 auto;
  padding: 0 15px;
`;

export const DeleteButton = styled.button`
  width: 40px;
  height: 100%;
  border: none;
  flex: 0 0 auto;
  background-color: transparent;

  :hover {
    border: 1px dashed rgba(0, 0, 0, 0.2);
    svg {
      path {
        fill: ${({ theme }) => theme.redShade300};
      }
    }
  }
`;

export const OrganizationLabel = styled.h3`
  font-size: 18px;
  color: ${({ theme }) => theme.greyShade700};
`;

export const HoursWrapper = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Hours = styled.h4`
  font-size: 18px;
`;

export const TotalHours = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.greyShade500};
`;
