import {useState} from 'react';
import {createId} from './lib/createId';

// 尝试解决 多次调用 createId 导致 id 的错误增长
const defaultTags = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'}
];

const useTags = () => {           // 使用 use 开头表示自定义 hook
  const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];

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

  const updateTag = (id: number, obj: { name: string }) => {
    //深拷贝 一份
    const index = findTagIndex(id);
    const tagClone = JSON.parse(JSON.stringify(tags));
    // 等到新的 tagClone 删掉了第 index 项，换成了 {id: id, name: obj.name}
    tagClone.splice(index, 1, {id: id, name: obj.name});
    setTags(tagClone);
  };

  const deleteTag = (id:number)=>{
    const index = findTagIndex(id);
    const tagClone = JSON.parse(JSON.stringify(tags));
    tagClone.splice(index, 1);
    setTags(tagClone);

  }
  return {
    tags, setTags, findTag, updateTag, findTagIndex,deleteTag,
  };
};
export {useTags};

