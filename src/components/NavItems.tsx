import menuStyles from '@/styles/menu'
import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import { slide as Menu } from 'react-burger-menu'
import { useMediaQuery } from 'react-responsive'
import { SCREENS } from '@/utils/screens'

const ListContainer = styled.ul`
  ${tw`flex list-none`}
`

const NavItem = styled.li<{ menu?: any }>`
  ${tw` text-sm md:text-base text-black font-medium mr-1 md:mr-5
    cursor-pointer transition duration-300 ease-in-out hover:text-gray-700  
  `}

  ${({ menu }) =>
    menu
      ? css`
          ${tw`text-gray-300 text-xl mb-3 focus:text-white hover:text-gray-400`}
        `
      : ''}
`

export default function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })
  const navMenu = (sideMenu: boolean) => (
    <ListContainer>
      <NavItem menu={sideMenu}>
        <NavLink to="/">Home</NavLink>
      </NavItem>
      <NavItem menu={sideMenu}>
        <NavLink to="/">Cars</NavLink>
      </NavItem>
      <NavItem menu={sideMenu}>
        <NavLink to="/">Services</NavLink>
      </NavItem>
      <NavItem menu={sideMenu}>
        <NavLink to="/">Contact Us</NavLink>
      </NavItem>
    </ListContainer>
  )

  if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        {navMenu(true)}
      </Menu>
    )

  return navMenu(false)
}
