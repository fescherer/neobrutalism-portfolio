import * as Dialog from '@radix-ui/react-dialog'
import React, { Dispatch, SetStateAction } from 'react'

type ResponsiveDialogProps = {
  state: string
  setState: Dispatch<SetStateAction<string>>
  children: JSX.Element
}

export default function ResponsiveDialog({
  state,
  setState,
  children
}: ResponsiveDialogProps) {
  return (
    <Dialog.Root open={!!state}>
      <Dialog.Portal>
        <Dialog.Overlay
          onClick={() => setState('')}
          className="fixed bg-overlay h-full w-full inset-0"
        />
        <Dialog.Content className="fixed bg-primary top-1/2 right-1/2 ">
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
