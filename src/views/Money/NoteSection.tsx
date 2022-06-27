import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from '../../components/Input';

const Wrapper = styled.section`
    background-color: #f5f5f5;
    padding: 0 16px;
    font-size: 14px;
    
`;

type PropsType = {value:string; onChange:(value:string)=>void}

const NoteSection: React.FC<PropsType> = (props) => {
  const note = props.value

  // 由于ref 属性传递不出去，采用 受控组件
  const onChange:ChangeEventHandler<HTMLInputElement> = (e) => {
      props.onChange(e.target.value);
  };

  return (
    <Wrapper>
      <Input type='text' label='备注' placeholder='你还没有输入备注~' value={note} onChange={onChange} >
      </Input>
    </Wrapper>
  );
};

export {NoteSection};
