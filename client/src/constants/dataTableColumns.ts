import { TableColumn } from 'react-data-table-component'
import { ICountryCurrency } from '../models'

export const countryCurrencyColumns: TableColumn<ICountryCurrency>[] = [
  {
    name: 'Country',
    selector: row => row.country
  },
  {
    name: 'Price',
    selector: row => row.unitPrice
  },
  {
    name: '24H Change',
    selector: row => row.dailyChange
  }
]
