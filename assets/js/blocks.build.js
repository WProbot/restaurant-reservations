!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t){var n=wp.i18n.__,r=wp.blocks.registerBlockType,o=wp.components,l=o.SelectControl,a=o.PanelBody,i=o.ServerSideRender,u=o.Disabled,c=wp.editor.InspectorControls,s=rtb_blocks,p=s.locationsEnabled,m=s.locations;r("restaurant-reservations/booking-form",{title:n("Booking Form","restaurant-reservations"),icon:"calendar",category:"widgets",attributes:{location:{type:"number",default:0}},supports:{html:!1,reusable:!1,multiple:!1},edit:function(e){var t=e.attributes,r=e.setAttributes,o=t.location;return wp.element.createElement("div",null,p?wp.element.createElement(c,null,wp.element.createElement(a,null,wp.element.createElement(l,{label:n("Location"),value:o,onChange:function(e){return r({location:e})},options:m}))):"",wp.element.createElement(u,null,wp.element.createElement(i,{block:"restaurant-reservations/booking-form",attributes:t})))},save:function(){return null}})}]);