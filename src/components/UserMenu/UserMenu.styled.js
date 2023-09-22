import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Welcome = styled.span`
  font-weight: 700;
  color: #3498db;
  margin-right: 12px;
`;

export const LogOutBtn = styled.button`
  padding: 4px 8px;
  font-weight: 900;
  font: inherit;
  cursor: pointer;
  font-size: 15px;
  color: #fff;
  background: #3498db;
  transition: all 150ms ease-in-out;
  border-radius: 4px;
  border: none;

  &:hover {
    color: transparent;
    text-shadow: 0 0 2px #fff;
    box-shadow: 0 0 3px 0 #3498db inset, 0 0 3px 2px #3498db;
  }
`;
