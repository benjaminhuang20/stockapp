import React from 'react'
import { Hello } from '../components/Hello';
import { StockLookupComponent } from '../components/StockLookupComponent';
import { AntdStockComponent } from '../components/AntdStockComponent';
import { SampleList } from '../components/SampleList';
import { AddtoList } from '../components/AddtoList';
const handledelete = (todo, list) => {
    const updatedArray = list.filter(todoItem => list.indexOf(todoItem) !== list.indexOf(todo));
    return (updatedArray);
  
  }
export function ToDoList() {
    const [list2, setList2] = React.useState([]);
    return (
        <div>
            <StockLookupComponent />
            <AntdStockComponent callback_benjamin={(price) => {
                setPrice(price);
            }} />
            <AddtoList onAdd={(thing) => {
                const newlist = list2.concat(thing);

                setList2(newlist);

            }} />
            <div>
                <SampleList mylist={list2} callback={(x) => {
                    const newlist = [...x]; // making a copy of x so we have a new array with same contents
                    setList2(newlist);
                }}
                />
            </div>

        </div>
    );
}