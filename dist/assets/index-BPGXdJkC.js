(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Da="161",bi={ROTATE:0,DOLLY:1,PAN:2},Ti={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vu=0,Po=1,Wu=2,Al=1,Xu=2,pn=3,jn=0,Ut=1,un=2,Xn=0,Ii=1,Do=2,Io=3,Uo=4,qu=5,ri=100,Yu=101,ju=102,No=103,Fo=104,$u=200,Ku=201,Zu=202,Ju=203,Ma=204,ya=205,Qu=206,eh=207,th=208,nh=209,ih=210,rh=211,sh=212,ah=213,oh=214,lh=0,ch=1,uh=2,as=3,hh=4,fh=5,dh=6,ph=7,bl=0,mh=1,gh=2,En=0,Tl=1,wl=2,Rl=3,qr=4,_h=5,Cl=6,Ll=300,Ni=301,Fi=302,os=303,Sa=304,Ss=306,ls=1e3,Kt=1001,Ea=1002,It=1003,Oo=1004,ar=1005,Et=1006,ra=1007,Hn=1008,qn=1009,vh=1010,xh=1011,Ia=1012,Pl=1013,Vn=1014,xn=1015,gr=1016,Dl=1017,Il=1018,ui=1020,Mh=1021,rn=1023,yh=1024,Sh=1025,hi=1026,Oi=1027,Eh=1028,Ul=1029,Ah=1030,Nl=1031,Fl=1033,sa=33776,aa=33777,oa=33778,la=33779,Bo=35840,zo=35841,ko=35842,Go=35843,Ol=36196,Ho=37492,Vo=37496,Wo=37808,Xo=37809,qo=37810,Yo=37811,jo=37812,$o=37813,Ko=37814,Zo=37815,Jo=37816,Qo=37817,el=37818,tl=37819,nl=37820,il=37821,ca=36492,rl=36494,sl=36495,bh=36283,al=36284,ol=36285,ll=36286,Bl=3e3,Yn=3001,Th=3200,wh=3201,zl=0,Rh=1,Ht="",dt="srgb",An="srgb-linear",Ua="display-p3",Es="display-p3-linear",cs="linear",nt="srgb",us="rec709",hs="p3",wi=7680,cl=519,Ch=512,Lh=513,Ph=514,kl=515,Dh=516,Ih=517,Uh=518,Nh=519,ul=35044,hl="300 es",Aa=1035,Sn=2e3,fs=2001;class mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mc=1234567;const Yr=Math.PI/180,ds=180/Math.PI;function Sr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function Tt(i,e,t){return Math.max(e,Math.min(t,i))}function Gl(i,e){return(i%e+e)%e}function Bf(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function zf(i,e,t){return i!==e?(t-i)/(e-i):0}function jr(i,e,t){return(1-t)*i+t*e}function kf(i,e,t,n){return jr(i,e,1-Math.exp(-t*n))}function Gf(i,e=1){return e-Math.abs(Gl(i,e*2)-e)}function Hf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Vf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Wf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Xf(i,e){return i+Math.random()*(e-i)}function qf(i){return i*(.5-Math.random())}function Yf(i){i!==void 0&&(mc=i);let e=mc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jf(i){return i*Yr}function $f(i){return i*ds}function fl(i){return(i&i-1)===0&&i!==0}function Kf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ba(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zf(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),m=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*h,l*m,a*c);break;case"YZY":i.set(l*m,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*m,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function or(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const bn={DEG2RAD:Yr,RAD2DEG:ds,generateUUID:Sr,clamp:Tt,euclideanModulo:Gl,mapLinear:Bf,inverseLerp:zf,lerp:jr,damp:kf,pingpong:Gf,smoothstep:Hf,smootherstep:Vf,randInt:Wf,randFloat:Xf,randFloatSpread:qf,seededRandom:Yf,degToRad:jf,radToDeg:$f,isPowerOfTwo:fl,ceilPowerOfTwo:Kf,floorPowerOfTwo:ba,setQuaternionFromProperEuler:Zf,normalize:Bt,denormalize:or};class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],m=n[2],d=n[5],g=n[8],v=r[0],f=r[3],p=r[6],M=r[1],x=r[4],y=r[7],C=r[2],R=r[5],T=r[8];return s[0]=o*v+a*M+l*C,s[3]=o*f+a*x+l*R,s[6]=o*p+a*y+l*T,s[1]=c*v+u*M+h*C,s[4]=c*f+u*x+h*R,s[7]=c*p+u*y+h*T,s[2]=m*v+d*M+g*C,s[5]=m*f+d*x+g*R,s[8]=m*p+d*y+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,m=a*l-u*s,d=c*s-o*l,g=t*h+n*m+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*c-u*n)*v,e[2]=(a*n-r*o)*v,e[3]=m*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(qa.makeScale(e,t)),this}rotate(e){return this.premultiply(qa.makeRotation(-e)),this}translate(e,t){return this.premultiply(qa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qa=new We;function Fh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Oh(){const i=ps("canvas");return i.style.display="block",i}const gc={};function fr(i){i in gc||(gc[i]=!0,console.warn(i))}const _c=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vc=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ls={[An]:{transfer:cs,primaries:us,toReference:i=>i,fromReference:i=>i},[dt]:{transfer:nt,primaries:us,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Es]:{transfer:cs,primaries:hs,toReference:i=>i.applyMatrix3(vc),fromReference:i=>i.applyMatrix3(_c)},[Ua]:{transfer:nt,primaries:hs,toReference:i=>i.convertSRGBToLinear().applyMatrix3(vc),fromReference:i=>i.applyMatrix3(_c).convertLinearToSRGB()}},Jf=new Set([An,Es]),Qe={enabled:!0,_workingColorSpace:An,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Jf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Ls[e].toReference,r=Ls[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ls[i].primaries},getTransfer:function(i){return i===Ht?cs:Ls[i].transfer}};function dr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ya(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Hi;class Hl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hi===void 0&&(Hi=ps("canvas")),Hi.width=e.width,Hi.height=e.height;const n=Hi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Hi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ps("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=dr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(dr(t[n]/255)*255):t[n]=dr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qf=0;class Vl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Sr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ja(r[o].image)):s.push(ja(r[o]))}else s=ja(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ja(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ed=0;class wt extends mi{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=Kt,r=Kt,s=Et,o=Hn,a=rn,l=qn,c=wt.DEFAULT_ANISOTROPY,u=Ht){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Sr(),this.name="",this.source=new Vl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Yn?dt:Ht),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ll)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ls:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case Ea:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ls:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case Ea:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===dt?Yn:Bl}set encoding(e){fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Yn?dt:Ht}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=Ll;wt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,r=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],m=l[1],d=l[5],g=l[9],v=l[2],f=l[6],p=l[10];if(Math.abs(u-m)<.01&&Math.abs(h-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+m)<.1&&Math.abs(h+v)<.1&&Math.abs(g+f)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(d+1)/2,C=(p+1)/2,R=(u+m)/4,T=(h+v)/4,H=(g+f)/4;return x>y&&x>C?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=R/n,s=T/n):y>C?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=R/r,s=H/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=T/s,r=H/s),this.set(n,r,s,t),this}let M=Math.sqrt((f-g)*(f-g)+(h-v)*(h-v)+(m-u)*(m-u));return Math.abs(M)<.001&&(M=1),this.x=(f-g)/M,this.y=(h-v)/M,this.z=(m-u)/M,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bh extends mi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(fr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Yn?dt:Ht),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new wt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends Bh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Wl extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zh extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class di{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const m=s[o+0],d=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=m,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==m||c!==d||u!==g){let f=1-a;const p=l*m+c*d+u*g+h*v,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const C=Math.sqrt(x),R=Math.atan2(C,p*M);f=Math.sin(f*R)/C,a=Math.sin(a*R)/C}const y=a*M;if(l=l*f+m*y,c=c*f+d*y,u=u*f+g*y,h=h*f+v*y,f===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],m=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*m,e[t+1]=l*g+u*m+c*h-a*d,e[t+2]=c*g+u*d+a*m-l*h,e[t+3]=u*g-a*h-l*m-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),m=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=m*u*h+c*d*g,this._y=c*d*h-m*u*g,this._z=c*u*g+m*d*h,this._w=c*u*h-m*d*g;break;case"YXZ":this._x=m*u*h+c*d*g,this._y=c*d*h-m*u*g,this._z=c*u*g-m*d*h,this._w=c*u*h+m*d*g;break;case"ZXY":this._x=m*u*h-c*d*g,this._y=c*d*h+m*u*g,this._z=c*u*g+m*d*h,this._w=c*u*h-m*d*g;break;case"ZYX":this._x=m*u*h-c*d*g,this._y=c*d*h+m*u*g,this._z=c*u*g-m*d*h,this._w=c*u*h+m*d*g;break;case"YZX":this._x=m*u*h+c*d*g,this._y=c*d*h+m*u*g,this._z=c*u*g-m*d*h,this._w=c*u*h-m*d*g;break;case"XZY":this._x=m*u*h-c*d*g,this._y=c*d*h-m*u*g,this._z=c*u*g+m*d*h,this._w=c*u*h+m*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],m=n+a+h;if(m>0){const d=.5/Math.sqrt(m+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,m=Math.sin(t*u)/c;return this._w=o*h+this._w*m,this._x=n*h+this._x*m,this._y=r*h+this._y*m,this._z=s*h+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $a.copy(this).projectOnVector(e),this.sub($a)}reflect(e){return this.sub($a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $a=new D,xc=new di;class Er{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,sn):sn.fromBufferAttribute(s,o),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ps.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ps.copy(n.boundingBox)),Ps.applyMatrix4(e.matrixWorld),this.union(Ps)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),Ds.subVectors(this.max,Pr),Vi.subVectors(e.a,Pr),Wi.subVectors(e.b,Pr),Xi.subVectors(e.c,Pr),$n.subVectors(Wi,Vi),Kn.subVectors(Xi,Wi),xi.subVectors(Vi,Xi);let t=[0,-$n.z,$n.y,0,-Kn.z,Kn.y,0,-xi.z,xi.y,$n.z,0,-$n.x,Kn.z,0,-Kn.x,xi.z,0,-xi.x,-$n.y,$n.x,0,-Kn.y,Kn.x,0,-xi.y,xi.x,0];return!Ka(t,Vi,Wi,Xi,Ds)||(t=[1,0,0,0,1,0,0,0,1],!Ka(t,Vi,Wi,Xi,Ds))?!1:(Is.crossVectors($n,Kn),t=[Is.x,Is.y,Is.z],Ka(t,Vi,Wi,Xi,Ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Rn=[new D,new D,new D,new D,new D,new D,new D,new D],sn=new D,Ps=new Er,Vi=new D,Wi=new D,Xi=new D,$n=new D,Kn=new D,xi=new D,Pr=new D,Ds=new D,Is=new D,Mi=new D;function Ka(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Mi.fromArray(i,s);const a=r.x*Math.abs(Mi.x)+r.y*Math.abs(Mi.y)+r.z*Math.abs(Mi.z),l=e.dot(Mi),c=t.dot(Mi),u=n.dot(Mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const td=new Er,Dr=new D,Za=new D;class Gi{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):td.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dr.subVectors(e,this.center);const t=Dr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Dr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dr.copy(e.center).add(Za)),this.expandByPoint(Dr.copy(e.center).sub(Za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new D,Ja=new D,Us=new D,Zn=new D,Qa=new D,Ns=new D,eo=new D;class Ar{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ja.copy(e).add(t).multiplyScalar(.5),Us.copy(t).sub(e).normalize(),Zn.copy(this.origin).sub(Ja);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Us),a=Zn.dot(this.direction),l=-Zn.dot(Us),c=Zn.lengthSq(),u=Math.abs(1-o*o);let h,m,d,g;if(u>0)if(h=o*l-a,m=o*a-l,g=s*u,h>=0)if(m>=-g)if(m<=g){const v=1/u;h*=v,m*=v,d=h*(h+o*m+2*a)+m*(o*h+m+2*l)+c}else m=s,h=Math.max(0,-(o*m+a)),d=-h*h+m*(m+2*l)+c;else m=-s,h=Math.max(0,-(o*m+a)),d=-h*h+m*(m+2*l)+c;else m<=-g?(h=Math.max(0,-(-o*s+a)),m=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+m*(m+2*l)+c):m<=g?(h=0,m=Math.min(Math.max(-s,-l),s),d=m*(m+2*l)+c):(h=Math.max(0,-(o*s+a)),m=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+m*(m+2*l)+c);else m=o>0?-s:s,h=Math.max(0,-(o*m+a)),d=-h*h+m*(m+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ja).addScaledVector(Us,m),d}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const n=Cn.dot(this.direction),r=Cn.dot(Cn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,m=this.origin;return c>=0?(n=(e.min.x-m.x)*c,r=(e.max.x-m.x)*c):(n=(e.max.x-m.x)*c,r=(e.min.x-m.x)*c),u>=0?(s=(e.min.y-m.y)*u,o=(e.max.y-m.y)*u):(s=(e.max.y-m.y)*u,o=(e.min.y-m.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-m.z)*h,l=(e.max.z-m.z)*h):(a=(e.max.z-m.z)*h,l=(e.min.z-m.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,n,r,s){Qa.subVectors(t,e),Ns.subVectors(n,e),eo.crossVectors(Qa,Ns);let o=this.direction.dot(eo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zn.subVectors(this.origin,e);const l=a*this.direction.dot(Ns.crossVectors(Zn,Ns));if(l<0)return null;const c=a*this.direction.dot(Qa.cross(Zn));if(c<0||l+c>o)return null;const u=-a*Zn.dot(eo);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,r,s,o,a,l,c,u,h,m,d,g,v,f){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,m,d,g,v,f)}set(e,t,n,r,s,o,a,l,c,u,h,m,d,g,v,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=m,p[3]=d,p[7]=g,p[11]=v,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/qi.setFromMatrixColumn(e,0).length(),s=1/qi.setFromMatrixColumn(e,1).length(),o=1/qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const m=o*u,d=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=m-v*c,t[9]=-a*l,t[2]=v-m*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const m=l*u,d=l*h,g=c*u,v=c*h;t[0]=m+v*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=v+m*a,t[10]=o*l}else if(e.order==="ZXY"){const m=l*u,d=l*h,g=c*u,v=c*h;t[0]=m-v*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=v-m*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const m=o*u,d=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=m*c+v,t[1]=l*h,t[5]=v*c+m,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const m=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-m*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=m-v*h}else if(e.order==="XZY"){const m=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=m*h+v,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=v*h+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nd,e,id)}lookAt(e,t,n){const r=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Jn.crossVectors(n,Xt),Jn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Jn.crossVectors(n,Xt)),Jn.normalize(),Fs.crossVectors(Xt,Jn),r[0]=Jn.x,r[4]=Fs.x,r[8]=Xt.x,r[1]=Jn.y,r[5]=Fs.y,r[9]=Xt.y,r[2]=Jn.z,r[6]=Fs.z,r[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],m=n[9],d=n[13],g=n[2],v=n[6],f=n[10],p=n[14],M=n[3],x=n[7],y=n[11],C=n[15],R=r[0],T=r[4],H=r[8],U=r[12],_=r[1],E=r[5],B=r[9],z=r[13],P=r[2],F=r[6],O=r[10],q=r[14],j=r[3],$=r[7],Z=r[11],te=r[15];return s[0]=o*R+a*_+l*P+c*j,s[4]=o*T+a*E+l*F+c*$,s[8]=o*H+a*B+l*O+c*Z,s[12]=o*U+a*z+l*q+c*te,s[1]=u*R+h*_+m*P+d*j,s[5]=u*T+h*E+m*F+d*$,s[9]=u*H+h*B+m*O+d*Z,s[13]=u*U+h*z+m*q+d*te,s[2]=g*R+v*_+f*P+p*j,s[6]=g*T+v*E+f*F+p*$,s[10]=g*H+v*B+f*O+p*Z,s[14]=g*U+v*z+f*q+p*te,s[3]=M*R+x*_+y*P+C*j,s[7]=M*T+x*E+y*F+C*$,s[11]=M*H+x*B+y*O+C*Z,s[15]=M*U+x*z+y*q+C*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],m=e[10],d=e[14],g=e[3],v=e[7],f=e[11],p=e[15];return g*(+s*l*h-r*c*h-s*a*m+n*c*m+r*a*d-n*l*d)+v*(+t*l*d-t*c*m+s*o*m-r*o*d+r*c*u-s*l*u)+f*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+p*(-r*a*u-t*l*h+t*a*m+r*o*h-n*o*m+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],m=e[10],d=e[11],g=e[12],v=e[13],f=e[14],p=e[15],M=h*f*c-v*m*c+v*l*d-a*f*d-h*l*p+a*m*p,x=g*m*c-u*f*c-g*l*d+o*f*d+u*l*p-o*m*p,y=u*v*c-g*h*c+g*a*d-o*v*d-u*a*p+o*h*p,C=g*h*l-u*v*l-g*a*m+o*v*m+u*a*f-o*h*f,R=t*M+n*x+r*y+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=M*T,e[1]=(v*m*s-h*f*s-v*r*d+n*f*d+h*r*p-n*m*p)*T,e[2]=(a*f*s-v*l*s+v*r*c-n*f*c-a*r*p+n*l*p)*T,e[3]=(h*l*s-a*m*s-h*r*c+n*m*c+a*r*d-n*l*d)*T,e[4]=x*T,e[5]=(u*f*s-g*m*s+g*r*d-t*f*d-u*r*p+t*m*p)*T,e[6]=(g*l*s-o*f*s-g*r*c+t*f*c+o*r*p-t*l*p)*T,e[7]=(o*m*s-u*l*s+u*r*c-t*m*c-o*r*d+t*l*d)*T,e[8]=y*T,e[9]=(g*h*s-u*v*s-g*n*d+t*v*d+u*n*p-t*h*p)*T,e[10]=(o*v*s-g*a*s+g*n*c-t*v*c-o*n*p+t*a*p)*T,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*T,e[12]=C*T,e[13]=(u*v*r-g*h*r+g*n*m-t*v*m-u*n*f+t*h*f)*T,e[14]=(g*a*r-o*v*r-g*n*l+t*v*l+o*n*f-t*a*f)*T,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*m+t*a*m)*T,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,m=s*c,d=s*u,g=s*h,v=o*u,f=o*h,p=a*h,M=l*c,x=l*u,y=l*h,C=n.x,R=n.y,T=n.z;return r[0]=(1-(v+p))*C,r[1]=(d+y)*C,r[2]=(g-x)*C,r[3]=0,r[4]=(d-y)*R,r[5]=(1-(m+p))*R,r[6]=(f+M)*R,r[7]=0,r[8]=(g+x)*T,r[9]=(f-M)*T,r[10]=(1-(m+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=qi.set(r[0],r[1],r[2]).length();const o=qi.set(r[4],r[5],r[6]).length(),a=qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],an.copy(this);const c=1/s,u=1/o,h=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=h,an.elements[9]*=h,an.elements[10]*=h,t.setFromRotationMatrix(an),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Sn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),m=(n+r)/(n-r);let d,g;if(a===Sn)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===fs)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Sn){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(o-s),m=(t+e)*c,d=(n+r)*u;let g,v;if(a===Sn)g=(o+s)*h,v=-2*h;else if(a===fs)g=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qi=new D,an=new rt,nd=new D(0,0,0),id=new D(1,1,1),Jn=new D,Fs=new D,Xt=new D,Mc=new rt,yc=new di;class As{constructor(e=0,t=0,n=0,r=As.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],m=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(m,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yc.setFromEuler(this),this.setFromQuaternion(yc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}As.DEFAULT_ORDER="XYZ";class Na{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rd=0;const Sc=new D,Yi=new di,Ln=new rt,Os=new D,Ir=new D,sd=new D,ad=new di,Ec=new D(1,0,0),Ac=new D(0,1,0),bc=new D(0,0,1),od={type:"added"},ld={type:"removed"};class pt extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new D,t=new As,n=new di,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new We}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(Ec,e)}rotateY(e){return this.rotateOnAxis(Ac,e)}rotateZ(e){return this.rotateOnAxis(bc,e)}translateOnAxis(e,t){return Sc.copy(e).applyQuaternion(this.quaternion),this.position.add(Sc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ec,e)}translateY(e){return this.translateOnAxis(Ac,e)}translateZ(e){return this.translateOnAxis(bc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Os.copy(e):Os.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Ir,Os,this.up):Ln.lookAt(Os,Ir,this.up),this.quaternion.setFromRotationMatrix(Ln),r&&(Ln.extractRotation(r.matrixWorld),Yi.setFromRotationMatrix(Ln),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(od)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ld)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,sd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,ad,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),m=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),m.length>0&&(n.skeletons=m),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}pt.DEFAULT_UP=new D(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new D,Pn=new D,to=new D,Dn=new D,ji=new D,$i=new D,Tc=new D,no=new D,io=new D,ro=new D;class hn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),on.subVectors(e,t),r.cross(on);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){on.subVectors(r,t),Pn.subVectors(n,t),to.subVectors(e,t);const o=on.dot(on),a=on.dot(Pn),l=on.dot(to),c=Pn.dot(Pn),u=Pn.dot(to),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const m=1/h,d=(c*l-a*u)*m,g=(o*u-a*l)*m;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Dn.x),l.addScaledVector(o,Dn.y),l.addScaledVector(a,Dn.z),l)}static isFrontFacing(e,t,n,r){return on.subVectors(n,t),Pn.subVectors(e,t),on.cross(Pn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),on.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return hn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;ji.subVectors(r,n),$i.subVectors(s,n),no.subVectors(e,n);const l=ji.dot(no),c=$i.dot(no);if(l<=0&&c<=0)return t.copy(n);io.subVectors(e,r);const u=ji.dot(io),h=$i.dot(io);if(u>=0&&h<=u)return t.copy(r);const m=l*h-u*c;if(m<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ji,o);ro.subVectors(e,s);const d=ji.dot(ro),g=$i.dot(ro);if(g>=0&&d<=g)return t.copy(s);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector($i,a);const f=u*g-d*h;if(f<=0&&h-u>=0&&d-g>=0)return Tc.subVectors(s,r),a=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(Tc,a);const p=1/(f+v+m);return o=v*p,a=m*p,t.copy(n).addScaledVector(ji,o).addScaledVector($i,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Bs={h:0,s:0,l:0};function so(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Qe.workingColorSpace){if(e=Gl(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=so(o,s,e+1/3),this.g=so(o,s,e),this.b=so(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,t=dt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){const n=kh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=Ya(e.r),this.g=Ya(e.g),this.b=Ya(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return Qe.fromWorkingColorSpace(Lt.copy(this),e),Math.round(Tt(Lt.r*255,0,255))*65536+Math.round(Tt(Lt.g*255,0,255))*256+Math.round(Tt(Lt.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Lt.copy(this),t);const n=Lt.r,r=Lt.g,s=Lt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=dt){Qe.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,n=Lt.g,r=Lt.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(Bs);const n=jr(Qn.h,Bs.h,t),r=jr(Qn.s,Bs.s,t),s=jr(Qn.l,Bs.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new ke;ke.NAMES=kh;let cd=0;class gi extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=Ii,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ma,this.blendDst=ya,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ma&&(n.blendSrc=this.blendSrc),this.blendDst!==ya&&(n.blendDst=this.blendDst),this.blendEquation!==ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bs extends gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new D,zs=new Pe;class gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ul,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return fr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zs.fromBufferAttribute(this,t),zs.applyMatrix3(e),this.setXY(t,zs.x,zs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=or(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=or(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=or(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=or(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=or(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),r=Bt(r,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ul&&(e.usage=this.usage),e}}class Xl extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ql extends gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Jt extends gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ud=0;const tn=new rt,ao=new pt,Ki=new D,qt=new Er,Ur=new Er,Mt=new D;class Vt extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fh(e)?ql:Xl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return ao.lookAt(e),ao.updateMatrix(),this.applyMatrix4(ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Jt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Er);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ur.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(qt.min,Ur.min),qt.expandByPoint(Mt),Mt.addVectors(qt.max,Ur.max),qt.expandByPoint(Mt)):(qt.expandByPoint(Ur.min),qt.expandByPoint(Ur.max))}qt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Mt.fromBufferAttribute(a,c),l&&(Ki.fromBufferAttribute(e,c),Mt.add(Ki)),r=Math.max(r,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let _=0;_<a;_++)c[_]=new D,u[_]=new D;const h=new D,m=new D,d=new D,g=new Pe,v=new Pe,f=new Pe,p=new D,M=new D;function x(_,E,B){h.fromArray(r,_*3),m.fromArray(r,E*3),d.fromArray(r,B*3),g.fromArray(o,_*2),v.fromArray(o,E*2),f.fromArray(o,B*2),m.sub(h),d.sub(h),v.sub(g),f.sub(g);const z=1/(v.x*f.y-f.x*v.y);isFinite(z)&&(p.copy(m).multiplyScalar(f.y).addScaledVector(d,-v.y).multiplyScalar(z),M.copy(d).multiplyScalar(v.x).addScaledVector(m,-f.x).multiplyScalar(z),c[_].add(p),c[E].add(p),c[B].add(p),u[_].add(M),u[E].add(M),u[B].add(M))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let _=0,E=y.length;_<E;++_){const B=y[_],z=B.start,P=B.count;for(let F=z,O=z+P;F<O;F+=3)x(n[F+0],n[F+1],n[F+2])}const C=new D,R=new D,T=new D,H=new D;function U(_){T.fromArray(s,_*3),H.copy(T);const E=c[_];C.copy(E),C.sub(T.multiplyScalar(T.dot(E))).normalize(),R.crossVectors(H,E);const z=R.dot(u[_])<0?-1:1;l[_*4]=C.x,l[_*4+1]=C.y,l[_*4+2]=C.z,l[_*4+3]=z}for(let _=0,E=y.length;_<E;++_){const B=y[_],z=B.start,P=B.count;for(let F=z,O=z+P;F<O;F+=3)U(n[F+0]),U(n[F+1]),U(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,d=n.count;m<d;m++)n.setXYZ(m,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let m=0,d=e.count;m<d;m+=3){const g=e.getX(m+0),v=e.getX(m+1),f=e.getX(m+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,f),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,f),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let m=0,d=t.count;m<d;m+=3)r.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(m+0,u.x,u.y,u.z),n.setXYZ(m+1,u.x,u.y,u.z),n.setXYZ(m+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,m=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,f=l.length;v<f;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let p=0;p<u;p++)m[g++]=c[d++]}return new gt(m,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const m=c[u],d=e(m,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,m=c.length;h<m;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let m=0,d=h.length;m<d;m++)u.push(h[m].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wc=new rt,yi=new Ar,ks=new Gi,Rc=new D,Zi=new D,Ji=new D,Qi=new D,oo=new D,Gs=new D,Hs=new Pe,Vs=new Pe,Ws=new Pe,Cc=new D,Lc=new D,Pc=new D,Xs=new D,qs=new D;class Zt extends pt{constructor(e=new Vt,t=new bs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Gs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(oo.fromBufferAttribute(h,e),o?Gs.addScaledVector(oo,u):Gs.addScaledVector(oo.sub(t),u))}t.add(Gs)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(s),yi.copy(e.ray).recast(e.near),!(ks.containsPoint(yi.origin)===!1&&(yi.intersectSphere(ks,Rc)===null||yi.origin.distanceToSquared(Rc)>(e.far-e.near)**2))&&(wc.copy(s).invert(),yi.copy(e.ray).applyMatrix4(wc),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,m=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=m.length;g<v;g++){const f=m[g],p=o[f.materialIndex],M=Math.max(f.start,d.start),x=Math.min(a.count,Math.min(f.start+f.count,d.start+d.count));for(let y=M,C=x;y<C;y+=3){const R=a.getX(y),T=a.getX(y+1),H=a.getX(y+2);r=Ys(this,p,e,n,c,u,h,R,T,H),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let f=g,p=v;f<p;f+=3){const M=a.getX(f),x=a.getX(f+1),y=a.getX(f+2);r=Ys(this,o,e,n,c,u,h,M,x,y),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=m.length;g<v;g++){const f=m[g],p=o[f.materialIndex],M=Math.max(f.start,d.start),x=Math.min(l.count,Math.min(f.start+f.count,d.start+d.count));for(let y=M,C=x;y<C;y+=3){const R=y,T=y+1,H=y+2;r=Ys(this,p,e,n,c,u,h,R,T,H),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let f=g,p=v;f<p;f+=3){const M=f,x=f+1,y=f+2;r=Ys(this,o,e,n,c,u,h,M,x,y),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function hd(i,e,t,n,r,s,o,a){let l;if(e.side===Ut?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===jn,a),l===null)return null;qs.copy(a),qs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(qs);return c<t.near||c>t.far?null:{distance:c,point:qs.clone(),object:i}}function Ys(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Zi),i.getVertexPosition(l,Ji),i.getVertexPosition(c,Qi);const u=hd(i,e,t,n,Zi,Ji,Qi,Xs);if(u){r&&(Hs.fromBufferAttribute(r,a),Vs.fromBufferAttribute(r,l),Ws.fromBufferAttribute(r,c),u.uv=hn.getInterpolation(Xs,Zi,Ji,Qi,Hs,Vs,Ws,new Pe)),s&&(Hs.fromBufferAttribute(s,a),Vs.fromBufferAttribute(s,l),Ws.fromBufferAttribute(s,c),u.uv1=hn.getInterpolation(Xs,Zi,Ji,Qi,Hs,Vs,Ws,new Pe),u.uv2=u.uv1),o&&(Cc.fromBufferAttribute(o,a),Lc.fromBufferAttribute(o,l),Pc.fromBufferAttribute(o,c),u.normal=hn.getInterpolation(Xs,Zi,Ji,Qi,Cc,Lc,Pc,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new D,materialIndex:0};hn.getNormal(Zi,Ji,Qi,h.normal),u.face=h}return u}class br extends Vt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let m=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(h,2));function g(v,f,p,M,x,y,C,R,T,H,U){const _=y/T,E=C/H,B=y/2,z=C/2,P=R/2,F=T+1,O=H+1;let q=0,j=0;const $=new D;for(let Z=0;Z<O;Z++){const te=Z*E-z;for(let K=0;K<F;K++){const J=K*_-B;$[v]=J*M,$[f]=te*x,$[p]=P,c.push($.x,$.y,$.z),$[v]=0,$[f]=0,$[p]=R>0?1:-1,u.push($.x,$.y,$.z),h.push(K/T),h.push(1-Z/H),q+=1}}for(let Z=0;Z<H;Z++)for(let te=0;te<T;te++){const K=m+te+F*Z,J=m+te+F*(Z+1),N=m+(te+1)+F*(Z+1),V=m+(te+1)+F*Z;l.push(K,J,V),l.push(J,N,V),j+=6}a.addGroup(d,j,U),d+=j,m+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _r(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function zt(i){const e={};for(let t=0;t<i.length;t++){const n=_r(i[t]);for(const r in n)e[r]=n[r]}return e}function fd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gh(i){return i.getRenderTarget()===null?i.outputColorSpace:Qe.workingColorSpace}const Hh={clone:_r,merge:zt};var dd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dd,this.fragmentShader=pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_r(e.uniforms),this.uniformsGroups=fd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Yl extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Sn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new D,Dc=new Pe,Ic=new Pe;class jt extends Yl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ei.x,ei.y).multiplyScalar(-e/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-e/ei.z)}getViewSize(e,t){return this.getViewBounds(e,Dc,Ic),t.subVectors(Ic,Dc)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const er=-90,tr=1;class Vh extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new jt(er,tr,e,t);r.layers=this.layers,this.add(r);const s=new jt(er,tr,e,t);s.layers=this.layers,this.add(s);const o=new jt(er,tr,e,t);o.layers=this.layers,this.add(o);const a=new jt(er,tr,e,t);a.layers=this.layers,this.add(a);const l=new jt(er,tr,e,t);l.layers=this.layers,this.add(l);const c=new jt(er,tr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),m=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,m,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class jl extends wt{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ni,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wh extends fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(fr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Yn?dt:Ht),this.texture=new jl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Et}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new br(5,5,5),s=new Tn({name:"CubemapFromEquirect",uniforms:_r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:Xn});s.uniforms.tEquirect.value=t;const o=new Zt(r,s),a=t.minFilter;return t.minFilter===Hn&&(t.minFilter=Et),new Vh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const lo=new D,md=new D,gd=new We;class zn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=lo.subVectors(n,t).cross(md.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(lo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||gd.getNormalMatrix(e),r=this.coplanarPoint(lo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new Gi,js=new D;class Fa{constructor(e=new zn,t=new zn,n=new zn,r=new zn,s=new zn,o=new zn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Sn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],m=r[7],d=r[8],g=r[9],v=r[10],f=r[11],p=r[12],M=r[13],x=r[14],y=r[15];if(n[0].setComponents(l-s,m-c,f-d,y-p).normalize(),n[1].setComponents(l+s,m+c,f+d,y+p).normalize(),n[2].setComponents(l+o,m+u,f+g,y+M).normalize(),n[3].setComponents(l-o,m-u,f-g,y-M).normalize(),n[4].setComponents(l-a,m-h,f-v,y-x).normalize(),t===Sn)n[5].setComponents(l+a,m+h,f+v,y+x).normalize();else if(t===fs)n[5].setComponents(a,h,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(js.x=r.normal.x>0?e.max.x:e.min.x,js.y=r.normal.y>0?e.max.y:e.min.y,js.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xh(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function _d(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,m=c.usage,d=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,m),c.onUploadCallback();let v;if(h instanceof Float32Array)v=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=i.SHORT;else if(h instanceof Uint32Array)v=i.UNSIGNED_INT;else if(h instanceof Int32Array)v=i.INT;else if(h instanceof Int8Array)v=i.BYTE;else if(h instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:d}}function s(c,u,h){const m=u.array,d=u._updateRange,g=u.updateRanges;if(i.bindBuffer(h,c),d.count===-1&&g.length===0&&i.bufferSubData(h,0,m),g.length!==0){for(let v=0,f=g.length;v<f;v++){const p=g[v];t?i.bufferSubData(h,p.start*m.BYTES_PER_ELEMENT,m,p.start,p.count):i.bufferSubData(h,p.start*m.BYTES_PER_ELEMENT,m.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}d.count!==-1&&(t?i.bufferSubData(h,d.offset*m.BYTES_PER_ELEMENT,m,d.offset,d.count):i.bufferSubData(h,d.offset*m.BYTES_PER_ELEMENT,m.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const m=n.get(c);(!m||m.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class Tr extends Vt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,m=t/l,d=[],g=[],v=[],f=[];for(let p=0;p<u;p++){const M=p*m-o;for(let x=0;x<c;x++){const y=x*h-s;g.push(y,-M,0),v.push(0,0,1),f.push(x/a),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const x=M+c*p,y=M+c*(p+1),C=M+1+c*(p+1),R=M+1+c*p;d.push(x,y,R),d.push(y,C,R)}this.setIndex(d),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(v,3)),this.setAttribute("uv",new Jt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.width,e.height,e.widthSegments,e.heightSegments)}}var vd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xd=`#ifdef USE_ALPHAHASH
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
#endif`,Md=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ed=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ad=`#ifdef USE_AOMAP
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
#endif`,bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Td=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,wd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Rd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ld=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pd=`#ifdef USE_IRIDESCENCE
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
#endif`,Dd=`#ifdef USE_BUMPMAP
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
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Gd=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Hd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vd=`vec3 transformedNormal = objectNormal;
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
#endif`,Wd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jd="gl_FragColor = linearToOutputTexel( gl_FragColor );",$d=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Kd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Zd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jd=`#ifdef USE_ENVMAP
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
#endif`,Qd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ep=`#ifdef USE_ENVMAP
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
#endif`,tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sp=`#ifdef USE_GRADIENTMAP
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
}`,ap=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,op=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,up=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,hp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gp=`PhysicalMaterial material;
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
#endif`,_p=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,vp=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,xp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ep=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ap=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rp=`#if defined( USE_POINTS_UV )
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
#endif`,Cp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ip=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Up=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Np=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kp=`#ifdef USE_NORMALMAP
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
#endif`,Gp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$p=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,em=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rm=`#ifdef USE_SKINNING
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
#endif`,sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,am=`#ifdef USE_SKINNING
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
#endif`,om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,um=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hm=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fm=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vm=`uniform sampler2D t2D;
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`#include <common>
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
}`,Am=`#if DEPTH_PACKING == 3200
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
	#endif
}`,bm=`#define DISTANCE
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
}`,Tm=`#define DISTANCE
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
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lm=`uniform vec3 diffuse;
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
}`,Pm=`#include <common>
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
}`,Dm=`uniform vec3 diffuse;
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
}`,Im=`#define LAMBERT
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
}`,Um=`#define LAMBERT
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
}`,Nm=`#define MATCAP
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
}`,Fm=`#define MATCAP
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
}`,Om=`#define NORMAL
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
}`,Bm=`#define NORMAL
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
}`,zm=`#define PHONG
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
}`,km=`#define PHONG
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
}`,Gm=`#define STANDARD
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
}`,Hm=`#define STANDARD
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
}`,Vm=`#define TOON
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
}`,Wm=`#define TOON
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
}`,Xm=`uniform float size;
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
}`,qm=`uniform vec3 diffuse;
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
}`,Ym=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,jm=`uniform vec3 color;
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
}`,$m=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Km=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:vd,alphahash_pars_fragment:xd,alphamap_fragment:Md,alphamap_pars_fragment:yd,alphatest_fragment:Sd,alphatest_pars_fragment:Ed,aomap_fragment:Ad,aomap_pars_fragment:bd,batching_pars_vertex:Td,batching_vertex:wd,begin_vertex:Rd,beginnormal_vertex:Cd,bsdfs:Ld,iridescence_fragment:Pd,bumpmap_pars_fragment:Dd,clipping_planes_fragment:Id,clipping_planes_pars_fragment:Ud,clipping_planes_pars_vertex:Nd,clipping_planes_vertex:Fd,color_fragment:Od,color_pars_fragment:Bd,color_pars_vertex:zd,color_vertex:kd,common:Gd,cube_uv_reflection_fragment:Hd,defaultnormal_vertex:Vd,displacementmap_pars_vertex:Wd,displacementmap_vertex:Xd,emissivemap_fragment:qd,emissivemap_pars_fragment:Yd,colorspace_fragment:jd,colorspace_pars_fragment:$d,envmap_fragment:Kd,envmap_common_pars_fragment:Zd,envmap_pars_fragment:Jd,envmap_pars_vertex:Qd,envmap_physical_pars_fragment:hp,envmap_vertex:ep,fog_vertex:tp,fog_pars_vertex:np,fog_fragment:ip,fog_pars_fragment:rp,gradientmap_pars_fragment:sp,lightmap_fragment:ap,lightmap_pars_fragment:op,lights_lambert_fragment:lp,lights_lambert_pars_fragment:cp,lights_pars_begin:up,lights_toon_fragment:fp,lights_toon_pars_fragment:dp,lights_phong_fragment:pp,lights_phong_pars_fragment:mp,lights_physical_fragment:gp,lights_physical_pars_fragment:_p,lights_fragment_begin:vp,lights_fragment_maps:xp,lights_fragment_end:Mp,logdepthbuf_fragment:yp,logdepthbuf_pars_fragment:Sp,logdepthbuf_pars_vertex:Ep,logdepthbuf_vertex:Ap,map_fragment:bp,map_pars_fragment:Tp,map_particle_fragment:wp,map_particle_pars_fragment:Rp,metalnessmap_fragment:Cp,metalnessmap_pars_fragment:Lp,morphcolor_vertex:Pp,morphnormal_vertex:Dp,morphtarget_pars_vertex:Ip,morphtarget_vertex:Up,normal_fragment_begin:Np,normal_fragment_maps:Fp,normal_pars_fragment:Op,normal_pars_vertex:Bp,normal_vertex:zp,normalmap_pars_fragment:kp,clearcoat_normal_fragment_begin:Gp,clearcoat_normal_fragment_maps:Hp,clearcoat_pars_fragment:Vp,iridescence_pars_fragment:Wp,opaque_fragment:Xp,packing:qp,premultiplied_alpha_fragment:Yp,project_vertex:jp,dithering_fragment:$p,dithering_pars_fragment:Kp,roughnessmap_fragment:Zp,roughnessmap_pars_fragment:Jp,shadowmap_pars_fragment:Qp,shadowmap_pars_vertex:em,shadowmap_vertex:tm,shadowmask_pars_fragment:nm,skinbase_vertex:im,skinning_pars_vertex:rm,skinning_vertex:sm,skinnormal_vertex:am,specularmap_fragment:om,specularmap_pars_fragment:lm,tonemapping_fragment:cm,tonemapping_pars_fragment:um,transmission_fragment:hm,transmission_pars_fragment:fm,uv_pars_fragment:dm,uv_pars_vertex:pm,uv_vertex:mm,worldpos_vertex:gm,background_vert:_m,background_frag:vm,backgroundCube_vert:xm,backgroundCube_frag:Mm,cube_vert:ym,cube_frag:Sm,depth_vert:Em,depth_frag:Am,distanceRGBA_vert:bm,distanceRGBA_frag:Tm,equirect_vert:wm,equirect_frag:Rm,linedashed_vert:Cm,linedashed_frag:Lm,meshbasic_vert:Pm,meshbasic_frag:Dm,meshlambert_vert:Im,meshlambert_frag:Um,meshmatcap_vert:Nm,meshmatcap_frag:Fm,meshnormal_vert:Om,meshnormal_frag:Bm,meshphong_vert:zm,meshphong_frag:km,meshphysical_vert:Gm,meshphysical_frag:Hm,meshtoon_vert:Vm,meshtoon_frag:Wm,points_vert:Xm,points_frag:qm,shadow_vert:Ym,shadow_frag:jm,sprite_vert:$m,sprite_frag:Km},he={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},cn={basic:{uniforms:zt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:zt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ke(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:zt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:zt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:zt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new ke(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:zt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:zt([he.points,he.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:zt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:zt([he.common,he.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:zt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:zt([he.sprite,he.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:zt([he.common,he.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:zt([he.lights,he.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};cn.physical={uniforms:zt([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const $s={r:0,b:0,g:0};function Zm(i,e,t,n,r,s,o){const a=new ke(0);let l=s===!0?0:1,c,u,h=null,m=0,d=null;function g(f,p){let M=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?v(a,l):x&&x.isColor&&(v(x,1),M=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ss)?(u===void 0&&(u=new Zt(new br(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:_r(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(x.colorSpace)!==nt,(h!==x||m!==x.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,m=x.version,d=i.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Zt(new Tr(2,2),new Tn({name:"BackgroundMaterial",uniforms:_r(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(x.colorSpace)!==nt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||m!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,m=x.version,d=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function v(f,p){f.getRGB($s,Gh(i)),n.buffers.color.setClear($s.r,$s.g,$s.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(f,p=1){a.set(f),l=p,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,v(a,l)},render:g}}function Jm(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=f(null);let c=l,u=!1;function h(P,F,O,q,j){let $=!1;if(o){const Z=v(q,O,F);c!==Z&&(c=Z,d(c.object)),$=p(P,q,O,j),$&&M(P,q,O,j)}else{const Z=F.wireframe===!0;(c.geometry!==q.id||c.program!==O.id||c.wireframe!==Z)&&(c.geometry=q.id,c.program=O.id,c.wireframe=Z,$=!0)}j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,H(P,F,O,q),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function m(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(P){return n.isWebGL2?i.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function v(P,F,O){const q=O.wireframe===!0;let j=a[P.id];j===void 0&&(j={},a[P.id]=j);let $=j[F.id];$===void 0&&($={},j[F.id]=$);let Z=$[q];return Z===void 0&&(Z=f(m()),$[q]=Z),Z}function f(P){const F=[],O=[],q=[];for(let j=0;j<r;j++)F[j]=0,O[j]=0,q[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:O,attributeDivisors:q,object:P,attributes:{},index:null}}function p(P,F,O,q){const j=c.attributes,$=F.attributes;let Z=0;const te=O.getAttributes();for(const K in te)if(te[K].location>=0){const N=j[K];let V=$[K];if(V===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(V=P.instanceColor)),N===void 0||N.attribute!==V||V&&N.data!==V.data)return!0;Z++}return c.attributesNum!==Z||c.index!==q}function M(P,F,O,q){const j={},$=F.attributes;let Z=0;const te=O.getAttributes();for(const K in te)if(te[K].location>=0){let N=$[K];N===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(N=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(N=P.instanceColor));const V={};V.attribute=N,N&&N.data&&(V.data=N.data),j[K]=V,Z++}c.attributes=j,c.attributesNum=Z,c.index=q}function x(){const P=c.newAttributes;for(let F=0,O=P.length;F<O;F++)P[F]=0}function y(P){C(P,0)}function C(P,F){const O=c.newAttributes,q=c.enabledAttributes,j=c.attributeDivisors;O[P]=1,q[P]===0&&(i.enableVertexAttribArray(P),q[P]=1),j[P]!==F&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),j[P]=F)}function R(){const P=c.newAttributes,F=c.enabledAttributes;for(let O=0,q=F.length;O<q;O++)F[O]!==P[O]&&(i.disableVertexAttribArray(O),F[O]=0)}function T(P,F,O,q,j,$,Z){Z===!0?i.vertexAttribIPointer(P,F,O,j,$):i.vertexAttribPointer(P,F,O,q,j,$)}function H(P,F,O,q){if(n.isWebGL2===!1&&(P.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const j=q.attributes,$=O.getAttributes(),Z=F.defaultAttributeValues;for(const te in $){const K=$[te];if(K.location>=0){let J=j[te];if(J===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),J!==void 0){const N=J.normalized,V=J.itemSize,se=t.get(J);if(se===void 0)continue;const fe=se.buffer,le=se.type,ce=se.bytesPerElement,Ee=n.isWebGL2===!0&&(le===i.INT||le===i.UNSIGNED_INT||J.gpuType===Pl);if(J.isInterleavedBufferAttribute){const Me=J.data,I=Me.stride,Xe=J.offset;if(Me.isInstancedInterleavedBuffer){for(let pe=0;pe<K.locationSize;pe++)C(K.location+pe,Me.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let pe=0;pe<K.locationSize;pe++)y(K.location+pe);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let pe=0;pe<K.locationSize;pe++)T(K.location+pe,V/K.locationSize,le,N,I*ce,(Xe+V/K.locationSize*pe)*ce,Ee)}else{if(J.isInstancedBufferAttribute){for(let Me=0;Me<K.locationSize;Me++)C(K.location+Me,J.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Me=0;Me<K.locationSize;Me++)y(K.location+Me);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let Me=0;Me<K.locationSize;Me++)T(K.location+Me,V/K.locationSize,le,N,V*ce,V/K.locationSize*Me*ce,Ee)}}else if(Z!==void 0){const N=Z[te];if(N!==void 0)switch(N.length){case 2:i.vertexAttrib2fv(K.location,N);break;case 3:i.vertexAttrib3fv(K.location,N);break;case 4:i.vertexAttrib4fv(K.location,N);break;default:i.vertexAttrib1fv(K.location,N)}}}}R()}function U(){B();for(const P in a){const F=a[P];for(const O in F){const q=F[O];for(const j in q)g(q[j].object),delete q[j];delete F[O]}delete a[P]}}function _(P){if(a[P.id]===void 0)return;const F=a[P.id];for(const O in F){const q=F[O];for(const j in q)g(q[j].object),delete q[j];delete F[O]}delete a[P.id]}function E(P){for(const F in a){const O=a[F];if(O[P.id]===void 0)continue;const q=O[P.id];for(const j in q)g(q[j].object),delete q[j];delete O[P.id]}}function B(){z(),u=!0,c!==l&&(c=l,d(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:B,resetDefaultState:z,dispose:U,releaseStatesOfGeometry:_,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:y,disableUnusedAttributes:R}}function Qm(i,e,t,n){const r=n.isWebGL2;let s;function o(u){s=u}function a(u,h){i.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,m){if(m===0)return;let d,g;if(r)d=i,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](s,u,h,m),t.update(h,s,m)}function c(u,h,m){if(m===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<m;g++)this.render(u[g],h[g]);else{d.multiDrawArraysWEBGL(s,u,0,h,0,m);let g=0;for(let v=0;v<m;v++)g+=h[v];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function eg(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,y=o||e.has("OES_texture_float"),C=x&&y,R=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:m,maxTextureSize:d,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:C,maxSamples:R}}function tg(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new zn,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,m){const d=h.length!==0||m||n!==0||r;return r=m,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,m){t=u(h,m,0)},this.setState=function(h,m,d){const g=h.clippingPlanes,v=h.clipIntersection,f=h.clipShadows,p=i.get(h);if(!r||g===null||g.length===0||s&&!f)s?u(null):c();else{const M=s?0:n,x=M*4;let y=p.clippingState||null;l.value=y,y=u(g,m,x,d);for(let C=0;C!==x;++C)y[C]=t[C];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,m,d,g){const v=h!==null?h.length:0;let f=null;if(v!==0){if(f=l.value,g!==!0||f===null){const p=d+v*4,M=m.matrixWorldInverse;a.getNormalMatrix(M),(f===null||f.length<p)&&(f=new Float32Array(p));for(let x=0,y=d;x!==v;++x,y+=4)o.copy(h[x]).applyMatrix4(M,a),o.normal.toArray(f,y),f[y+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}function ng(i){let e=new WeakMap;function t(o,a){return a===os?o.mapping=Ni:a===Sa&&(o.mapping=Fi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===os||a===Sa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Wh(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class $l extends Yl{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const cr=4,Uc=[.125,.215,.35,.446,.526,.582],Ci=20,co=new $l,Nc=new ke;let uo=null,ho=0,fo=0;const Ri=(1+Math.sqrt(5))/2,nr=1/Ri,Fc=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Ri,nr),new D(0,Ri,-nr),new D(nr,0,Ri),new D(-nr,0,Ri),new D(Ri,nr,0),new D(-Ri,nr,0)];class Ta{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){uo=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uo,ho,fo),e.scissorTest=!1,Ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ni||e.mapping===Fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uo=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:gr,format:rn,colorSpace:An,depthBuffer:!1},r=Oc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ig(s)),this._blurMaterial=rg(s,e,t)}return r}_compileMaterial(e){const t=new Zt(this._lodPlanes[0],e);this._renderer.compile(t,co)}_sceneToCubeUV(e,t,n,r){const a=new jt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,m=u.toneMapping;u.getClearColor(Nc),u.toneMapping=En,u.autoClear=!1;const d=new bs({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),g=new Zt(new br,d);let v=!1;const f=e.background;f?f.isColor&&(d.color.copy(f),e.background=null,v=!0):(d.color.copy(Nc),v=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;Ks(r,M*x,p>2?x:0,x,x),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=m,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ni||e.mapping===Fi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Zt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ks(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,co)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Fc[(r-1)%Fc.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Zt(this._lodPlanes[r],c),m=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ci-1),v=s/g,f=isFinite(s)?1+Math.floor(u*v):Ci;f>Ci&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Ci}`);const p=[];let M=0;for(let T=0;T<Ci;++T){const H=T/v,U=Math.exp(-H*H/2);p.push(U),T===0?M+=U:T<f&&(M+=2*U)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;m.envMap.value=e.texture,m.samples.value=f,m.weights.value=p,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:x}=this;m.dTheta.value=g,m.mipInt.value=x-n;const y=this._sizeLods[r],C=3*y*(r>x-cr?r-x+cr:0),R=4*(this._cubeSize-y);Ks(t,C,R,3*y,2*y),l.setRenderTarget(t),l.render(h,co)}}function ig(i){const e=[],t=[],n=[];let r=i;const s=i-cr+1+Uc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-cr?l=Uc[o-i+cr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,m=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,v=3,f=2,p=1,M=new Float32Array(v*g*d),x=new Float32Array(f*g*d),y=new Float32Array(p*g*d);for(let R=0;R<d;R++){const T=R%3*2/3-1,H=R>2?0:-1,U=[T,H,0,T+2/3,H,0,T+2/3,H+1,0,T,H,0,T+2/3,H+1,0,T,H+1,0];M.set(U,v*g*R),x.set(m,f*g*R);const _=[R,R,R,R,R,R];y.set(_,p*g*R)}const C=new Vt;C.setAttribute("position",new gt(M,v)),C.setAttribute("uv",new gt(x,f)),C.setAttribute("faceIndex",new gt(y,p)),e.push(C),r>cr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Oc(i,e,t){const n=new fi(i,e,t);return n.texture.mapping=Ss,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ks(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function rg(i,e,t){const n=new Float32Array(Ci),r=new D(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Bc(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function zc(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Kl(){return`

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
	`}function sg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===os||l===Sa,u=l===Ni||l===Fi;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Ta(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Ta(i));const m=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,m),a.addEventListener("dispose",s),m.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ag(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function og(i,e,t,n){const r={},s=new WeakMap;function o(h){const m=h.target;m.index!==null&&e.remove(m.index);for(const g in m.attributes)e.remove(m.attributes[g]);for(const g in m.morphAttributes){const v=m.morphAttributes[g];for(let f=0,p=v.length;f<p;f++)e.remove(v[f])}m.removeEventListener("dispose",o),delete r[m.id];const d=s.get(m);d&&(e.remove(d),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function a(h,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,t.memory.geometries++),m}function l(h){const m=h.attributes;for(const g in m)e.update(m[g],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const v=d[g];for(let f=0,p=v.length;f<p;f++)e.update(v[f],i.ARRAY_BUFFER)}}function c(h){const m=[],d=h.index,g=h.attributes.position;let v=0;if(d!==null){const M=d.array;v=d.version;for(let x=0,y=M.length;x<y;x+=3){const C=M[x+0],R=M[x+1],T=M[x+2];m.push(C,R,R,T,T,C)}}else if(g!==void 0){const M=g.array;v=g.version;for(let x=0,y=M.length/3-1;x<y;x+=3){const C=x+0,R=x+1,T=x+2;m.push(C,R,R,T,T,C)}}else return;const f=new(Fh(m)?ql:Xl)(m,1);f.version=v;const p=s.get(h);p&&e.remove(p),s.set(h,f)}function u(h){const m=s.get(h);if(m){const d=h.index;d!==null&&m.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function lg(i,e,t,n){const r=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,g){i.drawElements(s,g,a,d*l),t.update(g,s,1)}function h(d,g,v){if(v===0)return;let f,p;if(r)f=i,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,g,a,d*l,v),t.update(g,s,v)}function m(d,g,v){if(v===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<v;p++)this.render(d[p]/l,g[p]);else{f.multiDrawElementsWEBGL(s,g,0,a,d,0,v);let p=0;for(let M=0;M<v;M++)p+=g[M];t.update(p,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=m}function cg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ug(i,e){return i[0]-e[0]}function hg(i,e){return Math.abs(e[1])-Math.abs(i[1])}function fg(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new mt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=g!==void 0?g.length:0;let f=s.get(u);if(f===void 0||f.count!==v){let F=function(){z.dispose(),s.delete(u),u.removeEventListener("dispose",F)};var d=F;f!==void 0&&f.texture.dispose();const x=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],H=u.morphAttributes.color||[];let U=0;x===!0&&(U=1),y===!0&&(U=2),C===!0&&(U=3);let _=u.attributes.position.count*U,E=1;_>e.maxTextureSize&&(E=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const B=new Float32Array(_*E*4*v),z=new Wl(B,_,E,v);z.type=xn,z.needsUpdate=!0;const P=U*4;for(let O=0;O<v;O++){const q=R[O],j=T[O],$=H[O],Z=_*E*4*O;for(let te=0;te<q.count;te++){const K=te*P;x===!0&&(o.fromBufferAttribute(q,te),B[Z+K+0]=o.x,B[Z+K+1]=o.y,B[Z+K+2]=o.z,B[Z+K+3]=0),y===!0&&(o.fromBufferAttribute(j,te),B[Z+K+4]=o.x,B[Z+K+5]=o.y,B[Z+K+6]=o.z,B[Z+K+7]=0),C===!0&&(o.fromBufferAttribute($,te),B[Z+K+8]=o.x,B[Z+K+9]=o.y,B[Z+K+10]=o.z,B[Z+K+11]=$.itemSize===4?o.w:1)}}f={count:v,texture:z,size:new Pe(_,E)},s.set(u,f),u.addEventListener("dispose",F)}let p=0;for(let x=0;x<m.length;x++)p+=m[x];const M=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",M),h.getUniforms().setValue(i,"morphTargetInfluences",m),h.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}else{const g=m===void 0?0:m.length;let v=n[u.id];if(v===void 0||v.length!==g){v=[];for(let y=0;y<g;y++)v[y]=[y,0];n[u.id]=v}for(let y=0;y<g;y++){const C=v[y];C[0]=y,C[1]=m[y]}v.sort(hg);for(let y=0;y<8;y++)y<g&&v[y][1]?(a[y][0]=v[y][0],a[y][1]=v[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(ug);const f=u.morphAttributes.position,p=u.morphAttributes.normal;let M=0;for(let y=0;y<8;y++){const C=a[y],R=C[0],T=C[1];R!==Number.MAX_SAFE_INTEGER&&T?(f&&u.getAttribute("morphTarget"+y)!==f[R]&&u.setAttribute("morphTarget"+y,f[R]),p&&u.getAttribute("morphNormal"+y)!==p[R]&&u.setAttribute("morphNormal"+y,p[R]),r[y]=T,M+=T):(f&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),p&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const x=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(i,"morphTargetBaseInfluence",x),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function dg(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==c&&(m.update(),r.set(m,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Zl extends wt{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:hi,u!==hi&&u!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===hi&&(n=Vn),n===void 0&&u===Oi&&(n=ui),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:It,this.minFilter=l!==void 0?l:It,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const qh=new wt,Yh=new Zl(1,1);Yh.compareFunction=kl;const jh=new Wl,$h=new zh,Kh=new jl,kc=[],Gc=[],Hc=new Float32Array(16),Vc=new Float32Array(9),Wc=new Float32Array(4);function wr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=kc[r];if(s===void 0&&(s=new Float32Array(r),kc[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Oa(i,e){let t=Gc[e];t===void 0&&(t=new Int32Array(e),Gc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function pg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function mg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),vt(t,e)}}function gg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),vt(t,e)}}function _g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),vt(t,e)}}function vg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;Wc.set(n),i.uniformMatrix2fv(this.addr,!1,Wc),vt(t,n)}}function xg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;Vc.set(n),i.uniformMatrix3fv(this.addr,!1,Vc),vt(t,n)}}function Mg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;Hc.set(n),i.uniformMatrix4fv(this.addr,!1,Hc),vt(t,n)}}function yg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Sg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2iv(this.addr,e),vt(t,e)}}function Eg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3iv(this.addr,e),vt(t,e)}}function Ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4iv(this.addr,e),vt(t,e)}}function bg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Tg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2uiv(this.addr,e),vt(t,e)}}function wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3uiv(this.addr,e),vt(t,e)}}function Rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4uiv(this.addr,e),vt(t,e)}}function Cg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Yh:qh;t.setTexture2D(e||s,r)}function Lg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||$h,r)}function Pg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Kh,r)}function Dg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||jh,r)}function Ig(i){switch(i){case 5126:return pg;case 35664:return mg;case 35665:return gg;case 35666:return _g;case 35674:return vg;case 35675:return xg;case 35676:return Mg;case 5124:case 35670:return yg;case 35667:case 35671:return Sg;case 35668:case 35672:return Eg;case 35669:case 35673:return Ag;case 5125:return bg;case 36294:return Tg;case 36295:return wg;case 36296:return Rg;case 35678:case 36198:case 36298:case 36306:case 35682:return Cg;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Pg;case 36289:case 36303:case 36311:case 36292:return Dg}}function Ug(i,e){i.uniform1fv(this.addr,e)}function Ng(i,e){const t=wr(e,this.size,2);i.uniform2fv(this.addr,t)}function Fg(i,e){const t=wr(e,this.size,3);i.uniform3fv(this.addr,t)}function Og(i,e){const t=wr(e,this.size,4);i.uniform4fv(this.addr,t)}function Bg(i,e){const t=wr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function zg(i,e){const t=wr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function kg(i,e){const t=wr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Gg(i,e){i.uniform1iv(this.addr,e)}function Hg(i,e){i.uniform2iv(this.addr,e)}function Vg(i,e){i.uniform3iv(this.addr,e)}function Wg(i,e){i.uniform4iv(this.addr,e)}function Xg(i,e){i.uniform1uiv(this.addr,e)}function qg(i,e){i.uniform2uiv(this.addr,e)}function Yg(i,e){i.uniform3uiv(this.addr,e)}function jg(i,e){i.uniform4uiv(this.addr,e)}function $g(i,e,t){const n=this.cache,r=e.length,s=Oa(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||qh,s[o])}function Kg(i,e,t){const n=this.cache,r=e.length,s=Oa(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||$h,s[o])}function Zg(i,e,t){const n=this.cache,r=e.length,s=Oa(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Kh,s[o])}function Jg(i,e,t){const n=this.cache,r=e.length,s=Oa(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||jh,s[o])}function Qg(i){switch(i){case 5126:return Ug;case 35664:return Ng;case 35665:return Fg;case 35666:return Og;case 35674:return Bg;case 35675:return zg;case 35676:return kg;case 5124:case 35670:return Gg;case 35667:case 35671:return Hg;case 35668:case 35672:return Vg;case 35669:case 35673:return Wg;case 5125:return Xg;case 36294:return qg;case 36295:return Yg;case 36296:return jg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return Jg}}class e0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ig(t.type)}}class t0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qg(t.type)}}class n0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const po=/(\w+)(\])?(\[|\.)?/g;function Xc(i,e){i.seq.push(e),i.map[e.id]=e}function i0(i,e,t){const n=i.name,r=n.length;for(po.lastIndex=0;;){const s=po.exec(n),o=po.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Xc(t,c===void 0?new e0(a,i,e):new t0(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new n0(a),Xc(t,h)),t=h}}}class ua{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);i0(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function qc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const r0=37297;let s0=0;function a0(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function o0(i){const e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(i);let n;switch(e===t?n="":e===hs&&t===us?n="LinearDisplayP3ToLinearSRGB":e===us&&t===hs&&(n="LinearSRGBToLinearDisplayP3"),i){case An:case Es:return[n,"LinearTransferOETF"];case dt:case Ua:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Yc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+a0(i.getShaderSource(e),o)}else return r}function l0(i,e){const t=o0(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function c0(i,e){let t;switch(e){case Tl:t="Linear";break;case wl:t="Reinhard";break;case Rl:t="OptimizedCineon";break;case qr:t="ACESFilmic";break;case Cl:t="AgX";break;case _h:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function u0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ur).join(`
`)}function h0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function f0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function d0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ur(i){return i!==""}function jc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $c(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const p0=/^[ \t]*#include +<([\w\d./]+)>/gm;function dl(i){return i.replace(p0,g0)}const m0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function g0(i,e){let t=ze[e];if(t===void 0){const n=m0.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return dl(t)}const _0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kc(i){return i.replace(_0,v0)}function v0(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
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
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function x0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Al?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pn&&(e="SHADOWMAP_TYPE_VSM"),e}function M0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ni:case Fi:e="ENVMAP_TYPE_CUBE";break;case Ss:e="ENVMAP_TYPE_CUBE_UV";break}return e}function y0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Fi:e="ENVMAP_MODE_REFRACTION";break}return e}function S0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case bl:e="ENVMAP_BLENDING_MULTIPLY";break;case mh:e="ENVMAP_BLENDING_MIX";break;case gh:e="ENVMAP_BLENDING_ADD";break}return e}function E0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function A0(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=x0(t),c=M0(t),u=y0(t),h=S0(t),m=E0(t),d=t.isWebGL2?"":u0(t),g=h0(t),v=f0(s),f=r.createProgram();let p,M,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ur).join(`
`),p.length>0&&(p+=`
`),M=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ur).join(`
`),M.length>0&&(M+=`
`)):(p=[Zc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),M=[d,Zc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?ze.tonemapping_pars_fragment:"",t.toneMapping!==En?c0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,l0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ur).join(`
`)),o=dl(o),o=jc(o,t),o=$c(o,t),a=dl(a),a=jc(a,t),a=$c(a,t),o=Kc(o),a=Kc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const y=x+p+o,C=x+M+a,R=qc(r,r.VERTEX_SHADER,y),T=qc(r,r.FRAGMENT_SHADER,C);r.attachShader(f,R),r.attachShader(f,T),t.index0AttributeName!==void 0?r.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f);function H(B){if(i.debug.checkShaderErrors){const z=r.getProgramInfoLog(f).trim(),P=r.getShaderInfoLog(R).trim(),F=r.getShaderInfoLog(T).trim();let O=!0,q=!0;if(r.getProgramParameter(f,r.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,f,R,T);else{const j=Yc(r,R,"vertex"),$=Yc(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+z+`
`+j+`
`+$)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(P===""||F==="")&&(q=!1);q&&(B.diagnostics={runnable:O,programLog:z,vertexShader:{log:P,prefix:p},fragmentShader:{log:F,prefix:M}})}r.deleteShader(R),r.deleteShader(T),U=new ua(r,f),_=d0(r,f)}let U;this.getUniforms=function(){return U===void 0&&H(this),U};let _;this.getAttributes=function(){return _===void 0&&H(this),_};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(f,r0)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=s0++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=R,this.fragmentShader=T,this}let b0=0;class T0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new w0(e),t.set(e,n)),n}}class w0{constructor(e){this.id=b0++,this.code=e,this.usedTimes=0}}function R0(i,e,t,n,r,s,o){const a=new Na,l=new T0,c=new Set,u=[],h=r.isWebGL2,m=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return c.add(_),_===0?"uv":`uv${_}`}function p(_,E,B,z,P){const F=z.fog,O=P.geometry,q=_.isMeshStandardMaterial?z.environment:null,j=(_.isMeshStandardMaterial?t:e).get(_.envMap||q),$=j&&j.mapping===Ss?j.image.height:null,Z=v[_.type];_.precision!==null&&(g=r.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const te=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,K=te!==void 0?te.length:0;let J=0;O.morphAttributes.position!==void 0&&(J=1),O.morphAttributes.normal!==void 0&&(J=2),O.morphAttributes.color!==void 0&&(J=3);let N,V,se,fe;if(Z){const Ye=cn[Z];N=Ye.vertexShader,V=Ye.fragmentShader}else N=_.vertexShader,V=_.fragmentShader,l.update(_),se=l.getVertexShaderID(_),fe=l.getFragmentShaderID(_);const le=i.getRenderTarget(),ce=P.isInstancedMesh===!0,Ee=P.isBatchedMesh===!0,Me=!!_.map,I=!!_.matcap,Xe=!!j,pe=!!_.aoMap,Se=!!_.lightMap,ue=!!_.bumpMap,Ge=!!_.normalMap,Ce=!!_.displacementMap,b=!!_.emissiveMap,S=!!_.metalnessMap,G=!!_.roughnessMap,re=_.anisotropy>0,Q=_.clearcoat>0,ee=_.iridescence>0,ve=_.sheen>0,de=_.transmission>0,xe=re&&!!_.anisotropyMap,Re=Q&&!!_.clearcoatMap,Ne=Q&&!!_.clearcoatNormalMap,ne=Q&&!!_.clearcoatRoughnessMap,Ke=ee&&!!_.iridescenceMap,He=ee&&!!_.iridescenceThicknessMap,De=ve&&!!_.sheenColorMap,be=ve&&!!_.sheenRoughnessMap,ge=!!_.specularMap,Oe=!!_.specularColorMap,L=!!_.specularIntensityMap,oe=de&&!!_.transmissionMap,me=de&&!!_.thicknessMap,Te=!!_.gradientMap,w=!!_.alphaMap,ae=_.alphaTest>0,ie=!!_.alphaHash,ye=!!_.extensions;let we=En;_.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(we=i.toneMapping);const je={isWebGL2:h,shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:N,fragmentShader:V,defines:_.defines,customVertexShaderID:se,customFragmentShaderID:fe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Ee,instancing:ce,instancingColor:ce&&P.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:An,alphaToCoverage:!!_.alphaToCoverage,map:Me,matcap:I,envMap:Xe,envMapMode:Xe&&j.mapping,envMapCubeUVHeight:$,aoMap:pe,lightMap:Se,bumpMap:ue,normalMap:Ge,displacementMap:d&&Ce,emissiveMap:b,normalMapObjectSpace:Ge&&_.normalMapType===Rh,normalMapTangentSpace:Ge&&_.normalMapType===zl,metalnessMap:S,roughnessMap:G,anisotropy:re,anisotropyMap:xe,clearcoat:Q,clearcoatMap:Re,clearcoatNormalMap:Ne,clearcoatRoughnessMap:ne,iridescence:ee,iridescenceMap:Ke,iridescenceThicknessMap:He,sheen:ve,sheenColorMap:De,sheenRoughnessMap:be,specularMap:ge,specularColorMap:Oe,specularIntensityMap:L,transmission:de,transmissionMap:oe,thicknessMap:me,gradientMap:Te,opaque:_.transparent===!1&&_.blending===Ii&&_.alphaToCoverage===!1,alphaMap:w,alphaTest:ae,alphaHash:ie,combine:_.combine,mapUv:Me&&f(_.map.channel),aoMapUv:pe&&f(_.aoMap.channel),lightMapUv:Se&&f(_.lightMap.channel),bumpMapUv:ue&&f(_.bumpMap.channel),normalMapUv:Ge&&f(_.normalMap.channel),displacementMapUv:Ce&&f(_.displacementMap.channel),emissiveMapUv:b&&f(_.emissiveMap.channel),metalnessMapUv:S&&f(_.metalnessMap.channel),roughnessMapUv:G&&f(_.roughnessMap.channel),anisotropyMapUv:xe&&f(_.anisotropyMap.channel),clearcoatMapUv:Re&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&f(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:He&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:De&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:be&&f(_.sheenRoughnessMap.channel),specularMapUv:ge&&f(_.specularMap.channel),specularColorMapUv:Oe&&f(_.specularColorMap.channel),specularIntensityMapUv:L&&f(_.specularIntensityMap.channel),transmissionMapUv:oe&&f(_.transmissionMap.channel),thicknessMapUv:me&&f(_.thicknessMap.channel),alphaMapUv:w&&f(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Ge||re),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!O.attributes.uv&&(Me||w),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:P.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:J,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Me&&_.map.isVideoTexture===!0&&Qe.getTransfer(_.map.colorSpace)===nt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===un,flipSided:_.side===Ut,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:ye&&_.extensions.derivatives===!0,extensionFragDepth:ye&&_.extensions.fragDepth===!0,extensionDrawBuffers:ye&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:ye&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ye&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ye&&_.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function M(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const B in _.defines)E.push(B),E.push(_.defines[B]);return _.isRawShaderMaterial===!1&&(x(E,_),y(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function x(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function y(_,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),_.push(a.mask)}function C(_){const E=v[_.type];let B;if(E){const z=cn[E];B=Hh.clone(z.uniforms)}else B=_.uniforms;return B}function R(_,E){let B;for(let z=0,P=u.length;z<P;z++){const F=u[z];if(F.cacheKey===E){B=F,++B.usedTimes;break}}return B===void 0&&(B=new A0(i,E,_,s),u.push(B)),B}function T(_){if(--_.usedTimes===0){const E=u.indexOf(_);u[E]=u[u.length-1],u.pop(),_.destroy()}}function H(_){l.remove(_)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:M,getUniforms:C,acquireProgram:R,releaseProgram:T,releaseShaderCache:H,programs:u,dispose:U}}function C0(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function L0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Jc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Qc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,m,d,g,v,f){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:m,material:d,groupOrder:g,renderOrder:h.renderOrder,z:v,group:f},i[e]=p):(p.id=h.id,p.object=h,p.geometry=m,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=f),e++,p}function a(h,m,d,g,v,f){const p=o(h,m,d,g,v,f);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(h,m,d,g,v,f){const p=o(h,m,d,g,v,f);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,m){t.length>1&&t.sort(h||L0),n.length>1&&n.sort(m||Jc),r.length>1&&r.sort(m||Jc)}function u(){for(let h=e,m=i.length;h<m;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function P0(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Qc,i.set(n,[o])):r>=s.length?(o=new Qc,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function D0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new ke};break;case"SpotLight":t={position:new D,direction:new D,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function I0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let U0=0;function N0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function F0(i,e){const t=new D0,n=I0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new D);const s=new D,o=new rt,a=new rt;function l(u,h){let m=0,d=0,g=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let v=0,f=0,p=0,M=0,x=0,y=0,C=0,R=0,T=0,H=0,U=0;u.sort(N0);const _=h===!0?Math.PI:1;for(let B=0,z=u.length;B<z;B++){const P=u[B],F=P.color,O=P.intensity,q=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)m+=F.r*O*_,d+=F.g*O*_,g+=F.b*O*_;else if(P.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(P.sh.coefficients[$],O);U++}else if(P.isDirectionalLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*_),P.castShadow){const Z=P.shadow,te=n.get(P);te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,r.directionalShadow[v]=te,r.directionalShadowMap[v]=j,r.directionalShadowMatrix[v]=P.shadow.matrix,y++}r.directional[v]=$,v++}else if(P.isSpotLight){const $=t.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(F).multiplyScalar(O*_),$.distance=q,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,r.spot[p]=$;const Z=P.shadow;if(P.map&&(r.spotLightMap[T]=P.map,T++,Z.updateMatrices(P),P.castShadow&&H++),r.spotLightMatrix[p]=Z.matrix,P.castShadow){const te=n.get(P);te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,r.spotShadow[p]=te,r.spotShadowMap[p]=j,R++}p++}else if(P.isRectAreaLight){const $=t.get(P);$.color.copy(F).multiplyScalar(O),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),r.rectArea[M]=$,M++}else if(P.isPointLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*_),$.distance=P.distance,$.decay=P.decay,P.castShadow){const Z=P.shadow,te=n.get(P);te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,te.shadowCameraNear=Z.camera.near,te.shadowCameraFar=Z.camera.far,r.pointShadow[f]=te,r.pointShadowMap[f]=j,r.pointShadowMatrix[f]=P.shadow.matrix,C++}r.point[f]=$,f++}else if(P.isHemisphereLight){const $=t.get(P);$.skyColor.copy(P.color).multiplyScalar(O*_),$.groundColor.copy(P.groundColor).multiplyScalar(O*_),r.hemi[x]=$,x++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=m,r.ambient[1]=d,r.ambient[2]=g;const E=r.hash;(E.directionalLength!==v||E.pointLength!==f||E.spotLength!==p||E.rectAreaLength!==M||E.hemiLength!==x||E.numDirectionalShadows!==y||E.numPointShadows!==C||E.numSpotShadows!==R||E.numSpotMaps!==T||E.numLightProbes!==U)&&(r.directional.length=v,r.spot.length=p,r.rectArea.length=M,r.point.length=f,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=R+T-H,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=U,E.directionalLength=v,E.pointLength=f,E.spotLength=p,E.rectAreaLength=M,E.hemiLength=x,E.numDirectionalShadows=y,E.numPointShadows=C,E.numSpotShadows=R,E.numSpotMaps=T,E.numLightProbes=U,r.version=U0++)}function c(u,h){let m=0,d=0,g=0,v=0,f=0;const p=h.matrixWorldInverse;for(let M=0,x=u.length;M<x;M++){const y=u[M];if(y.isDirectionalLight){const C=r.directional[m];C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),m++}else if(y.isSpotLight){const C=r.spot[g];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const C=r.rectArea[v];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(p),a.identity(),o.copy(y.matrixWorld),o.premultiply(p),a.extractRotation(o),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const C=r.point[d];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const C=r.hemi[f];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(p),f++}}}return{setup:l,setupView:c,state:r}}function eu(i,e){const t=new F0(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function O0(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new eu(i,e),t.set(s,[l])):o>=a.length?(l=new eu(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class Zh extends gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Th,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jh extends gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const B0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z0=`uniform sampler2D shadow_pass;
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
}`;function k0(i,e,t){let n=new Fa;const r=new Pe,s=new Pe,o=new mt,a=new Zh({depthPacking:wh}),l=new Jh,c={},u=t.maxTextureSize,h={[jn]:Ut,[Ut]:jn,[un]:un},m=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:B0,fragmentShader:z0}),d=m.clone();d.defines.HORIZONTAL_PASS=1;const g=new Vt;g.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Zt(g,m),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Al;let p=this.type;this.render=function(R,T,H){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;const U=i.getRenderTarget(),_=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Xn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const z=p!==pn&&this.type===pn,P=p===pn&&this.type!==pn;for(let F=0,O=R.length;F<O;F++){const q=R[F],j=q.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const $=j.getFrameExtents();if(r.multiply($),s.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,j.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,j.mapSize.y=s.y)),j.map===null||z===!0||P===!0){const te=this.type!==pn?{minFilter:It,magFilter:It}:{};j.map!==null&&j.map.dispose(),j.map=new fi(r.x,r.y,te),j.map.texture.name=q.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const Z=j.getViewportCount();for(let te=0;te<Z;te++){const K=j.getViewport(te);o.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),B.viewport(o),j.updateMatrices(q,te),n=j.getFrustum(),y(T,H,j.camera,q,this.type)}j.isPointLightShadow!==!0&&this.type===pn&&M(j,H),j.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(U,_,E)};function M(R,T){const H=e.update(v);m.defines.VSM_SAMPLES!==R.blurSamples&&(m.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,m.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new fi(r.x,r.y)),m.uniforms.shadow_pass.value=R.map.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(T,null,H,m,v,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(T,null,H,d,v,null)}function x(R,T,H,U){let _=null;const E=H.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(E!==void 0)_=E;else if(_=H.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=_.uuid,z=T.uuid;let P=c[B];P===void 0&&(P={},c[B]=P);let F=P[z];F===void 0&&(F=_.clone(),P[z]=F,T.addEventListener("dispose",C)),_=F}if(_.visible=T.visible,_.wireframe=T.wireframe,U===pn?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:h[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,H.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const B=i.properties.get(_);B.light=H}return _}function y(R,T,H,U,_){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===pn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,R.matrixWorld);const z=e.update(R),P=R.material;if(Array.isArray(P)){const F=z.groups;for(let O=0,q=F.length;O<q;O++){const j=F[O],$=P[j.materialIndex];if($&&$.visible){const Z=x(R,$,U,_);R.onBeforeShadow(i,R,T,H,z,Z,j),i.renderBufferDirect(H,null,z,Z,R,j),R.onAfterShadow(i,R,T,H,z,Z,j)}}}else if(P.visible){const F=x(R,P,U,_);R.onBeforeShadow(i,R,T,H,z,F,null),i.renderBufferDirect(H,null,z,F,R,null),R.onAfterShadow(i,R,T,H,z,F,null)}}const B=R.children;for(let z=0,P=B.length;z<P;z++)y(B[z],T,H,U,_)}function C(R){R.target.removeEventListener("dispose",C);for(const H in c){const U=c[H],_=R.target.uuid;_ in U&&(U[_].dispose(),delete U[_])}}}function G0(i,e,t){const n=t.isWebGL2;function r(){let w=!1;const ae=new mt;let ie=null;const ye=new mt(0,0,0,0);return{setMask:function(we){ie!==we&&!w&&(i.colorMask(we,we,we,we),ie=we)},setLocked:function(we){w=we},setClear:function(we,je,Ye,et,At){At===!0&&(we*=et,je*=et,Ye*=et),ae.set(we,je,Ye,et),ye.equals(ae)===!1&&(i.clearColor(we,je,Ye,et),ye.copy(ae))},reset:function(){w=!1,ie=null,ye.set(-1,0,0,0)}}}function s(){let w=!1,ae=null,ie=null,ye=null;return{setTest:function(we){we?ce(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(we){ae!==we&&!w&&(i.depthMask(we),ae=we)},setFunc:function(we){if(ie!==we){switch(we){case lh:i.depthFunc(i.NEVER);break;case ch:i.depthFunc(i.ALWAYS);break;case uh:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case hh:i.depthFunc(i.EQUAL);break;case fh:i.depthFunc(i.GEQUAL);break;case dh:i.depthFunc(i.GREATER);break;case ph:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=we}},setLocked:function(we){w=we},setClear:function(we){ye!==we&&(i.clearDepth(we),ye=we)},reset:function(){w=!1,ae=null,ie=null,ye=null}}}function o(){let w=!1,ae=null,ie=null,ye=null,we=null,je=null,Ye=null,et=null,At=null;return{setTest:function($e){w||($e?ce(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function($e){ae!==$e&&!w&&(i.stencilMask($e),ae=$e)},setFunc:function($e,ot,Nt){(ie!==$e||ye!==ot||we!==Nt)&&(i.stencilFunc($e,ot,Nt),ie=$e,ye=ot,we=Nt)},setOp:function($e,ot,Nt){(je!==$e||Ye!==ot||et!==Nt)&&(i.stencilOp($e,ot,Nt),je=$e,Ye=ot,et=Nt)},setLocked:function($e){w=$e},setClear:function($e){At!==$e&&(i.clearStencil($e),At=$e)},reset:function(){w=!1,ae=null,ie=null,ye=null,we=null,je=null,Ye=null,et=null,At=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let m={},d={},g=new WeakMap,v=[],f=null,p=!1,M=null,x=null,y=null,C=null,R=null,T=null,H=null,U=new ke(0,0,0),_=0,E=!1,B=null,z=null,P=null,F=null,O=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,$=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Z)[1]),j=$>=1):Z.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),j=$>=2);let te=null,K={};const J=i.getParameter(i.SCISSOR_BOX),N=i.getParameter(i.VIEWPORT),V=new mt().fromArray(J),se=new mt().fromArray(N);function fe(w,ae,ie,ye){const we=new Uint8Array(4),je=i.createTexture();i.bindTexture(w,je),i.texParameteri(w,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(w,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<ie;Ye++)n&&(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)?i.texImage3D(ae,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(ae+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return je}const le={};le[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(le[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ce(i.DEPTH_TEST),l.setFunc(as),Ce(!1),b(Po),ce(i.CULL_FACE),ue(Xn);function ce(w){m[w]!==!0&&(i.enable(w),m[w]=!0)}function Ee(w){m[w]!==!1&&(i.disable(w),m[w]=!1)}function Me(w,ae){return d[w]!==ae?(i.bindFramebuffer(w,ae),d[w]=ae,n&&(w===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ae),w===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ae)),!0):!1}function I(w,ae){let ie=v,ye=!1;if(w)if(ie=g.get(ae),ie===void 0&&(ie=[],g.set(ae,ie)),w.isWebGLMultipleRenderTargets){const we=w.texture;if(ie.length!==we.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let je=0,Ye=we.length;je<Ye;je++)ie[je]=i.COLOR_ATTACHMENT0+je;ie.length=we.length,ye=!0}}else ie[0]!==i.COLOR_ATTACHMENT0&&(ie[0]=i.COLOR_ATTACHMENT0,ye=!0);else ie[0]!==i.BACK&&(ie[0]=i.BACK,ye=!0);ye&&(t.isWebGL2?i.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function Xe(w){return f!==w?(i.useProgram(w),f=w,!0):!1}const pe={[ri]:i.FUNC_ADD,[Yu]:i.FUNC_SUBTRACT,[ju]:i.FUNC_REVERSE_SUBTRACT};if(n)pe[No]=i.MIN,pe[Fo]=i.MAX;else{const w=e.get("EXT_blend_minmax");w!==null&&(pe[No]=w.MIN_EXT,pe[Fo]=w.MAX_EXT)}const Se={[$u]:i.ZERO,[Ku]:i.ONE,[Zu]:i.SRC_COLOR,[Ma]:i.SRC_ALPHA,[ih]:i.SRC_ALPHA_SATURATE,[th]:i.DST_COLOR,[Qu]:i.DST_ALPHA,[Ju]:i.ONE_MINUS_SRC_COLOR,[ya]:i.ONE_MINUS_SRC_ALPHA,[nh]:i.ONE_MINUS_DST_COLOR,[eh]:i.ONE_MINUS_DST_ALPHA,[rh]:i.CONSTANT_COLOR,[sh]:i.ONE_MINUS_CONSTANT_COLOR,[ah]:i.CONSTANT_ALPHA,[oh]:i.ONE_MINUS_CONSTANT_ALPHA};function ue(w,ae,ie,ye,we,je,Ye,et,At,$e){if(w===Xn){p===!0&&(Ee(i.BLEND),p=!1);return}if(p===!1&&(ce(i.BLEND),p=!0),w!==qu){if(w!==M||$e!==E){if((x!==ri||R!==ri)&&(i.blendEquation(i.FUNC_ADD),x=ri,R=ri),$e)switch(w){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Do:i.blendFunc(i.ONE,i.ONE);break;case Io:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Do:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Io:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}y=null,C=null,T=null,H=null,U.set(0,0,0),_=0,M=w,E=$e}return}we=we||ae,je=je||ie,Ye=Ye||ye,(ae!==x||we!==R)&&(i.blendEquationSeparate(pe[ae],pe[we]),x=ae,R=we),(ie!==y||ye!==C||je!==T||Ye!==H)&&(i.blendFuncSeparate(Se[ie],Se[ye],Se[je],Se[Ye]),y=ie,C=ye,T=je,H=Ye),(et.equals(U)===!1||At!==_)&&(i.blendColor(et.r,et.g,et.b,At),U.copy(et),_=At),M=w,E=!1}function Ge(w,ae){w.side===un?Ee(i.CULL_FACE):ce(i.CULL_FACE);let ie=w.side===Ut;ae&&(ie=!ie),Ce(ie),w.blending===Ii&&w.transparent===!1?ue(Xn):ue(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),l.setFunc(w.depthFunc),l.setTest(w.depthTest),l.setMask(w.depthWrite),a.setMask(w.colorWrite);const ye=w.stencilWrite;c.setTest(ye),ye&&(c.setMask(w.stencilWriteMask),c.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),c.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),G(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(w){B!==w&&(w?i.frontFace(i.CW):i.frontFace(i.CCW),B=w)}function b(w){w!==Vu?(ce(i.CULL_FACE),w!==z&&(w===Po?i.cullFace(i.BACK):w===Wu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),z=w}function S(w){w!==P&&(j&&i.lineWidth(w),P=w)}function G(w,ae,ie){w?(ce(i.POLYGON_OFFSET_FILL),(F!==ae||O!==ie)&&(i.polygonOffset(ae,ie),F=ae,O=ie)):Ee(i.POLYGON_OFFSET_FILL)}function re(w){w?ce(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function Q(w){w===void 0&&(w=i.TEXTURE0+q-1),te!==w&&(i.activeTexture(w),te=w)}function ee(w,ae,ie){ie===void 0&&(te===null?ie=i.TEXTURE0+q-1:ie=te);let ye=K[ie];ye===void 0&&(ye={type:void 0,texture:void 0},K[ie]=ye),(ye.type!==w||ye.texture!==ae)&&(te!==ie&&(i.activeTexture(ie),te=ie),i.bindTexture(w,ae||le[w]),ye.type=w,ye.texture=ae)}function ve(){const w=K[te];w!==void 0&&w.type!==void 0&&(i.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function de(){try{i.compressedTexImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function xe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Re(){try{i.texSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ne(){try{i.texSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ne(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ke(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function He(){try{i.texStorage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function De(){try{i.texStorage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function be(){try{i.texImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ge(){try{i.texImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Oe(w){V.equals(w)===!1&&(i.scissor(w.x,w.y,w.z,w.w),V.copy(w))}function L(w){se.equals(w)===!1&&(i.viewport(w.x,w.y,w.z,w.w),se.copy(w))}function oe(w,ae){let ie=h.get(ae);ie===void 0&&(ie=new WeakMap,h.set(ae,ie));let ye=ie.get(w);ye===void 0&&(ye=i.getUniformBlockIndex(ae,w.name),ie.set(w,ye))}function me(w,ae){const ye=h.get(ae).get(w);u.get(ae)!==ye&&(i.uniformBlockBinding(ae,ye,w.__bindingPointIndex),u.set(ae,ye))}function Te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},te=null,K={},d={},g=new WeakMap,v=[],f=null,p=!1,M=null,x=null,y=null,C=null,R=null,T=null,H=null,U=new ke(0,0,0),_=0,E=!1,B=null,z=null,P=null,F=null,O=null,V.set(0,0,i.canvas.width,i.canvas.height),se.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ce,disable:Ee,bindFramebuffer:Me,drawBuffers:I,useProgram:Xe,setBlending:ue,setMaterial:Ge,setFlipSided:Ce,setCullFace:b,setLineWidth:S,setPolygonOffset:G,setScissorTest:re,activeTexture:Q,bindTexture:ee,unbindTexture:ve,compressedTexImage2D:de,compressedTexImage3D:xe,texImage2D:be,texImage3D:ge,updateUBOMapping:oe,uniformBlockBinding:me,texStorage2D:He,texStorage3D:De,texSubImage2D:Re,texSubImage3D:Ne,compressedTexSubImage2D:ne,compressedTexSubImage3D:Ke,scissor:Oe,viewport:L,reset:Te}}function H0(i,e,t,n,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,S){return d?new OffscreenCanvas(b,S):ps("canvas")}function v(b,S,G,re){let Q=1;if((b.width>re||b.height>re)&&(Q=re/Math.max(b.width,b.height)),Q<1||S===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ee=S?ba:Math.floor,ve=ee(Q*b.width),de=ee(Q*b.height);h===void 0&&(h=g(ve,de));const xe=G?g(ve,de):h;return xe.width=ve,xe.height=de,xe.getContext("2d").drawImage(b,0,0,ve,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ve+"x"+de+")."),xe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function f(b){return fl(b.width)&&fl(b.height)}function p(b){return a?!1:b.wrapS!==Kt||b.wrapT!==Kt||b.minFilter!==It&&b.minFilter!==Et}function M(b,S){return b.generateMipmaps&&S&&b.minFilter!==It&&b.minFilter!==Et}function x(b){i.generateMipmap(b)}function y(b,S,G,re,Q=!1){if(a===!1)return S;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ee=S;if(S===i.RED&&(G===i.FLOAT&&(ee=i.R32F),G===i.HALF_FLOAT&&(ee=i.R16F),G===i.UNSIGNED_BYTE&&(ee=i.R8)),S===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(ee=i.R8UI),G===i.UNSIGNED_SHORT&&(ee=i.R16UI),G===i.UNSIGNED_INT&&(ee=i.R32UI),G===i.BYTE&&(ee=i.R8I),G===i.SHORT&&(ee=i.R16I),G===i.INT&&(ee=i.R32I)),S===i.RG&&(G===i.FLOAT&&(ee=i.RG32F),G===i.HALF_FLOAT&&(ee=i.RG16F),G===i.UNSIGNED_BYTE&&(ee=i.RG8)),S===i.RGBA){const ve=Q?cs:Qe.getTransfer(re);G===i.FLOAT&&(ee=i.RGBA32F),G===i.HALF_FLOAT&&(ee=i.RGBA16F),G===i.UNSIGNED_BYTE&&(ee=ve===nt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function C(b,S,G){return M(b,G)===!0||b.isFramebufferTexture&&b.minFilter!==It&&b.minFilter!==Et?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function R(b){return b===It||b===Oo||b===ar?i.NEAREST:i.LINEAR}function T(b){const S=b.target;S.removeEventListener("dispose",T),U(S),S.isVideoTexture&&u.delete(S)}function H(b){const S=b.target;S.removeEventListener("dispose",H),E(S)}function U(b){const S=n.get(b);if(S.__webglInit===void 0)return;const G=b.source,re=m.get(G);if(re){const Q=re[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&_(b),Object.keys(re).length===0&&m.delete(G)}n.remove(b)}function _(b){const S=n.get(b);i.deleteTexture(S.__webglTexture);const G=b.source,re=m.get(G);delete re[S.__cacheKey],o.memory.textures--}function E(b){const S=b.texture,G=n.get(b),re=n.get(S);if(re.__webglTexture!==void 0&&(i.deleteTexture(re.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(G.__webglFramebuffer[Q]))for(let ee=0;ee<G.__webglFramebuffer[Q].length;ee++)i.deleteFramebuffer(G.__webglFramebuffer[Q][ee]);else i.deleteFramebuffer(G.__webglFramebuffer[Q]);G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer[Q])}else{if(Array.isArray(G.__webglFramebuffer))for(let Q=0;Q<G.__webglFramebuffer.length;Q++)i.deleteFramebuffer(G.__webglFramebuffer[Q]);else i.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&i.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let Q=0;Q<G.__webglColorRenderbuffer.length;Q++)G.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(G.__webglColorRenderbuffer[Q]);G.__webglDepthRenderbuffer&&i.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let Q=0,ee=S.length;Q<ee;Q++){const ve=n.get(S[Q]);ve.__webglTexture&&(i.deleteTexture(ve.__webglTexture),o.memory.textures--),n.remove(S[Q])}n.remove(S),n.remove(b)}let B=0;function z(){B=0}function P(){const b=B;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),B+=1,b}function F(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function O(b,S){const G=n.get(b);if(b.isVideoTexture&&Ge(b),b.isRenderTargetTexture===!1&&b.version>0&&G.__version!==b.version){const re=b.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(G,b,S);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+S)}function q(b,S){const G=n.get(b);if(b.version>0&&G.__version!==b.version){V(G,b,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+S)}function j(b,S){const G=n.get(b);if(b.version>0&&G.__version!==b.version){V(G,b,S);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+S)}function $(b,S){const G=n.get(b);if(b.version>0&&G.__version!==b.version){se(G,b,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+S)}const Z={[ls]:i.REPEAT,[Kt]:i.CLAMP_TO_EDGE,[Ea]:i.MIRRORED_REPEAT},te={[It]:i.NEAREST,[Oo]:i.NEAREST_MIPMAP_NEAREST,[ar]:i.NEAREST_MIPMAP_LINEAR,[Et]:i.LINEAR,[ra]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},K={[Ch]:i.NEVER,[Nh]:i.ALWAYS,[Lh]:i.LESS,[kl]:i.LEQUAL,[Ph]:i.EQUAL,[Uh]:i.GEQUAL,[Dh]:i.GREATER,[Ih]:i.NOTEQUAL};function J(b,S,G){if(S.type===xn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Et||S.magFilter===ra||S.magFilter===ar||S.magFilter===Hn||S.minFilter===Et||S.minFilter===ra||S.minFilter===ar||S.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),G?(i.texParameteri(b,i.TEXTURE_WRAP_S,Z[S.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,Z[S.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,Z[S.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,te[S.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,te[S.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==Kt||S.wrapT!==Kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,R(S.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,R(S.minFilter)),S.minFilter!==It&&S.minFilter!==Et&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,K[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===It||S.minFilter!==ar&&S.minFilter!==Hn||S.type===xn&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===gr&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(b,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function N(b,S){let G=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",T));const re=S.source;let Q=m.get(re);Q===void 0&&(Q={},m.set(re,Q));const ee=F(S);if(ee!==b.__cacheKey){Q[ee]===void 0&&(Q[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[ee].usedTimes++;const ve=Q[b.__cacheKey];ve!==void 0&&(Q[b.__cacheKey].usedTimes--,ve.usedTimes===0&&_(S)),b.__cacheKey=ee,b.__webglTexture=Q[ee].texture}return G}function V(b,S,G){let re=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(re=i.TEXTURE_3D);const Q=N(b,S),ee=S.source;t.bindTexture(re,b.__webglTexture,i.TEXTURE0+G);const ve=n.get(ee);if(ee.version!==ve.__version||Q===!0){t.activeTexture(i.TEXTURE0+G);const de=Qe.getPrimaries(Qe.workingColorSpace),xe=S.colorSpace===Ht?null:Qe.getPrimaries(S.colorSpace),Re=S.colorSpace===Ht||de===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ne=p(S)&&f(S.image)===!1;let ne=v(S.image,Ne,!1,r.maxTextureSize);ne=Ce(S,ne);const Ke=f(ne)||a,He=s.convert(S.format,S.colorSpace);let De=s.convert(S.type),be=y(S.internalFormat,He,De,S.colorSpace,S.isVideoTexture);J(re,S,Ke);let ge;const Oe=S.mipmaps,L=a&&S.isVideoTexture!==!0&&be!==Ol,oe=ve.__version===void 0||Q===!0,me=ee.dataReady,Te=C(S,ne,Ke);if(S.isDepthTexture)be=i.DEPTH_COMPONENT,a?S.type===xn?be=i.DEPTH_COMPONENT32F:S.type===Vn?be=i.DEPTH_COMPONENT24:S.type===ui?be=i.DEPTH24_STENCIL8:be=i.DEPTH_COMPONENT16:S.type===xn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===hi&&be===i.DEPTH_COMPONENT&&S.type!==Ia&&S.type!==Vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Vn,De=s.convert(S.type)),S.format===Oi&&be===i.DEPTH_COMPONENT&&(be=i.DEPTH_STENCIL,S.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ui,De=s.convert(S.type))),oe&&(L?t.texStorage2D(i.TEXTURE_2D,1,be,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,be,ne.width,ne.height,0,He,De,null));else if(S.isDataTexture)if(Oe.length>0&&Ke){L&&oe&&t.texStorage2D(i.TEXTURE_2D,Te,be,Oe[0].width,Oe[0].height);for(let w=0,ae=Oe.length;w<ae;w++)ge=Oe[w],L?me&&t.texSubImage2D(i.TEXTURE_2D,w,0,0,ge.width,ge.height,He,De,ge.data):t.texImage2D(i.TEXTURE_2D,w,be,ge.width,ge.height,0,He,De,ge.data);S.generateMipmaps=!1}else L?(oe&&t.texStorage2D(i.TEXTURE_2D,Te,be,ne.width,ne.height),me&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne.width,ne.height,He,De,ne.data)):t.texImage2D(i.TEXTURE_2D,0,be,ne.width,ne.height,0,He,De,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){L&&oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,be,Oe[0].width,Oe[0].height,ne.depth);for(let w=0,ae=Oe.length;w<ae;w++)ge=Oe[w],S.format!==rn?He!==null?L?me&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,w,0,0,0,ge.width,ge.height,ne.depth,He,ge.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,w,be,ge.width,ge.height,ne.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?me&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,w,0,0,0,ge.width,ge.height,ne.depth,He,De,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,w,be,ge.width,ge.height,ne.depth,0,He,De,ge.data)}else{L&&oe&&t.texStorage2D(i.TEXTURE_2D,Te,be,Oe[0].width,Oe[0].height);for(let w=0,ae=Oe.length;w<ae;w++)ge=Oe[w],S.format!==rn?He!==null?L?me&&t.compressedTexSubImage2D(i.TEXTURE_2D,w,0,0,ge.width,ge.height,He,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,w,be,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?me&&t.texSubImage2D(i.TEXTURE_2D,w,0,0,ge.width,ge.height,He,De,ge.data):t.texImage2D(i.TEXTURE_2D,w,be,ge.width,ge.height,0,He,De,ge.data)}else if(S.isDataArrayTexture)L?(oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,be,ne.width,ne.height,ne.depth),me&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,He,De,ne.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,ne.width,ne.height,ne.depth,0,He,De,ne.data);else if(S.isData3DTexture)L?(oe&&t.texStorage3D(i.TEXTURE_3D,Te,be,ne.width,ne.height,ne.depth),me&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,He,De,ne.data)):t.texImage3D(i.TEXTURE_3D,0,be,ne.width,ne.height,ne.depth,0,He,De,ne.data);else if(S.isFramebufferTexture){if(oe)if(L)t.texStorage2D(i.TEXTURE_2D,Te,be,ne.width,ne.height);else{let w=ne.width,ae=ne.height;for(let ie=0;ie<Te;ie++)t.texImage2D(i.TEXTURE_2D,ie,be,w,ae,0,He,De,null),w>>=1,ae>>=1}}else if(Oe.length>0&&Ke){L&&oe&&t.texStorage2D(i.TEXTURE_2D,Te,be,Oe[0].width,Oe[0].height);for(let w=0,ae=Oe.length;w<ae;w++)ge=Oe[w],L?me&&t.texSubImage2D(i.TEXTURE_2D,w,0,0,He,De,ge):t.texImage2D(i.TEXTURE_2D,w,be,He,De,ge);S.generateMipmaps=!1}else L?(oe&&t.texStorage2D(i.TEXTURE_2D,Te,be,ne.width,ne.height),me&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,He,De,ne)):t.texImage2D(i.TEXTURE_2D,0,be,He,De,ne);M(S,Ke)&&x(re),ve.__version=ee.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function se(b,S,G){if(S.image.length!==6)return;const re=N(b,S),Q=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+G);const ee=n.get(Q);if(Q.version!==ee.__version||re===!0){t.activeTexture(i.TEXTURE0+G);const ve=Qe.getPrimaries(Qe.workingColorSpace),de=S.colorSpace===Ht?null:Qe.getPrimaries(S.colorSpace),xe=S.colorSpace===Ht||ve===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Re=S.isCompressedTexture||S.image[0].isCompressedTexture,Ne=S.image[0]&&S.image[0].isDataTexture,ne=[];for(let w=0;w<6;w++)!Re&&!Ne?ne[w]=v(S.image[w],!1,!0,r.maxCubemapSize):ne[w]=Ne?S.image[w].image:S.image[w],ne[w]=Ce(S,ne[w]);const Ke=ne[0],He=f(Ke)||a,De=s.convert(S.format,S.colorSpace),be=s.convert(S.type),ge=y(S.internalFormat,De,be,S.colorSpace),Oe=a&&S.isVideoTexture!==!0,L=ee.__version===void 0||re===!0,oe=Q.dataReady;let me=C(S,Ke,He);J(i.TEXTURE_CUBE_MAP,S,He);let Te;if(Re){Oe&&L&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,ge,Ke.width,Ke.height);for(let w=0;w<6;w++){Te=ne[w].mipmaps;for(let ae=0;ae<Te.length;ae++){const ie=Te[ae];S.format!==rn?De!==null?Oe?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+w,ae,0,0,ie.width,ie.height,De,ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+w,ae,ge,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+w,ae,0,0,ie.width,ie.height,De,be,ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+w,ae,ge,ie.width,ie.height,0,De,be,ie.data)}}}else{Te=S.mipmaps,Oe&&L&&(Te.length>0&&me++,t.texStorage2D(i.TEXTURE_CUBE_MAP,me,ge,ne[0].width,ne[0].height));for(let w=0;w<6;w++)if(Ne){Oe?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+w,0,0,0,ne[w].width,ne[w].height,De,be,ne[w].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+w,0,ge,ne[w].width,ne[w].height,0,De,be,ne[w].data);for(let ae=0;ae<Te.length;ae++){const ye=Te[ae].image[w].image;Oe?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+w,ae+1,0,0,ye.width,ye.height,De,be,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+w,ae+1,ge,ye.width,ye.height,0,De,be,ye.data)}}else{Oe?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+w,0,0,0,De,be,ne[w]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+w,0,ge,De,be,ne[w]);for(let ae=0;ae<Te.length;ae++){const ie=Te[ae];Oe?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+w,ae+1,0,0,De,be,ie.image[w]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+w,ae+1,ge,De,be,ie.image[w])}}}M(S,He)&&x(i.TEXTURE_CUBE_MAP),ee.__version=Q.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function fe(b,S,G,re,Q,ee){const ve=s.convert(G.format,G.colorSpace),de=s.convert(G.type),xe=y(G.internalFormat,ve,de,G.colorSpace);if(!n.get(S).__hasExternalTextures){const Ne=Math.max(1,S.width>>ee),ne=Math.max(1,S.height>>ee);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,ee,xe,Ne,ne,S.depth,0,ve,de,null):t.texImage2D(Q,ee,xe,Ne,ne,0,ve,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),ue(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,Q,n.get(G).__webglTexture,0,Se(S)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,Q,n.get(G).__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(b,S,G){if(i.bindRenderbuffer(i.RENDERBUFFER,b),S.depthBuffer&&!S.stencilBuffer){let re=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(G||ue(S)){const Q=S.depthTexture;Q&&Q.isDepthTexture&&(Q.type===xn?re=i.DEPTH_COMPONENT32F:Q.type===Vn&&(re=i.DEPTH_COMPONENT24));const ee=Se(S);ue(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,re,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,re,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,re,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(S.depthBuffer&&S.stencilBuffer){const re=Se(S);G&&ue(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,S.width,S.height):ue(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{const re=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Q=0;Q<re.length;Q++){const ee=re[Q],ve=s.convert(ee.format,ee.colorSpace),de=s.convert(ee.type),xe=y(ee.internalFormat,ve,de,ee.colorSpace),Re=Se(S);G&&ue(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,xe,S.width,S.height):ue(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,xe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,xe,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ce(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),O(S.depthTexture,0);const re=n.get(S.depthTexture).__webglTexture,Q=Se(S);if(S.depthTexture.format===hi)ue(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(S.depthTexture.format===Oi)ue(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ee(b){const S=n.get(b),G=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ce(S.__webglFramebuffer,b)}else if(G){S.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[re]),S.__webglDepthbuffer[re]=i.createRenderbuffer(),le(S.__webglDepthbuffer[re],b,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),le(S.__webglDepthbuffer,b,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(b,S,G){const re=n.get(b);S!==void 0&&fe(re.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Ee(b)}function I(b){const S=b.texture,G=n.get(b),re=n.get(S);b.addEventListener("dispose",H),b.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=S.version,o.memory.textures++);const Q=b.isWebGLCubeRenderTarget===!0,ee=b.isWebGLMultipleRenderTargets===!0,ve=f(b)||a;if(Q){G.__webglFramebuffer=[];for(let de=0;de<6;de++)if(a&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[de]=[];for(let xe=0;xe<S.mipmaps.length;xe++)G.__webglFramebuffer[de][xe]=i.createFramebuffer()}else G.__webglFramebuffer[de]=i.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let de=0;de<S.mipmaps.length;de++)G.__webglFramebuffer[de]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(ee)if(r.drawBuffers){const de=b.texture;for(let xe=0,Re=de.length;xe<Re;xe++){const Ne=n.get(de[xe]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&ue(b)===!1){const de=ee?S:[S];G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let xe=0;xe<de.length;xe++){const Re=de[xe];G.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[xe]);const Ne=s.convert(Re.format,Re.colorSpace),ne=s.convert(Re.type),Ke=y(Re.internalFormat,Ne,ne,Re.colorSpace,b.isXRRenderTarget===!0),He=Se(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,Ke,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,G.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),le(G.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),J(i.TEXTURE_CUBE_MAP,S,ve);for(let de=0;de<6;de++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)fe(G.__webglFramebuffer[de][xe],b,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe);else fe(G.__webglFramebuffer[de],b,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);M(S,ve)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){const de=b.texture;for(let xe=0,Re=de.length;xe<Re;xe++){const Ne=de[xe],ne=n.get(Ne);t.bindTexture(i.TEXTURE_2D,ne.__webglTexture),J(i.TEXTURE_2D,Ne,ve),fe(G.__webglFramebuffer,b,Ne,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,0),M(Ne,ve)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?de=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,re.__webglTexture),J(de,S,ve),a&&S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)fe(G.__webglFramebuffer[xe],b,S,i.COLOR_ATTACHMENT0,de,xe);else fe(G.__webglFramebuffer,b,S,i.COLOR_ATTACHMENT0,de,0);M(S,ve)&&x(de),t.unbindTexture()}b.depthBuffer&&Ee(b)}function Xe(b){const S=f(b)||a,G=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let re=0,Q=G.length;re<Q;re++){const ee=G[re];if(M(ee,S)){const ve=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,de=n.get(ee).__webglTexture;t.bindTexture(ve,de),x(ve),t.unbindTexture()}}}function pe(b){if(a&&b.samples>0&&ue(b)===!1){const S=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],G=b.width,re=b.height;let Q=i.COLOR_BUFFER_BIT;const ee=[],ve=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(b),xe=b.isWebGLMultipleRenderTargets===!0;if(xe)for(let Re=0;Re<S.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Re=0;Re<S.length;Re++){ee.push(i.COLOR_ATTACHMENT0+Re),b.depthBuffer&&ee.push(ve);const Ne=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(Ne===!1&&(b.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),xe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[Re]),Ne===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ve]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ve])),xe){const ne=n.get(S[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,G,re,0,0,G,re,Q,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let Re=0;Re<S.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,de.__webglColorRenderbuffer[Re]);const Ne=n.get(S[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,Ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function Se(b){return Math.min(r.maxSamples,b.samples)}function ue(b){const S=n.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ge(b){const S=o.render.frame;u.get(b)!==S&&(u.set(b,S),b.update())}function Ce(b,S){const G=b.colorSpace,re=b.format,Q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Aa||G!==An&&G!==Ht&&(Qe.getTransfer(G)===nt?a===!1?e.has("EXT_sRGB")===!0&&re===rn?(b.format=Aa,b.minFilter=Et,b.generateMipmaps=!1):S=Hl.sRGBToLinear(S):(re!==rn||Q!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}this.allocateTextureUnit=P,this.resetTextureUnits=z,this.setTexture2D=O,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=$,this.rebindTextures=Me,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ue}function Qh(i,e,t){const n=t.isWebGL2;function r(s,o=Ht){let a;const l=Qe.getTransfer(o);if(s===qn)return i.UNSIGNED_BYTE;if(s===Dl)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Il)return i.UNSIGNED_SHORT_5_5_5_1;if(s===vh)return i.BYTE;if(s===xh)return i.SHORT;if(s===Ia)return i.UNSIGNED_SHORT;if(s===Pl)return i.INT;if(s===Vn)return i.UNSIGNED_INT;if(s===xn)return i.FLOAT;if(s===gr)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Mh)return i.ALPHA;if(s===rn)return i.RGBA;if(s===yh)return i.LUMINANCE;if(s===Sh)return i.LUMINANCE_ALPHA;if(s===hi)return i.DEPTH_COMPONENT;if(s===Oi)return i.DEPTH_STENCIL;if(s===Aa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Eh)return i.RED;if(s===Ul)return i.RED_INTEGER;if(s===Ah)return i.RG;if(s===Nl)return i.RG_INTEGER;if(s===Fl)return i.RGBA_INTEGER;if(s===sa||s===aa||s===oa||s===la)if(l===nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===sa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===aa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===oa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===la)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===sa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===aa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===oa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===la)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bo||s===zo||s===ko||s===Go)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Bo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===zo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ko)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Go)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ol)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ho||s===Vo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ho)return l===nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Vo)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Wo||s===Xo||s===qo||s===Yo||s===jo||s===$o||s===Ko||s===Zo||s===Jo||s===Qo||s===el||s===tl||s===nl||s===il)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Wo)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Xo)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===qo)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Yo)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===jo)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$o)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ko)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Zo)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Jo)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qo)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===el)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===tl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===nl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===il)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ca||s===rl||s===sl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ca)return l===nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===rl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===sl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===bh||s===al||s===ol||s===ll)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ca)return a.COMPRESSED_RED_RGTC1_EXT;if(s===al)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ol)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ll)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ui?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class ef extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ai extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const V0={type:"move"};class mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const f=t.getJointPose(v,n),p=this._getHandJoint(c,v);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],m=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&m>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&m<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(V0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ai;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const W0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class q0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new wt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new Tn({extensions:{fragDepth:!0},vertexShader:W0,fragmentShader:X0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Zt(new Tr(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Y0 extends mi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,m=null,d=null,g=null;const v=new q0,f=t.getContextAttributes();let p=null,M=null;const x=[],y=[],C=new Pe;let R=null;const T=new jt;T.layers.enable(1),T.viewport=new mt;const H=new jt;H.layers.enable(2),H.viewport=new mt;const U=[T,H],_=new ef;_.layers.enable(1),_.layers.enable(2);let E=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let V=x[N];return V===void 0&&(V=new mo,x[N]=V),V.getTargetRaySpace()},this.getControllerGrip=function(N){let V=x[N];return V===void 0&&(V=new mo,x[N]=V),V.getGripSpace()},this.getHand=function(N){let V=x[N];return V===void 0&&(V=new mo,x[N]=V),V.getHandSpace()};function z(N){const V=y.indexOf(N.inputSource);if(V===-1)return;const se=x[V];se!==void 0&&(se.update(N.inputSource,N.frame,c||o),se.dispatchEvent({type:N.type,data:N.inputSource}))}function P(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",F);for(let N=0;N<x.length;N++){const V=y[N];V!==null&&(y[N]=null,x[N].disconnect(V))}E=null,B=null,v.reset(),e.setRenderTarget(p),d=null,m=null,h=null,r=null,M=null,J.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return m!==null?m:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",P),r.addEventListener("inputsourceschange",F),f.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:r.renderState.layers===void 0?f.antialias:!0,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,V),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new fi(d.framebufferWidth,d.framebufferHeight,{format:rn,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let V=null,se=null,fe=null;f.depth&&(fe=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=f.stencil?Oi:hi,se=f.stencil?ui:Vn);const le={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};h=new XRWebGLBinding(r,t),m=h.createProjectionLayer(le),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),M=new fi(m.textureWidth,m.textureHeight,{format:rn,type:qn,depthTexture:new Zl(m.textureWidth,m.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0});const ce=e.properties.get(M);ce.__ignoreDepthValues=m.ignoreDepthValues}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),J.setContext(r),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function F(N){for(let V=0;V<N.removed.length;V++){const se=N.removed[V],fe=y.indexOf(se);fe>=0&&(y[fe]=null,x[fe].disconnect(se))}for(let V=0;V<N.added.length;V++){const se=N.added[V];let fe=y.indexOf(se);if(fe===-1){for(let ce=0;ce<x.length;ce++)if(ce>=y.length){y.push(se),fe=ce;break}else if(y[ce]===null){y[ce]=se,fe=ce;break}if(fe===-1)break}const le=x[fe];le&&le.connect(se)}}const O=new D,q=new D;function j(N,V,se){O.setFromMatrixPosition(V.matrixWorld),q.setFromMatrixPosition(se.matrixWorld);const fe=O.distanceTo(q),le=V.projectionMatrix.elements,ce=se.projectionMatrix.elements,Ee=le[14]/(le[10]-1),Me=le[14]/(le[10]+1),I=(le[9]+1)/le[5],Xe=(le[9]-1)/le[5],pe=(le[8]-1)/le[0],Se=(ce[8]+1)/ce[0],ue=Ee*pe,Ge=Ee*Se,Ce=fe/(-pe+Se),b=Ce*-pe;V.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(b),N.translateZ(Ce),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const S=Ee+Ce,G=Me+Ce,re=ue-b,Q=Ge+(fe-b),ee=I*Me/G*S,ve=Xe*Me/G*S;N.projectionMatrix.makePerspective(re,Q,ee,ve,S,G),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function $(N,V){V===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(V.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;v.texture!==null&&(N.near=v.depthNear,N.far=v.depthFar),_.near=H.near=T.near=N.near,_.far=H.far=T.far=N.far,(E!==_.near||B!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),E=_.near,B=_.far,T.near=E,T.far=B,H.near=E,H.far=B,T.updateProjectionMatrix(),H.updateProjectionMatrix(),N.updateProjectionMatrix());const V=N.parent,se=_.cameras;$(_,V);for(let fe=0;fe<se.length;fe++)$(se[fe],V);se.length===2?j(_,T,H):_.projectionMatrix.copy(T.projectionMatrix),Z(N,_,V)};function Z(N,V,se){se===null?N.matrix.copy(V.matrixWorld):(N.matrix.copy(se.matrixWorld),N.matrix.invert(),N.matrix.multiply(V.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(V.projectionMatrix),N.projectionMatrixInverse.copy(V.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=ds*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(m===null&&d===null))return l},this.setFoveation=function(N){l=N,m!==null&&(m.fixedFoveation=N),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=N)},this.hasDepthSensing=function(){return v.texture!==null};let te=null;function K(N,V){if(u=V.getViewerPose(c||o),g=V,u!==null){const se=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let fe=!1;se.length!==_.cameras.length&&(_.cameras.length=0,fe=!0);for(let ce=0;ce<se.length;ce++){const Ee=se[ce];let Me=null;if(d!==null)Me=d.getViewport(Ee);else{const Xe=h.getViewSubImage(m,Ee);Me=Xe.viewport,ce===0&&(e.setRenderTargetTextures(M,Xe.colorTexture,m.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(M))}let I=U[ce];I===void 0&&(I=new jt,I.layers.enable(ce),I.viewport=new mt,U[ce]=I),I.matrix.fromArray(Ee.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(Ee.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(Me.x,Me.y,Me.width,Me.height),ce===0&&(_.matrix.copy(I.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),fe===!0&&_.cameras.push(I)}const le=r.enabledFeatures;if(le&&le.includes("depth-sensing")){const ce=h.getDepthInformation(se[0]);ce&&ce.isValid&&ce.texture&&v.init(e,ce,r.renderState)}}for(let se=0;se<x.length;se++){const fe=y[se],le=x[se];fe!==null&&le!==void 0&&le.update(fe,V,c||o)}v.render(e,_),te&&te(N,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),g=null}const J=new Xh;J.setAnimationLoop(K),this.setAnimationLoop=function(N){te=N},this.dispose=function(){}}}function j0(i,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,Gh(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function r(f,p,M,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(f,p):p.isMeshToonMaterial?(s(f,p),h(f,p)):p.isMeshPhongMaterial?(s(f,p),u(f,p)):p.isMeshStandardMaterial?(s(f,p),m(f,p),p.isMeshPhysicalMaterial&&d(f,p,y)):p.isMeshMatcapMaterial?(s(f,p),g(f,p)):p.isMeshDepthMaterial?s(f,p):p.isMeshDistanceMaterial?(s(f,p),v(f,p)):p.isMeshNormalMaterial?s(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?l(f,p,M,x):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Ut&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Ut&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const M=e.get(p).envMap;if(M&&(f.envMap.value=M,f.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,M,x){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*M,f.scale.value=x*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function m(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function d(f,p,M){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ut&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function v(f,p){const M=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function $0(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,x){const y=x.program;n.uniformBlockBinding(M,y)}function c(M,x){let y=r[M.id];y===void 0&&(g(M),y=u(M),r[M.id]=y,M.addEventListener("dispose",f));const C=x.program;n.updateUBOMapping(M,C);const R=e.render.frame;s[M.id]!==R&&(m(M),s[M.id]=R)}function u(M){const x=h();M.__bindingPointIndex=x;const y=i.createBuffer(),C=M.__size,R=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(M){const x=r[M.id],y=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,T=y.length;R<T;R++){const H=Array.isArray(y[R])?y[R]:[y[R]];for(let U=0,_=H.length;U<_;U++){const E=H[U];if(d(E,R,U,C)===!0){const B=E.__offset,z=Array.isArray(E.value)?E.value:[E.value];let P=0;for(let F=0;F<z.length;F++){const O=z[F],q=v(O);typeof O=="number"||typeof O=="boolean"?(E.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,B+P,E.__data)):O.isMatrix3?(E.__data[0]=O.elements[0],E.__data[1]=O.elements[1],E.__data[2]=O.elements[2],E.__data[3]=0,E.__data[4]=O.elements[3],E.__data[5]=O.elements[4],E.__data[6]=O.elements[5],E.__data[7]=0,E.__data[8]=O.elements[6],E.__data[9]=O.elements[7],E.__data[10]=O.elements[8],E.__data[11]=0):(O.toArray(E.__data,P),P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,x,y,C){const R=M.value,T=x+"_"+y;if(C[T]===void 0)return typeof R=="number"||typeof R=="boolean"?C[T]=R:C[T]=R.clone(),!0;{const H=C[T];if(typeof R=="number"||typeof R=="boolean"){if(H!==R)return C[T]=R,!0}else if(H.equals(R)===!1)return H.copy(R),!0}return!1}function g(M){const x=M.uniforms;let y=0;const C=16;for(let T=0,H=x.length;T<H;T++){const U=Array.isArray(x[T])?x[T]:[x[T]];for(let _=0,E=U.length;_<E;_++){const B=U[_],z=Array.isArray(B.value)?B.value:[B.value];for(let P=0,F=z.length;P<F;P++){const O=z[P],q=v(O),j=y%C;j!==0&&C-j<q.boundary&&(y+=C-j),B.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=q.storage}}}const R=y%C;return R>0&&(y+=C-R),M.__size=y,M.__cache={},this}function v(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function f(M){const x=M.target;x.removeEventListener("dispose",f);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const M in r)i.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class ms{constructor(e={}){const{canvas:t=Oh(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let m;n!==null?m=n.getContextAttributes().alpha:m=o;const d=new Uint32Array(4),g=new Int32Array(4);let v=null,f=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dt,this._useLegacyLights=!1,this.toneMapping=En,this.toneMappingExposure=1;const x=this;let y=!1,C=0,R=0,T=null,H=-1,U=null;const _=new mt,E=new mt;let B=null;const z=new ke(0);let P=0,F=t.width,O=t.height,q=1,j=null,$=null;const Z=new mt(0,0,F,O),te=new mt(0,0,F,O);let K=!1;const J=new Fa;let N=!1,V=!1,se=null;const fe=new rt,le=new Pe,ce=new D,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Me(){return T===null?q:1}let I=n;function Xe(A,k){for(let X=0;X<A.length;X++){const Y=A[X],W=t.getContext(Y,k);if(W!==null)return W}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Da}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",w,!1),t.addEventListener("webglcontextcreationerror",ae,!1),I===null){const k=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&k.shift(),I=Xe(k,A),I===null)throw Xe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let pe,Se,ue,Ge,Ce,b,S,G,re,Q,ee,ve,de,xe,Re,Ne,ne,Ke,He,De,be,ge,Oe,L;function oe(){pe=new ag(I),Se=new eg(I,pe,e),pe.init(Se),ge=new Qh(I,pe,Se),ue=new G0(I,pe,Se),Ge=new cg(I),Ce=new C0,b=new H0(I,pe,ue,Ce,Se,ge,Ge),S=new ng(x),G=new sg(x),re=new _d(I,Se),Oe=new Jm(I,pe,re,Se),Q=new og(I,re,Ge,Oe),ee=new dg(I,Q,re,Ge),He=new fg(I,Se,b),Ne=new tg(Ce),ve=new R0(x,S,G,pe,Se,Oe,Ne),de=new j0(x,Ce),xe=new P0,Re=new O0(pe,Se),Ke=new Zm(x,S,G,ue,ee,m,l),ne=new k0(x,ee,Se),L=new $0(I,Ge,Se,ue),De=new Qm(I,pe,Ge,Se),be=new lg(I,pe,Ge,Se),Ge.programs=ve.programs,x.capabilities=Se,x.extensions=pe,x.properties=Ce,x.renderLists=xe,x.shadowMap=ne,x.state=ue,x.info=Ge}oe();const me=new Y0(x,I);this.xr=me,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=pe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=pe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(F,O,!1))},this.getSize=function(A){return A.set(F,O)},this.setSize=function(A,k,X=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,O=k,t.width=Math.floor(A*q),t.height=Math.floor(k*q),X===!0&&(t.style.width=A+"px",t.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(F*q,O*q).floor()},this.setDrawingBufferSize=function(A,k,X){F=A,O=k,q=X,t.width=Math.floor(A*X),t.height=Math.floor(k*X),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(_)},this.getViewport=function(A){return A.copy(Z)},this.setViewport=function(A,k,X,Y){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,k,X,Y),ue.viewport(_.copy(Z).multiplyScalar(q).floor())},this.getScissor=function(A){return A.copy(te)},this.setScissor=function(A,k,X,Y){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,k,X,Y),ue.scissor(E.copy(te).multiplyScalar(q).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(A){ue.setScissorTest(K=A)},this.setOpaqueSort=function(A){j=A},this.setTransparentSort=function(A){$=A},this.getClearColor=function(A){return A.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(A=!0,k=!0,X=!0){let Y=0;if(A){let W=!1;if(T!==null){const _e=T.texture.format;W=_e===Fl||_e===Nl||_e===Ul}if(W){const _e=T.texture.type,Ae=_e===qn||_e===Vn||_e===Ia||_e===ui||_e===Dl||_e===Il,Le=Ke.getClearColor(),Ie=Ke.getClearAlpha(),Ve=Le.r,Fe=Le.g,Be=Le.b;Ae?(d[0]=Ve,d[1]=Fe,d[2]=Be,d[3]=Ie,I.clearBufferuiv(I.COLOR,0,d)):(g[0]=Ve,g[1]=Fe,g[2]=Be,g[3]=Ie,I.clearBufferiv(I.COLOR,0,g))}else Y|=I.COLOR_BUFFER_BIT}k&&(Y|=I.DEPTH_BUFFER_BIT),X&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",w,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),xe.dispose(),Re.dispose(),Ce.dispose(),S.dispose(),G.dispose(),ee.dispose(),Oe.dispose(),L.dispose(),ve.dispose(),me.dispose(),me.removeEventListener("sessionstart",At),me.removeEventListener("sessionend",$e),se&&(se.dispose(),se=null),ot.stop()};function Te(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function w(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=Ge.autoReset,k=ne.enabled,X=ne.autoUpdate,Y=ne.needsUpdate,W=ne.type;oe(),Ge.autoReset=A,ne.enabled=k,ne.autoUpdate=X,ne.needsUpdate=Y,ne.type=W}function ae(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ie(A){const k=A.target;k.removeEventListener("dispose",ie),ye(k)}function ye(A){we(A),Ce.remove(A)}function we(A){const k=Ce.get(A).programs;k!==void 0&&(k.forEach(function(X){ve.releaseProgram(X)}),A.isShaderMaterial&&ve.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,X,Y,W,_e){k===null&&(k=Ee);const Ae=W.isMesh&&W.matrixWorld.determinant()<0,Le=Uf(A,k,X,Y,W);ue.setMaterial(Y,Ae);let Ie=X.index,Ve=1;if(Y.wireframe===!0){if(Ie=Q.getWireframeAttribute(X),Ie===void 0)return;Ve=2}const Fe=X.drawRange,Be=X.attributes.position;let lt=Fe.start*Ve,Wt=(Fe.start+Fe.count)*Ve;_e!==null&&(lt=Math.max(lt,_e.start*Ve),Wt=Math.min(Wt,(_e.start+_e.count)*Ve)),Ie!==null?(lt=Math.max(lt,0),Wt=Math.min(Wt,Ie.count)):Be!=null&&(lt=Math.max(lt,0),Wt=Math.min(Wt,Be.count));const xt=Wt-lt;if(xt<0||xt===1/0)return;Oe.setup(W,Y,Le,X,Ie);let wn,st=De;if(Ie!==null&&(wn=re.get(Ie),st=be,st.setIndex(wn)),W.isMesh)Y.wireframe===!0?(ue.setLineWidth(Y.wireframeLinewidth*Me()),st.setMode(I.LINES)):st.setMode(I.TRIANGLES);else if(W.isLine){let qe=Y.linewidth;qe===void 0&&(qe=1),ue.setLineWidth(qe*Me()),W.isLineSegments?st.setMode(I.LINES):W.isLineLoop?st.setMode(I.LINE_LOOP):st.setMode(I.LINE_STRIP)}else W.isPoints?st.setMode(I.POINTS):W.isSprite&&st.setMode(I.TRIANGLES);if(W.isBatchedMesh)st.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)st.renderInstances(lt,xt,W.count);else if(X.isInstancedBufferGeometry){const qe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ha=Math.min(X.instanceCount,qe);st.renderInstances(lt,xt,Ha)}else st.render(lt,xt)};function je(A,k,X){A.transparent===!0&&A.side===un&&A.forceSinglePass===!1?(A.side=Ut,A.needsUpdate=!0,Cs(A,k,X),A.side=jn,A.needsUpdate=!0,Cs(A,k,X),A.side=un):Cs(A,k,X)}this.compile=function(A,k,X=null){X===null&&(X=A),f=Re.get(X),f.init(),M.push(f),X.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(f.pushLight(W),W.castShadow&&f.pushShadow(W))}),A!==X&&A.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(f.pushLight(W),W.castShadow&&f.pushShadow(W))}),f.setupLights(x._useLegacyLights);const Y=new Set;return A.traverse(function(W){const _e=W.material;if(_e)if(Array.isArray(_e))for(let Ae=0;Ae<_e.length;Ae++){const Le=_e[Ae];je(Le,X,W),Y.add(Le)}else je(_e,X,W),Y.add(_e)}),M.pop(),f=null,Y},this.compileAsync=function(A,k,X=null){const Y=this.compile(A,k,X);return new Promise(W=>{function _e(){if(Y.forEach(function(Ae){Ce.get(Ae).currentProgram.isReady()&&Y.delete(Ae)}),Y.size===0){W(A);return}setTimeout(_e,10)}pe.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Ye=null;function et(A){Ye&&Ye(A)}function At(){ot.stop()}function $e(){ot.start()}const ot=new Xh;ot.setAnimationLoop(et),typeof self<"u"&&ot.setContext(self),this.setAnimationLoop=function(A){Ye=A,me.setAnimationLoop(A),A===null?ot.stop():ot.start()},me.addEventListener("sessionstart",At),me.addEventListener("sessionend",$e),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(k),k=me.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,k,T),f=Re.get(A,M.length),f.init(),M.push(f),fe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),J.setFromProjectionMatrix(fe),V=this.localClippingEnabled,N=Ne.init(this.clippingPlanes,V),v=xe.get(A,p.length),v.init(),p.push(v),Nt(A,k,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(j,$),this.info.render.frame++,N===!0&&Ne.beginShadows();const X=f.state.shadowsArray;if(ne.render(X,A,k),N===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),(me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1)&&Ke.render(v,A),f.setupLights(x._useLegacyLights),k.isArrayCamera){const Y=k.cameras;for(let W=0,_e=Y.length;W<_e;W++){const Ae=Y[W];cc(v,A,Ae,Ae.viewport)}}else cc(v,A,k);T!==null&&(b.updateMultisampleRenderTarget(T),b.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(x,A,k),Oe.resetDefaultState(),H=-1,U=null,M.pop(),M.length>0?f=M[M.length-1]:f=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Nt(A,k,X,Y){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||J.intersectsSprite(A)){Y&&ce.setFromMatrixPosition(A.matrixWorld).applyMatrix4(fe);const Ae=ee.update(A),Le=A.material;Le.visible&&v.push(A,Ae,Le,X,ce.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||J.intersectsObject(A))){const Ae=ee.update(A),Le=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ce.copy(A.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ce.copy(Ae.boundingSphere.center)),ce.applyMatrix4(A.matrixWorld).applyMatrix4(fe)),Array.isArray(Le)){const Ie=Ae.groups;for(let Ve=0,Fe=Ie.length;Ve<Fe;Ve++){const Be=Ie[Ve],lt=Le[Be.materialIndex];lt&&lt.visible&&v.push(A,Ae,lt,X,ce.z,Be)}}else Le.visible&&v.push(A,Ae,Le,X,ce.z,null)}}const _e=A.children;for(let Ae=0,Le=_e.length;Ae<Le;Ae++)Nt(_e[Ae],k,X,Y)}function cc(A,k,X,Y){const W=A.opaque,_e=A.transmissive,Ae=A.transparent;f.setupLightsView(X),N===!0&&Ne.setGlobalState(x.clippingPlanes,X),_e.length>0&&If(W,_e,k,X),Y&&ue.viewport(_.copy(Y)),W.length>0&&Rs(W,k,X),_e.length>0&&Rs(_e,k,X),Ae.length>0&&Rs(Ae,k,X),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function If(A,k,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const _e=Se.isWebGL2;se===null&&(se=new fi(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")?gr:qn,minFilter:Hn,samples:_e?4:0})),x.getDrawingBufferSize(le),_e?se.setSize(le.x,le.y):se.setSize(ba(le.x),ba(le.y));const Ae=x.getRenderTarget();x.setRenderTarget(se),x.getClearColor(z),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const Le=x.toneMapping;x.toneMapping=En,Rs(A,X,Y),b.updateMultisampleRenderTarget(se),b.updateRenderTargetMipmap(se);let Ie=!1;for(let Ve=0,Fe=k.length;Ve<Fe;Ve++){const Be=k[Ve],lt=Be.object,Wt=Be.geometry,xt=Be.material,wn=Be.group;if(xt.side===un&&lt.layers.test(Y.layers)){const st=xt.side;xt.side=Ut,xt.needsUpdate=!0,uc(lt,X,Y,Wt,xt,wn),xt.side=st,xt.needsUpdate=!0,Ie=!0}}Ie===!0&&(b.updateMultisampleRenderTarget(se),b.updateRenderTargetMipmap(se)),x.setRenderTarget(Ae),x.setClearColor(z,P),x.toneMapping=Le}function Rs(A,k,X){const Y=k.isScene===!0?k.overrideMaterial:null;for(let W=0,_e=A.length;W<_e;W++){const Ae=A[W],Le=Ae.object,Ie=Ae.geometry,Ve=Y===null?Ae.material:Y,Fe=Ae.group;Le.layers.test(X.layers)&&uc(Le,k,X,Ie,Ve,Fe)}}function uc(A,k,X,Y,W,_e){A.onBeforeRender(x,k,X,Y,W,_e),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(x,k,X,Y,A,_e),W.transparent===!0&&W.side===un&&W.forceSinglePass===!1?(W.side=Ut,W.needsUpdate=!0,x.renderBufferDirect(X,k,Y,W,A,_e),W.side=jn,W.needsUpdate=!0,x.renderBufferDirect(X,k,Y,W,A,_e),W.side=un):x.renderBufferDirect(X,k,Y,W,A,_e),A.onAfterRender(x,k,X,Y,W,_e)}function Cs(A,k,X){k.isScene!==!0&&(k=Ee);const Y=Ce.get(A),W=f.state.lights,_e=f.state.shadowsArray,Ae=W.state.version,Le=ve.getParameters(A,W.state,_e,k,X),Ie=ve.getProgramCacheKey(Le);let Ve=Y.programs;Y.environment=A.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(A.isMeshStandardMaterial?G:S).get(A.envMap||Y.environment),Ve===void 0&&(A.addEventListener("dispose",ie),Ve=new Map,Y.programs=Ve);let Fe=Ve.get(Ie);if(Fe!==void 0){if(Y.currentProgram===Fe&&Y.lightsStateVersion===Ae)return fc(A,Le),Fe}else Le.uniforms=ve.getUniforms(A),A.onBuild(X,Le,x),A.onBeforeCompile(Le,x),Fe=ve.acquireProgram(Le,Ie),Ve.set(Ie,Fe),Y.uniforms=Le.uniforms;const Be=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Be.clippingPlanes=Ne.uniform),fc(A,Le),Y.needsLights=Ff(A),Y.lightsStateVersion=Ae,Y.needsLights&&(Be.ambientLightColor.value=W.state.ambient,Be.lightProbe.value=W.state.probe,Be.directionalLights.value=W.state.directional,Be.directionalLightShadows.value=W.state.directionalShadow,Be.spotLights.value=W.state.spot,Be.spotLightShadows.value=W.state.spotShadow,Be.rectAreaLights.value=W.state.rectArea,Be.ltc_1.value=W.state.rectAreaLTC1,Be.ltc_2.value=W.state.rectAreaLTC2,Be.pointLights.value=W.state.point,Be.pointLightShadows.value=W.state.pointShadow,Be.hemisphereLights.value=W.state.hemi,Be.directionalShadowMap.value=W.state.directionalShadowMap,Be.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Be.spotShadowMap.value=W.state.spotShadowMap,Be.spotLightMatrix.value=W.state.spotLightMatrix,Be.spotLightMap.value=W.state.spotLightMap,Be.pointShadowMap.value=W.state.pointShadowMap,Be.pointShadowMatrix.value=W.state.pointShadowMatrix),Y.currentProgram=Fe,Y.uniformsList=null,Fe}function hc(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=ua.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function fc(A,k){const X=Ce.get(A);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function Uf(A,k,X,Y,W){k.isScene!==!0&&(k=Ee),b.resetTextureUnits();const _e=k.fog,Ae=Y.isMeshStandardMaterial?k.environment:null,Le=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:An,Ie=(Y.isMeshStandardMaterial?G:S).get(Y.envMap||Ae),Ve=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Fe=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Be=!!X.morphAttributes.position,lt=!!X.morphAttributes.normal,Wt=!!X.morphAttributes.color;let xt=En;Y.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(xt=x.toneMapping);const wn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,st=wn!==void 0?wn.length:0,qe=Ce.get(Y),Ha=f.state.lights;if(N===!0&&(V===!0||A!==U)){const en=A===U&&Y.id===H;Ne.setState(Y,A,en)}let at=!1;Y.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ha.state.version||qe.outputColorSpace!==Le||W.isBatchedMesh&&qe.batching===!1||!W.isBatchedMesh&&qe.batching===!0||W.isInstancedMesh&&qe.instancing===!1||!W.isInstancedMesh&&qe.instancing===!0||W.isSkinnedMesh&&qe.skinning===!1||!W.isSkinnedMesh&&qe.skinning===!0||W.isInstancedMesh&&qe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&qe.instancingColor===!1&&W.instanceColor!==null||qe.envMap!==Ie||Y.fog===!0&&qe.fog!==_e||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ne.numPlanes||qe.numIntersection!==Ne.numIntersection)||qe.vertexAlphas!==Ve||qe.vertexTangents!==Fe||qe.morphTargets!==Be||qe.morphNormals!==lt||qe.morphColors!==Wt||qe.toneMapping!==xt||Se.isWebGL2===!0&&qe.morphTargetsCount!==st)&&(at=!0):(at=!0,qe.__version=Y.version);let _i=qe.currentProgram;at===!0&&(_i=Cs(Y,k,W));let dc=!1,Lr=!1,Va=!1;const Rt=_i.getUniforms(),vi=qe.uniforms;if(ue.useProgram(_i.program)&&(dc=!0,Lr=!0,Va=!0),Y.id!==H&&(H=Y.id,Lr=!0),dc||U!==A){Rt.setValue(I,"projectionMatrix",A.projectionMatrix),Rt.setValue(I,"viewMatrix",A.matrixWorldInverse);const en=Rt.map.cameraPosition;en!==void 0&&en.setValue(I,ce.setFromMatrixPosition(A.matrixWorld)),Se.logarithmicDepthBuffer&&Rt.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Rt.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),U!==A&&(U=A,Lr=!0,Va=!0)}if(W.isSkinnedMesh){Rt.setOptional(I,W,"bindMatrix"),Rt.setOptional(I,W,"bindMatrixInverse");const en=W.skeleton;en&&(Se.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),Rt.setValue(I,"boneTexture",en.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(Rt.setOptional(I,W,"batchingTexture"),Rt.setValue(I,"batchingTexture",W._matricesTexture,b));const Wa=X.morphAttributes;if((Wa.position!==void 0||Wa.normal!==void 0||Wa.color!==void 0&&Se.isWebGL2===!0)&&He.update(W,X,_i),(Lr||qe.receiveShadow!==W.receiveShadow)&&(qe.receiveShadow=W.receiveShadow,Rt.setValue(I,"receiveShadow",W.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(vi.envMap.value=Ie,vi.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Lr&&(Rt.setValue(I,"toneMappingExposure",x.toneMappingExposure),qe.needsLights&&Nf(vi,Va),_e&&Y.fog===!0&&de.refreshFogUniforms(vi,_e),de.refreshMaterialUniforms(vi,Y,q,O,se),ua.upload(I,hc(qe),vi,b)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ua.upload(I,hc(qe),vi,b),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Rt.setValue(I,"center",W.center),Rt.setValue(I,"modelViewMatrix",W.modelViewMatrix),Rt.setValue(I,"normalMatrix",W.normalMatrix),Rt.setValue(I,"modelMatrix",W.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const en=Y.uniformsGroups;for(let Xa=0,Of=en.length;Xa<Of;Xa++)if(Se.isWebGL2){const pc=en[Xa];L.update(pc,_i),L.bind(pc,_i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _i}function Nf(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Ff(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,k,X){Ce.get(A.texture).__webglTexture=k,Ce.get(A.depthTexture).__webglTexture=X;const Y=Ce.get(A);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,k){const X=Ce.get(A);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,X=0){T=A,C=k,R=X;let Y=!0,W=null,_e=!1,Ae=!1;if(A){const Ie=Ce.get(A);Ie.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(I.FRAMEBUFFER,null),Y=!1):Ie.__webglFramebuffer===void 0?b.setupRenderTarget(A):Ie.__hasExternalTextures&&b.rebindTextures(A,Ce.get(A.texture).__webglTexture,Ce.get(A.depthTexture).__webglTexture);const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ae=!0);const Fe=Ce.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Fe[k])?W=Fe[k][X]:W=Fe[k],_e=!0):Se.isWebGL2&&A.samples>0&&b.useMultisampledRTT(A)===!1?W=Ce.get(A).__webglMultisampledFramebuffer:Array.isArray(Fe)?W=Fe[X]:W=Fe,_.copy(A.viewport),E.copy(A.scissor),B=A.scissorTest}else _.copy(Z).multiplyScalar(q).floor(),E.copy(te).multiplyScalar(q).floor(),B=K;if(ue.bindFramebuffer(I.FRAMEBUFFER,W)&&Se.drawBuffers&&Y&&ue.drawBuffers(A,W),ue.viewport(_),ue.scissor(E),ue.setScissorTest(B),_e){const Ie=Ce.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ie.__webglTexture,X)}else if(Ae){const Ie=Ce.get(A.texture),Ve=k||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ie.__webglTexture,X||0,Ve)}H=-1},this.readRenderTargetPixels=function(A,k,X,Y,W,_e,Ae){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ce.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){ue.bindFramebuffer(I.FRAMEBUFFER,Le);try{const Ie=A.texture,Ve=Ie.format,Fe=Ie.type;if(Ve!==rn&&ge.convert(Ve)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Fe===gr&&(pe.has("EXT_color_buffer_half_float")||Se.isWebGL2&&pe.has("EXT_color_buffer_float"));if(Fe!==qn&&ge.convert(Fe)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===xn&&(Se.isWebGL2||pe.has("OES_texture_float")||pe.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-Y&&X>=0&&X<=A.height-W&&I.readPixels(k,X,Y,W,ge.convert(Ve),ge.convert(Fe),_e)}finally{const Ie=T!==null?Ce.get(T).__webglFramebuffer:null;ue.bindFramebuffer(I.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(A,k,X=0){const Y=Math.pow(2,-X),W=Math.floor(k.image.width*Y),_e=Math.floor(k.image.height*Y);b.setTexture2D(k,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,A.x,A.y,W,_e),ue.unbindTexture()},this.copyTextureToTexture=function(A,k,X,Y=0){const W=k.image.width,_e=k.image.height,Ae=ge.convert(X.format),Le=ge.convert(X.type);b.setTexture2D(X,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment),k.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Y,A.x,A.y,W,_e,Ae,Le,k.image.data):k.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Y,A.x,A.y,k.mipmaps[0].width,k.mipmaps[0].height,Ae,k.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,Y,A.x,A.y,Ae,Le,k.image),Y===0&&X.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ue.unbindTexture()},this.copyTextureToTexture3D=function(A,k,X,Y,W=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=A.max.x-A.min.x+1,Ae=A.max.y-A.min.y+1,Le=A.max.z-A.min.z+1,Ie=ge.convert(Y.format),Ve=ge.convert(Y.type);let Fe;if(Y.isData3DTexture)b.setTexture3D(Y,0),Fe=I.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)b.setTexture2DArray(Y,0),Fe=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Y.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Y.unpackAlignment);const Be=I.getParameter(I.UNPACK_ROW_LENGTH),lt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Wt=I.getParameter(I.UNPACK_SKIP_PIXELS),xt=I.getParameter(I.UNPACK_SKIP_ROWS),wn=I.getParameter(I.UNPACK_SKIP_IMAGES),st=X.isCompressedTexture?X.mipmaps[W]:X.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,st.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,st.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,A.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,A.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,A.min.z),X.isDataTexture||X.isData3DTexture?I.texSubImage3D(Fe,W,k.x,k.y,k.z,_e,Ae,Le,Ie,Ve,st.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Fe,W,k.x,k.y,k.z,_e,Ae,Le,Ie,st.data)):I.texSubImage3D(Fe,W,k.x,k.y,k.z,_e,Ae,Le,Ie,Ve,st),I.pixelStorei(I.UNPACK_ROW_LENGTH,Be),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,lt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Wt),I.pixelStorei(I.UNPACK_SKIP_ROWS,xt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,wn),W===0&&Y.generateMipmaps&&I.generateMipmap(Fe),ue.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),ue.unbindTexture()},this.resetState=function(){C=0,R=0,T=null,ue.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ua?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===Es?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===dt?Yn:Bl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Yn?dt:An}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class wa extends ms{}wa.prototype.isWebGL1Renderer=!0;class tf extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Jl extends gi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const tu=new D,nu=new D,iu=new rt,go=new Ar,Zs=new Gi;class nf extends pt{constructor(e=new Vt,t=new Jl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)tu.fromBufferAttribute(t,r-1),nu.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=tu.distanceTo(nu);e.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(r),Zs.radius+=s,e.ray.intersectsSphere(Zs)===!1)return;iu.copy(r).invert(),go.copy(e.ray).applyMatrix4(iu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,u=new D,h=new D,m=new D,d=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const p=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let x=p,y=M-1;x<y;x+=d){const C=g.getX(x),R=g.getX(x+1);if(c.fromBufferAttribute(f,C),u.fromBufferAttribute(f,R),go.distanceSqToSegment(c,u,m,h)>l)continue;m.applyMatrix4(this.matrixWorld);const H=e.ray.origin.distanceTo(m);H<e.near||H>e.far||t.push({distance:H,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),M=Math.min(f.count,o.start+o.count);for(let x=p,y=M-1;x<y;x+=d){if(c.fromBufferAttribute(f,x),u.fromBufferAttribute(f,x+1),go.distanceSqToSegment(c,u,m,h)>l)continue;m.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(m);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const ru=new D,su=new D;class rf extends nf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)ru.fromBufferAttribute(t,r),su.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+ru.distanceTo(su);e.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ql extends gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const au=new rt,pl=new Ar,Js=new Gi,Qs=new D;class ec extends pt{constructor(e=new Vt,t=new Ql){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(r),Js.radius+=s,e.ray.intersectsSphere(Js)===!1)return;au.copy(r).invert(),pl.copy(e.ray).applyMatrix4(au);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const m=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=m,v=d;g<v;g++){const f=c.getX(g);Qs.fromBufferAttribute(h,f),ou(Qs,f,l,r,e,t,this)}}else{const m=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=m,v=d;g<v;g++)Qs.fromBufferAttribute(h,g),ou(Qs,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ou(i,e,t,n,r,s,o){const a=pl.distanceSqToPoint(i);if(a<t){const l=new D;pl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Ba extends wt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ts extends Vt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new D,m=new D,d=[],g=[],v=[],f=[];for(let p=0;p<=n;p++){const M=[],x=p/n;let y=0;p===0&&o===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){const R=C/t;h.x=-e*Math.cos(r+R*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(r+R*s)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),m.copy(h).normalize(),v.push(m.x,m.y,m.z),f.push(R+y,1-x),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const x=u[p][M+1],y=u[p][M],C=u[p+1][M],R=u[p+1][M+1];(p!==0||o>0)&&d.push(x,y,R),(p!==n-1||l<Math.PI)&&d.push(y,C,R)}this.setIndex(d),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(v,3)),this.setAttribute("uv",new Jt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sf extends gi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zl,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class af extends sf{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const ml={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class of{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,m=c.length;h<m;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const lf=new of;class za{constructor(e){this.manager=e!==void 0?e:lf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}za.DEFAULT_MATERIAL_NAME="__DEFAULT";class cf extends za{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ml.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ps("img");function l(){u(),ml.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class uf extends za{constructor(e){super(e)}load(e,t,n,r){const s=new wt,o=new cf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class ka extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class hf extends ka{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const _o=new rt,lu=new D,cu=new D;class K0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fa,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;lu.setFromMatrixPosition(e.matrixWorld),t.position.copy(lu),cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cu),t.updateMatrixWorld(),_o.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_o),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_o)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Z0 extends K0{constructor(){super(new $l(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lr extends ka{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new Z0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ff extends ka{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class df{constructor(e,t,n=0,r=1/0){this.ray=new Ar(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Na,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return gl(e,this,n,t),n.sort(uu),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)gl(e[r],this,n,t);return n.sort(uu),n}}function uu(i,e){return i.distance-e.distance}function gl(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)gl(r[s],e,t,!0)}}class _l{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Da);const hu=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:qr,AddEquation:ri,AddOperation:gh,AdditiveBlending:Do,AgXToneMapping:Cl,AlphaFormat:Mh,AlwaysCompare:Nh,AlwaysDepth:ch,AlwaysStencilFunc:cl,AmbientLight:ff,ArrayCamera:ef,BackSide:Ut,BasicDepthPacking:Th,Box3:Er,BoxGeometry:br,BufferAttribute:gt,BufferGeometry:Vt,ByteType:vh,Cache:ml,Camera:Yl,CanvasTexture:Ba,CineonToneMapping:Rl,ClampToEdgeWrapping:Kt,Color:ke,ColorManagement:Qe,ConstantAlphaFactor:ah,ConstantColorFactor:rh,CubeCamera:Vh,CubeReflectionMapping:Ni,CubeRefractionMapping:Fi,CubeTexture:jl,CubeUVReflectionMapping:Ss,CullFaceBack:Po,CullFaceFront:Wu,CullFaceNone:Vu,CustomBlending:qu,CustomToneMapping:_h,Data3DTexture:zh,DataArrayTexture:Wl,DefaultLoadingManager:lf,DepthFormat:hi,DepthStencilFormat:Oi,DepthTexture:Zl,DirectionalLight:lr,DisplayP3ColorSpace:Ua,DoubleSide:un,DstAlphaFactor:Qu,DstColorFactor:th,EqualCompare:Ph,EqualDepth:hh,EquirectangularReflectionMapping:os,EquirectangularRefractionMapping:Sa,Euler:As,EventDispatcher:mi,Float32BufferAttribute:Jt,FloatType:xn,FrontSide:jn,Frustum:Fa,GLSL3:hl,GreaterCompare:Dh,GreaterDepth:dh,GreaterEqualCompare:Uh,GreaterEqualDepth:fh,Group:ai,HalfFloatType:gr,HemisphereLight:hf,ImageLoader:cf,ImageUtils:Hl,IntType:Pl,KeepStencilOp:wi,Layers:Na,LessCompare:Lh,LessDepth:uh,LessEqualCompare:kl,LessEqualDepth:as,Light:ka,Line:nf,LineBasicMaterial:Jl,LineSegments:rf,LinearDisplayP3ColorSpace:Es,LinearEncoding:Bl,LinearFilter:Et,LinearMipmapLinearFilter:Hn,LinearMipmapNearestFilter:ra,LinearSRGBColorSpace:An,LinearToneMapping:Tl,LinearTransfer:cs,Loader:za,LoadingManager:of,LuminanceAlphaFormat:Sh,LuminanceFormat:yh,MOUSE:bi,Material:gi,MathUtils:bn,Matrix3:We,Matrix4:rt,MaxEquation:Fo,Mesh:Zt,MeshBasicMaterial:bs,MeshDepthMaterial:Zh,MeshDistanceMaterial:Jh,MeshPhysicalMaterial:af,MeshStandardMaterial:sf,MinEquation:No,MirroredRepeatWrapping:Ea,MixOperation:mh,MultiplyBlending:Uo,MultiplyOperation:bl,NearestFilter:It,NearestMipmapLinearFilter:ar,NearestMipmapNearestFilter:Oo,NeverCompare:Ch,NeverDepth:lh,NoBlending:Xn,NoColorSpace:Ht,NoToneMapping:En,NormalBlending:Ii,NotEqualCompare:Ih,NotEqualDepth:ph,Object3D:pt,ObjectSpaceNormalMap:Rh,OneFactor:Ku,OneMinusConstantAlphaFactor:oh,OneMinusConstantColorFactor:sh,OneMinusDstAlphaFactor:eh,OneMinusDstColorFactor:nh,OneMinusSrcAlphaFactor:ya,OneMinusSrcColorFactor:Ju,OrthographicCamera:$l,P3Primaries:hs,PCFShadowMap:Al,PCFSoftShadowMap:Xu,PMREMGenerator:Ta,PerspectiveCamera:jt,Plane:zn,PlaneGeometry:Tr,Points:ec,PointsMaterial:Ql,Quaternion:di,RED_GREEN_RGTC2_Format:ol,RED_RGTC1_Format:bh,REVISION:Da,RGBADepthPacking:wh,RGBAFormat:rn,RGBAIntegerFormat:Fl,RGBA_ASTC_10x10_Format:tl,RGBA_ASTC_10x5_Format:Jo,RGBA_ASTC_10x6_Format:Qo,RGBA_ASTC_10x8_Format:el,RGBA_ASTC_12x10_Format:nl,RGBA_ASTC_12x12_Format:il,RGBA_ASTC_4x4_Format:Wo,RGBA_ASTC_5x4_Format:Xo,RGBA_ASTC_5x5_Format:qo,RGBA_ASTC_6x5_Format:Yo,RGBA_ASTC_6x6_Format:jo,RGBA_ASTC_8x5_Format:$o,RGBA_ASTC_8x6_Format:Ko,RGBA_ASTC_8x8_Format:Zo,RGBA_BPTC_Format:ca,RGBA_ETC2_EAC_Format:Vo,RGBA_PVRTC_2BPPV1_Format:Go,RGBA_PVRTC_4BPPV1_Format:ko,RGBA_S3TC_DXT1_Format:aa,RGBA_S3TC_DXT3_Format:oa,RGBA_S3TC_DXT5_Format:la,RGB_BPTC_SIGNED_Format:rl,RGB_BPTC_UNSIGNED_Format:sl,RGB_ETC1_Format:Ol,RGB_ETC2_Format:Ho,RGB_PVRTC_2BPPV1_Format:zo,RGB_PVRTC_4BPPV1_Format:Bo,RGB_S3TC_DXT1_Format:sa,RGFormat:Ah,RGIntegerFormat:Nl,Ray:Ar,Raycaster:df,Rec709Primaries:us,RedFormat:Eh,RedIntegerFormat:Ul,ReinhardToneMapping:wl,RenderTarget:Bh,RepeatWrapping:ls,ReverseSubtractEquation:ju,SIGNED_RED_GREEN_RGTC2_Format:ll,SIGNED_RED_RGTC1_Format:al,SRGBColorSpace:dt,SRGBTransfer:nt,Scene:tf,ShaderChunk:ze,ShaderLib:cn,ShaderMaterial:Tn,ShortType:xh,Source:Vl,Sphere:Gi,SphereGeometry:Ts,Spherical:_l,SrcAlphaFactor:Ma,SrcAlphaSaturateFactor:ih,SrcColorFactor:Zu,StaticDrawUsage:ul,SubtractEquation:Yu,SubtractiveBlending:Io,TOUCH:Ti,TangentSpaceNormalMap:zl,Texture:wt,TextureLoader:uf,Triangle:hn,UVMapping:Ll,Uint16BufferAttribute:Xl,Uint32BufferAttribute:ql,UniformsLib:he,UniformsUtils:Hh,UnsignedByteType:qn,UnsignedInt248Type:ui,UnsignedIntType:Vn,UnsignedShort4444Type:Dl,UnsignedShort5551Type:Il,UnsignedShortType:Ia,VSMShadowMap:pn,Vector2:Pe,Vector3:D,Vector4:mt,WebGL1Renderer:wa,WebGLCoordinateSystem:Sn,WebGLCubeRenderTarget:Wh,WebGLRenderTarget:fi,WebGLRenderer:ms,WebGLUtils:Qh,WebGPUCoordinateSystem:fs,ZeroFactor:$u,_SRGBAFormat:Aa,createCanvasElement:Oh,sRGBEncoding:Yn},Symbol.toStringTag,{value:"Module"})),fu={type:"change"},vo={type:"start"},du={type:"end"},ea=new Ar,pu=new zn,J0=Math.cos(70*bn.DEG2RAD);class Q0 extends mi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:bi.ROTATE,MIDDLE:bi.DOLLY,RIGHT:bi.PAN},this.touches={ONE:Ti.ROTATE,TWO:Ti.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",Re),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Re),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(fu),n.update(),s=r.NONE},this.update=(function(){const L=new D,oe=new di().setFromUnitVectors(e.up,new D(0,1,0)),me=oe.clone().invert(),Te=new D,w=new di,ae=new D,ie=2*Math.PI;return function(we=null){const je=n.object.position;L.copy(je).sub(n.target),L.applyQuaternion(oe),a.setFromVector3(L),n.autoRotate&&s===r.NONE&&B(_(we)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ye=n.minAzimuthAngle,et=n.maxAzimuthAngle;isFinite(Ye)&&isFinite(et)&&(Ye<-Math.PI?Ye+=ie:Ye>Math.PI&&(Ye-=ie),et<-Math.PI?et+=ie:et>Math.PI&&(et-=ie),Ye<=et?a.theta=Math.max(Ye,Math.min(et,a.theta)):a.theta=a.theta>(Ye+et)/2?Math.max(Ye,a.theta):Math.min(et,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&R||n.object.isOrthographicCamera?a.radius=Z(a.radius):a.radius=Z(a.radius*c),L.setFromSpherical(a),L.applyQuaternion(me),je.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let At=!1;if(n.zoomToCursor&&R){let $e=null;if(n.object.isPerspectiveCamera){const ot=L.length();$e=Z(ot*c);const Nt=ot-$e;n.object.position.addScaledVector(y,Nt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const ot=new D(C.x,C.y,0);ot.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),At=!0;const Nt=new D(C.x,C.y,0);Nt.unproject(n.object),n.object.position.sub(Nt).add(ot),n.object.updateMatrixWorld(),$e=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;$e!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar($e).add(n.object.position):(ea.origin.copy(n.object.position),ea.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ea.direction))<J0?e.lookAt(n.target):(pu.setFromNormalAndCoplanarPoint(n.object.up,n.target),ea.intersectPlane(pu,n.target))))}else n.object.isOrthographicCamera&&(At=c!==1,At&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix()));return c=1,R=!1,At||Te.distanceToSquared(n.object.position)>o||8*(1-w.dot(n.object.quaternion))>o||ae.distanceToSquared(n.target)>0?(n.dispatchEvent(fu),Te.copy(n.object.position),w.copy(n.object.quaternion),ae.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ke),n.domElement.removeEventListener("pointerdown",b),n.domElement.removeEventListener("pointercancel",G),n.domElement.removeEventListener("wheel",ee),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",G),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Re),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new _l,l=new _l;let c=1;const u=new D,h=new Pe,m=new Pe,d=new Pe,g=new Pe,v=new Pe,f=new Pe,p=new Pe,M=new Pe,x=new Pe,y=new D,C=new Pe;let R=!1;const T=[],H={};let U=!1;function _(L){return L!==null?2*Math.PI/60*n.autoRotateSpeed*L:2*Math.PI/60/60*n.autoRotateSpeed}function E(L){const oe=Math.abs(L*.01);return Math.pow(.95,n.zoomSpeed*oe)}function B(L){l.theta-=L}function z(L){l.phi-=L}const P=(function(){const L=new D;return function(me,Te){L.setFromMatrixColumn(Te,0),L.multiplyScalar(-me),u.add(L)}})(),F=(function(){const L=new D;return function(me,Te){n.screenSpacePanning===!0?L.setFromMatrixColumn(Te,1):(L.setFromMatrixColumn(Te,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(me),u.add(L)}})(),O=(function(){const L=new D;return function(me,Te){const w=n.domElement;if(n.object.isPerspectiveCamera){const ae=n.object.position;L.copy(ae).sub(n.target);let ie=L.length();ie*=Math.tan(n.object.fov/2*Math.PI/180),P(2*me*ie/w.clientHeight,n.object.matrix),F(2*Te*ie/w.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(P(me*(n.object.right-n.object.left)/n.object.zoom/w.clientWidth,n.object.matrix),F(Te*(n.object.top-n.object.bottom)/n.object.zoom/w.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function q(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(L,oe){if(!n.zoomToCursor)return;R=!0;const me=n.domElement.getBoundingClientRect(),Te=L-me.left,w=oe-me.top,ae=me.width,ie=me.height;C.x=Te/ae*2-1,C.y=-(w/ie)*2+1,y.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function Z(L){return Math.max(n.minDistance,Math.min(n.maxDistance,L))}function te(L){h.set(L.clientX,L.clientY)}function K(L){$(L.clientX,L.clientX),p.set(L.clientX,L.clientY)}function J(L){g.set(L.clientX,L.clientY)}function N(L){m.set(L.clientX,L.clientY),d.subVectors(m,h).multiplyScalar(n.rotateSpeed);const oe=n.domElement;B(2*Math.PI*d.x/oe.clientHeight),z(2*Math.PI*d.y/oe.clientHeight),h.copy(m),n.update()}function V(L){M.set(L.clientX,L.clientY),x.subVectors(M,p),x.y>0?q(E(x.y)):x.y<0&&j(E(x.y)),p.copy(M),n.update()}function se(L){v.set(L.clientX,L.clientY),f.subVectors(v,g).multiplyScalar(n.panSpeed),O(f.x,f.y),g.copy(v),n.update()}function fe(L){$(L.clientX,L.clientY),L.deltaY<0?j(E(L.deltaY)):L.deltaY>0&&q(E(L.deltaY)),n.update()}function le(L){let oe=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),oe=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),oe=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),oe=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),oe=!0;break}oe&&(L.preventDefault(),n.update())}function ce(L){if(T.length===1)h.set(L.pageX,L.pageY);else{const oe=ge(L),me=.5*(L.pageX+oe.x),Te=.5*(L.pageY+oe.y);h.set(me,Te)}}function Ee(L){if(T.length===1)g.set(L.pageX,L.pageY);else{const oe=ge(L),me=.5*(L.pageX+oe.x),Te=.5*(L.pageY+oe.y);g.set(me,Te)}}function Me(L){const oe=ge(L),me=L.pageX-oe.x,Te=L.pageY-oe.y,w=Math.sqrt(me*me+Te*Te);p.set(0,w)}function I(L){n.enableZoom&&Me(L),n.enablePan&&Ee(L)}function Xe(L){n.enableZoom&&Me(L),n.enableRotate&&ce(L)}function pe(L){if(T.length==1)m.set(L.pageX,L.pageY);else{const me=ge(L),Te=.5*(L.pageX+me.x),w=.5*(L.pageY+me.y);m.set(Te,w)}d.subVectors(m,h).multiplyScalar(n.rotateSpeed);const oe=n.domElement;B(2*Math.PI*d.x/oe.clientHeight),z(2*Math.PI*d.y/oe.clientHeight),h.copy(m)}function Se(L){if(T.length===1)v.set(L.pageX,L.pageY);else{const oe=ge(L),me=.5*(L.pageX+oe.x),Te=.5*(L.pageY+oe.y);v.set(me,Te)}f.subVectors(v,g).multiplyScalar(n.panSpeed),O(f.x,f.y),g.copy(v)}function ue(L){const oe=ge(L),me=L.pageX-oe.x,Te=L.pageY-oe.y,w=Math.sqrt(me*me+Te*Te);M.set(0,w),x.set(0,Math.pow(M.y/p.y,n.zoomSpeed)),q(x.y),p.copy(M);const ae=(L.pageX+oe.x)*.5,ie=(L.pageY+oe.y)*.5;$(ae,ie)}function Ge(L){n.enableZoom&&ue(L),n.enablePan&&Se(L)}function Ce(L){n.enableZoom&&ue(L),n.enableRotate&&pe(L)}function b(L){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",S),n.domElement.addEventListener("pointerup",G)),He(L),L.pointerType==="touch"?Ne(L):re(L))}function S(L){n.enabled!==!1&&(L.pointerType==="touch"?ne(L):Q(L))}function G(L){switch(De(L),T.length){case 0:n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",G),n.dispatchEvent(du),s=r.NONE;break;case 1:const oe=T[0],me=H[oe];Ne({pointerId:oe,pageX:me.x,pageY:me.y});break}}function re(L){let oe;switch(L.button){case 0:oe=n.mouseButtons.LEFT;break;case 1:oe=n.mouseButtons.MIDDLE;break;case 2:oe=n.mouseButtons.RIGHT;break;default:oe=-1}switch(oe){case bi.DOLLY:if(n.enableZoom===!1)return;K(L),s=r.DOLLY;break;case bi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;J(L),s=r.PAN}else{if(n.enableRotate===!1)return;te(L),s=r.ROTATE}break;case bi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;te(L),s=r.ROTATE}else{if(n.enablePan===!1)return;J(L),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(vo)}function Q(L){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;N(L);break;case r.DOLLY:if(n.enableZoom===!1)return;V(L);break;case r.PAN:if(n.enablePan===!1)return;se(L);break}}function ee(L){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(L.preventDefault(),n.dispatchEvent(vo),fe(ve(L)),n.dispatchEvent(du))}function ve(L){const oe=L.deltaMode,me={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(oe){case 1:me.deltaY*=16;break;case 2:me.deltaY*=100;break}return L.ctrlKey&&!U&&(me.deltaY*=10),me}function de(L){L.key==="Control"&&(U=!0,n.domElement.getRootNode().addEventListener("keyup",xe,{passive:!0,capture:!0}))}function xe(L){L.key==="Control"&&(U=!1,n.domElement.getRootNode().removeEventListener("keyup",xe,{passive:!0,capture:!0}))}function Re(L){n.enabled===!1||n.enablePan===!1||le(L)}function Ne(L){switch(be(L),T.length){case 1:switch(n.touches.ONE){case Ti.ROTATE:if(n.enableRotate===!1)return;ce(L),s=r.TOUCH_ROTATE;break;case Ti.PAN:if(n.enablePan===!1)return;Ee(L),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Ti.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;I(L),s=r.TOUCH_DOLLY_PAN;break;case Ti.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Xe(L),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(vo)}function ne(L){switch(be(L),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;pe(L),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Se(L),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ge(L),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ce(L),n.update();break;default:s=r.NONE}}function Ke(L){n.enabled!==!1&&L.preventDefault()}function He(L){T.push(L.pointerId)}function De(L){delete H[L.pointerId];for(let oe=0;oe<T.length;oe++)if(T[oe]==L.pointerId){T.splice(oe,1);return}}function be(L){let oe=H[L.pointerId];oe===void 0&&(oe=new Pe,H[L.pointerId]=oe),oe.set(L.pageX,L.pageY)}function ge(L){const oe=L.pointerId===T[0]?T[1]:T[0];return H[oe]}n.domElement.addEventListener("contextmenu",Ke),n.domElement.addEventListener("pointerdown",b),n.domElement.addEventListener("pointercancel",G),n.domElement.addEventListener("wheel",ee,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",de,{passive:!0,capture:!0}),this.update()}}const vr=2,e_=-90,tc=90,nc=-180,t_=180,ic=Math.floor((tc-e_)/vr)+1,Wn=Math.floor((t_-nc)/vr)+1,mu=ic*Wn,n_=[{t:-30,c:[20,40,150]},{t:5,c:[60,130,255]},{t:10,c:[255,255,255]},{t:15.5,c:[255,255,255]},{t:18,c:[255,235,50]},{t:25,c:[255,220,40]},{t:26.7,c:[255,160,20]},{t:32,c:[255,40,20]},{t:50,c:[150,0,0]}],i_=[{t:-20,c:[30,100,240]},{t:-5,c:[50,160,200]},{t:10,c:[60,200,90]},{t:25,c:[235,220,55]},{t:40,c:[210,50,30]}],r_=[{t:-30,c:[15,25,110]},{t:5,c:[55,110,225]},{t:10,c:[200,190,85]},{t:16,c:[220,190,55]},{t:18,c:[225,175,40]},{t:25,c:[220,145,30]},{t:27,c:[215,110,20]},{t:32,c:[200,40,15]},{t:50,c:[120,0,0]}],s_=[{t:4,c:[30,100,240]},{t:10,c:[80,180,255]},{t:18,c:[255,235,0]},{t:24,c:[255,130,0]},{t:32,c:[240,10,0]}],a_={thermal:n_,classic:i_,earth:r_,vivid:s_};function o_(i,e){if(i===null||i!==i)return[255,255,255];if(i<=e[0].t)return e[0].c;if(i>=e[e.length-1].t)return e[e.length-1].c;for(let t=0;t<e.length-1;t++){const n=e[t],r=e[t+1];if(i>=n.t&&i<=r.t){const s=(i-n.t)/(r.t-n.t);return[Math.round(n.c[0]+(r.c[0]-n.c[0])*s),Math.round(n.c[1]+(r.c[1]-n.c[1])*s),Math.round(n.c[2]+(r.c[2]-n.c[2])*s)]}}return[255,255,255]}function gu(i){const e=i*i,t=e*i;return[(-t+2*e-i)/2,(3*t-5*e+2)/2,(-3*t+4*e+i)/2,(t-e)/2]}function l_(i,e,t){return e=Math.max(0,Math.min(ic-1,e)),t<0?t+=Wn:t>=Wn&&(t-=Wn),i[e*Wn+t]}function c_(i,e,t){const n=(tc-e)/vr,r=(t-nc)/vr,s=Math.floor(n),o=Math.floor(r),a=n-s,l=r-o;let c=0,u=0;const h=new Float64Array(16);for(let v=-1;v<=2;v++)for(let f=-1;f<=2;f++){const p=l_(i,s+v,o+f),M=(v+1)*4+(f+1);h[M]=p,p===p&&(c+=p,u++)}if(u===0)return NaN;if(u<16){const v=c/u;for(let f=0;f<16;f++)h[f]!==h[f]&&(h[f]=v)}const m=gu(a),d=gu(l);let g=0;for(let v=0;v<4;v++){let f=0;for(let p=0;p<4;p++)f+=d[p]*h[v*4+p];g+=m[v]*f}return g}function u_(i,e,t,n,r){const s=new Uint8ClampedArray(i.length);for(let o=0;o<r;o++){for(let a=0;a<t;a++){const l=a*e*4;for(let c=0;c<3;c++){let u=0,h=0;for(let m=0;m<=n&&m<e;m++)u+=i[l+m*4+c],h++;for(let m=0;m<e;m++){s[l+m*4+c]=u/h+.5|0,s[l+m*4+3]=255;const d=m+n+1;d<e&&(u+=i[l+d*4+c],h++);const g=m-n;g>=0&&(u-=i[l+g*4+c],h--)}}}for(let a=0;a<e;a++)for(let l=0;l<3;l++){let c=0,u=0;for(let h=0;h<=n&&h<t;h++)c+=s[(h*e+a)*4+l],u++;for(let h=0;h<t;h++){i[(h*e+a)*4+l]=c/u+.5|0;const m=h+n+1;m<t&&(c+=s[(m*e+a)*4+l],u++);const d=h-n;d>=0&&(c-=s[(d*e+a)*4+l],u--)}}}}function h_(i,e,t){const n=Math.round((tc-e)/vr);let r=Math.round((t-nc)/vr);r<0?r+=Wn:r>=Wn&&(r-=Wn);const s=Math.max(0,Math.min(ic-1,n)),o=i[s*Wn+r];return o!==o}function f_(i,e,t,n){const r=e.customStops||a_[e.colorway],s=new Uint8ClampedArray(t*n*4),o=new Uint8Array(t*n);for(let a=0;a<n;a++){const l=90-a/n*180;for(let c=0;c<t;c++){const u=c/t*360-180,h=h_(i,l,u);o[a*t+c]=h?1:0;const m=(a*t+c)*4;if(h)s[m]=255,s[m+1]=255,s[m+2]=255,s[m+3]=255;else{const d=c_(i,l,u),g=o_(d!==d?null:d,r);s[m]=g[0],s[m+1]=g[1],s[m+2]=g[2],s[m+3]=255}}}{const l=Math.max(1,Math.round(e.blurRadius*t/2048));u_(s,t,n,l,3);for(let c=0;c<o.length;c++)if(o[c]){const u=c*4;s[u]=255,s[u+1]=255,s[u+2]=255}}return s}const _u=512,ta=256,pr=16;let gn=null,$t=null,Ra=0,Ga=0,gs=null,ha=0,vl=0;function d_(i,e,t){gs=i,ha=e,vl=t}function pf(i,e,t){if(gs)for(let n=0;n<t;n++){const r=Math.min(vl-1,Math.round(n/t*vl));for(let s=0;s<e;s++){const o=Math.min(ha-1,Math.round(s/e*ha));if(gs[r*ha+o]<128){const l=(n*e+s)*4;i[l]=255,i[l+1]=255,i[l+2]=255}}}}function p_(i,e,t,n,r){if(gs)for(let s=0;s<e;s++){const o=s%r,a=Math.floor(s/r),l=o*t,c=a*n,u=i.getImageData(l,c,t,n);pf(u.data,t,n),i.putImageData(u,l,c)}}async function m_(){const[i,e]=await Promise.all([fetch("./data/globe-grid.bin"),fetch("./data/globe-dates.json")]);if(!i.ok)throw new Error(`Failed to load grid binary: ${i.status}`);if(!e.ok)throw new Error(`Failed to load grid dates: ${e.status}`);const[t,n]=await Promise.all([i.arrayBuffer(),e.json()]),r=new DataView(t,0,8),s=r.getUint16(0,!0),o=r.getUint16(2,!0);return console.log(`Thermal grid: ${s} days x ${o} pts (${(t.byteLength/1024/1024).toFixed(1)} MB)`),{allTemps:new Float32Array(t,8),numDays:s,numPoints:o,dateLabels:n}}const g_="porcelain-thermal",xr="textures";function mf(){return new Promise((i,e)=>{const t=indexedDB.open(g_,1);t.onupgradeneeded=()=>{const n=t.result;n.objectStoreNames.contains(xr)||n.createObjectStore(xr)},t.onsuccess=()=>i(t.result),t.onerror=()=>e(t.error)})}function __(i){return`atlas-v2-pot-${i.customStops?JSON.stringify(i.customStops):i.colorway}-${i.blurRadius}`}async function v_(i){try{const e=await mf();return new Promise(t=>{const r=e.transaction(xr,"readonly").objectStore(xr).get(i);r.onsuccess=()=>{const s=r.result;t(s?s.buffer:null)},r.onerror=()=>t(null)})}catch{return null}}async function vu(i,e,t){try{(await mf()).transaction(xr,"readwrite").objectStore(xr).put({buffer:e,numDays:t},i)}catch{}}async function xo(i,e,t,n=!1){const r=new Blob([i],{type:"image/jpeg"}),s=URL.createObjectURL(r),o=new Image;await new Promise((m,d)=>{o.onload=()=>m(),o.onerror=()=>d(new Error("Atlas image load failed")),o.src=s}),URL.revokeObjectURL(s),console.log(`Thermal atlas: ${o.width}x${o.height}${n?" (downscaling 2×)":""}`);const a=document.createElement("canvas");n?(a.width=Math.floor(o.width/2),a.height=Math.floor(o.height/2)):(a.width=o.width,a.height=o.height);const l=a.getContext("2d");if(l.drawImage(o,0,0,a.width,a.height),gs){const m=n?Math.floor(_u/2):_u,d=n?Math.floor(ta/2):ta;p_(l,e,m,d,pr)}const c=new t.CanvasTexture(a);c.needsUpdate=!0,c.minFilter=t.LinearFilter,c.magFilter=t.LinearFilter,c.wrapS=t.ClampToEdgeWrapping,c.wrapT=t.ClampToEdgeWrapping,c.generateMipmaps=!1;const u=n?Math.floor(ta/2):ta,h=a.height/u;return c.repeat.set(1/pr,1/h),c.offset.set(0,1-1/h),Ga=h,c}function x_(i){if(!$t||Ra===0)return;const e=Math.max(0,Math.min(i,Ra-1)),t=e%pr,n=Math.floor(e/pr);$t.offset.set(t/pr,1-(n+1)/Ga)}function xu(){return $t}function M_(){return $t!==null}function y_(i){return`./data/thermal-atlas-${i.customStops?JSON.stringify(i.customStops):i.colorway}-${i.blurRadius}.jpg`}async function S_(i){try{const e=await fetch(i);return e.ok?await e.arrayBuffer():null}catch{return null}}function E_(i,e,t,n,r,s){A_();const o=__(t),a=!!t.downscale;Ra=e,Ga=Math.ceil(e/pr),(async()=>{const l=await S_(y_(t));if(l){console.log(`Thermal atlas from static file (${(l.byteLength/1024/1024).toFixed(1)} MB)`),$t=await xo(l,e,n,a),vu(o,l,e),r&&r(e,e),s&&s($t);return}const c=await v_(o);if(c){console.log(`Thermal atlas from cache (${(c.byteLength/1024/1024).toFixed(1)} MB)`),$t=await xo(c,e,n,a),r&&r(e,e),s&&s($t);return}gn=new Worker("./thermal-worker.js"),gn.onmessage=async u=>{const h=u.data;if(h.type==="progress"&&r&&r(h.done,h.total),h.type==="atlas"){const m=h.buffer;console.log(`Thermal atlas rendered (${(m.byteLength/1024/1024).toFixed(1)} MB)`),vu(o,m,e),$t=await xo(m,e,n,a),s&&s($t),gn&&(gn.terminate(),gn=null)}},gn.postMessage({type:"start",temps:i,numDays:e,opts:{colorway:t.colorway,blurRadius:t.blurRadius,customStops:t.customStops}},[i.buffer])})()}function A_(){gn&&(gn.postMessage({type:"cancel"}),gn.terminate(),gn=null),$t&&($t.dispose(),$t=null),Ra=0,Ga=0}function b_(i,e,t,n,r,s){const o=Math.max(0,Math.min(e,t-1)),a=i.subarray(o*mu,(o+1)*mu),l=1024,c=512,u=f_(a,n,l,c);pf(u,l,c);const h=document.createElement("canvas");h.width=l,h.height=c,h.getContext("2d").putImageData(new ImageData(u,l,c),0,0);const d=new s.CanvasTexture(h);return d.needsUpdate=!0,d.minFilter=s.LinearFilter,d.magFilter=s.LinearFilter,d.wrapS=s.ClampToEdgeWrapping,d.wrapT=s.ClampToEdgeWrapping,d.generateMipmaps=!1,d}const gf=1.2,_f=-1,xl=.4,T_=2.4,w_=.115,Rr=.005,ir=9.8*Rr,R_=20*Rr,C_=35*Rr,Mo=8*Rr,yo=20*Rr,L_=.96,nn=.3*Rr;let oi=24e3;function Mu(i){oi=Math.max(1e3,i)}const na=5,Ca=[[.15,.55,.95],[.05,.75,.35],[.92,.82,.12],[0,.78,.88],[.95,.45,.65],[.25,.35,.85],[.4,.85,.4],[.15,.62,.72]];let ft=null,$r=null,ln=[],rc=xl,_s=null,Ml=null,vf=0,xf=0,hr=0,fn=null,Mr=[];const P_=1.5,D_=3.5;let ut=null,La=null,Kr=null,sc=!1,fa=0,da=0,Li=null,Hr=null;function Qt(i,e,t){return Math.min(t,Math.max(e,i))}function pa(i){return Qt(i,0,1)}function ma(i,e,t){const n=Qt((t-i)/Math.max(1e-6,e-i),0,1);return n*n*(3-2*n)}function I_(i,e,t,n,r){if(!i)return 0;const s=(n%1+1)%1,o=Qt(r,0,1),a=Qt(Math.round(s*(e-1)),0,e-1),l=Qt(Math.round(o*(t-1)),0,t-1);return i[l*e+a]/255}function U_(i,e){const t=bn.degToRad(i*_f),n=bn.degToRad(e),r=Math.cos(n);return new D(r*Math.cos(t),Math.sin(n),r*Math.sin(t))}function N_(i){return i>=.5?(i-.5)/Math.max(1e-6,1-.5):(i-.5)/Math.max(1e-6,.5)}function F_(i,e=1){const t=N_(i),n=Math.max(0,t),r=Math.pow(n,.98),s=ma(.56,.98,n),o=Math.pow(s,2.4)*.33;return pa(r+o)*e}function O_(i,e,t){const n=pa(i),r=Qt(Number(e)||1,xl,T_),o=.72+Qt(Number(t)||1,.35,2.5)*.28,a=Qt((1-r)/Math.max(1e-6,1-xl),0,1),l=ma(.58,.985,n),c=ma(.42,.9,n),u=Math.pow(l,2.5)*(.02+a*.16),h=Math.pow(c,1.8)*l*(.03+a*.07),m=pa(n+u-h),d=ma(.86,1,m),g=Math.pow(d,1.35)*(.026+a*.034),v=pa(m-g),f=1+a*Math.pow(l,1.6)*.16;return v*w_*r*o*f}function tt(i,e){return i+Math.random()*(e-i)}function yu(i){if(!i)return-1;const e=new Date(i);if(isNaN(e.getTime()))return-1;const t=new Date(2026,0,1),n=Math.round((e-t)/864e5);return Qt(n,0,364)}function B_(i){const e=Math.abs(i.y)<.99?new D(0,1,0):new D(1,0,0),t=new D().crossVectors(e,i).normalize(),n=new D().crossVectors(i,t);return{tangent:t,bitangent:n}}function ws(i){const e=U_(i.lng,i.lat),t=Math.atan2(e.z,e.x)*_f,n=Math.asin(Qt(e.y,-1,1)),r=t/(Math.PI*2)+.5,s=.5-n/Math.PI,o=_s.sample(r,s),a=I_(Ml,vf,xf,r,s),l=Ml?a:o>.5002?1:0,c=F_(o,l),u=O_(c,rc,1),h=gf+u+.003;return{position:e.clone().multiplyScalar(h),normal:e.clone()}}function Cr(){if(!ft||!Li)return[];const i=[];for(let e=0;e<ft.length;e++){const t=ft[e];if(Kr&&Kr.has(t)){i.push(e);continue}if(Kr)continue;const n=Li[e],r=Hr[e];if(n<0)continue;let s;sc?fa<=da?s=n<=da&&r>=fa:s=r>=fa||n<=da:n<=r?s=hr>=n-na&&hr<=r+na:s=hr>=n-na||hr<=r+na,s&&(La&&!La(ft[e])||i.push(e))}return i}const z_=`
attribute float size;
attribute float alpha;
varying vec3 vColor;
varying float vAlpha;
void main() {
  vColor = color;
  vAlpha = alpha;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * (42.0 / -mv.z);
  gl_Position = projectionMatrix * mv;
}
`,k_=`
varying vec3 vColor;
varying float vAlpha;
void main() {
  vec2 p = gl_PointCoord - vec2(0.5);
  // Rotated square mask for confetti look
  float angle = vAlpha * 3.14;
  float ca = cos(angle), sa = sin(angle);
  vec2 rp = vec2(ca * p.x - sa * p.y, sa * p.x + ca * p.y);
  float box = max(abs(rp.x), abs(rp.y));
  if (box > 0.42) discard;
  float edge = 1.0 - smoothstep(0.32, 0.42, box);
  vec3 bright = mix(vColor, vec3(1.0), 0.25);
  gl_FragColor = vec4(bright, vAlpha * edge * 0.92);
}
`;let Zr,Jr,Qr,es,_n;function G_(i){const e=ft[i],{position:t,normal:n}=ws(e),{tangent:r,bitangent:s}=B_(n);ut&&(ut[i*3]=t.x,ut[i*3+1]=t.y,ut[i*3+2]=t.z);const o=tt(R_,C_),a=Math.sqrt(2*ir*o),l=Ca[Math.floor(Math.random()*Ca.length)],c=n.x*a+r.x*tt(-nn,nn)+s.x*tt(-nn,nn),u=n.y*a+r.y*tt(-nn,nn)+s.y*tt(-nn,nn),h=n.z*a+r.z*tt(-nn,nn)+s.z*tt(-nn,nn);ln.push({x:t.x,y:t.y,z:t.z,vx:c,vy:u,vz:h,gx:-n.x*ir,gy:-n.y*ir,gz:-n.z*ir,nx:n.x,ny:n.y,nz:n.z,tx:r.x,ty:r.y,tz:r.z,bx:s.x,by:s.y,bz:s.z,r:.7,g:.65,b:.3,life:a/ir,maxLife:a/ir,size:2.5,rocket:!0,color:l,festivalIndex:i})}function H_(i){const e=i.x,t=i.y,n=i.z,[r,s,o]=i.color,a=40+Math.floor(Math.random()*30),l=Math.random();for(let c=0;c<a;c++){let u,h,m;if(l<.5){const C=Math.random()*Math.PI*2,R=Math.acos(2*Math.random()-1),T=tt(Mo,yo);u=Math.sin(R)*Math.cos(C)*T,h=Math.sin(R)*Math.sin(C)*T,m=Math.cos(R)*T}else{const C=Math.random()*Math.PI*2,R=tt(Mo*.6,yo*.5),T=tt(Mo,yo*.8);u=Math.cos(C)*R,h=T,m=Math.sin(C)*R}const d=i.tx*u+i.nx*h+i.bx*m,g=i.ty*u+i.ny*h+i.by*m,v=i.tz*u+i.nz*h+i.bz*m,f=tt(1,2.2),p=Math.random()<.3?Ca[Math.floor(Math.random()*Ca.length)]:i.color,[M,x,y]=p;ln.push({x:e,y:t,z:n,vx:d,vy:g,vz:v,gx:i.gx,gy:i.gy,gz:i.gz,nx:0,ny:0,nz:0,tx:0,ty:0,tz:0,bx:0,by:0,bz:0,r:Math.min(1,Math.max(0,M+tt(-.1,.1))),g:Math.min(1,Math.max(0,x+tt(-.1,.1))),b:Math.min(1,Math.max(0,y+tt(-.1,.1))),life:f,maxLife:f,size:tt(1.2,2.8),rocket:!1,color:null,festivalIndex:i.festivalIndex})}}async function V_(){const i=await fetch("./data/festivals-2026.json?v=3");if(!i.ok)throw new Error(`Failed to load festivals: ${i.status}`);ft=await i.json(),Li=new Int16Array(ft.length),Hr=new Int16Array(ft.length);for(let n=0;n<ft.length;n++){const r=ft[n];if(Li[n]=yu(r.start),Hr[n]=r.end?yu(r.end):Li[n],Li[n]===Hr[n]&&r.start&&r.end){const s=new Date(r.start),o=new Date(r.end),a=new Date(2026,0,1),l=new Date(2026,11,31);(o<a||s>l)&&(Li[n]=-1,Hr[n]=-1)}}ut=new Float32Array(ft.length*3),fn=new Float32Array(ft.length);const e=new Date,t=new Date(2026,0,1);return hr=Math.max(0,Math.min(364,Math.round((e-t)/864e5))),ft}function W_({radius:i,heightSampler:e,landMaskData:t,landMaskWidth:n,landMaskHeight:r,terrainExaggeration:s}){_s=e,Ml=t,vf=n,xf=r,rc=s,Zr=new Float32Array(oi*3),Jr=new Float32Array(oi*3),Qr=new Float32Array(oi),es=new Float32Array(oi),_n=new Vt,_n.setAttribute("position",new gt(Zr,3)),_n.setAttribute("color",new gt(Jr,3)),_n.setAttribute("size",new gt(Qr,1)),_n.setAttribute("alpha",new gt(es,1));const o=new Tn({vertexShader:z_,fragmentShader:k_,vertexColors:!0,transparent:!0,depthWrite:!1,depthTest:!0});if($r=new ec(_n,o),$r.renderOrder=3,ln=[],ut&&_s){const a=Cr();Mr=a;for(const l of a){const{position:c}=ws(ft[l]);ut[l*3]=c.x,ut[l*3+1]=c.y,ut[l*3+2]=c.z}}return $r}function X_(i){if(!$r||!ft)return;const e=performance.now()/1e3,t=Cr();Mr=t;for(const s of t)e>=fn[s]&&(G_(s),fn[s]=e+tt(P_,D_));for(let s=ln.length-1;s>=0;s--){const o=ln[s];if(o.life-=i,o.life<=0){o.rocket&&H_(o),ln.splice(s,1);continue}if(o.vx+=o.gx*i,o.vy+=o.gy*i,o.vz+=o.gz*i,!o.rocket){const a=Math.pow(L_,i*60);o.vx*=a,o.vy*=a,o.vz*=a,o.vx+=tt(-.001,.001),o.vy+=tt(-.001,.001),o.vz+=tt(-.001,.001)}o.x+=o.vx*i,o.y+=o.vy*i,o.z+=o.vz*i,o.rocket&&Math.random()<.3&&ln.push({x:o.x+tt(-.001,.001),y:o.y+tt(-.001,.001),z:o.z+tt(-.001,.001),vx:tt(-.001,.001),vy:tt(-.001,.001),vz:tt(-.001,.001),gx:o.gx*.2,gy:o.gy*.2,gz:o.gz*.2,nx:0,ny:0,nz:0,tx:0,ty:0,tz:0,bx:0,by:0,bz:0,r:.7,g:.65,b:.3,life:tt(.1,.25),maxLife:.2,size:tt(.4,.8),rocket:!1,color:null,festivalIndex:-1})}for(;ln.length>oi;)ln.shift();const n=Math.min(ln.length,oi),r=La?new Set(t):null;for(let s=0;s<oi;s++)if(s<n){const o=ln[s];if(r&&o.festivalIndex>=0&&!r.has(o.festivalIndex)){es[s]=0,Qr[s]=0;continue}const a=Math.max(0,o.life/o.maxLife);Zr[s*3]=o.x,Zr[s*3+1]=o.y,Zr[s*3+2]=o.z,Jr[s*3]=o.r,Jr[s*3+1]=o.g,Jr[s*3+2]=o.b,Qr[s]=o.size*(.4+.6*a),es[s]=a*a}else es[s]=0,Qr[s]=0;_n.attributes.position.needsUpdate=!0,_n.attributes.color.needsUpdate=!0,_n.attributes.size.needsUpdate=!0,_n.attributes.alpha.needsUpdate=!0}function q_(i){rc=i}function vs(i){if(hr=Qt(Math.round(i),0,364),fn&&fn.fill(0),ut&&_s){const e=Cr();Mr=e;for(const t of e){const{position:n}=ws(ft[t]);ut[t*3]=n.x,ut[t*3+1]=n.y,ut[t*3+2]=n.z}}}function So(){return $r}function Y_(i){La=i}function Eo(i){i&&i.length>0?Kr=new Set(i):Kr=null,fn&&fn.fill(0)}function xs(i,e){if(sc=!0,fa=Qt(Math.round(i),0,364),da=Qt(Math.round(e),0,364),fn&&fn.fill(0),ut&&_s){const t=Cr();Mr=t;for(const n of t){const{position:r}=ws(ft[n]);ut[n*3]=r.x,ut[n*3+1]=r.y,ut[n*3+2]=r.z}}}function j_(){sc=!1,fn&&fn.fill(0)}function $_(i,e){if(!ft||!ut)return null;const t=Mr.length>0?Mr:Cr();if(t.length===0)return null;const n=new Gi(new D(0,0,0),gf+.06),r=new D,s=new rt().copy(e.matrixWorld).invert();if(!i.ray.clone().applyMatrix4(s).intersectSphere(n,r))return null;let a=1/0,l=-1;for(const u of t){const h=ut[u*3],m=ut[u*3+1],d=ut[u*3+2];if(h===0&&m===0&&d===0)continue;const g=r.x-h,v=r.y-m,f=r.z-d,p=g*g+v*v+f*f;p<a&&(a=p,l=u)}return l>=0&&a<.04?ft[l]:null}function ga(){return ft}function K_(){return Cr()}const Z_=.012,Su=.022,J_=.006,Eu=6;let Gn=null,Ao=null,Di=null,ts=[],yl="",rr=new Map,Vr=null;const Q_=120;function ev(i){const e=rr.get(i);if(e)return e;if(rr.size>=Q_){const u=rr.keys().next().value,h=rr.get(u);h&&h.texture&&h.texture.dispose&&h.texture.dispose(),rr.delete(u)}const t=document.createElement("canvas"),n=t.getContext("2d"),r=28,s=`700 ${r}px "Avenir Next", Avenir, "Segoe UI", sans-serif`;n.font=s;const o=n.measureText(i),a=4;t.width=Math.ceil(o.width+a*2),t.height=Math.ceil(r*1.25+a*2),n.font=s,n.fillStyle="rgba(10, 18, 30, 0.82)",n.textBaseline="middle",n.fillText(i,a,t.height/2);const l=new Ba(t);l.needsUpdate=!0,l.minFilter=Et,l.magFilter=Et;const c={texture:l,width:t.width,height:t.height};return rr.set(i,c),c}function tv(i){const e=Math.abs(i.y)<.99?new D(0,1,0):new D(1,0,0),t=new D().crossVectors(e,i).normalize(),n=new D().crossVectors(i,t).normalize();return{tangent:t,bitangent:n}}function nv(i,e,t,n,r,s,o,a){if(Vr=a,Gn)return;Gn=new ai,Gn.name="festival-labels",i.add(Gn),Di=new Vt,Di.setAttribute("position",new gt(new Float32Array(0),3));const l=new Ql({color:0,size:Z_,sizeAttenuation:!0,depthTest:!0,depthWrite:!1});Ao=new ec(Di,l),Ao.renderOrder=4,Gn.add(Ao)}function Yt(){if(!Gn)return;const i=ga();if(!i)return;const e=K_(),t=e.join(",");if(t===yl)return;yl=t;const n=new Float32Array(e.length*3),r=[];for(let o=0;o<e.length;o++){const a=i[e[o]],{position:l,normal:c}=ws(a);n[o*3]=l.x,n[o*3+1]=l.y,n[o*3+2]=l.z,r.push({position:l,normal:c,festival:a,idx:e[o]})}Di.setAttribute("position",new gt(n,3)),Di.setDrawRange(0,e.length),Di.attributes.position.needsUpdate=!0,Di.computeBoundingSphere();for(const o of ts)Gn.remove(o.mesh),o.mesh.material.dispose(),o.mesh.geometry.dispose();ts=[];const s=r.filter(o=>o.festival.city).sort((o,a)=>a.festival.interest-o.festival.interest);for(const{position:o,normal:a,festival:l}of s){const{texture:c,width:u,height:h}=ev(l.city),{tangent:m,bitangent:d}=tv(a),g=u/h,v=Su*g,f=Su,p=new Tr(v,f),M=new bs({map:c,transparent:!0,depthTest:!0,depthWrite:!1,side:un}),x=new Zt(p,M);x.position.copy(o).addScaledVector(a,J_);const y=new rt;y.makeBasis(m,d,a),x.rotation.setFromRotationMatrix(y);const C=x.position.clone();Gn.add(x),ts.push({mesh:x,worldPos:C,festival:l,halfW:v*.5,halfH:f*.5})}}const iv=new D,bo=[];function rv(i,e){if(!ts.length||!i)return;const t=Vr?Vr.domElement.clientWidth:window.innerWidth,n=Vr?Vr.domElement.clientHeight:window.innerHeight,r=t*.5,s=n*.5;bo.length=0;const o=new D;e.getWorldPosition(o);const a=i.position;for(const l of ts){const c=iv.copy(l.worldPos);Gn.localToWorld(c);const u=new D().subVectors(a,c),h=new D().subVectors(c,o).normalize();if(u.dot(h)<.05){l.mesh.visible=!1;continue}const d=c.project(i),g=d.x*r+r,v=-d.y*s+s,f=a.distanceTo(c),p=s*2/(2*f*Math.tan(i.fov*Math.PI/360)),M=l.halfW*p+Eu,x=l.halfH*p+Eu,y={x:g,y:v,hw:M,hh:x};let C=!1;for(const R of bo)if(Math.abs(y.x-R.x)<y.hw+R.hw&&Math.abs(y.y-R.y)<y.hh+R.hh){C=!0;break}C?l.mesh.visible=!1:(l.mesh.visible=!0,bo.push(y))}}function sv(i){yl=""}const av={Afghanistan:["Southern Asia","Asia"],Albania:["Southern Europe","Europe"],Algeria:["Northern Africa","Africa"],Andorra:["Southern Europe","Europe"],Angola:["Middle Africa","Africa"],"Antigua and Barbuda":["Caribbean","Americas"],Argentina:["South America","Americas"],Armenia:["Western Asia","Asia"],Australia:["Australia and New Zealand","Oceania"],Austria:["Western Europe","Europe"],Azerbaijan:["Western Asia","Asia"],Bahamas:["Caribbean","Americas"],Bahrain:["Western Asia","Asia"],Bangladesh:["Southern Asia","Asia"],Barbados:["Caribbean","Americas"],Belarus:["Eastern Europe","Europe"],Belgium:["Western Europe","Europe"],Belize:["Central America","Americas"],Benin:["Western Africa","Africa"],Bermuda:["Northern America","Americas"],Bhutan:["Southern Asia","Asia"],Bolivia:["South America","Americas"],"Bosnia and Herzegovina":["Southern Europe","Europe"],Botswana:["Southern Africa","Africa"],Brazil:["South America","Americas"],Brunei:["South-Eastern Asia","Asia"],Bulgaria:["Eastern Europe","Europe"],"Burkina Faso":["Western Africa","Africa"],Burundi:["Eastern Africa","Africa"],Cambodia:["South-Eastern Asia","Asia"],Cameroon:["Middle Africa","Africa"],Canada:["Northern America","Americas"],"Cape Verde":["Western Africa","Africa"],"Cayman Islands":["Caribbean","Americas"],"Central African Republic":["Middle Africa","Africa"],Chad:["Middle Africa","Africa"],Chile:["South America","Americas"],China:["Eastern Asia","Asia"],Colombia:["South America","Americas"],Comoros:["Eastern Africa","Africa"],Congo:["Middle Africa","Africa"],"Cook Islands":["Australia and New Zealand","Oceania"],"Costa Rica":["Central America","Americas"],Croatia:["Southern Europe","Europe"],Cuba:["Caribbean","Americas"],Cyprus:["Western Asia","Asia"],Czechia:["Eastern Europe","Europe"],Denmark:["Northern Europe","Europe"],Djibouti:["Eastern Africa","Africa"],Dominica:["Caribbean","Americas"],"Dominican Republic":["Caribbean","Americas"],Ecuador:["South America","Americas"],Egypt:["Northern Africa","Africa"],"El Salvador":["Central America","Americas"],"Equatorial Guinea":["Middle Africa","Africa"],Eritrea:["Eastern Africa","Africa"],Estonia:["Northern Europe","Europe"],Eswatini:["Southern Africa","Africa"],Ethiopia:["Eastern Africa","Africa"],"Faroe Islands":["Northern Europe","Europe"],Fiji:["Melanesia","Oceania"],Finland:["Northern Europe","Europe"],France:["Western Europe","Europe"],"French Guiana":["South America","Americas"],"French Polynesia":["Australia and New Zealand","Oceania"],Gabon:["Middle Africa","Africa"],Gambia:["Western Africa","Africa"],Georgia:["Western Asia","Asia"],Germany:["Western Europe","Europe"],Ghana:["Western Africa","Africa"],Greece:["Southern Europe","Europe"],Greenland:["Northern America","Americas"],Guam:["Australia and New Zealand","Oceania"],Guatemala:["Central America","Americas"],Guinea:["Western Africa","Africa"],"Guinea-Bissau":["Western Africa","Africa"],Guyana:["South America","Americas"],Haiti:["Caribbean","Americas"],Honduras:["Central America","Americas"],"Hong Kong":["Eastern Asia","Asia"],Hungary:["Eastern Europe","Europe"],Iceland:["Northern Europe","Europe"],India:["Southern Asia","Asia"],Indonesia:["South-Eastern Asia","Asia"],Iran:["Southern Asia","Asia"],Iraq:["Western Asia","Asia"],Ireland:["Northern Europe","Europe"],Israel:["Western Asia","Asia"],Italy:["Southern Europe","Europe"],Jamaica:["Caribbean","Americas"],Japan:["Eastern Asia","Asia"],Jordan:["Western Asia","Asia"],Kazakhstan:["Central Asia","Asia"],Kenya:["Eastern Africa","Africa"],Kosovo:["Southern Europe","Europe"],Kuwait:["Western Asia","Asia"],Kyrgyzstan:["Central Asia","Asia"],Laos:["South-Eastern Asia","Asia"],Latvia:["Northern Europe","Europe"],Lebanon:["Western Asia","Asia"],Lesotho:["Southern Africa","Africa"],Liberia:["Western Africa","Africa"],Libya:["Northern Africa","Africa"],Lithuania:["Northern Europe","Europe"],Luxembourg:["Western Europe","Europe"],Macau:["Eastern Asia","Asia"],Madagascar:["Eastern Africa","Africa"],Malawi:["Eastern Africa","Africa"],Malaysia:["South-Eastern Asia","Asia"],Mali:["Western Africa","Africa"],Malta:["Southern Europe","Europe"],Martinique:["Caribbean","Americas"],Mauritania:["Western Africa","Africa"],Mauritius:["Eastern Africa","Africa"],Mexico:["Central America","Americas"],Moldova:["Eastern Europe","Europe"],Mongolia:["Eastern Asia","Asia"],Montenegro:["Southern Europe","Europe"],Morocco:["Northern Africa","Africa"],Mozambique:["Eastern Africa","Africa"],Myanmar:["South-Eastern Asia","Asia"],Namibia:["Southern Africa","Africa"],Nepal:["Southern Asia","Asia"],Netherlands:["Western Europe","Europe"],"New Caledonia":["Melanesia","Oceania"],"New Zealand":["Australia and New Zealand","Oceania"],Nicaragua:["Central America","Americas"],Niger:["Western Africa","Africa"],Nigeria:["Western Africa","Africa"],"North Korea":["Eastern Asia","Asia"],"North Macedonia":["Southern Europe","Europe"],Norway:["Northern Europe","Europe"],Oman:["Western Asia","Asia"],Pakistan:["Southern Asia","Asia"],Palestine:["Western Asia","Asia"],Panama:["Central America","Americas"],"Papua New Guinea":["Melanesia","Oceania"],Paraguay:["South America","Americas"],Peru:["South America","Americas"],Philippines:["South-Eastern Asia","Asia"],Poland:["Eastern Europe","Europe"],Portugal:["Southern Europe","Europe"],"Puerto Rico":["Caribbean","Americas"],Qatar:["Western Asia","Asia"],Reunion:["Eastern Africa","Africa"],Romania:["Eastern Europe","Europe"],Russia:["Eastern Europe","Europe"],Rwanda:["Eastern Africa","Africa"],"Saint Kitts and Nevis":["Caribbean","Americas"],"Saint Lucia":["Caribbean","Americas"],Samoa:["Australia and New Zealand","Oceania"],"Saudi Arabia":["Western Asia","Asia"],Senegal:["Western Africa","Africa"],Serbia:["Southern Europe","Europe"],Seychelles:["Eastern Africa","Africa"],"Sierra Leone":["Western Africa","Africa"],Singapore:["South-Eastern Asia","Asia"],"Sint Maarten":["Caribbean","Americas"],Slovakia:["Eastern Europe","Europe"],Slovenia:["Southern Europe","Europe"],"Solomon Islands":["Melanesia","Oceania"],Somalia:["Eastern Africa","Africa"],Somaliland:["Eastern Africa","Africa"],"South Africa":["Southern Africa","Africa"],"South Korea":["Eastern Asia","Asia"],"South Sudan":["Eastern Africa","Africa"],Spain:["Southern Europe","Europe"],"Sri Lanka":["Southern Asia","Asia"],Sudan:["Northern Africa","Africa"],Suriname:["South America","Americas"],Sweden:["Northern Europe","Europe"],Switzerland:["Western Europe","Europe"],Syria:["Western Asia","Asia"],Taiwan:["Eastern Asia","Asia"],Tajikistan:["Central Asia","Asia"],Tanzania:["Eastern Africa","Africa"],Thailand:["South-Eastern Asia","Asia"],"Timor-Leste":["South-Eastern Asia","Asia"],Togo:["Western Africa","Africa"],Tonga:["Australia and New Zealand","Oceania"],"Trinidad and Tobago":["Caribbean","Americas"],Tunisia:["Northern Africa","Africa"],Turkey:["Western Asia","Asia"],Turkmenistan:["Central Asia","Asia"],Uganda:["Eastern Africa","Africa"],Ukraine:["Eastern Europe","Europe"],"United Arab Emirates":["Western Asia","Asia"],"United Kingdom":["Northern Europe","Europe"],"United States of America":["Northern America","Americas"],Uruguay:["South America","Americas"],Uzbekistan:["Central Asia","Asia"],Vanuatu:["Melanesia","Oceania"],Venezuela:["South America","Americas"],Vietnam:["South-Eastern Asia","Asia"],Yemen:["Western Asia","Asia"],Zambia:["Eastern Africa","Africa"],Zimbabwe:["Eastern Africa","Africa"],"São Tomé and Príncipe":["Middle Africa","Africa"],Curaçao:["Caribbean","Americas"],"US Virgin Islands":["Caribbean","Americas"],"Côte d'Ivoire":["Western Africa","Africa"]},kn=new Map;for(const[i,[e,t]]of Object.entries(av))kn.set(i,{subregion:e,region:t});const _a={"Czech Republic":"Czechia",DRC:"Congo","Democratic Republic of Congo":"Congo","Republic of Congo":"Congo","Ivory Coast":"Côte d'Ivoire","The Gambia":"Gambia",UAE:"United Arab Emirates",UK:"United Kingdom",USA:"United States of America","St. Lucia":"Saint Lucia"},ac=new Map;for(const i of kn.keys())ac.set(i.toLowerCase(),i);for(const[i,e]of Object.entries(_a))ac.set(i.toLowerCase(),e);function ov(i){if(!i)return null;const e=kn.get(i);if(e)return e;const t=_a[i];if(t)return kn.get(t);const n=i.replace(/\s*\(.*?\)\s*/g,"").trim();if(n!==i){const s=kn.get(n)||kn.get(_a[n]);if(s)return s}const r=i.split(/\s*[\/]\s*/);for(const s of r){const o=s.replace(/\s*\(.*?\)\s*/g,"").trim(),a=kn.get(o)||kn.get(_a[o]);if(a)return a}return null}function lv(i,e){if(!i||!e)return!1;const t=i.toLowerCase(),n=e.toLowerCase();if(t.includes(n))return!0;const r=ac.get(n);if(r&&t.includes(r.toLowerCase()))return!0;const s=t.split(/\s*[\/]\s*/);for(const o of s){const a=o.replace(/\s*\(.*?\)\s*/g,"").trim();if(a===n||a===(r==null?void 0:r.toLowerCase()))return!0}return!1}const Au=new Map([["southeast asia",["South-Eastern Asia"]],["se asia",["South-Eastern Asia"]],["south east asia",["South-Eastern Asia"]],["east asia",["Eastern Asia"]],["south asia",["Southern Asia"]],["central asia",["Central Asia"]],["west asia",["Western Asia"]],["middle east",["Western Asia"]],["northern europe",["Northern Europe"]],["western europe",["Western Europe"]],["eastern europe",["Eastern Europe"]],["southern europe",["Southern Europe"]],["scandinavia",["Northern Europe"]],["nordic",["Northern Europe"]],["balkans",["Southern Europe"]],["mediterranean",["Southern Europe","Northern Africa","Western Asia"]],["north africa",["Northern Africa"]],["west africa",["Western Africa"]],["east africa",["Eastern Africa"]],["central africa",["Middle Africa"]],["southern africa",["Southern Africa"]],["sub-saharan africa",["Eastern Africa","Western Africa","Middle Africa","Southern Africa"]],["sub saharan africa",["Eastern Africa","Western Africa","Middle Africa","Southern Africa"]],["north america",["Northern America"]],["central america",["Central America"]],["south america",["South America"]],["latin america",["South America","Central America","Caribbean"]],["caribbean",["Caribbean"]],["oceania",["Australia and New Zealand","Melanesia"]],["pacific islands",["Melanesia","Australia and New Zealand"]],["europe",["Northern Europe","Western Europe","Eastern Europe","Southern Europe"]],["asia",["Southern Asia","South-Eastern Asia","Eastern Asia","Central Asia","Western Asia"]],["africa",["Northern Africa","Eastern Africa","Western Africa","Middle Africa","Southern Africa"]],["americas",["Northern America","Central America","South America","Caribbean"]]]),ii={january:0,jan:0,february:1,feb:1,march:2,mar:2,april:3,apr:3,may:4,june:5,jun:5,july:6,jul:6,august:7,aug:7,september:8,sep:8,sept:8,october:9,oct:9,november:10,nov:10,december:11,dec:11},cv=[31,28,31,30,31,30,31,31,30,31,30,31],Nr="(?:january|jan|february|feb|march|mar|april|apr|may|june|jun|july|jul|august|aug|september|sep|sept|october|oct|november|nov|december|dec)",Mf=new Set(["Music","Art","Architecture","Design","Craft","Film","Literary","Dance","Theater","Fashion","Culture","Religious","Historical","Folk","Carnival","Heritage","National","Holiday","Education","Sports","Adventure","Science","Technology","Food","Nature","Wellness"]),bu={Music:"Music",Art:"Art",Architecture:"Art",Design:"Art",Craft:"Art",Film:"Art",Literary:"Art",Dance:"Art",Theater:"Art",Fashion:"Art",Culture:"Culture",Religious:"Culture",Historical:"Culture",Folk:"Culture",Carnival:"Culture",Heritage:"Culture",National:"Culture",Holiday:"Culture",Education:"Culture",Sports:"Culture",Adventure:"Culture",Science:"Culture",Technology:"Culture",Food:"Food",Nature:"Food",Wellness:"Food"},uv=new Set(["in","the","of","and","or","for","a","an","this","that","on","at","to","from","with","near","around","during","festivals","festival","events","event","celebrations","celebration","year","2026","anywhere","worldwide","global","all"]),hv={winter:{months:[11,0,1],early:[11],mid:[0],late:[1]},spring:{months:[2,3,4],early:[2],mid:[3],late:[4]},summer:{months:[5,6,7],early:[5],mid:[6],late:[7]},fall:{months:[8,9,10],early:[8],mid:[9],late:[10]},autumn:{months:[8,9,10],early:[8],mid:[9],late:[10]}},fv={winter:{months:[5,6,7],early:[5],mid:[6],late:[7]},spring:{months:[8,9,10],early:[8],mid:[9],late:[10]},summer:{months:[11,0,1],early:[11],mid:[0],late:[1]},fall:{months:[2,3,4],early:[2],mid:[3],late:[4]},autumn:{months:[2,3,4],early:[2],mid:[3],late:[4]}},dv=new Set(["Argentina","Australia","Bolivia","Botswana","Brazil","Chile","Ecuador","Indonesia","Kenya","Madagascar","Malawi","Mozambique","Namibia","New Zealand","Paraguay","Peru","South Africa","Tanzania","Uruguay","Zambia","Zimbabwe"]),pv=new Set(["Buenos Aires","Sydney","Melbourne","Cape Town","Lima","Salvador","Recife","Cusco","Nairobi"]),Ze=new Map;for(const i of kn.keys())Ze.set(i.toLowerCase(),i);Ze.set("czech republic","Czechia");Ze.set("drc","DRC");Ze.set("ivory coast","Côte d'Ivoire");Ze.set("the gambia","Gambia");Ze.set("uae","UAE");Ze.set("united arab emirates","UAE");Ze.set("uk","UK");Ze.set("united kingdom","UK");Ze.set("usa","USA");Ze.set("us","USA");Ze.set("united states","USA");Ze.set("united states of america","USA");Ze.set("st. lucia","Saint Lucia");Ze.set("korea","South Korea");Ze.set("saudi","Saudi Arabia");Ze.set("britain","UK");Ze.set("great britain","UK");Ze.set("england","UK");Ze.set("scotland","UK");Ze.set("wales","UK");Ze.set("holland","Netherlands");Ze.set("burma","Myanmar");Ze.set("persia","Iran");Ze.set("congo","Democratic Republic of Congo");Ze.set("vietnam","Vietnam");Ze.set("laos","Laos");Ze.set("america","USA");Ze.set("states","USA");const Sl=new Map([["new york","New York"],["rio de janeiro","Rio de Janeiro"],["rio","Rio de Janeiro"],["tokyo","Tokyo"],["kyoto","Kyoto"],["bangkok","Bangkok"],["london","London"],["barcelona","Barcelona"],["madrid","Madrid"],["paris","Paris"],["berlin","Berlin"],["rome","Rome"],["lisbon","Lisbon"],["amsterdam","Amsterdam"],["vienna","Vienna"],["prague","Prague"],["istanbul","Istanbul"],["cairo","Cairo"],["dubai","Dubai"],["mumbai","Mumbai"],["delhi","Delhi"],["singapore","Singapore"],["hong kong","Hong Kong"],["seoul","Seoul"],["beijing","Beijing"],["shanghai","Shanghai"],["sydney","Sydney"],["melbourne","Melbourne"],["buenos aires","Buenos Aires"],["mexico city","Mexico City"],["havana","Havana"],["lima","Lima"],["bogota","Bogotá"],["cusco","Cusco"],["marrakech","Marrakech"],["cape town","Cape Town"],["nairobi","Nairobi"],["accra","Accra"],["dakar","Dakar"],["lagos","Lagos"],["edinburgh","Edinburgh"],["dublin","Dublin"],["montreal","Montreal"],["toronto","Toronto"],["san francisco","San Francisco"],["los angeles","Los Angeles"],["new orleans","New Orleans"],["austin","Austin"],["chicago","Chicago"],["salvador","Salvador"],["recife","Recife"],["oaxaca","Oaxaca"],["venice","Venice"],["florence","Florence"],["seville","Seville"],["granada","Granada"],["porto","Porto"],["munich","Munich"],["cologne","Cologne"],["zurich","Zurich"],["bruges","Bruges"],["nice","Nice"],["cannes","Cannes"],["avignon","Avignon"],["varanasi","Varanasi"],["jaipur","Jaipur"],["kathmandu","Kathmandu"],["hanoi","Hanoi"],["bali","Bali"],["chiang mai","Chiang Mai"],["luang prabang","Luang Prabang"],["phnom penh","Phnom Penh"],["lhasa","Lhasa"],["taipei","Taipei"],["osaka","Osaka"]]);function mv(i){var s;const e=i.trim();if(!e)return{raw:e};let t=e;const n={raw:e};t=gv(t,n),t=_v(t,n),n._season&&(xv(n),delete n._season),t=vv(t,n);const r=t.replace(/[,;]+/g," ").replace(/\s+/g," ").trim().split(/\s+/).filter(o=>!uv.has(o.toLowerCase())).join(" ").trim();return r.length>1&&(n.name=r),!n.name&&((s=n.categories)!=null&&s.length)&&(n.name=n.categories.join(" ")),n}function gv(i,e){let t=i;const n=/\b(anytime|any\s*time|any\s*date|whenever|year[\s-]*round|all\s*year|this\s*year)\b/gi;if(n.test(t))return e.dateRange={start:"2026-01-01",end:"2026-12-31"},t=t.replace(n," "),t;const r=new Date,s=U=>String(U).padStart(2,"0"),o=U=>`${U.getFullYear()}-${s(U.getMonth()+1)}-${s(U.getDate())}`,a=/\b(today|now|tonight)\b/gi;if(a.test(t)){const U=new Date(r);U.setDate(r.getDate()-3);const _=new Date(r);return _.setDate(r.getDate()+3),e.dateRange={start:o(U),end:o(_)},t=t.replace(a," "),t}const l=/\bthis\s+week\b/gi;if(l.test(t)){const U=r.getDay(),_=new Date(r);_.setDate(r.getDate()-(U+6)%7);const E=new Date(_);return E.setDate(_.getDate()+6),e.dateRange={start:o(_),end:o(E)},t=t.replace(l," "),t}const c=/\bnext\s+week\b/gi;if(c.test(t)){const U=r.getDay(),_=new Date(r);_.setDate(r.getDate()+(7-(U+6)%7));const E=new Date(_);return E.setDate(_.getDate()+6),e.dateRange={start:o(_),end:o(E)},t=t.replace(c," "),t}const u=/\bthis\s+weekend\b/gi;if(u.test(t)){const U=r.getDay(),_=new Date(r);_.setDate(r.getDate()+(6-U+7)%7);const E=new Date(_);return E.setDate(_.getDate()+1),e.dateRange={start:o(_),end:o(E)},t=t.replace(u," "),t}const h=/\bthis\s+month\b/gi;if(h.test(t)){const U=new Date(r.getFullYear(),r.getMonth(),1),_=new Date(r.getFullYear(),r.getMonth()+1,0);return e.dateRange={start:o(U),end:o(_)},t=t.replace(h," "),t}const m=/\bnext\s+month\b/gi;if(m.test(t)){const U=new Date(r.getFullYear(),r.getMonth()+1,1),_=new Date(r.getFullYear(),r.getMonth()+2,0);return e.dateRange={start:o(U),end:o(_)},t=t.replace(m," "),t}const d=new RegExp("(?<![-\\w])(early|mid|late)?\\s*(winter|spring|summer|fall|autumn)(?![-\\w])","gi"),g=t.match(d);if(g){const U=g[0].trim().toLowerCase().split(/\s+/),_=U.length>1?U[0]:null,E=U.length>1?U[1]:U[0];return e._season={name:E,modifier:_},t=t.replace(d," "),t}const v=new RegExp("\\b(early|mid|late)\\s+("+Nr+")\\b","gi"),f=[...t.matchAll(v)];if(f.length>0){const U=[];for(const _ of f){const E=_[1].toLowerCase(),B=ii[_[2].toLowerCase()],z=cv[B];let P,F;E==="early"?(P=1,F=10):E==="mid"?(P=10,F=20):(P=20,F=z),U.push({start:`2026-${String(B+1).padStart(2,"0")}-${String(P).padStart(2,"0")}`,end:`2026-${String(B+1).padStart(2,"0")}-${String(F).padStart(2,"0")}`,month:B}),t=t.replace(_[0]," ")}return U.length===1?e.dateRange={start:U[0].start,end:U[0].end}:(U.sort((_,E)=>_.start.localeCompare(E.start)),e.dateRange={start:U[0].start,end:U[U.length-1].end},e.months=[...new Set(U.map(_=>_.month))]),t}const p=t.match(new RegExp("\\b("+Nr+")\\s+(\\d{1,2})\\s*[-–—]\\s*(\\d{1,2})\\b","i"));if(p){const U=ii[p[1].toLowerCase()],_=parseInt(p[2]),E=parseInt(p[3]);return e.dateRange={start:`2026-${String(U+1).padStart(2,"0")}-${String(_).padStart(2,"0")}`,end:`2026-${String(U+1).padStart(2,"0")}-${String(E).padStart(2,"0")}`},t=t.replace(p[0]," "),t}const M=t.match(new RegExp("\\b("+Nr+")\\s+(\\d{1,2})\\s*[-–—]\\s*("+Nr+")\\s+(\\d{1,2})\\b","i"));if(M){const U=ii[M[1].toLowerCase()],_=parseInt(M[2]),E=ii[M[3].toLowerCase()],B=parseInt(M[4]);return e.dateRange={start:`2026-${String(U+1).padStart(2,"0")}-${String(_).padStart(2,"0")}`,end:`2026-${String(E+1).padStart(2,"0")}-${String(B).padStart(2,"0")}`},t=t.replace(M[0]," "),t}const x=t.match(/\b(\d{1,2})\/(\d{1,2})\s*[-–—]\s*(\d{1,2})\/(\d{1,2})\b/);if(x){const U=parseInt(x[1])-1,_=parseInt(x[2]),E=parseInt(x[3])-1,B=parseInt(x[4]);if(U>=0&&U<=11&&E>=0&&E<=11&&_>=1&&_<=31&&B>=1&&B<=31){const P=E<U?2027:2026;return e.dateRange={start:`2026-${String(U+1).padStart(2,"0")}-${String(_).padStart(2,"0")}`,end:`${P}-${String(E+1).padStart(2,"0")}-${String(B).padStart(2,"0")}`},t=t.replace(x[0]," "),t}}const y=t.match(/\b(\d{1,2})\/(\d{1,2})\b/);if(y){const U=parseInt(y[1])-1,_=parseInt(y[2]);if(U>=0&&U<=11&&_>=1&&_<=31)return e.dateRange={start:`2026-${String(U+1).padStart(2,"0")}-${String(_).padStart(2,"0")}`,end:`2026-${String(U+1).padStart(2,"0")}-${String(_).padStart(2,"0")}`},t=t.replace(y[0]," "),t}const C=t.match(new RegExp("\\b("+Nr+")\\s+(\\d{1,2})\\b","i"));if(C){const U=ii[C[1].toLowerCase()],_=parseInt(C[2]);return e.dateRange={start:`2026-${String(U+1).padStart(2,"0")}-${String(_).padStart(2,"0")}`,end:`2026-${String(U+1).padStart(2,"0")}-${String(_).padStart(2,"0")}`},t=t.replace(C[0]," "),t}const R=[],T=[],H=t.split(/[\s,;]+/);for(const U of H){const _=U.toLowerCase();ii[_]!==void 0&&(R.push(ii[_]),T.push(U))}if(R.length>0){e.months=R;for(const U of T)t=t.replace(new RegExp("\\b"+mr(U)+"\\b","i")," ")}return t}function _v(i,e){let t=i;if(/\banywhere\b|\bworldwide\b|\bglobal\b/i.test(t))return t=t.replace(/\b(anywhere|worldwide|global)\b/gi," "),t;const n=[],r=[...Sl.keys()].sort((c,u)=>u.length-c.length);for(const c of r){const u=new RegExp("\\b(?:in\\s+)?"+mr(c)+"\\b","i");if(u.test(t)){n.push(Sl.get(c)),t=t.replace(u," ");break}}n.length>0&&(e.cities=n);const s=[],o=[...Au.keys()].sort((c,u)=>u.length-c.length);for(const c of o){const u=new RegExp("\\b(?:in\\s+)?"+mr(c)+"\\b","i");if(u.test(t)){const h=Au.get(c);h&&s.push(...h),t=t.replace(u," ")}}const a=[],l=[...Ze.entries()].filter(([,c])=>c!==null).sort((c,u)=>u[0].length-c[0].length);for(const[c,u]of l){const h=new RegExp("\\b(?:in\\s+)?"+mr(c)+"\\b","i");if(h.test(t)){a.push(u),t=t.replace(h," ");break}}return s.length>0&&(e.subregions=[...new Set(s)]),a.length>0&&(e.countries=a),t}function vv(i,e){let t=i;const n=[];for(const s of Mf){const o=new RegExp("\\b"+mr(s)+"\\b","i");o.test(t)&&(n.push(s),t=t.replace(o," "))}const r={musical:"Music",artistic:"Art",literary:"Literary",cultural:"Culture",religious:"Religious",historical:"Historical",educational:"Education",scientific:"Science",technological:"Technology",culinary:"Food",gastronomic:"Food",sporting:"Sports"};for(const[s,o]of Object.entries(r)){const a=new RegExp("\\b"+s+"\\b","i");a.test(t)&&(n.includes(o)||n.push(o),t=t.replace(a," "))}return n.length>0&&(e.categories=n),t}function xv(i){var d,g;const e=i._season;if(!e)return;let t=!1;(d=i.countries)!=null&&d.length&&(t=i.countries.some(v=>dv.has(v))),!t&&((g=i.cities)!=null&&g.length)&&(t=i.cities.some(v=>pv.has(v)));const r=(t?fv:hv)[e.name];if(!r)return;const s=e.modifier?r[e.modifier]:r.months;if(!s||s.length===0)return;const o=[...s].sort((v,f)=>v-f),a=o.includes(11)&&o.includes(0);let l,c,u=2026,h=2026;a?(l=11,u=2026,c=Math.max(...o.filter(v=>v<6)),h=2027):(l=o[0],c=o[o.length-1]);const m=new Date(h,c+1,0).getDate();i.dateRange={start:`${u}-${String(l+1).padStart(2,"0")}-01`,end:`${h}-${String(c+1).padStart(2,"0")}-${String(m).padStart(2,"0")}`},i.months=s}function Tu(i,e){if(!i||!e)return[];if(!(e.name||e.cities||e.countries||e.subregions||e.categories||e.dateRange||e.months))return[];const n=[];for(const r of i){const s=Mv(r,e);s>0&&n.push({festival:r,score:s})}return n.sort((r,s)=>s.score-r.score),n.map(r=>r.festival)}function Mv(i,e){var r,s,o,a,l;let t=0,n=!1;if(e.name){n=!0;const c=yv(i,e.name);if(c===0)return 0;t+=c}if((r=e.cities)!=null&&r.length){n=!0;const c=Av(i,e);if(c===0)return 0;t+=c}if((s=e.countries)!=null&&s.length||(o=e.subregions)!=null&&o.length){n=!0;const c=bv(i,e);if(c===0)return 0;t+=c}if(e.dateRange||(a=e.months)!=null&&a.length){n=!0;const c=Tv(i,e);if(c===0)return 0;t+=c}if((l=e.categories)!=null&&l.length){n=!0;const c=wv(i,e);if(c===0&&!e.name)return 0;t+=c}return n?(t+=Math.min(10,(i.qi||0)/10),t):0}function yv(i,e){const t=To(i.name,e);if(t>0)return t;if(i.city){const n=To(i.city,e);if(n>0)return Math.min(n,25);const r=i.name+" "+i.city,s=To(r,e);if(s>0)return s}return 0}function To(i,e){const t=i.toLowerCase(),n=e.toLowerCase();if(t===n)return 40;if(t.includes(n))return 35;const r=n.split(/\s+/).filter(l=>l.length>1);if(r.length===0)return 0;const s=t.split(/[\s\-–—(),'.:;!?]+/).filter(l=>l.length>1);let o=0;for(const l of r)Sv(l,s)&&o++;const a=o/r.length;return r.length<=2?a>=1?30:0:a>=.85?30:a>=.65?20:0}function Sv(i,e){for(const t of e){if(t===i||(t.startsWith(i)||i.startsWith(t))&&Math.min(t.length,i.length)>=3||i.length>=4&&t.includes(i)||t.length>=4&&i.includes(t))return!0;if(t.length>=5&&i.length>=5){const n=Math.max(t.length,i.length);if(Ev(t,i)/n<=.3)return!0}}return!1}function Ev(i,e){const t=i.length,n=e.length,r=Array.from({length:t+1},()=>new Array(n+1));for(let s=0;s<=t;s++)r[s][0]=s;for(let s=0;s<=n;s++)r[0][s]=s;for(let s=1;s<=t;s++)for(let o=1;o<=n;o++)r[s][o]=i[s-1]===e[o-1]?r[s-1][o-1]:1+Math.min(r[s-1][o],r[s][o-1],r[s-1][o-1]);return r[t][n]}function Av(i,e){var n;if(!((n=e.cities)!=null&&n.length)||!i.city)return 0;const t=i.city.toLowerCase();for(const r of e.cities){const s=r.toLowerCase();if(t===s)return 25;if(t.includes(s))return 22;if(s.includes(t)&&t.length>=s.length*.7)return 20}return 0}function bv(i,e){var t,n;if((t=e.countries)!=null&&t.length){for(const r of e.countries)if(lv(i.country,r))return 25}if((n=e.subregions)!=null&&n.length){const r=ov(i.country);if(r){for(const s of e.subregions)if(r.subregion===s)return 25;for(const s of e.subregions)if(r.region===s)return 20}}return 0}function Tv(i,e){var r;if(!i.start)return 0;const t=new Date(i.start);if(isNaN(t.getTime()))return 0;const n=i.end?new Date(i.end):t;if(e.dateRange){const s=new Date(e.dateRange.start),o=new Date(e.dateRange.end);return s<=o?t<=o&&n>=s?t>=s&&n<=o?20:12:0:n>=s||t<=o?20:0}if((r=e.months)!=null&&r.length){for(const s of e.months){const o=t.getMonth(),a=n.getMonth();if(o<=a){if(s>=o&&s<=a)return 20}else if(s>=o||s<=a)return 20}return 0}return 0}function wv(i,e){if(!i.cat)return 0;const t=i.cat.split(/[,;]/).map(r=>r.trim()).filter(Boolean),n=t.map(r=>bu[r]||"Culture");for(const r of e.categories){if(t.some(o=>o.toLowerCase()===r.toLowerCase()))return 15;if(n.some(o=>o.toLowerCase()===r.toLowerCase()))return 12;const s=bu[r];if(s&&n.includes(s))return 12}return 0}function mr(i){return i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}const Bi=new Map;for(const[i]of Object.entries(ii))if(i.length>=3){const e=i.charAt(0).toUpperCase()+i.slice(1);Bi.set(i,e)}for(const[i,e]of Ze.entries())if(e)if(i===e.toLowerCase())Bi.set(i,e);else{const t=i.length<=3?i.toUpperCase():i.split(/\s+/).map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(" ");Bi.set(i,t)}for(const[i,e]of Sl.entries())if(i===e.toLowerCase())Bi.set(i,e);else{const t=i.length<=3?i.toUpperCase():i.split(/\s+/).map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(" ");Bi.set(i,t)}for(const i of Mf)Bi.set(i.toLowerCase(),i);const Rv=[...Bi.entries()].sort((i,e)=>e[0].length-i[0].length);function Cv(i){let e=i,t=!1;for(const[n,r]of Rv){const s=new RegExp("\\b"+mr(n)+"\\b","gi");e=e.replace(s,o=>o!==r?(t=!0,r):o)}return t?e:null}const wu=["Mid-Autumn Festival","August, September in Spain","Carnevale de Rio","April 10 - 20, Southeast Asia","Literary Festivals this year","February, anywhere"],Pt={heightMapsUltra:["./assets/etopo1_height_16384.png","./assets/etopo1_height_8192.png","./assets/etopo1_height_4096.png","./assets/earth_topography_4k.jpg"],heightMapsHigh:["./assets/etopo1_height_8192.png","./assets/etopo1_height_4096.png","./assets/earth_topography_4k.jpg"],heightMapsCompatible:["./assets/etopo1_height_4096.png","./assets/earth_topography_4k.jpg"],countriesHigh:["./data/ne_10m_admin_0_countries.geojson","./data/ne_110m_admin_0_countries.geojson"],countriesCompatible:["./data/ne_10m_admin_0_countries.geojson","./data/ne_110m_admin_0_countries.geojson"],statesHigh:["./data/ne_10m_admin_1_states_provinces_lines.geojson"],statesCompatible:["./data/ne_10m_admin_1_states_provinces_lines.geojson"],riversHigh:["./data/ne_10m_rivers_lake_centerlines.geojson","./data/ne_50m_rivers_lake_centerlines.geojson","./data/ne_110m_rivers_lake_centerlines.geojson"],riversCompatible:["./data/ne_50m_rivers_lake_centerlines.geojson","./data/ne_110m_rivers_lake_centerlines.geojson"],lakesHigh:["./data/ne_10m_lakes.geojson","./data/ne_50m_lakes.geojson","./data/ne_110m_lakes.geojson"],lakesCompatible:["./data/ne_50m_lakes.geojson","./data/ne_110m_lakes.geojson"],countriesGoodPhone:["./data/ne_10m_admin_0_countries.geojson","./data/ne_110m_admin_0_countries.geojson"],riversGoodPhone:["./data/ne_50m_rivers_lake_centerlines.geojson","./data/ne_110m_rivers_lake_centerlines.geojson"],lakesGoodPhone:["./data/ne_50m_lakes.geojson","./data/ne_110m_lakes.geojson"],countriesBudget:["./data/ne_110m_admin_0_countries.geojson"],riversBudget:["./data/ne_110m_rivers_lake_centerlines.geojson"],lakesBudget:["./data/ne_110m_lakes.geojson"],regionalDetailOverlays:["./assets/regional_detail_overlays.json"]},Wr=1.2,Lv=.012,oc=-1,Pv=.4,Ms="silver-moon",pi=.4,zi=2.4,ns={displacementScale:.115,normalScale:1.2},it={roughness:.82,clearcoat:.03,clearcoatRoughness:.9,envMapIntensity:.14,ior:1.48,reflectivity:.58,specularIntensity:.78,sheen:.045,sheenRoughness:.84,sheenColor:15265269,normalStrength:1,shellIntensity:.03},yf={exposure:1.04,ambientIntensity:.55,hemiIntensity:.22,hemiSkyTemp:7600,hemiGroundTemp:3400,frontIntensity:.38,frontTemp:6e3,frontDistance:4.4,keyIntensity:1.18,keyTemp:5200,keyAzimuth:0,keyElevation:22,keyDistance:5.2,fillIntensity:.42,fillTemp:7600,fillAzimuth:-60,fillElevation:12,fillDistance:6.2,rimIntensity:.26,rimTemp:9e3,rimAzimuth:135,rimElevation:-20,rimDistance:6.8,accentIntensity:.22,accentTemp:3600,accentAzimuth:172,accentElevation:6,accentDistance:8.2},wo={studio:{exposure:1.04,ambientIntensity:.55,hemiIntensity:.22,hemiSkyTemp:7600,hemiGroundTemp:3400,frontIntensity:.38,frontTemp:6e3,keyIntensity:1.18,keyTemp:5200,keyAzimuth:0,keyElevation:22,keyDistance:5.2,fillIntensity:.42,fillTemp:7600,fillAzimuth:-60,fillElevation:12,fillDistance:6.2,rimIntensity:.26,rimTemp:9e3,rimAzimuth:135,rimElevation:-20,rimDistance:6.8,accentIntensity:.22,accentTemp:3600,accentAzimuth:172,accentElevation:6,accentDistance:8.2,roughness:.82,clearcoat:.03,clearcoatRoughness:.9,envMapIntensity:.14,normalStrength:1,shellIntensity:.03},"golden-hour":{exposure:1.16,ambientIntensity:.38,hemiIntensity:.28,hemiSkyTemp:5400,hemiGroundTemp:2900,frontIntensity:.28,frontTemp:5e3,keyIntensity:1.65,keyTemp:3850,keyAzimuth:-24,keyElevation:20,keyDistance:4.7,fillIntensity:.3,fillTemp:7100,fillAzimuth:72,fillElevation:7,fillDistance:6.5,rimIntensity:.48,rimTemp:9800,rimAzimuth:146,rimElevation:-6,rimDistance:7.2,accentIntensity:.34,accentTemp:3150,accentAzimuth:-162,accentElevation:16,accentDistance:8.6,roughness:.74,clearcoat:.06,clearcoatRoughness:.86,envMapIntensity:.2,normalStrength:1.1,shellIntensity:.05},dramatic:{exposure:1.22,ambientIntensity:.24,hemiIntensity:.12,hemiSkyTemp:6900,hemiGroundTemp:3100,frontIntensity:.2,frontTemp:5600,keyIntensity:2.2,keyTemp:4700,keyAzimuth:34,keyElevation:18,keyDistance:4.2,fillIntensity:.12,fillTemp:8200,fillAzimuth:-98,fillElevation:-8,fillDistance:7.2,rimIntensity:.72,rimTemp:10400,rimAzimuth:158,rimElevation:-14,rimDistance:7.8,accentIntensity:.44,accentTemp:3250,accentAzimuth:-148,accentElevation:22,accentDistance:8.8,roughness:.68,clearcoat:.09,clearcoatRoughness:.72,envMapIntensity:.28,normalStrength:1.26,shellIntensity:.08},arctic:{exposure:1.02,ambientIntensity:.47,hemiIntensity:.35,hemiSkyTemp:9800,hemiGroundTemp:5200,frontIntensity:.34,frontTemp:7800,keyIntensity:1.2,keyTemp:7600,keyAzimuth:8,keyElevation:30,keyDistance:5.4,fillIntensity:.52,fillTemp:9800,fillAzimuth:-48,fillElevation:16,fillDistance:6.4,rimIntensity:.31,rimTemp:11400,rimAzimuth:124,rimElevation:-16,rimDistance:7.1,accentIntensity:.18,accentTemp:6900,accentAzimuth:170,accentElevation:10,accentDistance:8.3,roughness:.84,clearcoat:.04,clearcoatRoughness:.95,envMapIntensity:.13,normalStrength:.95,shellIntensity:.06},noir:{exposure:1.35,ambientIntensity:.18,hemiIntensity:.08,hemiSkyTemp:6200,hemiGroundTemp:2800,frontIntensity:.14,frontTemp:5600,keyIntensity:2.4,keyTemp:4400,keyAzimuth:46,keyElevation:10,keyDistance:4.1,fillIntensity:.07,fillTemp:7600,fillAzimuth:-120,fillElevation:-14,fillDistance:7.7,rimIntensity:.92,rimTemp:9600,rimAzimuth:160,rimElevation:-18,rimDistance:8.2,accentIntensity:.52,accentTemp:2950,accentAzimuth:-138,accentElevation:14,accentDistance:8.9,roughness:.63,clearcoat:.11,clearcoatRoughness:.62,envMapIntensity:.34,normalStrength:1.24,shellIntensity:.02},"silver-moon":{exposure:1.18,ambientIntensity:.16,hemiIntensity:.2,hemiSkyTemp:11e3,hemiGroundTemp:2600,frontIntensity:.18,frontTemp:7600,keyIntensity:1.55,keyTemp:7800,keyAzimuth:28,keyElevation:16,keyDistance:4.6,fillIntensity:.14,fillTemp:9500,fillAzimuth:-95,fillElevation:-8,fillDistance:7.4,rimIntensity:.86,rimTemp:12e3,rimAzimuth:152,rimElevation:-20,rimDistance:8.2,accentIntensity:.26,accentTemp:6600,accentAzimuth:-160,accentElevation:18,accentDistance:8.7,roughness:.66,clearcoat:.11,clearcoatRoughness:.58,envMapIntensity:.3,normalStrength:1.12,shellIntensity:.06},"museum-soft":{exposure:1.02,ambientIntensity:.64,hemiIntensity:.42,hemiSkyTemp:6800,hemiGroundTemp:3600,frontIntensity:.52,frontTemp:5800,keyIntensity:1,keyTemp:5e3,keyAzimuth:8,keyElevation:26,keyDistance:5.8,fillIntensity:.66,fillTemp:7e3,fillAzimuth:-42,fillElevation:16,fillDistance:6.8,rimIntensity:.18,rimTemp:7800,rimAzimuth:136,rimElevation:-12,rimDistance:7,accentIntensity:.12,accentTemp:4300,accentAzimuth:162,accentElevation:9,accentDistance:8.4,roughness:.87,clearcoat:.03,clearcoatRoughness:.92,envMapIntensity:.11,normalStrength:.96,shellIntensity:.04},"editorial-split":{exposure:1.14,ambientIntensity:.28,hemiIntensity:.16,hemiSkyTemp:7600,hemiGroundTemp:3200,frontIntensity:.24,frontTemp:6200,keyIntensity:1.9,keyTemp:4500,keyAzimuth:-36,keyElevation:24,keyDistance:4.3,fillIntensity:.16,fillTemp:9e3,fillAzimuth:84,fillElevation:2,fillDistance:7,rimIntensity:.58,rimTemp:9800,rimAzimuth:150,rimElevation:-10,rimDistance:7.5,accentIntensity:.34,accentTemp:3400,accentAzimuth:-170,accentElevation:4,accentDistance:8.5,roughness:.7,clearcoat:.08,clearcoatRoughness:.68,envMapIntensity:.26,normalStrength:1.18,shellIntensity:.05},"sunset-rimfire":{exposure:1.21,ambientIntensity:.32,hemiIntensity:.22,hemiSkyTemp:5600,hemiGroundTemp:2600,frontIntensity:.2,frontTemp:5200,keyIntensity:1.82,keyTemp:3200,keyAzimuth:-18,keyElevation:14,keyDistance:4.4,fillIntensity:.22,fillTemp:7400,fillAzimuth:74,fillElevation:4,fillDistance:6.9,rimIntensity:.74,rimTemp:10800,rimAzimuth:160,rimElevation:-12,rimDistance:7.9,accentIntensity:.48,accentTemp:2900,accentAzimuth:-150,accentElevation:22,accentDistance:8.8,roughness:.65,clearcoat:.1,clearcoatRoughness:.6,envMapIntensity:.32,normalStrength:1.24,shellIntensity:.07},"high-noon-crisp":{exposure:.98,ambientIntensity:.46,hemiIntensity:.26,hemiSkyTemp:6900,hemiGroundTemp:4e3,frontIntensity:.36,frontTemp:6100,keyIntensity:1.48,keyTemp:5600,keyAzimuth:0,keyElevation:52,keyDistance:5.1,fillIntensity:.3,fillTemp:7e3,fillAzimuth:-75,fillElevation:20,fillDistance:6.4,rimIntensity:.22,rimTemp:8600,rimAzimuth:120,rimElevation:-24,rimDistance:7.2,accentIntensity:.2,accentTemp:5e3,accentAzimuth:178,accentElevation:8,accentDistance:8,roughness:.78,clearcoat:.05,clearcoatRoughness:.78,envMapIntensity:.19,normalStrength:1.08,shellIntensity:.03}},Xr=document.querySelector("#stage"),va=document.querySelector("#status"),is=document.querySelector("#terrain-exaggeration"),Ro=document.querySelector("#terrain-exaggeration-value"),Ru=document.querySelector("#lighting-readout"),ti=document.querySelector("#lighting-preset"),Fr=document.querySelector("#lighting-preset-value"),Cu=document.querySelector("#lighting-reset");document.querySelector("#temperature-btn");document.querySelector("#festivals-btn");const ia=document.querySelector("#date-full");document.querySelector("#date-day-name");const bt=document.querySelector("#festival-info"),Ft=document.querySelector("#festival-info-name"),In=document.querySelector("#festival-info-location"),Un=document.querySelector("#festival-info-date"),dn=document.querySelector("#festival-info-tags"),Nn=document.querySelector("#festival-info-desc"),Fn=document.querySelector("#festival-info-details"),Lu=document.querySelector("#festival-info-attendance"),Pu=document.querySelector("#festival-info-interest"),Du=document.querySelector("#festival-info-coords");let Dv=!0,xa=!1,Bn=null;const Ot=new Set;let mn=!1,Or=[],Br=null,Pi=null,vn=null,El=0,Gt=!1,Dt=0,kt=0,yr=0,rs=364;const ki=document.getElementById("custom-slider"),zr=document.getElementById("slider-fill"),si=document.getElementById("thumb-a"),Mn=document.getElementById("thumb-b"),Iv={Music:"Music",Art:"Art",Architecture:"Art",Design:"Art",Craft:"Art",Film:"Art",Literary:"Art",Dance:"Art",Theater:"Art",Fashion:"Art",Culture:"Culture",Religious:"Culture",Historical:"Culture",Folk:"Culture",Carnival:"Culture",Heritage:"Culture",National:"Culture",Holiday:"Culture",Education:"Culture",Sports:"Culture",Adventure:"Culture",Science:"Culture",Technology:"Culture",Food:"Food",Nature:"Food",Wellness:"Food"},Iu=["Art","Culture","Music","Food"];let Uv=1,Je=0,Uu="thermal",Nu=10,li=null,Fu=null,Sf=53;function Nv(i){return((i-Sf)%365+365)%365}function Co(i){if(!ki)return 0;const e=ki.offsetWidth,t=6,n=e-t*2,r=rs-yr||1;return t+(i-yr)/r*n}function Lo(i){if(!ki)return 0;const e=ki.getBoundingClientRect(),t=6,n=e.width-t*2,r=Math.max(0,Math.min(1,(i-e.left-t)/n));return Math.round(yr+r*(rs-yr))}function ci(){if(!(!ki||!si||!Mn||!zr))if(Gt){const i=Co(Dt),e=Co(kt);si.style.left=i+"px",Mn.style.left=e+"px",Mn.classList.remove("is-hidden"),zr.style.left=i+"px",zr.style.width=e-i+"px"}else{const i=Co(Je);si.style.left=i+"px",Mn.style.left=i+"px",Mn.classList.add("is-hidden"),zr.style.left=i+"px",zr.style.width="0px"}}function kr(i,e){Gt=!0,Dt=Math.min(i,e),kt=Math.max(i,e),Je=Dt,ci(),Ui(Je),xs(Dt,kt)}function Gr(){Gt=!1,j_(),vs(Je),ci(),Ui(Je)}const Fv=px(),Ov=mx();if(!Xr||!va)throw new Error("Missing required DOM nodes.");Bv().catch(i=>{console.error(i);const e=i&&i.message?i.message:"Unknown initialization error";St(`Failed to initialize globe: ${e}`,"warn")});async function Bv(){var R;St("Loading high-resolution elevation and map data...","loading");const i=gx(),e=window.matchMedia("(max-width: 900px)").matches,t=_x({browser:i,isCompact:e,memoryHint:Number(navigator.deviceMemory||NaN)});t.budgetPhone?Mu(6e3):t.isMobile&&Mu(12e3);const n=cx(i);"outputColorSpace"in n?n.outputColorSpace=dt:"outputEncoding"in n&&(n.outputEncoding=Yn),n.toneMapping=Ov,n.toneMappingExposure=yf.exposure,n.setClearColor(0,0),n.domElement.classList.add("globe-canvas"),Xr.appendChild(n.domElement);const r=Number(((R=n==null?void 0:n.capabilities)==null?void 0:R.maxTextureSize)||8192),s=Hu(t.textureWidth,r),o=vx(s),a=new tf;a.environment=lx(n);const l=new jt(31,1,.05,80),c=window.matchMedia("(max-width: 640px)").matches;l.position.set(0,.15,c?8.5:6);const u=new Q0(l,n.domElement);u.enablePan=!1,u.enableDamping=!0,u.dampingFactor=.055,u.rotateSpeed=.5,u.zoomSpeed=.62,u.minDistance=3,u.maxDistance=8,u.target.set(0,0,0);const h=new ai;h.rotation.y=3.9,h.rotation.x=.1,a.add(h);const m=Wv(a,l,u);let d=null,g=null;const v={terrainExaggeration:Ue(Number((is==null?void 0:is.value)||Pv),pi,zi),normalStrength:it.normalStrength,roughness:it.roughness,clearcoat:it.clearcoat,clearcoatRoughness:it.clearcoatRoughness,envMapIntensity:it.envMapIntensity,ior:it.ior,reflectivity:it.reflectivity,specularIntensity:it.specularIntensity,sheen:it.sheen,sheenRoughness:it.sheenRoughness,sheenColor:it.sheenColor,shellIntensity:it.shellIntensity},f=Hv({rig:m,renderer:n,materialSettings:v,getGlobeMaterial:()=>d,getShellMaterial:()=>g});Vv(f),u.addEventListener("start",()=>{El=performance.now()+2300});const p=()=>{const T=Math.max(16,Xr.clientWidth),H=Math.max(16,Xr.clientHeight);n.setPixelRatio(Math.min(window.devicePixelRatio||1,t.maxPixelRatio)),n.setSize(T,H,!1),l.aspect=T/H,l.updateProjectionMatrix(),ci()};p(),window.addEventListener("resize",p),"ResizeObserver"in window&&new ResizeObserver(p).observe(Xr);try{St(`Loading elevation texture (${Math.round(s/1024)}K target)...`,"loading");const T=await Xv(o,{timeoutMs:26e3}),H=Df(T.image),U=Hu(H.width||s,r),_=Math.min(s,U),E=Math.max(2,Math.floor(_/2)),B=xx(_,t.budgetPhone?"budget":t.isMobile?"good":!1);St("Loading country and state outlines...","loading");let z,P,F,O;t.deferStates?([z,F,O]=await Promise.all([On(t.countriesSources,{timeoutMs:t.geoTimeoutMs}),On(t.riversSources,{timeoutMs:t.geoTimeoutMs}),On(t.lakesSources,{timeoutMs:t.geoTimeoutMs})]),P=null):[z,P,F,O]=await Promise.all([On(t.countriesSources,{timeoutMs:t.geoTimeoutMs}),On(t.statesSources,{timeoutMs:t.stateTimeoutMs}),On(t.riversSources,{timeoutMs:t.geoTimeoutMs}),On(t.lakesSources,{timeoutMs:t.geoTimeoutMs})]),St("Building vector terrain mesh (this may take a few seconds)...","loading"),await Ou();const q=tx(z,_,E),j=q.getContext("2d",{willReadFrequently:!0});let $=null;if(j)try{const ue=j.getImageData(0,0,_,E).data;$=Bu(ue,_,E)}catch(ue){console.warn("Unable to read land mask texture data.",ue)}const Z=nx(O,_,E),te=Z.getContext("2d",{willReadFrequently:!0});let K=null;if(te)try{const ue=te.getImageData(0,0,_,E).data;K=Bu(ue,_,E)}catch(ue){console.warn("Unable to read lake mask texture data.",ue)}const J=Tf(T.image,_,E);let N=[];t.skipRegionalOverlays||(St("Loading regional terrain detail overlays...","loading"),N=await Yv({metaUrls:Pt.regionalDetailOverlays,timeoutMs:26e3}));const V=jv(J,N);typeof T.dispose=="function"&&T.dispose(),q.width=1,q.height=1,Z.width=1,Z.height=1,St("Generating terrain micro-detail normals...","loading");const se=t.budgetPhone?1024:t.isMobile?2048:Math.min(4096,Math.max(2048,Math.floor(_/2))),fe=t.budgetPhone?512:t.isMobile?1024:Math.min(2048,Math.max(1024,Math.floor(E/2))),le=$v({sampler:V,width:se,height:fe,landMaskData:$,landMaskWidth:_,landMaskHeight:E}),ce=ax(le,{maxSize:t.budgetPhone?1024:t.isMobile?2048:_>=8192?4096:2048,strength:3.2,anisotropy:Math.max(1,Math.floor(n.capabilities.getMaxAnisotropy()*.75))});le.width=1,le.height=1;const Ee=Jv({radius:Wr,widthSegments:B.width,heightSegments:B.height,heightSampler:V,terrainNormalMap:ce,landMaskData:$,landMaskWidth:_,landMaskHeight:E,lakeMaskData:K,lakeMaskWidth:_,lakeMaskHeight:E,terrainExaggeration:v.terrainExaggeration,normalStrength:v.normalStrength}),Me=Ee.mesh,I=Ee.material;h.add(Me),St("Tracing vector borders...","loading"),await Ou();const Xe=zu({countriesGeo:z,stateLinesGeo:P,riversGeo:F,lakesGeo:O,radius:Wr,heightSampler:V,landMaskData:$,landMaskWidth:_,landMaskHeight:E,terrainExaggeration:v.terrainExaggeration,normalStrength:v.normalStrength,countryStepDeg:t.borderCountryStepDeg,stateStepDeg:t.borderStateStepDeg,riverStepDeg:t.hydroRiverStepDeg,lakeStepDeg:t.hydroLakeStepDeg});Xe.group&&h.add(Xe.group);const pe=new Zt(new Ts(Wr+.006,B.shellWidth,B.shellHeight),new bs({color:16777215,transparent:!0,opacity:it.shellIntensity,side:Ut,depthWrite:!1}));h.add(pe),d=I,g=pe.material;const Se=(ue,Ge=v.normalStrength)=>{Ee.updateTerrain(ue,Ge),Xe.updateTerrain&&Xe.updateTerrain(ue,Ge),Dv&&(q_(ue),sv(ue),Yt()),I.userData.reliefState={terrainExaggeration:ue,normalStrength:Ge}};I.userData.updateRelief=Se,Gv({materialSettings:v,applyTerrain:Se,onChange:f.refresh}),f.refresh(),zv(I,$,_,E,t.downscaleAtlas),kv({globeGroup:h,heightSampler:V,landMaskData:$,landMaskWidth:_,landMaskHeight:E,terrainExaggeration:v.terrainExaggeration,camera:l,renderer:n}),Ui(Je),St("Ready","ok"),t.deferStates&&!P&&On(t.statesSources,{timeoutMs:t.stateTimeoutMs}).then(ue=>{const Ge=zu({countriesGeo:null,stateLinesGeo:ue,riversGeo:null,lakesGeo:null,radius:Wr,heightSampler:V,landMaskData:$,landMaskWidth:_,landMaskHeight:E,terrainExaggeration:v.terrainExaggeration,normalStrength:v.normalStrength,stateStepDeg:t.borderStateStepDeg});Ge.group&&(h.add(Ge.group),console.log("Deferred state borders loaded"))}).catch(()=>{})}catch(T){console.error("Globe generation failed",T),St("Failed to load required globe assets","warn")}let M=performance.now(),x=0,y=!1;const C=T=>{if(y)return;const H=Math.min(.05,(T-M)*.001);M=T,T>El&&(h.rotation.y+=H*Lv),X_(H),rv(l,h),u.update(),m.update(),n.render(a,l),x=requestAnimationFrame(C)};x=requestAnimationFrame(C),n.domElement.addEventListener("webglcontextlost",T=>{T.preventDefault(),y=!0,cancelAnimationFrame(x),console.warn("WebGL context lost — pausing render loop")}),n.domElement.addEventListener("webglcontextrestored",()=>{y=!1,M=performance.now(),x=requestAnimationFrame(C),console.log("WebGL context restored — resuming render loop")})}function St(i,e){va.textContent=i,e?va.dataset.state=e:delete va.dataset.state,e==="ok"&&document.querySelector(".viewport").classList.remove("is-loading")}function Ui(i){if(!ia)return;if(Gt){const t=new Date(2026,0,Dt+1),n=new Date(2026,0,kt+1);t.getMonth()===n.getMonth()?ia.textContent=t.toLocaleDateString("en-US",{month:"long"})+" "+t.getDate()+" – "+n.getDate()+", 2026":ia.textContent=t.toLocaleDateString("en-US",{month:"long",day:"numeric"})+" – "+n.toLocaleDateString("en-US",{month:"long",day:"numeric"})+", 2026";return}const e=new Date(2026,0,i+1);ia.textContent=e.toLocaleDateString("en-US",{month:"long",day:"numeric"})+", 2026"}function zv(i,e,t,n,r=!1){if(!i)return;e&&d_(e,t,n);function s(g){if(!li||!i)return;Je=g;const v=Nv(g);if(M_()){x_(v);const f=xu();i.map!==f&&(i.map&&i.map!==f&&i.map.dispose(),i.map=f,i.needsUpdate=!0)}else{const f=i.map,p=b_(Fu,v,li.numDays,{colorway:Uu,blurRadius:Nu},Uv,hu);i.map=p,i.needsUpdate=!0,f&&f!==xu()&&f.dispose()}}async function o(){var M;if(li)return;St("Loading temperature data...","loading");const g=await m_();if(Fu=new Float32Array(g.allTemps),li=g,rs=g.numDays-1,((M=g.dateLabels)==null?void 0:M.length)>0){const x=new Date(g.dateLabels[0]),y=new Date(x.getUTCFullYear(),0,1);Sf=Math.round((x-y)/864e5)}const v=new Date,f=new Date(2026,0,1),p=Math.round((v-f)/864e5);Je=Math.max(0,Math.min(364,p)),E_(g.allTemps,g.numDays,{colorway:Uu,blurRadius:Nu,downscale:r},hu,(x,y)=>{const C=Math.round(x/y*100);St(`Building atlas... ${C}%`,"loading")},x=>{s(Je),St("Ready","ok")}),St("Ready","ok")}Pi=s,(async()=>(await o(),ci(),Ui(Je),s(Je)))();let a=null,l=0;function c(g){Gt?(a==="a"?Dt=Math.min(g,kt):a==="b"&&(kt=Math.max(g,Dt)),Je=g,xs(Dt,kt)):(Je=g,vs(Je)),ci(),Ui(Je),Pi&&Pi(Je),Yt(),mn&&vn?vn():xa&&Bn&&Bn()}function u(g){a&&(l||(l=requestAnimationFrame(()=>{l=0;const v=Lo(g.clientX);c(v)})))}function h(){a=null,document.removeEventListener("pointermove",u),document.removeEventListener("pointerup",h)}function m(g,v){v.preventDefault(),a=g,document.addEventListener("pointermove",u),document.addEventListener("pointerup",h);const f=Lo(v.clientX);c(f)}if(si&&si.addEventListener("pointerdown",g=>m("a",g)),Mn&&Mn.addEventListener("pointerdown",g=>m("b",g)),ki){let g=function(v,f){if(f.key!=="ArrowLeft"&&f.key!=="ArrowRight")return;f.preventDefault();const p=f.key==="ArrowRight"?1:-1;Gt?(v==="a"?(Dt=Math.max(yr,Math.min(Dt+p,kt)),Je=Dt):(kt=Math.max(Dt,Math.min(kt+p,rs)),Je=kt),xs(Dt,kt)):(Je=Math.max(yr,Math.min(Je+p,rs)),vs(Je)),ci(),Ui(Je),Pi&&Pi(Je),Yt(),mn&&vn&&vn()};var d=g;ki.addEventListener("pointerdown",v=>{if(v.target===si||v.target===Mn)return;const f=Lo(v.clientX);if(Gt){const p=Math.abs(f-Dt),M=Math.abs(f-kt);m(p<=M?"a":"b",v)}else m("a",v)}),si&&si.addEventListener("keydown",v=>g("a",v)),Mn&&Mn.addEventListener("keydown",v=>g("b",v))}ci()}function kv({globeGroup:i,heightSampler:e,landMaskData:t,landMaskWidth:n,landMaskHeight:r,terrainExaggeration:s,camera:o,renderer:a}){(async()=>(St("Loading 4,710 festivals...","loading"),await V_(),St("Building fireworks...","loading"),W_({radius:Wr,heightSampler:e,landMaskData:t,landMaskWidth:n,landMaskHeight:r,terrainExaggeration:s}),i.add(So()),li&&vs(Je),nv(i,e,t,n,r,s,o,a),So().visible=!0,l(),Y_(u),Yt(),m(),St("Ready","ok")))();function l(){const M=document.querySelector(".super-filters");M&&M.remove();const x=document.createElement("div");x.className="super-filters";for(const y of Iu){const C=document.createElement("button");C.className="cat-toggle",C.textContent=y,C.addEventListener("click",()=>{Ot.has(y)?(Ot.delete(y),C.classList.remove("is-on")):(Ot.add(y),C.classList.add("is-on")),Yt(),mn&&vn?vn():Bn&&Bn()}),x.appendChild(C)}document.querySelector(".viewport").appendChild(x)}function c(M){return Ot.size===0?!1:(M.cat||"").split(/[,;]/).map(y=>y.trim()).filter(Boolean).some(y=>Ot.has(Iv[y]||"Culture"))}function u(M){return mn&&Or.length>0&&Or.includes(M)?!0:c(M)}function h(M,x){if(!M)return"";const y={month:"long",day:"numeric",year:"numeric"},C=new Date(M);if(isNaN(C.getTime()))return"";const R=C.toLocaleDateString("en-US",y);if(!x||x===M)return R;const T=new Date(x);return isNaN(T.getTime())||T.getTime()===C.getTime()?R:C.getMonth()===T.getMonth()&&C.getFullYear()===T.getFullYear()?`${C.toLocaleDateString("en-US",{month:"long"})} ${C.getDate()}–${T.getDate()}, ${C.getFullYear()}`:`${R} – ${T.toLocaleDateString("en-US",y)}`}Bn=m;function m(){if(!bt)return;const M=ga();if(!M||M.length===0)return;xa=!0;const x=Je;function y(z){if(!z)return-1;const P=new Date(z);if(isNaN(P.getTime()))return-1;const F=new Date(2026,0,1);return Math.max(0,Math.min(364,Math.round((P-F)/864e5)))}function C(z){if(z.start&&z.end){const q=new Date(z.start);if(new Date(z.end)<new Date(2026,0,1)||q>new Date(2026,11,31))return!1}const P=y(z.start);if(P<0)return!1;const F=z.end?y(z.end):P;if((F>=P?F-P+1:1)>30){const q=new Date(z.start),j=z.end?new Date(z.end):q,Z=new Date(2026,0,x+1).getMonth();return Z===q.getMonth()||Z===j.getMonth()}return x>=P&&x<=F}function R(z){const P=y(z.start),F=z.end?y(z.end):P;if(P<0||F<0)return 1;const O=F>=P?F-P+1:365-P+F+1;return Math.max(O,1)}function T(z){return(z.qi||0)+30/Math.sqrt(R(z))}const U=M.filter(z=>c(z)&&C(z)).sort((z,P)=>T(P)-T(z)),_=U.length>0?U:M.filter(c).sort((z,P)=>(P.qi||0)-(z.qi||0)).slice(0,10);Ft&&(Ft.textContent="",Ft.style.display="none",Ft.onclick=null,Ft.style.cursor=""),In&&(In.textContent="",In.style.display="none"),Un&&(Un.textContent="",Un.style.display="none"),dn&&(dn.innerHTML="",dn.style.display="none"),Nn&&(Nn.textContent="",Nn.style.display="none"),Fn&&(Fn.textContent="",Fn.style.display="none");const E=bt.querySelector(".fi-stats");E&&(E.style.display="none");let B=bt.querySelector(".fi-top-list");B||(B=document.createElement("div"),B.className="fi-top-list",bt.appendChild(B)),B.innerHTML="";for(const z of _){const P=[z.city,z.country].filter(Boolean).join(", "),F=h(z.start,z.end),O=document.createElement("div");O.className="fi-top-entry",O.style.cursor="pointer";let q=`<div class="fi-name">${z.name}</div>
        <div class="fi-location">${P}</div>`;if(F&&(q+=`<div class="fi-date">${F}</div>`),z.cat){const j=z.cat.split(/[,;]/).map($=>$.trim()).filter(Boolean);q+=`<div class="fi-tags">${j.map($=>`<span class="fi-tag">${$}</span>`).join("")}</div>`}z.desc&&(q+=`<p class="fi-desc">${z.desc}</p>`),O.innerHTML=q,O.addEventListener("click",()=>f(z)),B.appendChild(O)}B.style.display="",bt.style.display=""}function d(){xa=!1;const M=bt==null?void 0:bt.querySelector(".fi-top-list");M&&(M.style.display="none")}const g=new df,v=new Pe;function f(M){if(!bt||!M)return;if(d(),Ft&&(Ft.style.display="",Ft.textContent=M.name,Ft.style.cursor="pointer",Ft.onclick=()=>{mn&&vn?vn():Ot.size>0&&Bn&&Bn()}),In){In.style.display="";const y=[M.city,M.country].filter(Boolean);In.textContent=y.join(", ")}Un&&(Un.style.display="",Un.textContent=h(M.start,M.end));const x=bt.querySelector(".fi-stats");if(x&&(x.style.display=""),dn&&(dn.style.display="",dn.innerHTML="",M.cat)){const y=M.cat.split(/[,;]/).map(C=>C.trim()).filter(Boolean);for(const C of y){const R=document.createElement("span");R.className="fi-tag",R.textContent=C,dn.appendChild(R)}}Nn&&(Nn.textContent=M.desc||"",Nn.style.display=M.desc?"":"none"),Fn&&(Fn.textContent=M.details||"",Fn.style.display=M.details?"":"none"),Lu&&(Lu.textContent=M.att&&M.att>0?`~${M.att.toLocaleString()} attendees`:""),Pu&&(Pu.textContent=M.interest?`Interest ${M.interest}/10`:""),Du&&(Du.textContent=M.lat!=null&&M.lng!=null?`${M.lat.toFixed(2)}, ${M.lng.toFixed(2)}`:""),bt.style.display=""}a.domElement.addEventListener("click",M=>{if(!So())return;const x=a.domElement.getBoundingClientRect();v.x=(M.clientX-x.left)/x.width*2-1,v.y=-((M.clientY-x.top)/x.height)*2+1,g.setFromCamera(v,o);const y=$_(g,i);y?f(y):mn||m()}),p();function p(){const M=document.getElementById("search-input"),x=document.getElementById("search-placeholder"),y=document.getElementById("search-cursor"),C=document.getElementById("search-clear");if(!M)return;function R(){!y||!x||(y.style.left=x.offsetWidth+"px")}let T=0,H=null;function U(){x&&(x.classList.add("is-fading"),y&&y.classList.add("is-hidden"),setTimeout(()=>{T=(T+1)%wu.length,x.textContent=wu[T],x.classList.remove("is-fading"),R(),y&&y.classList.remove("is-hidden")},200))}H=setInterval(U,3e3),requestAnimationFrame(R),M.addEventListener("focus",()=>{x&&x.classList.add("is-hidden"),y&&y.classList.add("is-hidden"),clearInterval(H),H=null}),M.addEventListener("blur",()=>{!M.value&&x&&(x.classList.remove("is-hidden"),y&&(y.classList.remove("is-hidden"),R()),H||(H=setInterval(U,3e3)))});let _=0,E=0;M.addEventListener("input",()=>{clearTimeout(_),clearTimeout(E);const K=M.value.trim();if(C.style.display=K?"":"none",K?(x&&x.classList.add("is-hidden"),y&&y.classList.add("is-hidden"),clearInterval(H),H=null):!H&&x&&(x.classList.remove("is-hidden"),y&&(y.classList.remove("is-hidden"),R()),H=setInterval(U,3e3)),!K){O();return}E=setTimeout(()=>{const J=M.selectionStart,N=Cv(M.value);N!==null&&(M.value=N,M.setSelectionRange(J,J))},400),_=setTimeout(()=>z(K),300)}),M.addEventListener("keydown",K=>{if(K.key==="Enter"){K.preventDefault(),clearTimeout(_);const J=M.value.trim();J&&z(J)}K.key==="Escape"&&(M.value="",M.blur(),C.style.display="none",O())}),C.addEventListener("click",()=>{M.value="",C.style.display="none",M.focus(),O()});let B=null;function z(K){var se;const J=ga();if(!J)return;mn||(B={thermalDay:Je,rangeActive:Gt,rangeStartIdx:Gt?Dt:null,rangeEndIdx:Gt?kt:null,enabledCategories:new Set(Ot)});const N=mv(K);Br=N;let V=Tu(J,N);if(V.length>5&&(V=V.filter(fe=>(fe.qi||0)>=30)),mn=!0,Ot.size===0&&V.length>0){for(const fe of Iu)Ot.add(fe);document.querySelectorAll(".cat-toggle").forEach(fe=>{fe.classList.add("is-on")})}N.dateRange||(se=N.months)!=null&&se.length?$(N):N.name&&V.length>0?j(V):(Gr(),V=F(V)),Ot.size>0&&(V=V.filter(c)),Or=V,Eo(V),Yt(),V.length>0&&te(V),P(V)}function P(K,J){if(!bt)return;xa=!1,Ft&&(Ft.textContent="",Ft.style.display="none",Ft.onclick=null,Ft.style.cursor=""),In&&(In.textContent="",In.style.display="none"),Un&&(Un.textContent="",Un.style.display="none"),dn&&(dn.innerHTML="",dn.style.display="none"),Nn&&(Nn.textContent="",Nn.style.display="none"),Fn&&(Fn.textContent="",Fn.style.display="none");const N=bt.querySelector(".fi-stats");N&&(N.style.display="none");let V=bt.querySelector(".fi-top-list");V||(V=document.createElement("div"),V.className="fi-top-list",bt.appendChild(V)),V.innerHTML="";const se=document.createElement("div");se.className="fi-search-header",se.textContent=K.length>0?`${K.length} result${K.length===1?"":"s"}`:"No festivals found",V.appendChild(se);const fe=K.slice(0,50);for(const le of fe){const ce=[le.city,le.country].filter(Boolean).join(", "),Ee=h(le.start,le.end),Me=document.createElement("div");Me.className="fi-top-entry",Me.style.cursor="pointer";let I=`<div class="fi-name">${le.name}</div>
          <div class="fi-location">${ce}</div>`;if(Ee&&(I+=`<div class="fi-date">${Ee}</div>`),le.cat){const Xe=le.cat.split(/[,;]/).map(pe=>pe.trim()).filter(Boolean);I+=`<div class="fi-tags">${Xe.map(pe=>`<span class="fi-tag">${pe}</span>`).join("")}</div>`}le.desc&&(I+=`<p class="fi-desc">${le.desc}</p>`),Me.innerHTML=I,Me.addEventListener("click",()=>f(le)),V.appendChild(Me)}V.style.display="",bt.style.display=""}function F(K){var fe;const J=Br;if(J!=null&&J.dateRange||(fe=J==null?void 0:J.months)!=null&&fe.length||J!=null&&J.name)return K;const N=Gt?0:5,V=Gt?Dt:Math.max(0,Je-N),se=Gt?kt:Math.min(364,Je+N);return K.filter(le=>{if(!le.start)return!0;const ce=new Date(2026,0,1),Ee=new Date(le.start),Me=le.end?new Date(le.end):Ee,I=Math.max(0,Math.min(364,Math.round((Ee-ce)/864e5))),Xe=Math.max(0,Math.min(364,Math.round((Me-ce)/864e5)));return I<=se&&Xe>=V})}vn=()=>{if(!mn||!Br)return;const K=ga();if(!K)return;let J=Tu(K,Br);J.length>5&&(J=J.filter(N=>(N.qi||0)>=30)),J=F(J),Ot.size>0&&(J=J.filter(c)),Or=J,Eo(J),P(J),Yt()};function O(){if(mn=!1,Or=[],Br=null,vn=null,Eo(null),B){Ot.clear();for(const K of B.enabledCategories)Ot.add(K);document.querySelectorAll(".cat-toggle").forEach(K=>{const J=K.dataset.cat;Ot.has(J)?K.classList.add("is-on"):K.classList.remove("is-on")}),B.rangeActive&&B.rangeStartIdx!=null?(kr(B.rangeStartIdx,B.rangeEndIdx),Z(B.rangeStartIdx)):(Gr(),Z(B.thermalDay)),B=null}else Gr();Yt(),Ot.size>0&&Bn?Bn():bt.style.display="none"}function q(K){const J=new Date(2026,0,1),N=Math.round((K-J)/864e5);return Math.max(0,Math.min(364,N))}function j(K){const J=new Date(2026,0,1);let N=1/0,V=-1/0;const se=K[0];if(!(se!=null&&se.start))return;const fe=new Date(se.start),le=se.end?new Date(se.end):fe;N=Math.max(0,Math.round((fe-J)/864e5)),V=Math.max(0,Math.min(364,Math.round((le-J)/864e5))),N>364&&(N=0),V<N&&(V=N),V>N+1?(Z(N),kr(N,V),Yt()):(Gr(),Z(N))}function $(K){var fe,le;if(!(li!=null&&li.dateLabels))return;let J,N;if((fe=K.dateRange)!=null&&fe.start){if(J=new Date(K.dateRange.start),N=K.dateRange.end?new Date(K.dateRange.end):J,J>N){const Ee=q(N);Z(0),kr(0,Ee);const Me=q(J);xs(Me,Ee),Yt();return}}else if((le=K.months)!=null&&le.length){const ce=[...K.months].sort((Xe,pe)=>Xe-pe);if(ce.includes(11)&&ce.includes(0)){const Xe=ce.filter(b=>b<6),pe=ce.filter(b=>b>=6),Se=Xe.length>0?Math.max(...Xe):1;J=new Date(2026,0,1),N=new Date(2026,Se+1,0);const ue=q(J),Ge=q(N);Z(ue),kr(ue,Ge);const Ce=new Date(2026,Math.min(...pe),1);xs(q(Ce),Ge),Yt();return}const Me=ce[0],I=ce[ce.length-1];J=new Date(2026,Me,1),N=new Date(2026,I+1,0)}else return;const V=q(J),se=q(N);se>V+1?(Z(V),kr(V,se),Yt()):(Gr(),Z(V))}function Z(K){const J=Je;if(J===K)return;const N=600,V=performance.now();function se(fe){const le=Math.min(1,(fe-V)/N),ce=le*(2-le),Ee=Math.round(J+(K-J)*ce);Je=Ee,ci(),Ui(Ee),Pi&&Pi(Ee),Gt||vs(Ee),le<1?requestAnimationFrame(se):Yt()}requestAnimationFrame(se)}function te(K){if(K.length===0)return;const J=Math.min(K.length,20);let N=0,V=0;for(let pe=0;pe<J;pe++)N+=K[pe].lat,V+=K[pe].lng;const fe=-(V/J)*Math.PI/180,le=i.rotation.y,ce=800,Ee=performance.now(),Me=le;let I=fe-Me;I=((I+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,El=performance.now()+ce+2e3;function Xe(pe){const Se=Math.min(1,(pe-Ee)/ce),ue=Se*Se*(3-2*Se);i.rotation.y=Me+I*ue,Se<1&&requestAnimationFrame(Xe)}requestAnimationFrame(Xe)}}}function Gv({materialSettings:i,applyTerrain:e,onChange:t}){if(!i||typeof e!="function")return;let n=Ue(Number(i.terrainExaggeration)||1,pi,zi),r=0;const s=l=>{Ro&&(Ro.value=`${l.toFixed(2)}x`,Ro.textContent=`${l.toFixed(2)}x`)},o=()=>{r=0,i.terrainExaggeration=n,e(n,i.normalStrength),s(n),typeof t=="function"&&t()},a=l=>{n=Ue(Number(l)||1,pi,zi),r||(r=requestAnimationFrame(o))};a(i.terrainExaggeration),is&&is.addEventListener("input",l=>{const c=l.target;a(c?c.value:1)})}function Hv({rig:i,renderer:e,materialSettings:t,getGlobeMaterial:n,getShellMaterial:r}){if(!i||!e||!t)return{refresh:()=>{}};const s=[{id:"light-exposure",output:"light-exposure-value",fmt:yt,get:()=>i.settings.exposure,set:d=>{i.settings.exposure=d}},{id:"light-ambient-intensity",output:"light-ambient-intensity-value",fmt:yt,get:()=>i.settings.ambientIntensity,set:d=>{i.settings.ambientIntensity=d}},{id:"light-hemi-intensity",output:"light-hemi-intensity-value",fmt:yt,get:()=>i.settings.hemiIntensity,set:d=>{i.settings.hemiIntensity=d}},{id:"light-hemi-sky-temp",output:"light-hemi-sky-temp-value",fmt:Ei,get:()=>i.settings.hemiSkyTemp,set:d=>{i.settings.hemiSkyTemp=d}},{id:"light-hemi-ground-temp",output:"light-hemi-ground-temp-value",fmt:Ei,get:()=>i.settings.hemiGroundTemp,set:d=>{i.settings.hemiGroundTemp=d}},{id:"light-front-intensity",output:"light-front-intensity-value",fmt:yt,get:()=>i.settings.frontIntensity,set:d=>{i.settings.frontIntensity=d}},{id:"light-front-temp",output:"light-front-temp-value",fmt:Ei,get:()=>i.settings.frontTemp,set:d=>{i.settings.frontTemp=d}},{id:"light-key-intensity",output:"light-key-intensity-value",fmt:yt,get:()=>i.settings.keyIntensity,set:d=>{i.settings.keyIntensity=d}},{id:"light-key-temp",output:"light-key-temp-value",fmt:Ei,get:()=>i.settings.keyTemp,set:d=>{i.settings.keyTemp=d}},{id:"light-key-azimuth",output:"light-key-azimuth-value",fmt:ni,get:()=>i.settings.keyAzimuth,set:d=>{i.settings.keyAzimuth=d}},{id:"light-key-elevation",output:"light-key-elevation-value",fmt:ni,get:()=>i.settings.keyElevation,set:d=>{i.settings.keyElevation=d}},{id:"light-key-distance",output:"light-key-distance-value",fmt:yt,get:()=>i.settings.keyDistance,set:d=>{i.settings.keyDistance=d}},{id:"light-fill-intensity",output:"light-fill-intensity-value",fmt:yt,get:()=>i.settings.fillIntensity,set:d=>{i.settings.fillIntensity=d}},{id:"light-fill-temp",output:"light-fill-temp-value",fmt:Ei,get:()=>i.settings.fillTemp,set:d=>{i.settings.fillTemp=d}},{id:"light-fill-azimuth",output:"light-fill-azimuth-value",fmt:ni,get:()=>i.settings.fillAzimuth,set:d=>{i.settings.fillAzimuth=d}},{id:"light-fill-elevation",output:"light-fill-elevation-value",fmt:ni,get:()=>i.settings.fillElevation,set:d=>{i.settings.fillElevation=d}},{id:"light-fill-distance",output:"light-fill-distance-value",fmt:yt,get:()=>i.settings.fillDistance,set:d=>{i.settings.fillDistance=d}},{id:"light-rim-intensity",output:"light-rim-intensity-value",fmt:yt,get:()=>i.settings.rimIntensity,set:d=>{i.settings.rimIntensity=d}},{id:"light-rim-temp",output:"light-rim-temp-value",fmt:Ei,get:()=>i.settings.rimTemp,set:d=>{i.settings.rimTemp=d}},{id:"light-rim-azimuth",output:"light-rim-azimuth-value",fmt:ni,get:()=>i.settings.rimAzimuth,set:d=>{i.settings.rimAzimuth=d}},{id:"light-rim-elevation",output:"light-rim-elevation-value",fmt:ni,get:()=>i.settings.rimElevation,set:d=>{i.settings.rimElevation=d}},{id:"light-rim-distance",output:"light-rim-distance-value",fmt:yt,get:()=>i.settings.rimDistance,set:d=>{i.settings.rimDistance=d}},{id:"light-accent-intensity",output:"light-accent-intensity-value",fmt:yt,get:()=>i.settings.accentIntensity,set:d=>{i.settings.accentIntensity=d}},{id:"light-accent-temp",output:"light-accent-temp-value",fmt:Ei,get:()=>i.settings.accentTemp,set:d=>{i.settings.accentTemp=d}},{id:"light-accent-azimuth",output:"light-accent-azimuth-value",fmt:ni,get:()=>i.settings.accentAzimuth,set:d=>{i.settings.accentAzimuth=d}},{id:"light-accent-elevation",output:"light-accent-elevation-value",fmt:ni,get:()=>i.settings.accentElevation,set:d=>{i.settings.accentElevation=d}},{id:"light-accent-distance",output:"light-accent-distance-value",fmt:yt,get:()=>i.settings.accentDistance,set:d=>{i.settings.accentDistance=d}},{id:"surface-roughness",output:"surface-roughness-value",fmt:yt,get:()=>t.roughness,set:d=>{t.roughness=d}},{id:"surface-clearcoat",output:"surface-clearcoat-value",fmt:yt,get:()=>t.clearcoat,set:d=>{t.clearcoat=d}},{id:"surface-clearcoat-roughness",output:"surface-clearcoat-roughness-value",fmt:yt,get:()=>t.clearcoatRoughness,set:d=>{t.clearcoatRoughness=d}},{id:"surface-env-intensity",output:"surface-env-intensity-value",fmt:yt,get:()=>t.envMapIntensity,set:d=>{t.envMapIntensity=d}},{id:"surface-normal-strength",output:"surface-normal-strength-value",fmt:yt,get:()=>t.normalStrength,set:d=>{t.normalStrength=d}},{id:"surface-shell-intensity",output:"surface-shell-intensity-value",fmt:yt,get:()=>t.shellIntensity,set:d=>{t.shellIntensity=d}}],o=[];let a=Ms;const l=d=>{Fr&&(Fr.textContent=d)},c=()=>{for(let d=0;d<o.length;d+=1){const g=o[d],v=g.def.get();g.input.value=String(v),g.output&&(g.output.textContent=g.def.fmt(v))}},u=()=>{var f;if(!Ru)return;const d=i.settings,g=t,v=((f=Fr==null?void 0:Fr.textContent)==null?void 0:f.trim())||"Custom";Ru.textContent=`preset=${v} exp=${d.exposure.toFixed(2)} terrain=${g.terrainExaggeration.toFixed(2)}x
ambient=${d.ambientIntensity.toFixed(2)} hemi=${d.hemiIntensity.toFixed(2)} sky=${Math.round(d.hemiSkyTemp)}K ground=${Math.round(d.hemiGroundTemp)}K
camFill i=${d.frontIntensity.toFixed(2)} t=${Math.round(d.frontTemp)}K
key    i=${d.keyIntensity.toFixed(2)} t=${Math.round(d.keyTemp)}K az=${Math.round(d.keyAzimuth)}deg el=${Math.round(d.keyElevation)}deg d=${d.keyDistance.toFixed(2)}
fill   i=${d.fillIntensity.toFixed(2)} t=${Math.round(d.fillTemp)}K az=${Math.round(d.fillAzimuth)}deg el=${Math.round(d.fillElevation)}deg d=${d.fillDistance.toFixed(2)}
rim    i=${d.rimIntensity.toFixed(2)} t=${Math.round(d.rimTemp)}K az=${Math.round(d.rimAzimuth)}deg el=${Math.round(d.rimElevation)}deg d=${d.rimDistance.toFixed(2)}
accent i=${d.accentIntensity.toFixed(2)} t=${Math.round(d.accentTemp)}K az=${Math.round(d.accentAzimuth)}deg el=${Math.round(d.accentElevation)}deg d=${d.accentDistance.toFixed(2)}
surface rough=${g.roughness.toFixed(2)} clear=${g.clearcoat.toFixed(2)} clrR=${g.clearcoatRoughness.toFixed(2)} refl=${g.envMapIntensity.toFixed(2)} relief=${g.normalStrength.toFixed(2)} atmo=${g.shellIntensity.toFixed(2)}`},h=()=>{e.toneMappingExposure=i.settings.exposure,i.update(),Mx(n(),r(),t),u()},m=d=>{const g=wo[d]?d:"studio",v=wo[g];for(const p of Object.keys(i.settings))Object.prototype.hasOwnProperty.call(v,p)&&(i.settings[p]=v[p]);const f=["roughness","clearcoat","clearcoatRoughness","envMapIntensity","ior","reflectivity","specularIntensity","sheen","sheenRoughness","sheenColor","normalStrength","shellIntensity"];for(let p=0;p<f.length;p+=1){const M=f[p];Object.prototype.hasOwnProperty.call(v,M)&&(t[M]=v[M])}return ti&&(ti.value=g),a=g,Ef(a),l(yx(g)),c(),h(),g};for(let d=0;d<s.length;d+=1){const g=s[d],v=document.querySelector(`#${g.id}`);if(!v)continue;const f=g.output?document.querySelector(`#${g.output}`):null,p={def:g,input:v,output:f};o.push(p),v.addEventListener("input",()=>{g.set(Number(v.value)),f&&(f.textContent=g.fmt(g.get())),l("Custom"),h()})}return ti&&ti.addEventListener("change",()=>{m(ti.value)}),Cu&&Cu.addEventListener("click",()=>{m("studio")}),m((ti==null?void 0:ti.value)||Fv||Ms),typeof window<"u"&&(window.setGlobeLightingPreset=d=>{m(String(d||"").toLowerCase())},window.listGlobeLightingPresets=()=>Object.keys(wo)),{refresh:h,setPreset:m,getPreset:()=>a}}function Vv(i){if(!i||typeof i.setPreset!="function")return;const e=Array.from(document.querySelectorAll(".lighting-preset-button"));if(e.length){for(let t=0;t<e.length;t+=1){const n=e[t];n.addEventListener("click",()=>{const r=String(n.dataset.preset||"").toLowerCase();i.setPreset(r)})}Ef(i.getPreset?i.getPreset():Ms)}}function Ef(i){const e=document.querySelectorAll(".lighting-preset-button");for(let t=0;t<e.length;t+=1){const n=e[t],r=String(n.dataset.preset||"").toLowerCase();n.classList.toggle("is-active",r===i)}}function Wv(i,e,t){const n={...yf},r=new ff(16777215,n.ambientIntensity),s=new hf(16777215,16777215,n.hemiIntensity),o=new lr(16777215,n.frontIntensity),a=new lr(16777215,n.keyIntensity),l=new lr(16777215,n.fillIntensity),c=new lr(16777215,n.rimIntensity),u=new lr(16777215,n.accentIntensity);i.add(r,s,o,a,l,c,u),i.add(o.target,a.target,l.target,c.target,u.target);const h=new D,m=new D(0,0,0),d=new D,g=new D,v=new D,f=new D,p=new D(1,0,0),M=new D(0,1,0),x=(C,R,T,H)=>{h.copy(t?t.target:m),d.copy(e.position).sub(h).normalize(),d.lengthSq()<1e-6&&d.set(0,0,1),g.crossVectors(d,M),g.lengthSq()<1e-6?g.copy(p):g.normalize(),v.crossVectors(g,d).normalize(),f.copy(d),f.applyAxisAngle(v,bn.degToRad(R)),f.applyAxisAngle(g,bn.degToRad(T)),f.normalize(),C.position.copy(h).addScaledVector(f,H),C.target.position.copy(h),C.target.updateMatrixWorld(),C.updateMatrixWorld()},y=()=>{r.intensity=n.ambientIntensity,s.intensity=n.hemiIntensity,o.intensity=n.frontIntensity,a.intensity=n.keyIntensity,l.intensity=n.fillIntensity,c.intensity=n.rimIntensity,u.intensity=n.accentIntensity,Ai(s.color,n.hemiSkyTemp),Ai(s.groundColor,n.hemiGroundTemp),Ai(o.color,n.frontTemp),Ai(a.color,n.keyTemp),Ai(l.color,n.fillTemp),Ai(c.color,n.rimTemp),Ai(u.color,n.accentTemp),x(o,0,0,n.frontDistance),x(a,n.keyAzimuth,n.keyElevation,n.keyDistance),x(l,n.fillAzimuth,n.fillElevation,n.fillDistance),x(c,n.rimAzimuth,n.rimElevation,n.rimDistance),x(u,n.accentAzimuth,n.accentElevation,n.accentDistance)};return y(),{settings:n,update:y}}async function Af(i){const e=new uf;e.setCrossOrigin("anonymous");const t=await e.loadAsync(i);return t.needsUpdate=!0,t}async function Xv(i,{timeoutMs:e=18e3}={}){if(!Array.isArray(i)||!i.length)throw new Error("No texture URLs provided");let t;for(let n=0;n<i.length;n+=1){const r=i[n];try{return await bf(Af(r),e,`Texture load timed out: ${r}`)}catch(s){t=s,console.warn(`Texture fallback failed: ${r}`,s)}}throw t||new Error("Unable to load texture from fallback list.")}async function qv(i,{timeoutMs:e=12e3}={}){const t=typeof AbortController<"u"?new AbortController:null,n=setTimeout(()=>{t&&t.abort()},e);try{const r=await fetch(i,t?{signal:t.signal}:void 0);if(!r.ok)throw new Error(`Request failed: ${r.status}`);return await r.json()}catch(r){return console.warn(`Unable to load ${i}`,r),null}finally{clearTimeout(n)}}async function On(i,{timeoutMs:e=12e3}={}){if(!Array.isArray(i)||!i.length)return null;for(let t=0;t<i.length;t+=1){const n=await qv(i[t],{timeoutMs:e});if(n)return n}return null}async function Yv({metaUrls:i,timeoutMs:e=22e3}={}){const t=await On(i,{timeoutMs:e}),n=Array.isArray(t==null?void 0:t.regions)?t.regions:[];if(!n.length)return[];const r=[];for(let s=0;s<n.length;s+=1){const o=n[s],a=String((o==null?void 0:o.path)||"").trim();if(!a)continue;const l=Number(o.lon_min),c=Number(o.lon_max),u=Number(o.lat_min),h=Number(o.lat_max);if([l,c,u,h].every(Number.isFinite))try{const m=await bf(Af(a),e,`Regional overlay load timed out: ${a}`),d=Df(m.image),g=Math.max(2,Number(o.width)||d.width||0),v=Math.max(2,Number(o.height)||d.height||0),f=Tf(m.image,g,v);r.push({id:String(o.id||`region-${s+1}`),sampler:f,lonMin:ys(l),lonMax:ys(c),latMin:Ue(Math.min(u,h),-90,90),latMax:Ue(Math.max(u,h),-90,90),featherDeg:Math.max(0,Number(o.feather_deg)||0),strength:Ue(Number(o.strength)||1,0,1)}),typeof m.dispose=="function"&&m.dispose()}catch(m){console.warn(`Unable to load regional detail overlay: ${a}`,m)}}return r}function bf(i,e,t){let n;return new Promise((r,s)=>{n=setTimeout(()=>{s(new Error(t||"Operation timed out"))},e),i.then(o=>{clearTimeout(n),r(o)}).catch(o=>{clearTimeout(n),s(o)})})}function Ou(){return new Promise(i=>{requestAnimationFrame(()=>i())})}function Tf(i,e,t){const n=document.createElement("canvas");n.width=e,n.height=t;const r=n.getContext("2d",{willReadFrequently:!0});if(!r)throw new Error("Unable to allocate elevation sampling canvas");r.imageSmoothingEnabled=!0,r.imageSmoothingQuality="high",r.drawImage(i,0,0,e,t);let s;try{s=r.getImageData(0,0,e,t).data}catch{throw new Error("Unable to read elevation texture data")}const o=Kv(s,e,t);return n.width=1,n.height=1,{width:e,height:t,data:o,sample(a,l){return Zv(o,e,t,a,l)}}}function jv(i,e){if(!i||typeof i.sample!="function")throw new Error("Missing base height sampler");const t=Array.isArray(e)?e.filter(n=>n&&n.sampler&&typeof n.sampler.sample=="function"):[];return t.length?{sample(n,r){let s=i.sample(n,r);const o=ys((n-.5)*360),a=90-Ue(r,0,1)*180;for(let l=0;l<t.length;l+=1){const c=t[l],u=c.latMax-c.latMin;if(u<=1e-6||a<c.latMin||a>c.latMax)continue;const h=c.lonMax<c.lonMin,m=h?c.lonMax+360-c.lonMin:c.lonMax-c.lonMin;if(m<=1e-6)continue;let d=o;h&&d<c.lonMin&&(d+=360);const g=h?c.lonMax+360:c.lonMax;if(d<c.lonMin||d>g)continue;const v=Ue((d-c.lonMin)/m,0,1),f=Ue((c.latMax-a)/u,0,1),p=c.sampler.sample(v,f);let M=1;if(c.featherDeg>0){const y=Math.min(v*m,(1-v)*m,f*u,(1-f)*u);M=ss(0,c.featherDeg,y)}const x=yn(M*c.strength);s=ct(s,p,x)}return s}}:i}function $v({sampler:i,width:e,height:t,landMaskData:n,landMaskWidth:r,landMaskHeight:s}){const o=document.createElement("canvas");o.width=e,o.height=t;const a=o.getContext("2d");if(!a||!i||typeof i.sample!="function")return o;const l=a.createImageData(e,t),c=l.data;for(let u=0;u<t;u+=1){const h=u/Math.max(1,t-1);for(let m=0;m<e;m+=1){const d=m/Math.max(1,e-1);let g=i.sample(d,h);Pa(n,r,s,d,h)<.5&&(g=.5);const f=Ue(Math.round(g*255),0,255),p=(u*e+m)*4;c[p]=f,c[p+1]=f,c[p+2]=f,c[p+3]=255}}return a.putImageData(l,0,0),o}function Bu(i,e,t){const n=e*t,r=new Uint8Array(n);for(let s=0,o=0;o<n;s+=4,o+=1)r[o]=i[s];return r}function Kv(i,e,t){const n=e*t,r=new Uint8Array(n);for(let s=0,o=0;o<n;s+=4,o+=1)r[o]=Math.round(i[s]*.2126+i[s+1]*.7152+i[s+2]*.0722);return r}function Zv(i,e,t,n,r){const s=(n%1+1)%1,o=Ue(r,0,1),a=s*(e-1),l=o*(t-1),c=Math.floor(a),u=Math.floor(l),h=Math.min(e-1,c+1),m=Math.min(t-1,u+1),d=a-c,g=l-u,v=i[u*e+c],f=i[u*e+h],p=i[m*e+c],M=i[m*e+h],x=ct(v,f,d),y=ct(p,M,d);return ct(x,y,g)/255}function Pa(i,e,t,n,r){if(!i)return 0;const s=(n%1+1)%1,o=Ue(r,0,1),a=Ue(Math.round(s*(e-1)),0,e-1),l=Ue(Math.round(o*(t-1)),0,t-1);return i[l*e+a]/255}function wf(i){return i>=.5?(i-.5)/Math.max(1e-6,1-.5):(i-.5)/Math.max(1e-6,.5)}function Rf(i,e=1){const t=wf(i),n=Math.max(0,t),r=Math.pow(n,.98),s=ss(.56,.98,n),o=Math.pow(s,2.4)*.33;return yn(r+o)*e}function Cf(i,e,t){const n=yn(i),r=Ue(Number(e)||1,pi,zi),o=.72+Ue(Number(t)||1,.35,2.5)*.28,a=Ue((1-r)/Math.max(1e-6,1-pi),0,1),l=ss(.58,.985,n),c=ss(.42,.9,n),u=Math.pow(l,2.5)*(.02+a*.16),h=Math.pow(c,1.8)*l*(.03+a*.07),m=yn(n+u-h),d=ss(.86,1,m),g=Math.pow(d,1.35)*(.026+a*.034),v=yn(m-g),f=1+a*Math.pow(l,1.6)*.16;return v*ns.displacementScale*r*o*f}function Jv({radius:i,widthSegments:e,heightSegments:t,heightSampler:n,terrainNormalMap:r,landMaskData:s,landMaskWidth:o,landMaskHeight:a,lakeMaskData:l,lakeMaskWidth:c,lakeMaskHeight:u,terrainExaggeration:h,normalStrength:m}){const d=new Ts(i,e,t),g=d.attributes.position,v=g.count,f=g.array,p=new Float32Array(f.length),M=new Float32Array(v),x=new Float32Array(v*3);for(let T=0;T<v;T+=1){const H=T*3,U=f[H],_=f[H+1],E=f[H+2],B=Math.hypot(U,_,E)||1,z=U/B,P=_/B,F=E/B;p[H]=z,p[H+1]=P,p[H+2]=F;const O=Math.atan2(F,z)*oc,q=Math.asin(Ue(P,-1,1)),j=O/(Math.PI*2)+.5,$=.5-q/Math.PI,Z=n.sample(j,$),te=Z>.5002?1:0,K=Pa(s,o,a,j,$),J=s?K:te,N=Pa(l,c,u,j,$),se=yn((l?N:0)*J),fe=J*(1-se*.96),le=Rf(Z,fe);M[T]=le;const ce=wf(Z),Ee=Math.tanh(ce*3.2),I=1-Math.abs(Math.sin(q)),Xe=Math.sin(O+q*.35+1.15),pe=J*.16,Se=Math.max(0,Ee)*J*.42;let ue=.5+Xe*.26+I*.2+pe-Se;ue=yn(ue);const Ge=ix(ue),Ce={r:.93,g:.94,b:.955},b={r:.53,g:.69,b:.88},S=J*(.34+J*.46),G=le*J*.22,re={r:.992,g:.992,b:.992};let Q=ct(Ce.r,Ge.r,S),ee=ct(Ce.g,Ge.g,S),ve=ct(Ce.b,Ge.b,S);Q+=G*.08,ee+=G*.1,ve+=G*.18,Q=ct(Q,b.r,se*.92),ee=ct(ee,b.g,se*.92),ve=ct(ve,b.b,se*.92),Q=ct(re.r,Q,J),ee=ct(re.g,ee,J),ve=ct(re.b,ve,J),x[H]=yn(Q),x[H+1]=yn(ee),x[H+2]=yn(ve)}d.setAttribute("color",new gt(x,3));const y=new af({color:16777215,vertexColors:!0,roughness:it.roughness,metalness:0,clearcoat:it.clearcoat,clearcoatRoughness:it.clearcoatRoughness,envMapIntensity:it.envMapIntensity,normalMap:r||null,normalScale:new Pe(ns.normalScale*it.normalStrength,ns.normalScale*it.normalStrength)});y.dithering=!0,"ior"in y&&(y.ior=it.ior),"reflectivity"in y&&(y.reflectivity=it.reflectivity),"specularIntensity"in y&&(y.specularIntensity=it.specularIntensity),"sheen"in y&&(y.sheen=it.sheen),"sheenRoughness"in y&&(y.sheenRoughness=it.sheenRoughness),"sheenColor"in y&&(y.sheenColor=new ke(it.sheenColor)),y.userData.reliefState={terrainExaggeration:null,normalStrength:null};const C=new Zt(d,y);C.castShadow=!1,C.receiveShadow=!1;const R=(T,H=1)=>{const U=Ue(Number(T)||1,pi,zi),_=Ue(Number(H)||1,.35,2.5);for(let B=0;B<v;B+=1){const z=B*3,P=Cf(M[B],U,_),F=i+P;f[z]=p[z]*F,f[z+1]=p[z+1]*F,f[z+2]=p[z+2]*F}g.needsUpdate=!0,d.computeVertexNormals(),d.computeBoundingSphere();const E=ns.normalScale*_;y.normalScale&&y.normalScale.set(E,E)};return R(h,m),{mesh:C,material:y,updateTerrain:R}}function zu({countriesGeo:i,stateLinesGeo:e,riversGeo:t,lakesGeo:n,radius:r,heightSampler:s,landMaskData:o,landMaskWidth:a,landMaskHeight:l,terrainExaggeration:c,normalStrength:u,countryStepDeg:h=1.15,stateStepDeg:m=2.2,riverStepDeg:d=.8,lakeStepDeg:g=.9}){const v=new ai,f=[],p=sr({geojson:i,mode:"polygon",radius:r,heightSampler:s,landMaskData:o,landMaskWidth:a,landMaskHeight:l,color:16777215,opacity:.58,offset:.0028,lift:1.1,maxStepDeg:h});p&&(v.add(p.line),f.push(p));const M=sr({geojson:e,mode:"line",radius:r,heightSampler:s,landMaskData:o,landMaskWidth:a,landMaskHeight:l,color:13746602,opacity:.4,offset:.0038,lift:1.15,maxStepDeg:m,surfaceOffsetRight:.0023});M&&(v.add(M.line),f.push(M));const x=sr({geojson:e,mode:"line",radius:r,heightSampler:s,landMaskData:o,landMaskWidth:a,landMaskHeight:l,color:13746602,opacity:.4,offset:.0038,lift:1.15,maxStepDeg:m,surfaceOffsetRight:-.0023});x&&(v.add(x.line),f.push(x));const y=sr({geojson:e,mode:"line",radius:r,heightSampler:s,landMaskData:o,landMaskWidth:a,landMaskHeight:l,color:12429707,opacity:.82,offset:.004,lift:1.16,maxStepDeg:m});y&&(v.add(y.line),f.push(y));const R=sr({geojson:t,mode:"line",radius:r,heightSampler:s,landMaskData:o,landMaskWidth:a,landMaskHeight:l,color:16777215,opacity:.38,offset:.00205,lift:1.06,maxStepDeg:d,featureFilter:U=>{const _=(U==null?void 0:U.properties)||{},E=String(_.featurecla||"").toLowerCase();return E&&E!=="river"?!1:Gu(_.scalerank,9)}});R&&(v.add(R.line),f.push(R));const T=sr({geojson:n,mode:"polygon",radius:r,heightSampler:s,landMaskData:o,landMaskWidth:a,landMaskHeight:l,color:6858730,opacity:.72,offset:.0019,lift:1.04,maxStepDeg:g,featureFilter:U=>{const _=(U==null?void 0:U.properties)||{};return Gu(_.scalerank,8)}});T&&(v.add(T.line),f.push(T));const H=(U,_=1)=>{const E=Ue(Number(U)||1,pi,zi),B=Ue(Number(_)||1,.35,2.5);for(let z=0;z<f.length;z+=1){const P=f[z],F=P.positions;for(let O=0;O<P.vertexCount;O+=1){const q=O*3,j=Cf(P.relief[O],E,B)*P.lift,$=r+j+P.offset;F[q]=P.directions[q]*$,F[q+1]=P.directions[q+1]*$,F[q+2]=P.directions[q+2]*$}P.positionAttr.needsUpdate=!0,P.geometry.computeBoundingSphere()}};return H(c,u),{group:f.length?v:null,updateTerrain:f.length?H:null}}function sr({geojson:i,mode:e,radius:t,heightSampler:n,landMaskData:r,landMaskWidth:s,landMaskHeight:o,color:a,opacity:l,offset:c,lift:u=1,maxStepDeg:h,featureFilter:m=null,materialOptions:d=null,surfaceOffsetRight:g=0,surfaceOffsetUp:v=0}){if(!i)return null;const f=[];if(e==="polygon"?lc(i,U=>{for(let _=0;_<U.length;_+=1)ku(U[_],f,h)},m):sx(i,U=>{ku(U,f,h)},m),!f.length)return null;const p=f.length/2,M=new Float32Array(p*3),x=new Float32Array(p*3),y=new Float32Array(p);for(let U=0;U<p;U+=1){const _=f[U*2],E=f[U*2+1],B=Qv(_,E),z=ex(B,g,v),P=Math.atan2(z.z,z.x)*bn.RAD2DEG*oc,F=Math.asin(Ue(z.y,-1,1))*bn.RAD2DEG,O=(ys(P)+180)/360,q=(90-F)/180,j=n.sample(O,q),$=j>.5002?1:0,Z=Pa(r,s,o,O,q),te=r?Z:$;x[U*3]=z.x,x[U*3+1]=z.y,x[U*3+2]=z.z,y[U]=Rf(j,te)}const C=new Vt,R=new gt(M,3);C.setAttribute("position",R);const T=new Jl({color:a,transparent:!0,opacity:l,depthTest:!0,depthWrite:!1,...d||{}});return{line:new rf(C,T),geometry:C,positionAttr:R,positions:M,directions:x,relief:y,vertexCount:p,offset:c,lift:u}}function ku(i,e,t=.75){const n=Pf(i);if(!(n.length<2))for(let r=1;r<n.length;r+=1){const s=n[r-1],o=n[r],a=s[0],l=s[1],c=o[0],u=o[1],h=Math.max(Math.abs(c-a),Math.abs(u-l)),m=Math.max(1,Math.min(96,Math.ceil(h/t)));let d=a,g=l;for(let v=1;v<=m;v+=1){const f=v/m,p=ct(a,c,f),M=ct(l,u,f);e.push(d,g),e.push(p,M),d=p,g=M}}}function Qv(i,e){const t=bn.degToRad(i*oc),n=bn.degToRad(e),r=Math.cos(n);return new D(r*Math.cos(t),Math.sin(n),r*Math.sin(t))}function ex(i,e=0,t=0){if(Math.abs(e)<1e-8&&Math.abs(t)<1e-8)return i;let n=i.z,r=0,s=-i.x,o=Math.hypot(n,r,s);o<1e-6&&(n=0,r=-i.z,s=i.y,o=Math.hypot(n,r,s)),n/=o||1,r/=o||1,s/=o||1;const a=i.y*s-i.z*r,l=i.z*n-i.x*s,c=i.x*r-i.y*n;let u=i.x+n*e+a*t,h=i.y+r*e+l*t,m=i.z+s*e+c*t;const d=Math.hypot(u,h,m)||1;return u/=d,h/=d,m/=d,new D(u,h,m)}function tx(i,e,t){const n=document.createElement("canvas");n.width=e,n.height=t;const r=n.getContext("2d");return r?(r.fillStyle="black",r.fillRect(0,0,e,t),i?(r.fillStyle="white",lc(i,s=>{Lf(r,s,e,t)}),n):(console.warn("Country GeoJSON unavailable; land mask fallback set to ocean."),n)):n}function nx(i,e,t){const n=document.createElement("canvas");n.width=e,n.height=t;const r=n.getContext("2d");return!r||(r.fillStyle="black",r.fillRect(0,0,e,t),!i)||(r.fillStyle="white",lc(i,s=>{Lf(r,s,e,t)})),n}function ix(i){const e={r:.2,g:.49,b:1},t={r:.95,g:.96,b:.97},n={r:.97,g:.72,b:.39};if(i<=.5){const s=Math.pow(i/.5,1.36);return{r:ct(e.r,t.r,s),g:ct(e.g,t.g,s),b:ct(e.b,t.b,s)}}const r=(i-.5)/.5;return{r:ct(t.r,n.r,r),g:ct(t.g,n.g,r),b:ct(t.b,n.b,r)}}function Lf(i,e,t,n){if(!Array.isArray(e)||!e.length)return;const r=[-t,0,t];for(let s=0;s<r.length;s+=1){const o=r[s];i.beginPath();for(let a=0;a<e.length;a+=1)rx(i,e[a],t,n,o,!0);i.fill("evenodd")}}function rx(i,e,t,n,r=0,s=!1){const o=Pf(e);if(!(o.length<2)){for(let a=0;a<o.length;a+=1){const l=o[a],c=l[0],u=l[1],h=(c+180)/360*t+r,m=(90-u)/180*n;a===0?i.moveTo(h,m):i.lineTo(h,m)}s&&i.closePath()}}function Pf(i){if(!Array.isArray(i))return[];const e=[];let t=null;for(let n=0;n<i.length;n+=1){const r=i[n];if(!Array.isArray(r)||r.length<2)continue;let s=Number(r[0]);const o=Number(r[1]);if(!(!Number.isFinite(s)||!Number.isFinite(o))){if(s=ys(s),t!==null){for(;s-t>180;)s-=360;for(;s-t<-180;)s+=360}e.push([s,Ue(o,-90,90)]),t=s}}return e}function ys(i){let e=i;for(;e>180;)e-=360;for(;e<-180;)e+=360;return e}function lc(i,e,t=null){const n=Array.isArray(i==null?void 0:i.features)?i.features:[];for(let r=0;r<n.length;r+=1){const s=n[r];if(typeof t=="function"&&!t(s))continue;const o=s==null?void 0:s.geometry;if(o){if(o.type==="Polygon")Array.isArray(o.coordinates)&&e(o.coordinates,s);else if(o.type==="MultiPolygon"){const a=Array.isArray(o.coordinates)?o.coordinates:[];for(let l=0;l<a.length;l+=1)Array.isArray(a[l])&&e(a[l],s)}}}}function sx(i,e,t=null){const n=Array.isArray(i==null?void 0:i.features)?i.features:[];for(let r=0;r<n.length;r+=1){const s=n[r];if(typeof t=="function"&&!t(s))continue;const o=s==null?void 0:s.geometry;if(o){if(o.type==="LineString")Array.isArray(o.coordinates)&&e(o.coordinates,s);else if(o.type==="MultiLineString"){const a=Array.isArray(o.coordinates)?o.coordinates:[];for(let l=0;l<a.length;l+=1)Array.isArray(a[l])&&e(a[l],s)}}}}function Gu(i,e){const t=Number(i);return Number.isFinite(t)?t<=e:!0}function ax(i,{maxSize:e=2048,strength:t=2.6,anisotropy:n=1}){const r=i.width,s=i.height;if(!r||!s)return null;const o=Math.min(1,e/r),a=Math.max(64,Math.floor(r*o)),l=Math.max(32,Math.floor(s*o)),c=document.createElement("canvas");c.width=a,c.height=l;const u=c.getContext("2d",{willReadFrequently:!0});if(!u)return null;u.imageSmoothingEnabled=!0,u.imageSmoothingQuality="high",u.drawImage(i,0,0,a,l);let h;try{h=u.getImageData(0,0,a,l).data}catch(M){return console.warn("Normal map synthesis skipped due canvas restrictions.",M),null}const m=document.createElement("canvas");m.width=a,m.height=l;const d=m.getContext("2d");if(!d)return null;const g=d.createImageData(a,l),v=g.data,f=(M,x)=>{const y=Ue(Math.round(M),0,a-1),C=Ue(Math.round(x),0,l-1);return h[(C*a+y)*4]/255};for(let M=0;M<l;M+=1)for(let x=0;x<a;x+=1){const y=f(x-1,M),C=f(x+1,M),R=f(x,M-1),T=f(x,M+1),H=(y-C)*t,U=(R-T)*t,_=1,E=Math.hypot(H,U,_)||1,B=(M*a+x)*4;v[B]=Math.round((H/E*.5+.5)*255),v[B+1]=Math.round((U/E*.5+.5)*255),v[B+2]=Math.round((_/E*.5+.5)*255),v[B+3]=255}d.putImageData(g,0,0);const p=new Ba(m);return p.colorSpace=Ht,p.wrapS=ls,p.wrapT=Kt,p.anisotropy=n,p.minFilter=Hn,p.magFilter=Et,p.needsUpdate=!0,p}function ox(i){const e=document.createElement("canvas");e.width=2048,e.height=1024;const t=e.getContext("2d");if(!t)return null;const n=t.createLinearGradient(0,0,0,e.height);n.addColorStop(0,"#f9fbff"),n.addColorStop(.42,"#d0d7e2"),n.addColorStop(.76,"#8c97aa"),n.addColorStop(1,"#626b7d"),t.fillStyle=n,t.fillRect(0,0,e.width,e.height);const r=(c,u,h,m,d,g)=>{const v=t.createRadialGradient(c,u,0,c,u,Math.max(h,m));v.addColorStop(0,`rgba(${d[0]}, ${d[1]}, ${d[2]}, ${g})`),v.addColorStop(.32,`rgba(${d[0]}, ${d[1]}, ${d[2]}, ${g*.55})`),v.addColorStop(1,"rgba(255, 255, 255, 0)"),t.save(),t.translate(c,u),t.scale(h/Math.max(1,m),1),t.fillStyle=v,t.beginPath(),t.arc(0,0,Math.max(h,m),0,Math.PI*2),t.fill(),t.restore()};r(e.width*.22,e.height*.24,450,180,[255,255,255],.3),r(e.width*.78,e.height*.2,500,210,[245,248,255],.26),r(e.width*.48,e.height*.74,620,240,[210,220,238],.17),t.globalAlpha=.16,t.fillStyle="#ffffff",t.fillRect(0,e.height*.22,e.width,26),t.fillRect(0,e.height*.64,e.width,34);const s=t.createRadialGradient(e.width*.5,e.height*.5,e.height*.12,e.width*.5,e.height*.5,e.height*.72);s.addColorStop(0,"rgba(255,255,255,0)"),s.addColorStop(1,"rgba(12,18,30,0.16)"),t.globalAlpha=1,t.fillStyle=s,t.fillRect(0,0,e.width,e.height);const o=new Ba(e);o.colorSpace=dt,o.mapping=os;const a=new Ta(i),l=a.fromEquirectangular(o).texture;return o.dispose(),a.dispose(),l}function lx(i){try{return ox(i)}catch(e){return console.warn("Environment map fallback engaged:",e),null}}function cx(i){const e=!!(i&&i.isSafari),t=ms,n=typeof wa=="function"?wa:ms,r=e?[{label:"safari-webgl-safe",rendererCtor:t,antialias:!1,precision:"mediump",powerPreference:"default"},{label:"safari-webgl-explicit",rendererCtor:t,antialias:!1,precision:"mediump",powerPreference:"default",explicitContext:!0,contextTypes:["webgl2","webgl","experimental-webgl"]},{label:"safari-webgl1-fallback",rendererCtor:n,antialias:!1,precision:"mediump",powerPreference:"default",explicitContext:!0,contextTypes:["webgl","experimental-webgl"]}]:[{label:"default-webgl-quality",rendererCtor:t,antialias:!0,precision:"highp",powerPreference:"high-performance"},{label:"default-webgl-balanced",rendererCtor:t,antialias:!1,precision:"highp",powerPreference:"high-performance"},{label:"default-webgl-explicit",rendererCtor:t,antialias:!1,precision:"mediump",powerPreference:"default",explicitContext:!0,contextTypes:["webgl2","webgl","experimental-webgl"]},{label:"default-webgl1-fallback",rendererCtor:n,antialias:!1,precision:"mediump",powerPreference:"default",explicitContext:!0,contextTypes:["webgl","experimental-webgl"]}],s=[];for(let o=0;o<r.length;o+=1){const a=r[o];try{const l=ux(a);return l.domElement.dataset.rendererProfile=a.label,l}catch(l){const c=dx(l);s.push(`${a.label}: ${c}`),console.warn(`Renderer attempt failed (${a.label})`,l)}}throw s.length&&console.error("Renderer initialization errors:",s.join(" | ")),new Error("Error creating WebGL context.")}function ux(i){const e=document.createElement("canvas"),t={canvas:e,alpha:!0,depth:!0,stencil:!1,antialias:!!i.antialias,premultipliedAlpha:!0,preserveDrawingBuffer:!1,failIfMajorPerformanceCaveat:!1,powerPreference:i.powerPreference||"default",precision:i.precision||"highp"};let n=null;if(i.explicitContext){if(n=hx(e,i.contextTypes||["webgl2","webgl","experimental-webgl"],{alpha:!0,depth:!0,stencil:!1,antialias:!!i.antialias,premultipliedAlpha:!0,preserveDrawingBuffer:!1,failIfMajorPerformanceCaveat:!1,powerPreference:i.powerPreference||"default"}),!n)throw new Error("No supported WebGL context available");t.context=n}try{const r=i.rendererCtor||ms,s=new r(t);return s.domElement.addEventListener("webglcontextlost",o=>{o.preventDefault(),St("WebGL context lost. Reload to recover.","warn")},{passive:!1}),s}catch(r){throw fx(n),r}}function hx(i,e,t){for(let n=0;n<e.length;n+=1){const r=e[n];try{const s=i.getContext(r,t);if(s)return s}catch(s){console.warn(`WebGL context request failed (${r})`,s)}}return null}function fx(i){if(!(!i||typeof i.getExtension!="function"))try{const e=i.getExtension("WEBGL_lose_context");e&&typeof e.loseContext=="function"&&e.loseContext()}catch(e){console.warn("Unable to release failed WebGL context",e)}}function dx(i){return i?typeof i=="string"?i:i.message?i.message:String(i):"unknown error"}function px(){if(typeof window>"u")return Ms;const i=new URLSearchParams(window.location.search);return(i.get("lighting")||i.get("preset")||"").trim().toLowerCase()||Ms}function mx(){if(typeof window>"u")return qr;const e=(new URLSearchParams(window.location.search).get("tonemap")||"").trim().toLowerCase();return{aces:qr,agx:Cl,cineon:Rl,reinhard:wl,linear:Tl,none:En}[e]??qr}function gx(){if(typeof navigator>"u")return{isSafari:!1,isIOS:!1,isMobile:!1};const i=navigator.userAgent||"",e=navigator.vendor||"",t=/Safari/i.test(i)&&/Apple Computer/i.test(e)&&!/Chrome|Chromium|CriOS|Edg|OPR|FxiOS|Firefox|Android/i.test(i),n=/iPad|iPhone|iPod/.test(i)||navigator.platform==="MacIntel"&&Number(navigator.maxTouchPoints||0)>1,r=/Mobi|Android|iPhone|iPad|iPod/i.test(i);return{isSafari:t,isIOS:n,isMobile:r}}function _x({browser:i,isCompact:e,memoryHint:t}){const r=Number.isFinite(t)?t:i.isMobile?6:12,s=i.isMobile&&r<=3,o=i.isMobile&&!s,a=r<=4,l=r<=8,c=i.isMobile||a?4096:e||l?8192:16384,u=s?Pt.countriesBudget:o?Pt.countriesGoodPhone:Pt.countriesHigh,h=s?Pt.riversBudget:o?Pt.riversGoodPhone:c>=8192?Pt.riversHigh:Pt.riversCompatible,m=s?Pt.lakesBudget:o?Pt.lakesGoodPhone:c>=8192?Pt.lakesHigh:Pt.lakesCompatible;return{textureWidth:c,isMobile:i.isMobile,budgetPhone:s,maxPixelRatio:s?1.5:i.isMobile?2:c>=16384?2.1:2.35,countriesSources:u,statesSources:Pt.statesHigh,deferStates:i.isMobile,riversSources:h,lakesSources:m,borderCountryStepDeg:c>=16384?.34:c>=8192?.55:1.05,borderStateStepDeg:c>=16384?.46:c>=8192?.72:1.3,hydroRiverStepDeg:c>=16384?.44:c>=8192?.66:1.2,hydroLakeStepDeg:c>=16384?.5:c>=8192?.74:1.3,geoTimeoutMs:c>=16384?26e3:22e3,stateTimeoutMs:c>=16384?9e4:65e3,downscaleAtlas:i.isMobile,skipRegionalOverlays:i.isMobile}}function Hu(i,e){const t=Math.max(1024,Number(e)||8192),n=Math.max(1024,Number(i)||4096),r=Math.min(t,n),s=[16384,12288,8192,6144,4096,3072,2048,1024];for(let o=0;o<s.length;o+=1)if(s[o]<=r)return s[o];return 1024}function vx(i){return i>=16384?Pt.heightMapsUltra:i>=8192?Pt.heightMapsHigh:Pt.heightMapsCompatible}function xx(i,e=!1){return e==="budget"?{width:480,height:280,shellWidth:96,shellHeight:64}:e==="good"?{width:768,height:448,shellWidth:128,shellHeight:80}:i>=16384?{width:2688,height:1344,shellWidth:214,shellHeight:148}:i>=8192?{width:2048,height:1180,shellWidth:188,shellHeight:132}:i>=4096?{width:1536,height:896,shellWidth:164,shellHeight:116}:i>=3072?{width:1180,height:720,shellWidth:148,shellHeight:104}:{width:960,height:620,shellWidth:132,shellHeight:94}}function Df(i){if(!i)return{width:0,height:0};const e=Number(i.naturalWidth||i.videoWidth||i.width||0),t=Number(i.naturalHeight||i.videoHeight||i.height||0);return{width:Number.isFinite(e)?e:0,height:Number.isFinite(t)?t:0}}function Mx(i,e,t){var n,r;if(i){if(i.roughness=Ue(t.roughness,.3,1),i.clearcoat=Ue(t.clearcoat,0,.45),i.clearcoatRoughness=Ue(t.clearcoatRoughness,.2,1),i.envMapIntensity=Ue(t.envMapIntensity,0,1.2),"ior"in i&&(i.ior=Ue(t.ior,1,2.333)),"reflectivity"in i&&(i.reflectivity=Ue(t.reflectivity,0,1)),"specularIntensity"in i&&(i.specularIntensity=Ue(t.specularIntensity,0,2)),"sheen"in i&&(i.sheen=Ue(t.sheen,0,1)),"sheenRoughness"in i&&(i.sheenRoughness=Ue(t.sheenRoughness,0,1)),"sheenColor"in i&&(i.sheenColor=new ke(t.sheenColor)),i.normalScale){const u=ns.normalScale*Ue(Number(t.normalStrength)||1,.35,2.5);i.normalScale.set(u,u)}const s=Ue(Number(t.terrainExaggeration)||1,pi,zi),o=Ue(Number(t.normalStrength)||1,.35,2.5),a=(n=i.userData)==null?void 0:n.updateRelief,l=((r=i.userData)==null?void 0:r.reliefState)||{},c=!Number.isFinite(l.terrainExaggeration)||!Number.isFinite(l.normalStrength)||Math.abs(l.terrainExaggeration-s)>1e-4||Math.abs(l.normalStrength-o)>1e-4;typeof a=="function"&&c&&(a(s,o),i.userData.reliefState={terrainExaggeration:s,normalStrength:o}),i.needsUpdate=!0}e&&(e.opacity=Ue(t.shellIntensity,0,.2),e.needsUpdate=!0)}function ct(i,e,t){return i+(e-i)*t}function yt(i){return Number(i).toFixed(2)}function ni(i){return`${Math.round(Number(i))}deg`}function Ei(i){return`${Math.round(Number(i))}K`}function yx(i){return String(i).split("-").map(e=>e.length?e[0].toUpperCase()+e.slice(1):e).join(" ")}function Ai(i,e){const t=Ue(Number(e)||6500,1e3,4e4)/100;let n,r,s;t<=66?(n=255,r=99.4708025861*Math.log(Math.max(1,t))-161.1195681661,t<=19?s=0:s=138.5177312231*Math.log(t-10)-305.0447927307):(n=329.698727446*Math.pow(t-60,-.1332047592),r=288.1221695283*Math.pow(t-60,-.0755148492),s=255),i.setRGB(Ue(n/255,0,1),Ue(r/255,0,1),Ue(s/255,0,1))}function ss(i,e,t){const n=Ue((t-i)/Math.max(1e-6,e-i),0,1);return n*n*(3-2*n)}function Ue(i,e,t){return Math.min(t,Math.max(e,i))}function yn(i){return Ue(i,0,1)}
