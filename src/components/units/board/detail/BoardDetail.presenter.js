


const BoardDetailUI = ({data}) => {

    return (
        <>
            판매자: {data?.fetchProduct.seller} <br/>
            상품명: {data?.fetchProduct.name} <br/>
            상품내용: {data?.fetchProduct.detail} <br/>
            상품가격: {data?.fetchProduct.price} <br/>
        </>
    );

};


export default BoardDetailUI;