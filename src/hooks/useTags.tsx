import {useEffect, useState} from 'react';
import {createId} from '../lib/createId';
import {useUpdate} from './useUpdate';

// 尝试解决 多次调用 createId 导致 id 的错误增长

const useTags = () => {                         // 使用 use 开头表示自定义 hook
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];



  // React 钩子, 需要保证 每次修改之后，变成新的数据。
  useUpdate(()=>{
    window.localStorage.setItem('tags',JSON.stringify(tags))
  },[tags])
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

  const getName = (id:number)=>{
      const tag =  tags.filter(t => t.id  === id )[0]
      return tag ? tag.name : '';
  }

  return {
    tags, setTags, addTag, findTag, updateTag, findTagIndex, deleteTag,getName,
  };
};
export {useTags};

