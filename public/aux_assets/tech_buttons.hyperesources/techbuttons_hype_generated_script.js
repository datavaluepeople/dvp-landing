//	HYPE.documents["tech_buttons"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="tech_buttons.hyperesources",f="tech_buttons",g="techbuttons_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/techbuttons_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_664F||null!=window.HYPE_dtl_664F)||false==!0||null!=c&&10>c;a=!0==d?"HYPE-664.full.min.js":"HYPE-664.thin.min.js";c=!0==d?"F":"T";d=d?"":
"";if(false==!1&&(a=k("HYPE_664"+c,"HYPE_dtl_664"+c,a,d),false==!0&&(a=a||k("HYPE_w_664","HYPE_wdtl_664","HYPE-664.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_664","HYPE-664.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=document.getElementsByTagName("div"),
b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"scene_link",source:"function(hypeDocument, element, event) {\n var checkHash = function() { \n var hash = window.location.hash.substring(1); \n for(var i = 0; i < hypeDocument.sceneNames().length; i++) {\n if(hypeDocument.sceneNames()[i] == hash) {\n hypeDocument.showSceneNamed(hash);\n break;\n }\n }\n }; \n \n if (window.loadedHashLocation != true) { \n window.loadedHashLocation = true; \n checkHash(); \n window.onhashchange = checkHash; \n }\n \n window.location.hash = \"#\" + hypeDocument.currentSceneName();\n\t\n}",identifier:"65"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_664"+c](f,g,{"3":{p:1,n:"ico_pytorch_grey.png",g:"154",t:"@1x"},"12":{p:1,n:"ico_postgresql_grey.png",g:"173",t:"@1x"},"21":{p:1,n:"ico_docker_grey_2x.png",g:"156",t:"@2x"},"4":{p:1,n:"ico_docker_grey.png",g:"156",t:"@1x"},"30":{p:1,n:"ico_react_color_2x.png",g:"166",t:"@2x"},"13":{p:1,n:"ico_postgresql_color.png",g:"175",t:"@1x"},"5":{p:1,n:"ico_docker_color.png",g:"158",t:"@1x"},"22":{p:1,n:"ico_googlecloud_color_2x.png",g:"171",t:"@2x"},"6":{p:1,n:"ico_airflow_grey.png",g:"160",t:"@1x"},"31":{p:1,n:"ico_react_grey_2x.png",g:"164",t:"@2x"},"14":{p:1,n:"ico_typescript_grey.png",g:"178",t:"@1x"},"7":{p:1,n:"ico_airflow_color.png",g:"162",t:"@1x"},"23":{p:1,n:"ico_googlecloud_grey_2x.png",g:"169",t:"@2x"},"32":{p:1,n:"ico_terraform_color_2x.png",g:"184",t:"@2x"},"15":{p:1,n:"ico_typescript_color.png",g:"180",t:"@1x"},"8":{p:1,n:"ico_react_grey.png",g:"164",t:"@1x"},"24":{p:1,n:"ico_postgresql_color_2x.png",g:"175",t:"@2x"},"9":{p:1,n:"ico_react_color.png",g:"166",t:"@1x"},"33":{p:1,n:"ico_terraform_grey_2x.png",g:"182",t:"@2x"},"16":{p:1,n:"ico_terraform_grey.png",g:"182",t:"@1x"},"25":{p:1,n:"ico_postgresql_grey_2x.png",g:"173",t:"@2x"},"34":{p:1,n:"ico_typescript_color_2x.png",g:"180",t:"@2x"},"17":{p:1,n:"ico_terraform_color.png",g:"184",t:"@1x"},"26":{p:1,n:"ico_python_color_2x.png",g:"148",t:"@2x"},"35":{p:1,n:"ico_typescript_grey-2_2x.png",g:"178",t:"@2x"},"18":{p:1,n:"ico_airflow_color_2x.png",g:"162",t:"@2x"},"27":{p:1,n:"ico_python_grey_2x.png",g:"144",t:"@2x"},"19":{p:1,n:"ico_airflow_grey_2x.png",g:"160",t:"@2x"},"28":{p:1,n:"ico_pytorch_color_2x.png",g:"153",t:"@2x"},"-1":{n:"PIE.htc"},"29":{p:1,n:"ico_pytorch_grey_2x.png",g:"154",t:"@2x"},"-2":{n:"blank.gif"},"10":{p:1,n:"ico_googlecloud_grey.png",g:"169",t:"@1x"},"0":{p:1,n:"ico_python_grey.png",g:"144",t:"@1x"},"1":{p:1,n:"ico_python_color.png",g:"148",t:"@1x"},"11":{p:1,n:"ico_googlecloud_color.png",g:"171",t:"@1x"},"2":{p:1,n:"ico_pytorch_color.png",g:"153",t:"@1x"},"20":{p:1,n:"ico_docker_color-2_2x.png",g:"158",t:"@2x"}},l,[],e,[{n:"python",o:"1",X:[0]},{n:"pytorch",o:"17",X:[1]},{n:"docker",o:"20",X:[2]},{n:"airflow",o:"23",X:[3]},{n:"react",o:"26",X:[4]},{n:"googlecloud",o:"29",X:[5]},{n:"postgresql",o:"32",X:[6]},{n:"typescript",o:"35",X:[7]},{n:"terraform",o:"38",X:[8]}],
[{A:{a:[{p:4,h:"65"}]},o:"3",p:"600px",cA:false,Y:30,Z:30,c:"#FFF",L:[],bY:1,d:30,U:{},T:{"147":{q:false,z:0,i:"147",n:"action",a:[{y:0,i:"h",s:"148",z:0,o:"185",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{y:0,i:"h",s:"144",z:0,o:"185",f:"c"}],f:30,b:[]}},bZ:180,O:["185"],n:"Untitled Layout","_":0,v:{"185":{p:"no-repeat",c:30,q:"100% 100%",d:30,r:"inline",cQ:0.9,aG:"Python",cR:0.9,aP:"pointer",h:"144",j:"absolute",x:"visible",aA:{a:[{j:"https://www.python.org",p:5,k:true}]},k:"div",dB:"img",z:1,aC:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"2"}]},a:0,aD:{a:[{b:"147",p:3,z:false,symbolOid:"2"}]},b:0}}},{A:{a:[{p:4,h:"65"}]},o:"19",p:"600px",cA:false,Y:30,Z:30,c:"#FFF",L:[],bY:1,d:30,U:{},T:{"152":{q:false,z:0,i:"152",n:"action",a:[{y:0,i:"h",s:"153",z:0,o:"186",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{y:0,i:"h",s:"154",z:0,o:"186",f:"c"}],f:30,b:[]}},bZ:180,O:["186"],n:"Untitled Layout","_":1,v:{"186":{p:"no-repeat",c:30,q:"100% 100%",d:30,r:"inline",cQ:0.9,aG:"Pytorch",cR:0.9,aP:"pointer",h:"154",j:"absolute",x:"visible",aA:{a:[{j:"https://pytorch.org",p:5,k:true}]},k:"div",dB:"img",z:1,aC:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"18"}]},a:0,aD:{a:[{b:"152",p:3,z:false,symbolOid:"18"}]},b:0}}},{A:{a:[{p:4,h:"65"}]},o:"22",p:"600px",cA:false,Y:30,Z:30,c:"#FFF",L:[],bY:1,d:30,U:{},T:{"157":{q:false,z:0,i:"157",n:"action",a:[{y:0,i:"h",s:"158",z:0,o:"187",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{y:0,i:"h",s:"156",z:0,o:"187",f:"c"}],f:30,b:[]}},bZ:180,O:["187"],n:"Untitled Layout","_":2,v:{"187":{p:"no-repeat",c:30,q:"100% 100%",d:30,r:"inline",cQ:0.9,aG:"Docker",cR:0.9,aP:"pointer",h:"156",j:"absolute",x:"visible",aA:{a:[{j:"https://www.docker.com",p:5,k:true}]},k:"div",dB:"img",z:1,aC:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"18"}]},a:0,aD:{a:[{b:"157",p:3,z:false,symbolOid:"21"}]},b:0}}},{A:{a:[{p:4,h:"65"}]},o:"25",p:"600px",cA:false,Y:30,Z:30,c:"#FFF",L:[],bY:1,d:30,U:{},T:{"161":{q:false,z:0,i:"161",n:"action",a:[{y:0,i:"h",s:"162",z:0,o:"188",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{y:0,i:"h",s:"160",z:0,o:"188",f:"c"}],f:30,b:[]}},bZ:180,O:["188"],n:"Untitled Layout","_":3,v:{"188":{p:"no-repeat",c:30,q:"100% 100%",d:30,r:"inline",cQ:0.9,aG:"Airflow",cR:0.9,aP:"pointer",h:"160",j:"absolute",x:"visible",aA:{a:[{j:"https://airflow.apache.org",p:5,k:true}]},k:"div",dB:"img",z:1,aC:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"18"}]},a:0,aD:{a:[{b:"161",p:3,z:false,symbolOid:"24"}]},b:0}}},{A:{a:[{p:4,h:"65"}]},o:"28",p:"600px",cA:false,Y:30,Z:30,c:"#FFF",L:[],bY:1,d:30,U:{},T:{"165":{q:false,z:0,i:"165",n:"action",a:[{y:0,i:"h",s:"166",z:0,o:"189",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{y:0,i:"h",s:"164",z:0,o:"189",f:"c"}],f:30,b:[]}},bZ:180,O:["189"],n:"Untitled Layout","_":4,v:{"189":{p:"no-repeat",c:30,q:"100% 100%",d:30,r:"inline",cQ:0.9,aG:"React",cR:0.9,aP:"pointer",h:"164",j:"absolute",x:"visible",aA:{a:[{j:"https://reactjs.org",p:5,k:true}]},k:"div",dB:"img",z:1,aC:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"18"}]},a:0,aD:{a:[{b:"165",p:3,z:false,symbolOid:"27"}]},b:0}}},{A:{a:[{p:4,h:"65"}]},o:"31",p:"600px",cA:false,Y:30,Z:30,c:"#FFF",L:[],bY:1,d:30,U:{},T:{"170":{q:false,z:0,i:"170",n:"action",a:[{y:0,i:"h",s:"171",z:0,o:"190",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{y:0,i:"h",s:"169",z:0,o:"190",f:"c"}],f:30,b:[]}},bZ:180,O:["190"],n:"Untitled Layout","_":5,v:{"190":{p:"no-repeat",c:30,q:"100% 100%",d:30,r:"inline",cQ:0.9,aG:"Google Cloud",cR:0.9,aP:"pointer",h:"169",j:"absolute",x:"visible",aA:{a:[{j:"https://cloud.google.com",p:5,k:true}]},k:"div",dB:"img",z:1,aC:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"18"}]},a:0,aD:{a:[{b:"170",p:3,z:false,symbolOid:"30"}]},b:0}}},{A:{a:[{p:4,h:"65"}]},o:"34",p:"600px",cA:false,Y:30,Z:30,c:"#FFF",L:[],bY:1,d:30,U:{},T:{"174":{q:false,z:0,i:"174",n:"action",a:[{y:0,i:"h",s:"175",z:0,o:"191",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{y:0,i:"h",s:"173",z:0,o:"191",f:"c"}],f:30,b:[]}},bZ:180,O:["191"],n:"Untitled Layout","_":6,v:{"191":{p:"no-repeat",c:30,q:"100% 100%",d:30,r:"inline",cQ:0.9,aG:"Postgresql",cR:0.9,aP:"pointer",h:"173",j:"absolute",x:"visible",aA:{a:[{j:"https://www.postgresql.org",p:5,k:true}]},k:"div",dB:"img",z:1,aC:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"18"}]},a:0,aD:{a:[{b:"174",p:3,z:false,symbolOid:"33"}]},b:0}}},{A:{a:[{p:4,h:"65"}]},o:"37",p:"600px",cA:false,Y:30,Z:30,c:"#FFF",L:[],bY:1,d:30,U:{},T:{"179":{q:false,z:0,i:"179",n:"action",a:[{y:0,i:"h",s:"180",z:0,o:"192",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{y:0,i:"h",s:"178",z:0,o:"192",f:"c"}],f:30,b:[]}},bZ:180,O:["192"],n:"Untitled Layout","_":7,v:{"192":{p:"no-repeat",c:30,q:"100% 100%",d:30,r:"inline",cQ:0.9,aG:"Typescript",cR:0.9,aP:"pointer",h:"178",j:"absolute",x:"visible",aA:{a:[{j:"https://www.typescriptlang.org",p:5,k:true}]},k:"div",dB:"img",z:1,aC:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"18"}]},a:0,aD:{a:[{b:"179",p:3,z:false,symbolOid:"36"}]},b:0}}},{A:{a:[{p:4,h:"65"}]},o:"40",p:"600px",cA:false,Y:30,Z:30,c:"#FFF",L:[],bY:1,d:30,U:{},T:{"183":{q:false,z:0,i:"183",n:"action",a:[{y:0,i:"h",s:"184",z:0,o:"193",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{y:0,i:"h",s:"182",z:0,o:"193",f:"c"}],f:30,b:[]}},bZ:180,O:["193"],n:"Untitled Layout","_":8,v:{"193":{p:"no-repeat",c:30,q:"100% 100%",d:30,r:"inline",cQ:0.9,aG:"Terraform",cR:0.9,aP:"pointer",h:"182",j:"absolute",x:"visible",aA:{a:[{j:"https://www.terraform.io",p:5,k:true}]},k:"div",dB:"img",z:1,aC:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"18"}]},a:0,aD:{a:[{b:"183",p:3,z:false,symbolOid:"39"}]},b:0}}}],{},h,{},null,false,false,-1,true,true,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
