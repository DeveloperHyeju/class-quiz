import { useMutation, useQuery } from "@apollo/client";
import BoardPostsUI from "./BoardPosts.presenter";
import { DELETE_PRODUCT, FETCH_PRODUCTS } from "./BoardPosts.queries";



const BoardPosts = () => {

    const { data } = useQuery(FETCH_PRODUCTS);
    const [ deleteProduct ] = useMutation(DELETE_PRODUCT);


    const onClickDeleteProduct = (productId) => {
        deleteProduct({
            variables: {
                productId,
            },
            refetchQueries: [{query:FETCH_PRODUCTS}],
        });
    };

    return <BoardPostsUI data={data} 
                        onClickDeleteProduct={onClickDeleteProduct} />;

};


export default BoardPosts;