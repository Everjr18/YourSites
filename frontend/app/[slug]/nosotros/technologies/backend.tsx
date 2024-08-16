import useIntersection from '../useIntersection'

export default function Backend({ data }: { data: Item[] }) {
  const [intersection, refElement] = useIntersection({ threshold: 0.5 })
  return (
    <div
      ref={refElement}
      className={`${
        intersection
          ? 'animate-fadedown opacity-100'
          : 'opacity-0 animate-fadeRight'
      } transition-opacity duration-1000 flex justify-center gap-x-5`}
    >
      {data.map(
        item =>
          item.type === 'backend' && (
            <div key={item.id}>
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </div>
          ),
      )}
    </div>
  )
}
