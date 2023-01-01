import styled, { keyframes } from 'styled-components';

export const Navbar = styled.nav`
  width: 95%;
  margin: auto;
  min-height: 8vh;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex: 1 1 0;
`;

export const Logo = styled.h1``;

export const NavHeader = styled.header``;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const NavItem = styled.li``;

export const NavCallToActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.5rem;
  flex: 1 1 0;
`;

export const SaleNotice = styled.button`
  border: none;
  background-color: #fbf3ea;
  border-radius: 5px;
  padding: 0 0.5rem 0rem 1.5rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  cursor: pointer;
`;

const breatheAnimation = keyframes`
 0% { height: 0.6rem; width: 0.6rem;}
 30% { height: 0.7rem; width: 0.7rem;}
 40% { height: 0.8rem; width: 0.8rem;}
 100% { height: 0.6rem; width: 0.6rem;}
`;

export const PulsingCircle = styled.div`
  width: 0.6rem;
  height: 0.6rem;
  background-color: #d88c38;
  border-radius: 100px;
  border: 2px solid #efc495;
  animation-name: ${breatheAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  position: absolute;
  left: 0.5rem;
  animation-timing-function: alternate;
`;

export const ProductsCount = styled.span`
  background-color: #000;
  width: 1rem;
  height: 1rem;
  border-radius: 100px;
  color: #fff;
  display: block;
  position: absolute;
  top: -0.2rem;
  right: -0.2rem;
  transition: all 0.3s ease;
`;

export const NavCart = styled.button`
  height: 3rem;
  width: 3rem;
  border-radius: 100px;
  border: none;
  background-color: #f8f2f0;
  background-image: url(${(props) => props.background});
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  cursor: pointer;
  &:hover ${ProductsCount} {
    transform: translateY(-0.5rem);
  }
`;

export const NotifictionsNotice = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 100px;
  background: #ff0000;
  position: absolute;
  top: 0;
  right: 0;
  transition: all 0.3s ease;
`;

export const Notifictions = styled.button`
  height: 3rem;
  width: 3rem;
  border-radius: 100px;
  border: none;
  background-color: #edf0f6;
  background-image: url(${(props) => props.background});
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  cursor: pointer;
  &:hover ${NotifictionsNotice} {
    transform: translateY(-0.5rem);
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ProfileImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 100px;
  background: url(${(props) => props.background});
  background-size: cover;
`;

export const GreetingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;
`;

export const GreetingMessage = styled.span`
  color: #dddfe2;
  font-size: 0.8rem;
`;

export const UserName = styled.h2`
  font-size: 1rem;
  color: #243445;
`;
