import * as React from 'react'
import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent
} from '@mui/material'
import { selectStyle } from './selectStyles'

type Props = {
  children: React.ReactNode
  value: number | string
  setValue: (val: number) => void
  disabled?: boolean
  placeholder: string
}

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

export default function SelectInput2 ({
  children,
  value,
  setValue,
  placeholder,
  disabled = false
}: Props) {
  const handleChange = (event: SelectChangeEvent<number | string>) => {
    setValue(event.target.value as number)
  }

  return (
    <FormControl>
      <Select
        sx={selectStyle}
        value={value}
        onChange={handleChange}
        input={<OutlinedInput />}
        displayEmpty
        MenuProps={MenuProps}
        disabled={disabled}
      >
        <MenuItem disabled value=''>
          {placeholder}
        </MenuItem>
        {children}
      </Select>
    </FormControl>
  )
}
