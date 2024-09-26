import React from 'react'

export default function Main({sidebar , section}) {
  return (
    <main className='main-container'>
        {sidebar}
        {section}
    </main>
  )
}