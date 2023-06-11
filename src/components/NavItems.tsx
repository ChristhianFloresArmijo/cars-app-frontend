import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import tw from 'twin.macro'

const ListContainer = styled.ul`
  ${tw`flex list-none`}
`

const NavItem = styled.li`
  ${tw` text-xs md:text-base text-black font-medium mr-1 md:mr-5
    cursor-pointer transition duration-300 ease-in-out hover:text-gray-700  
  `}
`

export default function NavItems() {
  return (
    <ListContainer>
      <NavItem>
        <NavLink to="/">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/">Cars</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/">Services</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/">Contact Us</NavLink>
      </NavItem>
    </ListContainer>
  )
}
