import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    display: flex;
    align-items: center;
    > span{
      margin-right: 16px;
      white-space:nowrap;
    }
    > input{
      display: block;
      width: 100%;
      height: 72px;
      background:none;
      border:none;
    }

`
type PropsType = {
  label:string;
} & React.InputHTMLAttributes<HTMLInputElement>
const Input:React.FC<PropsType>   =(props)=>{
  const {label, children, ...rest}= props

  return (
    <Label>
      <span>备注：</span>
      {/*<input type={props.type} placeholder={props.placeholder} y由于input 存在毒品和属性*/}
      {/*       defaultValue={props.defaultValue}*/}
      {/*       onBlur={props.onBlur}*/}
      {/*/>*/}
      <input {...rest} />
    </Label>
  )
}

export {Input}
