/****  React Tiny FAB - Deric Cain<deric.cain@gmail.com>  *****/
import React, { useState } from 'react';

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

const AB=a=>React.createElement("button",_extends({type:"button"},a,{className:"rtf--ab"}),a.children);const MB=a=>React.createElement("button",_extends({type:"button",className:"rtf--mb"},a),a.children);const defaultPosition={bottom:24,right:24},Fab=({event:f="hover",position:g=defaultPosition,alwaysShowTitle:h=!1,children:a,icon:b,mainButtonStyles:c,onClick:d,text:e})=>{const[j,k]=useState(!1),l=h||!j,m=()=>k(!0),n=()=>k(!1),o=(a,b)=>{a.persist(),k(!1),setTimeout(()=>{b(a);},1);},p={};return j&&(p.display="none"),React.createElement("ul",{onMouseEnter:()=>"hover"===f&&m(),onMouseLeave:()=>"hover"===f&&n(),className:`rtf ${j?"open":"closed"}`,style:g},React.createElement("li",{className:"rtf--mb__c"},React.createElement(MB,{onClick:a=>d?d(a):(a.persist(),"click"===f?j?n():m():null),style:c,role:"button","aria-label":"Floating menu",tabIndex:"0"},b),e&&React.createElement("span",{className:`${"right"in g?"right":""} ${h?"always-show":""}`,"aria-hidden":l},e),React.createElement("ul",{style:p},(()=>React.Children.map(a,(a,b)=>a&&React.createElement("li",{className:`rtf--ab__c ${"top"in g?"top":""}`},React.cloneElement(a,{"data-testid":`action-button-${b}`,"aria-label":a.props.text||`Menu button ${b+1}`,"aria-hidden":l,tabIndex:j?0:-1,...a.props,onClick:b=>o(b,a.props.onClick)}),a.props.text&&React.createElement("span",{className:`${"right"in g?"right":""} ${h?"always-show":""}`,"aria-hidden":l},a.props.text))))())))};

export { AB as Action, Fab, MB };
