import { ReturnNoteSound } from '../utils/ReturnNoteSound';
import styles from './note.module.css';

interface NoteProps {
  nota: string;
}

export function Note({ nota }: NoteProps) {
  const playedNote = ReturnNoteSound(nota);

  return (
    <button className={styles.tecla} onClick={() => playedNote()}>{nota}</button>
  )
}