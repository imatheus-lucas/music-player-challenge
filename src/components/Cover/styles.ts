import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  /* justify-content: center;
  align-items: center; */

  img {
    align-self: center;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;

    @media (min-width: 575px) {
      width: 80%;
    }

    @media (min-width: 700px) {
      width: 40%;
    }
    @media (min-width: 1040px) {
      width: 25%;
    }

    box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.4);
  }
`;

export const CoverDescription = styled.div`
  margin-top: 3rem;
  h1 {
    font-size: 1.6rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.secondary};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.tertiary};
    opacity: 0.6;
  }
`;
