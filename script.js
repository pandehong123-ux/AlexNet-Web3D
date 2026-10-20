(()=>{var gi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},_i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fh=0,tc=1,Oh=2;var ec=1,Cs=2,On=3,Zn=0,Ne=1,Xe=2,An=0,Ni=1,Qn=2,nc=3,ic=4,Bh=5,di=100,zh=101,kh=102,Vh=103,Hh=104,Gh=200,Wh=201,Xh=202,$h=203,Ma=204,ba=205,qh=206,Yh=207,Zh=208,jh=209,Jh=210,Kh=211,Qh=212,tu=213,eu=214,qa=0,Ya=1,Za=2,Fi=3,ja=4,Ja=5,Ka=6,Qa=7,to=0,nu=1,iu=2,ti=0,eo=1,no=2,io=3,xi=4,so=5,ro=6,ao=7;var sc=300,Xi=301,$i=302,oo=303,lo=304,Cr=306,Sa=1e3,ui=1001,Ta=1002,Ye=1003,su=1004;var Rr=1005;var wn=1006,co=1007;var vi=1008;var Cn=1009,rc=1010,ac=1011,Rs=1012,ho=1013,yi=1014,Rn=1015,gn=1016,uo=1017,fo=1018,Ps=1020,oc=35902,lc=35899,cc=1021,hc=1022,_n=1023,xs=1026,Is=1027,po=1028,mo=1029,uc=1030,go=1031;var _o=1033,Pr=33776,Ir=33777,Lr=33778,Dr=33779,xo=35840,vo=35841,yo=35842,Mo=35843,bo=36196,So=37492,To=37496,wo=37808,Eo=37809,Ao=37810,Co=37811,Ro=37812,Po=37813,Io=37814,Lo=37815,Do=37816,Uo=37817,No=37818,Fo=37819,Oo=37820,Bo=37821,zo=36492,ko=36494,Vo=36495,Ho=36283,Go=36284,Wo=36285,Xo=36286;var sr=2300,wa=2301,ya=2302,Wl=2400,Xl=2401,$l=2402;var ru=3200,au=3201;var $o=0,ou=1,ei="",we="srgb",Oi="srgb-linear",rr="linear",jt="srgb";var Ui=7680;var ql=519,lu=512,cu=513,hu=514,dc=515,uu=516,du=517,fu=518,pu=519,Yl=35044;var fc="300 es",Tn=2e3,ar=2001;var Dn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rh=1234567,gs=Math.PI/180,vs=180/Math.PI;function Ls(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function Wt(i,t,e){return Math.max(t,Math.min(e,i))}function pc(i,t){return(i%t+t)%t}function Ud(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Nd(i,t,e){return i!==t?(e-i)/(t-i):0}function ir(i,t,e){return(1-e)*i+e*t}function Fd(i,t,e,n){return ir(i,t,1-Math.exp(-e*n))}function Od(i,t=1){return t-Math.abs(pc(i,t*2)-t)}function Bd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function zd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function kd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Vd(i,t){return i+Math.random()*(t-i)}function Hd(i){return i*(.5-Math.random())}function Gd(i){i!==void 0&&(rh=i);let t=rh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Wd(i){return i*gs}function Xd(i){return i*vs}function $d(i){return(i&i-1)===0&&i!==0}function qd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zd(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),f=a((t-n)/2),m=r((n-t)/2),_=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*_,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*_,o*c);break;case"ZYZ":i.set(l*_,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ms(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ge={DEG2RAD:gs,RAD2DEG:vs,generateUUID:Ls,clamp:Wt,euclideanModulo:pc,mapLinear:Ud,inverseLerp:Nd,lerp:ir,damp:Fd,pingpong:Od,smoothstep:Bd,smootherstep:zd,randInt:kd,randFloat:Vd,randFloatSpread:Hd,seededRandom:Gd,degToRad:Wd,radToDeg:Xd,isPowerOfTwo:$d,ceilPowerOfTwo:qd,floorPowerOfTwo:Yd,setQuaternionFromProperEuler:Zd,normalize:Ge,denormalize:ms},mt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},dn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=_,t[e+3]=v;return}if(d!==v||l!==f||c!==m||h!==_){let g=1-o,u=l*f+c*m+h*_+d*v,T=u>=0?1:-1,C=1-u*u;if(C>Number.EPSILON){let E=Math.sqrt(C),R=Math.atan2(E,u*T);g=Math.sin(g*R)/E,o=Math.sin(o*R)/E}let y=o*T;if(l=l*g+f*y,c=c*g+m*y,h=h*g+_*y,d=d*g+v*y,g===1-o){let E=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=E,c*=E,h*=E,d*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],f=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+h*d+l*m-c*f,t[e+1]=l*_+h*f+c*d-o*m,t[e+2]=c*_+h*m+o*f-l*d,t[e+3]=h*_-o*d-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),f=l(n/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d-f*m*_;break;case"YXZ":this._x=f*h*d+c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d+f*m*_;break;case"ZXY":this._x=f*h*d-c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d-f*m*_;break;case"ZYX":this._x=f*h*d-c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d+f*m*_;break;case"YZX":this._x=f*h*d+c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d-f*m*_;break;case"XZY":this._x=f*h*d-c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>d){let m=2*Math.sqrt(1+n-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){let m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ah.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ah.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vl.copy(this).projectOnVector(t),this.sub(vl)}reflect(t){return this.sub(vl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vl=new F,ah=new dn,zt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],m=n[5],_=n[8],v=s[0],g=s[3],u=s[6],T=s[1],C=s[4],y=s[7],E=s[2],R=s[5],b=s[8];return r[0]=a*v+o*T+l*E,r[3]=a*g+o*C+l*R,r[6]=a*u+o*y+l*b,r[1]=c*v+h*T+d*E,r[4]=c*g+h*C+d*R,r[7]=c*u+h*y+d*b,r[2]=f*v+m*T+_*E,r[5]=f*g+m*C+_*R,r[8]=f*u+m*y+_*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,f=o*l-h*r,m=c*r-a*l,_=e*d+n*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return t[0]=d*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=f*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=m*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(yl.makeScale(t,e)),this}rotate(t){return this.premultiply(yl.makeRotation(-t)),this}translate(t,e){return this.premultiply(yl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},yl=new zt;function mc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mu(){let i=or("canvas");return i.style.display="block",i}var oh={};function ys(i){i in oh||(oh[i]=!0,console.warn(i))}function gu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var lh=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ch=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jd(){let i={enabled:!0,workingColorSpace:Oi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===jt&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===jt&&(s.r=_s(s.r),s.g=_s(s.g),s.b=_s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ei?rr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ys("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ys("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Oi]:{primaries:t,whitePoint:n,transfer:rr,toXYZ:lh,fromXYZ:ch,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:we},outputColorSpaceConfig:{drawingBufferColorSpace:we}},[we]:{primaries:t,whitePoint:n,transfer:jt,toXYZ:lh,fromXYZ:ch,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:we}}}),i}var qt=jd();function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ns,Ea=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ns===void 0&&(ns=or("canvas")),ns.width=t.width,ns.height=t.height;let s=ns.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ns}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=or("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Yn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yn(e[n]/255)*255):e[n]=Yn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Jd=0,Ms=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Ls(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ml(s[a].image)):r.push(Ml(s[a]))}else r=Ml(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ml(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ea.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Kd=0,bl=new F,We=class i extends Dn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ui,s=ui,r=wn,a=vi,o=_n,l=Cn,c=i.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Ls(),this.name="",this.source=new Ms(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(bl).x}get height(){return this.source.getSize(bl).y}get depth(){return this.source.getSize(bl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sa:t.x=t.x-Math.floor(t.x);break;case ui:t.x=t.x<0?0:1;break;case Ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sa:t.y=t.y-Math.floor(t.y);break;case ui:t.y=t.y<0?0:1;break;case Ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=sc;We.DEFAULT_ANISOTROPY=1;var ee=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],_=l[9],v=l[2],g=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+g)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(c+1)/2,y=(m+1)/2,E=(u+1)/2,R=(h+f)/4,b=(d+v)/4,P=(_+g)/4;return C>y&&C>E?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=R/n,r=b/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=R/s,r=P/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=b/r,s=P/r),this.set(n,s,r,e),this}let T=Math.sqrt((g-_)*(g-_)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(g-_)/T,this.y=(d-v)/T,this.z=(f-h)/T,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Aa=class extends Dn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new We(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ms(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ze=class extends Aa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},lr=class extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ca=class extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fn=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Mn):Mn.fromBufferAttribute(r,a),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox)),Yr.applyMatrix4(t.matrixWorld),this.union(Yr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zs),Zr.subVectors(this.max,Zs),is.subVectors(t.a,Zs),ss.subVectors(t.b,Zs),rs.subVectors(t.c,Zs),ri.subVectors(ss,is),ai.subVectors(rs,ss),Pi.subVectors(is,rs);let e=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-Pi.z,Pi.y,ri.z,0,-ri.x,ai.z,0,-ai.x,Pi.z,0,-Pi.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-Pi.y,Pi.x,0];return!Sl(e,is,ss,rs,Zr)||(e=[1,0,0,0,1,0,0,0,1],!Sl(e,is,ss,rs,Zr))?!1:(jr.crossVectors(ri,ai),e=[jr.x,jr.y,jr.z],Sl(e,is,ss,rs,Zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Hn=[new F,new F,new F,new F,new F,new F,new F,new F],Mn=new F,Yr=new fn,is=new F,ss=new F,rs=new F,ri=new F,ai=new F,Pi=new F,Zs=new F,Zr=new F,jr=new F,Ii=new F;function Sl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ii.fromArray(i,r);let o=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),l=t.dot(Ii),c=e.dot(Ii),h=n.dot(Ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Qd=new fn,js=new F,Tl=new F,Un=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Qd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;js.subVectors(t,this.center);let e=js.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(js,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Tl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(js.copy(t.center).add(Tl)),this.expandByPoint(js.copy(t.center).sub(Tl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Gn=new F,wl=new F,Jr=new F,oi=new F,El=new F,Kr=new F,Al=new F,jn=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){wl.copy(t).add(e).multiplyScalar(.5),Jr.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(wl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Jr),o=oi.dot(this.direction),l=-oi.dot(Jr),c=oi.lengthSq(),h=Math.abs(1-a*a),d,f,m,_;if(h>0)if(d=a*l-o,f=a*o-l,_=r*h,d>=0)if(f>=-_)if(f<=_){let v=1/h;d*=v,f*=v,m=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(wl).addScaledVector(Jr,f),m}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);let n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,s,r){El.subVectors(e,t),Kr.subVectors(n,t),Al.crossVectors(El,Kr);let a=this.direction.dot(Al),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,t);let l=o*this.direction.dot(Kr.crossVectors(oi,Kr));if(l<0)return null;let c=o*this.direction.dot(El.cross(oi));if(c<0||l+c>a)return null;let h=-o*oi.dot(Al);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kt=class i{constructor(t,e,n,s,r,a,o,l,c,h,d,f,m,_,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,f,m,_,v,g)}set(t,e,n,s,r,a,o,l,c,h,d,f,m,_,v,g){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=_,u[11]=v,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/as.setFromMatrixColumn(t,0).length(),r=1/as.setFromMatrixColumn(t,1).length(),a=1/as.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=a*h,m=a*d,_=o*h,v=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+_*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,m=l*d,_=c*h,v=c*d;e[0]=f+v*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=m*o-_,e[6]=v+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,m=l*d,_=c*h,v=c*d;e[0]=f-v*o,e[4]=-a*d,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*h,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,m=a*d,_=o*h,v=o*d;e[0]=l*h,e[4]=_*c-m,e[8]=f*c+v,e[1]=l*d,e[5]=v*c+f,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,m=a*c,_=o*l,v=o*c;e[0]=l*h,e[4]=v-f*d,e[8]=_*d+m,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*d+_,e[10]=f-v*d}else if(t.order==="XZY"){let f=a*l,m=a*c,_=o*l,v=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+v,e[5]=a*h,e[9]=m*d-_,e[2]=_*d-m,e[6]=o*h,e[10]=v*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tf,t,ef)}lookAt(t,e,n){let s=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),li.crossVectors(n,Qe),li.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),li.crossVectors(n,Qe)),li.normalize(),Qr.crossVectors(Qe,li),s[0]=li.x,s[4]=Qr.x,s[8]=Qe.x,s[1]=li.y,s[5]=Qr.y,s[9]=Qe.y,s[2]=li.z,s[6]=Qr.z,s[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],m=n[13],_=n[2],v=n[6],g=n[10],u=n[14],T=n[3],C=n[7],y=n[11],E=n[15],R=s[0],b=s[4],P=s[8],M=s[12],S=s[1],U=s[5],O=s[9],W=s[13],H=s[2],q=s[6],G=s[10],nt=s[14],Y=s[3],at=s[7],ut=s[11],wt=s[15];return r[0]=a*R+o*S+l*H+c*Y,r[4]=a*b+o*U+l*q+c*at,r[8]=a*P+o*O+l*G+c*ut,r[12]=a*M+o*W+l*nt+c*wt,r[1]=h*R+d*S+f*H+m*Y,r[5]=h*b+d*U+f*q+m*at,r[9]=h*P+d*O+f*G+m*ut,r[13]=h*M+d*W+f*nt+m*wt,r[2]=_*R+v*S+g*H+u*Y,r[6]=_*b+v*U+g*q+u*at,r[10]=_*P+v*O+g*G+u*ut,r[14]=_*M+v*W+g*nt+u*wt,r[3]=T*R+C*S+y*H+E*Y,r[7]=T*b+C*U+y*q+E*at,r[11]=T*P+C*O+y*G+E*ut,r[15]=T*M+C*W+y*nt+E*wt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],m=t[14],_=t[3],v=t[7],g=t[11],u=t[15];return _*(+r*l*d-s*c*d-r*o*f+n*c*f+s*o*m-n*l*m)+v*(+e*l*m-e*c*f+r*a*f-s*a*m+s*c*h-r*l*h)+g*(+e*c*d-e*o*m-r*a*d+n*a*m+r*o*h-n*c*h)+u*(-s*o*h-e*l*d+e*o*f+s*a*d-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],m=t[11],_=t[12],v=t[13],g=t[14],u=t[15],T=d*g*c-v*f*c+v*l*m-o*g*m-d*l*u+o*f*u,C=_*f*c-h*g*c-_*l*m+a*g*m+h*l*u-a*f*u,y=h*v*c-_*d*c+_*o*m-a*v*m-h*o*u+a*d*u,E=_*d*l-h*v*l-_*o*f+a*v*f+h*o*g-a*d*g,R=e*T+n*C+s*y+r*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/R;return t[0]=T*b,t[1]=(v*f*r-d*g*r-v*s*m+n*g*m+d*s*u-n*f*u)*b,t[2]=(o*g*r-v*l*r+v*s*c-n*g*c-o*s*u+n*l*u)*b,t[3]=(d*l*r-o*f*r-d*s*c+n*f*c+o*s*m-n*l*m)*b,t[4]=C*b,t[5]=(h*g*r-_*f*r+_*s*m-e*g*m-h*s*u+e*f*u)*b,t[6]=(_*l*r-a*g*r-_*s*c+e*g*c+a*s*u-e*l*u)*b,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*m+e*l*m)*b,t[8]=y*b,t[9]=(_*d*r-h*v*r-_*n*m+e*v*m+h*n*u-e*d*u)*b,t[10]=(a*v*r-_*o*r+_*n*c-e*v*c-a*n*u+e*o*u)*b,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*m-e*o*m)*b,t[12]=E*b,t[13]=(h*v*s-_*d*s+_*n*f-e*v*f-h*n*g+e*d*g)*b,t[14]=(_*o*s-a*v*s-_*n*l+e*v*l+a*n*g-e*o*g)*b,t[15]=(a*d*s-h*o*s+h*n*l-e*d*l-a*n*f+e*o*f)*b,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,f=r*c,m=r*h,_=r*d,v=a*h,g=a*d,u=o*d,T=l*c,C=l*h,y=l*d,E=n.x,R=n.y,b=n.z;return s[0]=(1-(v+u))*E,s[1]=(m+y)*E,s[2]=(_-C)*E,s[3]=0,s[4]=(m-y)*R,s[5]=(1-(f+u))*R,s[6]=(g+T)*R,s[7]=0,s[8]=(_+C)*b,s[9]=(g-T)*b,s[10]=(1-(f+v))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=as.set(s[0],s[1],s[2]).length(),a=as.set(s[4],s[5],s[6]).length(),o=as.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],bn.copy(this);let c=1/r,h=1/a,d=1/o;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=d,bn.elements[9]*=d,bn.elements[10]*=d,e.setFromRotationMatrix(bn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Tn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),f=(e+t)/(e-t),m=(n+s)/(n-s),_,v;if(l)_=r/(a-r),v=a*r/(a-r);else if(o===Tn)_=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ar)_=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Tn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),f=-(e+t)/(e-t),m=-(n+s)/(n-s),_,v;if(l)_=1/(a-r),v=a/(a-r);else if(o===Tn)_=-2/(a-r),v=-(a+r)/(a-r);else if(o===ar)_=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},as=new F,bn=new Kt,tf=new F(0,0,0),ef=new F(1,1,1),li=new F,Qr=new F,Qe=new F,hh=new Kt,uh=new dn,pn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uh.setFromEuler(this),this.setFromQuaternion(uh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pn.DEFAULT_ORDER="XYZ";var bs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},nf=0,dh=new F,os=new dn,Wn=new Kt,ta=new F,Js=new F,sf=new F,rf=new dn,fh=new F(1,0,0),ph=new F(0,1,0),mh=new F(0,0,1),gh={type:"added"},af={type:"removed"},ls={type:"childadded",child:null},Cl={type:"childremoved",child:null},be=class i extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new pn,n=new dn,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Kt},normalMatrix:{value:new zt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(fh,t)}rotateY(t){return this.rotateOnAxis(ph,t)}rotateZ(t){return this.rotateOnAxis(mh,t)}translateOnAxis(t,e){return dh.copy(t).applyQuaternion(this.quaternion),this.position.add(dh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fh,t)}translateY(t){return this.translateOnAxis(ph,t)}translateZ(t){return this.translateOnAxis(mh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ta.copy(t):ta.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Js,ta,this.up):Wn.lookAt(ta,Js,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),os.setFromRotationMatrix(Wn),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gh),ls.child=t,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(af),Cl.child=t,this.dispatchEvent(Cl),Cl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gh),ls.child=t,this.dispatchEvent(ls),ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,t,sf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,rf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};be.DEFAULT_UP=new F(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Sn=new F,Xn=new F,Rl=new F,$n=new F,cs=new F,hs=new F,_h=new F,Pl=new F,Il=new F,Ll=new F,Dl=new ee,Ul=new ee,Nl=new ee,qn=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Sn.subVectors(t,e),s.cross(Sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Sn.subVectors(s,e),Xn.subVectors(n,e),Rl.subVectors(t,e);let a=Sn.dot(Sn),o=Sn.dot(Xn),l=Sn.dot(Rl),c=Xn.dot(Xn),h=Xn.dot(Rl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,m=(c*l-o*h)*f,_=(a*h-o*l)*f;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(a,$n.y),l.addScaledVector(o,$n.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Dl.setScalar(0),Ul.setScalar(0),Nl.setScalar(0),Dl.fromBufferAttribute(t,e),Ul.fromBufferAttribute(t,n),Nl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Dl,r.x),a.addScaledVector(Ul,r.y),a.addScaledVector(Nl,r.z),a}static isFrontFacing(t,e,n,s){return Sn.subVectors(n,e),Xn.subVectors(t,e),Sn.cross(Xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),Sn.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;cs.subVectors(s,n),hs.subVectors(r,n),Pl.subVectors(t,n);let l=cs.dot(Pl),c=hs.dot(Pl);if(l<=0&&c<=0)return e.copy(n);Il.subVectors(t,s);let h=cs.dot(Il),d=hs.dot(Il);if(h>=0&&d<=h)return e.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(cs,a);Ll.subVectors(t,r);let m=cs.dot(Ll),_=hs.dot(Ll);if(_>=0&&m<=_)return e.copy(r);let v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(hs,o);let g=h*_-m*d;if(g<=0&&d-h>=0&&m-_>=0)return _h.subVectors(r,s),o=(d-h)/(d-h+(m-_)),e.copy(s).addScaledVector(_h,o);let u=1/(g+v+f);return a=v*u,o=f*u,e.copy(n).addScaledVector(cs,a).addScaledVector(hs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},_u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},ea={h:0,s:0,l:0};function Fl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var At=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=pc(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Fl(a,r,t+1/3),this.g=Fl(a,r,t),this.b=Fl(a,r,t-1/3)}return qt.colorSpaceToWorking(this,s),this}setStyle(t,e=we){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){let n=_u[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yn(t.r),this.g=Yn(t.g),this.b=Yn(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return qt.workingToColorSpace(Be.copy(this),t),Math.round(Wt(Be.r*255,0,255))*65536+Math.round(Wt(Be.g*255,0,255))*256+Math.round(Wt(Be.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(Be.copy(this),e);let n=Be.r,s=Be.g,r=Be.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=we){qt.workingToColorSpace(Be.copy(this),t);let e=Be.r,n=Be.g,s=Be.b;return t!==we?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(ea);let n=ir(ci.h,ea.h,e),s=ir(ci.s,ea.s,e),r=ir(ci.l,ea.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Be=new At;At.NAMES=_u;var of=0,mn=class extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=Ls(),this.name="",this.type="Material",this.blending=Ni,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ma,this.blendDst=ba,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ma&&(n.blendSrc=this.blendSrc),this.blendDst!==ba&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ql&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ke=class extends mn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=to,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Me=new F,na=new mt,lf=0,Ae=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Yl,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)na.fromBufferAttribute(this,e),na.applyMatrix3(t),this.setXY(e,na.x,na.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ms(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yl&&(t.usage=this.usage),t}};var cr=class extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var hr=class extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ne=class extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},cf=0,hn=new Kt,Ol=new be,us=new F,tn=new fn,Ks=new fn,Le=new F,fe=class i extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mc(t)?hr:cr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return Ol.lookAt(t),Ol.updateMatrix(),this.applyMatrix4(Ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ne(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors(tn.min,Ks.min),tn.expandByPoint(Le),Le.addVectors(tn.max,Ks.max),tn.expandByPoint(Le)):(tn.expandByPoint(Ks.min),tn.expandByPoint(Ks.max))}tn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Le.fromBufferAttribute(o,c),l&&(us.fromBufferAttribute(t,c),Le.add(us)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ae(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new F,l[P]=new F;let c=new F,h=new F,d=new F,f=new mt,m=new mt,_=new mt,v=new F,g=new F;function u(P,M,S){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,S),f.fromBufferAttribute(r,P),m.fromBufferAttribute(r,M),_.fromBufferAttribute(r,S),h.sub(c),d.sub(c),m.sub(f),_.sub(f);let U=1/(m.x*_.y-_.x*m.y);isFinite(U)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(U),g.copy(d).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(U),o[P].add(v),o[M].add(v),o[S].add(v),l[P].add(g),l[M].add(g),l[S].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let P=0,M=T.length;P<M;++P){let S=T[P],U=S.start,O=S.count;for(let W=U,H=U+O;W<H;W+=3)u(t.getX(W+0),t.getX(W+1),t.getX(W+2))}let C=new F,y=new F,E=new F,R=new F;function b(P){E.fromBufferAttribute(s,P),R.copy(E);let M=o[P];C.copy(M),C.sub(E.multiplyScalar(E.dot(M))).normalize(),y.crossVectors(R,M);let U=y.dot(l[P])<0?-1:1;a.setXYZW(P,C.x,C.y,C.z,U)}for(let P=0,M=T.length;P<M;++P){let S=T[P],U=S.start,O=S.count;for(let W=U,H=U+O;W<H;W+=3)b(t.getX(W+0)),b(t.getX(W+1)),b(t.getX(W+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,d=new F;if(t)for(let f=0,m=t.count;f<m;f+=3){let _=t.getX(f+0),v=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),m=0,_=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*h;for(let u=0;u<h;u++)f[_++]=c[m++]}return new Ae(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],m=t(f,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},xh=new Kt,Li=new jn,ia=new Un,vh=new F,sa=new F,ra=new F,aa=new F,Bl=new F,oa=new F,yh=new F,la=new F,Gt=class extends be{constructor(t=new fe,e=new ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){oa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Bl.fromBufferAttribute(d,t),a?oa.addScaledVector(Bl,h):oa.addScaledVector(Bl.sub(e),h))}e.add(oa)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(r),Li.copy(t.ray).recast(t.near),!(ia.containsPoint(Li.origin)===!1&&(Li.intersectSphere(ia,vh)===null||Li.origin.distanceToSquared(vh)>(t.far-t.near)**2))&&(xh.copy(r).invert(),Li.copy(t.ray).applyMatrix4(xh),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){let g=f[_],u=a[g.materialIndex],T=Math.max(g.start,m.start),C=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let y=T,E=C;y<E;y+=3){let R=o.getX(y),b=o.getX(y+1),P=o.getX(y+2);s=ca(this,u,t,n,c,h,d,R,b,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let g=_,u=v;g<u;g+=3){let T=o.getX(g),C=o.getX(g+1),y=o.getX(g+2);s=ca(this,a,t,n,c,h,d,T,C,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){let g=f[_],u=a[g.materialIndex],T=Math.max(g.start,m.start),C=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let y=T,E=C;y<E;y+=3){let R=y,b=y+1,P=y+2;s=ca(this,u,t,n,c,h,d,R,b,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let g=_,u=v;g<u;g+=3){let T=g,C=g+1,y=g+2;s=ca(this,a,t,n,c,h,d,T,C,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function hf(i,t,e,n,s,r,a,o){let l;if(t.side===Ne?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Zn,o),l===null)return null;la.copy(o),la.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(la);return c<e.near||c>e.far?null:{distance:c,point:la.clone(),object:i}}function ca(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,sa),i.getVertexPosition(l,ra),i.getVertexPosition(c,aa);let h=hf(i,t,e,n,sa,ra,aa,yh);if(h){let d=new F;qn.getBarycoord(yh,sa,ra,aa,d),s&&(h.uv=qn.getInterpolatedAttribute(s,o,l,c,d,new mt)),r&&(h.uv1=qn.getInterpolatedAttribute(r,o,l,c,d,new mt)),a&&(h.normal=qn.getInterpolatedAttribute(a,o,l,c,d,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new F,materialIndex:0};qn.getNormal(sa,ra,aa,f.normal),h.face=f,h.barycoord=d}return h}var Ue=class i extends fe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],f=0,m=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(d,2));function _(v,g,u,T,C,y,E,R,b,P,M){let S=y/b,U=E/P,O=y/2,W=E/2,H=R/2,q=b+1,G=P+1,nt=0,Y=0,at=new F;for(let ut=0;ut<G;ut++){let wt=ut*U-W;for(let Nt=0;Nt<q;Nt++){let ie=Nt*S-O;at[v]=ie*T,at[g]=wt*C,at[u]=H,c.push(at.x,at.y,at.z),at[v]=0,at[g]=0,at[u]=R>0?1:-1,h.push(at.x,at.y,at.z),d.push(Nt/b),d.push(1-ut/P),nt+=1}}for(let ut=0;ut<P;ut++)for(let wt=0;wt<b;wt++){let Nt=f+wt+q*ut,ie=f+wt+q*(ut+1),se=f+(wt+1)+q*(ut+1),Ht=f+(wt+1)+q*ut;l.push(Nt,ie,Ht),l.push(ie,se,Ht),Y+=6}o.addGroup(m,Y,M),m+=Y,f+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function qi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ve(i){let t={};for(let e=0;e<i.length;e++){let n=qi(i[e]);for(let s in n)t[s]=n[s]}return t}function uf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function gc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}var ni={clone:qi,merge:Ve},df=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ff=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Se=class extends mn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=df,this.fragmentShader=ff,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qi(t.uniforms),this.uniformsGroups=uf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ur=class extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},hi=new F,Mh=new mt,bh=new mt,Ee=class extends ur{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=vs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hi.x,hi.y).multiplyScalar(-t/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-t/hi.z)}getViewSize(t,e){return this.getViewBounds(t,Mh,bh),e.subVectors(bh,Mh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(gs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ds=-90,fs=1,Ra=class extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ee(ds,fs,t,e);s.layers=this.layers,this.add(s);let r=new Ee(ds,fs,t,e);r.layers=this.layers,this.add(r);let a=new Ee(ds,fs,t,e);a.layers=this.layers,this.add(a);let o=new Ee(ds,fs,t,e);o.layers=this.layers,this.add(o);let l=new Ee(ds,fs,t,e);l.layers=this.layers,this.add(l);let c=new Ee(ds,fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},dr=class extends We{constructor(t=[],e=Xi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Pa=class extends ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new dr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ue(5,5,5),r=new Se({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:An});r.uniforms.tEquirect.value=e;let a=new Gt(s,r),o=e.minFilter;return e.minFilter===vi&&(e.minFilter=wn),new Ra(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},De=class extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}},pf={type:"move"},Ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),u=this._getHandJoint(c,v);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new De;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},fr=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new At(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Jn=class extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ia=class extends We{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ye,h=Ye,d,f){super(null,a,o,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pr=class extends Ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ps=new Kt,Sh=new Kt,ha=[],Th=new fn,mf=new Kt,Qs=new Gt,tr=new Un,Bi=class extends Gt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new pr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,mf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new fn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),Th.copy(t.boundingBox).applyMatrix4(ps),this.boundingBox.union(Th)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),tr.copy(t.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(tr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Qs.geometry=this.geometry,Qs.material=this.material,Qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(n),t.ray.intersectsSphere(tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ps),Sh.multiplyMatrices(n,ps),Qs.matrixWorld=Sh,Qs.raycast(t,ha);for(let a=0,o=ha.length;a<o;a++){let l=ha[a];l.instanceId=r,l.object=this,e.push(l)}ha.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new pr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ia(new Float32Array(s*this.count),s,this.count,po,Rn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},zl=new F,gf=new F,_f=new zt,un=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=zl.subVectors(n,e).cross(gf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(zl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||_f.getNormalMatrix(t),s=this.coplanarPoint(zl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Di=new Un,xf=new mt(.5,.5),ua=new F,Ts=class{constructor(t=new un,e=new un,n=new un,s=new un,r=new un,a=new un){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Tn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],m=r[7],_=r[8],v=r[9],g=r[10],u=r[11],T=r[12],C=r[13],y=r[14],E=r[15];if(s[0].setComponents(c-a,m-h,u-_,E-T).normalize(),s[1].setComponents(c+a,m+h,u+_,E+T).normalize(),s[2].setComponents(c+o,m+d,u+v,E+C).normalize(),s[3].setComponents(c-o,m-d,u-v,E-C).normalize(),n)s[4].setComponents(l,f,g,y).normalize(),s[5].setComponents(c-l,m-f,u-g,E-y).normalize();else if(s[4].setComponents(c-l,m-f,u-g,E-y).normalize(),e===Tn)s[5].setComponents(c+l,m+f,u+g,E+y).normalize();else if(e===ar)s[5].setComponents(l,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){Di.center.set(0,0,0);let e=xf.distanceTo(t.center);return Di.radius=.7071067811865476+e,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ua.x=s.normal.x>0?t.max.x:t.min.x,ua.y=s.normal.y>0?t.max.y:t.min.y,ua.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ua)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ze=class extends mn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},La=new F,Da=new F,wh=new Kt,er=new jn,da=new Un,kl=new F,Eh=new F,fi=class extends be{constructor(t=new fe,e=new Ze){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)La.fromBufferAttribute(e,s-1),Da.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=La.distanceTo(Da);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(s),da.radius+=r,t.ray.intersectsSphere(da)===!1)return;wh.copy(s).invert(),er.copy(t.ray).applyMatrix4(wh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let m=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let v=m,g=_-1;v<g;v+=c){let u=h.getX(v),T=h.getX(v+1),C=fa(this,t,er,l,u,T,v);C&&e.push(C)}if(this.isLineLoop){let v=h.getX(_-1),g=h.getX(m),u=fa(this,t,er,l,v,g,_-1);u&&e.push(u)}}else{let m=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let v=m,g=_-1;v<g;v+=c){let u=fa(this,t,er,l,v,v+1,v);u&&e.push(u)}if(this.isLineLoop){let v=fa(this,t,er,l,_-1,m,_-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function fa(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(La.fromBufferAttribute(o,s),Da.fromBufferAttribute(o,r),e.distanceSqToSegment(La,Da,kl,Eh)>n)return;kl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(kl);if(!(c<t.near||c>t.far))return{distance:c,point:Eh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Ah=new F,Ch=new F,En=class extends fi{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Ah.fromBufferAttribute(e,s),Ch.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ah.distanceTo(Ch);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ws=class extends mn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Rh=new Kt,Zl=new jn,pa=new Un,ma=new F,mr=class extends be{constructor(t=new fe,e=new ws){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(s),pa.radius+=r,t.ray.intersectsSphere(pa)===!1)return;Rh.copy(s).invert(),Zl.copy(t.ray).applyMatrix4(Rh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=f,v=m;_<v;_++){let g=c.getX(_);ma.fromBufferAttribute(d,g),Ph(ma,g,l,s,t,e,this)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=f,v=m;_<v;_++)ma.fromBufferAttribute(d,_),Ph(ma,_,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ph(i,t,e,n,s,r,a){let o=Zl.distanceSqToPoint(i);if(o<e){let l=new F;Zl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var gr=class extends We{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},_r=class extends We{constructor(t,e,n=yi,s,r,a,o=Ye,l=Ye,c,h=xs,d=1){if(h!==xs&&h!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ms(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},xr=class extends We{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var vr=class i extends fe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],m=[],_=0,v=[],g=n/2,u=0;T(),a===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new ne(d,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(m,2));function T(){let y=new F,E=new F,R=0,b=(e-t)/n;for(let P=0;P<=r;P++){let M=[],S=P/r,U=S*(e-t)+t;for(let O=0;O<=s;O++){let W=O/s,H=W*l+o,q=Math.sin(H),G=Math.cos(H);E.x=U*q,E.y=-S*n+g,E.z=U*G,d.push(E.x,E.y,E.z),y.set(q,b,G).normalize(),f.push(y.x,y.y,y.z),m.push(W,1-S),M.push(_++)}v.push(M)}for(let P=0;P<s;P++)for(let M=0;M<r;M++){let S=v[M][P],U=v[M+1][P],O=v[M+1][P+1],W=v[M][P+1];(t>0||M!==0)&&(h.push(S,U,W),R+=3),(e>0||M!==r-1)&&(h.push(U,O,W),R+=3)}c.addGroup(u,R,0),u+=R}function C(y){let E=_,R=new mt,b=new F,P=0,M=y===!0?t:e,S=y===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,g*S,0),f.push(0,S,0),m.push(.5,.5),_++;let U=_;for(let O=0;O<=s;O++){let H=O/s*l+o,q=Math.cos(H),G=Math.sin(H);b.x=M*G,b.y=g*S,b.z=M*q,d.push(b.x,b.y,b.z),f.push(0,S,0),R.x=q*.5+.5,R.y=G*.5*S+.5,m.push(R.x,R.y),_++}for(let O=0;O<s;O++){let W=E+O,H=U+O;y===!0?h.push(H,H+1,W):h.push(H+1,H,W),P+=3}c.addGroup(u,P,y===!0?1:2),u+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ga=new F,_a=new F,Vl=new F,xa=new qn,zi=class extends fe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(gs*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),f={},m=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);let{a:v,b:g,c:u}=xa;if(v.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),u.fromBufferAttribute(o,c[2]),xa.getNormal(Vl),d[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(u.x*s)},${Math.round(u.y*s)},${Math.round(u.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let T=0;T<3;T++){let C=(T+1)%3,y=d[T],E=d[C],R=xa[h[T]],b=xa[h[C]],P=`${y}_${E}`,M=`${E}_${y}`;M in f&&f[M]?(Vl.dot(f[M].normal)<=r&&(m.push(R.x,R.y,R.z),m.push(b.x,b.y,b.z)),f[M]=null):P in f||(f[P]={index0:c[T],index1:c[C],normal:Vl.clone()})}}for(let _ in f)if(f[_]){let{index0:v,index1:g}=f[_];ga.fromBufferAttribute(o,v),_a.fromBufferAttribute(o,g),m.push(ga.x,ga.y,ga.z),m.push(_a.x,_a.y,_a.z)}this.setAttribute("position",new ne(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var en=class i extends fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,f=e/l,m=[],_=[],v=[],g=[];for(let u=0;u<h;u++){let T=u*f-a;for(let C=0;C<c;C++){let y=C*d-r;_.push(y,-T,0),v.push(0,0,1),g.push(C/o),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let T=0;T<o;T++){let C=T+c*u,y=T+c*(u+1),E=T+1+c*(u+1),R=T+1+c*u;m.push(C,y,R),m.push(y,E,R)}this.setIndex(m),this.setAttribute("position",new ne(_,3)),this.setAttribute("normal",new ne(v,3)),this.setAttribute("uv",new ne(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var ki=class i extends fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new F,f=new F,m=[],_=[],v=[],g=[];for(let u=0;u<=n;u++){let T=[],C=u/n,y=0;u===0&&a===0?y=.5/e:u===n&&l===Math.PI&&(y=-.5/e);for(let E=0;E<=e;E++){let R=E/e;d.x=-t*Math.cos(s+R*r)*Math.sin(a+C*o),d.y=t*Math.cos(a+C*o),d.z=t*Math.sin(s+R*r)*Math.sin(a+C*o),_.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),g.push(R+y,1-C),T.push(c++)}h.push(T)}for(let u=0;u<n;u++)for(let T=0;T<e;T++){let C=h[u][T+1],y=h[u][T],E=h[u+1][T],R=h[u+1][T+1];(u!==0||a>0)&&m.push(C,y,R),(u!==n-1||l<Math.PI)&&m.push(y,E,R)}this.setIndex(m),this.setAttribute("position",new ne(_,3)),this.setAttribute("normal",new ne(v,3)),this.setAttribute("uv",new ne(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Nn=class i extends fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new F,d=new F,f=new F;for(let m=0;m<=n;m++)for(let _=0;_<=s;_++){let v=_/s*r,g=m/n*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(v),d.y=(t+e*Math.cos(g))*Math.sin(v),d.z=e*Math.sin(g),o.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(_/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=s;_++){let v=(s+1)*m+_-1,g=(s+1)*(m-1)+_-1,u=(s+1)*(m-1)+_,T=(s+1)*m+_;a.push(v,g,T),a.push(g,u,T)}this.setIndex(a),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var yr=class extends mn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new At(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}},Mr=class extends Se{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Fn=class extends mn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$o,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var br=class extends mn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$o,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=to,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ua=class extends mn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ru,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Na=class extends mn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function va(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function vf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Vi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fa=class extends Vi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wl,endingEnd:Wl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xl:r=t,o=2*e-n;break;case $l:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xl:a=t,l=2*n-e;break;case $l:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,_=(n-e)/(s-e),v=_*_,g=v*_,u=-f*g+2*f*v-f*_,T=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*_+1,C=(-1-m)*g+(1.5+m)*v+.5*_,y=m*g-m*v;for(let E=0;E!==o;++E)r[E]=u*a[h+E]+T*a[c+E]+C*a[l+E]+y*a[d+E];return r}},Oa=class extends Vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*h;return r}},Ba=class extends Vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},nn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=va(e,this.TimeBufferType),this.values=va(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:va(t.times,Array),values:va(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ba(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Oa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fa(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case sr:e=this.InterpolantFactoryMethodDiscrete;break;case wa:e=this.InterpolantFactoryMethodLinear;break;case ya:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sr;case this.InterpolantFactoryMethodLinear:return wa;case this.InterpolantFactoryMethodSmooth:return ya}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&vf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ya,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,f=d-n,m=d+n;for(let _=0;_!==n;++_){let v=e[d+_];if(v!==e[f+_]||v!==e[m+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,f=a*n;for(let m=0;m!==n;++m)e[f+m]=e[d+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};nn.prototype.ValueTypeName="";nn.prototype.TimeBufferType=Float32Array;nn.prototype.ValueBufferType=Float32Array;nn.prototype.DefaultInterpolation=wa;var pi=class extends nn{constructor(t,e,n){super(t,e,n)}};pi.prototype.ValueTypeName="bool";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=sr;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var za=class extends nn{constructor(t,e,n,s){super(t,e,n,s)}};za.prototype.ValueTypeName="color";var ka=class extends nn{constructor(t,e,n,s){super(t,e,n,s)}};ka.prototype.ValueTypeName="number";var Va=class extends Vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)dn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Sr=class extends nn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Va(this.times,this.values,this.getValueSize(),t)}};Sr.prototype.ValueTypeName="quaternion";Sr.prototype.InterpolantFactoryMethodSmooth=void 0;var mi=class extends nn{constructor(t,e,n){super(t,e,n)}};mi.prototype.ValueTypeName="string";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=sr;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends nn{constructor(t,e,n,s){super(t,e,n,s)}};Ha.prototype.ValueTypeName="vector";var Ga=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let m=c[d],_=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},xu=new Ga,Wa=class{constructor(t){this.manager=t!==void 0?t:xu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Wa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Es=class extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Hi=class extends Es{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Hl=new Kt,Ih=new F,Lh=new F,Xa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ts,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ih.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ih),Lh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lh),e.updateMatrixWorld(),Hl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Dh=new Kt,nr=new F,Gl=new F,jl=class extends Xa{constructor(){super(new Ee(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new mt(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),nr.setFromMatrixPosition(t.matrixWorld),n.position.copy(nr),Gl.copy(n.position),Gl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Gl),n.updateMatrixWorld(),s.makeTranslation(-nr.x,-nr.y,-nr.z),Dh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dh,n.coordinateSystem,n.reversedDepth)}},Tr=class extends Es{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new jl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Gi=class extends ur{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Jl=class extends Xa{constructor(){super(new Gi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Kn=class extends Es{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Jl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var $a=class extends Ee{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},wr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var _c="\\[\\]\\.:\\/",yf=new RegExp("["+_c+"]","g"),xc="[^"+_c+"]",Mf="[^"+_c.replace("\\.","")+"]",bf=/((?:WC+[\/:])*)/.source.replace("WC",xc),Sf=/(WCOD+)?/.source.replace("WCOD",Mf),Tf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xc),wf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xc),Ef=new RegExp("^"+bf+Sf+Tf+wf+"$"),Af=["material","materials","bones","map"],Kl=class{constructor(t,e,n){let s=n||de.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},de=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(yf,"")}static parseTrackName(t){let e=Ef.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Af.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};de.Composite=Kl;de.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};de.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};de.prototype.GetterByBindingType=[de.prototype._getValue_direct,de.prototype._getValue_array,de.prototype._getValue_arrayElement,de.prototype._getValue_toArray];de.prototype.SetterByBindingTypeAndVersioning=[[de.prototype._setValue_direct,de.prototype._setValue_direct_setNeedsUpdate,de.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[de.prototype._setValue_array,de.prototype._setValue_array_setNeedsUpdate,de.prototype._setValue_array_setMatrixWorldNeedsUpdate],[de.prototype._setValue_arrayElement,de.prototype._setValue_arrayElement_setNeedsUpdate,de.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[de.prototype._setValue_fromArray,de.prototype._setValue_fromArray_setNeedsUpdate,de.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var L_=new Float32Array(1);var Uh=new Kt,Wi=class{constructor(t,e,n=0,s=1/0){this.ray=new jn(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new bs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Uh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uh),this}intersectObject(t,e=!0,n=[]){return Ql(t,this,n,e),n.sort(Nh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ql(t[s],this,n,e);return n.sort(Nh),n}};function Nh(i,t){return i.distance-t.distance}function Ql(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Ql(r[a],t,e,!0)}}var As=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Wt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Wt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Er=class extends En{constructor(t=10,e=10,n=4473924,s=8947848){n=new At(n),s=new At(s);let r=e/2,a=t/e,o=t/2,l=[],c=[];for(let f=0,m=0,_=-o;f<=e;f++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);let v=f===r?n:s;v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3}let h=new fe;h.setAttribute("position",new ne(l,3)),h.setAttribute("color",new ne(c,3));let d=new Ze({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Ar=class extends Dn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function vc(i,t,e,n){let s=Cf(n);switch(e){case cc:return i*t;case po:return i*t/s.components*s.byteLength;case mo:return i*t/s.components*s.byteLength;case uc:return i*t*2/s.components*s.byteLength;case go:return i*t*2/s.components*s.byteLength;case hc:return i*t*3/s.components*s.byteLength;case _n:return i*t*4/s.components*s.byteLength;case _o:return i*t*4/s.components*s.byteLength;case Pr:case Ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Lr:case Dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vo:case Mo:return Math.max(i,16)*Math.max(t,8)/4;case xo:case yo:return Math.max(i,8)*Math.max(t,8)/2;case bo:case So:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Eo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Co:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Po:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Io:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Do:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case No:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Oo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case zo:case ko:case Vo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ho:case Go:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Wo:case Xo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Cf(i){switch(i){case Cn:case rc:return{byteLength:1,components:1};case Rs:case ac:case gn:return{byteLength:2,components:1};case uo:case fo:return{byteLength:2,components:4};case yi:case ho:case Rn:return{byteLength:4,components:1};case oc:case lc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Hu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Pf(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<d.length;m++){let _=d[f],v=d[m];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,d[f]=v)}d.length=f+1;for(let m=0,_=d.length;m<_;m++){let v=d[m];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var If=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lf=`#ifdef USE_ALPHAHASH
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
#endif`,Df=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ff=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Of=`#ifdef USE_AOMAP
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
#endif`,Bf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zf=`#ifdef USE_BATCHING
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
#endif`,kf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wf=`#ifdef USE_IRIDESCENCE
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
#endif`,Xf=`#ifdef USE_BUMPMAP
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
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tp=`#define PI 3.141592653589793
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
} // validated`,ep=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,np=`vec3 transformedNormal = objectNormal;
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
#endif`,ip=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ap=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,op="gl_FragColor = linearToOutputTexel( gl_FragColor );",lp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cp=`#ifdef USE_ENVMAP
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
#endif`,hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,up=`#ifdef USE_ENVMAP
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
#endif`,dp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fp=`#ifdef USE_ENVMAP
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
#endif`,pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xp=`#ifdef USE_GRADIENTMAP
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
}`,vp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bp=`uniform bool receiveShadow;
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
#endif`,Sp=`#ifdef USE_ENVMAP
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
#endif`,Tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cp=`PhysicalMaterial material;
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
#endif`,Rp=`struct PhysicalMaterial {
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
}`,Pp=`
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
#endif`,Ip=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Up=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Np=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Op=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kp=`#if defined( USE_POINTS_UV )
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
#endif`,Vp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$p=`#ifdef USE_MORPHTARGETS
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
#endif`,qp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qp=`#ifdef USE_NORMALMAP
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
#endif`,tm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,im=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,am=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,um=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mm=`float getShadowMask() {
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
}`,gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_m=`#ifdef USE_SKINNING
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
#endif`,xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vm=`#ifdef USE_SKINNING
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
#endif`,ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tm=`#ifdef USE_TRANSMISSION
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
#endif`,wm=`#ifdef USE_TRANSMISSION
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
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Im=`uniform sampler2D t2D;
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
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`#include <common>
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
}`,Om=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Bm=`#define DISTANCE
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
}`,zm=`#define DISTANCE
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
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`uniform float scale;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Wm=`#include <common>
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
}`,Xm=`uniform vec3 diffuse;
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
}`,$m=`#define LAMBERT
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
}`,qm=`#define LAMBERT
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
}`,Ym=`#define MATCAP
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
}`,Zm=`#define MATCAP
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
}`,jm=`#define NORMAL
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
}`,Jm=`#define NORMAL
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
}`,Km=`#define PHONG
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
}`,Qm=`#define PHONG
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
}`,tg=`#define STANDARD
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
}`,eg=`#define STANDARD
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
}`,ng=`#define TOON
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
}`,ig=`#define TOON
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
}`,sg=`uniform float size;
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
}`,rg=`uniform vec3 diffuse;
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
}`,ag=`#include <common>
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
}`,og=`uniform vec3 color;
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
}`,lg=`uniform float rotation;
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
}`,cg=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:If,alphahash_pars_fragment:Lf,alphamap_fragment:Df,alphamap_pars_fragment:Uf,alphatest_fragment:Nf,alphatest_pars_fragment:Ff,aomap_fragment:Of,aomap_pars_fragment:Bf,batching_pars_vertex:zf,batching_vertex:kf,begin_vertex:Vf,beginnormal_vertex:Hf,bsdfs:Gf,iridescence_fragment:Wf,bumpmap_pars_fragment:Xf,clipping_planes_fragment:$f,clipping_planes_pars_fragment:qf,clipping_planes_pars_vertex:Yf,clipping_planes_vertex:Zf,color_fragment:jf,color_pars_fragment:Jf,color_pars_vertex:Kf,color_vertex:Qf,common:tp,cube_uv_reflection_fragment:ep,defaultnormal_vertex:np,displacementmap_pars_vertex:ip,displacementmap_vertex:sp,emissivemap_fragment:rp,emissivemap_pars_fragment:ap,colorspace_fragment:op,colorspace_pars_fragment:lp,envmap_fragment:cp,envmap_common_pars_fragment:hp,envmap_pars_fragment:up,envmap_pars_vertex:dp,envmap_physical_pars_fragment:Sp,envmap_vertex:fp,fog_vertex:pp,fog_pars_vertex:mp,fog_fragment:gp,fog_pars_fragment:_p,gradientmap_pars_fragment:xp,lightmap_pars_fragment:vp,lights_lambert_fragment:yp,lights_lambert_pars_fragment:Mp,lights_pars_begin:bp,lights_toon_fragment:Tp,lights_toon_pars_fragment:wp,lights_phong_fragment:Ep,lights_phong_pars_fragment:Ap,lights_physical_fragment:Cp,lights_physical_pars_fragment:Rp,lights_fragment_begin:Pp,lights_fragment_maps:Ip,lights_fragment_end:Lp,logdepthbuf_fragment:Dp,logdepthbuf_pars_fragment:Up,logdepthbuf_pars_vertex:Np,logdepthbuf_vertex:Fp,map_fragment:Op,map_pars_fragment:Bp,map_particle_fragment:zp,map_particle_pars_fragment:kp,metalnessmap_fragment:Vp,metalnessmap_pars_fragment:Hp,morphinstance_vertex:Gp,morphcolor_vertex:Wp,morphnormal_vertex:Xp,morphtarget_pars_vertex:$p,morphtarget_vertex:qp,normal_fragment_begin:Yp,normal_fragment_maps:Zp,normal_pars_fragment:jp,normal_pars_vertex:Jp,normal_vertex:Kp,normalmap_pars_fragment:Qp,clearcoat_normal_fragment_begin:tm,clearcoat_normal_fragment_maps:em,clearcoat_pars_fragment:nm,iridescence_pars_fragment:im,opaque_fragment:sm,packing:rm,premultiplied_alpha_fragment:am,project_vertex:om,dithering_fragment:lm,dithering_pars_fragment:cm,roughnessmap_fragment:hm,roughnessmap_pars_fragment:um,shadowmap_pars_fragment:dm,shadowmap_pars_vertex:fm,shadowmap_vertex:pm,shadowmask_pars_fragment:mm,skinbase_vertex:gm,skinning_pars_vertex:_m,skinning_vertex:xm,skinnormal_vertex:vm,specularmap_fragment:ym,specularmap_pars_fragment:Mm,tonemapping_fragment:bm,tonemapping_pars_fragment:Sm,transmission_fragment:Tm,transmission_pars_fragment:wm,uv_pars_fragment:Em,uv_pars_vertex:Am,uv_vertex:Cm,worldpos_vertex:Rm,background_vert:Pm,background_frag:Im,backgroundCube_vert:Lm,backgroundCube_frag:Dm,cube_vert:Um,cube_frag:Nm,depth_vert:Fm,depth_frag:Om,distanceRGBA_vert:Bm,distanceRGBA_frag:zm,equirect_vert:km,equirect_frag:Vm,linedashed_vert:Hm,linedashed_frag:Gm,meshbasic_vert:Wm,meshbasic_frag:Xm,meshlambert_vert:$m,meshlambert_frag:qm,meshmatcap_vert:Ym,meshmatcap_frag:Zm,meshnormal_vert:jm,meshnormal_frag:Jm,meshphong_vert:Km,meshphong_frag:Qm,meshphysical_vert:tg,meshphysical_frag:eg,meshtoon_vert:ng,meshtoon_frag:ig,points_vert:sg,points_frag:rg,shadow_vert:ag,shadow_frag:og,sprite_vert:lg,sprite_frag:cg},ot={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Bn={basic:{uniforms:Ve([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ve([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new At(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ve([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ve([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ve([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new At(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ve([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ve([ot.points,ot.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ve([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ve([ot.common,ot.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ve([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ve([ot.sprite,ot.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Ve([ot.common,ot.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Ve([ot.lights,ot.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Bn.physical={uniforms:Ve([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var qo={r:0,b:0,g:0},Yi=new pn,hg=new Kt;function ug(i,t,e,n,s,r,a){let o=new At(0),l=r===!0?0:1,c,h,d=null,f=0,m=null;function _(C){let y=C.isScene===!0?C.background:null;return y&&y.isTexture&&(y=(C.backgroundBlurriness>0?e:t).get(y)),y}function v(C){let y=!1,E=_(C);E===null?u(o,l):E&&E.isColor&&(u(E,1),y=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(C,y){let E=_(y);E&&(E.isCubeTexture||E.mapping===Cr)?(h===void 0&&(h=new Gt(new Ue(1,1,1),new Se({name:"BackgroundCubeMaterial",uniforms:qi(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Yi.copy(y.backgroundRotation),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(hg.makeRotationFromEuler(Yi)),h.material.toneMapped=qt.getTransfer(E.colorSpace)!==jt,(d!==E||f!==E.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=E,f=E.version,m=i.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Gt(new en(2,2),new Se({name:"BackgroundMaterial",uniforms:qi(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=qt.getTransfer(E.colorSpace)!==jt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||f!==E.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=E,f=E.version,m=i.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function u(C,y){C.getRGB(qo,gc(i)),n.buffers.color.setClear(qo.r,qo.g,qo.b,y,a)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(C,y=1){o.set(C),l=y,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(C){l=C,u(o,l)},render:v,addToRenderList:g,dispose:T}}function dg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(S,U,O,W,H){let q=!1,G=d(W,O,U);r!==G&&(r=G,c(r.object)),q=m(S,W,O,H),q&&_(S,W,O,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(S,U,O,W),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function d(S,U,O){let W=O.wireframe===!0,H=n[S.id];H===void 0&&(H={},n[S.id]=H);let q=H[U.id];q===void 0&&(q={},H[U.id]=q);let G=q[W];return G===void 0&&(G=f(l()),q[W]=G),G}function f(S){let U=[],O=[],W=[];for(let H=0;H<e;H++)U[H]=0,O[H]=0,W[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:W,object:S,attributes:{},index:null}}function m(S,U,O,W){let H=r.attributes,q=U.attributes,G=0,nt=O.getAttributes();for(let Y in nt)if(nt[Y].location>=0){let ut=H[Y],wt=q[Y];if(wt===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(wt=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(wt=S.instanceColor)),ut===void 0||ut.attribute!==wt||wt&&ut.data!==wt.data)return!0;G++}return r.attributesNum!==G||r.index!==W}function _(S,U,O,W){let H={},q=U.attributes,G=0,nt=O.getAttributes();for(let Y in nt)if(nt[Y].location>=0){let ut=q[Y];ut===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(ut=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(ut=S.instanceColor));let wt={};wt.attribute=ut,ut&&ut.data&&(wt.data=ut.data),H[Y]=wt,G++}r.attributes=H,r.attributesNum=G,r.index=W}function v(){let S=r.newAttributes;for(let U=0,O=S.length;U<O;U++)S[U]=0}function g(S){u(S,0)}function u(S,U){let O=r.newAttributes,W=r.enabledAttributes,H=r.attributeDivisors;O[S]=1,W[S]===0&&(i.enableVertexAttribArray(S),W[S]=1),H[S]!==U&&(i.vertexAttribDivisor(S,U),H[S]=U)}function T(){let S=r.newAttributes,U=r.enabledAttributes;for(let O=0,W=U.length;O<W;O++)U[O]!==S[O]&&(i.disableVertexAttribArray(O),U[O]=0)}function C(S,U,O,W,H,q,G){G===!0?i.vertexAttribIPointer(S,U,O,H,q):i.vertexAttribPointer(S,U,O,W,H,q)}function y(S,U,O,W){v();let H=W.attributes,q=O.getAttributes(),G=U.defaultAttributeValues;for(let nt in q){let Y=q[nt];if(Y.location>=0){let at=H[nt];if(at===void 0&&(nt==="instanceMatrix"&&S.instanceMatrix&&(at=S.instanceMatrix),nt==="instanceColor"&&S.instanceColor&&(at=S.instanceColor)),at!==void 0){let ut=at.normalized,wt=at.itemSize,Nt=t.get(at);if(Nt===void 0)continue;let ie=Nt.buffer,se=Nt.type,Ht=Nt.bytesPerElement,Z=se===i.INT||se===i.UNSIGNED_INT||at.gpuType===ho;if(at.isInterleavedBufferAttribute){let K=at.data,gt=K.stride,Dt=at.offset;if(K.isInstancedInterleavedBuffer){for(let St=0;St<Y.locationSize;St++)u(Y.location+St,K.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let St=0;St<Y.locationSize;St++)g(Y.location+St);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let St=0;St<Y.locationSize;St++)C(Y.location+St,wt/Y.locationSize,se,ut,gt*Ht,(Dt+wt/Y.locationSize*St)*Ht,Z)}else{if(at.isInstancedBufferAttribute){for(let K=0;K<Y.locationSize;K++)u(Y.location+K,at.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let K=0;K<Y.locationSize;K++)g(Y.location+K);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let K=0;K<Y.locationSize;K++)C(Y.location+K,wt/Y.locationSize,se,ut,wt*Ht,wt/Y.locationSize*K*Ht,Z)}}else if(G!==void 0){let ut=G[nt];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(Y.location,ut);break;case 3:i.vertexAttrib3fv(Y.location,ut);break;case 4:i.vertexAttrib4fv(Y.location,ut);break;default:i.vertexAttrib1fv(Y.location,ut)}}}}T()}function E(){P();for(let S in n){let U=n[S];for(let O in U){let W=U[O];for(let H in W)h(W[H].object),delete W[H];delete U[O]}delete n[S]}}function R(S){if(n[S.id]===void 0)return;let U=n[S.id];for(let O in U){let W=U[O];for(let H in W)h(W[H].object),delete W[H];delete U[O]}delete n[S.id]}function b(S){for(let U in n){let O=n[U];if(O[S.id]===void 0)continue;let W=O[S.id];for(let H in W)h(W[H].object),delete W[H];delete O[S.id]}}function P(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:M,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:g,disableUnusedAttributes:T}}function fg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let m=0;for(let _=0;_<d;_++)m+=h[_];e.update(m,n,1)}function l(c,h,d,f){if(d===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],h[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let _=0;for(let v=0;v<d;v++)_+=h[v]*f[v];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function pg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(b){return!(b!==_n&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){let P=b===gn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Cn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Rn&&!P)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=_>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:T,maxVaryings:C,maxFragmentUniforms:y,vertexTextures:E,maxSamples:R}}function mg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new un,o=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,m){let _=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,u=i.get(d);if(!s||_===null||_.length===0||r&&!g)r?h(null):c();else{let T=r?0:n,C=T*4,y=u.clippingState||null;l.value=y,y=h(_,f,C,m);for(let E=0;E!==C;++E)y[E]=e[E];u.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,m,_){let v=d!==null?d.length:0,g=null;if(v!==0){if(g=l.value,_!==!0||g===null){let u=m+v*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(g===null||g.length<u)&&(g=new Float32Array(u));for(let C=0,y=m;C!==v;++C,y+=4)a.copy(d[C]).applyMatrix4(T,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function gg(i){let t=new WeakMap;function e(a,o){return o===oo?a.mapping=Xi:o===lo&&(a.mapping=$i),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===oo||o===lo)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Pa(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Us=4,vu=[.125,.215,.35,.446,.526,.582],Ji=20,yc=new Gi,yu=new At,Mc=null,bc=0,Sc=0,Tc=!1,ji=(1+Math.sqrt(5))/2,Ds=1/ji,Mu=[new F(-ji,Ds,0),new F(ji,Ds,0),new F(-Ds,0,ji),new F(Ds,0,ji),new F(0,ji,-Ds),new F(0,ji,Ds),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],_g=new F,Mi=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=_g}=r;Mc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Mc,bc,Sc),this._renderer.xr.enabled=Tc,t.scissorTest=!1,Yo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xi||t.mapping===$i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Mc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:gn,format:_n,colorSpace:Oi,depthBuffer:!1},s=bu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xg(r)),this._blurMaterial=vg(r,t,e)}return s}_compileMaterial(t){let e=new Gt(this._lodPlanes[0],t);this._renderer.compile(e,yc)}_sceneToCubeUV(t,e,n,s,r){let l=new Ee(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(yu),d.toneMapping=ti,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let v=new ke({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),g=new Gt(new Ue,v),u=!1,T=t.background;T?T.isColor&&(v.color.copy(T),t.background=null,u=!0):(v.color.copy(yu),u=!0);for(let C=0;C<6;C++){let y=C%3;y===0?(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[C],r.y,r.z)):y===1?(l.up.set(0,0,c[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[C],r.z)):(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[C]));let E=this._cubeSize;Yo(s,y*E,C>2?E:0,E,E),d.setRenderTarget(s),u&&d.render(g,l),d.render(t,l)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=m,d.autoClear=f,t.background=T}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Xi||t.mapping===$i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Su());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Gt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Yo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,yc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Mu[(s-r-1)%Mu.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Gt(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ji-1),v=r/_,g=isFinite(r)?1+Math.floor(h*v):Ji;g>Ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ji}`);let u=[],T=0;for(let b=0;b<Ji;++b){let P=b/v,M=Math.exp(-P*P/2);u.push(M),b===0?T+=M:b<g&&(T+=2*M)}for(let b=0;b<u.length;b++)u[b]=u[b]/T;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:C}=this;f.dTheta.value=_,f.mipInt.value=C-n;let y=this._sizeLods[s],E=3*y*(s>C-Us?s-C+Us:0),R=4*(this._cubeSize-y);Yo(e,E,R,3*y,2*y),l.setRenderTarget(e),l.render(d,yc)}};function xg(i){let t=[],e=[],n=[],s=i,r=i-Us+1+vu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Us?l=vu[a-i+Us-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,_=6,v=3,g=2,u=1,T=new Float32Array(v*_*m),C=new Float32Array(g*_*m),y=new Float32Array(u*_*m);for(let R=0;R<m;R++){let b=R%3*2/3-1,P=R>2?0:-1,M=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];T.set(M,v*_*R),C.set(f,g*_*R);let S=[R,R,R,R,R,R];y.set(S,u*_*R)}let E=new fe;E.setAttribute("position",new Ae(T,v)),E.setAttribute("uv",new Ae(C,g)),E.setAttribute("faceIndex",new Ae(y,u)),t.push(E),s>Us&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function bu(i,t,e){let n=new ze(i,t,e);return n.texture.mapping=Cr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function vg(i,t,e){let n=new Float32Array(Ji),s=new F(0,1,0);return new Se({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Su(){return new Se({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Tu(){return new Se({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Uc(){return`

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
	`}function yg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===oo||l===lo,h=l===Xi||l===$i;if(c||h){let d=t.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Mi(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new Mi(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Mg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ys("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function bg(i,t,e,n){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete s[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let m in f)t.update(f[m],i.ARRAY_BUFFER)}function c(d){let f=[],m=d.index,_=d.attributes.position,v=0;if(m!==null){let T=m.array;v=m.version;for(let C=0,y=T.length;C<y;C+=3){let E=T[C+0],R=T[C+1],b=T[C+2];f.push(E,R,R,b,b,E)}}else if(_!==void 0){let T=_.array;v=_.version;for(let C=0,y=T.length/3-1;C<y;C+=3){let E=C+0,R=C+1,b=C+2;f.push(E,R,R,b,b,E)}}else return;let g=new(mc(f)?hr:cr)(f,1);g.version=v;let u=r.get(d);u&&t.remove(u),r.set(d,g)}function h(d){let f=r.get(d);if(f){let m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Sg(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,m){i.drawElements(n,m,r,f*a),e.update(m,n,1)}function c(f,m,_){_!==0&&(i.drawElementsInstanced(n,m,r,f*a,_),e.update(m,n,_))}function h(f,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,_);let g=0;for(let u=0;u<_;u++)g+=m[u];e.update(g,n,1)}function d(f,m,_,v){if(_===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<f.length;u++)c(f[u]/a,m[u],v[u]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,v,0,_);let u=0;for(let T=0;T<_;T++)u+=m[T]*v[T];e.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Tg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function wg(i,t,e){let n=new WeakMap,s=new ee;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==d){let M=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],C=0;m===!0&&(C=1),_===!0&&(C=2),v===!0&&(C=3);let y=o.attributes.position.count*C,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let R=new Float32Array(y*E*4*d),b=new lr(R,y,E,d);b.type=Rn,b.needsUpdate=!0;let P=C*4;for(let S=0;S<d;S++){let U=g[S],O=u[S],W=T[S],H=y*E*4*S;for(let q=0;q<U.count;q++){let G=q*P;m===!0&&(s.fromBufferAttribute(U,q),R[H+G+0]=s.x,R[H+G+1]=s.y,R[H+G+2]=s.z,R[H+G+3]=0),_===!0&&(s.fromBufferAttribute(O,q),R[H+G+4]=s.x,R[H+G+5]=s.y,R[H+G+6]=s.z,R[H+G+7]=0),v===!0&&(s.fromBufferAttribute(W,q),R[H+G+8]=s.x,R[H+G+9]=s.y,R[H+G+10]=s.z,R[H+G+11]=W.itemSize===4?s.w:1)}}f={count:d,texture:b,size:new mt(y,E)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];let _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Eg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Gu=new We,wu=new _r(1,1),Wu=new lr,Xu=new Ca,$u=new dr,Eu=[],Au=[],Cu=new Float32Array(16),Ru=new Float32Array(9),Pu=new Float32Array(4);function Os(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Eu[s];if(r===void 0&&(r=new Float32Array(s),Eu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function jo(i,t){let e=Au[t];e===void 0&&(e=new Int32Array(t),Au[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ag(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function Rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function Pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function Ig(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;Pu.set(n),i.uniformMatrix2fv(this.addr,!1,Pu),Re(e,n)}}function Lg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;Ru.set(n),i.uniformMatrix3fv(this.addr,!1,Ru),Re(e,n)}}function Dg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;Cu.set(n),i.uniformMatrix4fv(this.addr,!1,Cu),Re(e,n)}}function Ug(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function Fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function Og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function Bg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function Vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function Hg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wu.compareFunction=dc,r=wu):r=Gu,e.setTexture2D(t||r,s)}function Gg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Xu,s)}function Wg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$u,s)}function Xg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Wu,s)}function $g(i){switch(i){case 5126:return Ag;case 35664:return Cg;case 35665:return Rg;case 35666:return Pg;case 35674:return Ig;case 35675:return Lg;case 35676:return Dg;case 5124:case 35670:return Ug;case 35667:case 35671:return Ng;case 35668:case 35672:return Fg;case 35669:case 35673:return Og;case 5125:return Bg;case 36294:return zg;case 36295:return kg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return Gg;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return Xg}}function qg(i,t){i.uniform1fv(this.addr,t)}function Yg(i,t){let e=Os(t,this.size,2);i.uniform2fv(this.addr,e)}function Zg(i,t){let e=Os(t,this.size,3);i.uniform3fv(this.addr,e)}function jg(i,t){let e=Os(t,this.size,4);i.uniform4fv(this.addr,e)}function Jg(i,t){let e=Os(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Kg(i,t){let e=Os(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Qg(i,t){let e=Os(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function t0(i,t){i.uniform1iv(this.addr,t)}function e0(i,t){i.uniform2iv(this.addr,t)}function n0(i,t){i.uniform3iv(this.addr,t)}function i0(i,t){i.uniform4iv(this.addr,t)}function s0(i,t){i.uniform1uiv(this.addr,t)}function r0(i,t){i.uniform2uiv(this.addr,t)}function a0(i,t){i.uniform3uiv(this.addr,t)}function o0(i,t){i.uniform4uiv(this.addr,t)}function l0(i,t,e){let n=this.cache,s=t.length,r=jo(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Gu,r[a])}function c0(i,t,e){let n=this.cache,s=t.length,r=jo(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Xu,r[a])}function h0(i,t,e){let n=this.cache,s=t.length,r=jo(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||$u,r[a])}function u0(i,t,e){let n=this.cache,s=t.length,r=jo(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Wu,r[a])}function d0(i){switch(i){case 5126:return qg;case 35664:return Yg;case 35665:return Zg;case 35666:return jg;case 35674:return Jg;case 35675:return Kg;case 35676:return Qg;case 5124:case 35670:return t0;case 35667:case 35671:return e0;case 35668:case 35672:return n0;case 35669:case 35673:return i0;case 5125:return s0;case 36294:return r0;case 36295:return a0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return l0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return u0}}var Ec=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$g(e.type)}},Ac=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=d0(e.type)}},Cc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},wc=/(\w+)(\])?(\[|\.)?/g;function Iu(i,t){i.seq.push(t),i.map[t.id]=t}function f0(i,t,e){let n=i.name,s=n.length;for(wc.lastIndex=0;;){let r=wc.exec(n),a=wc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Iu(e,c===void 0?new Ec(o,i,t):new Ac(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Cc(o),Iu(e,d)),e=d}}}var Ns=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);f0(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Lu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var p0=37297,m0=0;function g0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Du=new zt;function _0(i){qt._getMatrix(Du,qt.workingColorSpace,i);let t=`mat3( ${Du.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case rr:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Uu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+g0(i.getShaderSource(t),o)}else return r}function x0(i,t){let e=_0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function v0(i,t){let e;switch(t){case eo:e="Linear";break;case no:e="Reinhard";break;case io:e="Cineon";break;case xi:e="ACESFilmic";break;case ro:e="AgX";break;case ao:e="Neutral";break;case so:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Zo=new F;function y0(){qt.getLuminanceCoefficients(Zo);let i=Zo.x.toFixed(4),t=Zo.y.toFixed(4),e=Zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function b0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function S0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ur(i){return i!==""}function Nu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var T0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(i){return i.replace(T0,E0)}var w0=new Map;function E0(i,t){let e=Vt[t];if(e===void 0){let n=w0.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Rc(e)}var A0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ou(i){return i.replace(A0,C0)}function C0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bu(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function R0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ec?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Cs?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function P0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xi:case $i:t="ENVMAP_TYPE_CUBE";break;case Cr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function I0(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===$i&&(t="ENVMAP_MODE_REFRACTION"),t}function L0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case to:t="ENVMAP_BLENDING_MULTIPLY";break;case nu:t="ENVMAP_BLENDING_MIX";break;case iu:t="ENVMAP_BLENDING_ADD";break}return t}function D0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function U0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=R0(e),c=P0(e),h=I0(e),d=L0(e),f=D0(e),m=M0(e),_=b0(r),v=s.createProgram(),g,u,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ur).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ur).join(`
`),u.length>0&&(u+=`
`)):(g=[Bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),u=[Bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?Vt.tonemapping_pars_fragment:"",e.toneMapping!==ti?v0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,x0("linearToOutputTexel",e.outputColorSpace),y0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ur).join(`
`)),a=Rc(a),a=Nu(a,e),a=Fu(a,e),o=Rc(o),o=Nu(o,e),o=Fu(o,e),a=Ou(a),o=Ou(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",e.glslVersion===fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let C=T+g+a,y=T+u+o,E=Lu(s,s.VERTEX_SHADER,C),R=Lu(s,s.FRAGMENT_SHADER,y);s.attachShader(v,E),s.attachShader(v,R),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function b(U){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(v)||"",W=s.getShaderInfoLog(E)||"",H=s.getShaderInfoLog(R)||"",q=O.trim(),G=W.trim(),nt=H.trim(),Y=!0,at=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,E,R);else{let ut=Uu(s,E,"vertex"),wt=Uu(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+q+`
`+ut+`
`+wt)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(G===""||nt==="")&&(at=!1);at&&(U.diagnostics={runnable:Y,programLog:q,vertexShader:{log:G,prefix:g},fragmentShader:{log:nt,prefix:u}})}s.deleteShader(E),s.deleteShader(R),P=new Ns(s,v),M=S0(s,v)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,p0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=m0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=R,this}var N0=0,Pc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ic(t),e.set(t,n)),n}},Ic=class{constructor(t){this.id=N0++,this.code=t,this.usedTimes=0}};function F0(i,t,e,n,s,r,a){let o=new bs,l=new Pc,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,S,U,O,W){let H=O.fog,q=W.geometry,G=M.isMeshStandardMaterial?O.environment:null,nt=(M.isMeshStandardMaterial?e:t).get(M.envMap||G),Y=nt&&nt.mapping===Cr?nt.image.height:null,at=_[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));let ut=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,wt=ut!==void 0?ut.length:0,Nt=0;q.morphAttributes.position!==void 0&&(Nt=1),q.morphAttributes.normal!==void 0&&(Nt=2),q.morphAttributes.color!==void 0&&(Nt=3);let ie,se,Ht,Z;if(at){let Jt=Bn[at];ie=Jt.vertexShader,se=Jt.fragmentShader}else ie=M.vertexShader,se=M.fragmentShader,l.update(M),Ht=l.getVertexShaderID(M),Z=l.getFragmentShaderID(M);let K=i.getRenderTarget(),gt=i.state.buffers.depth.getReversed(),Dt=W.isInstancedMesh===!0,St=W.isBatchedMesh===!0,Xt=!!M.map,xe=!!M.matcap,N=!!nt,te=!!M.aoMap,Ot=!!M.lightMap,Pt=!!M.bumpMap,xt=!!M.normalMap,le=!!M.displacementMap,vt=!!M.emissiveMap,Ft=!!M.metalnessMap,ve=!!M.roughnessMap,V=M.anisotropy>0,x=M.clearcoat>0,p=M.dispersion>0,A=M.iridescence>0,I=M.sheen>0,D=M.transmission>0,L=V&&!!M.anisotropyMap,j=x&&!!M.clearcoatMap,Q=x&&!!M.clearcoatNormalMap,dt=x&&!!M.clearcoatRoughnessMap,ft=A&&!!M.iridescenceMap,tt=A&&!!M.iridescenceThicknessMap,ht=I&&!!M.sheenColorMap,Lt=I&&!!M.sheenRoughnessMap,Tt=!!M.specularMap,lt=!!M.specularColorMap,kt=!!M.specularIntensityMap,B=D&&!!M.transmissionMap,st=D&&!!M.thicknessMap,rt=!!M.gradientMap,_t=!!M.alphaMap,et=M.alphaTest>0,J=!!M.alphaHash,Mt=!!M.extensions,Bt=ti;M.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Bt=i.toneMapping);let ce={shaderID:at,shaderType:M.type,shaderName:M.name,vertexShader:ie,fragmentShader:se,defines:M.defines,customVertexShaderID:Ht,customFragmentShaderID:Z,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:St,batchingColor:St&&W._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&W.instanceColor!==null,instancingMorph:Dt&&W.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Oi,alphaToCoverage:!!M.alphaToCoverage,map:Xt,matcap:xe,envMap:N,envMapMode:N&&nt.mapping,envMapCubeUVHeight:Y,aoMap:te,lightMap:Ot,bumpMap:Pt,normalMap:xt,displacementMap:f&&le,emissiveMap:vt,normalMapObjectSpace:xt&&M.normalMapType===ou,normalMapTangentSpace:xt&&M.normalMapType===$o,metalnessMap:Ft,roughnessMap:ve,anisotropy:V,anisotropyMap:L,clearcoat:x,clearcoatMap:j,clearcoatNormalMap:Q,clearcoatRoughnessMap:dt,dispersion:p,iridescence:A,iridescenceMap:ft,iridescenceThicknessMap:tt,sheen:I,sheenColorMap:ht,sheenRoughnessMap:Lt,specularMap:Tt,specularColorMap:lt,specularIntensityMap:kt,transmission:D,transmissionMap:B,thicknessMap:st,gradientMap:rt,opaque:M.transparent===!1&&M.blending===Ni&&M.alphaToCoverage===!1,alphaMap:_t,alphaTest:et,alphaHash:J,combine:M.combine,mapUv:Xt&&v(M.map.channel),aoMapUv:te&&v(M.aoMap.channel),lightMapUv:Ot&&v(M.lightMap.channel),bumpMapUv:Pt&&v(M.bumpMap.channel),normalMapUv:xt&&v(M.normalMap.channel),displacementMapUv:le&&v(M.displacementMap.channel),emissiveMapUv:vt&&v(M.emissiveMap.channel),metalnessMapUv:Ft&&v(M.metalnessMap.channel),roughnessMapUv:ve&&v(M.roughnessMap.channel),anisotropyMapUv:L&&v(M.anisotropyMap.channel),clearcoatMapUv:j&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Q&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&v(M.sheenRoughnessMap.channel),specularMapUv:Tt&&v(M.specularMap.channel),specularColorMapUv:lt&&v(M.specularColorMap.channel),specularIntensityMapUv:kt&&v(M.specularIntensityMap.channel),transmissionMapUv:B&&v(M.transmissionMap.channel),thicknessMapUv:st&&v(M.thicknessMap.channel),alphaMapUv:_t&&v(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(xt||V),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!q.attributes.uv&&(Xt||_t),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:gt,skinning:W.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Nt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Xt&&M.map.isVideoTexture===!0&&qt.getTransfer(M.map.colorSpace)===jt,decodeVideoTextureEmissive:vt&&M.emissiveMap.isVideoTexture===!0&&qt.getTransfer(M.emissiveMap.colorSpace)===jt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Xe,flipSided:M.side===Ne,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Mt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&M.extensions.multiDraw===!0||St)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ce.vertexUv1s=c.has(1),ce.vertexUv2s=c.has(2),ce.vertexUv3s=c.has(3),c.clear(),ce}function u(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let U in M.defines)S.push(U),S.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(T(S,M),C(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function T(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function C(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function y(M){let S=_[M.type],U;if(S){let O=Bn[S];U=ni.clone(O.uniforms)}else U=M.uniforms;return U}function E(M,S){let U;for(let O=0,W=h.length;O<W;O++){let H=h[O];if(H.cacheKey===S){U=H,++U.usedTimes;break}}return U===void 0&&(U=new U0(i,S,M,r),h.push(U)),U}function R(M){if(--M.usedTimes===0){let S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function b(M){l.remove(M)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:y,acquireProgram:E,releaseProgram:R,releaseShaderCache:b,programs:h,dispose:P}}function O0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function B0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function zu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ku(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,f,m,_,v,g){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:_,renderOrder:d.renderOrder,z:v,group:g},i[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=v,u.group=g),t++,u}function o(d,f,m,_,v,g){let u=a(d,f,m,_,v,g);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):e.push(u)}function l(d,f,m,_,v,g){let u=a(d,f,m,_,v,g);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||B0),n.length>1&&n.sort(f||zu),s.length>1&&s.sort(f||zu)}function h(){for(let d=t,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function z0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new ku,i.set(n,[a])):s>=r.length?(a=new ku,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function k0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new At};break;case"SpotLight":e={position:new F,direction:new F,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function V0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var H0=0;function G0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function W0(i){let t=new k0,e=V0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new Kt,a=new Kt;function o(c){let h=0,d=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,_=0,v=0,g=0,u=0,T=0,C=0,y=0,E=0,R=0,b=0;c.sort(G0);for(let M=0,S=c.length;M<S;M++){let U=c[M],O=U.color,W=U.intensity,H=U.distance,q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=O.r*W,d+=O.g*W,f+=O.b*W;else if(U.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(U.sh.coefficients[G],W);b++}else if(U.isDirectionalLight){let G=t.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let nt=U.shadow,Y=e.get(U);Y.shadowIntensity=nt.intensity,Y.shadowBias=nt.bias,Y.shadowNormalBias=nt.normalBias,Y.shadowRadius=nt.radius,Y.shadowMapSize=nt.mapSize,n.directionalShadow[m]=Y,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=U.shadow.matrix,T++}n.directional[m]=G,m++}else if(U.isSpotLight){let G=t.get(U);G.position.setFromMatrixPosition(U.matrixWorld),G.color.copy(O).multiplyScalar(W),G.distance=H,G.coneCos=Math.cos(U.angle),G.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),G.decay=U.decay,n.spot[v]=G;let nt=U.shadow;if(U.map&&(n.spotLightMap[E]=U.map,E++,nt.updateMatrices(U),U.castShadow&&R++),n.spotLightMatrix[v]=nt.matrix,U.castShadow){let Y=e.get(U);Y.shadowIntensity=nt.intensity,Y.shadowBias=nt.bias,Y.shadowNormalBias=nt.normalBias,Y.shadowRadius=nt.radius,Y.shadowMapSize=nt.mapSize,n.spotShadow[v]=Y,n.spotShadowMap[v]=q,y++}v++}else if(U.isRectAreaLight){let G=t.get(U);G.color.copy(O).multiplyScalar(W),G.halfWidth.set(U.width*.5,0,0),G.halfHeight.set(0,U.height*.5,0),n.rectArea[g]=G,g++}else if(U.isPointLight){let G=t.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity),G.distance=U.distance,G.decay=U.decay,U.castShadow){let nt=U.shadow,Y=e.get(U);Y.shadowIntensity=nt.intensity,Y.shadowBias=nt.bias,Y.shadowNormalBias=nt.normalBias,Y.shadowRadius=nt.radius,Y.shadowMapSize=nt.mapSize,Y.shadowCameraNear=nt.camera.near,Y.shadowCameraFar=nt.camera.far,n.pointShadow[_]=Y,n.pointShadowMap[_]=q,n.pointShadowMatrix[_]=U.shadow.matrix,C++}n.point[_]=G,_++}else if(U.isHemisphereLight){let G=t.get(U);G.skyColor.copy(U.color).multiplyScalar(W),G.groundColor.copy(U.groundColor).multiplyScalar(W),n.hemi[u]=G,u++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let P=n.hash;(P.directionalLength!==m||P.pointLength!==_||P.spotLength!==v||P.rectAreaLength!==g||P.hemiLength!==u||P.numDirectionalShadows!==T||P.numPointShadows!==C||P.numSpotShadows!==y||P.numSpotMaps!==E||P.numLightProbes!==b)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=g,n.point.length=_,n.hemi.length=u,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=y+E-R,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=b,P.directionalLength=m,P.pointLength=_,P.spotLength=v,P.rectAreaLength=g,P.hemiLength=u,P.numDirectionalShadows=T,P.numPointShadows=C,P.numSpotShadows=y,P.numSpotMaps=E,P.numLightProbes=b,n.version=H0++)}function l(c,h){let d=0,f=0,m=0,_=0,v=0,g=h.matrixWorldInverse;for(let u=0,T=c.length;u<T;u++){let C=c[u];if(C.isDirectionalLight){let y=n.directional[d];y.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),d++}else if(C.isSpotLight){let y=n.spot[m];y.position.setFromMatrixPosition(C.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),m++}else if(C.isRectAreaLight){let y=n.rectArea[_];y.position.setFromMatrixPosition(C.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(C.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(C.width*.5,0,0),y.halfHeight.set(0,C.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(C.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(C.matrixWorld),y.position.applyMatrix4(g),f++}else if(C.isHemisphereLight){let y=n.hemi[v];y.direction.setFromMatrixPosition(C.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:n}}function Vu(i){let t=new W0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function X0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Vu(i),t.set(s,[o])):r>=a.length?(o=new Vu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var $0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q0=`uniform sampler2D shadow_pass;
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
}`;function Y0(i,t,e){let n=new Ts,s=new mt,r=new mt,a=new ee,o=new Ua({depthPacking:au}),l=new Na,c={},h=e.maxTextureSize,d={[Zn]:Ne,[Ne]:Zn,[Xe]:Xe},f=new Se({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:$0,fragmentShader:q0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let _=new fe;_.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Gt(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ec;let u=this.type;this.render=function(R,b,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;let M=i.getRenderTarget(),S=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),O=i.state;O.setBlending(An),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let W=u!==On&&this.type===On,H=u===On&&this.type!==On;for(let q=0,G=R.length;q<G;q++){let nt=R[q],Y=nt.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let at=Y.getFrameExtents();if(s.multiply(at),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,Y.mapSize.y=r.y)),Y.map===null||W===!0||H===!0){let wt=this.type!==On?{minFilter:Ye,magFilter:Ye}:{};Y.map!==null&&Y.map.dispose(),Y.map=new ze(s.x,s.y,wt),Y.map.texture.name=nt.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();let ut=Y.getViewportCount();for(let wt=0;wt<ut;wt++){let Nt=Y.getViewport(wt);a.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),O.viewport(a),Y.updateMatrices(nt,wt),n=Y.getFrustum(),y(b,P,Y.camera,nt,this.type)}Y.isPointLightShadow!==!0&&this.type===On&&T(Y,P),Y.needsUpdate=!1}u=this.type,g.needsUpdate=!1,i.setRenderTarget(M,S,U)};function T(R,b){let P=t.update(v);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ze(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(b,null,P,f,v,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(b,null,P,m,v,null)}function C(R,b,P,M){let S=null,U=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)S=U;else if(S=P.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let O=S.uuid,W=b.uuid,H=c[O];H===void 0&&(H={},c[O]=H);let q=H[W];q===void 0&&(q=S.clone(),H[W]=q,b.addEventListener("dispose",E)),S=q}if(S.visible=b.visible,S.wireframe=b.wireframe,M===On?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:d[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let O=i.properties.get(S);O.light=P}return S}function y(R,b,P,M,S){if(R.visible===!1)return;if(R.layers.test(b.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===On)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);let W=t.update(R),H=R.material;if(Array.isArray(H)){let q=W.groups;for(let G=0,nt=q.length;G<nt;G++){let Y=q[G],at=H[Y.materialIndex];if(at&&at.visible){let ut=C(R,at,M,S);R.onBeforeShadow(i,R,b,P,W,ut,Y),i.renderBufferDirect(P,null,W,ut,R,Y),R.onAfterShadow(i,R,b,P,W,ut,Y)}}}else if(H.visible){let q=C(R,H,M,S);R.onBeforeShadow(i,R,b,P,W,q,null),i.renderBufferDirect(P,null,W,q,R,null),R.onAfterShadow(i,R,b,P,W,q,null)}}let O=R.children;for(let W=0,H=O.length;W<H;W++)y(O[W],b,P,M,S)}function E(R){R.target.removeEventListener("dispose",E);for(let P in c){let M=c[P],S=R.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}var Z0={[qa]:Ya,[Za]:Ka,[ja]:Qa,[Fi]:Ja,[Ya]:qa,[Ka]:Za,[Qa]:ja,[Ja]:Fi};function j0(i,t){function e(){let B=!1,st=new ee,rt=null,_t=new ee(0,0,0,0);return{setMask:function(et){rt!==et&&!B&&(i.colorMask(et,et,et,et),rt=et)},setLocked:function(et){B=et},setClear:function(et,J,Mt,Bt,ce){ce===!0&&(et*=Bt,J*=Bt,Mt*=Bt),st.set(et,J,Mt,Bt),_t.equals(st)===!1&&(i.clearColor(et,J,Mt,Bt),_t.copy(st))},reset:function(){B=!1,rt=null,_t.set(-1,0,0,0)}}}function n(){let B=!1,st=!1,rt=null,_t=null,et=null;return{setReversed:function(J){if(st!==J){let Mt=t.get("EXT_clip_control");J?Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.ZERO_TO_ONE_EXT):Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.NEGATIVE_ONE_TO_ONE_EXT),st=J;let Bt=et;et=null,this.setClear(Bt)}},getReversed:function(){return st},setTest:function(J){J?K(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(J){rt!==J&&!B&&(i.depthMask(J),rt=J)},setFunc:function(J){if(st&&(J=Z0[J]),_t!==J){switch(J){case qa:i.depthFunc(i.NEVER);break;case Ya:i.depthFunc(i.ALWAYS);break;case Za:i.depthFunc(i.LESS);break;case Fi:i.depthFunc(i.LEQUAL);break;case ja:i.depthFunc(i.EQUAL);break;case Ja:i.depthFunc(i.GEQUAL);break;case Ka:i.depthFunc(i.GREATER);break;case Qa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=J}},setLocked:function(J){B=J},setClear:function(J){et!==J&&(st&&(J=1-J),i.clearDepth(J),et=J)},reset:function(){B=!1,rt=null,_t=null,et=null,st=!1}}}function s(){let B=!1,st=null,rt=null,_t=null,et=null,J=null,Mt=null,Bt=null,ce=null;return{setTest:function(Jt){B||(Jt?K(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(Jt){st!==Jt&&!B&&(i.stencilMask(Jt),st=Jt)},setFunc:function(Jt,Vn,Ln){(rt!==Jt||_t!==Vn||et!==Ln)&&(i.stencilFunc(Jt,Vn,Ln),rt=Jt,_t=Vn,et=Ln)},setOp:function(Jt,Vn,Ln){(J!==Jt||Mt!==Vn||Bt!==Ln)&&(i.stencilOp(Jt,Vn,Ln),J=Jt,Mt=Vn,Bt=Ln)},setLocked:function(Jt){B=Jt},setClear:function(Jt){ce!==Jt&&(i.clearStencil(Jt),ce=Jt)},reset:function(){B=!1,st=null,rt=null,_t=null,et=null,J=null,Mt=null,Bt=null,ce=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,m=[],_=null,v=!1,g=null,u=null,T=null,C=null,y=null,E=null,R=null,b=new At(0,0,0),P=0,M=!1,S=null,U=null,O=null,W=null,H=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,nt=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),G=nt>=1):Y.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),G=nt>=2);let at=null,ut={},wt=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),ie=new ee().fromArray(wt),se=new ee().fromArray(Nt);function Ht(B,st,rt,_t){let et=new Uint8Array(4),J=i.createTexture();i.bindTexture(B,J),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Mt=0;Mt<rt;Mt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,et):i.texImage2D(st+Mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,et);return J}let Z={};Z[i.TEXTURE_2D]=Ht(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=Ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=Ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=Ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(Fi),Pt(!1),xt(tc),K(i.CULL_FACE),te(An);function K(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function gt(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Dt(B,st){return d[B]!==st?(i.bindFramebuffer(B,st),d[B]=st,B===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=st),B===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=st),!0):!1}function St(B,st){let rt=m,_t=!1;if(B){rt=f.get(st),rt===void 0&&(rt=[],f.set(st,rt));let et=B.textures;if(rt.length!==et.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let J=0,Mt=et.length;J<Mt;J++)rt[J]=i.COLOR_ATTACHMENT0+J;rt.length=et.length,_t=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,_t=!0);_t&&i.drawBuffers(rt)}function Xt(B){return _!==B?(i.useProgram(B),_=B,!0):!1}let xe={[di]:i.FUNC_ADD,[zh]:i.FUNC_SUBTRACT,[kh]:i.FUNC_REVERSE_SUBTRACT};xe[Vh]=i.MIN,xe[Hh]=i.MAX;let N={[Gh]:i.ZERO,[Wh]:i.ONE,[Xh]:i.SRC_COLOR,[Ma]:i.SRC_ALPHA,[Jh]:i.SRC_ALPHA_SATURATE,[Zh]:i.DST_COLOR,[qh]:i.DST_ALPHA,[$h]:i.ONE_MINUS_SRC_COLOR,[ba]:i.ONE_MINUS_SRC_ALPHA,[jh]:i.ONE_MINUS_DST_COLOR,[Yh]:i.ONE_MINUS_DST_ALPHA,[Kh]:i.CONSTANT_COLOR,[Qh]:i.ONE_MINUS_CONSTANT_COLOR,[tu]:i.CONSTANT_ALPHA,[eu]:i.ONE_MINUS_CONSTANT_ALPHA};function te(B,st,rt,_t,et,J,Mt,Bt,ce,Jt){if(B===An){v===!0&&(gt(i.BLEND),v=!1);return}if(v===!1&&(K(i.BLEND),v=!0),B!==Bh){if(B!==g||Jt!==M){if((u!==di||y!==di)&&(i.blendEquation(i.FUNC_ADD),u=di,y=di),Jt)switch(B){case Ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qn:i.blendFunc(i.ONE,i.ONE);break;case nc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ic:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case nc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ic:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}T=null,C=null,E=null,R=null,b.set(0,0,0),P=0,g=B,M=Jt}return}et=et||st,J=J||rt,Mt=Mt||_t,(st!==u||et!==y)&&(i.blendEquationSeparate(xe[st],xe[et]),u=st,y=et),(rt!==T||_t!==C||J!==E||Mt!==R)&&(i.blendFuncSeparate(N[rt],N[_t],N[J],N[Mt]),T=rt,C=_t,E=J,R=Mt),(Bt.equals(b)===!1||ce!==P)&&(i.blendColor(Bt.r,Bt.g,Bt.b,ce),b.copy(Bt),P=ce),g=B,M=!1}function Ot(B,st){B.side===Xe?gt(i.CULL_FACE):K(i.CULL_FACE);let rt=B.side===Ne;st&&(rt=!rt),Pt(rt),B.blending===Ni&&B.transparent===!1?te(An):te(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let _t=B.stencilWrite;o.setTest(_t),_t&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),vt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(B){S!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),S=B)}function xt(B){B!==Fh?(K(i.CULL_FACE),B!==U&&(B===tc?i.cullFace(i.BACK):B===Oh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),U=B}function le(B){B!==O&&(G&&i.lineWidth(B),O=B)}function vt(B,st,rt){B?(K(i.POLYGON_OFFSET_FILL),(W!==st||H!==rt)&&(i.polygonOffset(st,rt),W=st,H=rt)):gt(i.POLYGON_OFFSET_FILL)}function Ft(B){B?K(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function ve(B){B===void 0&&(B=i.TEXTURE0+q-1),at!==B&&(i.activeTexture(B),at=B)}function V(B,st,rt){rt===void 0&&(at===null?rt=i.TEXTURE0+q-1:rt=at);let _t=ut[rt];_t===void 0&&(_t={type:void 0,texture:void 0},ut[rt]=_t),(_t.type!==B||_t.texture!==st)&&(at!==rt&&(i.activeTexture(rt),at=rt),i.bindTexture(B,st||Z[B]),_t.type=B,_t.texture=st)}function x(){let B=ut[at];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function p(){try{i.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function I(){try{i.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function D(){try{i.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function L(){try{i.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{i.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function dt(){try{i.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ft(){try{i.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function tt(){try{i.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ht(B){ie.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),ie.copy(B))}function Lt(B){se.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),se.copy(B))}function Tt(B,st){let rt=c.get(st);rt===void 0&&(rt=new WeakMap,c.set(st,rt));let _t=rt.get(B);_t===void 0&&(_t=i.getUniformBlockIndex(st,B.name),rt.set(B,_t))}function lt(B,st){let _t=c.get(st).get(B);l.get(st)!==_t&&(i.uniformBlockBinding(st,_t,B.__bindingPointIndex),l.set(st,_t))}function kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},at=null,ut={},d={},f=new WeakMap,m=[],_=null,v=!1,g=null,u=null,T=null,C=null,y=null,E=null,R=null,b=new At(0,0,0),P=0,M=!1,S=null,U=null,O=null,W=null,H=null,ie.set(0,0,i.canvas.width,i.canvas.height),se.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:gt,bindFramebuffer:Dt,drawBuffers:St,useProgram:Xt,setBlending:te,setMaterial:Ot,setFlipSided:Pt,setCullFace:xt,setLineWidth:le,setPolygonOffset:vt,setScissorTest:Ft,activeTexture:ve,bindTexture:V,unbindTexture:x,compressedTexImage2D:p,compressedTexImage3D:A,texImage2D:ft,texImage3D:tt,updateUBOMapping:Tt,uniformBlockBinding:lt,texStorage2D:Q,texStorage3D:dt,texSubImage2D:I,texSubImage3D:D,compressedTexSubImage2D:L,compressedTexSubImage3D:j,scissor:ht,viewport:Lt,reset:kt}}function J0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,h=new WeakMap,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(x,p){return m?new OffscreenCanvas(x,p):or("canvas")}function v(x,p,A){let I=1,D=V(x);if((D.width>A||D.height>A)&&(I=A/Math.max(D.width,D.height)),I<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){let L=Math.floor(I*D.width),j=Math.floor(I*D.height);d===void 0&&(d=_(L,j));let Q=p?_(L,j):d;return Q.width=L,Q.height=j,Q.getContext("2d").drawImage(x,0,0,L,j),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+L+"x"+j+")."),Q}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),x;return x}function g(x){return x.generateMipmaps}function u(x){i.generateMipmap(x)}function T(x){return x.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?i.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(x,p,A,I,D=!1){if(x!==null){if(i[x]!==void 0)return i[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let L=p;if(p===i.RED&&(A===i.FLOAT&&(L=i.R32F),A===i.HALF_FLOAT&&(L=i.R16F),A===i.UNSIGNED_BYTE&&(L=i.R8)),p===i.RED_INTEGER&&(A===i.UNSIGNED_BYTE&&(L=i.R8UI),A===i.UNSIGNED_SHORT&&(L=i.R16UI),A===i.UNSIGNED_INT&&(L=i.R32UI),A===i.BYTE&&(L=i.R8I),A===i.SHORT&&(L=i.R16I),A===i.INT&&(L=i.R32I)),p===i.RG&&(A===i.FLOAT&&(L=i.RG32F),A===i.HALF_FLOAT&&(L=i.RG16F),A===i.UNSIGNED_BYTE&&(L=i.RG8)),p===i.RG_INTEGER&&(A===i.UNSIGNED_BYTE&&(L=i.RG8UI),A===i.UNSIGNED_SHORT&&(L=i.RG16UI),A===i.UNSIGNED_INT&&(L=i.RG32UI),A===i.BYTE&&(L=i.RG8I),A===i.SHORT&&(L=i.RG16I),A===i.INT&&(L=i.RG32I)),p===i.RGB_INTEGER&&(A===i.UNSIGNED_BYTE&&(L=i.RGB8UI),A===i.UNSIGNED_SHORT&&(L=i.RGB16UI),A===i.UNSIGNED_INT&&(L=i.RGB32UI),A===i.BYTE&&(L=i.RGB8I),A===i.SHORT&&(L=i.RGB16I),A===i.INT&&(L=i.RGB32I)),p===i.RGBA_INTEGER&&(A===i.UNSIGNED_BYTE&&(L=i.RGBA8UI),A===i.UNSIGNED_SHORT&&(L=i.RGBA16UI),A===i.UNSIGNED_INT&&(L=i.RGBA32UI),A===i.BYTE&&(L=i.RGBA8I),A===i.SHORT&&(L=i.RGBA16I),A===i.INT&&(L=i.RGBA32I)),p===i.RGB&&(A===i.UNSIGNED_INT_5_9_9_9_REV&&(L=i.RGB9_E5),A===i.UNSIGNED_INT_10F_11F_11F_REV&&(L=i.R11F_G11F_B10F)),p===i.RGBA){let j=D?rr:qt.getTransfer(I);A===i.FLOAT&&(L=i.RGBA32F),A===i.HALF_FLOAT&&(L=i.RGBA16F),A===i.UNSIGNED_BYTE&&(L=j===jt?i.SRGB8_ALPHA8:i.RGBA8),A===i.UNSIGNED_SHORT_4_4_4_4&&(L=i.RGBA4),A===i.UNSIGNED_SHORT_5_5_5_1&&(L=i.RGB5_A1)}return(L===i.R16F||L===i.R32F||L===i.RG16F||L===i.RG32F||L===i.RGBA16F||L===i.RGBA32F)&&t.get("EXT_color_buffer_float"),L}function y(x,p){let A;return x?p===null||p===yi||p===Ps?A=i.DEPTH24_STENCIL8:p===Rn?A=i.DEPTH32F_STENCIL8:p===Rs&&(A=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===yi||p===Ps?A=i.DEPTH_COMPONENT24:p===Rn?A=i.DEPTH_COMPONENT32F:p===Rs&&(A=i.DEPTH_COMPONENT16),A}function E(x,p){return g(x)===!0||x.isFramebufferTexture&&x.minFilter!==Ye&&x.minFilter!==wn?Math.log2(Math.max(p.width,p.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?p.mipmaps.length:1}function R(x){let p=x.target;p.removeEventListener("dispose",R),P(p),p.isVideoTexture&&h.delete(p)}function b(x){let p=x.target;p.removeEventListener("dispose",b),S(p)}function P(x){let p=n.get(x);if(p.__webglInit===void 0)return;let A=x.source,I=f.get(A);if(I){let D=I[p.__cacheKey];D.usedTimes--,D.usedTimes===0&&M(x),Object.keys(I).length===0&&f.delete(A)}n.remove(x)}function M(x){let p=n.get(x);i.deleteTexture(p.__webglTexture);let A=x.source,I=f.get(A);delete I[p.__cacheKey],a.memory.textures--}function S(x){let p=n.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),n.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(p.__webglFramebuffer[I]))for(let D=0;D<p.__webglFramebuffer[I].length;D++)i.deleteFramebuffer(p.__webglFramebuffer[I][D]);else i.deleteFramebuffer(p.__webglFramebuffer[I]);p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer[I])}else{if(Array.isArray(p.__webglFramebuffer))for(let I=0;I<p.__webglFramebuffer.length;I++)i.deleteFramebuffer(p.__webglFramebuffer[I]);else i.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&i.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let I=0;I<p.__webglColorRenderbuffer.length;I++)p.__webglColorRenderbuffer[I]&&i.deleteRenderbuffer(p.__webglColorRenderbuffer[I]);p.__webglDepthRenderbuffer&&i.deleteRenderbuffer(p.__webglDepthRenderbuffer)}let A=x.textures;for(let I=0,D=A.length;I<D;I++){let L=n.get(A[I]);L.__webglTexture&&(i.deleteTexture(L.__webglTexture),a.memory.textures--),n.remove(A[I])}n.remove(x)}let U=0;function O(){U=0}function W(){let x=U;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),U+=1,x}function H(x){let p=[];return p.push(x.wrapS),p.push(x.wrapT),p.push(x.wrapR||0),p.push(x.magFilter),p.push(x.minFilter),p.push(x.anisotropy),p.push(x.internalFormat),p.push(x.format),p.push(x.type),p.push(x.generateMipmaps),p.push(x.premultiplyAlpha),p.push(x.flipY),p.push(x.unpackAlignment),p.push(x.colorSpace),p.join()}function q(x,p){let A=n.get(x);if(x.isVideoTexture&&Ft(x),x.isRenderTargetTexture===!1&&x.isExternalTexture!==!0&&x.version>0&&A.__version!==x.version){let I=x.image;if(I===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(A,x,p);return}}else x.isExternalTexture&&(A.__webglTexture=x.sourceTexture?x.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,A.__webglTexture,i.TEXTURE0+p)}function G(x,p){let A=n.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&A.__version!==x.version){Z(A,x,p);return}e.bindTexture(i.TEXTURE_2D_ARRAY,A.__webglTexture,i.TEXTURE0+p)}function nt(x,p){let A=n.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&A.__version!==x.version){Z(A,x,p);return}e.bindTexture(i.TEXTURE_3D,A.__webglTexture,i.TEXTURE0+p)}function Y(x,p){let A=n.get(x);if(x.version>0&&A.__version!==x.version){K(A,x,p);return}e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+p)}let at={[Sa]:i.REPEAT,[ui]:i.CLAMP_TO_EDGE,[Ta]:i.MIRRORED_REPEAT},ut={[Ye]:i.NEAREST,[su]:i.NEAREST_MIPMAP_NEAREST,[Rr]:i.NEAREST_MIPMAP_LINEAR,[wn]:i.LINEAR,[co]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},wt={[lu]:i.NEVER,[pu]:i.ALWAYS,[cu]:i.LESS,[dc]:i.LEQUAL,[hu]:i.EQUAL,[fu]:i.GEQUAL,[uu]:i.GREATER,[du]:i.NOTEQUAL};function Nt(x,p){if(p.type===Rn&&t.has("OES_texture_float_linear")===!1&&(p.magFilter===wn||p.magFilter===co||p.magFilter===Rr||p.magFilter===vi||p.minFilter===wn||p.minFilter===co||p.minFilter===Rr||p.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(x,i.TEXTURE_WRAP_S,at[p.wrapS]),i.texParameteri(x,i.TEXTURE_WRAP_T,at[p.wrapT]),(x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY)&&i.texParameteri(x,i.TEXTURE_WRAP_R,at[p.wrapR]),i.texParameteri(x,i.TEXTURE_MAG_FILTER,ut[p.magFilter]),i.texParameteri(x,i.TEXTURE_MIN_FILTER,ut[p.minFilter]),p.compareFunction&&(i.texParameteri(x,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(x,i.TEXTURE_COMPARE_FUNC,wt[p.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===Ye||p.minFilter!==Rr&&p.minFilter!==vi||p.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||n.get(p).__currentAnisotropy){let A=t.get("EXT_texture_filter_anisotropic");i.texParameterf(x,A.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,s.getMaxAnisotropy())),n.get(p).__currentAnisotropy=p.anisotropy}}}function ie(x,p){let A=!1;x.__webglInit===void 0&&(x.__webglInit=!0,p.addEventListener("dispose",R));let I=p.source,D=f.get(I);D===void 0&&(D={},f.set(I,D));let L=H(p);if(L!==x.__cacheKey){D[L]===void 0&&(D[L]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,A=!0),D[L].usedTimes++;let j=D[x.__cacheKey];j!==void 0&&(D[x.__cacheKey].usedTimes--,j.usedTimes===0&&M(p)),x.__cacheKey=L,x.__webglTexture=D[L].texture}return A}function se(x,p,A){return Math.floor(Math.floor(x/A)/p)}function Ht(x,p,A,I){let L=x.updateRanges;if(L.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,p.width,p.height,A,I,p.data);else{L.sort((tt,ht)=>tt.start-ht.start);let j=0;for(let tt=1;tt<L.length;tt++){let ht=L[j],Lt=L[tt],Tt=ht.start+ht.count,lt=se(Lt.start,p.width,4),kt=se(ht.start,p.width,4);Lt.start<=Tt+1&&lt===kt&&se(Lt.start+Lt.count-1,p.width,4)===lt?ht.count=Math.max(ht.count,Lt.start+Lt.count-ht.start):(++j,L[j]=Lt)}L.length=j+1;let Q=i.getParameter(i.UNPACK_ROW_LENGTH),dt=i.getParameter(i.UNPACK_SKIP_PIXELS),ft=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,p.width);for(let tt=0,ht=L.length;tt<ht;tt++){let Lt=L[tt],Tt=Math.floor(Lt.start/4),lt=Math.ceil(Lt.count/4),kt=Tt%p.width,B=Math.floor(Tt/p.width),st=lt,rt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,kt),i.pixelStorei(i.UNPACK_SKIP_ROWS,B),e.texSubImage2D(i.TEXTURE_2D,0,kt,B,st,rt,A,I,p.data)}x.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Q),i.pixelStorei(i.UNPACK_SKIP_PIXELS,dt),i.pixelStorei(i.UNPACK_SKIP_ROWS,ft)}}function Z(x,p,A){let I=i.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(I=i.TEXTURE_2D_ARRAY),p.isData3DTexture&&(I=i.TEXTURE_3D);let D=ie(x,p),L=p.source;e.bindTexture(I,x.__webglTexture,i.TEXTURE0+A);let j=n.get(L);if(L.version!==j.__version||D===!0){e.activeTexture(i.TEXTURE0+A);let Q=qt.getPrimaries(qt.workingColorSpace),dt=p.colorSpace===ei?null:qt.getPrimaries(p.colorSpace),ft=p.colorSpace===ei||Q===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let tt=v(p.image,!1,s.maxTextureSize);tt=ve(p,tt);let ht=r.convert(p.format,p.colorSpace),Lt=r.convert(p.type),Tt=C(p.internalFormat,ht,Lt,p.colorSpace,p.isVideoTexture);Nt(I,p);let lt,kt=p.mipmaps,B=p.isVideoTexture!==!0,st=j.__version===void 0||D===!0,rt=L.dataReady,_t=E(p,tt);if(p.isDepthTexture)Tt=y(p.format===Is,p.type),st&&(B?e.texStorage2D(i.TEXTURE_2D,1,Tt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Tt,tt.width,tt.height,0,ht,Lt,null));else if(p.isDataTexture)if(kt.length>0){B&&st&&e.texStorage2D(i.TEXTURE_2D,_t,Tt,kt[0].width,kt[0].height);for(let et=0,J=kt.length;et<J;et++)lt=kt[et],B?rt&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,lt.width,lt.height,ht,Lt,lt.data):e.texImage2D(i.TEXTURE_2D,et,Tt,lt.width,lt.height,0,ht,Lt,lt.data);p.generateMipmaps=!1}else B?(st&&e.texStorage2D(i.TEXTURE_2D,_t,Tt,tt.width,tt.height),rt&&Ht(p,tt,ht,Lt)):e.texImage2D(i.TEXTURE_2D,0,Tt,tt.width,tt.height,0,ht,Lt,tt.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){B&&st&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Tt,kt[0].width,kt[0].height,tt.depth);for(let et=0,J=kt.length;et<J;et++)if(lt=kt[et],p.format!==_n)if(ht!==null)if(B){if(rt)if(p.layerUpdates.size>0){let Mt=vc(lt.width,lt.height,p.format,p.type);for(let Bt of p.layerUpdates){let ce=lt.data.subarray(Bt*Mt/lt.data.BYTES_PER_ELEMENT,(Bt+1)*Mt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,Bt,lt.width,lt.height,1,ht,ce)}p.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,lt.width,lt.height,tt.depth,ht,lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,Tt,lt.width,lt.height,tt.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?rt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,lt.width,lt.height,tt.depth,ht,Lt,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,Tt,lt.width,lt.height,tt.depth,0,ht,Lt,lt.data)}else{B&&st&&e.texStorage2D(i.TEXTURE_2D,_t,Tt,kt[0].width,kt[0].height);for(let et=0,J=kt.length;et<J;et++)lt=kt[et],p.format!==_n?ht!==null?B?rt&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,lt.width,lt.height,ht,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,et,Tt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?rt&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,lt.width,lt.height,ht,Lt,lt.data):e.texImage2D(i.TEXTURE_2D,et,Tt,lt.width,lt.height,0,ht,Lt,lt.data)}else if(p.isDataArrayTexture)if(B){if(st&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Tt,tt.width,tt.height,tt.depth),rt)if(p.layerUpdates.size>0){let et=vc(tt.width,tt.height,p.format,p.type);for(let J of p.layerUpdates){let Mt=tt.data.subarray(J*et/tt.data.BYTES_PER_ELEMENT,(J+1)*et/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,tt.width,tt.height,1,ht,Lt,Mt)}p.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ht,Lt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,tt.width,tt.height,tt.depth,0,ht,Lt,tt.data);else if(p.isData3DTexture)B?(st&&e.texStorage3D(i.TEXTURE_3D,_t,Tt,tt.width,tt.height,tt.depth),rt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ht,Lt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,tt.width,tt.height,tt.depth,0,ht,Lt,tt.data);else if(p.isFramebufferTexture){if(st)if(B)e.texStorage2D(i.TEXTURE_2D,_t,Tt,tt.width,tt.height);else{let et=tt.width,J=tt.height;for(let Mt=0;Mt<_t;Mt++)e.texImage2D(i.TEXTURE_2D,Mt,Tt,et,J,0,ht,Lt,null),et>>=1,J>>=1}}else if(kt.length>0){if(B&&st){let et=V(kt[0]);e.texStorage2D(i.TEXTURE_2D,_t,Tt,et.width,et.height)}for(let et=0,J=kt.length;et<J;et++)lt=kt[et],B?rt&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,ht,Lt,lt):e.texImage2D(i.TEXTURE_2D,et,Tt,ht,Lt,lt);p.generateMipmaps=!1}else if(B){if(st){let et=V(tt);e.texStorage2D(i.TEXTURE_2D,_t,Tt,et.width,et.height)}rt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,Lt,tt)}else e.texImage2D(i.TEXTURE_2D,0,Tt,ht,Lt,tt);g(p)&&u(I),j.__version=L.version,p.onUpdate&&p.onUpdate(p)}x.__version=p.version}function K(x,p,A){if(p.image.length!==6)return;let I=ie(x,p),D=p.source;e.bindTexture(i.TEXTURE_CUBE_MAP,x.__webglTexture,i.TEXTURE0+A);let L=n.get(D);if(D.version!==L.__version||I===!0){e.activeTexture(i.TEXTURE0+A);let j=qt.getPrimaries(qt.workingColorSpace),Q=p.colorSpace===ei?null:qt.getPrimaries(p.colorSpace),dt=p.colorSpace===ei||j===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let ft=p.isCompressedTexture||p.image[0].isCompressedTexture,tt=p.image[0]&&p.image[0].isDataTexture,ht=[];for(let J=0;J<6;J++)!ft&&!tt?ht[J]=v(p.image[J],!0,s.maxCubemapSize):ht[J]=tt?p.image[J].image:p.image[J],ht[J]=ve(p,ht[J]);let Lt=ht[0],Tt=r.convert(p.format,p.colorSpace),lt=r.convert(p.type),kt=C(p.internalFormat,Tt,lt,p.colorSpace),B=p.isVideoTexture!==!0,st=L.__version===void 0||I===!0,rt=D.dataReady,_t=E(p,Lt);Nt(i.TEXTURE_CUBE_MAP,p);let et;if(ft){B&&st&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,kt,Lt.width,Lt.height);for(let J=0;J<6;J++){et=ht[J].mipmaps;for(let Mt=0;Mt<et.length;Mt++){let Bt=et[Mt];p.format!==_n?Tt!==null?B?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt,0,0,Bt.width,Bt.height,Tt,Bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt,kt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt,0,0,Bt.width,Bt.height,Tt,lt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt,kt,Bt.width,Bt.height,0,Tt,lt,Bt.data)}}}else{if(et=p.mipmaps,B&&st){et.length>0&&_t++;let J=V(ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,kt,J.width,J.height)}for(let J=0;J<6;J++)if(tt){B?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ht[J].width,ht[J].height,Tt,lt,ht[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,kt,ht[J].width,ht[J].height,0,Tt,lt,ht[J].data);for(let Mt=0;Mt<et.length;Mt++){let ce=et[Mt].image[J].image;B?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt+1,0,0,ce.width,ce.height,Tt,lt,ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt+1,kt,ce.width,ce.height,0,Tt,lt,ce.data)}}else{B?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Tt,lt,ht[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,kt,Tt,lt,ht[J]);for(let Mt=0;Mt<et.length;Mt++){let Bt=et[Mt];B?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt+1,0,0,Tt,lt,Bt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt+1,kt,Tt,lt,Bt.image[J])}}}g(p)&&u(i.TEXTURE_CUBE_MAP),L.__version=D.version,p.onUpdate&&p.onUpdate(p)}x.__version=p.version}function gt(x,p,A,I,D,L){let j=r.convert(A.format,A.colorSpace),Q=r.convert(A.type),dt=C(A.internalFormat,j,Q,A.colorSpace),ft=n.get(p),tt=n.get(A);if(tt.__renderTarget=p,!ft.__hasExternalTextures){let ht=Math.max(1,p.width>>L),Lt=Math.max(1,p.height>>L);D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?e.texImage3D(D,L,dt,ht,Lt,p.depth,0,j,Q,null):e.texImage2D(D,L,dt,ht,Lt,0,j,Q,null)}e.bindFramebuffer(i.FRAMEBUFFER,x),vt(p)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,I,D,tt.__webglTexture,0,le(p)):(D===i.TEXTURE_2D||D>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&D<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,I,D,tt.__webglTexture,L),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(x,p,A){if(i.bindRenderbuffer(i.RENDERBUFFER,x),p.depthBuffer){let I=p.depthTexture,D=I&&I.isDepthTexture?I.type:null,L=y(p.stencilBuffer,D),j=p.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=le(p);vt(p)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,L,p.width,p.height):A?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,L,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,L,p.width,p.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,x)}else{let I=p.textures;for(let D=0;D<I.length;D++){let L=I[D],j=r.convert(L.format,L.colorSpace),Q=r.convert(L.type),dt=C(L.internalFormat,j,Q,L.colorSpace),ft=le(p);A&&vt(p)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,dt,p.width,p.height):vt(p)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,dt,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,dt,p.width,p.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(x,p){if(p&&p.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,x),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let I=n.get(p.depthTexture);I.__renderTarget=p,(!I.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),q(p.depthTexture,0);let D=I.__webglTexture,L=le(p);if(p.depthTexture.format===xs)vt(p)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,D,0,L):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,D,0);else if(p.depthTexture.format===Is)vt(p)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,D,0,L):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,D,0);else throw new Error("Unknown depthTexture format")}function Xt(x){let p=n.get(x),A=x.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==x.depthTexture){let I=x.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),I){let D=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,I.removeEventListener("dispose",D)};I.addEventListener("dispose",D),p.__depthDisposeCallback=D}p.__boundDepthTexture=I}if(x.depthTexture&&!p.__autoAllocateDepthBuffer){if(A)throw new Error("target.depthTexture not supported in Cube render targets");let I=x.texture.mipmaps;I&&I.length>0?St(p.__webglFramebuffer[0],x):St(p.__webglFramebuffer,x)}else if(A){p.__webglDepthbuffer=[];for(let I=0;I<6;I++)if(e.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer[I]),p.__webglDepthbuffer[I]===void 0)p.__webglDepthbuffer[I]=i.createRenderbuffer(),Dt(p.__webglDepthbuffer[I],x,!1);else{let D=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,L=p.__webglDepthbuffer[I];i.bindRenderbuffer(i.RENDERBUFFER,L),i.framebufferRenderbuffer(i.FRAMEBUFFER,D,i.RENDERBUFFER,L)}}else{let I=x.texture.mipmaps;if(I&&I.length>0?e.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=i.createRenderbuffer(),Dt(p.__webglDepthbuffer,x,!1);else{let D=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,L=p.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,L),i.framebufferRenderbuffer(i.FRAMEBUFFER,D,i.RENDERBUFFER,L)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(x,p,A){let I=n.get(x);p!==void 0&&gt(I.__webglFramebuffer,x,x.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),A!==void 0&&Xt(x)}function N(x){let p=x.texture,A=n.get(x),I=n.get(p);x.addEventListener("dispose",b);let D=x.textures,L=x.isWebGLCubeRenderTarget===!0,j=D.length>1;if(j||(I.__webglTexture===void 0&&(I.__webglTexture=i.createTexture()),I.__version=p.version,a.memory.textures++),L){A.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(p.mipmaps&&p.mipmaps.length>0){A.__webglFramebuffer[Q]=[];for(let dt=0;dt<p.mipmaps.length;dt++)A.__webglFramebuffer[Q][dt]=i.createFramebuffer()}else A.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){A.__webglFramebuffer=[];for(let Q=0;Q<p.mipmaps.length;Q++)A.__webglFramebuffer[Q]=i.createFramebuffer()}else A.__webglFramebuffer=i.createFramebuffer();if(j)for(let Q=0,dt=D.length;Q<dt;Q++){let ft=n.get(D[Q]);ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture(),a.memory.textures++)}if(x.samples>0&&vt(x)===!1){A.__webglMultisampledFramebuffer=i.createFramebuffer(),A.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,A.__webglMultisampledFramebuffer);for(let Q=0;Q<D.length;Q++){let dt=D[Q];A.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,A.__webglColorRenderbuffer[Q]);let ft=r.convert(dt.format,dt.colorSpace),tt=r.convert(dt.type),ht=C(dt.internalFormat,ft,tt,dt.colorSpace,x.isXRRenderTarget===!0),Lt=le(x);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,ht,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,A.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),x.depthBuffer&&(A.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt(A.__webglDepthRenderbuffer,x,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(L){e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,p);for(let Q=0;Q<6;Q++)if(p.mipmaps&&p.mipmaps.length>0)for(let dt=0;dt<p.mipmaps.length;dt++)gt(A.__webglFramebuffer[Q][dt],x,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt);else gt(A.__webglFramebuffer[Q],x,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);g(p)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(j){for(let Q=0,dt=D.length;Q<dt;Q++){let ft=D[Q],tt=n.get(ft),ht=i.TEXTURE_2D;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ht=x.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,tt.__webglTexture),Nt(ht,ft),gt(A.__webglFramebuffer,x,ft,i.COLOR_ATTACHMENT0+Q,ht,0),g(ft)&&u(ht)}e.unbindTexture()}else{let Q=i.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(Q=x.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,I.__webglTexture),Nt(Q,p),p.mipmaps&&p.mipmaps.length>0)for(let dt=0;dt<p.mipmaps.length;dt++)gt(A.__webglFramebuffer[dt],x,p,i.COLOR_ATTACHMENT0,Q,dt);else gt(A.__webglFramebuffer,x,p,i.COLOR_ATTACHMENT0,Q,0);g(p)&&u(Q),e.unbindTexture()}x.depthBuffer&&Xt(x)}function te(x){let p=x.textures;for(let A=0,I=p.length;A<I;A++){let D=p[A];if(g(D)){let L=T(x),j=n.get(D).__webglTexture;e.bindTexture(L,j),u(L),e.unbindTexture()}}}let Ot=[],Pt=[];function xt(x){if(x.samples>0){if(vt(x)===!1){let p=x.textures,A=x.width,I=x.height,D=i.COLOR_BUFFER_BIT,L=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=n.get(x),Q=p.length>1;if(Q)for(let ft=0;ft<p.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,j.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,j.__webglMultisampledFramebuffer);let dt=x.texture.mipmaps;dt&&dt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,j.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,j.__webglFramebuffer);for(let ft=0;ft<p.length;ft++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(D|=i.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(D|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,j.__webglColorRenderbuffer[ft]);let tt=n.get(p[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,tt,0)}i.blitFramebuffer(0,0,A,I,0,0,A,I,D,i.NEAREST),l===!0&&(Ot.length=0,Pt.length=0,Ot.push(i.COLOR_ATTACHMENT0+ft),x.depthBuffer&&x.resolveDepthBuffer===!1&&(Ot.push(L),Pt.push(L),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Pt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ot))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let ft=0;ft<p.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,j.__webglColorRenderbuffer[ft]);let tt=n.get(p[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,j.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,tt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,j.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){let p=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[p])}}}function le(x){return Math.min(s.maxSamples,x.samples)}function vt(x){let p=n.get(x);return x.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function Ft(x){let p=a.render.frame;h.get(x)!==p&&(h.set(x,p),x.update())}function ve(x,p){let A=x.colorSpace,I=x.format,D=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||A!==Oi&&A!==ei&&(qt.getTransfer(A)===jt?(I!==_n||D!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",A)),p}function V(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=O,this.setTexture2D=q,this.setTexture2DArray=G,this.setTexture3D=nt,this.setTextureCube=Y,this.rebindTextures=xe,this.setupRenderTarget=N,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=vt}function K0(i,t){function e(n,s=ei){let r,a=qt.getTransfer(s);if(n===Cn)return i.UNSIGNED_BYTE;if(n===uo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===oc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===rc)return i.BYTE;if(n===ac)return i.SHORT;if(n===Rs)return i.UNSIGNED_SHORT;if(n===ho)return i.INT;if(n===yi)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===gn)return i.HALF_FLOAT;if(n===cc)return i.ALPHA;if(n===hc)return i.RGB;if(n===_n)return i.RGBA;if(n===xs)return i.DEPTH_COMPONENT;if(n===Is)return i.DEPTH_STENCIL;if(n===po)return i.RED;if(n===mo)return i.RED_INTEGER;if(n===uc)return i.RG;if(n===go)return i.RG_INTEGER;if(n===_o)return i.RGBA_INTEGER;if(n===Pr||n===Ir||n===Lr||n===Dr)if(a===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Lr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xo||n===vo||n===yo||n===Mo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bo||n===So||n===To)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bo||n===So)return a===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===To)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wo||n===Eo||n===Ao||n===Co||n===Ro||n===Po||n===Io||n===Lo||n===Do||n===Uo||n===No||n===Fo||n===Oo||n===Bo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ao)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Co)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ro)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Po)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Io)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Do)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===No)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zo||n===ko||n===Vo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zo)return a===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ho||n===Go||n===Wo||n===Xo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ho)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Go)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t_=`
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

}`,Lc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new xr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Se({vertexShader:Q0,fragmentShader:t_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Gt(new en(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dc=class extends Dn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,_=null,v=typeof XRWebGLBinding<"u",g=new Lc,u={},T=e.getContextAttributes(),C=null,y=null,E=[],R=[],b=new mt,P=null,M=new Ee;M.viewport=new ee;let S=new Ee;S.viewport=new ee;let U=[M,S],O=new $a,W=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let K=E[Z];return K===void 0&&(K=new Ss,E[Z]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Z){let K=E[Z];return K===void 0&&(K=new Ss,E[Z]=K),K.getGripSpace()},this.getHand=function(Z){let K=E[Z];return K===void 0&&(K=new Ss,E[Z]=K),K.getHandSpace()};function q(Z){let K=R.indexOf(Z.inputSource);if(K===-1)return;let gt=E[K];gt!==void 0&&(gt.update(Z.inputSource,Z.frame,c||a),gt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",nt);for(let Z=0;Z<E.length;Z++){let K=R[Z];K!==null&&(R[Z]=null,E[Z].disconnect(K))}W=null,H=null,g.reset();for(let Z in u)delete u[Z];t.setRenderTarget(C),m=null,f=null,d=null,s=null,y=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",G),s.addEventListener("inputsourceschange",nt),T.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(b),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,Dt=null,St=null;T.depth&&(St=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=T.stencil?Is:xs,Dt=T.stencil?Ps:yi);let Xt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Xt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new ze(f.textureWidth,f.textureHeight,{format:_n,type:Cn,depthTexture:new _r(f.textureWidth,f.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let gt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new ze(m.framebufferWidth,m.framebufferHeight,{format:_n,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ht.setContext(s),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function nt(Z){for(let K=0;K<Z.removed.length;K++){let gt=Z.removed[K],Dt=R.indexOf(gt);Dt>=0&&(R[Dt]=null,E[Dt].disconnect(gt))}for(let K=0;K<Z.added.length;K++){let gt=Z.added[K],Dt=R.indexOf(gt);if(Dt===-1){for(let Xt=0;Xt<E.length;Xt++)if(Xt>=R.length){R.push(gt),Dt=Xt;break}else if(R[Xt]===null){R[Xt]=gt,Dt=Xt;break}if(Dt===-1)break}let St=E[Dt];St&&St.connect(gt)}}let Y=new F,at=new F;function ut(Z,K,gt){Y.setFromMatrixPosition(K.matrixWorld),at.setFromMatrixPosition(gt.matrixWorld);let Dt=Y.distanceTo(at),St=K.projectionMatrix.elements,Xt=gt.projectionMatrix.elements,xe=St[14]/(St[10]-1),N=St[14]/(St[10]+1),te=(St[9]+1)/St[5],Ot=(St[9]-1)/St[5],Pt=(St[8]-1)/St[0],xt=(Xt[8]+1)/Xt[0],le=xe*Pt,vt=xe*xt,Ft=Dt/(-Pt+xt),ve=Ft*-Pt;if(K.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ve),Z.translateZ(Ft),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),St[10]===-1)Z.projectionMatrix.copy(K.projectionMatrix),Z.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let V=xe+Ft,x=N+Ft,p=le-ve,A=vt+(Dt-ve),I=te*N/x*V,D=Ot*N/x*V;Z.projectionMatrix.makePerspective(p,A,I,D,V,x),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function wt(Z,K){K===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(K.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let K=Z.near,gt=Z.far;g.texture!==null&&(g.depthNear>0&&(K=g.depthNear),g.depthFar>0&&(gt=g.depthFar)),O.near=S.near=M.near=K,O.far=S.far=M.far=gt,(W!==O.near||H!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),W=O.near,H=O.far),O.layers.mask=Z.layers.mask|6,M.layers.mask=O.layers.mask&3,S.layers.mask=O.layers.mask&5;let Dt=Z.parent,St=O.cameras;wt(O,Dt);for(let Xt=0;Xt<St.length;Xt++)wt(St[Xt],Dt);St.length===2?ut(O,M,S):O.projectionMatrix.copy(M.projectionMatrix),Nt(Z,O,Dt)};function Nt(Z,K,gt){gt===null?Z.matrix.copy(K.matrixWorld):(Z.matrix.copy(gt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(K.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(K.projectionMatrix),Z.projectionMatrixInverse.copy(K.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=vs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(Z){return u[Z]};let ie=null;function se(Z,K){if(h=K.getViewerPose(c||a),_=K,h!==null){let gt=h.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let Dt=!1;gt.length!==O.cameras.length&&(O.cameras.length=0,Dt=!0);for(let N=0;N<gt.length;N++){let te=gt[N],Ot=null;if(m!==null)Ot=m.getViewport(te);else{let xt=d.getViewSubImage(f,te);Ot=xt.viewport,N===0&&(t.setRenderTargetTextures(y,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(y))}let Pt=U[N];Pt===void 0&&(Pt=new Ee,Pt.layers.enable(N),Pt.viewport=new ee,U[N]=Pt),Pt.matrix.fromArray(te.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(te.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),N===0&&(O.matrix.copy(Pt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Dt===!0&&O.cameras.push(Pt)}let St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let N=d.getDepthInformation(gt[0]);N&&N.isValid&&N.texture&&g.init(N,s.renderState)}if(St&&St.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let N=0;N<gt.length;N++){let te=gt[N].camera;if(te){let Ot=u[te];Ot||(Ot=new xr,u[te]=Ot);let Pt=d.getCameraImage(te);Ot.sourceTexture=Pt}}}}for(let gt=0;gt<E.length;gt++){let Dt=R[gt],St=E[gt];Dt!==null&&St!==void 0&&St.update(Dt,K,c||a)}ie&&ie(Z,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),_=null}let Ht=new Hu;Ht.setAnimationLoop(se),this.setAnimationLoop=function(Z){ie=Z},this.dispose=function(){}}},Zi=new pn,e_=new Kt;function n_(i,t){function e(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function n(g,u){u.color.getRGB(g.fogColor.value,gc(i)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function s(g,u,T,C,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(g,u):u.isMeshToonMaterial?(r(g,u),d(g,u)):u.isMeshPhongMaterial?(r(g,u),h(g,u)):u.isMeshStandardMaterial?(r(g,u),f(g,u),u.isMeshPhysicalMaterial&&m(g,u,y)):u.isMeshMatcapMaterial?(r(g,u),_(g,u)):u.isMeshDepthMaterial?r(g,u):u.isMeshDistanceMaterial?(r(g,u),v(g,u)):u.isMeshNormalMaterial?r(g,u):u.isLineBasicMaterial?(a(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?l(g,u,T,C):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,e(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,e(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,e(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===Ne&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,e(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===Ne&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,e(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,e(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);let T=t.get(u),C=T.envMap,y=T.envMapRotation;C&&(g.envMap.value=C,Zi.copy(y),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),g.envMapRotation.value.setFromMatrix4(e_.makeRotationFromEuler(Zi)),g.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,g.aoMapTransform))}function a(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,e(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,T,C){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*T,g.scale.value=C*.5,u.map&&(g.map.value=u.map,e(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,e(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,e(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,e(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function h(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function d(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function f(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function m(g,u,T){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ne&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,u){u.matcap&&(g.matcap.value=u.matcap)}function v(g,u){let T=t.get(u).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function i_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,C){let y=C.program;n.uniformBlockBinding(T,y)}function c(T,C){let y=s[T.id];y===void 0&&(_(T),y=h(T),s[T.id]=y,T.addEventListener("dispose",g));let E=C.program;n.updateUBOMapping(T,E);let R=t.render.frame;r[T.id]!==R&&(f(T),r[T.id]=R)}function h(T){let C=d();T.__bindingPointIndex=C;let y=i.createBuffer(),E=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,E,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,y),y}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){let C=s[T.id],y=T.uniforms,E=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let R=0,b=y.length;R<b;R++){let P=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,S=P.length;M<S;M++){let U=P[M];if(m(U,R,M,E)===!0){let O=U.__offset,W=Array.isArray(U.value)?U.value:[U.value],H=0;for(let q=0;q<W.length;q++){let G=W[q],nt=v(G);typeof G=="number"||typeof G=="boolean"?(U.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,O+H,U.__data)):G.isMatrix3?(U.__data[0]=G.elements[0],U.__data[1]=G.elements[1],U.__data[2]=G.elements[2],U.__data[3]=0,U.__data[4]=G.elements[3],U.__data[5]=G.elements[4],U.__data[6]=G.elements[5],U.__data[7]=0,U.__data[8]=G.elements[6],U.__data[9]=G.elements[7],U.__data[10]=G.elements[8],U.__data[11]=0):(G.toArray(U.__data,H),H+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,C,y,E){let R=T.value,b=C+"_"+y;if(E[b]===void 0)return typeof R=="number"||typeof R=="boolean"?E[b]=R:E[b]=R.clone(),!0;{let P=E[b];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return E[b]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function _(T){let C=T.uniforms,y=0,E=16;for(let b=0,P=C.length;b<P;b++){let M=Array.isArray(C[b])?C[b]:[C[b]];for(let S=0,U=M.length;S<U;S++){let O=M[S],W=Array.isArray(O.value)?O.value:[O.value];for(let H=0,q=W.length;H<q;H++){let G=W[H],nt=v(G),Y=y%E,at=Y%nt.boundary,ut=Y+at;y+=at,ut!==0&&E-ut<nt.storage&&(y+=E-ut),O.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=nt.storage}}}let R=y%E;return R>0&&(y+=E-R),T.__size=y,T.__cache={},this}function v(T){let C={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(C.boundary=4,C.storage=4):T.isVector2?(C.boundary=8,C.storage=8):T.isVector3||T.isColor?(C.boundary=16,C.storage=12):T.isVector4?(C.boundary=16,C.storage=16):T.isMatrix3?(C.boundary=48,C.storage=48):T.isMatrix4?(C.boundary=64,C.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),C}function g(T){let C=T.target;C.removeEventListener("dispose",g);let y=a.indexOf(C.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function u(){for(let T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}var Fs=class{constructor(t={}){let{canvas:e=mu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let _=new Uint32Array(4),v=new Int32Array(4),g=null,u=null,T=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,E=!1;this._outputColorSpace=we;let R=0,b=0,P=null,M=-1,S=null,U=new ee,O=new ee,W=null,H=new At(0),q=0,G=e.width,nt=e.height,Y=1,at=null,ut=null,wt=new ee(0,0,G,nt),Nt=new ee(0,0,G,nt),ie=!1,se=new Ts,Ht=!1,Z=!1,K=new Kt,gt=new F,Dt=new ee,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xt=!1;function xe(){return P===null?Y:1}let N=n;function te(w,z){return e.getContext(w,z)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",et,!1),N===null){let z="webgl2";if(N=te(z,w),N===null)throw te(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ot,Pt,xt,le,vt,Ft,ve,V,x,p,A,I,D,L,j,Q,dt,ft,tt,ht,Lt,Tt,lt,kt;function B(){Ot=new Mg(N),Ot.init(),Tt=new K0(N,Ot),Pt=new pg(N,Ot,t,Tt),xt=new j0(N,Ot),Pt.reversedDepthBuffer&&f&&xt.buffers.depth.setReversed(!0),le=new Tg(N),vt=new O0,Ft=new J0(N,Ot,xt,vt,Pt,Tt,le),ve=new gg(y),V=new yg(y),x=new Pf(N),lt=new dg(N,x),p=new bg(N,x,le,lt),A=new Eg(N,p,x,le),tt=new wg(N,Pt,Ft),Q=new mg(vt),I=new F0(y,ve,V,Ot,Pt,lt,Q),D=new n_(y,vt),L=new z0,j=new X0(Ot),ft=new ug(y,ve,V,xt,A,m,l),dt=new Y0(y,A,Pt),kt=new i_(N,le,Pt,xt),ht=new fg(N,Ot,le),Lt=new Sg(N,Ot,le),le.programs=I.programs,y.capabilities=Pt,y.extensions=Ot,y.properties=vt,y.renderLists=L,y.shadowMap=dt,y.state=xt,y.info=le}B();let st=new Dc(y,N);this.xr=st,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let w=Ot.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ot.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(G,nt,!1))},this.getSize=function(w){return w.set(G,nt)},this.setSize=function(w,z,X=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,nt=z,e.width=Math.floor(w*Y),e.height=Math.floor(z*Y),X===!0&&(e.style.width=w+"px",e.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(G*Y,nt*Y).floor()},this.setDrawingBufferSize=function(w,z,X){G=w,nt=z,Y=X,e.width=Math.floor(w*X),e.height=Math.floor(z*X),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(U)},this.getViewport=function(w){return w.copy(wt)},this.setViewport=function(w,z,X,$){w.isVector4?wt.set(w.x,w.y,w.z,w.w):wt.set(w,z,X,$),xt.viewport(U.copy(wt).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(Nt)},this.setScissor=function(w,z,X,$){w.isVector4?Nt.set(w.x,w.y,w.z,w.w):Nt.set(w,z,X,$),xt.scissor(O.copy(Nt).multiplyScalar(Y).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(w){xt.setScissorTest(ie=w)},this.setOpaqueSort=function(w){at=w},this.setTransparentSort=function(w){ut=w},this.getClearColor=function(w){return w.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor(...arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha(...arguments)},this.clear=function(w=!0,z=!0,X=!0){let $=0;if(w){let k=!1;if(P!==null){let it=P.texture.format;k=it===_o||it===go||it===mo}if(k){let it=P.texture.type,ct=it===Cn||it===yi||it===Rs||it===Ps||it===uo||it===fo,yt=ft.getClearColor(),pt=ft.getClearAlpha(),It=yt.r,Ut=yt.g,Ct=yt.b;ct?(_[0]=It,_[1]=Ut,_[2]=Ct,_[3]=pt,N.clearBufferuiv(N.COLOR,0,_)):(v[0]=It,v[1]=Ut,v[2]=Ct,v[3]=pt,N.clearBufferiv(N.COLOR,0,v))}else $|=N.COLOR_BUFFER_BIT}z&&($|=N.DEPTH_BUFFER_BIT),X&&($|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",et,!1),ft.dispose(),L.dispose(),j.dispose(),vt.dispose(),ve.dispose(),V.dispose(),A.dispose(),lt.dispose(),kt.dispose(),I.dispose(),st.dispose(),st.removeEventListener("sessionstart",Ln),st.removeEventListener("sessionend",Qc),Ci.stop()};function rt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let w=le.autoReset,z=dt.enabled,X=dt.autoUpdate,$=dt.needsUpdate,k=dt.type;B(),le.autoReset=w,dt.enabled=z,dt.autoUpdate=X,dt.needsUpdate=$,dt.type=k}function et(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function J(w){let z=w.target;z.removeEventListener("dispose",J),Mt(z)}function Mt(w){Bt(w),vt.remove(w)}function Bt(w){let z=vt.get(w).programs;z!==void 0&&(z.forEach(function(X){I.releaseProgram(X)}),w.isShaderMaterial&&I.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,X,$,k,it){z===null&&(z=St);let ct=k.isMesh&&k.matrixWorld.determinant()<0,yt=Cd(w,z,X,$,k);xt.setMaterial($,ct);let pt=X.index,It=1;if($.wireframe===!0){if(pt=p.getWireframeAttribute(X),pt===void 0)return;It=2}let Ut=X.drawRange,Ct=X.attributes.position,$t=Ut.start*It,re=(Ut.start+Ut.count)*It;it!==null&&($t=Math.max($t,it.start*It),re=Math.min(re,(it.start+it.count)*It)),pt!==null?($t=Math.max($t,0),re=Math.min(re,pt.count)):Ct!=null&&($t=Math.max($t,0),re=Math.min(re,Ct.count));let _e=re-$t;if(_e<0||_e===1/0)return;lt.setup(k,$,yt,X,pt);let ue,oe=ht;if(pt!==null&&(ue=x.get(pt),oe=Lt,oe.setIndex(ue)),k.isMesh)$.wireframe===!0?(xt.setLineWidth($.wireframeLinewidth*xe()),oe.setMode(N.LINES)):oe.setMode(N.TRIANGLES);else if(k.isLine){let Rt=$.linewidth;Rt===void 0&&(Rt=1),xt.setLineWidth(Rt*xe()),k.isLineSegments?oe.setMode(N.LINES):k.isLineLoop?oe.setMode(N.LINE_LOOP):oe.setMode(N.LINE_STRIP)}else k.isPoints?oe.setMode(N.POINTS):k.isSprite&&oe.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),oe.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))oe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Rt=k._multiDrawStarts,pe=k._multiDrawCounts,Zt=k._multiDrawCount,Je=pt?x.get(pt).bytesPerElement:1,es=vt.get($).currentProgram.getUniforms();for(let Ke=0;Ke<Zt;Ke++)es.setValue(N,"_gl_DrawID",Ke),oe.render(Rt[Ke]/Je,pe[Ke])}else if(k.isInstancedMesh)oe.renderInstances($t,_e,k.count);else if(X.isInstancedBufferGeometry){let Rt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,pe=Math.min(X.instanceCount,Rt);oe.renderInstances($t,_e,pe)}else oe.render($t,_e)};function ce(w,z,X){w.transparent===!0&&w.side===Xe&&w.forceSinglePass===!1?(w.side=Ne,w.needsUpdate=!0,qr(w,z,X),w.side=Zn,w.needsUpdate=!0,qr(w,z,X),w.side=Xe):qr(w,z,X)}this.compile=function(w,z,X=null){X===null&&(X=w),u=j.get(X),u.init(z),C.push(u),X.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(u.pushLight(k),k.castShadow&&u.pushShadow(k))}),w!==X&&w.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(u.pushLight(k),k.castShadow&&u.pushShadow(k))}),u.setupLights();let $=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let it=k.material;if(it)if(Array.isArray(it))for(let ct=0;ct<it.length;ct++){let yt=it[ct];ce(yt,X,k),$.add(yt)}else ce(it,X,k),$.add(it)}),u=C.pop(),$},this.compileAsync=function(w,z,X=null){let $=this.compile(w,z,X);return new Promise(k=>{function it(){if($.forEach(function(ct){vt.get(ct).currentProgram.isReady()&&$.delete(ct)}),$.size===0){k(w);return}setTimeout(it,10)}Ot.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Jt=null;function Vn(w){Jt&&Jt(w)}function Ln(){Ci.stop()}function Qc(){Ci.start()}let Ci=new Hu;Ci.setAnimationLoop(Vn),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(w){Jt=w,st.setAnimationLoop(w),w===null?Ci.stop():Ci.start()},st.addEventListener("sessionstart",Ln),st.addEventListener("sessionend",Qc),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(z),z=st.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,z,P),u=j.get(w,C.length),u.init(z),C.push(u),K.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),se.setFromProjectionMatrix(K,Tn,z.reversedDepth),Z=this.localClippingEnabled,Ht=Q.init(this.clippingPlanes,Z),g=L.get(w,T.length),g.init(),T.push(g),st.enabled===!0&&st.isPresenting===!0){let it=y.xr.getDepthSensingMesh();it!==null&&_l(it,z,-1/0,y.sortObjects)}_l(w,z,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(at,ut),Xt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Xt&&ft.addToRenderList(g,w),this.info.render.frame++,Ht===!0&&Q.beginShadows();let X=u.state.shadowsArray;dt.render(X,w,z),Ht===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=g.opaque,k=g.transmissive;if(u.setupLights(),z.isArrayCamera){let it=z.cameras;if(k.length>0)for(let ct=0,yt=it.length;ct<yt;ct++){let pt=it[ct];eh($,k,w,pt)}Xt&&ft.render(w);for(let ct=0,yt=it.length;ct<yt;ct++){let pt=it[ct];th(g,w,pt,pt.viewport)}}else k.length>0&&eh($,k,w,z),Xt&&ft.render(w),th(g,w,z);P!==null&&b===0&&(Ft.updateMultisampleRenderTarget(P),Ft.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(y,w,z),lt.resetDefaultState(),M=-1,S=null,C.pop(),C.length>0?(u=C[C.length-1],Ht===!0&&Q.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,T.pop(),T.length>0?g=T[T.length-1]:g=null};function _l(w,z,X,$){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||se.intersectsSprite(w)){$&&Dt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(K);let ct=A.update(w),yt=w.material;yt.visible&&g.push(w,ct,yt,X,Dt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||se.intersectsObject(w))){let ct=A.update(w),yt=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Dt.copy(w.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Dt.copy(ct.boundingSphere.center)),Dt.applyMatrix4(w.matrixWorld).applyMatrix4(K)),Array.isArray(yt)){let pt=ct.groups;for(let It=0,Ut=pt.length;It<Ut;It++){let Ct=pt[It],$t=yt[Ct.materialIndex];$t&&$t.visible&&g.push(w,ct,$t,X,Dt.z,Ct)}}else yt.visible&&g.push(w,ct,yt,X,Dt.z,null)}}let it=w.children;for(let ct=0,yt=it.length;ct<yt;ct++)_l(it[ct],z,X,$)}function th(w,z,X,$){let k=w.opaque,it=w.transmissive,ct=w.transparent;u.setupLightsView(X),Ht===!0&&Q.setGlobalState(y.clippingPlanes,X),$&&xt.viewport(U.copy($)),k.length>0&&$r(k,z,X),it.length>0&&$r(it,z,X),ct.length>0&&$r(ct,z,X),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function eh(w,z,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[$.id]===void 0&&(u.state.transmissionRenderTarget[$.id]=new ze(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?gn:Cn,minFilter:vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));let it=u.state.transmissionRenderTarget[$.id],ct=$.viewport||U;it.setSize(ct.z*y.transmissionResolutionScale,ct.w*y.transmissionResolutionScale);let yt=y.getRenderTarget(),pt=y.getActiveCubeFace(),It=y.getActiveMipmapLevel();y.setRenderTarget(it),y.getClearColor(H),q=y.getClearAlpha(),q<1&&y.setClearColor(16777215,.5),y.clear(),Xt&&ft.render(X);let Ut=y.toneMapping;y.toneMapping=ti;let Ct=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),u.setupLightsView($),Ht===!0&&Q.setGlobalState(y.clippingPlanes,$),$r(w,X,$),Ft.updateMultisampleRenderTarget(it),Ft.updateRenderTargetMipmap(it),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let re=0,_e=z.length;re<_e;re++){let ue=z[re],oe=ue.object,Rt=ue.geometry,pe=ue.material,Zt=ue.group;if(pe.side===Xe&&oe.layers.test($.layers)){let Je=pe.side;pe.side=Ne,pe.needsUpdate=!0,nh(oe,X,$,Rt,pe,Zt),pe.side=Je,pe.needsUpdate=!0,$t=!0}}$t===!0&&(Ft.updateMultisampleRenderTarget(it),Ft.updateRenderTargetMipmap(it))}y.setRenderTarget(yt,pt,It),y.setClearColor(H,q),Ct!==void 0&&($.viewport=Ct),y.toneMapping=Ut}function $r(w,z,X){let $=z.isScene===!0?z.overrideMaterial:null;for(let k=0,it=w.length;k<it;k++){let ct=w[k],yt=ct.object,pt=ct.geometry,It=ct.group,Ut=ct.material;Ut.allowOverride===!0&&$!==null&&(Ut=$),yt.layers.test(X.layers)&&nh(yt,z,X,pt,Ut,It)}}function nh(w,z,X,$,k,it){w.onBeforeRender(y,z,X,$,k,it),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(y,z,X,$,w,it),k.transparent===!0&&k.side===Xe&&k.forceSinglePass===!1?(k.side=Ne,k.needsUpdate=!0,y.renderBufferDirect(X,z,$,k,w,it),k.side=Zn,k.needsUpdate=!0,y.renderBufferDirect(X,z,$,k,w,it),k.side=Xe):y.renderBufferDirect(X,z,$,k,w,it),w.onAfterRender(y,z,X,$,k,it)}function qr(w,z,X){z.isScene!==!0&&(z=St);let $=vt.get(w),k=u.state.lights,it=u.state.shadowsArray,ct=k.state.version,yt=I.getParameters(w,k.state,it,z,X),pt=I.getProgramCacheKey(yt),It=$.programs;$.environment=w.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(w.isMeshStandardMaterial?V:ve).get(w.envMap||$.environment),$.envMapRotation=$.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,It===void 0&&(w.addEventListener("dispose",J),It=new Map,$.programs=It);let Ut=It.get(pt);if(Ut!==void 0){if($.currentProgram===Ut&&$.lightsStateVersion===ct)return sh(w,yt),Ut}else yt.uniforms=I.getUniforms(w),w.onBeforeCompile(yt,y),Ut=I.acquireProgram(yt,pt),It.set(pt,Ut),$.uniforms=yt.uniforms;let Ct=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ct.clippingPlanes=Q.uniform),sh(w,yt),$.needsLights=Pd(w),$.lightsStateVersion=ct,$.needsLights&&(Ct.ambientLightColor.value=k.state.ambient,Ct.lightProbe.value=k.state.probe,Ct.directionalLights.value=k.state.directional,Ct.directionalLightShadows.value=k.state.directionalShadow,Ct.spotLights.value=k.state.spot,Ct.spotLightShadows.value=k.state.spotShadow,Ct.rectAreaLights.value=k.state.rectArea,Ct.ltc_1.value=k.state.rectAreaLTC1,Ct.ltc_2.value=k.state.rectAreaLTC2,Ct.pointLights.value=k.state.point,Ct.pointLightShadows.value=k.state.pointShadow,Ct.hemisphereLights.value=k.state.hemi,Ct.directionalShadowMap.value=k.state.directionalShadowMap,Ct.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ct.spotShadowMap.value=k.state.spotShadowMap,Ct.spotLightMatrix.value=k.state.spotLightMatrix,Ct.spotLightMap.value=k.state.spotLightMap,Ct.pointShadowMap.value=k.state.pointShadowMap,Ct.pointShadowMatrix.value=k.state.pointShadowMatrix),$.currentProgram=Ut,$.uniformsList=null,Ut}function ih(w){if(w.uniformsList===null){let z=w.currentProgram.getUniforms();w.uniformsList=Ns.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function sh(w,z){let X=vt.get(w);X.outputColorSpace=z.outputColorSpace,X.batching=z.batching,X.batchingColor=z.batchingColor,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.instancingMorph=z.instancingMorph,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function Cd(w,z,X,$,k){z.isScene!==!0&&(z=St),Ft.resetTextureUnits();let it=z.fog,ct=$.isMeshStandardMaterial?z.environment:null,yt=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Oi,pt=($.isMeshStandardMaterial?V:ve).get($.envMap||ct),It=$.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ut=!!X.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ct=!!X.morphAttributes.position,$t=!!X.morphAttributes.normal,re=!!X.morphAttributes.color,_e=ti;$.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(_e=y.toneMapping);let ue=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,oe=ue!==void 0?ue.length:0,Rt=vt.get($),pe=u.state.lights;if(Ht===!0&&(Z===!0||w!==S)){let He=w===S&&$.id===M;Q.setState($,w,He)}let Zt=!1;$.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==pe.state.version||Rt.outputColorSpace!==yt||k.isBatchedMesh&&Rt.batching===!1||!k.isBatchedMesh&&Rt.batching===!0||k.isBatchedMesh&&Rt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Rt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Rt.instancing===!1||!k.isInstancedMesh&&Rt.instancing===!0||k.isSkinnedMesh&&Rt.skinning===!1||!k.isSkinnedMesh&&Rt.skinning===!0||k.isInstancedMesh&&Rt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Rt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Rt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Rt.instancingMorph===!1&&k.morphTexture!==null||Rt.envMap!==pt||$.fog===!0&&Rt.fog!==it||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Q.numPlanes||Rt.numIntersection!==Q.numIntersection)||Rt.vertexAlphas!==It||Rt.vertexTangents!==Ut||Rt.morphTargets!==Ct||Rt.morphNormals!==$t||Rt.morphColors!==re||Rt.toneMapping!==_e||Rt.morphTargetsCount!==oe)&&(Zt=!0):(Zt=!0,Rt.__version=$.version);let Je=Rt.currentProgram;Zt===!0&&(Je=qr($,z,k));let es=!1,Ke=!1,Ys=!1,me=Je.getUniforms(),ln=Rt.uniforms;if(xt.useProgram(Je.program)&&(es=!0,Ke=!0,Ys=!0),$.id!==M&&(M=$.id,Ke=!0),es||S!==w){xt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),me.setValue(N,"projectionMatrix",w.projectionMatrix),me.setValue(N,"viewMatrix",w.matrixWorldInverse);let qe=me.map.cameraPosition;qe!==void 0&&qe.setValue(N,gt.setFromMatrixPosition(w.matrixWorld)),Pt.logarithmicDepthBuffer&&me.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&me.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,Ke=!0,Ys=!0)}if(k.isSkinnedMesh){me.setOptional(N,k,"bindMatrix"),me.setOptional(N,k,"bindMatrixInverse");let He=k.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),me.setValue(N,"boneTexture",He.boneTexture,Ft))}k.isBatchedMesh&&(me.setOptional(N,k,"batchingTexture"),me.setValue(N,"batchingTexture",k._matricesTexture,Ft),me.setOptional(N,k,"batchingIdTexture"),me.setValue(N,"batchingIdTexture",k._indirectTexture,Ft),me.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&me.setValue(N,"batchingColorTexture",k._colorsTexture,Ft));let cn=X.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&tt.update(k,X,Je),(Ke||Rt.receiveShadow!==k.receiveShadow)&&(Rt.receiveShadow=k.receiveShadow,me.setValue(N,"receiveShadow",k.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(ln.envMap.value=pt,ln.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&z.environment!==null&&(ln.envMapIntensity.value=z.environmentIntensity),Ke&&(me.setValue(N,"toneMappingExposure",y.toneMappingExposure),Rt.needsLights&&Rd(ln,Ys),it&&$.fog===!0&&D.refreshFogUniforms(ln,it),D.refreshMaterialUniforms(ln,$,Y,nt,u.state.transmissionRenderTarget[w.id]),Ns.upload(N,ih(Rt),ln,Ft)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ns.upload(N,ih(Rt),ln,Ft),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&me.setValue(N,"center",k.center),me.setValue(N,"modelViewMatrix",k.modelViewMatrix),me.setValue(N,"normalMatrix",k.normalMatrix),me.setValue(N,"modelMatrix",k.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let He=$.uniformsGroups;for(let qe=0,xl=He.length;qe<xl;qe++){let Ri=He[qe];kt.update(Ri,Je),kt.bind(Ri,Je)}}return Je}function Rd(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function Pd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,z,X){let $=vt.get(w);$.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),vt.get(w.texture).__webglTexture=z,vt.get(w.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:X,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,z){let X=vt.get(w);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0};let Id=N.createFramebuffer();this.setRenderTarget=function(w,z=0,X=0){P=w,R=z,b=X;let $=!0,k=null,it=!1,ct=!1;if(w){let pt=vt.get(w);if(pt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(N.FRAMEBUFFER,null),$=!1;else if(pt.__webglFramebuffer===void 0)Ft.setupRenderTarget(w);else if(pt.__hasExternalTextures)Ft.rebindTextures(w,vt.get(w.texture).__webglTexture,vt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ct=w.depthTexture;if(pt.__boundDepthTexture!==Ct){if(Ct!==null&&vt.has(Ct)&&(w.width!==Ct.image.width||w.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(w)}}let It=w.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(ct=!0);let Ut=vt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ut[z])?k=Ut[z][X]:k=Ut[z],it=!0):w.samples>0&&Ft.useMultisampledRTT(w)===!1?k=vt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ut)?k=Ut[X]:k=Ut,U.copy(w.viewport),O.copy(w.scissor),W=w.scissorTest}else U.copy(wt).multiplyScalar(Y).floor(),O.copy(Nt).multiplyScalar(Y).floor(),W=ie;if(X!==0&&(k=Id),xt.bindFramebuffer(N.FRAMEBUFFER,k)&&$&&xt.drawBuffers(w,k),xt.viewport(U),xt.scissor(O),xt.setScissorTest(W),it){let pt=vt.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+z,pt.__webglTexture,X)}else if(ct){let pt=z;for(let It=0;It<w.textures.length;It++){let Ut=vt.get(w.textures[It]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+It,Ut.__webglTexture,X,pt)}}else if(w!==null&&X!==0){let pt=vt.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,pt.__webglTexture,X)}M=-1},this.readRenderTargetPixels=function(w,z,X,$,k,it,ct,yt=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ct!==void 0&&(pt=pt[ct]),pt){xt.bindFramebuffer(N.FRAMEBUFFER,pt);try{let It=w.textures[yt],Ut=It.format,Ct=It.type;if(!Pt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-$&&X>=0&&X<=w.height-k&&(w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+yt),N.readPixels(z,X,$,k,Tt.convert(Ut),Tt.convert(Ct),it))}finally{let It=P!==null?vt.get(P).__webglFramebuffer:null;xt.bindFramebuffer(N.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(w,z,X,$,k,it,ct,yt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ct!==void 0&&(pt=pt[ct]),pt)if(z>=0&&z<=w.width-$&&X>=0&&X<=w.height-k){xt.bindFramebuffer(N.FRAMEBUFFER,pt);let It=w.textures[yt],Ut=It.format,Ct=It.type;if(!Pt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $t=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,$t),N.bufferData(N.PIXEL_PACK_BUFFER,it.byteLength,N.STREAM_READ),w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+yt),N.readPixels(z,X,$,k,Tt.convert(Ut),Tt.convert(Ct),0);let re=P!==null?vt.get(P).__webglFramebuffer:null;xt.bindFramebuffer(N.FRAMEBUFFER,re);let _e=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await gu(N,_e,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,$t),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,it),N.deleteBuffer($t),N.deleteSync(_e),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,z=null,X=0){let $=Math.pow(2,-X),k=Math.floor(w.image.width*$),it=Math.floor(w.image.height*$),ct=z!==null?z.x:0,yt=z!==null?z.y:0;Ft.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,ct,yt,k,it),xt.unbindTexture()};let Ld=N.createFramebuffer(),Dd=N.createFramebuffer();this.copyTextureToTexture=function(w,z,X=null,$=null,k=0,it=null){it===null&&(k!==0?(ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),it=k,k=0):it=0);let ct,yt,pt,It,Ut,Ct,$t,re,_e,ue=w.isCompressedTexture?w.mipmaps[it]:w.image;if(X!==null)ct=X.max.x-X.min.x,yt=X.max.y-X.min.y,pt=X.isBox3?X.max.z-X.min.z:1,It=X.min.x,Ut=X.min.y,Ct=X.isBox3?X.min.z:0;else{let cn=Math.pow(2,-k);ct=Math.floor(ue.width*cn),yt=Math.floor(ue.height*cn),w.isDataArrayTexture?pt=ue.depth:w.isData3DTexture?pt=Math.floor(ue.depth*cn):pt=1,It=0,Ut=0,Ct=0}$!==null?($t=$.x,re=$.y,_e=$.z):($t=0,re=0,_e=0);let oe=Tt.convert(z.format),Rt=Tt.convert(z.type),pe;z.isData3DTexture?(Ft.setTexture3D(z,0),pe=N.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Ft.setTexture2DArray(z,0),pe=N.TEXTURE_2D_ARRAY):(Ft.setTexture2D(z,0),pe=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);let Zt=N.getParameter(N.UNPACK_ROW_LENGTH),Je=N.getParameter(N.UNPACK_IMAGE_HEIGHT),es=N.getParameter(N.UNPACK_SKIP_PIXELS),Ke=N.getParameter(N.UNPACK_SKIP_ROWS),Ys=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ue.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ue.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,It),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ut),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ct);let me=w.isDataArrayTexture||w.isData3DTexture,ln=z.isDataArrayTexture||z.isData3DTexture;if(w.isDepthTexture){let cn=vt.get(w),He=vt.get(z),qe=vt.get(cn.__renderTarget),xl=vt.get(He.__renderTarget);xt.bindFramebuffer(N.READ_FRAMEBUFFER,qe.__webglFramebuffer),xt.bindFramebuffer(N.DRAW_FRAMEBUFFER,xl.__webglFramebuffer);for(let Ri=0;Ri<pt;Ri++)me&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,vt.get(w).__webglTexture,k,Ct+Ri),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,vt.get(z).__webglTexture,it,_e+Ri)),N.blitFramebuffer(It,Ut,ct,yt,$t,re,ct,yt,N.DEPTH_BUFFER_BIT,N.NEAREST);xt.bindFramebuffer(N.READ_FRAMEBUFFER,null),xt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(k!==0||w.isRenderTargetTexture||vt.has(w)){let cn=vt.get(w),He=vt.get(z);xt.bindFramebuffer(N.READ_FRAMEBUFFER,Ld),xt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Dd);for(let qe=0;qe<pt;qe++)me?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,cn.__webglTexture,k,Ct+qe):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,cn.__webglTexture,k),ln?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,He.__webglTexture,it,_e+qe):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,He.__webglTexture,it),k!==0?N.blitFramebuffer(It,Ut,ct,yt,$t,re,ct,yt,N.COLOR_BUFFER_BIT,N.NEAREST):ln?N.copyTexSubImage3D(pe,it,$t,re,_e+qe,It,Ut,ct,yt):N.copyTexSubImage2D(pe,it,$t,re,It,Ut,ct,yt);xt.bindFramebuffer(N.READ_FRAMEBUFFER,null),xt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ln?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(pe,it,$t,re,_e,ct,yt,pt,oe,Rt,ue.data):z.isCompressedArrayTexture?N.compressedTexSubImage3D(pe,it,$t,re,_e,ct,yt,pt,oe,ue.data):N.texSubImage3D(pe,it,$t,re,_e,ct,yt,pt,oe,Rt,ue):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,it,$t,re,ct,yt,oe,Rt,ue.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,it,$t,re,ue.width,ue.height,oe,ue.data):N.texSubImage2D(N.TEXTURE_2D,it,$t,re,ct,yt,oe,Rt,ue);N.pixelStorei(N.UNPACK_ROW_LENGTH,Zt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Je),N.pixelStorei(N.UNPACK_SKIP_PIXELS,es),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ke),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ys),it===0&&z.generateMipmaps&&N.generateMipmap(pe),xt.unbindTexture()},this.initRenderTarget=function(w){vt.get(w).__webglFramebuffer===void 0&&Ft.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ft.setTextureCube(w,0):w.isData3DTexture?Ft.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ft.setTexture2DArray(w,0):Ft.setTexture2D(w,0),xt.unbindTexture()},this.resetState=function(){R=0,b=0,P=null,xt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}};var qu={type:"change"},Oc={type:"start"},Zu={type:"end"},Jo=new jn,Yu=new un,s_=Math.cos(70*ge.DEG2RAD),Pe=new F,je=2*Math.PI,ae={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Fc=1e-6,Bs=class extends Ar{constructor(t,e=null){super(t,e),this.state=ae.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gi.ROTATE,MIDDLE:gi.DOLLY,RIGHT:gi.PAN},this.touches={ONE:_i.ROTATE,TWO:_i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new dn,this._lastTargetPosition=new F,this._quat=new dn().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new As,this._sphericalDelta=new As,this._scale=1,this._panOffset=new F,this._rotateStart=new mt,this._rotateEnd=new mt,this._rotateDelta=new mt,this._panStart=new mt,this._panEnd=new mt,this._panDelta=new mt,this._dollyStart=new mt,this._dollyEnd=new mt,this._dollyDelta=new mt,this._dollyDirection=new F,this._mouse=new mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=a_.bind(this),this._onPointerDown=r_.bind(this),this._onPointerUp=o_.bind(this),this._onContextMenu=p_.bind(this),this._onMouseWheel=h_.bind(this),this._onKeyDown=u_.bind(this),this._onTouchStart=d_.bind(this),this._onTouchMove=f_.bind(this),this._onMouseDown=l_.bind(this),this._onMouseMove=c_.bind(this),this._interceptControlDown=m_.bind(this),this._interceptControlUp=g_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qu),this.update(),this.state=ae.NONE}update(t=null){let e=this.object.position;Pe.copy(e).sub(this.target),Pe.applyQuaternion(this._quat),this._spherical.setFromVector3(Pe),this.autoRotate&&this.state===ae.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=je:n>Math.PI&&(n-=je),s<-Math.PI?s+=je:s>Math.PI&&(s-=je),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Pe.setFromSpherical(this._spherical),Pe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Pe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Pe.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Pe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Jo.origin.copy(this.object.position),Jo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Jo.direction))<s_?this.object.lookAt(this.target):(Yu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Jo.intersectPlane(Yu,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Fc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Fc||this._lastTargetPosition.distanceToSquared(this.target)>Fc?(this.dispatchEvent(qu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?je/60*this.autoRotateSpeed*t:je/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Pe.setFromMatrixColumn(e,0),Pe.multiplyScalar(-t),this._panOffset.add(Pe)}_panUp(t,e){this.screenSpacePanning===!0?Pe.setFromMatrixColumn(e,1):(Pe.setFromMatrixColumn(e,0),Pe.crossVectors(this.object.up,Pe)),Pe.multiplyScalar(t),this._panOffset.add(Pe)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Pe.copy(s).sub(this.target);let r=Pe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(je*this._rotateDelta.x/e.clientHeight),this._rotateUp(je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(je*this._rotateDelta.x/e.clientHeight),this._rotateUp(je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new mt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function r_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function a_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function o_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zu),this.state=ae.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function l_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case gi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ae.DOLLY;break;case gi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ae.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ae.ROTATE}break;case gi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ae.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ae.PAN}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(Oc)}function c_(i){switch(this.state){case ae.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ae.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ae.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function h_(i){this.enabled===!1||this.enableZoom===!1||this.state!==ae.NONE||(i.preventDefault(),this.dispatchEvent(Oc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Zu))}function u_(i){this.enabled!==!1&&this._handleKeyDown(i)}function d_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case _i.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ae.TOUCH_ROTATE;break;case _i.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ae.TOUCH_PAN;break;default:this.state=ae.NONE}break;case 2:switch(this.touches.TWO){case _i.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ae.TOUCH_DOLLY_PAN;break;case _i.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ae.TOUCH_DOLLY_ROTATE;break;default:this.state=ae.NONE}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(Oc)}function f_(i){switch(this._trackPointer(i),this.state){case ae.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ae.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ae.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ae.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ae.NONE}}function p_(i){this.enabled!==!1&&i.preventDefault()}function m_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function g_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ks=class extends Jn{constructor(){super();let t=new Ue;t.deleteAttribute("uv");let e=new Fn({side:Ne}),n=new Fn,s=new Tr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Gt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Bi(t,n,6),o=new be;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Gt(t,zs(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Gt(t,zs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Gt(t,zs(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Gt(t,zs(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let f=new Gt(t,zs(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let m=new Gt(t,zs(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function zs(i){return new br({color:0,emissive:16777215,emissiveIntensity:i})}var Vs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var sn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},__=new Gi(-1,1,1,-1,0,1),Bc=class extends fe{constructor(){super(),this.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ne([0,2,0,0,2,0],2))}},x_=new Bc,bi=class{constructor(t){this._mesh=new Gt(x_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,__)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ko=class extends sn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Se?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ni.clone(t.uniforms),this.material=new Se({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new bi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Nr=class extends sn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Qo=class extends sn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var tl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new mt);this._width=n.width,this._height=n.height,e=new ze(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:gn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ko(Vs),this.copyPass.material.blending=An,this.clock=new wr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Nr!==void 0&&(a instanceof Nr?n=!0:a instanceof Qo&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new mt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var el=class extends sn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new At}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var ju={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new At(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Hs=class i extends sn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new mt(t.x,t.y):new mt(256,256),this.clearColor=new At(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ze(r,a,{type:gn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new ze(r,a,{type:gn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new ze(r,a,{type:gn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=ju;this.highPassUniforms=ni.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Se({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new mt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ni.clone(Vs.uniforms),this.blendMaterial=new Se({uniforms:this.copyUniforms,vertexShader:Vs.vertexShader,fragmentShader:Vs.fragmentShader,blending:Qn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new At,this._oldClearAlpha=1,this._basic=new ke,this._fsQuad=new bi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new mt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Se({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new mt(.5,.5)},direction:{value:new mt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new Se({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Hs.BlurDirectionX=new mt(1,0);Hs.BlurDirectionY=new mt(0,1);var Fr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var nl=class extends sn{constructor(){super(),this.uniforms=ni.clone(Fr.uniforms),this.material=new Mr({name:Fr.name,uniforms:this.uniforms,vertexShader:Fr.vertexShader,fragmentShader:Fr.fragmentShader}),this._fsQuad=new bi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},qt.getTransfer(this._outputColorSpace)===jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===eo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===no?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===io?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===xi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ro?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ao?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===so&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var rn=(i,t,e,n,s,r,a,o,l="\u2014")=>({id:i,name:t,cn:e,type:n,shape:s,desc:r,features:a,detail:o,kernel:l,units:s[2]||s[0]}),Or=[rn("input","INPUT","\u4E00\u5F20\u56FE\u50CF\uFF0C\u65C5\u7A0B\u7684\u5F00\u59CB","input",[227,227,3],"\u8BA1\u7B97\u673A\u770B\u4E0D\u5230\u201C\u72D7\u201D\uFF0C\u5B83\u9996\u5148\u63A5\u6536\u7684\u662F\u7EA2\u3001\u7EFF\u3001\u84DD\u4E09\u4E2A\u901A\u9053\u7684\u50CF\u7D20\u6570\u503C\u3002",["RGB \u4E09\u901A\u9053","\u50CF\u7D20 \u2192 \u6570\u503C"],"\u8FD9\u91CC\u7528\u7A0B\u5E8F\u7ED8\u5236\u7684\u72AC\u7C7B\u793A\u610F\u56FE\u4F5C\u4E3A\u8F93\u5165\uFF0C\u4E0D\u4E0A\u4F20\u56FE\u7247\uFF0C\u4E5F\u4E0D\u8FDB\u884C\u771F\u5B9E\u8BC6\u522B\u3002"),rn("conv1","CONV1","\u5148\u770B\u89C1\u8FB9\u7F18","conv",[55,55,96],"\u7B2C\u4E00\u5C42\u5377\u79EF\u50CF\u4E00\u7EC4\u5C0F\u578B\u89C6\u89C9\u63A2\u6D4B\u5668\uFF0C\u5728\u56FE\u50CF\u4E0A\u6ED1\u52A8\uFF0C\u5BFB\u627E\u6700\u57FA\u7840\u7684\u89C6\u89C9\u7EBF\u7D22\u3002",["\u8FB9\u7F18\u4E0E\u65B9\u5411","\u8272\u5F69\u5BF9\u6BD4","\u7B80\u5355\u7EB9\u7406"],"96 \u4E2A\u5377\u79EF\u6838\u5F62\u6210 96 \u5F20\u7279\u5F81\u56FE\u3002\u968F\u540E\u4F7F\u7528 ReLU\uFF1B\u539F\u7F51\u7EDC\u8FD8\u5728\u6B64\u9636\u6BB5\u4F7F\u7528\u5C40\u90E8\u54CD\u5E94\u5F52\u4E00\u5316 LRN\u3002","11 \xD7 11 / \u6B65\u957F 4"),rn("pool1","POOL1","\u4FDD\u7559\u91CD\u8981\u7684\uFF0C\u7F29\u5C0F\u5176\u4F59","pool",[27,27,96],"\u6C60\u5316\u964D\u4F4E\u7279\u5F81\u56FE\u7684\u7A7A\u95F4\u5C3A\u5BF8\uFF0C\u5728\u5C40\u90E8\u533A\u57DF\u4FDD\u7559\u6700\u5F3A\u7684\u54CD\u5E94\u3002",["\u6700\u5927\u6C60\u5316","\u7A7A\u95F4\u538B\u7F29"],"\u4F7F\u7528\u91CD\u53E0\u6700\u5927\u6C60\u5316\uFF1A\u7A97\u53E3 3\xD73\uFF0C\u6B65\u957F 2\u3002\u901A\u9053\u6570\u4ECD\u4E3A 96\uFF0C\u800C\u5BBD\u3001\u9AD8\u4ECE 55 \u964D\u5230 27\u3002","3 \xD7 3 / \u6B65\u957F 2"),rn("conv2","CONV2","\u4ECE\u7EBF\u6761\u8D70\u5411\u7EB9\u7406","conv",[27,27,256],"\u7F51\u7EDC\u628A\u524D\u4E00\u5C42\u7684\u7B80\u5355\u7EBF\u7D22\u7EC4\u5408\u8D77\u6765\uFF0C\u5F00\u59CB\u54CD\u5E94\u7EB9\u7406\u548C\u5C40\u90E8\u56FE\u6848\u3002",["\u91CD\u590D\u7EB9\u7406","\u5C40\u90E8\u56FE\u6848"],"256 \u4E2A\u8F93\u51FA\u901A\u9053\u3002\u539F\u59CB\u6A21\u578B\u5728\u53CC GPU \u95F4\u91C7\u7528\u5206\u7EC4\u8FDE\u63A5\uFF1B\u5377\u79EF\u540E\u63A5 ReLU \u4E0E LRN\u3002","5 \xD7 5 / \u6B65\u957F 1"),rn("pool2","POOL2","\u66F4\u7D27\u51D1\u7684\u89C6\u89C9\u6458\u8981","pool",[13,13,256],"\u518D\u4E00\u6B21\u538B\u7F29\u7A7A\u95F4\u4FE1\u606F\uFF0C\u8BA9\u540E\u9762\u7684\u5C42\u5173\u6CE8\u66F4\u5927\u8303\u56F4\u5185\u7684\u89C6\u89C9\u7ED3\u6784\u3002",["\u4FDD\u7559\u5F3A\u54CD\u5E94","\u964D\u4F4E\u8BA1\u7B97\u91CF"],"\u6700\u5927\u6C60\u5316\u7A97\u53E3 3\xD73\u3001\u6B65\u957F 2\u3002\u5BBD\u9AD8\u7531 27 \u964D\u81F3 13\uFF0C256 \u4E2A\u901A\u9053\u4FDD\u7559\u3002","3 \xD7 3 / \u6B65\u957F 2"),rn("conv3","CONV3","\u62FC\u51FA\u66F4\u590D\u6742\u7684\u5F62\u72B6","conv",[13,13,384],"\u5728\u66F4\u5927\u7684\u611F\u53D7\u91CE\u4E2D\u7EC4\u5408\u7EB9\u7406\u548C\u8FB9\u7F18\uFF0C\u63D0\u53D6\u66F4\u590D\u6742\u7684\u5C40\u90E8\u5F62\u72B6\u3002",["\u5F62\u72B6\u7EC4\u5408","\u66F4\u5927\u611F\u53D7\u91CE"],"384 \u4E2A\u8F93\u51FA\u901A\u9053\uFF0C\u5377\u79EF\u540E\u4F7F\u7528 ReLU\u3002\u8FD9\u4E00\u5C42\u8FDE\u63A5\u524D\u4E00\u5C42\u5168\u90E8\u901A\u9053\uFF0C\u4E0D\u662F\u7B80\u5355\u9010\u901A\u9053\u8FC7\u6EE4\u3002","3 \xD7 3 / \u6B65\u957F 1"),rn("conv4","CONV4","\u5BFB\u627E\u6709\u610F\u4E49\u7684\u7EC4\u5408","conv",[13,13,384],"\u66F4\u6DF1\u7684\u7279\u5F81\u4E0D\u518D\u53EA\u662F\u50CF\u7D20\u8FB9\u7F18\uFF0C\u800C\u662F\u591A\u4E2A\u89C6\u89C9\u7EBF\u7D22\u7684\u7EC4\u5408\u3002",["\u90E8\u4EF6\u5F0F\u7EBF\u7D22","\u5C42\u6B21\u5316\u8868\u793A"],"384 \u4E2A\u8F93\u51FA\u901A\u9053\uFF0C\u539F\u59CB\u5B9E\u73B0\u91C7\u7528\u5206\u7EC4\u8FDE\u63A5\u3002\u6240\u8C13\u201C\u90E8\u4EF6\u201D\u662F\u7406\u89E3\u7F51\u7EDC\u7684\u76F4\u89C2\u6BD4\u55BB\uFF0C\u5E76\u975E\u6BCF\u4E2A\u901A\u9053\u90FD\u5BF9\u5E94\u660E\u786E\u8BED\u4E49\u3002","3 \xD7 3 / \u6B65\u957F 1"),rn("conv5","CONV5","\u5F62\u6210\u9AD8\u7EA7\u89C6\u89C9\u7279\u5F81","conv",[13,13,256],"\u6700\u540E\u4E00\u7EC4\u5377\u79EF\u6574\u5408\u4E4B\u524D\u7684\u8868\u793A\uFF0C\u4E3A\u56FE\u50CF\u5206\u7C7B\u51C6\u5907\u66F4\u62BD\u8C61\u7684\u89C6\u89C9\u7279\u5F81\u3002",["\u9AD8\u7EA7\u7279\u5F81","\u8BED\u4E49\u7EC4\u5408"],"256 \u4E2A\u8F93\u51FA\u901A\u9053\uFF0C\u5377\u79EF\u540E\u63A5 ReLU\uFF0C\u518D\u8FDB\u5165\u6700\u540E\u4E00\u6B21\u6700\u5927\u6C60\u5316\u3002","3 \xD7 3 / \u6B65\u957F 1"),rn("pool5","POOL5","\u538B\u7F29\u4E3A\u5206\u7C7B\u7684\u539F\u6599","pool",[6,6,256],"\u5C06\u9AD8\u7EA7\u7279\u5F81\u538B\u7F29\u4E3A 6\xD76\xD7256 \u7684\u5F20\u91CF\uFF0C\u518D\u5C55\u5E73\u4E3A 9,216 \u4E2A\u6570\u503C\u3002",["\u6700\u540E\u4E00\u6B21\u6C60\u5316","\u5C55\u5E73\u4E3A\u5411\u91CF"],"\u5C55\u5E73\u53EA\u6539\u53D8\u7EC4\u7EC7\u65B9\u5F0F\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u751F\u6210\u65B0\u7279\u5F81\u3002\u8FD9\u4E2A\u5411\u91CF\u63A5\u5165\u7B2C\u4E00\u4E2A\u5168\u8FDE\u63A5\u5C42\u3002","3 \xD7 3 / \u6B65\u957F 2"),rn("fc6","FC6","\u7EC4\u5408\u5168\u5C40\u89C6\u89C9\u8BC1\u636E","fc",[4096],"\u5168\u8FDE\u63A5\u5C42\u5F00\u59CB\u5C06\u524D\u9762\u63D0\u53D6\u51FA\u7684\u89C6\u89C9\u7279\u5F81\u7EC4\u5408\u8D77\u6765\uFF0C\u7528\u4E8E\u6700\u7EC8\u5206\u7C7B\u3002",["4,096 \u4E2A\u795E\u7ECF\u5143","ReLU \xB7 Dropout"],"\u6BCF\u4E2A\u5355\u5143\u63A5\u6536\u5C55\u5E73\u540E\u7684\u7279\u5F81\u3002\u8BAD\u7EC3\u65F6\u4F7F\u7528 Dropout\uFF0C\u964D\u4F4E\u8FC7\u62DF\u5408\uFF1B\u56FE\u4E2D\u7684\u8282\u70B9\u662F\u62BD\u6837\u793A\u610F\uFF0C\u800C\u975E\u5B8C\u6574 4,096 \u4E2A\u3002"),rn("fc7","FC7","\u8FDB\u4E00\u6B65\u6574\u5408\u9AD8\u7EA7\u7279\u5F81","fc",[4096],"\u7B2C\u4E8C\u4E2A\u5168\u8FDE\u63A5\u5C42\u7EE7\u7EED\u6574\u5408\u5168\u5C40\u8BC1\u636E\uFF0C\u5F62\u6210\u6709\u5229\u4E8E\u533A\u5206\u7C7B\u522B\u7684\u8868\u793A\u3002",["4,096 \u4E2A\u795E\u7ECF\u5143","\u5168\u5C40\u7279\u5F81\u7EC4\u5408"],"\u540C\u6837\u4F7F\u7528 ReLU\uFF0C\u5E76\u5728\u8BAD\u7EC3\u65F6\u5E94\u7528 Dropout\u3002\u5C42\u4E0E\u5C42\u7684\u8FDE\u63A5\u6743\u91CD\u7531\u8BAD\u7EC3\u5B66\u4E60\u83B7\u5F97\u3002"),rn("fc8","FC8","\u6620\u5C04\u5230 1,000 \u4E2A\u7C7B\u522B","fc",[1e3],"\u6700\u540E\u4E00\u5C42\u5C06\u7F51\u7EDC\u63D0\u53D6\u51FA\u7684\u7279\u5F81\u6620\u5C04\u5230 ImageNet \u7684 1,000 \u4E2A\u7C7B\u522B\u3002",["1,000 \u4E2A\u7C7B\u522B\u5206\u6570","\u5206\u7C7B\u5934"],"\u8F93\u51FA\u7684\u662F\u7C7B\u522B\u5206\u6570 logits\uFF0C\u518D\u7ECF Softmax \u8F6C\u4E3A\u76F8\u5BF9\u6982\u7387\u3002\u72D7\u662F\u4E00\u4E2A\u6982\u5FF5\u603B\u7C7B\uFF0C\u5E76\u975E\u8FD9\u91CC\u4E0E\u91D1\u6BDB\u5E76\u5217\u7684\u6807\u51C6 ImageNet \u7C7B\u522B\u3002"),rn("output","OUTPUT","\u4ECE\u6570\u503C\u8D70\u5411\u4E00\u4E2A\u5224\u65AD","output",[1e3],"Softmax \u5C06\u7C7B\u522B\u5206\u6570\u8F6C\u6362\u4E3A\u6982\u7387\u5206\u5E03\u3002\u6700\u9AD8\u5206\u7684\u7C7B\u522B\u6210\u4E3A\u8FD9\u6B21\u9884\u6D4B\u3002",["Golden retriever","\u793A\u610F\u6982\u7387 78%"],"78% \u662F\u9884\u8BBE\u7684\u52A8\u753B\u6F14\u793A\u6570\u503C\uFF0C\u4E0D\u662F\u6A21\u578B\u63A8\u7406\u7ED3\u679C\uFF0C\u4E5F\u4E0D\u8868\u793A\u5DF2\u7ECF\u6821\u51C6\u7684\u771F\u5B9E\u7F6E\u4FE1\u5EA6\u3002")];function zc(i){return Or.map((t,e)=>(e-6)*(i?3.35:2.25))}var Si=["\u8F93\u5165\u7F16\u7801","\u5377\u79EF\u4E00","\u6C60\u5316\u4E00","\u5377\u79EF\u4E8C","\u6C60\u5316\u4E8C","\u5377\u79EF\u4E09","\u5377\u79EF\u56DB","\u5377\u79EF\u4E94","\u6C60\u5316\u4E0E\u5C55\u5E73","\u5168\u8FDE\u63A5\u516D","\u5168\u8FDE\u63A5\u4E03","\u5206\u7C7B\u6620\u5C04","\u6982\u7387\u8F93\u51FA"],an=(i,t,e,n,s,r,a,o,l)=>({title:i,mechanism:t,input:e,output:n,formula:s,explain:r,note:a,visual:o,experiment:l}),Br=[an("\u50CF\u7D20\u4E0D\u662F\u7269\u4F53\uFF0C\u6570\u503C\u624D\u662F\u8D77\u70B9","\u989C\u8272\u901A\u9053 \xB7 \u5F20\u91CF\u7F16\u7801","\u793A\u4F8B\u56FE\u50CF","227 \xD7 227 \xD7 3","X \u2208 \u211D\xB2\xB2\u2077\xD7\xB2\xB2\u2077\xD7\xB3","\u5F69\u8272\u56FE\u50CF\u8868\u793A\u4E3A\u4E09\u4E2A\u7A7A\u95F4\u5BF9\u9F50\u7684\u989C\u8272\u901A\u9053\u3002\u7F51\u7EDC\u63A5\u6536\u7684\u662F\u6570\u503C\u5F20\u91CF\uFF0C\u800C\u4E0D\u662F\u4EBA\u7C7B\u7406\u89E3\u7684\u201C\u7269\u4F53\u201D\u3002","\u4F7F\u7528\u5E38\u89C1\u7684 227 \u50CF\u7D20\u5DE5\u7A0B\u7EA6\u5B9A\uFF1B\u539F\u8BBA\u6587\u6587\u5B57\u5199\u4F5C 224 \u50CF\u7D20\u3002\u8FD9\u91CC\u91C7\u7528\u81EA\u7ED8\u6D4B\u8BD5\u56FE\uFF0C\u4E0D\u4E0A\u4F20\u56FE\u50CF\u3002","rgb","channels"),an("\u5171\u4EAB\u5377\u79EF\u6838\uFF0C\u626B\u63CF\u5C40\u90E8\u611F\u53D7\u91CE","\u5C40\u90E8\u8FDE\u63A5 \xB7 \u6743\u91CD\u5171\u4EAB","227 \xD7 227 \xD7 3","55 \xD7 55 \xD7 96","y\u1D62\u2C7C\u2096 = ReLU(\u03A3 w\u2090\u1D66\u{1D68C}\u2096 \xB7 x\u1D62\u208A\u2090,\u2C7C\u208A\u1D66,\u{1D68C} + b\u2096)","96 \u4E2A 11\xD711 \u5377\u79EF\u6838\u4EE5\u6B65\u957F 4 \u63D0\u53D6\u54CD\u5E94\u3002\u6BCF\u4E2A\u6838\u8986\u76D6\u5168\u90E8\u8F93\u5165\u989C\u8272\u901A\u9053\uFF0C\u5728\u4E0D\u540C\u7A7A\u95F4\u4F4D\u7F6E\u5171\u4EAB\u540C\u4E00\u7EC4\u6743\u91CD\u3002","\u539F\u7F51\u7EDC\u968F\u540E\u4F7F\u7528\u5C40\u90E8\u54CD\u5E94\u5F52\u4E00\u5316\u3002\u4E0B\u65B9\u5B9E\u9A8C\u8BA1\u7B97\u5C0F\u7A97\u53E3\u7684\u52A0\u6743\u548C\uFF0C\u793A\u610F\u56FE\u4E0D\u662F\u8BAD\u7EC3\u540E\u7684\u771F\u5B9E\u54CD\u5E94\u3002","scan","convolution"),an("\u4FDD\u7559\u5C40\u90E8\u6781\u503C\uFF0C\u538B\u7F29\u7A7A\u95F4\u5206\u8FA8\u7387","\u91CD\u53E0\u6700\u5927\u6C60\u5316","55 \xD7 55 \xD7 96","27 \xD7 27 \xD7 96","y\u1D62\u2C7C\u{1D68C} = max(x\u1D64\u1D65\u{1D68C}), (u,v) \u2208 \u03A9\u1D62\u2C7C","3\xD73 \u7A97\u53E3\u4EE5\u6B65\u957F 2 \u6C47\u96C6\u5C40\u90E8\u6700\u5F3A\u54CD\u5E94\u3002\u7A7A\u95F4\u5C3A\u5BF8\u4E0B\u964D\uFF0C\u901A\u9053\u6570\u4FDD\u6301\u4E0D\u53D8\uFF0C\u76F8\u90BB\u7A97\u53E3\u6709\u91CD\u53E0\u3002","\u6C60\u5316\u4E0D\u662F\u6311\u9009\u6574\u5F20\u56FE\u6700\u4EAE\u7684\u533A\u57DF\uFF0C\u4E5F\u4E0D\u662F\u628A\u6240\u6709\u7279\u5F81\u7B80\u5355\u5E73\u5747\u3002","pool","pooling"),an("\u591A\u901A\u9053\u6C47\u805A\uFF0C\u6784\u9020\u7EB9\u7406\u54CD\u5E94","\u5206\u7EC4\u5377\u79EF \xB7 \u901A\u9053\u6269\u5C55","27 \xD7 27 \xD7 96","27 \xD7 27 \xD7 256","Y = ReLU(W * X + b)","5\xD75 \u5377\u79EF\u6838\u7EC4\u5408\u524D\u4E00\u5C42\u7684\u7279\u5F81\uFF0C\u8F93\u51FA\u6269\u5C55\u4E3A 256 \u4E2A\u901A\u9053\u3002\u5F20\u91CF\u7684\u7A7A\u95F4\u5206\u8FA8\u7387\u4FDD\u6301\u4E0D\u53D8\u3002","\u539F\u7248\u53CC GPU \u5B9E\u73B0\u91C7\u7528\u5206\u7EC4\u8FDE\u63A5\uFF0C\u968F\u540E\u63A5 ReLU \u548C\u5C40\u90E8\u54CD\u5E94\u5F52\u4E00\u5316\u3002\u7EB9\u7406\u662F\u5408\u6210\u8868\u793A\uFF0C\u4E0D\u5BF9\u5E94\u7279\u5B9A\u8BAD\u7EC3\u901A\u9053\u3002","channels","convolution"),an("\u8FDB\u4E00\u6B65\u964D\u91C7\u6837\uFF0C\u4FDD\u7559\u901A\u9053\u7ED3\u6784","\u7A7A\u95F4\u964D\u91C7\u6837 \xB7 \u6700\u5927\u54CD\u5E94","27 \xD7 27 \xD7 256","13 \xD7 13 \xD7 256","27 \u2192 13\uFF1B\u901A\u9053\u6570 256 \u2192 256","\u518D\u6B21\u6267\u884C 3\xD73\u3001\u6B65\u957F 2 \u7684\u6700\u5927\u6C60\u5316\u3002\u6BCF\u4E2A\u901A\u9053\u5206\u522B\u7F29\u5C0F\u7A7A\u95F4\u5C3A\u5BF8\uFF0C\u4E3A\u540E\u7EED\u6DF1\u5C42\u5377\u79EF\u63D0\u4F9B\u7D27\u51D1\u8868\u793A\u3002","\u964D\u91C7\u6837\u51CF\u5C11\u7A7A\u95F4\u7EC6\u8282\uFF0C\u5E76\u4E0D\u80FD\u4FDD\u8BC1\u4EFB\u4F55\u8F93\u5165\u53D8\u5316\u90FD\u88AB\u5FFD\u7565\u3002","pooldeep","pooling"),an("\u8DE8\u901A\u9053\u7EC4\u5408\uFF0C\u6269\u5C55\u8868\u5F81\u7A7A\u95F4","\u5168\u901A\u9053\u8FDE\u63A5 \xB7 \u975E\u7EBF\u6027\u53D8\u6362","13 \xD7 13 \xD7 256","13 \xD7 13 \xD7 384","384 \u4E2A 3\xD73 \u5377\u79EF\u6838\uFF1B\u6B65\u957F 1","\u7B2C\u4E09\u5C42\u5377\u79EF\u8FDE\u63A5\u524D\u4E00\u5C42\u7684\u5168\u90E8\u901A\u9053\uFF0C\u8F93\u51FA 384 \u5F20\u7279\u5F81\u56FE\u3002\u591A\u6B21\u5C40\u90E8\u8FD0\u7B97\u7D2F\u79EF\u51FA\u66F4\u5927\u7684\u6709\u6548\u611F\u53D7\u91CE\u3002","\u7279\u5F81\u6DF1\u5EA6\u589E\u52A0\u4E0D\u610F\u5473\u7740\u6BCF\u4E2A\u901A\u9053\u90FD\u5177\u6709\u53EF\u547D\u540D\u7684\u8BED\u4E49\uFF1B\u8FD9\u91CC\u7528\u7A7A\u95F4\u4F53\u7D20\u548C\u8FDE\u7EBF\u8868\u8FBE\u7EC4\u5408\u5173\u7CFB\u3002","volume","convolution"),an("\u5206\u7EC4\u8BA1\u7B97\u4E2D\u7684\u5C42\u6B21\u5316\u8868\u793A","\u5206\u7EC4\u5377\u79EF \xB7 \u7279\u5F81\u91CD\u7EC4","13 \xD7 13 \xD7 384","13 \xD7 13 \xD7 384","Y\u2081 = W\u2081 * X\u2081\uFF1BY\u2082 = W\u2082 * X\u2082","\u4E24\u4E2A\u5206\u7EC4\u5206\u522B\u6267\u884C 3\xD73 \u5377\u79EF\uFF0C\u518D\u6784\u6210 384 \u901A\u9053\u8F93\u51FA\u3002\u53EF\u89C1\u7684\u53CC\u901A\u9053\u675F\u7528\u4E8E\u5F3A\u8C03\u539F\u7248\u7684\u5206\u7EC4\u7EA6\u675F\u3002","\u5206\u7EC4\u6E90\u4E8E\u539F\u59CB\u53CC GPU \u7684\u8BA1\u7B97\u5E03\u5C40\uFF0C\u4E0D\u662F\u4E24\u5F20\u72EC\u7ACB\u56FE\u7247\uFF0C\u4E5F\u4E0D\u662F\u4E24\u5957\u8BED\u4E49\u5206\u7C7B\u5668\u3002","groups","convolution"),an("\u5B8C\u6210\u5377\u79EF\u8868\u5F81\uFF0C\u4EA4\u63A5\u5206\u7C7B\u9636\u6BB5","\u9AD8\u7EA7\u7279\u5F81 \xB7 \u6700\u540E\u4E00\u7EC4\u5377\u79EF","13 \xD7 13 \xD7 384","13 \xD7 13 \xD7 256","13 \xD7 13 \xD7 256 \u4E2A\u54CD\u5E94","\u7B2C\u4E94\u5C42\u901A\u8FC7 3\xD73 \u5206\u7EC4\u5377\u79EF\u5C06\u901A\u9053\u6570\u53D8\u4E3A 256\uFF0C\u7ED3\u5408 ReLU \u540E\u8FDB\u5165\u6700\u7EC8\u7684\u6C60\u5316\u4E0E\u5C55\u5E73\u3002","\u9AD8\u7EA7\u8868\u793A\u4ECD\u662F\u6570\u503C\u5F20\u91CF\uFF0C\u4E0D\u662F\u7F51\u7EDC\u5728\u5185\u90E8\u91CD\u65B0\u753B\u51FA\u4E86\u4E00\u53EA\u5B8C\u6574\u7684\u5C0F\u72D7\u3002","deep","convolution"),an("\u5F20\u91CF\u91CD\u6392\u4E3A\u5411\u91CF\uFF0C\u800C\u975E\u65B0\u589E\u7279\u5F81","\u6700\u7EC8\u6C60\u5316 \xB7 \u5C55\u5E73","13 \xD7 13 \xD7 256","6 \xD7 6 \xD7 256 \u2192 9,216","vec(X) \u2208 \u211D\u2079\xB2\xB9\u2076","\u6700\u540E\u4E00\u6B21\u6700\u5927\u6C60\u5316\u4EA7\u751F 6\xD76\xD7256 \u5F20\u91CF\u3002\u5C55\u5E73\u4FDD\u7559\u6240\u6709\u6570\u503C\uFF0C\u5C06\u7A7A\u95F4\u53CA\u901A\u9053\u7D22\u5F15\u91CD\u6392\u4E3A\u5355\u4E00\u7D22\u5F15\u3002","\u5C55\u5E73\u672C\u8EAB\u4E0D\u5B66\u4E60\u53C2\u6570\u3002\u8FD9\u91CC\u628A\u91CD\u6392\u9644\u5728\u6C60\u5316\u8282\u70B9\u4E2D\u5C55\u793A\uFF0C\u672A\u589E\u52A0\u4E00\u4E2A\u53EF\u5B66\u4E60\u5C42\u3002","flatten","flatten"),an("\u5168\u5C40\u8FDE\u63A5\uFF0C\u5C06\u7279\u5F81\u5411\u91CF\u52A0\u6743\u6C47\u805A","\u7A20\u5BC6\u77E9\u9635\u4E58\u6CD5 \xB7 ReLU","9,216","4,096","h = ReLU(Wx + b)","\u7B2C\u516D\u5C42\u8FDE\u63A5\u5C55\u5E73\u540E\u7684\u5168\u90E8\u8F93\u5165\uFF0C\u8F93\u51FA 4,096 \u4E2A\u5355\u5143\u3002\u77E9\u9635\u4E2D\u7684\u6BCF\u4E2A\u6743\u91CD\u51B3\u5B9A\u4E00\u4E2A\u8F93\u5165\u5BF9\u4E00\u4E2A\u8F93\u51FA\u7684\u8D21\u732E\u3002","\u8BAD\u7EC3\u65F6\u4F7F\u7528 Dropout\uFF1B\u5E38\u89C4\u63A8\u7406\u65F6\u4E0D\u968F\u673A\u4E22\u5F03\u8282\u70B9\u3002\u56FE\u4E2D\u7684\u8FDE\u63A5\u4E3A\u62BD\u6837\uFF0C\u4E0D\u7ED8\u5236\u6570\u5343\u4E07\u4E2A\u771F\u5B9E\u6743\u91CD\u3002","dense","weights"),an("\u5728\u9AD8\u7EF4\u7A7A\u95F4\u4E2D\u7EE7\u7EED\u91CD\u7EC4\u5168\u5C40\u8BC1\u636E","\u7A20\u5BC6\u8FDE\u63A5 \xB7 \u975E\u7EBF\u6027","4,096","4,096","h\u2082 = ReLU(W\u2082h\u2081 + b\u2082)","\u7B2C\u4E8C\u4E2A\u5168\u8FDE\u63A5\u5C42\u7EE7\u7EED\u53D8\u6362\u7279\u5F81\u8868\u793A\uFF0C\u4F7F\u6700\u540E\u7684\u7EBF\u6027\u5206\u7C7B\u5668\u80FD\u591F\u533A\u5206\u4E0D\u540C\u7C7B\u522B\u3002","\u540C\u6837\u5728\u8BAD\u7EC3\u65F6\u4F7F\u7528 Dropout\u3002\u8282\u70B9\u7684\u7A7A\u95F4\u6392\u5217\u662F\u5C55\u9648\u8BBE\u8BA1\uFF0C\u4E0D\u5BF9\u5E94\u5927\u8111\u89E3\u5256\u7ED3\u6784\u3002","dense2","weights"),an("\u4ECE\u7279\u5F81\u5411\u91CF\u6620\u5C04\u5230\u7C7B\u522B\u5206\u6570","\u7EBF\u6027\u5206\u7C7B\u5934 \xB7 \u7C7B\u522B\u5206\u6570","4,096","1,000","z = Wh + b","\u6700\u540E\u4E00\u4E2A\u5168\u8FDE\u63A5\u5C42\u4EA7\u751F 1,000 \u4E2A\u672A\u7ECF\u6982\u7387\u5F52\u4E00\u5316\u7684\u7C7B\u522B\u5206\u6570\u3002\u9AD8\u5206\u8868\u793A\u76F8\u5BF9\u8BC1\u636E\u66F4\u5F3A\uFF0C\u4F46\u5206\u6570\u672C\u8EAB\u4E0D\u662F\u6982\u7387\u3002","\u6B64\u5C42\u4E0D\u4F7F\u7528 ReLU \u622A\u65AD\u7C7B\u522B\u5206\u6570\uFF1B\u63A5\u4E0B\u6765\u7684 Softmax \u624D\u5C06\u5176\u5F52\u4E00\u5316\u4E3A\u6982\u7387\u5206\u5E03\u3002","logits","softmax"),an("\u5F52\u4E00\u5316\u3001\u6392\u5E8F\uFF0C\u4EE5\u53CA\u89E3\u91CA\u8FB9\u754C","Softmax \xB7 \u7C7B\u522B\u6392\u5E8F","1,000 \u4E2A\u7C7B\u522B\u5206\u6570","1,000 \u4E2A\u76F8\u5BF9\u6982\u7387","p\u1D62 = exp(z\u1D62 \u2212 m) / \u03A3\u2C7C exp(z\u2C7C \u2212 m)","Softmax \u5C06\u4EFB\u610F\u6709\u9650\u5206\u6570\u8F6C\u6362\u6210\u548C\u4E3A 1 \u7684\u975E\u8D1F\u6570\u503C\u3002\u6982\u7387\u53D7\u6240\u6709\u7C7B\u522B\u5206\u6570\u5171\u540C\u5F71\u54CD\uFF0C\u4E0D\u662F\u72EC\u7ACB\u7684\u53EF\u4FE1\u5EA6\u4FDD\u8BC1\u3002","\u5168\u7F51\u6CA1\u6709\u52A0\u8F7D\u6A21\u578B\u6743\u91CD\uFF1B\u7C7B\u522B\u5206\u6570\u548C\u56FE\u50CF\u5747\u4E3A\u9884\u8BBE\u3002\u5C40\u90E8 Softmax \u5B9E\u9A8C\u662F\u771F\u5B9E\u8BA1\u7B97\uFF0C\u4F46\u4E0D\u6784\u6210\u56FE\u50CF\u8BC6\u522B\u3002","output","softmax")],Ju={input:"\u56FE\u50CF\u7F16\u7801",conv:"\u5377\u79EF\u53D8\u6362",pool:"\u7A7A\u95F4\u538B\u7F29",fc:"\u7A20\u5BC6\u8FDE\u63A5",output:"\u6982\u7387\u5206\u5E03"};function Gs(i){if(!i.length||!i.every(Number.isFinite))throw new Error("\u5206\u6570\u5FC5\u987B\u662F\u6709\u9650\u6570\u503C");let t=Math.max(...i),e=i.map(s=>Math.exp(s-t)),n=e.reduce((s,r)=>s+r,0);return e.map(s=>s/n)}function ii(i,t){if(i.length!==t.length)throw new Error("\u7A97\u53E3\u4E0E\u5377\u79EF\u6838\u5C3A\u5BF8\u4E0D\u7B26");return i.reduce((e,n,s)=>e+n*t[s],0)}function Ku(i){return Math.max(...i)}function Qu(i){return i.flat(1/0)}function il(){return{time:0,running:!1,paused:!1,complete:!1,speed:1}}function sl(i){let t=Math.max(0,Math.min(13,i/1.65));return{index:Math.min(12,Math.floor(t)),local:t>=13?1:t%1,progress:t/13}}function Ti(i,t,e){switch(t){case"run":return{...il(),running:!0,speed:i.speed};case"pause":return i.running?{...i,paused:!i.paused}:i;case"speed":return{...i,speed:[.5,1,2].includes(e)?e:i.speed};case"step":{let n=Math.min(13,Math.floor(i.time/1.65+1e-8)+1);return{...i,time:n*1.65,running:n<13,paused:n<13,complete:n===13}}case"tick":{if(!i.running||i.paused)return i;let n=Math.min(21.45,i.time+Math.max(0,e)*i.speed);return{...i,time:n,running:n<21.45,complete:n>=21.45}}case"reset":return il();default:return i}}var v_={input:14006935,conv:8698095,pool:7920587,fc:12100077,output:15186825},td=new Ue(1,1,1),y_=new zi(td),M_=new ki(.055,7,5);function rl(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new gr(n);return s.colorSpace=we,s}function zr(i="all"){return rl(384,384,t=>{t.fillStyle="#153047",t.fillRect(0,0,384,384);for(let e=0;e<12;e++)for(let n=0;n<12;n++){let s=Math.sin(n*.5)*Math.cos(e*.4);t.fillStyle=`rgb(${35+s*15},${66+s*20},${86+s*20})`,t.fillRect(n*32,e*32,31,31)}t.fillStyle="#d4b58a",t.beginPath(),t.ellipse(195,310,110,130,0,0,7),t.fill(),t.fillStyle="#96754d",t.beginPath(),t.ellipse(115,184,39,88,.1,0,7),t.ellipse(275,184,39,88,-.1,0,7),t.fill(),t.fillStyle="#e1c296",t.beginPath(),t.ellipse(195,194,91,107,0,0,7),t.fill(),t.fillStyle="#edd5ad",t.beginPath(),t.ellipse(195,243,59,45,0,0,7),t.fill(),t.fillStyle="#222c32";for(let e of[159,231])t.beginPath(),t.arc(e,191,7,0,7),t.fill();if(t.beginPath(),t.ellipse(195,232,14,10,0,0,7),t.fill(),t.strokeStyle="#5d5244",t.lineWidth=2,t.beginPath(),t.moveTo(195,242),t.lineTo(195,257),t.quadraticCurveTo(178,267,168,255),t.moveTo(195,257),t.quadraticCurveTo(210,267,222,255),t.stroke(),i!=="all"){let e=t.getImageData(0,0,384,384),n=["red","green","blue"].indexOf(i);for(let s=0;s<e.data.length;s+=4)for(let r=0;r<3;r++)r!==n&&(e.data[s+r]*=.12);t.putImageData(e,0,0)}t.strokeStyle="#87bbcb",t.globalAlpha=.18;for(let e=0;e<=384;e+=24)t.beginPath(),t.moveTo(e,0),t.lineTo(e,384),t.moveTo(0,e),t.lineTo(384,e),t.stroke()})}function b_(i){return rl(128,128,t=>{t.fillStyle="#10263d",t.fillRect(0,0,128,128);for(let e=0;e<16;e++)for(let n=0;n<16;n++){let s=(Math.sin(n*.6+i)*Math.cos(e*.55+i)+1)/2;t.fillStyle=`rgba(141,204,239,${s*.8})`,t.fillRect(n*8,e*8,7,7)}t.strokeStyle="#bce6f1",t.globalAlpha=.5,t.lineWidth=1.5;for(let e=0;e<4;e++){t.beginPath();for(let n=0;n<128;n+=4){let s=25+e*23+Math.sin(n*.08+i+e)*12;n?t.lineTo(n,s):t.moveTo(n,s)}t.stroke()}})}function S_(){return rl(128,128,i=>{let t=i.createImageData(128,128);for(let e=0;e<128;e++)for(let n=0;n<128;n++){let s=(e*128+n)*4,r=Math.abs(Math.sin(n*.11)*Math.cos(e*.08));t.data[s]=105,t.data[s+1]=201,t.data[s+2]=222,t.data[s+3]=Math.round(r*160)}i.putImageData(t,0,0)})}function ed(i,t){let e=new De,n=new De;e.add(n);let s=v_[t],r=[],a=[],o=[],l=(T=s,C={})=>{let y=new Fn({color:T,metalness:.3,roughness:.43,emissive:T,emissiveIntensity:.12,...C});return r.push(y),y},c=(T,C=.4)=>{let y=new ke({color:T,transparent:!0,opacity:C,depthWrite:!1});return r.push(y),y},h=(T,C,y=[0,0,0],E=n)=>{let R=new Gt(T,C);return R.position.set(...y),R.castShadow=!0,R.receiveShadow=!0,E.add(R),R},d=(T,C,y=l(),E=n)=>{let R=h(td,y,C,E);R.scale.set(...T);let b=new En(y_,new Ze({color:s,transparent:!0,opacity:.36}));return R.add(b),R},f=(T,C=.06,y=l())=>{let E=h(M_,y,T);return E.scale.setScalar(C/.055),E},m=(T,C=.25,y=s)=>{let E=new fe().setFromPoints(T.map(b=>new F(...b))),R=new fi(E,new Ze({color:y,transparent:!0,opacity:C,depthWrite:!1}));return n.add(R),R},_=(T,C,y=[0,0,0])=>{let E=h(new Nn(T,.018,5,64),c(s,.4),C);return E.rotation.set(...y),E},v=d([1.8,.1,3.3],[0,-2.35,0],l(1319990,{metalness:.35,emissiveIntensity:.01}));d([1.78,.023,.025],[0,-2.28,1.66],c(s,.7));let g=_(1.7,[0,0,0],[0,Math.PI/2,0]);if(g.visible=!1,t==="input"){let T=["red","green","blue"].map(zr);for(let E=0;E<3;E++){let R=h(new en(2.4,2.8),l(16777215,{map:T[E],transparent:!0,opacity:.58,side:Xe,depthWrite:!1,emissive:16777215,emissiveMap:T[E]}),[(E-1)*.25,0,(E-1)*.24]);R.rotation.y=Math.PI/2,o.push(R)}let C=zr(),y=h(new en(2.4,2.8),l(16777215,{map:C,side:Xe,emissive:16777215,emissiveMap:C,emissiveIntensity:.2}),[-.55,0,0]);y.rotation.y=0,y.position.set(-.55,0,.6),e.userData.input=y;for(let E=0;E<3;E++)m([[-.7,-1.7,(E-1)*.7],[.8,-1.5,(E-1)*.7]],.55,[13405838,8961195,9021904][E])}else if(t==="conv"){let T=[0,3.7,0,3.15,0,2.65,2.6,2.45][i],C=i===6?6:7,y=l(s,{transparent:!0,opacity:.1,depthWrite:!1});for(let E=0;E<(i===1||i===3?C:0);E++){let R=(E-(C-1)/2)*.14,b=d([.035,T,T],[R,0,0],y);if(E%2===0){let P=new ke({map:b_(i*13+E),transparent:!0,opacity:.4,side:Xe,depthWrite:!1});r.push(P);let M=h(new en(T*.94,T*.94),P,[R+.024,0,0]);M.rotation.y=Math.PI/2}}if(i===1){let E=new De;n.add(E);for(let b of[-.52,.52])d([.12,.025,1.08],[-.67,b,0],c(11993074,.85),E);for(let b of[-.52,.52])d([.12,1.08,.025],[-.67,0,b],c(11993074,.85),E);a.push({object:E,kind:"scan",base:E.position.clone()});let R=d([.4,.72,.72],[-1.12,0,0],l(11002591,{transparent:!0,opacity:.3}));a.push({object:R,kind:"kernel",base:R.position.clone()});for(let b=0;b<3;b++)for(let P=0;P<3;P++)f([-1.32,(b-1)*.2,(P-1)*.2],.035,l(11793637))}else if(i===3){for(let E=0;E<4;E++){let R=_(.55+E*.13,[.8,0,0],[0,Math.PI/2,0]);a.push({object:R,kind:"rotate",base:R.position.clone()})}for(let E=0;E<4;E++)for(let R=0;R<4;R++)f([.85,(E-1.5)*.55,(R-1.5)*.55],.045)}else if(i===6)for(let E of[-1,1]){let R=_(.77,[0,E*.7,0],[0,Math.PI/2,0]);R.scale.z=.75;for(let b=0;b<8;b++){let P=b/8*Math.PI*2;m([[-.8,E*.7+Math.cos(P)*.5,Math.sin(P)*.5],[.8,E*.7+Math.cos(P)*.5,Math.sin(P)*.5]],.4,E<0?10069991:9032917)}}else{let E=new Bi(new Ue(.09,.09,.09),l(s,{emissiveIntensity:.3}),100),R=new Kt;for(let b=0;b<100;b++){let P=(b%5-2)*.25,M=(Math.floor(b/5)%5-2)*.37,S=(Math.floor(b/25)-1.5)*.4;R.makeTranslation(P+.9,M,S),E.setMatrixAt(b,R)}n.add(E),a.push({object:E,kind:"volume",base:E.position.clone()})}}else if(t==="pool"){let T=i===8?5:4,C=[];for(let E=0;E<T;E++)for(let R=0;R<T;R++){let b=(Math.sin(E*1.2+R*.6)+1)/2,P=d([.23,.2+b*.4,.23],[-.4,(E-(T-1)/2)*.45,(R-(T-1)/2)*.45],l(b>.75?12775127:s,{transparent:!0,opacity:.55}));C.push(P)}for(let E=0;E<2;E++)for(let R=0;R<2;R++){let b=[.65,(E-.5)*.8,(R-.5)*.8];d([.24,.24,.24],b,l(12840673)),m([[-.5,b[1]*1.2,b[2]*1.2],b],.4)}let y=d([.035,.98,.98],[-.6,.2,.2],l(10677984,{transparent:!0,opacity:.13,depthWrite:!1}));if(a.push({object:y,kind:"pool",base:y.position.clone()}),i===8)for(let E=0;E<32;E++){let R=f([.9,(E%8-3.5)*.22,(Math.floor(E/8)-1.5)*.25],.045);a.push({object:R,kind:"flatten",base:R.position.clone(),j:E})}}else if(t==="fc")if(i===11){for(let T=0;T<12;T++){let C=.25+T*7%13/7,y=d([.1,C,.14],[(T%3-1)*.32,C/2-1,(Math.floor(T/3)-1.5)*.48],l(T===5?15254416:s));a.push({object:y,kind:"bar",base:y.position.clone(),j:T})}_(1.5,[0,0,0],[0,Math.PI/2,0])}else{let T=i===9?3:4,C=6,y=[];for(let R=0;R<T;R++)for(let b=0;b<C;b++)for(let P=0;P<C;P++){let M=[(R-(T-1)/2)*.43,(b-2.5)*.42,(P-2.5)*.42];if(f(M,.045,l(s,{emissiveIntensity:.5})),R>0){let S=[M[0]-.43,((b*3+P)%6-2.5)*.42,((P*2+b)%6-2.5)*.42];y.push(...S,...M)}}let E=new fe;E.setAttribute("position",new ne(y,3)),n.add(new En(E,new Ze({color:s,transparent:!0,opacity:.22})));for(let R=0;R<3;R++){let b=_(1.5+R*.1,[0,0,0],[0,Math.PI/2,R*.4]);a.push({object:b,kind:"rotate",base:b.position.clone()})}}else{let T=[.63,.19,.11,.07];for(let C=0;C<4;C++){let y=d([.32,T[C]*3.7,.5],[(C-1.5)*.43,T[C]*1.85-1.3,0],l(C===0?14992270:7573407));a.push({object:y,kind:"bar",base:y.position.clone(),j:C})}for(let C=0;C<3;C++){let y=_(1.4+C*.12,[0,0,0],[0,Math.PI/2,0]);a.push({object:y,kind:"rotate",base:y.position.clone()})}e.userData.outputBars=!0}let u=new Gt(new en(2.6,2.6),new ke({map:S_(),color:s,transparent:!0,opacity:0,side:Xe,blending:Qn,depthWrite:!1}));return u.rotation.y=Math.PI/2,u.position.x=.78,n.add(u),e.userData.tick=(T,C,y,E,R={})=>{for(let b of r)b.emissive&&(b.emissiveIntensity=.07+C*.55),b.isMeshStandardMaterial&&!b.map&&(b.envMapIntensity=.45);if(g.visible=C>.5,g.material.opacity=Math.max(0,C-.5)*.9,g.scale.setScalar(.65+y*.75),u.material.opacity=C>.5?Math.sin(y*Math.PI)*.42:0,e.userData.input){let b=R.channel||"all";if(e.userData.lastChannel!==b){let P=zr(b),M=e.userData.input.material;M.map.dispose(),M.map=P,M.emissiveMap=P,e.userData.lastChannel=b}}if(!E)for(let b of a){let P=T*.65;switch(b.kind){case"scan":case"kernel":b.object.position.y=Math.sin(P*1.3)*(b.kind==="scan"?1.1:.65),b.object.position.z=Math.cos(P*.65)*.7;break;case"pool":b.object.position.y=Math.sin(P)*.55,b.object.position.z=Math.cos(P*.8)*.55;break;case"rotate":b.object.rotation.x=P*.22;break;case"volume":b.object.rotation.x=Math.sin(P)*.17;break;case"flatten":{let M=R.flatten?1:C>.55?Math.min(1,y*1.5):0;b.object.position.set(ge.lerp(b.base.x,.9,M),ge.lerp(b.base.y,(b.j-15.5)*.08,M),ge.lerp(b.base.z,0,M));break}case"bar":b.object.scale.y=C>.55?.75+Math.sin(y*Math.PI)*.25:1;break}}},e}function nd(i,t){let e=[],s=new Float32Array(840),r=new Float32Array(280*3),a=new Float32Array(280*6),o=new fe;o.setAttribute("position",new Ae(s,3)),o.setAttribute("color",new Ae(r,3));let l=rl(32,32,m=>{let _=m.createRadialGradient(16,16,0,16,16,16);_.addColorStop(0,"rgba(232,255,250,1)"),_.addColorStop(.2,"rgba(150,233,224,.8)"),_.addColorStop(1,"rgba(80,180,210,0)"),m.fillStyle=_,m.fillRect(0,0,32,32)}),c=new mr(o,new ws({map:l,size:.18,vertexColors:!0,transparent:!0,blending:Qn,depthWrite:!1,sizeAttenuation:!0}));c.frustumCulled=!1,i.add(c);let h=new fe;h.setAttribute("position",new Ae(a,3));let d=new En(h,new Ze({color:9563876,transparent:!0,opacity:.32,blending:Qn,depthWrite:!1}));d.frustumCulled=!1,i.add(d);for(let m=0;m<12;m++){let _=new fe;_.setAttribute("position",new Ae(new Float32Array(432*6),3));let v=new Ze({color:m<8?5867690:10258622,transparent:!0,opacity:.14,depthWrite:!1}),g=new En(_,v);g.frustumCulled=!1,i.add(g),e.push(g)}function f(m,_,v){let g=t[m].position.x+.65,u=t[m+1].position.x-.65,T=_/18*Math.PI*2,C=.48+m%3*.16,y=m>=8?.34:.54,E=ge.lerp(C,y,v)+Math.sin(v*Math.PI)*.22;return[ge.lerp(g,u,v),Math.cos(T)*E+Math.sin(v*Math.PI)*.1,Math.sin(T)*E]}return{update(m,_,v,g,u){for(let y=0;y<12;y++){let E=e[y].geometry.attributes.position,R=0;for(let b=0;b<18;b++)for(let P=0;P<24;P++)E.setXYZ(R++,...f(y,b,P/24)),E.setXYZ(R++,...f(y,b,(P+1)/24));E.needsUpdate=!0,e[y].material.opacity=v&&_.index===y?.39:.115}if(c.visible=d.visible=v,!v)return;let T=Math.min(11,_.index),C=_.index===12?1:Math.max(0,(_.local-.08)/.84);for(let y=0;y<280;y++){let E=y%18,R=Math.floor(y/18)*.019,b=C-R,P=y*3,M=b>=0&&b<=1&&_.index<12,S=f(T,E,Math.max(0,Math.min(1,b))),U=f(T,E,Math.max(0,b-.025));s.set(S,P);let O=M?1-R*.8:0;r.set([O*.62,O,O*.94],P),a.set(S,y*6),a.set(M?U:S,y*6+3)}o.attributes.position.needsUpdate=!0,o.attributes.color.needsUpdate=!0,h.attributes.position.needsUpdate=!0,c.material.size=u?.1:.16}}}var kr=[["origins","00","\u5D1B\u8D77\u524D\u591C"],["match","01","\u4E16\u7EAA\u5BF9\u5C40"],["decision","02","\u51B3\u7B56\u4E4B\u6838"],["dimensions","03","\u7EF4\u5EA6\u89E3\u5256"],["growth","04","\u6210\u957F\u7CFB\u7EDF"],["experiments","05","\u5B9E\u9A8C\u4E0E\u8FB9\u754C"]];function kc(i){let t=i.replace(/^#/,"");return{history:"origins",model:"dimensions",labs:"experiments"}[t]||(kr.some(e=>e[0]===t)?t:"origins")}var Vc={year:2016,result:"4 : 1",games:[{date:"3\u67089\u65E5",winner:"\u963F\u5C14\u6CD5\u56F4\u68CB",note:"\u7B2C\u4E00\u5C40\uFF1A\u7A81\u7834\u9884\u671F\uFF0C\u673A\u5668\u8D62\u5F97\u9996\u5C40\u3002"},{date:"3\u670810\u65E5",winner:"\u963F\u5C14\u6CD5\u56F4\u68CB",note:"\u7B2C\u4E8C\u5C40\uFF1A\u7B2C37\u624B\u5F15\u53D1\u5E7F\u6CDB\u8BA8\u8BBA\u3002"},{date:"3\u670812\u65E5",winner:"\u963F\u5C14\u6CD5\u56F4\u68CB",note:"\u7B2C\u4E09\u5C40\uFF1A\u53D6\u5F97\u6BD4\u8D5B\u80DC\u5229\uFF0C\u4F59\u4E0B\u5BF9\u5C40\u7EE7\u7EED\u3002"},{date:"3\u670813\u65E5",winner:"\u674E\u4E16\u77F3",note:"\u7B2C\u56DB\u5C40\uFF1A\u674E\u4E16\u77F3\u7B2C78\u624B\u6210\u4E3A\u5173\u952E\u8F6C\u6298\uFF0C\u8D62\u5F97\u4E00\u5C40\u3002"},{date:"3\u670815\u65E5",winner:"\u963F\u5C14\u6CD5\u56F4\u68CB",note:"\u7B2C\u4E94\u5C40\uFF1A\u6700\u7EC8\u603B\u6BD4\u52064\u6BD41\u3002"}]},al=[[3,3,0],[15,15,1],[3,15,0],[15,3,1],[9,3,0],[9,15,1],[4,9,0],[14,9,1],[6,5,0],[6,6,1],[7,5,0],[8,6,1],[11,12,0],[12,12,1],[11,13,0],[13,13,1],[10,9,0],[9,9,1],[10,10,0],[8,10,1],[5,14,0],[14,5,1],[12,4,0],[4,13,1]],id=["\u9009\u62E9","\u6269\u5C55","\u8BC4\u4F30","\u56DE\u4F20"];function Hc(){return{phase:0,cycle:0,selected:0,visits:[0,0,0],totals:[0,0,0],values:[0,0,0],prior:[.56,.29,.15]}}function Gc(i){let t={...i,visits:[...i.visits],totals:[...i.totals],values:[...i.values]};if(i.phase===0){let e=i.visits.reduce((s,r)=>s+r,0),n=i.values.map((s,r)=>s+1.6*i.prior[r]*Math.sqrt(e+1)/(1+i.visits[r]));t.selected=n.indexOf(Math.max(...n))}if(i.phase===3){let e=t.selected,n=[.43,.73,.52][e]+Math.sin((i.cycle+1)*1.7)*.06;t.visits[e]++,t.totals[e]+=n,t.values[e]=t.totals[e]/t.visits[e],t.cycle++}return t.phase=(i.phase+1)%4,t}var Wc={weight:.15,epoch:0,error:(.15*.8-.9)**2};function sd(i){let n=i.weight*.8,s=i.weight-.22*2*(n-.9)*.8;return{weight:s,epoch:i.epoch+1,error:(s*.8-.9)**2}}var rd=[["2016\u5E74\u539F\u59CB\u8BBA\u6587\uFF1A\u6DF1\u5EA6\u795E\u7ECF\u7F51\u7EDC\u4E0E\u6811\u641C\u7D22","https://doi.org/10.1038/nature16961"],["\u5B98\u65B9\u963F\u5C14\u6CD5\u56F4\u68CB\u9879\u76EE\u8D44\u6599","https://deepmind.google/research/breakthroughs/alphago/"],["2017\u5E74\u96F6\u8D77\u70B9\u81EA\u6211\u5BF9\u5F08\u7814\u7A76","https://doi.org/10.1038/nature24270"],["2012\u5E74\u56FE\u50CF\u5206\u7C7B\u539F\u59CB\u8BBA\u6587","https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks"]];var Vr=new F;function xn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Vr.copy(t),Vr[n]=0,Vr.normalize();let c=.5*a/(a+o),h=1-Vr.angleTo(i)/l;return Math.sign(Vr[e])===1?h*c:o/(a+o)+c+c*(1-h)}var ol=class i extends Ue{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new F,c=new F,h=new F(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,m=this.attributes.uv.array,_=d.length/6,v=new F,g=.5/a;for(let u=0,T=0;u<d.length;u+=3,T+=2)switch(l.fromArray(d,u),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),d[u+0]=h.x*Math.sign(l.x)+c.x*r,d[u+1]=h.y*Math.sign(l.y)+c.y*r,d[u+2]=h.z*Math.sign(l.z)+c.z*r,f[u+0]=c.x,f[u+1]=c.y,f[u+2]=c.z,Math.floor(u/_)){case 0:v.set(1,0,0),m[T+0]=xn(v,c,"z","y",r,n),m[T+1]=1-xn(v,c,"y","z",r,e);break;case 1:v.set(-1,0,0),m[T+0]=1-xn(v,c,"z","y",r,n),m[T+1]=1-xn(v,c,"y","z",r,e);break;case 2:v.set(0,1,0),m[T+0]=1-xn(v,c,"x","z",r,t),m[T+1]=xn(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),m[T+0]=1-xn(v,c,"x","z",r,t),m[T+1]=1-xn(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),m[T+0]=1-xn(v,c,"x","y",r,t),m[T+1]=1-xn(v,c,"y","x",r,e);break;case 5:v.set(0,0,-1),m[T+0]=xn(v,c,"x","y",r,t),m[T+1]=1-xn(v,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var ye=(i,t,e,n,s,r,a,o)=>({key:i,name:t,role:e,mechanism:n,input:s,output:r,observe:a,relation:o}),wi={match:[ye("shell","\u673A\u67B6\u4E0E\u627F\u8F7D\u7ED3\u6784","\u8BA9\u8BA1\u7B97\u8D44\u6E90\u53EF\u9760\u5730\u534F\u540C\u5DE5\u4F5C\u3002","\u673A\u67B6\u7EC4\u7EC7\u8BA1\u7B97\u8282\u70B9\u3001\u4F9B\u7535\u4E0E\u6563\u70ED\u7A7A\u95F4\u3002\u5916\u58F3\u4E0D\u6267\u884C\u56F4\u68CB\u63A8\u7406\uFF0C\u4F46\u7A33\u5B9A\u4F9B\u7535\u3001\u6E29\u5EA6\u63A7\u5236\u548C\u53EF\u7EF4\u62A4\u6027\u51B3\u5B9A\u7CFB\u7EDF\u80FD\u5426\u6301\u7EED\u8FD0\u884C\u3002","\u7535\u529B\u3001\u51B7\u5374\u6761\u4EF6\u4E0E\u8BA1\u7B97\u6A21\u5757","\u7A33\u5B9A\u7684\u8FD0\u884C\u73AF\u5883","\u89C2\u5BDF\u7ACB\u67F1\u3001\u5BFC\u8F68\u548C\u5206\u5C42\u6258\u76D8\uFF1B\u5C55\u5F00\u540E\uFF0C\u673A\u67B6\u4E0E\u5404\u4E2A\u8BA1\u7B97\u5C42\u76F8\u4E92\u5206\u79BB\u3002","\u8FD9\u662F\u5206\u5E03\u5F0F\u8BA1\u7B97\u7CFB\u7EDF\u7684\u5C55\u9648\u539F\u7406\u6A21\u578B\uFF0C\u4E0D\u5BF9\u5E942016\u5E74\u8BBE\u5907\u7684\u7269\u7406\u6392\u5E03\u3002"),ye("cpu","\u901A\u7528\u5904\u7406\u5668\u4E0E\u4EFB\u52A1\u8C03\u5EA6","\u7EC4\u7EC7\u641C\u7D22\uFF0C\u628A\u5DE5\u4F5C\u4EA4\u7ED9\u5408\u9002\u7684\u8BA1\u7B97\u8D44\u6E90\u3002","\u7A0B\u5E8F\u7EF4\u62A4\u641C\u7D22\u6811\u548C\u8BBF\u95EE\u7EDF\u8BA1\uFF0C\u7EC4\u7EC7\u5019\u9009\u5C40\u9762\u7684\u6269\u5C55\uFF0C\u5E76\u534F\u8C03\u795E\u7ECF\u7F51\u7EDC\u8BC4\u4F30\u4EFB\u52A1\u3002\u901A\u7528\u5904\u7406\u5668\u64C5\u957F\u63A7\u5236\u903B\u8F91\uFF1B\u52A0\u901F\u5668\u64C5\u957F\u5E76\u884C\u6570\u503C\u8FD0\u7B97\uFF0C\u4E8C\u8005\u9700\u8981\u534F\u4F5C\u3002","\u68CB\u76D8\u72B6\u6001\u3001\u641C\u7D22\u7EDF\u8BA1\u4E0E\u4EFB\u52A1\u961F\u5217","\u5F85\u8BC4\u4F30\u5C40\u9762\u548C\u8C03\u5EA6\u6307\u4EE4","\u82AF\u7247\u4E0A\u65B9\u7684\u7EC6\u5BC6\u7ED3\u6784\u8868\u793A\u6563\u70ED\u7247\uFF1B\u82AF\u7247\u4E0E\u6258\u76D8\u5171\u540C\u6784\u6210\u4E00\u4E2A\u53EF\u9009\u62E9\u6A21\u5757\u3002","\u6A21\u578B\u5C06\u529F\u80FD\u5206\u5C42\u8868\u8FBE\uFF0C\u4E0D\u8868\u793A\u5B9E\u9645\u6BD4\u8D5B\u4E2D\u6BCF\u9879\u4EFB\u52A1\u53EA\u5BF9\u5E94\u4E00\u5757\u72EC\u7ACB\u7535\u8DEF\u677F\u3002"),ye("gpu","\u795E\u7ECF\u7F51\u7EDC\u8BA1\u7B97\u6A21\u5757","\u5FEB\u901F\u8BC4\u4F30\u591A\u4E2A\u5C40\u9762\u4E2D\u7684\u6A21\u5F0F\u3002","\u5377\u79EF\u5C42\u4ECE\u68CB\u76D8\u7279\u5F81\u5E73\u9762\u63D0\u53D6\u7A7A\u95F4\u6A21\u5F0F\u3002\u7B56\u7565\u4F30\u8BA1\u63D0\u51FA\u5019\u9009\u843D\u70B9\uFF0C\u4EF7\u503C\u4F30\u8BA1\u63D0\u4F9B\u5C40\u9762\u7ED3\u679C\u7684\u5224\u65AD\u4F9D\u636E\uFF1B\u8BA1\u7B97\u4E3B\u8981\u5305\u542B\u5927\u91CF\u53EF\u5E76\u884C\u7684\u77E9\u9635\u548C\u5F20\u91CF\u8FD0\u7B97\u3002","\u5C40\u9762\u7279\u5F81\u3001\u5DF2\u7ECF\u8BAD\u7EC3\u7684\u53C2\u6570","\u7B56\u7565\u503E\u5411\u4E0E\u4EF7\u503C\u4F30\u8BA1","\u4E24\u7EC4\u5E76\u5217\u6838\u5FC3\u4E0E\u6563\u70ED\u7ED3\u6784\u8868\u793A\u5E76\u884C\u8BA1\u7B97\uFF1B\u5B83\u4EEC\u4E0D\u662F\u4E24\u4E2A\u72EC\u7ACB\u62E5\u6709\u610F\u8BC6\u7684\u201C\u5927\u8111\u201D\u3002","\u6BD4\u8D5B\u65F6\u4EE5\u5DF2\u8BAD\u7EC3\u53C2\u6570\u8FDB\u884C\u8BC4\u4F30\u4E0E\u641C\u7D22\uFF1B\u8FD9\u4E0E\u8BAD\u7EC3\u9636\u6BB5\u53CD\u590D\u66F4\u65B0\u6743\u91CD\u662F\u4E0D\u540C\u8FC7\u7A0B\u3002"),ye("memory","\u5185\u5B58\u3001\u663E\u5B58\u4E0E\u641C\u7D22\u72B6\u6001","\u4FDD\u5B58\u53C2\u6570\u3001\u7279\u5F81\u548C\u63A2\u7D22\u8BB0\u5F55\u3002","\u5185\u5B58\u7CFB\u7EDF\u627F\u8F7D\u7F51\u7EDC\u6743\u91CD\u3001\u4E2D\u95F4\u5F20\u91CF\u3001\u4EFB\u52A1\u6570\u636E\u4EE5\u53CA\u641C\u7D22\u8282\u70B9\u7684\u8BBF\u95EE\u7EDF\u8BA1\u3002\u5BB9\u91CF\u51B3\u5B9A\u80FD\u5BB9\u7EB3\u591A\u5C11\u5DE5\u4F5C\u6570\u636E\uFF0C\u5E26\u5BBD\u4E0E\u8BBF\u95EE\u5EF6\u8FDF\u5F71\u54CD\u8BA1\u7B97\u5355\u5143\u80FD\u5426\u53CA\u65F6\u83B7\u5F97\u6570\u636E\u3002","\u6A21\u578B\u53C2\u6570\u3001\u7279\u5F81\u5F20\u91CF\u4E0E\u8BBF\u95EE\u8BB0\u5F55","\u4F9B\u8BA1\u7B97\u4F7F\u7528\u7684\u6570\u636E","\u89C2\u5BDF\u5E76\u6392\u7684\u5B58\u50A8\u6761\u4E0E\u5C0F\u578B\u82AF\u7247\u3002\u62C6\u5F00\u540E\u53EF\u4EE5\u770B\u5230\u5B83\u4E0E\u8BA1\u7B97\u6A21\u5757\u5C5E\u4E8E\u4E0D\u540C\u5C42\u7EA7\u3002","\u6570\u636E\u4E0D\u4F1A\u56E0\u653E\u5165\u5B58\u50A8\u5668\u800C\u81EA\u52A8\u53D8\u6210\u77E5\u8BC6\uFF1B\u6709\u6548\u7684\u53C2\u6570\u6765\u81EA\u8BAD\u7EC3\u8FC7\u7A0B\u3002"),ye("network","\u8282\u70B9\u4E92\u8054\u4E0E\u7ED3\u679C\u6C47\u805A","\u628A\u591A\u4E2A\u8BA1\u7B97\u8282\u70B9\u7EC4\u7EC7\u6210\u534F\u540C\u7CFB\u7EDF\u3002","\u4E0D\u540C\u5DE5\u4F5C\u8282\u70B9\u4E4B\u95F4\u4F20\u9012\u4EFB\u52A1\u3001\u5C40\u9762\u8BC4\u4F30\u4E0E\u7EDF\u8BA1\u7ED3\u679C\u3002\u5206\u5E03\u5F0F\u7CFB\u7EDF\u9700\u8981\u534F\u8C03\u901A\u4FE1\u548C\u8BA1\u7B97\uFF0C\u907F\u514D\u7B49\u5F85\u4E0E\u91CD\u590D\u5DE5\u4F5C\uFF1B\u66F4\u591A\u8282\u70B9\u5E76\u4E0D\u4FDD\u8BC1\u6027\u80FD\u6309\u6BD4\u4F8B\u589E\u957F\u3002","\u8BC4\u4F30\u8BF7\u6C42\u3001\u8282\u70B9\u7ED3\u679C\u4E0E\u540C\u6B65\u6D88\u606F","\u53EF\u4F9B\u540E\u7EED\u641C\u7D22\u4F7F\u7528\u7684\u6C47\u805A\u7ED3\u679C","\u89C2\u5BDF\u63A5\u53E3\u9635\u5217\u548C\u68CB\u76D8\u65C1\u7684\u8FDE\u7EBF\u3002\u53D1\u5149\u8DEF\u5F84\u8868\u793A\u4FE1\u606F\u5173\u7CFB\uFF0C\u4E0D\u662F\u5F53\u5E74\u771F\u5B9E\u5E03\u7EBF\u3002","\u8FDE\u7EBF\u662F\u6D41\u7A0B\u793A\u610F\uFF0C\u4E0D\u4EE3\u8868\u5B9E\u9645\u534F\u8BAE\u3001\u5E26\u5BBD\u6216\u7CBE\u786E\u901A\u4FE1\u62D3\u6251\u3002"),ye("board","\u5341\u4E5D\u8DEF\u68CB\u76D8\u4E0E\u72B6\u6001\u5165\u53E3","\u628A\u4E00\u76D8\u56F4\u68CB\u8F6C\u5316\u4E3A\u53EF\u8BA1\u7B97\u7684\u72B6\u6001\u3002","\u9ED1\u767D\u68CB\u5B50\u7684\u4F4D\u7F6E\u3001\u8F6E\u6B21\u53CA\u5176\u4ED6\u89C4\u5219\u76F8\u5173\u4FE1\u606F\uFF0C\u9700\u8981\u7F16\u7801\u4E3A\u6570\u503C\u7279\u5F81\u3002\u7F51\u7EDC\u5904\u7406\u7684\u662F\u7F16\u7801\u540E\u7684\u5F20\u91CF\uFF1B\u641C\u7D22\u8FDB\u4E00\u6B65\u8BC4\u4F30\u53EF\u80FD\u7684\u540E\u7EED\u53D8\u5316\uFF0C\u518D\u63D0\u51FA\u843D\u5B50\u3002","\u5F53\u524D\u5C40\u9762\u4E0E\u89C4\u5219\u76F8\u5173\u72B6\u6001","\u68CB\u76D8\u7279\u5F81\u5E73\u9762\u4E0E\u843D\u5B50\u5019\u9009","\u68CB\u76D8\u670919\xD719\u4E2A\u4EA4\u70B9\u3002\u5408\u6210\u68CB\u5F62\u7528\u4E8E\u8BF4\u660E\u7A7A\u95F4\u7F16\u7801\uFF0C\u5E76\u975E\u4E94\u756A\u68CB\u7684\u9010\u624B\u8BB0\u5F55\u3002","03\u5C55\u533A\u7684\u9ED1\u68CB\u3001\u767D\u68CB\u3001\u7A7A\u4F4D\u5E73\u9762\u662F\u7B80\u5316\u5165\u53E3\uFF0C\u4E0D\u662F2016\u5E74\u7CFB\u7EDF\u7684\u5168\u90E8\u8F93\u5165\u7279\u5F81\u3002")],gpu:[ye("pcb","\u7535\u8DEF\u57FA\u677F\u4E0E\u4F9B\u7535","\u4E3A\u8BA1\u7B97\u6838\u5FC3\u548C\u5B58\u50A8\u5668\u63D0\u4F9B\u8FDE\u63A5\u4E0E\u7535\u529B\u3002","\u591A\u5C42\u7535\u8DEF\u677F\u901A\u8FC7\u5BFC\u7EBF\u3001\u4F9B\u7535\u6A21\u5757\u548C\u63A5\u53E3\u5C06\u5404\u5668\u4EF6\u8FDE\u63A5\u8D77\u6765\u3002\u7A33\u5B9A\u7535\u538B\u3001\u53EF\u9760\u7684\u4FE1\u53F7\u4F20\u8F93\u548C\u5408\u7406\u7684\u5668\u4EF6\u5E03\u5C40\uFF0C\u662F\u5E76\u884C\u8BA1\u7B97\u5F97\u4EE5\u8FD0\u884C\u7684\u7269\u7406\u57FA\u7840\u3002","\u5916\u90E8\u7535\u529B\u4E0E\u4E3B\u673A\u6570\u636E","\u7A33\u5B9A\u4F9B\u7535\u548C\u7535\u8DEF\u8FDE\u63A5","\u5E95\u90E8\u7EFF\u8272\u57FA\u677F\u3001\u91D1\u8272\u63A5\u53E3\u548C\u7EC6\u5BC6\u8D70\u7EBF\u3002\u5B83\u627F\u8F7D\u5668\u4EF6\uFF0C\u672C\u8EAB\u4E0D\u662F\u8D1F\u8D23\u5B66\u4E60\u7684\u7B97\u6CD5\u3002","\u8FD9\u662F\u4E00\u5757\u901A\u7528\u56FE\u5F62\u52A0\u901F\u5668\u7684\u539F\u7406\u7ED3\u6784\uFF0C\u4E0D\u662F\u963F\u5C14\u6CD5\u56F4\u68CB\u539F\u59CB\u8BBE\u5907\u7684\u590D\u523B\u3002"),ye("compute","\u5E76\u884C\u8BA1\u7B97\u6838\u5FC3","\u540C\u65F6\u6267\u884C\u5927\u91CF\u76F8\u4F3C\u7684\u4E58\u52A0\u64CD\u4F5C\u3002","\u795E\u7ECF\u7F51\u7EDC\u628A\u7279\u5F81\u548C\u6743\u91CD\u7EC4\u7EC7\u4E3A\u5F20\u91CF\uFF0C\u5377\u79EF\u4E0E\u77E9\u9635\u8FD0\u7B97\u88AB\u62C6\u6210\u8BB8\u591A\u5E76\u884C\u4EFB\u52A1\u3002\u53EA\u6709\u6570\u636E\u4F9B\u5E94\u3001\u4EFB\u52A1\u89C4\u6A21\u4E0E\u7B97\u6CD5\u5B9E\u73B0\u76F8\u5339\u914D\uFF0C\u6838\u5FC3\u8D44\u6E90\u624D\u80FD\u88AB\u6709\u6548\u5229\u7528\u3002","\u7279\u5F81\u5F20\u91CF\u3001\u6743\u91CD\u548C\u8FD0\u7B97\u6307\u4EE4","\u8F93\u51FA\u7279\u5F81\u6216\u68AF\u5EA6","\u4E2D\u592E\u8BA1\u7B97\u5C01\u88C5\u4E0A\u7EC6\u5206\u7684\u5C0F\u683C\u8868\u793A\u5E76\u884C\u6267\u884C\u5355\u5143\u7684\u6982\u5FF5\uFF0C\u4E0D\u5BF9\u5E94\u771F\u5B9E\u82AF\u7247\u7248\u56FE\u3002","\u56FE\u5F62\u5904\u7406\u5668\u52A0\u901F\u8BAD\u7EC3\u548C\u90E8\u5206\u8BC4\u4F30\u8BA1\u7B97\uFF0C\u4F46\u5E76\u4E0D\u66FF\u4EE3\u641C\u7D22\u7B97\u6CD5\u3001\u6570\u636E\u548C\u5B66\u4E60\u76EE\u6807\u3002"),ye("vram","\u663E\u5B58\u4E0E\u6570\u636E\u901A\u8DEF","\u8BA9\u5DE5\u4F5C\u6570\u636E\u5C3D\u53EF\u80FD\u9760\u8FD1\u8BA1\u7B97\u6838\u5FC3\u3002","\u663E\u5B58\u5B58\u653E\u6743\u91CD\u3001\u4E2D\u95F4\u6FC0\u6D3B\u3001\u68AF\u5EA6\u7B49\u6570\u636E\u3002\u8BAD\u7EC3\u5F80\u5F80\u9700\u8981\u4FDD\u5B58\u66F4\u591A\u4E2D\u95F4\u7ED3\u679C\u3002\u5373\u4F7F\u8BA1\u7B97\u6838\u5FC3\u5F88\u5FEB\uFF0C\u9891\u7E41\u7684\u6570\u636E\u642C\u8FD0\u4ECD\u53EF\u80FD\u6210\u4E3A\u4E3B\u8981\u74F6\u9888\u3002","\u5F85\u8FD0\u7B97\u6570\u636E\u4E0E\u4E2D\u95F4\u7ED3\u679C","\u9AD8\u5E26\u5BBD\u6570\u636E\u4F9B\u7ED9","\u4E2D\u592E\u6838\u5FC3\u4E24\u4FA7\u6392\u5217\u7740\u5B58\u50A8\u82AF\u7247\u3002\u62C6\u89E3\u540E\u53EF\u4EE5\u6E05\u695A\u533A\u5206\u8BA1\u7B97\u548C\u5B58\u50A8\u3002","\u663E\u5B58\u5BB9\u91CF\u5F71\u54CD\u53EF\u5BB9\u7EB3\u7684\u6A21\u578B\u548C\u6279\u6B21\uFF1B\u5E26\u5BBD\u5F71\u54CD\u4F9B\u6570\u901F\u5EA6\uFF0C\u4E8C\u8005\u662F\u4E0D\u540C\u6307\u6807\u3002"),ye("heatsink","\u5BFC\u70ED\u7ED3\u6784\u4E0E\u6563\u70ED\u9CCD\u7247","\u628A\u6838\u5FC3\u4EA7\u751F\u7684\u70ED\u91CF\u6269\u6563\u5230\u66F4\u5927\u7684\u8868\u9762\u3002","\u8BA1\u7B97\u6D88\u8017\u7535\u80FD\u5E76\u4EA7\u751F\u70ED\u91CF\u3002\u5BFC\u70ED\u63A5\u89E6\u4E0E\u91D1\u5C5E\u9CCD\u7247\u628A\u70ED\u91CF\u4ECE\u82AF\u7247\u4F20\u5411\u7A7A\u6C14\uFF0C\u589E\u5927\u6709\u6548\u6563\u70ED\u9762\u79EF\uFF1B\u6E29\u5EA6\u8FC7\u9AD8\u4F1A\u9650\u5236\u53EF\u6301\u7EED\u8FD0\u884C\u7684\u9891\u7387\u3002","\u82AF\u7247\u70ED\u91CF","\u4F20\u5411\u7A7A\u6C14\u7684\u70ED\u91CF","\u5BC6\u96C6\u91D1\u5C5E\u8584\u7247\u4E3A\u6563\u70ED\u9CCD\u7247\u3002\u89C2\u5BDF\u8584\u7247\u95F4\u7559\u51FA\u7684\u6C14\u6D41\u901A\u9053\u3002","\u6563\u70ED\u6539\u53D8\u8FD0\u884C\u6761\u4EF6\uFF0C\u4E0D\u6539\u53D8\u7F51\u7EDC\u5B66\u5230\u7684\u77E5\u8BC6\uFF1B\u66F4\u5927\u6563\u70ED\u5668\u4E5F\u4E0D\u7B49\u4E8E\u66F4\u9AD8\u667A\u80FD\u3002"),ye("fan","\u98CE\u6247\u4E0E\u4E3B\u52A8\u6C14\u6D41","\u6301\u7EED\u5E26\u8D70\u6563\u70ED\u7ED3\u6784\u5468\u56F4\u7684\u70ED\u7A7A\u6C14\u3002","\u98CE\u6247\u63A8\u52A8\u7A7A\u6C14\u7ECF\u8FC7\u6563\u70ED\u9CCD\u7247\uFF0C\u4F7F\u70ED\u91CF\u79BB\u5F00\u5668\u4EF6\u3002\u98CE\u91CF\u3001\u98CE\u9053\u3001\u566A\u58F0\u548C\u80FD\u8017\u4E4B\u95F4\u5B58\u5728\u53D6\u820D\uFF1B\u7CFB\u7EDF\u6027\u80FD\u4E5F\u53D7\u673A\u7BB1\u6574\u4F53\u6C14\u6D41\u6761\u4EF6\u5F71\u54CD\u3002","\u7535\u529B\u4E0E\u5468\u56F4\u7A7A\u6C14","\u7A7F\u8FC7\u9CCD\u7247\u7684\u7A7A\u6C14\u6D41\u52A8","\u9876\u90E8\u53CC\u98CE\u6247\u4E0E\u4E2D\u592E\u8F6E\u6BC2\u3002\u98CE\u6247\u548C\u4E0B\u65B9\u9CCD\u7247\u5206\u522B\u53EF\u9009\uFF0C\u4E0D\u518D\u5171\u7528\u540C\u4E00\u89E3\u91CA\u3002","\u98CE\u6247\u8F6C\u901F\u4E0D\u662F\u8BAD\u7EC3\u901F\u5EA6\u8BFB\u6570\uFF1B\u672C\u6A21\u578B\u4E0D\u8F93\u51FA\u771F\u5B9E\u6E29\u5EA6\u4E0E\u786C\u4EF6\u6027\u80FD\u6D4B\u91CF\u3002")],training:[ye("sample","\u8BAD\u7EC3\u6837\u672C\u4E0E\u5B66\u4E60\u76EE\u6807","\u5B9A\u4E49\u6A21\u578B\u8981\u4ECE\u4EC0\u4E48\u7ECF\u9A8C\u4E2D\u5B66\u5230\u4EC0\u4E48\u3002","\u76D1\u7763\u5B66\u4E60\u628A\u8F93\u5165\u548C\u76EE\u6807\u914D\u5BF9\u30022016\u5E74\u7684\u7B56\u7565\u5B66\u4E60\u9996\u5148\u5229\u7528\u4EBA\u7C7B\u68CB\u8C31\u4E2D\u7684\u5C40\u9762\u4E0E\u843D\u5B50\uFF1B\u540E\u7EED\u5F3A\u5316\u5B66\u4E60\u4F7F\u7528\u4E0D\u540C\u7684\u53CD\u9988\u65B9\u5F0F\u3002\u672C\u5730\u5355\u6743\u91CD\u5B9E\u9A8C\u53EA\u91C7\u7528\u4E00\u4E2A\u56FA\u5B9A\u6570\u503C\u6837\u672C\u3002","\u6837\u672C\u8F93\u5165\u4E0E\u76EE\u6807\u503C","\u4E00\u6B21\u5B66\u4E60\u6240\u9700\u7684\u6570\u636E\u5BF9","\u6700\u5DE6\u4FA7\u7684\u6837\u672C\u683C\u70B9\u4E0E\u76EE\u6807\u6807\u8BB0\u3002\u5B83\u4EEC\u8868\u793A\u6570\u636E\u6765\u6E90\uFF0C\u4E0D\u662F\u795E\u7ECF\u5143\u3002","\u4E0B\u65B9\u6570\u503C\u5B9E\u9A8C\u8BBE\u8F93\u5165\u4E3A0.8\u3001\u76EE\u6807\u4E3A0.9\uFF0C\u53EF\u89C2\u5BDF\u53C2\u6570\u66F4\u65B0\u600E\u6837\u6539\u53D8\u9884\u6D4B\u3002"),ye("forward","\u524D\u5411\u8BA1\u7B97\u4E0E\u5F53\u524D\u9884\u6D4B","\u7528\u5F53\u524D\u53C2\u6570\u628A\u8F93\u5165\u53D8\u6210\u9884\u6D4B\u3002","\u7ED9\u5B9A\u8F93\u5165\u548C\u6743\u91CD\uFF0C\u7F51\u7EDC\u6309\u5C42\u6267\u884C\u8FD0\u7B97\uFF0C\u5F97\u5230\u9884\u6D4B\u3002\u672C\u5C55\u533A\u7B80\u5316\u4E3A\u9884\u6D4B\u503C\u7B49\u4E8E\u6743\u91CD\u4E58\u8F93\u5165\uFF1B\u590D\u6742\u6A21\u578B\u8FD8\u5305\u542B\u591A\u5C42\u975E\u7EBF\u6027\u53D8\u6362\u3002","\u8F93\u5165\u4E0E\u5F53\u524D\u6743\u91CD","\u5F53\u524D\u9884\u6D4B\u503C","\u7B2C\u4E8C\u4E2A\u7ACB\u4F53\u8282\u70B9\u9635\u5217\u8868\u793A\u7279\u5F81\u53D8\u6362\uFF1B\u591A\u6761\u8FDE\u7EBF\u8868\u793A\u8BA1\u7B97\u4F9D\u8D56\u3002","\u524D\u5411\u8BA1\u7B97\u65E2\u7528\u4E8E\u8BAD\u7EC3\uFF0C\u4E5F\u7528\u4E8E\u63A8\u7406\uFF1B\u6267\u884C\u524D\u5411\u8BA1\u7B97\u672C\u8EAB\u4E0D\u66F4\u65B0\u6743\u91CD\u3002"),ye("loss","\u635F\u5931\u51FD\u6570\u4E0E\u8BEF\u5DEE\u4FE1\u53F7","\u628A\u9884\u6D4B\u504F\u5DEE\u8F6C\u6210\u53EF\u4EE5\u4F18\u5316\u7684\u6807\u91CF\u3002","\u5E73\u65B9\u8BEF\u5DEE\u7528\u9884\u6D4B\u503C\u4E0E\u76EE\u6807\u503C\u4E4B\u5DEE\u7684\u5E73\u65B9\u8861\u91CF\u504F\u5DEE\u3002\u635F\u5931\u51FD\u6570\u51B3\u5B9A\u4F18\u5316\u65B9\u5411\uFF0C\u4F46\u8BAD\u7EC3\u635F\u5931\u4E0B\u964D\u4E0D\u4E00\u5B9A\u610F\u5473\u7740\u5BF9\u672A\u89C1\u6837\u672C\u4E5F\u8868\u73B0\u66F4\u597D\u3002","\u9884\u6D4B\u503C\u4E0E\u76EE\u6807\u503C","\u4E00\u4E2A\u635F\u5931\u6570\u503C","\u4E2D\u592E\u53CC\u73AF\u8868\u793A\u9884\u6D4B\u4E0E\u76EE\u6807\u7684\u6BD4\u8F83\uFF0C\u5468\u56F4\u523B\u5EA6\u8868\u793A\u8BEF\u5DEE\u5927\u5C0F\u7684\u6982\u5FF5\u3002","\u672C\u5B9E\u9A8C\u4F7F\u7528\u5E73\u65B9\u8BEF\u5DEE\uFF1B\u771F\u5B9E\u56F4\u68CB\u7B56\u7565\u548C\u4EF7\u503C\u5B66\u4E60\u7684\u76EE\u6807\u4E0D\u80FD\u7531\u5B83\u5B8C\u6574\u66FF\u4EE3\u3002"),ye("gradient","\u68AF\u5EA6\u4E0E\u53CD\u5411\u4F20\u64AD","\u8BA1\u7B97\u53C2\u6570\u53D8\u5316\u5BF9\u635F\u5931\u7684\u5C40\u90E8\u5F71\u54CD\u3002","\u94FE\u5F0F\u6CD5\u5219\u5C06\u635F\u5931\u5BF9\u8F93\u51FA\u7684\u53D8\u5316\uFF0C\u9010\u5C42\u8F6C\u4E3A\u5BF9\u53C2\u6570\u7684\u5BFC\u6570\u3002\u68AF\u5EA6\u8BF4\u660E\u5C40\u90E8\u4E0A\u5347\u6700\u5FEB\u7684\u65B9\u5411\uFF0C\u4F18\u5316\u5668\u901A\u5E38\u6CBF\u76F8\u53CD\u65B9\u5411\u8C03\u6574\u53C2\u6570\u3002","\u635F\u5931\u5BFC\u6570\u548C\u524D\u5411\u8BA1\u7B97\u8BB0\u5F55","\u5404\u53C2\u6570\u7684\u68AF\u5EA6","\u53CD\u5411\u7BAD\u5934\u4ECE\u635F\u5931\u7AEF\u6307\u5411\u53C2\u6570\u7AEF\uFF1B\u8FD9\u91CC\u662F\u6570\u5B66\u8BA1\u7B97\u4F9D\u8D56\u7684\u89C6\u89C9\u8868\u8FBE\u3002","\u53CD\u5411\u4F20\u64AD\u662F\u4E00\u79CD\u6C42\u5BFC\u65B9\u6CD5\uFF0C\u5E76\u4E0D\u7B49\u540C\u4E8E\u6240\u6709\u5B66\u4E60\u8FC7\u7A0B\u6216\u5B8C\u6574\u5F3A\u5316\u5B66\u4E60\u7B97\u6CD5\u3002"),ye("update","\u53C2\u6570\u66F4\u65B0\u4E0E\u4E0B\u4E00\u6B21\u8FED\u4EE3","\u6839\u636E\u68AF\u5EA6\u8C03\u6574\u6743\u91CD\uFF0C\u518D\u91CD\u65B0\u8BA1\u7B97\u3002","\u68AF\u5EA6\u4E0B\u964D\u5C06\u6743\u91CD\u51CF\u53BB\u5B66\u4E60\u7387\u4E58\u68AF\u5EA6\u3002\u672C\u5B9E\u9A8C\u56FA\u5B9A\u5B66\u4E60\u7387\u4E3A0.22\uFF1B\u66F4\u65B0\u8FC7\u5927\u53EF\u80FD\u4E0D\u7A33\u5B9A\uFF0C\u66F4\u65B0\u8FC7\u5C0F\u5219\u8FDB\u5C55\u7F13\u6162\uFF0C\u56E0\u6B64\u5B66\u4E60\u7387\u5C5E\u4E8E\u9700\u8981\u9009\u62E9\u7684\u8D85\u53C2\u6570\u3002","\u5F53\u524D\u6743\u91CD\u3001\u68AF\u5EA6\u4E0E\u5B66\u4E60\u7387","\u4E0B\u4E00\u8F6E\u4F7F\u7528\u7684\u65B0\u6743\u91CD","\u6700\u53F3\u4FA7\u540C\u5FC3\u53C2\u6570\u76D8\u8868\u793A\u6743\u91CD\u72B6\u6001\u3002\u70B9\u51FB\u4E0B\u65B9\u66F4\u65B0\u6309\u94AE\uFF0C\u6BD4\u8F83\u9884\u6D4B\u3001\u8BEF\u5DEE\u4E0E\u6743\u91CD\u3002","\u8BAD\u7EC3\u6539\u53D8\u53C2\u6570\uFF1B\u8BC4\u4F30\u5E94\u4F7F\u7528\u672A\u53C2\u4E0E\u8BE5\u6B21\u8BAD\u7EC3\u7684\u6570\u636E\uFF0C\u4EE5\u68C0\u67E5\u6CDB\u5316\u800C\u975E\u53EA\u8BB0\u4F4F\u6837\u672C\u3002")],selfplay:[ye("policyA","\u5F53\u524D\u7B56\u7565\u5B9E\u4F8B","\u6839\u636E\u5C40\u9762\u4EA7\u751F\u672C\u8F6E\u843D\u5B50\u503E\u5411\u3002","\u7B56\u7565\u628A\u5C40\u9762\u6620\u5C04\u5230\u52A8\u4F5C\u503E\u5411\u3002\u81EA\u6211\u5BF9\u5F08\u8BA9\u7CFB\u7EDF\u53C2\u4E0E\u751F\u6210\u8BAD\u7EC3\u7ECF\u9A8C\uFF0C\u800C\u4E0D\u662F\u53EA\u590D\u8FF0\u4EBA\u7C7B\u68CB\u8C31\u3002\u672C\u6A21\u578B\u5DE6\u4FA7\u4EE3\u8868\u4E00\u6B21\u7B56\u7565\u8C03\u7528\uFF0C\u4E0D\u662F\u4E00\u4E2A\u62E5\u6709\u6027\u683C\u7684\u73A9\u5BB6\u3002","\u5F53\u524D\u68CB\u76D8\u72B6\u6001\u4E0E\u7B56\u7565\u53C2\u6570","\u5019\u9009\u843D\u5B50\u503E\u5411","\u5DE6\u4FA7\u9752\u7070\u8272\u5206\u5C42\u7ED3\u6784\u4E0E\u901A\u5411\u68CB\u76D8\u7684\u7EBF\u8DEF\u3002","2016\u5E74\u7684\u7CFB\u7EDF\u5148\u5229\u7528\u4EBA\u7C7B\u68CB\u8C31\uFF0C\u5E76\u901A\u8FC7\u4E0E\u65E2\u5F80\u7B56\u7565\u7248\u672C\u5BF9\u5F08\u7B49\u65B9\u5F0F\u7EE7\u7EED\u6539\u8FDB\u3002"),ye("board","\u89C4\u5219\u73AF\u5883\u4E0E\u5BF9\u5C40\u8F68\u8FF9","\u8BA9\u52A8\u4F5C\u5F97\u5230\u53EF\u8BC4\u4EF7\u7684\u540E\u679C\u3002","\u771F\u5B9E\u56F4\u68CB\u73AF\u5883\u5E94\u5904\u7406\u5408\u6CD5\u7740\u6CD5\u3001\u63D0\u5B50\u3001\u7EC8\u5C40\u548C\u7ED3\u679C\u3002\u5BF9\u5C40\u4E2D\u8FDE\u7EED\u7684\u72B6\u6001\u4E0E\u52A8\u4F5C\u7EC4\u6210\u8F68\u8FF9\uFF0C\u4E3A\u4E4B\u540E\u7684\u5B66\u4E60\u63D0\u4F9B\u7ECF\u9A8C\uFF1B\u5355\u4E2A\u5C40\u9762\u4E0D\u662F\u5B8C\u6574\u5BF9\u5C40\u3002","\u53CC\u65B9\u52A8\u4F5C\u4E0E\u89C4\u5219","\u540E\u7EED\u5C40\u9762\u3001\u5BF9\u5C40\u8F68\u8FF9\u548C\u7EC8\u5C40\u7ED3\u679C","\u4E2D\u592E\u68CB\u76D8\u8FDE\u63A5\u53CC\u65B9\u7B56\u7565\u3002\u672C\u5C55\u54C1\u4F7F\u7528\u5408\u6210\u5C40\u9762\uFF0C\u6CA1\u6709\u6267\u884C\u5408\u6CD5\u7740\u6CD5\u6216\u80DC\u8D1F\u5224\u5B9A\u3002","\u52A8\u753B\u8BF4\u660E\u53CD\u9988\u5173\u7CFB\uFF0C\u4E0D\u4F1A\u81EA\u4E3B\u5B8C\u6210\u4E00\u76D8\u56F4\u68CB\uFF0C\u4E5F\u4E0D\u8F93\u51FA\u771F\u5B9E\u68CB\u529B\u3002"),ye("policyB","\u5BF9\u624B\u7B56\u7565\u5B9E\u4F8B","\u63D0\u4F9B\u5BF9\u6297\uFF0C\u66B4\u9732\u5F53\u524D\u7B56\u7565\u7684\u8584\u5F31\u70B9\u3002","\u5BF9\u624B\u53EF\u4EE5\u6765\u81EA\u6B64\u524D\u4FDD\u5B58\u7684\u7B56\u7565\u7248\u672C\u6216\u7279\u5B9A\u5BF9\u624B\u96C6\u5408\uFF0C\u5177\u4F53\u65B9\u6848\u53D6\u51B3\u4E8E\u7B97\u6CD5\u3002\u4E0E\u4E0D\u540C\u6C34\u5E73\u548C\u98CE\u683C\u7684\u5BF9\u624B\u4EA4\u950B\uFF0C\u80FD\u4EA7\u751F\u4E0D\u540C\u5206\u5E03\u7684\u7ECF\u9A8C\u3002","\u5C40\u9762\u4E0E\u5BF9\u624B\u53C2\u6570","\u5BF9\u624B\u52A8\u4F5C","\u53F3\u4FA7\u7D2B\u7070\u8272\u7ED3\u6784\u4E0E\u5DE6\u4FA7\u76F8\u547C\u5E94\uFF0C\u4F46\u4E24\u8005\u4E0D\u610F\u5473\u7740\u4E24\u4E2A\u72EC\u7ACB\u4EBA\u683C\u3002","2016\u5E74\u4E0E2017\u5E74\u7814\u7A76\u4F7F\u7528\u4E0D\u540C\u8BAD\u7EC3\u6D41\u7A0B\uFF0C\u4E0D\u80FD\u4EC5\u7531\u201C\u53CC\u5854\u201D\u5F62\u72B6\u63A8\u65AD\u771F\u5B9E\u7F51\u7EDC\u7ED3\u6784\u3002"),ye("experience","\u7ECF\u9A8C\u6536\u96C6\u4E0E\u8BAD\u7EC3\u6570\u636E","\u628A\u5BF9\u5C40\u7ECF\u5386\u53D8\u6210\u53EF\u7528\u7684\u5B66\u4E60\u4FE1\u53F7\u3002","\u72B6\u6001\u3001\u52A8\u4F5C\u4E0E\u7ED3\u679C\u53EF\u4EE5\u88AB\u6574\u7406\u4E3A\u8BAD\u7EC3\u6837\u672C\u3002\u91C7\u6837\u65B9\u5F0F\u3001\u6837\u672C\u76F8\u5173\u6027\u548C\u7B56\u7565\u66F4\u65B0\u4F1A\u5F71\u54CD\u5B66\u4E60\u7A33\u5B9A\u6027\uFF1B\u4EC5\u589E\u52A0\u5BF9\u5C40\u6570\u91CF\u5E76\u4E0D\u80FD\u4FDD\u8BC1\u53D8\u5F3A\u3002","\u5C40\u9762\u3001\u52A8\u4F5C\u4E0E\u7ED3\u679C\u8BB0\u5F55","\u7528\u4E8E\u7B56\u7565\u6216\u4EF7\u503C\u5B66\u4E60\u7684\u6837\u672C","\u68CB\u76D8\u540E\u65B9\u7684\u5206\u5C42\u6863\u6848\u67B6\u8868\u793A\u7ECF\u9A8C\u5F52\u6863\uFF0C\u6570\u636E\u70B9\u6CBF\u53CD\u9988\u901A\u8DEF\u56DE\u5230\u5B66\u4E60\u7AEF\u3002","\u8FD9\u662F\u7ECF\u9A8C\u6536\u96C6\u7684\u6982\u5FF5\u6A21\u5757\uFF0C\u4E0D\u65AD\u8A002016\u5E74\u7CFB\u7EDF\u91C7\u7528\u67D0\u79CD\u7279\u5B9A\u7684\u901A\u7528\u56DE\u653E\u7F13\u51B2\u7ED3\u6784\u3002"),ye("evaluation","\u72EC\u7ACB\u8BC4\u4F30\u4E0E\u7248\u672C\u6BD4\u8F83","\u68C0\u9A8C\u65B0\u53C2\u6570\u662F\u5426\u5E26\u6765\u53EF\u91CD\u590D\u7684\u63D0\u5347\u3002","\u8BAD\u7EC3\u540E\u7684\u7B56\u7565\u9700\u8981\u5728\u4E00\u81F4\u6761\u4EF6\u4E0B\u4E0E\u57FA\u7EBF\u6216\u5176\u4ED6\u7248\u672C\u6BD4\u8F83\u3002\u6709\u9650\u5BF9\u5C40\u7684\u80DC\u7387\u5B58\u5728\u7EDF\u8BA1\u6CE2\u52A8\uFF0C\u8FD8\u9700\u8981\u68C0\u67E5\u5BF9\u624B\u9009\u62E9\u3001\u8BC4\u4F30\u9884\u7B97\u4E0E\u89C4\u5219\u8BBE\u7F6E\u662F\u5426\u4E00\u81F4\u3002","\u5019\u9009\u7B56\u7565\u3001\u57FA\u7EBF\u548C\u8BC4\u4F30\u6761\u4EF6","\u5177\u6709\u7EDF\u8BA1\u4E0D\u786E\u5B9A\u6027\u7684\u6BD4\u8F83\u7ED3\u679C","\u524D\u4FA7\u8BC4\u4F30\u4EEA\u8868\u4E0E\u53CD\u9988\u56DE\u8DEF\u3002\u5B83\u4EE3\u8868\u68C0\u9A8C\u8FC7\u7A0B\uFF0C\u4E0D\u662F\u6BD4\u8D5B\u73B0\u573A\u7684\u771F\u5B9E\u80DC\u7387\u4EEA\u3002","\u81EA\u6211\u5BF9\u5F08\u53EA\u5728\u660E\u786E\u4EFB\u52A1\u4E2D\u4EA7\u751F\u53CD\u9988\uFF1B\u5B83\u4E0D\u81EA\u52A8\u8D4B\u4E88\u8BED\u8A00\u7406\u89E3\u3001\u901A\u7528\u80FD\u529B\u6216\u610F\u8BC6\u3002")]},ad=[["\u9884\u671F\u88AB\u91CD\u65B0\u6821\u51C6","\u9996\u5C40\u83B7\u80DC\u4F7F\u6BD4\u8D5B\u4E0D\u518D\u53EA\u662F\u201C\u4EBA\u7C7B\u5C06\u4EE5\u591A\u5927\u4F18\u52BF\u53D6\u80DC\u201D\u7684\u8BA8\u8BBA\u3002\u795E\u7ECF\u7F51\u7EDC\u4E0E\u641C\u7D22\u7ED3\u5408\u7684\u8868\u73B0\uFF0C\u5F00\u59CB\u63A5\u53D7\u4E16\u754C\u9876\u5C16\u68CB\u624B\u5728\u6B63\u5F0F\u5BF9\u5C40\u4E2D\u7684\u68C0\u9A8C\u3002","\u4E00\u5C40\u80DC\u8D1F\u662F\u7ED3\u679C\u8BC1\u636E\u3002\u8981\u89E3\u91CA\u7B97\u6CD5\uFF0C\u8FD8\u8981\u89C2\u5BDF\u5019\u9009\u3001\u5C40\u9762\u8BC4\u4F30\u4E0E\u641C\u7D22\u4E4B\u95F4\u7684\u5206\u5DE5\u3002"],["\u7B2C37\u624B\u4E0E\u4E0D\u540C\u7684\u9009\u62E9","\u7B2C\u4E8C\u5C40\u7B2C37\u624B\u6210\u4E3A\u673A\u5668\u51B3\u7B56\u4E0E\u4EBA\u7C7B\u76F4\u89C9\u5DEE\u5F02\u7684\u6807\u5FD7\u6027\u6848\u4F8B\u3002\u4E00\u4E2A\u5F53\u65F6\u663E\u5F97\u4E0D\u5BFB\u5E38\u7684\u843D\u70B9\uFF0C\u5FC5\u987B\u653E\u5728\u6574\u76D8\u68CB\u7684\u53D8\u5316\u4E2D\u7406\u89E3\u3002","\u7B56\u7565\u7F51\u7EDC\u63D0\u4F9B\u503E\u5411\uFF0C\u641C\u7D22\u68C0\u67E5\u540E\u7EED\u53D8\u5316\u3002\u4E00\u6B21\u60CA\u4EBA\u7684\u9009\u62E9\u5E76\u4E0D\u610F\u5473\u7740\u7CFB\u7EDF\u4EA7\u751F\u4E86\u60C5\u611F\u6216\u7075\u611F\u3002"],["\u7B2C\u4E09\u80DC\uFF0C\u7CFB\u5217\u8D5B\u80DC\u8D1F\u786E\u5B9A","\u4E09\u5C40\u4E4B\u540E\u963F\u5C14\u6CD5\u56F4\u68CB\u4EE53\u6BD40\u9886\u5148\uFF0C\u5DF2\u7ECF\u53D6\u5F97\u4E94\u756A\u68CB\u7684\u80DC\u5229\u3002\u6B64\u540E\u7684\u4E24\u5C40\u4ECD\u7EE7\u7EED\u8FDB\u884C\uFF0C\u8BA9\u516C\u4F17\u770B\u5230\u7CFB\u7EDF\u4E0D\u4EC5\u4F1A\u83B7\u80DC\uFF0C\u4E5F\u5B58\u5728\u53EF\u4EE5\u88AB\u66B4\u9732\u7684\u5F31\u70B9\u3002","\u56F4\u68CB\u662F\u89C4\u5219\u6E05\u6670\u4E14\u53CD\u9988\u660E\u786E\u7684\u4E13\u95E8\u4EFB\u52A1\u3002\u7CFB\u5217\u8D5B\u83B7\u80DC\u4E0D\u80FD\u76F4\u63A5\u63A8\u5BFC\u51FA\u901A\u7528\u667A\u80FD\u3002"],["\u7B2C78\u624B\u4E0E\u7CFB\u7EDF\u7684\u8584\u5F31\u70B9","\u674E\u4E16\u77F3\u5728\u7B2C\u56DB\u5C40\u83B7\u80DC\uFF0C\u7B2C78\u624B\u53CA\u5176\u5F15\u53D1\u7684\u540E\u7EED\u53D8\u5316\u53D7\u5230\u5E7F\u6CDB\u5173\u6CE8\u3002\u8FD9\u4E00\u5C40\u8BA9\u201C\u7CFB\u7EDF\u5728\u54EA\u4E9B\u60C5\u5F62\u4E0B\u5931\u8BEF\u201D\u6210\u4E3A\u4E0E\u80DC\u5229\u540C\u6837\u91CD\u8981\u7684\u95EE\u9898\u3002","\u5C40\u9762\u4F30\u8BA1\u4E0E\u6709\u9650\u641C\u7D22\u90FD\u53EF\u80FD\u51FA\u73B0\u504F\u5DEE\u3002\u5355\u72EC\u4E00\u624B\u68CB\u65E0\u6CD5\u5B8C\u6574\u89E3\u91CA\u9519\u8BEF\uFF0C\u8FD8\u9700\u8981\u539F\u59CB\u68CB\u8C31\u3001\u8BC4\u4F30\u4E0E\u641C\u7D22\u8BB0\u5F55\u3002"],["4\u6BD41\u4E4B\u540E\uFF0C\u95EE\u9898\u8F6C\u5411\u673A\u5236","\u7B2C\u4E94\u5C40\u963F\u5C14\u6CD5\u56F4\u68CB\u83B7\u80DC\uFF0C\u4E94\u756A\u68CB\u4EE54\u6BD41\u7ED3\u675F\u3002\u6BD4\u8D5B\u7684\u957F\u671F\u5F71\u54CD\u5728\u4E8E\uFF1A\u4EBA\u4EEC\u770B\u5230\u5B66\u4E60\u5F97\u5230\u7684\u6A21\u5F0F\u5224\u65AD\u53EF\u4EE5\u4E0E\u641C\u7D22\u548C\u8BA1\u7B97\u8D44\u6E90\u534F\u540C\u3002","\u7EE7\u7EED\u8FDB\u516502\u5C55\u533A\u89C2\u5BDF\u51B3\u7B56\u673A\u5236\uFF1B\u8FDB\u516504\u5C55\u533A\u533A\u5206\u53C2\u6570\u4ECE\u54EA\u91CC\u6765\uFF0C\u4EE5\u53CA\u6BD4\u8D5B\u65F6\u600E\u6837\u4F7F\u7528\u3002"]],T_={gpu:{title:"\u7B97\u529B\u628A\u4EC0\u4E48\u53D8\u5FEB\uFF0C\u53C8\u88AB\u4EC0\u4E48\u9650\u5236\uFF1F",intro:"\u8BAD\u7EC3\u4E0D\u662F\u628A\u6570\u636E\u201C\u653E\u8FDB\u82AF\u7247\u201D\u3002\u5B83\u662F\u5728\u6709\u9650\u7535\u529B\u3001\u5B58\u50A8\u548C\u65F6\u95F4\u5185\uFF0C\u6301\u7EED\u6267\u884C\u6570\u503C\u8BA1\u7B97\u3002\u62C6\u5F00\u8FD9\u4E94\u4E2A\u90E8\u4EF6\uFF0C\u89C2\u5BDF\u6570\u636E\u4F9B\u7ED9\u3001\u8BA1\u7B97\u6267\u884C\u4E0E\u70ED\u91CF\u6392\u51FA\u7684\u5171\u540C\u7EA6\u675F\u3002",steps:[["\u6570\u636E\u8FDB\u5165","\u6837\u672C\u4E0E\u53C2\u6570\u5148\u8FDB\u5165\u5DE5\u4F5C\u5B58\u50A8\uFF0C\u518D\u6309\u7167\u8BA1\u7B97\u56FE\u7684\u4F9D\u8D56\u5173\u7CFB\u4F9B\u7ED9\u6838\u5FC3\u3002"],["\u5E76\u884C\u6267\u884C","\u5377\u79EF\u548C\u77E9\u9635\u8FD0\u7B97\u62C6\u6210\u591A\u4E2A\u4EFB\u52A1\uFF1B\u6279\u6B21\u548C\u5B9E\u73B0\u65B9\u5F0F\u5F71\u54CD\u786C\u4EF6\u5229\u7528\u7387\u3002"],["\u7ED3\u679C\u5199\u56DE","\u6FC0\u6D3B\u6216\u68AF\u5EA6\u56DE\u5230\u5B58\u50A8\u7CFB\u7EDF\uFF0C\u5E26\u5BBD\u4E0D\u8DB3\u65F6\u6838\u5FC3\u53EF\u80FD\u7B49\u5F85\u3002"],["\u6301\u7EED\u6563\u70ED","\u4F9B\u7535\u4E0E\u51B7\u5374\u7EF4\u6301\u7A33\u5B9A\u8FD0\u884C\uFF0C\u51B3\u5B9A\u53EF\u6301\u7EED\u541E\u5410\u800C\u4E0D\u662F\u62BD\u8C61\u7684\u201C\u667A\u529B\u201D\u3002"]],cards:[["\u8BA1\u7B97\u74F6\u9888","\u6838\u5FC3\u7B97\u5F97\u8FC7\u6765\u5417\uFF1F","\u5F53\u8FD0\u7B97\u89C4\u6A21\u5927\u3001\u6570\u636E\u590D\u7528\u5145\u5206\u65F6\uFF0C\u6267\u884C\u5355\u5143\u80FD\u529B\u53EF\u80FD\u6210\u4E3A\u4E3B\u8981\u7EA6\u675F\u3002\u5E76\u884C\u5EA6\u4E0D\u8DB3\u7684\u5C0F\u4EFB\u52A1\uFF0C\u672A\u5FC5\u80FD\u7528\u6EE1\u52A0\u901F\u5668\u3002"],["\u5B58\u50A8\u74F6\u9888","\u6570\u636E\u9001\u5F97\u4E0A\u6765\u5417\uFF1F","\u82E5\u4E00\u6B21\u64CD\u4F5C\u9700\u8981\u9891\u7E41\u8BFB\u5199\u5927\u91CF\u6570\u636E\uFF0C\u63D0\u9AD8\u6838\u5FC3\u5CF0\u503C\u6027\u80FD\u4E5F\u53EF\u80FD\u6536\u76CA\u6709\u9650\u3002\u5BB9\u91CF\u3001\u5E26\u5BBD\u4E0E\u6570\u636E\u590D\u7528\u9700\u8981\u4E00\u8D77\u8003\u8651\u3002"],["\u7CFB\u7EDF\u74F6\u9888","\u534F\u4F5C\u662F\u5426\u503C\u5F97\uFF1F","\u591A\u4E2A\u8282\u70B9\u9700\u8981\u901A\u4FE1\u3001\u540C\u6B65\u548C\u4EFB\u52A1\u5206\u914D\u3002\u53EA\u6709\u8BA1\u7B97\u6536\u76CA\u8D85\u8FC7\u534F\u8C03\u6210\u672C\uFF0C\u589E\u52A0\u8BBE\u5907\u624D\u80FD\u6709\u6548\u7F29\u77ED\u5B8C\u6210\u65F6\u95F4\u3002"]]},training:{title:"\u4ECE\u4E00\u6B21\u9884\u6D4B\uFF0C\u5230\u4E00\u6B21\u53C2\u6570\u6539\u53D8\u3002",intro:"\u89C2\u5BDF\u5B8C\u6574\u5B66\u4E60\u95ED\u73AF\uFF1A\u6837\u672C\u5B9A\u4E49\u76EE\u6807\uFF0C\u524D\u5411\u8BA1\u7B97\u4EA7\u751F\u9884\u6D4B\uFF0C\u635F\u5931\u91CF\u5316\u504F\u5DEE\uFF0C\u68AF\u5EA6\u5B9A\u4F4D\u8C03\u6574\u65B9\u5411\uFF0C\u66F4\u65B0\u6B65\u9AA4\u6539\u53D8\u53C2\u6570\u3002\u8FD9\u91CC\u53EF\u4EE5\u771F\u5B9E\u64CD\u4F5C\u4E00\u4E2A\u5355\u6743\u91CD\u6570\u503C\u4F8B\u5B50\u3002",steps:[["\u524D\u5411\u9884\u6D4B","\u5F53\u524D\u9884\u6D4B = \u6743\u91CD \xD7 \u8F93\u5165\u3002\u5148\u7528\u540C\u4E00\u7EC4\u53C2\u6570\u8BA1\u7B97\u7ED3\u679C\u3002"],["\u8BA1\u7B97\u635F\u5931","\u5E73\u65B9\u8BEF\u5DEE =\uFF08\u9884\u6D4B \u2212 \u76EE\u6807\uFF09\xB2\uFF0C\u8868\u793A\u8FD9\u4E00\u6837\u672C\u4E0A\u7684\u504F\u5DEE\u3002"],["\u8BA1\u7B97\u68AF\u5EA6","\u5BF9\u6743\u91CD\u6C42\u5BFC\uFF1A2 \xD7\uFF08\u9884\u6D4B \u2212 \u76EE\u6807\uFF09\xD7 \u8F93\u5165\u3002"],["\u66F4\u65B0\u518D\u7B97","\u65B0\u6743\u91CD = \u65E7\u6743\u91CD \u2212 \u5B66\u4E60\u7387 \xD7 \u68AF\u5EA6\uFF0C\u7136\u540E\u5F00\u59CB\u4E0B\u4E00\u8F6E\u3002"]],cards:[["\u5B66\u4E60\u7387","\u6B65\u5B50\u6709\u591A\u5927\uFF1F","\u5B66\u4E60\u7387\u63A7\u5236\u53C2\u6570\u66F4\u65B0\u5E45\u5EA6\u3002\u672C\u5B9E\u9A8C\u75280.22\uFF0C\u4E0D\u4EE3\u8868\u6240\u6709\u7F51\u7EDC\u90FD\u9002\u7528\uFF1B\u771F\u5B9E\u8BAD\u7EC3\u5F80\u5F80\u9700\u8981\u8C03\u5EA6\u3001\u5F52\u4E00\u5316\u548C\u66F4\u591A\u7A33\u5B9A\u6027\u63AA\u65BD\u3002"],["\u6CDB\u5316","\u964D\u4F4E\u8BAD\u7EC3\u8BEF\u5DEE\u5C31\u591F\u4E86\u5417\uFF1F","\u53EA\u5728\u5DF2\u7ECF\u770B\u8FC7\u7684\u6570\u636E\u4E0A\u8868\u73B0\u597D\uFF0C\u53EF\u80FD\u53EA\u662F\u62DF\u5408\u4E86\u6837\u672C\u3002\u72EC\u7ACB\u9A8C\u8BC1\u6570\u636E\u548C\u4EFB\u52A1\u8BC4\u4F30\u7528\u4E8E\u68C0\u67E5\u80FD\u529B\u662F\u5426\u80FD\u8FC1\u79FB\u5230\u672A\u89C1\u60C5\u5F62\u3002"],["\u8BAD\u7EC3\u4E0E\u63A8\u7406","\u6BD4\u8D5B\u65F6\u4F1A\u4E00\u8FB9\u843D\u5B50\u4E00\u8FB9\u66F4\u65B0\u5417\uFF1F","\u672C\u5C55\u533A\u5C06\u79BB\u7EBF\u8BAD\u7EC3\u4E0E\u6BD4\u8D5B\u51B3\u7B56\u5206\u5F00\uFF1A\u5148\u5B66\u4E60\u53C2\u6570\uFF0C\u6BD4\u8D5B\u4E2D\u4F7F\u7528\u5DF2\u8BAD\u7EC3\u7CFB\u7EDF\u8FDB\u884C\u8BC4\u4F30\u4E0E\u641C\u7D22\u3002\u641C\u7D22\u7EDF\u8BA1\u7684\u53D8\u5316\u4E0D\u662F\u7F51\u7EDC\u6743\u91CD\u7684\u8BAD\u7EC3\u3002"]]},selfplay:{title:"\u4ECE\u5BF9\u5C40\u7ECF\u9A8C\uFF0C\u5230\u4E0B\u4E00\u8F6E\u7B56\u7565\u3002",intro:"\u81EA\u6211\u5BF9\u5F08\u6539\u53D8\u7684\u662F\u7ECF\u9A8C\u7684\u6765\u6E90\uFF1A\u7CFB\u7EDF\u901A\u8FC7\u4E0E\u7B56\u7565\u5B9E\u4F8B\u4EA4\u950B\u4EA7\u751F\u5C40\u9762\u4E0E\u7ED3\u679C\u3002\u6570\u636E\u5982\u4F55\u6536\u96C6\u3001\u76EE\u6807\u5982\u4F55\u8BBE\u8BA1\u3001\u66F4\u65B0\u540E\u600E\u6837\u68C0\u9A8C\uFF0C\u4ECD\u9700\u8981\u7B97\u6CD5\u548C\u5B9E\u9A8C\u6765\u51B3\u5B9A\u3002",steps:[["\u751F\u6210\u5BF9\u5C40","\u5F53\u524D\u7B56\u7565\u4E0E\u5BF9\u624B\u5728\u76F8\u540C\u89C4\u5219\u73AF\u5883\u4E2D\u4EA7\u751F\u72B6\u6001\u548C\u52A8\u4F5C\u3002"],["\u6536\u96C6\u53CD\u9988","\u628A\u5C40\u9762\u3001\u52A8\u4F5C\u4E0E\u7ED3\u679C\u6574\u7406\u4E3A\u8BAD\u7EC3\u6240\u9700\u7684\u7ECF\u9A8C\u3002"],["\u5B66\u4E60\u53C2\u6570","\u7B56\u7565\u6216\u4EF7\u503C\u5B66\u4E60\u4F7F\u7528\u5404\u81EA\u7684\u76EE\u6807\u66F4\u65B0\u53C2\u6570\u3002"],["\u68C0\u9A8C\u7248\u672C","\u5728\u4E00\u81F4\u6761\u4EF6\u4E0B\u6BD4\u8F83\u65B0\u7248\u672C\uFF0C\u8003\u8651\u6709\u9650\u5BF9\u5C40\u5E26\u6765\u7684\u4E0D\u786E\u5B9A\u6027\u3002"]],cards:[["2016\u5E74","\u4EE5\u4EBA\u7C7B\u68CB\u8C31\u5EFA\u7ACB\u8D77\u70B9","\u76D1\u7763\u5B66\u4E60\u5148\u5F62\u6210\u7B56\u7565\u57FA\u7840\uFF0C\u518D\u901A\u8FC7\u81EA\u6211\u5BF9\u5F08\u7B49\u673A\u5236\u6539\u8FDB\u7B56\u7565\uFF1B\u4EF7\u503C\u7F51\u7EDC\u5229\u7528\u5BF9\u5F08\u4EA7\u751F\u7684\u6570\u636E\u5B66\u4E60\u5C40\u9762\u7ED3\u679C\u4F30\u8BA1\u3002"],["2017\u5E74","\u963F\u5C14\u6CD5\u56F4\u68CB\u96F6\u7684\u65B0\u65B9\u6848","\u540E\u7EED\u7814\u7A76\u4E0D\u4F9D\u8D56\u4EBA\u7C7B\u68CB\u8C31\uFF0C\u4ECE\u81EA\u6211\u5BF9\u5F08\u5B66\u4E60\uFF0C\u5E76\u91C7\u7528\u4E0D\u540C\u7684\u7F51\u7EDC\u4E0E\u8BAD\u7EC3\u8BBE\u8BA1\u3002\u5B83\u4E0D\u662F2016\u5E74\u6BD4\u8D5B\u7CFB\u7EDF\u6362\u4E00\u4E2A\u540D\u5B57\u3002"],["\u80FD\u529B\u8FB9\u754C","\u4F1A\u56F4\u68CB\u4E0D\u7B49\u4E8E\u4F1A\u4E00\u5207","\u89C4\u5219\u548C\u7ED3\u679C\u63D0\u4F9B\u4E86\u660E\u786E\u53CD\u9988\u3002\u5F00\u653E\u4E16\u754C\u4EFB\u52A1\u7684\u76EE\u6807\u3001\u6570\u636E\u4E0E\u98CE\u9669\u66F4\u590D\u6742\uFF0C\u4E0D\u80FD\u628A\u56F4\u68CB\u4E2D\u7684\u8FDB\u6B65\u76F4\u63A5\u5916\u63A8\u5230\u6240\u6709\u667A\u80FD\u95EE\u9898\u3002"]]}},od=i=>`<div class="exhibit-process">${i.map(([t,e],n)=>`<article><span>${String(n+1).padStart(2,"0")}</span><h3>${t}</h3><p>${e}</p></article>`).join("")}</div>`;function ld(){return`<section class="exhibit-dossier"><header><span class="eyebrow">01 / \u4E00\u624B\u68CB\u80CC\u540E\u7684\u7CFB\u7EDF</span><h2>\u4ECE\u68CB\u76D8\u5230\u843D\u5B50\uFF0C<em>\u4E0D\u662F\u4E00\u6B21\u76F4\u7EBF\u8BA1\u7B97\u3002</em></h2><p>\u68CB\u76D8\u72B6\u6001\u8FDB\u5165\u7279\u5F81\u7F16\u7801\uFF1B\u7B56\u7565\u4E0E\u4EF7\u503C\u8BC4\u4F30\u53C2\u4E0E\u6811\u641C\u7D22\uFF0C\u641C\u7D22\u53C8\u4E0D\u65AD\u63D0\u51FA\u9700\u8981\u8BC4\u4F30\u7684\u65B0\u5C40\u9762\u3002\u4E0B\u9762\u5C55\u5F00\u7684\u662F\u5DE5\u4F5C\u5173\u7CFB\uFF0C\u5B9E\u9645\u8FC7\u7A0B\u5305\u542B\u53CD\u590D\u8C03\u7528\u4E0E\u7ED3\u679C\u56DE\u4F20\u3002</p></header>${od([["\u72B6\u6001\u7F16\u7801","\u628A\u5C40\u9762\u4E0E\u89C4\u5219\u76F8\u5173\u4FE1\u606F\u7EC4\u7EC7\u4E3A\u7279\u5F81\u5E73\u9762\uFF0C\u5EFA\u7ACB\u53EF\u8BA1\u7B97\u7684\u8F93\u5165\u3002"],["\u7B56\u7565\u63D0\u51FA\u5019\u9009","\u5229\u7528\u5DF2\u5B66\u4E60\u7684\u6A21\u5F0F\u7ED9\u51FA\u843D\u5B50\u503E\u5411\uFF0C\u5E2E\u52A9\u641C\u7D22\u4F18\u5148\u63A2\u7D22\u6709\u5E0C\u671B\u7684\u5206\u652F\u3002"],["\u8BC4\u4F30\u4E0E\u6A21\u62DF","\u4EF7\u503C\u4F30\u8BA1\u53CA2016\u5E74\u7CFB\u7EDF\u4E2D\u7684\u5FEB\u901F\u6A21\u62DF\u7B49\u673A\u5236\uFF0C\u4E3A\u5C40\u9762\u7ED3\u679C\u63D0\u4F9B\u5224\u65AD\u4F9D\u636E\u3002"],["\u641C\u7D22\u4E0E\u56DE\u4F20","\u6269\u5C55\u53D8\u5316\u3001\u6C47\u603B\u8BC4\u4F30\u3001\u66F4\u65B0\u8BBF\u95EE\u7EDF\u8BA1\uFF0C\u6709\u9650\u8BA1\u7B97\u9884\u7B97\u51B3\u5B9A\u53EF\u63A2\u7D22\u7684\u8303\u56F4\u3002"]])}<div class="dossier-pair"><article><span>\u6BD4\u8D5B\u4E4B\u524D</span><h3>\u53C2\u6570\u662F\u600E\u6837\u5F97\u5230\u7684\uFF1F</h3><p>2016\u5E74\u7CFB\u7EDF\u9996\u5148\u4ECE\u4EBA\u7C7B\u68CB\u8C31\u5B66\u4E60\u7B56\u7565\uFF0C\u518D\u5229\u7528\u5F3A\u5316\u5B66\u4E60\u548C\u5BF9\u5F08\u7ECF\u9A8C\u6539\u8FDB\u3002\u4EF7\u503C\u7F51\u7EDC\u5B66\u4E60\u5C40\u9762\u4E0E\u7ED3\u679C\u4E4B\u95F4\u7684\u5173\u7CFB\u3002\u8BAD\u7EC3\u4F7F\u6743\u91CD\u53D8\u5316\uFF0C\u5F97\u5230\u7528\u4E8E\u6BD4\u8D5B\u7684\u7CFB\u7EDF\u3002</p><a href="#growth">\u62C6\u5F00\u8BAD\u7EC3\u4E0E\u7B97\u529B \u2192</a></article><article><span>\u6BD4\u8D5B\u4E4B\u4E2D</span><h3>\u843D\u5B50\u662F\u600E\u6837\u9009\u51FA\u7684\uFF1F</h3><p>\u7ED9\u5B9A\u5F53\u524D\u5C40\u9762\uFF0C\u5DF2\u8BAD\u7EC3\u7F51\u7EDC\u4E0E\u641C\u7D22\u534F\u540C\u3002\u53CD\u590D\u63A2\u7D22\u4F1A\u6539\u53D8\u641C\u7D22\u7EDF\u8BA1\u548C\u5019\u9009\u5224\u65AD\uFF0C\u4F46\u8FD9\u4E0D\u80FD\u88AB\u63CF\u8FF0\u4E3A\u6BD4\u8D5B\u73B0\u573A\u91CD\u65B0\u8BAD\u7EC3\u6574\u5957\u7F51\u7EDC\u3002</p><a href="#decision">\u67E5\u770B\u7B56\u7565\u3001\u4EF7\u503C\u4E0E\u641C\u7D22 \u2192</a></article></div></section><section class="exhibit-dossier"><header><span class="eyebrow">\u5173\u952E\u8282\u70B9 / \u628A\u6BD4\u8D5B\u653E\u56DE\u7814\u7A76\u8FDB\u7A0B</span><h2>2016\uFF0C\u662F\u8F6C\u6298\uFF0C<em>\u4E5F\u6709\u524D\u56E0\u540E\u7EED\u3002</em></h2></header><div class="match-context"><article><time>2015</time><h3>\u4E0E\u6A0A\u9EBE\u7684\u8F83\u91CF</h3><p>\u963F\u5C14\u6CD5\u56F4\u68CB\u5728\u6B63\u5F0F\u8F83\u91CF\u4E2D\u6218\u80DC\u6B27\u6D32\u56F4\u68CB\u51A0\u519B\u6A0A\u9EBE\uFF0C\u6210\u4E3A\u8D70\u5411\u66F4\u9AD8\u6C34\u5E73\u68C0\u9A8C\u7684\u91CD\u8981\u8282\u70B9\u3002</p></article><article><time>2016 \xB7 01</time><h3>\u65B9\u6CD5\u516C\u5F00</h3><p>\u300A\u81EA\u7136\u300B\u8BBA\u6587\u7CFB\u7EDF\u4ECB\u7ECD\u6DF1\u5EA6\u795E\u7ECF\u7F51\u7EDC\u4E0E\u6811\u641C\u7D22\u7684\u7ED3\u5408\u3002\u8BBA\u6587\u62A5\u544A\u7684\u7CFB\u7EDF\u4E0E\u4E4B\u540E\u6BD4\u8D5B\u7CFB\u7EDF\u9700\u6CE8\u610F\u7248\u672C\u80CC\u666F\u3002</p></article><article><time>2016 \xB7 03</time><h3>\u9996\u5C14\u4E94\u756A\u68CB</h3><p>3\u67089\u65E5\u81F315\u65E5\uFF0C\u963F\u5C14\u6CD5\u56F4\u68CB\u4E0E\u674E\u4E16\u77F3\u8FDB\u884C\u4E94\u5C40\u6BD4\u8D5B\u3002\u6700\u7EC84\u6BD41\uFF0C\u7B2C\u56DB\u5C40\u674E\u4E16\u77F3\u83B7\u80DC\u3002</p></article><article><time>2017</time><h3>\u96F6\u8D77\u70B9\u7814\u7A76</h3><p>\u963F\u5C14\u6CD5\u56F4\u68CB\u96F6\u5C55\u793A\u4E0D\u4F9D\u8D56\u4EBA\u7C7B\u68CB\u8C31\u7684\u81EA\u6211\u5BF9\u5F08\u65B9\u6848\uFF1B\u5176\u7F51\u7EDC\u4E0E\u8BAD\u7EC3\u6D41\u7A0B\u5C5E\u4E8E\u540E\u7EED\u7814\u7A76\u3002</p></article></div></section>`}function cd(i){let t=T_[i];return`<section class="exhibit-dossier growth-dossier"><header><span class="eyebrow">04 / ${i==="gpu"?"\u8BA1\u7B97\u7CFB\u7EDF":i==="training"?"\u5B66\u4E60\u95ED\u73AF":"\u7ECF\u9A8C\u751F\u6210"}</span><h2>${t.title}</h2><p>${t.intro}</p></header>${od(t.steps)}<div class="dossier-triad">${t.cards.map(([e,n,s])=>`<article><span>${e}</span><h3>${n}</h3><p>${s}</p></article>`).join("")}</div><details class="dossier-glossary"><summary>\u7EE7\u7EED\u7406\u89E3\uFF1A\u8BAD\u7EC3\u3001\u641C\u7D22\u4E0E\u8BC4\u4F30\u5404\u6539\u53D8\u4E86\u4EC0\u4E48\uFF1F</summary><p>\u8BAD\u7EC3\u66F4\u65B0\u6A21\u578B\u53C2\u6570\uFF1B\u641C\u7D22\u5728\u7ED9\u5B9A\u5C40\u9762\u4E0B\u66F4\u65B0\u8BBF\u95EE\u6B21\u6570\u4E0E\u4EF7\u503C\u7EDF\u8BA1\uFF1B\u8BC4\u4F30\u4F7F\u7528\u4E00\u81F4\u7684\u4EFB\u52A1\u6761\u4EF6\u68C0\u9A8C\u7CFB\u7EDF\u8868\u73B0\u3002\u4E09\u8005\u53EF\u4EE5\u534F\u540C\uFF0C\u4F46\u5BF9\u8C61\u4E0E\u65F6\u95F4\u5C3A\u5EA6\u4E0D\u540C\u3002\u4E09\u7EF4\u7C92\u5B50\u3001\u53CC\u7B56\u7565\u7ED3\u6784\u548C\u786C\u4EF6\u5F62\u72B6\u662F\u6559\u5B66\u8868\u8FBE\uFF0C\u4E0D\u662F\u5B9E\u9645\u6FC0\u6D3B\u8BB0\u5F55\u6216\u5386\u53F2\u7CFB\u7EDF\u7684\u5B8C\u6574\u5B9E\u73B0\u3002</p></details></section>`}function hd(i,t){let e=wi[i],n=e?.find(s=>s.key===t);return n?`<div class="part-heading"><span>\u90E8\u4EF6\u6863\u6848 / ${String(e.indexOf(n)+1).padStart(2,"0")} \xB7 ${String(e.length).padStart(2,"0")}</span><i>\u5DF2\u9009\u4E2D</i></div><h3>${n.name}</h3><p class="part-role">${n.role}</p><div class="part-io"><div><span>\u8F93\u5165 / \u6761\u4EF6</span><b>${n.input}</b></div><div><span>\u8F93\u51FA / \u4F5C\u7528</span><b>${n.output}</b></div></div><section class="part-section"><h4>\u600E\u6837\u5DE5\u4F5C</h4><p>${n.mechanism}</p></section><section class="part-section"><h4>\u5728\u6A21\u578B\u4E2D\u89C2\u5BDF</h4><p>${n.observe}</p></section><section class="part-section part-relation"><h4>\u4E0E\u6574\u5957\u7CFB\u7EDF\u7684\u5173\u7CFB</h4><p>${n.relation}</p></section>`:""}function ud(i){let t=matchMedia("(prefers-reduced-motion: reduce)").matches,e,n=null,s=null,r=[],a=new F,o,l,c,h,d,f="match",m=[],_=[],v=[],g,u=0,T=0,C=!1,y=0,E=0,R=new Wi,b=new mt,P={shell:5857382,cpu:12699330,gpu:9415329,memory:11248822,network:12889735},M=new Set,S=new Set,U=(V,x={})=>{let p=new Fn({color:V,roughness:.36,metalness:.62,envMapIntensity:.42,...x});return S.add(p),p};function O(V,x,p,A,I=null){let D=new ol(...x,2,Math.min(.07,Math.min(...x)*.16));M.add(D);let L=new Gt(D,U(A));return L.position.set(...p),L.castShadow=!0,L.receiveShadow=!0,V.add(L),I&&(L.userData.key=I),L}function W(V,x,p,A){let I=new zi(new Ue(...x));M.add(I);let D=new Ze({color:A,transparent:!0,opacity:.5});S.add(D);let L=new En(I,D);return L.position.set(...p),V.add(L),L}function H(V,x,p,A){let I=new fe().setFromPoints([new F(...x),new F(...p)]);M.add(I);let D=new Ze({color:A,transparent:!0,opacity:.45});S.add(D);let L=new fi(I,D);return V.add(L),L}function q(V,x,p,A,I){let D=new ki(x,14,10);M.add(D);let L=new Gt(D,U(A,{emissive:A,emissiveIntensity:.25}));return L.position.set(...p),V.add(L),L.userData.key=I,L}function G(V,x,p){let A=new De;return A.userData={key:V,index:x,base:new F,offset:new F},l.add(A),p(A),A.traverse(I=>{I.isMesh&&(I.userData.key=V)}),m.push(A),A}function nt(V,x=4,p=0,A=!1){let I=new De;I.userData.key="board",I.position.set(x,-.65,p),V.add(I),O(I,[5.7,.3,5.7],[0,0,0],10980194,"board");for(let D=0;D<19;D++){let L=(D-9)*.282;H(I,[-2.54,.16,L],[2.54,.16,L],4800049),H(I,[L,.16,-2.54],[L,.16,2.54],4800049)}for(let[D,L,j]of al){let Q=q(I,.118,[(D-9)*.282,.24,(L-9)*.282],j?14868949:1516077,"board");Q.scale.y=.48}return W(I,[.45,.02,.45],[.282,.18,-.282],9102541),g=I,I}function Y(){let V=new De;V.position.x=-3.4,l.add(V),O(V,[3.2,.25,3.6],[0,-2.25,0],1979464);let x=G("shell",0,p=>{for(let A of[-1.52,1.52])O(p,[.12,5.2,3.4],[A,.35,0],P.shell);W(p,[3.2,5.3,3.6],[0,.35,0],5667473);for(let A=0;A<8;A++)H(p,[-1.4,-1.6+A*.6,1.75],[1.4,-1.6+A*.6,1.75],3428193)});x.position.x=-3.4;for(let p=0;p<4;p++){let A=["cpu","gpu","memory","network"][p];G(A,p+1,D=>{if(O(D,[2.75,.19,2.7],[0,0,0],2639935),A==="cpu"){O(D,[.9,.18,.9],[0,.15,0],P.cpu);for(let L=0;L<12;L++)O(D,[.055,.32,1.2],[(L-5.5)*.1,.42,0],6323602)}if(A==="gpu")for(let L=0;L<2;L++){O(D,[1.06,.18,1.8],[(L-.5)*1.28,.18,0],P.gpu);for(let j=0;j<9;j++)O(D,[.07,.42,1.15],[(L-.5)*1.28+(j-4)*.09,.5,0],5405308)}if(A==="memory")for(let L=0;L<5;L++){O(D,[.25,.45,1.8],[(L-2)*.48,.3,0],P.memory);for(let j=0;j<3;j++)O(D,[.27,.19,.32],[(L-2)*.48,.38,(j-1)*.49],2503494)}if(A==="network"){O(D,[2.4,.5,.8],[0,.35,.2],4217199);for(let L=0;L<8;L++)O(D,[.19,.16,.2],[(L-3.5)*.27,.35,.7],P.network)}for(let L=0;L<7;L++)q(D,.035,[1.22,.16,(L-3)*.35],10345936)}).position.set(-3.4,-1.25+p*1.03,0)}nt(l);for(let p=0;p<5;p++)H(l,[-1.8,-1.4+p*.12,1.4],[1.3,-.5,1.4+p*.12],6861750);for(let p=0;p<35;p++){let A=q(l,.035,[0,0,0],9823702);v.push(A)}c.position.set(12,9,16),h.target.set(.1,-.1,0)}function at(){G("pcb",0,V=>{O(V,[6,.18,3.8],[0,-1.25,0],2444099);for(let x=0;x<8;x++)O(V,[.36,.1,.32],[(x-3.5)*.6,-1.09,1.9],12888694)}),G("compute",1,V=>{O(V,[1.8,.22,1.8],[0,-.6,0],3362149),O(V,[1.35,.1,1.35],[0,-.43,0],10272444);for(let x=0;x<5;x++)for(let p=0;p<5;p++)O(V,[.19,.045,.19],[(p-2)*.24,-.35,(x-2)*.24],8439483)}),G("vram",2,V=>{for(let x of[-2.2,2.2])for(let p of[-1.2,0,1.2])O(V,[.65,.17,.65],[x,-.65,p],10325430)}),G("heatsink",3,V=>{for(let x=0;x<22;x++)O(V,[.09,.85,3.25],[(x-10.5)*.23,.35,0],6125706)}),G("fan",4,V=>{for(let x of[-1.5,1.5]){let p=new Nn(.79,.055,6,40);M.add(p);let A=new Gt(p,U(8756648));A.rotation.x=Math.PI/2,A.position.set(x,1.14,0),V.add(A),_.push(A);for(let I=0;I<7;I++){let D=O(V,[.49,.05,.2],[x+Math.cos(I/7*6.28)*.4,1.14,Math.sin(I/7*6.28)*.4],4086640);D.rotation.y=-I/7*6.28}}}),c.position.set(8,7,10),h.target.set(0,0,0)}function ut(){["sample","forward","loss","gradient","update"].forEach((x,p)=>{let A=G(x,p,I=>{if(O(I,[1.55,.13,2.6],[0,-1.35,0],3030331),Ht(I,1.4,2.4,-1.25),p===0){for(let D=0;D<12;D++)O(I,[.28,.18,.28],[(D%3-1)*.38,-.65,((D/3|0)-1.5)*.42],D%3?8625816:13153932);W(I,[1.3,.3,2],[0,-.58,0],10860718)}else if(p===1)for(let D=0;D<12;D++){let L=(D%3-1)*.38,j=(D/3|0)*.5-.8;q(I,.105,[L,j,Math.sin(D)*.25],10337720),D>2&&H(I,[L,j-.5,0],[L,j,0],9153448)}else if(p===2){for(let D of[-1,1]){let L=new Nn(.57,.055,8,40);M.add(L);let j=new Gt(L,U(D<0?13218701:9551025));j.position.set(D*.18,0,D*.22),I.add(j)}for(let D=0;D<12;D++)q(I,.035,[Math.cos(D/12*6.28)*.86,Math.sin(D/12*6.28)*.86,0],12365461)}else if(p===3)for(let D=0;D<5;D++){let L=(D-2)*.38;H(I,[.6,L,0],[-.6,L,0],12428498),H(I,[-.6,L,0],[-.32,L+.15,0],12428498),q(I,.07,[.5,L,0],12428498)}else for(let D=0;D<4;D++)Nt(I,.64-D*.09,.14,[0,-.7+D*.45,0],D%2?12167823:8234653),q(I,.065,[.55-D*.08,-.6+D*.45,0],13162179)});A.position.x=(p-2)*2.35});for(let x=0;x<4;x++)for(let p=0;p<3;p++)H(l,[(x-2)*2.35+.75,-.55,p*.22-.22],[(x-1)*2.35-.75,-.55,p*.22-.22],9415332);for(let x=0;x<30;x++)v.push(q(l,.04,[0,0,0],11588286));c.position.set(10,7,16),h.target.set(0,-.15,0)}function wt(){nt(l,0,0);for(let p of[-1,1]){let A=G(p<0?"policyA":"policyB",p<0?0:1,I=>{O(I,[1.7,2.5,1.7],[0,.3,0],2704456),Ht(I,1.7,1.7,1.58);for(let D=0;D<5;D++){W(I,[1.85,.2,1.85],[0,-.6+D*.45,0],p<0?8896436:12167368);for(let L=0;L<3;L++)q(I,.06,[(L-1)*.45,-.5+D*.45,.87],p<0?11063233:13284054)}});A.position.x=p*4.8;for(let I=0;I<3;I++)H(l,[p*3.9,-.3,I*.3],[p*2.7,-.3,I*.3],7714993)}G("experience",2,p=>{for(let A=0;A<4;A++){O(p,[3,.15,1.15],[0,A*.28,0],6782329);for(let I=0;I<7;I++)q(p,.035,[(I-3)*.35,.1+A*.28,.52],12109738)}}).position.set(0,-.7,-4.4),G("evaluation",3,p=>{O(p,[3,.22,1.25],[0,0,0],4936532);for(let A=0;A<8;A++)O(p,[.18,.09,.6],[(A-3.5)*.3,.19,0],A<5?9155749:10259832)}).position.set(0,-.7,3.9);for(let p of[-3.7,3.3])for(let A of[-2,2])H(l,[A,-.6,p],[A*1.9,-.3,0],10331787);for(let p=0;p<25;p++)v.push(q(l,.04,[0,0,0],11978940));c.position.set(12,11,17),h.target.set(0,-.3,0)}function Nt(V,x,p,A,I,D){let L=new vr(x,x,p,24);M.add(L);let j=new Gt(L,U(I));return j.position.set(...A),j.castShadow=!0,j.userData.key=D,V.add(j),j}function ie(V,x){let p=Nt(V,.047,.035,x,11711919,"shell");return H(V,[x[0]-.025,x[1]+.019,x[2]],[x[0]+.025,x[1]+.019,x[2]],3159608),p}function se(V,x,p,A=7901067){H(V,x,[p[0],x[1],x[2]],A),H(V,[p[0],x[1],x[2]],p,A)}function Ht(V,x,p,A){for(let I of[-x/2+.18,x/2-.18])for(let D of[-p/2+.18,p/2-.18])ie(V,[I,A+.05,D]);for(let I=0;I<16;I++){let D=(I-7.5)*x/20;se(V,[D,A+.02,-p*.38],[D*.8,A+.02,p*.35],I%3?6388592:12101507)}for(let I=0;I<12;I++){let D=(I%6-2.5)*x/7,L=I<6?-p*.32:p*.32;O(V,[.12,.07,.17],[D,A+.04,L],3488573)}}function Z(V,x,p,A,I=.75){Nt(V,.19,.12,[x,p,A],5068120,"shell");for(let j=0;j<9;j++){let Q=j/9*Math.PI*2,dt=O(V,[I*.51,.05,I*.22],[x+Math.cos(Q)*I*.48,p,A+Math.sin(Q)*I*.48],4279120);dt.rotation.y=-Q+.38}let D=new Nn(I,.045,7,48);M.add(D);let L=new Gt(D,U(11185837));L.rotation.x=Math.PI/2,L.position.set(x,p+.04,A),V.add(L)}function K(){let V=G("shell",0,I=>{O(I,[7.7,.22,5.4],[0,-1.8,0],3356730),Ht(I,7.3,5,-1.65)}),x=G("cpu",1,I=>{for(let D=0;D<5;D++){let L=(D-2)*.83;Nt(I,.28,.15,[-2.8,-.6,L],12564647,"cpu"),q(I,.11,[-2.8,-.42,L],11189942,"cpu"),H(I,[-2.55,-.5,L],[-.6,.1,L*.18],9546661)}}),p=G("memory",2,I=>{for(let D=0;D<5;D++){let L=(D-2)*.83;O(I,[.4,.28,.43],[-1.55,-.25,L*.68],10259570);for(let j=0;j<3;j++)H(I,[-1.7+j*.13,-.09,L*.68-.13],[-1.7+j*.13,-.09,L*.68+.13],14076076)}}),A=G("gpu",3,I=>{Nt(I,.96,.36,[0,.12,0],7703437,"gpu");for(let j=0;j<20;j++){let Q=j/20*6.28;q(I,.035,[Math.cos(Q)*.87,.33,Math.sin(Q)*.87],12369065)}let D=new Nn(.56,.04,8,48);M.add(D);let L=new Gt(D,U(13219719));L.rotation.x=Math.PI/2,L.position.y=.36,I.add(L),H(I,[.8,.12,0],[2.05,.12,0],11978689)});G("network",4,I=>{O(I,[.7,1.1,1.45],[2.7,.12,0],6976633),W(I,[.76,1.18,1.53],[2.7,.12,0],13154712);for(let D=0;D<5;D++)O(I,[.03,.08,.12],[3.07,-.15+D*.17,0],11061693)});for(let I=0;I<28;I++)v.push(q(l,.035,[0,0,0],13228238));c.position.set(9,7,11),h.target.set(0,-.2,0)}function gt(){G("shell",0,x=>{O(x,[8,.2,5.6],[0,-1.8,0],3159609),Ht(x,7.7,5.2,-1.67)});let V=[[-3,0,0],[-1.15,.15,-1.3],[-1.15,.15,1.3],[1.15,.25,-1.75],[1.15,.25,0],[1.15,.25,1.75],[3.1,.3,0]];V.forEach((x,p)=>{G(p<3?"cpu":"memory",p+1,A=>{O(A,[.9,.28,.8],x,p<3?8821658:12167819),W(A,[1,.4,.9],[x[0],x[1]+.08,x[2]],9871262);for(let I=0;I<3;I++)O(A,[.15,.04,.05],[x[0]-.23+I*.23,x[1]+.16,x[2]],14403741)})});for(let[x,p]of[[0,1],[0,2],[1,3],[1,4],[2,4],[2,5],[3,6],[4,6],[5,6]])se(l,[V[x][0],V[x][1]-.2,V[x][2]],[V[p][0],V[p][1]-.2,V[p][2]],9412249);c.position.set(10,9,10),h.target.set(0,-.4,0)}function Dt(){G("shell",0,x=>{O(x,[9,.18,6],[0,-1.8,0],3159608),Ht(x,8.6,5.6,-1.68)});let V=q(l,.27,[-3,.1,0],12759436,"network");for(let x=0;x<3;x++){let p=(x-1)*1.9,A=G("network",x+1,I=>{q(I,.2,[-.6,.25,p],x===1?10798010:9213596),H(I,[-3,.1,0],[-.6,.25,p],10533042);for(let D=0;D<3;D++){let L=p+(D-1)*.52;q(I,.13,[1.7,.5,L],11183765),H(I,[-.6,.25,p],[1.7,.5,L],6651776),Nt(I,.13,.12,[3.25,.02,L],7440519,"network"),H(I,[1.7,.5,L],[3.25,.02,L],6716800)}})}for(let x=0;x<20;x++)v.push(q(l,.035,[0,0,0],12703176));c.position.set(8,10,12),h.target.set(0,-.2,0)}function St(){G("shell",0,V=>{O(V,[8.3,.2,5.8],[0,-1.9,0],2962230),Ht(V,7.9,5.4,-1.78)}),G("memory",1,V=>{for(let x=0;x<6;x++){O(V,[1.55,.08,1.9],[-2.65,-1.1+x*.2,0],x%2?10332067:7307909);for(let p=0;p<6;p++)H(V,[-3.25,-1.04+x*.2,-.65+p*.23],[-2.2,-1.04+x*.2,-.65+p*.23],13023639)}}),G("cpu",2,V=>{for(let x=0;x<4;x++)for(let p=0;p<4;p++){let A=[-.6+x*.4,-.9+p*.5,Math.sin(p)*.45];if(q(V,.07,A,10929079),x>0)for(let I=0;I<4;I++)H(V,[A[0]-.4,-.9+I*.5,Math.sin(I)*.45],A,5401712)}W(V,[2,2.5,1.7],[0,-.05,0],8427670)}),G("gpu",3,V=>{O(V,[1.8,.2,2.4],[2.65,-.9,0],6781051);for(let x=0;x<6;x++)for(let p=0;p<4;p++)O(V,[.22,.08,.22],[2.65+(p-1.5)*.33,-.73,(x-2.5)*.33],12694931);for(let x=0;x<12;x++)O(V,[.055,.65,1.75],[2.65+(x-5.5)*.12,-.35,0],8292749)}),se(l,[-1.8,-1.2,0],[1.7,-1.2,0],10469302),H(l,[2.5,-1.4,1.8],[-2.5,-1.4,1.8],12891023);for(let V=0;V<30;V++)v.push(q(l,.035,[0,0,0],12769230));c.position.set(9,8,12),h.target.set(0,-.3,0)}function Xt(){o=new Fs({antialias:!0,alpha:!1}),o.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),o.setClearColor(1118996),o.outputColorSpace=we,o.toneMapping=xi,o.toneMappingExposure=1.05,o.shadowMap.enabled=!0,o.shadowMap.type=Cs,l=new Jn,l.background=new At(1118996);let V=new Mi(o),x=new ks;e=V.fromScene(x,.06),l.environment=e.texture,V.dispose(),x.dispose(),c=new Ee(36,1,.1,150),h=new Bs(c,o.domElement),h.enableDamping=!0,h.enablePan=!1,h.minDistance=6,h.maxDistance=35,h.maxPolarAngle=Math.PI*.48,o.domElement.setAttribute("aria-label","\u4E09\u7EF4\u539F\u7406\u5C55\u54C1\uFF0C\u62D6\u52A8\u65CB\u8F6C\u3001\u6EDA\u8F6E\u7F29\u653E\uFF1B\u53EF\u7528\u4E0B\u65B9\u90E8\u4EF6\u6309\u94AE\u9009\u62E9");let p=A=>{let I=o.domElement.getBoundingClientRect();b.set((A.clientX-I.left)/I.width*2-1,-(A.clientY-I.top)/I.height*2+1),R.setFromCamera(b,c);for(let D of R.intersectObjects(l.children,!0)){if(!D.object.isMesh)continue;let L=D.object,j=null;for(;L&&L!==l;){if(m.includes(L)||L===g){j=L;break}L=L.parent}if(j)return j.userData.key;if(D.object.userData.key)return D.object.userData.key}return null};o.domElement.addEventListener("pointerdown",A=>xe=A.isPrimary&&A.button===0?[A.clientX,A.clientY]:null),o.domElement.addEventListener("pointermove",A=>{o.domElement.style.cursor=p(A)?"pointer":"grab"}),o.domElement.addEventListener("pointercancel",()=>xe=null),o.domElement.addEventListener("pointerup",A=>{let I=xe;if(xe=null,!I||Math.hypot(A.clientX-I[0],A.clientY-I[1])>5)return;let D=p(A);D&&te(D)}),u=requestAnimationFrame(ve)}let xe=null;function N(V){return V==="board"?g:m.find(x=>x.userData.key===V)}function te(V){return N(V)?(n=V,m.concat(g?[g]:[]).forEach(x=>x.traverse(p=>{if(!p.isMesh||!p.material.emissive)return;let A=p.material;p.userData.originalEmissive||(p.userData.originalEmissive=A.emissive.clone(),p.userData.originalIntensity=A.emissiveIntensity),x.userData.key===V?(A.emissive.set(10668476),A.emissiveIntensity=.32):(A.emissive.copy(p.userData.originalEmissive),A.emissiveIntensity=p.userData.originalIntensity)})),r.forEach(({button:x,key:p})=>{x.classList.toggle("active",p===V),x.setAttribute("aria-pressed",String(p===V))}),i(V,f),!0):!1}function Ot(){s?.remove(),s=null,r=[],wi[f]&&(s=document.createElement("div"),s.className="part-hotspots",s.setAttribute("role","group"),s.setAttribute("aria-label","\u5C55\u5F00\u90E8\u4EF6\u6807\u8BB0"),d.appendChild(s),wi[f].forEach((V,x)=>{let p=document.createElement("button");p.type="button",p.textContent=String(x+1).padStart(2,"0"),p.dataset.modelPart=V.key,p.title=V.name,p.setAttribute("aria-label","\u9009\u62E9"+V.name),p.setAttribute("aria-pressed",String(n===V.key)),p.classList.toggle("active",n===V.key),p.onclick=()=>te(V.key);let A=document.createElement("i");A.className="part-leader",s.appendChild(A),s.appendChild(p);let I=N(V.key),D=I?new fn().setFromObject(I).getCenter(new F).sub(I.position):new F;r.push({button:p,leader:A,key:V.key,anchor:D})}))}function Pt(){if(!s||(s.hidden=E===0,s.hidden))return;let V=d.clientWidth,x=d.clientHeight,p=r.map(A=>{let I=N(A.key);if(!I)return null;a.copy(A.anchor).add(I.position).project(c);let D=(a.x*.5+.5)*V,L=(-a.y*.5+.5)*x,j=a.z>1||a.z<-1||D<0||L<0||D>V||L>x;return A.button.hidden=j,A.leader.hidden=j,j?null:{...A,ax:D,ay:L,x:ge.clamp(D,23,V-23),y:ge.clamp(L,23,x-23)}}).filter(Boolean);for(let A=0;A<16;A++)for(let I=0;I<p.length;I++)for(let D=I+1;D<p.length;D++){let L=p[I],j=p[D],Q=j.x-L.x,dt=j.y-L.y,ft=Math.hypot(Q,dt);if(ft<43){ft<.01&&(Q=1,dt=.3,ft=Math.hypot(Q,dt));let tt=(43-ft)/2;L.x=ge.clamp(L.x-Q/ft*tt,23,V-23),L.y=ge.clamp(L.y-dt/ft*tt,23,x-23),j.x=ge.clamp(j.x+Q/ft*tt,23,V-23),j.y=ge.clamp(j.y+dt/ft*tt,23,x-23)}}p.forEach(A=>{let I=Math.round(A.x),D=Math.round(A.y),L=I-A.ax,j=D-A.ay;A.button.style.transform=`translate(${I-16}px,${D-16}px)`,A.leader.style.width=Math.hypot(L,j)+"px",A.leader.style.transform=`translate(${A.ax}px,${A.ay}px) rotate(${Math.atan2(j,L)}rad)`})}function xt(){for(l.traverse(V=>{V.isLight&&V.shadow?.map?.dispose()});l.children.length;)l.remove(l.children[0]);M.forEach(V=>V.dispose()),S.forEach(V=>V.dispose()),M.clear(),S.clear(),m=[],v=[],_=[],g=null,n=null,s?.remove(),s=null,r=[]}function le(){xt(),l.add(new Hi(15460316,2237222,2));let V=new Kn(15920095,3);V.position.set(4,13,7),V.castShadow=!0,V.shadow.mapSize.set(1024,1024),Object.assign(V.shadow.camera,{left:-12,right:12,top:9,bottom:-9,far:40}),l.add(V);let x=new Kn(10270907,1.25);x.position.set(-8,4,-4),l.add(x);let p=O(l,[24,.12,13],[0,-2.65,0],2106147);if(S.delete(p.material),p.material.dispose(),p.material=new ke({color:1580061}),S.add(p.material),f==="match"?Y():f==="gpu"?at():f==="training"?ut():f==="neuron"?K():f==="rules"?gt():f==="search"?Dt():f==="learning"?St():wt(),f==="match"){m.slice(1).forEach(A=>Ht(A,2.65,2.6,.12));for(let A=0;A<14;A++)Nt(m[0],.075,.15,[-1.48,-1.6+A*.3,1.5],10922662,"shell"),Nt(m[0],.075,.15,[1.48,-1.6+A*.3,1.5],10922662,"shell")}if(f==="gpu"){Ht(m[0],5.8,3.6,-1.12);for(let A of[-1.5,1.5])Z(m[4],A,1.2,0);for(let A=0;A<18;A++)O(m[0],[.15,.04,.2],[-2.3+A*.26,-1.1,-1.65],12823936)}m.forEach((A,I)=>{A.userData.base=A.position.clone(),A.userData.offset=["neuron","rules","search","learning"].includes(f)?new F(0,(I-1)*.45,0):f==="match"?new F(I===0?-1.3:.4,(I-2)*.5,I===0?-1:(I-1.5)*1.05):f==="training"?new F((I-2)*.25,(I%2?1:-1)*.6,I%2?-.7:.7):f==="selfplay"?new F(I===0?-1:I===1?1:0,.25,I===2?-1:I===3?1:0):new F(0,(I-1)*.7,0)}),h.update(),y=E=0}function vt(){if(!d||!C)return;let V=d.clientWidth,x=d.clientHeight;!V||!x||(o.setSize(V,x,!1),c.aspect=V/x,V<600?c.zoom=.7:c.zoom=1,c.updateProjectionMatrix())}let Ft=new ResizeObserver(vt);function ve(V){u=requestAnimationFrame(ve);let x=Math.min(.06,(V-T)/1e3||0);if(T=V,!C||document.hidden)return;y=t||Math.abs(y-E)<.001?E:ge.damp(y,E,4,x),m.forEach(A=>A.position.copy(A.userData.base).addScaledVector(A.userData.offset,y));let p=t?0:V/1e3;v.forEach((A,I)=>{let D=(p*.23+I/v.length)%1;f==="match"?A.position.set(ge.lerp(1.2,-1.8,D),-.55+Math.sin(D*Math.PI)*.3,1.5+I%3*.1):f==="neuron"?A.position.set(-2.9+5.8*D,.15,Math.sin(I*1.7)*(1-D)*1.6):f==="search"?A.position.set(-3+6.3*D,.2,Math.sin(I*2)*(D<.5?D*3:1.5)):f==="learning"?A.position.set(-2.8+5.6*D,-.1,Math.sin(D*6.28)*.45):f==="training"?A.position.set(-3.3+6.6*D,Math.sin(I*1.2)*.8,Math.cos(I)*.3):A.position.set(-4.3+8.6*D,-.15,Math.sin(D*Math.PI*2)*2)}),h.update(),Pt(),o.render(l,c)}return{show(V,x="match"){try{o||Xt(),C=!0,E=0,d=V,V.appendChild(o.domElement),f!==x||m.length===0?(f=x,le()):n&&te(n),Ot(),Ft.disconnect(),Ft.observe(V),vt()}catch(p){V.innerHTML='<p class="scene-fallback">\u4E09\u7EF4\u73AF\u5883\u672A\u80FD\u521D\u59CB\u5316\uFF0C\u4ECD\u53EF\u9605\u8BFB\u4E0B\u65B9\u539F\u7406\u4E0E\u64CD\u4F5C\u5B9E\u9A8C\u3002</p>',console.error(p)}},hide(){C=!1,Ft.disconnect()},select:te,explode(){return E=E?0:1,E===1},dispose(){cancelAnimationFrame(u),Ft.disconnect(),xt(),h?.dispose(),e?.dispose(),o?.dispose()}}}var ll={neuron:{mode:"neuron",name:"\u4EBA\u5DE5\u795E\u7ECF\u5143",subtitle:"\u8F93\u5165\u3001\u6743\u91CD\u4E0E\u9608\u503C\u7684\u53EF\u62C6\u89E3\u5173\u7CFB",note:"\u539F\u7406\u5C55\u54C1 / \u4E0D\u662F1940\u62161950\u5E74\u4EE3\u5B9E\u7269\u590D\u523B",parts:["\u8F93\u5165\u4FE1\u53F7","\u8FDE\u63A5\u6743\u91CD","\u6C42\u548C\u6838\u5FC3","\u8F93\u51FA\u9608\u503C"]},rules:{mode:"rules",name:"\u89C4\u5219\u63A8\u7406\u673A",subtitle:"\u6761\u4EF6\u3001\u5206\u652F\u4E0E\u77E5\u8BC6\u7EF4\u62A4\u7684\u7ED3\u6784",note:"\u539F\u7406\u5C55\u54C1 / \u4E0D\u5BF9\u5E94\u67D0\u53F0\u5386\u53F2\u8BA1\u7B97\u673A",parts:["\u6761\u4EF6\u8F93\u5165","\u89C4\u5219\u8282\u70B9","\u903B\u8F91\u5206\u652F","\u63A8\u7406\u7ED3\u679C"]},search:{mode:"search",name:"\u641C\u7D22\u4E0E\u8BC4\u4F30\u88C5\u7F6E",subtitle:"\u5206\u652F\u589E\u957F\u4E0E\u6709\u9650\u8BA1\u7B97\u9884\u7B97",note:"\u5408\u6210\u641C\u7D22\u6811 / \u975E\u771F\u5B9E\u68CB\u8C31\u4E0E\u539F\u7B97\u6CD5\u91CD\u73B0",parts:["\u5F53\u524D\u5C40\u9762","\u5019\u9009\u5206\u652F","\u5C40\u9762\u8BC4\u4F30","\u641C\u7D22\u56DE\u4F20"]},learning:{mode:"learning",name:"\u6DF1\u5EA6\u5B66\u4E60\u8BA1\u7B97\u8231",subtitle:"\u6570\u636E\u3001\u7F51\u7EDC\u4E0E\u5E76\u884C\u8BA1\u7B97\u7684\u6C47\u5408",note:"\u539F\u521B\u539F\u7406\u6A21\u578B / \u975E\u539F\u59CB\u8BBE\u5907\u590D\u523B",parts:["\u6570\u636E\u6837\u672C","\u53C2\u6570\u7F51\u7EDC","\u8BA1\u7B97\u9635\u5217","\u53CD\u9988\u8FDE\u63A5"]}},Ie=(i,t)=>({name:i,url:t}),cl=[{years:"1943\u20141956",short:"\u667A\u80FD\u7684\u8BBE\u60F3",title:"\u8BA9\u201C\u667A\u80FD\u201D\u6210\u4E3A\u4E00\u4E2A\u53EF\u4EE5\u7814\u7A76\u7684\u95EE\u9898\u3002",object:"neuron",question:"\u5982\u679C\u63A8\u7406\u53EF\u4EE5\u5199\u6210\u903B\u8F91\u3001\u8BA1\u7B97\u53EF\u4EE5\u7531\u673A\u5668\u6267\u884C\uFF0C\u90A3\u4E48\u5B66\u4E60\u4E0E\u667A\u80FD\u884C\u4E3A\u80FD\u5426\u540C\u6837\u5F97\u5230\u5F62\u5F0F\u5316\u63CF\u8FF0\uFF1F\u8FD9\u4E00\u65F6\u671F\u9996\u5148\u5EFA\u7ACB\u95EE\u9898\u4E0E\u6570\u5B66\u8BED\u8A00\uFF0C\u800C\u4E0D\u662F\u5DF2\u7ECF\u62E5\u6709\u53EF\u4EE5\u7406\u89E3\u4E16\u754C\u7684\u4EBA\u5DE5\u667A\u80FD\u3002",method:"1943\u5E74\u7684\u4EBA\u5DE5\u795E\u7ECF\u5143\u903B\u8F91\u6A21\u578B\uFF0C\u628A\u8F93\u5165\u3001\u9608\u503C\u548C\u903B\u8F91\u8FD0\u7B97\u8054\u7CFB\u8D77\u6765\uFF1B1950\u5E74\u56FE\u7075\u8BA8\u8BBA\u673A\u5668\u667A\u80FD\u7684\u53EF\u89C2\u5BDF\u5224\u636E\uFF1B1955\u5E74\u63D0\u51FA\u30011956\u5E74\u5F00\u5C55\u7684\u8FBE\u7279\u8305\u65AF\u9879\u76EE\u63A8\u52A8\u4EBA\u5DE5\u667A\u80FD\u6210\u4E3A\u660E\u786E\u7684\u7814\u7A76\u8BAE\u9898\u3002",limit:"\u65E9\u671F\u6A21\u578B\u9AD8\u5EA6\u62BD\u8C61\uFF0C\u65E2\u4E0D\u662F\u5BF9\u771F\u5B9E\u5927\u8111\u7684\u5B8C\u6574\u590D\u5236\uFF0C\u4E5F\u6CA1\u6709\u4ECA\u5929\u7684\u5927\u89C4\u6A21\u6570\u636E\u3001\u7A33\u5B9A\u8BAD\u7EC3\u65B9\u6CD5\u548C\u8BA1\u7B97\u8D44\u6E90\u3002\u884C\u4E3A\u4E0A\u8868\u73B0\u51FA\u67D0\u79CD\u80FD\u529B\uFF0C\u4E0D\u7B49\u4E8E\u5DF2\u7ECF\u89E3\u51B3\u610F\u8BC6\u6216\u666E\u904D\u7406\u89E3\u7684\u95EE\u9898\u3002",bridge:"\u5F62\u5F0F\u5316\u95EE\u9898\u4F7F\u7814\u7A76\u8005\u80FD\u591F\u8BBE\u8BA1\u5177\u4F53\u7A0B\u5E8F\u3002\u63A5\u4E0B\u6765\u7684\u63A2\u7D22\u5206\u522B\u6CBF\u7B26\u53F7\u89C4\u5219\u3001\u641C\u7D22\u3001\u6A21\u5F0F\u8BC6\u522B\u4E0E\u5B66\u4E60\u5C55\u5F00\uFF1B\u8FD9\u4E9B\u8DEF\u7EBF\u6709\u4EA4\u6D41\u4E5F\u6709\u7ADE\u4E89\uFF0C\u5E76\u4E0D\u662F\u540C\u4E00\u6761\u6280\u672F\u94FE\u6309\u5E74\u4EFD\u4E0D\u65AD\u66FF\u4EE3\u3002",events:[["1943","\u903B\u8F91\u795E\u7ECF\u5143\u6A21\u578B","\u9EA6\u5361\u6D1B\u514B\u4E0E\u76AE\u8328\u7814\u7A76\u795E\u7ECF\u6D3B\u52A8\u7684\u903B\u8F91\u6F14\u7B97\uFF0C\u4E3A\u4EBA\u5DE5\u795E\u7ECF\u5143\u63D0\u4F9B\u65E9\u671F\u6570\u5B66\u62BD\u8C61\u3002"],["1950","\u673A\u5668\u667A\u80FD\u7684\u8BA8\u8BBA","\u56FE\u7075\u4EE5\u6A21\u4EFF\u6E38\u620F\u8BA8\u8BBA\u5224\u65AD\u673A\u5668\u667A\u80FD\u7684\u65B9\u5F0F\uFF0C\u4E0D\u662F\u5BA3\u5E03\u673A\u5668\u5DF2\u6709\u610F\u8BC6\u3002"],["1955 / 1956","\u7814\u7A76\u8BAE\u7A0B\u5F62\u6210","\u8FBE\u7279\u8305\u65AF\u7814\u7A76\u8BA1\u5212\u63D0\u51FA\u4EBA\u5DE5\u667A\u80FD\u7814\u7A76\u613F\u666F\uFF0C\u968F\u540E\u57281956\u5E74\u5F00\u5C55\u590F\u5B63\u9879\u76EE\u3002"]],sources:[Ie("1943\u5E74\u903B\u8F91\u795E\u7ECF\u5143\u8BBA\u6587","https://doi.org/10.1007/BF02478259"),Ie("1950\u5E74\u56FE\u7075\u8BBA\u6587","https://doi.org/10.1093/mind/LIX.236.433"),Ie("\u8FBE\u7279\u8305\u65AF\u8BA1\u5212\u539F\u6587","https://www-formal.stanford.edu/jmc/history/dartmouth/dartmouth.html")]},{years:"1957\u20141972",short:"\u89C4\u5219\u4E0E\u65E9\u671F\u5B66\u4E60",title:"\u4F1A\u63A8\u7406\uFF0C\u4E0D\u7B49\u4E8E\u80FD\u5E94\u5BF9\u5F00\u653E\u4E16\u754C\u3002",object:"rules",question:"\u600E\u6837\u8BA9\u7A0B\u5E8F\u4E0D\u53EA\u6267\u884C\u56FA\u5B9A\u7B97\u672F\uFF0C\u8FD8\u80FD\u5BFB\u627E\u89E3\u9898\u6B65\u9AA4\u3001\u5206\u7C7B\u6A21\u5F0F\uFF0C\u751A\u81F3\u5728\u73AF\u5883\u4E2D\u884C\u52A8\uFF1F\u7814\u7A76\u8005\u5C1D\u8BD5\u628A\u77E5\u8BC6\u5199\u6210\u7B26\u53F7\uFF0C\u4E5F\u5C1D\u8BD5\u8BA9\u7B80\u5355\u5206\u7C7B\u5668\u4ECE\u6837\u672C\u4E2D\u8C03\u6574\u8FDE\u63A5\u3002",method:"\u7B26\u53F7\u7CFB\u7EDF\u7528\u660E\u786E\u7684\u72B6\u6001\u3001\u89C4\u5219\u548C\u76EE\u6807\u7EC4\u7EC7\u95EE\u9898\uFF1B\u611F\u77E5\u673A\u63A2\u7D22\u6570\u636E\u9A71\u52A8\u7684\u6A21\u5F0F\u5206\u7C7B\uFF1B\u65E9\u671F\u79FB\u52A8\u673A\u5668\u4EBA\u628A\u611F\u77E5\u3001\u89C4\u5212\u4E0E\u884C\u52A8\u8FDE\u63A5\u8D77\u6765\u3002\u4E0D\u540C\u4EFB\u52A1\u4E2D\u7684\u8FDB\u5C55\uFF0C\u4E3A\u4EBA\u5DE5\u667A\u80FD\u5F62\u6210\u591A\u6837\u7684\u65B9\u6CD5\u5DE5\u5177\u3002",limit:"\u624B\u5DE5\u89C4\u5219\u9700\u8981\u9886\u57DF\u77E5\u8BC6\u548C\u7EF4\u62A4\uFF0C\u72B6\u6001\u7A7A\u95F4\u4F1A\u968F\u7740\u95EE\u9898\u89C4\u6A21\u6025\u5267\u589E\u957F\uFF1B\u5355\u5C42\u611F\u77E5\u673A\u4E5F\u6709\u8868\u8FBE\u80FD\u529B\u9650\u5236\u3002\u8FD9\u4E9B\u5C40\u9650\u4E0D\u80FD\u88AB\u7B80\u5316\u4E3A\u201C\u6240\u6709\u795E\u7ECF\u7F51\u7EDC\u90FD\u65E0\u6548\u201D\uFF0C\u66F4\u4E0D\u80FD\u4E0E\u540E\u6765\u591A\u5C42\u7F51\u7EDC\u6DF7\u4E3A\u4E00\u8C08\u3002",bridge:"\u6F14\u793A\u7CFB\u7EDF\u5F80\u5F80\u5728\u53D7\u63A7\u6761\u4EF6\u4E0B\u8868\u73B0\u826F\u597D\uFF0C\u5374\u96BE\u4EE5\u63A8\u5E7F\u5230\u590D\u6742\u73B0\u5B9E\u3002\u627F\u8BFA\u3001\u5B9E\u9645\u80FD\u529B\u3001\u8BA1\u7B97\u9884\u7B97\u548C\u6570\u636E\u6761\u4EF6\u4E4B\u95F4\u7684\u843D\u5DEE\uFF0C\u9010\u6E10\u5F15\u51FA\u8BC4\u4F30\u3001\u8D44\u91D1\u4E0E\u7814\u7A76\u65B9\u5411\u7684\u8C03\u6574\u3002",events:[["1957 / 1958","\u611F\u77E5\u673A","\u7F57\u68EE\u5E03\u62C9\u7279\u53D1\u5C55\u611F\u77E5\u673A\u601D\u60F3\uFF0C\u63A2\u7D22\u80FD\u591F\u4ECE\u6837\u672C\u4E2D\u5B66\u4E60\u7684\u6A21\u5F0F\u5206\u7C7B\u7CFB\u7EDF\u3002"],["1966\u20141972","\u65E9\u671F\u673A\u5668\u4EBA\u7814\u7A76","\u6C99\u57FA\u673A\u5668\u4EBA\u5C06\u73AF\u5883\u8868\u793A\u3001\u89C4\u5212\u4E0E\u884C\u52A8\u8FDE\u63A5\uFF0C\u5728\u53D7\u63A7\u573A\u666F\u4E2D\u6F14\u793A\u667A\u80FD\u884C\u4E3A\u3002"],["1969","\u8868\u8FBE\u80FD\u529B\u7684\u8BA8\u8BBA","\u611F\u77E5\u673A\u7684\u7406\u8BBA\u5206\u6790\u63ED\u793A\u67D0\u4E9B\u7ED3\u6784\u7684\u5C40\u9650\uFF0C\u7ED3\u8BBA\u5E94\u9650\u5B9A\u5728\u5176\u7814\u7A76\u6A21\u578B\u4E0E\u5047\u8BBE\u5185\u3002"]],sources:[Ie("\u611F\u77E5\u673A\u8BBA\u6587","https://doi.org/10.1037/h0042519"),Ie("\u6C99\u57FA\u673A\u5668\u4EBA\u9879\u76EE\u6863\u6848","https://www.sri.com/hoi/shakey-the-robot/"),Ie("\u611F\u77E5\u673A\u7406\u8BBA\u8457\u4F5C","https://mitpress.mit.edu/9780262631112/perceptrons/")]},{years:"1970\u5E74\u4EE3\u20141990\u5E74\u4EE3\u521D",short:"\u671F\u5F85\u4E0E\u4F4E\u8C37",title:"\u80FD\u529B\u8FB9\u754C\uFF0C\u5F00\u59CB\u8FFD\u8D76\u5B8F\u5927\u7684\u627F\u8BFA\u3002",object:"rules",question:"\u5F53\u65E9\u671F\u6210\u679C\u65E0\u6CD5\u6309\u9884\u671F\u6269\u5C55\uFF0C\u600E\u6837\u5224\u65AD\u4E00\u9879\u6280\u672F\u7684\u771F\u5B9E\u4EF7\u503C\uFF1F\u4EBA\u5DE5\u667A\u80FD\u7ECF\u5386\u7684\u4F4E\u8C37\u4E0D\u662F\u6240\u6709\u7814\u7A76\u540C\u65F6\u505C\u6B62\uFF0C\u800C\u662F\u8D44\u52A9\u3001\u5546\u4E1A\u9884\u671F\u4E0E\u5177\u4F53\u65B9\u6CD5\u5728\u4E0D\u540C\u5730\u533A\u548C\u9636\u6BB5\u51FA\u73B0\u6536\u7F29\u3002",method:"\u77E5\u8BC6\u5BC6\u96C6\u7684\u4E13\u5BB6\u7CFB\u7EDF\u5728\u7279\u5B9A\u9886\u57DF\u83B7\u5F97\u5E94\u7528\uFF0C\u4EE5\u89C4\u5219\u548C\u63A8\u7406\u5F15\u64CE\u5229\u7528\u4E13\u5BB6\u7ECF\u9A8C\u3002\u4E0E\u6B64\u540C\u65F6\uFF0C\u6A21\u5F0F\u8BC6\u522B\u3001\u7EDF\u8BA1\u5B66\u4E60\u548C\u795E\u7ECF\u7F51\u7EDC\u7814\u7A76\u7EE7\u7EED\u63A8\u8FDB\uFF1B1986\u5E74\u7684\u53CD\u5411\u4F20\u64AD\u7814\u7A76\u63A8\u52A8\u591A\u5C42\u7F51\u7EDC\u8BAD\u7EC3\u53D7\u5230\u5173\u6CE8\u3002",limit:"\u77E5\u8BC6\u83B7\u53D6\u4E0E\u7EF4\u62A4\u6210\u672C\u3001\u89C4\u5219\u51B2\u7A81\u3001\u5BF9\u65B0\u73AF\u5883\u7684\u8106\u5F31\u6027\u4EE5\u53CA\u8BA1\u7B97\u9650\u5236\uFF0C\u4F7F\u90E8\u5206\u7CFB\u7EDF\u96BE\u4EE5\u5151\u73B0\u63A8\u5E7F\u627F\u8BFA\u3002\u6240\u8C13\u4EBA\u5DE5\u667A\u80FD\u5BD2\u51AC\u5177\u6709\u591A\u91CD\u539F\u56E0\uFF0C\u4E0D\u80FD\u5F52\u7ED3\u4E3A\u67D0\u4E00\u7BC7\u8BBA\u6587\u6216\u67D0\u4E00\u4E2A\u7B97\u6CD5\u7684\u5931\u8D25\u3002",bridge:"\u53D7\u632B\u8FEB\u4F7F\u7814\u7A76\u66F4\u91CD\u89C6\u53EF\u8BC4\u4F30\u4EFB\u52A1\u4E0E\u5B9E\u9645\u6761\u4EF6\u3002\u4E13\u5BB6\u77E5\u8BC6\u8DEF\u7EBF\u5E76\u672A\u6D88\u5931\uFF0C\u4F46\u4ECE\u6570\u636E\u5B66\u4E60\u8868\u793A\u3001\u4F18\u5316\u591A\u5C42\u6A21\u578B\u4EE5\u53CA\u8BBE\u8BA1\u7EDF\u4E00\u6D4B\u8BD5\u96C6\u7684\u8DEF\u7EBF\uFF0C\u9010\u6B65\u79EF\u7D2F\u8D77\u65B0\u7684\u5B9E\u9A8C\u57FA\u7840\u3002",events:[["1973","\u80FD\u529B\u4E0E\u6295\u5165\u53D7\u5230\u5BA1\u89C6","\u83B1\u7279\u5E0C\u5C14\u62A5\u544A\u662F\u82F1\u56FD\u4EBA\u5DE5\u667A\u80FD\u7814\u7A76\u8D44\u52A9\u8BA8\u8BBA\u7684\u91CD\u8981\u5386\u53F2\u8282\u70B9\uFF0C\u4E0D\u80FD\u4EE3\u8868\u6240\u6709\u5730\u533A\u7684\u5168\u90E8\u7814\u7A76\u3002"],["1980\u5E74\u4EE3","\u4E13\u5BB6\u7CFB\u7EDF\u5174\u8D77","\u9886\u57DF\u77E5\u8BC6\u88AB\u7F16\u7801\u4E3A\u89C4\u5219\uFF0C\u5728\u7279\u5B9A\u5DE5\u4F5C\u6D41\u4E2D\u63D0\u4F9B\u5EFA\u8BAE\uFF0C\u4E5F\u5E26\u6765\u77E5\u8BC6\u5DE5\u7A0B\u4E0E\u7EF4\u62A4\u8D1F\u62C5\u3002"],["1986","\u591A\u5C42\u7F51\u7EDC\u7684\u8BAD\u7EC3","\u53CD\u5411\u4F20\u64AD\u7528\u4E8E\u5B66\u4E60\u5185\u90E8\u8868\u793A\uFF0C\u6210\u4E3A\u540E\u6765\u6DF1\u5EA6\u5B66\u4E60\u7684\u91CD\u8981\u5DE5\u5177\u4E4B\u4E00\u3002"],["1980\u5E74\u4EE3\u672B\u20141990\u5E74\u4EE3\u521D","\u5546\u4E1A\u4E0E\u8D44\u52A9\u6CE2\u52A8","\u90E8\u5206\u5E02\u573A\u4E0E\u7814\u7A76\u6295\u5165\u56DE\u843D\uFF0C\u4F46\u7EDF\u8BA1\u65B9\u6CD5\u3001\u795E\u7ECF\u7F51\u7EDC\u548C\u5B9E\u9645\u5E94\u7528\u7EE7\u7EED\u53D1\u5C55\u3002"]],sources:[Ie("\u82F1\u56FD\u4EBA\u5DE5\u667A\u80FD\u53F2\u4E0E\u83B1\u7279\u5E0C\u5C14\u62A5\u544A","https://www.aiai.ed.ac.uk/events/lighthill1973/"),Ie("\u53CD\u5411\u4F20\u64AD\u4E0E\u5185\u90E8\u8868\u793A","https://doi.org/10.1038/323533a0"),Ie("\u4E13\u5BB6\u7CFB\u7EDF\u77E5\u8BC6\u5DE5\u7A0B\u7684\u5386\u53F2\u8BBA\u8FF0","https://www.ijcai.org/Proceedings/77-2/Papers/092.pdf")]},{years:"1980\u20142000\u5E74\u4EE3",short:"\u641C\u7D22\u4E0E\u5B66\u4E60\u5E76\u884C",title:"\u51FB\u8D25\u4E00\u4E2A\u4EFB\u52A1\uFF0C\u4E0E\u5B66\u4E60\u4E00\u79CD\u8868\u793A\u3002",object:"search",question:"\u590D\u6742\u4EFB\u52A1\u53EF\u4EE5\u4F9D\u9760\u66F4\u597D\u7684\u641C\u7D22\u4E0E\u8BC4\u4F30\u89E3\u51B3\uFF0C\u4E5F\u53EF\u4EE5\u8BA9\u6A21\u578B\u4ECE\u6837\u672C\u4E2D\u5B66\u4E60\u7279\u5F81\u3002\u8FD9\u4E24\u79CD\u601D\u8DEF\u957F\u671F\u5E76\u884C\uFF1A\u4E13\u7528\u641C\u7D22\u64C5\u957F\u7ED3\u6784\u6E05\u6670\u7684\u95EE\u9898\uFF0C\u5B66\u4E60\u65B9\u6CD5\u9010\u6B65\u51CF\u5C11\u5BF9\u624B\u5DE5\u7279\u5F81\u7684\u4F9D\u8D56\u3002",method:"\u65B0\u8BA4\u77E5\u673A\u63A2\u7D22\u5C42\u6B21\u5316\u89C6\u89C9\u8BC6\u522B\uFF0C\u5377\u79EF\u624B\u5199\u8BC6\u522B\u628A\u5C40\u90E8\u8FDE\u63A5\u548C\u5171\u4EAB\u6743\u91CD\u4E0E\u68AF\u5EA6\u5B66\u4E60\u7ED3\u5408\u3002\u53E6\u4E00\u8FB9\uFF0C\u6DF1\u84DD\u4F7F\u7528\u4E13\u95E8\u7684\u56FD\u9645\u8C61\u68CB\u641C\u7D22\u3001\u8BC4\u4F30\u548C\u8BA1\u7B97\u8D44\u6E90\uFF0C\u57281997\u5E74\u6218\u80DC\u5361\u65AF\u5E15\u7F57\u592B\u3002",limit:"\u56FD\u9645\u8C61\u68CB\u4E0A\u7684\u80DC\u5229\u5E76\u4E0D\u81EA\u52A8\u89E3\u51B3\u56F4\u68CB\u3002\u56F4\u68CB\u5206\u652F\u591A\uFF0C\u5C40\u9762\u4EF7\u503C\u96BE\u4EE5\u4EC5\u9760\u4EBA\u5DE5\u89C4\u5219\u53EF\u9760\u5224\u65AD\uFF1B\u56FE\u50CF\u8BC6\u522B\u91CC\u7684\u6210\u529F\u4E5F\u4E0D\u80FD\u76F4\u63A5\u89C6\u4E3A\u56F4\u68CB\u51B3\u7B56\u80FD\u529B\uFF0C\u66F4\u4E0D\u80FD\u8BC1\u660E\u901A\u7528\u667A\u80FD\u3002",bridge:"\u8FD9\u4E00\u65F6\u671F\u7559\u4E0B\u4E24\u79CD\u540E\u6765\u4F1A\u5728\u963F\u5C14\u6CD5\u56F4\u68CB\u4E2D\u76F8\u9047\u7684\u80FD\u529B\uFF1A\u641C\u7D22\u80FD\u591F\u7EC4\u7EC7\u5019\u9009\u53D8\u5316\uFF0C\u5B66\u4E60\u80FD\u591F\u63D0\u4F9B\u96BE\u4EE5\u624B\u5199\u7684\u8BC4\u4F30\u3002\u5B83\u4EEC\u7684\u6C47\u5408\u9700\u8981\u66F4\u6709\u6548\u7684\u6A21\u578B\u3001\u6570\u636E\u4E0E\u8BA1\u7B97\u6761\u4EF6\u3002",events:[["1980","\u65B0\u8BA4\u77E5\u673A","\u798F\u5C9B\u90A6\u5F66\u63A2\u7D22\u5C42\u6B21\u5316\u7684\u89C6\u89C9\u6A21\u5F0F\u8BC6\u522B\uFF0C\u6210\u4E3A\u5377\u79EF\u7F51\u7EDC\u7684\u5148\u9A71\u4E4B\u4E00\u3002"],["1989 / 1998","\u5377\u79EF\u6587\u6863\u8BC6\u522B","\u5C40\u90E8\u8FDE\u63A5\u3001\u6743\u91CD\u5171\u4EAB\u4E0E\u53CD\u5411\u4F20\u64AD\u7528\u4E8E\u624B\u5199\u6570\u5B57\u53CA\u6587\u6863\u4EFB\u52A1\uFF0C\u53D1\u5C55\u4E3A\u53EF\u5E94\u7528\u7684\u8BC6\u522B\u7CFB\u7EDF\u3002"],["1997","\u6DF1\u84DD\u6218\u80DC\u5361\u65AF\u5E15\u7F57\u592B","\u4E13\u95E8\u641C\u7D22\u3001\u5C40\u9762\u8BC4\u4F30\u4E0E\u786C\u4EF6\u534F\u540C\u5728\u56FD\u9645\u8C61\u68CB\u9886\u57DF\u53D6\u5F97\u7A81\u7834\u3002"]],sources:[Ie("\u65B0\u8BA4\u77E5\u673A\u539F\u8BBA\u6587","https://doi.org/10.1007/BF00344251"),Ie("\u68AF\u5EA6\u5B66\u4E60\u4E0E\u6587\u6863\u8BC6\u522B","https://doi.org/10.1109/5.726791"),Ie("\u6DF1\u84DD\u7CFB\u7EDF\u8BBA\u6587","https://doi.org/10.1016/S0004-3702(01)00129-1")]},{years:"2006\u20142012",short:"\u6761\u4EF6\u6C47\u5408",title:"\u6570\u636E\u3001\u8BA1\u7B97\u4E0E\u6DF1\u5EA6\u7F51\u7EDC\uFF0C\u76F8\u4E92\u653E\u5927\u3002",object:"learning",question:"\u4E3A\u4EC0\u4E48\u591A\u5C42\u7F51\u7EDC\u5E76\u975E\u65B0\u6982\u5FF5\uFF0C\u5374\u5728\u8FD9\u4E00\u65F6\u671F\u83B7\u5F97\u65B0\u7684\u5B9E\u8DF5\u7A81\u7834\uFF1F\u4E0D\u80FD\u53EA\u5F52\u529F\u4E8E\u201C\u5C42\u6570\u589E\u52A0\u201D\uFF1A\u8BAD\u7EC3\u65B9\u6CD5\u3001\u5DE5\u7A0B\u7ECF\u9A8C\u3001\u53EF\u83B7\u5F97\u7684\u6570\u636E\u3001\u8BC4\u4F30\u57FA\u51C6\u4E0E\u5E76\u884C\u8BA1\u7B97\u5171\u540C\u6539\u53D8\u4E86\u5B9E\u9A8C\u6761\u4EF6\u3002",method:"\u6DF1\u5C42\u6A21\u578B\u8BAD\u7EC3\u91CD\u65B0\u53D7\u5230\u5173\u6CE8\uFF1B\u5927\u89C4\u6A21\u56FE\u50CF\u6570\u636E\u5E93\u548C\u8BC6\u522B\u6311\u6218\u63D0\u4F9B\u7EDF\u4E00\u7684\u6837\u672C\u4E0E\u6BD4\u8F83\u5E73\u53F0\uFF1B\u56FE\u5F62\u5904\u7406\u5668\u52A0\u901F\u5927\u91CF\u6570\u503C\u8BA1\u7B97\u30022012\u5E74\u4E9A\u5386\u514B\u65AF\u7F51\u7EDC\u628A\u6DF1\u5EA6\u5377\u79EF\u3001\u6574\u6D41\u6FC0\u6D3B\u3001\u589E\u5F3A\u3001\u968F\u673A\u5931\u6D3B\u7B49\u5B9E\u8DF5\u7EC4\u5408\u8D77\u6765\u3002",limit:"2012\u5E74\u7684\u89C6\u89C9\u8FDB\u6B65\u4E0D\u610F\u5473\u7740\u6240\u6709\u4EFB\u52A1\u5DF2\u89E3\u51B3\u3002\u6BD4\u8D5B\u6307\u6807\u53D7\u6570\u636E\u5206\u5E03\u548C\u8BC4\u4F30\u7EA6\u5B9A\u5F71\u54CD\uFF1B15.3%\u7684\u524D\u4E94\u9879\u9519\u8BEF\u7387\u6765\u81EA\u83B7\u80DC\u96C6\u6210\u63D0\u4EA4\uFF0C\u4E0D\u5E94\u8BEF\u5199\u4E3A\u5355\u4E2A\u7F51\u7EDC\u7684\u9996\u9879\u9519\u8BEF\u7387\u3002",bridge:"\u8FD9\u4E9B\u8FDB\u5C55\u5C55\u793A\u4E86\u5B66\u4E60\u590D\u6742\u8868\u793A\u7684\u53EF\u884C\u6027\uFF0C\u4E5F\u4E3A\u56F4\u68CB\u5C40\u9762\u8BC4\u4F30\u63D0\u4F9B\u6280\u672F\u80CC\u666F\u3002\u4F46\u4E9A\u5386\u514B\u65AF\u7F51\u7EDC\u5E76\u4E0D\u662F\u963F\u5C14\u6CD5\u56F4\u68CB\u76F4\u63A5\u4F7F\u7528\u7684\u7F51\u7EDC\uFF1A\u4EFB\u52A1\u3001\u8F93\u5165\u3001\u8F93\u51FA\u548C\u641C\u7D22\u673A\u5236\u4ECD\u9700\u91CD\u65B0\u8BBE\u8BA1\u3002",events:[["2006","\u6DF1\u5C42\u6A21\u578B\u8BAD\u7EC3\u63A2\u7D22","\u6DF1\u5EA6\u4FE1\u5FF5\u7F51\u7EDC\u7B49\u7814\u7A76\u91CD\u65B0\u63A8\u52A8\u591A\u5C42\u8868\u793A\u5B66\u4E60\u7684\u5B9E\u9A8C\uFF0C\u4E0D\u662F\u6DF1\u5EA6\u5B66\u4E60\u7684\u552F\u4E00\u5F00\u7AEF\u3002"],["2009 / 2010","\u6570\u636E\u4E0E\u7EDF\u4E00\u7ADE\u8D5B","\u5927\u89C4\u6A21\u56FE\u50CF\u6570\u636E\u5E93\u53CA\u968F\u540E\u6311\u6218\u8D5B\uFF0C\u4F7F\u8BAD\u7EC3\u89C4\u6A21\u3001\u516C\u5F00\u6BD4\u8F83\u4E0E\u590D\u73B0\u5B9E\u9A8C\u7684\u91CD\u8981\u6027\u63D0\u5347\u3002"],["2012","\u4E9A\u5386\u514B\u65AF\u7F51\u7EDC\u7A81\u7834","\u7814\u7A76\u8005\u5728\u5927\u89C4\u6A21\u89C6\u89C9\u5206\u7C7B\u4E0A\u5C55\u793A\u6DF1\u5C42\u5377\u79EF\u6A21\u578B\u3001\u6570\u636E\u548CGPU\u8BA1\u7B97\u7684\u7ED3\u5408\u4F18\u52BF\u3002"]],sources:[Ie("\u6DF1\u5C42\u6A21\u578B\u8BAD\u7EC3\u7814\u7A76","https://doi.org/10.1162/neco.2006.18.7.1527"),Ie("\u5927\u89C4\u6A21\u56FE\u50CF\u6570\u636E\u5E93\u8D44\u6599","https://www.image-net.org/about.php"),Ie("2012\u5E74\u539F\u59CB\u8BBA\u6587","https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks")]},{years:"2006\u20142016",short:"\u8D70\u5411\u56F4\u68CB",title:"\u8BA9\u5B66\u4E60\u63D0\u4F9B\u5224\u65AD\uFF0C\u8BA9\u641C\u7D22\u7EC4\u7EC7\u63A2\u7D22\u3002",object:"learning",question:"\u9762\u5BF9\u56F4\u68CB\u5E9E\u5927\u7684\u5019\u9009\u7A7A\u95F4\uFF0C\u600E\u6837\u628A\u8BA1\u7B97\u6295\u5165\u66F4\u6709\u5E0C\u671B\u7684\u5206\u652F\uFF0C\u53C8\u600E\u6837\u8BC4\u4F30\u5C1A\u672A\u8D70\u5B8C\u7684\u5C40\u9762\uFF1F\u5355\u7EAF\u7A77\u4E3E\u4E0D\u53EF\u884C\uFF0C\u53EA\u6309\u76F4\u89C9\u9009\u5148\u9A8C\u6700\u9AD8\u7684\u70B9\u4E5F\u4E0D\u8DB3\u4EE5\u83B7\u5F97\u7A33\u5B9A\u7684\u9AD8\u6C34\u5E73\u51B3\u7B56\u3002",method:"\u8499\u7279\u5361\u6D1B\u6811\u641C\u7D22\u53D1\u5C55\u51FA\u4EE5\u6A21\u62DF\u7EDF\u8BA1\u5F15\u5BFC\u63A2\u7D22\u7684\u8DEF\u7EBF\u30022016\u5E74\u7CFB\u7EDF\u7ED3\u5408\u7B56\u7565\u7F51\u7EDC\u3001\u4EF7\u503C\u7F51\u7EDC\u3001\u5FEB\u901F\u6A21\u62DF\u4E0E\u641C\u7D22\uFF1A\u4ECE\u4EBA\u7C7B\u68CB\u8C31\u5B66\u4E60\uFF0C\u518D\u901A\u8FC7\u81EA\u6211\u5BF9\u5F08\u6539\u8FDB\uFF0C\u53CD\u590D\u9009\u62E9\u3001\u6269\u5C55\u3001\u8BC4\u4F30\u548C\u56DE\u4F20\u3002",limit:"2015\u5E74\u5BF9\u6A0A\u9EBE\u7684\u7ED3\u679C\u4E0E2016\u5E74\u5BF9\u674E\u4E16\u77F3\u7684\u6BD4\u8D5B\u5E94\u6309\u65F6\u95F4\u4E0E\u5BF9\u624B\u533A\u5206\u30022016\u5E74\u7684\u67B6\u6784\u4E0D\u80FD\u75282017\u5E74\u7684\u96F6\u8D77\u70B9\u7CFB\u7EDF\u66FF\u4EE3\u89E3\u91CA\u3002\u7F51\u7EDC\u4F30\u8BA1\u3001\u6709\u9650\u641C\u7D22\u548C\u8BAD\u7EC3\u7ECF\u9A8C\u4ECD\u53EF\u80FD\u5B58\u5728\u8584\u5F31\u70B9\u3002",bridge:"2016\u5E743\u67089\u65E5\u81F315\u65E5\uFF0C\u963F\u5C14\u6CD5\u56F4\u68CB\u4E0E\u674E\u4E16\u77F3\u4E94\u756A\u68CB\u4EE54\u6BD41\u7ED3\u675F\u3002\u7B2C\u56DB\u5C40\u674E\u4E16\u77F3\u53D6\u80DC\uFF0C\u63D0\u9192\u6211\u4EEC\u540C\u65F6\u89C2\u5BDF\u80FD\u529B\u4E0E\u5931\u8BEF\u3002\u63A5\u4E0B\u6765\u62C6\u89E3\u7CFB\u7EDF\u65F6\uFF0C\u8981\u5206\u6E05\u5B9E\u9645\u5386\u53F2\u3001\u539F\u7406\u5C55\u54C1\u4E0E\u5408\u6210\u8BA1\u7B97\u793A\u610F\u3002",events:[["2006","\u8499\u7279\u5361\u6D1B\u6811\u641C\u7D22\u7814\u7A76","\u5305\u62EC\u7F6E\u4FE1\u4E0A\u754C\u6811\u641C\u7D22\u5728\u5185\u7684\u65B9\u6CD5\uFF0C\u7528\u63A2\u7D22\u4E0E\u5229\u7528\u7684\u6743\u8861\u5B89\u6392\u6709\u9650\u8BA1\u7B97\u9884\u7B97\u3002"],["2015\u5E7410\u6708","\u5BF9\u6A0A\u9EBE\u7684\u4E94\u5C40\u6BD4\u8D5B","\u963F\u5C14\u6CD5\u56F4\u68CB\u4EE55\u6BD40\u6218\u80DC\u6B27\u6D32\u56F4\u68CB\u51A0\u519B\u6A0A\u9EBE\uFF0C\u7ED3\u679C\u968F\u540E\u968F2016\u5E74\u7814\u7A76\u516C\u5F00\u3002"],["2016\u5E741\u6708","\u8BBA\u6587\u516C\u5F00\u7CFB\u7EDF\u65B9\u6CD5","\u7B56\u7565\u7F51\u7EDC\u3001\u4EF7\u503C\u7F51\u7EDC\u4E0E\u6811\u641C\u7D22\u7684\u7EC4\u5408\u8FDB\u5165\u516C\u5F00\u7814\u7A76\u8BA8\u8BBA\u3002"],["2016\u5E743\u6708","\u4E0E\u674E\u4E16\u77F3\u4E94\u756A\u68CB","\u603B\u6BD4\u52064\u6BD41\uFF0C\u674E\u4E16\u77F3\u8D62\u5F97\u7B2C\u56DB\u5C40\u3002\u610F\u4E49\u5728\u4E8E\u4E13\u95E8\u4EFB\u52A1\u7684\u91CD\u5927\u7A81\u7834\uFF0C\u800C\u975E\u673A\u5668\u83B7\u5F97\u610F\u8BC6\u3002"]],sources:[Ie("\u6811\u641C\u7D22\u63A2\u7D22\u4E0E\u5229\u7528\u7814\u7A76","https://doi.org/10.1007/11871842_29"),Ie("2016\u5E74\u539F\u59CB\u7814\u7A76","https://doi.org/10.1038/nature16961"),Ie("\u5B98\u65B9\u963F\u5C14\u6CD5\u56F4\u68CB\u8D44\u6599","https://deepmind.google/research/breakthroughs/alphago/"),Ie("2017\u5E74\u96F6\u8D77\u70B9\u7CFB\u7EDF\u4F5C\u5BF9\u7167","https://doi.org/10.1038/nature24270")]}];function dd(i){return Math.max(0,Math.min(5,Math.round(Number.isFinite(+i)?+i:0)))}var Fe=i=>document.querySelector(i);function fd(i){let t=0,e=!1,n="neuron",s=Fe("#origins-view");s.innerHTML=`<section class="curator-hero"><div class="curator-line"><span>00 / \u4EBA\u5DE5\u667A\u80FD\u5386\u53F2\u4E3B\u5C55\u533A</span><span>1943 \u2014 2016</span></div><div class="curator-cover"><div><span class="folio">\u4E03\u5341\u4E09\u5E74\u7684\u95EE\u9898\uFF0C\u4E0E\u4E00\u6B21\u6C47\u5408\u3002</span><h1>\u667A\u80FD\u7684\u957F\u591C\uFF0C<br><em>\u5E76\u975E\u4E00\u77AC\u7834\u6653\u3002</em></h1><p>\u4ECE\u903B\u8F91\u795E\u7ECF\u5143\u5230\u9996\u5C14\u68CB\u76D8\uFF0C\u4ECE\u89C4\u5219\u7684\u96C4\u5FC3\u5230\u5B66\u4E60\u7684\u7A81\u7834\u3002<br>\u8FD9\u4E0D\u662F\u4E00\u6761\u4E0D\u65AD\u80DC\u5229\u7684\u76F4\u7EBF\uFF0C\u800C\u662F\u65B9\u6CD5\u3001\u74F6\u9888\u4E0E\u6761\u4EF6\u76F8\u4E92\u6539\u53D8\u7684\u5386\u53F2\u3002</p><div class="cover-actions"><a href="#match" class="solid-link">\u8FDB\u51652016\u5E74\u4E3B\u5C55\u5385 \u2197</a><button id="history-read">\u4ECE\u7B2C\u4E00\u7AE0\u5F00\u59CB\u9605\u8BFB \u2193</button></div></div><div class="cover-seal"><div class="seal-ring one"></div><div class="seal-ring two"></div><span>2016<small>\u673A\u5668\u843D\u4E0B\u7684\u4E00\u624B</small></span><i>\u89C4\u5219 / \u5B66\u4E60 / \u641C\u7D22</i></div></div><div class="history-thesis"><span>\u7B56\u5C55\u5BFC\u8A00</span><p>\u4E3A\u4EC0\u4E48\u57282016\u5E74\uFF1F\u4E0D\u53EA\u662F\u66F4\u591A\u8BA1\u7B97\uFF0C\u4E5F\u4E0D\u53EA\u662F\u66F4\u6DF1\u7F51\u7EDC\u3002\u5B83\u9700\u8981\u6211\u4EEC\u540C\u65F6\u7406\u89E3\uFF1A<b>\u4EC0\u4E48\u80FD\u591F\u88AB\u5F62\u5F0F\u5316\uFF0C\u4EC0\u4E48\u80FD\u591F\u4ECE\u6570\u636E\u4E2D\u5B66\u4E60\uFF0C\u4EE5\u53CA\u6709\u9650\u8BA1\u7B97\u5982\u4F55\u88AB\u5B89\u6392\u3002</b></p><span>\u516D\u7AE0 \xB7 \u56DB\u7EC4\u539F\u7406\u5C55\u54C1<br>\u95EE\u9898 \u2192 \u65B9\u6CD5 \u2192 \u9650\u5236 \u2192 \u8F6C\u6298</span></div></section>
 <nav class="chapter-rail" aria-label="\u5386\u53F2\u7AE0\u8282">${cl.map((o,l)=>`<button data-chapter="${l}" aria-pressed="false"><span>${String(l+1).padStart(2,"0")}</span><b>${o.short}</b><small>${o.years}</small></button>`).join("")}</nav>
 <section class="historical-object" id="historical-object"><div class="object-topline"><span>\u539F\u7406\u9986\u85CF / \u53EF\u65CB\u8F6C\u4E0E\u62C6\u89E3</span><span id="object-number">\u5C55\u54C1 01 / 04</span></div><div class="object-layout"><div class="object-stage-wrap"><div id="history-scene" class="history-scene" aria-label="\u5386\u53F2\u8BA1\u7B97\u539F\u7406\u4E09\u7EF4\u5C55\u54C1"></div><div class="object-caption"><span id="object-note"></span><small>\u62D6\u52A8\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u7ED3\u6784\u5206\u79BB</small></div></div><aside class="object-inspector"><span id="object-category"></span><h2 id="object-title"></h2><p id="object-subtitle"></p><ol id="object-parts"></ol><button id="history-explode" class="solid-link" aria-pressed="false">\u62C6\u89E3\u539F\u7406\u7ED3\u6784</button><p class="object-boundary">\u6A21\u578B\u662F\u4E3A\u89E3\u91CA\u65B9\u6CD5\u800C\u8BBE\u8BA1\u7684\u539F\u521B\u539F\u7406\u88C5\u7F6E\uFF0C\u4E0D\u662F\u5386\u53F2\u5B9E\u7269\u7684\u6570\u5B57\u590D\u523B\u3002</p></aside></div><div class="object-selector">${Object.entries(ll).map(([o,l],c)=>`<button data-object="${o}"><span>0${c+1}</span>${l.name}</button>`).join("")}</div></section>
 <div class="reading-control"><span id="reading-now"></span><label>\u53D9\u4E8B\u8272\u5F69<input id="era" aria-label="\u5386\u53F2\u8FDB\u7A0B" type="range" min="0" max="5" step="1" value="0"></label><span>\u5355\u8272\u6863\u6848 \u2192 \u5F69\u8272\u8BA1\u7B97</span></div>
 <div class="history-volumes">${cl.map((o,l)=>`<article class="history-chapter" id="chapter-${l}" data-index="${l}"><header><span class="chapter-num">${String(l+1).padStart(2,"0")}</span><div><span class="chapter-period">${o.years}</span><h2>${o.title}</h2></div><button data-chapter-model="${l}">\u67E5\u770B\u5BF9\u5E94\u5C55\u54C1 \u2197</button></header><div class="chapter-grid"><div class="chapter-narrative"><div><span>\u5F53\u65F6\u7684\u95EE\u9898</span><p>${o.question}</p></div><div><span>\u65B9\u6CD5\u4E0E\u8FDB\u5C55</span><p>${o.method}</p></div><div class="limit-note"><span>\u80FD\u529B\u8FB9\u754C</span><p>${o.limit}</p></div></div><aside class="chapter-events">${o.events.map(([c,h,d])=>`<div><time>${c}</time><h3>${h}</h3><p>${d}</p></div>`).join("")}</aside></div><div class="chapter-transition"><span>\u901A\u5411\u4E0B\u4E00\u5E55</span><p>${o.bridge}</p></div><div class="chapter-sources"><span>\u6765\u6E90</span>${o.sources.map(c=>`<a href="${c.url}" target="_blank" rel="noopener">${c.name} \u2197</a>`).join("")}</div></article>`).join("")}</div>
 <section class="history-finale"><div><span class="eyebrow">\u4E0D\u662F\u8D77\u70B9\uFF0C\u4E5F\u4E0D\u662F\u7EC8\u70B9\u3002</span><h2>\u5386\u53F2\u89E3\u91CA\u5B83\u4E3A\u4F55\u51FA\u73B0\u3002<br><em>\u4E0B\u4E00\u5385\uFF0C\u62C6\u5F00\u5B83\u5982\u4F55\u5DE5\u4F5C\u3002</em></h2><p>2016\u5E743\u6708\uFF0C4\u6BD41\u3002\u4E0D\u8981\u628A\u6BD4\u5206\u5F53\u4F5C\u901A\u7528\u667A\u80FD\u7684\u8BC1\u660E\uFF1B\u628A\u5B83\u5F53\u4F5C\u5165\u53E3\uFF0C\u7EE7\u7EED\u89C2\u5BDF\u5B66\u4E60\u3001\u641C\u7D22\u4E0E\u8BA1\u7B97\u7684\u7ED3\u5408\u3002</p></div><a class="solid-link" href="#match">01 \u4E16\u7EAA\u5BF9\u5C40 \u2192</a></section>`;function r(o){n=o;let l=ll[o],c=Object.keys(ll).indexOf(o);Fe("#object-number").textContent=`\u5C55\u54C1 0${c+1} / 04`,Fe("#object-category").textContent=`\u65B9\u6CD5\u6863\u6848 / 0${c+1}`,Fe("#object-title").textContent=l.name,Fe("#object-subtitle").textContent=l.subtitle,Fe("#object-note").textContent=l.note,Fe("#object-parts").innerHTML=l.parts.map((h,d)=>`<li><span>0${d+1}</span>${h}</li>`).join(""),Fe("#history-explode").textContent="\u62C6\u89E3\u539F\u7406\u7ED3\u6784",Fe("#history-explode").setAttribute("aria-pressed","false"),s.querySelectorAll("[data-object]").forEach(h=>h.classList.toggle("active",h.dataset.object===o)),e&&i.show(Fe("#history-scene"),l.mode)}function a(o,l=!1){t=dd(o);let c=cl[t];Fe("#era").value=t,Fe("#reading-now").textContent=`\u5F53\u524D\u7AE0\u8282\uFF1A0${t+1} \xB7 ${c.short}`,Fe("#historical-object").style.setProperty("--history-gray",String(1-t/5)),s.querySelectorAll("[data-chapter]").forEach(h=>{h.classList.toggle("active",+h.dataset.chapter===t),h.setAttribute("aria-pressed",+h.dataset.chapter===t)}),s.querySelectorAll(".history-chapter").forEach((h,d)=>h.classList.toggle("is-current",d===t)),r(c.object),l&&document.getElementById("chapter-"+t).scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth",block:"start"})}return s.addEventListener("click",o=>{let l=o.target.closest("[data-chapter]");l&&a(+l.dataset.chapter,!0);let c=o.target.closest("[data-chapter-model]");c&&(a(+c.dataset.chapterModel),Fe("#historical-object").scrollIntoView({behavior:"smooth",block:"start"}));let h=o.target.closest("[data-object]");h&&r(h.dataset.object)}),Fe("#era").oninput=o=>a(+o.target.value),Fe("#history-read").onclick=()=>a(0,!0),Fe("#history-explode").onclick=o=>{let l=i.explode();o.target.textContent=l?"\u91CD\u65B0\u7EC4\u5408":"\u62C6\u89E3\u539F\u7406\u7ED3\u6784",o.target.setAttribute("aria-pressed",l)},a(0),{show(){e=!0,r(n)},hide(){e=!1}}}var bt=i=>document.querySelector(i),Hr=(i,t,e,n)=>`<div class="museum-heading"><div class="eyebrow">${i} / ${t}</div><h1>${e}</h1><p>${n}</p></div>`,hl=()=>`<div class="museum-sources">${rd.map(([i,t])=>`<a href="${t}" target="_blank" rel="noopener">${i} \u2197</a>`).join("")}</div>`,Gr=i=>`<div class="deep-cards">${i.map(([t,e,n])=>`<article><span>${t}</span><h3>${e}</h3><p>${n}</p></article>`).join("")}</div>`;function pd(){let i=Hc(),t={...Wc},e="gpu",n=0,s={match:null,gpu:null,training:null,selfplay:null},r=ud((b,P)=>a(P,b));function a(b,P){if(!wi[b]?.some(U=>U.key===P))return;s[b]=P;let M=b==="match"?"hardware":"growth",S=bt("#"+M+"-info");S&&(S.innerHTML=hd(b,P),S.dataset.part=P,S.classList.add("component-inspector")),document.querySelectorAll("#"+M+"-parts button").forEach(U=>{let O=U.dataset.part===P;U.classList.toggle("active",O),U.setAttribute("aria-pressed",String(O))})}function o(b){let P=b==="match"?"hardware":"growth",M=bt("#"+P+"-parts");M.innerHTML=wi[b].map((U,O)=>`<button type="button" data-part="${U.key}" aria-pressed="false" aria-controls="${P}-info"><span>${String(O+1).padStart(2,"0")}</span>${U.name}</button>`).join(""),M.onclick=U=>{let O=U.target.closest("[data-part]");O&&(r.select(O.dataset.part),a(b,O.dataset.part))};let S=s[b]||wi[b][0].key;s[b]&&(r.select(S),a(b,S))}let l=document.querySelector(".main-nav");l.innerHTML=kr.map(([b,P,M])=>`<a id="nav-${b}" href="#${b}"><span>${P}</span>${M}</a>`).join(""),bt("#brand").href="#origins",bt("#brand").querySelector("span:last-child").innerHTML="\u673A\u5668\u843D\u4E0B\u7684\u4E00\u624B<small>2016 \xB7 \u4ECE\u963F\u5C14\u6CD5\u56F4\u68CB\u8D70\u8FDB\u4EBA\u5DE5\u667A\u80FD</small>",document.title="2016\uFF1A\u673A\u5668\u843D\u4E0B\u7684\u4E00\u624B\uFF5C\u4EBA\u5DE5\u667A\u80FD\u4EA4\u4E92\u5C55\u9986",bt("#history-view").id="origins-view",bt("#model-view").id="dimensions-view",bt("#labs-view").id="experiments-view";let c=bt("#origins-view");c.innerHTML=Hr("00","\u5D1B\u8D77\u524D\u591C / \u4ECE\u9ED1\u767D\u5230\u5F69\u8272","\u673A\u5668\u843D\u4E0B\u4E4B\u524D\uFF0C<br><em>\u5DF2\u7ECF\u8D70\u8FC7\u5F88\u957F\u7684\u8DEF\u3002</em>","\u4EE52016\u5E74\u7684\u4E00\u573A\u56F4\u68CB\u8D5B\u4E3A\u5165\u53E3\uFF0C\u56DE\u5230\u89C4\u5219\u3001\u5B66\u4E60\u3001\u6570\u636E\u4E0E\u7B97\u529B\u76F8\u4E92\u63A8\u52A8\u7684\u5386\u53F2\u3002\u989C\u8272\u4EE3\u8868\u5C55\u9648\u53D9\u4E8B\uFF0C\u4E0D\u610F\u5473\u7740\u6B64\u524D\u4E0D\u5B58\u5728\u4EBA\u5DE5\u667A\u80FD\u3002")+`<div class="origins-stage" id="origins-stage"><div class="archive-board" aria-hidden="true">${Array.from({length:49},(b,P)=>`<i class="${[2,8,12,16,24,31,36,40].includes(P)?"stone":""} ${P%2?"white":""}"></i>`).join("")}</div><div class="archive-caption"><span>\u89C4\u5219 \u2192 \u5B66\u4E60 \u2192 \u641C\u7D22</span><b id="era-year">1950</b><h2 id="era-title">\u673A\u5668\u80FD\u5426\u8868\u73B0\u51FA\u667A\u80FD\uFF1F</h2><p id="era-text"></p></div></div><label class="era-control">\u62D6\u52A8\u5386\u53F2\u8FDB\u7A0B\uFF1A\u9ED1\u767D\u9010\u6E10\u8FDB\u5165\u5F69\u8272<input id="era" type="range" min="0" max="5" step="1" value="0" aria-label="\u5386\u53F2\u8FDB\u7A0B"></label><div class="era-tabs">${["1950","1956","1980\u20141998","1997","2009\u20142012","2016"].map((b,P)=>`<button data-era="${P}">${b}</button>`).join("")}</div>`+Gr([["\u7B2C\u4E00\u6761\u7EBF\u7D22","\u89C4\u5219\u548C\u641C\u7D22\u7684\u529B\u91CF","\u65E9\u671F\u7CFB\u7EDF\u5E38\u901A\u8FC7\u7B26\u53F7\u89C4\u5219\u548C\u663E\u5F0F\u641C\u7D22\u89E3\u51B3\u4EFB\u52A1\u30021997\u5E74\u6DF1\u84DD\u6218\u80DC\u56FD\u9645\u8C61\u68CB\u4E16\u754C\u51A0\u519B\uFF0C\u5C55\u793A\u4E86\u4E13\u95E8\u7B97\u6CD5\u3001\u8BC4\u4F30\u4E0E\u8BA1\u7B97\u8D44\u6E90\u7684\u7ED3\u5408\uFF1B\u4E0D\u80FD\u636E\u6B64\u65AD\u8A00\u6240\u6709\u667A\u80FD\u4EFB\u52A1\u90FD\u80FD\u9760\u7A77\u4E3E\u3002"],["\u7B2C\u4E8C\u6761\u7EBF\u7D22","\u4ECE\u6837\u672C\u4E2D\u8C03\u6574\u53C2\u6570","\u795E\u7ECF\u7F51\u7EDC\u4E0E\u53CD\u5411\u4F20\u64AD\u7814\u7A76\u6301\u7EED\u53D1\u5C55\u30021980\u5E74\u7684\u65B0\u8BA4\u77E5\u673A\u30011989\u5E74\u7684\u624B\u5199\u6570\u5B57\u8BC6\u522B\u7814\u7A76\u53CA1998\u5E74\u7684\u5377\u79EF\u6587\u6863\u8BC6\u522B\uFF0C\u662F\u5C42\u6B21\u5316\u89C6\u89C9\u5B66\u4E60\u7684\u91CD\u8981\u8282\u70B9\uFF0C\u8FDC\u65E9\u4E8E2012\u5E74\u3002"],["\u7B2C\u4E09\u6761\u7EBF\u7D22","\u6570\u636E\u4E0E\u5E76\u884C\u8BA1\u7B97\u6C47\u5408","2009\u5E74\u5927\u89C4\u6A21\u56FE\u50CF\u6570\u636E\u5E93\u4E0E\u540E\u7EED\u6311\u6218\u8D5B\u63D0\u4F9B\u8BAD\u7EC3\u4E0E\u8BC4\u4F30\u57FA\u7840\uFF1B2012\u5E74\u4E9A\u5386\u514B\u65AF\u7F51\u7EDC\u51F8\u663E\u6DF1\u5EA6\u5377\u79EF\u3001GPU\u8BA1\u7B97\u548C\u5927\u89C4\u6A21\u6570\u636E\u7ED3\u5408\u7684\u4EF7\u503C\u3002\u5B83\u662F\u6280\u672F\u80CC\u666F\uFF0C\u4E0D\u662F\u963F\u5C14\u6CD5\u56F4\u68CB\u7684\u76F4\u63A5\u67B6\u6784\u3002"]])+`<section class="museum-essay"><h2>\u56F4\u68CB\uFF0C\u4E3A\u4EC0\u4E48\u6210\u4E3A\u4E00\u9053\u96BE\u9898\uFF1F</h2><p>\u56F4\u68CB\u7684\u53EF\u9009\u843D\u70B9\u591A\uFF0C\u5C40\u9762\u8BC4\u4EF7\u96BE\u4EE5\u5B8C\u5168\u8F6C\u5316\u6210\u4EBA\u5DE5\u89C4\u5219\u3002\u4EC5\u4EC5\u589E\u52A0\u641C\u7D22\u6DF1\u5EA6\uFF0C\u5E76\u4E0D\u80FD\u6D88\u9664\u7EC4\u5408\u7206\u70B8\u3002\u963F\u5C14\u6CD5\u56F4\u68CB\u5C06\u5B66\u4E60\u5F97\u5230\u7684\u7B56\u7565\u548C\u4EF7\u503C\u4F30\u8BA1\u4E0E\u6811\u641C\u7D22\u7ED3\u5408\uFF0C\u628A\u6709\u9650\u8BA1\u7B97\u4F18\u5148\u5206\u914D\u7ED9\u66F4\u6709\u5E0C\u671B\u7684\u53D8\u5316\u3002</p><div class="cause-chain"><span>\u4EBA\u7C7B\u77E5\u8BC6</span><b>\u2192</b><span>\u6570\u636E\u9A71\u52A8\u5B66\u4E60</span><b>\uFF0B</b><span>\u641C\u7D22\u4E0E\u8BA1\u7B97</span><b>\u2192</b><span>2016\u5E74\u7A81\u7834</span></div><a class="solid-link" href="#match">\u8FDB\u51652016\u5E74\u4E3B\u5C55\u5385 \u2192</a></section>${hl()}`;let h=document.querySelector("main"),d=(b,P,M)=>{let S=document.createElement("section");return S.id=b+"-view",S.className="page-view",S.hidden=!0,S.innerHTML=P,h.insertBefore(S,M||bt("#dimensions-view")),S};d("match",Hr("01","\u4E16\u7EAA\u5BF9\u5C40 / \u9996\u5C14 / 2016\u5E743\u6708","\u4E00\u5F20\u68CB\u76D8\uFF0C<br><em>\u4E0E\u4E00\u5957\u5206\u5E03\u5F0F\u8BA1\u7B97\u7CFB\u7EDF\u3002</em>","2016\u5E743\u67089\u65E5\u81F315\u65E5\uFF0C\u963F\u5C14\u6CD5\u56F4\u68CB\u4E0E\u674E\u4E16\u77F3\u8FDB\u884C\u4E94\u756A\u68CB\uFF0C\u4EE54\u6BD41\u83B7\u80DC\u3002\u8FD9\u91CC\u62C6\u5F00\u7684\u4E0D\u662F\u865A\u6784\u7684\u4EBA\u5F62\u673A\u5668\uFF0C\u800C\u662F\u8BA1\u7B97\u7CFB\u7EDF\u7684\u539F\u7406\u7ED3\u6784\u3002")+`<div class="museum-exhibit"><div><div id="match-scene" class="museum-canvas" aria-label="\u53EF\u65CB\u8F6C\u7684\u8BA1\u7B97\u673A\u67B6\u548C\u5341\u4E5D\u8DEF\u68CB\u76D8"></div><div class="museum-scene-controls"><button id="machine-explode" class="solid-link">\u62C6\u89E3\u8BA1\u7B97\u7CFB\u7EDF</button><span>\u62D6\u52A8\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u70B9\u51FB\u90E8\u4EF6</span></div></div><aside id="hardware-info" aria-live="polite" aria-atomic="true"><span>\u539F\u7406\u6A21\u578B / \u975E\u539F\u673A\u590D\u523B</span><h3>\u673A\u5668\u4E0D\u7B49\u4E8E\u5355\u4E2A\u673A\u7BB1</h3><p>\u795E\u7ECF\u7F51\u7EDC\u8BC4\u4F30\u3001\u641C\u7D22\u4E0E\u8BA1\u7B97\u8D44\u6E90\u5171\u540C\u53C2\u4E0E\u51B3\u7B56\u3002\u673A\u67B6\u3001\u901A\u7528\u5904\u7406\u5668\u3001\u52A0\u901F\u6A21\u5757\u3001\u5185\u5B58\u4E0E\u4E92\u8054\u5728\u8FD9\u91CC\u88AB\u5206\u5C42\u8868\u8FBE\u3002</p><p>\u65C1\u8FB9\u7684\u68CB\u76D8\u4E3A\u5408\u6210\u5C40\u9762\uFF0C\u4EC5\u7528\u4E8E\u5C55\u793A\u72B6\u6001\u8F93\u5165\u4E0E\u8BA1\u7B97\u8F93\u51FA\u7684\u5173\u7CFB\uFF1B\u4E0D\u662F\u6BD4\u8D5B\u5B9E\u6218\u590D\u76D8\u3002</p></aside></div><div class="match-score"><b>4 <i>:</i> 1</b><div><span>\u963F\u5C14\u6CD5\u56F4\u68CB / \u674E\u4E16\u77F3</span><p>\u4E13\u95E8\u4EFB\u52A1\u4E0A\u7684\u91CD\u5927\u7A81\u7834\uFF0C\u4E0D\u662F\u901A\u7528\u667A\u80FD\u6216\u673A\u5668\u610F\u8BC6\u7684\u8BC1\u660E\u3002</p></div></div><div class="game-picker">${Vc.games.map((b,P)=>`<button data-game="${P}" class="${P===0?"active":""}"><span>\u7B2C${P+1}\u5C40 \xB7 ${b.date}</span><b>${b.winner} \u80DC</b></button>`).join("")}</div><div id="game-note" class="game-note"></div>`+Gr([["\u5C40\u9762\u4E0E\u5224\u65AD","\u7B2C\u4E8C\u5C40\u7B2C37\u624B","\u963F\u5C14\u6CD5\u56F4\u68CB\u7684\u4E00\u6B21\u9009\u62E9\u5F15\u8D77\u4E13\u4E1A\u68CB\u624B\u4E0E\u516C\u4F17\u8BA8\u8BBA\u3002\u5B83\u9002\u5408\u8BF4\u660E\u673A\u5668\u7684\u7B56\u7565\u4E0D\u5FC5\u4E0E\u4EBA\u7C7B\u76F4\u89C9\u76F8\u540C\uFF0C\u4F46\u4E0D\u5E94\u88AB\u5305\u88C5\u6210\u673A\u5668\u4EA7\u751F\u60C5\u611F\u3001\u7075\u611F\u6216\u610F\u8BC6\u7684\u8BC1\u636E\u3002"],["\u5931\u8BEF\u4E0E\u8FB9\u754C","\u7B2C\u56DB\u5C40\u7B2C78\u624B","\u674E\u4E16\u77F3\u5728\u7B2C\u56DB\u5C40\u53D6\u80DC\uFF0C\u663E\u793A\u7CFB\u7EDF\u4ECD\u53EF\u80FD\u51FA\u73B0\u5224\u65AD\u4E0E\u641C\u7D22\u4E0A\u7684\u8584\u5F31\u70B9\u3002\u5355\u5C40\u7ED3\u679C\u9700\u8981\u7ED3\u5408\u5C40\u9762\u548C\u540E\u7EED\u53D8\u5316\u7406\u89E3\uFF0C\u4E0D\u80FD\u628A\u4E00\u624B\u68CB\u5F53\u4F5C\u5B8C\u6574\u7B97\u6CD5\u89E3\u91CA\u3002"],["\u7ED3\u679C\u4E0E\u610F\u4E49","\u4ECE\u80DC\u8D1F\u8F6C\u5411\u673A\u5236","\u4E94\u756A\u68CB\u8BA9\u5B66\u4E60\u4E0E\u641C\u7D22\u7684\u7ED3\u5408\u8FDB\u5165\u516C\u4F17\u89C6\u91CE\u3002\u771F\u6B63\u503C\u5F97\u62C6\u89E3\u7684\uFF0C\u662F\u5019\u9009\u5982\u4F55\u4EA7\u751F\u3001\u5C40\u9762\u5982\u4F55\u8BC4\u4EF7\u3001\u5206\u652F\u5982\u4F55\u88AB\u63A2\u7D22\uFF0C\u4EE5\u53CA\u8BAD\u7EC3\u548C\u63A8\u7406\u5982\u4F55\u5206\u5F00\u3002"]])+hl()),d("decision",Hr("02","\u51B3\u7B56\u4E4B\u6838 / 2016\u5E74\u7CFB\u7EDF\u673A\u5236","\u5148\u63D0\u51FA\u5019\u9009\uFF0C<br><em>\u518D\u628A\u8BA1\u7B97\u7528\u5728\u503C\u5F97\u63A2\u7D22\u7684\u5730\u65B9\u3002</em>","\u7B56\u7565\u7F51\u7EDC\u63D0\u4F9B\u843D\u5B50\u503E\u5411\uFF0C\u4EF7\u503C\u7F51\u7EDC\u8BC4\u4F30\u5C40\u9762\uFF0C\u8499\u7279\u5361\u6D1B\u6811\u641C\u7D22\u53CD\u590D\u9009\u62E9\u3001\u6269\u5C55\u3001\u8BC4\u4F30\u548C\u56DE\u4F20\u3002\u5B83\u4E0D\u662F\u201C\u68CB\u76D8\u901A\u8FC7\u4E00\u6B21\u5206\u7C7B\u7F51\u7EDC\u5C31\u5F97\u5230\u6700\u4F73\u843D\u5B50\u201D\u3002")+'<div class="decision-path"><button data-mechanism="policy" class="active">01 \u7B56\u7565\u7F51\u7EDC<small>\u54EA\u4E9B\u843D\u5B50\u503C\u5F97\u8003\u8651\uFF1F</small></button><span>\uFF0B</span><button data-mechanism="value">02 \u4EF7\u503C\u7F51\u7EDC<small>\u5C40\u9762\u5BF9\u8C01\u66F4\u6709\u5229\uFF1F</small></button><span>\u21C4</span><button data-mechanism="search">03 \u6811\u641C\u7D22<small>\u5982\u4F55\u5206\u914D\u63A2\u7D22\u9884\u7B97\uFF1F</small></button></div><div class="decision-detail" id="mechanism-detail"></div><div class="search-experiment"><div class="section-head"><div><span class="eyebrow">\u53EF\u64CD\u4F5C / \u6559\u5B66\u641C\u7D22\u6A21\u578B</span><h2>\u8BA9\u8BC4\u4F30\u7ED3\u679C\uFF0C\u6CBF\u641C\u7D22\u6811\u56DE\u4F20\u3002</h2></div><button id="search-reset">\u91CD\u7F6E\u641C\u7D22 \u21BA</button></div><div class="tree-stage" id="tree-stage"></div><div class="search-actions"><button id="search-step" class="solid-link">\u6267\u884C\u4E0B\u4E00\u9636\u6BB5 \u2192</button><button id="search-cycle">\u8FD0\u884C\u4E00\u6B21\u5B8C\u6574\u5FAA\u73AF</button><span id="search-status" role="status"></span></div><div class="search-table" id="search-table"></div><p class="technical">\u672C\u5B9E\u9A8C\u91C7\u7528\u4EBA\u5DE5\u5148\u9A8C\u4E0E\u5408\u6210\u8BC4\u4F30\u503C\uFF0C\u53EA\u89E3\u91CA\u63A2\u7D22\u3001\u5229\u7528\u4E0E\u56DE\u4F20\u3002\u9009\u62E9\u516C\u5F0F\u4E3A\u7B80\u5316\u6559\u5B66\u5F62\u5F0F\uFF0C\u4E0D\u662F2016\u5E74\u963F\u5C14\u6CD5\u56F4\u68CB\u7684\u5B8C\u6574\u5B9E\u73B0\u3002</p></div>'+Gr([["\u7B56\u7565","\u76D1\u7763\u5B66\u4E60\u4E0E\u5F3A\u5316\u5B66\u4E60","2016\u5E74\u7CFB\u7EDF\u5148\u4ECE\u4EBA\u7C7B\u68CB\u8C31\u5B66\u4E60\u843D\u5B50\uFF0C\u518D\u4F7F\u7528\u5F3A\u5316\u5B66\u4E60\u6539\u8FDB\u7B56\u7565\u3002\u7B56\u7565\u5206\u5E03\u5F15\u5BFC\u641C\u7D22\uFF0C\u5E76\u4E0D\u4FDD\u8BC1\u6700\u9AD8\u5148\u9A8C\u5019\u9009\u6700\u7EC8\u83B7\u9009\u3002"],["\u4EF7\u503C","\u51CF\u5C11\u5BF9\u5B8C\u6574\u7EC8\u5C40\u6A21\u62DF\u7684\u4F9D\u8D56","\u4EF7\u503C\u7F51\u7EDC\u5B66\u4E60\u4F30\u8BA1\u5C40\u9762\u7ED3\u679C\u30022016\u5E74\u7CFB\u7EDF\u8FD8\u7ED3\u5408\u5FEB\u901F\u6A21\u62DF\u7B56\u7565\u7B49\u673A\u5236\uFF1B\u4E0D\u80FD\u628A\u540E\u7EED\u96F6\u8D77\u70B9\u7CFB\u7EDF\u7684\u8BBE\u8BA1\u5168\u90E8\u56DE\u5199\u8FDB2016\u5E74\u3002"],["\u641C\u7D22","\u9009\u62E9\u2014\u6269\u5C55\u2014\u8BC4\u4F30\u2014\u56DE\u4F20","\u641C\u7D22\u4E0D\u662F\u628A\u6574\u68F5\u535A\u5F08\u6811\u7A77\u5C3D\u3002\u5DF2\u6709\u4F30\u8BA1\u4E0E\u8BBF\u95EE\u7EDF\u8BA1\u5F71\u54CD\u540E\u7EED\u8D44\u6E90\u5206\u914D\uFF0C\u66F4\u591A\u8BBF\u95EE\u4E5F\u4E0D\u81EA\u52A8\u6784\u6210\u5BF9\u67D0\u4E00\u843D\u5B50\u7684\u6570\u5B66\u80DC\u5229\u8BC1\u660E\u3002"]])+`<div class="bridge-note"><h3>\u548C\u539F\u6765\u7684\u795E\u7ECF\u7F51\u7EDC\u5C55\u54C1\u6709\u4EC0\u4E48\u5173\u7CFB\uFF1F</h3><p>\u5377\u79EF\u3001\u5F20\u91CF\u4E0E\u6743\u91CD\u5B66\u4E60\u662F\u5171\u540C\u6280\u672F\u8BED\u8A00\u3002\u4F46\u963F\u5C14\u6CD5\u56F4\u68CB\u5904\u7406\u68CB\u76D8\u7279\u5F81\u5E73\u9762\uFF0C\u8F93\u51FA\u7B56\u7565\u6216\u4EF7\u503C\uFF1B\u4E9A\u5386\u514B\u65AF\u7F51\u7EDC\u5904\u7406\u56FE\u50CF\u5E76\u8F93\u51FA\u7C7B\u522B\u3002\u4E8C\u8005\u4E0D\u662F\u540C\u4E00\u4E2A\u7F51\u7EDC\u3002</p><a href="#dimensions">\u5BF9\u7167\u67E5\u770B\u56FE\u50CF\u4E0E\u68CB\u76D8\u8F93\u5165 \u2192</a></div>${hl()}`),d("growth",Hr("04","\u6210\u957F\u7CFB\u7EDF / \u4E09\u7EC4\u53EF\u64CD\u4F5C\u7684\u539F\u7406\u6A21\u578B","\u4E0D\u662F\u957F\u51FA\u4EBA\u683C\uFF0C<br><em>\u800C\u662F\u6539\u53D8\u53C2\u6570\u4E0E\u80FD\u529B\u3002</em>","\u7528\u201C\u5DE5\u5177\u3001\u7EC3\u4E60\u3001\u5BF9\u624B\u201D\u7684\u6210\u957F\u6863\u6848\u8FDE\u63A5\u786C\u4EF6\u3001\u53CD\u9988\u4E0E\u81EA\u6211\u5BF9\u5F08\u3002\u62DF\u4EBA\u53EA\u662F\u4E00\u79CD\u89E3\u91CA\u65B9\u5F0F\uFF0C\u4E0D\u610F\u5473\u7740\u673A\u5668\u62E5\u6709\u4EBA\u7684\u60C5\u7EEA\u3001\u610F\u56FE\u6216\u610F\u8BC6\u3002")+'<div class="growth-tabs"><button data-growth="gpu" class="active">01 \u7EC3\u4E60\u5DE5\u5177 / \u52A0\u901F\u8BA1\u7B97</button><button data-growth="training">02 \u53CD\u9988\u5B66\u4E60 / \u66F4\u65B0\u53C2\u6570</button><button data-growth="selfplay">03 \u81EA\u6211\u5BF9\u5F08 / \u751F\u6210\u7ECF\u9A8C</button></div><div class="museum-exhibit"><div><div id="growth-scene" class="museum-canvas" aria-label="\u8BA1\u7B97\u6A21\u5757\u3001\u8BAD\u7EC3\u5FAA\u73AF\u548C\u53CC\u7B56\u7565\u5BF9\u5F08\u7684\u4E09\u7EF4\u6A21\u578B"></div><div class="museum-scene-controls"><button id="growth-explode" class="solid-link">\u62C6\u5F00\u5F53\u524D\u6A21\u578B</button><span>\u4E09\u7EC4\u539F\u7406\u6A21\u578B \xB7 \u975E\u771F\u5B9E\u8BBE\u5907\u590D\u523B</span></div></div><aside id="growth-info" aria-live="polite" aria-atomic="true"></aside></div><div id="growth-experiment"></div>'+Gr([["\u5DE5\u5177\u4E0D\u662F\u667A\u80FD","\u5E76\u884C\u4E58\u52A0\u4E0E\u6570\u636E\u642C\u8FD0","\u52A0\u901F\u5668\u9002\u5408\u5927\u91CF\u76F8\u4F3C\u6570\u503C\u64CD\u4F5C\uFF0C\u663E\u5B58\u548C\u4E92\u8054\u8D1F\u8D23\u4F9B\u7ED9\u6570\u636E\u3002\u6027\u80FD\u53D6\u51B3\u4E8E\u7B97\u6CD5\u3001\u5E76\u884C\u5EA6\u3001\u5185\u5B58\u5E26\u5BBD\u548C\u8C03\u5EA6\uFF0C\u4E0D\u662F\u53EA\u770B\u82AF\u7247\u6570\u91CF\u3002"],["\u8BAD\u7EC3\u4E0D\u7B49\u4E8E\u6BD4\u8D5B","\u5B66\u4E60\u53C2\u6570\u4E0E\u4F7F\u7528\u53C2\u6570","\u8BAD\u7EC3\u9636\u6BB5\u4F7F\u7528\u6837\u672C\u548C\u53CD\u9988\u6539\u53D8\u6743\u91CD\uFF1B\u6BD4\u8D5B\u9636\u6BB5\u4F7F\u7528\u65E2\u5B9A\u7CFB\u7EDF\u8BC4\u4F30\u5E76\u641C\u7D22\u3002\u6B64\u5904\u7684\u5355\u6743\u91CD\u5E73\u65B9\u8BEF\u5DEE\u5B9E\u9A8C\u4E0D\u662F\u7B56\u7565\u68AF\u5EA6\u6216\u5B8C\u6574\u7F51\u7EDC\u8BAD\u7EC3\u3002"],["2016 \u2260 2017","\u4ECE\u4EBA\u7C7B\u7ECF\u9A8C\u5230\u96F6\u8D77\u70B9\u7814\u7A76","2016\u5E74\u7248\u672C\u4F7F\u7528\u4EBA\u7C7B\u68CB\u8C31\u4E0E\u81EA\u6211\u5BF9\u5F08\u30022017\u5E74\u963F\u5C14\u6CD5\u56F4\u68CB\u96F6\u7248\u672C\u91C7\u7528\u4E0D\u540C\u7684\u5B66\u4E60\u65B9\u6848\uFF0C\u4E0D\u4F9D\u8D56\u4EBA\u7C7B\u68CB\u8C31\uFF1B\u4E0D\u80FD\u5C06\u4E24\u8005\u6DF7\u4E3A\u540C\u4E00\u4E2A\u6D41\u7A0B\u3002"]])+hl(),bt("#experiments-view")),bt("#match-scene").parentElement.insertAdjacentHTML("beforeend",'<div class="part-selector" id="hardware-parts" role="group" aria-label="\u8BA1\u7B97\u7CFB\u7EDF\u90E8\u4EF6\u9009\u62E9"></div>'),bt("#growth-scene").parentElement.insertAdjacentHTML("beforeend",'<div class="part-selector" id="growth-parts" role="group" aria-label="\u6210\u957F\u6A21\u578B\u90E8\u4EF6\u9009\u62E9"></div>'),bt("#match-view .museum-sources").insertAdjacentHTML("beforebegin",ld()),bt("#growth-experiment").insertAdjacentHTML("afterend",'<div id="growth-dossier"></div>'),bt("#machine-explode").setAttribute("aria-pressed","false"),bt("#growth-explode").setAttribute("aria-pressed","false"),bt("#dimensions-view").insertAdjacentHTML("afterbegin",Hr("03","\u7EF4\u5EA6\u89E3\u5256 / \u56FE\u50CF\u4E0E\u68CB\u76D8\u7684\u5BF9\u7167","\u62C6\u5F00\u5E73\u9762\uFF0C<br><em>\u770B\u89C1\u6570\u636E\u5982\u4F55\u7EC4\u7EC7\u3002</em>","\u539F\u4E9A\u5386\u514B\u65AF\u7F51\u7EDC\u4FDD\u7559\u4E3A\u56FE\u50CF\u5377\u79EF\u793A\u4F8B\u3002\u4E0B\u65B9\u5BF9\u7167\u53F0\u5C06\u56FE\u50CF\u989C\u8272\u5E73\u9762\u5207\u6362\u4E3A\u68CB\u76D8\u72B6\u6001\u5E73\u9762\uFF1A\u76F8\u540C\u7684\u5F20\u91CF\u8BED\u8A00\uFF0C\u4E0D\u540C\u7684\u8F93\u5165\u610F\u4E49\u4E0E\u4EFB\u52A1\u8F93\u51FA\u3002")+'<div class="dimension-lab"><div><span class="eyebrow">\u5207\u7247\u4E0E\u901A\u9053 / \u53EF\u64CD\u4F5C\u5BF9\u7167</span><div class="dimension-controls"><button id="dim-image" class="active">\u56FE\u50CF\u989C\u8272\u7F16\u7801</button><button id="dim-board">\u68CB\u76D8\u72B6\u6001\u7F16\u7801</button></div><label>\u5E73\u9762\u5206\u79BB\u91CF<input id="plane-spread" type="range" min="0" max="100" value="35" aria-label="\u5E73\u9762\u5206\u79BB\u91CF"></label><label>\u89C2\u5BDF\u5207\u7247<input id="plane-slice" type="range" min="0" max="2" value="0" step="1" aria-label="\u89C2\u5BDF\u5207\u7247"></label><p id="plane-caption"></p></div><div class="plane-stack" id="plane-stack"><canvas width="240" height="240"></canvas><canvas width="240" height="240"></canvas><canvas width="240" height="240"></canvas></div></div><p class="dimension-boundary">\u68CB\u76D8\u4F7F\u7528\u201C\u9ED1\u68CB\u3001\u767D\u68CB\u3001\u7A7A\u4F4D\u201D\u4E09\u4E2A\u7B80\u5316\u5E73\u9762\uFF0C\u4EC5\u8BF4\u660E\u7F16\u7801\u601D\u60F3\uFF1B2016\u5E74\u539F\u7CFB\u7EDF\u7684\u7279\u5F81\u7F16\u7801\u8FDC\u6BD4\u8FD9\u590D\u6742\u3002\u4E0B\u65B9\u5341\u4E09\u5C42\u6A21\u578B\u4ECD\u662F\u56FE\u50CF\u5206\u7C7B\u793A\u4F8B\uFF0C\u4E0D\u662F\u963F\u5C14\u6CD5\u56F4\u68CB\u7F51\u7EDC\u590D\u523B\u3002</p>'),bt("#experiments-view").insertAdjacentHTML("beforeend",'<section class="boundary-lab"><div class="section-head"><div><span class="eyebrow">05 / \u8FFD\u52A0\u5B9E\u9A8C\u4E0E\u8FB9\u754C</span><h2>\u7B2C\u4E00\u5370\u8C61\uFF0C\u8FD8\u662F\u641C\u7D22\u540E\u7684\u5224\u65AD\uFF1F</h2></div><a class="solid-link" href="#decision">\u8FDB\u5165\u641C\u7D22\u5B9E\u9A8C \u2192</a></div><p>\u5148\u9A8C\u503E\u5411\u53EA\u662F\u5019\u9009\u8D77\u70B9\u3002\u524D\u5F80\u51B3\u7B56\u4E4B\u6838\u9010\u6B21\u5206\u914D\u63A2\u7D22\u9884\u7B97\uFF0C\u5BF9\u6BD4\u8BBF\u95EE\u6B21\u6570\u4E0E\u5E73\u5747\u8BC4\u4F30\u503C\uFF0C\u89C2\u5BDF\u641C\u7D22\u662F\u5426\u6539\u53D8\u5019\u9009\u6392\u5E8F\u3002</p>'+Gr([["\u53EF\u9760\u6027","\u6982\u7387\u4E0D\u662F\u627F\u8BFA","\u5F52\u4E00\u5316\u5206\u5E03\u53D7\u5019\u9009\u7C7B\u522B\u3001\u8F93\u5165\u3001\u8BAD\u7EC3\u4E0E\u6821\u51C6\u5F71\u54CD\u3002\u6700\u5927\u6982\u7387\u4E0D\u7B49\u4E8E\u4E00\u5B9A\u6B63\u786E\uFF0C\u6559\u5B66\u5206\u6570\u66F4\u4E0D\u80FD\u5F53\u4F5C\u771F\u5B9E\u8BC6\u522B\u7ED3\u679C\u3002"],["\u4E13\u7528\u667A\u80FD","\u6BD4\u8D5B\u83B7\u80DC\u4E0D\u7B49\u4E8E\u901A\u7528\u80FD\u529B","\u56F4\u68CB\u89C4\u5219\u660E\u786E\u3001\u53CD\u9988\u660E\u786E\u3002\u5BF9\u56F4\u68CB\u7684\u9AD8\u6C34\u5E73\u4E0D\u81EA\u52A8\u610F\u5473\u7740\u7CFB\u7EDF\u80FD\u7406\u89E3\u6240\u6709\u73B0\u5B9E\u95EE\u9898\uFF0C\u66F4\u4E0D\u80FD\u8BC1\u660E\u610F\u8BC6\u3002"],["\u5B9E\u73B0\u8FB9\u754C","\u5C55\u793A\u3001\u5C40\u90E8\u8BA1\u7B97\u4E0E\u771F\u5B9E\u63A8\u7406","\u4E09\u7EF4\u7ED3\u6784\u3001\u7C92\u5B50\u8DEF\u5F84\u4E0E\u5386\u53F2\u786C\u4EF6\u4E3A\u539F\u7406\u8868\u8FBE\uFF1B\u5C40\u90E8\u5C0F\u5B9E\u9A8C\u6267\u884C\u6570\u503C\u8FD0\u7B97\uFF1B\u5168\u7CFB\u7EDF\u6CA1\u6709\u52A0\u8F7D\u5386\u53F2\u6A21\u578B\u6743\u91CD\u3002"]])+"</section>");let m=[["1950","\u673A\u5668\u80FD\u5426\u8868\u73B0\u51FA\u667A\u80FD\uFF1F","\u56FE\u7075\u4ECE\u53EF\u89C2\u5BDF\u7684\u884C\u4E3A\u51FA\u53D1\u8BA8\u8BBA\u673A\u5668\u667A\u80FD\u3002\u8FD9\u91CC\u4E0D\u628A\u667A\u80FD\u8868\u73B0\u548C\u4E3B\u89C2\u610F\u8BC6\u6DF7\u4E3A\u4E00\u8C08\u3002"],["1956","\u4EBA\u5DE5\u667A\u80FD\u6210\u4E3A\u4E00\u4E2A\u7814\u7A76\u65B9\u5411","\u8FBE\u7279\u8305\u65AF\u590F\u5B63\u7814\u7A76\u9879\u76EE\u6210\u4E3A\u8FD9\u4E00\u9886\u57DF\u7684\u5386\u53F2\u8282\u70B9\uFF1B\u4E4B\u540E\u89C4\u5219\u3001\u63A8\u7406\u3001\u641C\u7D22\u4E0E\u5B66\u4E60\u8DEF\u7EBF\u957F\u671F\u5E76\u884C\u3002"],["1980\u20141998","\u5C40\u90E8\u8FDE\u63A5\u4E0E\u5B66\u4E60\u65B9\u6CD5\u79EF\u7D2F","\u4ECE\u65B0\u8BA4\u77E5\u673A\u5230\u5377\u79EF\u624B\u5199\u8BC6\u522B\uFF0C\u591A\u5C42\u89C6\u89C9\u8868\u793A\u9010\u6B65\u8D70\u5411\u5B9E\u9645\u5E94\u7528\u3002"],["1997","\u4E13\u7528\u7CFB\u7EDF\u5728\u56FD\u9645\u8C61\u68CB\u4E0A\u7A81\u7834","\u6DF1\u84DD\u4F9D\u9760\u4E13\u95E8\u8BBE\u8BA1\u7684\u641C\u7D22\u3001\u8BC4\u4F30\u4E0E\u8BA1\u7B97\u8D44\u6E90\u6218\u80DC\u5361\u65AF\u5E15\u7F57\u592B\u3002\u56F4\u68CB\u7684\u5C40\u9762\u8BC4\u4EF7\u4E0E\u5206\u652F\u89C4\u6A21\u4ECD\u63D0\u51FA\u4E0D\u540C\u6311\u6218\u3002"],["2009\u20142012","\u6570\u636E\u3001\u7B97\u529B\u4E0E\u6DF1\u5EA6\u7F51\u7EDC\u6C47\u5408","\u5927\u89C4\u6A21\u56FE\u50CF\u6570\u636E\u4E0E\u5E76\u884C\u8BA1\u7B97\u63A8\u52A8\u89C6\u89C9\u5B66\u4E60\u3002\u4E9A\u5386\u514B\u65AF\u7F51\u7EDC\u662F\u91CD\u8981\u91CC\u7A0B\u7891\uFF0C\u800C\u4E0D\u662F\u6DF1\u5EA6\u5B66\u4E60\u7684\u53D1\u660E\u3002"],["2016","\u5B66\u4E60\u4E0E\u641C\u7D22\uFF0C\u8D70\u5230\u68CB\u76D8\u4E2D\u592E","\u7B56\u7565\u7F51\u7EDC\u3001\u4EF7\u503C\u7F51\u7EDC\u548C\u8499\u7279\u5361\u6D1B\u6811\u641C\u7D22\u7ED3\u5408\u3002\u4E09\u6708\u9996\u5C14\u4E94\u756A\u68CB\uFF0C\u963F\u5C14\u6CD5\u56F4\u68CB\u4EE54\u6BD41\u6218\u80DC\u674E\u4E16\u77F3\u3002"]];function _(){let b=Vc.games[n],P=ad[n];bt("#game-note").innerHTML=`<span>\u7B2C${n+1}\u5C40 \xB7 2016\u5E74${b.date}</span><h3>${b.winner} \u80DC</h3><p>${b.note}</p><div class="game-analysis"><div><h4>${P[0]}</h4><p>${P[1]}</p></div><div><h4>\u5E26\u7740\u8FD9\u4E2A\u95EE\u9898\u7EE7\u7EED\u770B</h4><p>${P[2]}</p></div></div><small>\u4E0A\u65B9\u4E09\u7EF4\u68CB\u5F62\u4E3A\u7EDF\u4E00\u5408\u6210\u793A\u4F8B\uFF0C\u5207\u6362\u5BF9\u5C40\u4EC5\u6539\u53D8\u5386\u53F2\u8BB2\u89E3\uFF0C\u4E0D\u5192\u5145\u5BF9\u5E94\u5B9E\u6218\u5C40\u9762\u3002</small>`}document.querySelectorAll("[data-game]").forEach(b=>b.onclick=()=>{n=+b.dataset.game,document.querySelectorAll("[data-game]").forEach(P=>P.classList.toggle("active",P===b)),_()}),_(),bt("#machine-explode").onclick=b=>{let P=r.explode();b.target.textContent=P?"\u6062\u590D\u8BA1\u7B97\u7CFB\u7EDF":"\u62C6\u89E3\u8BA1\u7B97\u7CFB\u7EDF",b.target.setAttribute("aria-pressed",P)};let v={policy:["\u7B56\u7565\u7F51\u7EDC","\u68CB\u76D8\u72B6\u6001 \u2192 \u5377\u79EF\u8868\u793A \u2192 \u843D\u5B50\u5206\u5E03","\u5728\u5408\u6CD5\u843D\u70B9\u4E2D\u5F62\u6210\u76F8\u5BF9\u503E\u5411\uFF0C\u5F15\u5BFC\u641C\u7D22\u4F18\u5148\u63A2\u7D22\u3002\u5206\u5E03\u6765\u81EA\u5C40\u9762\u8BC4\u4F30\uFF0C\u4E0D\u662F\u9010\u9879\u624B\u5199\u7684\u68CB\u5F62\u89C4\u5219\u3002"],value:["\u4EF7\u503C\u7F51\u7EDC","\u68CB\u76D8\u72B6\u6001 \u2192 \u5C40\u9762\u8868\u793A \u2192 \u7ED3\u679C\u4F30\u8BA1","\u4F30\u8BA1\u5C40\u9762\u5BF9\u5F53\u524D\u68CB\u624B\u7684\u6709\u5229\u7A0B\u5EA6\u3002\u5B83\u4E0D\u8F93\u51FA\u5B8C\u6574\u7684\u6700\u4F73\u540E\u7EED\u53D8\u5316\uFF0C\u4E5F\u4E0D\u4FDD\u8BC1\u6BD4\u8D5B\u7ED3\u679C\u3002"],search:["\u8499\u7279\u5361\u6D1B\u6811\u641C\u7D22","\u9009\u62E9 \u2192 \u6269\u5C55 \u2192 \u8BC4\u4F30 \u2192 \u56DE\u4F20 \u2192 \u518D\u9009\u62E9","\u53CD\u590D\u66F4\u65B0\u8BBF\u95EE\u7EDF\u8BA1\u4E0E\u8BC4\u4F30\uFF0C\u517C\u987E\u5DF2\u6709\u9AD8\u503C\u5206\u652F\u548C\u63A2\u7D22\u4E0D\u8DB3\u7684\u5206\u652F\u3002\u8BA1\u7B97\u9884\u7B97\u6709\u9650\uFF0C\u56E0\u6B64\u8D44\u6E90\u5206\u914D\u672C\u8EAB\u5F88\u91CD\u8981\u3002"]};function g(b){let[P,M,S]=v[b];bt("#mechanism-detail").innerHTML=`<div class="mechanism-symbol" aria-hidden="true">${b==="policy"?"\u03C0":b==="value"?"V":"\u219F"}</div><div><span>\u51B3\u7B56\u673A\u5236 / \u975E\u5386\u53F2\u6743\u91CD\u63A8\u7406</span><h2>${P}</h2><div class="formula">${M}</div><p>${S}</p></div>`}document.querySelectorAll("[data-mechanism]").forEach(b=>b.onclick=()=>{g(b.dataset.mechanism),document.querySelectorAll("[data-mechanism]").forEach(P=>P.classList.toggle("active",P===b))}),g("policy");function u(){let b=i.visits.reduce((P,M)=>P+M,0);bt("#tree-stage").innerHTML=`<svg viewBox="0 0 760 280" role="img" aria-label="\u4E09\u4E2A\u5019\u9009\u5206\u652F\u7684\u641C\u7D22\u6811"><g class="tree-lines">${[140,380,620].map((P,M)=>`<path class="${i.selected===M?"chosen":""}" d="M380 55 Q380 100 ${P} 160"/>${[-55,0,55].map(S=>`<path d="M${P} 170 L${P+S} 245"/>`).join("")}`).join("")}</g><g><circle cx="380" cy="45" r="25" class="root"/><text x="380" y="50">\u5C40\u9762</text>${[140,380,620].map((P,M)=>`<circle cx="${P}" cy="165" r="30" class="${i.selected===M?"chosen":""}"/><text x="${P}" y="162">${["\u7532","\u4E59","\u4E19"][M]}</text><text x="${P}" y="181" class="stat">\u8BBF\u95EE ${i.visits[M]}</text>${[-55,0,55].map(S=>`<circle cx="${P+S}" cy="247" r="9"/>`).join("")}`).join("")}</g></svg>`,bt("#search-status").textContent=`\u4E0B\u4E00\u9636\u6BB5\uFF1A${id[i.phase]} \xB7 \u5DF2\u56DE\u4F20 ${b} \u6B21`,bt("#search-table").innerHTML=[0,1,2].map(P=>`<div><b>\u5019\u9009${["\u7532","\u4E59","\u4E19"][P]}</b><span>\u5148\u9A8C ${(i.prior[P]*100).toFixed(0)}%</span><span>\u8BBF\u95EE ${i.visits[P]}</span><strong>\u5747\u503C ${i.values[P].toFixed(3)}</strong></div>`).join("")}bt("#search-step").onclick=()=>{i=Gc(i),u()},bt("#search-cycle").onclick=()=>{for(let b=0;b<4;b++)i=Gc(i);u()},bt("#search-reset").onclick=()=>{i=Hc(),u()},u();let T={gpu:["\u7EC3\u4E60\u5DE5\u5177 / \u52A0\u901F\u8BA1\u7B97","\u62C6\u5F00\u7684\u662F\u56FE\u5F62\u52A0\u901F\u5668\u539F\u7406\u7ED3\u6784","\u4ECE\u5E95\u677F\u3001\u8BA1\u7B97\u6838\u5FC3\u3001\u5B58\u50A8\u6A21\u5757\u5230\u6563\u70ED\u7ED3\u6784\u3002\u70B9\u51FB\u201C\u62C6\u5F00\u5F53\u524D\u6A21\u578B\u201D\u5206\u79BB\u90E8\u4EF6\uFF1B\u6B64\u56FE\u4E0D\u590D\u523B2016\u5E74\u7684\u5177\u4F53\u663E\u5361\u6216\u670D\u52A1\u5668\u3002"],training:["\u53CD\u9988\u5B66\u4E60 / \u7B80\u5316\u68AF\u5EA6\u66F4\u65B0","\u628A\u8BEF\u5DEE\u53CD\u9988\u7ED9\u53C2\u6570","\u6F14\u793A\u5355\u4E2A\u6743\u91CD\u7684\u5E73\u65B9\u8BEF\u5DEE\u66F4\u65B0\u3002\u8F93\u51650.8\u3001\u76EE\u68070.9\uFF0C\u9010\u6B65\u8C03\u6574\u6743\u91CD\uFF1B\u8FD9\u662F\u771F\u5B9E\u6570\u503C\u8BA1\u7B97\uFF0C\u4F46\u4E0D\u662F\u5B8C\u6574\u795E\u7ECF\u7F51\u7EDC\u8BAD\u7EC3\u3002"],selfplay:["\u81EA\u6211\u5BF9\u5F08 / \u751F\u6210\u7ECF\u9A8C","\u540C\u4E00\u89C4\u5219\u4E0B\uFF0C\u7B56\u7565\u6210\u4E3A\u5BF9\u624B","\u4E24\u4FA7\u7ED3\u6784\u8868\u793A\u7B56\u7565\u5B9E\u4F8B\uFF0C\u5171\u4EAB\u7684\u68CB\u76D8\u4EA7\u751F\u5BF9\u5C40\u53CD\u9988\u3002\u52A8\u753B\u4EC5\u8BF4\u660E\u4EA4\u4E92\u5173\u7CFB\uFF0C\u4E0D\u5305\u542B\u68CB\u529B\uFF0C\u4E0D\u6267\u884C\u5408\u6CD5\u843D\u5B50\u3001\u63D0\u5B50\u6216\u80DC\u8D1F\u5224\u5B9A\u3002"]};function C(){let[b,P,M]=T[e];if(bt("#growth-info").classList.remove("component-inspector"),delete bt("#growth-info").dataset.part,bt("#growth-dossier").innerHTML=cd(e),bt("#growth-info").innerHTML=`<span>${b}</span><h3>${P}</h3><p>${M}</p><p>\u201C\u6210\u957F\u201D\u53EA\u6307\u8BAD\u7EC3\u53C2\u6570\u53CA\u4EFB\u52A1\u80FD\u529B\u7684\u53D8\u5316\uFF0C\u4E0D\u662F\u83B7\u5F97\u4EBA\u7684\u4E3B\u89C2\u4F53\u9A8C\u3002</p>`,o(e),bt("#growth-experiment").innerHTML=e==="training"?'<div class="training-panel"><div><span>\u8F93\u51650.8 \xB7 \u76EE\u68070.9 \xB7 \u5355\u6743\u91CD\u5E73\u65B9\u8BEF\u5DEE</span><h3>\u8BEF\u5DEE\u4E0B\u964D\uFF0C\u4F46\u4E0D\u610F\u5473\u7740\u5B66\u4F1A\u4E86\u56F4\u68CB\u3002</h3><button id="train-step" class="solid-link">\u66F4\u65B0\u4E00\u6B21\u53C2\u6570</button><button id="train-reset">\u91CD\u7F6E\u8BAD\u7EC3</button></div><div class="training-values"><b id="train-epoch"></b><strong id="train-error"></strong><span id="train-weight"></span><span id="train-prediction"></span></div></div>':`<div class="bridge-note"><h3>${e==="gpu"?"\u62C6\u89E3\u540E\u8BF7\u89C2\u5BDF\u4E09\u4E2A\u95EE\u9898":"\u539F\u7248\u4E0E\u96F6\u8D77\u70B9\u7CFB\u7EDF\uFF0C\u4E0D\u662F\u540C\u4E00\u6761\u8D77\u8DD1\u7EBF"}</h3><p>${e==="gpu"?"\u8BA1\u7B97\u5728\u54EA\u91CC\u53D1\u751F\uFF1F\u53C2\u6570\u5B58\u5728\u54EA\u91CC\uFF1F\u70ED\u91CF\u5982\u4F55\u79BB\u5F00\uFF1F\u786C\u4EF6\u90E8\u4EF6\u7684\u5F62\u72B6\u53EA\u662F\u539F\u7406\u8868\u8FBE\uFF0C\u8BAD\u7EC3\u901F\u5EA6\u4ECD\u9700\u5B9E\u9645\u6D4B\u8BD5\u3002":"2016\u5E74\u7CFB\u7EDF\u5148\u4F7F\u7528\u4EBA\u7C7B\u68CB\u8C31\u5E76\u8FDB\u884C\u81EA\u6211\u5BF9\u5F08\u5B66\u4E60\u30022017\u5E74\u96F6\u7248\u672C\u4ECE\u81EA\u6211\u5BF9\u5F08\u5B66\u4E60\uFF0C\u91C7\u7528\u4E0D\u540C\u65B9\u6848\u3002\u672C\u5C55\u533A\u53EA\u89E3\u91CA\u53CD\u9988\u5FAA\u73AF\uFF0C\u4E0D\u58F0\u79F0\u590D\u73B0\u4EFB\u4E00\u7CFB\u7EDF\u3002"}</p></div>`,e==="training"){let S=()=>{bt("#train-epoch").textContent=`\u7B2C ${t.epoch} \u6B21\u66F4\u65B0`,bt("#train-error").textContent=`\u8BEF\u5DEE ${t.error.toFixed(6)}`,bt("#train-weight").textContent=`\u6743\u91CD ${t.weight.toFixed(6)}`,bt("#train-prediction").textContent=`\u5F53\u524D\u9884\u6D4B ${(t.weight*.8).toFixed(6)} \xB7 \u76EE\u6807 0.9`};bt("#train-step").onclick=()=>{t=sd(t),S()},bt("#train-reset").onclick=()=>{t={...Wc},S()},S()}}document.querySelectorAll("[data-growth]").forEach(b=>b.onclick=()=>{e=b.dataset.growth,document.querySelectorAll("[data-growth]").forEach(P=>P.classList.toggle("active",P===b)),r.show(bt("#growth-scene"),e),bt("#growth-explode").textContent="\u62C6\u5F00\u5F53\u524D\u6A21\u578B",bt("#growth-explode").setAttribute("aria-pressed","false"),C()}),bt("#growth-explode").onclick=b=>{let P=r.explode();b.target.textContent=P?"\u6062\u590D\u5F53\u524D\u6A21\u578B":"\u62C6\u5F00\u5F53\u524D\u6A21\u578B",b.target.setAttribute("aria-pressed",String(P))},C();let y="image";function E(){let b=+bt("#plane-spread").value,P=+bt("#plane-slice").value,M=y==="image"?["\u7EA2\u8272","\u7EFF\u8272","\u84DD\u8272"]:["\u9ED1\u68CB","\u767D\u68CB","\u7A7A\u4F4D"];document.querySelectorAll("#plane-stack canvas").forEach((S,U)=>{let O=S.getContext("2d");O.clearRect(0,0,240,240),O.fillStyle=["#392328","#183f35","#20334d"][U],O.fillRect(0,0,240,240);for(let W=0;W<19;W++)for(let H=0;H<19;H++){let q=al.find(nt=>nt[0]===H&&nt[1]===W),G=y==="board"?U===2?!q:q&&q[2]===U:Math.sin(H*.25+U)*Math.cos(W*.21-U)>.1;O.fillStyle=G?["#de9c99","#8bc8ae","#8caedd"][U]:"#152536",O.fillRect(6+H*12,6+W*12,10,10)}O.fillStyle="#e2edf2",O.font="14px sans-serif",O.fillText(M[U]+"\u5E73\u9762",12,225),S.style.transform=`translate(${(U-1)*b*.65}px,${(U-1)*b*.24}px) rotateY(-28deg) rotateX(13deg)`,S.style.opacity=U===P?"1":".43",S.style.zIndex=U===P?5:U}),bt("#plane-caption").textContent=`\u5F53\u524D\u5207\u7247\uFF1A${M[P]}\u5E73\u9762\u3002${y==="board"?"19\xD719\u7B80\u5316\u72B6\u6001\u7F16\u7801\uFF0C\u4E0D\u662F\u539F\u59CB\u5B8C\u6574\u7279\u5F81\u3002":"\u5408\u6210\u901A\u9053\u7EB9\u7406\u7528\u4E8E\u8BF4\u660E\u5E73\u9762\u7EC4\u7EC7\uFF0C\u4E0D\u662F\u539F\u59CB\u7167\u7247\u50CF\u7D20\u3002"}`}bt("#dim-image").onclick=()=>{y="image",bt("#dim-image").classList.add("active"),bt("#dim-board").classList.remove("active"),E()},bt("#dim-board").onclick=()=>{y="board",bt("#dim-board").classList.add("active"),bt("#dim-image").classList.remove("active"),E()},bt("#plane-spread").oninput=bt("#plane-slice").oninput=E,E();let R=fd(r);return{show(b){R.hide(),r.hide(),b==="origins"&&R.show(),b==="match"&&(r.show(bt("#match-scene"),"match"),bt("#machine-explode").textContent="\u62C6\u89E3\u8BA1\u7B97\u7CFB\u7EDF",bt("#machine-explode").setAttribute("aria-pressed","false"),o("match")),b==="growth"&&(r.show(bt("#growth-scene"),e),bt("#growth-explode").textContent="\u62C6\u5F00\u5F53\u524D\u6A21\u578B",bt("#growth-explode").setAttribute("aria-pressed","false"),C())},dispose(){r.dispose()}}}var ul=[{name:"\u901A\u9053\u5206\u79BB",tag:"\u56FE\u50CF\u7F16\u7801",goal:"\u5206\u522B\u67E5\u770B\u7EA2\u3001\u7EFF\u3001\u84DD\u4E09\u4E2A\u901A\u9053\uFF0C\u89C2\u5BDF\u540C\u4E00\u56FE\u50CF\u7684\u6570\u503C\u7EC4\u6210\u3002",hint:"\u4F9D\u6B21\u70B9\u51FB\u4E09\u4E2A\u989C\u8272\u901A\u9053\uFF1B\u5408\u6210\u56FE\u4E0D\u8BA1\u4F5C\u72EC\u7ACB\u901A\u9053\u3002",layer:0},{name:"\u5377\u79EF\u626B\u63CF",tag:"\u5C40\u90E8\u611F\u53D7\u91CE",goal:"\u628A\u5377\u79EF\u7A97\u53E3\u79FB\u5230\u81F3\u5C11\u4E24\u4E2A\u4E0D\u540C\u4F4D\u7F6E\uFF0C\u6BD4\u8F83\u8F93\u51FA\u54CD\u5E94\u3002",hint:"\u79FB\u52A8\u4E0B\u65B9\u6ED1\u6761\uFF0C\u6216\u70B9\u51FB\u8F93\u5165\u77E9\u9635\u3002\u81F3\u5C11\u626B\u63CF\u4E24\u4E2A\u4E0D\u540C\u7A97\u53E3\u3002",layer:1},{name:"\u6700\u5927\u6C60\u5316",tag:"\u54CD\u5E94\u4FDD\u7559",goal:"\u5728\u8FD9\u4E2A\u5C40\u90E8\u7A97\u53E3\u4E2D\uFF0C\u9009\u51FA\u5E94\u88AB\u4FDD\u7559\u7684\u6700\u5927\u503C\u3002",hint:"\u6BD4\u8F83\u5168\u90E8\u4E5D\u4E2A\u6570\u503C\uFF0C\u6700\u5927\u503C\u662F 7\uFF1B\u5E76\u975E\u9009\u62E9\u4E2D\u5FC3\u4F4D\u7F6E\u3002",layer:2},{name:"\u5F20\u91CF\u5C55\u5E73",tag:"\u7D22\u5F15\u91CD\u6392",goal:"\u6267\u884C\u4E00\u6B21\u5C55\u5E73\uFF0C\u518D\u5224\u65AD\u5143\u7D20\u6570\u91CF\u662F\u5426\u53D1\u751F\u6539\u53D8\u3002",hint:"\u5C55\u5E73\u53EA\u6539\u53D8\u7D22\u5F15\u7EC4\u7EC7\u65B9\u5F0F\u3002\u5148\u6267\u884C\u91CD\u6392\uFF0C\u518D\u56DE\u7B54\u95EE\u9898\u3002",layer:8},{name:"\u6743\u91CD\u8C03\u8282",tag:"\u7EBF\u6027\u7EC4\u5408\u4E0E\u6574\u6D41",goal:"\u8C03\u8282\u8FDE\u63A5\u6743\u91CD\uFF0C\u8BA9\u6574\u6D41\u540E\u7684\u8F93\u51FA\u6070\u597D\u53D8\u6210 0\u3002",hint:"\u5148\u8BA9\u52A0\u6743\u548C\u4E0D\u5927\u4E8E 0\u3002\u6574\u6D41\u51FD\u6570\u4F1A\u628A\u8D1F\u503C\u622A\u65AD\u4E3A 0\u3002",layer:9},{name:"\u6982\u7387\u7ADE\u4E89",tag:"\u5F52\u4E00\u5316\u5206\u5E03",goal:"\u8C03\u8282\u7B2C\u4E00\u7C7B\u5206\u6570\uFF0C\u4F7F\u5176\u5F52\u4E00\u5316\u6982\u7387\u8FBE\u5230 80% \u6216\u66F4\u9AD8\u3002",hint:"\u63D0\u9AD8\u7B2C\u4E00\u9879\u5206\u6570\uFF0C\u89C2\u5BDF\u5176\u4F59\u6982\u7387\u4E00\u8D77\u4E0B\u964D\u3002\u5206\u6570\u4E0D\u7B49\u4E8E\u6982\u7387\u3002",layer:12}];function Ki(){return{index:0,completed:[],channels:[],scans:[],flattened:!1,weight:1,score:2,passed:!1,feedback:"\u7B49\u5F85\u64CD\u4F5C\u3002"}}var Ws=(i,t)=>({...i,passed:!0,completed:[...new Set([...i.completed,i.index])],feedback:t});function md(i,t,e){let n={...i};if(t==="reset")return Ki();if(t==="retry")return{...Ki(),index:n.index,completed:n.completed.filter(s=>s!==n.index)};if(t==="next")return n.passed&&n.index<5?{...Ki(),index:n.index+1,completed:n.completed}:n;if(n.index===0&&t==="channel"&&["red","green","blue"].includes(e)&&(n.channels=[...new Set([...n.channels,e])],n.feedback=`\u5DF2\u89C2\u5BDF ${n.channels.length} / 3 \u4E2A\u901A\u9053\u3002`,n.channels.length===3))return Ws(n,"\u901A\u9053\u5206\u79BB\u5B8C\u6210\u3002\u5F69\u8272\u56FE\u50CF\u7531\u7A7A\u95F4\u5BF9\u9F50\u7684\u4E09\u4E2A\u989C\u8272\u901A\u9053\u7EC4\u6210\u3002");if(n.index===1&&t==="scan"&&Number.isInteger(e)&&e>=0&&e<=8&&(n.scans=[...new Set([...n.scans,e])],n.feedback=`\u5DF2\u626B\u63CF ${n.scans.length} \u4E2A\u4E0D\u540C\u7A97\u53E3\u3002`,n.scans.length>=2))return Ws(n,"\u5377\u79EF\u626B\u63CF\u5B8C\u6210\u3002\u540C\u4E00\u7EC4\u6743\u91CD\u5728\u4E0D\u540C\u4F4D\u7F6E\u91CD\u590D\u5E94\u7528\uFF0C\u8F93\u51FA\u968F\u5C40\u90E8\u8F93\u5165\u53D8\u5316\u3002");if(n.index===2&&t==="pool"&&(n.feedback=e===7?"":"\u8FD9\u4E2A\u503C\u4E0D\u662F\u5C40\u90E8\u6700\u5927\u503C\uFF0C\u8BF7\u518D\u6B21\u6BD4\u8F83\u3002",e===7))return Ws(n,"\u6700\u5927\u6C60\u5316\u8F93\u51FA\u4E3A 7\u3002\u7A7A\u95F4\u7A97\u53E3\u7F29\u5C0F\uFF0C\u5C40\u90E8\u6700\u5927\u54CD\u5E94\u88AB\u4FDD\u7559\u3002");if(n.index===3&&t==="flatten"&&(n.flattened=!0,n.feedback="\u91CD\u6392\u5B8C\u6210\uFF1A2\xD73 \u5F20\u91CF \u2192 \u957F\u5EA6\u4E3A 6 \u7684\u5411\u91CF\u3002\u8BF7\u5224\u65AD\u5143\u7D20\u6570\u91CF\u3002"),n.index===3&&t==="answer")if(!n.flattened)n.feedback="\u8BF7\u5148\u6267\u884C\u5C55\u5E73\uFF0C\u518D\u5224\u65AD\u3002";else{if(e==="same")return Ws(n,"\u5C55\u5E73\u5B8C\u6210\u3002\u6392\u5217\u6539\u53D8\uFF0C\u4F46\u516D\u4E2A\u6570\u503C\u53CA\u5176\u6570\u91CF\u90FD\u672A\u6539\u53D8\u3002");n.feedback="\u6CE8\u610F\uFF1A\u5C55\u5E73\u6CA1\u6709\u6DFB\u52A0\u6216\u5220\u9664\u6570\u503C\uFF0C\u8BF7\u518D\u89C2\u5BDF\u3002"}if(n.index===4&&t==="weight"&&Number.isFinite(e)){n.weight=e;let s=ii([.8,-.4,.6],[e,.5,-.2])+.1;if(n.feedback=`\u52A0\u6743\u548C ${s.toFixed(3)} \u2192 \u6574\u6D41\u8F93\u51FA ${Math.max(0,s).toFixed(3)}`,s<=0)return Ws(n,"\u8F93\u51FA\u5F52\u96F6\uFF1A\u6574\u6D41\u51FD\u6570\u622A\u65AD\u975E\u6B63\u8F93\u5165\uFF0C\u800C\u4E0D\u662F\u628A\u8FDE\u63A5\u6743\u91CD\u5168\u90E8\u6E05\u7A7A\u3002")}if(n.index===5&&t==="score"&&Number.isFinite(e)){n.score=e;let s=Gs([e,1,.4,-.1])[0];if(n.feedback=`\u7B2C\u4E00\u7C7B\u6982\u7387 ${(s*100).toFixed(1)}%\uFF0C\u76EE\u6807\u81F3\u5C11 80%\u3002`,s>=.8)return Ws(n,"\u5F52\u4E00\u5316\u5B9E\u9A8C\u5B8C\u6210\u3002\u63D0\u9AD8\u4E00\u4E2A\u7C7B\u522B\u7684\u5206\u6570\uFF0C\u4F1A\u6539\u53D8\u6240\u6709\u7C7B\u522B\u7684\u76F8\u5BF9\u6982\u7387\u3002")}return n}var zn=i=>document.querySelector(i);function gd({onModel:i,inspect:t}){let e=pd(),n=kc(location.hash),s=Ki(),r="all",a=0,o=!1,l=null;function c(){n=kc(location.hash);for(let[v]of kr){document.getElementById(v+"-view").hidden=v!==n;let g=document.getElementById("nav-"+v);v===n?g.setAttribute("aria-current","page"):g.removeAttribute("aria-current")}e.show(n),i(n==="dimensions"),n==="dimensions"&&l!==null&&(t(l),l=null),n==="experiments"&&m(),window.scrollTo({top:0,behavior:"instant"})}window.addEventListener("hashchange",c),document.querySelectorAll(".main-nav a").forEach((v,g,u)=>v.addEventListener("keydown",T=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(T.key))return;T.preventDefault();let C=T.key==="Home"?0:T.key==="End"?u.length-1:(g+(T.key==="ArrowRight"?1:u.length-1))%u.length;u[C].focus(),location.hash=u[C].hash}));function h(v,g){s=md(s,v,g),m()}function d(){let v=Math.floor(a/3),g=a%3;return Array.from({length:9},(u,T)=>Math.round((Math.sin((T%3+g)*.7)+Math.cos((Math.floor(T/3)+v)*.9)+2)*2)/10)}function f(){let v=s.index;if(v===0)return`<div class="lab-image-wrap"><canvas id="lab-image" width="384" height="384" aria-label="\u989C\u8272\u901A\u9053\u793A\u4F8B"></canvas><div class="image-metadata"><span>\u6F14\u793A\u8F93\u5165</span><b>\u4E09\u901A\u9053\u989C\u8272\u7F16\u7801</b><p>\u901A\u9053\u53EA\u6539\u53D8\u663E\u793A\u65B9\u5F0F\uFF0C\u5E76\u672A\u8BC6\u522B\u56FE\u50CF\u5185\u5BB9\u3002</p><div class="channel-status">${["red","green","blue"].map((u,T)=>`<span class="${s.channels.includes(u)?"seen":""}">${["\u7EA2","\u7EFF","\u84DD"][T]} ${s.channels.includes(u)?"\u5DF2\u67E5\u770B":"\u5F85\u67E5\u770B"}</span>`).join("")}</div></div></div><div class="lab-controls">${[["all","\u5408\u6210\u56FE\u50CF"],["red","\u7EA2\u8272\u901A\u9053"],["green","\u7EFF\u8272\u901A\u9053"],["blue","\u84DD\u8272\u901A\u9053"]].map(([u,T])=>`<button data-channel="${u}" class="${r===u?"chosen":""}">${T}</button>`).join("")}</div>`;if(v===1){let u=Math.floor(a/3),T=a%3,C=d(),y=[-1,0,1,-2,0,2,-1,0,1];return`<div class="scan-layout"><div><div class="lab-caption">\u5408\u6210\u8F93\u5165\u77E9\u9635 \xB7 5 \xD7 5</div><div class="input-matrix">${Array.from({length:25},(E,R)=>{let b=Math.floor(R/5),P=R%5;return`<button class="${b>=u&&b<u+3&&P>=T&&P<T+3?"in-window":""}" data-scan="${Math.min(2,b)*3+Math.min(2,P)}" aria-label="\u4ECE\u7B2C${b+1}\u884C\u7B2C${P+1}\u5217\u9644\u8FD1\u626B\u63CF">${(Math.round((Math.sin(P*.7)+Math.cos(b*.9)+2)*2)/10).toFixed(1)}</button>`}).join("")}</div></div><div><div class="lab-caption">\u5171\u4EAB\u5377\u79EF\u6838 \xB7 3 \xD7 3</div><div class="kernel-matrix">${y.map(E=>`<span>${E}</span>`).join("")}</div><div class="lab-calculation">\u52A0\u6743\u548C <b>${ii(C,y).toFixed(3)}</b><small>\u4E5D\u9879\u76F8\u4E58\u540E\u6C42\u548C\uFF0C\u65E0\u504F\u7F6E</small></div></div></div><label class="lab-range">\u626B\u63CF\u7A97\u53E3\uFF1A\u884C ${u+1} / \u5217 ${T+1}<input id="lab-scan" aria-label="\u5B9E\u9A8C\u626B\u63CF\u7A97\u53E3" type="range" min="0" max="8" step="1" value="${a}"></label>`}if(v===2)return`<div class="lab-caption">\u9009\u62E9\u5C40\u90E8\u6700\u5927\u503C\uFF0C\u63D0\u4EA4\u5230\u6C60\u5316\u8F93\u51FA</div><div class="pool-matrix">${[1,3,2,4,7,5,0,6,2].map((u,T)=>`<button data-pool="${u}" aria-label="\u7B2C${T+1}\u683C \u6570\u503C${u}">${u}</button>`).join("")}</div><div class="pool-output"><span>\u6700\u5927\u6C60\u5316\u8F93\u51FA</span><b>${s.passed?"7":"?"}</b></div>`;if(v===3)return`<div class="flatten-stage ${s.flattened?"flat":""}" aria-label="\u516D\u4E2A\u5143\u7D20\u7684\u91CD\u6392">${[1,2,3,4,5,6].map((u,T)=>`<span style="--i:${T};--row:${Math.floor(T/3)};--col:${T%3}">${u}</span>`).join("")}</div><div class="flatten-label">${s.flattened?"\u5411\u91CF\uFF1A1\uFF0C2\uFF0C3\uFF0C4\uFF0C5\uFF0C6":"\u5F20\u91CF\uFF1A2 \xD7 3\uFF0C\u5171\u516D\u4E2A\u5143\u7D20"}</div><div class="lab-controls"><button id="lab-flatten" ${s.flattened?"disabled":""}>\u6267\u884C\u5C55\u5E73 \u2192</button></div><p class="lab-question">\u91CD\u6392\u5B8C\u6210\u540E\uFF0C\u5143\u7D20\u6570\u91CF\u4F1A\u600E\u6837\uFF1F</p><div class="lab-controls"><button data-answer="more">\u589E\u52A0</button><button data-answer="same">\u4E0D\u53D8</button><button data-answer="less">\u51CF\u5C11</button></div>`;if(v===4){let u=ii([.8,-.4,.6],[s.weight,.5,-.2])+.1;return`<div class="weight-network"><div><span>\u8F93\u5165</span><b>0.8</b><b>\u22120.4</b><b>0.6</b></div><div class="weight-lines"><span>\xD7 ${s.weight.toFixed(1)}</span><span>\xD7 0.5</span><span>\xD7 \u22120.2</span></div><div class="sum-node">\u03A3<small>\u504F\u7F6E + 0.1</small></div><div class="weight-result"><span>\u6574\u6D41\u8F93\u51FA</span><strong>${Math.max(0,u).toFixed(3)}</strong><small>\u52A0\u6743\u548C ${u.toFixed(3)}</small></div></div><label class="lab-range">\u7B2C\u4E00\u6761\u8FDE\u63A5\u6743\u91CD\uFF1A${s.weight.toFixed(1)}<input id="lab-weight" aria-label="\u5B9E\u9A8C\u6743\u91CD" type="range" min="-2" max="2" step="0.1" value="${s.weight}"></label><p class="lab-caption">\u76EE\u6807\u4E0D\u662F\u628A\u6240\u6709\u8F93\u5165\u8BBE\u4E3A\u96F6\uFF0C\u800C\u662F\u4EE4\u52A0\u6743\u548C\u4E0D\u5927\u4E8E\u96F6\u3002</p>`}let g=Gs([s.score,1,.4,-.1]);return`<div class="score-comparison">${g.map((u,T)=>`<div><span>\u7C7B\u522B${["\u4E00","\u4E8C","\u4E09","\u56DB"][T]}</span><i><b style="width:${u*100}%"></b></i><strong>${(u*100).toFixed(1)}%</strong></div>`).join("")}</div><label class="lab-range">\u7B2C\u4E00\u7C7B\u5206\u6570\uFF1A${s.score.toFixed(1)}<input id="lab-score" aria-label="\u5B9E\u9A8C\u7C7B\u522B\u5206\u6570" type="range" min="-2" max="5" step="0.1" value="${s.score}"></label><div class="score-sum">\u6982\u7387\u603B\u548C <b>${g.reduce((u,T)=>u+T,0).toFixed(6)}</b><span>\u76EE\u6807\uFF1A\u7B2C\u4E00\u7C7B\u6982\u7387 \u2265 80%</span></div>`}function m(){let v=ul[s.index];zn("#lab-total").textContent=`${String(s.completed.length).padStart(2,"0")} / 06`,zn("#lab-stages").innerHTML=ul.map((u,T)=>`<button data-lab="${T}" ${T>Math.max(s.index,Math.min(5,s.completed.length))&&!s.completed.includes(T)?"disabled":""} class="${T===s.index?"current":""} ${s.completed.includes(T)?"done":""}"><span>${String(T+1).padStart(2,"0")}</span><div><b>${u.name}</b><small>${s.completed.includes(T)?"\u5DF2\u5B8C\u6210":T===s.index?"\u5F53\u524D\u5B9E\u9A8C":"\u7B49\u5F85\u89E3\u9501"}</small></div><i>${s.completed.includes(T)?"\u2713":"\u2192"}</i></button>`).join(""),zn("#lab-body").innerHTML=`<div class="lab-topline"><span>\u5B9E\u9A8C ${String(s.index+1).padStart(2,"0")} / 06 \xB7 ${v.tag}</span><span>\u771F\u5B9E\u5C40\u90E8\u8BA1\u7B97</span></div><h2>${v.name}</h2><p class="lab-goal">${v.goal}</p><div class="lab-board">${f()}</div><div class="lab-feedback ${s.passed?"passed":""}" role="status"><span>${s.passed?"\u2713":"\u25CC"}</span>${s.feedback}</div>${o?`<p class="lab-hint">\u63D0\u793A\uFF1A${v.hint}</p>`:""}<div class="lab-bottom-actions"><button id="lab-hint">${o?"\u6536\u8D77\u63D0\u793A":"\u67E5\u770B\u63D0\u793A"}</button><button id="lab-retry">\u91CD\u8BD5\u672C\u5173</button><button id="lab-inspect">\u5728\u4E09\u7EF4\u6A21\u578B\u4E2D\u67E5\u770B \u2197</button><button id="lab-next" class="solid-link" ${!s.passed||s.index===5?"disabled":""}>\u4E0B\u4E00\u5B9E\u9A8C \u2192</button></div>${s.completed.length===6?'<div class="lab-complete"><span>\u516D\u9879\u5B9E\u9A8C\u5DF2\u5B8C\u6210</span><h3>\u4F60\u5DF2\u8D70\u8FC7\u4E00\u6761\u53EF\u9A8C\u8BC1\u7684\u8BA1\u7B97\u8DEF\u5F84\u3002</h3><p>\u989C\u8272\u7F16\u7801 \u2192 \u5C40\u90E8\u5377\u79EF \u2192 \u6700\u5927\u6C60\u5316 \u2192 \u5C55\u5E73 \u2192 \u52A0\u6743\u6C47\u805A \u2192 \u6982\u7387\u5F52\u4E00\u5316</p><a href="#dimensions">\u8FD4\u56DE\u5B8C\u6574\u4E09\u7EF4\u7F51\u7EDC \u2197</a></div>':""}`;let g=zn("#lab-stages .current");if(g){let u=zn("#lab-stages");u.scrollLeft=Math.max(0,g.offsetLeft-u.offsetLeft-12)}if(s.index===0){let u=zr(r);zn("#lab-image").getContext("2d").drawImage(u.image,0,0,384,384),u.dispose()}}zn("#lab-body").addEventListener("click",v=>{let g=v.target.closest("button");!g||g.disabled||(g.dataset.channel?(r=g.dataset.channel,h("channel",r)):g.dataset.scan!==void 0?(a=+g.dataset.scan,h("scan",a)):g.dataset.pool!==void 0?h("pool",+g.dataset.pool):g.dataset.answer?h("answer",g.dataset.answer):g.id==="lab-flatten"?h("flatten"):g.id==="lab-hint"?(o=!o,m()):g.id==="lab-retry"?(r="all",a=0,o=!1,h("retry")):g.id==="lab-next"?(o=!1,h("next")):g.id==="lab-inspect"&&(l=_(),location.hash="#dimensions"))});function _(){return ul[s.index].layer}return zn("#lab-body").addEventListener("change",v=>{v.target.id==="lab-scan"&&(a=+v.target.value,h("scan",a)),v.target.id==="lab-weight"&&h("weight",+v.target.value),v.target.id==="lab-score"&&h("score",+v.target.value)}),zn("#lab-stages").addEventListener("click",v=>{let g=v.target.closest("[data-lab]");if(!g||g.disabled)return;let u=+g.dataset.lab;u!==s.index&&(s={...Ki(),index:u,completed:s.completed,passed:s.completed.includes(u)},r="all",a=0,o=!1,m())}),zn("#lab-reset").onclick=()=>{s=Ki(),r="all",a=0,o=!1,m()},m(),c(),{isModel:()=>n==="dimensions"}}var Yc,Xs=!1,Et=i=>document.querySelector(i),dl=matchMedia("(prefers-reduced-motion: reduce)").matches,Ai=Et("#viewport"),Pn=Et("#scene"),fl=new De,qs=[],Td=[],Zc=[],vn,$e,on,Te,Ei,wd,Xc,jc,_d=0,pl=!1,he=-1,Qi=!1,kn=!1,si=-1,ml=-1,yn=null,xd=0,Yt=il(),Qt={channel:"all",kernel:"edge",cell:4,pooling:null,flatten:!1,weight:1,logit:2},vd=new Wi,yd=new mt,Wr=new F,Ed=()=>Gs([Qt.logit,1,.4,-.1]),w_=["\u91D1\u6BDB\u5BFB\u56DE\u72AC","\u62C9\u5E03\u62C9\u591A\u72AC","\u53EF\u5361\u72AC","\u5176\u4ED6\u793A\u4F8B\u7C7B\u522B"];function E_(i){return Array.isArray(i.material)?i.material:[i.material]}function Jc(){let i=Ai.clientWidth<600;return new F(i?-24:-15,i?24:15,i?52:32)}function gl(i,t,e=!1){e||dl?(on.position.copy(i),Te.target.copy(t),yn=null,Te.update()):yn={from:on.position.clone(),to:i,fromTarget:Te.target.clone(),target:t,t:0}}function $c(){kn=!1,Et("#view-mode").textContent="\u5168\u5C40\u89C6\u89D2",gl(Jc(),new F(0,-.35,0))}function qc(){if(he<0){In(1);return}kn=!0,Et("#view-mode").textContent="\u5C40\u90E8\u805A\u7126 \xB7 "+Si[he];let i=qs[he].position.x;gl(new F(i-5.6,3.6,7.8),new F(i,0,0))}function Xr(){let i=Ai.clientWidth,t=Ai.clientHeight;!i||!t||(vn.setSize(i,t,!1),on.aspect=i/t,on.updateProjectionMatrix(),Ei.setSize(i,t),Math.abs(i-xd)>140&&!kn&&gl(Jc(),new F(0,-.35,0),!0),xd=i)}function A_(){vn=new Fs({canvas:Pn,antialias:!0,powerPreference:"high-performance"}),vn.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),vn.setClearColor(594462),vn.outputColorSpace=we,vn.toneMapping=xi,vn.toneMappingExposure=1.12,vn.shadowMap.enabled=!0,vn.shadowMap.type=Cs,$e=new Jn,$e.background=new At(594462),$e.fog=new fr(594462,.009),$e.add(fl),on=new Ee(35,1,.1,200),Te=new Bs(on,Pn),Te.enableDamping=!0,Te.dampingFactor=.075,Te.enablePan=!1,Te.minDistance=5,Te.maxDistance=100,Te.minPolarAngle=.25,Te.maxPolarAngle=Math.PI*.52,Te.autoRotateSpeed=.35,Te.addEventListener("start",()=>{yn=null});let i=new ks,t=new Mi(vn),e=t.fromScene(i,.08);$e.environment=e.texture,$e.userData.environment=e,i.dispose(),t.dispose(),$e.add(new Hi(12112875,1253945,1.7));let n=new Kn(12901621,2.3);n.position.set(-8,15,8),n.castShadow=!0,n.shadow.mapSize.set(2048,1024),Object.assign(n.shadow.camera,{left:-26,right:26,top:14,bottom:-14,near:1,far:55}),n.shadow.normalBias=.025,$e.add(n);let s=new Kn(7518908,1.7);s.position.set(8,5,-8),$e.add(s);let r=new Gt(new en(150,150),new ke({color:594462}));r.rotation.x=-Math.PI/2,r.position.y=-2.58,$e.add(r);let a=new Gt(new en(52,12),new yr({opacity:.23,color:0,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=-2.56,a.receiveShadow=!0,$e.add(a);let o=new Er(120,100,2638166,1518398);o.position.y=-2.55,o.material.transparent=!0,o.material.opacity=.28,$e.add(o);let l=zc(!1);Or.forEach((h,d)=>{let f=ed(d,h.type);f.position.x=l[d],fl.add(f),qs.push(f);let m=new Gt(new Ue(1.7,4.6,3.9),new ke({visible:!1}));m.userData.index=d,f.add(m),Td.push(m);let _=document.createElement("button");_.className="layer-label",_.textContent=Si[d],_.setAttribute("aria-label","\u9009\u62E9"+Si[d]),_.addEventListener("click",()=>In(d)),Ai.appendChild(_),Zc.push(_)}),wd=nd(fl,qs),Ei=new tl(vn),Ei.addPass(new el($e,on));let c=new Hs(new mt(800,600),.3,.45,.94);Ei.addPass(c),Ei.addPass(new nl),gl(Jc(),new F(0,-.35,0),!0),Xr(),Xc=new ResizeObserver(Xr),Xc.observe(Ai),window.addEventListener("resize",Xr),Pn.addEventListener("webglcontextlost",h=>{h.preventDefault(),Et("#gl-error").hidden=!1,Et("#gl-error").textContent="\u56FE\u5F62\u4E0A\u4E0B\u6587\u5DF2\u4E22\u5931\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u91CD\u65B0\u6784\u5EFA\u5C55\u54C1\u3002"}),Et("#loader").hidden=!0}function C_(){return`<div class="panel-kicker">\u7ED3\u6784\u4E0E\u673A\u5236 / 2012</div><h2 class="panel-title">\u8FDB\u5165\u8BA1\u7B97\u7684\u5185\u90E8</h2><h3 class="panel-subtitle">\u516B\u4E2A\u53EF\u5B66\u4E60\u5C42\uFF0C\u4E00\u6761\u5C42\u6B21\u5316\u7684\u89C6\u89C9\u8DEF\u5F84\u3002</h3><p class="description">\u4ECE\u5C40\u90E8\u611F\u53D7\u91CE\u5230\u5168\u5C40\u52A0\u6743\u6C47\u805A\uFF0C\u89C2\u5BDF\u7F51\u7EDC\u5982\u4F55\u9010\u6B65\u6539\u53D8\u4FE1\u606F\u7684\u7EC4\u7EC7\u65B9\u5F0F\u3002\u9009\u62E9\u4EFB\u4E00\u5C42\uFF0C\u67E5\u770B\u5F20\u91CF\u3001\u8BA1\u7B97\u673A\u5236\u4E0E\u5C40\u90E8\u5B9E\u9A8C\u3002</p><div class="overview-types">${"<i></i>".repeat(13)}</div><div class="overview-grid"><div><strong>5 + 3</strong><span>\u5377\u79EF\u5C42 + \u5168\u8FDE\u63A5\u5C42</span></div><div><strong>1,000</strong><span>\u5206\u7C7B\u8F93\u51FA\u7EF4\u5EA6</span></div></div><p class="technical">\u591A\u901A\u9053\u7C92\u5B50\u675F\u6CBF\u8BA1\u7B97\u65B9\u5411\u4F20\u9012\uFF0C\u8FDB\u5165\u5404\u5C42\u540E\u89E6\u53D1\u5C40\u90E8\u54CD\u5E94\u3002\u53D1\u5149\u5F3A\u5EA6\u4E0E\u7C92\u5B50\u901F\u5EA6\u662F\u5C55\u9648\u7F16\u7801\uFF0C\u4E0D\u4EE3\u8868\u6FC0\u6D3B\u5E45\u5EA6\u6216\u771F\u5B9E\u8BA1\u7B97\u65F6\u95F4\u3002</p><button class="focus-inline" data-select="1">\u4ECE\u7B2C\u4E00\u5C42\u5377\u79EF\u5F00\u59CB \u2192</button><div class="experiment"><div class="experiment-header">\u53EF\u64CD\u4F5C\u7684\u5C40\u90E8\u5B9E\u9A8C<span>\u771F\u5B9E\u6570\u503C\u8BA1\u7B97</span></div><p>\u9009\u62E9\u4E00\u5C42\u540E\u53EF\u64CD\u4F5C\u901A\u9053\u5206\u79BB\u3001\u5377\u79EF\u5C0F\u7A97\u53E3\u3001\u6700\u5927\u6C60\u5316\u3001\u5F20\u91CF\u5C55\u5E73\u3001\u52A0\u6743\u6C47\u805A\u53CA\u6982\u7387\u5F52\u4E00\u5316\u3002</p></div>`}function R_(i){let t=Br[i].experiment,e="";return t==="channels"?e=`<p>\u67E5\u770B\u540C\u4E00\u5F20\u56FE\u50CF\u4E2D\u7684\u989C\u8272\u901A\u9053\u3002\u53EA\u6539\u53D8\u663E\u793A\uFF0C\u4E0D\u6267\u884C\u7F51\u7EDC\u63A8\u7406\u3002</p><div class="row-buttons">${[["all","\u5408\u6210"],["red","\u7EA2\u901A\u9053"],["green","\u7EFF\u901A\u9053"],["blue","\u84DD\u901A\u9053"]].map(([n,s])=>`<button data-channel="${n}" class="${Qt.channel===n?"active":""}">${s}</button>`).join("")}</div><div class="experiment-output" id="experiment-output"></div>`:t==="convolution"?e=`<p>\u5728\u5408\u6210\u7684 5\xD75 \u8F93\u5165\u4E0A\u79FB\u52A8 3\xD73 \u7A97\u53E3\uFF0C\u8BA1\u7B97\u771F\u5B9E\u52A0\u6743\u548C\u3002\u5377\u79EF\u6838\u4E3A\u4EBA\u5DE5\u8BBE\u5B9A\uFF0C\u975E\u5B66\u4E60\u6743\u91CD\u3002</p><label>\u7B97\u5B50<select id="kernel"><option value="edge">\u7EB5\u5411\u8FB9\u7F18</option><option value="horizontal">\u6A2A\u5411\u8FB9\u7F18</option><option value="blur">\u5C40\u90E8\u5747\u503C</option></select></label><label>\u7A97\u53E3\u4F4D\u7F6E <span id="cell-read"></span></label><input id="cell" aria-label="\u7A97\u53E3\u4F4D\u7F6E" type="range" min="0" max="8" step="1" value="${Qt.cell}"><div id="sample-grid" class="sample-grid"></div><div class="experiment-output" id="experiment-output"></div>`:t==="pooling"?e=`<p>\u8FD9\u662F\u4E00\u4E2A 3\xD73 \u5C40\u90E8\u7A97\u53E3\u3002\u70B9\u51FB\u4EFB\u610F\u503C\uFF0C\u5BF9\u6BD4\u5B83\u4E0E\u6700\u5927\u6C60\u5316\u8F93\u51FA\u3002</p><div class="sample-grid">${[.12,.45,.23,.31,.92,.64,.08,.52,.37].map((n,s)=>`<button data-pool="${s}" aria-label="\u6570\u503C ${n}">${n.toFixed(2)}</button>`).join("")}</div><div class="experiment-output" id="experiment-output"></div>`:t==="flatten"?e=`<p>\u5C06\u6F14\u793A\u5F20\u91CF\u7684 32 \u4E2A\u91C7\u6837\u70B9\u91CD\u6392\u4E3A\u5411\u91CF\u3002\u5B83\u4EEC\u7684\u4F4D\u7F6E\u6539\u53D8\uFF0C\u5143\u7D20\u6570\u91CF\u548C\u53D6\u503C\u4E0D\u53D8\u3002</p><button class="experiment-action" id="flatten">${Qt.flatten?"\u6062\u590D\u5F20\u91CF\u6392\u5217":"\u6267\u884C\u5C55\u5E73"}</button><div class="experiment-output" id="experiment-output"></div>`:t==="weights"?e=`<p>\u4E09\u4E2A\u8F93\u5165\u4E3A [0.8, \u22120.4, 0.6]\uFF0C\u6743\u91CD\u4E3A [w, 0.5, \u22120.2]\uFF0C\u504F\u7F6E\u4E3A 0.1\u3002\u8C03\u6574\u7B2C\u4E00\u6761\u8FDE\u63A5\u7684\u6743\u91CD\u3002</p><label>\u8FDE\u63A5\u6743\u91CD <span id="weight-read"></span></label><input id="weight" aria-label="\u8FDE\u63A5\u6743\u91CD" type="range" min="-2" max="2" step="0.1" value="${Qt.weight}"><div class="experiment-output" id="experiment-output"></div>`:e=`<p>\u56DB\u4E2A\u793A\u4F8B\u5206\u6570\u4E3A [z, 1, 0.4, \u22120.1]\u3002\u8C03\u6574\u9996\u9879\u5206\u6570\uFF0C\u89C2\u5BDF\u6240\u6709\u6982\u7387\u4E00\u8D77\u53D8\u5316\u3002\u6B64\u5B9E\u9A8C\u53EA\u542B\u56DB\u4E2A\u793A\u4F8B\u7C7B\u522B\uFF0C\u4E0D\u7B49\u4E8E\u539F\u7F51\u7EDC\u4E00\u5343\u7C7B\u5206\u5E03\u3002</p><label>\u9996\u9879\u7C7B\u522B\u5206\u6570 <span id="logit-read"></span></label><input id="logit" aria-label="\u9996\u9879\u7C7B\u522B\u5206\u6570" type="range" min="-2" max="5" step="0.1" value="${Qt.logit}"><div id="probabilities" class="mini-probs"></div><div class="experiment-output" id="experiment-output"></div>`,`<section class="experiment"><div class="experiment-header">\u5C40\u90E8\u8BA1\u7B97\u5B9E\u9A8C<span>\u53EF\u64CD\u4F5C / \u771F\u8BA1\u7B97</span></div>${e}</section>`}function Kc(){let i=Et("#panel-body");if(Et(".inspector").scrollTop=0,Et("#panel-index").textContent=he<0?"\u603B\u89C8 / 13":`${String(he+1).padStart(2,"0")} / 13`,he<0)i.innerHTML=C_();else{let t=Br[he],e=Or[he];i.innerHTML=`<div class="panel-kicker">${Ju[e.type]} / ${e.id.toUpperCase()}</div><h2 class="panel-title">${Si[he]}</h2><h3 class="panel-subtitle">${t.title}</h3><p class="description">${t.explain}</p><div class="tensor"><div><small>\u8F93\u5165\u5F20\u91CF</small><b>${t.input}</b></div><span>\u2192</span><div><small>\u8F93\u51FA\u5F20\u91CF</small><b>${t.output}</b></div></div><div class="formula">${t.formula}</div><p class="technical">${t.note}</p><button class="focus-inline" id="focus-inline">\u805A\u7126\u6B64\u5C42\u7684\u4E09\u7EF4\u8BA1\u7B97\u7ED3\u6784 \u2197</button>${he===12&&Yt.complete?`<div class="result-box"><small>\u9884\u8BBE\u793A\u4F8B \xB7 \u65E0\u6A21\u578B\u63A8\u7406</small><b>\u91D1\u6BDB\u5BFB\u56DE\u72AC</b><p>\u56DB\u7C7B\u522B\u5B9E\u9A8C\u5F52\u4E00\u5316\u503C\uFF1A${(Ed()[0]*100).toFixed(1)}%</p></div>`:""}${R_(he)}`,$s()}document.querySelectorAll("#timeline button").forEach((t,e)=>{t.classList.toggle("active",e===he),t.setAttribute("aria-pressed",e===he)}),Zc.forEach((t,e)=>t.classList.toggle("active",e===he))}function $s(){if(he<0)return;let i=Br[he].experiment,t=Et("#experiment-output");if(t)if(i==="channels")t.textContent="\u5F53\u524D\u7F16\u7801\uFF1A"+{all:"\u4E09\u901A\u9053\u5408\u6210",red:"\u7EA2\u8272\u901A\u9053",green:"\u7EFF\u8272\u901A\u9053",blue:"\u84DD\u8272\u901A\u9053"}[Qt.channel];else if(i==="convolution"){let e=Math.floor(Qt.cell/3),n=Qt.cell%3,s=[];for(let o=0;o<3;o++)for(let l=0;l<3;l++)s.push(Math.round((Math.sin((l+n)*.7)+Math.cos((o+e)*.9)+2)*2)/10);let r={edge:[-1,0,1,-2,0,2,-1,0,1],horizontal:[-1,-2,-1,0,0,0,1,2,1],blur:Array(9).fill(1/9)},a=r[Qt.kernel];Et("#sample-grid").innerHTML=s.map((o,l)=>`<span title="\u6743\u91CD ${a[l].toFixed(2)}">${o.toFixed(1)}<small style="display:block;font-size:8px;color:#6e9da9">\xD7 ${a[l].toFixed(2)}</small></span>`).join(""),Et("#cell-read").textContent=`\u884C ${e+1} / \u5217 ${n+1}`,Et("#kernel").value=Qt.kernel,t.textContent=`\u52A0\u6743\u548C\uFF1A${ii(s,a).toFixed(3)} \u2192 \u6574\u6D41\u540E\uFF1A${Math.max(0,ii(s,a)).toFixed(3)}`}else if(i==="pooling"){let e=[.12,.45,.23,.31,.92,.64,.08,.52,.37],n=Ku(e);t.textContent=Qt.pooling===null?"\u6700\u5927\u6C60\u5316\u8F93\u51FA = 0.92":Qt.pooling===4?"\u6240\u9009\u503C 0.92 = \u5C40\u90E8\u6700\u5927\u503C \u2192 \u8F93\u51FA 0.92":`\u6240\u9009\u503C ${e[Qt.pooling].toFixed(2)} \u2260 \u5C40\u90E8\u6700\u5927\u503C \u2192 \u8F93\u51FA\u4ECD\u4E3A 0.92`,document.querySelectorAll("[data-pool]").forEach((s,r)=>s.classList.toggle("winner",r===4&&Qt.pooling!==null))}else if(i==="flatten"){let e=Qu(Array.from({length:4},(n,s)=>Array.from({length:8},(r,a)=>s*8+a)));t.textContent=`${Qt.flatten?"\u4E00\u7EF4\u5411\u91CF":"4 \xD7 8 \u91C7\u6837\u77E9\u9635"} \xB7 ${e.length} \u4E2A\u5143\u7D20 \xB7 \u6570\u503C\u603B\u548C ${e.reduce((n,s)=>n+s,0)}`}else if(i==="weights"){let e=ii([.8,-.4,.6],[Qt.weight,.5,-.2])+.1;Et("#weight-read").textContent=Qt.weight.toFixed(1),t.textContent=`\u52A0\u6743\u548C + \u504F\u7F6E = ${e.toFixed(3)}\uFF1B\u6574\u6D41\u8F93\u51FA = ${Math.max(0,e).toFixed(3)}`}else{let e=Ed();Et("#logit-read").textContent=Qt.logit.toFixed(1),Et("#probabilities").innerHTML=e.map((n,s)=>`<div class="prob-row"><span>${w_[s]}</span><i><b style="width:${n*100}%"></b></i><span>${(n*100).toFixed(1)}%</span></div>`).join(""),t.textContent="\u6982\u7387\u603B\u548C = "+e.reduce((n,s)=>n+s,0).toFixed(6)}}function In(i,t=!1){!Number.isInteger(i)||i<0||i>12||(he=i,Et("#scene-caption").textContent=Si[i]+" \xB7 "+Br[i].mechanism,Kc(),kn&&qc())}function ts(){let i=sl(Yt.time);Et("#pause").disabled=!Yt.running,Et("#pause").textContent=Yt.paused?"\u7EE7\u7EED":"\u6682\u505C",Et("#run").textContent=Yt.running?"\u21BB \u91CD\u65B0\u8FD0\u884C":"\u25B6 \u8FD0\u884C\u6570\u636E\u6D41",Et("#progress").style.width=i.progress*100+"%",Et("#progress-text").textContent=`${String(Yt.time>0?i.index+1:0).padStart(2,"0")} / 13`,Et("#status").textContent=Yt.complete?"\u4F20\u64AD\u7ED3\u675F \xB7 \u793A\u610F\u6027\u6F14\u793A\uFF0C\u672A\u6267\u884C\u771F\u5B9E\u63A8\u7406":Yt.running?(Yt.paused?"\u5DF2\u6682\u505C \xB7 ":"\u524D\u5411\u4F20\u64AD \xB7 ")+Si[i.index]:"\u5C31\u7EEA \xB7 \u7B49\u5F85\u4E00\u6B21\u524D\u5411\u4F20\u64AD",document.querySelectorAll("#timeline button").forEach((t,e)=>t.classList.toggle("visited",e<i.index&&Yt.time>0))}function Md(){Yt=Ti(Yt,"run"),si=-1,ts()}function bd(){Yt=Ti(Yt,"reset"),Qi=!1,he=-1,si=-1,kn=!1,Te.autoRotate=!1,Qt.flatten=!1,Et("#speed").value="1",Et("#orbit").setAttribute("aria-pressed","false"),Et("#expand").setAttribute("aria-pressed","false"),Et("#expand").textContent="\u5C55\u5F00\u7ED3\u6784",Kc(),$c(),ts(),Et("#scene-caption").textContent="\u9009\u62E9\u4E00\u5C42\uFF0C\u8FDB\u5165\u8BA1\u7B97\u5185\u90E8\u3002"}function Sd(i){let t=Pn.getBoundingClientRect();yd.set((i.clientX-t.left)/t.width*2-1,-(i.clientY-t.top)/t.height*2+1),vd.setFromCamera(yd,on);let e=vd.intersectObjects(Td,!1);return e.length?e[0].object.userData.index:-1}function P_(){Et("#timeline").innerHTML=Or.map((t,e)=>`<button data-layer="${e}" data-type="${t.type}" aria-pressed="false">${Si[e]}</button>`).join(""),Et("#timeline").addEventListener("click",t=>{let e=t.target.closest("[data-layer]");e&&In(+e.dataset.layer)}),Et("#run").onclick=Md,Et("#pause").onclick=()=>{Yt=Ti(Yt,"pause"),ts()},Et("#step").onclick=()=>{Yt=Ti(Yt,"step"),si=sl(Yt.time).index,In(si),ts()},Et("#speed").onchange=t=>{Yt=Ti(Yt,"speed",+t.target.value)},Et("#expand").onclick=()=>{Qi=!Qi,Et("#expand").setAttribute("aria-pressed",Qi),Et("#expand").textContent=Qi?"\u6536\u62E2\u7ED3\u6784":"\u5C55\u5F00\u7ED3\u6784"},Et("#reset").onclick=bd,Et("#focus").onclick=qc,Et("#home").onclick=$c,Et("#orbit").onclick=()=>{Te.autoRotate=!Te.autoRotate,Et("#orbit").setAttribute("aria-pressed",Te.autoRotate),yn=null},Et("#panel-body").addEventListener("click",t=>{let e=t.target.closest("[data-select]");e&&In(+e.dataset.select),t.target.closest("#focus-inline")&&qc();let n=t.target.closest("[data-channel]");n&&(Qt.channel=n.dataset.channel,document.querySelectorAll("[data-channel]").forEach(r=>r.classList.toggle("active",r===n)),$s());let s=t.target.closest("[data-pool]");s&&(Qt.pooling=+s.dataset.pool,$s()),t.target.closest("#flatten")&&(Qt.flatten=!Qt.flatten,Et("#flatten").textContent=Qt.flatten?"\u6062\u590D\u5F20\u91CF\u6392\u5217":"\u6267\u884C\u5C55\u5E73",$s())}),Et("#panel-body").addEventListener("input",t=>{let e=t.target.id;e==="cell"&&(Qt.cell=+t.target.value),e==="weight"&&(Qt.weight=+t.target.value),e==="logit"&&(Qt.logit=+t.target.value),["cell","weight","logit"].includes(e)&&$s()}),Et("#panel-body").addEventListener("change",t=>{t.target.id==="kernel"&&(Qt.kernel=t.target.value,$s())});let i;Pn.addEventListener("pointerdown",t=>i=[t.clientX,t.clientY]),Pn.addEventListener("pointercancel",()=>i=null),Pn.addEventListener("pointerup",t=>{if(i&&Math.hypot(t.clientX-i[0],t.clientY-i[1])<5){let e=Sd(t);e>=0&&In(e)}i=null}),Pn.addEventListener("pointermove",t=>{ml=Sd(t),Pn.style.cursor=ml>=0?"pointer":"grab"}),Pn.addEventListener("pointerleave",()=>ml=-1),Pn.addEventListener("dblclick",$c),Et("#notes-open").onclick=Et("#notes-bottom").onclick=()=>Et("#notes").showModal(),document.querySelectorAll("[data-close]").forEach(t=>t.onclick=()=>t.closest("dialog").close()),document.querySelectorAll("dialog").forEach(t=>t.addEventListener("click",e=>{if(e.target!==t)return;let n=t.getBoundingClientRect();(e.clientX<n.left||e.clientX>n.right||e.clientY<n.top||e.clientY>n.bottom)&&t.close()})),document.addEventListener("keydown",t=>{!Yc?.isModel()||Et("dialog[open]")||t.target.closest("button,input,select,a")||(t.code==="Space"&&(t.preventDefault(),Yt.running?(Yt=Ti(Yt,"pause"),ts()):Md()),(t.key==="ArrowRight"||t.key==="ArrowLeft")&&(t.preventDefault(),In(ge.clamp(he+(t.key==="ArrowRight"?1:-1),0,12))),t.key.toLowerCase()==="r"&&bd())}),Kc(),ts()}function Ad(i){jc=requestAnimationFrame(Ad);let t=Math.max(0,(i-_d)/1e3);if(_d=i,document.hidden||!Yc?.isModel()){pl=!0;return}let e=pl?0:Math.min(t,.12);pl=!1,Yt=Ti(Yt,"tick",e);let n=sl(Yt.time);Yt.running&&si!==n.index&&(si=n.index,In(si,!0)),Yt.complete&&si!==13&&(si=13,In(12,!0)),ts();let s=zc(Qi),r=i/1e3;if(qs.forEach((a,o)=>{a.visible=!kn||o===he,a.position.x=ge.damp(a.position.x,s[o],dl?35:4,e);let l=Yt.running?n.index===o:he===o;a.userData.energy=ge.damp(a.userData.energy||0,l?1:he<0?.34:o===ml?.5:.12,8,e),a.userData.tick(Yt.running?Yt.time:r,a.userData.energy,l?n.local:0,dl,Qt)}),yn){yn.t+=e;let a=Math.min(1,yn.t/.85),o=a*a*(3-2*a);on.position.lerpVectors(yn.from,yn.to,o),Te.target.lerpVectors(yn.fromTarget,yn.target,o),a===1&&(yn=null)}Te.update(),on.zoom=ge.damp(on.zoom,kn?1:Qi?.76:1,4,e),on.updateProjectionMatrix();for(let a=0;a<qs.length;a++){Wr.set(qs[a].position.x,2.55,0).project(on);let o=Zc[a];o.style.left=(Wr.x+1)*Ai.clientWidth/2+"px",o.style.top=(-Wr.y+1)*Ai.clientHeight/2+"px",o.style.opacity=he<0||he===a?"1":".52",o.hidden=kn&&a!==he||Math.abs(Wr.x)>.94||Math.abs(Wr.y)>.85||Ai.clientWidth<600&&a!==he&&a!==0&&a!==6&&a!==12}wd.update(Yt.time,n,Yt.running&&!kn,Yt.paused,dl),fl.children.filter(a=>a.isLineSegments).forEach(a=>a.visible=!kn),Ei.render()}function I_(){cancelAnimationFrame(jc),Xc?.disconnect(),window.removeEventListener("resize",Xr),Te?.dispose();let i=new Set,t=new Set,e=new Set;$e?.traverse(n=>{if(n.geometry&&i.add(n.geometry),n.material)for(let s of E_(n)){t.add(s);for(let r of Object.values(s))r?.isTexture&&e.add(r)}}),i.forEach(n=>n.dispose()),t.forEach(n=>n.dispose()),e.forEach(n=>n.dispose()),$e?.userData.environment?.dispose(),Ei?.passes.forEach(n=>n.dispose?.()),Ei?.dispose(),vn?.dispose()}Yc=gd({onModel(i){if(i&&!Xs)try{A_(),P_(),Xs=!0,jc=requestAnimationFrame(Ad),document.body.dataset.ready="true"}catch(t){console.error(t),Et("#loader").hidden=!0,Et("#gl-error").hidden=!1}else i&&Xs&&(pl=!0,requestAnimationFrame(Xr))},inspect(i){Xs?In(i):requestAnimationFrame(()=>{Xs&&In(i)})}});Et("#notes-open").onclick=Et("#notes-bottom").onclick=()=>Et("#notes").showModal();document.querySelectorAll("[data-close]").forEach(i=>i.onclick=()=>i.closest("dialog").close());window.addEventListener("pagehide",i=>{!i.persisted&&Xs&&I_()});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
