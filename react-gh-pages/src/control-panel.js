import React, {PureComponent} from 'react';

const defaultContainer = ({children}) => <div className="control-panel">{children}</div>;

export default class ControlPanel extends PureComponent {
  render() {
    const Container = this.props.containerComponent || defaultContainer;
    const {settings} = this.props;

    return (
      <Container>
        <h3>Death rate from suicides <b>{settings.year}</b> </h3>
        <p>
          Map showing the annual number of deaths from suicide per 100,000 people . Hover over a
          country to see details.
        </p>
        Legend
        <div class ="row lege">
          <div class="col-sm-6" >Low</div>
          <div class="col-sm-6" style={{"text-align": "end"}} >High</div>
        </div>
        <br></br>
        <div key={'year'} className="input">
          <label><b>YEAR</b></label>
          <br></br>
          <b>1990</b>
          <input
            type="range"
            value={settings.year}
            min={1990}
            max={2017}
            step={1}
            onChange={evt => this.props.onChange('year', evt.target.value)}
          /><b>2017</b>
        </div>
        <br></br>
        <p>
          Data source: <a href="http://ghdx.healthdata.org/gbd-results-tool">United States: Institute for Health Metrics and Evaluation (IHME)</a>
        </p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
      Show in charts
    </button>
        <div className="source-link">
          <a
            href="https://uber.github.io/react-map-gl/"
            target="_new"
          >
            See my code here
          </a>
        </div>
        <hr />

        
      </Container>
    );
  }
}
