import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const CREATE_PRODUCT = gql`
    mutation($seller: String, $createProductInput: CreateProductInput!){
        createProduct(seller: $seller, createProductInput: $createProductInput){
            _id
            number
            message
        }
    }
`;

const ProductForm = () => {

    const [ seller, setSeller ] = useState('');
    const [ name, setName ] = useState('');
    const [ detail, setDetail ] = useState('');
    const [ price, setPrice ] = useState('');

    const [ createProduct ] = useMutation(CREATE_PRODUCT);

    const router = useRouter();

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

    const onClickStoreProduct = async() => {

        try{
            const result = await createProduct({
                variables: {
                    seller,
                    createProductInput: {
                        name,
                        detail,
                        price,
                    },
                }
            });

            const id = result.data.createProduct._id;
            console.log(id);
            router.push(`/05/boards/post/${id}`);
        } catch (err) {
            console.log(err.message);
        }

    };

    return(
        <>
            판매자: <input type="text" onChange={onChangeSeller} /> <br/>
            상품명: <input type="text" onChange={onChangeName} /> <br/>
            상품내용: <input type="text" onChange={onChangeDetail} /> <br/>
            상품가격: <input type="text" onChange={onChangePrice} /> <br/>
            <button onClick={onClickStoreProduct}>상품 등록</button>
        </>
    );

};


export default ProductForm;