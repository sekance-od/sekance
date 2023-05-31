import { ICountryCurrency } from '../currency'

export default interface INews {
  _id: string
  country: ICountryCurrency
  title: string
  description: string
  content: string
}
