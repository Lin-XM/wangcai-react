import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../useTags';
import {createId} from '../../lib/createId';

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

type PropsType = {
  value: number[],
  onChange:( selected:number[])=>void
}

const TagsSection: React.FunctionComponent<PropsType> = (props) => {
  const selectedTagIds = props.value
  const {tags,setTags}=useTags()

  // const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  // const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const onAddTag = () => {
    const tagName = window.prompt('新标签名称为：');
    if (tagName !== null) {

      // 这里暂时使用 随机数作为 ID，
      setTags([...tags, {id:createId(),name:tagName}]);          // 新增的数据添加到 原数组的后面
    }
  };
  // 判断该标签是否被选中
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      props.onChange(selectedTagIds.filter(t => t !== tagId));
  // 如果 标签在 选中的里面，就将没有选中的标签 筛选出来，剩下选中的到 setSelectedTags的里面，其他的就留在选中标签里面，
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };

  const getClass=(tagId:number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : ''

  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag.id} onClick={() => onToggleTag(tag.id)} className={getClass(tag.id)} >{tag.name}</li>)
        }
      </ol>
      <button onClick={onAddTag}>新增标签</button>

    </Wrapper>
  );
};

export {TagsSection};