import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductDetailUI from "./ProductDetail.presenter";
import { FETCH_PRODUCT } from "./ProductDetail.queries";


const ProductDetail = () => {

    const router = useRouter();

    const { data } = useQuery(FETCH_PRODUCT, {
        variables: {
            productId: router.query.productId,
        }
    });


    const onClickMoveToProductEdit = () => {
        router.push(`/08/${router.query.productId}/edit`);
    };

    
    return <ProductDetailUI data={data}
                            onClickMoveToProductEdit={onClickMoveToProductEdit}/>;

};


export default ProductDetail;