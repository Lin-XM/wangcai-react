import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
display: flex;
flex-direction: column;
  > .output{
    background-color: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                inset 0 5px 5px -5px rgba(0,0,0,0.25);
  }
  > .Pad{
    > button{
      float:left ;
      width: 25%;
      height: 64px;
      font-size:18px;
      border:none;
      &.ok{
        float: right;
        height:128px;
      }
      &.zero{
      width: 50%;
      }
      &:nth-child(1){
        background-color: #8afcc4;
      }
      &:nth-child(2),&:nth-child(5){
        background-color:#5cfabd;
      }
      &:nth-child(3),&:nth-child(6),&:nth-child(9){
        background-color:#45f8ad;
      }
      &:nth-child(4),&:nth-child(7),&:nth-child(10){
        background-color:#27faa3;
      }
      &:nth-child(8),&:nth-child(11),&:nth-child(13){
        background-color:#19f8a2;
      }
       &:nth-child(12){
        background-color:#00db8e;
      }
      &:nth-child(14){
        background-color:#24e9a4;
      }
    }
  }

`;

const NumberPadSection: React.FC = () => {
  const setOutput = (output:string)=>{
    if(output.length>16){
      output= output.slice(0,16)
    }else if(output.length === 0){
      output ='0'
    }
    _setOutput( output)
  }
  const [output, _setOutput] = useState('0');
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) return;
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (output === '0') {
          setOutput(text);
        } else {
          setOutput(output + text);
        }
        break;
      case 'C':
        setOutput('')
        console.log('清空');
        break;
      case 'CE':
        if(output.length ===1){
          setOutput('')
        }else{
          setOutput(output.slice(0,-1))
        }
        console.log('删除');
        break;
      case 'OK':
        console.log('OK');
        break;
      case '.':
        console.log('点');
        if(output.indexOf('.') >= 0 ){return;}
        setOutput(output+ '.')
        break;
    }
  };

  return (
    <Wrapper>
      <div className='output'>{output}</div>
      <div className='Pad clearfix' onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>C</button>

        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>CE</button>

        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className='ok'>OK</button>
        <button className='zero'>0</button>
        <button className='dot'>.</button>
      </div>
    </Wrapper>
  );
};

export {NumberPadSection};