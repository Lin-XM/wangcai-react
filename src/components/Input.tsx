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
      height: 44px;
      background:none;
      border:none;
      padding-bottom: 3px;
    }
`
type PropsType = { label:string; } & React.InputHTMLAttributes<HTMLInputElement>

const Input:React.FC<PropsType>   =(props)=>{
  const {label, children, ...rest}= props

  return (
    <Label>
      <span>备注：</span>
      <input {...rest} />
    </Label>
  )
}

export {Input}
