import {useEffect, useRef, useState} from 'react';
import {createId} from './lib/createId';

// 尝试解决 多次调用 createId 导致 id 的错误增长
// const defaultTags = [
//   {id: createId(), name: '衣'},
//   {id: createId(), name: '食'},
//   {id: createId(), name: '住'},
//   {id: createId(), name: '行'}
// ];

const useTags = () => {                         // 使用 use 开头表示自定义 hook
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];

  // React 钩子, 需要保证 每次修改之后，变成新的数据。
  const count = useRef(0);           // 判断是否为 第一次渲染
  useEffect(() => { count.current += 1; });
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
      if(localTags.length === 0 ){
        localTags = [
          {id: createId(), name: '衣'},
          {id: createId(), name: '食'},
          {id: createId(), name: '住'},
          {id: createId(), name: '行'}
        ]
      }
      setTags(localTags)
    }, []);
  useEffect(() => {
      if (count.current > 1) {
        console.log(JSON.stringify(tags));
        window.localStorage.setItem('tags', JSON.stringify(tags));
      }
    }
    , [tags]
  );

  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };

  const addTag = () => {
    const tagName = window.prompt('新标签名称为：');
    if (tagName !== null && tagName.trim() !== '') {
      // 这里暂时使用 随机数作为 ID，
      setTags([...tags, {id: createId(), name: tagName}]);          // 新增的数据添加到 原数组的后面
    }
  };

  const updateTag = (id: number, obj: { name: string }) => {
    //深拷贝 一份
    setTags(tags.map(
      tag => tag.id === id ? {id, name: obj.name} : tag
    ));
  };

  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };
  return {
    tags, setTags, addTag, findTag, updateTag, findTagIndex, deleteTag,
  };
};
export {useTags};

