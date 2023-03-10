import { useQuery, gql } from '@apollo/client'
import { Test } from 'components/Test/Test'

import styles from '../../styles/Home.module.scss'

const QUERY = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`

export default function Home() {
  const { data, loading, error } = useQuery(QUERY)

  if (loading) {
    return <span>{'Loading...'} </span>
  }

  if (error) {
    return <div>{error} </div>
  }

  const countries = data.countries.slice(0, 4)

  return (
    <div className={styles.body}>
      {countries.map(country => (
        <div key={country.code} className={styles.card}>
          <h3>{country.name}</h3>
          <p>
            {country.code} - {country.emoji}
          </p>
        </div>
      ))}
      <Test />
    </div>
  )
}
