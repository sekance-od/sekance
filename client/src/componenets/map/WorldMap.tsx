import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import Tooltip from './Tooltip'
import ReactDOM from 'react-dom'

mapboxgl.accessToken =
  'pk.eyJ1Ijoib2d1enpzYW5jYWt0YXIiLCJhIjoiY2tyY2U0OW55MDNlMjJ2b2Vya2huOXlneCJ9.wlUwgbQbmq58TaWuI_QqJg'

const WorldMap = () => {
  // Refs
  const tooltipRef = useRef(new mapboxgl.Popup({ offset: 15 }))
  const mapContainerRef = useRef<HTMLDivElement | null>(null)

  // States

  // Lifecycle
  // Initialize map when component mounts
  useEffect(() => {
    if (mapContainerRef.current === null) return

    const map = new mapboxgl.Map({
      worldview: '',
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-79.38, 43.65],
      zoom: 1
    })

    // change cursor to pointer when user hovers over a clickable feature
    map.on('mouseenter', e => {
      if (e.features.length) {
        map.getCanvas().style.cursor = 'pointer'
      }
    })

    // reset cursor to default when user is no longer hovering over a clickable feature
    map.on('mouseleave', () => {
      map.getCanvas().style.cursor = ''
    })

    map.on('dragend', () => {
      map.rotateTo(90, {
        animate: true,
        duration: 20000,
        easing: function (t) {
          return t
        }
      })
    })

    map.on('zoomend', () => {
      map.rotateTo(90, {
        animate: true,
        duration: 20000,
        easing: function (t) {
          return t
        }
      })
    })

    map.rotateTo(90, {
      animate: true,
      duration: 20000,
      easing: function (t) {
        return t
      }
    })

    map.on('load', () => {
      map.setPaintProperty('country-layer', 'fill-color', '#FFff00')
      map.addLayer({
        id: 'country-layer',
        type: 'fill',
        source: {
          type: 'vector',
          url: 'mapbox://mapbox.country-boundaries-v1' // Replace with the source URL for the country boundaries data
        },
        'source-layer': 'country_boundaries', // Replace with the source layer for the country boundaries data
        paint: {
          'fill-color': Math.random() > 0.5 ? '#00ffff' : '#f700f7', // Set the default fill color for all countries
          'fill-opacity': 0.6 // Set the fill opaciy
        }
      })
    })

    // add tooltip when users mouse move over a point
    // map.on('mousemove', e => {
    //   const features = map.queryRenderedFeatures(e.point)
    //   if (features.length) {
    //     const feature = features[0]

    //     // Create tooltip node
    //     const tooltipNode = document.createElement('div')
    //     ReactDOM.render(<Tooltip feature={feature} />, tooltipNode)

    //     // Set tooltip on map
    //     tooltipRef.current.setLngLat(e.lngLat).setDOMContent(tooltipNode).addTo(map)
    //   }
    // })

    // Clean up on unmount
    return () => map.remove()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="map-container h-full" ref={mapContainerRef} />
}

export default WorldMap
