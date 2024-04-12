import { Link } from "react-router-dom";
import styled from "styled-components";
const NavigationContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;
const LinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;
const Navigation = () => {
  return (
    <NavigationContainer>
      <Link to="/">
        <h1>Logo</h1>
      </Link>
      <LinksContainer>
        <Link to="/page1">Page1</Link>
        <Link to="/page2">Page2</Link>
        <Link to="/page3">Page3</Link>
      </LinksContainer>
    </NavigationContainer>
  );
};
export default Navigation;