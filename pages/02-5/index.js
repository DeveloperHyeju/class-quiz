import styled from "@emotion/styled";
import bg from "../../public/02/main-bg.jpg";
import logo from "../../public/icon/logo_icon.png";
import kakaotalkIcon from "../../public/icon/talk_icon.png";
import deleteIcon from "../../public/icon/delete.png";
import { useState } from "react";


const Wrap = styled.div({
    width: '64rem',
    margin: '0 auto',
    padding: '8rem 5rem',
    background: `url(${bg.src}) no-repeat center top / 100%`
});

const Logo = styled.h2({
    display: 'flex',
    height: '44rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontSize: '6rem',
    fontWeight: '700',
    color: '#fff',
    gap: '4rem',
    '.logo-box':{
        '::before': {
            display: 'block',
            content: "''",
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '7.2rem',
            bottom: '.7rem',
            height: '2.4rem',
            borderRadius: '5rem',
            backgroundColor: '#d9d9d9',
            opacity: '0.6'
        }
    }
});

const InputBox = styled.div({
    paddingTop: '3rem',
    '.input-box':{
        'input': {
            width: '100%',
            padding: '1rem 0',
            borderBottom: '1px solid #7d7d7d',
            color: '#fff',
            fontSize: '2.4rem',
            fontWeight: '400'
        },
        'button': {
            width: '2rem',
            height: '2rem',
            background: `url(${deleteIcon.src}) no-repeat center center / 8px #fff`,
            opacity: '.5',
            borderRadius: '50%',
            position: 'absolute',
            right: '0',
            top: '50%',
            tansform: 'translateY(-50%)',
        },
    },
    'p': {
        paddingTop: '.5rem',
        height: '2.3rem',
        lineHeight: '2.3rem',
        color: '#ff1b6d',
        fontSize: '1.6rem',
        fontWeight: '400'
    }
});

const ButtonBase = styled.button({
    width: '100%',
    padding: '1.9rem 0',
    borderRadius: '5rem',
    fontSize: '2.6rem',
    fontWeight: '700',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '3rem',
});

const LoginButton = styled(ButtonBase)({
    marginTop: '2rem',
    backgroundColor: 'rgba(255, 27, 109, .6)',
    color: '#fff',
    textAlign: 'center',
});

const KakaoTalkLoginButton = styled(ButtonBase)({
    border: '1px solid #ffe100',
    color: '#ffe100',
    ':: before': {
        display: 'block',
        content: "''",
        width: '3rem',
        height: '3rem',
        background: `url(${kakaotalkIcon.src}) no-repeat center center / 100%`
    }
});

const LookBox = styled.ul({
    padding: '4rem 0 6rem 0',
    fontSize: '2rem',
    color: '#fff',
    fontWeight: '700',
    display: 'flex',
    justifyContent: 'center',
    'li': {
        padding: '0 3rem',
        '::after': {
            display: 'block',
            content: "''",
            width: '2px',
            height: '2rem',
            backgroundColor: '#fff',
            position: 'absolute',
            top: '50%',
            right: '0',
            transform: 'translateY(-50%)',
        },
        ':last-child': {
            '::after': {
                display: 'none'
            }
        }
    }
});


const Main = () => {

    const [ inputs, setInputs ] = useState({
        email: '',
        password: ''
    });

    const [ emailError, setEmailError ] = useState('');
    const [ passwordError, setPasswordError ] = useState('');


    const onChangeEmail = (e) => {
        const {name, value} = e.target;

        setInputs({...inputs, [name]:value});

        if (!inputs.email.includes('@')) {
            setEmailError('이메일 주소를 다시 확인해주세요.');
        } else {
            setEmailError('');
        }
    };

    const onChangePassword = (e) => {
        const {name, value} = e.target;

        setInputs({...inputs, [name]:value});

        if(inputs.password.length <= 8 || inputs.password.length >= 16) {
            setPasswordError('8~16자의 영문, 숫자, 특수문자만 사용 가능합니다.')
        } else {
            setPasswordError('');
        }
    };

    const logIn = (e) => {
        e.preventDefault();


        if(emailError === '' && passwordError === '') {
            alert('환영합니다!');
        }
    }

    const deleteEmail = (e) => {
        e.preventDefault();

        setInputs({...inputs, email: ''});
    };
    
    const deletePassword = (e) => {
        e.preventDefault();

        setInputs({...inputs, password: ''});
    };

    return (
        <Wrap>
            <Logo><div className="logo-box"><img src={logo.src} alt="잇츠로드"/></div>잇츠로드</Logo>
            <form>
                <InputBox>
                    <div className="input-box">
                        <input type="text" name="email" value={inputs.email} onChange={onChangeEmail}/>
                        <button className="delete" onClick={deleteEmail}></button>
                    </div>
                    <p>{emailError}</p>
                </InputBox>
                <InputBox>
                    <div className="input-box">
                        <input type="password" name="password" value={inputs.password} onChange={onChangePassword}/>
                        <button className="delete" onClick={deletePassword}></button>
                    </div>
                    <p>{passwordError}</p>
                </InputBox>
                <LoginButton onClick={logIn}>로그인</LoginButton>
            </form>
            <LookBox>
                <li>이메일 찾기</li>
                <li>비밀번호 찾기</li>
                <li>회원가입</li>
            </LookBox>
            <KakaoTalkLoginButton>카카오톡으로 로그인</KakaoTalkLoginButton>
        </Wrap>
    );

};


export default Main;