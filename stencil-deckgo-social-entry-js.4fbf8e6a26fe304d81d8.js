(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{269:function(t,i,e){"use strict";e.r(i),e.d(i,"deckgo_social",(function(){return l}));var n=e(25),l=function(){function t(t){Object(n.e)(this,t)}return t.prototype.componentWillLoad=function(){this.concatTwitterUrl(),this.concatLinkedinUrl(),this.concatMediumUrl(),this.concatDevUrl(),this.concatGithubUrl(),this.concatFullUrl()},t.prototype.lazyLoadContent=function(){return new Promise((function(t){t()}))},t.prototype.concatTwitterUrl=function(){this.twitter&&(this.url="https://twitter.com/"+this.twitter)},t.prototype.concatLinkedinUrl=function(){this.linkedin&&(this.url="https://www.linkedin.com/in/"+this.linkedin)},t.prototype.concatMediumUrl=function(){this.medium&&(this.url="https://medium.com/@"+this.medium)},t.prototype.concatDevUrl=function(){this.dev&&(this.url="https://dev.to/"+this.dev)},t.prototype.concatGithubUrl=function(){this.github&&(this.url="https://github.com/"+this.github)},t.prototype.concatFullUrl=function(){this.fullUrl&&(this.url=this.fullUrl)},t.prototype.ariaLabel=function(){return this.twitter?"twitter/"+this.twitter:this.linkedin?"linkedin/"+this.linkedin:this.medium?"medium/"+this.medium:this.dev?"thepracticaldev/"+this.dev:this.github?"github/"+this.github:this.fullUrl},t.prototype.render=function(){return Object(n.d)(n.a,{"aria-label":this.ariaLabel()},Object(n.d)("a",{href:this.url},Object(n.d)("slot",{name:"icon"}),Object(n.d)("slot",null,this.twitter?Object(n.d)("span",null,""+this.twitter):void 0,this.linkedin?Object(n.d)("span",null,""+this.linkedin):void 0,this.medium?Object(n.d)("span",null,""+this.medium):void 0,this.dev?Object(n.d)("span",null,""+this.dev):void 0,this.github?Object(n.d)("span",null,""+this.github):void 0,this.fullUrl?Object(n.d)("span",null,""+this.fullUrl):void 0)))},Object.defineProperty(t,"watchers",{get:function(){return{twitter:["concatTwitterUrl"],linkedin:["concatLinkedinUrl"],medium:["concatMediumUrl"],dev:["concatDevUrl"],github:["concatGithubUrl"],fullUrl:["concatFullUrl"]}},enumerable:!0,configurable:!0}),t}();l.style=":host{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center}a{color:inherit;text-decoration:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;max-width:100%}a span{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}::slotted([slot=icon]){margin-right:8px}"}}]);