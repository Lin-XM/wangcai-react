# 旺财记账 React 版本
## 软件，第三方库版本控制
这里使用 3.4.1，当前最新版本 5.0.1.  `yarn global add create-react-app@3.4.1`   
由于需要支持 typescript，所以  `create-react-app wangcai --template typescript`  
千万不要安装 node-sass, 推荐使用 dart-sass. 原因：node-sass 需要从 github上下载文件，还需要单独设置镜像源，有需要本地编译。
注意，不能直接安装 dart-sass, 这样也会出现编译报错。  
安装方法：其实被之上就是npm将安装的 node-sass 偷梁换柱，变成 dart-sass, 也就是 npm 6.9 之后出现的新功能 package alias，重命名。    
`yarn add node-sass@npm:dart-sass`  
将 src 目录设置为 根目录，否则在 `@imprt 'xxx/yyy` 会出现 IDE 不能识别路径问题。  
创建 helper.scss 变量文件。
安装 react-router-dom  
`yarn add react-router-dom@5.1.2 `
`yarn add --dev @types/react-router-dom `
之后还需要 Router, Redux, SASS 等等。

- 目录详解  
public 静态文件  
src 主文件  
App.tsx 主组件  
index.tsx 入口文件  
setupTests.ts 测试文件  
react-app-env.d.ts TS 类型声明  
tsconfig.json TS 配置文件  
.tsx 就是支持 标签 的ts文件

- css 处理  
css normalize处理，在index.css 中添加 `@import-normalize` 就行了。  
css reset 和 normalize 的区别， css reset 是重置css的样式，css normalize 是保证 css 样式在不同浏览器上的展示结果基本一致。  
这里采用的是 styled-component方法， 也就是 css in js 的处理方式,@types 表示 ts 支持文件  
```shell script
 yarn add styled-components@5.0.1
 yarn add --dev  @types/styled-components       
``` 
使用方法：
```ts
import styled from 'styled-components'
const Button  = styled.button`
  background-color:red
`
```
- 字体解决方案  
第三方有 fonts.css， 快速上手使用。 

## svg 处理方法
svg-sprite-loader@4.2.2   
svgo-loader@2.2.1  
将下面代码添加在 yarn eject 之后的 config 的 webpack.config.js 文件的 中, function => return => module:{rules=> oneOf[]}
```js
 {
  test: /\.svg$/,
  use: [
    { loader: 'svg-sprite-loader', options: {} },
    { loader: 'svgo-loader', option:{}},
  ]
},
```
安装 `yarn add @babel/helper-create-regexp-features-plugin` ，否则 yarn start 可能会打不开  
如果使用 import 引入 svg文件，会出现 TreeShaking，也就是 如果该文件没有被引用（虽然我们在 <svg> 标签中引用了），那么就不会被编译，也就相当于没用。  
但是使用 require 就不会受到影响。  

- 如何直接引入 SVG 文件夹
由于 typescript 不认识 js 的代码，需要安装 `yarn add --dev @types/webpack-env@1.15.1`  
```js
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}
```

## 页面布局
使用 active class 实现选中Nav 标签页高亮.  
使用 svgo-loader 去除 svg 的fill的颜色。 

## NoteSection 的要点
处理 Note 的输入可以用 受控组件和非受控组件
```ts
// 受控组件方式 监视 Note 的变化
const NoteSection: React.FC = () =>{
  const [note, setNote] = useState('');
  const refInput = useRef<HTMLInputElement>(null)
  console.log(note);
  return (
    <Wrapper>
      <label>
        <span>备注：</span>
        <input type="text" placeholder='你还没有输入备注~'
            value={note}
             onChange={(e)=>setNote(e.target.value)}
        />
      </label>
    </Wrapper>
  );
};

// 非受控组件 鼠标移除 输入框 记录Note
// .....
  const xxx = ()=>{
   if(refInput.current !== null){
     console.log(refInput.current.value);
     setNote(refInput.current.value)
   }
  }
  return (
    <Wrapper>
      <label>
        <span>备注：</span>
        <input type="text" placeholder='你还没有输入备注~'
            defaultValue={note}
            onBlur={xxx}
            ref={refInput}
        />
      </label>
    </Wrapper>
// ....
           
```
- React/HTMl 的 onChange  
HTML onchange 事件是在 鼠标移出 输入框的时候触发的。该事件触发时机要早于 onBlur  
React onChange 会在输入第一个字符的时候就触发。  

- React 自定义 hook  
当您在 一个自定义的函数中使用了 useState, use***, 且返回了一个 读取、写入的接口，这个函数的名称 以useXXXX为例。

## tag 类型的改变
将 tag:string 变成 tag:{id:number, name:string}   
id 生成的两种方法：函数、类
```tsx
let id1 = 0;
const createId = () => {
  id1 += 1;
  return id1;
};

export {createId};
// 实现 id 生成的 第二种方式
let id2 = 0;
const IDcard = 10000000
class Id{
  value:number;
  XM(){
    return IDcard + this.value
  }
  constructor() {
    id2+=1;
    this.value = id2;
  }

}
export {Id}
// 使用方法的优点：   能够堆返回值进行操作，比如要返回 id=1, 可以加工成为 id 
// (new id).value
```

- react 合并两个 className  
下载 classnames 第三方库。  

- history 模式路由  
这个模式的路由如果存在历史记录，那么第二次前进或回退不会有 刷新

- dayjs的使用  

- debug  
```ts



```





















