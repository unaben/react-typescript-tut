import React, {useContext} from 'react'
import { InterfaceContext } from './Context'

export default function DisplayContext() {
    const {name, age, country} = useContext(InterfaceContext)
  return (
    <div>
        <h3>Name: {name}</h3>
        <h3>Age: {age}</h3>
        <h3>Country: {country}</h3>
    </div>
  )
}
