var cd=i=>{throw TypeError(i)};var xs=(i,e,t)=>e.has(i)?cd("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t);function ld(i,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const s in n)if(s!=="default"&&!(s in i)){const r=Object.getOwnPropertyDescriptor(n,s);r&&Object.defineProperty(i,s,r.get?r:{enumerable:!0,get:()=>n[s]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rc="170",hd=0,Wc=1,ud=2,Eh=1,dd=2,Tn=3,Zn=0,kt=1,fn=2,Yn=0,es=1,$c=2,Xc=3,Yc=4,fd=5,ui=100,pd=101,md=102,gd=103,_d=104,vd=200,xd=201,yd=202,Md=203,ea=204,ta=205,Sd=206,bd=207,Ed=208,Td=209,Cd=210,Ad=211,wd=212,Rd=213,Pd=214,na=0,ia=1,sa=2,rs=3,ra=4,oa=5,aa=6,ca=7,oc=0,Ld=1,Id=2,qn=0,Dd=1,Ud=2,Nd=3,Od=4,Fd=5,kd=6,Bd=7,Th=300,os=301,as=302,la=303,ha=304,io=306,ua=1e3,pi=1001,da=1002,mt=1003,zd=1004,er=1005,pn=1006,mo=1007,mi=1008,Ln=1009,Ch=1010,Ah=1011,Hs=1012,ac=1013,Mi=1014,mn=1015,js=1016,cc=1017,lc=1018,cs=1020,wh=35902,Rh=1021,Ph=1022,an=1023,Lh=1024,Ih=1025,ts=1026,ls=1027,hc=1028,uc=1029,Dh=1030,dc=1031,fc=1033,Lr=33776,Ir=33777,Dr=33778,Ur=33779,fa=35840,pa=35841,ma=35842,ga=35843,_a=36196,va=37492,xa=37496,ya=37808,Ma=37809,Sa=37810,ba=37811,Ea=37812,Ta=37813,Ca=37814,Aa=37815,wa=37816,Ra=37817,Pa=37818,La=37819,Ia=37820,Da=37821,Nr=36492,Ua=36494,Na=36495,Uh=36283,Oa=36284,Fa=36285,ka=36286,Gd=3200,Hd=3201,Nh=0,Vd=1,Vn="",Ct="srgb",ds="srgb-linear",so="linear",st="srgb",Li=7680,qc=519,Wd=512,$d=513,Xd=514,Oh=515,Yd=516,qd=517,jd=518,Kd=519,Ba=35044,jc="300 es",An=2e3,Vr=2001;class fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kc=1234567;const Os=Math.PI/180,Vs=180/Math.PI;function wn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function It(i,e,t){return Math.max(e,Math.min(t,i))}function pc(i,e){return(i%e+e)%e}function Zd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Jd(i,e,t){return i!==e?(t-i)/(e-i):0}function Fs(i,e,t){return(1-t)*i+t*e}function Qd(i,e,t,n){return Fs(i,e,1-Math.exp(-t*n))}function ef(i,e=1){return e-Math.abs(pc(i,e*2)-e)}function tf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function nf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function sf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function rf(i,e){return i+Math.random()*(e-i)}function of(i){return i*(.5-Math.random())}function af(i){i!==void 0&&(Kc=i);let e=Kc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cf(i){return i*Os}function lf(i){return i*Vs}function hf(i){return(i&i-1)===0&&i!==0}function uf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function df(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ff(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function on(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const pf={DEG2RAD:Os,RAD2DEG:Vs,generateUUID:wn,clamp:It,euclideanModulo:pc,mapLinear:Zd,inverseLerp:Jd,lerp:Fs,damp:Qd,pingpong:ef,smoothstep:tf,smootherstep:nf,randInt:sf,randFloat:rf,randFloatSpread:of,seededRandom:af,degToRad:cf,radToDeg:lf,isPowerOfTwo:hf,ceilPowerOfTwo:uf,floorPowerOfTwo:df,setQuaternionFromProperEuler:ff,normalize:nt,denormalize:on};class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,n,s,r,o,a,c,l){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],C=s[1],T=s[4],S=s[7],R=s[2],w=s[5],A=s[8];return r[0]=o*_+a*C+c*R,r[3]=o*m+a*T+c*w,r[6]=o*f+a*S+c*A,r[1]=l*_+h*C+u*R,r[4]=l*m+h*T+u*w,r[7]=l*f+h*S+u*A,r[2]=d*_+p*C+g*R,r[5]=d*m+p*T+g*w,r[8]=d*f+p*S+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,g=t*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(go.makeScale(e,t)),this}rotate(e){return this.premultiply(go.makeRotation(-e)),this}translate(e,t){return this.premultiply(go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const go=new Be;function Fh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mf(){const i=Wr("canvas");return i.style.display="block",i}const Zc={};function Is(i){i in Zc||(Zc[i]=!0,console.warn(i))}function gf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function _f(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vf(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ye={enabled:!0,workingColorSpace:ds,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===st&&(i.r=Rn(i.r),i.g=Rn(i.g),i.b=Rn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===st&&(i.r=ns(i.r),i.g=ns(i.g),i.b=ns(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Vn?so:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Rn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Jc=[.64,.33,.3,.6,.15,.06],Qc=[.2126,.7152,.0722],el=[.3127,.329],tl=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nl=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ye.define({[ds]:{primaries:Jc,whitePoint:el,transfer:so,toXYZ:tl,fromXYZ:nl,luminanceCoefficients:Qc,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:Jc,whitePoint:el,transfer:st,toXYZ:tl,fromXYZ:nl,luminanceCoefficients:Qc,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}});let Ii;class xf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ii===void 0&&(Ii=Wr("canvas")),Ii.width=e.width,Ii.height=e.height;const n=Ii.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Rn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Rn(t[n]/255)*255):t[n]=Rn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yf=0;class kh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=wn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(_o(s[o].image)):r.push(_o(s[o]))}else r=_o(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function _o(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mf=0;class wt extends fs{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=pi,s=pi,r=pn,o=mi,a=an,c=Ln,l=wt.DEFAULT_ANISOTROPY,h=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=wn(),this.name="",this.source=new kh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Th)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ua:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case da:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ua:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case da:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=Th;wt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,s=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,S=(p+1)/2,R=(f+1)/2,w=(h+d)/4,A=(u+_)/4,k=(g+m)/4;return T>S&&T>R?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=w/n,r=A/n):S>R?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=w/s,r=k/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=A/r,s=k/r),this.set(n,s,r,t),this}let C=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(C)<.001&&(C=1),this.x=(m-g)/C,this.y=(u-_)/C,this.z=(d-h)/C,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sf extends fs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new wt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new kh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends Sf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Bh extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=mt,this.minFilter=mt,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bf extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=mt,this.minFilter=mt,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==p||h!==g){let m=1-a;const f=c*d+l*p+h*g+u*_,C=f>=0?1:-1,T=1-f*f;if(T>Number.EPSILON){const R=Math.sqrt(T),w=Math.atan2(R,f*C);m=Math.sin(m*w)/R,a=Math.sin(a*w)/R}const S=a*C;if(c=c*m+d*S,l=l*m+p*S,h=h*m+g*S,u=u*m+_*S,m===1-a){const R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*p-l*d,e[t+1]=c*g+h*d+l*u-a*p,e[t+2]=l*g+h*p+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(il.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(il.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vo.copy(this).projectOnVector(e),this.sub(vo)}reflect(e){return this.sub(vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vo=new N,il=new jn;class Ei{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,tn):tn.fromBufferAttribute(r,o),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tr.copy(n.boundingBox)),tr.applyMatrix4(e.matrixWorld),this.union(tr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),nr.subVectors(this.max,ys),Di.subVectors(e.a,ys),Ui.subVectors(e.b,ys),Ni.subVectors(e.c,ys),Nn.subVectors(Ui,Di),On.subVectors(Ni,Ui),ni.subVectors(Di,Ni);let t=[0,-Nn.z,Nn.y,0,-On.z,On.y,0,-ni.z,ni.y,Nn.z,0,-Nn.x,On.z,0,-On.x,ni.z,0,-ni.x,-Nn.y,Nn.x,0,-On.y,On.x,0,-ni.y,ni.x,0];return!xo(t,Di,Ui,Ni,nr)||(t=[1,0,0,0,1,0,0,0,1],!xo(t,Di,Ui,Ni,nr))?!1:(ir.crossVectors(Nn,On),t=[ir.x,ir.y,ir.z],xo(t,Di,Ui,Ni,nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yn=[new N,new N,new N,new N,new N,new N,new N,new N],tn=new N,tr=new Ei,Di=new N,Ui=new N,Ni=new N,Nn=new N,On=new N,ni=new N,ys=new N,nr=new N,ir=new N,ii=new N;function xo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ii.fromArray(i,r);const a=s.x*Math.abs(ii.x)+s.y*Math.abs(ii.y)+s.z*Math.abs(ii.z),c=e.dot(ii),l=t.dot(ii),h=n.dot(ii);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Ef=new Ei,Ms=new N,yo=new N;class ps{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ef.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);const t=Ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ms,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(yo)),this.expandByPoint(Ms.copy(e.center).sub(yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new N,Mo=new N,sr=new N,Fn=new N,So=new N,rr=new N,bo=new N;class mc{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Mo.copy(e).add(t).multiplyScalar(.5),sr.copy(t).sub(e).normalize(),Fn.copy(this.origin).sub(Mo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(sr),a=Fn.dot(this.direction),c=-Fn.dot(sr),l=Fn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Mo).addScaledVector(sr,d),p}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const n=Mn.dot(this.direction),s=Mn.dot(Mn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,n,s,r){So.subVectors(t,e),rr.subVectors(n,e),bo.crossVectors(So,rr);let o=this.direction.dot(bo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fn.subVectors(this.origin,e);const c=a*this.direction.dot(rr.crossVectors(Fn,rr));if(c<0)return null;const l=a*this.direction.dot(So.cross(Fn));if(l<0||c+l>o)return null;const h=-a*Fn.dot(bo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,t,n,s,r,o,a,c,l,h,u,d,p,g,_,m){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,p,g,_,m)}set(e,t,n,s,r,o,a,c,l,h,u,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Oi.setFromMatrixColumn(e,0).length(),r=1/Oi.setFromMatrixColumn(e,1).length(),o=1/Oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-p,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tf,e,Cf)}lookAt(e,t,n){const s=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),kn.crossVectors(n,zt),kn.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),kn.crossVectors(n,zt)),kn.normalize(),or.crossVectors(zt,kn),s[0]=kn.x,s[4]=or.x,s[8]=zt.x,s[1]=kn.y,s[5]=or.y,s[9]=zt.y,s[2]=kn.z,s[6]=or.z,s[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],C=n[3],T=n[7],S=n[11],R=n[15],w=s[0],A=s[4],k=s[8],b=s[12],x=s[1],P=s[5],W=s[9],V=s[13],q=s[2],ee=s[6],K=s[10],ne=s[14],$=s[3],ae=s[7],me=s[11],Ee=s[15];return r[0]=o*w+a*x+c*q+l*$,r[4]=o*A+a*P+c*ee+l*ae,r[8]=o*k+a*W+c*K+l*me,r[12]=o*b+a*V+c*ne+l*Ee,r[1]=h*w+u*x+d*q+p*$,r[5]=h*A+u*P+d*ee+p*ae,r[9]=h*k+u*W+d*K+p*me,r[13]=h*b+u*V+d*ne+p*Ee,r[2]=g*w+_*x+m*q+f*$,r[6]=g*A+_*P+m*ee+f*ae,r[10]=g*k+_*W+m*K+f*me,r[14]=g*b+_*V+m*ne+f*Ee,r[3]=C*w+T*x+S*q+R*$,r[7]=C*A+T*P+S*ee+R*ae,r[11]=C*k+T*W+S*K+R*me,r[15]=C*b+T*V+S*ne+R*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*p-n*c*p)+_*(+t*c*p-t*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+f*(-s*a*h-t*c*u+t*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],C=u*m*l-_*d*l+_*c*p-a*m*p-u*c*f+a*d*f,T=g*d*l-h*m*l-g*c*p+o*m*p+h*c*f-o*d*f,S=h*_*l-g*u*l+g*a*p-o*_*p-h*a*f+o*u*f,R=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,w=t*C+n*T+s*S+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=C*A,e[1]=(_*d*r-u*m*r-_*s*p+n*m*p+u*s*f-n*d*f)*A,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*f+n*c*f)*A,e[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*p-n*c*p)*A,e[4]=T*A,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*A,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*f-t*c*f)*A,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*p+t*c*p)*A,e[8]=S*A,e[9]=(g*u*r-h*_*r-g*n*p+t*_*p+h*n*f-t*u*f)*A,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*f+t*a*f)*A,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*p-t*a*p)*A,e[12]=R*A,e[13]=(h*_*s-g*u*s+g*n*d-t*_*d-h*n*m+t*u*m)*A,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*m-t*a*m)*A,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,C=c*l,T=c*h,S=c*u,R=n.x,w=n.y,A=n.z;return s[0]=(1-(_+f))*R,s[1]=(p+S)*R,s[2]=(g-T)*R,s[3]=0,s[4]=(p-S)*w,s[5]=(1-(d+f))*w,s[6]=(m+C)*w,s[7]=0,s[8]=(g+T)*A,s[9]=(m-C)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Oi.set(s[0],s[1],s[2]).length();const o=Oi.set(s[4],s[5],s[6]).length(),a=Oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],nn.copy(this);const l=1/r,h=1/o,u=1/a;return nn.elements[0]*=l,nn.elements[1]*=l,nn.elements[2]*=l,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,t.setFromRotationMatrix(nn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=An){const c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let p,g;if(a===An)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Vr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=An){const c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*l,p=(n+s)*h;let g,_;if(a===An)g=(o+r)*u,_=-2*u;else if(a===Vr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Oi=new N,nn=new Ke,Tf=new N(0,0,0),Cf=new N(1,1,1),kn=new N,or=new N,zt=new N,sl=new Ke,rl=new jn;class gn{constructor(e=0,t=0,n=0,s=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(It(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rl.setFromEuler(this),this.setFromQuaternion(rl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class gc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Af=0;const ol=new N,Fi=new jn,Sn=new Ke,ar=new N,Ss=new N,wf=new N,Rf=new jn,al=new N(1,0,0),cl=new N(0,1,0),ll=new N(0,0,1),hl={type:"added"},Pf={type:"removed"},ki={type:"childadded",child:null},Eo={type:"childremoved",child:null};class xt extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new N,t=new gn,n=new jn,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Be}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(al,e)}rotateY(e){return this.rotateOnAxis(cl,e)}rotateZ(e){return this.rotateOnAxis(ll,e)}translateOnAxis(e,t){return ol.copy(e).applyQuaternion(this.quaternion),this.position.add(ol.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(al,e)}translateY(e){return this.translateOnAxis(cl,e)}translateZ(e){return this.translateOnAxis(ll,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ar.copy(e):ar.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(Ss,ar,this.up):Sn.lookAt(ar,Ss,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(Sn),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hl),ki.child=e,this.dispatchEvent(ki),ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pf),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hl),ki.child=e,this.dispatchEvent(ki),ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,e,wf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,Rf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}xt.DEFAULT_UP=new N(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new N,bn=new N,To=new N,En=new N,Bi=new N,zi=new N,ul=new N,Co=new N,Ao=new N,wo=new N,Ro=new pt,Po=new pt,Lo=new pt;class Zt{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),sn.subVectors(e,t),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){sn.subVectors(s,t),bn.subVectors(n,t),To.subVectors(e,t);const o=sn.dot(sn),a=sn.dot(bn),c=sn.dot(To),l=bn.dot(bn),h=bn.dot(To),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,En)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,En.x),c.addScaledVector(o,En.y),c.addScaledVector(a,En.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Ro.setScalar(0),Po.setScalar(0),Lo.setScalar(0),Ro.fromBufferAttribute(e,t),Po.fromBufferAttribute(e,n),Lo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ro,r.x),o.addScaledVector(Po,r.y),o.addScaledVector(Lo,r.z),o}static isFrontFacing(e,t,n,s){return sn.subVectors(n,t),bn.subVectors(e,t),sn.cross(bn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),sn.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Zt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Bi.subVectors(s,n),zi.subVectors(r,n),Co.subVectors(e,n);const c=Bi.dot(Co),l=zi.dot(Co);if(c<=0&&l<=0)return t.copy(n);Ao.subVectors(e,s);const h=Bi.dot(Ao),u=zi.dot(Ao);if(h>=0&&u<=h)return t.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Bi,o);wo.subVectors(e,r);const p=Bi.dot(wo),g=zi.dot(wo);if(g>=0&&p<=g)return t.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(zi,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return ul.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(ul,a);const f=1/(m+_+d);return o=_*f,a=d*f,t.copy(n).addScaledVector(Bi,o).addScaledVector(zi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},cr={h:0,s:0,l:0};function Io(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ye.workingColorSpace){if(e=pc(e,1),t=It(t,0,1),n=It(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Io(o,r,e+1/3),this.g=Io(o,r,e),this.b=Io(o,r,e-1/3)}return Ye.toWorkingColorSpace(this,s),this}setStyle(e,t=Ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const n=zh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rn(e.r),this.g=Rn(e.g),this.b=Rn(e.b),this}copyLinearToSRGB(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return Ye.fromWorkingColorSpace(Tt.copy(this),e),Math.round(It(Tt.r*255,0,255))*65536+Math.round(It(Tt.g*255,0,255))*256+Math.round(It(Tt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(Tt.copy(this),t);const n=Tt.r,s=Tt.g,r=Tt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=Ct){Ye.fromWorkingColorSpace(Tt.copy(this),e);const t=Tt.r,n=Tt.g,s=Tt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Bn),this.setHSL(Bn.h+e,Bn.s+t,Bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL(cr);const n=Fs(Bn.h,cr.h,t),s=Fs(Bn.s,cr.s,t),r=Fs(Bn.l,cr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new ze;ze.NAMES=zh;let Lf=0;class Ti extends fs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=wn(),this.name="",this.blending=es,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ea,this.blendDst=ta,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ea&&(n.blendSrc=this.blendSrc),this.blendDst!==ta&&(n.blendDst=this.blendDst),this.blendEquation!==ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ws extends Ti{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new N,lr=new We;class Xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ba,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXY(t,lr.x,lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=on(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=on(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=on(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=on(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=on(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ba&&(e.usage=this.usage),e}}class Gh extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Hh extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class cn extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let If=0;const qt=new Ke,Do=new xt,Gi=new N,Gt=new Ei,bs=new Ei,St=new N;class hn extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fh(e)?Hh:Gh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,n){return qt.makeTranslation(e,t,n),this.applyMatrix4(qt),this}scale(e,t,n){return qt.makeScale(e,t,n),this.applyMatrix4(qt),this}lookAt(e){return Do.lookAt(e),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new cn(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Gt.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];bs.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(Gt.min,bs.min),Gt.expandByPoint(St),St.addVectors(Gt.max,bs.max),Gt.expandByPoint(St)):(Gt.expandByPoint(bs.min),Gt.expandByPoint(bs.max))}Gt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)St.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(St));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)St.fromBufferAttribute(a,l),c&&(Gi.fromBufferAttribute(e,l),St.add(Gi)),s=Math.max(s,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let k=0;k<n.count;k++)a[k]=new N,c[k]=new N;const l=new N,h=new N,u=new N,d=new We,p=new We,g=new We,_=new N,m=new N;function f(k,b,x){l.fromBufferAttribute(n,k),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,k),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,x),h.sub(l),u.sub(l),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[k].add(_),a[b].add(_),a[x].add(_),c[k].add(m),c[b].add(m),c[x].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let k=0,b=C.length;k<b;++k){const x=C[k],P=x.start,W=x.count;for(let V=P,q=P+W;V<q;V+=3)f(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const T=new N,S=new N,R=new N,w=new N;function A(k){R.fromBufferAttribute(s,k),w.copy(R);const b=a[k];T.copy(b),T.sub(R.multiplyScalar(R.dot(b))).normalize(),S.crossVectors(w,b);const P=S.dot(c[k])<0?-1:1;o.setXYZW(k,T.x,T.y,T.z,P)}for(let k=0,b=C.length;k<b;++k){const x=C[k],P=x.start,W=x.count;for(let V=P,q=P+W;V<q;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new N,r=new N,o=new N,a=new N,c=new N,l=new N,h=new N,u=new N;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new Xt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hn,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dl=new Ke,si=new mc,hr=new ps,fl=new N,ur=new N,dr=new N,fr=new N,Uo=new N,pr=new N,pl=new N,mr=new N;class rt extends xt{constructor(e=new hn,t=new Ws){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){pr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Uo.fromBufferAttribute(u,e),o?pr.addScaledVector(Uo,h):pr.addScaledVector(Uo.sub(t),h))}t.add(pr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(r),si.copy(e.ray).recast(e.near),!(hr.containsPoint(si.origin)===!1&&(si.intersectSphere(hr,fl)===null||si.origin.distanceToSquared(fl)>(e.far-e.near)**2))&&(dl.copy(r).invert(),si.copy(e.ray).applyMatrix4(dl),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,si)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],C=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=C,R=T;S<R;S+=3){const w=a.getX(S),A=a.getX(S+1),k=a.getX(S+2);s=gr(this,f,e,n,l,h,u,w,A,k),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const C=a.getX(m),T=a.getX(m+1),S=a.getX(m+2);s=gr(this,o,e,n,l,h,u,C,T,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],C=Math.max(m.start,p.start),T=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=C,R=T;S<R;S+=3){const w=S,A=S+1,k=S+2;s=gr(this,f,e,n,l,h,u,w,A,k),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const C=m,T=m+1,S=m+2;s=gr(this,o,e,n,l,h,u,C,T,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Df(i,e,t,n,s,r,o,a){let c;if(e.side===kt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Zn,a),c===null)return null;mr.copy(a),mr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(mr);return l<t.near||l>t.far?null:{distance:l,point:mr.clone(),object:i}}function gr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,ur),i.getVertexPosition(c,dr),i.getVertexPosition(l,fr);const h=Df(i,e,t,n,ur,dr,fr,pl);if(h){const u=new N;Zt.getBarycoord(pl,ur,dr,fr,u),s&&(h.uv=Zt.getInterpolatedAttribute(s,a,c,l,u,new We)),r&&(h.uv1=Zt.getInterpolatedAttribute(r,a,c,l,u,new We)),o&&(h.normal=Zt.getInterpolatedAttribute(o,a,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new N,materialIndex:0};Zt.getNormal(ur,dr,fr,d.normal),h.face=d,h.barycoord=u}return h}class ut extends hn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new cn(l,3)),this.setAttribute("normal",new cn(h,3)),this.setAttribute("uv",new cn(u,2));function g(_,m,f,C,T,S,R,w,A,k,b){const x=S/A,P=R/k,W=S/2,V=R/2,q=w/2,ee=A+1,K=k+1;let ne=0,$=0;const ae=new N;for(let me=0;me<K;me++){const Ee=me*P-V;for(let He=0;He<ee;He++){const Ze=He*x-W;ae[_]=Ze*C,ae[m]=Ee*T,ae[f]=q,l.push(ae.x,ae.y,ae.z),ae[_]=0,ae[m]=0,ae[f]=w>0?1:-1,h.push(ae.x,ae.y,ae.z),u.push(He/A),u.push(1-me/k),ne+=1}}for(let me=0;me<k;me++)for(let Ee=0;Ee<A;Ee++){const He=d+Ee+ee*me,Ze=d+Ee+ee*(me+1),j=d+(Ee+1)+ee*(me+1),ie=d+(Ee+1)+ee*me;c.push(He,Ze,ie),c.push(Ze,j,ie),$+=6}a.addGroup(p,$,b),p+=$,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ut(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Lt(i){const e={};for(let t=0;t<i.length;t++){const n=hs(i[t]);for(const s in n)e[s]=n[s]}return e}function Uf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Vh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const Nf={clone:hs,merge:Lt};var Of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ff=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends Ti{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Of,this.fragmentShader=Ff,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=Uf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Wh extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=An}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new N,ml=new We,gl=new We;class Kt extends Wh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zn.x,zn.y).multiplyScalar(-e/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-e/zn.z)}getViewSize(e,t){return this.getViewBounds(e,ml,gl),t.subVectors(gl,ml)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Os*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hi=-90,Vi=1;class kf extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Kt(Hi,Vi,e,t);s.layers=this.layers,this.add(s);const r=new Kt(Hi,Vi,e,t);r.layers=this.layers,this.add(r);const o=new Kt(Hi,Vi,e,t);o.layers=this.layers,this.add(o);const a=new Kt(Hi,Vi,e,t);a.layers=this.layers,this.add(a);const c=new Kt(Hi,Vi,e,t);c.layers=this.layers,this.add(c);const l=new Kt(Hi,Vi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class $h extends wt{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:os,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bf extends Si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new $h(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ut(5,5,5),r=new Jn({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:Yn});r.uniforms.tEquirect.value=t;const o=new rt(s,r),a=t.minFilter;return t.minFilter===mi&&(t.minFilter=pn),new kf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const No=new N,zf=new N,Gf=new Be;class ci{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=No.subVectors(n,t).cross(zf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(No),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Gf.getNormalMatrix(e),s=this.coplanarPoint(No).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new ps,_r=new N;class _c{constructor(e=new ci,t=new ci,n=new ci,s=new ci,r=new ci,o=new ci){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=An){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],C=s[13],T=s[14],S=s[15];if(n[0].setComponents(c-r,d-l,m-p,S-f).normalize(),n[1].setComponents(c+r,d+l,m+p,S+f).normalize(),n[2].setComponents(c+o,d+h,m+g,S+C).normalize(),n[3].setComponents(c-o,d-h,m-g,S-C).normalize(),n[4].setComponents(c-a,d-u,m-_,S-T).normalize(),t===An)n[5].setComponents(c+a,d+u,m+_,S+T).normalize();else if(t===Vr)n[5].setComponents(a,u,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(_r.x=s.normal.x>0?e.max.x:e.min.x,_r.y=s.normal.y>0?e.max.y:e.min.y,_r.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_r)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Hf(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class ro extends hn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const C=f*d-o;for(let T=0;T<l;T++){const S=T*u-r;g.push(S,-C,0),_.push(0,0,1),m.push(T/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let C=0;C<a;C++){const T=C+l*f,S=C+l*(f+1),R=C+1+l*(f+1),w=C+1+l*f;p.push(T,S,w),p.push(S,R,w)}this.setIndex(p),this.setAttribute("position",new cn(g,3)),this.setAttribute("normal",new cn(_,3)),this.setAttribute("uv",new cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ep=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,np=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ip=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",yp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Up=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Np=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$p=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,im=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,am=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,um=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_m=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Am=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Om=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Km=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ng=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ig=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ag=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ug=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_g=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:Vf,alphahash_pars_fragment:Wf,alphamap_fragment:$f,alphamap_pars_fragment:Xf,alphatest_fragment:Yf,alphatest_pars_fragment:qf,aomap_fragment:jf,aomap_pars_fragment:Kf,batching_pars_vertex:Zf,batching_vertex:Jf,begin_vertex:Qf,beginnormal_vertex:ep,bsdfs:tp,iridescence_fragment:np,bumpmap_pars_fragment:ip,clipping_planes_fragment:sp,clipping_planes_pars_fragment:rp,clipping_planes_pars_vertex:op,clipping_planes_vertex:ap,color_fragment:cp,color_pars_fragment:lp,color_pars_vertex:hp,color_vertex:up,common:dp,cube_uv_reflection_fragment:fp,defaultnormal_vertex:pp,displacementmap_pars_vertex:mp,displacementmap_vertex:gp,emissivemap_fragment:_p,emissivemap_pars_fragment:vp,colorspace_fragment:xp,colorspace_pars_fragment:yp,envmap_fragment:Mp,envmap_common_pars_fragment:Sp,envmap_pars_fragment:bp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:Np,envmap_vertex:Tp,fog_vertex:Cp,fog_pars_vertex:Ap,fog_fragment:wp,fog_pars_fragment:Rp,gradientmap_pars_fragment:Pp,lightmap_pars_fragment:Lp,lights_lambert_fragment:Ip,lights_lambert_pars_fragment:Dp,lights_pars_begin:Up,lights_toon_fragment:Op,lights_toon_pars_fragment:Fp,lights_phong_fragment:kp,lights_phong_pars_fragment:Bp,lights_physical_fragment:zp,lights_physical_pars_fragment:Gp,lights_fragment_begin:Hp,lights_fragment_maps:Vp,lights_fragment_end:Wp,logdepthbuf_fragment:$p,logdepthbuf_pars_fragment:Xp,logdepthbuf_pars_vertex:Yp,logdepthbuf_vertex:qp,map_fragment:jp,map_pars_fragment:Kp,map_particle_fragment:Zp,map_particle_pars_fragment:Jp,metalnessmap_fragment:Qp,metalnessmap_pars_fragment:em,morphinstance_vertex:tm,morphcolor_vertex:nm,morphnormal_vertex:im,morphtarget_pars_vertex:sm,morphtarget_vertex:rm,normal_fragment_begin:om,normal_fragment_maps:am,normal_pars_fragment:cm,normal_pars_vertex:lm,normal_vertex:hm,normalmap_pars_fragment:um,clearcoat_normal_fragment_begin:dm,clearcoat_normal_fragment_maps:fm,clearcoat_pars_fragment:pm,iridescence_pars_fragment:mm,opaque_fragment:gm,packing:_m,premultiplied_alpha_fragment:vm,project_vertex:xm,dithering_fragment:ym,dithering_pars_fragment:Mm,roughnessmap_fragment:Sm,roughnessmap_pars_fragment:bm,shadowmap_pars_fragment:Em,shadowmap_pars_vertex:Tm,shadowmap_vertex:Cm,shadowmask_pars_fragment:Am,skinbase_vertex:wm,skinning_pars_vertex:Rm,skinning_vertex:Pm,skinnormal_vertex:Lm,specularmap_fragment:Im,specularmap_pars_fragment:Dm,tonemapping_fragment:Um,tonemapping_pars_fragment:Nm,transmission_fragment:Om,transmission_pars_fragment:Fm,uv_pars_fragment:km,uv_pars_vertex:Bm,uv_vertex:zm,worldpos_vertex:Gm,background_vert:Hm,background_frag:Vm,backgroundCube_vert:Wm,backgroundCube_frag:$m,cube_vert:Xm,cube_frag:Ym,depth_vert:qm,depth_frag:jm,distanceRGBA_vert:Km,distanceRGBA_frag:Zm,equirect_vert:Jm,equirect_frag:Qm,linedashed_vert:eg,linedashed_frag:tg,meshbasic_vert:ng,meshbasic_frag:ig,meshlambert_vert:sg,meshlambert_frag:rg,meshmatcap_vert:og,meshmatcap_frag:ag,meshnormal_vert:cg,meshnormal_frag:lg,meshphong_vert:hg,meshphong_frag:ug,meshphysical_vert:dg,meshphysical_frag:fg,meshtoon_vert:pg,meshtoon_frag:mg,points_vert:gg,points_frag:_g,shadow_vert:vg,shadow_frag:xg,sprite_vert:yg,sprite_frag:Mg},re={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},dn={basic:{uniforms:Lt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Lt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Lt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Lt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Lt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Lt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Lt([re.points,re.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Lt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Lt([re.common,re.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Lt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Lt([re.sprite,re.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Lt([re.common,re.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Lt([re.lights,re.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};dn.physical={uniforms:Lt([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const vr={r:0,b:0,g:0},oi=new gn,Sg=new Ke;function bg(i,e,t,n,s,r,o){const a=new ze(0);let c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(C){let T=C.isScene===!0?C.background:null;return T&&T.isTexture&&(T=(C.backgroundBlurriness>0?t:e).get(T)),T}function _(C){let T=!1;const S=g(C);S===null?f(a,c):S&&S.isColor&&(f(S,1),T=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(C,T){const S=g(T);S&&(S.isCubeTexture||S.mapping===io)?(h===void 0&&(h=new rt(new ut(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:hs(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),oi.copy(T.backgroundRotation),oi.x*=-1,oi.y*=-1,oi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Sg.makeRotationFromEuler(oi)),h.material.toneMapped=Ye.getTransfer(S.colorSpace)!==st,(u!==S||d!==S.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,p=i.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new rt(new ro(2,2),new Jn({name:"BackgroundMaterial",uniforms:hs(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(S.colorSpace)!==st,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,p=i.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null))}function f(C,T){C.getRGB(vr,Vh(i)),n.buffers.color.setClear(vr.r,vr.g,vr.b,T,o)}return{getClearColor:function(){return a},setClearColor:function(C,T=1){a.set(C),c=T,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(C){c=C,f(a,c)},render:_,addToRenderList:m}}function Eg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(x,P,W,V,q){let ee=!1;const K=u(V,W,P);r!==K&&(r=K,l(r.object)),ee=p(x,V,W,q),ee&&g(x,V,W,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,S(x,P,W,V),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,P,W){const V=W.wireframe===!0;let q=n[x.id];q===void 0&&(q={},n[x.id]=q);let ee=q[P.id];ee===void 0&&(ee={},q[P.id]=ee);let K=ee[V];return K===void 0&&(K=d(c()),ee[V]=K),K}function d(x){const P=[],W=[],V=[];for(let q=0;q<t;q++)P[q]=0,W[q]=0,V[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:W,attributeDivisors:V,object:x,attributes:{},index:null}}function p(x,P,W,V){const q=r.attributes,ee=P.attributes;let K=0;const ne=W.getAttributes();for(const $ in ne)if(ne[$].location>=0){const me=q[$];let Ee=ee[$];if(Ee===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(Ee=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(Ee=x.instanceColor)),me===void 0||me.attribute!==Ee||Ee&&me.data!==Ee.data)return!0;K++}return r.attributesNum!==K||r.index!==V}function g(x,P,W,V){const q={},ee=P.attributes;let K=0;const ne=W.getAttributes();for(const $ in ne)if(ne[$].location>=0){let me=ee[$];me===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(me=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(me=x.instanceColor));const Ee={};Ee.attribute=me,me&&me.data&&(Ee.data=me.data),q[$]=Ee,K++}r.attributes=q,r.attributesNum=K,r.index=V}function _(){const x=r.newAttributes;for(let P=0,W=x.length;P<W;P++)x[P]=0}function m(x){f(x,0)}function f(x,P){const W=r.newAttributes,V=r.enabledAttributes,q=r.attributeDivisors;W[x]=1,V[x]===0&&(i.enableVertexAttribArray(x),V[x]=1),q[x]!==P&&(i.vertexAttribDivisor(x,P),q[x]=P)}function C(){const x=r.newAttributes,P=r.enabledAttributes;for(let W=0,V=P.length;W<V;W++)P[W]!==x[W]&&(i.disableVertexAttribArray(W),P[W]=0)}function T(x,P,W,V,q,ee,K){K===!0?i.vertexAttribIPointer(x,P,W,q,ee):i.vertexAttribPointer(x,P,W,V,q,ee)}function S(x,P,W,V){_();const q=V.attributes,ee=W.getAttributes(),K=P.defaultAttributeValues;for(const ne in ee){const $=ee[ne];if($.location>=0){let ae=q[ne];if(ae===void 0&&(ne==="instanceMatrix"&&x.instanceMatrix&&(ae=x.instanceMatrix),ne==="instanceColor"&&x.instanceColor&&(ae=x.instanceColor)),ae!==void 0){const me=ae.normalized,Ee=ae.itemSize,He=e.get(ae);if(He===void 0)continue;const Ze=He.buffer,j=He.type,ie=He.bytesPerElement,ve=j===i.INT||j===i.UNSIGNED_INT||ae.gpuType===ac;if(ae.isInterleavedBufferAttribute){const oe=ae.data,Ae=oe.stride,Ie=ae.offset;if(oe.isInstancedInterleavedBuffer){for(let we=0;we<$.locationSize;we++)f($.location+we,oe.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let we=0;we<$.locationSize;we++)m($.location+we);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let we=0;we<$.locationSize;we++)T($.location+we,Ee/$.locationSize,j,me,Ae*ie,(Ie+Ee/$.locationSize*we)*ie,ve)}else{if(ae.isInstancedBufferAttribute){for(let oe=0;oe<$.locationSize;oe++)f($.location+oe,ae.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let oe=0;oe<$.locationSize;oe++)m($.location+oe);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let oe=0;oe<$.locationSize;oe++)T($.location+oe,Ee/$.locationSize,j,me,Ee*ie,Ee/$.locationSize*oe*ie,ve)}}else if(K!==void 0){const me=K[ne];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv($.location,me);break;case 3:i.vertexAttrib3fv($.location,me);break;case 4:i.vertexAttrib4fv($.location,me);break;default:i.vertexAttrib1fv($.location,me)}}}}C()}function R(){k();for(const x in n){const P=n[x];for(const W in P){const V=P[W];for(const q in V)h(V[q].object),delete V[q];delete P[W]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const W in P){const V=P[W];for(const q in V)h(V[q].object),delete V[q];delete P[W]}delete n[x.id]}function A(x){for(const P in n){const W=n[P];if(W[x.id]===void 0)continue;const V=W[x.id];for(const q in V)h(V[q].object),delete V[q];delete W[x.id]}}function k(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:k,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:C}}function Tg(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function c(l,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Cg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==an&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const k=A===js&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ln&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==mn&&!k)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:C,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:R,maxSamples:w}}function Ag(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new ci,a=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const C=r?0:n,T=C*4;let S=f.clippingState||null;c.value=S,S=h(g,d,T,p);for(let R=0;R!==T;++R)S[R]=t[R];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,C=d.matrixWorldInverse;a.getNormalMatrix(C),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,S=p;T!==_;++T,S+=4)o.copy(u[T]).applyMatrix4(C,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function wg(i){let e=new WeakMap;function t(o,a){return a===la?o.mapping=os:a===ha&&(o.mapping=as),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===la||a===ha)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Bf(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Yh extends Wh{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qi=4,_l=[.125,.215,.35,.446,.526,.582],di=20,Oo=new Yh,vl=new ze;let Fo=null,ko=0,Bo=0,zo=!1;const li=(1+Math.sqrt(5))/2,Wi=1/li,xl=[new N(-li,Wi,0),new N(li,Wi,0),new N(-Wi,0,li),new N(Wi,0,li),new N(0,li,-Wi),new N(0,li,Wi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class yl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Fo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fo,ko,Bo),this._renderer.xr.enabled=zo,e.scissorTest=!1,xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===os||e.mapping===as?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:js,format:an,colorSpace:ds,depthBuffer:!1},s=Ml(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ml(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rg(r)),this._blurMaterial=Pg(r,e,t)}return s}_compileMaterial(e){const t=new rt(this._lodPlanes[0],e);this._renderer.compile(t,Oo)}_sceneToCubeUV(e,t,n,s){const a=new Kt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(vl),h.toneMapping=qn,h.autoClear=!1;const p=new Ws({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),g=new rt(new ut,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(vl),_=!0);for(let f=0;f<6;f++){const C=f%3;C===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):C===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const T=this._cubeSize;xr(s,C*T,f>2?T:0,T,T),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===os||e.mapping===as;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new rt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;xr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Oo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=xl[(s-r-1)%xl.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new rt(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*di-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):di;m>di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${di}`);const f=[];let C=0;for(let A=0;A<di;++A){const k=A/_,b=Math.exp(-k*k/2);f.push(b),A===0?C+=b:A<m&&(C+=2*b)}for(let A=0;A<f.length;A++)f[A]=f[A]/C;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-n;const S=this._sizeLods[s],R=3*S*(s>T-Qi?s-T+Qi:0),w=4*(this._cubeSize-S);xr(t,R,w,3*S,2*S),c.setRenderTarget(t),c.render(u,Oo)}}function Rg(i){const e=[],t=[],n=[];let s=i;const r=i-Qi+1+_l.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Qi?c=_l[o-i+Qi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,C=new Float32Array(_*g*p),T=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,k=w>2?0:-1,b=[A,k,0,A+2/3,k,0,A+2/3,k+1,0,A,k,0,A+2/3,k+1,0,A,k+1,0];C.set(b,_*g*w),T.set(d,m*g*w);const x=[w,w,w,w,w,w];S.set(x,f*g*w)}const R=new hn;R.setAttribute("position",new Xt(C,_)),R.setAttribute("uv",new Xt(T,m)),R.setAttribute("faceIndex",new Xt(S,f)),e.push(R),s>Qi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ml(i,e,t){const n=new Si(i,e,t);return n.texture.mapping=io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Pg(i,e,t){const n=new Float32Array(di),s=new N(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Sl(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function bl(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function vc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Lg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===la||c===ha,h=c===os||c===as;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new yl(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new yl(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ig(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Is("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Dg(i,e,t,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],i.ARRAY_BUFFER)}}function l(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const C=p.array;_=p.version;for(let T=0,S=C.length;T<S;T+=3){const R=C[T+0],w=C[T+1],A=C[T+2];d.push(R,w,w,A,A,R)}}else if(g!==void 0){const C=g.array;_=g.version;for(let T=0,S=C.length/3-1;T<S;T+=3){const R=T+0,w=T+1,A=T+2;d.push(R,w,w,A,A,R)}}else return;const m=new(Fh(d)?Hh:Gh)(d,1);m.version=_;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Ug(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*o),t.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let C=0;C<g;C++)f+=p[C]*_[C];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ng(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Og(i,e,t){const n=new WeakMap,s=new pt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let x=function(){k.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var p=x;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],C=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let R=a.attributes.position.count*S,w=1;R>e.maxTextureSize&&(w=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*w*4*u),k=new Bh(A,R,w,u);k.type=mn,k.needsUpdate=!0;const b=S*4;for(let P=0;P<u;P++){const W=f[P],V=C[P],q=T[P],ee=R*w*4*P;for(let K=0;K<W.count;K++){const ne=K*b;g===!0&&(s.fromBufferAttribute(W,K),A[ee+ne+0]=s.x,A[ee+ne+1]=s.y,A[ee+ne+2]=s.z,A[ee+ne+3]=0),_===!0&&(s.fromBufferAttribute(V,K),A[ee+ne+4]=s.x,A[ee+ne+5]=s.y,A[ee+ne+6]=s.z,A[ee+ne+7]=0),m===!0&&(s.fromBufferAttribute(q,K),A[ee+ne+8]=s.x,A[ee+ne+9]=s.y,A[ee+ne+10]=s.z,A[ee+ne+11]=q.itemSize===4?s.w:1)}}d={count:u,texture:k,size:new We(R,w)},n.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Fg(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class qh extends wt{constructor(e,t,n,s,r,o,a,c,l,h=ts){if(h!==ts&&h!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ts&&(n=Mi),n===void 0&&h===ls&&(n=cs),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:mt,this.minFilter=c!==void 0?c:mt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const jh=new wt,El=new qh(1,1),Kh=new Bh,Zh=new bf,Jh=new $h,Tl=[],Cl=[],Al=new Float32Array(16),wl=new Float32Array(9),Rl=new Float32Array(4);function ms(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Tl[s];if(r===void 0&&(r=new Float32Array(s),Tl[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function oo(i,e){let t=Cl[e];t===void 0&&(t=new Int32Array(e),Cl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function kg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Bg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function zg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function Gg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function Hg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;Rl.set(n),i.uniformMatrix2fv(this.addr,!1,Rl),Mt(t,n)}}function Vg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;wl.set(n),i.uniformMatrix3fv(this.addr,!1,wl),Mt(t,n)}}function Wg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;Al.set(n),i.uniformMatrix4fv(this.addr,!1,Al),Mt(t,n)}}function $g(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function Yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function qg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function jg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Kg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function Zg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function Jg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function Qg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(El.compareFunction=Oh,r=El):r=jh,t.setTexture2D(e||r,s)}function e0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Zh,s)}function t0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Jh,s)}function n0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Kh,s)}function i0(i){switch(i){case 5126:return kg;case 35664:return Bg;case 35665:return zg;case 35666:return Gg;case 35674:return Hg;case 35675:return Vg;case 35676:return Wg;case 5124:case 35670:return $g;case 35667:case 35671:return Xg;case 35668:case 35672:return Yg;case 35669:case 35673:return qg;case 5125:return jg;case 36294:return Kg;case 36295:return Zg;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return e0;case 35680:case 36300:case 36308:case 36293:return t0;case 36289:case 36303:case 36311:case 36292:return n0}}function s0(i,e){i.uniform1fv(this.addr,e)}function r0(i,e){const t=ms(e,this.size,2);i.uniform2fv(this.addr,t)}function o0(i,e){const t=ms(e,this.size,3);i.uniform3fv(this.addr,t)}function a0(i,e){const t=ms(e,this.size,4);i.uniform4fv(this.addr,t)}function c0(i,e){const t=ms(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function l0(i,e){const t=ms(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function h0(i,e){const t=ms(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function u0(i,e){i.uniform1iv(this.addr,e)}function d0(i,e){i.uniform2iv(this.addr,e)}function f0(i,e){i.uniform3iv(this.addr,e)}function p0(i,e){i.uniform4iv(this.addr,e)}function m0(i,e){i.uniform1uiv(this.addr,e)}function g0(i,e){i.uniform2uiv(this.addr,e)}function _0(i,e){i.uniform3uiv(this.addr,e)}function v0(i,e){i.uniform4uiv(this.addr,e)}function x0(i,e,t){const n=this.cache,s=e.length,r=oo(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||jh,r[o])}function y0(i,e,t){const n=this.cache,s=e.length,r=oo(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Zh,r[o])}function M0(i,e,t){const n=this.cache,s=e.length,r=oo(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Jh,r[o])}function S0(i,e,t){const n=this.cache,s=e.length,r=oo(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Kh,r[o])}function b0(i){switch(i){case 5126:return s0;case 35664:return r0;case 35665:return o0;case 35666:return a0;case 35674:return c0;case 35675:return l0;case 35676:return h0;case 5124:case 35670:return u0;case 35667:case 35671:return d0;case 35668:case 35672:return f0;case 35669:case 35673:return p0;case 5125:return m0;case 36294:return g0;case 36295:return _0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return S0}}class E0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=i0(t.type)}}class T0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=b0(t.type)}}class C0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Go=/(\w+)(\])?(\[|\.)?/g;function Pl(i,e){i.seq.push(e),i.map[e.id]=e}function A0(i,e,t){const n=i.name,s=n.length;for(Go.lastIndex=0;;){const r=Go.exec(n),o=Go.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Pl(t,l===void 0?new E0(a,i,e):new T0(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new C0(a),Pl(t,u)),t=u}}}class Or{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);A0(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Ll(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const w0=37297;let R0=0;function P0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Il=new Be;function L0(i){Ye._getMatrix(Il,Ye.workingColorSpace,i);const e=`mat3( ${Il.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case so:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Dl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+P0(i.getShaderSource(e),o)}else return s}function I0(i,e){const t=L0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function D0(i,e){let t;switch(e){case Dd:t="Linear";break;case Ud:t="Reinhard";break;case Nd:t="Cineon";break;case Od:t="ACESFilmic";break;case kd:t="AgX";break;case Bd:t="Neutral";break;case Fd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yr=new N;function U0(){Ye.getLuminanceCoefficients(yr);const i=yr.x.toFixed(4),e=yr.y.toFixed(4),t=yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ds).join(`
`)}function O0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function F0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ds(i){return i!==""}function Ul(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const k0=/^[ \t]*#include +<([\w\d./]+)>/gm;function za(i){return i.replace(k0,z0)}const B0=new Map;function z0(i,e){let t=Ge[e];if(t===void 0){const n=B0.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return za(t)}const G0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ol(i){return i.replace(G0,H0)}function H0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function V0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Eh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===dd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Tn&&(e="SHADOWMAP_TYPE_VSM"),e}function W0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case os:case as:e="ENVMAP_TYPE_CUBE";break;case io:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case as:e="ENVMAP_MODE_REFRACTION";break}return e}function X0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case oc:e="ENVMAP_BLENDING_MULTIPLY";break;case Ld:e="ENVMAP_BLENDING_MIX";break;case Id:e="ENVMAP_BLENDING_ADD";break}return e}function Y0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function q0(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=V0(t),l=W0(t),h=$0(t),u=X0(t),d=Y0(t),p=N0(t),g=O0(r),_=s.createProgram();let m,f,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ds).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ds).join(`
`),f.length>0&&(f+=`
`)):(m=[Fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),f=[Fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qn?"#define TONE_MAPPING":"",t.toneMapping!==qn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==qn?D0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,I0("linearToOutputTexel",t.outputColorSpace),U0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ds).join(`
`)),o=za(o),o=Ul(o,t),o=Nl(o,t),a=za(a),a=Ul(a,t),a=Nl(a,t),o=Ol(o),a=Ol(a),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=C+m+o,S=C+f+a,R=Ll(s,s.VERTEX_SHADER,T),w=Ll(s,s.FRAGMENT_SHADER,S);s.attachShader(_,R),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(P){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(_).trim(),V=s.getShaderInfoLog(R).trim(),q=s.getShaderInfoLog(w).trim();let ee=!0,K=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,w);else{const ne=Dl(s,R,"vertex"),$=Dl(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+ne+`
`+$)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(V===""||q==="")&&(K=!1);K&&(P.diagnostics={runnable:ee,programLog:W,vertexShader:{log:V,prefix:m},fragmentShader:{log:q,prefix:f}})}s.deleteShader(R),s.deleteShader(w),k=new Or(s,_),b=F0(s,_)}let k;this.getUniforms=function(){return k===void 0&&A(this),k};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,w0)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=R0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}let j0=0;class K0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Z0(e),t.set(e,n)),n}}class Z0{constructor(e){this.id=j0++,this.code=e,this.usedTimes=0}}function J0(i,e,t,n,s,r,o){const a=new gc,c=new K0,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,x,P,W,V){const q=W.fog,ee=V.geometry,K=b.isMeshStandardMaterial?W.environment:null,ne=(b.isMeshStandardMaterial?t:e).get(b.envMap||K),$=ne&&ne.mapping===io?ne.image.height:null,ae=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const me=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Ee=me!==void 0?me.length:0;let He=0;ee.morphAttributes.position!==void 0&&(He=1),ee.morphAttributes.normal!==void 0&&(He=2),ee.morphAttributes.color!==void 0&&(He=3);let Ze,j,ie,ve;if(ae){const tt=dn[ae];Ze=tt.vertexShader,j=tt.fragmentShader}else Ze=b.vertexShader,j=b.fragmentShader,c.update(b),ie=c.getVertexShaderID(b),ve=c.getFragmentShaderID(b);const oe=i.getRenderTarget(),Ae=i.state.buffers.depth.getReversed(),Ie=V.isInstancedMesh===!0,we=V.isBatchedMesh===!0,Je=!!b.map,Re=!!b.matcap,ht=!!ne,F=!!b.aoMap,Ut=!!b.lightMap,Xe=!!b.bumpMap,$e=!!b.normalMap,Te=!!b.displacementMap,it=!!b.emissiveMap,Ce=!!b.metalnessMap,E=!!b.roughnessMap,v=b.anisotropy>0,z=b.clearcoat>0,Z=b.dispersion>0,te=b.iridescence>0,Y=b.sheen>0,xe=b.transmission>0,ce=v&&!!b.anisotropyMap,pe=z&&!!b.clearcoatMap,M=z&&!!b.clearcoatNormalMap,L=z&&!!b.clearcoatRoughnessMap,B=te&&!!b.iridescenceMap,Q=te&&!!b.iridescenceThicknessMap,le=Y&&!!b.sheenColorMap,ge=Y&&!!b.sheenRoughnessMap,De=!!b.specularMap,Ne=!!b.specularColorMap,ot=!!b.specularIntensityMap,I=xe&&!!b.transmissionMap,he=xe&&!!b.thicknessMap,X=!!b.gradientMap,J=!!b.alphaMap,fe=b.alphaTest>0,ue=!!b.alphaHash,Fe=!!b.extensions;let dt=qn;b.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(dt=i.toneMapping);const bt={shaderID:ae,shaderType:b.type,shaderName:b.name,vertexShader:Ze,fragmentShader:j,defines:b.defines,customVertexShaderID:ie,customFragmentShaderID:ve,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:we,batchingColor:we&&V._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&V.instanceColor!==null,instancingMorph:Ie&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ds,alphaToCoverage:!!b.alphaToCoverage,map:Je,matcap:Re,envMap:ht,envMapMode:ht&&ne.mapping,envMapCubeUVHeight:$,aoMap:F,lightMap:Ut,bumpMap:Xe,normalMap:$e,displacementMap:d&&Te,emissiveMap:it,normalMapObjectSpace:$e&&b.normalMapType===Vd,normalMapTangentSpace:$e&&b.normalMapType===Nh,metalnessMap:Ce,roughnessMap:E,anisotropy:v,anisotropyMap:ce,clearcoat:z,clearcoatMap:pe,clearcoatNormalMap:M,clearcoatRoughnessMap:L,dispersion:Z,iridescence:te,iridescenceMap:B,iridescenceThicknessMap:Q,sheen:Y,sheenColorMap:le,sheenRoughnessMap:ge,specularMap:De,specularColorMap:Ne,specularIntensityMap:ot,transmission:xe,transmissionMap:I,thicknessMap:he,gradientMap:X,opaque:b.transparent===!1&&b.blending===es&&b.alphaToCoverage===!1,alphaMap:J,alphaTest:fe,alphaHash:ue,combine:b.combine,mapUv:Je&&_(b.map.channel),aoMapUv:F&&_(b.aoMap.channel),lightMapUv:Ut&&_(b.lightMap.channel),bumpMapUv:Xe&&_(b.bumpMap.channel),normalMapUv:$e&&_(b.normalMap.channel),displacementMapUv:Te&&_(b.displacementMap.channel),emissiveMapUv:it&&_(b.emissiveMap.channel),metalnessMapUv:Ce&&_(b.metalnessMap.channel),roughnessMapUv:E&&_(b.roughnessMap.channel),anisotropyMapUv:ce&&_(b.anisotropyMap.channel),clearcoatMapUv:pe&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:M&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:L&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:B&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:le&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:ge&&_(b.sheenRoughnessMap.channel),specularMapUv:De&&_(b.specularMap.channel),specularColorMapUv:Ne&&_(b.specularColorMap.channel),specularIntensityMapUv:ot&&_(b.specularIntensityMap.channel),transmissionMapUv:I&&_(b.transmissionMap.channel),thicknessMapUv:he&&_(b.thicknessMap.channel),alphaMapUv:J&&_(b.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&($e||v),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!ee.attributes.uv&&(Je||J),fog:!!q,useFog:b.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ae,skinning:V.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:He,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,decodeVideoTexture:Je&&b.map.isVideoTexture===!0&&Ye.getTransfer(b.map.colorSpace)===st,decodeVideoTextureEmissive:it&&b.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(b.emissiveMap.colorSpace)===st,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===fn,flipSided:b.side===kt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Fe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&b.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function f(b){const x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)x.push(P),x.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(C(x,b),T(x,b),x.push(i.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function C(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function T(b,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),b.push(a.mask)}function S(b){const x=g[b.type];let P;if(x){const W=dn[x];P=Nf.clone(W.uniforms)}else P=b.uniforms;return P}function R(b,x){let P;for(let W=0,V=h.length;W<V;W++){const q=h[W];if(q.cacheKey===x){P=q,++P.usedTimes;break}}return P===void 0&&(P=new q0(i,x,b,r),h.push(P)),P}function w(b){if(--b.usedTimes===0){const x=h.indexOf(b);h[x]=h[h.length-1],h.pop(),b.destroy()}}function A(b){c.remove(b)}function k(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:R,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:k}}function Q0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function e_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function kl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Bl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,p,g,_,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||e_),n.length>1&&n.sort(d||kl),s.length>1&&s.sort(d||kl)}function h(){for(let u=e,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function t_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Bl,i.set(n,[o])):s>=r.length?(o=new Bl,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function n_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new ze};break;case"SpotLight":t={position:new N,direction:new N,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function i_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let s_=0;function r_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function o_(i){const e=new n_,t=i_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const s=new N,r=new Ke,o=new Ke;function a(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,C=0,T=0,S=0,R=0,w=0,A=0;l.sort(r_);for(let b=0,x=l.length;b<x;b++){const P=l[b],W=P.color,V=P.intensity,q=P.distance,ee=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=W.r*V,u+=W.g*V,d+=W.b*V;else if(P.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(P.sh.coefficients[K],V);A++}else if(P.isDirectionalLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ne=P.shadow,$=t.get(P);$.shadowIntensity=ne.intensity,$.shadowBias=ne.bias,$.shadowNormalBias=ne.normalBias,$.shadowRadius=ne.radius,$.shadowMapSize=ne.mapSize,n.directionalShadow[p]=$,n.directionalShadowMap[p]=ee,n.directionalShadowMatrix[p]=P.shadow.matrix,C++}n.directional[p]=K,p++}else if(P.isSpotLight){const K=e.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(W).multiplyScalar(V),K.distance=q,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,n.spot[_]=K;const ne=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,ne.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=ne.matrix,P.castShadow){const $=t.get(P);$.shadowIntensity=ne.intensity,$.shadowBias=ne.bias,$.shadowNormalBias=ne.normalBias,$.shadowRadius=ne.radius,$.shadowMapSize=ne.mapSize,n.spotShadow[_]=$,n.spotShadowMap[_]=ee,S++}_++}else if(P.isRectAreaLight){const K=e.get(P);K.color.copy(W).multiplyScalar(V),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=K,m++}else if(P.isPointLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),K.distance=P.distance,K.decay=P.decay,P.castShadow){const ne=P.shadow,$=t.get(P);$.shadowIntensity=ne.intensity,$.shadowBias=ne.bias,$.shadowNormalBias=ne.normalBias,$.shadowRadius=ne.radius,$.shadowMapSize=ne.mapSize,$.shadowCameraNear=ne.camera.near,$.shadowCameraFar=ne.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=ee,n.pointShadowMatrix[g]=P.shadow.matrix,T++}n.point[g]=K,g++}else if(P.isHemisphereLight){const K=e.get(P);K.skyColor.copy(P.color).multiplyScalar(V),K.groundColor.copy(P.groundColor).multiplyScalar(V),n.hemi[f]=K,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const k=n.hash;(k.directionalLength!==p||k.pointLength!==g||k.spotLength!==_||k.rectAreaLength!==m||k.hemiLength!==f||k.numDirectionalShadows!==C||k.numPointShadows!==T||k.numSpotShadows!==S||k.numSpotMaps!==R||k.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=S+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,k.directionalLength=p,k.pointLength=g,k.spotLength=_,k.rectAreaLength=m,k.hemiLength=f,k.numDirectionalShadows=C,k.numPointShadows=T,k.numSpotShadows=S,k.numSpotMaps=R,k.numLightProbes=A,n.version=s_++)}function c(l,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,C=l.length;f<C;f++){const T=l[f];if(T.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(T.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(T.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function zl(i){const e=new o_(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function a_(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new zl(i),e.set(s,[a])):r>=o.length?(a=new zl(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class c_ extends Ti{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Gd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class l_ extends Ti{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const h_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function d_(i,e,t){let n=new _c;const s=new We,r=new We,o=new pt,a=new c_({depthPacking:Hd}),c=new l_,l={},h=t.maxTextureSize,u={[Zn]:kt,[kt]:Zn,[fn]:fn},d=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:h_,fragmentShader:u_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new hn;g.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new rt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eh;let f=this.type;this.render=function(w,A,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const b=i.getRenderTarget(),x=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Yn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const V=f!==Tn&&this.type===Tn,q=f===Tn&&this.type!==Tn;for(let ee=0,K=w.length;ee<K;ee++){const ne=w[ee],$=ne.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const ae=$.getFrameExtents();if(s.multiply(ae),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ae.x),s.x=r.x*ae.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ae.y),s.y=r.y*ae.y,$.mapSize.y=r.y)),$.map===null||V===!0||q===!0){const Ee=this.type!==Tn?{minFilter:mt,magFilter:mt}:{};$.map!==null&&$.map.dispose(),$.map=new Si(s.x,s.y,Ee),$.map.texture.name=ne.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const me=$.getViewportCount();for(let Ee=0;Ee<me;Ee++){const He=$.getViewport(Ee);o.set(r.x*He.x,r.y*He.y,r.x*He.z,r.y*He.w),W.viewport(o),$.updateMatrices(ne,Ee),n=$.getFrustum(),S(A,k,$.camera,ne,this.type)}$.isPointLightShadow!==!0&&this.type===Tn&&C($,k),$.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,x,P)};function C(w,A){const k=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Si(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,k,d,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,k,p,_,null)}function T(w,A,k,b){let x=null;const P=k.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)x=P;else if(x=k.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=x.uuid,V=A.uuid;let q=l[W];q===void 0&&(q={},l[W]=q);let ee=q[V];ee===void 0&&(ee=x.clone(),q[V]=ee,A.addEventListener("dispose",R)),x=ee}if(x.visible=A.visible,x.wireframe=A.wireframe,b===Tn?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:u[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,k.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const W=i.properties.get(x);W.light=k}return x}function S(w,A,k,b,x){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Tn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld);const V=e.update(w),q=w.material;if(Array.isArray(q)){const ee=V.groups;for(let K=0,ne=ee.length;K<ne;K++){const $=ee[K],ae=q[$.materialIndex];if(ae&&ae.visible){const me=T(w,ae,b,x);w.onBeforeShadow(i,w,A,k,V,me,$),i.renderBufferDirect(k,null,V,me,w,$),w.onAfterShadow(i,w,A,k,V,me,$)}}}else if(q.visible){const ee=T(w,q,b,x);w.onBeforeShadow(i,w,A,k,V,ee,null),i.renderBufferDirect(k,null,V,ee,w,null),w.onAfterShadow(i,w,A,k,V,ee,null)}}const W=w.children;for(let V=0,q=W.length;V<q;V++)S(W[V],A,k,b,x)}function R(w){w.target.removeEventListener("dispose",R);for(const k in l){const b=l[k],x=w.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}const f_={[na]:ia,[sa]:aa,[ra]:ca,[rs]:oa,[ia]:na,[aa]:sa,[ca]:ra,[oa]:rs};function p_(i,e){function t(){let I=!1;const he=new pt;let X=null;const J=new pt(0,0,0,0);return{setMask:function(fe){X!==fe&&!I&&(i.colorMask(fe,fe,fe,fe),X=fe)},setLocked:function(fe){I=fe},setClear:function(fe,ue,Fe,dt,bt){bt===!0&&(fe*=dt,ue*=dt,Fe*=dt),he.set(fe,ue,Fe,dt),J.equals(he)===!1&&(i.clearColor(fe,ue,Fe,dt),J.copy(he))},reset:function(){I=!1,X=null,J.set(-1,0,0,0)}}}function n(){let I=!1,he=!1,X=null,J=null,fe=null;return{setReversed:function(ue){if(he!==ue){const Fe=e.get("EXT_clip_control");he?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT);const dt=fe;fe=null,this.setClear(dt)}he=ue},getReversed:function(){return he},setTest:function(ue){ue?oe(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(ue){X!==ue&&!I&&(i.depthMask(ue),X=ue)},setFunc:function(ue){if(he&&(ue=f_[ue]),J!==ue){switch(ue){case na:i.depthFunc(i.NEVER);break;case ia:i.depthFunc(i.ALWAYS);break;case sa:i.depthFunc(i.LESS);break;case rs:i.depthFunc(i.LEQUAL);break;case ra:i.depthFunc(i.EQUAL);break;case oa:i.depthFunc(i.GEQUAL);break;case aa:i.depthFunc(i.GREATER);break;case ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=ue}},setLocked:function(ue){I=ue},setClear:function(ue){fe!==ue&&(he&&(ue=1-ue),i.clearDepth(ue),fe=ue)},reset:function(){I=!1,X=null,J=null,fe=null,he=!1}}}function s(){let I=!1,he=null,X=null,J=null,fe=null,ue=null,Fe=null,dt=null,bt=null;return{setTest:function(tt){I||(tt?oe(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(tt){he!==tt&&!I&&(i.stencilMask(tt),he=tt)},setFunc:function(tt,Qt,vn){(X!==tt||J!==Qt||fe!==vn)&&(i.stencilFunc(tt,Qt,vn),X=tt,J=Qt,fe=vn)},setOp:function(tt,Qt,vn){(ue!==tt||Fe!==Qt||dt!==vn)&&(i.stencilOp(tt,Qt,vn),ue=tt,Fe=Qt,dt=vn)},setLocked:function(tt){I=tt},setClear:function(tt){bt!==tt&&(i.clearStencil(tt),bt=tt)},reset:function(){I=!1,he=null,X=null,J=null,fe=null,ue=null,Fe=null,dt=null,bt=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,C=null,T=null,S=null,R=null,w=null,A=new ze(0,0,0),k=0,b=!1,x=null,P=null,W=null,V=null,q=null;const ee=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ne=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec($)[1]),K=ne>=1):$.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),K=ne>=2);let ae=null,me={};const Ee=i.getParameter(i.SCISSOR_BOX),He=i.getParameter(i.VIEWPORT),Ze=new pt().fromArray(Ee),j=new pt().fromArray(He);function ie(I,he,X,J){const fe=new Uint8Array(4),ue=i.createTexture();i.bindTexture(I,ue),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<X;Fe++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(he+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return ue}const ve={};ve[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),ve[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ve[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(i.DEPTH_TEST),o.setFunc(rs),Xe(!1),$e(Wc),oe(i.CULL_FACE),F(Yn);function oe(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Ae(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Ie(I,he){return u[I]!==he?(i.bindFramebuffer(I,he),u[I]=he,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=he),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=he),!0):!1}function we(I,he){let X=p,J=!1;if(I){X=d.get(he),X===void 0&&(X=[],d.set(he,X));const fe=I.textures;if(X.length!==fe.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,Fe=fe.length;ue<Fe;ue++)X[ue]=i.COLOR_ATTACHMENT0+ue;X.length=fe.length,J=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,J=!0);J&&i.drawBuffers(X)}function Je(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const Re={[ui]:i.FUNC_ADD,[pd]:i.FUNC_SUBTRACT,[md]:i.FUNC_REVERSE_SUBTRACT};Re[gd]=i.MIN,Re[_d]=i.MAX;const ht={[vd]:i.ZERO,[xd]:i.ONE,[yd]:i.SRC_COLOR,[ea]:i.SRC_ALPHA,[Cd]:i.SRC_ALPHA_SATURATE,[Ed]:i.DST_COLOR,[Sd]:i.DST_ALPHA,[Md]:i.ONE_MINUS_SRC_COLOR,[ta]:i.ONE_MINUS_SRC_ALPHA,[Td]:i.ONE_MINUS_DST_COLOR,[bd]:i.ONE_MINUS_DST_ALPHA,[Ad]:i.CONSTANT_COLOR,[wd]:i.ONE_MINUS_CONSTANT_COLOR,[Rd]:i.CONSTANT_ALPHA,[Pd]:i.ONE_MINUS_CONSTANT_ALPHA};function F(I,he,X,J,fe,ue,Fe,dt,bt,tt){if(I===Yn){_===!0&&(Ae(i.BLEND),_=!1);return}if(_===!1&&(oe(i.BLEND),_=!0),I!==fd){if(I!==m||tt!==b){if((f!==ui||S!==ui)&&(i.blendEquation(i.FUNC_ADD),f=ui,S=ui),tt)switch(I){case es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $c:i.blendFunc(i.ONE,i.ONE);break;case Xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $c:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}C=null,T=null,R=null,w=null,A.set(0,0,0),k=0,m=I,b=tt}return}fe=fe||he,ue=ue||X,Fe=Fe||J,(he!==f||fe!==S)&&(i.blendEquationSeparate(Re[he],Re[fe]),f=he,S=fe),(X!==C||J!==T||ue!==R||Fe!==w)&&(i.blendFuncSeparate(ht[X],ht[J],ht[ue],ht[Fe]),C=X,T=J,R=ue,w=Fe),(dt.equals(A)===!1||bt!==k)&&(i.blendColor(dt.r,dt.g,dt.b,bt),A.copy(dt),k=bt),m=I,b=!1}function Ut(I,he){I.side===fn?Ae(i.CULL_FACE):oe(i.CULL_FACE);let X=I.side===kt;he&&(X=!X),Xe(X),I.blending===es&&I.transparent===!1?F(Yn):F(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const J=I.stencilWrite;a.setTest(J),J&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),it(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(I){x!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),x=I)}function $e(I){I!==hd?(oe(i.CULL_FACE),I!==P&&(I===Wc?i.cullFace(i.BACK):I===ud?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),P=I}function Te(I){I!==W&&(K&&i.lineWidth(I),W=I)}function it(I,he,X){I?(oe(i.POLYGON_OFFSET_FILL),(V!==he||q!==X)&&(i.polygonOffset(he,X),V=he,q=X)):Ae(i.POLYGON_OFFSET_FILL)}function Ce(I){I?oe(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function E(I){I===void 0&&(I=i.TEXTURE0+ee-1),ae!==I&&(i.activeTexture(I),ae=I)}function v(I,he,X){X===void 0&&(ae===null?X=i.TEXTURE0+ee-1:X=ae);let J=me[X];J===void 0&&(J={type:void 0,texture:void 0},me[X]=J),(J.type!==I||J.texture!==he)&&(ae!==X&&(i.activeTexture(X),ae=X),i.bindTexture(I,he||ve[I]),J.type=I,J.texture=he)}function z(){const I=me[ae];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function M(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function L(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function B(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(I){Ze.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Ze.copy(I))}function ge(I){j.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),j.copy(I))}function De(I,he){let X=l.get(he);X===void 0&&(X=new WeakMap,l.set(he,X));let J=X.get(I);J===void 0&&(J=i.getUniformBlockIndex(he,I.name),X.set(I,J))}function Ne(I,he){const J=l.get(he).get(I);c.get(he)!==J&&(i.uniformBlockBinding(he,J,I.__bindingPointIndex),c.set(he,J))}function ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ae=null,me={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,C=null,T=null,S=null,R=null,w=null,A=new ze(0,0,0),k=0,b=!1,x=null,P=null,W=null,V=null,q=null,Ze.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:Ae,bindFramebuffer:Ie,drawBuffers:we,useProgram:Je,setBlending:F,setMaterial:Ut,setFlipSided:Xe,setCullFace:$e,setLineWidth:Te,setPolygonOffset:it,setScissorTest:Ce,activeTexture:E,bindTexture:v,unbindTexture:z,compressedTexImage2D:Z,compressedTexImage3D:te,texImage2D:B,texImage3D:Q,updateUBOMapping:De,uniformBlockBinding:Ne,texStorage2D:M,texStorage3D:L,texSubImage2D:Y,texSubImage3D:xe,compressedTexSubImage2D:ce,compressedTexSubImage3D:pe,scissor:le,viewport:ge,reset:ot}}function Gl(i,e,t,n){const s=m_(n);switch(t){case Rh:return i*e;case Lh:return i*e;case Ih:return i*e*2;case hc:return i*e/s.components*s.byteLength;case uc:return i*e/s.components*s.byteLength;case Dh:return i*e*2/s.components*s.byteLength;case dc:return i*e*2/s.components*s.byteLength;case Ph:return i*e*3/s.components*s.byteLength;case an:return i*e*4/s.components*s.byteLength;case fc:return i*e*4/s.components*s.byteLength;case Lr:case Ir:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Dr:case Ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pa:case ga:return Math.max(i,16)*Math.max(e,8)/4;case fa:case ma:return Math.max(i,8)*Math.max(e,8)/2;case _a:case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ma:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ba:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case wa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case La:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ia:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Da:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Nr:case Ua:case Na:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Uh:case Oa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Fa:case ka:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function m_(i){switch(i){case Ln:case Ch:return{byteLength:1,components:1};case Hs:case Ah:case js:return{byteLength:2,components:1};case cc:case lc:return{byteLength:2,components:4};case Mi:case ac:case mn:return{byteLength:4,components:1};case wh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function g_(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new We,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return p?new OffscreenCanvas(E,v):Wr("canvas")}function _(E,v,z){let Z=1;const te=Ce(E);if((te.width>z||te.height>z)&&(Z=z/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Y=Math.floor(Z*te.width),xe=Math.floor(Z*te.height);u===void 0&&(u=g(Y,xe));const ce=v?g(Y,xe):u;return ce.width=Y,ce.height=xe,ce.getContext("2d").drawImage(E,0,0,Y,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Y+"x"+xe+")."),ce}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),E;return E}function m(E){return E.generateMipmaps}function f(E){i.generateMipmap(E)}function C(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(E,v,z,Z,te=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=v;if(v===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8)),v===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),v===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8)),v===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),v===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),v===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),v===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),v===i.RGBA){const xe=te?so:Ye.getTransfer(Z);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=xe===st?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function S(E,v){let z;return E?v===null||v===Mi||v===cs?z=i.DEPTH24_STENCIL8:v===mn?z=i.DEPTH32F_STENCIL8:v===Hs&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Mi||v===cs?z=i.DEPTH_COMPONENT24:v===mn?z=i.DEPTH_COMPONENT32F:v===Hs&&(z=i.DEPTH_COMPONENT16),z}function R(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==mt&&E.minFilter!==pn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function w(E){const v=E.target;v.removeEventListener("dispose",w),k(v),v.isVideoTexture&&h.delete(v)}function A(E){const v=E.target;v.removeEventListener("dispose",A),x(v)}function k(E){const v=n.get(E);if(v.__webglInit===void 0)return;const z=E.source,Z=d.get(z);if(Z){const te=Z[v.__cacheKey];te.usedTimes--,te.usedTimes===0&&b(E),Object.keys(Z).length===0&&d.delete(z)}n.remove(E)}function b(E){const v=n.get(E);i.deleteTexture(v.__webglTexture);const z=E.source,Z=d.get(z);delete Z[v.__cacheKey],o.memory.textures--}function x(E){const v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let te=0;te<v.__webglFramebuffer[Z].length;te++)i.deleteFramebuffer(v.__webglFramebuffer[Z][te]);else i.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[Z]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const z=E.textures;for(let Z=0,te=z.length;Z<te;Z++){const Y=n.get(z[Z]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(z[Z])}n.remove(E)}let P=0;function W(){P=0}function V(){const E=P;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),P+=1,E}function q(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function ee(E,v){const z=n.get(E);if(E.isVideoTexture&&Te(E),E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){const Z=E.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(z,E,v);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+v)}function K(E,v){const z=n.get(E);if(E.version>0&&z.__version!==E.version){j(z,E,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+v)}function ne(E,v){const z=n.get(E);if(E.version>0&&z.__version!==E.version){j(z,E,v);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+v)}function $(E,v){const z=n.get(E);if(E.version>0&&z.__version!==E.version){ie(z,E,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+v)}const ae={[ua]:i.REPEAT,[pi]:i.CLAMP_TO_EDGE,[da]:i.MIRRORED_REPEAT},me={[mt]:i.NEAREST,[zd]:i.NEAREST_MIPMAP_NEAREST,[er]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[mo]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},Ee={[Wd]:i.NEVER,[Kd]:i.ALWAYS,[$d]:i.LESS,[Oh]:i.LEQUAL,[Xd]:i.EQUAL,[jd]:i.GEQUAL,[Yd]:i.GREATER,[qd]:i.NOTEQUAL};function He(E,v){if(v.type===mn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===pn||v.magFilter===mo||v.magFilter===er||v.magFilter===mi||v.minFilter===pn||v.minFilter===mo||v.minFilter===er||v.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ae[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ae[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ae[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,me[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,me[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Ee[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===mt||v.minFilter!==er&&v.minFilter!==mi||v.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ze(E,v){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",w));const Z=v.source;let te=d.get(Z);te===void 0&&(te={},d.set(Z,te));const Y=q(v);if(Y!==E.__cacheKey){te[Y]===void 0&&(te[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),te[Y].usedTimes++;const xe=te[E.__cacheKey];xe!==void 0&&(te[E.__cacheKey].usedTimes--,xe.usedTimes===0&&b(v)),E.__cacheKey=Y,E.__webglTexture=te[Y].texture}return z}function j(E,v,z){let Z=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=i.TEXTURE_3D);const te=Ze(E,v),Y=v.source;t.bindTexture(Z,E.__webglTexture,i.TEXTURE0+z);const xe=n.get(Y);if(Y.version!==xe.__version||te===!0){t.activeTexture(i.TEXTURE0+z);const ce=Ye.getPrimaries(Ye.workingColorSpace),pe=v.colorSpace===Vn?null:Ye.getPrimaries(v.colorSpace),M=v.colorSpace===Vn||ce===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,M);let L=_(v.image,!1,s.maxTextureSize);L=it(v,L);const B=r.convert(v.format,v.colorSpace),Q=r.convert(v.type);let le=T(v.internalFormat,B,Q,v.colorSpace,v.isVideoTexture);He(Z,v);let ge;const De=v.mipmaps,Ne=v.isVideoTexture!==!0,ot=xe.__version===void 0||te===!0,I=Y.dataReady,he=R(v,L);if(v.isDepthTexture)le=S(v.format===ls,v.type),ot&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,le,L.width,L.height):t.texImage2D(i.TEXTURE_2D,0,le,L.width,L.height,0,B,Q,null));else if(v.isDataTexture)if(De.length>0){Ne&&ot&&t.texStorage2D(i.TEXTURE_2D,he,le,De[0].width,De[0].height);for(let X=0,J=De.length;X<J;X++)ge=De[X],Ne?I&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,ge.width,ge.height,B,Q,ge.data):t.texImage2D(i.TEXTURE_2D,X,le,ge.width,ge.height,0,B,Q,ge.data);v.generateMipmaps=!1}else Ne?(ot&&t.texStorage2D(i.TEXTURE_2D,he,le,L.width,L.height),I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,L.width,L.height,B,Q,L.data)):t.texImage2D(i.TEXTURE_2D,0,le,L.width,L.height,0,B,Q,L.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ne&&ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,le,De[0].width,De[0].height,L.depth);for(let X=0,J=De.length;X<J;X++)if(ge=De[X],v.format!==an)if(B!==null)if(Ne){if(I)if(v.layerUpdates.size>0){const fe=Gl(ge.width,ge.height,v.format,v.type);for(const ue of v.layerUpdates){const Fe=ge.data.subarray(ue*fe/ge.data.BYTES_PER_ELEMENT,(ue+1)*fe/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,ue,ge.width,ge.height,1,B,Fe)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,ge.width,ge.height,L.depth,B,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,le,ge.width,ge.height,L.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,ge.width,ge.height,L.depth,B,Q,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,le,ge.width,ge.height,L.depth,0,B,Q,ge.data)}else{Ne&&ot&&t.texStorage2D(i.TEXTURE_2D,he,le,De[0].width,De[0].height);for(let X=0,J=De.length;X<J;X++)ge=De[X],v.format!==an?B!==null?Ne?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,ge.width,ge.height,B,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,X,le,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?I&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,ge.width,ge.height,B,Q,ge.data):t.texImage2D(i.TEXTURE_2D,X,le,ge.width,ge.height,0,B,Q,ge.data)}else if(v.isDataArrayTexture)if(Ne){if(ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,le,L.width,L.height,L.depth),I)if(v.layerUpdates.size>0){const X=Gl(L.width,L.height,v.format,v.type);for(const J of v.layerUpdates){const fe=L.data.subarray(J*X/L.data.BYTES_PER_ELEMENT,(J+1)*X/L.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,L.width,L.height,1,B,Q,fe)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,L.width,L.height,L.depth,B,Q,L.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,le,L.width,L.height,L.depth,0,B,Q,L.data);else if(v.isData3DTexture)Ne?(ot&&t.texStorage3D(i.TEXTURE_3D,he,le,L.width,L.height,L.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,L.width,L.height,L.depth,B,Q,L.data)):t.texImage3D(i.TEXTURE_3D,0,le,L.width,L.height,L.depth,0,B,Q,L.data);else if(v.isFramebufferTexture){if(ot)if(Ne)t.texStorage2D(i.TEXTURE_2D,he,le,L.width,L.height);else{let X=L.width,J=L.height;for(let fe=0;fe<he;fe++)t.texImage2D(i.TEXTURE_2D,fe,le,X,J,0,B,Q,null),X>>=1,J>>=1}}else if(De.length>0){if(Ne&&ot){const X=Ce(De[0]);t.texStorage2D(i.TEXTURE_2D,he,le,X.width,X.height)}for(let X=0,J=De.length;X<J;X++)ge=De[X],Ne?I&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,B,Q,ge):t.texImage2D(i.TEXTURE_2D,X,le,B,Q,ge);v.generateMipmaps=!1}else if(Ne){if(ot){const X=Ce(L);t.texStorage2D(i.TEXTURE_2D,he,le,X.width,X.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,B,Q,L)}else t.texImage2D(i.TEXTURE_2D,0,le,B,Q,L);m(v)&&f(Z),xe.__version=Y.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ie(E,v,z){if(v.image.length!==6)return;const Z=Ze(E,v),te=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+z);const Y=n.get(te);if(te.version!==Y.__version||Z===!0){t.activeTexture(i.TEXTURE0+z);const xe=Ye.getPrimaries(Ye.workingColorSpace),ce=v.colorSpace===Vn?null:Ye.getPrimaries(v.colorSpace),pe=v.colorSpace===Vn||xe===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const M=v.isCompressedTexture||v.image[0].isCompressedTexture,L=v.image[0]&&v.image[0].isDataTexture,B=[];for(let J=0;J<6;J++)!M&&!L?B[J]=_(v.image[J],!0,s.maxCubemapSize):B[J]=L?v.image[J].image:v.image[J],B[J]=it(v,B[J]);const Q=B[0],le=r.convert(v.format,v.colorSpace),ge=r.convert(v.type),De=T(v.internalFormat,le,ge,v.colorSpace),Ne=v.isVideoTexture!==!0,ot=Y.__version===void 0||Z===!0,I=te.dataReady;let he=R(v,Q);He(i.TEXTURE_CUBE_MAP,v);let X;if(M){Ne&&ot&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,De,Q.width,Q.height);for(let J=0;J<6;J++){X=B[J].mipmaps;for(let fe=0;fe<X.length;fe++){const ue=X[fe];v.format!==an?le!==null?Ne?I&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,0,0,ue.width,ue.height,le,ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,De,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,0,0,ue.width,ue.height,le,ge,ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,De,ue.width,ue.height,0,le,ge,ue.data)}}}else{if(X=v.mipmaps,Ne&&ot){X.length>0&&he++;const J=Ce(B[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,De,J.width,J.height)}for(let J=0;J<6;J++)if(L){Ne?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,B[J].width,B[J].height,le,ge,B[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,De,B[J].width,B[J].height,0,le,ge,B[J].data);for(let fe=0;fe<X.length;fe++){const Fe=X[fe].image[J].image;Ne?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,0,0,Fe.width,Fe.height,le,ge,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,De,Fe.width,Fe.height,0,le,ge,Fe.data)}}else{Ne?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,le,ge,B[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,De,le,ge,B[J]);for(let fe=0;fe<X.length;fe++){const ue=X[fe];Ne?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,0,0,le,ge,ue.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,De,le,ge,ue.image[J])}}}m(v)&&f(i.TEXTURE_CUBE_MAP),Y.__version=te.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ve(E,v,z,Z,te,Y){const xe=r.convert(z.format,z.colorSpace),ce=r.convert(z.type),pe=T(z.internalFormat,xe,ce,z.colorSpace),M=n.get(v),L=n.get(z);if(L.__renderTarget=v,!M.__hasExternalTextures){const B=Math.max(1,v.width>>Y),Q=Math.max(1,v.height>>Y);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,Y,pe,B,Q,v.depth,0,xe,ce,null):t.texImage2D(te,Y,pe,B,Q,0,xe,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),$e(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,te,L.__webglTexture,0,Xe(v)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,te,L.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(E,v,z){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){const Z=v.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,Y=S(v.stencilBuffer,te),xe=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=Xe(v);$e(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,Y,v.width,v.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,Y,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Y,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,E)}else{const Z=v.textures;for(let te=0;te<Z.length;te++){const Y=Z[te],xe=r.convert(Y.format,Y.colorSpace),ce=r.convert(Y.type),pe=T(Y.internalFormat,xe,ce,Y.colorSpace),M=Xe(v);z&&$e(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,M,pe,v.width,v.height):$e(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,M,pe,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,pe,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(v.depthTexture);Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ee(v.depthTexture,0);const te=Z.__webglTexture,Y=Xe(v);if(v.depthTexture.format===ts)$e(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(v.depthTexture.format===ls)$e(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ie(E){const v=n.get(E),z=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const Z=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){const te=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),v.__depthDisposeCallback=te}v.__boundDepthTexture=Z}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ae(v.__webglFramebuffer,E)}else if(z){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=i.createRenderbuffer(),oe(v.__webglDepthbuffer[Z],E,!1);else{const te=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),oe(v.__webglDepthbuffer,E,!1);else{const Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,te)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(E,v,z){const Z=n.get(E);v!==void 0&&ve(Z.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ie(E)}function Je(E){const v=E.texture,z=n.get(E),Z=n.get(v);E.addEventListener("dispose",A);const te=E.textures,Y=E.isWebGLCubeRenderTarget===!0,xe=te.length>1;if(xe||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=v.version,o.memory.textures++),Y){z.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[ce]=[];for(let pe=0;pe<v.mipmaps.length;pe++)z.__webglFramebuffer[ce][pe]=i.createFramebuffer()}else z.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let ce=0;ce<v.mipmaps.length;ce++)z.__webglFramebuffer[ce]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(xe)for(let ce=0,pe=te.length;ce<pe;ce++){const M=n.get(te[ce]);M.__webglTexture===void 0&&(M.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&$e(E)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ce=0;ce<te.length;ce++){const pe=te[ce];z.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ce]);const M=r.convert(pe.format,pe.colorSpace),L=r.convert(pe.type),B=T(pe.internalFormat,M,L,pe.colorSpace,E.isXRRenderTarget===!0),Q=Xe(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,B,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,z.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(z.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),He(i.TEXTURE_CUBE_MAP,v);for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)ve(z.__webglFramebuffer[ce][pe],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,pe);else ve(z.__webglFramebuffer[ce],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(v)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ce=0,pe=te.length;ce<pe;ce++){const M=te[ce],L=n.get(M);t.bindTexture(i.TEXTURE_2D,L.__webglTexture),He(i.TEXTURE_2D,M),ve(z.__webglFramebuffer,E,M,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),m(M)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ce=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,Z.__webglTexture),He(ce,v),v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)ve(z.__webglFramebuffer[pe],E,v,i.COLOR_ATTACHMENT0,ce,pe);else ve(z.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,ce,0);m(v)&&f(ce),t.unbindTexture()}E.depthBuffer&&Ie(E)}function Re(E){const v=E.textures;for(let z=0,Z=v.length;z<Z;z++){const te=v[z];if(m(te)){const Y=C(E),xe=n.get(te).__webglTexture;t.bindTexture(Y,xe),f(Y),t.unbindTexture()}}}const ht=[],F=[];function Ut(E){if(E.samples>0){if($e(E)===!1){const v=E.textures,z=E.width,Z=E.height;let te=i.COLOR_BUFFER_BIT;const Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(E),ce=v.length>1;if(ce)for(let pe=0;pe<v.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let pe=0;pe<v.length;pe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[pe]);const M=n.get(v[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,M,0)}i.blitFramebuffer(0,0,z,Z,0,0,z,Z,te,i.NEAREST),c===!0&&(ht.length=0,F.length=0,ht.push(i.COLOR_ATTACHMENT0+pe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ht.push(Y),F.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let pe=0;pe<v.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,xe.__webglColorRenderbuffer[pe]);const M=n.get(v[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,M,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Xe(E){return Math.min(s.maxSamples,E.samples)}function $e(E){const v=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Te(E){const v=o.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function it(E,v){const z=E.colorSpace,Z=E.format,te=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==ds&&z!==Vn&&(Ye.getTransfer(z)===st?(Z!==an||te!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),v}function Ce(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=W,this.setTexture2D=ee,this.setTexture2DArray=K,this.setTexture3D=ne,this.setTextureCube=$,this.rebindTextures=we,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=$e}function __(i,e){function t(n,s=Vn){let r;const o=Ye.getTransfer(s);if(n===Ln)return i.UNSIGNED_BYTE;if(n===cc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===lc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ch)return i.BYTE;if(n===Ah)return i.SHORT;if(n===Hs)return i.UNSIGNED_SHORT;if(n===ac)return i.INT;if(n===Mi)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===js)return i.HALF_FLOAT;if(n===Rh)return i.ALPHA;if(n===Ph)return i.RGB;if(n===an)return i.RGBA;if(n===Lh)return i.LUMINANCE;if(n===Ih)return i.LUMINANCE_ALPHA;if(n===ts)return i.DEPTH_COMPONENT;if(n===ls)return i.DEPTH_STENCIL;if(n===hc)return i.RED;if(n===uc)return i.RED_INTEGER;if(n===Dh)return i.RG;if(n===dc)return i.RG_INTEGER;if(n===fc)return i.RGBA_INTEGER;if(n===Lr||n===Ir||n===Dr||n===Ur)if(o===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fa||n===pa||n===ma||n===ga)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_a||n===va||n===xa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_a||n===va)return o===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xa)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ya||n===Ma||n===Sa||n===ba||n===Ea||n===Ta||n===Ca||n===Aa||n===wa||n===Ra||n===Pa||n===La||n===Ia||n===Da)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ya)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ma)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sa)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ba)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ea)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ta)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ca)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Aa)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wa)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ra)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pa)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===La)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ia)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Da)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nr||n===Ua||n===Na)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Nr)return o===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ua)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Na)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uh||n===Oa||n===Fa||n===ka)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Nr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Oa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class v_ extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ft extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const x_={type:"move"};class Ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(x_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const y_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class S_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new wt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Jn({vertexShader:y_,fragmentShader:M_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new ro(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class b_ extends fs{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null;const _=new S_,m=t.getContextAttributes();let f=null,C=null;const T=[],S=[],R=new We;let w=null;const A=new Kt;A.viewport=new pt;const k=new Kt;k.viewport=new pt;const b=[A,k],x=new v_;let P=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ie=T[j];return ie===void 0&&(ie=new Ho,T[j]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(j){let ie=T[j];return ie===void 0&&(ie=new Ho,T[j]=ie),ie.getGripSpace()},this.getHand=function(j){let ie=T[j];return ie===void 0&&(ie=new Ho,T[j]=ie),ie.getHandSpace()};function V(j){const ie=S.indexOf(j.inputSource);if(ie===-1)return;const ve=T[ie];ve!==void 0&&(ve.update(j.inputSource,j.frame,l||o),ve.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",ee);for(let j=0;j<T.length;j++){const ie=S[j];ie!==null&&(S[j]=null,T[j].disconnect(ie))}P=null,W=null,_.reset(),e.setRenderTarget(f),p=null,d=null,u=null,s=null,C=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",q),s.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(R),s.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),C=new Si(p.framebufferWidth,p.framebufferHeight,{format:an,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,ve=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?ls:ts,ve=m.stencil?cs:Mi);const Ae={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Ae),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),C=new Si(d.textureWidth,d.textureHeight,{format:an,type:Ln,depthTexture:new qh(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ze.setContext(s),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ee(j){for(let ie=0;ie<j.removed.length;ie++){const ve=j.removed[ie],oe=S.indexOf(ve);oe>=0&&(S[oe]=null,T[oe].disconnect(ve))}for(let ie=0;ie<j.added.length;ie++){const ve=j.added[ie];let oe=S.indexOf(ve);if(oe===-1){for(let Ie=0;Ie<T.length;Ie++)if(Ie>=S.length){S.push(ve),oe=Ie;break}else if(S[Ie]===null){S[Ie]=ve,oe=Ie;break}if(oe===-1)break}const Ae=T[oe];Ae&&Ae.connect(ve)}}const K=new N,ne=new N;function $(j,ie,ve){K.setFromMatrixPosition(ie.matrixWorld),ne.setFromMatrixPosition(ve.matrixWorld);const oe=K.distanceTo(ne),Ae=ie.projectionMatrix.elements,Ie=ve.projectionMatrix.elements,we=Ae[14]/(Ae[10]-1),Je=Ae[14]/(Ae[10]+1),Re=(Ae[9]+1)/Ae[5],ht=(Ae[9]-1)/Ae[5],F=(Ae[8]-1)/Ae[0],Ut=(Ie[8]+1)/Ie[0],Xe=we*F,$e=we*Ut,Te=oe/(-F+Ut),it=Te*-F;if(ie.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(it),j.translateZ(Te),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ae[10]===-1)j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Ce=we+Te,E=Je+Te,v=Xe-it,z=$e+(oe-it),Z=Re*Je/E*Ce,te=ht*Je/E*Ce;j.projectionMatrix.makePerspective(v,z,Z,te,Ce,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ae(j,ie){ie===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ie.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ie=j.near,ve=j.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(ve=_.depthFar)),x.near=k.near=A.near=ie,x.far=k.far=A.far=ve,(P!==x.near||W!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,W=x.far),A.layers.mask=j.layers.mask|2,k.layers.mask=j.layers.mask|4,x.layers.mask=A.layers.mask|k.layers.mask;const oe=j.parent,Ae=x.cameras;ae(x,oe);for(let Ie=0;Ie<Ae.length;Ie++)ae(Ae[Ie],oe);Ae.length===2?$(x,A,k):x.projectionMatrix.copy(A.projectionMatrix),me(j,x,oe)};function me(j,ie,ve){ve===null?j.matrix.copy(ie.matrixWorld):(j.matrix.copy(ve.matrixWorld),j.matrix.invert(),j.matrix.multiply(ie.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Vs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let Ee=null;function He(j,ie){if(h=ie.getViewerPose(l||o),g=ie,h!==null){const ve=h.views;p!==null&&(e.setRenderTargetFramebuffer(C,p.framebuffer),e.setRenderTarget(C));let oe=!1;ve.length!==x.cameras.length&&(x.cameras.length=0,oe=!0);for(let Ie=0;Ie<ve.length;Ie++){const we=ve[Ie];let Je=null;if(p!==null)Je=p.getViewport(we);else{const ht=u.getViewSubImage(d,we);Je=ht.viewport,Ie===0&&(e.setRenderTargetTextures(C,ht.colorTexture,d.ignoreDepthValues?void 0:ht.depthStencilTexture),e.setRenderTarget(C))}let Re=b[Ie];Re===void 0&&(Re=new Kt,Re.layers.enable(Ie),Re.viewport=new pt,b[Ie]=Re),Re.matrix.fromArray(we.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(we.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Je.x,Je.y,Je.width,Je.height),Ie===0&&(x.matrix.copy(Re.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),oe===!0&&x.cameras.push(Re)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ie=u.getDepthInformation(ve[0]);Ie&&Ie.isValid&&Ie.texture&&_.init(e,Ie,s.renderState)}}for(let ve=0;ve<T.length;ve++){const oe=S[ve],Ae=T[ve];oe!==null&&Ae!==void 0&&Ae.update(oe,ie,l||o)}Ee&&Ee(j,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const Ze=new Xh;Ze.setAnimationLoop(He),this.setAnimationLoop=function(j){Ee=j},this.dispose=function(){}}}const ai=new gn,E_=new Ke;function T_(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Vh(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,C,T,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,C,T):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===kt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===kt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const C=e.get(f),T=C.envMap,S=C.envMapRotation;T&&(m.envMap.value=T,ai.copy(S),ai.x*=-1,ai.y*=-1,ai.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),m.envMapRotation.value.setFromMatrix4(E_.makeRotationFromEuler(ai)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,C,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*C,m.scale.value=T*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,C){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===kt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const C=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function C_(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(C,T){const S=T.program;n.uniformBlockBinding(C,S)}function l(C,T){let S=s[C.id];S===void 0&&(g(C),S=h(C),s[C.id]=S,C.addEventListener("dispose",m));const R=T.program;n.updateUBOMapping(C,R);const w=e.render.frame;r[C.id]!==w&&(d(C),r[C.id]=w)}function h(C){const T=u();C.__bindingPointIndex=T;const S=i.createBuffer(),R=C.__size,w=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,S),S}function u(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(C){const T=s[C.id],S=C.uniforms,R=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let w=0,A=S.length;w<A;w++){const k=Array.isArray(S[w])?S[w]:[S[w]];for(let b=0,x=k.length;b<x;b++){const P=k[b];if(p(P,w,b,R)===!0){const W=P.__offset,V=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let ee=0;ee<V.length;ee++){const K=V[ee],ne=_(K);typeof K=="number"||typeof K=="boolean"?(P.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,W+q,P.__data)):K.isMatrix3?(P.__data[0]=K.elements[0],P.__data[1]=K.elements[1],P.__data[2]=K.elements[2],P.__data[3]=0,P.__data[4]=K.elements[3],P.__data[5]=K.elements[4],P.__data[6]=K.elements[5],P.__data[7]=0,P.__data[8]=K.elements[6],P.__data[9]=K.elements[7],P.__data[10]=K.elements[8],P.__data[11]=0):(K.toArray(P.__data,q),q+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(C,T,S,R){const w=C.value,A=T+"_"+S;if(R[A]===void 0)return typeof w=="number"||typeof w=="boolean"?R[A]=w:R[A]=w.clone(),!0;{const k=R[A];if(typeof w=="number"||typeof w=="boolean"){if(k!==w)return R[A]=w,!0}else if(k.equals(w)===!1)return k.copy(w),!0}return!1}function g(C){const T=C.uniforms;let S=0;const R=16;for(let A=0,k=T.length;A<k;A++){const b=Array.isArray(T[A])?T[A]:[T[A]];for(let x=0,P=b.length;x<P;x++){const W=b[x],V=Array.isArray(W.value)?W.value:[W.value];for(let q=0,ee=V.length;q<ee;q++){const K=V[q],ne=_(K),$=S%R,ae=$%ne.boundary,me=$+ae;S+=ae,me!==0&&R-me<ne.storage&&(S+=R-me),W.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=S,S+=ne.storage}}}const w=S%R;return w>0&&(S+=R-w),C.__size=S,C.__cache={},this}function _(C){const T={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(T.boundary=4,T.storage=4):C.isVector2?(T.boundary=8,T.storage=8):C.isVector3||C.isColor?(T.boundary=16,T.storage=12):C.isVector4?(T.boundary=16,T.storage=16):C.isMatrix3?(T.boundary=48,T.storage=48):C.isMatrix4?(T.boundary=64,T.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),T}function m(C){const T=C.target;T.removeEventListener("dispose",m);const S=o.indexOf(T.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function f(){for(const C in s)i.deleteBuffer(s[C]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class A_{constructor(e={}){const{canvas:t=mf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const C=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ct,this.toneMapping=qn,this.toneMappingExposure=1;const S=this;let R=!1,w=0,A=0,k=null,b=-1,x=null;const P=new pt,W=new pt;let V=null;const q=new ze(0);let ee=0,K=t.width,ne=t.height,$=1,ae=null,me=null;const Ee=new pt(0,0,K,ne),He=new pt(0,0,K,ne);let Ze=!1;const j=new _c;let ie=!1,ve=!1;const oe=new Ke,Ae=new Ke,Ie=new N,we=new pt,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function ht(){return k===null?$:1}let F=n;function Ut(y,U){return t.getContext(y,U)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rc}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",ue,!1),F===null){const U="webgl2";if(F=Ut(U,y),F===null)throw Ut(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Xe,$e,Te,it,Ce,E,v,z,Z,te,Y,xe,ce,pe,M,L,B,Q,le,ge,De,Ne,ot,I;function he(){Xe=new Ig(F),Xe.init(),Ne=new __(F,Xe),$e=new Cg(F,Xe,e,Ne),Te=new p_(F,Xe),$e.reverseDepthBuffer&&d&&Te.buffers.depth.setReversed(!0),it=new Ng(F),Ce=new Q0,E=new g_(F,Xe,Te,Ce,$e,Ne,it),v=new wg(S),z=new Lg(S),Z=new Hf(F),ot=new Eg(F,Z),te=new Dg(F,Z,it,ot),Y=new Fg(F,te,Z,it),le=new Og(F,$e,E),L=new Ag(Ce),xe=new J0(S,v,z,Xe,$e,ot,L),ce=new T_(S,Ce),pe=new t_,M=new a_(Xe),Q=new bg(S,v,z,Te,Y,p,c),B=new d_(S,Y,$e),I=new C_(F,it,$e,Te),ge=new Tg(F,Xe,it),De=new Ug(F,Xe,it),it.programs=xe.programs,S.capabilities=$e,S.extensions=Xe,S.properties=Ce,S.renderLists=pe,S.shadowMap=B,S.state=Te,S.info=it}he();const X=new b_(S,F);this.xr=X,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const y=Xe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Xe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(y){y!==void 0&&($=y,this.setSize(K,ne,!1))},this.getSize=function(y){return y.set(K,ne)},this.setSize=function(y,U,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=y,ne=U,t.width=Math.floor(y*$),t.height=Math.floor(U*$),G===!0&&(t.style.width=y+"px",t.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(K*$,ne*$).floor()},this.setDrawingBufferSize=function(y,U,G){K=y,ne=U,$=G,t.width=Math.floor(y*G),t.height=Math.floor(U*G),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(Ee)},this.setViewport=function(y,U,G,H){y.isVector4?Ee.set(y.x,y.y,y.z,y.w):Ee.set(y,U,G,H),Te.viewport(P.copy(Ee).multiplyScalar($).round())},this.getScissor=function(y){return y.copy(He)},this.setScissor=function(y,U,G,H){y.isVector4?He.set(y.x,y.y,y.z,y.w):He.set(y,U,G,H),Te.scissor(W.copy(He).multiplyScalar($).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(y){Te.setScissorTest(Ze=y)},this.setOpaqueSort=function(y){ae=y},this.setTransparentSort=function(y){me=y},this.getClearColor=function(y){return y.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(y=!0,U=!0,G=!0){let H=0;if(y){let O=!1;if(k!==null){const se=k.texture.format;O=se===fc||se===dc||se===uc}if(O){const se=k.texture.type,de=se===Ln||se===Mi||se===Hs||se===cs||se===cc||se===lc,ye=Q.getClearColor(),Me=Q.getClearAlpha(),Ue=ye.r,ke=ye.g,Se=ye.b;de?(g[0]=Ue,g[1]=ke,g[2]=Se,g[3]=Me,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=Ue,_[1]=ke,_[2]=Se,_[3]=Me,F.clearBufferiv(F.COLOR,0,_))}else H|=F.COLOR_BUFFER_BIT}U&&(H|=F.DEPTH_BUFFER_BIT),G&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),pe.dispose(),M.dispose(),Ce.dispose(),v.dispose(),z.dispose(),Y.dispose(),ot.dispose(),I.dispose(),xe.dispose(),X.dispose(),X.removeEventListener("sessionstart",Oc),X.removeEventListener("sessionend",Fc),ti.stop()};function J(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const y=it.autoReset,U=B.enabled,G=B.autoUpdate,H=B.needsUpdate,O=B.type;he(),it.autoReset=y,B.enabled=U,B.autoUpdate=G,B.needsUpdate=H,B.type=O}function ue(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Fe(y){const U=y.target;U.removeEventListener("dispose",Fe),dt(U)}function dt(y){bt(y),Ce.remove(y)}function bt(y){const U=Ce.get(y).programs;U!==void 0&&(U.forEach(function(G){xe.releaseProgram(G)}),y.isShaderMaterial&&xe.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,G,H,O,se){U===null&&(U=Je);const de=O.isMesh&&O.matrixWorld.determinant()<0,ye=rd(y,U,G,H,O);Te.setMaterial(H,de);let Me=G.index,Ue=1;if(H.wireframe===!0){if(Me=te.getWireframeAttribute(G),Me===void 0)return;Ue=2}const ke=G.drawRange,Se=G.attributes.position;let je=ke.start*Ue,at=(ke.start+ke.count)*Ue;se!==null&&(je=Math.max(je,se.start*Ue),at=Math.min(at,(se.start+se.count)*Ue)),Me!==null?(je=Math.max(je,0),at=Math.min(at,Me.count)):Se!=null&&(je=Math.max(je,0),at=Math.min(at,Se.count));const ct=at-je;if(ct<0||ct===1/0)return;ot.setup(O,H,ye,G,Me);let Nt,Qe=ge;if(Me!==null&&(Nt=Z.get(Me),Qe=De,Qe.setIndex(Nt)),O.isMesh)H.wireframe===!0?(Te.setLineWidth(H.wireframeLinewidth*ht()),Qe.setMode(F.LINES)):Qe.setMode(F.TRIANGLES);else if(O.isLine){let be=H.linewidth;be===void 0&&(be=1),Te.setLineWidth(be*ht()),O.isLineSegments?Qe.setMode(F.LINES):O.isLineLoop?Qe.setMode(F.LINE_LOOP):Qe.setMode(F.LINE_STRIP)}else O.isPoints?Qe.setMode(F.POINTS):O.isSprite&&Qe.setMode(F.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Qe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))Qe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const be=O._multiDrawStarts,xn=O._multiDrawCounts,et=O._multiDrawCount,en=Me?Z.get(Me).bytesPerElement:1,Pi=Ce.get(H).currentProgram.getUniforms();for(let Bt=0;Bt<et;Bt++)Pi.setValue(F,"_gl_DrawID",Bt),Qe.render(be[Bt]/en,xn[Bt])}else if(O.isInstancedMesh)Qe.renderInstances(je,ct,O.count);else if(G.isInstancedBufferGeometry){const be=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,xn=Math.min(G.instanceCount,be);Qe.renderInstances(je,ct,xn)}else Qe.render(je,ct)};function tt(y,U,G){y.transparent===!0&&y.side===fn&&y.forceSinglePass===!1?(y.side=kt,y.needsUpdate=!0,Qs(y,U,G),y.side=Zn,y.needsUpdate=!0,Qs(y,U,G),y.side=fn):Qs(y,U,G)}this.compile=function(y,U,G=null){G===null&&(G=y),f=M.get(G),f.init(U),T.push(f),G.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),y!==G&&y.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();const H=new Set;return y.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const se=O.material;if(se)if(Array.isArray(se))for(let de=0;de<se.length;de++){const ye=se[de];tt(ye,G,O),H.add(ye)}else tt(se,G,O),H.add(se)}),T.pop(),f=null,H},this.compileAsync=function(y,U,G=null){const H=this.compile(y,U,G);return new Promise(O=>{function se(){if(H.forEach(function(de){Ce.get(de).currentProgram.isReady()&&H.delete(de)}),H.size===0){O(y);return}setTimeout(se,10)}Xe.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Qt=null;function vn(y){Qt&&Qt(y)}function Oc(){ti.stop()}function Fc(){ti.start()}const ti=new Xh;ti.setAnimationLoop(vn),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(y){Qt=y,X.setAnimationLoop(y),y===null?ti.stop():ti.start()},X.addEventListener("sessionstart",Oc),X.addEventListener("sessionend",Fc),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,U,k),f=M.get(y,T.length),f.init(U),T.push(f),Ae.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(Ae),ve=this.localClippingEnabled,ie=L.init(this.clippingPlanes,ve),m=pe.get(y,C.length),m.init(),C.push(m),X.enabled===!0&&X.isPresenting===!0){const se=S.xr.getDepthSensingMesh();se!==null&&po(se,U,-1/0,S.sortObjects)}po(y,U,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(ae,me),Re=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Re&&Q.addToRenderList(m,y),this.info.render.frame++,ie===!0&&L.beginShadows();const G=f.state.shadowsArray;B.render(G,y,U),ie===!0&&L.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,O=m.transmissive;if(f.setupLights(),U.isArrayCamera){const se=U.cameras;if(O.length>0)for(let de=0,ye=se.length;de<ye;de++){const Me=se[de];Bc(H,O,y,Me)}Re&&Q.render(y);for(let de=0,ye=se.length;de<ye;de++){const Me=se[de];kc(m,y,Me,Me.viewport)}}else O.length>0&&Bc(H,O,y,U),Re&&Q.render(y),kc(m,y,U);k!==null&&(E.updateMultisampleRenderTarget(k),E.updateRenderTargetMipmap(k)),y.isScene===!0&&y.onAfterRender(S,y,U),ot.resetDefaultState(),b=-1,x=null,T.pop(),T.length>0?(f=T[T.length-1],ie===!0&&L.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,C.pop(),C.length>0?m=C[C.length-1]:m=null};function po(y,U,G,H){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||j.intersectsSprite(y)){H&&we.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ae);const de=Y.update(y),ye=y.material;ye.visible&&m.push(y,de,ye,G,we.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||j.intersectsObject(y))){const de=Y.update(y),ye=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),we.copy(y.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),we.copy(de.boundingSphere.center)),we.applyMatrix4(y.matrixWorld).applyMatrix4(Ae)),Array.isArray(ye)){const Me=de.groups;for(let Ue=0,ke=Me.length;Ue<ke;Ue++){const Se=Me[Ue],je=ye[Se.materialIndex];je&&je.visible&&m.push(y,de,je,G,we.z,Se)}}else ye.visible&&m.push(y,de,ye,G,we.z,null)}}const se=y.children;for(let de=0,ye=se.length;de<ye;de++)po(se[de],U,G,H)}function kc(y,U,G,H){const O=y.opaque,se=y.transmissive,de=y.transparent;f.setupLightsView(G),ie===!0&&L.setGlobalState(S.clippingPlanes,G),H&&Te.viewport(P.copy(H)),O.length>0&&Js(O,U,G),se.length>0&&Js(se,U,G),de.length>0&&Js(de,U,G),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Bc(y,U,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[H.id]===void 0&&(f.state.transmissionRenderTarget[H.id]=new Si(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?js:Ln,minFilter:mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const se=f.state.transmissionRenderTarget[H.id],de=H.viewport||P;se.setSize(de.z,de.w);const ye=S.getRenderTarget();S.setRenderTarget(se),S.getClearColor(q),ee=S.getClearAlpha(),ee<1&&S.setClearColor(16777215,.5),S.clear(),Re&&Q.render(G);const Me=S.toneMapping;S.toneMapping=qn;const Ue=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),f.setupLightsView(H),ie===!0&&L.setGlobalState(S.clippingPlanes,H),Js(y,G,H),E.updateMultisampleRenderTarget(se),E.updateRenderTargetMipmap(se),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Se=0,je=U.length;Se<je;Se++){const at=U[Se],ct=at.object,Nt=at.geometry,Qe=at.material,be=at.group;if(Qe.side===fn&&ct.layers.test(H.layers)){const xn=Qe.side;Qe.side=kt,Qe.needsUpdate=!0,zc(ct,G,H,Nt,Qe,be),Qe.side=xn,Qe.needsUpdate=!0,ke=!0}}ke===!0&&(E.updateMultisampleRenderTarget(se),E.updateRenderTargetMipmap(se))}S.setRenderTarget(ye),S.setClearColor(q,ee),Ue!==void 0&&(H.viewport=Ue),S.toneMapping=Me}function Js(y,U,G){const H=U.isScene===!0?U.overrideMaterial:null;for(let O=0,se=y.length;O<se;O++){const de=y[O],ye=de.object,Me=de.geometry,Ue=H===null?de.material:H,ke=de.group;ye.layers.test(G.layers)&&zc(ye,U,G,Me,Ue,ke)}}function zc(y,U,G,H,O,se){y.onBeforeRender(S,U,G,H,O,se),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(S,U,G,H,y,se),O.transparent===!0&&O.side===fn&&O.forceSinglePass===!1?(O.side=kt,O.needsUpdate=!0,S.renderBufferDirect(G,U,H,O,y,se),O.side=Zn,O.needsUpdate=!0,S.renderBufferDirect(G,U,H,O,y,se),O.side=fn):S.renderBufferDirect(G,U,H,O,y,se),y.onAfterRender(S,U,G,H,O,se)}function Qs(y,U,G){U.isScene!==!0&&(U=Je);const H=Ce.get(y),O=f.state.lights,se=f.state.shadowsArray,de=O.state.version,ye=xe.getParameters(y,O.state,se,U,G),Me=xe.getProgramCacheKey(ye);let Ue=H.programs;H.environment=y.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(y.isMeshStandardMaterial?z:v).get(y.envMap||H.environment),H.envMapRotation=H.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Ue===void 0&&(y.addEventListener("dispose",Fe),Ue=new Map,H.programs=Ue);let ke=Ue.get(Me);if(ke!==void 0){if(H.currentProgram===ke&&H.lightsStateVersion===de)return Hc(y,ye),ke}else ye.uniforms=xe.getUniforms(y),y.onBeforeCompile(ye,S),ke=xe.acquireProgram(ye,Me),Ue.set(Me,ke),H.uniforms=ye.uniforms;const Se=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Se.clippingPlanes=L.uniform),Hc(y,ye),H.needsLights=ad(y),H.lightsStateVersion=de,H.needsLights&&(Se.ambientLightColor.value=O.state.ambient,Se.lightProbe.value=O.state.probe,Se.directionalLights.value=O.state.directional,Se.directionalLightShadows.value=O.state.directionalShadow,Se.spotLights.value=O.state.spot,Se.spotLightShadows.value=O.state.spotShadow,Se.rectAreaLights.value=O.state.rectArea,Se.ltc_1.value=O.state.rectAreaLTC1,Se.ltc_2.value=O.state.rectAreaLTC2,Se.pointLights.value=O.state.point,Se.pointLightShadows.value=O.state.pointShadow,Se.hemisphereLights.value=O.state.hemi,Se.directionalShadowMap.value=O.state.directionalShadowMap,Se.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Se.spotShadowMap.value=O.state.spotShadowMap,Se.spotLightMatrix.value=O.state.spotLightMatrix,Se.spotLightMap.value=O.state.spotLightMap,Se.pointShadowMap.value=O.state.pointShadowMap,Se.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=ke,H.uniformsList=null,ke}function Gc(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=Or.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Hc(y,U){const G=Ce.get(y);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function rd(y,U,G,H,O){U.isScene!==!0&&(U=Je),E.resetTextureUnits();const se=U.fog,de=H.isMeshStandardMaterial?U.environment:null,ye=k===null?S.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ds,Me=(H.isMeshStandardMaterial?z:v).get(H.envMap||de),Ue=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ke=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Se=!!G.morphAttributes.position,je=!!G.morphAttributes.normal,at=!!G.morphAttributes.color;let ct=qn;H.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ct=S.toneMapping);const Nt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Qe=Nt!==void 0?Nt.length:0,be=Ce.get(H),xn=f.state.lights;if(ie===!0&&(ve===!0||y!==x)){const Yt=y===x&&H.id===b;L.setState(H,y,Yt)}let et=!1;H.version===be.__version?(be.needsLights&&be.lightsStateVersion!==xn.state.version||be.outputColorSpace!==ye||O.isBatchedMesh&&be.batching===!1||!O.isBatchedMesh&&be.batching===!0||O.isBatchedMesh&&be.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&be.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&be.instancing===!1||!O.isInstancedMesh&&be.instancing===!0||O.isSkinnedMesh&&be.skinning===!1||!O.isSkinnedMesh&&be.skinning===!0||O.isInstancedMesh&&be.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&be.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&be.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&be.instancingMorph===!1&&O.morphTexture!==null||be.envMap!==Me||H.fog===!0&&be.fog!==se||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==L.numPlanes||be.numIntersection!==L.numIntersection)||be.vertexAlphas!==Ue||be.vertexTangents!==ke||be.morphTargets!==Se||be.morphNormals!==je||be.morphColors!==at||be.toneMapping!==ct||be.morphTargetsCount!==Qe)&&(et=!0):(et=!0,be.__version=H.version);let en=be.currentProgram;et===!0&&(en=Qs(H,U,O));let Pi=!1,Bt=!1,_s=!1;const lt=en.getUniforms(),un=be.uniforms;if(Te.useProgram(en.program)&&(Pi=!0,Bt=!0,_s=!0),H.id!==b&&(b=H.id,Bt=!0),Pi||x!==y){Te.buffers.depth.getReversed()?(oe.copy(y.projectionMatrix),_f(oe),vf(oe),lt.setValue(F,"projectionMatrix",oe)):lt.setValue(F,"projectionMatrix",y.projectionMatrix),lt.setValue(F,"viewMatrix",y.matrixWorldInverse);const Dn=lt.map.cameraPosition;Dn!==void 0&&Dn.setValue(F,Ie.setFromMatrixPosition(y.matrixWorld)),$e.logarithmicDepthBuffer&&lt.setValue(F,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&lt.setValue(F,"isOrthographic",y.isOrthographicCamera===!0),x!==y&&(x=y,Bt=!0,_s=!0)}if(O.isSkinnedMesh){lt.setOptional(F,O,"bindMatrix"),lt.setOptional(F,O,"bindMatrixInverse");const Yt=O.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),lt.setValue(F,"boneTexture",Yt.boneTexture,E))}O.isBatchedMesh&&(lt.setOptional(F,O,"batchingTexture"),lt.setValue(F,"batchingTexture",O._matricesTexture,E),lt.setOptional(F,O,"batchingIdTexture"),lt.setValue(F,"batchingIdTexture",O._indirectTexture,E),lt.setOptional(F,O,"batchingColorTexture"),O._colorsTexture!==null&&lt.setValue(F,"batchingColorTexture",O._colorsTexture,E));const vs=G.morphAttributes;if((vs.position!==void 0||vs.normal!==void 0||vs.color!==void 0)&&le.update(O,G,en),(Bt||be.receiveShadow!==O.receiveShadow)&&(be.receiveShadow=O.receiveShadow,lt.setValue(F,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(un.envMap.value=Me,un.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(un.envMapIntensity.value=U.environmentIntensity),Bt&&(lt.setValue(F,"toneMappingExposure",S.toneMappingExposure),be.needsLights&&od(un,_s),se&&H.fog===!0&&ce.refreshFogUniforms(un,se),ce.refreshMaterialUniforms(un,H,$,ne,f.state.transmissionRenderTarget[y.id]),Or.upload(F,Gc(be),un,E)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Or.upload(F,Gc(be),un,E),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&lt.setValue(F,"center",O.center),lt.setValue(F,"modelViewMatrix",O.modelViewMatrix),lt.setValue(F,"normalMatrix",O.normalMatrix),lt.setValue(F,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Yt=H.uniformsGroups;for(let Dn=0,Un=Yt.length;Dn<Un;Dn++){const Vc=Yt[Dn];I.update(Vc,en),I.bind(Vc,en)}}return en}function od(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function ad(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(y,U,G){Ce.get(y.texture).__webglTexture=U,Ce.get(y.depthTexture).__webglTexture=G;const H=Ce.get(y);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=G===void 0,H.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,U){const G=Ce.get(y);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,G=0){k=y,w=U,A=G;let H=!0,O=null,se=!1,de=!1;if(y){const Me=Ce.get(y);if(Me.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(F.FRAMEBUFFER,null),H=!1;else if(Me.__webglFramebuffer===void 0)E.setupRenderTarget(y);else if(Me.__hasExternalTextures)E.rebindTextures(y,Ce.get(y.texture).__webglTexture,Ce.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Se=y.depthTexture;if(Me.__boundDepthTexture!==Se){if(Se!==null&&Ce.has(Se)&&(y.width!==Se.image.width||y.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(y)}}const Ue=y.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(de=!0);const ke=Ce.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(ke[U])?O=ke[U][G]:O=ke[U],se=!0):y.samples>0&&E.useMultisampledRTT(y)===!1?O=Ce.get(y).__webglMultisampledFramebuffer:Array.isArray(ke)?O=ke[G]:O=ke,P.copy(y.viewport),W.copy(y.scissor),V=y.scissorTest}else P.copy(Ee).multiplyScalar($).floor(),W.copy(He).multiplyScalar($).floor(),V=Ze;if(Te.bindFramebuffer(F.FRAMEBUFFER,O)&&H&&Te.drawBuffers(y,O),Te.viewport(P),Te.scissor(W),Te.setScissorTest(V),se){const Me=Ce.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Me.__webglTexture,G)}else if(de){const Me=Ce.get(y.texture),Ue=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Me.__webglTexture,G||0,Ue)}b=-1},this.readRenderTargetPixels=function(y,U,G,H,O,se,de){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ce.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&de!==void 0&&(ye=ye[de]),ye){Te.bindFramebuffer(F.FRAMEBUFFER,ye);try{const Me=y.texture,Ue=Me.format,ke=Me.type;if(!$e.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-H&&G>=0&&G<=y.height-O&&F.readPixels(U,G,H,O,Ne.convert(Ue),Ne.convert(ke),se)}finally{const Me=k!==null?Ce.get(k).__webglFramebuffer:null;Te.bindFramebuffer(F.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(y,U,G,H,O,se,de){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ce.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&de!==void 0&&(ye=ye[de]),ye){const Me=y.texture,Ue=Me.format,ke=Me.type;if(!$e.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=y.width-H&&G>=0&&G<=y.height-O){Te.bindFramebuffer(F.FRAMEBUFFER,ye);const Se=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Se),F.bufferData(F.PIXEL_PACK_BUFFER,se.byteLength,F.STREAM_READ),F.readPixels(U,G,H,O,Ne.convert(Ue),Ne.convert(ke),0);const je=k!==null?Ce.get(k).__webglFramebuffer:null;Te.bindFramebuffer(F.FRAMEBUFFER,je);const at=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await gf(F,at,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Se),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,se),F.deleteBuffer(Se),F.deleteSync(at),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,U=null,G=0){y.isTexture!==!0&&(Is("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,y=arguments[1]);const H=Math.pow(2,-G),O=Math.floor(y.image.width*H),se=Math.floor(y.image.height*H),de=U!==null?U.x:0,ye=U!==null?U.y:0;E.setTexture2D(y,0),F.copyTexSubImage2D(F.TEXTURE_2D,G,0,0,de,ye,O,se),Te.unbindTexture()},this.copyTextureToTexture=function(y,U,G=null,H=null,O=0){y.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,y=arguments[1],U=arguments[2],O=arguments[3]||0,G=null);let se,de,ye,Me,Ue,ke,Se,je,at;const ct=y.isCompressedTexture?y.mipmaps[O]:y.image;G!==null?(se=G.max.x-G.min.x,de=G.max.y-G.min.y,ye=G.isBox3?G.max.z-G.min.z:1,Me=G.min.x,Ue=G.min.y,ke=G.isBox3?G.min.z:0):(se=ct.width,de=ct.height,ye=ct.depth||1,Me=0,Ue=0,ke=0),H!==null?(Se=H.x,je=H.y,at=H.z):(Se=0,je=0,at=0);const Nt=Ne.convert(U.format),Qe=Ne.convert(U.type);let be;U.isData3DTexture?(E.setTexture3D(U,0),be=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),be=F.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),be=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const xn=F.getParameter(F.UNPACK_ROW_LENGTH),et=F.getParameter(F.UNPACK_IMAGE_HEIGHT),en=F.getParameter(F.UNPACK_SKIP_PIXELS),Pi=F.getParameter(F.UNPACK_SKIP_ROWS),Bt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ct.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ct.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Me),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ue),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ke);const _s=y.isDataArrayTexture||y.isData3DTexture,lt=U.isDataArrayTexture||U.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const un=Ce.get(y),vs=Ce.get(U),Yt=Ce.get(un.__renderTarget),Dn=Ce.get(vs.__renderTarget);Te.bindFramebuffer(F.READ_FRAMEBUFFER,Yt.__webglFramebuffer),Te.bindFramebuffer(F.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let Un=0;Un<ye;Un++)_s&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ce.get(y).__webglTexture,O,ke+Un),y.isDepthTexture?(lt&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ce.get(U).__webglTexture,O,at+Un),F.blitFramebuffer(Me,Ue,se,de,Se,je,se,de,F.DEPTH_BUFFER_BIT,F.NEAREST)):lt?F.copyTexSubImage3D(be,O,Se,je,at+Un,Me,Ue,se,de):F.copyTexSubImage2D(be,O,Se,je,at+Un,Me,Ue,se,de);Te.bindFramebuffer(F.READ_FRAMEBUFFER,null),Te.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else lt?y.isDataTexture||y.isData3DTexture?F.texSubImage3D(be,O,Se,je,at,se,de,ye,Nt,Qe,ct.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(be,O,Se,je,at,se,de,ye,Nt,ct.data):F.texSubImage3D(be,O,Se,je,at,se,de,ye,Nt,Qe,ct):y.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,O,Se,je,se,de,Nt,Qe,ct.data):y.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,O,Se,je,ct.width,ct.height,Nt,ct.data):F.texSubImage2D(F.TEXTURE_2D,O,Se,je,se,de,Nt,Qe,ct);F.pixelStorei(F.UNPACK_ROW_LENGTH,xn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,et),F.pixelStorei(F.UNPACK_SKIP_PIXELS,en),F.pixelStorei(F.UNPACK_SKIP_ROWS,Pi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Bt),O===0&&U.generateMipmaps&&F.generateMipmap(be),Te.unbindTexture()},this.copyTextureToTexture3D=function(y,U,G=null,H=null,O=0){return y.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,H=arguments[1]||null,y=arguments[2],U=arguments[3],O=arguments[4]||0),Is('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,U,G,H,O)},this.initRenderTarget=function(y){Ce.get(y).__webglFramebuffer===void 0&&E.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?E.setTextureCube(y,0):y.isData3DTexture?E.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?E.setTexture2DArray(y,0):E.setTexture2D(y,0),Te.unbindTexture()},this.resetState=function(){w=0,A=0,k=null,Te.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}class xc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=n}clone(){return new xc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class w_ extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class R_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ba,this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pt=new N;class $r{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=on(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=on(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=on(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=on(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=on(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new $r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ao extends Ti{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let $i;const Es=new N,Xi=new N,Yi=new N,qi=new We,Ts=new We,Qh=new Ke,Mr=new N,Cs=new N,Sr=new N,Hl=new We,Vo=new We,Vl=new We;class yc extends xt{constructor(e=new ao){if(super(),this.isSprite=!0,this.type="Sprite",$i===void 0){$i=new hn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new R_(t,5);$i.setIndex([0,1,2,0,2,3]),$i.setAttribute("position",new $r(n,3,0,!1)),$i.setAttribute("uv",new $r(n,2,3,!1))}this.geometry=$i,this.material=e,this.center=new We(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xi.setFromMatrixScale(this.matrixWorld),Qh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Yi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xi.multiplyScalar(-Yi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;br(Mr.set(-.5,-.5,0),Yi,o,Xi,s,r),br(Cs.set(.5,-.5,0),Yi,o,Xi,s,r),br(Sr.set(.5,.5,0),Yi,o,Xi,s,r),Hl.set(0,0),Vo.set(1,0),Vl.set(1,1);let a=e.ray.intersectTriangle(Mr,Cs,Sr,!1,Es);if(a===null&&(br(Cs.set(-.5,.5,0),Yi,o,Xi,s,r),Vo.set(0,1),a=e.ray.intersectTriangle(Mr,Sr,Cs,!1,Es),a===null))return;const c=e.ray.origin.distanceTo(Es);c<e.near||c>e.far||t.push({distance:c,point:Es.clone(),uv:Zt.getInterpolation(Es,Mr,Cs,Sr,Hl,Vo,Vl,new We),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function br(i,e,t,n,s,r){qi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ts.x=r*qi.x-s*qi.y,Ts.y=s*qi.x+r*qi.y):Ts.copy(qi),i.copy(e),i.x+=Ts.x,i.y+=Ts.y,i.applyMatrix4(Qh)}class P_ extends wt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=mt,h=mt,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wl extends Xt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ji=new Ke,$l=new Ke,Er=[],Xl=new Ei,L_=new Ke,As=new rt,ws=new ps;class Wo extends rt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,L_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ji),Xl.copy(e.boundingBox).applyMatrix4(ji),this.boundingBox.union(Xl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ps),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ji),ws.copy(e.boundingSphere).applyMatrix4(ji),this.boundingSphere.union(ws)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(As.geometry=this.geometry,As.material=this.material,As.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ws.copy(this.boundingSphere),ws.applyMatrix4(n),e.ray.intersectsSphere(ws)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ji),$l.multiplyMatrices(n,ji),As.matrixWorld=$l,As.raycast(e,Er);for(let o=0,a=Er.length;o<a;o++){const c=Er[o];c.instanceId=r,c.object=this,t.push(c)}Er.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Wl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new P_(new Float32Array(s*this.count),s,this.count,hc,mn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class eu extends Ti{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xr=new N,Yr=new N,Yl=new Ke,Rs=new mc,Tr=new ps,$o=new N,ql=new N;class I_ extends xt{constructor(e=new hn,t=new eu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Xr.fromBufferAttribute(t,s-1),Yr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Xr.distanceTo(Yr);e.setAttribute("lineDistance",new cn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(s),Tr.radius+=r,e.ray.intersectsSphere(Tr)===!1)return;Yl.copy(s).invert(),Rs.copy(e.ray).applyMatrix4(Yl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const f=h.getX(_),C=h.getX(_+1),T=Cr(this,e,Rs,c,f,C);T&&t.push(T)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=Cr(this,e,Rs,c,_,m);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const f=Cr(this,e,Rs,c,_,_+1);f&&t.push(f)}if(this.isLineLoop){const _=Cr(this,e,Rs,c,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Cr(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(Xr.fromBufferAttribute(o,s),Yr.fromBufferAttribute(o,r),t.distanceSqToSegment(Xr,Yr,$o,ql)>n)return;$o.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo($o);if(!(c<e.near||c>e.far))return{distance:c,point:ql.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class gi extends wt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mc extends hn{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=e;const d=(t-e)/s,p=new N,g=new We;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let f=0;f<n;f++){const C=f+m,T=C,S=C+n+1,R=C+n+2,w=C+1;a.push(T,S,w),a.push(S,R,w)}}this.setIndex(a),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(l,3)),this.setAttribute("uv",new cn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ft extends Ti{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nh,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tu extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class D_ extends tu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Xo=new Ke,jl=new N,Kl=new N;class U_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _c,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;jl.setFromMatrixPosition(e.matrixWorld),t.position.copy(jl),Kl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kl),t.updateMatrixWorld(),Xo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class N_ extends U_{constructor(){super(new Yh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class O_ extends tu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new N_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Zl=new Ke;class nu{constructor(e,t,n=0,s=1/0){this.ray=new mc(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new gc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zl),this}intersectObject(e,t=!0,n=[]){return Ga(e,this,n,t),n.sort(Jl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ga(e[s],this,n,t);return n.sort(Jl),n}}function Jl(i,e){return i.distance-e.distance}function Ga(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ga(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rc);function Ar(i,e){const t=Math.sin(i*127.1+e*311.7)*43758.5453123;return t-Math.floor(t)}function F_(i,e){const t=Math.floor(i),n=Math.floor(e),s=i-t,r=e-n,o=s*s*(3-2*s),a=r*r*(3-2*r),c=Ar(t,n),l=Ar(t+1,n),h=Ar(t,n+1),u=Ar(t+1,n+1);return c+(l-c)*o+(h-c)*a+(c-l-h+u)*o*a}function Yo(i,e,t=4){let n=1,s=1,r=0,o=0;for(let a=0;a<t;a++)r+=F_(i*s,e*s)*n,o+=n,n*=.5,s*=2;return r/o}const D={AIR:0,GRASS:1,DIRT:2,STONE:3,WOOD:4,LEAVES:5,SAND:6,WATER:7,BERRY:8,PLANKS:9,COAL_ORE:10,IRON_ORE:11,GOLD_ORE:12,DEEPSLATE:13,DEEPSLATE_COAL:14,DEEPSLATE_IRON:15,DEEPSLATE_GOLD:16,PLATFORM:17,BEDROCK:18,OSMANTHUS:19,PETAL:20},_n={[D.GRASS]:{name:"草方块",color:6135370,side:9132587,bottom:9132587,layered:!0,solid:!0,breakable:!0,drop:D.DIRT,tool:null},[D.DIRT]:{name:"泥土",color:9132587,solid:!0,breakable:!0,drop:D.DIRT,tool:null},[D.STONE]:{name:"石头",color:9080728,solid:!0,breakable:!0,drop:D.STONE,tool:"wood"},[D.WOOD]:{name:"木头",color:7029795,solid:!0,breakable:!0,drop:D.WOOD,tool:null},[D.LEAVES]:{name:"树叶",color:7178812,solid:!0,breakable:!0,drop:null,tool:null},[D.OSMANTHUS]:{name:"桂花",color:14857024,solid:!0,breakable:!0,drop:"桂花",tool:null},[D.PETAL]:{name:"落桂花",color:15779930,solid:!1,breakable:!0,drop:"桂花",tool:null},[D.SAND]:{name:"沙子",color:14205562,solid:!0,breakable:!0,drop:D.SAND,tool:null},[D.WATER]:{name:"水",color:3833812,solid:!1,breakable:!1},[D.BERRY]:{name:"浆果丛",color:12860250,solid:!0,breakable:!0,food:!0,drop:D.BERRY,tool:null},[D.PLANKS]:{name:"木板",color:12093773,solid:!0,breakable:!0,drop:D.PLANKS,tool:null},[D.COAL_ORE]:{name:"煤矿石",color:3093048,solid:!0,breakable:!0,drop:"coal",tool:"wood"},[D.IRON_ORE]:{name:"铁矿石",color:11569770,solid:!0,breakable:!0,drop:"iron",tool:"stone"},[D.GOLD_ORE]:{name:"金矿石",color:13939786,solid:!0,breakable:!0,drop:"gold",tool:"iron"},[D.DEEPSLATE]:{name:"深板岩",color:3816773,solid:!0,breakable:!0,drop:D.DEEPSLATE,tool:"wood"},[D.DEEPSLATE_COAL]:{name:"深层煤矿石",color:2764084,solid:!0,breakable:!0,drop:"coal",tool:"wood"},[D.DEEPSLATE_IRON]:{name:"深层铁矿石",color:9071186,solid:!0,breakable:!0,drop:"iron",tool:"stone"},[D.DEEPSLATE_GOLD]:{name:"深层金矿石",color:12097070,solid:!0,breakable:!0,drop:"gold",tool:"iron"},[D.PLATFORM]:{name:"工作台",color:10121288,solid:!0,breakable:!0,drop:D.PLATFORM,tool:null},[D.BEDROCK]:{name:"基岩",color:1710618,solid:!0,breakable:!1,speckled:!0}},k_=[D.DIRT,D.STONE,D.SAND,D.WOOD,D.PLANKS,D.GRASS,D.COAL_ORE,D.IRON_ORE,D.GOLD_ORE,D.DEEPSLATE,D.PLATFORM];function ks(i){return!!(_n[i]&&_n[i].solid)}function Ql(i){return!!(_n[i]&&_n[i].food)}function B_(i,e){const t=_n[i];if(!(t!=null&&t.breakable))return!1;if(!t.tool)return!0;const n={wood:1,stone:2,iron:3,gold:4};return(n[e]||0)>=(n[t.tool]||0)}const qo=96,Gn=7,hi=.075,iu=2.8,z_=.6*hi*iu;function eh(i){var e;(e=i==null?void 0:i.traverse)==null||e.call(i,t=>{var s;t.geometry&&t.geometry.dispose();const n=t.material?[].concat(t.material):[];for(const r of n)(s=r.map)==null||s.dispose(),r.dispose()})}function Ve(i,e,t,n,s,r,o,a,c=!1){const l=new rt(new ut(s*hi,r*hi,o*hi),new ft({color:a}));l.position.set(e*hi,t*hi,n*hi),c&&(l.userData.tail=!0),i.add(l)}const qr={game:[{name:"兔子",fur:13154464,dark:9271392},{name:"鹿",fur:11889202,dark:7224860},{name:"野猪",fur:5914672,dark:2891800},{name:"狐狸",fur:13785640,dark:9056276}],bird:[{name:"麻雀",body:12886122,wing:9069104,beak:15769632},{name:"白鸽",body:16250871,wing:14015462,beak:15769632},{name:"老鹰",body:7033912,wing:4011048,beak:14725152}],fish:[{name:"鲤鱼",body:13935178,belly:16180920,fin:11037216},{name:"鲈鱼",body:4034389,belly:14676952,fin:2385976},{name:"银鱼",body:14017776,belly:16777215,fin:9085112}]};function G_(i,e=0){const t=qr[i]||qr.game;return t[Math.abs(e)%t.length]}function H_(i,e,t=0){return(qr[i]||qr.game).find(s=>s.name===e)||G_(i,t)}function V_(i={}){const e=new Ft,t=i.body??3114696,n=i.belly??15202047,s=i.fin??1925007;return Ve(e,-7,.2,0,2,3.2,.35,s,!0),Ve(e,-5.2,0,0,1.6,1.8,.9,t,!0),Ve(e,-3.2,0,0,2.2,2.4,1.3,t),Ve(e,-1,.1,0,2.4,3.1,1.8,t),Ve(e,-1,-.7,0,2.2,1.2,1.5,n),Ve(e,1.2,.15,0,2.4,2.8,1.7,t),Ve(e,1.2,-.65,0,2.2,1.1,1.4,n),Ve(e,3.3,.2,0,2,2.2,1.35,t),Ve(e,4.8,.35,0,1.3,1.5,1,t),Ve(e,5.5,.85,.42,.45,.45,.35,1053720),Ve(e,5.5,.85,-.42,.45,.45,.35,1053720),Ve(e,.2,2.1,0,2.2,1.3,.28,s),Ve(e,1.2,-.2,1.15,1.5,.28,1.1,s),Ve(e,1.2,-.2,-1.15,1.5,.28,1.1,s),e}function W_(i={}){const e=new Ft,t=i.fur??9067051,n=i.dark??5913112,s=2759184;return Ve(e,0,1.2,0,3.2,2.4,2.2,t),Ve(e,2.4,1.5,0,2.2,2,1.8,t),Ve(e,3.8,1.7,0,1.4,1.5,1.4,t),Ve(e,4.5,1.5,0,.7,.7,.8,s),Ve(e,3.6,2.4,.55,.35,.35,.3,1052688),Ve(e,3.6,2.4,-.55,.35,.35,.3,1052688),Ve(e,3.5,2.8,.7,.5,.9,.35,n),Ve(e,3.5,2.8,-.7,.5,.9,.35,n),Ve(e,-2.2,1.1,0,2,1.8,1.6,t),Ve(e,-3.4,2.2,0,1.2,.7,.5,n),Ve(e,1.6,0,.7,.7,1.2,.7,n),Ve(e,1.6,0,-.7,.7,1.2,.7,n),Ve(e,-1.4,0,.7,.7,1.2,.7,n),Ve(e,-1.4,0,-.7,.7,1.2,.7,n),e}function $_(i={}){const e=new Ft,t=i.body??15922424,n=i.wing??13095132,s=i.beak??15769632,r=13660192;return Ve(e,0,.4,0,2.2,1.6,1.5,t),Ve(e,1.6,.7,0,1.2,1.2,1.2,t),Ve(e,2.4,.55,0,.8,.55,.55,s),Ve(e,1.85,1.05,.4,.28,.28,.22,1052688),Ve(e,1.85,1.05,-.4,.28,.28,.22,1052688),Ve(e,-1.5,.5,0,1.4,1.2,1.1,t),Ve(e,-2.4,.9,0,.9,.9,.35,14830411),Ve(e,.2,.7,1.5,2.4,.35,1.8,n),Ve(e,.2,.7,-1.5,2.4,.35,1.8,n),Ve(e,.4,-.5,.35,.35,.9,.3,r),Ve(e,.4,-.5,-.35,.35,.9,.3,r),e}function X_(i,e){return i==="fish"?V_(e):i==="bird"?$_(e):W_(e)}class Y_{constructor(e){this.scene=e,this.size=qo,this.seaLevel=Gn,this.blocks=new Uint8Array(qo*28*qo),this.height=28,this.group=new Ft,this.scene.add(this.group),this.meshes=new Map,this.foodSpawns=[],this.dirty=!1,this.rebuildCooldown=0,this.lifeAcc=0,this.weather="clear",this.weatherLeft=.05,this.wet=0,this.flash=0,this.weatherNote="",this.generate(),this.rebuild()}idx(e,t,n){return t*this.size*this.size+n*this.size+e}inBounds(e,t,n){return e>=0&&n>=0&&t>=0&&e<this.size&&n<this.size&&t<this.height}get(e,t,n){return this.inBounds(e,t,n)?this.blocks[this.idx(e,t,n)]:D.AIR}set(e,t,n,s){return this.inBounds(e,t,n)?(this.blocks[this.idx(e,t,n)]=s,!0):!1}surfaceY(e,t){for(let n=this.height-1;n>=0;n--)if(ks(this.get(e,n,t)))return n;return 0}walkSurfaceY(e,t){for(let n=this.height-1;n>=0;n--){const s=this.get(e,n,t);if(ks(s)&&!(s===D.LEAVES||s===D.WOOD||s===D.BERRY||s===D.OSMANTHUS))return n}return 0}isBlocked(e,t,n){const s=this.get(Math.floor(e),Math.floor(t),Math.floor(n));return ks(s)&&s!==D.LEAVES&&s!==D.OSMANTHUS}generate(){const e=this.size/2;for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){const s=(t-e)/e,r=(n-e)/e,o=Math.hypot(s*1.05,r*.95),a=Yo(t*.038,n*.038,5),c=Yo(t*.09+20,n*.09+8,3);let l=Math.floor(3+a*9+c*3);o>.72?l=Math.floor(2+a*3):o>.58?l=Math.min(l,Gn+1):o<.28&&c>.55&&(l+=2),o>.78&&Yo(t*.2,n*.2,2)>.72&&(l=Gn+2+Math.floor(a*2));const h=l<=Gn+1;this.set(t,0,n,D.BEDROCK);for(let u=1;u<=l;u++){let d=D.STONE;u<=3?d=D.DEEPSLATE:u<=6&&(d=D.STONE),u===l?d=h?D.SAND:D.GRASS:u>=l-2&&u>3&&(d=h?D.SAND:D.DIRT),this.set(t,u,n,d)}if(l<Gn)for(let u=l+1;u<=Gn;u++)this.set(t,u,n,D.WATER);this.scatterOres(t,n,l),!h&&l>Gn&&Math.random()<.032?(this.set(t,l+1,n,D.BERRY),this.foodSpawns.push({x:t,y:l+1,z:n})):!h&&l>Gn&&Math.random()<.055&&(Math.random()<.46?this.plantOsmanthus(t,l+1,n):this.plantTree(t,l+1,n))}this.scatterPetals(),this.collectBiomes(),this.collectPuddles(),this.seedCritters(),this.seedSky()}scatterOres(e,t,n){for(let s=1;s<Math.min(n,14);s++){if(this.get(e,s,t)===D.BEDROCK)continue;const r=Math.random();s<=4?r<.05&&this.set(e,s,t,this._deepOre(r)):r<.04&&this.set(e,s,t,this._shallowOre(r))}}_shallowOre(e){return e<.012?D.GOLD_ORE:e<.025?D.IRON_ORE:D.COAL_ORE}_deepOre(e){return e<.015?D.DEEPSLATE_GOLD:e<.03?D.DEEPSLATE_IRON:D.DEEPSLATE_COAL}columnFlags(e,t){e=Math.max(0,Math.min(this.size-1,e)),t=Math.max(0,Math.min(this.size-1,t));const n=this.heightMap[t][e],s=this.get(e,n,t),r=this.get(e,n+1,t);let o=!1;for(let a=n;a>=Math.max(0,n-8);a--)this.get(e,a,t)===D.WOOD&&(o=!0);return{y:n,ground:s,shore:s===D.SAND||s===D.WATER||r===D.WATER,woods:o,walk:(s===D.GRASS||s===D.SAND||s===D.DIRT)&&r!==D.WATER&&s!==D.LEAVES&&s!==D.WOOD}}collectBiomes(){this.heightMap=Array.from({length:this.size},()=>new Uint8Array(this.size));for(let e=0;e<this.size;e++)for(let t=0;t<this.size;t++)this.heightMap[t][e]=this.surfaceY(e,t);this.biomeSpots={sea:[],hunt:[],field:[]};for(let e=2;e<this.size-2;e++)for(let t=2;t<this.size-2;t++){const n=this.columnFlags(e,t);if(!n.walk)continue;let s=!1,r=!1;for(let o=-3;o<=3&&!(s&&r);o++)for(let a=-3;a<=3;a++){const c=this.columnFlags(e+o,t+a);s=s||c.shore,r=r||c.woods}n.ground===D.SAND?this.biomeSpots.sea.push({x:e,y:n.y,z:t}):r?this.biomeSpots.hunt.push({x:e,y:n.y,z:t}):n.ground===D.GRASS&&this.biomeSpots.field.push({x:e,y:n.y,z:t})}}biomeAt(e,t){if(e=Math.max(0,Math.min(this.size-1,e)),t=Math.max(0,Math.min(this.size-1,t)),!this.heightMap)return"field";if(this.columnFlags(e,t).ground===D.SAND)return"sea";for(let s=-3;s<=3;s++)for(let r=-3;r<=3;r++){const o=Math.max(0,Math.min(this.size-1,e+s)),a=Math.max(0,Math.min(this.size-1,t+r));if(this.columnFlags(o,a).woods)return"hunt"}return"field"}spawnBiome(e){var s;const t=((s=this.biomeSpots)==null?void 0:s[e])||[];if(!t.length)return this.randomSpawn();const n=t[Math.floor(Math.random()*t.length)];return new N(n.x+.5,n.y+1.05,n.z+.5)}landAt(e,t){const n=Math.floor(e),s=Math.floor(t);if(n<2||s<2||n>=this.size-2||s>=this.size-2)return null;const r=this.walkSurfaceY(n,s);for(let a=r+1;a<=this.seaLevel;a++)if(this.get(n,a,s)===D.WATER)return null;const o=this.get(n,r,s);return o!==D.GRASS&&o!==D.DIRT?null:{x:n+.5,y:r+1+z_+.02,z:s+.5}}spawnWoods(){for(let n=0;n<40;n++){const s=3+Math.floor(Math.random()*(this.size-6)),r=3+Math.floor(Math.random()*(this.size-6)),o=this.surfaceY(s,r);let a=!1;for(let l=o;l>=Math.max(1,o-6);l--)this.get(s,l,r)===D.WOOD&&(a=!0);if(!a)continue;const c=this.landAt(s+(Math.random()<.5?2:-2),r+(Math.random()<.5?2:-2))||this.landAt(s,r);if(c)return new N(c.x,c.y,c.z)}const e=this.spawnBiome("hunt"),t=this.landAt(e.x,e.z);return t&&e.set(t.x,t.y,t.z),e}burialNear(e,t,n){const s=n==="sea"?"sea":n==="hunt"?"hunt":"field",r=this.spawnBiome(s);r.x=Math.max(2,Math.min(this.size-2,e*.35+r.x*.65)),r.z=Math.max(2,Math.min(this.size-2,t*.35+r.z*.65));const o=this.surfaceY(Math.floor(r.x),Math.floor(r.z));return r.y=o+1.02,r}seedCritters(){this.critters=[];for(let e=0;e<18;e++)this.critters.push(this.makeCritter("fish"));for(let e=0;e<36;e++)this.critters.push(this.makeCritter("game"));for(let e=0;e<16;e++)this.critters.push(this.makeCritter("bird"))}makeCritter(e,t){const n=e==="fish"?"sea":e==="bird"?"field":"hunt",s=e==="game"||e==="bird"&&Math.random()<.6?this.spawnWoods():this.spawnBiome(n);e==="fish"&&(s.y=this.seaLevel-.35+Math.random()*.4),e==="bird"&&(s.y+=4+Math.random()*5),this.critterSeq=(this.critterSeq||0)+1;const r=H_(e,t,this.critterSeq),o=X_(e,r);return e==="game"&&o.scale.setScalar(iu),e==="bird"&&o.scale.setScalar(2.3),e==="fish"&&o.scale.setScalar(1.8),o.position.copy(s),this.scene.add(o),{id:this.critterSeq,kind:e,species:r.name,mesh:o,gone:!1,back:0,phase:Math.random()*Math.PI*2,home:s.clone()}}findBeach(){for(let e=0;e<140;e++){const t=2+Math.floor(Math.random()*(this.size-4)),n=2+Math.floor(Math.random()*(this.size-4)),s=this.walkSurfaceY(t,n);if(this.get(t,s,n)===D.SAND&&s>=this.seaLevel-1&&s<=this.seaLevel+2)return{x:t+.5,y:s+.22,z:n+.5}}return null}nearestCritter(e,t,n=16){let s=null,r=n*n;for(const o of this.critters||[]){if(o.gone||o.kind!==t)continue;const a=o.mesh.position.x-e.x,c=o.mesh.position.z-e.z,l=a*a+c*c;l<r&&(r=l,s=o)}return s}collectCritter(e){var t;return!e||e.gone?!1:(e.gone=!0,e.back=performance.now()+14e3,e.mesh.visible=!1,this.silentCatch||(t=this.onCatch)==null||t.call(this,e),!0)}tickCritters(e=.016){const t=performance.now();this.lifeAcc=(this.lifeAcc||0)+e;for(const n of this.critters||[]){if(n.gone){if(t<n.back)continue;const r=n.kind==="fish"?"sea":n.kind==="bird"?"field":"hunt",o=n.kind==="game"||n.kind==="bird"?this.spawnWoods():this.spawnBiome(r);n.kind==="fish"&&(o.y=this.seaLevel-.35+Math.random()*.4),n.kind==="bird"&&(o.y+=4+Math.random()*5),n.home.copy(o),n.mesh.position.copy(o),n.mesh.visible=!0,n.gone=!1;continue}n.phase+=e*(n.kind==="bird"?1.6:.9);const s=Math.sin(n.phase);if(n.kind==="bird")n.mesh.position.x=n.home.x+Math.cos(n.phase*.5)*3.5,n.mesh.position.z=n.home.z+Math.sin(n.phase*.5)*3.5,n.mesh.position.y=n.home.y+s*.8,n.mesh.rotation.y=-n.phase*.5;else if(n.kind==="fish"){n.mesh.position.x=n.home.x+Math.cos(n.phase)*1.4,n.mesh.position.z=n.home.z+Math.sin(n.phase)*1.4,n.mesh.position.y=this.seaLevel-.42+s*.12,n.mesh.rotation.y=-n.phase-Math.PI/2;const r=Math.sin(n.phase*7)*.55;for(const o of n.mesh.children)o.userData.tail&&(o.rotation.y=r)}else{const r=n.home.x+Math.cos(n.phase*.35)*6,o=n.home.z+Math.sin(n.phase*.35)*6,a=this.landAt(r,o);if(a){const c=Math.abs(Math.sin(n.phase*2.2))*.06;n.mesh.position.set(a.x,a.y+c,a.z)}n.mesh.rotation.y=-n.phase*.35}}if(this.lifeAcc>28){this.lifeAcc=0;const n=["fish","fish","game","bird"],s=n[Math.floor(Math.random()*n.length)];for(this.critters.push(this.makeCritter(s));this.critters.length>90;){const r=this.critters.shift();this.scene.remove(r.mesh),eh(r.mesh)}}}plantOsmanthus(e,t,n){const s=2+Math.floor(Math.random()*2);for(let o=0;o<s;o++)this.set(e,t+o,n,D.WOOD);const r=t+s-1;for(let o=-2;o<=2;o++)for(let a=-2;a<=2;a++)for(let c=0;c<=2;c++){if(Math.abs(o)+Math.abs(a)+Math.abs(c-1)>3)continue;const l=e+o,h=r+c,u=n+a;this.get(l,h,u)===D.AIR&&this.set(l,h,u,D.OSMANTHUS)}}scatterPetals(){for(let e=2;e<this.size-2;e++)for(let t=2;t<this.size-2;t++){let n=!1,s=!1;for(let r=1;r<this.height;r++){const o=this.get(e,r,t);o===D.OSMANTHUS&&(n=!0),o===D.WOOD&&(s=!0)}if(!(!n||!s))for(let r=0;r<7;r++){const o=e+Math.floor(Math.random()*5)-2,a=t+Math.floor(Math.random()*5)-2,c=this.surfaceY(o,a);this.get(o,c,a)===D.GRASS&&this.get(o,c+1,a)===D.AIR&&this.set(o,c+1,a,D.PETAL)}}}plantTree(e,t,n){const s=3+Math.floor(Math.random()*2);for(let o=0;o<s;o++)this.set(e,t+o,n,D.WOOD);const r=t+s;for(let o=-2;o<=2;o++)for(let a=-2;a<=2;a++)for(let c=-1;c<=1;c++){if(Math.abs(o)+Math.abs(a)+Math.abs(c)>4)continue;const l=e+o,h=r+c,u=n+a;this.get(l,h,u)===D.AIR&&this.set(l,h,u,D.LEAVES)}}markDirty(){this.dirty=!0}applyBlocks(e){return e.length!==this.blocks.length?!1:(this.blocks.set(e),this.silentEdit=!0,this.rebuild(),this.collectPuddles(),this.silentEdit=!1,!0)}syncCritters(e){const t=new Map((this.critters||[]).map(r=>[r.id,r])),n=[];for(const r of e||[]){let o=t.get(r.id);o?t.delete(r.id):(o=this.makeCritter(r.k||"game",r.species),o.id=r.id,o.species=r.species||o.species),o.gone=!!r.gone,o.mesh.visible=!r.gone,r.gone||(o.mesh.position.set(r.x,r.y,r.z),o.home.set(r.x,r.y,r.z),r.ry!=null&&(o.mesh.rotation.y=r.ry)),n.push(o)}for(const r of t.values())this.scene.remove(r.mesh),eh(r.mesh);this.critters=n;const s=(e||[]).reduce((r,o)=>Math.max(r,o.id||0),0);this.critterSeq=Math.max(this.critterSeq||0,s)}flushRebuild(e=0){this.dirty&&(this.rebuildCooldown-=e,!(this.rebuildCooldown>0)&&(this.rebuild(),this.dirty=!1,this.rebuildCooldown=.18))}bedrockMap(){if(this._bedrockMap)return this._bedrockMap;const e=document.createElement("canvas");e.width=16,e.height=16;const t=e.getContext("2d"),n=["#0d0d0d","#1a1a1a","#222222","#141414"],s=["#d8d8d8","#f0f0f0","#a8a8a8","#e8e8e8"];for(let o=0;o<16;o++)for(let a=0;a<16;a++){const c=a*7+o*13+(a^o)*3&15;t.fillStyle=c<5?s[c%s.length]:n[c%n.length],t.fillRect(a,o,1,1)}const r=new gi(e);return r.magFilter=mt,r.minFilter=mt,r.colorSpace=Ct,this._bedrockMap=r,r}berryMap(){if(this._berryMap)return this._berryMap;const e=document.createElement("canvas");e.width=16,e.height=16;const t=e.getContext("2d"),n=["#2f7a34","#3f8f3a","#245f28","#4ea04a"];for(let o=0;o<16;o++)for(let a=0;a<16;a++){const c=a*5+o*9+(a^o)&15;t.fillStyle=n[c%n.length],t.fillRect(a,o,1,1)}const s=[[3,3],[10,4],[6,8],[12,11],[4,12],[8,2]];t.fillStyle="#e23b4a";for(const[o,a]of s)t.fillRect(o,a,2,2);const r=new gi(e);return r.magFilter=mt,r.minFilter=mt,r.colorSpace=Ct,this._berryMap=r,r}osmanthusMap(){if(this._osmanthusMap)return this._osmanthusMap;const e=document.createElement("canvas");e.width=16,e.height=16;const t=e.getContext("2d"),n=["#2f5a28","#3d6b30","#244820","#4a7a38"];for(let o=0;o<16;o++)for(let a=0;a<16;a++){const c=a*5+o*9+(a^o)&15;t.fillStyle=n[c%n.length],t.fillRect(a,o,1,1)}const s=["#f2d56a","#e8b83a","#fff1b0","#d9a441"];for(let o=0;o<28;o++){const a=(o*5+2)%15,c=(o*7+1)%15;t.fillStyle=s[o%s.length],t.fillRect(a,c,o%4===0?2:1,1)}const r=new gi(e);return r.magFilter=mt,r.minFilter=mt,r.colorSpace=Ct,this._osmanthusMap=r,r}petalMap(){if(this._petalMap)return this._petalMap;const e=document.createElement("canvas");e.width=16,e.height=16;const t=e.getContext("2d");t.clearRect(0,0,16,16);const n=["#f6dc78","#e7b44a","#fff4c4","#d9a03a"];[[2,3],[5,8],[9,2],[12,6],[7,12],[3,13],[11,11],[14,3],[6,5],[10,9]].forEach(([o,a],c)=>{t.fillStyle=n[c%n.length],t.fillRect(o,a,2,1)});const r=new gi(e);return r.magFilter=mt,r.minFilter=mt,r.colorSpace=Ct,this._petalMap=r,r}makeMaterial(e){const t=_n[e];if(t.speckled)return new ft({map:this.bedrockMap()});if(e===D.BERRY)return new ft({map:this.berryMap(),transparent:!0,opacity:.95});if(e===D.OSMANTHUS)return new ft({map:this.osmanthusMap(),transparent:!0,opacity:.92});if(e===D.PETAL)return new ft({map:this.petalMap(),transparent:!0,alphaTest:.2,depthWrite:!1});if(t.layered){const n=new ft({color:t.side}),s=new ft({color:t.color}),r=new ft({color:t.bottom||t.side});return[n,n.clone(),s,r,n.clone(),n.clone()]}return new ft({color:t.color,transparent:e===D.WATER||e===D.LEAVES||e===D.BERRY,opacity:e===D.WATER?.55:e===D.LEAVES?.85:e===D.BERRY?.95:1})}rebuild(){for(const n of this.meshes.values()){this.group.remove(n),n.geometry.dispose();const s=Array.isArray(n.material)?n.material:[n.material];for(const r of s)(r.map===this._bedrockMap||r.map===this._berryMap||r.map===this._osmanthusMap||r.map===this._petalMap)&&(r.map=null),r.dispose()}this.meshes.clear();const e=new Map;for(let n=0;n<this.size;n++)for(let s=0;s<this.size;s++)for(let r=0;r<this.height;r++){const o=this.get(n,r,s);o!==D.AIR&&this.isExposed(n,r,s)&&(e.has(o)||e.set(o,[]),e.get(o).push(n,r,s))}const t=new ut(1,1,1);for(const[n,s]of e){const r=s.length/3,o=this.makeMaterial(n),a=new Wo(t,o,r);a.castShadow=n!==D.WATER,a.receiveShadow=!0;const c=new Ke,l=new jn,h=new N,u=new N(1,1,1);for(let d=0;d<r;d++){const p=s[d*3],g=s[d*3+1],_=s[d*3+2];n===D.PETAL?(h.set(p+.5,g+.07,_+.5),u.set(.78,.12,.78),c.compose(h,l,u)):(u.set(1,1,1),h.set(p+.5,g+.5,_+.5),c.compose(h,l,u)),a.setMatrixAt(d,c)}a.instanceMatrix.needsUpdate=!0,this.meshes.set(n,a),this.group.add(a)}this.dirty=!1}isExposed(e,t,n){const s=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];for(const[r,o,a]of s){const c=this.get(e+r,t+o,n+a);if(c===D.AIR||c===D.WATER||c===D.PETAL)return!0}return!1}breakBlock(e,t,n){var r,o;const s=this.get(e,t,n);return!s||!((r=_n[s])!=null&&r.breakable)?null:(this.set(e,t,n,D.AIR),this.markDirty(),this.silentEdit||(o=this.onEdit)==null||o.call(this,e,t,n,D.AIR),s)}placeBlock(e,t,n,s=D.DIRT){var r;return!this.inBounds(e,t,n)||this.get(e,t,n)!==D.AIR?!1:(this.set(e,t,n,s),this.markDirty(),this.silentEdit||(r=this.onEdit)==null||r.call(this,e,t,n,s),!0)}findNearest(e,t,n=18){let s=null,r=n*n;const o=Math.floor(e.x),a=Math.floor(e.z),c=Math.ceil(n);for(let l=o-c;l<=o+c;l++)for(let h=a-c;h<=a+c;h++)if(!(l<0||h<0||l>=this.size||h>=this.size))for(let u=this.height-1;u>=0;u--){const d=this.get(l,u,h);if(!t(d,l,u,h))continue;const p=l+.5-e.x,g=h+.5-e.z,_=p*p+g*g;_<r&&(r=_,s={x:l,y:u,z:h,id:d});break}return s}spawnFoodNear(e,t=3){let n=0;for(let s=0;s<40&&n<t;s++){const r=Math.max(1,Math.min(this.size-2,Math.floor(e.x+(Math.random()-.5)*10))),o=Math.max(1,Math.min(this.size-2,Math.floor(e.z+(Math.random()-.5)*10))),a=this.surfaceY(r,o);this.get(r,a,o)===D.GRASS&&this.get(r,a+1,o)===D.AIR&&(this.set(r,a+1,o,D.BERRY),n++)}return n&&this.rebuild(),n}randomSpawn(){for(let e=0;e<80;e++){const t=8+Math.floor(Math.random()*(this.size-16)),n=8+Math.floor(Math.random()*(this.size-16)),s=this.surfaceY(t,n);if(this.get(t,s,n)===D.GRASS||this.get(t,s,n)===D.DIRT)return new N(t+.5,s+1.1,n+.5)}return new N(this.size/2,12,this.size/2)}collectPuddles(){const e=[];for(let n=2;n<this.size-2;n++)for(let s=2;s<this.size-2;s++){const r=this.walkSurfaceY(n,s),o=this.get(n,r,s);if(o!==D.GRASS&&o!==D.DIRT||r<=this.seaLevel)continue;const a=this.get(n,r+1,s);if(a!==D.AIR&&a!==D.PETAL)continue;let c=0,l=0;for(let h=-1;h<=1;h++)for(let u=-1;u<=1;u++){if(!h&&!u)continue;const d=this.walkSurfaceY(n+h,s+u);d>=r&&(c+=1),d>r&&(l+=1)}c>=6&&l>=1&&e.push({x:n,y:r,z:s,basin:Math.min(4,l)})}e.sort((n,s)=>s.basin-n.basin);const t=[];for(const n of e)if(!t.some(s=>Math.abs(s.x-n.x)<3&&Math.abs(s.z-n.z)<3)&&(t.push(n),t.length>=72))break;this.puddleSpots=t,this.puddleMesh&&(this.scene.remove(this.puddleMesh),this.puddleMesh.geometry.dispose(),this.puddleMesh.material.dispose(),this.puddleMesh=null),this.drawPuddles(!0)}drawPuddles(e=!1){const t=this.puddleSpots||[],n=Math.ceil(this.wet*t.length);if(!e&&n===this._shownPuddles&&Math.abs(this.wet-(this._drawnWet||0))<.03||(this._shownPuddles=n,this._drawnWet=this.wet,!t.length))return;if(!this.puddleMesh){const c=new ut(1,1,1),l=new ft({color:5015236,transparent:!0,opacity:.62,depthWrite:!1});this.puddleMesh=new Wo(c,l,t.length),this.puddleMesh.frustumCulled=!1,this.scene.add(this.puddleMesh)}this.puddleMesh.count=n,this.puddleMesh.visible=n>0;const s=new Ke,r=new jn,o=new N,a=new N;for(let c=0;c<n;c++){const l=t[c],h=.045+this.wet*(.03+l.basin*.028);o.set(l.x+.5,l.y+1+h*.5,l.z+.5),a.set(.84,h,.84),s.compose(o,r,a),this.puddleMesh.setMatrixAt(c,s)}this.puddleMesh.instanceMatrix.needsUpdate=!0}standingInPuddle(e,t){var o;if(this.wet<.08||!((o=this.puddleSpots)!=null&&o.length))return!1;const n=Math.ceil(this.wet*this.puddleSpots.length),s=Math.floor(e),r=Math.floor(t);for(let a=0;a<n;a++){const c=this.puddleSpots[a];if(c.x===s&&c.z===r)return!0}return!1}seedSky(){this.weather="clear",this.weatherLeft=.045+Math.random()*.06,this.wet=0,this.flash=0,this.nextBolt=3+Math.random()*5,this.weatherNote="";const e=new ut(.035,.46,.035),t=new Ws({color:14149364,transparent:!0,opacity:.5,depthWrite:!1});this.rainMesh=new Wo(e,t,380),this.rainMesh.frustumCulled=!1,this.rainMesh.visible=!1,this.scene.add(this.rainMesh),this.rainDrops=Array.from({length:380},()=>({x:(Math.random()-.5)*30,y:Math.random()*16,z:(Math.random()-.5)*30,v:16+Math.random()*12,drift:(Math.random()-.5)*.8})),this.bolt=new rt(new ut(.14,1,.14),new Ws({color:16251903})),this.bolt.visible=!1,this.scene.add(this.bolt),this.clouds=new Ft,this.scene.add(this.clouds),this.cloudMat=new ft({color:16183524,transparent:!0,opacity:.84,depthWrite:!1});for(let n=0;n<8;n++){const s=new Ft,r=3+Math.floor(Math.random()*3);for(let o=0;o<r;o++){const a=new rt(new ut(2.6+Math.random()*3.4,1.05,2.1+Math.random()*2),this.cloudMat);a.position.set((Math.random()-.5)*4.5,Math.random()*.5,(Math.random()-.5)*2.6),s.add(a)}s.position.set(Math.random()*this.size,23+Math.random()*5,Math.random()*this.size),s.userData.speed=.6+Math.random()*1.1,s.userData.baseY=s.position.y,this.clouds.add(s)}}weatherSnap(){return{k:this.weather,wet:Math.round(this.wet*1e3)/1e3}}applyWeather(e){if(!e)return;const t=e.k==="rain"||e.k==="storm"?e.k:"clear";t!==this.weather&&(this.weatherNote=this.weatherLine(t)),this.weather=t,this.wet=Math.max(0,Math.min(1,Number(e.wet)||0)),this.drawPuddles()}weatherLine(e){return e==="storm"?"乌云压下来了，开始打雷。低洼的地方会积更深的水":e==="rain"?"下雨了。草地的低处会慢慢积出水洼":"云散开了，天放晴，积水会慢慢退掉"}takeWeatherNote(){const e=this.weatherNote;return this.weatherNote="",e}tickWeather(e){const t=Math.max(0,e);if(this.weatherLeft-=t,this.weather==="storm"?this.wet=Math.min(1,this.wet+t*5.2):this.weather==="rain"?this.wet=Math.min(1,this.wet+t*2.6):this.wet=Math.max(0,this.wet-t*1.15),this.weatherLeft<=0){const n=Math.random();let s="clear";this.weather==="clear"?s=n<.62?"rain":n<.84?"storm":"clear":this.weather==="rain"?s=n<.34?"storm":n<.72?"clear":"rain":s=n<.55?"rain":"clear",s!==this.weather&&(this.weatherNote=this.weatherLine(s)),this.weather=s,this.weatherLeft=s==="clear"?.1+Math.random()*.18:.055+Math.random()*.12}this.drawPuddles()}tickSkyFx(e,t){var p;const n=this.weather==="storm",s=n||this.weather==="rain";this.flash=Math.max(0,this.flash-e*3.4),this.cloudMat&&(this.cloudMat.color.set(n?5857643:s?11845318:16052196),this.cloudMat.opacity=n?.94:s?.9:.8);for(const g of((p=this.clouds)==null?void 0:p.children)||[]){const _=n?7:s?2.4:1;g.position.x+=g.userData.speed*e*_,g.position.x>this.size+10&&(g.position.x=-10),g.position.y=g.userData.baseY-(n?6:s?2.5:0)}if(!this.rainMesh||(this.rainMesh.visible=s,this.bolt.visible=n&&this.flash>.45,!s))return;const r=new Ke,o=new jn,a=new N,c=new N(1,n?1.35:1,1),l=(t==null?void 0:t.position)||new N(this.size/2,12,this.size/2);for(let g=0;g<this.rainDrops.length;g++){const _=this.rainDrops[g];_.y-=_.v*e*(n?1.45:1),_.x+=_.drift*e*(n?6:1.5),(_.y<-2||Math.abs(_.x)>18||Math.abs(_.z)>18)&&(_.x=(Math.random()-.5)*28,_.y=8+Math.random()*8,_.z=(Math.random()-.5)*28),a.set(l.x+_.x,l.y+_.y-4,l.z+_.z),r.compose(a,o,c),this.rainMesh.setMatrixAt(g,r)}if(this.rainMesh.instanceMatrix.needsUpdate=!0,this.rainMesh.material.opacity=n?.62:.42,!n||(this.nextBolt-=e,this.nextBolt>0))return;this.nextBolt=4+Math.random()*7,this.flash=1;const h=l.x+(Math.random()-.5)*24,u=l.z+(Math.random()-.5)*24,d=this.walkSurfaceY(Math.floor(h),Math.floor(u));this.bolt.visible=!0,this.bolt.scale.set(1,16,1),this.bolt.position.set(h,d+9,u)}}const Pn=[{key:"speed",label:"速度",color:"#5b8def"},{key:"forage",label:"觅食",color:"#34c759"},{key:"build",label:"筑巢",color:"#f0b429"},{key:"social",label:"社交",color:"#bf5af2"},{key:"brave",label:"勇敢",color:"#ff7b72"},{key:"thrift",label:"节食",color:"#64d2ff"},{key:"fertility",label:"生育",color:"#ff9f0a"},{key:"vision",label:"视力",color:"#ac8e68"}];function Cn(i){return Math.max(.05,Math.min(.98,i))}function Ha(i={}){const e={};for(const t of Pn){const n=i[t.key]??.45+Math.random()*.25;e[t.key]=Cn(n+(Math.random()-.5)*.2)}return e}function q_(i,e,t=.12){const n={};for(const s of Pn){let a=(Math.random()<.5?i[s.key]:e[s.key])*.7+(i[s.key]+e[s.key])/2*.3;Math.random()<t&&(a+=(Math.random()-.5)*.35),n[s.key]=Cn(a)}return n}function j_(i){const e={};for(const t of Pn)e[t.key]=0;if(!i.length)return e;for(const t of i)for(const n of Pn)e[n.key]+=t.genes[n.key];for(const t of Pn)e[t.key]/=i.length;return e}function th(i){const e=Math.floor(80+i.brave*140+i.fertility*40),t=Math.floor(70+i.forage*140+i.thrift*30),n=Math.floor(90+i.social*130+i.vision*20);return Math.min(255,e)<<16|Math.min(255,t)<<8|Math.min(255,n)}function jr(i){return i[Math.floor(Math.random()*i.length)]}const Kr={zh:{hungry:{lines:["我快饿扁了。","你看到吃的了吗？","再找不到吃的就危险了。"],replies:["我也在找。","先别急，一起找。","我刚看到一点。"]},home:{lines:["今晚得有个屋顶。","木头还差几块。","房子盖好了就能熬过夜里。"],replies:["我去弄木头。","夜里外面冷。","盖好了叫我。"]},war:{lines:["这片地不能一直打。","人不够，先别拼命。","你到底听谁的？"],replies:["我有自己的主意。","先保住族人。","我不想白死。"]},social:{lines:["要不要把家安在同一边？","孩子会继承我们的话。","你认现在的首领吗？"],replies:["看他值不值得听。","我可以自己选。","先看吃的够不够。"]},idle:{lines:["今天的风很轻。","你还好吗？","我想自己决定下一步。"],replies:["还活着。","一起走走？","我也在想。"]},leader:["我来领这一部。","票在我这里，我先带着大家活下去。"],refuse:["我不服从。","这首领不是我选的。","我有自己的意志。"],obey:["这回我听首领的。","我认他。"],confused:["听不懂。","你说的什么？"],cross:["我们语言不同，可我听懂了。这回两边都有好处。"],birth:["孩子出生了。"]},en:{hungry:{lines:["I'm hungry.","Have you seen any food?","We need to eat before dark."],replies:["I'm looking too.","Stay close, we'll find some.","I saw some over there."]},home:{lines:["We need a roof tonight.","Still short on wood.","A house will get us through the night."],replies:["I'll get wood.","It's cold outside.","Call me when it's done."]},war:{lines:["We can't fight forever.","Too few of us. Don't throw lives away.","Whose orders are you following?"],replies:["I have my own mind.","Keep the people alive.","I won't die for nothing."]},social:{lines:["Should we settle on the same side?","The child will inherit our words.","Do you accept the chief?"],replies:["Only if they're worth hearing.","I can choose for myself.","Food first."]},idle:{lines:["The wind is light today.","Are you all right?","I want to choose my own next step."],replies:["Still alive.","Walk with me?","I'm thinking too."]},leader:["I'll lead this tribe.","The vote is mine. We live first."],refuse:["I won't obey.","That chief is not my choice.","I have my own will."],obey:["This time I follow the chief.","I accept them."],confused:["I don't understand.","What are you saying?"],cross:["Different tongues, but I follow you. Both tribes gain from this."],birth:["A child is born."]}};function $s(i){return(i==null?void 0:i.tongue)==="en"?"en":"zh"}function K_(i){return i.hunger>.7||i.state==="forage"||i.state==="fish"||i.state==="hunt"?"hungry":i.state==="build"||i.state==="sleep"?"home":i.state==="war"?"war":i.state==="social"||i.genes.social>.62?"social":"idle"}function Hn(i,e){const t=Kr[$s(i)][e]||Kr.zh[e];return Array.isArray(t)?jr(t):jr(t.lines)}function Z_(i,e){const t=i.factionId&&i.factionId===e.factionId,n=$s(i),s=$s(e);return t||n===s?{ok:!0,bridge:!1,cross:!t&&!!i.factionId&&!!e.factionId}:i.bridge||e.bridge?{ok:!0,bridge:!0,cross:!0}:{ok:!1,bridge:!1,cross:!0}}function J_(i,e){const t=K_(i),n=Kr[$s(i)][t],s=Kr[$s(e)][t];return{line:jr(n.lines),reply:jr(s.replies)}}function Q_(i){const e=(i.match(/[\u4e00-\u9fff]/g)||[]).length;return(i.match(/[A-Za-z]/g)||[]).length>e?"en":"zh"}function ev(i,e){return i!=null&&i.bridge?!0:((i==null?void 0:i.tongue)==="en"?"en":"zh")===Q_(e)}function tv(i){const e=[];return/和平|别打|不要打|停战|住手|别杀|peace|stop fighting|don't fight|do not fight|no war/i.test(i)&&e.push("peace"),/打猎|狩猎|追兽|野兽|弓|猎物|hunt|hunting|beast|prey/i.test(i)&&e.push("hunt"),/海|鱼|潮|船|盐|网|sea|fish|boat|tide|salt/i.test(i)&&e.push("sea"),/种|田|浆果|耕|种子|分享|省着|farm|field|plant|seed|berry/i.test(i)&&e.push("field"),/勇敢|去打|战斗|不怕|进攻|brave|attack|fight them|charge/i.test(i)&&e.push("brave"),/回家|盖房|房子|屋子|建|house|build|roof|home/i.test(i)&&e.push("build"),/交换|交易|做买卖|卖|trade|barter|sell|market/i.test(i)&&e.push("trade"),e}function nv(i,e,t){var o,a;const n=i.tongue==="en",s=((o=i.culture)==null?void 0:o.title)||(n?"our way":"我们的活法"),r=((a=i.culture)==null?void 0:a.origin)||"";return t.length?t.includes("peace")?n?"You told me to stop fighting. I'll hesitate before I strike.":"你叫我别打。这话我会记住，下手之前会犹豫。":t.includes("sea")?n?"You speak of the sea. Say it again, and I'll live by the tide.":`${s}的人听你说海。若你反复这样说，我会改去靠潮汐生活。`:t.includes("hunt")?n?"You speak of hunting. Say it enough, and I'll chase through the woods.":`${s}的人听你说打猎。说得多了，我会改去林子里追。`:t.includes("field")?n?"You want me to keep the fields and the seeds. I'll stay on the grass longer.":"你让我守着地和种子。我会把更多时间留在草地上。":t.includes("brave")?n?"You want me braver. Next time I meet an enemy, I won't run first.":"你让我勇敢一点。下次遇敌，我不会先退。":t.includes("build")?n?"You want the house up first. I'll head home before dark.":"你让我先把屋子盖起来。天黑前我会往家走。":t.includes("trade")?n?"You want me to trade, not take. I'll carry that to my people.":"你让我拿东西去换，而不是去抢。我会把这话带给同族。":n?`I'll remember: ${e}`:`我记下了：${e}`:n?`I heard you. "${e}". Say it more plainly, and I can change.`:`我听见了。「${e}」。${r||s}。你再说得具体些，我会照着改。`}function iv(i){return(i==null?void 0:i.tongue)==="en"?["Stop fighting.","Go fish by the sea.","Hunt in the woods.","Build a house first.","Trade, don't steal."]:["别再打仗","去海边打鱼","去林子打猎","先把房子盖好","拿东西去换"]}function su(i){return i!=null&&i.alive?i.state==="craft"&&i.job?`造${i.job.name}`:ru(i.state):(i==null?void 0:i.deathReason)||"坟墓"}function ru(i){return{idle:"发呆",forage:"觅食",fish:"捕鱼",hunt:"狩猎",build:"筑巢",craft:"造物",sleep:"睡觉",social:"社交",wander:"游荡",war:"交战",trade:"交易",flee:"奔逃",grave:"坟墓",dead:"坟墓"}[i]||"活动"}const Ki={sea:{id:"sea",title:"海洋文明",short:"海",origin:"住在海边，靠观潮和捕鱼活下来",ideology:"trade",rites:["退潮之后才开饭","新网先碰一次海水","死者葬在听得见浪的地方"],taboos:["涨潮时不下海","不把鱼骨扔回海里","不在船上争吵"],greets:["潮平了吗","今天网里有吗","风从海里来"],syllables:["潮","澜","渔","盐","湾","汐"]},hunt:{id:"hunt",title:"狩猎文明",short:"猎",origin:"住在林子里，靠追踪和捕猎活下来",ideology:"war",rites:["猎获先分给追得最久的人","出发前摸一下弓","死者葬向最后一次兽踪"],taboos:["不空手下山","不猎幼兽","夜里不单独去追"],greets:["有踪迹吗","今天风往哪边","弓还在"],syllables:["狩","野","弓","林","踪","石"]},field:{id:"field",title:"农耕文明",short:"田",origin:"住在草地，靠采集和耕种活下来",ideology:"share",rites:["饭前先把一份埋进土里","种子不一次吃完","死者葬在田边"],taboos:["不浪费浆果","不踩发芽的地方","收成前不远行"],greets:["地还湿吗","你吃了吗","种子留了吗"],syllables:["禾","田","谷","麦","土","安"]}},wr=["青","禾","澜","石","宁","昭","川","野","拾","安","栗","澄"],sv=["氏","生","子",""],Ps=[{id:"share",name:"均分",text:"收获先归众人，再谈私欲",warlike:.15,mercantile:.45,pious:.35,lawful:.55},{id:"war",name:"征伐",text:"边界是打出来的",warlike:.62,mercantile:.25,pious:.15,lawful:.35},{id:"trade",name:"市易",text:"一条路胜过一支矛",warlike:.18,mercantile:.92,pious:.12,lawful:.5},{id:"rite",name:"祭祀",text:"先敬火，再谈明天",warlike:.28,mercantile:.25,pious:.93,lawful:.4},{id:"law",name:"律法",text:"没有规矩，聚落就会散",warlike:.34,mercantile:.4,pious:.2,lawful:.93}],nh=[12868646,3108686,4020889,9256277,12092939,5073786],Rr={游群:0,营地:1,村落:2,城邦:3};function jt(i){return i[Math.floor(Math.random()*i.length)]}function ih(i){return{...i}}class rv{constructor(e,t){this.bus=e,this.scene=t,this.factions=[],this.acc=0,this.cultureSeq=1,this.factionSeq=1,this.cultures=[this.cultureFor("sea",null,"zh"),this.cultureFor("hunt",null,"en"),this.cultureFor("field",null,"zh")]}cultureFor(e,t=null,n=null){const s=Ki[e]||Ki.field,r=(t==null?void 0:t.syllable)||jt(s.syllables),o=(t==null?void 0:t.rite)||jt(s.rites),a=n||(t==null?void 0:t.language)||(Math.random()<.45?"en":"zh");return{id:this.cultureSeq++,livelihood:s.id,title:s.title,origin:s.origin,syllable:r,suffix:(t==null?void 0:t.suffix)||jt(sv),rite:o,taboo:(t==null?void 0:t.taboo)||jt(s.taboos),greeting:(t==null?void 0:t.greeting)||jt(s.greets),language:a,name:`${r}人 · ${s.title}`}}randomCulture(e=null){return this.cultureFor((e==null?void 0:e.livelihood)||jt(["sea","hunt","field"]),e)}mutateCulture(e,t){const n=Ki[e==null?void 0:e.livelihood]||Ki.field,s=this.cultureFor(n.id,e),r=Math.random();return r<.34?s.rite=jt(n.rites.filter(o=>o!==e.rite)):r<.67?s.taboo=jt(n.taboos.filter(o=>o!==e.taboo)):s.greeting=jt(n.greets.filter(o=>o!==e.greeting)),Math.random()<.35&&(s.syllable=jt(n.syllables)),s.name=`${s.syllable}人 · ${s.title}`,this.bus.emit("log",`${t} 沿${s.title}演化出新习俗：${s.rite}`),s}shiftLivelihood(e,t,n){const s=this.cultureFor(t,e);return this.bus.emit("log",`${n} 的活法从「${e.title||"旧习俗"}」转向「${s.title}」`),s}nameChild(e,t){if(e.language==="en"){const r=["Ada","Ben","Cora","Drew","Eden","Finn","Gray","Hope","Ivy","Jules","Kai","Lane","Moss","Nell","Owen","Pia","Quinn","Reed","Sage","Tess","Uma","Vale","Wynn"],o=r[t%r.length],a=r[(t*5+2)%r.length];return o===a?o:`${o} ${a}`}const n=wr[t*3%wr.length],s=e.syllable===n?wr[(t+4)%wr.length]:n;return`${e.syllable}${s}${e.suffix}`}inheritCulture(e,t){const n=Math.random()<.5?e.culture||this.cultures[0]:t.culture||this.cultures[0];return Math.random()<.2?this.mutateCulture(n,`${e.name}与${t.name}的后代`):n}faction(e){return this.factions.find(t=>t.id===e)||null}found(e,t,n=e.culture){const s=Ki[n.livelihood]||Ki.field,r=ih(Ps.find(h=>h.id===s.ideology)||jt(Ps)),o=nh[this.factions.length%nh.length],a={id:this.factionSeq++,name:n.language==="en"?{sea:"Tide Band",hunt:"Hunt Band",field:"Field Band"}[s.id]||"Band":`${n.syllable}${s.short}部`,culture:n,ideology:r,color:o,wealth:6,food:4,wood:2,stage:"游群",enemies:[],leaderId:e.id,fallen:!1,marker:null,x:e.pos.x,z:e.pos.z,goal:"grow",claimRadius:6,losses:0,peakMembers:1,language:n.language==="en"?"en":"zh",leaderName:e.name,electionAcc:0};this.placeMarker(a),this.factions.push(a);const c=[e,...t.filter(h=>h.alive&&!h.factionId)].slice(0,4);for(const h of c)this.join(h,a,h===e);const l=a.language==="en"?"英文":"中文";return this.bus.emit("log",`${e.name} 建立「${a.name}」。说${l}。${n.origin}。思想是${r.name}`),a}join(e,t,n=!1){!e.alive||t.fallen||(e.factionId=t.id,e.culture=t.culture,e.tongue=t.language==="en"?"en":"zh",n&&(t.leaderId=e.id,t.leaderName=e.name,e.obeying=!0),e.refreshLook(),e.note(`加入「${t.name}」，说${e.tongue==="en"?"英文":"中文"}，信奉${t.ideology.name}`),e.say(e.tongue==="en"?`I belong to ${t.name}.`:`我是${t.name}的人。`))}placeMarker(e){const t=new rt(new ut(.18,2.2,.18),new ft({color:e.color})),n=new rt(new ut(.7,.4,.08),new ft({color:e.color}));n.position.set(.4,.7,0),t.add(n),t.position.set(e.x,0,e.z),this.scene.add(t),e.marker=t}syncMarker(e,t){if(!e.marker)return;const n=Math.max(1,Math.min(62,Math.round(e.x))),s=Math.max(1,Math.min(62,Math.round(e.z))),r=t.surfaceY(n,s)+1;e.marker.position.set(n+.5,r,s+.5);const o=1.6+Rr[e.stage]*.45;e.marker.scale.set(1,o/2.2,1)}consider(e,t){if(!e.alive)return;if(!e.factionId){const s=t.filter(o=>o!==e&&o.alive&&e.pos.distanceTo(o.pos)<8),r=s.find(o=>{var a;return o.factionId&&!((a=this.faction(o.factionId))!=null&&a.fallen)});r&&Math.random()<.65?this.join(e,this.faction(r.factionId)):s.length&&e.genes.social>.42&&Math.random()<.55&&this.found(e,s);return}const n=this.faction(e.factionId);if(!(!n||n.fallen)){if(e.wood>0&&e.obeying!==!1&&Math.random()<.5&&(e.wood-=1,n.wood+=1,n.wealth+=2,e.note(`向「${n.name}」缴纳了木头，资本增加`)),Math.random()<.35&&(n.food+=1,n.wealth+=1),e.genes.social>.58&&Math.random()<.18){const s=this.mutateCulture(e.culture,e.name);if(e.culture=s,n.leaderId===e.id||Math.random()<.5){n.culture=s,e.note(`把新习俗「${s.rite}」定为族中惯例`);for(const r of t)r.alive&&r.factionId===n.id&&(r.culture=s)}else e.note(`私下形成习俗「${s.rite}」，禁忌是${s.taboo}`)}this.maybeDuel(e,t),this.maybePunish(e,t)}}maybeDuel(e,t){const n=this.faction(e.factionId);if(n&&n.goal!=="war"||e.genes.brave<.82)return;const s=t.find(r=>r!==e&&r.alive&&r.factionId&&r.factionId!==e.factionId&&r.genes.brave>.78&&e.pos.distanceTo(r.pos)<2.2);!s||Math.random()>.12||(e.health-=.18,s.health-=.18,e.note(`与${s.name}决斗`),s.note(`与${e.name}决斗`),e.say("一对一。"),e.health<=0&&e.die("决斗而死",this.bus),s.health<=0&&s.die("决斗而死",this.bus))}maybePunish(e,t){const n=this.faction(e.factionId);if(!n)return;if(n.enemies.length>0&&n.goal==="war"&&n.ideology.warlike>.8&&e.genes.brave<.2&&Math.random()<.08){e.note(`被「${n.name}」认定临阵退缩`),e.die("临阵被处刑",this.bus);return}if(n.ideology.lawful>.75&&e.sick&&Math.random()<.3&&(e.factionId=null,e.exiled=!0,e.note(`因疫病被「${n.name}」流放`),e.say("我被赶走了。"),e.refreshLook()),t&&n.ideology.mercantile>.7&&Math.random()<.2){const r=this.factions.find(o=>o.id!==n.id&&!o.fallen);if(!r)return;n.wealth+=3,r.wealth+=3,e.note(`代表「${n.name}」与「${r.name}」完成交易`),e.state="trade"}}refresh(e,t){for(const n of this.factions){const s=e.filter(a=>a.alive&&a.factionId===n.id);n.memberCount=s.length,!s.length&&!n.fallen&&(n.fallen=!0,n.stage="覆灭",this.bus.emit("log",`势力「${n.name}」覆灭了`));const r=(Rr[n.stage]||0)*12;if(n.power=s.length*10+n.wealth+r,s.length){n.x=s.reduce((c,l)=>c+l.pos.x,0)/s.length,n.z=s.reduce((c,l)=>c+l.pos.z,0)/s.length;const a=s.find(c=>c.id===n.leaderId);n.leaderName=a?a.name:"无"}let o="游群";if(s.length>=3&&n.wealth>=10&&(o="营地"),s.length>=5&&n.wealth>=24&&(o="村落"),s.length>=7&&n.wealth>=45&&(o="城邦"),!n.fallen&&o!==n.stage&&Rr[o]>Rr[n.stage]){n.stage=o,this.bus.emit("log",`「${n.name}」发展成${o}。资本 ${n.wealth}，势力 ${n.power}`);for(const a of s)a.note(`亲眼看见「${n.name}」成为${o}`);(o==="村落"||o==="城邦")&&this.evolveDoctrine(n)}else n.fallen||(n.stage=o);this.syncMarker(n,t)}}evolveDoctrine(e){const t=jt(["储粮过冬","立一块界石","把习俗刻在木板上","推举战时首领","开辟交换的空地"]);e.ideology={...e.ideology,text:`${e.ideology.text}，并且${t}`},this.bus.emit("log",`「${e.name}」的思想写成：${e.ideology.text}`)}noteBattleLoss(e,t=1){const n=this.faction(e);n&&(n.losses=(n.losses||0)+t)}chooseGoals(){for(const e of this.factions){if(e.fallen)continue;const t=e.memberCount||0;e.peakMembers=Math.max(e.peakMembers||0,t);const n=t>0&&t<(e.peakMembers||t)*.7,s=t<5,r=e.wealth>=28&&e.food>=10,o=(e.losses||0)>=2;let a="grow";if(s||n||o?a="grow":e.ideology.mercantile>.55&&r?a="trade":t>=5&&e.wealth>=16&&(e.claimRadius||6)<18?a="expand":t>=7&&e.wealth>=30&&e.ideology.warlike>.55&&!o&&e.enemies.length?a="war":t>=6&&r&&(a="expand"),e.goal!==a){e.goal=a;const c={grow:"繁衍人口",expand:"开拓国土",trade:"互通市易",war:"有限征伐"};this.bus.emit("log",`「${e.name}」改行利益最优：${c[a]}`)}if((a==="grow"||a==="trade")&&e.enemies.length){for(const c of[...e.enemies]){const l=this.faction(c);l&&this.makePeace(e,l,"为了保人与保地，主动停战")}e.losses=0}a==="expand"&&Math.random()<.55&&(e.claimRadius=Math.min(22,(e.claimRadius||6)+1),e.wealth+=1),a==="grow"&&e.food>0&&(e.food=Math.max(0,e.food-1),e.wealth+=1)}}considerWars(){const e=this.factions.filter(t=>!t.fallen&&t.memberCount>0);for(let t=0;t<e.length;t++)for(let n=t+1;n<e.length;n++){const s=e[t],r=e[n],o=Math.hypot(s.x-r.x,s.z-r.z),a=s.ideology.warlike+r.ideology.warlike,c=s.enemies.includes(r.id),l=s.goal==="war"&&r.memberCount>=4&&s.memberCount>=7&&s.wealth>=28&&(s.losses||0)<2&&(r.losses||0)<3,h=o<14&&a>1.15&&s.memberCount>=6&&r.memberCount>=6&&s.wealth>=22;!c&&(l||h)&&Math.random()<.28?(s.enemies.push(r.id),r.enemies.push(s.id),s.goal="war",this.bus.emit("log",`战争：「${s.name}」与「${r.name}」开战，但各族仍先保人口`)):c&&(s.goal!=="war"||r.goal==="grow"||a<.85||s.memberCount<4||r.memberCount<4||(s.losses||0)>=2||(r.losses||0)>=2||s.power<r.power*.45||r.power<s.power*.45)&&Math.random()<.55&&(this.makePeace(s,r,"算清得失后停战，改去扩人扩土"),s.losses=0,r.losses=0)}}makePeace(e,t,n){e.enemies=e.enemies.filter(s=>s!==t.id),t.enemies=t.enemies.filter(s=>s!==e.id),this.bus.emit("log",`「${e.name}」与「${t.name}」${n}`)}peaceAll(){for(const e of this.factions)e.enemies=[];this.bus.emit("log","你叫停了所有战争")}endow(e,t=18){const n=this.faction(e.factionId);return n?(n.wealth+=t,n.food+=6,e.note(`接受赏赐，${n.name}的资本变为 ${n.wealth}`),this.bus.emit("log",`你给「${n.name}」增加了资本`),!0):!1}cycleIdeology(e){const t=this.faction(e.factionId);if(!t)return null;const n=Ps.findIndex(s=>s.id===t.ideology.id);return t.ideology=ih(Ps[(n+1)%Ps.length]),e.note(`思想被改写成${t.ideology.name}：${t.ideology.text}`),this.bus.emit("log",`「${t.name}」改信${t.ideology.name}`),t.ideology}ballot(e,t,n){if(e.will>.72&&Math.random()<e.will)return e;if(e.will<.4&&n)return n;const s=[...t].sort((r,o)=>o.genes.social+o.loyalty-(r.genes.social+r.loyalty));return e.will>.55&&Math.random()<.45?e:s[0]||e}settleLeader(e,t,n,s){const r=t.find(c=>c.id===e.leaderId);if(n.id===e.leaderId)return 0;e.leaderId=n.id,e.leaderName=n.name,e.electionAcc=0;let o=0;n.obeying=!0,n.loyalty=Math.min(1,(n.loyalty||.5)+.08),n.note(s),n.say(n.tongue==="en"?"I'll lead this tribe.":"我来领这一部。");for(const c of t){if(c.id===n.id)continue;const l=Math.random()>c.will*.72;c.obeying=l,c.loyalty=Math.max(.05,Math.min(1,(c.loyalty||.5)+(l?.06:-.2))),l||(o+=1,c.note(`不服从首领 ${n.name}`),Math.random()<.65&&c.say(c.tongue==="en"?"I won't obey.":"我不服从。"))}const a=(r==null?void 0:r.name)||"空位";return this.bus.emit("log",`「${e.name}」的首领换成 ${n.name}（原先是 ${a}）。${o} 人不服从`),o}holdElections(e){for(const t of this.factions){if(t.fallen)continue;const n=e.filter(c=>c.alive&&c.factionId===t.id);if(n.length<2)continue;const s=n.find(c=>c.id===t.leaderId);if(t.electionAcc=(t.electionAcc||0)+1,s&&t.electionAcc<16)continue;t.electionAcc=0;const r=new Map;for(const c of n){const l=this.ballot(c,n,s);r.set(l.id,(r.get(l.id)||0)+1)}let o=s||n[0],a=-1;for(const c of n){const l=r.get(c.id)||0;l>a&&(a=l,o=c)}s&&a<=(r.get(s.id)||0)&&(o=s),this.settleLeader(t,n,o,"被族人投票选为首领")}}appointLeader(e,t){const n=this.faction(e.factionId);if(!n||n.fallen||!e.alive)return null;const s=t.filter(o=>o.alive&&o.factionId===n.id);return s.includes(e)?n.leaderId===e.id?{same:!0,dissent:0,others:Math.max(0,s.length-1)}:{dissent:this.settleLeader(n,s,e,"被你指定为首领"),others:Math.max(0,s.length-1)}:null}tick(e,t,n,s=[]){this.acc+=t,!(this.acc<3)&&(this.acc=0,this.refresh(e,n),this.holdElections(e),this.chooseGoals(),this.considerWars(),this.migrateGraves(s,n))}migrateGraves(e,t){for(const n of this.factions){if(n.fallen||Math.random()>.4)continue;const s=e.find(o=>!o.alive&&o.factionId===n.id&&Math.hypot(o.pos.x-n.x,o.pos.z-n.z)>7);if(!s)continue;const r=t.burialNear(n.x,n.z,n.culture.livelihood);s.moveGrave(r,`族人按${n.culture.title}的葬俗，把坟墓迁走了`)}}summary(){return this.factions.length?this.factions.map(e=>{const t=e.enemies.length?" · 交战中":"",n=e.culture.title||"文明",r={grow:"扩人",expand:"扩土",trade:"市易",war:"征伐"}[e.goal]||"求存",o=e.language==="en"?"英文":"中文";return`${e.fallen?"覆灭":e.stage} · ${e.name}${t}｜首领:${e.leaderName||"无"}｜${o}｜目标:${r}｜疆域 ${Math.round(e.claimRadius||6)}｜${n}｜${e.ideology.name}｜人 ${e.memberCount||0}｜资本 ${e.wealth}`}):["还没有势力。人会按海边、林猎或耕种各自成部。"]}}const ov={游群:0,营地:1,村落:2,城邦:3},Zi=.09,Sc=[{id:"field",name:"耕田",en:"a field",lives:["field"],minStage:0,wood:1,seconds:7,danger:.04,reward:4,death:"耕田时被农具所伤"},{id:"boat",name:"船",en:"a boat",lives:["sea"],minStage:0,wood:2,seconds:8,danger:.08,reward:6,death:"造船时落水",nearWater:!0},{id:"house",name:"房子",en:"a house",lives:["sea","hunt","field"],minStage:0,wood:3,seconds:9,danger:.1,reward:8,death:"盖房时房屋倒塌"},{id:"bike",name:"摩托",en:"a motorcycle",lives:["hunt","field","sea"],minStage:1,wood:3,seconds:8,danger:.14,reward:10,death:"造摩托时失事"},{id:"plane",name:"飞机",en:"a plane",lives:["sea","hunt","field"],minStage:2,wood:4,seconds:10,danger:.18,reward:14,death:"造飞机时坠毁"}];function av(i){return i[Math.floor(Math.random()*i.length)]}function cv(i){var c,l;const e=(c=i.faction)==null?void 0:c.call(i),t=ov[e==null?void 0:e.stage]||0,n=(i.genes.build>.7||i.genes.brave>.78)&&i.will>.45,s=t+(n?1:0),r=((l=i.culture)==null?void 0:l.livelihood)||"field",o=Sc.filter(h=>h.minStage<=s);if(!o.length)return null;const a=[];for(const h of o){const u=h.lives.includes(r)?4:1;for(let d=0;d<u;d++)a.push(h)}return{...av(a),progress:0,acc:0}}function Le(i,e,t,n,s,r,o,a){const c=new rt(new ut(s*Zi,r*Zi,o*Zi),new ft({color:a}));c.position.set(e*Zi,t*Zi,n*Zi),c.castShadow=!0,i.add(c)}function lv(i){const e=document.createElement("canvas");e.width=256,e.height=64;const t=e.getContext("2d");t.fillStyle="rgba(12,18,32,0.82)",t.fillRect(8,8,240,48),t.fillStyle="#ffe08a",t.font="bold 28px sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(i,128,32);const n=new yc(new ao({map:new gi(e),transparent:!0}));return n.position.y=1.75,n.scale.set(2.2,.55,1),n}function sh(i){Le(i,0,1.2,0,14,1.4,5.2,9065768),Le(i,0,2.1,2.2,13,1.5,.7,9065768),Le(i,0,2.1,-2.2,13,1.5,.7,9065768),Le(i,6.2,2,0,1.4,1.6,4.2,9065768),Le(i,-6.5,1.8,0,1.6,1.2,3.2,9065768),Le(i,0,2.8,0,11,.5,3.6,12884578),Le(i,1.5,5.2,0,.7,6.5,.7,6045744),Le(i,3.2,5.8,0,.4,.4,5.5,6045744),Le(i,3.2,7.2,.2,4.5,3.8,.35,16052196),Le(i,-2.5,3.4,0,2.2,.5,2,7029795)}function hv(i){Le(i,-3.6,1.5,0,2.2,2.2,.7,1710618),Le(i,-3.6,1.5,0,1.1,1.1,.9,12107980),Le(i,3.8,1.5,0,2.4,2.4,.75,1710618),Le(i,3.8,1.5,0,1.2,1.2,.95,12107980),Le(i,.2,2.4,0,7.2,1.1,1.4,3094084),Le(i,-1.2,3.5,0,2.6,1.3,1.6,3094084),Le(i,1.6,3.2,0,2.4,1,1.5,14830411),Le(i,-.4,4.4,0,2.4,.7,1.5,2237998),Le(i,3.2,4.6,0,.5,2.2,.5,12107980),Le(i,3.2,5.8,0,1.8,.35,2.4,12107980),Le(i,5.2,2.8,0,1.4,1.1,1.8,14830411),Le(i,-4.8,3.4,0,.7,1.4,.5,12107980)}function uv(i){Le(i,0,3.2,0,12,2.2,2.2,14212838),Le(i,6.2,3.3,0,2.4,1.8,1.8,10135477),Le(i,7.6,3.3,0,1.2,1.2,1.2,10135477),Le(i,1.5,4,.7,2.4,.9,.2,3497862),Le(i,1.5,4,-.7,2.4,.9,.2,3497862),Le(i,.5,3.3,0,6,.55,12,11845838),Le(i,-5.4,4.6,0,1.4,2.6,.5,14212838),Le(i,-5.2,5.4,0,.5,.5,4.2,11845838),Le(i,8.4,3.3,0,.4,.4,3.6,3355443),Le(i,8.4,3.3,0,3.6,.4,.4,3355443),Le(i,2.4,1.4,1.6,.5,1.6,.5,5592405),Le(i,2.4,1.4,-1.6,.5,1.6,.5,5592405),Le(i,2.4,.7,1.6,1.4,.4,.4,2236962),Le(i,2.4,.7,-1.6,1.4,.4,.4,2236962)}function dv(i){Le(i,0,3.2,0,10,6,9,12886122),Le(i,0,7.2,0,11.5,2.2,10.5,9259826),Le(i,0,8.6,0,8,1.6,7.5,9259826),Le(i,0,2.2,4.6,2.2,3.2,.4,5913128),Le(i,-2.8,4.2,4.55,1.6,1.4,.3,8308968),Le(i,2.8,4.2,4.55,1.6,1.4,.3,8308968)}function fv(i){Le(i,0,.4,0,14,.8,11,7162927);for(let e=-4;e<=4;e+=2)Le(i,0,1.1,e,12,.7,1.2,e%4===0?6791994:8368970);Le(i,-5,2.2,-3,.6,2.4,.6,9132587),Le(i,-5,3.6,-3,1.4,1.2,1.4,5214010)}function pv(i,e){const t=new Ft;i==="boat"?sh(t):i==="bike"?hv(t):i==="plane"?uv(t):i==="house"?dv(t):i==="field"?fv(t):sh(t);const n=lv(e);return t.add(n),t.userData.kind=i,t.userData.ride=i==="boat"||i==="bike"||i==="plane",t.userData.label=n,t}function mv(i,e,t){var o;const n=((o=e.faction)==null?void 0:o.call(e))||e,s=n.x??e.pos.x,r=n.z??e.pos.z;for(let a=0;a<10;a++){const c=Math.max(2,Math.min(i.size-3,Math.floor(s+(Math.random()-.5)*12))),l=Math.max(2,Math.min(i.size-3,Math.floor(r+(Math.random()-.5)*12))),h=i.surfaceY(c,l),u=i.get(c,h,l),d=u===D.WATER||u===D.SAND;if(t.nearWater?d||u===D.SAND:u!==D.WATER&&u!==D.AIR)return{x:c+.5,z:l+.5}}return{x:e.pos.x,z:e.pos.z}}function bc(i,e,t,n,s={}){var a;const r=s.y??(i.walkSurfaceY||i.surfaceY).call(i,Math.floor(t),Math.floor(n))+1.05,o=pv(e.id||e.kind,e.name);if(o.position.set(t,r,n),o.rotation.y=s.rot??Math.random()*Math.PI*2,o.scale.setScalar(1.15),i.craftSeq=(i.craftSeq||0)+1,o.userData.nid=s.nid||`${i.peerTag||"solo"}-${i.craftSeq}`,i.scene.add(o),i.crafts||(i.crafts=[]),i.crafts.some(c=>c.userData.nid===o.userData.nid))return i.scene.remove(o),i.crafts.find(c=>c.userData.nid===o.userData.nid);for(i.crafts.push(o),s.silent||(a=i.onCraft)==null||a.call(i,o);i.crafts.length>80;){const c=i.crafts.shift();i.scene.remove(c),c.traverse(l=>{var h;l.geometry&&l.geometry.dispose(),(h=l.material)!=null&&h.map&&l.material.map.dispose(),l.material&&l.material.dispose()})}return o}let gv=1;class Zr{constructor(e,t,n,s=null,r=1,o=null,a={}){var m;this.id=gv++,this.world=e,this.civ=t,this.genes=s||Ha(),this.generation=r,this.parents=o,this.pos=n.clone(),this.vel=new N,this.yaw=Math.random()*Math.PI*2,this.hunger=.25+Math.random()*.15,this.energy=.9,this.health=1,this.age=0,this.maxAge=420+this.genes.thrift*260,this.state="idle",this.target=null,this.home=null,this.wood=0,this.cooldown=0,this.hitCooldown=0,this.alive=!0,this.protected=!1,this.sick=!1,this.exiled=!1,this.mateTimer=0,this.talkCooldown=2+Math.random()*4,this.societyAcc=Math.random()*6,this.speech=null,this.deathReason=null,this.grave=null,this.influence={peace:0,hunt:0,sea:0,field:0,brave:0,build:0,trade:0},this.playerWords=0,this.culture=a.culture||((m=t.cultureFor)==null?void 0:m.call(t,"field"))||t.randomCulture(),this.factionId=a.factionId||null,this.tongue=a.tongue||this.culture.language||"zh",this.bridge=a.bridge??Math.random()<.12+this.genes.social*.16,this.will=a.will??Cn(.28+Math.random()*.52),this.loyalty=a.loyalty??Cn(.38+this.genes.social*.34),this.obeying=!0,this.willAcc=1+Math.random()*4,this.job=null,this.craftCooldown=6+Math.random()*10,this.name=a.name||t.nameChild(this.culture,this.id),this.life=[],this.path=[{x:this.pos.x,y:this.pos.y,z:this.pos.z}],this.pathAcc=0,this.lastSurface=this.pos.y,this.color=th(this.genes);const c=new Ft;c.userData.agent=this;const l=new rt(new ut(.45,.7,.28),new ft({color:this.color}));l.position.y=.55;const h=new rt(new ut(.34,.34,.34),new ft({color:15914675}));h.position.y=1.05;const u=new rt(new ut(.14,.4,.14),new ft({color:3817291}));u.position.set(-.1,.2,0);const d=u.clone();d.position.x=.1,c.add(l,h,u,d),this.torso=l,this.head=h,this.mesh=c,this.mesh.position.copy(this.pos),e.scene.add(this.mesh),this.refreshLook();const p=o?`父母是${o[0]}与${o[1]}`:"没有父母，是被投放进世界的",g=this.tongue==="en"?"英文":"中文",_=this.bridge?"，能跨部落交流":"";this.note(`出生。${p}。说${g}${_}。${this.culture.origin||""}习俗是「${this.culture.rite}」`)}faction(){var e;return((e=this.civ)==null?void 0:e.faction(this.factionId))||null}note(e){this.life.push({age:Math.max(0,Math.round(this.age)),text:e,x:Number(this.pos.x.toFixed(1)),z:Number(this.pos.z.toFixed(1))}),this.life.length>80&&this.life.splice(1,1)}say(e,t=4.2){this.speech={text:e,until:performance.now()+t*1e3},this.talkCooldown=6+Math.random()*5}rename(e){const t=e.trim().slice(0,12);if(!t||t===this.name)return;const n=this.name;this.name=t,this.note(`名字从「${n}」改成「${t}」`),this.alive?this.say(`我现在叫${t}。`):this.grave&&(this.world.scene.remove(this.grave),this.becomeGrave())}foodKind(){const e=(this.culture.livelihood==="sea"?.55:0)+(this.influence.sea||0),t=(this.culture.livelihood==="hunt"?.55:0)+(this.influence.hunt||0),n=(this.culture.livelihood==="field"?.55:0)+(this.influence.field||0);return e>=t&&e>=n&&e>.3?"fish":t>=n&&t>.3?"game":"berry"}hear(e,t,n=1){if(!ev(this,e)){const c=Hn(this,"confused");return this.note(`听不懂你的话：「${e}」`),this.alive&&this.say(c,4.5),c}const s=tv(e);this.playerWords+=1;const r=(c,l)=>{this.influence[c]=Math.min(1,(this.influence[c]||0)+l*n)};if(s.includes("peace")){r("peace",.2),this.genes.brave=Cn(this.genes.brave-.05*n);const c=this.faction();c&&(c.ideology.warlike=Math.max(.05,c.ideology.warlike-.07*n))}if(s.includes("brave")&&(r("brave",.18),this.genes.brave=Cn(this.genes.brave+.06*n)),s.includes("sea")&&r("sea",.22),s.includes("hunt")&&r("hunt",.22),s.includes("field")&&r("field",.22),s.includes("build")&&(r("build",.2),this.genes.build=Cn(this.genes.build+.06*n)),s.includes("trade")){r("trade",.18);const c=this.faction();c&&(c.ideology.mercantile=Math.min(.98,c.ideology.mercantile+.06*n))}this.foodKind();const o=s.includes("sea")?"sea":s.includes("hunt")?"hunt":s.includes("field")?"field":null;if(o&&this.influence[o]>.55&&this.culture.livelihood!==o){this.culture=this.civ.shiftLivelihood(this.culture,o,this.name);const c=this.faction();c&&(c.leaderId===this.id||this.influence[o]>.75)&&(c.culture=this.culture,t==null||t.emit("log",`「${c.name}」因你的话改成${this.culture.title}`)),this.note(`因为你反复说的话，活法变成了${this.culture.title}`)}const a=nv(this,e,s);return this.note(`听你说：「${e}」`),this.alive&&this.say(a,5.5),this.refreshLook(),a}setCustom(e){const t=e.trim().slice(0,18);if(!t)return;const n={...this.culture,id:this.civ.cultureSeq++,rite:t,name:`${this.culture.syllable}人 · ${t.slice(0,6)}`};this.culture=n;const s=this.faction();s?(s.culture=n,this.note(`习俗被改成「${t}」，「${s.name}」开始跟随`),this.civ.bus.emit("log",`「${s.name}」改了习俗：${t}`)):this.note(`形成个人习俗「${t}」`),this.say(t)}refreshLook(){const e=this.faction();this.color=(e==null?void 0:e.color)||th(this.genes),this.alive&&(this.torso.material.color.setHex(this.color),this.head.material.color.setHex(15914675),this.mesh.rotation.z=0)}die(e,t){if(this.alive){if(this.protected&&e!=="被你终结"){this.health=Math.max(this.health,.45),this.hunger=Math.min(this.hunger,.65),this.sick=!1;return}this.alive=!1,this.job=null,this.deathReason=e,this.state="grave",this.speech=null,this.vel.set(0,0,0),this.note(`死亡：${e}。人们立了一座写着「${this.name}」的坟墓`),this.becomeGrave(),t==null||t.emit("death",{agent:this,reason:e})}}becomeGrave(){var h;this.mesh.visible=!1;const e=Math.floor(this.pos.x),t=Math.floor(this.pos.z);this.pos.y=this.world.surfaceY(e,t)+1.02,this.grave&&this.world.scene.remove(this.grave);const n=new ft({color:13157044}),s=new ft({color:9275516}),r=new ft({color:((h=this.faction())==null?void 0:h.color)||10129280}),o=new Ft;o.userData.agent=this;const a=new rt(new ut(.72,.1,.46),n);a.position.y=.05;const c=new rt(new ut(.4,.52,.1),s);c.position.y=.36;const l=new rt(new ut(.12,.1,.12),r);l.position.y=.66,o.add(a,c,l,this.graveLabel()),o.position.set(this.pos.x,this.pos.y,this.pos.z),this.world.scene.add(o),this.grave=o}graveLabel(){const e=document.createElement("canvas");e.width=256,e.height=64;const t=e.getContext("2d");t.fillStyle="rgba(20, 16, 12, 0.72)",t.fillRect(16,8,224,48),t.fillStyle="#f6f1e6",t.font="28px sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(this.name.slice(0,8),128,32);const n=new yc(new ao({map:new gi(e),transparent:!0}));return n.position.y=1.05,n.scale.set(1.5,.38,1),this.graveSprite=n,n}moveGrave(e,t="坟墓被迁走了"){this.alive||(this.pos.set(e.x,e.y,e.z),this.grave||this.becomeGrave(),this.grave.position.set(this.pos.x,this.pos.y,this.pos.z),this.note(`${t}：${this.name} 的墓现在在 (${this.pos.x.toFixed(1)}, ${this.pos.z.toFixed(1)})`))}update(e,t,n,s){if(!this.alive)return;this.age+=e,this.cooldown=Math.max(0,this.cooldown-e),this.mateTimer=Math.max(0,this.mateTimer-e),this.talkCooldown=Math.max(0,this.talkCooldown-e),this.hitCooldown=Math.max(0,this.hitCooldown-e),this.craftCooldown=Math.max(0,this.craftCooldown-e),this.protectGrace>0&&this.protectGrace<1e6&&(this.protectGrace-=e,this.protectGrace<=0&&this.protected&&(this.protected=!1,this.protectGrace=0)),this.willAcc-=e,this.willAcc<=0&&(this.willAcc=6+Math.random()*6,this.decideObey());const r=(.0012+(1-this.genes.thrift)*.0018)*(this.state==="war"?1.15:1);this.hunger=Math.min(1,this.hunger+r*e),this.energy=Math.max(0,Math.min(1,this.energy-.002*e+(this.state==="sleep"?.025*e:0))),this.hazard(e,t,n,s),this.alive&&(this.think(t,n,s,e),this.alive&&(this.act(e),this.physics(e),this.recordPath(e),this.societyAcc+=e,this.societyAcc>8&&(this.societyAcc=0,this.civ.consider(this,n)),this.alive&&(this.chat(n,s),this.alive&&(this.mesh.position.copy(this.pos),this.mesh.rotation.y=this.yaw))))}hazard(e,t,n,s){if(this.protected)return;const r=t<.22||t>.78,o=Math.floor(this.pos.x),a=Math.floor(this.pos.z),c=this.world.surfaceY(o,a),l=this.lastSurface-(c+1);if(this.lastSurface=c+1,l>6&&(this.health-=(l-5)*.1,this.note(`从高处坠落，掉了 ${l.toFixed(0)} 格`),this.health<=0))return this.die("坠崖",s);const h=this.world.get(o,c,a),u=this.world.get(o,Math.floor(this.pos.y),a);if((h===D.WATER||u===D.WATER)&&(this.health-=e*.035,this.health<=0))return this.die("溺水",s);if(r&&!(this.home&&this.distXZ(this.home)<2.8)){const p=(this.exiled?.006:.0016)*e*(1.1-this.genes.brave*.35);if(this.health-=p,this.health<=0)return this.die(this.exiled?"流放中冻死":"冻死",s)}if(this.sick){if(this.health-=e*.004,Math.random()<e*.04&&this.spreadSick(n),this.genes.thrift>.45&&Math.random()<e*.035&&(this.sick=!1,this.health=Math.min(1,this.health+.25),this.note("从疫病里恢复")),this.health<=0)return this.die("病死",s)}else Math.random()<e*9e-4&&(this.sick=!0,this.note("染上疫病"),this.say("我好像病了。"));if(r&&Math.random()<e*2e-4)return this.note("夜空里劈下一道雷"),this.die("遭雷击",s);if(this.energy<.04&&(this.state==="build"||this.state==="war")&&(this.health-=e*.008,this.health<=0))return this.die("过劳而死",s);if(this.hunger>.97&&(this.health-=e*.01,this.health<=0))return this.die("饿死",s);if(this.age>this.maxAge)return this.die("寿终",s)}spreadSick(e){const t=e.find(n=>n!==this&&n.alive&&!n.sick&&this.pos.distanceTo(n.pos)<2.2);t&&(t.sick=!0,t.note(`被${this.name}传染了疫病`))}recordPath(e){if(this.pathAcc+=e,this.pathAcc<1.4)return;this.pathAcc=0;const t=this.path[this.path.length-1];t&&Math.hypot(t.x-this.pos.x,t.z-this.pos.z)<1.4||(this.path.push({x:this.pos.x,y:this.pos.y,z:this.pos.z}),this.path.length>160&&this.path.splice(1,1))}decideObey(){const e=this.faction();if(!e||e.leaderId===this.id){this.obeying=!0;return}const t=this.loyalty*(1-this.will*.72),n=Math.random()<t;n!==this.obeying?(this.obeying=n,this.note(n?"决定暂时服从首领":"按自己的意志行动，不服从首领"),Math.random()<.45&&this.say(Hn(this,n?"obey":"refuse"))):this.obeying=n}chat(e,t){if(this.talkCooldown>0||this.state==="sleep")return;let n=null,s=3.4;for(const c of e){if(c===this||!c.alive||c.talkCooldown>0)continue;const l=this.pos.distanceTo(c.pos);l<s&&(s=l,n=c)}if(!n||Math.random()>.42)return;const r=Z_(this,n);if(this.yaw=Math.atan2(n.pos.x-this.pos.x,n.pos.z-this.pos.z),n.yaw=Math.atan2(this.pos.x-n.pos.x,this.pos.z-n.pos.z),!r.ok){this.say(Hn(this,"confused")),n.say(Hn(n,"confused")),Math.random()<.35&&this.note(`想和${n.name}说话，但语言不通`);return}const{line:o,reply:a}=J_(this,n);if(this.say(o),n.say(a),(this.life.length<14||Math.random()<.3)&&this.note(`对${n.name}说：「${o}」`),r.bridge&&this.factionId&&n.factionId&&this.factionId!==n.factionId){this.hunger=Math.max(0,this.hunger-.12),n.hunger=Math.max(0,n.hunger-.12);const c=this.faction(),l=n.faction();c&&(c.food+=1,c.wealth+=2),l&&(l.food+=1,l.wealth+=2),this.say(Hn(this,"cross"),5),this.note(`靠跨部落交流，和${n.name}谈成了好处`),n.note(`听懂了${this.name}，部族得到食物和资本`),t.emit("log",`${this.name} 与 ${n.name} 跨部落谈成了：两边都得到食物和资本`)}t.emit("talk",{a:this,b:n,line:o,reply:a})}think(e,t,n,s=.016){var h,u,d,p;const r=e<.22||e>.78;if(this.job){this.workCraft(s,n,r);return}if(this.hunger<.82&&this.craftCooldown<=0&&this.energy>.15&&Math.random()<s*(.18+this.genes.build*.2)){const g=cv(this);if(g){const _=mv(this.world,this,g);this.job={...g,x:_.x,z:_.z},this.state="craft",this.target={x:_.x,z:_.z,world:!0},this.note(`开始造${g.name}。动手之后更容易出事`),this.say(this.tongue==="en"?`I'm making ${g.en}. This can kill me.`:`我在造${g.name}，这很危险。`);return}}const o=8+this.genes.vision*16;if(this.health<.32&&this.genes.brave<.6){this.state="flee",this.target={x:this.pos.x+(Math.random()-.5)*8,z:this.pos.z+(Math.random()-.5)*8,world:!0};return}if(this.hunger>.72||this.state==="forage"||this.state==="fish"||this.state==="hunt"){const g=this.foodKind();if(g==="berry")this.state="forage",(!this.target||this.target.person||this.target.critter||Math.random()<.05)&&(this.target=this.world.findNearest(this.pos,_=>Ql(_),o*(.6+this.genes.forage))),this.target&&this.distTo(this.target)<1.4&&(this.world.breakBlock(this.target.x,this.target.y,this.target.z)&&(this.hunger=Math.max(0,this.hunger-(.4+this.genes.forage*.2)),this.energy=Math.min(1,this.energy+.15),Math.random()<.012&&(this.health-=.18,this.note("吃到有毒的浆果"),this.health<=0&&this.die("食物中毒",n)),n.emit("eat",{agent:this})),this.target=null,this.state="idle");else{const _=g==="fish"?["fish"]:["game","bird"];let m=null;for(const f of _)if(m=this.world.nearestCritter(this.pos,f,o+(f==="bird"?6:0)),m)break;if(this.state=g==="fish"?"fish":"hunt",m){this.target={x:m.mesh.position.x,z:m.mesh.position.z,world:!0,critter:m};const f=m.kind==="bird"?2.4:1.35;if(this.pos.distanceTo(m.mesh.position)<f&&this.world.collectCritter(m)){this.hunger=Math.max(0,this.hunger-.55),this.energy=Math.min(1,this.energy+.2);const C={fish:"靠海捕到一条鱼",game:"在林中猎到一只猎物",bird:"射下一只飞鸟"};this.note(C[m.kind]||"捕到了猎物"),this.target=null,this.state="idle",n.emit("eat",{agent:this})}}else this.state="forage",this.target=this.world.findNearest(this.pos,f=>Ql(f),o)}return}const a=this.faction(),c=a&&(a.goal==="grow"||a.goal==="expand"||(a.memberCount||0)<5);if((c||(a==null?void 0:a.goal)==="trade"||(this.influence.peace||0)>.35&&Math.random()<.55+(this.influence.peace||0))&&(a!=null&&a.enemies.length))this.talkCooldown<=0&&Math.random()<.2&&this.say(c?"人还不够，先别打。":"我记住你的话，这回不打。");else if(a&&a.enemies.length&&a.goal==="war"&&this.obeying&&this.genes.brave>.42-(this.influence.peace||0)*.15){const g=this.nearestEnemy(t,a);if(!g){const _=this.civ.faction(a.enemies[0]);if(_&&!_.fallen){this.state="war",this.target={x:_.x,z:_.z,world:!0};return}}if(g){if(this.state="war",this.target={x:g.pos.x,z:g.pos.z,world:!0,person:g},this.pos.distanceTo(g.pos)<1.35&&this.hitCooldown<=0){this.hitCooldown=2.2;const _=.07+this.genes.brave*.1;g.health-=_,this.health-=_*(.25+g.genes.brave*.15),this.say("为部族而战。"),g.say("挡住！"),this.life.filter(m=>m.text.includes("交战")).length<4&&this.note(`与${g.name}交战`),g.health<=0&&(g.die(`战死，死于${this.name}之手`,n),a.wealth+=3,a.losses=(a.losses||0)+0,(u=(h=this.civ).noteBattleLoss)==null||u.call(h,g.factionId,1),this.note(`打赢了${g.name}，部族资本增加`)),this.health<=0&&((p=(d=this.civ).noteBattleLoss)==null||p.call(d,a.id,1),this.die(`战死，死于${g.name}之手`,n))}return}}if(a&&(a.goal==="grow"||a.goal==="expand")&&this.hunger<.55&&this.mateTimer<=0&&this.age>28&&Math.random()<.04*(.5+this.genes.fertility)){const g=this.findMate(t);if(g){this.state="social",this.target={x:g.pos.x,z:g.pos.z,world:!0,mate:g},this.pos.distanceTo(g.pos)<1.6&&this.tryMate(g,n);return}}if(a&&a.goal==="expand"&&this.obeying&&Math.random()<.03){const g=Math.random()*Math.PI*2,_=8+(a.claimRadius||6);this.state="wander",this.target={x:a.x+Math.cos(g)*_,z:a.z+Math.sin(g)*_,world:!0};return}if(r||this.genes.build+(this.influence.build||0)>.55&&!this.home){if(this.state="build",this.home||(this.home={x:Math.floor(this.pos.x),z:Math.floor(this.pos.z)}),this.wood<4){const g=this.world.findNearest(this.pos,_=>_===D.WOOD,o);this.target=g,g&&this.distTo(g)<1.5&&(this.world.breakBlock(g.x,g.y,g.z)&&(this.wood+=1,Math.random()<.02&&(this.health-=.25,this.note("砍树时被倒下的木头砸中"),this.health<=0&&this.die("伐木事故",n)),n.emit("chop",{agent:this})),this.target=null)}else this.buildShelter(n);r&&this.home&&this.distXZ(this.home)<2.2&&(this.state="sleep",this.energy=Math.min(1,this.energy+.04));return}if(this.genes.social>.4&&this.hunger<.5&&this.mateTimer<=0&&this.age>30&&Math.random()<.012*this.genes.fertility){const g=this.findMate(t);if(g){this.state="social",this.target={x:g.pos.x,z:g.pos.z,world:!0,mate:g},this.pos.distanceTo(g.pos)<1.6&&this.tryMate(g,n);return}}Math.random()<.01&&(this.state="wander",this.target={x:this.pos.x+(Math.random()-.5)*(6+this.genes.speed*8),z:this.pos.z+(Math.random()-.5)*(6+this.genes.speed*8),world:!0})}nearestEnemy(e,t){let n=null,s=16;for(const r of e){if(!r.alive||!t.enemies.includes(r.factionId))continue;const o=this.pos.distanceTo(r.pos);o<s&&(s=o,n=r)}return n}workCraft(e,t,n){this.state="craft";const s={x:this.job.x,z:this.job.z,world:!0};if(this.target=s,Math.hypot(this.job.x-this.pos.x,this.job.z-this.pos.z)>1.7)return;if(this.wood<this.job.wood){const o=this.world.findNearest(this.pos,a=>a===D.WOOD,16);this.target=o||s,o&&this.distTo(o)<1.5&&this.world.breakBlock(o.x,o.y,o.z)&&(this.wood+=1,this.craftAccident(t,n,.65));return}if(this.job.progress+=e,this.job.acc+=e,this.job.acc>=1&&(this.job.acc=0,this.craftAccident(t,n,1),!this.alive)||this.job.progress<this.job.seconds)return;bc(this.world,this.job,this.job.x,this.job.z),this.wood=Math.max(0,this.wood-this.job.wood);const r=this.faction();r&&(r.wealth+=this.job.reward,r.food+=this.job.id==="field"?3:0),this.note(`${this.job.name}造好了`),this.say(this.tongue==="en"?`The ${this.job.en.replace("a ","")} is done.`:`${this.job.name}造好了。`),t.emit("log",`${this.name} 造好了${this.job.name}`),this.job=null,this.craftCooldown=18+Math.random()*16,this.state="idle",this.target=null}craftAccident(e,t,n){if(!this.job||this.protected)return;const s=this.job.danger*n*(t?1.2:1)*(1-this.genes.build*.35);if(Math.random()>s)return;const r=Math.random()<.12+this.job.danger*.25;if(this.note(r?`造${this.job.name}时出了致命事故`:`造${this.job.name}时受了伤，但东西还是造好了`),r){this.health=0,this.die(this.job.death,e);return}this.health=Math.max(.2,this.health-(.08+this.job.danger*.15))}buildShelter(e){const t=this.home.x,n=this.home.z,s=this.world.surfaceY(t,n)+1,r=[[0,0],[1,0],[0,1],[1,1],[-1,0],[0,-1]];for(const[o,a]of r){const c=t+o,l=n+a;if(this.world.inBounds(c,s,l)&&this.world.get(c,s,l)===D.AIR&&this.wood>0){this.world.placeBlock(c,s,l,D.PLANKS),this.wood-=1,this.homeBuilt||(this.homeBuilt=!0,this.note("盖起了自己的屋子")),Math.random()<.01&&(this.health-=.2,this.note("屋顶塌了一角"),this.health<=0&&this.die("房屋倒塌",e)),e.emit("build",{agent:this});return}}this.state="idle"}findMate(e){let t=null,n=10+this.genes.social*12;for(const s of e){if(s===this||!s.alive||s.age<30||s.hunger>.6||s.mateTimer>0)continue;const r=this.pos.distanceTo(s.pos);r<n&&(n=r,t=s)}return t}tryMate(e,t){var h;if(this.cooldown>0||e.cooldown>0||Math.random()>(this.genes.fertility+e.genes.fertility)/2)return;const n=q_(this.genes,e.genes),s=this.civ.inheritCulture(this,e),r=new N((Math.random()-.5)*1.2,0,(Math.random()-.5)*1.2),o=this.pos.clone().add(r);o.y=this.world.surfaceY(Math.floor(o.x),Math.floor(o.z))+1.1;const a=Math.max(this.generation,e.generation)+1,c=this.factionId||e.factionId||null,l=new Zr(this.world,this.civ,o,n,a,[this.name,e.name],{culture:s,factionId:c,tongue:s.language||this.tongue,bridge:this.bridge||e.bridge?Math.random()<.62:Math.random()<.1,will:Cn((this.will+e.will)/2+(Math.random()-.5)*.24),loyalty:Cn(.32+Math.random()*.4)});c&&l.note(`一出生就属于「${((h=l.faction())==null?void 0:h.name)||"某部"}」`),this.cooldown=18,e.cooldown=18,this.mateTimer=30,e.mateTimer=30,this.hunger+=.08,e.hunger+=.08,this.say(Hn(this,"birth")),e.say(Hn(e,"birth")),this.note(`与${e.name}生下${l.name}`),e.note(`与${this.name}生下${l.name}`),t.emit("birth",{child:l,parents:[this,e]})}act(e){if(this.state==="sleep"||!this.target){this.vel.x*=.8,this.vel.z*=.8;return}const t=this.target.world||this.target.person||this.target.mate,n=(this.target.x??this.pos.x)+(t?0:.5),s=(this.target.z??this.pos.z)+(t?0:.5),r=n-this.pos.x,o=s-this.pos.z,a=Math.hypot(r,o)||1;if(a<.4&&!this.target.person&&!this.target.mate){this.vel.x=0,this.vel.z=0;return}const c=(1.4+this.genes.speed*2.4)*(this.hunger>.8?.75:1)*(this.sick?.7:1);this.vel.x=r/a*c,this.vel.z=o/a*c,this.yaw=Math.atan2(r,o)}physics(e){this.pos.x+=this.vel.x*e,this.pos.z+=this.vel.z*e,this.pos.x=Math.max(1.2,Math.min(this.world.size-1.2,this.pos.x)),this.pos.z=Math.max(1.2,Math.min(this.world.size-1.2,this.pos.z));const t=Math.floor(this.pos.x),n=Math.floor(this.pos.z),s=(this.world.walkSurfaceY||this.world.surfaceY).call(this.world,t,n)+1;this.pos.y>s+.05?this.vel.y-=18*e:(this.pos.y=s,this.vel.y=0),this.pos.y+=this.vel.y*e}feed(){this.hunger=.05,this.energy=1,this.health=Math.min(1,this.health+.25),this.note("被喂饱"),this.say("有人给我吃的了。")}rest(){this.energy=1,this.age=Math.max(0,this.age-20),this.state="sleep",this.note("被安排休息"),this.say("我先歇一会儿。")}heal(){this.health=1,this.sick=!1,this.note("被治愈，疫病消失"),this.say("我好了。")}giveWood(){this.wood+=4,this.note("得到一批木头"),this.say("木头够用了。")}teleport(e){this.pos.copy(e),this.vel.set(0,0,0),this.mesh.position.copy(this.pos),this.path.push({x:this.pos.x,y:this.pos.y,z:this.pos.z}),this.note("被挪到另一个地方"),this.say("我被挪到了这里。")}setProtected(e){this.protected=e,this.protectGrace=e?1e9:0,this.note(e?"获得护佑，一时不会死去":"护佑被解除"),this.say(e?"命运被护住了。":"护佑解除了。")}setGene(e,t){this.genes[e]=Math.max(.05,Math.min(.98,t)),this.refreshLook()}distTo(e){return Math.hypot(e.x+.5-this.pos.x,e.z+.5-this.pos.z)}distXZ(e){return Math.hypot(e.x+.5-this.pos.x,e.z+.5-this.pos.z)}}class _v{constructor(e,t){this.world=e,this.bus=t,this.agents=[],this.dead=[],this.births=0,this.deaths=0,this.maxGen=1,this.extinctNoted=!1,this.civ=new rv(t,e.scene),t.on("birth",({child:n})=>{this.agents.push(n),this.births+=1,this.maxGen=Math.max(this.maxGen,n.generation),this.extinctNoted=!1}),t.on("death",()=>{this.deaths+=1})}seed(){const e=[],t=[{kind:"sea",bias:{forage:.72,thrift:.5,brave:.48},count:5},{kind:"sea",bias:{forage:.65,social:.6,thrift:.55},count:4},{kind:"hunt",bias:{brave:.78,speed:.7,social:.4},count:5},{kind:"hunt",bias:{brave:.7,vision:.7,speed:.62},count:4},{kind:"field",bias:{build:.66,thrift:.7,social:.62},count:5},{kind:"field",bias:{build:.58,fertility:.7,social:.55},count:4}];for(const n of t){const s=this.civ.cultureFor(n.kind),r=[],o=this.world.spawnBiome(n.kind);for(let a=0;a<n.count;a++){const c=o.clone();c.x+=(Math.random()-.5)*6,c.z+=(Math.random()-.5)*6,c.x=Math.max(2,Math.min(this.world.size-2,c.x)),c.z=Math.max(2,Math.min(this.world.size-2,c.z)),c.y=(this.world.walkSurfaceY||this.world.surfaceY).call(this.world,Math.floor(c.x),Math.floor(c.z))+1.05;const l=new Zr(this.world,this.civ,c,Ha(n.bias),1,null,{culture:s});r.push(l),e.push(l)}this.civ.found(r[0],r.slice(1),s)}this.agents=e,this.civ.tick(this.agents,3,this.world,this.dead)}spawnOne(e){const t=e?e.clone():this.world.randomSpawn();e&&(t.x+=1.2,t.y=this.world.surfaceY(Math.floor(t.x),Math.floor(t.z))+1.1);const n=this.world.biomeAt(Math.floor(t.x),Math.floor(t.z)),s=new Zr(this.world,this.civ,t,Ha(),1,null,{culture:this.civ.cultureFor(n)});return this.agents.push(s),this.extinctNoted=!1,this.bus.emit("log",`${s.name} 被投放进世界`),s}find(e){return this.agents.find(t=>t.id===e)||this.dead.find(t=>t.id===e)||null}revive(e){if(!e||e.alive)return!1;e.alive=!0,e.deathReason=null,e.hunger=.15,e.energy=1,e.health=1,e.sick=!1,e.exiled=!1,e.age=Math.min(e.age,e.maxAge*.35),e.state="idle",e.protected=!0,e.protectGrace=20;const t=Math.floor(e.pos.x),n=Math.floor(e.pos.z);return e.pos.y=this.world.surfaceY(t,n)+1.1,e.lastSurface=e.pos.y,e.grave&&(e.world.scene.remove(e.grave),e.grave.traverse(s=>{s.geometry&&s.geometry.dispose(),s.material&&(s.material.map&&s.material.map.dispose(),s.material.dispose())}),e.grave=null),e.mesh.visible=!0,e.mesh.rotation.z=0,e.refreshLook(),e.mesh.position.copy(e.pos),this.dead=this.dead.filter(s=>s!==e),this.agents.includes(e)||this.agents.push(e),this.extinctNoted=!1,e.note("被复活，人生继续。短暂护佑中"),e.say("我又活过来了。"),this.bus.emit("log",`${e.name} 被你复活了`),!0}update(e,t){if(this.frozen)return;for(const s of this.agents)s.update(e,t,this.agents,this.bus);this.world.tickCritters(e),this.civ.tick(this.agents,e,this.world,this.dead);const n=[];for(const s of this.agents)s.alive?n.push(s):this.dead.includes(s)||this.dead.push(s);this.agents=n,this.agents.length===0&&!this.extinctNoted&&(this.extinctNoted=!0,this.bus.emit("log","所有人都死了。可以打开死亡名单看他们的一生，或复活，或按 R 投放新人。"))}}class vv{constructor(e,t,n){this.camera=e,this.world=t,this.dom=n,this.pos=t.randomSpawn().add(new N(0,1.2,0)),this.vel=new N,this.yaw=0,this.pitch=-.2,this.speed=6,this.keys=new Set,this.locked=!1,this.boost=!1,this.touch={x:0,y:0,sprint:!1,jump:!1},this.raycaster=new nu,this.bag={[D.DIRT]:32,[D.STONE]:16,[D.SAND]:12,[D.WOOD]:0,[D.PLANKS]:0,[D.GRASS]:8,[D.PLATFORM]:0,coal:0,iron:0,gold:0},this.hotbar=[D.DIRT,D.STONE,D.SAND,D.WOOD,D.PLANKS,D.GRASS,D.PLATFORM],this.slot=0,this.pickaxe=null,this.hasPlatform=!1,this.ride=null,this.fish=0,this.bask=null,this.watching=!1,window.addEventListener("keydown",s=>{if(!s.target.closest("input, textarea")&&(this.keys.add(s.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(s.code)&&s.preventDefault(),s.code.startsWith("Digit"))){const r=Number(s.code.replace("Digit",""));r>=1&&r<=this.hotbar.length&&(this.slot=r-1)}}),window.addEventListener("keyup",s=>this.keys.delete(s.code)),n.addEventListener("click",()=>{document.body.classList.contains("touch-device")||this.locked||n.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===n,document.body.classList.contains("touch-device")||(document.getElementById("crosshair").style.opacity=this.locked?"1":"0")}),document.addEventListener("mousemove",s=>{this.locked&&(this.yaw-=s.movementX*.0022,this.pitch-=s.movementY*.0022,this.pitch=Math.max(-1.4,Math.min(1.4,this.pitch)))}),document.addEventListener("mousedown",s=>{this.locked&&(s.button===0&&this.mine(),s.button===2&&this.place())}),document.addEventListener("wheel",s=>{!this.locked&&!document.body.classList.contains("touch-device")||(this.slot=(this.slot+(s.deltaY>0?1:-1)+this.hotbar.length)%this.hotbar.length)}),document.addEventListener("contextmenu",s=>s.preventDefault())}selectedBlock(){return this.hotbar[this.slot]}setMove(e,t){this.touch.x=e,this.touch.y=t}addLook(e,t){this.yaw-=e*.006,this.pitch-=t*.005,this.pitch=Math.max(-1.2,Math.min(1.2,this.pitch))}requestJump(){this.touch.jump=!0}groundY(e=this.pos.x,t=this.pos.z){return this.world.walkSurfaceY(Math.floor(e),Math.floor(t))+1.6}pathBlocked(e,t){const n=Math.floor(e),s=Math.floor(t),r=this.world.walkSurfaceY(n,s),o=this.world.walkSurfaceY(Math.floor(this.pos.x),Math.floor(this.pos.z));if(r>o+1)return!0;for(let a=r+1;a<=r+2;a++){const c=this.world.get(n,a,s);if(ks(c)&&c!==D.LEAVES&&c!==D.BERRY&&c!==D.OSMANTHUS)return!0}return!1}waterColumn(e,t){const n=Math.floor(e),s=Math.floor(t),r=this.world.walkSurfaceY(n,s);for(let o=r+1;o<=this.world.seaLevel;o++)if(this.world.get(n,o,s)===D.WATER)return!0;return this.world.get(n,this.world.seaLevel,s)===D.WATER}nearestRide(){let e=null,t=6.5;const n=-Math.sin(this.yaw),s=-Math.cos(this.yaw);for(const r of this.world.crafts||[]){if(!r.userData.ride)continue;const o=r.position.x-this.pos.x,a=r.position.z-this.pos.z,c=Math.hypot(o,a);if(c>7)continue;const l=o*n+a*s,h=c-(l>0?1.2:0);h<t&&(t=h,e=r)}return e}mount(e){this.ride=e,e.userData.label&&(e.userData.label.visible=!1),this.vel.set(0,0,0),this.pos.x=e.position.x,this.pos.z=e.position.z,e.userData.kind==="plane"?this.pos.y=Math.max(e.position.y+1.15,this.groundY()+2.4):e.userData.kind==="boat"&&this.waterColumn(e.position.x,e.position.z)?this.pos.y=this.world.seaLevel+1.45:this.pos.y=this.groundY()}nearestShore(e,t){for(let n=1;n<=8;n++)for(let s=-n;s<=n;s++)for(let r=-n;r<=n;r++){if(Math.max(Math.abs(s),Math.abs(r))!==n)continue;const o=e+s,a=t+r;if(this.waterColumn(o,a))continue;const c=Math.floor(o),l=Math.floor(a);if(!(c<2||l<2||c>this.world.size-3||l>this.world.size-3))return{x:c+.5,z:l+.5}}return null}dismount(){const e=this.ride;if(!e)return!0;const t=e.userData.kind;if(t==="boat"&&this.waterColumn(this.pos.x,this.pos.z)){const n=this.nearestShore(this.pos.x,this.pos.z);if(!n)return!1;this.pos.set(n.x,this.groundY(n.x,n.z),n.z)}else if(t==="plane"){const n=this.groundY();this.pos.y=n,e.position.y=n-1.15,e.rotation.x=0,this.pos.x=Math.max(1,Math.min(this.world.size-2,this.pos.x+1.6))}else this.pos.x+=Math.cos(this.yaw)*1.2,this.pos.z-=Math.sin(this.yaw)*1.2,this.pos.y=this.groundY();return e.userData.label&&(e.userData.label.visible=!0),this.vel.set(0,0,0),this.ride=null,!0}toggleRide(){if(this.ride){const t=this.ride.userData.kind;return this.dismount()?t==="plane"?"飞机降落了":t==="boat"?"你下船了":"你下车了":"旁边没有岸，先把船开到岸边再下来"}const e=this.nearestRide();return e?(this.mount(e),e.userData.kind==="boat"?"上船了。摇杆向前开，水上更快，到岸边再下来":e.userData.kind==="bike"?"骑上摩托了。摇杆向前开，比走路快":"起飞。摇杆前进，抬头爬升，低头下降，再点驾驶就会降落"):"附近没有船、摩托或飞机。造好后站到旁边，再点驾驶"}stickInput(){let e=this.touch.x,t=this.touch.y;return this.keys.has("KeyD")&&(e+=1),this.keys.has("KeyA")&&(e-=1),this.keys.has("KeyW")&&(t+=1),this.keys.has("KeyS")&&(t-=1),e=Math.max(-1,Math.min(1,e)),t=Math.max(-1,Math.min(1,t)),{ix:e,iy:t}}flightFloor(){return this.waterColumn(this.pos.x,this.pos.z)?this.world.seaLevel+2.2:this.groundY()+.35}drive(e){const t=this.ride.userData.kind,{ix:n,iy:s}=this.stickInput(),r=new N(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),o=new N(Math.cos(this.yaw),0,-Math.sin(this.yaw)),a=this.keys.has("KeyE")||this.touch.sprint,c=t==="plane"?22:t==="boat"?this.waterColumn(this.pos.x,this.pos.z)?14:7:a?18:12,l=new N;if(Math.abs(n)>.05||Math.abs(s)>.05){l.addScaledVector(o,n),l.addScaledVector(r,s);const g=Math.min(1,l.length());l.normalize().multiplyScalar(c*g)}const h=this.pos.x+l.x*e,u=this.pos.z+l.z*e;if((t==="plane"?!1:t==="boat"&&this.waterColumn(this.pos.x,this.pos.z)?!this.waterColumn(h,u)&&this.groundY(h,u)>this.world.seaLevel+2.2:this.pathBlocked(h,u)||t==="bike"&&this.waterColumn(h,u))||(this.pos.x=Math.max(1.5,Math.min(this.world.size-1.5,h)),this.pos.z=Math.max(1.5,Math.min(this.world.size-1.5,u))),t==="plane"){let g=0;this.pitch<-.38&&(g=(-this.pitch-.25)*12),this.pitch>.12&&(g=-this.pitch*14),(this.keys.has("Space")||this.touch.jump)&&(g+=9),this.touch.jump=!1;const _=42,m=this.flightFloor();this.pos.y=Math.max(m,Math.min(_,this.pos.y+g*e))}else if(t==="boat"&&this.waterColumn(this.pos.x,this.pos.z))this.pos.y=this.world.seaLevel+1.45,this.vel.y=0;else{const g=this.groundY();this.pos.y+=(g-this.pos.y)*Math.min(1,e*8)}const p=this.ride;if(p.rotation.y=this.yaw,t==="plane")p.position.set(this.pos.x,this.pos.y-1.15,this.pos.z),p.rotation.x=pf.clamp(this.pitch*.45,-.4,.45);else if(t==="boat"&&this.waterColumn(this.pos.x,this.pos.z))p.position.set(this.pos.x,this.world.seaLevel+.15,this.pos.z),p.rotation.x=0;else{const g=this.world.walkSurfaceY(Math.floor(this.pos.x),Math.floor(this.pos.z));p.position.set(this.pos.x,g+1.02,this.pos.z),p.rotation.x=0}this.camera.position.copy(this.pos),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch}startBask(e,t,n){var s;(s=this.ride)!=null&&s.userData.label&&(this.ride.userData.label.visible=!0),this.ride=null,this.bask={until:performance.now()+9e3,x:e,y:t,z:n}}update(e){var _,m;if(this.bask&&performance.now()<this.bask.until){this.vel.set(0,0,0),this.pos.set(this.bask.x,this.bask.y+.42,this.bask.z),this.pitch=-1.05,this.camera.position.set(this.pos.x,this.pos.y+.15,this.pos.z),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch;return}if(this.bask&&(this.bask=null),this.watching){this.vel.set(0,0,0);return}if(this.syncing){this.camera.position.copy(this.pos),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch;return}if(this.ride){this.drive(e);return}this.boost=this.keys.has("KeyE")||this.touch.sprint;const t=this.berryBoost&&performance.now()<this.berryBoost;let n=1;this.world.weather==="storm"?n=.84:this.world.weather==="rain"&&(n=.93),(m=(_=this.world).standingInPuddle)!=null&&m.call(_,this.pos.x,this.pos.z)&&(n*=.86);const s=this.speed*(this.boost?2.2:1)*(t?1.45:1)*n,r=new N(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),o=new N(Math.cos(this.yaw),0,-Math.sin(this.yaw)),{ix:a,iy:c}=this.stickInput(),l=new N;if(Math.abs(a)>.05||Math.abs(c)>.05){l.addScaledVector(o,a),l.addScaledVector(r,c);const f=Math.min(1,l.length());l.normalize().multiplyScalar(s*f),this.vel.x=l.x,this.vel.z=l.z}else this.vel.x*=.8,this.vel.z*=.8;const h=this.pos.y<=this.groundY()+.08;(this.keys.has("Space")||this.touch.jump)&&h&&(this.vel.y=8.5),this.touch.jump=!1,this.vel.y-=22*e;const u=this.pos.x+this.vel.x*e;this.pathBlocked(u,this.pos.z)?this.vel.x=0:this.pos.x=u;const d=this.pos.z+this.vel.z*e;this.pathBlocked(this.pos.x,d)?this.vel.z=0:this.pos.z=d,this.pos.x=Math.max(1,Math.min(this.world.size-1,this.pos.x)),this.pos.z=Math.max(1,Math.min(this.world.size-1,this.pos.z)),this.pos.y+=this.vel.y*e;const p=this.groundY();this.pos.y<p&&(this.pos.y=p,this.vel.y=0);const g=this.groundY(this.pos.x+Math.sign(this.vel.x||r.x)*.4,this.pos.z+Math.sign(this.vel.z||r.z)*.4);g>this.pos.y+.05&&g<this.pos.y+1.15&&h&&(this.pos.y=g),this.camera.position.copy(this.pos),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch}aimBlock(){const e=this.camera.position.clone(),t=new N;this.camera.getWorldDirection(t);let n=null;for(let s=0;s<6;s+=.1){const r=e.clone().addScaledVector(t,s),o=Math.floor(r.x),a=Math.floor(r.y),c=Math.floor(r.z),l=this.world.get(o,a,c);if(ks(l))return{x:o,y:a,z:c,id:l,place:n};n={x:o,y:a,z:c}}return null}addItem(e,t=1){this.bag[e]=(this.bag[e]||0)+t}catchCritter(){const e=new N;this.camera.getWorldDirection(e);let t=null,n=.72;for(const o of this.world.critters||[]){if(o.gone)continue;const a=o.mesh.position.clone().sub(this.camera.position);if(a.length()>7)continue;const l=a.normalize().dot(e);l>n&&(n=l,t=o)}if(!t)return null;this.world.collectCritter(t);const s=t.species||{fish:"鱼",game:"兔子",bird:"鸟"}[t.kind]||"动物";this.addItem(s,1);const r={fish:"海里",game:"地上",bird:"天上"}[t.kind]||"";return`你抓住了一只${s}${r?`（${r}）`:""}。打开物品可以吃掉或喂人`}buildWorld(e){const t=Sc.find(r=>r.id===e);if(!t)return"没有这个造物";if((this.bag[D.WOOD]||0)<t.wood)return`造${t.name}需要 ${t.wood} 根木头，先去伐树`;this.bag[D.WOOD]-=t.wood;const n=this.pos.x-Math.sin(this.yaw)*2.4,s=this.pos.z-Math.cos(this.yaw)*2.4;return bc(this.world,t,n,s),t.id==="boat"||t.id==="bike"||t.id==="plane"?`${t.name}造好了，站到旁边点左上角「驾驶」就能开`:`${t.name}造好了，就在你前方`}mine(){if(this.syncing)return null;const e=this.catchCritter();if(e)return{caught:e};const t=this.aimBlock();if(!t)return null;if(!B_(t.id,this.pickaxe))return{blocked:!0,id:t.id,bedrock:t.id===D.BEDROCK};const n=this.world.breakBlock(t.x,t.y,t.z);if(!n)return null;const s=_n[n],r=s==null?void 0:s.drop;return r==null?{id:n}:(typeof r=="string"?this.addItem(r,1):this.addItem(r,1),{id:n,drop:r})}place(){if(this.syncing)return!1;const e=this.aimBlock();if(!(e!=null&&e.place))return!1;const t=this.selectedBlock();if(!k_.includes(t)||(this.bag[t]||0)<=0)return!1;const{x:n,y:s,z:r}=e.place;return Math.hypot(n+.5-this.pos.x,s+.5-this.pos.y,r+.5-this.pos.z)<1.2||!this.world.placeBlock(n,s,r,t)?!1:(this.bag[t]-=1,t===D.PLATFORM&&(this.hasPlatform=!0),!0)}craftPlatform(){return(this.bag[D.WOOD]||0)<4?"需要 4 根木头":(this.bag[D.WOOD]-=4,this.addItem(D.PLATFORM,1),this.hasPlatform=!0,"做好了工作台，放到地上就能削木板")}craftPlanks(){return!this.hasPlatform&&(this.bag[D.PLATFORM]||0)<=0?"先用 4 根木头做一个工作台":(this.bag[D.WOOD]||0)<1?"需要木头":(this.bag[D.WOOD]-=1,this.addItem(D.PLANKS,4),"削出了 4 块木板")}craftWoodPickaxe(){return(this.bag[D.PLANKS]||0)<3?"需要 3 块木板":(this.bag[D.PLANKS]-=3,this.pickaxe="wood","合成了木镐，可以挖石头和煤矿")}craftPickaxe(){return(this.bag[D.PLANKS]||0)<2?"需要 2 块木板":(this.bag[D.STONE]||0)<3?"需要 3 块石头（先做木镐挖石头）":(this.bag[D.PLANKS]-=2,this.bag[D.STONE]-=3,this.pickaxe="stone","合成了石镐，可以挖铁矿和更硬的矿")}foodNames(){return Object.keys(this.bag).filter(e=>e!=="coal"&&e!=="iron"&&e!=="gold"&&Number.isNaN(Number(e))&&(this.bag[e]||0)>0)}eatBerry(){return(this.bag[D.BERRY]||0)<1?"没有浆果。先去挖地上的浆果丛":(this.bag[D.BERRY]-=1,this.berryBoost=performance.now()+14e3,"吃了一把浆果，一小段时间跑得更快")}plantBerry(){var r,o;if((this.bag[D.BERRY]||0)<1)return"没有浆果可以种";const e=Math.floor(this.pos.x-Math.sin(this.yaw)*1.6),t=Math.floor(this.pos.z-Math.cos(this.yaw)*1.6),n=this.world.walkSurfaceY(e,t),s=this.world.get(e,n,t);return s!==D.GRASS&&s!==D.DIRT?"要种在草地或泥土上":this.world.get(e,n+1,t)!==D.AIR?"前面的空地被挡住了":(this.world.set(e,n+1,t,D.BERRY),this.world.markDirty(),this.world.silentEdit||(o=(r=this.world).onEdit)==null||o.call(r,e,n+1,t,D.BERRY),this.bag[D.BERRY]-=1,"种下了一丛浆果")}eatCatch(){const e=this.foodNames().find(t=>t!=="桂花"&&(this.bag[t]||0)>0);return e?(this.bag[e]-=1,this.berryBoost=performance.now()+1e4,`吃掉了${e}`):"没有抓到的鱼或猎物。手对准动物再点挖"}eatOsmanthus(){return(this.bag.桂花||0)<1?"没有桂花。去挖金绿色的桂花树，或地上薄薄一层落花":(this.bag.桂花-=1,this.berryBoost=performance.now()+12e3,"桂花香了一会儿，脚步轻了一点")}}class xv{constructor(){this.handlers=new Map}on(e,t){return this.handlers.has(e)||this.handlers.set(e,new Set),this.handlers.get(e).add(t),()=>{var n;return(n=this.handlers.get(e))==null?void 0:n.delete(t)}}emit(e,t){const n=this.handlers.get(e);if(n)for(const s of n)s(t)}}function yv(){return window.matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0}function Mv(i,{onPick:e,onTap:t}={}){document.body.classList.add("touch-device"),document.getElementById("touch-ui").hidden=!1;const n=document.getElementById("stick"),s=n.querySelector(".knob"),r=document.getElementById("look-zone");let o=null,a=null,c=null,l=null,h=null,u=!1;const d=new Set,p=(R,w)=>{const A=Math.max(18,n.clientWidth*.33);let k=R-a.x,b=w-a.y;const x=Math.hypot(k,b)||1,P=Math.min(A,x),W=k/x*P,V=b/x*P;s.style.transform=`translate(${W}px, ${V}px)`,i.setMove(W/A,-V/A)};n.addEventListener("pointerdown",R=>{if(document.body.classList.contains("sheet-open"))return;R.preventDefault(),o=R.pointerId,n.setPointerCapture(R.pointerId);const w=n.getBoundingClientRect();a={x:w.left+w.width/2,y:w.top+w.height/2},p(R.clientX,R.clientY)}),n.addEventListener("pointermove",R=>{R.pointerId!==o||!a||p(R.clientX,R.clientY)});const g=R=>{R.pointerId===o&&(o=null,a=null,s.style.transform="translate(0px, 0px)",i.setMove(0,0))};n.addEventListener("pointerup",g),n.addEventListener("pointercancel",g);const _=()=>{var R;c!=null&&((R=r.hasPointerCapture)!=null&&R.call(r,c))&&r.releasePointerCapture(c),c=null,l=null,h=null};r.addEventListener("pointerdown",R=>{if(d.add(R.pointerId),d.size>1){_();return}document.body.classList.contains("sheet-open")||document.body.classList.contains("bag-open")||document.body.classList.contains("chat-open")||document.body.classList.contains("room-open")||document.getElementById("buddy-prompt").hidden&&(R.target.closest("button, #stick, #sheet, .panel, #install-hint, #pick-prompt, #card-dock, #bag-panel, #bag-toggle, #chat-box, #chat-toggle, #ride-toggle, #room-box, #room-toggle")||(c=R.pointerId,l={x:R.clientX,y:R.clientY},h={x:R.clientX,y:R.clientY},u=!1))}),r.addEventListener("pointermove",R=>{if(d.size>1||R.pointerId!==c||!l)return;const w=R.clientX-l.x,A=R.clientY-l.y;Math.hypot(R.clientX-h.x,R.clientY-h.y)>10&&(u=!0),i.addLook(w,A),l={x:R.clientX,y:R.clientY}});const m=R=>{if(d.delete(R.pointerId),R.pointerId!==c)return;const w=!u&&h,A=h==null?void 0:h.x,k=h==null?void 0:h.y;_(),w&&A!=null&&(t==null||t(A,k))};r.addEventListener("pointerup",m),r.addEventListener("pointercancel",m);const f=(R,w)=>{document.getElementById(R).addEventListener("pointerdown",k=>{k.preventDefault(),k.stopPropagation(),w()})};f("btn-jump",()=>i.requestJump()),f("btn-mine",()=>i.mine()),f("btn-place",()=>i.place()),f("btn-run",()=>{i.touch.sprint=!i.touch.sprint,document.getElementById("btn-run").classList.toggle("on",i.touch.sprint)}),f("btn-pick",()=>e==null?void 0:e()),f("btn-menu",()=>{document.getElementById("pick-prompt").hidden=!0,document.body.classList.toggle("sheet-open")}),document.getElementById("sheet-close").addEventListener("click",R=>{R.preventDefault(),document.body.classList.remove("sheet-open")});const C=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone,T=document.getElementById("install-hint");C||(T.hidden=!1),document.getElementById("install-dismiss").addEventListener("click",()=>{T.hidden=!0});const S=document.getElementById("crosshair");S.className="cross-hand",S.textContent="✋",S.style.opacity="1",document.getElementById("touch-ui").addEventListener("contextmenu",R=>R.preventDefault())}class Sv{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return bv(e).buffer}}function bv(i){let e=0;for(const s of i)e+=s.byteLength;const t=new Uint8Array(e);let n=0;for(const s of i){const r=new Uint8Array(s.buffer,s.byteOffset,s.byteLength);t.set(r,n),n+=s.byteLength}return t}function ou(i){return new Ev(i).unpack()}function au(i){const e=new Tv,t=e.pack(i);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class Ev{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let n=0,s="",r,o;for(;n<e;)r=t[n],r<160?(o=r,n++):(r^192)<32?(o=(r&31)<<6|t[n+1]&63,n+=2):(r^224)<16?(o=(r&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(o=(r&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),s+=String.fromCodePoint(o);return this.index+=e,s}unpack_array(e){const t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){const t={};for(let n=0;n<e;n++){const s=this.unpack();t[s]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,s=e&8388607|8388608;return(t===0?1:-1)*s*2**(n-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,s=(e>>20&2047)-1023,o=(e&1048575|1048576)*2**(s-20)+t*2**(s-52);return(n===0?1:-1)*o}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class Tv{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const n=s=>{if(s<t){const r=this.pack(e[s]);return r instanceof Promise?r.then(()=>n(s+1)):n(s+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const n=Math.floor(Math.log(e)/Math.LN2),s=e/2**n-1,r=Math.floor(s*2**52),o=2**32,a=t<<31|n+1023<<20|r/o&1048575,c=r%o;this._bufferBuilder.append(203),this.pack_int32(a),this.pack_int32(c)}pack_object(e){const t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");const s=r=>{if(r<t.length){const o=t[r];if(e.hasOwnProperty(o)){this.pack(o);const a=this.pack(e[o]);if(a instanceof Promise)return a.then(()=>s(r+1))}return s(r+1)}};return s(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new Sv,this._textEncoder=new TextEncoder}}let cu=!0,lu=!0;function Us(i,e,t){const n=i.match(e);return n&&n.length>=t&&parseFloat(n[t],10)}function Ci(i,e,t){if(!i.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){Ec("Unable to polyfill events");return}const s=i.RTCPeerConnection.prototype,r=s.addEventListener;s.addEventListener=function(a,c){if(a!==e)return r.apply(this,arguments);const l=h=>{const u=t(h);u&&(c.handleEvent?c.handleEvent(u):c(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(c,l),r.apply(this,[a,l])};const o=s.removeEventListener;s.removeEventListener=function(a,c){if(a!==e||!this._eventMap||!this._eventMap[e])return o.apply(this,arguments);if(!this._eventMap[e].has(c))return o.apply(this,arguments);const l=this._eventMap[e].get(c);return this._eventMap[e].delete(c),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,o.apply(this,[a,l])},Object.defineProperty(s,"on"+e,{get(){return this["_on"+e]},set(a){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),a&&this.addEventListener(e,this["_on"+e]=a)},enumerable:!0,configurable:!0})}function Cv(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(cu=i,i?"adapter.js logging disabled":"adapter.js logging enabled")}function Av(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(lu=!i,"adapter.js deprecation warnings "+(i?"disabled":"enabled"))}function Ec(){if(typeof window=="object"){if(cu)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function Tc(i,e){lu&&console.warn(i+" is deprecated, please use "+e+" instead.")}function wv(i){const e={browser:null,version:null};if(typeof i>"u"||!i.navigator||!i.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=i;if(t.userAgentData&&t.userAgentData.brands){const n=t.userAgentData.brands.find(s=>s.brand==="Chromium");if(n){const s=parseInt(n.version,10);if(s>=90)return{browser:"chrome",version:s}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(Us(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||i.isSecureContext===!1&&i.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(Us(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(i.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(Us(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=i.RTCRtpTransceiver&&"currentDirection"in i.RTCRtpTransceiver.prototype,e._safariVersion=Us(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function rh(i){return Object.prototype.toString.call(i)==="[object Object]"}function hu(i){return rh(i)?Object.keys(i).reduce(function(e,t){const n=rh(i[t]),s=n?hu(i[t]):i[t],r=n&&!Object.keys(s).length;return s===void 0||r?e:Object.assign(e,{[t]:s})},{}):i}function Va(i,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?Va(i,i.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(s=>{Va(i,i.get(s),t)})}))}function oh(i,e,t){const n=t?"outbound-rtp":"inbound-rtp",s=new Map;if(e===null)return s;const r=[];return i.forEach(o=>{o.type==="track"&&o.trackIdentifier===e.id&&r.push(o)}),r.forEach(o=>{i.forEach(a=>{a.type===n&&a.trackId===o.id&&Va(i,a,s)})}),s}const ah=Ec;function uu(i,e){if(e.version>=64)return;const t=i&&i.navigator;if(!t.mediaDevices)return;const n=function(a){if(typeof a!="object"||a.mandatory||a.optional)return a;const c={};return Object.keys(a).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const h=typeof a[l]=="object"?a[l]:{ideal:a[l]};h.exact!==void 0&&typeof h.exact=="number"&&(h.min=h.max=h.exact);const u=function(d,p){return d?d+p.charAt(0).toUpperCase()+p.slice(1):p==="deviceId"?"sourceId":p};if(h.ideal!==void 0){c.optional=c.optional||[];let d={};typeof h.ideal=="number"?(d[u("min",l)]=h.ideal,c.optional.push(d),d={},d[u("max",l)]=h.ideal,c.optional.push(d)):(d[u("",l)]=h.ideal,c.optional.push(d))}h.exact!==void 0&&typeof h.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[u("",l)]=h.exact):["min","max"].forEach(d=>{h[d]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[u(d,l)]=h[d])})}),a.advanced&&(c.optional=(c.optional||[]).concat(a.advanced)),c},s=function(a,c){if(e.version>=61)return c(a);if(a=JSON.parse(JSON.stringify(a)),a&&typeof a.audio=="object"){const l=function(h,u,d){u in h&&!(d in h)&&(h[d]=h[u],delete h[u])};a=JSON.parse(JSON.stringify(a)),l(a.audio,"autoGainControl","googAutoGainControl"),l(a.audio,"noiseSuppression","googNoiseSuppression"),a.audio=n(a.audio)}if(a&&typeof a.video=="object"){let l=a.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const h=e.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!h)){delete a.video.facingMode;let u;if(l.exact==="environment"||l.ideal==="environment"?u=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(u=["front"]),u)return t.mediaDevices.enumerateDevices().then(d=>{d=d.filter(g=>g.kind==="videoinput");let p=d.find(g=>u.some(_=>g.label.toLowerCase().includes(_)));return!p&&d.length&&u.includes("back")&&(p=d[d.length-1]),p&&(a.video.deviceId=l.exact?{exact:p.deviceId}:{ideal:p.deviceId}),a.video=n(a.video),ah("chrome: "+JSON.stringify(a)),c(a)})}a.video=n(a.video)}return ah("chrome: "+JSON.stringify(a)),c(a)},r=function(a){return e.version>=64?a:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[a.name]||a.name,message:a.message,constraint:a.constraint||a.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},o=function(a,c,l){s(a,h=>{t.webkitGetUserMedia(h,c,u=>{l&&l(r(u))})})};if(t.getUserMedia=o.bind(t),t.mediaDevices.getUserMedia){const a=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return s(c,l=>a(l).then(h=>{if(l.audio&&!h.getAudioTracks().length||l.video&&!h.getVideoTracks().length)throw h.getTracks().forEach(u=>{u.stop()}),new DOMException("","NotFoundError");return h},h=>Promise.reject(r(h))))}}}function du(i){i.MediaStream=i.MediaStream||i.webkitMediaStream}function fu(i,e){if(!(e.version>102))if(typeof i=="object"&&i.RTCPeerConnection&&!("ontrack"in i.RTCPeerConnection.prototype)){Object.defineProperty(i.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(n){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=n)},enumerable:!0,configurable:!0});const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=s=>{s.stream.addEventListener("addtrack",r=>{let o;i.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(c=>c.track&&c.track.id===r.track.id):o={track:r.track};const a=new Event("track");a.track=r.track,a.receiver=o,a.transceiver={receiver:o},a.streams=[s.stream],this.dispatchEvent(a)}),s.stream.getTracks().forEach(r=>{let o;i.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(c=>c.track&&c.track.id===r.id):o={track:r};const a=new Event("track");a.track=r,a.receiver=o,a.transceiver={receiver:o},a.streams=[s.stream],this.dispatchEvent(a)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else Ci(i,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function pu(i){if(typeof i=="object"&&i.RTCPeerConnection&&!("getSenders"in i.RTCPeerConnection.prototype)&&"createDTMFSender"in i.RTCPeerConnection.prototype){const e=function(s,r){return{track:r,get dtmf(){return this._dtmf===void 0&&(r.kind==="audio"?this._dtmf=s.createDTMFSender(r):this._dtmf=null),this._dtmf},_pc:s}};if(!i.RTCPeerConnection.prototype.getSenders){i.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const s=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(a,c){let l=s.apply(this,arguments);return l||(l=e(this,a),this._senders.push(l)),l};const r=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(a){r.apply(this,arguments);const c=this._senders.indexOf(a);c!==-1&&this._senders.splice(c,1)}}const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(r){this._senders=this._senders||[],t.apply(this,[r]),r.getTracks().forEach(o=>{this._senders.push(e(this,o))})};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(r){this._senders=this._senders||[],n.apply(this,[r]),r.getTracks().forEach(o=>{const a=this._senders.find(c=>c.track===o);a&&this._senders.splice(this._senders.indexOf(a),1)})}}else if(typeof i=="object"&&i.RTCPeerConnection&&"getSenders"in i.RTCPeerConnection.prototype&&"createDTMFSender"in i.RTCPeerConnection.prototype&&i.RTCRtpSender&&!("dtmf"in i.RTCRtpSender.prototype)){const e=i.RTCPeerConnection.prototype.getSenders;i.RTCPeerConnection.prototype.getSenders=function(){const n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n},Object.defineProperty(i.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function mu(i,e){if(e.version>=67||!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender&&i.RTCRtpReceiver))return;if(!("getStats"in i.RTCRtpSender.prototype)){const n=i.RTCPeerConnection.prototype.getSenders;n&&(i.RTCPeerConnection.prototype.getSenders=function(){const o=n.apply(this,[]);return o.forEach(a=>a._pc=this),o});const s=i.RTCPeerConnection.prototype.addTrack;s&&(i.RTCPeerConnection.prototype.addTrack=function(){const o=s.apply(this,arguments);return o._pc=this,o}),i.RTCRtpSender.prototype.getStats=function(){const o=this;return this._pc.getStats().then(a=>oh(a,o.track,!0))}}if(!("getStats"in i.RTCRtpReceiver.prototype)){const n=i.RTCPeerConnection.prototype.getReceivers;n&&(i.RTCPeerConnection.prototype.getReceivers=function(){const r=n.apply(this,[]);return r.forEach(o=>o._pc=this),r}),Ci(i,"track",s=>(s.receiver._pc=s.srcElement,s)),i.RTCRtpReceiver.prototype.getStats=function(){const r=this;return this._pc.getStats().then(o=>oh(o,r.track,!1))}}if(!("getStats"in i.RTCRtpSender.prototype&&"getStats"in i.RTCRtpReceiver.prototype))return;const t=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof i.MediaStreamTrack){const s=arguments[0];let r,o,a;return this.getSenders().forEach(c=>{c.track===s&&(r?a=!0:r=c)}),this.getReceivers().forEach(c=>(c.track===s&&(o?a=!0:o=c),c.track===s)),a||r&&o?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):r?r.getStats():o?o.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function gu(i){i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(o=>this._shimmedLocalStreams[o][0])};const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(o,a){if(!a)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=e.apply(this,arguments);return this._shimmedLocalStreams[a.id]?this._shimmedLocalStreams[a.id].indexOf(c)===-1&&this._shimmedLocalStreams[a.id].push(c):this._shimmedLocalStreams[a.id]=[a,c],c};const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(o){this._shimmedLocalStreams=this._shimmedLocalStreams||{},o.getTracks().forEach(l=>{if(this.getSenders().find(u=>u.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const a=this.getSenders();t.apply(this,arguments);const c=this.getSenders().filter(l=>a.indexOf(l)===-1);this._shimmedLocalStreams[o.id]=[o].concat(c)};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[o.id],n.apply(this,arguments)};const s=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},o&&Object.keys(this._shimmedLocalStreams).forEach(a=>{const c=this._shimmedLocalStreams[a].indexOf(o);c!==-1&&this._shimmedLocalStreams[a].splice(c,1),this._shimmedLocalStreams[a].length===1&&delete this._shimmedLocalStreams[a]}),s.apply(this,arguments)}}function _u(i,e){if(!i.RTCPeerConnection)return;if(i.RTCPeerConnection.prototype.addTrack&&e.version>=65)return gu(i);const t=i.RTCPeerConnection.prototype.getLocalStreams;i.RTCPeerConnection.prototype.getLocalStreams=function(){const h=t.apply(this);return this._reverseStreams=this._reverseStreams||{},h.map(u=>this._reverseStreams[u.id])};const n=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(h){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},h.getTracks().forEach(u=>{if(this.getSenders().find(p=>p.track===u))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[h.id]){const u=new i.MediaStream(h.getTracks());this._streams[h.id]=u,this._reverseStreams[u.id]=h,h=u}n.apply(this,[h])};const s=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(h){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},s.apply(this,[this._streams[h.id]||h]),delete this._reverseStreams[this._streams[h.id]?this._streams[h.id].id:h.id],delete this._streams[h.id]},i.RTCPeerConnection.prototype.addTrack=function(h,u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const d=[].slice.call(arguments,1);if(d.length!==1||!d[0].getTracks().find(_=>_===h))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(_=>_.track===h))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const g=this._streams[u.id];if(g)g.addTrack(h),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const _=new i.MediaStream([h]);this._streams[u.id]=_,this._reverseStreams[_.id]=u,this.addStream(_)}return this.getSenders().find(_=>_.track===h)};function r(l,h){let u=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{const p=l._reverseStreams[d],g=l._streams[p.id];u=u.replace(new RegExp(g.id,"g"),p.id)}),new RTCSessionDescription({type:h.type,sdp:u})}function o(l,h){let u=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{const p=l._reverseStreams[d],g=l._streams[p.id];u=u.replace(new RegExp(p.id,"g"),g.id)}),new RTCSessionDescription({type:h.type,sdp:u})}["createOffer","createAnswer"].forEach(function(l){const h=i.RTCPeerConnection.prototype[l],u={[l](){const d=arguments;return arguments.length&&typeof arguments[0]=="function"?h.apply(this,[g=>{const _=r(this,g);d[0].apply(null,[_])},g=>{d[1]&&d[1].apply(null,g)},arguments[2]]):h.apply(this,arguments).then(g=>r(this,g))}};i.RTCPeerConnection.prototype[l]=u[l]});const a=i.RTCPeerConnection.prototype.setLocalDescription;i.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?a.apply(this,arguments):(arguments[0]=o(this,arguments[0]),a.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(i.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(i.RTCPeerConnection.prototype,"localDescription",{get(){const l=c.get.apply(this);return l.type===""?l:r(this,l)}}),i.RTCPeerConnection.prototype.removeTrack=function(h){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!h._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(h._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let d;Object.keys(this._streams).forEach(p=>{this._streams[p].getTracks().find(_=>h.track===_)&&(d=this._streams[p])}),d&&(d.getTracks().length===1?this.removeStream(this._reverseStreams[d.id]):d.removeTrack(h.track),this.dispatchEvent(new Event("negotiationneeded")))}}function Wa(i,e){!i.RTCPeerConnection&&i.webkitRTCPeerConnection&&(i.RTCPeerConnection=i.webkitRTCPeerConnection),i.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]})}function vu(i,e){e.version>102||Ci(i,"negotiationneeded",t=>{const n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}const ch=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:vu,shimAddTrackRemoveTrack:_u,shimAddTrackRemoveTrackWithNative:gu,shimGetSendersWithDtmf:pu,shimGetUserMedia:uu,shimMediaStream:du,shimOnTrack:fu,shimPeerConnection:Wa,shimSenderReceiverGetStats:mu},Symbol.toStringTag,{value:"Module"}));function xu(i,e){const t=i&&i.navigator;if(!t.mediaDevices)return;const n=i&&i.MediaStreamTrack;if(t.getUserMedia=function(s,r,o){Tc("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(s).then(r,o)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const s=function(o,a,c){a in o&&!(c in o)&&(o[c]=o[a],delete o[a])},r=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(o){return typeof o=="object"&&typeof o.audio=="object"&&(o=JSON.parse(JSON.stringify(o)),s(o.audio,"autoGainControl","mozAutoGainControl"),s(o.audio,"noiseSuppression","mozNoiseSuppression")),r(o)},n&&n.prototype.getSettings){const o=n.prototype.getSettings;n.prototype.getSettings=function(){const a=o.apply(this,arguments);return s(a,"mozAutoGainControl","autoGainControl"),s(a,"mozNoiseSuppression","noiseSuppression"),a}}if(n&&n.prototype.applyConstraints){const o=n.prototype.applyConstraints;n.prototype.applyConstraints=function(a){return this.kind==="audio"&&typeof a=="object"&&(a=JSON.parse(JSON.stringify(a)),s(a,"autoGainControl","mozAutoGainControl"),s(a,"noiseSuppression","mozNoiseSuppression")),o.apply(this,[a])}}}}function Rv(i,e){i.navigator.mediaDevices&&(i.navigator.mediaDevices&&"getDisplayMedia"in i.navigator.mediaDevices||(i.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){const s=new DOMException("getDisplayMedia without video constraints is undefined");return s.name="NotFoundError",s.code=8,Promise.reject(s)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,i.navigator.mediaDevices.getUserMedia(n)}))}function yu(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function $a(i,e){typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||(!i.RTCPeerConnection&&i.mozRTCPeerConnection&&(i.RTCPeerConnection=i.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]}))}function Mu(i,e){if(typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){const[r,o,a]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):n.apply(this,[r||null]).then(c=>{if(e.version<53&&!o)try{c.forEach(l=>{l.type=t[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;c.forEach((h,u)=>{c.set(u,Object.assign({},h,{type:t[h.type]||h.type}))})}return c}).then(o,a)}}function Su(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpSender.prototype)return;const e=i.RTCPeerConnection.prototype.getSenders;e&&(i.RTCPeerConnection.prototype.getSenders=function(){const s=e.apply(this,[]);return s.forEach(r=>r._pc=this),s});const t=i.RTCPeerConnection.prototype.addTrack;t&&(i.RTCPeerConnection.prototype.addTrack=function(){const s=t.apply(this,arguments);return s._pc=this,s}),i.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function bu(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpReceiver.prototype)return;const e=i.RTCPeerConnection.prototype.getReceivers;e&&(i.RTCPeerConnection.prototype.getReceivers=function(){const n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n}),Ci(i,"track",t=>(t.receiver._pc=t.srcElement,t)),i.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function Eu(i){!i.RTCPeerConnection||"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){Tc("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function Tu(i){i.DataChannel&&!i.RTCDataChannel&&(i.RTCDataChannel=i.DataChannel)}function Cu(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.addTransceiver;t&&(i.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let s=arguments[1]&&arguments[1].sendEncodings;s===void 0&&(s=[]),s=[...s];const r=s.length>0;r&&s.forEach(a=>{if("rid"in a&&!/^[a-z0-9]{0,16}$/i.test(a.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in a&&!(parseFloat(a.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in a&&!(parseFloat(a.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const o=t.apply(this,arguments);if(r){const{sender:a}=o,c=a.getParameters();(!("encodings"in c)||c.encodings.length===1&&Object.keys(c.encodings[0]).length===0)&&(c.encodings=s,a.sendEncodings=s,this.setParametersPromises.push(a.setParameters(c).then(()=>{delete a.sendEncodings}).catch(()=>{delete a.sendEncodings})))}return o})}function Au(i,e){if(!(typeof i=="object"&&i.RTCRtpSender)||e.version>=110)return;const t=i.RTCRtpSender.prototype.getParameters;t&&(i.RTCRtpSender.prototype.getParameters=function(){const s=t.apply(this,arguments);return"encodings"in s||(s.encodings=[].concat(this.sendEncodings||[{}])),s})}function wu(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function Ru(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.createAnswer;i.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const lh=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:Cu,shimCreateAnswer:Ru,shimCreateOffer:wu,shimGetDisplayMedia:Rv,shimGetParameters:Au,shimGetStats:Mu,shimGetUserMedia:xu,shimOnTrack:yu,shimPeerConnection:$a,shimRTCDataChannel:Tu,shimReceiverGetStats:bu,shimRemoveStream:Eu,shimSenderGetStats:Su},Symbol.toStringTag,{value:"Module"}));function Pu(i){if(!(typeof i!="object"||!i.RTCPeerConnection)){if("getLocalStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in i.RTCPeerConnection.prototype)){const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(s=>e.call(this,s,n)),n.getVideoTracks().forEach(s=>e.call(this,s,n))},i.RTCPeerConnection.prototype.addTrack=function(n,...s){return s&&s.forEach(r=>{this._localStreams?this._localStreams.includes(r)||this._localStreams.push(r):this._localStreams=[r]}),e.apply(this,arguments)}}"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);const s=t.getTracks();this.getSenders().forEach(r=>{s.includes(r.track)&&this.removeTrack(r)})})}}function Lu(i){if(!(typeof i!="object"||!i.RTCPeerConnection)&&("getRemoteStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in i.RTCPeerConnection.prototype))){Object.defineProperty(i.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(s=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(s))return;this._remoteStreams.push(s);const r=new Event("addstream");r.stream=s,this.dispatchEvent(r)})})}});const e=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){const n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(s){s.streams.forEach(r=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(r)>=0)return;n._remoteStreams.push(r);const o=new Event("addstream");o.stream=r,n.dispatchEvent(o)})}),e.apply(n,arguments)}}}function Iu(i){if(typeof i!="object"||!i.RTCPeerConnection)return;const e=i.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,s=e.setLocalDescription,r=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(l,h){const u=arguments.length>=2?arguments[2]:arguments[0],d=t.apply(this,[u]);return h?(d.then(l,h),Promise.resolve()):d},e.createAnswer=function(l,h){const u=arguments.length>=2?arguments[2]:arguments[0],d=n.apply(this,[u]);return h?(d.then(l,h),Promise.resolve()):d};let a=function(c,l,h){const u=s.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u};e.setLocalDescription=a,a=function(c,l,h){const u=r.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u},e.setRemoteDescription=a,a=function(c,l,h){const u=o.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u},e.addIceCandidate=a}function Du(i){const e=i&&i.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=s=>n(Uu(s))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(n,s,r){e.mediaDevices.getUserMedia(n).then(s,r)}).bind(e))}function Uu(i){return i&&i.video!==void 0?Object.assign({},i,{video:hu(i.video)}):i}function Nu(i){if(!i.RTCPeerConnection)return;const e=i.RTCPeerConnection;i.RTCPeerConnection=function(n,s){if(n&&n.iceServers){const r=[];for(let o=0;o<n.iceServers.length;o++){let a=n.iceServers[o];a.urls===void 0&&a.url?(Tc("RTCIceServer.url","RTCIceServer.urls"),a=JSON.parse(JSON.stringify(a)),a.urls=a.url,delete a.url,r.push(a)):r.push(n.iceServers[o])}n.iceServers=r}return new e(n,s)},i.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(i.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function Ou(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Fu(i){const e=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);const s=this.getTransceivers().find(o=>o.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):n.offerToReceiveAudio===!0&&!s&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);const r=this.getTransceivers().find(o=>o.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveVideo===!0&&!r&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function ku(i){typeof i!="object"||i.AudioContext||(i.AudioContext=i.webkitAudioContext)}const hh=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:ku,shimCallbacksAPI:Iu,shimConstraints:Uu,shimCreateOfferLegacy:Fu,shimGetUserMedia:Du,shimLocalStreamsAPI:Pu,shimRTCIceServerUrls:Nu,shimRemoteStreamsAPI:Lu,shimTrackEventTransceiver:Ou},Symbol.toStringTag,{value:"Module"}));function Pv(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var jo={exports:{}},uh;function Lv(){return uh||(uh=1,(function(i){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(n=>n.trim())},e.splitSections=function(t){return t.split(`
m=`).map((s,r)=>(r>0?"m="+s:s).trim()+`\r
`)},e.getDescription=function(t){const n=e.splitSections(t);return n&&n[0]},e.getMediaSections=function(t){const n=e.splitSections(t);return n.shift(),n},e.matchPrefix=function(t,n){return e.splitLines(t).filter(s=>s.indexOf(n)===0)},e.parseCandidate=function(t){let n;t.indexOf("a=candidate:")===0?n=t.substring(12).split(" "):n=t.substring(10).split(" ");const s={foundation:n[0],component:{1:"rtp",2:"rtcp"}[n[1]]||n[1],protocol:n[2].toLowerCase(),priority:parseInt(n[3],10),ip:n[4],address:n[4],port:parseInt(n[5],10),type:n[7]};for(let r=8;r<n.length;r+=2)switch(n[r]){case"raddr":s.relatedAddress=n[r+1];break;case"rport":s.relatedPort=parseInt(n[r+1],10);break;case"tcptype":s.tcpType=n[r+1];break;case"ufrag":s.ufrag=n[r+1],s.usernameFragment=n[r+1];break;default:s[n[r]]===void 0&&(s[n[r]]=n[r+1]);break}return s},e.writeCandidate=function(t){const n=[];n.push(t.foundation);const s=t.component;s==="rtp"?n.push(1):s==="rtcp"?n.push(2):n.push(s),n.push(t.protocol.toUpperCase()),n.push(t.priority),n.push(t.address||t.ip),n.push(t.port);const r=t.type;return n.push("typ"),n.push(r),r!=="host"&&t.relatedAddress&&t.relatedPort!==void 0&&(n.push("raddr"),n.push(t.relatedAddress),n.push("rport"),n.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(n.push("tcptype"),n.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(n.push("ufrag"),n.push(t.usernameFragment||t.ufrag)),"candidate:"+n.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let n=t.substring(9).split(" ");const s={payloadType:parseInt(n.shift(),10)};return n=n[0].split("/"),s.name=n[0],s.clockRate=parseInt(n[1],10),s.channels=n.length===3?parseInt(n[2],10):1,s.numChannels=s.channels,s},e.writeRtpMap=function(t){let n=t.payloadType;t.preferredPayloadType!==void 0&&(n=t.preferredPayloadType);const s=t.channels||t.numChannels||1;return"a=rtpmap:"+n+" "+t.name+"/"+t.clockRate+(s!==1?"/"+s:"")+`\r
`},e.parseExtmap=function(t){const n=t.substring(9).split(" ");return{id:parseInt(n[0],10),direction:n[0].indexOf("/")>0?n[0].split("/")[1]:"sendrecv",uri:n[1],attributes:n.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const n={};let s;const r=t.substring(t.indexOf(" ")+1).split(";");for(let o=0;o<r.length;o++)s=r[o].trim().split("="),n[s[0].trim()]=s[1];return n},e.writeFmtp=function(t){let n="",s=t.payloadType;if(t.preferredPayloadType!==void 0&&(s=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const r=[];Object.keys(t.parameters).forEach(o=>{t.parameters[o]!==void 0?r.push(o+"="+t.parameters[o]):r.push(o)}),n+="a=fmtp:"+s+" "+r.join(";")+`\r
`}return n},e.parseRtcpFb=function(t){const n=t.substring(t.indexOf(" ")+1).split(" ");return{type:n.shift(),parameter:n.join(" ")}},e.writeRtcpFb=function(t){let n="",s=t.payloadType;return t.preferredPayloadType!==void 0&&(s=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(r=>{n+="a=rtcp-fb:"+s+" "+r.type+(r.parameter&&r.parameter.length?" "+r.parameter:"")+`\r
`}),n},e.parseSsrcMedia=function(t){const n=t.indexOf(" "),s={ssrc:parseInt(t.substring(7,n),10)},r=t.indexOf(":",n);return r>-1?(s.attribute=t.substring(n+1,r),s.value=t.substring(r+1)):s.attribute=t.substring(n+1),s},e.parseSsrcGroup=function(t){const n=t.substring(13).split(" ");return{semantics:n.shift(),ssrcs:n.map(s=>parseInt(s,10))}},e.getMid=function(t){const n=e.matchPrefix(t,"a=mid:")[0];if(n)return n.substring(6)},e.parseFingerprint=function(t){const n=t.substring(14).split(" ");return{algorithm:n[0].toLowerCase(),value:n[1].toUpperCase()}},e.getDtlsParameters=function(t,n){return{role:"auto",fingerprints:e.matchPrefix(t+n,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,n){let s="a=setup:"+n+`\r
`;return t.fingerprints.forEach(r=>{s+="a=fingerprint:"+r.algorithm+" "+r.value+`\r
`}),s},e.parseCryptoLine=function(t){const n=t.substring(9).split(" ");return{tag:parseInt(n[0],10),cryptoSuite:n[1],keyParams:n[2],sessionParams:n.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const n=t.substring(7).split("|");return{keyMethod:"inline",keySalt:n[0],lifeTime:n[1],mkiValue:n[2]?n[2].split(":")[0]:void 0,mkiLength:n[2]?n[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,n){return e.matchPrefix(t+n,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,n){const s=e.matchPrefix(t+n,"a=ice-ufrag:")[0],r=e.matchPrefix(t+n,"a=ice-pwd:")[0];return s&&r?{usernameFragment:s.substring(12),password:r.substring(10)}:null},e.writeIceParameters=function(t){let n="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(n+=`a=ice-lite\r
`),n},e.parseRtpParameters=function(t){const n={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},r=e.splitLines(t)[0].split(" ");n.profile=r[2];for(let a=3;a<r.length;a++){const c=r[a],l=e.matchPrefix(t,"a=rtpmap:"+c+" ")[0];if(l){const h=e.parseRtpMap(l),u=e.matchPrefix(t,"a=fmtp:"+c+" ");switch(h.parameters=u.length?e.parseFmtp(u[0]):{},h.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+c+" ").map(e.parseRtcpFb),n.codecs.push(h),h.name.toUpperCase()){case"RED":case"ULPFEC":n.fecMechanisms.push(h.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(a=>{n.headerExtensions.push(e.parseExtmap(a))});const o=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return n.codecs.forEach(a=>{o.forEach(c=>{a.rtcpFeedback.find(h=>h.type===c.type&&h.parameter===c.parameter)||a.rtcpFeedback.push(c)})}),n},e.writeRtpDescription=function(t,n){let s="";s+="m="+t+" ",s+=n.codecs.length>0?"9":"0",s+=" "+(n.profile||"UDP/TLS/RTP/SAVPF")+" ",s+=n.codecs.map(o=>o.preferredPayloadType!==void 0?o.preferredPayloadType:o.payloadType).join(" ")+`\r
`,s+=`c=IN IP4 0.0.0.0\r
`,s+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,n.codecs.forEach(o=>{s+=e.writeRtpMap(o),s+=e.writeFmtp(o),s+=e.writeRtcpFb(o)});let r=0;return n.codecs.forEach(o=>{o.maxptime>r&&(r=o.maxptime)}),r>0&&(s+="a=maxptime:"+r+`\r
`),n.headerExtensions&&n.headerExtensions.forEach(o=>{s+=e.writeExtmap(o)}),s},e.parseRtpEncodingParameters=function(t){const n=[],s=e.parseRtpParameters(t),r=s.fecMechanisms.indexOf("RED")!==-1,o=s.fecMechanisms.indexOf("ULPFEC")!==-1,a=e.matchPrefix(t,"a=ssrc:").map(d=>e.parseSsrcMedia(d)).filter(d=>d.attribute==="cname"),c=a.length>0&&a[0].ssrc;let l;const h=e.matchPrefix(t,"a=ssrc-group:FID").map(d=>d.substring(17).split(" ").map(g=>parseInt(g,10)));h.length>0&&h[0].length>1&&h[0][0]===c&&(l=h[0][1]),s.codecs.forEach(d=>{if(d.name.toUpperCase()==="RTX"&&d.parameters.apt){let p={ssrc:c,codecPayloadType:parseInt(d.parameters.apt,10)};c&&l&&(p.rtx={ssrc:l}),n.push(p),r&&(p=JSON.parse(JSON.stringify(p)),p.fec={ssrc:c,mechanism:o?"red+ulpfec":"red"},n.push(p))}}),n.length===0&&c&&n.push({ssrc:c});let u=e.matchPrefix(t,"b=");return u.length&&(u[0].indexOf("b=TIAS:")===0?u=parseInt(u[0].substring(7),10):u[0].indexOf("b=AS:")===0?u=parseInt(u[0].substring(5),10)*1e3*.95-2e3*8:u=void 0,n.forEach(d=>{d.maxBitrate=u})),n},e.parseRtcpParameters=function(t){const n={},s=e.matchPrefix(t,"a=ssrc:").map(a=>e.parseSsrcMedia(a)).filter(a=>a.attribute==="cname")[0];s&&(n.cname=s.value,n.ssrc=s.ssrc);const r=e.matchPrefix(t,"a=rtcp-rsize");n.reducedSize=r.length>0,n.compound=r.length===0;const o=e.matchPrefix(t,"a=rtcp-mux");return n.mux=o.length>0,n},e.writeRtcpParameters=function(t){let n="";return t.reducedSize&&(n+=`a=rtcp-rsize\r
`),t.mux&&(n+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(n+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),n},e.parseMsid=function(t){let n;const s=e.matchPrefix(t,"a=msid:");if(s.length===1)return n=s[0].substring(7).split(" "),{stream:n[0],track:n[1]};const r=e.matchPrefix(t,"a=ssrc:").map(o=>e.parseSsrcMedia(o)).filter(o=>o.attribute==="msid");if(r.length>0)return n=r[0].value.split(" "),{stream:n[0],track:n[1]}},e.parseSctpDescription=function(t){const n=e.parseMLine(t),s=e.matchPrefix(t,"a=max-message-size:");let r;s.length>0&&(r=parseInt(s[0].substring(19),10)),isNaN(r)&&(r=65536);const o=e.matchPrefix(t,"a=sctp-port:");if(o.length>0)return{port:parseInt(o[0].substring(12),10),protocol:n.fmt,maxMessageSize:r};const a=e.matchPrefix(t,"a=sctpmap:");if(a.length>0){const c=a[0].substring(10).split(" ");return{port:parseInt(c[0],10),protocol:c[1],maxMessageSize:r}}},e.writeSctpDescription=function(t,n){let s=[];return t.protocol!=="DTLS/SCTP"?s=["m="+t.kind+" 9 "+t.protocol+" "+n.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+n.port+`\r
`]:s=["m="+t.kind+" 9 "+t.protocol+" "+n.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+n.port+" "+n.protocol+` 65535\r
`],n.maxMessageSize!==void 0&&s.push("a=max-message-size:"+n.maxMessageSize+`\r
`),s.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,n,s){let r;const o=n!==void 0?n:2;return t?r=t:r=e.generateSessionId(),`v=0\r
o=`+(s||"thisisadapterortc")+" "+r+" "+o+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,n){const s=e.splitLines(t);for(let r=0;r<s.length;r++)switch(s[r]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return s[r].substring(2)}return n?e.getDirection(n):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const s=e.splitLines(t)[0].substring(2).split(" ");return{kind:s[0],port:parseInt(s[1],10),protocol:s[2],fmt:s.slice(3).join(" ")}},e.parseOLine=function(t){const s=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:s[0],sessionId:s[1],sessionVersion:parseInt(s[2],10),netType:s[3],addressType:s[4],address:s[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const n=e.splitLines(t);for(let s=0;s<n.length;s++)if(n[s].length<2||n[s].charAt(1)!=="=")return!1;return!0},i.exports=e})(jo)),jo.exports}var Bu=Lv();const is=Pv(Bu),Iv=ld({__proto__:null,default:is},[Bu]);function Fr(i){if(!i.RTCIceCandidate||i.RTCIceCandidate&&"foundation"in i.RTCIceCandidate.prototype)return;const e=i.RTCIceCandidate;i.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){const s=new e(n),r=is.parseCandidate(n.candidate);for(const o in r)o in s||Object.defineProperty(s,o,{value:r[o]});return s.toJSON=function(){return{candidate:s.candidate,sdpMid:s.sdpMid,sdpMLineIndex:s.sdpMLineIndex,usernameFragment:s.usernameFragment}},s}return new e(n)},i.RTCIceCandidate.prototype=e.prototype,Ci(i,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new i.RTCIceCandidate(t.candidate),writable:"false"}),t))}function Xa(i){!i.RTCIceCandidate||i.RTCIceCandidate&&"relayProtocol"in i.RTCIceCandidate.prototype||Ci(i,"icecandidate",e=>{if(e.candidate){const t=is.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function kr(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in i.RTCPeerConnection.prototype||Object.defineProperty(i.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(a){if(!a||!a.sdp)return!1;const c=is.splitSections(a.sdp);return c.shift(),c.some(l=>{const h=is.parseMLine(l);return h&&h.kind==="application"&&h.protocol.indexOf("SCTP")!==-1})},n=function(a){const c=a.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const l=parseInt(c[1],10);return l!==l?-1:l},s=function(a){let c=65536;return e.browser==="firefox"&&(e.version<57?a===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},r=function(a,c){let l=65536;e.browser==="firefox"&&e.version===57&&(l=65535);const h=is.matchPrefix(a.sdp,"a=max-message-size:");return h.length>0?l=parseInt(h[0].substring(19),10):e.browser==="firefox"&&c!==-1&&(l=2147483637),l},o=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const c=n(arguments[0]),l=s(c),h=r(arguments[0],c);let u;l===0&&h===0?u=Number.POSITIVE_INFINITY:l===0||h===0?u=Math.max(l,h):u=Math.min(l,h);const d={};Object.defineProperty(d,"maxMessageSize",{get(){return u}}),this._sctp=d}return o.apply(this,arguments)}}function Br(i,e){if(!(i.RTCPeerConnection&&"createDataChannel"in i.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(s,r){const o=s.send;s.send=function(){const c=arguments[0],l=c.length||c.size||c.byteLength;if(s.readyState==="open"&&r.sctp&&l>r.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+r.sctp.maxMessageSize+" bytes)");return o.apply(s,arguments)}}const n=i.RTCPeerConnection.prototype.createDataChannel;i.RTCPeerConnection.prototype.createDataChannel=function(){const r=n.apply(this,arguments);return t(r,this),r},Ci(i,"datachannel",s=>(t(s.channel,s.target),s))}function Ya(i){if(!i.RTCPeerConnection||"connectionState"in i.RTCPeerConnection.prototype)return;const e=i.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=s=>{const r=s.target;if(r._lastConnectionState!==r.connectionState){r._lastConnectionState=r.connectionState;const o=new Event("connectionstatechange",s);r.dispatchEvent(o)}return s},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function qa(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(s){if(s&&s.sdp&&s.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const r=s.sdp.split(`
`).filter(o=>o.trim()!=="a=extmap-allow-mixed").join(`
`);i.RTCSessionDescription&&s instanceof i.RTCSessionDescription?arguments[0]=new i.RTCSessionDescription({type:s.type,sdp:r}):s.sdp=r}return t.apply(this,arguments)}}function zr(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(i.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function Gr(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(i.RTCPeerConnection.prototype.setLocalDescription=function(){let s=arguments[0]||{};if(typeof s!="object"||s.type&&s.sdp)return t.apply(this,arguments);if(s={type:s.type,sdp:s.sdp},!s.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":s.type="offer";break;default:s.type="answer";break}return s.sdp||s.type!=="offer"&&s.type!=="answer"?t.apply(this,[s]):(s.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(o=>t.apply(this,[o]))})}const Dv=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:qa,shimAddIceCandidateNullOrEmpty:zr,shimConnectionState:Ya,shimMaxMessageSize:kr,shimParameterlessSetLocalDescription:Gr,shimRTCIceCandidate:Fr,shimRTCIceCandidateRelayProtocol:Xa,shimSendThrowTypeError:Br},Symbol.toStringTag,{value:"Module"}));function Uv({window:i}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=Ec,n=wv(i),s={browserDetails:n,commonShim:Dv,extractVersion:Us,disableLog:Cv,disableWarnings:Av,sdp:Iv};switch(n.browser){case"chrome":if(!ch||!Wa||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),s;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),s;t("adapter.js shimming chrome."),s.browserShim=ch,zr(i,n),Gr(i),uu(i,n),du(i),Wa(i,n),fu(i,n),_u(i,n),pu(i),mu(i,n),vu(i,n),Fr(i),Xa(i),Ya(i),kr(i,n),Br(i,n),qa(i,n);break;case"firefox":if(!lh||!$a||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),s;t("adapter.js shimming firefox."),s.browserShim=lh,zr(i,n),Gr(i),xu(i,n),$a(i,n),Mu(i,n),yu(i),Eu(i),Su(i),bu(i),Tu(i),Cu(i,n),Au(i,n),wu(i,n),Ru(i,n),Fr(i),Ya(i),kr(i,n),Br(i,n);break;case"safari":if(!hh||!e.shimSafari)return t("Safari shim is not included in this adapter release."),s;t("adapter.js shimming safari."),s.browserShim=hh,zr(i,n),Gr(i),Nu(i),Fu(i),Iu(i),Pu(i),Lu(i),Ou(i),Du(i),ku(i),Fr(i),Xa(i),kr(i,n),Br(i,n),qa(i,n);break;default:t("Unsupported browser!");break}return s}const dh=Uv({window:typeof window>"u"?void 0:window});function Ai(i,e,t,n){Object.defineProperty(i,e,{get:t,set:n,enumerable:!0,configurable:!0})}class zu{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],n=e.byteLength,s=Math.ceil(n/this.chunkedMTU);let r=0,o=0;for(;o<n;){const a=Math.min(n,o+this.chunkedMTU),c=e.slice(o,a),l={__peerData:this._dataCount,n:r,data:c,total:s};t.push(l),o=a,r++}return this._dataCount++,t}}}function Nv(i){let e=0;for(const s of i)e+=s.byteLength;const t=new Uint8Array(e);let n=0;for(const s of i)t.set(s,n),n+=s.byteLength;return t}const Ko=dh.default||dh,Ls=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const i=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(i)?i==="chrome"?e>=this.minChromeVersion:i==="firefox"?e>=this.minFirefoxVersion:i==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return Ko.browserDetails.browser}getVersion(){return Ko.browserDetails.version||0}isUnifiedPlanSupported(){const i=this.getBrowser(),e=Ko.browserDetails.version||0;if(i==="chrome"&&e<this.minChromeVersion)return!1;if(i==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},Ov=i=>!i||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(i),Gu=()=>Math.random().toString(36).slice(2),fh={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class Fv extends zu{noop(){}blobToArrayBuffer(e,t){const n=new FileReader;return n.onload=function(s){s.target&&t(s.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=fh,this.browser=Ls.getBrowser(),this.browserVersion=Ls.getVersion(),this.pack=au,this.unpack=ou,this.supports=(function(){const t={browser:Ls.isBrowserSupported(),webRTC:Ls.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(fh),t.audioVideo=!0;let s;try{s=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!s.ordered;try{s.binaryType="blob",t.binaryBlob=!Ls.isIOS}catch{}}catch{}finally{s&&s.close()}}catch{}finally{n&&n.close()}return t})(),this.validateId=Ov,this.randomToken=Gu}}const Ot=new Fv,kv="PeerJS: ";class Bv{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const n=[kv,...t];for(const s in n)n[s]instanceof Error&&(n[s]="("+n[s].name+") "+n[s].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}}var _e=new Bv,Cc={},zv=Object.prototype.hasOwnProperty,Dt="~";function Xs(){}Object.create&&(Xs.prototype=Object.create(null),new Xs().__proto__||(Dt=!1));function Gv(i,e,t){this.fn=i,this.context=e,this.once=t||!1}function Hu(i,e,t,n,s){if(typeof t!="function")throw new TypeError("The listener must be a function");var r=new Gv(t,n||i,s),o=Dt?Dt+e:e;return i._events[o]?i._events[o].fn?i._events[o]=[i._events[o],r]:i._events[o].push(r):(i._events[o]=r,i._eventsCount++),i}function Hr(i,e){--i._eventsCount===0?i._events=new Xs:delete i._events[e]}function Rt(){this._events=new Xs,this._eventsCount=0}Rt.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)zv.call(t,n)&&e.push(Dt?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};Rt.prototype.listeners=function(e){var t=Dt?Dt+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var s=0,r=n.length,o=new Array(r);s<r;s++)o[s]=n[s].fn;return o};Rt.prototype.listenerCount=function(e){var t=Dt?Dt+e:e,n=this._events[t];return n?n.fn?1:n.length:0};Rt.prototype.emit=function(e,t,n,s,r,o){var a=Dt?Dt+e:e;if(!this._events[a])return!1;var c=this._events[a],l=arguments.length,h,u;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,s),!0;case 5:return c.fn.call(c.context,t,n,s,r),!0;case 6:return c.fn.call(c.context,t,n,s,r,o),!0}for(u=1,h=new Array(l-1);u<l;u++)h[u-1]=arguments[u];c.fn.apply(c.context,h)}else{var d=c.length,p;for(u=0;u<d;u++)switch(c[u].once&&this.removeListener(e,c[u].fn,void 0,!0),l){case 1:c[u].fn.call(c[u].context);break;case 2:c[u].fn.call(c[u].context,t);break;case 3:c[u].fn.call(c[u].context,t,n);break;case 4:c[u].fn.call(c[u].context,t,n,s);break;default:if(!h)for(p=1,h=new Array(l-1);p<l;p++)h[p-1]=arguments[p];c[u].fn.apply(c[u].context,h)}}return!0};Rt.prototype.on=function(e,t,n){return Hu(this,e,t,n,!1)};Rt.prototype.once=function(e,t,n){return Hu(this,e,t,n,!0)};Rt.prototype.removeListener=function(e,t,n,s){var r=Dt?Dt+e:e;if(!this._events[r])return this;if(!t)return Hr(this,r),this;var o=this._events[r];if(o.fn)o.fn===t&&(!s||o.once)&&(!n||o.context===n)&&Hr(this,r);else{for(var a=0,c=[],l=o.length;a<l;a++)(o[a].fn!==t||s&&!o[a].once||n&&o[a].context!==n)&&c.push(o[a]);c.length?this._events[r]=c.length===1?c[0]:c:Hr(this,r)}return this};Rt.prototype.removeAllListeners=function(e){var t;return e?(t=Dt?Dt+e:e,this._events[t]&&Hr(this,t)):(this._events=new Xs,this._eventsCount=0),this};Rt.prototype.off=Rt.prototype.removeListener;Rt.prototype.addListener=Rt.prototype.on;Rt.prefixed=Dt;Rt.EventEmitter=Rt;Cc=Rt;var wi={};Ai(wi,"ConnectionType",()=>Kn);Ai(wi,"PeerErrorType",()=>_t);Ai(wi,"BaseConnectionErrorType",()=>ja);Ai(wi,"DataConnectionErrorType",()=>Ac);Ai(wi,"SerializationType",()=>co);Ai(wi,"SocketEventType",()=>Wn);Ai(wi,"ServerMessageType",()=>At);var Kn=(function(i){return i.Data="data",i.Media="media",i})({}),_t=(function(i){return i.BrowserIncompatible="browser-incompatible",i.Disconnected="disconnected",i.InvalidID="invalid-id",i.InvalidKey="invalid-key",i.Network="network",i.PeerUnavailable="peer-unavailable",i.SslUnavailable="ssl-unavailable",i.ServerError="server-error",i.SocketError="socket-error",i.SocketClosed="socket-closed",i.UnavailableID="unavailable-id",i.WebRTC="webrtc",i})({}),ja=(function(i){return i.NegotiationFailed="negotiation-failed",i.ConnectionClosed="connection-closed",i})({}),Ac=(function(i){return i.NotOpenYet="not-open-yet",i.MessageToBig="message-too-big",i})({}),co=(function(i){return i.Binary="binary",i.BinaryUTF8="binary-utf8",i.JSON="json",i.None="raw",i})({}),Wn=(function(i){return i.Message="message",i.Disconnected="disconnected",i.Error="error",i.Close="close",i})({}),At=(function(i){return i.Heartbeat="HEARTBEAT",i.Candidate="CANDIDATE",i.Offer="OFFER",i.Answer="ANSWER",i.Open="OPEN",i.Error="ERROR",i.IdTaken="ID-TAKEN",i.InvalidKey="INVALID-KEY",i.Leave="LEAVE",i.Expire="EXPIRE",i})({});const Vu="1.5.5";class Hv extends Cc.EventEmitter{constructor(e,t,n,s,r,o=5e3){super(),this.pingInterval=o,this._disconnected=!0,this._messagesQueue=[];const a=e?"wss://":"ws://";this._baseUrl=a+t+":"+n+s+"peerjs?key="+r}start(e,t){this._id=e;const n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+Vu),this._disconnected=!1,this._socket.onmessage=s=>{let r;try{r=JSON.parse(s.data),_e.log("Server message received:",r)}catch{_e.log("Invalid server message",s.data);return}this.emit(Wn.Message,r)},this._socket.onclose=s=>{this._disconnected||(_e.log("Socket closed.",s),this._cleanup(),this._disconnected=!0,this.emit(Wn.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),_e.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){_e.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:At.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(Wn.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class Wu{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===Kn.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const n=this.connection,s={ordered:!!e.reliable},r=t.createDataChannel(n.label,s);n._initializeDataChannel(r),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){_e.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,n=this.connection.connectionId,s=this.connection.type,r=this.connection.provider;_e.log("Listening for ICE candidates."),e.onicecandidate=o=>{!o.candidate||!o.candidate.candidate||(_e.log(`Received ICE candidates for ${t}:`,o.candidate),r.socket.send({type:At.Candidate,payload:{candidate:o.candidate,type:s,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":_e.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(ja.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":_e.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(ja.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":_e.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},_e.log("Listening for data channel"),e.ondatachannel=o=>{_e.log("Received data channel");const a=o.channel;r.getConnection(t,n)._initializeDataChannel(a)},_e.log("Listening for remote stream"),e.ontrack=o=>{_e.log("Received remote stream");const a=o.streams[0],c=r.getConnection(t,n);if(c.type===Kn.Media){const l=c;this._addStreamToMediaConnection(a,l)}}}cleanup(){_e.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let n=!1;const s=this.connection.dataChannel;s&&(n=!!s.readyState&&s.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createOffer(this.connection.options.constraints);_e.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),_e.log("Set localDescription:",n,`for:${this.connection.peer}`);let s={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===Kn.Data){const r=this.connection;s={...s,label:r.label,reliable:r.reliable,serialization:r.serialization}}t.socket.send({type:At.Offer,payload:s,dst:this.connection.peer})}catch(s){s!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(_t.WebRTC,s),_e.log("Failed to setLocalDescription, ",s))}}catch(n){t.emitError(_t.WebRTC,n),_e.log("Failed to createOffer, ",n)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createAnswer();_e.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),_e.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:At.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(s){t.emitError(_t.WebRTC,s),_e.log("Failed to setLocalDescription, ",s)}}catch(n){t.emitError(_t.WebRTC,n),_e.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const n=this.connection.peerConnection,s=this.connection.provider;_e.log("Setting remote description",t);const r=this;try{await n.setRemoteDescription(t),_e.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await r._makeAnswer()}catch(o){s.emitError(_t.WebRTC,o),_e.log("Failed to setRemoteDescription, ",o)}}async handleCandidate(e){_e.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),_e.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(_t.WebRTC,t),_e.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(_e.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return _e.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){_e.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class $u extends Cc.EventEmitter{emitError(e,t){_e.error("Error:",t),this.emit("error",new Vv(`${e}`,t))}}class Vv extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class Xu extends $u{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}}var tc;const zs=class zs extends Xu{get type(){return Kn.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||zs.ID_PREFIX+Ot.randomToken(),this._negotiator=new Wu(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{_e.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{_e.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){_e.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,n=e.payload;switch(e.type){case At.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case At.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:_e.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){_e.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const n=this.provider._getMessages(this.connectionId);for(const s of n)this.handleMessage(s);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};tc=new WeakMap,xs(zs,tc,zs.ID_PREFIX="mc_");let Jr=zs;class Wv{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:n,port:s,path:r,key:o}=this._options,a=new URL(`${t}://${n}:${s}${r}${o}/${e}`);return a.searchParams.set("ts",`${Date.now()}${Math.random()}`),a.searchParams.set("version",Vu),fetch(a.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){_e.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==Ot.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===Ot.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw _e.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}var nc,ic;const fi=class fi extends Xu{get type(){return Kn.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||fi.ID_PREFIX+Gu(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new Wu(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{_e.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{_e.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{_e.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(Ac.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case At.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case At.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:_e.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}};nc=new WeakMap,ic=new WeakMap,xs(fi,nc,fi.ID_PREFIX="dc_"),xs(fi,ic,fi.MAX_BUFFERED_AMOUNT=8388608);let Qr=fi;class wc extends Qr{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>Qr.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return _e.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class Zo extends wc{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new zu,this.serialization=co.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=ou(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];const s=Nv(n.data);this._handleDataMessage({data:s})}}_send(e,t){const n=au(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);_e.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const n of t)this.send(n,!0)}}class $v extends wc{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=co.None}}class Xv extends wc{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const n=this.encoder.encode(this.stringify(e));if(n.byteLength>=Ot.chunkedMTU){this.emitError(Ac.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=co.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var sc;const Gs=class Gs extends $u{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:$v,json:Xv,binary:Zo,"binary-utf8":Zo,default:Zo},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:Ot.CLOUD_HOST,port:Ot.CLOUD_PORT,path:"/",key:Gs.DEFAULT_KEY,token:Ot.randomToken(),config:Ot.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==Ot.CLOUD_HOST?this._options.secure=Ot.isSecure():this._options.host==Ot.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&_e.setLogFunction(this._options.logFunction),_e.logLevel=this._options.debug||0,this._api=new Wv(t),this._socket=this._createServerConnection(),!Ot.supports.audioVideo&&!Ot.supports.data){this._delayedAbort(_t.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!Ot.validateId(n)){this._delayedAbort(_t.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(s=>this._initialize(s)).catch(s=>this._abort(_t.ServerError,s))}_createServerConnection(){const e=new Hv(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(Wn.Message,t=>{this._handleMessage(t)}),e.on(Wn.Error,t=>{this._abort(_t.SocketError,t)}),e.on(Wn.Disconnected,()=>{this.disconnected||(this.emitError(_t.Network,"Lost connection to server."),this.disconnect())}),e.on(Wn.Close,()=>{this.disconnected||this._abort(_t.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,n=e.payload,s=e.src;switch(t){case At.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case At.Error:this._abort(_t.ServerError,n.msg);break;case At.IdTaken:this._abort(_t.UnavailableID,`ID "${this.id}" is taken`);break;case At.InvalidKey:this._abort(_t.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case At.Leave:_e.log(`Received leave message from ${s}`),this._cleanupPeer(s),this._connections.delete(s);break;case At.Expire:this.emitError(_t.PeerUnavailable,`Could not connect to peer ${s}`);break;case At.Offer:{const r=n.connectionId;let o=this.getConnection(s,r);if(o&&(o.close(),_e.warn(`Offer received for existing Connection ID:${r}`)),n.type===Kn.Media){const c=new Jr(s,this,{connectionId:r,_payload:n,metadata:n.metadata});o=c,this._addConnection(s,o),this.emit("call",c)}else if(n.type===Kn.Data){const c=new this._serializers[n.serialization](s,this,{connectionId:r,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});o=c,this._addConnection(s,o),this.emit("connection",c)}else{_e.warn(`Received malformed connection type:${n.type}`);return}const a=this._getMessages(r);for(const c of a)o.handleMessage(c);break}default:{if(!n){_e.warn(`You received a malformed message from ${s} of type ${t}`);return}const r=n.connectionId,o=this.getConnection(s,r);o&&o.peerConnection?o.handleMessage(e):r?this._storeMessage(r,e):_e.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){_e.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(_t.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){_e.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(_t.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){_e.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const s=new Jr(e,this,{...n,_stream:t});return this._addConnection(e,s),s}_addConnection(e,t){_e.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const n=this._connections.get(e);if(!n)return null;for(const s of n)if(s.connectionId===t)return s;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){_e.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(_e.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const n of t)n.close()}disconnect(){if(this.disconnected)return;const e=this.id;_e.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)_e.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)_e.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(_t.ServerError,t))}};sc=new WeakMap,xs(Gs,sc,Gs.DEFAULT_KEY="peerjs");let Ka=Gs;var ph=Ka;const mh={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun.cloudflare.com:3478"}]},gh="abcdefghjkmnpqrstuvwxyz23456789";function _h(i=8){const e=new Uint8Array(i);return crypto.getRandomValues(e),[...e].map(t=>gh[t%gh.length]).join("")}function Yv(i){let e="";for(let t=0;t<i.length;t+=32768)e+=String.fromCharCode(...i.subarray(t,t+32768));return btoa(e)}function qv(i){const e=atob(i),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}async function jv(i){const e=new Blob([i]).stream().pipeThrough(new CompressionStream("deflate-raw"));return new Uint8Array(await new Response(e).arrayBuffer())}async function Kv(i){const e=new Blob([i]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return new Uint8Array(await new Response(e).arrayBuffer())}function Zv(i,e){const t=document.createElement("canvas");t.width=256,t.height=64;const n=t.getContext("2d");n.fillStyle="rgba(12,18,32,0.82)",n.fillRect(8,8,240,48),n.fillStyle=e,n.font="bold 28px sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(String(i).slice(0,12),128,32);const s=new yc(new ao({map:new gi(t),transparent:!0}));return s.position.y=1.35,s.scale.set(1.8,.45,1),s}function Jv(i,e){const t=new Ft,n=new ft({color:e}),s=new rt(new ut(.46,.72,.28),n);s.position.y=.7;const r=new rt(new ut(.32,.32,.32),n);return r.position.y=1.22,t.add(s,r,Zv(i,"#ffffff")),t}function Qv({world:i,player:e,agents:t,scene:n,getDay:s,setDay:r,toast:o}){let a="solo",c=null,l=null;const h=new Map,u=new Map,d=new Map,p=new Map;let g=null,_=null,m=0;const f=[];let C="",T=0,S=0,R=[],w=0,A=1,k=0;const b=localStorage.getItem("playerName")||"旅人",x={box:document.getElementById("room-box"),title:document.getElementById("room-title"),status:document.getElementById("room-status"),name:document.getElementById("room-name"),host:document.getElementById("room-host"),invite:document.getElementById("room-invite"),code:document.getElementById("room-code"),copy:document.getElementById("room-copy"),form:document.getElementById("room-join"),input:document.getElementById("room-input"),leave:document.getElementById("room-leave"),list:document.getElementById("room-people"),toggle:document.getElementById("room-toggle")};x.name.value=b;function P(){const M=x.name.value.trim().slice(0,12)||"旅人";return localStorage.setItem("playerName",M),M}function W(){const M=`${a}|${g}|`+[...p.entries()].map(([B,Q])=>`${B}:${Q}`).join(",");x.toggle.textContent=a==="solo"?"多人":`多人 ${Math.max(1,p.size)}`,x.toggle.classList.toggle("on",a!=="solo"),x.leave.hidden=a==="solo",x.host.hidden=a!=="solo",x.form.hidden=a!=="solo",document.getElementById("buddy-toggle").classList.toggle("on",(e.fish||0)>0&&a!=="solo"),M!==C&&(C=M,x.list.innerHTML=[...p.entries()].map(([B,Q])=>B===Re()?`<li><span>${Q}</span></li>`:`<li><span>${Q}</span><button type="button" data-watch="${B}">${g===B?"回到自己":"看他"}</button></li>`).join(""))}function V(){const M=document.getElementById("watch-bar"),L=g?u.get(g):null;if(!L){M.hidden=!0,g=null;return}M.hidden=!1;const B=L.bask?"正在海边晒太阳":L.act?L.act:"自己在操作";M.textContent=`正在看 ${L.name} · ${B} · 点此回到自己`}function q(M){x.status.textContent=M}function ee(){x.box.hidden=!1,document.body.classList.add("room-open")}function K(){x.box.hidden=!0,document.body.classList.remove("room-open")}function ne(){const M=new URL(location.href);M.searchParams.has("room")&&(M.searchParams.delete("room"),history.replaceState(null,"",M.pathname+M.search+M.hash))}function $(M){const L=new URL(location.href);return L.search="",L.hash="",L.searchParams.set("room",M),L.toString()}function ae(){t.frozen=!0;for(const M of[...t.agents,...t.dead])M.mesh&&(M.mesh.visible=!1),M.grave&&(M.grave.visible=!1);t.agents=[],t.dead=[]}function me(M,L,B,Q){i.inBounds(M,L,B)&&(i.silentEdit=!0,i.set(M,L,B,Q),i.markDirty(),i.silentEdit=!1)}function Ee(M,L,B,Q){const le={t:"block",x:M,y:L,z:B,id:Q};a==="host"?we(le):Je(le)}function He(){return(i.crafts||[]).slice(0,60).map(M=>({nid:M.userData.nid,kind:M.userData.kind,name:M.userData.kind,x:+M.position.x.toFixed(2),y:+M.position.y.toFixed(2),z:+M.position.z.toFixed(2),rot:+M.rotation.y.toFixed(3)}))}function Ze(){return[...t.agents,...t.dead].slice(0,80).map(M=>({id:M.id,name:M.name,x:+M.pos.x.toFixed(2),y:+M.pos.y.toFixed(2),z:+M.pos.z.toFixed(2),yaw:+M.yaw.toFixed(2),alive:M.alive?1:0}))}function j(){return(i.critters||[]).slice(0,48).map(M=>({id:M.id,k:M.kind,species:M.species,x:+M.mesh.position.x.toFixed(2),y:+M.mesh.position.y.toFixed(2),z:+M.mesh.position.z.toFixed(2),ry:+M.mesh.rotation.y.toFixed(2),gone:M.gone?1:0}))}function ie(M,L,B,Q=1){let le=d.get(M);return le||(le=Jv(L||"人",B),le.scale.y=Q,n.add(le),d.set(M,le)),le}function ve(M){const L=new Set;for(const B of M||[]){L.add(`a${B.id}`);const Q=ie(`a${B.id}`,B.name,B.alive?12886122:9276813,B.alive?1:.55);Q.visible=!0,Q.position.set(B.x,B.y,B.z),Q.rotation.y=B.yaw||0}for(const[B,Q]of d)!B.startsWith("a")||L.has(B)||(n.remove(Q),d.delete(B))}function oe(M){const L=new Set;p.clear(),p.set(Re(),`${P()}（你）`);for(const B of M||[])u.set(B.id,B);for(const B of M||[]){if(!(B!=null&&B.id)||B.id===Re())continue;L.add(`p${B.id}`),p.set(B.id,B.name||"旅人");const Q=ie(`p${B.id}`,B.name||"旅人",8304383);Q.visible=B.id!==g,Q.rotation.z=B.bask?Math.PI/2:0,Q.rotation.y=B.yaw||0,Q.position.set(B.x,B.bask?B.y-1.15:B.y-1.45,B.z),Ae(B)}for(const[B,Q]of d)!B.startsWith("p")||L.has(B)||(n.remove(Q),d.delete(B));W(),V()}function Ae(M){var B;if(!M.ride||((B=e.ride)==null?void 0:B.userData.nid)===M.ride.nid)return;const L=(i.crafts||[]).find(Q=>Q.userData.nid===M.ride.nid);L&&(L.position.set(M.ride.x,M.ride.y,M.ride.z),L.rotation.y=M.ride.ry||0,L.rotation.x=M.ride.rx||0)}function Ie(M){const L=Sc.find(B=>B.id===M.kind);L&&bc(i,L,M.x,M.z,{silent:!0,nid:M.nid,rot:M.rot,y:M.y})}function we(M,L){for(const[B,Q]of h)B===L||!Q.open||Q.send(M)}function Je(M){for(const L of h.values())L.open&&L.send(M)}function Re(){return(c==null?void 0:c.id)||"solo"}function ht(){const M=e.ride;return{t:"pose",id:Re(),name:P(),x:+e.pos.x.toFixed(2),y:+e.pos.y.toFixed(2),z:+e.pos.z.toFixed(2),yaw:+e.yaw.toFixed(3),pitch:+e.pitch.toFixed(3),bask:e.bask&&performance.now()<e.bask.until?1:0,act:e.bask&&performance.now()<e.bask.until?"晒太阳":"",day:s(),ride:M?{nid:M.userData.nid,x:+M.position.x.toFixed(2),y:+M.position.y.toFixed(2),z:+M.position.z.toFixed(2),ry:+M.rotation.y.toFixed(3),rx:+M.rotation.x.toFixed(3)}:null}}async function F(M){let L=i.blocks,B=0;try{const De=await jv(i.blocks);De.length<i.blocks.length&&(L=De,B=1)}catch{L=i.blocks}const Q=Yv(L),le=[];for(let De=0;De<Q.length;De+=6e3)le.push(Q.slice(De,De+6e3));const ge={x:Math.max(2,Math.min(i.size-3,e.pos.x+2+h.size)),z:Math.max(2,Math.min(i.size-3,e.pos.z+1))};M.send({t:"meta",n:le.length,zip:B,raw:i.blocks.length,agents:Ze(),crafts:He(),critters:j(),day:s(),weather:i.weatherSnap(),spawn:ge}),le.forEach((De,Ne)=>M.send({t:"w",i:Ne,d:De}))}async function Ut(M){if(R.length!==w||R.some(le=>le==null))return;const L=qv(R.join("")),B=A?await Kv(L):L;if(B.length!==k){q("世界没有同步完整，请再加入一次"),e.syncing=!1;return}i.applyBlocks(B);for(const le of[...i.crafts||[]])i.scene.remove(le);i.crafts=[];for(const le of M.crafts||[])Ie(le);ae(),ve(M.agents),i.syncCritters(M.critters||[]),M.day!=null&&(l=M.day,r(M.day)),M.weather&&i.applyWeather(M.weather);const Q=i.walkSurfaceY(Math.floor(M.spawn.x),Math.floor(M.spawn.z))+1.6;e.pos.set(M.spawn.x,Q,M.spawn.z),e.syncing=!1,q("你已进入这个共享世界"),o("已进入邀请的世界"),W()}function Xe(M,L){var B;if(!(!M||typeof M!="object")){if(M.t==="join"&&a==="host"){const Q=h.get(L);if(!Q)return;if(h.size>5){Q.send({t:"full"}),Q.close();return}p.set(L,M.name||"旅人"),W(),o(`${M.name||"有人"} 进入了世界`),F(Q);return}if(M.t==="full"){q("这个世界的人已经满了"),o("这个世界的人已经满了");return}if(M.t==="meta"){w=M.n,A=M.zip,k=M.raw,R=Array(w),R.meta=M,e.syncing=!0,q("正在同步世界…");return}if(M.t==="w"){R[M.i]=M.d,R.meta&&R.filter(Boolean).length===w&&Ut(R.meta).catch(()=>{e.syncing=!1,q("世界同步失败，请再加入一次")});return}if(M.t==="block"){me(M.x,M.y,M.z,M.id),a==="host"&&we(M,L);return}if(M.t==="craft"){Ie(M),a==="host"&&we(M,L);return}if(M.t==="pose"&&a==="host"){u.set(L,{...M,id:L}),p.set(L,M.name||"旅人");return}if(M.t==="catch"&&a==="host"){const Q=(i.critters||[]).find(le=>le.id===M.id&&!le.gone);Q&&(i.silentCatch=!0,i.collectCritter(Q),i.silentCatch=!1),Y(L),we({t:"caught",id:M.id,by:L},L);return}if(M.t==="caught"){const Q=(i.critters||[]).find(le=>le.id===M.id&&!le.gone);Q&&(i.silentCatch=!0,i.collectCritter(Q),i.silentCatch=!1);return}if(M.t==="buddy-ask"){if(a==="host"&&M.to!==Re()){(B=h.get(M.to))==null||B.send(M);return}xe(M.name,M.from);return}if(M.t==="buddy-yes"&&a==="host"){_={a:M.asker,b:L,got:new Set,done:!1},we({t:"buddy-on"}),o("摸鱼搭子到了。再各摸一条鱼，就去海边晒太阳");return}if(M.t==="buddy-on"){o("摸鱼搭子到了。再各摸一条鱼，就去海边晒太阳");return}if(M.t==="buddy-progress"&&M.who!==Re()){o(`${M.name||"搭子"}摸到了，你也再摸一条就能晒太阳`);return}if(M.t==="bask"){Z(M);return}M.t==="players"&&(oe(M.list),M.day!=null&&(l=M.day),M.weather&&i.applyWeather(M.weather),M.agents&&ve(M.agents),M.critters&&i.syncCritters(M.critters))}}function $e(M){const L=M.peer;h.set(L,M),M.on("data",B=>Xe(B,L)),M.on("close",()=>{h.delete(L),u.delete(L),p.delete(L);const B=d.get(`p${L}`);B&&(n.remove(B),d.delete(`p${L}`)),W(),a==="guest"?(e.syncing=!1,q("房主断开了。点离开，回到自己的世界"),o("共享世界断开了")):o("有人离开了世界")}),M.on("error",()=>{})}function Te(){for(const M of h.values())M.close();h.clear(),c==null||c.destroy(),c=null}function it(M){Te(),a="host",i.peerTag=M,p.clear(),p.set(M,`${P()}（你）`),c=new ph(M,{config:mh,serialization:"json"}),c.on("open",()=>{x.code.textContent=M,x.invite.hidden=!1,x.title.textContent="你在主持这个世界",q("把链接发给朋友。只有拿到链接的人能进来。"),W(),o("邀请已准备好")}),c.on("connection",L=>{$e(L),L.on("open",()=>{})}),c.on("error",L=>{if(String(L==null?void 0:L.type)==="unavailable-id"){it(_h());return}a="solo",q("邀请服务连不上。请稍后再试，或换一个网络。"),o("创建邀请失败"),W()})}function Ce(M){const L=String(M||"").trim().toLowerCase();if(!/^[a-z0-9]{6,16}$/.test(L)){o("口令不对");return}Te(),a="guest",e.syncing=!0,i.peerTag="guest",q("正在连接邀请的世界…"),x.title.textContent="正在加入",c=new ph(void 0,{config:mh,serialization:"json"}),c.on("open",()=>{const B=c.connect(L,{reliable:!0,serialization:"json"});$e(B),B.on("open",()=>{B.send({t:"join",name:P(),id:c.id}),x.title.textContent="共享世界",q("已连上，正在接收世界…")})}),c.on("error",()=>{e.syncing=!1,a="solo",q("加入失败。请确认房主还开着页面，并且口令正确。"),o("加入失败"),W()}),W()}let E=null;function v(){e.fish=(e.fish||0)+1,o(e.fish===1?"摸到一条鱼。可以找摸鱼搭子一起再摸":`又摸到一条鱼，一共 ${e.fish} 条`),W()}function z(){for(const M of f)n.remove(M);f.length=0}function Z(M){z(),m=performance.now()+9e3,g=null;for(const L of M.spots||[]){const B=new rt(new ut(1.15,.05,.62),new ft({color:15980449}));B.position.set(L.x,L.y,L.z),n.add(B),f.push(B),L.id===Re()&&e.startBask(L.x,L.y,L.z)}o("摸到鱼了，两个人在海边躺着晒太阳"),V()}function te(){if(!_||_.done)return;_.done=!0;const M=i.findBeach(),L=M?M.y:i.walkSurfaceY(Math.floor(e.pos.x),Math.floor(e.pos.z))+.22,B=M||{x:e.pos.x,y:L,z:e.pos.z},Q={t:"bask",spots:[{id:_.a,x:B.x,y:B.y,z:B.z},{id:_.b,x:B.x+1.35,y:B.y,z:B.z}]};Z(Q),we(Q)}function Y(M){if(!_||_.done||M!==_.a&&M!==_.b||_.got.has(M))return;_.got.add(M);const L=M===Re()?P():p.get(M)||"搭子";we({t:"buddy-progress",who:M,name:L}),_.got.has(_.a)&&_.got.has(_.b)?te():o(`${L}摸到了，还差一个人`)}function xe(M,L){E=L,document.getElementById("buddy-from").textContent=M||"朋友",document.getElementById("buddy-prompt").hidden=!1}function ce(){var Q;if(a==="solo"){o("先邀请朋友进同一个世界，再找摸鱼搭子"),ee();return}if((e.fish||0)<1){o("先到海边摸一条鱼。手对准鱼，点挖");return}const M=[...p.keys()].filter(le=>le!==Re());if(!M.length){o("等朋友加入后，再一起摸鱼");return}const L=g&&M.includes(g)?g:M[0],B={t:"buddy-ask",from:Re(),name:P(),to:L};a==="host"?((Q=h.get(L))==null||Q.send(B),o(`已约 ${p.get(L)||"对方"} 一起摸鱼`)):Je(B)}i.onCatch=M=>{if(!(i.silentCatch||a==="solo")){if(a==="guest"){v(),Je({t:"catch",id:M.id});return}v(),Y(Re()),we({t:"caught",id:M.id,by:Re()})}},i.onEdit=(M,L,B,Q)=>{a==="solo"||i.silentEdit||Ee(M,L,B,Q)},i.onCraft=M=>{if(a==="solo")return;const L={t:"craft",nid:M.userData.nid,kind:M.userData.kind,x:M.position.x,y:M.position.y,z:M.position.z,rot:M.rotation.y};a==="host"?we(L):Je(L)},x.toggle.addEventListener("pointerup",M=>{M.preventDefault(),M.stopPropagation(),x.box.hidden?ee():K()}),document.getElementById("room-close").addEventListener("pointerup",M=>{M.preventDefault(),K(),a==="solo"&&ne()}),x.host.addEventListener("pointerup",M=>{M.preventDefault(),it(_h())}),x.copy.addEventListener("pointerup",async M=>{M.preventDefault();const L=$(x.code.textContent.trim());try{await navigator.clipboard.writeText(L),o("邀请链接已复制")}catch{o(L)}}),x.form.addEventListener("submit",M=>{M.preventDefault(),Ce(x.input.value)}),x.leave.addEventListener("pointerup",M=>{M.preventDefault(),ne(),location.href=location.pathname}),x.list.addEventListener("pointerup",M=>{const L=M.target.closest("[data-watch]");L&&(M.preventDefault(),M.stopPropagation(),g=g===L.dataset.watch?null:L.dataset.watch,C="",W(),V(),o(g?"切到对方视角。对方仍在自己操作":"回到自己的视角"))}),document.getElementById("watch-bar").addEventListener("pointerup",M=>{M.preventDefault(),g=null,C="",W(),V()}),document.getElementById("buddy-toggle").addEventListener("pointerup",M=>{M.preventDefault(),M.stopPropagation(),ce()}),document.getElementById("buddy-yes").addEventListener("pointerup",M=>{M.preventDefault(),document.getElementById("buddy-prompt").hidden=!0,E&&(a==="host"?(_={a:E,b:Re(),got:new Set,done:!1},we({t:"buddy-on"}),o("摸鱼搭子到了。再各摸一条鱼，就去海边晒太阳")):Je({t:"buddy-yes",asker:E}),E=null)}),document.getElementById("buddy-no").addEventListener("pointerup",M=>{M.preventDefault(),document.getElementById("buddy-prompt").hidden=!0,E=null,o("这回先各自摸鱼")});const pe=new URLSearchParams(location.search).get("room");return pe&&(x.input.value=pe,ee(),x.title.textContent="收到邀请",q("有人邀请你进入同一个世界。点加入就进去，关掉则继续自己玩。")),{role:()=>a,day:()=>l,view:()=>g?u.get(g):null,tick(M){if(a==="solo"||(T+=M,S+=M,T<.12))return;T=0;const L=ht();if(a==="guest"){Je(L);return}u.set(Re(),L);const B=[...u.values()],Q={t:"players",list:B,day:s(),weather:i.weatherSnap(),critters:j()};S>.45&&(S=0,Q.agents=Ze()),m&&performance.now()>m&&(m=0,z()),we(Q),oe(B)}}}const Pr=document.querySelector('meta[name="viewport"]');if(Pr&&window.visualViewport&&window.visualViewport.scale>1.01){const i=Pr.content;Pr.content="width=device-width, initial-scale=1, maximum-scale=1",requestAnimationFrame(()=>{Pr.content=i})}const Rc=document.getElementById("game"),Qn=new xv,Ks=new A_({canvas:Rc,antialias:!0});Ks.setPixelRatio(Math.min(devicePixelRatio,2));Ks.setSize(window.innerWidth,window.innerHeight);Ks.shadowMap.enabled=!0;const Wt=new w_;Wt.background=new ze(8894463);Wt.fog=new xc(8894463,40,110);const Ht=new Kt(70,window.innerWidth/window.innerHeight,.1,180),Za=new D_(11653375,4020794,.55);Wt.add(Za);const ln=new O_(16773841,1.1);ln.position.set(30,50,10);ln.castShadow=!0;ln.shadow.mapSize.set(1024,1024);ln.shadow.camera.left=-40;ln.shadow.camera.right=40;ln.shadow.camera.top=40;ln.shadow.camera.bottom=-40;Wt.add(ln);const _i=new rt(new Mc(.42,.62,28),new Ws({color:16769162,side:fn,transparent:!0,opacity:.9}));_i.rotation.x=-Math.PI/2;_i.visible=!1;Wt.add(_i);const vt=new Y_(Wt),qe=new _v(vt,Qn),Pe=new vv(Ht,vt,Rc);function vi(){const i=document.getElementById("hotbar");if(!i)return;const e=Pe.pickaxe?`镐:${Pe.pickaxe==="stone"?"石":"木"}`:"镐:无",t=[`浆果${Pe.bag[D.BERRY]||0}`,...Pe.foodNames().map(n=>`${n}${Pe.bag[n]}`)];i.innerHTML=Pe.hotbar.map((n,s)=>{const r=_n[n],o=Pe.bag[n]||0;return`<button type="button" class="hot-slot ${s===Pe.slot?"active":""}" data-slot="${s}"><span>${(r==null?void 0:r.name)||n}</span><b>${o}</b></button>`}).join("")+`<div class="hot-slot"><span>${e}</span><b>铁${Pe.bag.iron||0}</b></div><div class="hot-slot"><span>食物</span><b>${t.join(" ")}</b></div>`}let eo=0;function ex(){let i=null,e=4.5;for(const s of qe.agents){if(!s.alive)continue;const r=s.pos.distanceTo(Pe.pos);r<e&&(e=r,i=s)}if(!i)return"身边没有人。走近一个人再喂";const t=Pe.foodNames()[0],n=(Pe.bag[D.BERRY]||0)>0?"浆果":t;return n?(n==="浆果"?Pe.bag[D.BERRY]-=1:Pe.bag[n]-=1,i.feed(),i.say(i.tongue==="en"?"Thanks for the food.":`谢谢你的${n}。`),`${i.name} 吃了你给的${n}，肚子饱了`):"没有吃的。先挖浆果，或抓住鱼和猎物"}function tx(i){const e=performance.now();if(e-eo<350)return;eo=e;let t="";i==="platform"?t=Pe.craftPlatform():i==="planks"?t=Pe.craftPlanks():i==="woodpick"?t=Pe.craftWoodPickaxe():i==="stonepick"?t=Pe.craftPickaxe():i==="eatberry"?t=Pe.eatBerry():i==="plantberry"?t=Pe.plantBerry():i==="eatcatch"?t=Pe.eatCatch():i==="eatflower"?t=Pe.eatOsmanthus():i==="feed"?t=ex():t=Pe.buildWorld(i),Oe(t),vi()}document.getElementById("bag-panel").addEventListener("pointerup",i=>{const e=i.target.closest("[data-craft]"),t=i.target.closest("[data-slot]");if(!(!e&&!t)){if(i.preventDefault(),i.stopPropagation(),t){const n=performance.now();if(n-eo<350)return;eo=n,Pe.slot=Number(t.dataset.slot),vi();return}tx(e.dataset.craft)}});document.getElementById("bag-toggle").addEventListener("pointerup",i=>{i.preventDefault(),i.stopPropagation(),document.body.classList.toggle("bag-open"),document.getElementById("bag-panel").hidden=!document.body.classList.contains("bag-open"),document.getElementById("bag-toggle").textContent=document.body.classList.contains("bag-open")?"收起物品":"物品"});const nx=Pe.mine.bind(Pe);Pe.mine=()=>{var e;const i=nx();return i!=null&&i.caught?Oe(i.caught):i!=null&&i.bedrock?Oe("基岩挖不掉，这是世界最底层"):i!=null&&i.blocked?Oe(`需要更好的镐才能挖${((e=_n[i.id])==null?void 0:e.name)||"这个"}`):(i==null?void 0:i.drop)===D.BERRY?(Oe("挖到浆果。打开物品可以吃、种下，或喂给身边的人"),vi()):(i==null?void 0:i.drop)==="桂花"?(Oe("拿到桂花。打开物品可以闻一闻、吃掉"),vi()):(i==null?void 0:i.drop)!=null&&vi(),i};const ix=Pe.place.bind(Pe);Pe.place=()=>{const i=ix();return i?vi():(Pe.bag[Pe.selectedBlock()]||0)<=0&&Oe("这个格子没有方块了，换一个"),i};vi();const Ri=document.getElementById("pick-prompt");function Yu(){Ri.hidden=!0,document.body.classList.add("sheet-open"),requestAnimationFrame(()=>{var i;(i=document.getElementById("fate-panel"))==null||i.scrollIntoView({behavior:"smooth",block:"start"})})}function sx(i){document.body.classList.contains("touch-device")&&(document.body.classList.contains("sheet-open")||(document.getElementById("pick-prompt-name").textContent=i.alive?i.name:`${i.name} 的坟墓`,Ri.hidden=!1))}yv()&&Mv(Pe,{onPick(){const i=uo();i?us(i,{askPanel:!0}):Oe("准星附近没有人")},onTap(i,e){const t=ux(i,e);t&&us(t,{askPanel:!0})}});document.getElementById("pick-open").addEventListener("click",()=>{ei()?Yu():Ri.hidden=!0});document.getElementById("pick-skip").addEventListener("click",()=>{Ri.hidden=!0});document.getElementById("pick-talk").addEventListener("pointerup",i=>{i.preventDefault(),i.stopPropagation();const e=ei();Ri.hidden=!0,e?Lc(e):Oe("先选中一个人")});const to=new Map;let Zs=null;function qu(i){const e=document.getElementById("chat-log"),t=to.get(i.id)||[];e.innerHTML=t.map(n=>`<div class="chat-line ${n.who}">${$t(n.name)}：${$t(n.text)}</div>`).join(""),e.scrollTop=e.scrollHeight}function Ns(i,e,t,n){const s=to.get(i.id)||[];s.push({who:e,name:t,text:n}),s.length>24&&s.shift(),to.set(i.id,s),Zs===i.id&&qu(i)}function Pc(){Zs=null,document.body.classList.remove("chat-open"),document.getElementById("chat-box").hidden=!0,document.getElementById("chat-input").blur()}function Lc(i){if(!i){Oe("先看着一个人，或点选人");return}us(i,{quiet:!0}),Ri.hidden=!0,document.body.classList.remove("bag-open"),document.getElementById("bag-panel").hidden=!0,document.getElementById("bag-toggle").textContent="物品",Zs=i.id;const e=i.tongue==="en"?"英文":"中文",t=i.bridge?" · 通译，中英都听得懂":"";if(document.getElementById("chat-name").textContent=i.alive?`${i.name} · ${e}${t}`:`${i.name} 的墓前`,document.getElementById("chat-prompts").innerHTML=iv(i).map(s=>`<button type="button" data-prompt="${$t(s)}">${$t(s)}</button>`).join(""),document.getElementById("chat-input").placeholder=i.tongue==="en"?"Say something in English":"用中文对他说",document.body.classList.add("chat-open"),document.getElementById("chat-box").hidden=!1,!(to.get(i.id)||[]).length&&i.alive){const s=Hn(i,"idle");Ns(i,"npc",i.name,s),i.say(s,4)}else qu(i);const n=document.getElementById("chat-input");n.value="",setTimeout(()=>n.focus(),60)}function Ic(i,e){const t=e.trim();if(!t||!i)return"";if(Ns(i,"you","你",t),i.alive){const r=i.hear(t,Qn);return Ns(i,"npc",i.name,r),In(`<strong>你</strong>对${$t(i.name)}说：${$t(t)}`),r}i.note(`你在墓前说：「${t}」`);const n=qe.agents.filter(r=>r.factionId&&r.factionId===i.factionId);if(!n.length){const r="这座坟墓不会回答，也没有活着的族人听见。";return Ns(i,"npc","墓",r),r}const s=n.slice(0,2).map(r=>{const o=r.hear(t,Qn,.6);return Ns(i,"npc",r.name,o),o});return In(`<strong>你</strong>在${$t(i.name)}墓前说：${$t(t)}`),s.join(" ")}document.getElementById("chat-toggle").addEventListener("pointerup",i=>{if(i.preventDefault(),i.stopPropagation(),document.body.classList.contains("chat-open")){Pc();return}Lc(uo()||ei())});document.getElementById("chat-close").addEventListener("pointerup",i=>{i.preventDefault(),i.stopPropagation(),Pc()});document.getElementById("chat-prompts").addEventListener("pointerup",i=>{const e=i.target.closest("[data-prompt]");if(!e)return;i.preventDefault(),i.stopPropagation();const t=qe.find(Zs);t&&Ic(t,e.dataset.prompt)});document.getElementById("chat-form").addEventListener("submit",i=>{i.preventDefault();const e=document.getElementById("chat-input"),t=qe.find(Zs);if(!t)return;const n=e.value;n.trim()&&(e.value="",Ic(t,n))});function ju(){const i=document.getElementById("ride-toggle"),e=!!Pe.ride;i.textContent=e?"下车":"驾驶",i.classList.toggle("on",e)}document.getElementById("ride-toggle").addEventListener("pointerup",i=>{i.preventDefault(),i.stopPropagation(),Oe(Pe.toggleRide()),ju()});window.addEventListener("keydown",i=>{if(!i.target.closest("input, textarea")){if(i.code==="KeyR"){i.preventDefault(),Oe(Pe.toggleRide()),ju();return}i.code==="KeyT"&&(i.preventDefault(),document.body.classList.contains("chat-open")?Pc():Lc(uo()||ei()))}});const Ys=new hn;Ys.setAttribute("position",new Xt(new Float32Array(540),3));Ys.setDrawRange(0,0);const xi=new I_(Ys,new eu({color:16769162,transparent:!0,opacity:.95}));xi.frustumCulled=!1;xi.visible=!1;Wt.add(xi);let Jt=!1,Vt=420/1440,Ja=1,Dc=!1,ss="alive",vh="",bi=null,$n=!1,Qa="",xh="";const rx=[],ox=[],qs=document.getElementById("time-of-day"),Ku=document.getElementById("clock-rate"),Zu=document.getElementById("sim-rate");function $t(i){return String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Oe(i){const e=document.getElementById("toast");e.textContent=i,e.classList.add("show"),clearTimeout(Oe._t),Oe._t=setTimeout(()=>e.classList.remove("show"),1800)}function Ju(i,e,t,n=14){e.unshift(t),e.length>40&&e.pop(),i.innerHTML=e.slice(0,n).map(s=>`<li>${s}</li>`).join("")}function In(i){Ju(document.getElementById("log"),rx,i,8)}Qn.on("log",i=>In(i));Qn.on("birth",({child:i,parents:e})=>{In(`<strong>${i.name}</strong> 出生 · 第 ${i.generation} 代 · ${e[0].name}+${e[1].name}`)});Qn.on("death",({agent:i,reason:e})=>{In(`<strong>${i.name}</strong> ${e}`),bi===i.id&&lo()});Qn.on("talk",({a:i,b:e,line:t,reply:n})=>{Ju(document.getElementById("talks"),ox,`<strong>${i.name}</strong>：${t}<br><strong>${e.name}</strong>：${n}`,8)});const Qu=document.getElementById("gene-bars");Qu.innerHTML=Pn.map(i=>`
  <div class="gene-row" data-key="${i.key}">
    <span>${i.label}</span>
    <div class="bar"><div class="fill" style="background:${i.color}"></div></div>
    <b>0%</b>
  </div>`).join("");const no=document.getElementById("fate-genes");no.innerHTML=Pn.map(i=>`
  <div class="gene-row">
    <span>${i.label}</span>
    <input data-gene="${i.key}" type="range" min="5" max="98" value="50" />
    <b data-gene-num="${i.key}">50</b>
  </div>`).join("");function ec(){const i=Number(Ku.value)/100;return i*i*.02}function ed(){return Number(Zu.value)/50}function ax(i){const e=Math.floor(i*1440)%1440,t=String(Math.floor(e/60)).padStart(2,"0"),n=String(e%60).padStart(2,"0");return`${t}:${n}`}function cx(i){if(i<2e-5)return"停止";const e=Math.max(1,Math.round(1/i/60));return`${e>=30?"极慢":e>=12?"慢":e>=4?"正常":"快"} · 一天约 ${e} 分钟`}function lx(i){return i<.05?"停止":i<.6?"慢":i<1.15?"正常":"快"}function ei(){return bi==null?null:qe.find(bi)}function us(i,e={}){if(bi=i?i.id:null,$n=!1,Qa="",xi.visible=!1,lo(),gs(),!i){Ri.hidden=!0;return}e.askPanel?(Oe(i.alive?`选中 ${i.name}`:`选中 ${i.name} 的坟墓`),sx(i)):e.openPanel?Yu():e.quiet||Oe(i.alive?`选中 ${i.name}`:`这是 ${i.name} 的坟墓`)}function gs(){const i=ss==="alive"?qe.agents:qe.dead,e=`${ss}:${bi}:`+i.map(n=>{var s;return`${n.id}:${n.name}:${n.alive}:${n.state}:${n.deathReason}:${n.factionId}:${n.sick}:${n.obeying}:${n.bridge}:${((s=n.faction())==null?void 0:s.leaderId)===n.id?1:0}`}).join("|");if(e===vh)return;vh=e;const t=document.getElementById("roster");t.innerHTML=i.length?i.map(n=>{var a;const s=n.alive?su(n):n.deathReason||"坟墓",r=n.faction(),o=`${n.protected?" · 护佑":""}${n.sick?" · 患病":""}${(r==null?void 0:r.leaderId)===n.id?" · 首领":""}${n.bridge?" · 通译":""}${n.alive&&r&&r.leaderId!==n.id?n.obeying?" · 服从":" · 不服从":""}`;return`<li><button type="button" class="person ${n.alive?"alive":"dead"} ${n.id===bi?"selected":""}" data-id="${n.id}">
            <b>${$t(n.name)}</b> · ${n.alive?"活着":"坟墓"}${o}
            <small>第 ${n.generation} 代 · ${$t(s)} · ${$t(r?r.name:((a=n.culture)==null?void 0:a.title)||"无部")} · ${n.tongue==="en"?"EN":"中文"}</small>
          </button></li>`}).join(""):`<li class="meta">${ss==="alive"?"还没有活人":"还没有人死去"}</li>`}function lo(){var C,T,S;const i=ei(),e=document.getElementById("fate-empty"),t=document.getElementById("fate-body");if(!i){e.hidden=!1,t.hidden=!0,_i.visible=!1;return}e.hidden=!0,t.hidden=!1,document.getElementById("fate-name").textContent=i.name;const n=document.getElementById("fate-status");n.textContent=i.alive?i.protected?"活着 · 护佑":"活着":"坟墓",n.className=i.alive?"pill":"pill dead";const s=i.faction(),r=i.parents?i.parents.join(" + "):"无",o=((C=i.culture)==null?void 0:C.title)||"未明文明",a=i.tongue==="en"?"英文":"中文",c=i.bridge?"通译，能和其他部落交流":"只会本部语言",l=(s==null?void 0:s.leaderId)===i.id?"首领":i.obeying?"族人 · 服从":"族人 · 不服从";document.getElementById("fate-meta").textContent=i.alive?`第 ${i.generation} 代 · ${ru(i.state)} · ${o} · ${a} · ${c} · 意志 ${Math.round((i.will||0)*100)}% · 忠诚 ${Math.round((i.loyalty||0)*100)}% · ${s?`${s.name} / ${l} / ${s.ideology.name}`:"尚未入部"} · 习俗：${i.culture.rite}`:`坟墓 · ${i.name} · ${i.deathReason||"死亡"} · ${o} · ${a} · 葬俗：${i.culture.rite} · 父母 ${r}`;const h=[["peace","厌战"],["sea","向海"],["hunt","向猎"],["field","向田"],["brave","更勇"],["build","更想安家"],["trade","更想交换"]].filter(([R])=>{var w;return(((w=i.influence)==null?void 0:w[R])||0)>.08}).map(([R,w])=>`${w} ${Math.round(i.influence[R]*100)}%`);document.getElementById("influence-note").textContent=i.playerWords?`你对他说过 ${i.playerWords} 次。影响：${h.join("、")||"还很浅"}`:"还没有对他说过话。";const u=document.getElementById("rename-input"),d=document.getElementById("custom-input");document.activeElement!==u&&(u.value=i.name),document.activeElement!==d&&(d.value=((T=i.culture)==null?void 0:T.rite)||"");const p=Math.round(i.hunger*100),g=Math.round(i.health*100);document.getElementById("hunger-fill").style.width=`${p}%`,document.getElementById("health-fill").style.width=`${g}%`,document.getElementById("hunger-num").textContent=`${p}%`,document.getElementById("health-num").textContent=`${g}%`;const _=`${i.id}:${i.life.length}:${(S=i.life.at(-1))==null?void 0:S.text}:${i.deathReason}`;_!==Qa&&(Qa=_,document.getElementById("life-log").innerHTML=i.life.map(R=>`<li data-x="${R.x}" data-z="${R.z}">第 ${R.age} 刻 · ${$t(R.text)}</li>`).join(""));const m=document.querySelector('[data-fate="path"]');m&&(m.textContent=$n?"隐藏路线":"显示路线");for(const R of Pn){const w=no.querySelector(`[data-gene="${R.key}"]`),A=no.querySelector(`[data-gene-num="${R.key}"]`),k=Math.round(i.genes[R.key]*100);document.activeElement!==w&&(w.value=String(k)),A.textContent=w.value}const f=document.querySelector('[data-fate="protect"]');f.textContent=i.protected?"解除护佑":"护佑"}function Uc(){const i=ax(Vt);document.getElementById("day").textContent=String(Ja),document.getElementById("clock").textContent=i,document.getElementById("clock-live").textContent=i,document.getElementById("pop").textContent=String(qe.agents.length),document.getElementById("gen").textContent=String(qe.maxGen),document.getElementById("births").textContent=String(qe.births),document.getElementById("deaths").textContent=String(qe.dead.length),Dc||(qs.value=String(Math.floor(Vt*1440)%1440)),document.getElementById("clock-rate-label").textContent=cx(ec()),document.getElementById("sim-rate-label").textContent=lx(ed());const e=qe.civ.summary().join(`
`);e!==xh&&(xh=e,document.getElementById("civs").innerHTML=e.split(`
`).map(n=>`<li>${$t(n)}</li>`).join(""));const t=j_(qe.agents);for(const n of Pn){const s=Qu.querySelector(`[data-key="${n.key}"]`),r=Math.round((t[n.key]||0)*100);s.querySelector(".fill").style.width=`${r}%`,s.querySelector("b").textContent=`${r}%`}}function ho(){const i=Math.max(0,Math.sin(Vt*Math.PI*2-Math.PI/2)*.5+.5),e=vt.weather||"clear",t=e==="storm"?new ze(3950164):e==="rain"?new ze(8293529):new ze(12177378),n=new ze(1054248).lerp(t,i);vt.flash>.04&&n.lerp(new ze(16054271),Math.min(.8,vt.flash)),Wt.background.copy(n),Wt.fog.color.copy(n),Wt.fog.near=e==="storm"?16:e==="rain"?24:40,Wt.fog.far=e==="storm"?68:e==="rain"?86:112;const s=e==="storm"?.32:e==="rain"?.58:1;ln.intensity=(.15+i*1.05)*s+(vt.flash||0)*1.6,ln.color.set(e==="clear"?16769204:12964060),Za.color.set(e==="clear"?16770756:9873594),Za.intensity=(.15+i*.5)*(e==="clear"?1:.72);const r=Vt*Math.PI*2;ln.position.set(Math.cos(r)*40,Math.sin(r)*50,12);const o=document.getElementById("weather-chip");if(o){const a=vt.wet>.18&&e==="clear",c=e==="storm"?"雷雨":e==="rain"?"下雨":a?"放晴 · 积水":"晴";o.textContent=c,o.dataset.sky=e;const l=document.getElementById("weather-stat");l&&(l.textContent=c)}}function yh(i,e){const t=i.clone();return t.y+=e,t.project(Ht),t.z>1?null:{x:(t.x*.5+.5)*window.innerWidth,y:(-t.y*.5+.5)*window.innerHeight}}let Xn=localStorage.getItem("hideLabels")==="1";function td(){const i=document.getElementById("label-toggle");i.textContent=Xn?"显示头顶":"隐藏头顶",i.classList.toggle("on",Xn),Xn&&(document.getElementById("world-labels").innerHTML="")}document.getElementById("label-toggle").addEventListener("click",()=>{Xn=!Xn,localStorage.setItem("hideLabels",Xn?"1":"0"),td(),Oe(Xn?"已屏蔽头顶的名字和对话":"头顶信息已显示")});td();const rn=new Map;function Mh(i,e){let t=rn.get(i);return t?t.className!==e&&(t.className=e):(t=document.createElement("div"),t.className=e,document.getElementById("world-labels").appendChild(t),rn.set(i,t)),t.dataset.keep="1",t}function hx(){var n;const i=document.getElementById("world-labels");if(qe.frozen){for(const s of rn.values())s.remove();rn.clear();return}if(Xn){for(const s of rn.values())s.remove();rn.clear();return}const e=performance.now();for(const s of rn.values())s.dataset.keep="0";const t=[...qe.agents,...qe.dead];for(const s of t){const r=yh(s.pos,s.alive?1.7:1.1);if(r){const o=["name-tag",s.alive?"alive":"dead",s.id===bi?"selected":""].filter(Boolean).join(" "),a=s.faction(),c=`${(a==null?void 0:a.leaderId)===s.id?" · 首领":""}${s.bridge?" · 通译":""}`,l=s.alive?`${s.name}${c} · ${((n=s.culture)==null?void 0:n.title)||"人"} · ${su(s)}`:`墓 · ${s.name}`,h=Mh(`n${s.id}`,o);h.textContent!==l&&(h.textContent=l),h.style.left=`${Math.round(r.x)}px`,h.style.top=`${Math.round(r.y)}px`}if(s.speech&&s.speech.until>e){const o=yh(s.pos,s.alive?2.15:1.5);if(o){const a=Mh(`b${s.id}`,"bubble");a.textContent!==s.speech.text&&(a.textContent=s.speech.text),a.style.left=`${Math.round(o.x)}px`,a.style.top=`${Math.round(o.y-16)}px`}}}for(const[s,r]of[...rn.entries()])r.dataset.keep!=="1"&&(r.remove(),rn.delete(s));!i.childElementCount&&rn.size&&rn.clear()}function uo(){const i=new N;Ht.getWorldDirection(i);let e=null,t=.92;for(const n of[...qe.agents,...qe.dead]){const s=n.pos.clone().sub(Ht.position);if(s.length()>18)continue;const o=s.normalize().dot(i);o>t&&(t=o,e=n)}return e}function ux(i,e){const t=new We(i/window.innerWidth*2-1,-(e/window.innerHeight)*2+1),n=new nu;n.setFromCamera(t,Ht);let s=null,r=1.6;for(const o of[...qe.agents,...qe.dead]){const a=o.pos.clone().add(new N(0,o.alive?.95:.35,0)),l=a.clone().sub(n.ray.origin).dot(n.ray.direction);if(l<.4||l>18)continue;const u=n.ray.origin.clone().addScaledVector(n.ray.direction,l).distanceTo(a);u<r&&(r=u,s=o)}return s}function dx(i){const e=ei();if(!e){Oe("先选中一个人");return}if(i==="rename"&&e.rename(document.getElementById("rename-input").value),i==="custom"){e.setCustom(document.getElementById("custom-input").value);const t=e.faction();if(t){let n=0;for(const s of qe.agents)s.factionId!==t.id||s===e||(s.obeying===!1||s.will>.68&&Math.random()<s.will?(n+=1,s.note(`没有服从新习俗「${e.culture.rite}」`)):s.culture=e.culture);n&&Oe(`${n} 人没有服从这条习俗`)}}if(i==="feed"&&e.alive&&e.feed(),i==="heal"&&e.alive&&e.heal(),i==="rest"&&e.alive&&e.rest(),i==="wood"&&e.alive&&e.giveWood(),i==="endow"&&(qe.civ.endow(e)||Oe("这个人还没有势力，先让他建部")),i==="doctrine"&&(qe.civ.cycleIdeology(e)||Oe("他还没有加入势力")),i==="leader"){const t=qe.civ.appointLeader(e,qe.agents);t?t.same?Oe(`${e.name} 已经是首领`):t.dissent?Oe(`${e.name} 成了首领，但有 ${t.dissent} 人不服从`):Oe(`${e.name} 成了首领，族人这回都听从`):Oe("他还没有部落，不能当首领")}if(i==="peace"&&qe.civ.peaceAll(),i==="path"&&($n=!$n,Oe($n?`只画出 ${e.name} 从出生到现在的路线`:"路线已隐藏")),i==="protect"&&e.alive&&e.setProtected(!e.protected),i==="talk"){const t=document.getElementById("player-line").value.trim();t?document.getElementById("npc-reply").textContent=Ic(e,t):Oe("先写一句话")}if(i==="move-grave"||i==="bring"&&!e.alive)if(e.alive)Oe("他还活着，没有坟墓");else{const t=Pe.pos.clone();t.y=vt.surfaceY(Math.floor(t.x),Math.floor(t.z))+1.02,e.moveGrave(t,"你把坟墓迁到了身边"),Oe(`${e.name} 的坟墓已迁到你身边`)}if(i==="bring"&&e.alive){const t=Pe.pos.clone();t.y=vt.surfaceY(Math.floor(t.x),Math.floor(t.z))+1,e.teleport(t)}i==="goto"&&(Pe.pos.set(e.pos.x+2.2,e.pos.y+1.4,e.pos.z+2.2),$n=!0,Oe(`来到 ${e.name} 身边，黄线只属于他`)),i==="kill"&&e.alive&&(e.die("被你终结",Qn),Oe(`${e.name} 已被终结`)),i==="revive"&&(e.alive?Oe(`${e.name} 还活着，不用复活`):qe.revive(e)?(ss="alive",document.getElementById("tab-alive").classList.add("active"),document.getElementById("tab-dead").classList.remove("active"),Oe(`${e.name} 已复活，短暂护佑中`)):Oe("复活失败，再点一次")),lo(),gs()}document.getElementById("start-btn").addEventListener("click",()=>{document.body.classList.contains("touch-device")||Rc.requestPointerLock(),document.body.classList.remove("sheet-open"),Oe(document.body.classList.contains("touch-device")?"左下摇杆走路，点菜单可以调时间和命运":"按 Esc 可以回来调时间和命运")});document.getElementById("pause-btn").addEventListener("click",()=>{Jt=!Jt,document.getElementById("pause-btn").textContent=Jt?"继续":"暂停一切",Oe(Jt?"时间和人物都暂停了":"继续运行")});document.getElementById("tab-alive").addEventListener("click",()=>{ss="alive",document.getElementById("tab-alive").classList.add("active"),document.getElementById("tab-dead").classList.remove("active"),gs()});document.getElementById("tab-dead").addEventListener("click",()=>{ss="dead",document.getElementById("tab-dead").classList.add("active"),document.getElementById("tab-alive").classList.remove("active"),gs()});document.getElementById("life-log").addEventListener("click",i=>{const e=i.target.closest("[data-x]");if(!e)return;document.exitPointerLock();const t=Number(e.dataset.x),n=Number(e.dataset.z),s=vt.surfaceY(Math.floor(t),Math.floor(n))+2;Pe.pos.set(t+1.6,s,n+1.6),$n=!0,Oe("来到这段人生发生的地点")});document.getElementById("roster").addEventListener("click",i=>{const e=i.target.closest("[data-id]");e&&us(qe.find(Number(e.dataset.id)))});let Sh=0;function nd(i){var n;const e=i.target.closest("[data-fate]");if(!e)return;i.preventDefault(),i.stopPropagation();const t=performance.now();if(!(t-Sh<350)){Sh=t;try{(n=document.exitPointerLock)==null||n.call(document)}catch{}dx(e.dataset.fate)}}const id=document.getElementById("fate-panel");id.addEventListener("click",nd);id.addEventListener("pointerup",nd);no.addEventListener("input",i=>{const e=i.target.dataset.gene;if(!e)return;const t=ei();t&&(t.setGene(e,Number(i.target.value)/100),i.target.parentElement.querySelector("b").textContent=i.target.value)});qs.addEventListener("pointerdown",()=>{Dc=!0,document.exitPointerLock()});window.addEventListener("pointerup",()=>{Dc=!1});qs.addEventListener("input",()=>{Vt=Number(qs.value)/1440,ho()});for(const i of document.querySelectorAll("[data-min]"))i.addEventListener("click",()=>{document.exitPointerLock(),Vt=Number(i.dataset.min)/1440,qs.value=i.dataset.min,ho()});for(const i of[Ku,Zu])i.addEventListener("pointerdown",()=>document.exitPointerLock()),i.addEventListener("input",Uc);window.addEventListener("keydown",i=>{if(!i.target.matches("input, textarea")){if(i.code==="KeyP"&&(Jt=!Jt,document.getElementById("pause-btn").textContent=Jt?"继续":"暂停一切",Oe(Jt?"已暂停":"继续")),i.code==="KeyR"){const e=qe.spawnOne(Pe.pos);us(e)}if(i.code==="KeyT"){const e=vt.spawnFoodNear(Pe.pos,5);Oe(e?`附近长出了 ${e} 丛浆果`:"这里不太适合长浆果")}if(i.code==="KeyF"){const e=uo();e?us(e):Oe("准星附近没有活人")}}});window.addEventListener("resize",()=>{Ht.aspect=window.innerWidth/window.innerHeight,Ht.updateProjectionMatrix(),Ks.setSize(window.innerWidth,window.innerHeight)});qe.seed(12);In("海边的人捕鱼，林中的人狩猎，草地的人耕种。死人会变成写着名字的坟墓。");In("秋天了：林子里开着桂花，挖下来可以吃。天会放晴、下雨、打雷，低处会积水。");In("选中一个人，在「对他说」里写一句话。同样的话重复几次，他们的做法会改。");Uc();gs();ho();let bh=performance.now(),Jo=0,Qo=0;function sd(i){const e=Math.min(.05,(i-bh)/1e3);bh=i;const t=Jt?0:e*ed();if(!Jt&&Ji.role()!=="guest"){const o=ec();if(Vt+=e*o,Vt>=1&&(Vt-=1,Ja+=1,In(`—— 第 ${Ja} 天 ——`)),qe.update(t,Vt),vt.flushRebuild(e),Qo+=t,Qo>12){Qo=0;const a=Math.max(.2,1-qe.agents.length/40);Math.random()<.7*a&&vt.spawnFoodNear(vt.randomSpawn(),1+Math.floor(Math.random()*2))}}if(Ji.role()==="guest"){const o=Ji.day();o!=null&&(Vt=o)}!Jt&&Ji.role()!=="guest"&&vt.tickWeather(Math.max(e*ec(),e*34e-5));const n=vt.takeWeatherNote();n&&Oe(n),vt.tickSkyFx(Jt?0:e,Ht),ho(),Ji.tick(e);const s=Ji.view();Pe.watching=!!s&&!(Pe.bask&&performance.now()<Pe.bask.until),Pe.update(e),Pe.watching&&s&&(Ht.position.set(s.x,s.y,s.z),Ht.rotation.order="YXZ",Ht.rotation.y=s.yaw||0,Ht.rotation.x=s.pitch||0),vt.flushRebuild(e);const r=ei();if(r){_i.visible=!0,_i.position.set(r.pos.x,r.pos.y+.05,r.pos.z);const o=r.path;if($n&&o.length>1){const a=Ys.getAttribute("position"),c=Math.min(o.length,180),l=o.length-c;for(let h=0;h<c;h++){const u=o[l+h];a.setXYZ(h,u.x,u.y+.15,u.z)}a.needsUpdate=!0,Ys.setDrawRange(0,c),xi.visible=!0}else xi.visible=!1}else _i.visible=!1,xi.visible=!1;Jo+=e,Jo>.35&&(Jo=0,Uc(),gs(),r&&lo()),hx(),Ks.render(Wt,Ht),requestAnimationFrame(sd)}const Nc=[1,.85,.72,.6];let yi=Math.min(Nc.length-1,Number(localStorage.getItem("cardScaleIndex"))||0),Bs=localStorage.getItem("cardsHidden")==="1";function fo(){document.documentElement.style.setProperty("--card-scale",String(Nc[yi])),document.body.classList.toggle("cards-hidden",Bs),document.getElementById("card-toggle").textContent=Bs?"展开卡片":"收起卡片"}document.getElementById("card-smaller").addEventListener("click",()=>{yi=Math.min(Nc.length-1,yi+1),localStorage.setItem("cardScaleIndex",String(yi)),fo()});document.getElementById("card-larger").addEventListener("click",()=>{yi=Math.max(0,yi-1),localStorage.setItem("cardScaleIndex",String(yi)),fo()});document.getElementById("card-toggle").addEventListener("click",()=>{Bs=!Bs,localStorage.setItem("cardsHidden",Bs?"1":"0"),fo()});fo();const Ji=Qv({world:vt,player:Pe,agents:qe,scene:Wt,getDay:()=>Vt,setDay:i=>{Vt=i},toast:Oe});requestAnimationFrame(sd);"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js").catch(()=>{});
