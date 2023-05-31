import React, { useMemo } from 'react'
// Libs
// Models
import { ECountryCurrencies, ICountryCurrency } from '../../models'
// Constants
import { countryCurrencyColumns, dummyCountryCurrencyData } from '../../constants'
import DataTable from 'react-data-table-component'

interface IProps {
  tableTitle: string
  currencyData: ICountryCurrency[]
}
const CurrencyChangesDT: React.FC<IProps> = ({ tableTitle, currencyData }) => {
  return (
    <div>
      <DataTable columns={countryCurrencyColumns} data={dummyCountryCurrencyData} />
    </div>
  )
}

export default CurrencyChangesDT
