import cx from 'clsx'
export default function Footer() {
  const mainCx = cx(
    'FooterText',
    'sticky bottom-0 w-full z-0',
    'md:relative',
    'py-10 text-center',
    'text-slate-300 font-medium dark:text-slate-500',
    'bg-slate-100'
  )
  return <div className={mainCx}>© 2023 Manu Morante</div>
}
