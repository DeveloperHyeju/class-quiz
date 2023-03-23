import * as style from "./BoardForm.styles";



const BoardFormUI = ({onChangeSeller, onChangeName, onChangeDetail, onChangePrice, onClickStoreProduct, changeColor}) => {

    return(
        <>
            판매자: <style.InputBox type="text" onChange={onChangeSeller} /> <br/>
            상품명: <style.InputBox type="text" onChange={onChangeName} /> <br/>
            상품내용: <style.InputBox type="text" onChange={onChangeDetail} /> <br/>
            상품가격: <style.InputBox type="text" onChange={onChangePrice} /> <br/>
            <style.StoreButton onClick={onClickStoreProduct} changeColor={changeColor}>상품 등록</style.StoreButton>
        </>
    );

};


export default BoardFormUI;