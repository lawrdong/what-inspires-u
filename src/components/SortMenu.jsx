import React from 'react'

export default function SortMenu({ value, onChange }) {
  return (
    <select
      className="sort-menu"
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      <option value="newest">newest</option>
      <option value="most">most inspired</option>
      <option value="random">random</option>
    </select>
  )
}
