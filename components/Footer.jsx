import cx from 'clsx'
export default function Footer() {
  const mainCx = cx('FooterText', 'w-full', 'py-10 text-center', 'text-slate-500/70 font-medium ')
  return <div className={mainCx}>© 2023 Manu Morante</div>
}
