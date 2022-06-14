import React from 'react'
import { PersonProps } from './Person.types'

export default function Person(props: PersonProps) {
  return (
    <div>
        {props.name.firstName} {props.name.lastName}
    </div>
  )
}
