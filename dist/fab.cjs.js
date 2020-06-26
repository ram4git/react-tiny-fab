/****  React Tiny FAB - Deric Cain<deric.cain@gmail.com>  *****/
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

const AB=a=>React__default.createElement("button",_extends({type:"button"},a,{className:"rtf--ab"}),a.children);const MB=a=>React__default.createElement("button",_extends({type:"button",className:"rtf--mb"},a),a.children);const defaultPosition={bottom:24,right:24},Fab=({event:f="hover",position:g=defaultPosition,alwaysShowTitle:h=!1,children:a,icon:b,mainButtonStyles:c,onClick:d,text:e})=>{const[j,k]=React.useState(!1),l=h||!j,m=()=>k(!0),n=()=>k(!1),o=(a,b)=>{a.persist(),k(!1),setTimeout(()=>{b(a);},1);},p={};return j||(p.display="none"),React__default.createElement("ul",{onMouseEnter:()=>"hover"===f&&m(),onMouseLeave:()=>"hover"===f&&n(),className:`rtf ${j?"open":"closed"}`,style:g},React__default.createElement("li",{className:"rtf--mb__c"},React__default.createElement(MB,{onClick:a=>d?d(a):(a.persist(),"click"===f?j?n():m():null),style:c,role:"button","aria-label":"Floating menu",tabIndex:"0"},b),e&&React__default.createElement("span",{className:`${"right"in g?"right":""} ${h?"always-show":""}`,"aria-hidden":l},e),React__default.createElement("ul",{style:p},(()=>React__default.Children.map(a,(a,b)=>a&&React__default.createElement("li",{className:`rtf--ab__c ${"top"in g?"top":""}`},React__default.cloneElement(a,{"data-testid":`action-button-${b}`,"aria-label":a.props.text||`Menu button ${b+1}`,"aria-hidden":l,tabIndex:j?0:-1,...a.props,onClick:b=>o(b,a.props.onClick)}),a.props.text&&React__default.createElement("span",{className:`${"right"in g?"right":""} ${h?"always-show":""}`,"aria-hidden":l},a.props.text))))())))};

exports.Action = AB;
exports.Fab = Fab;
exports.MB = MB;
