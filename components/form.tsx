'use client'

import React, { useCallback, FormEvent, ChangeEvent } from 'react'
import { FormField } from './form-field'

interface IFormField {
  name: string
  label: string
  children: React.ReactNode
}

interface IAction {
  children: React.ReactNode
  handler: (formData: FormData, submitter: { id: string; name: string; value: string } | null) => void
}

interface ChangeHandler {
  handler: (name: string, value: string, formData: FormData) => void
}

interface ReusableFormProps {
  fields: IFormField[]
  actions: Record<string, IAction>
  changeHandler?: ChangeHandler
}

export default function Form({ fields, actions, changeHandler }: ReusableFormProps) {
  const handleFormChange = useCallback((event: ChangeEvent<HTMLFormElement>) => {
    const formElement = event.currentTarget
    const formData = new FormData(formElement)

    const changedField = event.target as unknown as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    const changedFieldName = changedField.name
    const changedFieldValue = changedField.value

    if (changeHandler) {
      changeHandler.handler(changedFieldName, changedFieldValue, formData)
    }
  }, [changeHandler])

  const handleFormSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formElement = event.currentTarget
    const formData = new FormData(formElement)

    const submitter = (event as unknown as SubmitEvent).submitter as HTMLButtonElement | null
    const submitterData = submitter ? { id: submitter.id, name: submitter.name, value: submitter.value } : null

    if (submitter && actions[submitter.id]) {
      actions[submitter.id].handler(formData, submitterData)
    }
  }, [actions])

  return (
    <form onChange={handleFormChange} onSubmit={handleFormSubmit} className="space-y-4">
      {fields.map((field) => (
        <FormField key={field.name} name={field.name} label={field.label}>
          {field.children}
        </FormField>
      ))}
      <div className="flex space-x-2">
        {Object.entries(actions).map(([id, button]) => (
          <React.Fragment key={id}>
            {React.cloneElement(button.children as React.ReactElement<HTMLButtonElement>, { 
              type: 'submit',
              id: id,
              name: id
            })}
          </React.Fragment>
        ))}
      </div>
    </form>
  )
}

