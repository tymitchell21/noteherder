import React, { Component } from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import base from './firebase.js'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      currentNote: this.blankNote(),
      notes: [],
    }
  }

  componentWillMount(){
    base.syncState('Notes', {
      context: this,
      state: 'notes',
      asArray: true,
    })
  }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  setCurrentNote = (note) => {
    this.setState({ currentNote: note })
  }

  resetCurrentNote = () => {
    this.setCurrentNote(this.blankNote())
  }

  saveNote = (note) => {
    const notes = [...this.state.notes]

    if (note.id) {
      // existing note
      const i = notes.findIndex(currentNote => currentNote.id === note.id)
      notes[i] = note
    } else {
      // new note
      note.id = Date.now()
      notes.push(note)
    }

    this.setState({ notes, currentNote: note })
  }

  removeCurrentNote = () => {
    const notes = [...this.state.notes]
    const i = notes.findIndex(note => note.id === this.state.currentNote.id)

    if (i > -1) {
      notes.splice(i, 1)
      this.setState({ notes })
    }

    this.resetCurrentNote()
  }

  render() {
    return (
      <div
        className="Main"
        style={style}
      >
        <Sidebar
+          resetCurrentNote={this.resetCurrentNote}
+          signOut={this.props.signOut}
+       />
        <NoteList
          notes={this.state.notes}
          setCurrentNote={this.setCurrentNote}
        />
        <NoteForm
          currentNote={this.state.currentNote}
          saveNote={this.saveNote}
          removeCurrentNote={this.removeCurrentNote}
        />
      </div>
    )
  }
}

const style = {
  display: 'flex',
  height: '100vh',
  alignItems: 'stretch',
}

export default Main
