import { FETCH_PRODUCT } from "@/src/components/units/board/detail/BoardDetail.queries";
import ProductForm from "@/src/components/units/product/form/ProductForm.container";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";


const ProductStorePage = () => {

    const router = useRouter();

    const { data } = useQuery(FETCH_PRODUCT, {
        variables: {
            productId: router.query.productId,
        }
    });

    return <ProductForm isEdit={true} data={data}/>;

};


export default ProductStorePage;