(()=>{"use strict";const e=window.wp.element,t=window.wp.blocks,l=window.wp.i18n,a=window.wp.hooks,n=window.wp.blockEditor,r=e=>null==e||""===e,o=window.wp.data,i=window.wp.components,s=()=>(0,e.createElement)(i.Icon,{icon:()=>(0,e.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"#ffffff"},(0,e.createElement)("rect",{x:"2.75",y:"3.75",width:"18.5",height:"16.5",stroke:"#0EA489",strokeWidth:"1.5"}),(0,e.createElement)("rect",{x:"6",y:"7",width:"12",height:"1",fill:"#0EA489"}),(0,e.createElement)("rect",{x:"6",y:"11",width:"12",height:"1",fill:"#0EA489"}),(0,e.createElement)("rect",{x:"6",y:"15",width:"12",height:"1",fill:"#0EA489"}))}),c=()=>{},m=({fieldType:t,fieldTypes:a,newFieldTypes:n,onChangeFunc:o=c})=>{const s=r(n)||0===n.length,[m,u]=(0,e.useState)(!1);return s?(0,e.createElement)("div",{className:"gf-select-field-type-input"},(0,e.createElement)("div",{className:"gf-select-field-type-control"},(0,e.createElement)(i.SelectControl,{value:t,options:a,onChange:e=>o(e),help:(0,l.__)("Select appropriate field type for input","gutena-forms"),__nextHasNoMarginBottom:!0}),(0,e.createElement)("div",{className:"gf-select-overlay",onClick:e=>{e.preventDefault(),u(!m)}})),m&&(0,e.createElement)("ul",{className:"gf-select-field-types"},a.map(((t,l)=>(0,e.createElement)("li",{key:"gf-select-option-"+l,className:"gf-select-option",onClick:()=>{o(t.value),u(!m)}},t.label))),(0,e.createElement)("li",{className:"gf-seprator"}),(0,e.createElement)("li",{className:"gf-select-pro-options"},(0,e.createElement)("div",{className:"gf-title-link-wrapper"},(0,e.createElement)("div",{className:"gf-title-icon"},(0,e.createElement)("span",{className:"gf-title"},(0,l.__)("Pro","gutena-forms")),(0,e.createElement)("span",{className:"gf-icon"},((t="#606060")=>(0,e.createElement)(i.Icon,{icon:()=>(0,e.createElement)("svg",{className:"gf-lock-svg",width:"11",height:"12",viewBox:"0 0 11 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{d:"M8.57143 4H9.71428C10.0299 4 10.2857 4.25584 10.2857 4.57143V11.4286C10.2857 11.7442 10.0299 12 9.71428 12H0.571429C0.25584 12 0 11.7442 0 11.4286V4.57143C0 4.25584 0.25584 4 0.571429 4H1.71429V3.42857C1.71429 1.53502 3.24931 0 5.14286 0C7.0364 0 8.57143 1.53502 8.57143 3.42857V4ZM4.57143 8.41851V9.71429H5.71429V8.41851C6.05589 8.22091 6.28571 7.8516 6.28571 7.42857C6.28571 6.79737 5.77406 6.28571 5.14286 6.28571C4.51166 6.28571 4 6.79737 4 7.42857C4 7.8516 4.22983 8.22091 4.57143 8.41851ZM7.42857 4V3.42857C7.42857 2.16621 6.4052 1.14286 5.14286 1.14286C3.88049 1.14286 2.85714 2.16621 2.85714 3.42857V4H7.42857Z",fill:t}))}))())),(0,e.createElement)("div",{className:"gf-link"},(0,e.createElement)("a",{href:gutenaFormsBlock?.pricing_link,target:"_blank"},(0,l.__)("Upgrade Now","gutena-forms")),(0,e.createElement)("br",null),(0,e.createElement)("p",{className:"gf-text-muted"},(0,l.__)("14-day free trial","gutena-forms")))),(0,e.createElement)("ul",{className:"gf-pro-fields"},["Date","Time","Rating","Phone","Country","State","File Upload","Url","Hidden","Password"].map(((t,l)=>(0,e.createElement)("li",{key:"gf-pro-fi-eld-option-"+l,className:"gf-text-muted"},t))))))):(0,e.createElement)(i.SelectControl,{value:t,options:a,onChange:e=>o(e),help:(0,l.__)("Select appropriate field type for input","gutena-forms"),__nextHasNoMarginBottom:!0})},u=(e,t)=>{const l=(0,o.select)("core/block-editor").getClientIdsWithDescendants();return!r(l)&&l.some((l=>{const{nameAttr:a}=(0,o.select)("core/block-editor").getBlockAttributes(l);return t!==l&&a===e}))},p=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gutena/form-field","version":"1.0.0","title":"Form Field","parent":["gutena/forms"],"category":"gutena","icon":"feedback","description":"Form field","attributes":{"nameAttr":{"type":"string","default":"input_1"},"fieldName":{"type":"string","default":"Name"},"fieldClasses":{"type":"string","default":""},"fieldType":{"type":"string","default":"text"},"isRequired":{"type":"boolean","default":false},"placeholder":{"type":"string","default":""},"defaultValue":{"type":"string","default":""},"autocomplete":{"type":"boolean","default":false},"autoCapitalize":{"type":"boolean","default":false},"textAreaRows":{"type":"number","default":5},"maxlength":{"type":"number","default":""},"minMaxStep":{"type":"object","default":{}},"preFix":{"type":"string","default":""},"sufFix":{"type":"string","default":""},"selectOptions":{"type":"array","default":["Big","Medium","Small"]},"optionsColumns":{"type":"number","default":1},"optionsInline":{"type":"boolean","default":false},"multiSelect":{"type":"boolean","default":false},"errorRequiredMsg":{"type":"string","default":"Field is required"},"errorInvalidInputMsg":{"type":"string","default":"Input is not valid"},"description":{"type":"string","default":""},"fieldStyle":{"type":"string","default":""},"settings":{"type":"object","default":{}}},"usesContext":["gutena-forms/formID"],"supports":{"__experimentalSettings":true,"align":["wide","full"],"color":{"background":true,"text":true},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"radius":true,"style":true,"width":true}},"spacing":{"margin":true,"padding":true,"blockGap":{"__experimentalDefault":"2em","sides":["horizontal","vertical"]}},"html":false},"textdomain":"gutena-forms","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');(0,t.registerBlockType)(p,{icon:()=>(0,e.createElement)(i.Icon,{icon:()=>(0,e.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("rect",{x:"2",y:"4",width:"8",height:"2",fill:"#0EA489"}),(0,e.createElement)("rect",{x:"2",y:"11",width:"8",height:"2",fill:"#0EA489"}),(0,e.createElement)("rect",{x:"14",y:"4",width:"8",height:"2",fill:"#0EA489"}),(0,e.createElement)("rect",{x:"14",y:"11",width:"8",height:"2",fill:"#0EA489"}),(0,e.createElement)("rect",{x:"2",y:"18",width:"20",height:"2",fill:"#0EA489"}))}),edit:function({className:t,attributes:c,setAttributes:p,isSelected:f,clientId:g,context:d,gutenaExtends:h={}}){const{nameAttr:x,fieldName:E,fieldClasses:y,fieldType:b,isRequired:C,placeholder:_,defaultValue:v,autocomplete:w,autoCapitalize:k,textAreaRows:N,maxlength:B,minMaxStep:T,preFix:F,sufFix:S,selectOptions:I,optionsColumns:R,optionsInline:A,multiSelect:q,errorRequiredMsg:P,errorInvalidInputMsg:M,description:D,settings:O,style:V}=c,G=(0,e.useRef)(""),H=[{label:"Text",value:"text"},{label:"Number",value:"number"},{label:"Range",value:"range"},{label:"TextArea",value:"textarea"},{label:"Email",value:"email"},{label:"Dropdown",value:"select"},{label:"Radio",value:"radio"},{label:"Checkbox",value:"checkbox"},{label:"Opt-in Checkbox - Privacy policy, Terms",value:"optin"}];let $=[];(0,a.hasFilter)("gutenaforms.field.types")&&($=(0,a.applyFilters)("gutenaforms.field.types",$));const j=r($)||0===$.length?H:[...H,...$],U=r($)||0===$.length?[]:$.map((e=>e.value)),[W,z]=(0,e.useState)(I[0]),[L,Z]=(0,e.useState)(""),{selectBlock:J,moveBlocksDown:K,moveBlocksUp:Q,updateBlockAttributes:X}=(0,o.useDispatch)(n.store),{gutenaFormClientID:Y,labelClientId:ee,labelRootClientId:te,parentFieldGroupClientID:le,parentFieldGroupClassName:ae,parentCoreGroupClientID:ne,parentCoreGroupLayout:re}=(0,o.useSelect)((e=>{let t=e(n.store).getBlockParentsByBlockName(g,"gutena/forms",!0);t=r(t)?t:t[0];let l=r(G)||"optin"!=G?.current?-1:1,a=e(n.store).getAdjacentBlockClientId(g,l),o=e(n.store).getBlockParentsByBlockName(g,"gutena/field-group",!0),i=e(n.store).getBlockParentsByBlockName(g,"core/group",!0),s="";r(a)||(s=e(n.store).getBlockRootClientId(a));let c="";if(!r(o)){o=o[0];let t=e(n.store).getBlockAttributes(o);r(t)||r(t.className)||(c=t.className)}let m={};if(!r(i)){i=i[0];let t=e(n.store).getBlockAttributes(i);r(t)||r(t.layout)||(m=t.layout)}return{gutenaFormClientID:t,labelClientId:a,labelRootClientId:s,parentFieldGroupClientID:o,parentFieldGroupClassName:c,parentCoreGroupClientID:i,parentCoreGroupLayout:m}}),[g,b]),oe=(0,o.useSelect)((e=>{if(r(ee))return null;let t=e(n.store).getBlockAttributes(ee);return r(t)||r(t.content)?"":t.content.replace(/(<([^>]+)>)|\*/gi,"").trim()}),[ee]);(0,e.useEffect)((()=>{let e=!0;if(e&&("input_1"==x||""==x||!r(x)&&u(x,g)))for(let e=0;e<5e3;e++){let t="f_"+e;if(!u(t,g)){p({nameAttr:t});break}}return()=>{e=!1}}),[]);const ie=(e,t=!1)=>{p({fieldName:e}),t&&!r(ee)&&X(ee,{content:e})};(0,e.useEffect)((()=>{let e=!0;return e&&ie(oe),()=>{e=!1}}),[oe]);const se=()=>{let e=document.querySelector('.block-editor-block-styles__variants [aria-label="Border Style"]');r(e)||(e.style.display=f&&"range"===b?"inline-block":"none")};(0,e.useEffect)((()=>{let e=!0;return e&&se(),()=>{e=!1}}),[f]),(0,e.useEffect)((()=>{let e=!0;if(e){se();let e=`gutena-forms-field ${b}-field ${C?"required-field":""} ${w?"autocomplete":""} `;-1!==["radio","checkbox"].indexOf(b)&&(e+=A?" inline-options":" has-"+R+"-col"),p("optin"!==b||C?{fieldClasses:e}:{fieldClasses:e,isRequired:!0})}return()=>{e=!1}}),[b,C,A,R,w]),(0,e.useEffect)((()=>{let e=!0;if(e){let e=" field-group-type-"+b+" ";r(le)||-1!==ae.indexOf(e)||X(le,{className:ae+e}),r(ne)||r(re)||("optin"!==b||r(re.orientation)||"vertical"!==re.orientation?!r(G)&&"optin"==G?.current&&r(re.orientation)&&(X(ne,{layout:{...re,orientation:"vertical",flexWrap:void 0}}),r(ee)||r(te)||(X(ee,{content:""}),Q([ee],te))):(r(ee)||r(te)||(X(ee,{content:(0,l.__)("I agree to the Terms","gutena-forms")}),K([ee],te)),X(ne,{layout:{...re,orientation:void 0,flexWrap:"nowrap"}}))),G.current=b}return()=>{e=!1}}),[b]);const ce=(0,n.useBlockProps)({className:`gutena-forms-${b}-field field-name-${x} ${A?"gf-inline-content":""}`});return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.BlockControls,null,(0,e.createElement)(i.ToolbarGroup,null,(0,e.createElement)(i.ToolbarButton,{icon:s,label:(0,l.__)("Select form block","gutena-forms"),onClick:()=>{r(Y)||J(Y)}}))),(0,e.createElement)(n.InspectorControls,null,(0,e.createElement)(i.PanelBody,{title:(0,l.__)("Field Type","gutena-forms"),initialOpen:!0},(0,e.createElement)(m,{fieldType:b,fieldTypes:j,newFieldTypes:U,onChangeFunc:e=>p({fieldType:e})}),!r(h?.gfcontrols)&&h.gfcontrols(),-1!==["select","checkbox","radio"].indexOf(b)&&(0,e.createElement)(i.FormTokenField,{label:w?(0,l.__)("Preferences","gutena-forms"):(0,l.__)("Options","gutena-forms"),value:I,suggestions:I,onChange:e=>p({selectOptions:e})}),-1!==["radio","checkbox"].indexOf(b)&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(i.ToggleControl,{label:(0,l.__)("Show Inline","gutena-forms"),className:"gf-mt-1",help:A?(0,l.__)("Toggle to make options show in columns","gutena-forms"):(0,l.__)("Toggle to make options show inline","gutena-forms"),checked:A,onChange:e=>p({optionsInline:e})}),!A&&(0,e.createElement)(i.RangeControl,{label:(0,l.__)("Columns","gutena-forms"),value:R,onChange:e=>p({optionsColumns:e}),min:1,max:6,step:1})),("number"===b||"range"===b)&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)("h2",{className:"block-editor-block-card__title gf-mt-1 "},(0,l.__)("Value","gutena-forms")),(0,e.createElement)(i.PanelRow,{className:"gf-child-mb-0 gf-mb-24"},(0,e.createElement)(i.TextControl,{label:(0,l.__)("Minimum","gutena-forms"),value:T?.min,type:"number",onChange:e=>p({minMaxStep:{...T,min:e}})}),(0,e.createElement)(i.TextControl,{label:(0,l.__)("Maximum","gutena-forms"),value:T?.max,type:"number",onChange:e=>p({minMaxStep:{...T,max:e}})}),(0,e.createElement)(i.TextControl,{label:(0,l.__)("Step","gutena-forms"),value:T?.step,type:"number",onChange:e=>p({minMaxStep:{...T,step:e}})})),(0,e.createElement)(i.PanelRow,{className:"gf-child-mb-0 gf-mb-24"},(0,e.createElement)(i.TextControl,{label:(0,l.__)("Prefix","gutena-forms"),value:F,onChange:e=>p({preFix:e})}),(0,e.createElement)(i.TextControl,{label:(0,l.__)("Suffix","gutena-forms"),value:S,onChange:e=>p({sufFix:e})})))),(0,e.createElement)(i.PanelBody,{title:(0,l.__)("Field settings","gutena-forms"),initialOpen:!0},(0,e.createElement)(i.TextControl,{label:(0,l.__)("Label","gutena-forms")+" * ",className:r(E)?" gf-required-field":"",help:r(E)?(0,l.__)("Please add label to the field","gutena-forms"):"",value:null!=E?E:"",onChange:e=>ie(e,!0)}),!r(h?.gfSettings)&&h.gfSettings(),-1!==["text","textarea"].indexOf(b)&&(0,e.createElement)(i.RangeControl,{label:(0,l.__)("Maxlength","gutena-forms"),value:B,onChange:e=>p({maxlength:e}),min:0,max:500,step:25}),"textarea"===b&&(0,e.createElement)(i.RangeControl,{label:(0,l.__)("Textarea Rows","gutena-forms"),value:N,onChange:e=>p({textAreaRows:e}),min:2,max:20,step:1}),(0,e.createElement)(i.PanelRow,null,(0,e.createElement)(i.TextControl,{label:(0,l.__)("Placeholder","gutena-forms"),value:_,onChange:e=>p({placeholder:e})})),(0,e.createElement)(i.PanelRow,null,(0,e.createElement)(i.ToggleControl,{label:(0,l.__)("Required","gutena-forms"),help:C?(0,l.__)("Toggle to make input field not required","gutena-forms"):(0,l.__)("Toggle to make input field required","gutena-forms"),checked:C,disabled:"optin"===b,onChange:e=>p({isRequired:e})})),["text","textarea","number"].includes(b)&&(0,e.createElement)(i.TextControl,{label:(0,l.__)("Default Value","gutena-forms"),value:v,type:"text",onChange:e=>p({defaultValue:e})}))),(0,e.createElement)("div",ce,b.length>0?0<=["text","email","number"].indexOf(b)?(0,e.createElement)("input",{type:b,className:y,value:null!=L?L:"",onChange:e=>Z(e.target.value),placeholder:_||(0,l.__)("Placeholder…"),required:C?"required":""}):"range"===b?(0,e.createElement)("div",{className:"gf-range-container"},(0,e.createElement)("input",{type:b,className:y,required:C?"required":"",value:null!=L?L:"",onChange:e=>Z(e.target.value)}),(0,e.createElement)("p",{className:"gf-range-values"},!r(T?.min)&&(0,e.createElement)("span",{className:"gf-prefix-value-wrapper"},(0,e.createElement)("span",{className:"gf-prefix"},r(F)?"":F),(0,e.createElement)("span",{className:"gf-value"},T?.min),(0,e.createElement)("span",{className:"gf-suffix"},r(S)?"":S)),!r(L)&&(0,e.createElement)("span",{className:"gf-prefix-value-wrapper"},(0,e.createElement)("span",{className:"gf-prefix"},r(F)?"":F),(0,e.createElement)("span",{className:"gf-value range-input-value"},L),(0,e.createElement)("span",{className:"gf-suffix"},r(S)?"":S)),!r(T?.max)&&(0,e.createElement)("span",{className:"gf-prefix-value-wrapper"},(0,e.createElement)("span",{className:"gf-prefix"},r(F)?"":F),(0,e.createElement)("span",{className:"gf-value"},T?.max),(0,e.createElement)("span",{className:"gf-suffix"},r(S)?"":S)))):"textarea"===b?(0,e.createElement)("textarea",{className:y,placeholder:_||(0,l.__)("Placeholder…"),required:C?"required":"",rows:N}):"select"===b?(0,e.createElement)("select",{className:y,value:W,onChange:e=>z(e.target.value),required:C?"required":""},I.map(((t,l)=>(0,e.createElement)("option",{key:l,value:t},t)))):"radio"===b||"checkbox"===b?(0,e.createElement)("div",{className:y},I.map(((t,l)=>(0,e.createElement)("label",{key:l,className:b+"-container"},t,(0,e.createElement)("input",{type:b,name:E,value:t,checked:t===W,onChange:e=>z(e.target.value)}),(0,e.createElement)("span",{className:"checkmark"}))))):"optin"===b?(0,e.createElement)("div",{className:y},(0,e.createElement)("label",{className:"checkbox-container"},(0,e.createElement)("input",{type:"checkbox",name:E,value:"1",checked:!r(L),onChange:e=>z("1"===L?"":"1")}),(0,e.createElement)("span",{className:"checkmark"}))):!r(h?.inputFieldComponent)&&0<=U.indexOf(b)?h.inputFieldComponent():void 0:""))}})})();