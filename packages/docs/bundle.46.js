(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{139:function(e,r,t){var a={"./bash":123,"./bash.js":123,"./css":124,"./css.js":124,"./htmlbars":125,"./htmlbars.js":125,"./javascript":126,"./javascript.js":126,"./scss":127,"./scss.js":127,"./typescript":128,"./typescript.js":128};function s(e){var r=n(e);return t(r)}function n(e){if(!t.o(a,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=n,e.exports=s,s.id=139},84:function(e,r,t){"use strict";var a=t(135),s=(t(136),t(137)),n=(t(138),function(){return a.createElement(a.Fragment,{},a.createElement("h1",{id:"registerformwrapper",className:"react-demo-h1"},"registerFormWrapper"),a.createElement("h2",{id:"介绍",className:"react-demo-h2"},"介绍"),a.createElement("p",{className:"react-demo-p"},"注册一个表单包装组件，类似于HOC，先注册的组件层级深，后注册的组件层级浅"),a.createElement("h2",{id:"类型描述",className:"react-demo-h2"},"类型描述"),a.createElement(s,{code:"type registerFormField(...wrappers : Wrapper)\n\ntype Wrapper(FormComponent : Function) : ReactComponent\n",justCode:!0,lang:"typescript"}),a.createElement("h2",{id:"依赖",className:"react-demo-h2"},"依赖"),a.createElement(s,{code:"import {registerFormWrapper} from '@uform/react'\n",justCode:!0,lang:"javascript"}),a.createElement("h2",{id:"用例",className:"react-demo-h2"},"用例"),a.createElement(s,{code:"import {registerFormWrapper} from '@uform/react'\n\nregisterFormWrapper((Form)=>{\n  return (props)=><div><Form {...props}/></div>\n})\n",justCode:!0,lang:"javascript"}))});n.meta={username:"zhili.wzl",email:"wangzhili56@126.com"},e.exports=n}}]);