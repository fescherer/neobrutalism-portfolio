import ThemeButton from './ThemeButton'

export default function Header() {
  return (
    <nav className="flex items-center justify-between w-100 px-4">
      <h1 className="text-title">Logo</h1>

      <div className="flex items-center justify-center text-3xl">
        <span>Home</span>
        {/* <ThemeButton></ThemeButton> */}
      </div>
    </nav>
  )
}
