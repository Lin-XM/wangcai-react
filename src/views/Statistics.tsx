import Layout from '../components/Layout';
import React, {ReactNode, useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {RecordItem, useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';

import day from 'dayjs';

const CategoryWrapper = styled.div`
  background-color: white;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px ;
   > .note{
    margin-right: auto;
    padding-left: 16px;
    color:#999;
   }
  
`;
const Header = styled.h3`
  font-size: 18px;
   line-height: 20px;
   padding:10px 16px;
`

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  // 支出，收入分开
  const selectedRecords = records.filter(r => r.category === category);
  const hash: { [K: string]: RecordItem[] } = {};
  selectedRecords.map(r => {
    const key = day(r.createdAt).format('YYYY年MM月DD日');
    // value = r
    if (!(key in hash)) {
      hash[key] = [];
    }
      hash[key].push(r);
  });
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0
  });

  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category} onChange={value => setCategory(value)}/>
      </CategoryWrapper>

      {array.map(([date, records]) =><div key={date}>
        <Header>{date}</Header>
        <div>
          {records.map(r => {
            return (
              <Item key={r.createdAt}>
                <div className="tags oneLine">
                  {r.tagIds
                    .map(tagID => <span key={tagID}>{getName(tagID)}</span>)
                    .reduce((result,span, index, array)=>result.concat(index<array.length-1 ? [span,'，'] : [span]),[] as ReactNode[])
                  }
                </div>
                {r.note && <div className="note">{r.note}</div>}
                <div className="amount">
                  ￥{r.amount}
                </div>
              </Item>
            );
          })}
        </div>
      </div>)}


    </Layout>
  );

}


export default Statistics;
