import React, { useState } from "react";

export function StockLookupComponent() {
    const [value, setValue] = useState("");
    const [price, setPrice] = useState(0);
    function handleChange(event) {
        console.log(event.target.value);
        setValue(event.target.value);
    }
    return (
        <div>
            <p>{price}</p>
            <input type="text" name="" onChange={handleChange} value={value} />
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
