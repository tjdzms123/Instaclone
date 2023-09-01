import React from 'react';
import {
  StInputBox,
  StLoginBox,
  StLoginFooter,
  StLoginMain,
  StLoginPictures,
  StLoginScreenshot,
  StFont,
  StLoginFormBox,
  StLoginForm,
  StLoginInput,
} from '../Styles/Login.styled';
import Srceenshot from '../../img/screenshot3.png';

function Login() {
  return (
    <>
      <main>
        <StLoginMain>
          <StLoginPictures>
            <StLoginScreenshot src={Srceenshot} />
          </StLoginPictures>
          <StLoginBox>
            <StInputBox>
              <StFont />
              <StLoginForm>
                <StLoginInput placeholder="전화번호, 사용자 이름 또는 이메일" />
                <StLoginInput placeholder="비밀번호" />
                <button>로그인</button>
                <br />
                <span>또는</span>
                <button>Facebook으로 로그인</button>
                <br />
                <button>비밀번호를 잊으셨나요?</button>
              </StLoginForm>
            </StInputBox>
            <div>
              계정이 없으신가요? <button>가입하기</button>
            </div>
            <div>
              <span>앱을 다운로드하세요.</span>
              <div>
                <button>구글 플레이</button>
                <button>마이크로소프트</button>
              </div>
            </div>
          </StLoginBox>
        </StLoginMain>
      </main>
      <StLoginFooter>소개</StLoginFooter>
    </>
  );
}

export default Login;
