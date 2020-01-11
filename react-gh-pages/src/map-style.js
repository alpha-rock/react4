// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/
export const dataLayer = {
  id: 'data',
  type: 'fill',
  paint: {
    'fill-color': {
      property: 'percentile',
      stops: [
        [0, '#ffffff'], //#3288bd
        [1, '#ffe1e1'], //#66c2a5
        [2, '#ffc1c1'],
        [3, '#ff9e9e'],
        [4, '#ff8080'],
        [5, '#ff5f5f'],
        [6, '#ff3f3f'],
        [7, '#ff1a1a'],
        [8, '#ff0000']
      ]
    }, 
    'fill-opacity': 0.6
  }
};
