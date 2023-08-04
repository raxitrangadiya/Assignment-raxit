import React from 'react';
import './navbar.css'
import {
  MDBNavbar,
  MDBContainer,
  MDBBreadcrumb,
  MDBBreadcrumbItem
} from 'mdb-react-ui-kit';
import { NavLink } from "react-router-dom";
export default function App() {
  return (
    <MDBNavbar expand='lg'  bgColor='info'>
      <MDBContainer fluid>
        <nav aria-label='breadcrumb'>
          <MDBBreadcrumb>
            <MDBBreadcrumbItem>
              <NavLink className='Nav-link' to='/module9'>Module-9</NavLink>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>
              <NavLink className='Nav-link' to='/module10'>Module-10</NavLink>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>
              <NavLink className='Nav-link' to='/module11'>Module-11</NavLink>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>
              <NavLink className='Nav-link' to='/module12'>Module-12</NavLink>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>
              <NavLink className='Nav-link' to='/module13'>Module-13</NavLink>
            </MDBBreadcrumbItem>
           
          </MDBBreadcrumb>
        </nav>
      </MDBContainer>
    </MDBNavbar>
  );
}