!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.GurbaniNow=r():e.GurbaniNow=r()}(this,function(){return function(e){function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}var t={};return r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=0)}([function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i=r.API_URL="https://api.gurbaninow.com/v2/";r.TYPES=["First Letter Start (Gurmukhi/Unicode)","First Letter Anywhere (Gurmukhi/Unicode)","Full Word/Line (Gurmukhi)","Full Word/Line (English)","Search All Words (Gurmukhi)","Search All Words (English)","Search Any Words (Gurmukhi)","Search Any Words (English)"],r.SOURCES={G:"Sri Guru Granth Sahib Ji",D:"Sri Dasam Granth",B:"Bhai Gurdas Ji Vaaran",N:"Bhai Nand Lal Ji Guzals",A:"Amrit Keertan",U:"Uggardanti"},r.buildApiUrl=function(e){var r=e.q,t=void 0!==r&&r,n=e.source,o=void 0!==n&&n,u=e.type,a=void 0!==u&&u,s=e.writer,d=void 0!==s&&s,c=e.raag,l=void 0!==c&&c,h=e.ang,f=void 0!==h&&h,p=e.results,v=void 0!==p&&p,m=e.offset,b=void 0!==m&&m,y=e.id,g=void 0!==y&&y,G=e.hukam,S=void 0!==G&&G,k=e.unicode,w=void 0!==k&&k,x=e.akhar,A=void 0!==x&&x,j=i;if(!1!==t){var U=[];o&&U.push("source="+o),a&&U.push("searchtype="+a),d&&U.push("writer="+d),l&&U.push("raag="+l),f&&U.push("ang="+f),v&&U.push("results="+v),b&&U.push("offset="+b),j+="search/"+t+"?"+U.join("&")}else if(!1!==g)j+="shabad/"+g;else if(!1!==f)j+="ang/"+f+"/"+(o||"");else if(!1!==S)j+="hukamnama/today";else if(!1!==w)j+="convert/unicode/"+w;else{if(!1===A)throw new Error("Invalid Options Sent");j+="convert/akhar/"+A}return j}}])});