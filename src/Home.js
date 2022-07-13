import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Home() {
  const navbar = (
    <ul>
      <NavItems>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/groups">groups</Link>
        </li>
        <li>
          <Link to="/friends">friends</Link>
        </li>
        <li>
          <Link to="/profile">profile</Link>
        </li>
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

export default Home;
