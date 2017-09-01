import React from 'react';
import { connect } from 'react-redux';
// import Card from 'Controls/card/card';
import Calendar from 'Controls/calendar/calendar';
// import Pie2D from 'Controls/charts/pie2d';
// import Bullet from 'Controls/charts/bullet';
class Home extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Calendar />
        {
          // <Card content={'<div>ff</div>'}/>
          // <Pie2D
          //   title='test'
          //   data={[
          //           {
          //               "label": "一月",
          //               "value": "3000"
          //           },
          //           {
          //               "label": "二月",
          //               "value": "300"
          //           },
          //           {
          //               "label": "三月",
          //               "value": "1000"
          //           },
          //           {
          //               "label": "四月",
          //               "value": "3000"
          //           }
          //       ]}/>
          // <Bullet
          // title='Bullet'
          // value='80'
          // target='90'
          // data={[
          //         {
          //             "minValue": "0",
          //             "maxValue": "50",
          //             "code": "#e44a00",
          //             "alpha": "25"
          //         },
          //         {
          //             "minValue": "50",
          //             "maxValue": "75",
          //             "code": "#f8bd19",
          //             "alpha": "25"
          //         },
          //         {
          //             "minValue": "75",
          //             "maxValue": "120",
          //             "code": "#6baa01",
          //             "alpha": "25"
          //         }
          //   ]}/>
        }
      </div>

    );
  }
}
export default Home;
