'use client'

import Form from "@/components/form"
import { formFields } from "../lib/form-fields"
import { formActions } from "@/lib/form-actions"

export default function Home() {
  const changeHandler = {
    handler: (name: string, value: string, formData: FormData) => {
      console.log(`Field ${name} changed:`, value, Object.fromEntries(formData))
      // Implement field-specific logic here
    },
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Comprehensive Form Example</h1>
      <Form
        fields={formFields}
        actions={formActions}
        changeHandler={changeHandler}
      />
    </div>
  )
}

