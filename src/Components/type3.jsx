'use client'

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Type = () => {
    return (
        <span>Vous avez <span className="font-bold"><Typewriter
            words={['des projets ?', 'des idées ?', 'des demandes ?']}
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