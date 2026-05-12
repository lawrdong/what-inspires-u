import { Link } from 'react-router-dom'
import styles from './HomeControls.module.css'

export default function HomeControls({ query, setQuery, sort, setSort }) {
  return (
    <div className={styles.controls}>
      <div className={styles.leftSection}>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="search titles"
          className={styles.searchInput}
        />

        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className={styles.sortSelect}
        >
          <option value="newest">newest</option>
          <option value="most">most inspired</option>
          <option value="random">random</option>
        </select>
      </div>

      <Link to="/new" className="btn btn-primary">
        share inspiration
      </Link>
    </div>
  )
}
