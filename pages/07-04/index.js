import styled from "@emotion/styled";
import { useState } from "react";


const boardPosts = [
    { id: 1, title: "9월달 시스템 점검 안내입니다.", createdAt: "2020.09.19" },
    { id: 2, title: "안녕하세요! 공지사항 전달드립니다.", createdAt: "2020.09.17" },
    { id: 3, title: "개인정보 처리방침 변경 사전 안내", createdAt: "2020.09.12" },
    { id: 4, title: "iOS 10.0 이하 지원 중단 안내", createdAt: "2020.08.10" },
    { id: 5, title: "이용약관 사전 안내", createdAt: "2020.08.01" },
    { id: 6, title: "개인정보 처리방침 변경 사전 안내", createdAt: "2020.07.19" },
];


const Wrap = styled.div({
    width: "120rem",
    margin: "8rem auto",
});

const Posts = styled.div({
    borderTop: "1px solid #DDD",
});

const PostsHeader = styled.div({
    backgroundColor: "#F1F1F5",
});

const Row = styled.div({
    display: "flex",
    borderBottom: "1px solid #DDD",
    padding: "1.3rem 0",
    textAlign: "center",
});

const PostBody = styled.div({});

const PostsBasic = styled.div({
    width: "10%",
});

const PostsTitle = styled.div({
    width: "70%",
});

const CheckBox = styled.input({
    accentColor: "blueviolet",
});

const DeleteButton = styled.button({
    margin: "2rem 0",
    padding: "1.5rem 6rem",
    backgroundColor: "blueviolet",
    borderRadius: "5rem",
    color: "#fff",
});


const BoardPostsPage = () => {

    const [ checkedList, setCheckedList ] = useState([]);


    const onChangeAllChecked = (isChecked) => {
        if (isChecked) {
            setCheckedList( boardPosts.map((post) => post.id) );
        } else {
            setCheckedList([]);
        }
    };


    const onChangeCheckedList = (isChecked, postId) => {
        if (isChecked) {
            setCheckedList([...checkedList, postId]);
        } else {
            setCheckedList( checkedList.filter((list) => list !== postId) );
        }
    };


    const BoardPosts = boardPosts.map((post) => {
        return(
            <Row key={post.id}>
                <PostsBasic>
                    <CheckBox type="checkbox"
                                    onChange={e => onChangeCheckedList(e.target.checked, post.id)} 
                                    checked={checkedList.includes(post.id) ? true : false} />
                </PostsBasic>
                <PostsBasic>{post.id}</PostsBasic>
                <PostsTitle>{post.title}</PostsTitle>
                <PostsBasic>{post.createdAt}</PostsBasic>
            </Row>
        );
    });


    return(
        <Wrap>
            <Posts>
                <PostsHeader>
                    <Row>
                        <PostsBasic><CheckBox type="checkbox"
                                            onChange={e => onChangeAllChecked(e.target.checked)} 
                                            checked={checkedList.length === boardPosts.length ? true : false} /></PostsBasic>
                        <PostsBasic>번호</PostsBasic>
                        <PostsTitle>제목</PostsTitle>
                        <PostsBasic>작성일</PostsBasic>
                    </Row>
                </PostsHeader>
                <PostBody>
                    {BoardPosts}
                </PostBody>
            </Posts>
            <DeleteButton>선택 삭제</DeleteButton>
        </Wrap>
    );

};


export default BoardPostsPage;