import {motion} from 'motion/react';



const EnterAnimation = ({ children, delay = 0, className = '' }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            className={`enter-animation ${className}`}
        >
            {children}
        </motion.div>
    );
}

export default EnterAnimation;