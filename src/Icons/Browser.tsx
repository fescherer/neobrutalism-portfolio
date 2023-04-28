import { Icon } from '@/@types/Util'

export function Browser({ color = 'currentColor' }: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 256 256"
      fill={color}
    >
      <path d="M216 40H72a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm-32 48v16H40V88Zm0 112H40v-80h144v80Zm32-32h-16V88a16 16 0 0 0-16-16H72V56h144Z" />
    </svg>
  )
}
