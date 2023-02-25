import axios from "axios";

const RestApiPage = () => {

    const onClickrestApi = async() => {
        const result = await axios.get("https://koreanjson.com/users");
        console.log(result.data);
    };

    return (
        <>
            <button onClick={onClickrestApi}>REST-API 요청하기</button>
        </>
    );

};


export default RestApiPage;