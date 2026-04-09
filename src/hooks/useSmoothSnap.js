import { useEffect, useRef } from 'react'

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function smoothScrollTo(container, targetY, duration = 800) {
  const startY = container.scrollTop
  const distance = targetY - startY
  const startTime = performance.now()

  function step(now) {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    container.scrollTop = startY + distance * easeInOutCubic(progress)
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

export default function useSmoothSnap() {
  const isAnimating = useRef(false)

  useEffect(() => {
    const container = document.querySelector('.scroll-container')
    if (!container) return

    function getSections() {
      return Array.from(container.querySelectorAll('.snap-section'))
    }

    // Which section index is currently at/near the top of the viewport
    function getCurrentIndex() {
      const scrollTop = container.scrollTop
      const viewH = container.clientHeight
      const secs = getSections()
      let idx = 0
      secs.forEach((sec, i) => {
        if (sec.offsetTop <= scrollTop + viewH * 0.3) idx = i
      })
      return idx
    }

    // Is there still content to reveal inside the current section before snapping?
    function hasRoomToScroll(direction) {
      const secs = getSections()
      const idx = getCurrentIndex()
      const sec = secs[idx]
      const scrollTop = container.scrollTop
      const viewH = container.clientHeight
      const THRESHOLD = 8 // px tolerance

      if (direction > 0) {
        // Can we still scroll down inside this section?
        const sectionBottom = sec.offsetTop + sec.offsetHeight
        return scrollTop + viewH < sectionBottom - THRESHOLD
      } else {
        // Can we still scroll up inside this section?
        return scrollTop > sec.offsetTop + THRESHOLD
      }
    }

    let wheelAccum = 0
    let wheelTimer = null

    function onWheel(e) {
      e.preventDefault()
      if (isAnimating.current) return

      const direction = e.deltaY > 0 ? 1 : -1

      // If there's more content in this section, free-scroll through it
      if (hasRoomToScroll(direction)) {
        container.scrollTop += e.deltaY * 0.85
        return
      }

      // Debounce the snap trigger so rapid wheel events don't double-fire
      wheelAccum += e.deltaY
      clearTimeout(wheelTimer)
      wheelTimer = setTimeout(() => {
        if (Math.abs(wheelAccum) < 20) { wheelAccum = 0; return }
        const dir = wheelAccum > 0 ? 1 : -1
        wheelAccum = 0

        const secs = getSections()
        const currentIdx = getCurrentIndex()
        const targetIdx = Math.max(0, Math.min(secs.length - 1, currentIdx + dir))
        if (targetIdx === currentIdx) return

        isAnimating.current = true
        smoothScrollTo(container, secs[targetIdx].offsetTop, 800)
        setTimeout(() => { isAnimating.current = false }, 850)
      }, 50)
    }

    // Touch
    let touchStartY = 0

    function onTouchStart(e) {
      touchStartY = e.touches[0].clientY
    }

    function onTouchEnd(e) {
      if (isAnimating.current) return
      const delta = touchStartY - e.changedTouches[0].clientY
      if (Math.abs(delta) < 40) return
      const direction = delta > 0 ? 1 : -1
      if (hasRoomToScroll(direction)) return

      const secs = getSections()
      const targetIdx = Math.max(0, Math.min(secs.length - 1, getCurrentIndex() + direction))
      isAnimating.current = true
      smoothScrollTo(container, secs[targetIdx].offsetTop, 800)
      setTimeout(() => { isAnimating.current = false }, 850)
    }

    // Anchor nav clicks
    function onAnchorClick(e) {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return
      const id = anchor.getAttribute('href').slice(1)
      const target = document.getElementById(id)
      if (target && container.contains(target)) {
        e.preventDefault()
        isAnimating.current = true
        smoothScrollTo(container, target.offsetTop, 800)
        setTimeout(() => { isAnimating.current = false }, 850)
      }
    }

    container.addEventListener('wheel', onWheel, { passive: false })
    container.addEventListener('touchstart', onTouchStart, { passive: true })
    container.addEventListener('touchend', onTouchEnd, { passive: true })
    document.addEventListener('click', onAnchorClick)

    return () => {
      container.removeEventListener('wheel', onWheel)
      container.removeEventListener('touchstart', onTouchStart)
      container.removeEventListener('touchend', onTouchEnd)
      document.removeEventListener('click', onAnchorClick)
      clearTimeout(wheelTimer)
    }
  }, [])
}
