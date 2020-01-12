
import logo from './logo.svg';
import './App.css';



import React, {Component} from 'react';
import {render} from 'react-dom';
import MapGL, {Source, Layer} from 'react-map-gl';
import ControlPanel from './control-panel';

import {dataLayer} from './map-style.js';
import {updatePercentiles} from './utils';
import {json as requestJson} from 'd3-request';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYWxwaGEtc2lzb2RpeWEiLCJhIjoiY2p6MmppOXM2MDcwaDNtbDlmeDU2ZDR1biJ9.AMeqwiRdGPHuNjsIC1cJ8w'; // Set your mapbox token here
const MAPBOX_STYLE = 'mapbox://styles/alpha-sisodiya/cjzh2rw962odm1cqx34m2s0ix';
export default class App extends Component {
  state = {
    year: 2017,
    data: null,
    hoveredFeature: null,
    viewport: {
      latitude: 46.17,
      longitude: 43,
      zoom: 2,
      bearing: 0,
      pitch: 0
    }
  };

  componentDidMount() {
    requestJson(
      'https://raw.githubusercontent.com/alpha-rock/DataHosting/master/final4.geojson',
      (error, response) => {
        if (!error) {
          this._loadData(response);
        }
      }
    );
  }

  _loadData = data => {
    updatePercentiles(data, f => f.properties.dpm[this.state.year]);
    this.setState({data});
  };

  _updateSettings = (name, value) => {
    if (name === 'year') {
      this.setState({year: value});

      const {data} = this.state;
      if (data) {
        updatePercentiles(data, f => f.properties.dpm[value]);
        // trigger update
        this.setState({data: {...data}});
      }
    }
  };

  _onViewportChange = viewport => this.setState({viewport});

  _onHover = event => {
    const {
      features,
      srcEvent: {offsetX, offsetY}
    } = event;
    const hoveredFeature = features && features.find(f => f.layer.id === 'data');

    this.setState({hoveredFeature, x: offsetX, y: offsetY});
  };

  _renderTooltip() {
    const {hoveredFeature, x, y} = this.state;

    return (
      hoveredFeature && (
        <div className="tooltip" style={{left: x, top: y}}>
          <div>Country :<b> {hoveredFeature.properties.name}</b></div>
          <div>Death per 100000 people: <b>{hoveredFeature.properties.value}</b></div>
          <div>Percentile: <b>{(hoveredFeature.properties.percentile / 8) * 100}</b></div>
          <div>Code: <b>{hoveredFeature.properties.sov_a3}</b></div>
        </div>
      )
    );
  }

  render() {
    const {viewport, data} = this.state;

    return (
      <div style={{height: '100%'}} class="holder">
        <ControlPanel
          containerComponent={this.props.containerComponent}
          settings={this.state}
          onChange={this._updateSettings}
        />
        <MapGL
          {...viewport}
          width="100%"
          height="100%"
          mapStyle="mapbox://styles/alpha-sisodiya/ck57cx3li00wl1crsehm5tbnj"
          onViewportChange={this._onViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onHover={this._onHover}
        >
          <Source type="geojson" data={data}>
            <Layer beforeId="admin-0-boundary" {...dataLayer} />
            
          </Source>
          {this._renderTooltip()}
        </MapGL>

        
      </div>
    );
  }
}

export function renderToDom(container) {
  render(<App />, container);
}









