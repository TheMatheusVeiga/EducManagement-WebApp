import Styled from 'styled-components';

const Navbar = Styled.nav`
      position: fixed;
      top: 0;
      z-index: 1;
      display: flex;
      width: 100%;
      height: 60px;
      background: rgba(0,0,0,0.7);

      ul{
        display: flex;
        list-style: none;
        width: 100%;
        justify-content: center;
      }

      ul li{
        margin: 0 1rem;
        padding: 1rem;
      }

      ul li a {
        text-decoration: none;
        text-transform: uppercase;
        color: #f4f4f4;
      }

      ul li a:hover {
        color: skyblue;
      }     
`;

export default Navbar;
