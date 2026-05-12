import styles from './SearchBar.module.css'

export default function SearchBar({ value, onChange }) {
  return (
    <div className={styles.searchBar}>
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="search titles"
      />
    </div>
  )
}

