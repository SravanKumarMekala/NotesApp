// Style your elements here
import styled from 'styled-components'

export const NotesContainer = styled.div`
  padding: 20px;
  font-family: 'Roboto';
`

export const Heading = styled.h1`
  font-family: 'Bree Serif';
  color: #4c63b6;
  margin-bottom: 20px;
`

export const NotesInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #aab8c8;
  border-radius: 4px;
  font-size: 16px;
  color: #475569;
`

export const NotesTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #aab8c8;
  border-radius: 4px;
  font-size: 16px;
  color: #475569;
`

export const AddButton = styled.button`
  background-color: #4c63b6;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`

export const NotesList = styled.ul`
  list-style-type: none;
  padding: 0;
`

export const EmptyNotesView = styled.div`
  text-align: center;
`

export const EmptyImage = styled.img`
  width: 200px;
  margin-bottom: 10px;
`

export const EmptyText = styled.p`
  font-size: 18px;
  color: #334155;
`
