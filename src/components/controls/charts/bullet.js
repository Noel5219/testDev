import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import widgets from 'fusioncharts/fusioncharts.widgets';
import TM from 'fusioncharts/themes/fusioncharts.theme.ocean';

widgets(FusionCharts);

class Pei2D extends React.Component {
  constructor(props) {
    super(props);
    const {
      title = '',
      subTitle = '',
      data = {},
      value,
      target
    } = props;

    this.state = {
      dataSource: {
        "chart": {
            "theme": "fint",
            "lowerLimit": "0",
            "subCaptionFontSize": "11",
            "upperLimit": "120",
            "caption": title,
            "subcaption": subTitle,
            "numberPrefix": "$",
            "numberSuffix": "K",
            "chartBottomMargin": "25"
        },
        "colorRange": {
            "color": data
        },
        "value": value,
        "target": target
      }
    }
  }
  render() {
    const self = this,
          {state, props} = self,
          {dataSource} = state,
          {
            width = 500,
            height = 100
          } = props;
    return (
	    <ReactFC
        renderAt="container"
        type="hbullet" //hbullet、vbullet
        width={width}
        height={height}
        dataFormat="json"
        dataSource={dataSource}/>
    );
  }
}
export default Pei2D;
