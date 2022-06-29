import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  > ul{
  display: flex;
   font-size: 24px ;

    >li{
       width: 50%;
       text-align: center;
       padding:16px 0 ;
       position: relative;
     &.selected::after{
         content:'';
         display: block;
         height: 2px ;
         background-color: black;
         position:absolute;
         width: 100%;
         bottom: 0;
         left:0;
     }  
    }
  }

`;

type PropsType={
  value:'-' | '+'
  onChange:(value:'-' | '+') =>void;
}

const CategorySection: React.FC<PropsType> = (props) => {
  const categoryMap = {'-': '支出', '+': '收入'};
  // type Keys = keyof typeof  categoryMap   // 然后categoryList 类型就是zhegeKeys

  // const [category, setCategory] = useState('-');

  const category = props.value                            // - 表示支出， + 表示收入
  const [categoryList] = useState<('-' | '+')[]>(['-', '+']);


  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li className={category === c ? 'selected' : ''} onClick={() => {props.onChange(c);}} key={c}>{categoryMap[c]}</li>
        )}

        {/*<li className={category === '+' ? 'selected' : ''} onClick={() => setCategory('+')}>收入</li>*/}
      </ul>
    </Wrapper>
  );
};

export {CategorySection};