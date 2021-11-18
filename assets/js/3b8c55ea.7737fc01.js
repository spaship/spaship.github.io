"use strict";(self.webpackChunk_spaship_documentation=self.webpackChunk_spaship_documentation||[]).push([[217],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),d=l(a),h=i,u=d["".concat(p,".").concat(h)]||d[h]||c[h]||s;return a?n.createElement(u,o(o({ref:t},m),{},{components:a})):n.createElement(u,o({ref:t},m))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,o=new Array(s);o[0]=d;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var l=2;l<s;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},872:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var n=a(7462),i=a(3366),s=(a(7294),a(3905)),o=["components"],r={id:"installation",title:"Installation & getting acquainted with the CLI"},p={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation & getting acquainted with the CLI",description:"One of the most handy tools of the SPAship toolchain is the SPAship CLI.",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",editUrl:"https://github.com/spaship/spaship/tree/master/docusaurus/docs/installation.md",version:"current",frontMatter:{id:"installation",title:"Installation & getting acquainted with the CLI"},sidebar:"someSidebar",previous:{title:"Beginner's Guide to the SPAship Manager",permalink:"/docs/spaship-manager"},next:{title:"Configuration",permalink:"/docs/configuration"}},l=[{value:"Prerequisites of SPAship CLI:",id:"prerequisites-of-spaship-cli",children:[]},{value:"Installation of SPAship cli :",id:"installation-of-spaship-cli-",children:[]},{value:"SPA initialization :",id:"spa-initialization-",children:[{value:"spaship init:",id:"spaship-init",children:[]}]},{value:"Packaging SPA:",id:"packaging-spa",children:[]},{value:"spaship deploy:",id:"spaship-deploy",children:[]},{value:"Setting up spashiprc.yml",id:"setting-up-spashiprcyml",children:[{value:"<strong>spashiprc file demo:</strong>",id:"spashiprc-file-demo",children:[]}]}],m={toc:l};function c(e){var t=e.components,r=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"One of the most handy tools of the SPAship toolchain is the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/spaship/spaship/tree/master/packages/cli"},(0,s.kt)("strong",{parentName:"a"},"SPAship CLI")),". "),(0,s.kt)("p",null,"SPAship is build from scratch with an idea that developers at RedHat can deploy and manage SPAs in any redhat customer portal website/muilti-level websites.But it being open source any organization can get benefits of it. It provides you with some of the most simple yet developer friendly means to initialize and deploy your SPAs to your portal. "),(0,s.kt)("h2",{id:"prerequisites-of-spaship-cli"},"Prerequisites of SPAship CLI:"),(0,s.kt)("p",null,"You would need ",(0,s.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"NodeJS")," and NPM installed on your local system."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version >= 12.13.0 or above (which can be checked by running node -v)."),(0,s.kt)("li",{parentName:"ul"},"NPM >= 6 or above")),(0,s.kt)("h2",{id:"installation-of-spaship-cli-"},"Installation of SPAship cli :"),(0,s.kt)("p",null,"To install the SPAship Command Line Interface on your local system run :"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"$ npm install -g @spaship/cli")),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The  -g  flag installs the CLI globally (accessible from any directory via the command line). To install it under a local directory, simply remove the  -g  flag."))),(0,s.kt)("p",null,"Once you have the SPAship CLI installed you would be one step closer to SPA Deployment. Let have a look at CLI commands to help you get started :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"To see an overview of the SPAship CLI run: ",(0,s.kt)("strong",{parentName:"li"},"$ spaship"))),(0,s.kt)("h1",{id:"image-alt-text"},(0,s.kt)("img",{alt:"image alt text",src:a(7456).Z})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"To check which version of the SPAship CLI is currently running: ",(0,s.kt)("strong",{parentName:"li"},"$ spaship (-v|--version|version)"))),(0,s.kt)("h1",{id:"image-alt-text-1"},(0,s.kt)("img",{alt:"image alt text",src:a(8325).Z})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"To see detailed information about any command: ",(0,s.kt)("strong",{parentName:"li"},"$ spaship --help ","[COMMAND]"))),(0,s.kt)("h1",{id:"image-alt-text-2"},(0,s.kt)("img",{alt:"image alt text",src:a(8072).Z})),(0,s.kt)("h1",{id:"image-alt-text-3"},(0,s.kt)("img",{alt:"image alt text",src:a(3881).Z})),(0,s.kt)("h2",{id:"spa-initialization-"},"SPA initialization :"),(0,s.kt)("p",null,"Getting Started:"),(0,s.kt)("p",null,"For this demo, let\u2019s consider the example of an open source NodeJS project consisting of a demo single page application which we would be initializing and deploying via SPAship.\nWe would be using a generic SPA repository for this example with the following directory structure. If you are interested in learning how we scaffolded it you can check the document linked ",(0,s.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1MsHp8runNJbSNiame8Za5NccEVG9M8jGnh7MydPqR-0/edit"},"here"),"."),(0,s.kt)("h1",{id:"image-alt-text-4"},(0,s.kt)("img",{alt:"image alt text",src:a(8306).Z})),(0,s.kt)("p",null,"If we want to deploy the above SPA at a particular path (/demo) within an existing portal.We have to init the spaship.Now this path for SPA doesn't exists."),(0,s.kt)("h3",{id:"spaship-init"},"spaship init:"),(0,s.kt)("p",null,"The first step to getting started with SPAship is the ",(0,s.kt)("strong",{parentName:"p"},"spaship init")," command. Executing it without any arguments invokes an interactive prompt which will ask you a few questions and generate a spaship.yaml config file. This command must be executed within the SPA folder using cli . The answers to these questions can also be passed in as CLI arguments while executing the command. Here\u2019s a screenshot of the command\u2019s help description:"),(0,s.kt)("h1",{id:"image-alt-text-5"},(0,s.kt)("img",{alt:"image alt text",src:a(394).Z})),(0,s.kt)("p",null,"There are 3 ways to use the SPAship CLI to initialize a new SPA with the ",(0,s.kt)("strong",{parentName:"p"},"spaship init")," command, these are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Using the interactive mode:")),(0,s.kt)("h1",{id:"image-alt-text-6"},(0,s.kt)("img",{alt:"image alt text",src:a(7744).Z})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Using long parameters: ")),(0,s.kt)("h1",{id:"image-alt-text-7"},(0,s.kt)("img",{alt:"image alt text",src:a(8738).Z})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Using short parameters:")),(0,s.kt)("h1",{id:"image-alt-text-8"},(0,s.kt)("img",{alt:"image alt text",src:a(3364).Z})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note")," -  The --overwrite flag used in the last two examples is used only when your project already has an existing spaship.yaml file, which we want to overwrite.\nRun ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"cat spaship.yaml"))," command to view the content . spaship.yaml file contains the info which developer entered about the SPA in spaship init command."),(0,s.kt)("h2",{id:"packaging-spa"},"Packaging SPA:"),(0,s.kt)("p",null,"Before using the deploy command the first thing that you need is a package containing your SPA. We can use ",(0,s.kt)("strong",{parentName:"p"},"npm pack")," command.\nnpm pack is built into npm , all it does is it pacakges up your spa and make it ready for deployment."),(0,s.kt)("h1",{id:"image-alt-text-9"},(0,s.kt)("img",{alt:"image alt text",src:a(327).Z})),(0,s.kt)("p",null,"This command will return an archive file with extension  .tar.gz/.tgz "),(0,s.kt)("h2",{id:"spaship-deploy"},"spaship deploy:"),(0,s.kt)("p",null,"The spaship deploy command allows you to deploy your application to a SPAship host. It works by sending an archive containing a SPA to a SPAship host for deployment. At the moment, the CLI supports .tar.gz/.tgz, .zip, and .tar.bz2 archives."),(0,s.kt)("p",null,"The next step after packaging would be to execute the spaship deploy command to actually deploy your application to a SPAship host. However, prior to running this command, it's highly recommended that you have your ",(0,s.kt)("strong",{parentName:"p"},"spashiprc configured"),". Please refer to the below ",(0,s.kt)("a",{parentName:"p",href:"##Setting-up-spashiprc.yml"},"Setting up .spashiprc.yml"),". Another important requirement for this step is the API Key required for the deployment. You can create a new API Key by using the SPA Manager\u2019s Authentication section.\nOnce you have your spashiprc file configured, deploying your application is as easy as running : "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"$ spaship deploy demo-spa-1.0.0.tgz")," "),(0,s.kt)("p",null,"Internally, this command translates to:"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"curl ",(0,s.kt)("inlineCode",{parentName:"strong"},"<hostname>"),"/api/v1/applications/deploy -H 'X-API-Key: ",(0,s.kt)("inlineCode",{parentName:"strong"},"<API-Key>"),"' -F name=Demo SPA -F path=demo -F upload=@demo-spa-1.0.0.tgz -F ref=v1.0")),(0,s.kt)("h1",{id:"image-alt-text-10"},(0,s.kt)("img",{alt:"image alt text",src:a(3309).Z})),(0,s.kt)("h2",{id:"setting-up-spashiprcyml"},"Setting up spashiprc.yml"),(0,s.kt)("p",null,"spashiprc is a yaml dot file in your ",(0,s.kt)("strong",{parentName:"p"},"$HOME")," directory that is used by SPAship to provide an alternative to typing out ",(0,s.kt)("strong",{parentName:"p"},"--apikey ",(0,s.kt)("inlineCode",{parentName:"strong"},"<KEY>"))," and ",(0,s.kt)("strong",{parentName:"p"},"--env ",(0,s.kt)("inlineCode",{parentName:"strong"},"<URL>"))," arguments every time you run spaship commands. You can use a spashiprc file to define an environment name (like ",(0,s.kt)("strong",{parentName:"p"},"qa,dev,prod"),") along with its URL and API key, after which you can run ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"spaship deploy --env qa")),". The URL and API key will be read from your spashiprc file."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"spashiprc files are optional, but very convenient if you plan to do deployments from your dev environment. If your deployments are done by a CI/CD server, you probably don't need a spashiprc file and will be better off using ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"--env URL"))," and ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"--apikey KEY")),"."))),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("strong",{parentName:"p"},"Important:")," As a rule of thumb, spaship.yaml files are consumed by the SPAship API, whereas spashiprc files are consumed by the CLI."))),(0,s.kt)("h3",{id:"spashiprc-file-demo"},(0,s.kt)("strong",{parentName:"h3"},"spashiprc file demo:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h4",{parentName:"li",id:"spashiprc-with-default-environment"},(0,s.kt)("u",null,"spashiprc with default environment"),":"),(0,s.kt)("p",{parentName:"li"},"  This spashiprc file defines a default environment which will be used whenever ",(0,s.kt)("strong",{parentName:"p"},"--env")," is not provided."),(0,s.kt)("p",{parentName:"li"},"  ",(0,s.kt)("strong",{parentName:"p"},".spashiprc.yml")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"envs:\ndefault:\n    url: https://localhost:8008\n    apikey: 57d5c061-9a02-40fc-a3e4-1eb3c9ae6a12\n")),(0,s.kt)("p",{parentName:"li"},"  ",(0,s.kt)("strong",{parentName:"p"},".spashiprc.yml")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"envs:\ndefault:\n    url: https://localhost:8008\n    apikey: 57d5c061-9a02-40fc-a3e4-1eb3c9ae6a12\nqa:\n    url: https://qa.mysite.com:8008\n    apikey: 57d5c061-9a02-40fc-a3e4-1eb3c8ae2a45\n")),(0,s.kt)("p",{parentName:"li"},"  Now when you run ",(0,s.kt)("strong",{parentName:"p"},"spaship")," commands, the ",(0,s.kt)("strong",{parentName:"p"},"--env")," flag is optional. When it's omitted, the default environment will be used."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"spaship deploy MyProject-1.0.0.tgz\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h4",{parentName:"li",id:"spashiprc-layering-example"},(0,s.kt)("u",null,"spashiprc layering example"),":"),(0,s.kt)("p",{parentName:"li"},"  ",(0,s.kt)("strong",{parentName:"p"},"\\$HOME/.spashiprc.yml")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"envs:\nqa:\n    apikey: 57d5c061-9a02-40fc-a3e4-1eb3c9ae6a12\nprod:\n    apikey: 70f19422-bf53-44b1-b664-f9b4636bea61\n")),(0,s.kt)("p",{parentName:"li"},"  ",(0,s.kt)("strong",{parentName:"p"},"\\$HOME/projects/MyProject/.spashiprc.yml")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"envs:\nqa:\n    url: https://qa.spaship.io\nprod:\n    url: https://spaship.io\n")),(0,s.kt)("p",{parentName:"li"},"  When you run spaship commands from within \\$HOME/projects/MyProject, ",(0,s.kt)("em",{parentName:"p"},"both")," of the above ",(0,s.kt)("em",{parentName:"p"},"spashiprc")," files will be loaded and merged together, forming a complete definition of URL+API key for each environment."),(0,s.kt)("p",{parentName:"li"},"  Such as:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME/projects/MyProject\nspaship deploy --env prod MyProject-1.0.0.tgz\n")))))}c.isMDXComponent=!0},8325:function(e,t,a){t.Z=a.p+"assets/images/image_10-95a5dbd1de16d88366e64cda32fec968.png"},8072:function(e,t,a){t.Z=a.p+"assets/images/image_11-28254533c197d7344a45c3547f0706b4.png"},3881:function(e,t,a){t.Z=a.p+"assets/images/image_12-5612afd0b8f1184636181c9e112c4904.png"},8306:function(e,t,a){t.Z=a.p+"assets/images/image_13-ee2b0ba8814ac92753354cc203b4d7c9.png"},394:function(e,t,a){t.Z=a.p+"assets/images/image_14-e7fd99c5d04a86a743e7042b38804f59.png"},7744:function(e,t,a){t.Z=a.p+"assets/images/image_15-c7dc8795bef4fa72cb3ad10aeae77be8.png"},8738:function(e,t,a){t.Z=a.p+"assets/images/image_16-118f45ffdf703474b943ae3edada8afd.png"},3364:function(e,t,a){t.Z=a.p+"assets/images/image_17-97a7d2aef5dcd3240ad79ccb295c1ee9.png"},327:function(e,t,a){t.Z=a.p+"assets/images/image_18-a96f186bcb51254bea18d8613729df30.png"},3309:function(e,t,a){t.Z=a.p+"assets/images/image_19-3d01088a393bce1b58b339ed61e1a0e0.png"},7456:function(e,t,a){t.Z=a.p+"assets/images/image_9-93d2f2a73b0d13433e961f35dbd34c34.png"}}]);