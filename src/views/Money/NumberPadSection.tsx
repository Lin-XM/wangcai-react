import styled from 'styled-components';

const NumberPadSection = styled.section`
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

export {NumberPadSection}