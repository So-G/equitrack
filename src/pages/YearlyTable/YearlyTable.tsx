import { Table24 } from 'components/Table24/Table24'
import styles from './yearlyTable.module.scss'
export const YearlyTable = () => {
  return (
    <div className={styles.tablePage}>
      <h1>2024-2025</h1>
      <Table24 />
    </div>
  )
}
