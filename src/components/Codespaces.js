import React, { useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

const Codespaces = () => {
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

  const codeSpaces = React.useRef()
  const dataSpacesRef = useIntersectionObserver(codeSpaces, {
    freezeOnceVisible: false
  })

  const rightTransition = useSpring({
    config: { duration: 500, trail: 1000 },
    from: { opacity: 0, right: '100px' },
    to: {
      opacity: dataSpacesRef?.isIntersecting ? 1 : 0,
      left: dataSpacesRef?.isIntersecting ? '0px' : '100px'
    }
  })

  const triggerRef = React.useRef()
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false
  })

  const opacity = useSpring({
    config: { duration: 400 },
    from: { opacity: 0, left: '-100px' },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      left: dataRef?.isIntersecting ? '0px' : '-100px'
    }
  })

  return (
    <div>
      <animated.div className='relative' style={rightTransition}>
        <div className='subText-med padding-small'>
          <span className='green-text'>Codespaces.</span> offers a complete dev environment in seconds, so you can code, build, test, and open pull requests from any repo anywhere.
        </div>
      </animated.div>
      <div ref={codeSpaces} />
      <animated.div className='padding-small relative' style={opacity}>
        <div className='info-big'>
          <div className='alert-info green-text'>Did you know?</div>
          <div className='subText-alert green-text'>22% increase</div>
          <div className='subText-med'>in developer productivity after three years with Github</div>
        </div>
      </animated.div>
      <div ref={triggerRef} />
    </div>
  )
}

export default Codespaces
