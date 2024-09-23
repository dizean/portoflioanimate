import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
function Typer  () {
    return (
        <Typewriter
        cursor
        cursorBlinking
        delaySpeed={1000}
        deleteSpeed={25}
        margin={0}
        loop={0}
        typeSpeed={75}
        words={[
          'Astronaut 🚀',
          'Programmer 💻',
          'Drug Lord 👑',
          'OP Main Character 😎',
          'LoverBoy ❤️',
        ]}
      />
    );
}
export default Typer;