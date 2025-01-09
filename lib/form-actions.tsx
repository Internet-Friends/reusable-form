import { Button } from '@/components/ui/button'

export const formActions = {
  save: {
    children: <Button>Save</Button>,
    handler: (formData: FormData, submitter: { id: string; name: string; value: string } | null) => {
      console.log('Save handler:', Object.fromEntries(formData), submitter)
      // Implement save logic here
    },
  },
  submit: {
    children: <Button variant="outline">Submit</Button>,
    handler: (formData: FormData, submitter: { id: string; name: string; value: string } | null) => {
      console.log('Submit handler:', Object.fromEntries(formData), submitter)
      // Implement submit logic here
    },
  },
  reset: {
    children: <Button type='reset' variant="secondary">Reset</Button>,
    handler: (formData: FormData, submitter: { id: string; name: string; value: string } | null) => {
      console.log('Reset handler:', submitter)
      // Implement reset logic here
    },
  },
}

