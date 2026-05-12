import React from 'react'
import styles from './SortMenu.module.css'

export default function SortMenu({ value, onChange }) {
  return (
    <select
      className={styles.sortMenu}
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      <option value="newest">newest</option>
      <option value="most">most inspired</option>
      <option value="random">random</option>
    </select>
  )
}
