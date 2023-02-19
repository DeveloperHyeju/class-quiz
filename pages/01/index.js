import styled from "@emotion/styled";
import { css } from "@emotion/react";
import searchIcon from "../../public/icon/search_icon.png";
import profileImg from "../../public/01/profile-img.png";
import profileArrow from "../../public/icon/s-arrow.png";
import fqaArrow from "../../public/icon/m-arrow.png";
import homeIcon from "../../public/icon/home_icon.png";
import roadIcon from "../../public/icon/road_icon.png";
import heartIcon from "../../public/icon/heart_icon.png";
import myIcon from "../../public/icon/my_icon.png";

// emotion
const Wrap = styled.div({
    maxWidth : '64rem',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column'
});

const Header = styled.div({
    padding: '5rem',
    borderBottom: '1px solid #cacaca'
});

const TopHeader = styled.div({
    display: 'flex',
    justifyContent: 'flex-end'
});

const SearchIcon = styled.div({
    width: '3.2rem',
    height: '3.2rem',
    background: `url(${searchIcon.src}) no-repeat center center / 23px`
});

const BottomHeader = styled.div({
    padding: '4rem 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
});

const ContentsTitle = styled.h2({
    fontSize: '4rem',
    fontWeight: '700'
});

const ProfileBox = styled.div({
    'a': {
        paddingRight: '3rem',
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
        '.profile': {
            width: '6rem',
            height: '6rem'
        },
    
        '.name': {
            fontSize: '2.4rem',
            fontWeight: '700'
        },
    
        '::after': {
            display: 'block',
            content: "''",
            width: '3rem',
            height: '3rem',
            background: `url(${profileArrow.src}) no-repeat right center / auto 1.6rem`,
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            right: '0'
        }
    }
});

const Lnb = styled.ul({
    display: 'flex',
    gap: '5rem',
    fontSize: '3rem',
    fontWeight: '700',
    color: '#cacaca',

    '.active': {
        color: '#ff1b6d',
        '::after': {
            width: '100%',
            height: '2px',
            backgroundColor: '#ff1b6d',
            position: 'absolute',
            left: '0',
            bottom: '-0.7rem',
            display: 'block',
            content: "''"
        }
    }
});

const Contents = styled.div({
    padding: '2.5rem 5rem'
});

const FaqList = styled.ul({
    display: 'flex',
    flexDirection: 'column',
    gap: '4.4rem',
    'li': {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        paddingRight: '6rem',
        'span':{
            fontSize: '1.8rem',
            fontWeight: '400',
            color: '#adadad'
        },
        '.title': {
            fontSize: '2.4rem',
            fontWeight: '400'
        },
        '::after': {
            display: 'block',
            content: "''",
            width: '6rem',
            height: '6rem',
            position: 'absolute',
            top: '50%',
            right: '0',
            transform: 'translateY(-50%)',
            background: `url(${fqaArrow.src}) no-repeat right center / 2.2rem`
        }
    }
});

const BottomNav = styled.div({
    padding: '1rem 5rem',
    borderTop: '1px solid #acacac'
});

const Bnb = styled.ul({
    display: 'flex',
    justifyContent: 'space-around',
    'li': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '.1rem',
        color: '#adadad',
        fontWeight: '400',
        '::before': {
            width: '4rem',
            height: '4rem',
            display: 'block',
            content: "''",
            background: `url(${homeIcon.src}) no-repeat center center / 80%`,
        },
        ':nth-child(2)': {
            '::before': {
                backgroundImage: `url(${roadIcon.src})`
            }
        },
        ':nth-child(3)': {
            '::before': {
                backgroundImage: `url(${heartIcon.src})`
            }
        },
        ':last-child': {
            '::before': {
                backgroundImage: `url(${myIcon.src})`
            }
        },
    },
});


const Faq = () => {

    return (
        <Wrap>
            <Header>
                <TopHeader>
                    <SearchIcon></SearchIcon>
                </TopHeader>
                <BottomHeader>
                    <ContentsTitle>마이</ContentsTitle>
                    <ProfileBox>
                        <a href="#">
                            <div className="profile">
                                <img src={profileImg.src} alt="프로필 사진" />
                            </div>
                            <p className="name">임정아</p>
                        </a>
                    </ProfileBox>
                </BottomHeader>
                <Lnb>
                    <li><a href="">공지사항</a></li>
                    <li><a href="">이벤트</a></li>
                    <li className="active"><a href="">FAQ</a></li>
                    <li><a href="">Q&A</a></li>
                </Lnb>
            </Header>
            <Contents>
                <FaqList>
                    <li>
                        <span>Q. 01</span>
                        <p className="title">리뷰 작성은 어떻게 하나요?</p>
                    </li>
                    <li>
                        <span>Q. 02</span>
                        <p className="title">리뷰 수정&#47;삭제는 어떻게 하나요?</p>
                    </li>
                    <li>
                        <span>Q. 03</span>
                        <p className="title">아이디&#47;비밀번호를 잃어버렸어요.</p>
                    </li>
                    <li>
                        <span>Q. 04</span>
                        <p className="title">회원탈퇴를 하고 싶어요.</p>
                    </li>
                    <li>
                        <span>Q. 05</span>
                        <p className="title">출발지 설정은 어떻게 하나요?</p>
                    </li>
                    <li>
                        <span>Q. 06</span>
                        <p className="title">비밀번호를 변경하고 싶어요.</p>
                    </li>
                </FaqList>
            </Contents>
            <BottomNav>
                <Bnb>
                    <li>홈</li>
                    <li>잇츠로드</li>
                    <li>마이찜</li>
                    <li>마이</li>
                </Bnb>
            </BottomNav>
        </Wrap>
    );

};


export default Faq;