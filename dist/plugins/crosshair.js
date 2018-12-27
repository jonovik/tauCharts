/*!
 * /*
 * taucharts@2.6.4 (2018-12-27)
 * Copyright 2018 Targetprocess, Inc.
 * Licensed under Apache License 2.0
 * * /
 * 
 */
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("taucharts"),require("d3-selection"));else if("function"==typeof define&&define.amd)define(["taucharts","d3-selection"],e);else{var a="object"==typeof exports?e(require("taucharts"),require("d3-selection")):e(t.Taucharts,t.d3);for(var r in a)("object"==typeof exports?exports:t)[r]=a[r]}}(window,function(t,e){return function(t){var e={};function a(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,a),i.l=!0,i.exports}return a.m=t,a.c=e,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(r,i,function(e){return t[e]}.bind(null,i));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=18)}({0:function(e,a){e.exports=t},1:function(t,a){t.exports=e},18:function(t,e,a){"use strict";a.r(e);var r=a(0),i=a.n(r),n=a(1),o="http://www.w3.org/2000/svg",l=i.a.api.utils,s=i.a.api.svgUtils,d=i.a.api.pluginsSDK;function c(t){t=t||{};var e=document.createElementNS(o,"g"),a=n.select(e).attr("class","tau-crosshair__label");a.append("rect").attr("class","tau-crosshair__label__box"),a.append("text").attr("class","tau-crosshair__label__text-shadow"),a.append("text").attr("class","tau-crosshair__label__text");var r={options:function(e){return t=Object.assign(t,e),r},show:function(i){return t.container.appendChild(e),function(e){var r=e.x,i=e.y,n=e.text,o=e.color,l=e.colorCls;a.attr("class","tau-crosshair__label "+l);var s=t.halign,d=t.valign,c=t.hpad,u=t.vpad,h={left:"end",middle:"middle",right:"start"}[s],f={left:-c,middle:0,right:c}[s],g=a.select(".tau-crosshair__label__text").attr("fill",o),x=a.selectAll(".tau-crosshair__label__text, .tau-crosshair__label__text-shadow").attr("text-anchor",h).attr("x",r+f).attr("y",0).text(n),_=g.node().getBBox(),p={top:-u-_.height/2,middle:0,bottom:u+_.height/2}[d]-_.height/2-_.y;x.attr("y",i+p);var m=_.width+2*c,b=_.height+2*u,v={left:-m,middle:-m/2,right:0}[s],y={top:-b,middle:-b/2,bottom:0}[d];a.select(".tau-crosshair__label__box").attr("fill",o).attr("rx",t.boxCornerRadius).attr("ry",t.boxCornerRadius).attr("x",r+v).attr("y",i+y).attr("width",m).attr("height",b)}(i),function(){a.attr("transform","");var r=t.chart.getLayout().contentContainer.getBoundingClientRect(),i=t.chart.getSVG().getBoundingClientRect(),n=e.getBoundingClientRect(),o=Math.max(0,Math.max(r.left,i.left)-n.left)||Math.min(0,Math.min(r.right,i.right)-n.right),l=Math.max(0,Math.max(r.top,i.top)-n.top)||Math.min(0,Math.min(r.bottom,i.bottom)-n.bottom);a.attr("transform","translate("+o+","+l+")")}(),r},hide:function(){return e.parentNode&&e.parentNode.removeChild(e),r}};return r}function u(t){var e=l.defaults(t||{},{xAxis:!0,yAxis:!0,formatters:{},labelBoxHPadding:5,labelBoxVPadding:3,labelBoxCornerRadius:3,axisHPadding:22,axisVPadding:22});return{init:function(t){this._chart=t,this._formatters={},this._createNode()},_createNode:function(){var t=n.select(document.createElementNS(o,"g")).attr("class","tau-crosshair");this._labels={x:null,y:null};var a=function(a){var r=t.append("g").attr("class","tau-crosshair__group "+a);r.append("line").attr("class","tau-crosshair__line-shadow"),r.append("line").attr("class","tau-crosshair__line"),this._labels[a]=c({container:r.node(),chart:this._chart,halign:"x"===a?"middle":"left",valign:"x"===a?"bottom":"middle",boxCornerRadius:e.labelBoxCornerRadius,hpad:e.labelBoxHPadding,vpad:e.labelBoxVPadding})}.bind(this);e.xAxis&&a("x"),e.yAxis&&a("y"),this._element=t},_setValues:function(t,a,r){var i=function(t){var a=this._element.select(".tau-crosshair__group."+t.dir);a.select(".tau-crosshair__line").attr("class","tau-crosshair__line "+r.cls).attr("stroke",r.color),a.selectAll(".tau-crosshair__line, .tau-crosshair__line-shadow").attr("x1",t.startPt.x).attr("x2",t.valuePt.x).attr("y1",t.startPt.y).attr("y2",t.valuePt.y),("x"===t.dir&&e.xAxis||"y"===t.dir&&e.yAxis)&&this._labels[t.dir].options({halign:t.labelHAlign,valign:t.labelVAlign}).show({x:t.startPt.x,y:t.startPt.y,text:t.label,color:r.color,colorCls:r.cls})}.bind(this);i({dir:"x",startPt:{x:t.value,y:a.start+(t.minMode?0:e.axisVPadding)},valuePt:{x:t.value,y:a.value+a.crossPadding},label:t.label,labelHAlign:"middle",labelVAlign:"bottom"}),i({dir:"y",startPt:{x:t.start-(a.minMode?0:e.axisHPadding),y:a.value},valuePt:{x:t.value-t.crossPadding,y:a.value},label:a.label,labelHAlign:"left",labelVAlign:"middle"})},_showCrosshair:function(t,e,a){var r=this._chart.getSVG(),i=e.config.options.container.node(),n=s.getDeepTransformTranslate(i);this._element.attr("transform",s.translate(n.x,n.y)),r.appendChild(this._element.node());var o=e.getScale("x"),l=e.getScale("y"),d=e.getScale("color"),c=d(t.data[d.dim]),u=t.data[o.dim],h=t.data[l.dim],f=e.screenModel.x(t.data),g=e.screenModel.y(t.data);if(e.config.stack)if(e.config.flip){var x=e.data().filter(function(a){var r=a[l.dim];return a===t.data||(r===h||r-h==0)&&(e.screenModel.x(t.data)-e.screenModel.x(a))*a[o.dim]>0});f=(u<0?Math.min:Math.max).apply(null,x.map(function(t){return e.screenModel.x(t)},0)),u=x.reduce(function(t,e){return t+e[o.dim]},0)}else{var _=e.data().filter(function(a){var r=a[o.dim];return a===t.data||(r===u||r-u==0)&&(e.screenModel.y(a)-e.screenModel.y(t.data))*a[l.dim]>0});g=(h<0?Math.max:Math.min).apply(null,_.map(function(t){return e.screenModel.y(t)},0)),h=_.reduce(function(t,e){return t+e[l.dim]},0)}var p=t.node.getBBox(),m=["ELEMENT.AREA","ELEMENT.INTERVAL","ELEMENT.INTERVAL.STACKED"].indexOf(e.config.type)>=0?{x:p.width*(e.config.flip?u>0?1:0:.5),y:p.height*(e.config.flip?.5:h>0?1:0)}:{x:p.width/2,y:p.height/2};this._setValues({label:this._getFormat(o.dim)(u),start:0,value:f,crossPadding:m.x,minMode:a&&a.guide.x.hide},{label:this._getFormat(l.dim)(h),start:e.config.options.height,value:g,crossPadding:m.y,minMode:a&&a.guide.y.hide},{cls:d.toColor(c)?"":c,color:d.toColor(c)?c:""})},_hideCrosshair:function(){var t=this._element.node();t.parentNode&&t.parentNode.removeChild(t)},destroy:function(){this._hideCrosshair()},_subscribeToHover:function(){var t=["ELEMENT.LINE","ELEMENT.AREA","ELEMENT.PATH","ELEMENT.INTERVAL","ELEMENT.INTERVAL.STACKED","ELEMENT.POINT"];this._chart.select(function(e){return t.indexOf(e.config.type)>=0}).forEach(function(t){t.on("data-hover",function(t,e){if(e.data){if(t===e.unit){var a=d.getParentUnit(this._chart.getSpec(),t.config);this._showCrosshair(e,t,a)}}else this._hideCrosshair()}.bind(this))},this)},_getFormat:function(t){return this._formatters[t]?this._formatters[t].format:function(t){return String(t)}},onRender:function(){this._formatters=d.getFieldFormatters(this._chart.getSpec(),e.formatters),this._subscribeToHover()}}}i.a.api.plugins.add("crosshair",u),e.default=u}})});