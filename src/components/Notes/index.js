// Write your code here
import {useState} from 'react'
import {
  NotesContainer,
  Heading,
  NotesInput,
  NotesTextarea,
  AddButton,
  NotesList,
  EmptyNotesView,
  EmptyImage,
  EmptyText,
} from './styledComponents'
import NoteItem from '../NoteItem'

const Notes = () => {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')

  const handleAddNote = () => {
    if (title.trim() && note.trim()) {
      const newNote = {id: Date.now(), title, note}
      setNotes([...notes, newNote])
      setTitle('')
      setNote('')
    }
  }

  const renderEmptyView = () => (
    <EmptyNotesView>
      <EmptyImage
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <EmptyText>No Notes Yet</EmptyText>
    </EmptyNotesView>
  )

  return (
    <NotesContainer>
      <Heading>Notes</Heading>
      <NotesInput
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <NotesTextarea
        placeholder="Take a Note..."
        value={note}
        onChange={e => setNote(e.target.value)}
      />
      <AddButton type="button" onClick={handleAddNote}>
        Add
      </AddButton>
      {notes.length === 0 ? (
        renderEmptyView()
      ) : (
        <NotesList>
          {notes.map(noteItem => (
            <NoteItem key={noteItem.id} noteDetails={noteItem} />
          ))}
        </NotesList>
      )}
    </NotesContainer>
  )
}

export default Notes
