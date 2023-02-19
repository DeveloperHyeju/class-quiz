/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";



const SigninForm = () => {

    const [ form, setForm ] = useState({ email:'', password:'', confirm_password:'' });
    const [ errEmail, setErrEmail ] = useState('');
    const [ errPassword, setErrPassword ] = useState('');

    const handleInput = (e) => {

        const { name, value } = e.target;

        setForm({...form, [name]:value});
    }

    const Signin = () => {
        if (form.email.includes('@') && (form.password === form.confirm_password)) {
            setForm({ email:'', password:'', confirm_password:'' });
        } else {
            if (form.email.includes('@')) {
                setErrEmail('');
            } else {
                setErrEmail('이메일 형식이 잘못되었습니다.');
            }

            if (form.password === form.confirm_password) {
                setErrPassword('');
            } else {
                setErrPassword('비밀번호가 같지 않습니다.');
            }
        }
    };

    return (
        <div>
            <div className="row">
                <label htmlFor="email">이메일</label>
                <input id="email" name="email" type="text" value={form.email} onChange={handleInput} />
                <p css={css({
                    color: 'red'
                })}>{errEmail}</p>
            </div>
            <div className="row">
                <label htmlFor="password">비밀번호</label>
                <input id="password" name="password" type="password" value={form.password} onChange={handleInput} />
            </div>
            <div className="row">
                <label htmlFor="confirm_password">비밀번호 확인</label>
                <input id="confirm_password" name="confirm_password" type="password" value={form.confirm_password} onChange={handleInput} />
                <p css={css({
                    color: 'red'
                })}>{errPassword}</p>
            </div>
            <button onClick={Signin}>가입하기</button>
        </div>
    );

};

export default SigninForm;