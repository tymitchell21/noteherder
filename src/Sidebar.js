import React from 'react'

import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'

const Sidebar = () => {
    return (
        <nav 
            className="Sidebar"
            style={style.sidebar}    
        >
            <div
                className="logo"
                style={style.logo}
            >
                <img 
                    src={quill}
                    alt="Noteherder"
                    style={style.logoImg}
                />
            </div>
            <a
                className="new-note"
                href="/notes"
                style={style.newNote}
            >
                <img
                    src={newHover}
                    alt="New note"
                    style={style.aImg}
                />
                <img
                    class="outline"
                    src={newIcon}
                    alt="New note"
                    style={style.aHoverImg}
                />
            </a>
            <div
                className="SignOut"
                style={style.signOut}
            >
                <button
                    style={style.button}
                >
                    <i
                        class="fa fa-sign-out"
                        style={style.signOutI}
                    ></i>
                </button>
            </div>
        </nav>
    )
}

const style = {
    sidebar: {
        width: '6rem',
        backgroundColor: '#f3f3f3',
        padding: '0.5rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        fontFamily: '"Fauna One"',
        color: '#666',
        fontSize: '3rem',
    },
    logoImg: {
        width: '3rem',
        paddingLeft: '0.4rem',
    },
    newNote: {
        marginTop: '2rem',
        position: 'relative',
        width: '4rem'
    },
    aImg: {
        position: 'absolute',
        left: '0',
        width: '100%',
        transition: 'opacity 0.25s ease-in-out'
    },
    aHoverImg: {
        opacity: '0'
    },
    button: {
        backgroundColor: 'transparent',
        border: '0',
        color: '#008BF8',
        cursor: 'pointer',
        outline: 'none'
    },
    signOut: {
        position: 'absolute',
        bottom: '1rem'
    },
    signOutButton: {
        outline: 'none'
    },
    signOutI: {
        fontSize: '2rem'
    }
}

export default Sidebar