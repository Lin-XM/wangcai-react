import styled from 'styled-components';
import React, {useRef, useState} from 'react';

const Wrapper = styled.section`
    background-color: #f5f5f5;
    padding: 0 16px;
    font-size: 14px;
    > label{
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
    }
`;


const NoteSection: React.FC = () => {
  const [note, setNote] = useState('');
  // console.log(note);
  // return ... <input
  //                  value={note}
  //                onChange={(e)=>setNote(e.target.value)}
  //                />


  const refInput = useRef<HTMLInputElement>(null);
  // 非受控组件写法的方式 类似于 Vue的 v-model.lazy=''
  const onBlur = () => {
    if (refInput.current !== null) {
      console.log(refInput.current.value);
      setNote(refInput.current.value);
    }
  };

  return (
    <Wrapper>
      <label>
        <span>备注：</span>
        <input type="text" placeholder='你还没有输入备注~'
               defaultValue={note}
               onBlur={onBlur}
               ref={refInput}
        />
      </label>
    </Wrapper>
  );
};

export {NoteSection};
