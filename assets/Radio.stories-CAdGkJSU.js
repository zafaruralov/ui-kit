import{a as R,w as f,b as s,z as x,u as y,q as V,h as B,o as S}from"./iframe-DUJxhaHY.js";import{u as A}from"./useInputProps--PTxwb1z.js";const O=["for"],C=["id","name","value","disabled"],N={class:"label-text"},o={__name:"Radio",props:{id:{type:String,required:!0},modelValue:[String,Number],label:String,name:String,value:[String,Number],disabled:Boolean},emits:["update:modelValue"],setup(e,{emit:l}){const r=e,d=l,{localValue:i}=A(r,d);return(k,t)=>(S(),R("label",{for:e.id,class:"radio"},[f(s("input",{type:"radio",id:e.id,name:e.name,value:e.value,disabled:e.disabled,"onUpdate:modelValue":t[0]||(t[0]=g=>V(i)?i.value=g:null)},null,8,C),[[x,y(i)]]),t[1]||(t[1]=s("span",{class:"custom-radio"},null,-1)),s("span",N,B(e.label),1)],8,O))}};o.__docgenInfo={exportName:"default",displayName:"Radio",description:"",tags:{},props:[{name:"id",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"string|number"}},{name:"label",type:{name:"string"}},{name:"name",type:{name:"string"}},{name:"value",type:{name:"string|number"}},{name:"disabled",type:{name:"boolean"}}],events:[{name:"update:modelValue"}],sourceFiles:["C:/programming/ui-kit/src/components/ui/Radio.vue"]};const h={title:"UI/Radio",component:o,argTypes:{id:{control:"text"},label:{control:"text"},name:{control:"text"},value:{control:"text"},modelValue:{control:"text"},disabled:{control:"boolean"}}},D=(e,{updateArgs:l})=>({components:{Radio:o},setup(){return{args:e,updateValue:d=>l({modelValue:d})}},template:'<Radio v-bind="args" />'}),a=D.bind({});a.args={id:"radio-1",label:"Option A",name:"example",value:"A",modelValue:"",disabled:!1};const n=()=>({components:{Radio:o},data(){return{selected:"B"}},template:`
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <Radio id="radio-a" label="Option A" name="group" value="A" v-model="selected" />
        <Radio id="radio-b" label="Option B" name="group" value="B" v-model="selected" />
        <Radio id="radio-c" label="Option C" name="group" value="C" v-model="selected" :disabled="true" />
        <div>Selected: {{ selected }}</div>
      </div>
    `});var u,m,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`(args, {
  updateArgs
}) => ({
  components: {
    Radio
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
  template: \`<Radio v-bind="args" />\`
})`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,v,b;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => ({
  components: {
    Radio
  },
  data() {
    return {
      selected: "B"
    };
  },
  template: \`
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <Radio id="radio-a" label="Option A" name="group" value="A" v-model="selected" />
        <Radio id="radio-b" label="Option B" name="group" value="B" v-model="selected" />
        <Radio id="radio-c" label="Option C" name="group" value="C" v-model="selected" :disabled="true" />
        <div>Selected: {{ selected }}</div>
      </div>
    \`
})`,...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const w=["Default","Grouped"];export{a as Default,n as Grouped,w as __namedExportsOrder,h as default};
