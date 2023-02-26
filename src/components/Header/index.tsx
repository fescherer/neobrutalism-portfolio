import ThemeButton from './ThemeButton'

export default function Header() {
  return (
    <nav className="flex items-center justify-between w-100 px-4 py-2 max-w-[1000px]">
      <h1 className="text-title">Logo</h1>

      <div className="flex items-center justify-center gap-2 text-2xl">
        <span>SNIPPETS</span>
        <span>PROJECTS</span>
        <span>ABOUT ME</span>

        <ThemeButton></ThemeButton>
        <span>eng</span>
      </div>
    </nav>
  )
}
