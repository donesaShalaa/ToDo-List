/* eslint-disable react/prop-types */
import styles from './header.module.css';
import { useState } from 'react';

export function Header({ onAddTask }) {

    const [title, setTitle] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        if (title === '') {
            return null;
        } else {
            onAddTask(title)
            setTitle('')
        }
    }

    function onChangeTitle(event) {
        setTitle(event.target.value)
    }

    return (
        <header className={styles.header}>
            <h1>ToDo List</h1>
            <form onSubmit={handleSubmit} className={styles.newTaskForm}>
                <input type="text" placeholder='Add a New Task' value={title} onChange={onChangeTitle} />
                <button>
                    Create
                </button>
            </form>
        </header>
    )
}
