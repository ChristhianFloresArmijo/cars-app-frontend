import Icon from '@mdi/react'
import { mdiAccount, mdiCalendar } from '@mdi/js'
import styled from 'styled-components'
import tw from 'twin.macro'
import Button from './Button'

const CardContainer = styled.div`
  ${tw`flex justify-center items-center rounded-md bg-transparent py-1 px-2 md:py-2 md:px-9`}
`

const ItemContainer = styled.div`
  ${tw`flex relative`}
`

const Name = styled.span`
  ${tw`self-center text-gray-600 text-xs md:text-sm`}
`

const LineSeparator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`bg-gray-300 mx-2 md:mx-5`}
`

export default function BookCard() {
  return (
    <CardContainer>
      <ItemContainer>
        <Icon className="text-red-500" path={mdiCalendar} size="2rem" />
        <Name>Pick Up Date</Name>
      </ItemContainer>
      <LineSeparator></LineSeparator>
      <ItemContainer>
        <Icon className="text-red-500" path={mdiCalendar} size="2rem"></Icon>
        <Name>Return Date</Name>
      </ItemContainer>
      <div className="ml-5">
        <Button text="Book Your Ride"></Button>
      </div>
    </CardContainer>
  )
}
