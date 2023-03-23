import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_PRODUCT } from "./BoardDetail.queries";


const BoardDetail = () => {

    const router = useRouter();

    const { data } = useQuery(FETCH_PRODUCT, {
        variables:{
            productId: router.query.productId,
        }
    });

    return <BoardDetailUI data={data} />;

};


export default BoardDetail;