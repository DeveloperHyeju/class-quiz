const { useState } = require("react");


const Count = () => {

    const [ num, setNum ] = useState(0);

    let number = 0;

    const countNumber = () => {
        number+= 1;
        document.getElementById('count').textContent = number;
    };

    return (
        <>
            <div>
                <h1 id="count">{number}</h1>
                <button onClick={countNumber}>카운트 증가</button>
            </div>
            <div>
                <h1>{num}</h1>
                <button onClick={e => setNum(num + 1)}>카운트 증가</button>
            </div>
        </>
    );

};

export default Count;