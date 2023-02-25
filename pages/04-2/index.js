import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_BOARD = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
        createProduct(seller: $seller, createProductInput: $createProductInput) {
            _id
            number
            message
        }
    }
`;

const GraphqlQuizPage = () => {

    const [ createProduct ] = useMutation(CREATE_BOARD);
    const [ seller, setSeller ] = useState('');
    const [ name, setName ] = useState('');
    const [ detail, setDetail ] = useState('');
    const [ price, setPrice ] = useState(0);

    const onChangeSeller = (e) => {
        const { value } = e.target;
        setSeller(value);
    };

    const onChangeName = (e) => {
        const { value } = e.target;
        setName(value);
    };

    const onChangeDetail = (e) => {
        const { value } = e.target;
        setDetail(value);
    };

    const onChangePrice = (e) => {
        const { value } = e.target;
        setPrice(Number(value));
    };

    const onClickCreateProduct = async() => {
        const result = await createProduct({
            variables: {
                seller: seller,
                createProductInput: {
                    name: name,
                    detail: detail,
                    price: price,
                }
            }
        });

        alert(result.data.createProduct.message);
        console.log(result.data);
    };

    return(
        <>
            파는이: <input type="text" onChange={onChangeSeller} /> <br/>
            이름: <input type="text" onChange={onChangeName} /> <br/>
            상세: <input type="text" onChange={onChangeDetail} /> <br/>
            가격: <input type="text" onChange={onChangePrice} /> <br/>
            <button onClick={onClickCreateProduct}>GRAPHQL-API 요청하기</button>
        </>
    );

};


export default GraphqlQuizPage;