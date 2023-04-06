import cx from 'clsx'

export default function Footer({ children, className }) {
  return <footer className={cx('Footer', '', className)}>{children}</footer>
}
