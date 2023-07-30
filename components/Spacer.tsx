const spaceCx = 'Spacer w-full h-[30vh] sm:h-[20vh]'

export function Spacer() {
  return <div aria-hidden className={spaceCx} />
}

export function SpacerLines() {
  const spaceStyle = {
    background:
      'repeating-linear-gradient(90deg, rgba(90, 90, 90, 0.2) 0, rgba(90, 90, 90, 0.2) 1px, rgba(0, 0, 0, 0) 1px, rgba(0, 0, 0, 0) 20px)',
  }
  return <div aria-hidden className={spaceCx} style={spaceStyle} />
}
