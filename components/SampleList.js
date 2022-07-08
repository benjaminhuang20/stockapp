import React from "react";
import { Input, Space } from 'antd';
import { Checkbox } from 'antd';
var list = [];
const handledelete = (todo,list) => {
    const updatedArray = list.filter(todoItem => list.indexOf(todoItem) !== list.indexOf(todo));
    console.log(updatedArray);
    return (updatedArray);
  
  }  
export const SampleList = (props) => {
    list = props.mylist;
    console.log(list);
    return (
        <div>
            <div>Hello 123</div>
            {list.map((item, index) => {
                return (<div>

                    <div>
                        <Checkbox> </Checkbox>
                        item {index + 1} : {item }  
                        <button onClick={async () => {
                          //  list = handledelete(item, list);
                            list.splice(index,1);
                            props.callback(list);
                        }}>delete</button>
                    </div></div>);

            })}

        </div>);
};
