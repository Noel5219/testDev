import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import Calendar from 'rc-calendar';
import zhCN from 'rc-calendar/lib/locale/zh_CN';
import enUS from 'rc-calendar/lib/locale/en_US';
import TimePickerPanel from 'rc-time-picker/lib/Panel';
import dateFormat from 'dateformat';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';
import 'rc-time-picker/assets/index.css';
import 'rc-calendar/assets/index.css';

const Styles = {
  frame: {
    zIndex: 1000,
    position: 'relative',
    width: 900,
    margin: '20px auto',
  }
};

class CalendarControl extends React.Component {
  constructor(props) {
    super(props);

    this.getFormat = this.getFormat.bind(this);
    this.disabledDate = this.disabledDate.bind(this);
    this.onStandaloneSelect = this.onStandaloneSelect.bind(this);
    this.onStandaloneChange = this.onStandaloneChange.bind(this);
  }
  getFormat(format) {
    return format ? format : 'YYYY-MM-DD';
  }
  disabledDate(current) {
    if (!current) {
      // allow empty select
      return false;
    }
    const date = moment();
    date.hour(0);
    date.minute(0);
    date.second(0);
    return current.valueOf() < date.valueOf();  // can not select days before today
  }
  onStandaloneSelect(value) {
    const time = dateFormat(value.toDate(), 'yyyy-mm-dd'); //yyyy-mm-dd TT h:MM
    console.log('onStandaloneSelect', time);
    // console.log(value && value.format(format));
  }

  onStandaloneChange(value) {
    const time = dateFormat(value.toDate(), 'yyyy-mm-dd'); //yyyy-mm-dd TT h:MM

    console.log('onStandaloneChange', time);
    // console.log(value && value.format(format));
  }
  render() {
    const {
            getFormat,
            disabledTime,
            disabledDate,
            onStandaloneSelect,
            onStandaloneChange
          } = this,
          cn = location.search.indexOf('cn') !== -1,
          timePickerElement = <TimePickerPanel defaultValue={moment('00:00:00', 'HH:mm:ss')} />;
    let now = moment();

    if (cn) {
      now.locale('zh-cn').utcOffset(8);
    } else {
      now.locale('en-gb').utcOffset(0);
    }

    return (
      <div style={Styles.frame}>
        <Calendar
          showToday
          showWeekNumber={false}
          locale={cn ? zhCN : enUS}
          defaultValue={now}
          formatter={getFormat('YYYY-MM-DD HH:mm:ss')}
          showOk={false}
          timePicker={timePickerElement}
          onChange={(e)=>{onStandaloneChange(e); }}
          disabledDate={disabledDate}
          onSelect={(e)=>{onStandaloneSelect(e); }}/>
      </div>
    );
  }
}
export default CalendarControl;
