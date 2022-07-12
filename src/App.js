import React from "react";
import styled from "styled-components";

function App() {
  const navbar = (
    <ul>
      <NavItems>
        <li>about</li>
        <li>groups</li>
        <li>friends</li>
        <li>profile</li>
      </NavItems>
    </ul>
  );

  return (
    <>
      <NavBar>{navbar}</NavBar>
      <Body>
        <p>welcome to uni meet</p>
      </Body>
    </>
  );
}

const NavItems = styled.li`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  color: palevioletred;
  font-size: 1.2em;
`;

const NavBar = styled.section`
  padding: 2em;
  background: papayawhip;
`;

const Body = styled.section`
  padding: 10em;
  background: lightyellow;
`;

export default App;
