import React, { useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

const GraphLines = () => {
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
      height: dataRefHeight?.isIntersecting ? '600px' : '1px'
    }
  })

  return (
    <div className='lines'>
      <animated.div
        style={height}
        className='graphLines-green'>
        <img className='graph-branch' src='./imgs/git-branch-productivity.svg' />
      </animated.div>
      <div ref={triggerHeight} />
    </div>
  )
}

export default GraphLines
