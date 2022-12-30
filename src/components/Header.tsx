import logo from '../assets/logo.svg';
import {AiOutlinePlusCircle} from 'react-icons/ai'
import styles from "./Header.module.css";
import { ChangeEvent, FormEvent, useState, useRef } from "react";

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState("");
  const letterInputRef = useRef(null as any)

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
    letterInputRef.current.focus()
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    
    <header className={styles.header}>
      <img 
      className={styles.img}
      src={logo}  />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          placeholder="Add a new task"
          type="text"
          value={title}
          onChange={onChangeTitle}
          ref={letterInputRef}
          required 
          
        />
        <button >
        Create
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}