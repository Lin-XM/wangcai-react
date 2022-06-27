// 实现 id 生成的 第二种方式
let id = 0;
class Id{
  value:number;
  constructor() {
    id+=1;
    this.value = id;
  }

}

export {Id}
// 使用方法
// (new id).value