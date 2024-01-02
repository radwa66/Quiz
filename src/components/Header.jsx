import React from 'react'
import logoImg from '../assets/quiz-complete.png'

export default function Header() {
  return (
    <header>
        <img src= {logoImg} alt='logo' />
        <h1>ReactQuiz</h1>
    </header>
  )
}
