"use strict";(self.webpackChunkbest_quotes_app=self.webpackChunkbest_quotes_app||[]).push([[42],{255:(n,r,t)=>{t.d(r,{Z:()=>a});var e=t(537),i=t.n(e),s=t(645),o=t.n(s)()(i());o.push([n.id,".jXggBwU1BjO9OMOWb5yW{text-rendering:optimizelegibility;text-decoration:none;letter-spacing:0;color:#ded7d2}","",{version:3,sources:["webpack://./src/entities/post/ui/post-card/styles.module.scss","webpack://./src/app/styles/mixins.scss","webpack://./src/app/styles/vars.scss"],names:[],mappings:"AAGA,sBCqBC,iCAAA,CACA,oBAAA,CACA,gBAAA,CDpBC,aELc",sourcesContent:["@import '@src/app/styles/mixins';\r\n@import '@src/app/styles/vars';\r\n\r\n.postcard {\r\n  @include text;\r\n\r\n  color: $mainTextColor;\r\n}","@mixin border-radius($radius) {\r\n  -webkit-border-radius: $radius;\r\n     -moz-border-radius: $radius;\r\n      -ms-border-radius: $radius;\r\n          border-radius: $radius;\r\n}\r\n\r\n@mixin text-format($font-weight, $font-size, $line-height) {\r\n\tfont-weight: $font-weight;\r\n\tfont-size: $font-size;\r\n\tline-height: $line-height;\r\n}\r\n\r\n@mixin size($height, $width) {\r\n\theight: $height;\r\n\twidth: $width;\r\n}\r\n\r\n@mixin reset {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n@mixin text {\r\n\ttext-rendering: optimizelegibility;\r\n\ttext-decoration: none;\r\n\tletter-spacing: 0;\r\n}\r\n\r\n@mixin flex-center-center {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n@mixin focus {\r\n\toutline: 0;\r\n\toutline-offset: 0;\r\n}\r\n\r\n@mixin hover-opacity {\r\n  transition: 0.3s ease;\r\n\r\n  &:hover {\r\n    opacity: 0.7;\r\n  }\r\n}\r\n","$mainColor: #1d1d20;\r\n$mainTextColor: #ded7d2;\r\n$accentColor: #424249;"],sourceRoot:""}]),o.locals={postcard:"jXggBwU1BjO9OMOWb5yW"};const a=o},615:(n,r,t)=>{t.d(r,{Z:()=>a});var e=t(537),i=t.n(e),s=t(645),o=t.n(s)()(i());o.push([n.id,".PvfeLxL1Z55LcT7OG9Pj{margin:0;padding:0;padding:2px;box-sizing:border-box}.EKn9c0a02vGWPVlIv3n8{margin:0;padding:0;text-rendering:optimizelegibility;text-decoration:none;letter-spacing:0;font-weight:600;font-size:24px;line-height:normal;color:#ded7d2;padding-bottom:5px}.kZeYV0Rut4xPPh_kxwmL{margin:0;padding:0;text-rendering:optimizelegibility;text-decoration:none;letter-spacing:0;font-weight:400;font-size:16px;line-height:normal;color:#ded7d2}","",{version:3,sources:["webpack://./src/entities/post/ui/post-row/styles.module.scss","webpack://./src/app/styles/mixins.scss","webpack://./src/app/styles/vars.scss"],names:[],mappings:"AAGA,sBCgBC,QAAA,CACA,SAAA,CDdC,WAAA,CACA,qBAAA,CAGF,sBCSC,QAAA,CACA,SAAA,CAIA,iCAAA,CACA,oBAAA,CACA,gBAAA,CAlBA,eDKsB,CCJtB,cDI2B,CCH3B,kBDGiC,CAEhC,aEdc,CFed,kBAAA,CAGF,sBAAA,QAAA,CCCC,SAAA,CAIA,iCAAA,CACA,oBAAA,CACA,gBAAA,CAlBA,eDcsB,CCbtB,cDa2B,CCZ3B,kBDYiC,CAEhC,aEvBc",sourcesContent:["@import '@src/app/styles/mixins';\r\n@import '@src/app/styles/vars';\r\n\r\n.postrow {\r\n  @include reset;\r\n\r\n  padding: 2px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.poststring {\r\n  @include reset;\r\n  @include text;\r\n  @include text-format(600, 24px, normal);\r\n\r\n  color: $mainTextColor;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.postspan {\r\n  @include reset;\r\n  @include text;\r\n  @include text-format(400, 16px, normal);\r\n\r\n  color: $mainTextColor;\r\n}","@mixin border-radius($radius) {\r\n  -webkit-border-radius: $radius;\r\n     -moz-border-radius: $radius;\r\n      -ms-border-radius: $radius;\r\n          border-radius: $radius;\r\n}\r\n\r\n@mixin text-format($font-weight, $font-size, $line-height) {\r\n\tfont-weight: $font-weight;\r\n\tfont-size: $font-size;\r\n\tline-height: $line-height;\r\n}\r\n\r\n@mixin size($height, $width) {\r\n\theight: $height;\r\n\twidth: $width;\r\n}\r\n\r\n@mixin reset {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n@mixin text {\r\n\ttext-rendering: optimizelegibility;\r\n\ttext-decoration: none;\r\n\tletter-spacing: 0;\r\n}\r\n\r\n@mixin flex-center-center {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n@mixin focus {\r\n\toutline: 0;\r\n\toutline-offset: 0;\r\n}\r\n\r\n@mixin hover-opacity {\r\n  transition: 0.3s ease;\r\n\r\n  &:hover {\r\n    opacity: 0.7;\r\n  }\r\n}\r\n","$mainColor: #1d1d20;\r\n$mainTextColor: #ded7d2;\r\n$accentColor: #424249;"],sourceRoot:""}]),o.locals={postrow:"PvfeLxL1Z55LcT7OG9Pj",poststring:"EKn9c0a02vGWPVlIv3n8",postspan:"kZeYV0Rut4xPPh_kxwmL"};const a=o},91:(n,r,t)=>{t.d(r,{Z:()=>a});var e=t(537),i=t.n(e),s=t(645),o=t.n(s)()(i());o.push([n.id,".heisaLNnn7p8fgg9jayg{margin:0;padding:0;text-rendering:optimizelegibility;text-decoration:none;letter-spacing:0;height:25px;width:125px;transition:.3s ease}.heisaLNnn7p8fgg9jayg:hover{opacity:.7}","",{version:3,sources:["webpack://./src/shared/ui/button/styles.module.scss","webpack://./src/app/styles/mixins.scss"],names:[],mappings:"AAGA,sBCgBC,QAAA,CACA,SAAA,CAIA,iCAAA,CACA,oBAAA,CACA,gBAAA,CAZA,WDRa,CCSb,WDTmB,CCmClB,mBAAA,CAEA,4BACE,UAAA",sourcesContent:["@import '@src/app/styles/mixins';\r\n@import '@src/app/styles/vars';\r\n\r\n.button {\r\n@include reset;\r\n@include text;\r\n@include size(25px, 125px);\r\n@include hover-opacity;\r\n\r\n}","@mixin border-radius($radius) {\r\n  -webkit-border-radius: $radius;\r\n     -moz-border-radius: $radius;\r\n      -ms-border-radius: $radius;\r\n          border-radius: $radius;\r\n}\r\n\r\n@mixin text-format($font-weight, $font-size, $line-height) {\r\n\tfont-weight: $font-weight;\r\n\tfont-size: $font-size;\r\n\tline-height: $line-height;\r\n}\r\n\r\n@mixin size($height, $width) {\r\n\theight: $height;\r\n\twidth: $width;\r\n}\r\n\r\n@mixin reset {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n@mixin text {\r\n\ttext-rendering: optimizelegibility;\r\n\ttext-decoration: none;\r\n\tletter-spacing: 0;\r\n}\r\n\r\n@mixin flex-center-center {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n@mixin focus {\r\n\toutline: 0;\r\n\toutline-offset: 0;\r\n}\r\n\r\n@mixin hover-opacity {\r\n  transition: 0.3s ease;\r\n\r\n  &:hover {\r\n    opacity: 0.7;\r\n  }\r\n}\r\n"],sourceRoot:""}]),o.locals={button:"heisaLNnn7p8fgg9jayg"};const a=o},542:(n,r,t)=>{t.d(r,{y:()=>f,h:()=>k});var e=t(893),i=t(655),s=t(379),o=t.n(s),a=t(795),d=t.n(a),l=t(569),c=t.n(l),A=t(565),p=t.n(A),m=t(216),g=t.n(m),h=t(589),x=t.n(h),u=t(255),C={};C.styleTagTransform=x(),C.setAttributes=p(),C.insert=c().bind(null,"head"),C.domAPI=d(),C.insertStyleElement=g(),o()(u.Z,C);const b=u.Z&&u.Z.locals?u.Z.locals:void 0,f=({data:n})=>{const{title:r,body:t,userId:s,id:o}=n;return(0,e.jsxs)("div",{className:b.postcard,children:[(0,e.jsx)("h3",{children:r}),(0,e.jsx)("p",{children:t}),(0,e.jsxs)("p",{children:["User ID: ",s]}),(0,e.jsxs)("p",{children:["Post ID: ",o]}),(0,e.jsx)(i.rU,{to:`/posts/${o}`,children:"Просмотр"})]})};var $=t(615),y={};y.styleTagTransform=x(),y.setAttributes=p(),y.insert=c().bind(null,"head"),y.domAPI=d(),y.insertStyleElement=g(),o()($.Z,y);const w=$.Z&&$.Z.locals?$.Z.locals:void 0;var B=t(91),v={};v.styleTagTransform=x(),v.setAttributes=p(),v.insert=c().bind(null,"head"),v.domAPI=d(),v.insertStyleElement=g(),o()(B.Z,v);const j=B.Z&&B.Z.locals?B.Z.locals:void 0,z=({name:n})=>(0,e.jsx)("button",{className:j.button,children:n});t(460);const k=({data:n})=>{const{title:r,body:t,id:s}=n;return(0,e.jsxs)("div",{className:w.postrow,children:[(0,e.jsxs)("p",{className:w.poststring,children:[`№ ${s}: ${r}. `,(0,e.jsx)("span",{className:w.postspan,children:t})]}),(0,e.jsx)(i.rU,{to:`/posts/${s}`,children:(0,e.jsx)(z,{name:"Просмотр"})})]})}},42:(n,r,t)=>{t.r(r),t.d(r,{default:()=>a});var e=t(893),i=t(542),s=t(250),o=t(7);const a=()=>{const{id:n}=(0,s.UO)(),r=(0,o.v9)((n=>n.posts.data)),t=n?r.find((r=>r.id===parseInt(n,10))):void 0;return(0,e.jsxs)("section",{children:[(0,e.jsx)("h2",{children:"PostDetailsPage"}),t?(0,e.jsx)(i.y,{data:t}):"Post not found"]})}}}]);