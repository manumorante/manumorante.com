export default function New() {
  return (
    <div className='flex gap-1 items-center py-2 opacity-90'>
      <div className='w-2.5 h-2.5 flex relative'>
        <span className='animate-ping absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-75'></span>
        <span className='relative inline-flex rounded-full w-full h-full bg-green-500'></span>
      </div>

      <div className='text-xs text-green-500'>Nuevo</div>
    </div>
  )
}
