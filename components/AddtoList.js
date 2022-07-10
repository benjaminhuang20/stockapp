import React, { useState } from "react";
import { Input, Space } from 'antd';
import 'antd/dist/antd.css';
import { SampleList } from "./SampleList";
const { Search } = Input;

export const AddtoList = (props) => {
    const [value, setValue] = useState("");

    function handleChange(event) {
        console.log(event.target.value);
        setValue(event.target.value);
    }
    return (<div>
        <div>Hello
        </div>

        <Search placeholder="Add to list" onSearch={
            async () => {
                const newItem = new ToDoItem(value, false);
                props.onAdd(newItem);
            }}
            enterButton onChange={handleChange} value={value} allowClear style={{ width: '150%', }}
        />



    </div>);
};
