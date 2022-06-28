import React from 'react';
import classnames from 'classnames'

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
  name?: string
} & React.SVGAttributes<SVGElement>  // 使得 ICON 组件支持点击事件

const Icon = (props: Props) => {
  const {name,children, className, ...reset } = props
  // 将 className 提出来是因为，外部的 className 可能会影响到 icon 的className，从而影响样式
  return (
    <svg className={ classnames('icon',className )} {...reset}>
      {props.name && <use xlinkHref={'#' + props.name}/>}
    </svg>
  );
};

export default Icon;
