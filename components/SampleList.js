import React from "react";
import { Input, Space } from 'antd';
const { Search } = Input;
import { Checkbox, Divider } from 'antd';
import { ToDoItem } from "./ToDoItem";

function Row(props) {
    const [OnEdit, setOnEdit] = React.useState(false);
    const [value, setValue] = React.useState(props.item.text);
    const [checked, setChecked] = React.useState(props.item.complete);
    const onChange = (e) => {
        props.item.complete = e.target.checked;
        props.onFinishedEdit(props.item)
    };
    function handleChange(event) {
        setValue(event.target.value);
    }

    return (<div>
        <Checkbox onChange={onChange} checked={props.item.complete}> </Checkbox>
        <span>item {props.index + 1}: </span>
        {OnEdit ?
            <span><input placeholder="edit" onChange={handleChange} value={value} />
                <button onClick={async () => {
                    props.item.text = value;
                    props.onFinishedEdit(props.item);
                    setOnEdit(false);
                }

                }>finish editing</button> </span>
            : <span>{props.item.text} </span>}

        <button onClick={async () => {
            props.onDelete(props.index);
        }}>delete</button>
        <button onClick={async () => {
            setOnEdit(!OnEdit);
        }}>edit</button> </div>);

}

export const SampleList = (props) => {
    var list = props.mylist;
    return (
        <div>
            <div>My List</div>
            {props.mylist.map((item, index) => {
                return (<div>
                    <div>
                        <Row item={item} index={index} onDelete={(x) => {
                            list.splice(x, 1);
                            props.callback(list);
                        }
                        } onFinishedEdit={(y) => {
                            const newList = [...props.mylist];
                            newList[index] = y;
                            props.callback(newList);
                            console.log(newList);
                        }} />
                    </div>
                </div>
                );

            })}
            <div>Read only version of the list</div>

            {props.mylist.map((item, index) => {
                return (<div>
                    <div>
                        <Row item={item} index={index} />
                    </div>
                </div>
                );

            })}
        </div>);
};
