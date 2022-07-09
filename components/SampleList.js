import React from "react";
import { Input, Space } from 'antd';
const { Search } = Input;4
var list = [];
var truefalse = []
function Row(props) {
    const [OnEdit, setOnEdit] = React.useState(false);
    const[value, setValue] = React.useState(props.item);
    function handleChange(event) {
        console.log(event.target.value);
        setValue(event.target.value);
    }

    return (<div>

        <span>item {props.index + 1}: </span>
        {OnEdit ?
             <span><input placeholder="Search stocks" onChange={handleChange} value={value} />
                <button onClick={async () => {
                    props.onFinishedEdit(value);
                    setOnEdit(false);
                 }
                
                }>finish editing</button> </span>
           : <span>{props.item} </span>       }
        
        <button onClick={async () => {
            props.onDelete(props.index);
        }}>delete</button>
        <button onClick={async () => {
            // console.log(index);
            setOnEdit(!OnEdit);

        }}>edit</button> </div>);
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
                        <Row item={item} index={index} onDelete={(x) => {
                            list.splice(x, 1);
                            props.callback(list);
                        }
                        } onFinishedEdit={(y) => {
                            list[index] = y;
                            props.callback(list);
                        }} />
                    </div>
                </div>
                );

            })}

        </div>);
};
