import React, { useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

const Productivity = () => {
  function useIntersectionObserver (
    elementRef,
    { threshold = 0, root = null, rootMargin = '0%', freezeOnceVisible = false }
  ) {
    const [entry, setEntry] = React.useState()

    const frozen = entry?.isIntersecting && freezeOnceVisible

    const updateEntry = ([entry]) => {
      setEntry(entry)
    }

    useEffect(() => {
      const node = elementRef?.current
      const hasIOSupport = !!window.IntersectionObserver

      if (!hasIOSupport || frozen || !node) return

      const observerParams = { threshold, root, rootMargin }
      const observer = new IntersectionObserver(updateEntry, observerParams)

      observer.observe(node)

      return () => observer.disconnect()
    }, [elementRef, threshold, root, rootMargin, frozen])

    return entry
  }

  const triggerRef = React.useRef()
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false
  })

  const opacity = useSpring({
    config: { duration: 500, trail: 1000 },
    from: { opacity: 0, left: '-100px' },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      left: dataRef?.isIntersecting ? '0px' : '-100px'
    }
  })

  return (
    <div>
      <animated.div className='relative' style={opacity}>
        <div className='goal'>Productivity</div>
        <div className='subText-lg'>
        <span className='green-text'>Accelerate high-quality software development.</span> Our platform drives innovation with tools that boost developer velocity.
        </div>
      </animated.div>
      <div ref={triggerRef} />
      <div className='pull-left relative'>
        <img className='box img-lg' src='./imgs/issues-plan.png' />
      </div>
    </div>
  )
}

export default Productivity
