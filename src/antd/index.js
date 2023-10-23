import React, {Component} from 'react';
import {Button, DatePicker, Tooltip} from "antd";
import { SearchOutlined ,FastBackwardOutlined, AccountBookOutlined} from '@ant-design/icons';


const { RangePicker } = DatePicker;
class Index extends Component {
    onChange = (date, dateString) => {
        console.log(dateString);
    };
    rangeChange = (date, dateString) => {
        console.log(dateString);
    }
    render() {
        return (
            <div>
                antd
                <Button type="primary">Primary Button</Button>
                <Tooltip title="search">
                    <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                </Tooltip>

                <FastBackwardOutlined />
                <AccountBookOutlined />
                <Button type="primary" icon={<SearchOutlined />}>
                    Search
                </Button>
                <DatePicker onChange={this.onChange} />
                <br/>
                <RangePicker onChange={this.rangeChange} />

            </div>
        );
    }
}

export default Index;