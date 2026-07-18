import { useLayoutEffect } from 'react'
import { motion } from 'framer-motion'

const variants = {
  exit: (direction) => ({
    x: direction >= 0 ? '-100%' : '100%',
    opacity: 0,
    transition: { duration: 0.35, ease: [0.65, 0, 0.35, 1] },
  }),
}

export default function PageTransition({ direction, children }) {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <motion.div
      variants={variants}
      initial={{ x: direction >= 0 ? '100%' : '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.45, ease: [0.65, 0, 0.35, 1] } }}
      exit="exit"
    >
      {children}
    </motion.div>
  )
}
