import styled from "styled-components";
export const Container = styled.div``;

export const Controls = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    width: 50%;

    flex-direction: row;
    justify-content: space-between;
    button {
      cursor: pointer;
      background: transparent;
      border: 0;
      transition: filter 0.2s;
      svg {
        fill: ${(props) => props.theme.colors.secondary};
      }
      &:hover {
        filter: brightness(0.5);
      }
    }
  }
`;

export const Progress = styled.div`
  display: flex;
  align-items: center;
  gap: 1;
  padding: 3rem;
`;

export const Timer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;

  span {
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors.tertiary};
  }
`;
