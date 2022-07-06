import React from "react";

export const Hello = () => {
    const [result, setResult] = React.useState(null);
    return (<div>
        <div>Hello
        </div>
        {result &&
            <div>{result.text} , {result.name} , {result.school.grade}
            </div>}
        <button onClick={async () => {
            const hello = await fetch("api/hello");
            // const response = await hello.text();
            // const json_response = JSON.parse(response);
            // console.log(response); ()
            // setResult(json_response);
            const response = await hello.json();
            setResult(response);

        }}> Fetch data</button>
    </div>);
};
