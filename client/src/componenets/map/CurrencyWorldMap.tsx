import React, { useEffect, useRef, useState } from 'react'
// Api
import axiosInstance from '../../api/axios.instance'
import { coordinates } from '../../constants'

import WorldMap from './WorldMap'

const CurrencyWorldMap = () => {
  return <WorldMap />
}

export default CurrencyWorldMap
