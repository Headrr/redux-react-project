(self.webpackChunkredux_project=self.webpackChunkredux_project||[]).push([[190],{2190:function(n,r,e){"use strict";e.r(r),e.d(r,{default:function(){return p}});var t=e(7294),s=e(7703),o=e(3379),i=e.n(o),a=e(409),c=(i()(a.Z,{insert:"head",singleton:!1}),a.Z.locals,e(518)),l=e(2711),f=(i()(l.Z,{insert:"head",singleton:!1}),l.Z.locals,e.p+"80dc1a7d41a7c581ae4b953cb8210658.png"),C=function(){return t.createElement("div",{className:"empty"},t.createElement("img",{className:"empty-img",src:f,alt:"Rick"}),t.createElement("span",{className:"empty-text"},"You haven't favorites.",t.createElement("br",null),"Go and select you favorite characters."))},m=(0,s.$j)((function(n){return{favoriteCharacters:n.favoriteCharacters}}),null)((function(n){var r=n.favoriteCharacters;return t.createElement("div",{className:"characterList"},r.length?r.map((function(n){return t.createElement(c.Z,{key:n.data.id,data:n.data})})):t.createElement(C,null))})),p=function(){return t.createElement(m,null)}},2711:function(n,r,e){"use strict";var t=e(4015),s=e.n(t),o=e(3645),i=e.n(o)()(s());i.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);"]),i.push([n.id,'*{box-sizing:border-box}a:link,a:visited{color:inherit;text-decoration:none}body{margin:0;background-color:#000;color:#fff;font-family:"Source Sans Pro",sans-serif}h1,h2,h3,h3,h4,h5,h6{color:#65fafb;font-family:"Oswald",sans-serif}figure{margin:0;padding:0}section{min-height:calc(100vh - 300px)}.empty{display:flex;flex-direction:column;align-items:center;justify-content:center}.empty-img{height:225px}.empty-text{font-size:35px;font-family:"Oswald",sans-serif;color:#65fafb;text-align:center}\n',"",{version:3,sources:["webpack://./src/assets/styles/App.scss","webpack://./src/assets/styles/Vars.scss","webpack://./src/assets/styles/components/Empty.scss"],names:[],mappings:"AA2BA,EACE,qBAAsB,CACvB,iBAIC,aAAc,CACd,oBAAqB,CACtB,KAGC,QAAS,CACT,qBC7BkB,CD8BlB,UC7BmB,CD8BnB,wCCrCuC,CDsCxC,qBASC,aC5CqB,CD6CrB,+BCjD+B,CDkDhC,OAGC,QAAS,CACT,SAAU,CACX,QAGC,8BAA+B,CE3DjC,OFCE,YAAa,CACb,qBAAsB,CACtB,kBAAmB,CACnB,sBAAuB,CEFxB,WAGC,YAAa,CACd,YAGC,cAAe,CACf,+BDT+B,CCU/B,aDNqB,CCOrB,iBAAkB",sourcesContent:["@import './Vars.scss';\r\n\r\n@mixin colCenCen {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n@mixin flexBetCen {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n@mixin flexCenCen {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@mixin flexStaSta {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\na:link,\r\na:visited {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  background-color: $dark-color;\r\n  color: $light-color;\r\n  font-family: $text-font;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  color: $primary-color;\r\n  font-family: $title-font;\r\n}\r\n\r\nfigure {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nsection {\r\n  min-height: calc(100vh - 300px);\r\n}\r\n","@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);\r\n\r\n//Fonts\r\n$title-font: 'Oswald', sans-serif;\r\n$text-font: 'Source Sans Pro', sans-serif;\r\n\r\n//Colors\r\n$primary-color: #65fafb;\r\n$secondary-color: #62c241;\r\n$success-color: #faf76a;\r\n$dark-color: #000000;\r\n$light-color: #ffffff;\r\n$danger-color: #fc859e;\r\n","@import '../App.scss';\r\n\r\n.empty {\r\n  @include colCenCen;\r\n}\r\n\r\n.empty-img {\r\n  height: 225px;\r\n}\r\n\r\n.empty-text {\r\n  font-size: 35px;\r\n  font-family: $title-font;\r\n  color: $primary-color;\r\n  text-align: center;\r\n}"],sourceRoot:""}]),r.Z=i},409:function(n,r,e){"use strict";var t=e(4015),s=e.n(t),o=e(3645),i=e.n(o)()(s());i.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);"]),i.push([n.id,'*{box-sizing:border-box}a:link,a:visited{color:inherit;text-decoration:none}body{margin:0;background-color:#000;color:#fff;font-family:"Source Sans Pro",sans-serif}h1,h2,h3,h3,h4,h5,h6{color:#65fafb;font-family:"Oswald",sans-serif}figure{margin:0;padding:0}section{min-height:calc(100vh - 300px)}.favoriteList{display:flex;justify-content:center;align-items:center;flex-wrap:wrap}\n',"",{version:3,sources:["webpack://./src/assets/styles/App.scss","webpack://./src/assets/styles/Vars.scss","webpack://./src/assets/styles/components/FavoriteList.scss"],names:[],mappings:"AA2BA,EACE,qBAAsB,CACvB,iBAIC,aAAc,CACd,oBAAqB,CACtB,KAGC,QAAS,CACT,qBC7BkB,CD8BlB,UC7BmB,CD8BnB,wCCrCuC,CDsCxC,qBASC,aC5CqB,CD6CrB,+BCjD+B,CDkDhC,OAGC,QAAS,CACT,SAAU,CACX,QAGC,8BAA+B,CE3DjC,cFcE,YAAa,CACb,sBAAuB,CACvB,kBAAmB,CEdnB,cAAe",sourcesContent:["@import './Vars.scss';\r\n\r\n@mixin colCenCen {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n@mixin flexBetCen {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n@mixin flexCenCen {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@mixin flexStaSta {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\na:link,\r\na:visited {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  background-color: $dark-color;\r\n  color: $light-color;\r\n  font-family: $text-font;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  color: $primary-color;\r\n  font-family: $title-font;\r\n}\r\n\r\nfigure {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nsection {\r\n  min-height: calc(100vh - 300px);\r\n}\r\n","@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);\r\n\r\n//Fonts\r\n$title-font: 'Oswald', sans-serif;\r\n$text-font: 'Source Sans Pro', sans-serif;\r\n\r\n//Colors\r\n$primary-color: #65fafb;\r\n$secondary-color: #62c241;\r\n$success-color: #faf76a;\r\n$dark-color: #000000;\r\n$light-color: #ffffff;\r\n$danger-color: #fc859e;\r\n","@import '../App.scss';\r\n\r\n.favoriteList {\r\n  @include flexCenCen;\r\n  flex-wrap: wrap;\r\n}"],sourceRoot:""}]),r.Z=i}}]);
//# sourceMappingURL=190.bundle.js.map