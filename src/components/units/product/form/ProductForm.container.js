import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductFormUI from "./ProductForm.presenter";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./ProductForm.queries";


const ProductForm = ({isEdit, data}) => {

    const router = useRouter();

    const [ seller, setSeller ] = useState('');
    const [ name, setName ] = useState('');
    const [ detail, setDetail ] = useState('');
    const [ price, setPrice ] = useState('');
    
    const [ updateProduct ] = useMutation(UPDATE_PRODUCT);
    const [ createProduct ] = useMutation(CREATE_PRODUCT);


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
        setPrice(value);
    };


    const onClickEditProduct = async () => {
        const updateProductVariables = {
            productId: router.query.productId,
            updateProductInput: {},
        };

        if (name) updateProductVariables.updateProductInput.name = name;
        if (detail) updateProductVariables.updateProductInput.detail = detail;
        if (price) updateProductVariables.updateProductInput.name = price;

        try {
            const result = await updateProduct({
                variables: updateProductVariables,
            });

            alert(result.data.updateProduct.message);
            router.push(`/08/${router.query.productId}`);
        } catch (err) {
            alert(err.message);
        }
    };


    const onClickStoreProduct = async () => {

        if (seller && name && detail && price) {
            try {
                const result = await createProduct({
                    variables: {
                        seller,
                        createProductInput: {
                            name,
                            detail,
                            price: Number(price),
                        }
                    }
                });

                alert(result.data.createProduct.message);
                router.push(`/08/${result.data.createProduct._id}`);
            } catch (err) {
                alert(err.message);
            }
        } else {
            alert('제대로 입력했는지 확인해주세요.');
        }
        
    };


    return <ProductFormUI isEdit={isEdit} 
                        data={data}
                        onChangeSeller={onChangeSeller} 
                        onChangeName={onChangeName}
                        onChangeDetail={onChangeDetail}
                        onChangePrice={onChangePrice}
                        onClickEditProduct={onClickEditProduct}
                        onClickStoreProduct={onClickStoreProduct} />;

};


export default ProductForm;