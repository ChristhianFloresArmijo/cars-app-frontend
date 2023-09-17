import Navbar from '@/components/Navbar'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import tw from 'twin.macro'

const AppContainer = styled.div`
  ${tw`w-full h-full flex flex-col`}
`

export default function AppLayout() {
  return (
    <AppContainer>
      {/* <Navbar></Navbar> */}
      <Outlet />
    </AppContainer>
  )
}
