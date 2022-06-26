import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  background-color: #FFFFFF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ol{
    margin:  0 -12px;
    
    >li{
      background-color: #a7a7a7;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px  12px ;
      &.selected{
        background-color:#47f69f ;
      }
    }

  }
  > button  {
    background: none;
    border:none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;

const TagsSection: React.FunctionComponent = () => {
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const onAddTag = () => {
    const tagName = window.prompt('新标签名称为：');
    if (tagName !== null) {
      setTags([...tags, tagName]);          // 新增的数据添加到 原数组的后面
    }
  };
  // 判断该标签是否被选中
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
      // 如果 标签在 选中的里面，就将没有选中的标签 筛选出来，剩下选中的到 setSelectedTags的里面，其他的就留在选中标签里面，
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const getClass=(tag:string) => selectedTags.indexOf(tag) >= 0 ? 'selected' : ''

  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li onClick={() => onToggleTag(tag)} className={getClass(tag)} key={tag}>{tag}</li>)
        }

      </ol>
      <button onClick={onAddTag}>新增标签</button>

    </Wrapper>
  );
};

export {TagsSection};