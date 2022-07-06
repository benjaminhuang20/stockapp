import React, { useState } from "react";
import { Input, Space } from 'antd';

const { Search } = Input;
export function StockLookupComponent() {
    const [value, setValue] = useState("");
    const [price, setPrice] = useState(0);
    function handleChange2(event) {
        console.log(event.target.value);
        setValue(event.target.value);
    }
    return (
        <div>

            <input type="text" name="" onChange={handleChange2} value={value} />
            <button onClick={async () => {
                const x = await fetch('api/stock?' +
                    new URLSearchParams({
                        symbol: value,
                    }));

                const response = await x.json();
                setPrice(response.price);
            }}>Lookup Stock</button>
        </div>
    );
}
;
