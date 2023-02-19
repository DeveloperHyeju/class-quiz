import { useState } from "react";


const Hello = () => {

    const [ hello, setHello ] = useState('안녕하세요');
    
    let hi = '안녕하세요';

    const changeText = () => {
        hi = '반갑습니다';
        document.getElementById('hi').textContent = hi;
    };

    return (
        <>
            <button id="hi" onClick={changeText}>{hi}</button>
            <button onClick={e => setHello('반갑습니다')}>{hello}</button>
        </>
    );

};

export default Hello;