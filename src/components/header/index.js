import {
  Navbar,
  NavWrapper,
  Logo,
  NavHeader,
  NavList,
  NavItem,
  NavCallToActions,
  SaleNotice,
  PulsingCircle,
  NavCart,
  Notifictions,
  ProfileWrapper,
  ProfileImage,
  GreetingWrapper,
  GreetingMessage,
  UserName,
} from './styles/header';

const Header = () => {
  return (
    <Navbar>
      <NavWrapper>
        <NavHeader>
          <Logo>Jupiter</Logo>
        </NavHeader>
        <NavList>
          <NavItem>Home</NavItem>
          <NavItem>Categories</NavItem>
          <NavItem>Shop</NavItem>
        </NavList>
      </NavWrapper>
      <NavCallToActions>
        <SaleNotice>
          {' '}
          <PulsingCircle /> Summer Sales
        </SaleNotice>
        <NavCart>Cart</NavCart>
        <Notifictions>Notes</Notifictions>
        <ProfileWrapper>
          <ProfileImage background="./assets/avatar.jpeg" />
          <GreetingWrapper>
            <GreetingMessage>Hi, Welcome!</GreetingMessage>
            <UserName>Mohamed Khaled</UserName>
          </GreetingWrapper>
        </ProfileWrapper>
      </NavCallToActions>
    </Navbar>
  );
};

export default Header;
