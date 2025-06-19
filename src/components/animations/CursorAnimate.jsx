
import { motion, useSpring, useMotionValue } from "motion/react";
import react, { useState, useEffect } from "react";



const CursorAnimate = ( {targetSelector = ".banner-section"}) => {

    const [cursors, setCursors] = useState([]);
  const [isInTarget, setIsInTarget] = useState(false);

  // Motion values para el cursor principal
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring para suavizar el movimiento
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {

     const targetElement = document.querySelector(targetSelector);
        if (targetElement) {
        targetElement.style.cursor = 'none';
        }
    const moveCursor = (e) => {
      // Buscar el elemento target por selector
      const targetElement = document.querySelector(targetSelector);
      
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const isInsideTarget = (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        );
        
        setIsInTarget(isInsideTarget);
        
        // Solo actualizar posición y crear trail si está en el target
        if (isInsideTarget) {
          cursorX.set(e.clientX - 16);
          cursorY.set(e.clientY - 16);

          // Agregar nuevo cursor al trail
          const newCursor = {
            id: Date.now() + Math.random(),
            x: e.clientX - 8,
            y: e.clientY - 8,
            timestamp: Date.now()
          };

          setCursors(prev => {
            const filtered = prev.filter(cursor => 
              Date.now() - cursor.timestamp < 1000
            );
            return [...filtered, newCursor].slice(-12); // Máximo 12 cursors
          });
        }
      }
    };

    window.addEventListener('mousemove', moveCursor);

    // Limpiar cursors viejos
    const interval = setInterval(() => {
      setCursors(prev => 
        prev.filter(cursor => Date.now() - cursor.timestamp < 1000)
      );
    }, 100);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      clearInterval(interval);
    };
  }, [cursorX, cursorY, targetSelector]);

  return (
    <>
      {/* Cursor principal - solo visible en target */}
      {isInTarget && (
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
        >
          <div className="w-full h-full border-2 border-violet-500 rounded-full shadow-lg shadow-violet-500/50 opacity-90" />
        </motion.div>
      )}

      {/* Trail de cursors - solo visible en target */}
      {isInTarget && cursors.map((cursor, index) => {
        const age = Date.now() - cursor.timestamp;
        const opacity = Math.max(0, 1 - age / 1000);
        const scale = Math.max(0.3, 1 - age / 1500);

        return (
          <motion.div
            key={cursor.id}
            className="fixed top-0 left-0 pointer-events-none"
            initial={{
              x: cursor.x,
              y: cursor.y,
              scale: 1,
              opacity: 0.8
            }}
            animate={{
              scale: scale,
              opacity: opacity * 0.6
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
            style={{
              zIndex: 40 - index
            }}
          >
            <div
              className="w-4 h-4 rounded-full"
              style={{
                background: ['#8B5CF6', '#FFFFFF', '#6366F1'][index % 3],
                boxShadow: `0 0 20px ${['#8B5CF6', '#FFFFFF', '#6366F1'][index % 3]}50`
              }}
            />
          </motion.div>
        );
      })}
    </>
    )
}


export default CursorAnimate;