import{a as g,w as k,b as r,p as f,u as y,q as C,h as V,o as B}from"./iframe-DUJxhaHY.js";import{u as S}from"./useInputProps--PTxwb1z.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";const A=["for"],I=["id","value","disabled"],D={class:"label-text"},x={__name:"Checkbox",props:{id:{type:String,required:!0},modelValue:[Boolean,Array],label:String,value:{type:[String,Number,Boolean],default:!0},disabled:Boolean},emits:["update:modelValue"],setup(e,{emit:o}){const c=e,n=o,{localValue:s}=S(c,n);return(q,l)=>(B(),g("label",{for:e.id,class:"checkbox"},[k(r("input",{type:"checkbox",id:e.id,value:e.value,disabled:e.disabled,"onUpdate:modelValue":l[0]||(l[0]=h=>C(s)?s.value=h:null)},null,8,I),[[f,y(s)]]),l[1]||(l[1]=r("span",{class:"custom-checkbox"},null,-1)),r("span",D,V(e.label),1)],8,A))}},d=_(x,[["__scopeId","data-v-40dc15d6"]]);x.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"id",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean|array"}},{name:"label",type:{name:"string"}},{name:"value",type:{name:"string|number|boolean"},defaultValue:{func:!1,value:"true"}},{name:"disabled",type:{name:"boolean"}}],events:[{name:"update:modelValue"}],sourceFiles:["C:/programming/ui-kit/src/components/ui/Checkbox.vue"]};const T={title:"UI/Checkbox",component:d,argTypes:{id:{control:"text"},label:{control:"text"},value:{control:"text"},modelValue:{control:"object",description:"Boolean or Array depending on usage"},disabled:{control:"boolean"}}},N=(e,{updateArgs:o})=>({components:{Checkbox:d},setup(){return{args:e,updateValue:n=>o({modelValue:n})}},template:'<Checkbox v-bind="args" />'}),a=N.bind({});a.args={id:"checkbox-1",label:"I agree to terms",modelValue:!1,value:!0,disabled:!1};const t=()=>({components:{Checkbox:d},data(){return{selected:["apple"]}},template:`
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <Checkbox id="cb-apple" label="Apple" value="apple" v-model="selected" />
        <Checkbox id="cb-banana" label="Banana" value="banana" v-model="selected" />
        <Checkbox id="cb-cherry" label="Cherry" value="cherry" v-model="selected" :disabled="true" />
        <div>Selected: {{ selected }}</div>
      </div>
    `});var u,i,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`(args, {
  updateArgs
}) => ({
  components: {
    Checkbox
  },
  setup() {
    const updateValue = val => updateArgs({
      modelValue: val
    });
    return {
      args,
      updateValue
    };
  },
  template: \`<Checkbox v-bind="args" />\`
})`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,b,v;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => ({
  components: {
    Checkbox
  },
  data() {
    return {
      selected: ["apple"]
    };
  },
  template: \`
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <Checkbox id="cb-apple" label="Apple" value="apple" v-model="selected" />
        <Checkbox id="cb-banana" label="Banana" value="banana" v-model="selected" />
        <Checkbox id="cb-cherry" label="Cherry" value="cherry" v-model="selected" :disabled="true" />
        <div>Selected: {{ selected }}</div>
      </div>
    \`
})`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const U=["Default","GroupedCheckboxes"];export{a as Default,t as GroupedCheckboxes,U as __namedExportsOrder,T as default};
