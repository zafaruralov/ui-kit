import{l as u,c as k,m as O,a as n,e as o,b as L,g as $,h as m,p as d,w as Z,q as _,j as y,o as t}from"./iframe-Gi1r-Fe6.js";const ee={key:0,class:"label static"},ae={key:0,class:"required"},ne={class:"input-group"},te={key:0,class:"input-addon left"},oe={class:"input-container"},le=["type","placeholder","disabled","readonly"],se={key:0,class:"required"},re={key:1,class:"input-addon right"},x={__name:"DynamicInput",props:{modelValue:String,label:String,placeholder:String,preaddon:{type:String,default:""},postaddon:{type:String,default:""},required:Boolean,hasIconLeft:Boolean,hasIconRight:Boolean,type:{type:String,default:"text"},status:String,message:String,disabled:Boolean,readonly:Boolean,isStaticLabel:Boolean},emits:["update:modelValue"],setup(e,{emit:l}){const s=e,Y=l,h=u(s.modelValue),i=u(!1),V=u(!1),S=k(()=>!!h.value),H=k(()=>s.status?`status-${s.status}`:"");O(()=>s.modelValue,a=>{h.value=a});function K(){i.value=!0}function Q(){i.value=!1}function X(a){Y("update:modelValue",a.target.value)}return(a,r)=>(t(),n("div",{class:y(["input-wrapper",[H.value,{focused:i.value,filled:S.value,hovered:V.value,disabled:e.disabled,readonly:e.readonly,"with-static-label":e.isStaticLabel}]])},[e.label&&e.isStaticLabel?(t(),n("label",ee,[$(m(e.label),1),e.required?(t(),n("span",ae,"*")):o("",!0)])):o("",!0),L("div",ne,[e.preaddon?(t(),n("span",te,m(e.preaddon),1)):o("",!0),d(a.$slots,"prepend"),d(a.$slots,"icon-left"),d(a.$slots,"prefix"),L("div",oe,[Z(L("input",{class:y(["input-element",[e.status,{"rounded-left-none":e.preaddon,"rounded-right-none":e.postaddon||a.$slots.append||a.$slots["icon-right"]||a.$slots.suffix}]]),type:e.type,placeholder:!e.isStaticLabel&&!(i.value||S.value)?e.placeholder:"",disabled:e.disabled,readonly:e.readonly,"onUpdate:modelValue":r[0]||(r[0]=T=>h.value=T),onFocus:K,onBlur:Q,onInput:X,onMouseenter:r[1]||(r[1]=T=>V.value=!0),onMouseleave:r[2]||(r[2]=T=>V.value=!1)},null,42,le),[[_,h.value]]),e.label&&!e.isStaticLabel?(t(),n("label",{key:0,class:y(["label floating",{active:i.value||S.value}])},[$(m(e.label),1),e.required?(t(),n("span",se,"*")):o("",!0)],2)):o("",!0)]),d(a.$slots,"suffix"),d(a.$slots,"icon-right"),d(a.$slots,"append"),e.postaddon?(t(),n("span",re,m(e.postaddon),1)):o("",!0)]),e.message?(t(),n("p",{key:1,class:y(["message",e.status])},m(e.message),3)):o("",!0)],2))}};x.__docgenInfo={exportName:"default",displayName:"DynamicInput",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"}},{name:"label",type:{name:"string"}},{name:"placeholder",type:{name:"string"}},{name:"preaddon",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"postaddon",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"required",type:{name:"boolean"}},{name:"hasIconLeft",type:{name:"boolean"}},{name:"hasIconRight",type:{name:"boolean"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"text"'}},{name:"status",type:{name:"string"}},{name:"message",type:{name:"string"}},{name:"disabled",type:{name:"boolean"}},{name:"readonly",type:{name:"boolean"}},{name:"isStaticLabel",type:{name:"boolean"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend"},{name:"icon-left"},{name:"prefix"},{name:"suffix"},{name:"icon-right"},{name:"append"}],sourceFiles:["C:/programming/ui-kit/src/components/ui/DynamicInput.vue"]};const ue={title:"UI/InputText",component:x,argTypes:{modelValue:{control:"text"},label:{control:"text"},placeholder:{control:"text"},preaddon:{control:"text"},postaddon:{control:"text"},required:{control:"boolean"},readonly:{control:"boolean"},disabled:{control:"boolean"},type:{control:"select",options:["text","email","password","number"]},status:{control:"select",options:["success","error",""]},message:{control:"text"},isStaticLabel:{control:"boolean"}}},f=e=>({components:{InputText:x},setup(){const l=u(e.modelValue);return O(l,s=>{e.modelValue=s}),{args:e,model:l}},template:`
    <InputText v-bind="args" v-model="model">
      <template v-if="args.append" #append>
        <button class="input-button right">{{ args.append }}</button>
      </template>
    </InputText>
  `}),p=f.bind({});p.args={modelValue:"",label:"Ваше Ф.И.О.",placeholder:"hi",status:"",required:!0,postaddon:".com",isStaticLabel:!0,message:"Пользователь уже существует!",append:null};const c=f.bind({});c.args={modelValue:"",label:"Website",placeholder:"",preaddon:"https://",postaddon:".com",isStaticLabel:!1};const g=f.bind({});g.args={modelValue:"",label:"Email",placeholder:"Enter your email",postaddon:".com",append:"Check",isStaticLabel:!0};const b=f.bind({});b.args={modelValue:"",label:"Your Name",placeholder:"John Doe",hasIconLeft:!0,hasIconRight:!0,isStaticLabel:!1,message:"Looks good",status:""};const v=f.bind({});v.args={modelValue:"readonly@example.com",label:"Email (Readonly)",isStaticLabel:!0,status:"success",readonly:!0,message:"Email is read only"};const I=()=>({components:{InputText:x},setup(){const e=u(""),l=u("");return{username:e,domain:l}},template:`
    <div style="display: flex; gap: 8px;">
      <InputText v-model="username" placeholder="username" label="Login" :is-static-label="true" />
      <InputText v-model="domain" placeholder="domain.com" postaddon=".com" label="Domain" :is-static-label="true" />
    </div>
  `});var w,B,D;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    InputText
  },
  setup() {
    const model = ref(args.modelValue);
    watch(model, val => {
      args.modelValue = val;
    });
    return {
      args,
      model
    };
  },
  template: \`
    <InputText v-bind="args" v-model="model">
      <template v-if="args.append" #append>
        <button class="input-button right">{{ args.append }}</button>
      </template>
    </InputText>
  \`
})`,...(D=(B=p.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var q,W,E;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  components: {
    InputText
  },
  setup() {
    const model = ref(args.modelValue);
    watch(model, val => {
      args.modelValue = val;
    });
    return {
      args,
      model
    };
  },
  template: \`
    <InputText v-bind="args" v-model="model">
      <template v-if="args.append" #append>
        <button class="input-button right">{{ args.append }}</button>
      </template>
    </InputText>
  \`
})`,...(E=(W=c.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var N,R,C;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  components: {
    InputText
  },
  setup() {
    const model = ref(args.modelValue);
    watch(model, val => {
      args.modelValue = val;
    });
    return {
      args,
      model
    };
  },
  template: \`
    <InputText v-bind="args" v-model="model">
      <template v-if="args.append" #append>
        <button class="input-button right">{{ args.append }}</button>
      </template>
    </InputText>
  \`
})`,...(C=(R=g.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var F,A,P;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
  components: {
    InputText
  },
  setup() {
    const model = ref(args.modelValue);
    watch(model, val => {
      args.modelValue = val;
    });
    return {
      args,
      model
    };
  },
  template: \`
    <InputText v-bind="args" v-model="model">
      <template v-if="args.append" #append>
        <button class="input-button right">{{ args.append }}</button>
      </template>
    </InputText>
  \`
})`,...(P=(A=b.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var M,G,U;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
  components: {
    InputText
  },
  setup() {
    const model = ref(args.modelValue);
    watch(model, val => {
      args.modelValue = val;
    });
    return {
      args,
      model
    };
  },
  template: \`
    <InputText v-bind="args" v-model="model">
      <template v-if="args.append" #append>
        <button class="input-button right">{{ args.append }}</button>
      </template>
    </InputText>
  \`
})`,...(U=(G=v.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var j,z,J;I.parameters={...I.parameters,docs:{...(j=I.parameters)==null?void 0:j.docs,source:{originalSource:`() => ({
  components: {
    InputText
  },
  setup() {
    const username = ref("");
    const domain = ref("");
    return {
      username,
      domain
    };
  },
  template: \`
    <div style="display: flex; gap: 8px;">
      <InputText v-model="username" placeholder="username" label="Login" :is-static-label="true" />
      <InputText v-model="domain" placeholder="domain.com" postaddon=".com" label="Domain" :is-static-label="true" />
    </div>
  \`
})`,...(J=(z=I.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};const ie=["Default","WithPreaddon","WithPostaddonAndAppend","FloatingLabelWithIcons","ReadonlySuccess","GroupedInputs"];export{p as Default,b as FloatingLabelWithIcons,I as GroupedInputs,v as ReadonlySuccess,g as WithPostaddonAndAppend,c as WithPreaddon,ie as __namedExportsOrder,ue as default};
