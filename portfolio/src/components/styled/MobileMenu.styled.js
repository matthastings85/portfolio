import styled from "styled-components";

const StyledMobileMenu = styled.div`
  display: none;
  padding: 0.5rem;
  cursor: pointer;

  > * {
    height: 3px;
    width: ${({ hide, menu }) => (hide && !menu ? "30px" : "35px")};
    margin: ${({ hide, menu }) => (hide && !menu ? "0.2rem 0" : "0.5rem 0")};
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: transform 0.75s ease, opacity 0.75s ease, width 0.75s ease;
    border-radius: 2px;
    &:nth-of-type(1) {
      transform: ${({ menu, hide }) =>
        menu && "translate(-10px) rotate(45deg) translate(15.5px)"};
      width: ${({ menu, hide }) => hide && !menu && "30px"};
    }
    &:nth-of-type(2) {
      width: ${({ hide }) => (hide ? "25px" : "30px")};
      opacity: ${(props) => props.menu && "0"};
    }
    &:nth-of-type(3) {
      width: ${({ hide, menu }) => (hide && !menu ? "20px" : "25px")};
      transform: ${({ menu, hide }) =>
        menu && "translate(-10px) rotate(-45deg) translate(15.5px)"};
      width: ${({ menu, hide }) => menu && "35px"};
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.screen.xl}) {
    display: block;
  }
  @media screen and (max-width: ${({ theme }) => theme.screen.small}) {
    padding: 0.3rem 0.5rem;
  }
`;

export default StyledMobileMenu;
