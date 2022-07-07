import React from "react";
import { Input, Space } from 'antd';
export const SampleList = (props) => {
    console.log(props.mylist);
    return (<div>
        <div>Hello 123 {props.mylist.length}</div>

        {props.mylist.map((item, index) => {
            return (<li key={index}>
                item {index + 1} : {item}
            </li>);
        })}

    </div>);
};
