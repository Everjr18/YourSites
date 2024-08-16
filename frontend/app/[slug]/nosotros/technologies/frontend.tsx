import useIntersection from '../useIntersection'

export default function Frontend({ data }: { data: Item[] }) {
  const [intersection, refElement] = useIntersection({ threshold: 1 })
  return (
    <div className='flex justify-center gap-x-5'>
      {data.map(
        item =>
          item.type === 'frontend' && (
            <div
              key={item.id}
              ref={refElement}
              className={`${
                intersection
                  ? 'animate-fadedown opacity-100'
                  : 'opacity-0 animate-fadeRight'
              } transition-opacity duration-300  `}
            >
              <span>{item.icon}</span>
            </div>
          ),
      )}
    </div>
  )
}
