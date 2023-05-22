import React from 'react';


function Testing() {
    console.log("componenet is re rendered");


    const [state, setState] = React.useState(0);
    React.useEffect(() => {
        console.log("use effect code is rendeirng");
    }, []);


    return (
        <button

            onClick={() => {
                setState(state + 1);
            }}
        >
            click me to rerender
        </button>
    )
}

export default Testing