import {useEffect, useRef} from 'react';

const useUpdate = (fn: () => void, deps: any[]) => {
  const count = useRef(0);           // 判断是否为 第一次渲染
  useEffect(() => { count.current += 1; });
  useEffect(() => {
      if (count.current > 1) {
        fn()
      }
    }, deps);
};

export {useUpdate};

