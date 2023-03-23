import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
    query($productId: ID){
        fetchProduct(productId: $productId){
            seller
            name
            detail
            price
        }
    }
`;

const ProductDetail = () => {

    const router = useRouter();

    const { data } = useQuery(FETCH_PRODUCT, {
        variables:{
            productId: router.query.productId,
        }
    });

    return(
        <>
            판매자: {data?.fetchProduct.seller} <br/>
            상품명: {data && data.fetchProduct.name} <br/>
            상품내용: {data ? data.fetchProduct.detail : "로딩중입니다..."} <br/>
            상품가격: {data?.fetchProduct.price} <br/>
        </>
    );
    
};


export default ProductDetail;