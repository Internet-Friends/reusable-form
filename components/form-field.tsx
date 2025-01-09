import React from 'react'
import { Label } from '@/components/ui/label'

interface FormFieldProps {
  name: string
  label: string
  children: React.ReactNode
}

export function FormField({ name, label, children }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      {children}
    </div>
  )
}

