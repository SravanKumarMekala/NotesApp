// Write your code here
import {NoteItemContainer, NoteTitle, NoteContent} from './styledComponents'

const NoteItem = ({noteDetails}) => {
  const {title, note} = noteDetails

  return (
    <NoteItemContainer>
      <NoteTitle>{title}</NoteTitle>
      <NoteContent>{note}</NoteContent>
    </NoteItemContainer>
  )
}

export default NoteItem
