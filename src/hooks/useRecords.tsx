// 对 record 记录的所有操作
import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

export type RecordItem = {
  tagIds: number[]
  note: string
  category: '-' | '+'
  amount: number
  createdAt: string
}
// type newRecordItem = {
//   tagIds: number[]
//   note: string
//   category: '-' | '+'
//   amount: number
// }          // 等同于下面 Omit 就是排除某项不需要的类型
type newRecordItem = Omit<RecordItem, 'createdAt'>

const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);

  const addRecord = (newRecord: newRecordItem) => {
    if (newRecord.amount <= 0){
      alert("请输入正确的金额~~")
      return false
    }
    if (newRecord.tagIds.length === 0) {
      alert('请选择你的标签~');
      return false;
    }
    const record = {...newRecord, createdAt: (new Date()).toISOString()};
    setRecords([...records, record]);
    return true;
  };

  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);

  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, [records]);

  return {records, addRecord};
};
export {useRecords};