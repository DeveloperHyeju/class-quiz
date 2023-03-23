


const ProductDetailUI = ({data, onClickMoveToProductEdit}) => {

    return(
        <>
            <h1>상품 상세 페이지</h1>
            <div>
                <label htmlFor="seller">판매자</label>
                <span>{data?.fetchProduct.seller}</span>
            </div>
            <div>
                <label htmlFor="name">상품이름</label>
                <span>{data?.fetchProduct.name}</span>
            </div>
            <div>
                <label htmlFor="createdAt">상품내용</label>
                <span>{data?.fetchProduct.detail}t</span>
            </div>
            <div>
                <label htmlFor="price">상품가격</label>
                <span>{data?.fetchProduct.price}</span>
            </div>
            <div>
                <label htmlFor="createdAt">게시일</label>
                <span>{data?.fetchProduct.createdAt}</span>
            </div>
            <button onClick={onClickMoveToProductEdit}>수정하기</button>
        </>
    );

};


export default ProductDetailUI;