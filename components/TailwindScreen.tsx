export default function TailwindScreen() {
  return (
    <div className="Screens fixed top-0 bg-black text-neutral-300 left-0 w-8 h-8 grid place-items-center uppercase font-mono text-sm">
      <div className="ms:hidden">-</div>
      <div className="hidden ms:max-mm:block">ms</div>
      <div className="hidden mm:max-ml:block">mm</div>
      <div className="hidden ml:max-sm:block">ml</div>
      <div className="hidden sm:max-md:block">sm</div>
      <div className="hidden md:max-lg:block">md</div>
      <div className="hidden lg:block">lg</div>
    </div>
  )
}
