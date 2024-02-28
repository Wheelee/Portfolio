'use client'

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Type = () => {
    return (
        <span>En vous remerciant, <span className="font-bold"><Typewriter
            words={['Teremana', 'Teremana HONORE']}
            loop={false}
            cursor
            cursorStyle='.'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={3000}
        /></span></span>
    )
}

export default Type