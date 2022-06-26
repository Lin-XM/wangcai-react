import {useState} from 'react';

const useTags=()=>{           // 使用 use 开头表示自定义 hook
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  return {
    tags,
    setTags
  }
}
export {useTags}

