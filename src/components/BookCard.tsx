import Icon from '@mdi/react'
import { mdiCalendar } from '@mdi/js'
import styled from 'styled-components'
import tw from 'twin.macro'
import Button from './Button'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useState } from 'react'

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`flex justify-center items-center rounded-md bg-white py-1 px-2 md:py-2 md:px-9`}
`

const ItemContainer = styled.div`
  ${tw`flex relative`}
`

const Name = styled.span`
  ${tw`self-center text-gray-600 text-xs md:text-sm cursor-pointer`}
`

const LineSeparator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`bg-gray-300 mx-2 md:mx-5`}
`

const DateCalendar = styled(Calendar)`
  min-width: 300px;
  /* max-width: none; */
  position: absolute;
  top: 3.5em;
  left: -2em;
`

export default function BookCard() {
  const [startDate, setStartDate] = useState(new Date())
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false)
  const [endDate, setEndDate] = useState(new Date())
  const [isEndCalendarOpen, setEndCalendarOpen] = useState(false)

  function toggleStartCalendar() {
    setEndCalendarOpen(false)
    setStartCalendarOpen(!isStartCalendarOpen)
  }

  function toggleEndCalendar() {
    setStartCalendarOpen(false)
    setEndCalendarOpen(!isEndCalendarOpen)
  }

  function handleStartDateChange(value: any) {
    setStartDate(value)
    toggleStartCalendar()
  }

  function handleEndDateChange(value: any) {
    setEndDate(value)
    toggleEndCalendar()
  }
  return (
    <CardContainer>
      <ItemContainer>
        <Icon className="text-red-500" path={mdiCalendar} size="2rem" />
        <Name onClick={toggleStartCalendar}>Pick Up Date</Name>
        {isStartCalendarOpen ? (
          <DateCalendar value={startDate} onChange={handleStartDateChange} />
        ) : (
          ''
        )}
      </ItemContainer>
      <LineSeparator></LineSeparator>
      <ItemContainer>
        <Icon className="text-red-500" path={mdiCalendar} size="2rem"></Icon>
        <Name onClick={toggleEndCalendar}>Return Date</Name>
        {isEndCalendarOpen ? <DateCalendar value={endDate} onChange={handleEndDateChange} /> : ''}
      </ItemContainer>
      <div className="ml-5">
        <Button text="Book Your Ride" theme="filled"></Button>
      </div>
    </CardContainer>
  )
}
