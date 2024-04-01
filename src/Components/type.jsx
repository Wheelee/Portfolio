'use client'

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Type = () => {
    return (
        <span>Future Developper Web <span className="font-bold"><Typewriter
            words={['Magnifique !', 'Incroyable !', 'Innovant !', 'Sexy !']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={3000}
        /></span></span>
    )
}

export default Type