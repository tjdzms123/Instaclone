import styled from 'styled-components';
import LogoSrc from '../../img/home-phones-2x.png';
import Insta from '../../img/instagram-font.png';

export const StLoginMain = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 32px;
  padding-bottom: 32px;
  width: 100%;
`;

export const StLoginPictures = styled.div`
  background: url(${LogoSrc});
  background-size: 100%;
  width: 465px;
  height: 635px;
  margin-bottom: 12px;
`;
export const StLoginScreenshot = styled.img`
  width: 250px;
  height: 539px;
  margin-left: 158px;
  margin-top: 27px;
`;

export const StLoginBox = styled.div`
  width: 350px;
  height: 860px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 12px;
  max-width: 350px;
`;

export const StInputBox = styled.div`
  align-items: center;
  /* background-color: rgb(var(--ig-primary-background));
  border: 1px solid rgb(var(--ig-elevated-separator)); */
  border-radius: 1px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  font: inherit;
  font-size: 100%;
  margin: 0 0 10px;
  padding: 10px 0;
  position: relative;
  vertical-align: baseline;
`;

export const StFont = styled.div`
  background: url(${Insta});
  background-size: 100%;
  width: 175px;
  height: 60px;
  margin-top: 36px;
  margin-bottom: 12px;
`;

export const StLoginForm = styled.form`
  margin-bottom: 10px;
  max-width: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  font: inherit;
  font-size: 100%;
`;

export const StLoginInput = styled.input`
  border-radius: 10px;
  outline: none;
  overflow: hidden;
  padding: 9px 0 7px 8px;
`;

export const StLoginFooter = styled.div`
  display: flex;
  justify-content: center;
`;
