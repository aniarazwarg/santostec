(()=>{"use strict";var e,t={586:(e,t,a)=>{const n=window.wp.element,l=window.wp.i18n,r=window.wp.domReady;var s=a.n(r);const o=e=>null==e||""===e,c=(e,t=" ")=>{let a=new Date(e),n=a.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!0}).toLowerCase();return a=a.toDateString().split(" "),a[1]+" "+a[2]+", "+a[3]+" "+t+" "+n},i=()=>{const e=o(gutenaFormsDashboard.pagetype)?"":gutenaFormsDashboard.pagetype,t=gutenaFormsDashboard.dashboard_menu.filter((e=>"1"===e.enable)),a=t.map((e=>e.slug)),l=gutenaFormsDashboard.page_url,r=(t="")=>e===t||""===t&&!a.includes(e)?"active":"";return(0,n.createElement)("ul",null,t.map(((e,t)=>(0,n.createElement)("li",{className:r(e.slug),key:"dashboard-mav-"+t},(0,n.createElement)("a",{href:o(e.link)?l+e.slug:e.link,target:o(e.target)?"":e.target},e.title)))))},m=window.wp.components,u=()=>{const e="undefined"==typeof gutenaFormsEntryDetails||o(gutenaFormsEntryDetails?.entry_data)?"":gutenaFormsEntryDetails.entry_data;if(""===e&&!o(gutenaFormsDashboard?.form_id)&&!o(gutenaFormsList?.list)){const e=gutenaFormsList.list.map((e=>({label:e.form_name,value:e.form_id})));return(0,n.createElement)(m.SelectControl,{value:gutenaFormsDashboard.form_id,options:e,onChange:e=>{window.location=gutenaFormsDashboard.entry_list_url+e},__nextHasNoMarginBottom:!0})}if(""!==e){const t=e?.form_id,a=o(gutenaFormsDashboard?.entry_list_url)?"#":gutenaFormsDashboard.entry_list_url+t;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("span",null,(0,n.createElement)("a",{href:a},e.form_name)),(0,n.createElement)("span",null," ",">"," "),(0,n.createElement)("span",null," ",(0,l.__)("Entry ","gutena-forms")+e.current_entry_sno," "))}return""},g=()=>{const e=gutenaFormsDashboard.page_url;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("span",null,(0,n.createElement)("a",{href:e},(0,l.__)("Entries","gutena-forms"))),(0,n.createElement)("span",null," ",">"," "),(0,n.createElement)(u,null))},d=()=>{const e=gutenaFormsIntroduction?.section?.welcome;return(0,n.createElement)("div",{className:"gutena-forms-welcome-section "},(0,n.createElement)("div",{className:"gf-flex gf-container"},(0,n.createElement)("div",{className:"gf-left-section"},(0,n.createElement)("a",{href:e?.intro_video_link,target:"_blank"},(0,n.createElement)("img",{src:e?.into_img,alt:(0,l.__)("Introduction","gutena-forms")}))),(0,n.createElement)("div",{className:"gf-right-section"},(0,n.createElement)("h2",{className:"gf-title"},e?.title),(0,n.createElement)("p",{className:"gf-description"},e?.description),(0,n.createElement)("div",{className:"gf-btn-group"},(0,n.createElement)(m.Button,{href:"#gutena-forms-pricing",className:"gf-primary-btn",variant:"primary"},e?.pricing_btn_name),(0,n.createElement)(m.Button,{href:gutenaFormsDashboard?.support_link,target:"_blank",className:"gf-dark-btn",variant:"primary"},e?.help_btn_name)))))},p=()=>{const e=gutenaFormsIntroduction?.section?.features;return(0,n.createElement)("div",{className:"gutena-forms-features-section "},(0,n.createElement)("div",{className:"gf-container"},(0,n.createElement)("h2",{className:"gf-title"},e?.title),(0,n.createElement)("div",{className:"gf-flex gf-feature-cards"},e?.items?.map(((e,t)=>(0,n.createElement)("div",{className:"gf-feature-card",key:"feature-card"+t},!0===e.is_pro&&(0,n.createElement)("div",{className:"gf-pro-tag"},(0,l.__)("Pro","gutena-forms")),(0,n.createElement)("div",{className:"gf-icon"},(0,n.createElement)("img",{src:e?.icon,alt:(0,l.__)("feature icon","gutena-forms"),width:"50",height:"50"})),(0,n.createElement)("div",{className:"gf-title"},e?.title),(0,n.createElement)("div",{className:"gf-description"},e?.description)))))))},f=()=>{const e=gutenaFormsIntroduction?.section?.fields;return(0,n.createElement)("div",{className:"gutena-forms-fields-section "},(0,n.createElement)("div",{className:"gf-container"},(0,n.createElement)("h2",{className:"gf-title"},e?.title),(0,n.createElement)("div",{className:"gf-flex gf-feature-cards"},e?.items?.map(((e,t)=>(0,n.createElement)("div",{className:"gf-feature-card",key:"field-card"+t},!0===e.is_pro&&(0,n.createElement)("div",{className:"gf-pro-tag"},(0,l.__)("Pro","gutena-forms")),(0,n.createElement)("div",{className:"gf-icon"},(0,n.createElement)("img",{src:e.icon,alt:(0,l.__)("feature icon","gutena-forms"),width:"36",height:"36"})),(0,n.createElement)("div",{className:"gf-title"},e.title)))))))},E=()=>{const e=gutenaFormsIntroduction?.section?.pricing;return(0,n.createElement)("div",{className:"gutena-forms-pricing-section"},(0,n.createElement)("div",{className:"gf-container"},(0,n.createElement)("h2",{id:"gutena-forms-pricing",className:"gf-title"},e?.title),(0,n.createElement)("h3",{className:"gf-description"},e?.subtitle),(0,n.createElement)("div",{className:"gf-flex gf-feature-cards"},e?.items?.map(((t,a)=>(0,n.createElement)("div",{className:"gf-feature-card",key:"pricing-card"+a},(0,n.createElement)("div",{className:"gf-title"},t?.title),(0,n.createElement)("div",{className:"gf-pricing"},(0,n.createElement)("span",{className:"gf-price"}," ",t?.price," "),(0,n.createElement)("span",{className:"gf-bill-frequency"}," ",e?.billed_frequency," ")),(0,n.createElement)("div",{className:"gf-description"},t?.description),(0,n.createElement)("ul",{className:"gf-features-list"},e?.features?.map(((e,t)=>(0,n.createElement)("li",{key:"features-list"+t},(0,n.createElement)("span",{className:"gf-icon"},(0,n.createElement)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("g",{clipPath:"url(#clip0_5487_231)"},(0,n.createElement)("path",{d:"M6.74987 12.1275L3.62237 9L2.55737 10.0575L6.74987 14.25L15.7499 5.25L14.6924 4.1925L6.74987 12.1275Z",fill:"#2C3338"})),(0,n.createElement)("defs",null,(0,n.createElement)("clipPath",{id:"clip0_5487_231"},(0,n.createElement)("rect",{width:"18",height:"18",fill:"white"}))))),(0,n.createElement)("span",{className:"gf-feature-title"},e))))),(0,n.createElement)(m.Button,{href:t?.link,target:"_blank",className:"gf-primary-btn",variant:"primary"},t?.btn_name)))))))},_=({item:e={},index:t=0})=>{const[a,l]=(0,n.useState)(0===t);return(0,n.createElement)("div",{className:"gf-accordions-panel "+(a?"open":"")},(0,n.createElement)("div",{className:"gf-title-icon",onClick:()=>l(!a)},(0,n.createElement)("span",{className:"gf-title"}," ",e?.title," "),(0,n.createElement)("span",{className:"gf-icon"}," ",a?(0,n.createElement)("svg",{width:"15",height:"3",viewBox:"0 0 15 3",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("rect",{x:"0.1",y:"0.1",width:"14.8",height:"2.8",fill:"#272A41",stroke:"white",strokeWidth:"0.2"})):(0,n.createElement)("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("rect",{y:"6",width:"15",height:"3",fill:"#272A41"}),(0,n.createElement)("rect",{x:"9",width:"15",height:"3",transform:"rotate(90 9 0)",fill:"#272A41"}))," ")),(0,n.createElement)("div",{className:"gf-description",style:0===t?{maxHeight:"fit-content"}:{}},(0,n.createElement)("p",null,e?.description)))},h=()=>{const e=gutenaFormsIntroduction?.section?.faq;return(0,n.createElement)("div",{className:"gutena-forms-faq-section"},(0,n.createElement)("div",{className:"gf-container"},(0,n.createElement)("h2",{className:"gf-title"},e?.title),(0,n.createElement)("ul",{className:"gf-accordions"},e?.items?.map(((e,t)=>(0,n.createElement)(_,{item:e,index:t,key:"gf-accordion-panel"+t})))),(0,n.createElement)("p",{className:"gf-contact-sales"},(0,n.createElement)("span",null,e?.sales?.title1," "),(0,n.createElement)("a",{href:e?.sales?.link,target:"_blank"},e?.sales?.title2))))},v=e=>(0,n.createElement)("div",{className:"gf-introduction-page"},(0,n.createElement)(d,null),(0,n.createElement)(p,null),(0,n.createElement)(f,null),(0,n.createElement)(E,null),(0,n.createElement)(h,null)),w=(e="#606060")=>(0,n.createElement)(m.Icon,{icon:()=>(0,n.createElement)("svg",{className:"gf-lock-svg",width:"11",height:"12",viewBox:"0 0 11 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{d:"M8.57143 4H9.71428C10.0299 4 10.2857 4.25584 10.2857 4.57143V11.4286C10.2857 11.7442 10.0299 12 9.71428 12H0.571429C0.25584 12 0 11.7442 0 11.4286V4.57143C0 4.25584 0.25584 4 0.571429 4H1.71429V3.42857C1.71429 1.53502 3.24931 0 5.14286 0C7.0364 0 8.57143 1.53502 8.57143 3.42857V4ZM4.57143 8.41851V9.71429H5.71429V8.41851C6.05589 8.22091 6.28571 7.8516 6.28571 7.42857C6.28571 6.79737 5.77406 6.28571 5.14286 6.28571C4.51166 6.28571 4 6.79737 4 7.42857C4 7.8516 4.22983 8.22091 4.57143 8.41851ZM7.42857 4V3.42857C7.42857 2.16621 6.4052 1.14286 5.14286 1.14286C3.88049 1.14286 2.85714 2.16621 2.85714 3.42857V4H7.42857Z",fill:e}))}),N=(e="#50575E")=>(0,n.createElement)(m.Icon,{icon:()=>(0,n.createElement)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{d:"M10.3333 3.00016H13.6667V4.3335H12.3333V13.0002C12.3333 13.3684 12.0349 13.6668 11.6667 13.6668H2.33333C1.96514 13.6668 1.66666 13.3684 1.66666 13.0002V4.3335H0.333328V3.00016H3.66666V1.00016C3.66666 0.631976 3.96514 0.333496 4.33333 0.333496H9.66666C10.0349 0.333496 10.3333 0.631976 10.3333 1.00016V3.00016ZM11 4.3335H2.99999V12.3335H11V4.3335ZM4.99999 1.66683V3.00016H8.99999V1.66683H4.99999Z",fill:e}))}),b=e=>{const t=gutenaFormsEntryDetails?.entry_data,a=(t?.form_id,gutenaFormsDashboard?.entry_view_url),r=(o(gutenaFormsDashboard?.entry_list_url)||gutenaFormsDashboard.entry_list_url,e=>e.value);return(0,n.createElement)("div",{className:"view-section no-panel-section"},(0,n.createElement)("div",{className:"entries-navigation"},(0,n.createElement)("span",{className:"entries-count"}," ",(0,n.createElement)("span",null,(0,l.__)("Entry ","gutena-forms"))," ",t.current_entry_sno+" / "+t.total_entries),!o(t.previous_entry_id)&&(0,n.createElement)("a",{href:a+""+t.previous_entry_id,className:"previous-entry"},((e="#2C3338")=>(0,n.createElement)(m.Icon,{icon:()=>(0,n.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("rect",{x:"-0.5",y:"0.5",width:"23",height:"23",rx:"4.5",transform:"matrix(-1 0 0 1 23 0)",fill:"white"}),(0,n.createElement)("path",{d:"M8.8713 11.2502L12.8943 7.22716L11.8337 6.1665L6 12.0002L11.8337 17.8337L12.8943 16.7731L8.8713 12.7502H18V11.2502H8.8713Z",fill:e}),(0,n.createElement)("rect",{x:"-0.5",y:"0.5",width:"23",height:"23",rx:"4.5",transform:"matrix(-1 0 0 1 23 0)",stroke:e}))}))()),!o(t.next_entry_id)&&(0,n.createElement)("a",{href:a+""+t.next_entry_id,className:"next-entry"},((e="#2C3338")=>(0,n.createElement)(m.Icon,{icon:()=>(0,n.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("rect",{x:"0.5",y:"0.5",width:"23",height:"23",rx:"4.5",fill:"white"}),(0,n.createElement)("path",{d:"M15.1287 11.2502L11.1057 7.22716L12.1663 6.1665L18 12.0002L12.1663 17.8337L11.1057 16.7731L15.1287 12.7502H6V11.2502H15.1287Z",fill:e}),(0,n.createElement)("rect",{x:"0.5",y:"0.5",width:"23",height:"23",rx:"4.5",stroke:e}))}))())),(0,n.createElement)("ul",null,Object.values(t.entry_data).map(((e,t)=>(0,n.createElement)("li",{className:"gfp-row",key:"view"+t},(0,n.createElement)("div",{className:"gfp-field-label"},e.label),(0,n.createElement)("div",null,":"),(0,n.createElement)("div",{className:"gfp-field-value",dangerouslySetInnerHTML:{__html:r(e)}}))))))},y=e=>{const t=gutenaFormsEntryDetails?.entry_data;return(0,n.createElement)("div",{className:"details-section no-panel-section"},(0,n.createElement)("h2",{className:"title"},(0,l.__)("Entry Details")),(0,n.createElement)("ul",{className:"details"},(0,n.createElement)("li",null,(0,n.createElement)("span",{className:"icon"},((e="#2C3338")=>(0,n.createElement)(m.Icon,{icon:()=>(0,n.createElement)("svg",{width:"12",height:"14",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{d:"M11.3333 13.6668H0.666667C0.29848 13.6668 0 13.3684 0 13.0002V1.00016C0 0.631976 0.29848 0.333496 0.666667 0.333496H11.3333C11.7015 0.333496 12 0.631976 12 1.00016V13.0002C12 13.3684 11.7015 13.6668 11.3333 13.6668ZM10.6667 12.3335V1.66683H1.33333V12.3335H10.6667ZM3.33333 3.66683H8.66667V5.00016H3.33333V3.66683ZM3.33333 6.3335H8.66667V7.66683H3.33333V6.3335ZM3.33333 9.00016H6.66667V10.3335H3.33333V9.00016Z",fill:e}))}))()),(0,n.createElement)("span",{className:"label"},(0,l.__)("Form :","gutena-forms")),(0,n.createElement)("span",{className:"description"},t.form_name)),(0,n.createElement)("li",null,(0,n.createElement)("span",{className:"icon"},((e="#2C3338")=>(0,n.createElement)(m.Icon,{icon:()=>(0,n.createElement)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{d:"M3.33333 0.666829H12V2.00016H3.33333V0.666829ZM1 2.3335C0.447713 2.3335 0 1.88578 0 1.3335C0 0.781209 0.447713 0.333496 1 0.333496C1.55229 0.333496 2 0.781209 2 1.3335C2 1.88578 1.55229 2.3335 1 2.3335ZM1 7.00016C0.447713 7.00016 0 6.55243 0 6.00016C0 5.4479 0.447713 5.00016 1 5.00016C1.55229 5.00016 2 5.4479 2 6.00016C2 6.55243 1.55229 7.00016 1 7.00016ZM1 11.6002C0.447713 11.6002 0 11.1524 0 10.6002C0 10.0479 0.447713 9.60016 1 9.60016C1.55229 9.60016 2 10.0479 2 10.6002C2 11.1524 1.55229 11.6002 1 11.6002ZM3.33333 5.3335H12V6.66683H3.33333V5.3335ZM3.33333 10.0002H12V11.3335H3.33333V10.0002Z",fill:e}))}))()),(0,n.createElement)("span",{className:"label"},(0,l.__)("Entry ID :","gutena-forms")),(0,n.createElement)("span",{className:"description"},t.entry_id)),(0,n.createElement)("li",null,(0,n.createElement)("span",{className:"icon"},((e="#2C3338")=>(0,n.createElement)(m.Icon,{icon:()=>(0,n.createElement)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{d:"M5.99992 0.666504V1.99984H9.99992V0.666504H11.3333V1.99984H13.9999C14.3681 1.99984 14.6666 2.29832 14.6666 2.6665V13.3332C14.6666 13.7014 14.3681 13.9998 13.9999 13.9998H1.99992C1.63173 13.9998 1.33325 13.7014 1.33325 13.3332V2.6665C1.33325 2.29832 1.63173 1.99984 1.99992 1.99984H4.66658V0.666504H5.99992ZM13.3333 6.6665H2.66659V12.6665H13.3333V6.6665ZM10.0236 7.42384L10.9664 8.3667L7.66658 11.6665L5.30957 9.3095L6.25237 8.3667L7.66658 9.7809L10.0236 7.42384ZM4.66658 3.33317H2.66659V5.33317H13.3333V3.33317H11.3333V3.99984H9.99992V3.33317H5.99992V3.99984H4.66658V3.33317Z",fill:e}))}))()),(0,n.createElement)("span",{className:"label"},(0,l.__)("Submitted :","gutena-forms")),(0,n.createElement)("span",{className:"description"},c(t.added_time,"@"))),(0,n.createElement)("li",null,(0,n.createElement)("span",{className:"icon"},((e="#2C3338")=>(0,n.createElement)(m.Icon,{icon:()=>(0,n.createElement)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{d:"M4.99992 0.666504V1.99984H8.99992V0.666504H10.3333V1.99984H12.9999C13.3681 1.99984 13.6666 2.29832 13.6666 2.6665V13.3332C13.6666 13.7014 13.3681 13.9998 12.9999 13.9998H0.999919C0.631732 13.9998 0.333252 13.7014 0.333252 13.3332V2.6665C0.333252 2.29832 0.631732 1.99984 0.999919 1.99984H3.66658V0.666504H4.99992ZM12.3333 7.33317H1.66659V12.6665H12.3333V7.33317ZM4.33325 8.6665V9.99984H2.99992V8.6665H4.33325ZM7.66658 8.6665V9.99984H6.33325V8.6665H7.66658ZM10.9999 8.6665V9.99984H9.66658V8.6665H10.9999ZM3.66658 3.33317H1.66659V5.99984H12.3333V3.33317H10.3333V4.6665H8.99992V3.33317H4.99992V4.6665H3.66658V3.33317Z",fill:e}))}))()),(0,n.createElement)("span",{className:"label"},(0,l.__)("Modified :","gutena-forms")),(0,n.createElement)("span",{className:"description"},c(t.modified_time,"@"))),!o(t.user_display_name)&&(0,n.createElement)("li",null,(0,n.createElement)("span",{className:"icon"},((e="#2C3338")=>(0,n.createElement)(m.Icon,{icon:()=>(0,n.createElement)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{d:"M13.3334 14.6665H12.0001V13.3332C12.0001 12.2286 11.1047 11.3332 10.0001 11.3332H6.00008C4.89551 11.3332 4.00008 12.2286 4.00008 13.3332V14.6665H2.66675V13.3332C2.66675 11.4922 4.15913 9.99984 6.00008 9.99984H10.0001C11.841 9.99984 13.3334 11.4922 13.3334 13.3332V14.6665ZM8.00008 8.6665C5.79094 8.6665 4.00008 6.87564 4.00008 4.6665C4.00008 2.45736 5.79094 0.666504 8.00008 0.666504C10.2092 0.666504 12.0001 2.45736 12.0001 4.6665C12.0001 6.87564 10.2092 8.6665 8.00008 8.6665ZM8.00008 7.33317C9.47282 7.33317 10.6667 6.13926 10.6667 4.6665C10.6667 3.19374 9.47282 1.99984 8.00008 1.99984C6.52732 1.99984 5.33341 3.19374 5.33341 4.6665C5.33341 6.13926 6.52732 7.33317 8.00008 7.33317Z",fill:e}))}))()),(0,n.createElement)("span",{className:"label"},(0,l.__)("User :","gutena-forms")),(0,n.createElement)("span",{className:"description"},t.user_display_name))))},C=e=>{let t=gutenaFormsEntryDetails?.entry_data?.related_entry;return t=o(t)?(0,l.__)("No entries found","gutena-forms"):parseInt(t)+(0,l.__)(" entries found","gutena-forms"),(0,n.createElement)(m.PanelBody,{icon:w(),iconPosition:"right",className:"related-section ",title:(0,l.__)("Related Entries"),initialOpen:!0},(0,n.createElement)("p",null,(0,l.__)("The user who created this entry also submitted the entries below","gutena-forms")),(0,n.createElement)("p",null,t))},H=()=>{},F=({onClickFunc:e=H})=>(0,n.createElement)("div",{className:"notes-section no-panel-section"},(0,n.createElement)("h2",{className:"title"},(0,l.__)("Notes")," ",w()),(0,n.createElement)(m.Button,{label:(0,l.__)("Add Notes","gutena-forms"),variant:"secondary",onClick:()=>e(),disabled:!1},(0,l.__)("Add Notes","gutena-forms"))),V=e=>{const[t,a]=(0,n.useState)("In progress");return(0,n.createElement)(m.PanelBody,{icon:w(),iconPosition:"right",className:"status-section ",title:(0,l.__)("Status"),initialOpen:!0},(0,n.createElement)(m.SelectControl,{value:t,onChange:e=>a(e),options:[{label:(0,l.__)("Custom status"),value:"inprogress"}],disabled:!0}))},k=e=>{const[t,a]=(0,n.useState)([(0,l.__)("Tag 1","gutena-forms"),(0,l.__)("Tag 2","gutena-forms")]);return(0,n.createElement)(m.PanelBody,{icon:w(),iconPosition:"right",className:"tags-section ",title:(0,l.__)("Tags"),initialOpen:!0},(0,n.createElement)(m.FormTokenField,{label:(0,l.__)("Add new tag","gutena-forms"),value:t,suggestions:t,onChange:e=>a(e),disabled:!0}))},x=()=>{},D=({onClickFunc:e=x})=>(0,n.createElement)("div",{className:"gfp-entry-page"},(0,n.createElement)("div",{className:"left-section"},(0,n.createElement)(b,null),(0,n.createElement)("div",{onClick:()=>e()},(0,n.createElement)(F,{onClickFunc:e}))),(0,n.createElement)("div",{className:"right-section"},(0,n.createElement)(y,null),(0,n.createElement)("div",{onClick:()=>e()},(0,n.createElement)(V,null),(0,n.createElement)(k,null),(0,n.createElement)(C,null)))),B=window.wp.blockEditor,M=()=>{},S=({onClickFunc:e=M})=>{const[t,a]=(0,n.useState)({availableStatus:[{title:(0,l.__)("Unread","gutena-forms"),slug:"unread",color:"#D2D2D2"},{title:(0,l.__)("Read","gutena-forms"),slug:"read",color:"#7b68ee"},{title:(0,l.__)("Closed","gutena-forms"),slug:"closed",color:"#67cb48"},{title:(0,l.__)("Hot","gutena-forms"),slug:"hot",color:"#FF0000"},{title:(0,l.__)("Warm","gutena-forms"),slug:"warm",color:"#FFC700"},{title:(0,l.__)("Cold","gutena-forms"),slug:"cold",color:"#0047FF"}]}),r=[{name:(0,l.__)("red","gutena-forms"),color:"#E83737"},{name:(0,l.__)("dark red","gutena-forms"),color:"#8B0000"},{name:(0,l.__)("brown","gutena-forms"),color:"#800000"},{name:(0,l.__)("blue","gutena-forms"),color:"#0231e8"},{name:(0,l.__)("navy","gutena-forms"),color:"#000080"},{name:(0,l.__)("green","gutena-forms"),color:"#1bbc9c"},{name:(0,l.__)("violet","gutena-forms"),color:"#bf55ec"},{name:(0,l.__)("green","gutena-forms"),color:"#006400"},{name:(0,l.__)("grey","gutena-forms"),color:"#667684"},{name:(0,l.__)("dark slate grey","gutena-forms"),color:"#2F4F4F"},{name:(0,l.__)("magenta","gutena-forms"),color:"#8B008B"},{name:(0,l.__)("violet red","gutena-forms"),color:"#C71585"},{name:(0,l.__)("teal","gutena-forms"),color:"#008080"}];return(0,n.createElement)("div",{className:"gfp-settings-section"},(0,n.createElement)(m.__experimentalToolsPanel,{className:"status-tool-panel",resetAll:()=>{},panelId:"status-color"},t.availableStatus.map(((t,a)=>{let s={backgroundColor:o(t?.color)?"#D2D2D233":t.color+"33"};return(0,n.createElement)(m.__experimentalHStack,{spacing:0,className:"action-row "+t.slug,key:"action-row"+a,style:s},(0,n.createElement)(B.__experimentalColorGradientSettingsDropdown,{settings:[{colorValue:t?.color,onColorChange:e=>{}}],disableCustomColors:!1,enableAlpha:!0,panelId:"status-color",colors:r,title:(0,l.__)("Status color","gutena-forms"),disabled:!0}),(0,n.createElement)(m.TextControl,{value:t?.title,onChange:e=>{},placeholder:(0,l.__)("Status Title","gutena-forms"),style:s,disabled:!0}),!["unread","read"].includes(t.slug)&&(0,n.createElement)(m.Button,{variant:"tertiary",className:"delete-btn",isDestructive:!0,onClick:()=>e(),title:(0,l.__)("Delete status","gutena-forms"),icon:N(),disabled:!1}))}))),(0,n.createElement)("div",{className:"add-save-row"},(0,n.createElement)("div",null,(0,n.createElement)(m.Button,{label:(0,l.__)("Add Status","gutena-forms"),variant:"secondary",onClick:()=>e(),disabled:!1},(0,l.__)("Add Status","gutena-forms"))),(0,n.createElement)("div",null,(0,n.createElement)(m.Button,{label:(0,l.__)("Save Status","gutena-forms"),variant:"primary",className:"save-btn",disabled:!1,onClick:()=>e()},(0,l.__)("Save","gutena-forms")))))},Z=window.wp.coreData,L=window.wp.data,I=()=>{},T=({onClickFunc:e=I})=>{const t=(0,L.useSelect)((e=>{let t=e(Z.store).getUsers({roles:["administrator","author","editor","shop_manager"]});if(!o(t)){let e={administrator:[],author:[],editor:[],shop_manager:[]};t.forEach((t=>{t.roles.includes("administrator")?e.administrator.push(t):t.roles.includes("author")?e.author.push(t):t.roles.includes("editor")?e.editor.push(t):t.roles.includes("shop_manager")&&e.shop_manager.push(t)})),t=[...e.administrator,...e.author,...e.editor,...e.shop_manager]}return t}),[]);if(o(t))return!1;const a=[{label:(0,l.__)("None","gutena-forms"),value:""}];return(0,n.createElement)("div",{className:"user-acess-tab gfp-settings-section"},(0,n.createElement)("div",{className:"user-acess"},t.map(((e,t)=>{return(0,n.createElement)("div",{className:"user-control-wrapper",key:"user-row-"+e.id},(0,n.createElement)("div",{className:"username-role-row"},(0,n.createElement)("span",{className:"username"},e.username),(0,n.createElement)("span",{className:"description"}," ( ",(r=e.roles[0],l=o(r)?r:r.toLowerCase().replace(/_/g," "),o(l)?l:l[0].toUpperCase()+l.slice(1))," )")),(0,n.createElement)(m.SelectControl,{label:"",value:"",onChange:e=>{},disabled:!0,__nextHasNoMarginBottom:!0},a.map((e=>(0,n.createElement)("option",{value:e.value,key:"option"+e.value},e.label)))));var l,r}))),(0,n.createElement)("div",{className:"add-save-row"},(0,n.createElement)(m.Button,{label:(0,l.__)("Save user access","gutena-forms"),variant:"primary",className:"save-btn",disabled:!1,onClick:()=>e()},(0,l.__)("Save","gutena-forms"))))},O=()=>{},P=({onClickFunc:e=O})=>{const[t,a]=(0,n.useState)({availableTags:[{title:(0,l.__)("New","gutena-forms"),slug:"new"},{title:(0,l.__)("Good","gutena-forms"),slug:"good"},{title:(0,l.__)("Best","gutena-forms"),slug:"best"},{title:(0,l.__)("Trending","gutena-forms"),slug:"trending",color:"#FF0000"},{title:(0,l.__)("Unique","gutena-forms"),slug:"unique"}]});return(0,n.createElement)("div",{className:"gfp-settings-section"},(0,n.createElement)("div",{className:"tag-list"},t.availableTags.map(((e,t)=>(0,n.createElement)(m.__experimentalHStack,{spacing:0,className:"action-row",key:"action-row"+t},(0,n.createElement)(m.TextControl,{value:e?.title,onChange:e=>{},placeholder:(0,l.__)("Tags Title","gutena-forms"),disabled:!0}),(0,n.createElement)(m.Button,{variant:"tertiary",className:"delete-btn",isDestructive:!0,onClick:()=>{},title:(0,l.__)("Delete tag","gutena-forms"),icon:N(),disabled:!0}))))),(0,n.createElement)("div",{className:"add-save-row"},(0,n.createElement)("div",null,(0,n.createElement)(m.Button,{label:(0,l.__)("Add Tags","gutena-forms"),variant:"secondary",onClick:()=>e(),disabled:!1},(0,l.__)("Add Tags","gutena-forms"))),(0,n.createElement)("div",null,(0,n.createElement)(m.Button,{label:(0,l.__)("Save Tags","gutena-forms"),variant:"primary",className:"save-btn",onClick:()=>e(),disabled:!1},(0,l.__)("Save","gutena-forms")))))},A=()=>{},R=({onClickFunc:e=A})=>{const t={status:S,tags:P,useraccess:T},a=gutenaFormsSettingsTab.tabs.map((e=>({...e,className:e.name,component:t[e.name]})));return(0,n.createElement)("div",{className:"gfp-settings-page"},(0,n.createElement)(m.TabPanel,{className:"gfp-tab-panel",activeClass:"active-tab",onSelect:()=>{},tabs:a},(t=>(0,n.createElement)(n.Fragment,null,(0,n.createElement)("h2",{className:"title"},t.heading," ",w()),(0,n.createElement)("p",{className:"description"},t.description),(0,n.createElement)("div",{onClick:()=>e()},(0,n.createElement)(t.component,{onClickFunc:e}))))))},q=()=>(0,n.createElement)("div",{className:"gutena-forms-knowledge-base"},(0,n.createElement)("div",{className:"gutena-docs"},(0,n.createElement)("div",{className:"gutena-details"},(0,n.createElement)("h2",{className:"gutena-title"},gutenaFormsDoc?.topics?.title),(0,n.createElement)("ol",{className:"gutena-topics"},gutenaFormsDoc?.topics?.items.map(((e,t)=>(0,n.createElement)("li",{className:"gutena-topic",key:t},(0,n.createElement)("a",{className:"gutena-topic-link",href:e?.link,target:"_blank"},e?.heading),(0,n.createElement)("p",{className:"gutena-topic-description"},e?.description))))))),(0,n.createElement)("div",{className:"gutena-support"},(0,n.createElement)("div",{className:"gutena-details"},(0,n.createElement)("h2",{className:"gutena-title"},gutenaFormsDoc?.support?.title),(0,n.createElement)("p",{className:"gutena-description"},gutenaFormsDoc?.support?.description),(0,n.createElement)("div",{className:"gf-btn-group"},(0,n.createElement)(m.Button,{href:gutenaFormsDoc?.support?.documentation_link,target:"_blank",className:"gf-dark-btn",variant:"primary"},gutenaFormsDoc?.support?.documentation_text),(0,n.createElement)(m.Button,{href:gutenaFormsDashboard?.support_link,target:"_blank",className:"gf-primary-btn",variant:"primary"},gutenaFormsDoc?.support?.link_text)))),(0,n.createElement)("div",{className:"gutena-changelog"},(0,n.createElement)("div",{className:"gutena-details"},(0,n.createElement)("h2",{className:"gutena-title"},gutenaFormsDoc?.changelog?.title),(0,n.createElement)("p",{className:"gutena-description",dangerouslySetInnerHTML:{__html:gutenaFormsDoc?.changelog?.description}}))));s()((()=>{if("undefined"==typeof gutenaFormsDashboard)return console.log("dashboard data missing"),"";let e=document.getElementById("gfp-dashboard-navigation");if(!o(e)&&!o(gutenaFormsDashboard?.page_url)&&!o(gutenaFormsDashboard?.dashboard_menu)){(0,n.createRoot)(e).render((0,n.createElement)(i,null));const t=o(gutenaFormsDashboard.pagetype)?"":gutenaFormsDashboard.pagetype,a=gutenaFormsDashboard.dashboard_menu.map((e=>e.slug));""!==t&&a.includes(t)||(e=document.getElementById("gfp-page-breadcrumb"),o(e))||(0,n.createRoot)(e).render((0,n.createElement)(g,null))}if("undefined"==typeof gutenaFormsIntroduction||(e=document.getElementById("gfp-page-introduction"),o(e))||(0,n.createRoot)(e).render((0,n.createElement)(v,null)),"undefined"==typeof gutenaFormsDoc||(e=document.getElementById("gfp-page-doc"),o(e))||(0,n.createRoot)(e).render((0,n.createElement)(q,null)),!o(gutenaFormsDashboard?.is_gutena_forms_pro)&&"0"===gutenaFormsDashboard.is_gutena_forms_pro){const t=()=>{let e=document.querySelector("#gutena-forms-go-pro-modal");o(e)||(e.style.display="block")};"undefined"==typeof gutenaFormsEntryDetails||(e=document.getElementById("gfp-page-viewentry"),o(e))||(0,n.createRoot)(e).render((0,n.createElement)(D,{onClickFunc:t})),e=document.getElementById("gfp-page-settings"),o(e)||"undefined"==typeof gutenaFormsSettingsTab||null===gutenaFormsSettingsTab||(0,n.createRoot)(e).render((0,n.createElement)(R,{onClickFunc:t}))}}))}},a={};function n(e){var l=a[e];if(void 0!==l)return l.exports;var r=a[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,a,l,r)=>{if(!a){var s=1/0;for(m=0;m<e.length;m++){for(var[a,l,r]=e[m],o=!0,c=0;c<a.length;c++)(!1&r||s>=r)&&Object.keys(n.O).every((e=>n.O[e](a[c])))?a.splice(c--,1):(o=!1,r<s&&(s=r));if(o){e.splice(m--,1);var i=l();void 0!==i&&(t=i)}}return t}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[a,l,r]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var l,r,[s,o,c]=a,i=0;if(s.some((t=>0!==e[t]))){for(l in o)n.o(o,l)&&(n.m[l]=o[l]);if(c)var m=c(n)}for(t&&t(a);i<s.length;i++)r=s[i],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(m)},a=globalThis.webpackChunkgutena_forms=globalThis.webpackChunkgutena_forms||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var l=n.O(void 0,[431],(()=>n(586)));l=n.O(l)})();