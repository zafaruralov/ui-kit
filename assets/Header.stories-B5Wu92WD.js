import{M as s}from"./Header-C0ND8aA6.js";import"./Button-DB_QzUY_.js";import"./iframe-Dq78tlPt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,_={title:"Example/Header",component:s,tags:["autodocs"],render:p=>({components:{MyHeader:s},setup(){return{...p}},template:'<my-header :user="user" />'}),parameters:{layout:"fullscreen"},args:{onLogin:o(),onLogout:o(),onCreateAccount:o()}},e={args:{user:{name:"Jane Doe"}}},r={args:{user:null}};var a,n,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var u,c,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    user: null
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const L=["LoggedIn","LoggedOut"];export{e as LoggedIn,r as LoggedOut,L as __namedExportsOrder,_ as default};
