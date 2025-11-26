import { Link } from 'react-router-dom'

export default function HomeControls({ query, setQuery, sort, setSort }) {
  return (
    <div className="home-controls">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="search titles"
          className="search-bar-input"
        />

        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="sort-menu"
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
