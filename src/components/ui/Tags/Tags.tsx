import { Tag } from '@/components/ui'

export default function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </div>
  )
}
