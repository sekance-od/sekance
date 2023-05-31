import React, { useMemo } from 'react'
// Libs
import DataTable from 'react-data-table-component'
// Constants
import { dummyCountryCurrencyData, countryCurrencyColumns } from '../../constants'

// Models

const PopularCurrenciesDT = () => {
  return (
    <div>
      <DataTable columns={countryCurrencyColumns} data={dummyCountryCurrencyData} />
    </div>
  )
}

export default PopularCurrenciesDT
