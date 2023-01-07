import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem;
  transition: all 0.5s;
  @media (max-width: 700px) {
    padding: 3rem 0;
  }
`;

export const ChooseThemeButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: 0;
  cursor: pointer;
  padding: 1rem;

  border-radius: 50%;

  transition: all 0.2s;

  ${({ theme }) => {
    if (theme.title === "dark") {
      return `box-shadow: 17px 17px 23px #1e1732, -17px -17px 23px #1e1732,
      inset 5px 5px 4px #1e2226, inset -5px -5px 4px #1e1732;`;
    } else {
      return `box-shadow: 7px 7px 15px -10px #bbcfda, -4px -4px 13px #ffffff,
      inset 7px 7px 3px rgba(209, 217, 230, 0.5),
      inset -11px -11px 3px rgba(255, 255, 255, 0.3); `;
    }
  }}

  &:hover {
    filter: brightness(0.8);
    transform: scale(1.2);
  }
`;
