import { type MutableRefObject, useEffect, useRef, useState } from 'react'
type IntersectionHookReturnType = [boolean, React.RefObject<HTMLDivElement>]

export default function useIntersection(
  opciones = {},
): IntersectionHookReturnType {
  const [intersection, setIntersection] = useState(false)
  const refElement = useRef<HTMLDivElement | null>(null)
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const element = refElement.current
    const observer = new IntersectionObserver(entries => {
      //   entries.forEach(entry => {
      //     setIntersection(entry.isIntersecting)
      //   })
      for (const item of entries) {
        setIntersection(item.isIntersecting)
      }
    }, opciones)
    if (element) {
      observer.observe(element)
    }
    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return [intersection, refElement]
}
