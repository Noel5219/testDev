import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import TM from 'fusioncharts/themes/fusioncharts.theme.ocean';

charts(FusionCharts);

class Pei2D extends React.Component {
  constructor(props) {
    super(props);
    const {
      title = '',
      data = {},
      yMaxValue
    } = props;

    this.state = {
      dataSource: {
        chart: {
          "caption": title,
          "numberprefix": "$",
          "plotgradientcolor": "",
          "bgcolor": "FFFFFF",
          "showalternatehgridcolor": "0",
          "showplotborder": "0",
          "divlinecolor": "CCCCCC",
          "showvalues": "1",
          "showcanvasborder": "0",
          "canvasbordercolor": "CCCCCC",
          "canvasborderthickness": "1",
          "yaxismaxvalue": yMaxValue,
          "captionpadding": "30",
          "linethickness": "3",
          "sshowanchors": "0",
          "yaxisvaluespadding": "15",
          "showlegend": "1",
          "use3dlighting": "0",
          "showshadow": "0",
          "legendshadow": "0",
          "legendborderalpha": "0",
          "showborder": "0",
          "palettecolors": "#EED17F,#97CBE7,#074868,#B0D67A,#2C560A,#DD9D82"
        },
        data: data       
      }

    }
  }
  render() {
    const self = this,
          {state, props} = self,
          {dataSource} = state,
          {
            width = 600,
            height = 400
          } = props;
    return (
	    <ReactFC
        renderAt="pie_chart_container"
        type="pie2d"
        width={width}
        height={height}
        dataFormat="json"
        dataSource={dataSource}/>
    );
  }
}
export default Pei2D;
