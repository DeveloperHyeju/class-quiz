


const BoardPostsUI = ({data, onClickDeleteProduct}) => {

    const boardPosts = data?.fetchProducts.map((post) => {
        return(
            <li key={post._id}>
                <input type="checkbox" />
                <span>{post.seller}</span>
                <span>{post.name}</span>
                <span>{post.price}</span>
                <span>{post.createdAt}</span>
                <span><button onClick={e => onClickDeleteProduct(post._id)}>삭제</button></span>
            </li>
        );
    })

    return (
        <ul>
            {boardPosts}
        </ul>
    );

};


export default BoardPostsUI;