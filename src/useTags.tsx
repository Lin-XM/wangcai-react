import {useState} from 'react';
import {createId} from './lib/createId';

// 尝试解决 多次调用 createId 导致 id 的错误增长
const defaultTags = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'}
]

const useTags = () => {           // 使用 use 开头表示自定义 hook
  const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
  const findTag = (id:number) => tags.filter(tag => tag.id === id )[0]
  return {
    tags,
    setTags,
    findTag
  };
};
export {useTags};

