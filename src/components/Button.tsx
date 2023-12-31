import styled from 'styled-components'
import tw from 'twin.macro'

interface IButtonProps {
  theme?: 'filled' | 'outlined'
  text: string
}

const BaseButton = styled.button`
  ${tw`px-5 py-3 outline-none rounded-md text-white text-xs font-semibold border-transparent
    border-2 border-solid focus:outline-none transition-all duration-200 ease-in-out m-1`}
`

const FilledButton = styled(BaseButton)`
  ${tw`bg-red-500 hover:bg-transparent hover:text-red-500 hover:border-red-500`}
`

const OutlinedButton = styled(BaseButton)`
  ${tw`border-red-500 text-red-500 bg-transparent hover:bg-red-500 hover:text-white hover:border-transparent`}
`

export default function Button(props: IButtonProps) {
  if (props.theme === 'filled') return <FilledButton>{props.text}</FilledButton>
  else return <OutlinedButton>{props.text}</OutlinedButton>
}
