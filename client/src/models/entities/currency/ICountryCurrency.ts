import { ECountryCurrencies } from '../../enumerations'

export default interface ICountryCurrency {
  _id: string
  country: ECountryCurrencies
  dailyChange: number
  unitPrice: number
}
