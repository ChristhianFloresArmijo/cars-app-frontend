import HeroHome from '@/components/ HeroHome'
import BookCard from '@/components/BookCard'
import Navbar from '@/components/Navbar'
import styled from 'styled-components'
import tw from 'twin.macro'

const PageContainer = styled.div`
  ${tw`flex flex-col w-full h-full items-center overflow-x-hidden`}
`

export default function HomePage() {
  return (
    <PageContainer>
      <Navbar></Navbar>
      <HeroHome></HeroHome>
      <BookCard></BookCard>
    </PageContainer>
  )
}
