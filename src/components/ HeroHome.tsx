import styled from 'styled-components'
import tw from 'twin.macro'
import MclarenCarImg from '@/assets/images/mclaren-orange-big.png'
import BlobImg from '@/assets/images/blob.svg'

const HeroContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
  ${tw`w-full max-w-screen-2xl flex justify-between px-3 lg:px-12`}
`

const LeftContainer = styled.div`
  ${tw`w-1/2 flex flex-col`}
`

const RightContainer = styled.div`
  ${tw`w-1/2 flex flex-col relative mt-20`}
`

const Slogan = styled.h1`
  ${tw`
    font-bold text-2xl xl:text-6xl sm:text-3xl md:text-5xl 
    lg:font-black md:font-extrabold text-gray-900 mb-4 sm:leading-snug
    lg:leading-normal xl:leading-relaxed
  `}
`

const Description = styled.p`
  ${tw`text-xs lg:text-sm xl:text-lg sm:max-h-full overflow-hidden max-h-12 text-gray-800`}
`

const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);

  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }
`

const StandaloneCar = styled.div`
  width: auto;
  height: 10em;
  right: -6em;
  top: -5em;
  position: absolute;

  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }
`

export default function HeroHome() {
  return (
    <HeroContainer>
      <LeftContainer>
        <Slogan>Rent the Best Quality Cars With Us</Slogan>
        <Description>
          Always choose the best car from out local stores or order it remotely at the best price
          for you and get the best quality cars as long as you like.
        </Description>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img alt="" src={MclarenCarImg} />
        </BlobContainer>
        <StandaloneCar>
          <img alt="" src={BlobImg} />
        </StandaloneCar>
      </RightContainer>
    </HeroContainer>
  )
}
