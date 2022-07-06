import React, { useState } from "react";
import { Input, Space } from 'antd';
import 'antd/dist/antd.css';
const { Search } = Input;
// const onSearch = (value) => console.log(value);
export function AntdStockComponent() {
    const [value, setValue] = useState("");
    const [price, setPrice] = useState(0);
    function handleChange(event) {
        console.log(event.target.value);
        setValue(event.target.value);
    }
    return (
        <Search placeholder="Search stocks" onSearch={
            async () => {
                const x = await fetch('api/stock?' +
                    new URLSearchParams({
                        symbol: value,
                    }));
                const response = await x.json();
                setPrice(response.price);
            }}
            enterButton onChange={handleChange} value={value} allowClear />
    );
}
