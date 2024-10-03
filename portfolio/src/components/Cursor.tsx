import React, {useEffect, useRef} from 'react';

function Cursor({cursorRef} : any) {

    console.log(cursorRef.current);

    useEffect(() => {
        const handleMouseMove = (e : any) => {
            const cursor = cursorRef.current
            if (cursor) {
                const x = e.clientX - cursor.offsetWidth / 2
                const y = e.clientY - cursor.offsetHeight / 2

                const keyframes = {
                    transform: `translate(${x}px, ${y}px)`
                }

                cursor.animate(keyframes, {
                    duration: 400,
                    fill: "forwards"
                })
            }
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [cursorRef])

    return (
        <div className="cursor hidden" ref={cursorRef}></div>
    );
}

export default Cursor;