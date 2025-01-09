'use client' 

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Slider } from '@/components/ui/slider'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'

export const formFields = [
  {
    name: 'name',
    label: 'Name',
    children: <Input type="text" name="name" id="name" placeholder="John Doe" />
  },
  {
    name: 'email',
    label: 'Email',
    children: <Input type="email" name="email" id="email" placeholder="john@example.com" />
  },
  {
    name: 'password',
    label: 'Password',
    children: <Input type="password" name="password" id="password" />
  },
  {
    name: 'bio',
    label: 'Bio',
    children: <Textarea name="bio" id="bio" placeholder="Tell us about yourself" />
  },
  {
    name: 'role',
    label: 'Role',
    children: (
      <Select name="role">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="user">User</SelectItem>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="manager">Manager</SelectItem>
        </SelectContent>
      </Select>
    )
  },
  {
    name: 'terms',
    label: 'Terms and conditions',
    children: (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" name="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          I agree to the terms and conditions
        </label>
      </div>
    )
  },
  {
    name: 'notifications',
    label: 'Enable notifications',
    children: <Switch name="notifications" id="notifications" />
  },
  {
    name: 'preferredContact',
    label: 'Preferred contact method',
    children: (
      <RadioGroup name="preferredContact" className="flex flex-col space-y-1">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="email" id="email" />
          <Label htmlFor="email">Email</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="phone" id="phone" />
          <Label htmlFor="phone">Phone</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="sms" id="sms" />
          <Label htmlFor="sms">SMS</Label>
        </div>
      </RadioGroup>
    )
  },
  {
    name: 'experience',
    label: 'Years of experience',
    children: (
      <Slider
        name="experience"
        defaultValue={[5]}
        max={20}
        step={1}
        className="w-[60%]"
      />
    )
  },
  // {
  //   name: 'birthdate',
  //   label: 'Date of Birth',
  //   children: (
  //     <Popover>
  //       <PopoverTrigger asChild>
  //         <Button
  //           variant={"outline"}
  //           className={cn(
  //             "w-full justify-start text-left font-normal",
  //             !Date && "text-muted-foreground"
  //           )}
  //         >
  //           <CalendarIcon className="mr-2 h-4 w-4" />
  //           <span>Pick a date</span>
  //         </Button>
  //       </PopoverTrigger>
  //       <PopoverContent className="w-auto p-0">
  //         <Calendar
  //           mode="single"
  //           onSelect={() => {}}
  //           initialFocus
  //         />
  //       </PopoverContent>
  //     </Popover>
  //   )
  // },
]