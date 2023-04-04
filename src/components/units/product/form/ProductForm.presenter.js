


const ProductFormUI = ({isEdit, data, onChangeSeller, onChangeName, onChangeDetail, onChangePrice, onClickEditProduct, onClickStoreProduct}) => {

    return(
        <>
            <h1>상품 {isEdit ? "수정" : "등록"} 페이지</h1>
            <div>
                <label htmlFor="seller">판매자</label>
                <input type="text" id="seller" onChange={onChangeSeller} defaultValue={data?.fetchProduct.seller} />
            </div>
            <div>
                <label htmlFor="name">상품이름</label>
                <input type="text" id="name" onChange={onChangeName} defaultValue={data?.fetchProduct.name} />
            </div>
            <div>
                <label htmlFor="detail">상품내용</label>
                <input type="text" id="detail" onChange={onChangeDetail} defaultValue={data?.fetchProduct.detail} />
            </div>
            <div>
                <label htmlFor="price">상품가격</label>
                <input type="text" id="price"  onChange={onChangePrice} defaultValue={data?.fetchProduct.price} />
            </div>
            {isEdit? 
                <button onClick={onClickEditProduct}>수정하기</button> :
                <button onClick={onClickStoreProduct}>등록하기</button>
            }
        </>
    );

};


export default ProductFormUI;