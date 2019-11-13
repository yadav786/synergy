import React from 'react'; 
import { Collapse, Nav, NavItem, Navbar, NavbarToggler, NavbarBrand, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem }  from 'reactstrap';
 
export default function HOC(OldComponent) { 

    // eslint-disable-next-line react/prefer-stateless-function
    return class extends React.Component {
    
          render(){ 

              return(
                <>  
                  <div>
                    <Navbar color="light" light expand="md">
                      <NavbarBrand href="/">Synergy</NavbarBrand>
                      <NavbarToggler  />
                      <Nav className="ml-auto" navbar>
                        <NavItem> 
                          <NavLink href="/components/">Log Out</NavLink>
                        </NavItem>
                      </Nav>       
                    </Navbar>
                  </div>
                  <OldComponent />     
                </> 
              )
          }
    }

}