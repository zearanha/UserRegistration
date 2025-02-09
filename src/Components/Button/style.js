import styled from "styled-components";

export const Button = styled.button`
  border: ${(props) => (props.theme === "primary" ? "none" : "1px solid #fff")};
  background: ${(props) =>
    props.theme === "primary"
      ? "linear-gradient(180deg, #fe7e5d 0%, #ff6378)"
      : "transparent"};
  font-size: 16px;
  color: #fff;
  padding: 16px 32px;
  width: fit-content;
  cursor: pointer;
  border-radius: 30px;

  &:hover {
    background: ${props => props.theme === 'primary' ? '#e65' : '#120f36'};
    opacity: ${props => props.theme === 'primary' ? 0.8 : 0.8};
  }

  &:active {
    background: ${props => props.theme === 'primary' ? '#e65' : '#120f36'};
    opacity: ${props => props.theme === 'primary' ? 0.5 : 0.5};
  }
`;
