import{s as te,k as u,c as I,x as Y,a as n,e as o,b as L,g as $,h as i,l as p,j as d,w as ne,y as ae,o as a}from"./iframe-Dq78tlPt.js";/* empty css             */const oe={key:0,class:"label static"},se={key:0,class:"required"},le={class:"input-group"},re={class:"input-container"},pe=["type","placeholder","disabled","readonly"],de={key:0,class:"required"},V={__name:"DynamicInput",props:{modelValue:String,label:String,placeholder:String,preaddon:{type:String,default:""},postaddon:{type:String,default:""},required:Boolean,hasIconLeft:Boolean,hasIconRight:Boolean,type:{type:String,default:"text"},status:String,message:String,disabled:Boolean,readonly:Boolean,isStaticLabel:Boolean},emits:["update:modelValue"],setup(e,{emit:s}){const l=e,H=s,k=te(),h=u(l.modelValue),y=u(!1),S=u(!1),K=I(()=>!!k.append),Q=I(()=>!!k.preappend),w=I(()=>!!h.value),X=I(()=>l.status?`status-${l.status}`:"");Y(()=>l.modelValue,t=>{h.value=t});function Z(){y.value=!0}function _(){y.value=!1}function ee(t){H("update:modelValue",t.target.value)}return(t,r)=>(a(),n("div",{class:d(["input-wrapper",[X.value,{focused:y.value,filled:w.value,hovered:S.value,disabled:e.disabled,readonly:e.readonly,"with-static-label":e.isStaticLabel}]])},[e.label&&e.isStaticLabel?(a(),n("label",oe,[$(i(e.label),1),e.required?(a(),n("span",se,"*")):o("",!0)])):o("",!0),L("div",le,[p(t.$slots,"preappend"),e.preaddon?(a(),n("span",{key:0,class:d(["input-addon left",{"with-append":Q.value}])},i(e.preaddon),3)):o("",!0),p(t.$slots,"icon-left"),p(t.$slots,"prefix"),L("div",re,[ne(L("input",{class:d(["input-element",[e.status,{"rounded-left-none":e.preaddon,"rounded-right-none":e.postaddon||t.$slots.append||t.$slots["icon-right"]||t.$slots.suffix}]]),type:e.type,placeholder:e.isStaticLabel?e.placeholder:"",disabled:e.disabled,readonly:e.readonly,"onUpdate:modelValue":r[0]||(r[0]=T=>h.value=T),onFocus:Z,onBlur:_,onInput:ee,onMouseenter:r[1]||(r[1]=T=>S.value=!0),onMouseleave:r[2]||(r[2]=T=>S.value=!1)},null,42,pe),[[ae,h.value]]),e.label&&!e.isStaticLabel?(a(),n("label",{key:0,class:d(["label floating",{active:y.value||w.value}])},[$(i(e.label),1),e.required?(a(),n("span",de,"*")):o("",!0)],2)):o("",!0)]),p(t.$slots,"suffix"),p(t.$slots,"icon-right"),e.postaddon?(a(),n("span",{key:1,class:d(["input-addon right",{"with-append":K.value}])},i(e.postaddon),3)):o("",!0),p(t.$slots,"append")]),e.message?(a(),n("p",{key:1,class:d(["message",e.status])},i(e.message),3)):o("",!0)],2))}};V.__docgenInfo={exportName:"default",displayName:"DynamicInput",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"}},{name:"label",type:{name:"string"}},{name:"placeholder",type:{name:"string"}},{name:"preaddon",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"postaddon",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"required",type:{name:"boolean"}},{name:"hasIconLeft",type:{name:"boolean"}},{name:"hasIconRight",type:{name:"boolean"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"text"'}},{name:"status",type:{name:"string"}},{name:"message",type:{name:"string"}},{name:"disabled",type:{name:"boolean"}},{name:"readonly",type:{name:"boolean"}},{name:"isStaticLabel",type:{name:"boolean"}}],events:[{name:"update:modelValue"}],slots:[{name:"preappend"},{name:"icon-left"},{name:"prefix"},{name:"suffix"},{name:"icon-right"},{name:"append"}],sourceFiles:["C:/programming/ui-kit/src/components/ui/DynamicInput.vue"]};const me={title:"UI/InputText",component:V,argTypes:{modelValue:{control:"text"},label:{control:"text"},placeholder:{control:"text"},preaddon:{control:"text"},postaddon:{control:"text"},required:{control:"boolean"},readonly:{control:"boolean"},disabled:{control:"boolean"},type:{control:"select",options:["text","email","password","number"]},status:{control:"select",options:["success","error",""]},message:{control:"text"},isStaticLabel:{control:"boolean"}}},v=e=>({components:{InputText:V},setup(){const s=u(e.modelValue);return Y(s,l=>{e.modelValue=l}),{args:e,model:s}},template:`
    <InputText v-bind="args" v-model="model">
      <template v-if="args.preappend" #preappend>
        <button class="input-button left">{{ args.preappend }}</button>
      </template>
      <template v-if="args.append" #append>
        <button class="input-button right">{{ args.append }}</button>
      </template>
    </InputText>
  `}),m=v.bind({});m.args={modelValue:"",label:"Ваше Ф.И.О.",placeholder:"hi",status:"",required:!0,postaddon:".com",isStaticLabel:!0,message:"Пользователь уже существует!",append:null,preappend:null};const c=v.bind({});c.args={modelValue:"",label:"Website",placeholder:"",preaddon:"https://",postaddon:".com",isStaticLabel:!1};const g=v.bind({});g.args={modelValue:"",label:"Email",placeholder:"Enter your email",postaddon:".com",append:"Check",isStaticLabel:!0};const b=v.bind({});b.args={modelValue:"",label:"Your Name",placeholder:"John Doe",hasIconLeft:!0,hasIconRight:!0,isStaticLabel:!1,message:"Looks good",status:""};const f=v.bind({});f.args={modelValue:"readonly@example.com",label:"Email (Readonly)",isStaticLabel:!0,status:"success",readonly:!0,message:"Email is read only"};const x=()=>({components:{InputText:V},setup(){const e=u(""),s=u("");return{username:e,domain:s}},template:`
    <div style="display: flex; gap: 8px;">
      <InputText v-model="username" placeholder="username" label="Login" :is-static-label="true" />
      <InputText v-model="domain" placeholder="domain.com" postaddon=".com" label="Domain" :is-static-label="true" />
    </div>
  `});var B,D,q;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
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
      <template v-if="args.preappend" #preappend>
        <button class="input-button left">{{ args.preappend }}</button>
      </template>
      <template v-if="args.append" #append>
        <button class="input-button right">{{ args.append }}</button>
      </template>
    </InputText>
  \`
})`,...(q=(D=m.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var W,E,N;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
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
      <template v-if="args.preappend" #preappend>
        <button class="input-button left">{{ args.preappend }}</button>
      </template>
      <template v-if="args.append" #append>
        <button class="input-button right">{{ args.append }}</button>
      </template>
    </InputText>
  \`
})`,...(N=(E=c.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var R,A,C;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
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
      <template v-if="args.preappend" #preappend>
        <button class="input-button left">{{ args.preappend }}</button>
      </template>
      <template v-if="args.append" #append>
        <button class="input-button right">{{ args.append }}</button>
      </template>
    </InputText>
  \`
})`,...(C=(A=g.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var F,P,M;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
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
      <template v-if="args.preappend" #preappend>
        <button class="input-button left">{{ args.preappend }}</button>
      </template>
      <template v-if="args.append" #append>
        <button class="input-button right">{{ args.append }}</button>
      </template>
    </InputText>
  \`
})`,...(M=(P=b.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var G,U,j;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`args => ({
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
      <template v-if="args.preappend" #preappend>
        <button class="input-button left">{{ args.preappend }}</button>
      </template>
      <template v-if="args.append" #append>
        <button class="input-button right">{{ args.append }}</button>
      </template>
    </InputText>
  \`
})`,...(j=(U=f.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var z,J,O;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`() => ({
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
})`,...(O=(J=x.parameters)==null?void 0:J.docs)==null?void 0:O.source}}};const ce=["Default","WithPreaddon","WithPostaddonAndAppend","FloatingLabelWithIcons","ReadonlySuccess","GroupedInputs"];export{m as Default,b as FloatingLabelWithIcons,x as GroupedInputs,f as ReadonlySuccess,g as WithPostaddonAndAppend,c as WithPreaddon,ce as __namedExportsOrder,me as default};
