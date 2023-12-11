"use strict";(self.webpackChunkbest_quotes_app=self.webpackChunkbest_quotes_app||[]).push([[785],{255:(n,r,t)=>{t.d(r,{Z:()=>a});var e=t(537),i=t.n(e),s=t(645),o=t.n(s)()(i());o.push([n.id,".jXggBwU1BjO9OMOWb5yW{text-rendering:optimizelegibility;text-decoration:none;letter-spacing:0;color:#ded7d2}.scl0fiuDzx7zf0CgFhko{margin:0;padding:0;text-rendering:optimizelegibility;text-decoration:none;letter-spacing:0;font-weight:600;font-size:24px;line-height:normal;color:#ded7d2;padding-bottom:5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.swXbC2RFkcX8klftgJUq{margin:0;padding:0;text-rendering:optimizelegibility;text-decoration:none;letter-spacing:0;font-weight:400;font-size:16px;line-height:normal;color:#ded7d2;padding-bottom:10px}","",{version:3,sources:["webpack://./src/entities/post/ui/post-card/styles.module.scss","webpack://./src/app/styles/mixins.scss","webpack://./src/app/styles/vars.scss"],names:[],mappings:"AAGA,sBCqBC,iCAAA,CACA,oBAAA,CACA,gBAAA,CDpBC,aELc,CFQhB,sBCUC,QAAA,CACA,SAAA,CAIA,iCAAA,CACA,oBAAA,CACA,gBAAA,CAlBA,eDIsB,CCHtB,cDG2B,CCF3B,kBDEiC,CAEhC,aEbc,CFcd,kBAAA,CACA,eAAA,CACA,sBAAA,CACA,kBAAA,CAGF,sBCFC,QAAA,CACA,SAAA,CAIA,iCAAA,CACA,oBAAA,CACA,gBAAA,CAlBA,eDgBsB,CCftB,cDe2B,CCd3B,kBDciC,CAEhC,aEzBc,CF0Bd,mBAAA",sourcesContent:["@import '@src/app/styles/mixins';\r\n@import '@src/app/styles/vars';\r\n\r\n.postcard {\r\n  @include text;\r\n\r\n  color: $mainTextColor;\r\n}\r\n\r\n.cardstring {\r\n  @include reset;\r\n  @include text;\r\n  @include text-format(600, 24px, normal);\r\n\r\n  color: $mainTextColor;\r\n  padding-bottom: 5px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n\r\n.cardspan {\r\n  @include reset;\r\n  @include text;\r\n  @include text-format(400, 16px, normal);\r\n\r\n  color: $mainTextColor;\r\n  padding-bottom: 10px;\r\n}","@mixin border-radius($radius) {\r\n  -webkit-border-radius: $radius;\r\n     -moz-border-radius: $radius;\r\n      -ms-border-radius: $radius;\r\n          border-radius: $radius;\r\n}\r\n\r\n@mixin text-format($font-weight, $font-size, $line-height) {\r\n\tfont-weight: $font-weight;\r\n\tfont-size: $font-size;\r\n\tline-height: $line-height;\r\n}\r\n\r\n@mixin size($height, $width) {\r\n\theight: $height;\r\n\twidth: $width;\r\n}\r\n\r\n@mixin reset {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n@mixin text {\r\n\ttext-rendering: optimizelegibility;\r\n\ttext-decoration: none;\r\n\tletter-spacing: 0;\r\n}\r\n\r\n@mixin flex-center-center {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n@mixin focus {\r\n\toutline: 0;\r\n\toutline-offset: 0;\r\n}\r\n\r\n@mixin hover-opacity {\r\n  transition: 0.3s ease;\r\n\r\n  &:hover {\r\n    opacity: 0.7;\r\n  }\r\n}\r\n","$mainColor: #1d1d20;\r\n$mainTextColor: #ded7d2;\r\n$accentColor: #424249;"],sourceRoot:""}]),o.locals={postcard:"jXggBwU1BjO9OMOWb5yW",cardstring:"scl0fiuDzx7zf0CgFhko",cardspan:"swXbC2RFkcX8klftgJUq"};const a=o},615:(n,r,t)=>{t.d(r,{Z:()=>a});var e=t(537),i=t.n(e),s=t(645),o=t.n(s)()(i());o.push([n.id,".PvfeLxL1Z55LcT7OG9Pj{margin:0;padding:0;padding:3px;box-sizing:border-box}.EKn9c0a02vGWPVlIv3n8{margin:0;padding:0;text-rendering:optimizelegibility;text-decoration:none;letter-spacing:0;font-weight:600;font-size:24px;line-height:normal;color:#ded7d2;padding-bottom:5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.kZeYV0Rut4xPPh_kxwmL{margin:0;padding:0;text-rendering:optimizelegibility;text-decoration:none;letter-spacing:0;font-weight:400;font-size:16px;line-height:normal;color:#ded7d2}","",{version:3,sources:["webpack://./src/entities/post/ui/post-row/styles.module.scss","webpack://./src/app/styles/mixins.scss","webpack://./src/app/styles/vars.scss"],names:[],mappings:"AAGA,sBCgBC,QAAA,CACA,SAAA,CDdC,WAAA,CACA,qBAAA,CAGF,sBCSC,QAAA,CACA,SAAA,CAIA,iCAAA,CACA,oBAAA,CACA,gBAAA,CAlBA,eDKsB,CCJtB,cDI2B,CCH3B,kBDGiC,CAEhC,aEdc,CFed,kBAAA,CACA,eAAA,CACA,sBAAA,CACA,kBAAA,CAGF,sBCHC,QAAA,CACA,SAAA,CAIA,iCAAA,CACA,oBAAA,CACA,gBAAA,CAlBA,eDiBsB,CChBtB,cDgB2B,CCf3B,kBDeiC,CAEhC,aE1Bc",sourcesContent:["@import '@src/app/styles/mixins';\r\n@import '@src/app/styles/vars';\r\n\r\n.postrow {\r\n  @include reset;\r\n\r\n  padding: 3px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.poststring {\r\n  @include reset;\r\n  @include text;\r\n  @include text-format(600, 24px, normal);\r\n\r\n  color: $mainTextColor;\r\n  padding-bottom: 5px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n\r\n.postspan {\r\n  @include reset;\r\n  @include text;\r\n  @include text-format(400, 16px, normal);\r\n\r\n  color: $mainTextColor;\r\n}","@mixin border-radius($radius) {\r\n  -webkit-border-radius: $radius;\r\n     -moz-border-radius: $radius;\r\n      -ms-border-radius: $radius;\r\n          border-radius: $radius;\r\n}\r\n\r\n@mixin text-format($font-weight, $font-size, $line-height) {\r\n\tfont-weight: $font-weight;\r\n\tfont-size: $font-size;\r\n\tline-height: $line-height;\r\n}\r\n\r\n@mixin size($height, $width) {\r\n\theight: $height;\r\n\twidth: $width;\r\n}\r\n\r\n@mixin reset {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n@mixin text {\r\n\ttext-rendering: optimizelegibility;\r\n\ttext-decoration: none;\r\n\tletter-spacing: 0;\r\n}\r\n\r\n@mixin flex-center-center {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n@mixin focus {\r\n\toutline: 0;\r\n\toutline-offset: 0;\r\n}\r\n\r\n@mixin hover-opacity {\r\n  transition: 0.3s ease;\r\n\r\n  &:hover {\r\n    opacity: 0.7;\r\n  }\r\n}\r\n","$mainColor: #1d1d20;\r\n$mainTextColor: #ded7d2;\r\n$accentColor: #424249;"],sourceRoot:""}]),o.locals={postrow:"PvfeLxL1Z55LcT7OG9Pj",poststring:"EKn9c0a02vGWPVlIv3n8",postspan:"kZeYV0Rut4xPPh_kxwmL"};const a=o},791:(n,r,t)=>{t.d(r,{Z:()=>C});var e=t(537),i=t.n(e),s=t(645),o=t.n(s),a=t(667),A=t.n(a),d=new URL(t(147),t.b),l=o()(i()),c=A()(d);l.push([n.id,`.Pdr77l5VVvMch1yCGPcY{text-rendering:optimizelegibility;text-decoration:none;letter-spacing:0;position:relative;color:#ded7d2;margin:0 auto;max-width:1440px;height:100vh;display:flex;align-items:center;justify-content:space-around;flex-direction:column;background-color:#1d1d20;background-image:url(${c});background-repeat:no-repeat;background-size:cover;background-position:center}.Pdr77l5VVvMch1yCGPcY::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.7);z-index:1}.iwCunGcEmmN7CE42V5cg{height:80%;width:90%;overflow-y:auto;z-index:10}.iwCunGcEmmN7CE42V5cg::-webkit-scrollbar{width:6px}.iwCunGcEmmN7CE42V5cg::-webkit-scrollbar-thumb{background-color:#424249;border-radius:6px}.iwCunGcEmmN7CE42V5cg::-webkit-scrollbar-track{background-color:#1d1d20;border-radius:8px}.H9vaS9Hd_1kCn_KBDrII{margin:0;padding:0;font-weight:700;font-size:36px;line-height:normal;z-index:10}`,"",{version:3,sources:["webpack://./src/pages/post-list/styles.module.scss","webpack://./src/app/styles/mixins.scss","webpack://./src/app/styles/vars.scss"],names:[],mappings:"AAGA,sBCqBC,iCAAA,CACA,oBAAA,CACA,gBAAA,CDpBC,iBAAA,CACA,aENc,CFOd,aAAA,CACA,gBAAA,CACA,YAAA,CACA,YAAA,CACA,kBAAA,CACA,4BAAA,CACA,qBAAA,CACA,wBEfU,CFgBV,wDAAA,CACA,2BAAA,CACA,qBAAA,CACA,0BAAA,CAGF,8BACE,UAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,yBAAA,CACA,SAAA,CAGF,sBACE,UAAA,CACA,SAAA,CACA,eAAA,CACA,UAAA,CAEA,yCACE,SAAA,CAGF,+CACE,wBE1CU,CF2CV,iBAAA,CAGF,+CACE,wBEjDQ,CFkDR,iBAAA,CAIJ,sBCnCC,QAAA,CACA,SAAA,CAZA,eDgDsB,CC/CtB,cD+C2B,CC9C3B,kBD8CiC,CAEhC,UAAA",sourcesContent:["@import '@src/app/styles/mixins';\r\n@import '@src/app/styles/vars';\r\n\r\n.list {\r\n  @include text;\r\n\r\n  position: relative;\r\n  color: $mainTextColor;\r\n  margin: 0 auto;\r\n  max-width: 1440px;\r\n  height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  flex-direction: column;\r\n  background-color: $mainColor;\r\n  background-image: url('../../../dist/images/picasso-horizontal.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\n.list::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgb(0 0 0 / 70%);\r\n  z-index: 1;\r\n}\r\n\r\n.container {\r\n  height: 80%;\r\n  width: 90%;\r\n  overflow-y: auto;\r\n  z-index: 10;\r\n\r\n  &::-webkit-scrollbar {\r\n    width: 6px;\r\n  }\r\n\r\n  &::-webkit-scrollbar-thumb {\r\n    background-color: $accentColor;\r\n    border-radius: 6px;\r\n  }\r\n\r\n  &::-webkit-scrollbar-track {\r\n    background-color: $mainColor;\r\n    border-radius: 8px;\r\n  }\r\n}\r\n\r\n.title {\r\n  @include reset;\r\n  @include text-format(700, 36px, normal);\r\n\r\n  z-index: 10;\r\n}\r\n","@mixin border-radius($radius) {\r\n  -webkit-border-radius: $radius;\r\n     -moz-border-radius: $radius;\r\n      -ms-border-radius: $radius;\r\n          border-radius: $radius;\r\n}\r\n\r\n@mixin text-format($font-weight, $font-size, $line-height) {\r\n\tfont-weight: $font-weight;\r\n\tfont-size: $font-size;\r\n\tline-height: $line-height;\r\n}\r\n\r\n@mixin size($height, $width) {\r\n\theight: $height;\r\n\twidth: $width;\r\n}\r\n\r\n@mixin reset {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n@mixin text {\r\n\ttext-rendering: optimizelegibility;\r\n\ttext-decoration: none;\r\n\tletter-spacing: 0;\r\n}\r\n\r\n@mixin flex-center-center {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n@mixin focus {\r\n\toutline: 0;\r\n\toutline-offset: 0;\r\n}\r\n\r\n@mixin hover-opacity {\r\n  transition: 0.3s ease;\r\n\r\n  &:hover {\r\n    opacity: 0.7;\r\n  }\r\n}\r\n","$mainColor: #1d1d20;\r\n$mainTextColor: #ded7d2;\r\n$accentColor: #424249;"],sourceRoot:""}]),l.locals={list:"Pdr77l5VVvMch1yCGPcY",container:"iwCunGcEmmN7CE42V5cg",title:"H9vaS9Hd_1kCn_KBDrII"};const C=l},91:(n,r,t)=>{t.d(r,{Z:()=>a});var e=t(537),i=t.n(e),s=t(645),o=t.n(s)()(i());o.push([n.id,".heisaLNnn7p8fgg9jayg{margin:0;padding:0;text-rendering:optimizelegibility;text-decoration:none;letter-spacing:0;height:25px;width:125px;transition:.3s ease}.heisaLNnn7p8fgg9jayg:hover{opacity:.7}","",{version:3,sources:["webpack://./src/shared/ui/button/styles.module.scss","webpack://./src/app/styles/mixins.scss"],names:[],mappings:"AAGA,sBCgBC,QAAA,CACA,SAAA,CAIA,iCAAA,CACA,oBAAA,CACA,gBAAA,CAZA,WDRa,CCSb,WDTmB,CCmClB,mBAAA,CAEA,4BACE,UAAA",sourcesContent:["@import '@src/app/styles/mixins';\r\n@import '@src/app/styles/vars';\r\n\r\n.button {\r\n@include reset;\r\n@include text;\r\n@include size(25px, 125px);\r\n@include hover-opacity;\r\n\r\n}","@mixin border-radius($radius) {\r\n  -webkit-border-radius: $radius;\r\n     -moz-border-radius: $radius;\r\n      -ms-border-radius: $radius;\r\n          border-radius: $radius;\r\n}\r\n\r\n@mixin text-format($font-weight, $font-size, $line-height) {\r\n\tfont-weight: $font-weight;\r\n\tfont-size: $font-size;\r\n\tline-height: $line-height;\r\n}\r\n\r\n@mixin size($height, $width) {\r\n\theight: $height;\r\n\twidth: $width;\r\n}\r\n\r\n@mixin reset {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n@mixin text {\r\n\ttext-rendering: optimizelegibility;\r\n\ttext-decoration: none;\r\n\tletter-spacing: 0;\r\n}\r\n\r\n@mixin flex-center-center {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n@mixin focus {\r\n\toutline: 0;\r\n\toutline-offset: 0;\r\n}\r\n\r\n@mixin hover-opacity {\r\n  transition: 0.3s ease;\r\n\r\n  &:hover {\r\n    opacity: 0.7;\r\n  }\r\n}\r\n"],sourceRoot:""}]),o.locals={button:"heisaLNnn7p8fgg9jayg"};const a=o},545:(n,r,t)=>{t.d(r,{y:()=>B,h:()=>v});var e=t(893),i=t(655),s=t(379),o=t.n(s),a=t(795),A=t.n(a),d=t(569),l=t.n(d),c=t(565),C=t.n(c),p=t(216),g=t.n(p),m=t(589),h=t.n(m),x=t(255),u={};u.styleTagTransform=h(),u.setAttributes=C(),u.insert=l().bind(null,"head"),u.domAPI=A(),u.insertStyleElement=g(),o()(x.Z,u);const b=x.Z&&x.Z.locals?x.Z.locals:void 0;var f=t(533);const B=({data:n})=>{const{title:r,body:t,id:s}=n;return(0,e.jsxs)("div",{className:b.postcard,children:[(0,e.jsxs)("p",{className:b.cardstring,children:["Номер поста: ",s]}),(0,e.jsx)("h3",{className:b.cardstring,children:r}),(0,e.jsx)("p",{className:b.cardspan,children:t}),(0,e.jsx)(i.rU,{to:"/",children:(0,e.jsx)(f.z,{name:"На главную"})})]})};var w=t(615),$={};$.styleTagTransform=h(),$.setAttributes=C(),$.insert=l().bind(null,"head"),$.domAPI=A(),$.insertStyleElement=g(),o()(w.Z,$);const y=w.Z&&w.Z.locals?w.Z.locals:void 0,v=({data:n})=>{const{title:r,body:t,id:s}=n;return(0,e.jsxs)("div",{className:y.postrow,children:[(0,e.jsxs)("p",{className:y.poststring,children:[`№ ${s}: ${r}. `,(0,e.jsx)("span",{className:y.postspan,children:t})]}),(0,e.jsx)(i.rU,{to:`/posts/${s}`,children:(0,e.jsx)(f.z,{name:"Просмотр"})})]})}},785:(n,r,t)=>{t.r(r),t.d(r,{default:()=>v});var e=t(893),i=t(294),s=t(825),o=t(7);const a=()=>(0,o.I0)();var A=t(379),d=t.n(A),l=t(795),c=t.n(l),C=t(569),p=t.n(C),g=t(565),m=t.n(g),h=t(216),x=t.n(h),u=t(589),b=t.n(u),f=t(791),B={};B.styleTagTransform=b(),B.setAttributes=m(),B.insert=p().bind(null,"head"),B.domAPI=c(),B.insertStyleElement=x(),d()(f.Z,B);const w=f.Z&&f.Z.locals?f.Z.locals:void 0;var $=t(739),y=t(545);const v=(0,i.memo)((()=>{const{posts:n,currentPage:r,limit:t,loadMoreItems:A}=(()=>{const n=a(),r=(0,o.v9)((n=>n.posts.data)),t=(0,o.v9)((n=>n.posts.currentPage)),e=(0,o.v9)((n=>n.posts.limit)),i=(0,o.v9)((n=>n.posts.hasMoreData));return{posts:r,currentPage:t,limit:e,hasMoreData:i,loadMoreItems:()=>{i&&(n((0,$.T6)({page:t,limit:e})),n((0,$.D4)(t+1)))}}})(),d=a();(0,i.useEffect)((()=>{d((0,$.T6)({page:r,limit:t})),d((0,$.D4)(r+1))}),[]);const l=n?.length||0;return(0,e.jsxs)("section",{className:w.list,children:[(0,e.jsx)("h1",{className:w.title,children:"Cogitationes inanes latine"}),(0,e.jsx)(s.t7,{className:w.container,height:1e3,itemCount:l,itemSize:100,width:"90%",onItemsRendered:({visibleStopIndex:n})=>{n===l-1&&A()},children:({index:r,style:t})=>(0,e.jsx)("div",{style:t,children:(0,e.jsx)(y.h,{data:n[r]},n[r].id)})})]})}))},533:(n,r,t)=>{t.d(r,{z:()=>b});var e=t(893),i=t(379),s=t.n(i),o=t(795),a=t.n(o),A=t(569),d=t.n(A),l=t(565),c=t.n(l),C=t(216),p=t.n(C),g=t(589),m=t.n(g),h=t(91),x={};x.styleTagTransform=m(),x.setAttributes=c(),x.insert=d().bind(null,"head"),x.domAPI=a(),x.insertStyleElement=p(),s()(h.Z,x);const u=h.Z&&h.Z.locals?h.Z.locals:void 0,b=({name:n})=>(0,e.jsx)("button",{className:u.button,children:n});t(460)},147:(n,r,t)=>{n.exports=t.p+"static/media/picasso-horizontal.jpg"}}]);