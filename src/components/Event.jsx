import React from 'react'

const Event = () => {
    const noVocales = (event) => {
        console.log(`event.key:`, event.key);
        console.log(`event:`, event);

        const vocales = ['a', 'e', 'i', 'o', 'u']
        if (vocales.includes(event.key.toLowerCase())) event.preventDefault()
    }
  return (
      <div>
          <input type='text' placeholder='no se permiten vocales' onKeyDown={noVocales} />
    </div>
  )
}

export default Event