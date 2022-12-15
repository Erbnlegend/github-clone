import React, { useEffect } from 'react'
import { ChevronLeft, ChevronRight, Briefcase } from 'lucide-react'
import { useSpring, animated } from 'react-spring'

const Lines = () => {
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

  const triggerOpacity = React.useRef()
  const dataRefOpacity = useIntersectionObserver(triggerOpacity, {
    freezeOnceVisible: false
  })

  const opacity = useSpring({
    config: { duration: 500 },
    from: { opacity: 0, left: '-500px' },
    to: {
      opacity: dataRefOpacity?.isIntersecting ? 1 : 0,
      left: dataRefOpacity?.isIntersecting ? '0px' : '-500px'
    }
  })

  const triggerHeight = React.useRef()
  const dataRefHeight = useIntersectionObserver(triggerHeight, {
    freezeOnceVisible: false
  })

  const height = useSpring({
    config: { duration: 500 },
    from: { height: '1px' },
    to: {
      height: dataRefHeight?.isIntersecting ? '250px' : '1px'
    }
  })

  return (
    <div className='lines'>
      <img className='graph-tree' src='./imgs/lines-hero.svg' />
      <div className='glowing-icon'><ChevronLeft className='icon'/><div className='glow-purple'></div><ChevronRight className='icon'/></div>
      <div className='gradient-lines-green'></div>
      <div className='glowing-icon'>
        <animated.div style={ opacity }>
          <Briefcase className='icon'/>
        </animated.div>
        <div ref={triggerOpacity} />
      <div className='glow-green'></div>
      </div>
      <animated.div
        style={height}
        className='lines-green'>
      </animated.div>
      <div ref={triggerHeight} />
      <div className='lines-gap'></div>
    </div>
  )
}

export default Lines
