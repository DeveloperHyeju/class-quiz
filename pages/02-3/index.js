import { useState } from "react";


const CertificationNumber = () => {

    const [ num, setNum ] = useState('000000');

    const changeNum = () => {
        setNum(Math.floor(Math.random()*(999999 - 100000 + 1) + 100000));
    };

    let number = '00000';

    const changeNumber = () => {
        number = Math.floor(Math.random()*(999999 - 100000 + 1) + 100000);
        document.getElementById('number').textContent = number;
    };
    
    return (
        <>
            <div>
                <h1 id="number">{number}</h1>
                <button onClick={changeNumber}>인증번호 전송</button>
            </div>
            <div>
                <h1>{num}</h1>
                <button onClick={changeNum}>인증번호 전송</button>
            </div>
        </>
    );

};

export default CertificationNumber;