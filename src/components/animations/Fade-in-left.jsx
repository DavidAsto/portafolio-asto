import {motion} from 'motion/react';


const FadeInLeft = ({ children, delay = 0, className = '' }) => {
    return (
        <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay }}
        className={`fade-in-left ${className}`}
        >
        {children}
        </motion.div>
    );
}


export default FadeInLeft;