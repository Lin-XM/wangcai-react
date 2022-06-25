import styled from 'styled-components';
import React, { useState} from 'react';

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


const NoteSection: React.FC = () =>{
  const [note, setNote] = useState('');
  console.log(note);



  // const refInput = useRef<HTMLInputElement>(null)
  // 非受控组件写法的方式 类似于 Vue的 v-model.lazy=''
  // const xxx = ()=>{
  //  if(refInput.current !== null){
  //    console.log(refInput.current.value);
  //    setNote(refInput.current.value)
  //  }
  // }
  // return ... <input
  //              defaultValue={note}
  //              onBlur={xxx}
  //              ref={refInput} />

  return (
    <Wrapper>
      <label>
        <span>备注：</span>
        <input type="text" placeholder='你还没有输入备注~'
               value={note}
               onChange={(e)=>setNote(e.target.value)}

        />
      </label>
    </Wrapper>
  );
};

export {NoteSection};
