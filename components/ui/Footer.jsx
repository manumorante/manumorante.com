import cx from 'clsx'

export default function Footer({ children, className }) {
  return <div className={cx('Footer', '', className)}>{children}</div>
}
