"use strict";var i=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var r=Object.getOwnPropertyNames;var s=Object.prototype.hasOwnProperty;var f=(o,n)=>{for(var a in n)i(o,a,{get:n[a],enumerable:!0})},d=(o,n,a,c)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of r(n))!s.call(o,t)&&t!==a&&i(o,t,{get:()=>n[t],enumerable:!(c=m(n,t))||c.enumerable});return o};var p=o=>d(i({},"__esModule",{value:!0}),o);var u={};f(u,{default:()=>l});module.exports=p(u);var e=require("@raycast/api");async function l(){let o="cleanshot://self-timer";await(0,e.closeMainWindow)(),(0,e.open)(o)}