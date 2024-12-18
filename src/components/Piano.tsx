import { Code, GithubLogo, LinkedinLogo, MusicNote, MusicNoteSimple, MusicNotesSimple, PianoKeys } from 'phosphor-react';
import { Note } from './Note';
import styles from './piano.module.css';

export function Piano() {
  return (
    <>
      <header className={styles.header}>
        <h1>Lab 2 Piano</h1>
        <p>click on tiles</p>
      </header>
      <main className={styles.content}>
        <div className={styles.sideContent}>
          <MusicNotesSimple size={25} />
        </div>
        <div className={styles.teclasContainer}>
          <Note nota='Dó'/>
          <Note nota='Ré'/>
          <Note nota='Mi'/>
          <Note nota='Fá'/>
          <Note nota='Sol'/>
          <Note nota='Lá'/>
          <Note nota='Si'/>
        </div>
        <div className={styles.sideContent}>
          <MusicNote size={25} color='#8E8E8E'/>
        </div>
      </main>
    </>
  )
}