import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardFormUI from "./BoardForm.presenter";
import { CREATE_PRODUCT } from "./BoardForm.queries";



const BoardForm = () => {

    const [ seller, setSeller ] = useState('');
    const [ name, setName ] = useState('');
    const [ detail, setDetail ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ changeColor, setChangeColor ] = useState(false);

    const [ createProduct ] = useMutation(CREATE_PRODUCT);

    const router = useRouter();


    const onChangeSeller = (e) => {
        const { value } = e.target;
        setSeller(value);

        if (value && name && detail && price ) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    };


    const onChangeName = (e) => {
        const { value } = e.target;
        setName(value);

        if (seller && value && detail && price ) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    };


    const onChangeDetail = (e) => {
        const { value } = e.target;
        setDetail(value);

        if (seller && name && value && price ) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    };


    const onChangePrice = (e) => {
        const { value } = e.target;
        setPrice(Number(value));

        if (seller && name && detail && value ) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
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


    return <BoardFormUI onChangeSeller={onChangeSeller}
                        onChangeName={onChangeName}
                        onChangeDetail={onChangeDetail}
                        onChangePrice={onChangePrice}
                        onClickStoreProduct={onClickStoreProduct}
                        changeColor={changeColor}/>;

};


export default BoardForm;