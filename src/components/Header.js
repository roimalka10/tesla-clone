import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
      <a href="https://www.tesla.com/solarroof" target="_blank">
          Model S
        </a>
        <a href="https://www.tesla.com/solarroof" target="_blank">
          Model 3
        </a>
        <a href="https://www.tesla.com/solarroof" target="_blank">
          Model X
        </a>
        <a href="https://www.tesla.com/solarroof" target="_blank">
          Model Y
        </a>
        <a href="https://www.tesla.com/solarroof" target="_blank">
          Solar Roof
        </a>
        <a href="https://www.tesla.com/solarpanels" target="_blank">
          Solar Panels
        </a>
      </Menu>
      <RightMenu>
        <a id="shop" href="https://shop.tesla.com/?tesref=true" target="_blank">
          Shop
        </a>
        <a
          href="https://auth.tesla.com/oauth2/v1/authorize?client_id=teslaweb&response_type=code&scope=openid%20email%20profile&redirect_uri=https%3A//www.tesla.com/openid-connect/generic&state=Wq3u5Q2t7JIwG8wSMkKVcgf4X6FbcvFhwlU2fiB8gzY&locale=en-US"
          target="_blank"
        >
         Account
        </a>
        <BurgerIcon  onClick={handleClick}>
          <CustomMenu>Menu</CustomMenu>
       </BurgerIcon>
      </RightMenu>
      
      <div className={showMenu ? "navbar-items active" : "navbar-items"}>
        <div>
      <ExitIcon size={20}  onClick={handleClick}/>
      </div>
        <li>
          <a href="https://www.tesla.com/inventory/new/m3" target="_blank">
            Existing Inventroy
          </a>
        </li>
        <li>
          <a href="https://www.tesla.com/inventory/used/m3" target="_blank">
            Used Inventroy
          </a>
        </li>
        <li>
          <a href="https://www.tesla.com/tradein" target="_blank">
            Trade-in
          </a>
        </li>
        <li>
          <a href="https://www.tesla.com/cybertruck" target="_blank">
            Cybertruck
          </a>
        </li>
        <li>
          <a href="https://www.tesla.com/roadster" target="_blank">
            Roadster
          </a>
        </li>
        <li>
          <a href="https://www.tesla.com/semi" target="_blank">
            Semi
          </a>
        </li>
        <li>
          <a href="https://www.tesla.com/charging" target="_blank">
            Charging
          </a>
        </li>
        <li>
          <a href="https://www.tesla.com/powerwall" target="_blank">
            Powerwall
          </a>
        </li>
        <li>
          <a href="https://www.tesla.com/commercial" target="_blank">
            Commercial Energy
          </a>
        </li>
        <li>
          <a href="https://www.tesla.com/utilities" target="_blank">
            Utiities
          </a>
        </li>
        <li>
          <a href="https://www.tesla.com/drive" target="_blank">
            Test Drive
          </a>
        </li>
        <li>
          <a
            href="https://www.tesla.com/findus?v=2&bounds=64.20540327078639%2C-46.224610562500004%2C2.9846921277096476%2C-152.3085949375&zoom=4&filters=store%2Cservice%2Csupercharger%2Cdestination%20charger%2Cbodyshop"
            target="_blank"
          >
            Find Us
          </a>
        </li>
        <li>
          <a href="https://www.tesla.com/support" target="_blank">
            Support
          </a>
        </li>
        <li>
          <a href="#">United States</a>
        </li>
      </div>
     
    </Container>
  );
};

const Container = styled.div`
  min-height: 53px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px 0 47px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  a {
    font-size: 14px;

    img {
      height: 16px;
      width: 120px;
    }
  }
`;

const Menu = styled.div`
  padding-left: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1;
  a {
    padding-left: 11px;
    font-weight: 400;
    text-decoration: uppercase;
    font-size: 14px;
    letter-spacing: 0.5px;
    color: #2a2b2d;
    margin: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    margin-left: 15px;
    font-weight: 400;
    text-decoration: uppercase;
    font-size: 14px;
    letter-spacing: 0.5px;
    color: #2a2b2d;
    margin-right: 14px;
  }
  #shop {
    margin-right: 18px;
  }
  a,
  #shop {
    @media (max-width: 1200px) {
      display: none;
    }
  }
`;

const CustomMenu = styled.span`
  cursor: pointer;
  margin-left: 15px;
  margin-right: 15px;
  font-size: 14px;
  @media (max-width: 1200px) {
    background-color: #cbd2db;
      padding: 7px 12px;
      border-radius:11px;
    }
`;
const BurgerIcon = styled.div`
  display: block;
  margin-bottom: 1px;
  cursor: pointer;
`;

const ExitIcon = styled(FaTimes)`
  z-index:900; 
  position: absolute;
  right:12px;
  top:30px;
  cursor: pointer;
`

export default Header;
