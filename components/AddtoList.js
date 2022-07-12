import React, { useState } from "react";
import { Input, Space } from 'antd';
import 'antd/dist/antd.css';
import { Todo_List_View } from "./Todo_List_View";

import { ToDoItem } from "./ToDoItem";
const { Search } = Input;

export const AddtoList = (props) => {
    const [value, setValue] = useState("");
    function onChange(){
        setValue(event.target.value);
    }
    return (<div>
        <div>Hello
        </div>

        <Search placeholder="Add to list" onSearch={
            async () => {
                const newItem = new ToDoItem(value, false);
                props.onAdd(newItem);
                setValue("");
            }}
            enterButton="Add" onChange={onChange} value={value} allowClear style={{ width: '150%', }}
        />



    </div>);
};
