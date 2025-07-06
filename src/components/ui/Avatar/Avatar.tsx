import { avatar } from '@/data/config'

export default function Avatar() {
  return (
    <div>
      <img
        className="Avatar block h-36 w-36 rounded-full"
        src={avatar.medium}
        width={144}
        height={144}
        loading="eager"
        alt="Manu Morante"
      />
    </div>
  )
}
