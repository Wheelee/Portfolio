'use client'

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Type = () => {
    return (
        <h1>Bah mon Portfolio il est <Typewriter
            words={['Beau', 'Superbe', 'Tip top', 'Bonne !']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={3000}
        /></h1>
    )
}

export default Type