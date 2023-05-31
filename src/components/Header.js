import React, {useState} from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';



function Header() {
  const[navStatus,setNavStatus] = useState(false);
  const cars = useSelector(selectCars)
  return (
    <Container>
      <a>
          <img src="./images/logo.svg" alt="" />
      </a>

      <Menu>
       

         <a href="#">Model S</a>
         <a href="#">Model 3</a>
         <a href="#">Model X</a>
         <a href="#">Model Y</a>
         <a href="#">Solar Roof</a>
         <a href="#">Solar Panels</a>
         <a href="#">Powerwall</a>
 

      </Menu>
      <RightMenu>
           <a href="#">Shop</a>
           <a href="#">Account</a>
           <CustomMenu onClick={()=> setNavStatus(true)}/>

      </RightMenu>

      <Nav show={navStatus}>
        <CloseWrapper>

        <CustomClose onClick={()=> setNavStatus(false)}/>

        </CloseWrapper>

        {cars && cars.map((car, index) =>(
          <li  key={index}><a href="#">{car}</a></li>
        ))}
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-In</a></li>
        <li><a href="#">Demo Drive</a></li>

      </Nav>
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right:0;
    z-index: 1;

`

const Menu = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex: 1;
   a {
       font-weight: 550;

       padding: 0 15px;
       flex-wrap: nowrap;
   }

   @media (max-width: 768px) {
      display: none;
}


`

const RightMenu= styled.div`
      display: flex;
      align-items: center;
          a {
              font-weight: 600;
              padding: 0 15px;
              margin-right: 10px;
            }


`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;

`
const Nav=styled.div`
      position: fixed;
      top:0;
      bottom: 0;
      right: 0;
      background: white;
      width: 300px;
      z-index: 16;
      list-style:none;
      padding: 20px;
      display: flex;
      flex-direction: column;
      text-align: start;
      transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
      transition: transform 0.4s;
      li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,.2);
        a {
          font-weight: 550;
        }
      }

`
const CustomClose=styled(CloseIcon)`
   cursor:pointer;

`
const CloseWrapper=styled.div`
     display: flex;
     justify-content: flex-end;
`