(()=>{var ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Eh=0,Wl=1,Ah=2;var Xl=1,bs=2,Ln=3,Wn=0,Ie=1,Ve=2,bn=0,Ci=1,$n=2,ql=3,Yl=4,Ch=5,oi=100,Rh=101,Ph=102,Ih=103,Lh=104,Dh=200,Uh=201,Nh=202,Fh=203,fa=204,pa=205,Oh=206,Bh=207,zh=208,kh=209,Vh=210,Hh=211,Gh=212,Wh=213,Xh=214,za=0,ka=1,Va=2,Ri=3,Ha=4,Ga=5,Wa=6,Xa=7,qa=0,qh=1,Yh=2,Zn=0,Ya=1,$a=2,Za=3,fi=4,Ja=5,Ka=6,ja=7;var $l=300,zi=301,ki=302,Qa=303,to=304,Mr=306,ma=1e3,ai=1001,ga=1002,We=1003,$h=1004;var br=1005;var yn=1006,eo=1007;var pi=1008;var Sn=1009,Zl=1010,Jl=1011,Ss=1012,no=1013,mi=1014,Tn=1015,dn=1016,io=1017,so=1018,Ts=1020,Kl=35902,jl=35899,Ql=1021,tc=1022,fn=1023,ds=1026,ws=1027,ro=1028,ao=1029,ec=1030,oo=1031;var lo=1033,Sr=33776,Tr=33777,wr=33778,Er=33779,co=35840,ho=35841,uo=35842,fo=35843,po=36196,mo=37492,go=37496,_o=37808,xo=37809,vo=37810,yo=37811,Mo=37812,bo=37813,So=37814,To=37815,wo=37816,Eo=37817,Ao=37818,Co=37819,Ro=37820,Po=37821,Io=36492,Lo=36494,Do=36495,Uo=36283,No=36284,Fo=36285,Oo=36286;var js=2300,_a=2301,da=2302,Ul=2400,Nl=2401,Fl=2402;var Zh=3200,Jh=3201;var Bo=0,Kh=1,Jn="",Me="srgb",Pi="srgb-linear",Qs="linear",Jt="srgb";var Ai=7680;var Ol=519,jh=512,Qh=513,tu=514,nc=515,eu=516,nu=517,iu=518,su=519,Bl=35044;var ic="300 es",vn=2e3,tr=2001;var Cn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zc=1234567,hs=Math.PI/180,fs=180/Math.PI;function Es(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Wt(i,t,e){return Math.max(t,Math.min(e,i))}function sc(i,t){return(i%t+t)%t}function _d(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function xd(i,t,e){return i!==t?(e-i)/(t-i):0}function Ks(i,t,e){return(1-e)*i+e*t}function vd(i,t,e,n){return Ks(i,t,1-Math.exp(-e*n))}function yd(i,t=1){return t-Math.abs(sc(i,t*2)-t)}function Md(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function bd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Sd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Td(i,t){return i+Math.random()*(t-i)}function wd(i){return i*(.5-Math.random())}function Ed(i){i!==void 0&&(Zc=i);let t=Zc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ad(i){return i*hs}function Cd(i){return i*fs}function Rd(i){return(i&i-1)===0&&i!==0}function Pd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Id(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ld(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),d=r((t-n)/2),f=a((t-n)/2),m=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*d,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function cs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Le={DEG2RAD:hs,RAD2DEG:fs,generateUUID:Es,clamp:Wt,euclideanModulo:sc,mapLinear:_d,inverseLerp:xd,lerp:Ks,damp:vd,pingpong:yd,smoothstep:Md,smootherstep:bd,randInt:Sd,randFloat:Td,randFloatSpread:wd,seededRandom:Ed,degToRad:Ad,radToDeg:Cd,isPowerOfTwo:Rd,ceilPowerOfTwo:Pd,floorPowerOfTwo:Id,setQuaternionFromProperEuler:Ld,normalize:ze,denormalize:cs},_t=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},cn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],f=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==f||c!==m||u!==g){let p=1-o,h=l*f+c*m+u*g+d*_,T=h>=0?1:-1,A=1-h*h;if(A>Number.EPSILON){let v=Math.sqrt(A),M=Math.atan2(v,h*T);p=Math.sin(p*M)/v,o=Math.sin(o*M)/v}let y=o*T;if(l=l*p+f*y,c=c*p+m*y,u=u*p+g*y,d=d*p+_*y,p===1-o){let v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+u*d+l*m-c*f,t[e+1]=l*g+u*f+c*d-o*m,t[e+2]=c*g+u*m+o*f-l*d,t[e+3]=u*g-o*d-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"YZX":this._x=f*u*d+c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d-f*m*g;break;case"XZY":this._x=f*u*d-c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=n+o+d;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>d){let m=2*Math.sqrt(1+n-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){let m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return cl.copy(this).projectOnVector(t),this.sub(cl)}reflect(t){return this.sub(cl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},cl=new I,Jc=new cn,kt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],m=n[5],g=n[8],_=s[0],p=s[3],h=s[6],T=s[1],A=s[4],y=s[7],v=s[2],M=s[5],w=s[8];return r[0]=a*_+o*T+l*v,r[3]=a*p+o*A+l*M,r[6]=a*h+o*y+l*w,r[1]=c*_+u*T+d*v,r[4]=c*p+u*A+d*M,r[7]=c*h+u*y+d*w,r[2]=f*_+m*T+g*v,r[5]=f*p+m*A+g*M,r[8]=f*h+m*y+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,f=o*l-u*r,m=c*r-a*l,g=e*d+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(s*c-u*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(hl.makeScale(t,e)),this}rotate(t){return this.premultiply(hl.makeRotation(-t)),this}translate(t,e){return this.premultiply(hl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},hl=new kt;function rc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ru(){let i=er("canvas");return i.style.display="block",i}var Kc={};function ps(i){i in Kc||(Kc[i]=!0,console.warn(i))}function au(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var jc=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qc=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dd(){let i={enabled:!0,workingColorSpace:Pi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Jt&&(s.r=Gn(s.r),s.g=Gn(s.g),s.b=Gn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Jt&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Jn?Qs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ps("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ps("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Pi]:{primaries:t,whitePoint:n,transfer:Qs,toXYZ:jc,fromXYZ:Qc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Me},outputColorSpaceConfig:{drawingBufferColorSpace:Me}},[Me]:{primaries:t,whitePoint:n,transfer:Jt,toXYZ:jc,fromXYZ:Qc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Me}}}),i}var qt=Dd();function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ji,xa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ji===void 0&&(Ji=er("canvas")),Ji.width=t.width,Ji.height=t.height;let s=Ji.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ji}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=er("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Gn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gn(e[n]/255)*255):e[n]=Gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ud=0,ms=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Es(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ul(s[a].image)):r.push(ul(s[a]))}else r=ul(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ul(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Nd=0,dl=new I,ke=class i extends Cn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ai,s=ai,r=yn,a=pi,o=fn,l=Sn,c=i.DEFAULT_ANISOTROPY,u=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Es(),this.name="",this.source=new ms(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(dl).x}get height(){return this.source.getSize(dl).y}get depth(){return this.source.getSize(dl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$l)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ma:t.x=t.x-Math.floor(t.x);break;case ai:t.x=t.x<0?0:1;break;case ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ma:t.y=t.y-Math.floor(t.y);break;case ai:t.y=t.y<0?0:1;break;case ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=$l;ke.DEFAULT_ANISOTROPY=1;var ee=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,y=(m+1)/2,v=(h+1)/2,M=(u+f)/4,w=(d+_)/4,R=(g+p)/4;return A>y&&A>v?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=M/n,r=w/n):y>v?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=M/s,r=R/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=w/r,s=R/r),this.set(n,s,r,e),this}let T=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(d-_)/T,this.z=(f-u)/T,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},va=class extends Cn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new ke(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ms(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ne=class extends va{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},nr=class extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ya=class extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,gn):gn.fromBufferAttribute(r,a),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kr.copy(n.boundingBox)),kr.applyMatrix4(t.matrixWorld),this.union(kr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gs),Vr.subVectors(this.max,Gs),Ki.subVectors(t.a,Gs),ji.subVectors(t.b,Gs),Qi.subVectors(t.c,Gs),ti.subVectors(ji,Ki),ei.subVectors(Qi,ji),Si.subVectors(Ki,Qi);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-Si.z,Si.y,ti.z,0,-ti.x,ei.z,0,-ei.x,Si.z,0,-Si.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-Si.y,Si.x,0];return!fl(e,Ki,ji,Qi,Vr)||(e=[1,0,0,0,1,0,0,0,1],!fl(e,Ki,ji,Qi,Vr))?!1:(Hr.crossVectors(ti,ei),e=[Hr.x,Hr.y,Hr.z],fl(e,Ki,ji,Qi,Vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},On=[new I,new I,new I,new I,new I,new I,new I,new I],gn=new I,kr=new Rn,Ki=new I,ji=new I,Qi=new I,ti=new I,ei=new I,Si=new I,Gs=new I,Vr=new I,Hr=new I,Ti=new I;function fl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ti.fromArray(i,r);let o=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),l=t.dot(Ti),c=e.dot(Ti),u=n.dot(Ti);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Fd=new Rn,Ws=new I,pl=new I,Pn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Fd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);let e=Ws.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ws,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add(pl)),this.expandByPoint(Ws.copy(t.center).sub(pl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Bn=new I,ml=new I,Gr=new I,ni=new I,gl=new I,Wr=new I,_l=new I,Xn=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ml.copy(t).add(e).multiplyScalar(.5),Gr.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(ml);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Gr),o=ni.dot(this.direction),l=-ni.dot(Gr),c=ni.lengthSq(),u=Math.abs(1-a*a),d,f,m,g;if(u>0)if(d=a*l-o,f=a*o-l,g=r*u,d>=0)if(f>=-g)if(f<=g){let _=1/u;d*=_,f*=_,m=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ml).addScaledVector(Gr,f),m}intersectSphere(t,e){Bn.subVectors(t.center,this.origin);let n=Bn.dot(this.direction),s=Bn.dot(Bn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,n,s,r){gl.subVectors(e,t),Wr.subVectors(n,t),_l.crossVectors(gl,Wr);let a=this.direction.dot(_l),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ni.subVectors(this.origin,t);let l=o*this.direction.dot(Wr.crossVectors(ni,Wr));if(l<0)return null;let c=o*this.direction.dot(gl.cross(ni));if(c<0||l+c>a)return null;let u=-o*ni.dot(_l);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jt=class i{constructor(t,e,n,s,r,a,o,l,c,u,d,f,m,g,_,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,d,f,m,g,_,p)}set(t,e,n,s,r,a,o,l,c,u,d,f,m,g,_,p){let h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=g,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ts.setFromMatrixColumn(t,0).length(),r=1/ts.setFromMatrixColumn(t,1).length(),a=1/ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=a*u,m=a*d,g=o*u,_=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*u,m=l*d,g=c*u,_=c*d;e[0]=f+_*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=m*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*u,m=l*d,g=c*u,_=c*d;e[0]=f-_*o,e[4]=-a*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*u,m=a*d,g=o*u,_=o*d;e[0]=l*u,e[4]=g*c-m,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-f*d,e[8]=g*d+m,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*d+g,e[10]=f-_*d}else if(t.order==="XZY"){let f=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+_,e[5]=a*u,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*u,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Od,t,Bd)}lookAt(t,e,n){let s=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),ii.crossVectors(n,Je),ii.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),ii.crossVectors(n,Je)),ii.normalize(),Xr.crossVectors(Je,ii),s[0]=ii.x,s[4]=Xr.x,s[8]=Je.x,s[1]=ii.y,s[5]=Xr.y,s[9]=Je.y,s[2]=ii.z,s[6]=Xr.z,s[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],h=n[14],T=n[3],A=n[7],y=n[11],v=n[15],M=s[0],w=s[4],R=s[8],S=s[12],E=s[1],L=s[5],z=s[9],G=s[13],$=s[2],Z=s[6],q=s[10],at=s[14],H=s[3],ct=s[7],pt=s[11],St=s[15];return r[0]=a*M+o*E+l*$+c*H,r[4]=a*w+o*L+l*Z+c*ct,r[8]=a*R+o*z+l*q+c*pt,r[12]=a*S+o*G+l*at+c*St,r[1]=u*M+d*E+f*$+m*H,r[5]=u*w+d*L+f*Z+m*ct,r[9]=u*R+d*z+f*q+m*pt,r[13]=u*S+d*G+f*at+m*St,r[2]=g*M+_*E+p*$+h*H,r[6]=g*w+_*L+p*Z+h*ct,r[10]=g*R+_*z+p*q+h*pt,r[14]=g*S+_*G+p*at+h*St,r[3]=T*M+A*E+y*$+v*H,r[7]=T*w+A*L+y*Z+v*ct,r[11]=T*R+A*z+y*q+v*pt,r[15]=T*S+A*G+y*at+v*St,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],h=t[15];return g*(+r*l*d-s*c*d-r*o*f+n*c*f+s*o*m-n*l*m)+_*(+e*l*m-e*c*f+r*a*f-s*a*m+s*c*u-r*l*u)+p*(+e*c*d-e*o*m-r*a*d+n*a*m+r*o*u-n*c*u)+h*(-s*o*u-e*l*d+e*o*f+s*a*d-n*a*f+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],h=t[15],T=d*p*c-_*f*c+_*l*m-o*p*m-d*l*h+o*f*h,A=g*f*c-u*p*c-g*l*m+a*p*m+u*l*h-a*f*h,y=u*_*c-g*d*c+g*o*m-a*_*m-u*o*h+a*d*h,v=g*d*l-u*_*l-g*o*f+a*_*f+u*o*p-a*d*p,M=e*T+n*A+s*y+r*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/M;return t[0]=T*w,t[1]=(_*f*r-d*p*r-_*s*m+n*p*m+d*s*h-n*f*h)*w,t[2]=(o*p*r-_*l*r+_*s*c-n*p*c-o*s*h+n*l*h)*w,t[3]=(d*l*r-o*f*r-d*s*c+n*f*c+o*s*m-n*l*m)*w,t[4]=A*w,t[5]=(u*p*r-g*f*r+g*s*m-e*p*m-u*s*h+e*f*h)*w,t[6]=(g*l*r-a*p*r-g*s*c+e*p*c+a*s*h-e*l*h)*w,t[7]=(a*f*r-u*l*r+u*s*c-e*f*c-a*s*m+e*l*m)*w,t[8]=y*w,t[9]=(g*d*r-u*_*r-g*n*m+e*_*m+u*n*h-e*d*h)*w,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*h+e*o*h)*w,t[11]=(u*o*r-a*d*r-u*n*c+e*d*c+a*n*m-e*o*m)*w,t[12]=v*w,t[13]=(u*_*s-g*d*s+g*n*f-e*_*f-u*n*p+e*d*p)*w,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*p-e*o*p)*w,t[15]=(a*d*s-u*o*s+u*n*l-e*d*l-a*n*f+e*o*f)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,f=r*c,m=r*u,g=r*d,_=a*u,p=a*d,h=o*d,T=l*c,A=l*u,y=l*d,v=n.x,M=n.y,w=n.z;return s[0]=(1-(_+h))*v,s[1]=(m+y)*v,s[2]=(g-A)*v,s[3]=0,s[4]=(m-y)*M,s[5]=(1-(f+h))*M,s[6]=(p+T)*M,s[7]=0,s[8]=(g+A)*w,s[9]=(p-T)*w,s[10]=(1-(f+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ts.set(s[0],s[1],s[2]).length(),a=ts.set(s[4],s[5],s[6]).length(),o=ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],_n.copy(this);let c=1/r,u=1/a,d=1/o;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=d,_n.elements[9]*=d,_n.elements[10]*=d,e.setFromRotationMatrix(_n),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=vn,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(n-s),f=(e+t)/(e-t),m=(n+s)/(n-s),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===vn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===tr)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=vn,l=!1){let c=this.elements,u=2/(e-t),d=2/(n-s),f=-(e+t)/(e-t),m=-(n+s)/(n-s),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===vn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===tr)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ts=new I,_n=new jt,Od=new I(0,0,0),Bd=new I(1,1,1),ii=new I,Xr=new I,Je=new I,th=new jt,eh=new cn,hn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return th.makeRotationFromQuaternion(t),this.setFromRotationMatrix(th,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return eh.setFromEuler(this),this.setFromQuaternion(eh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hn.DEFAULT_ORDER="XYZ";var gs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},zd=0,nh=new I,es=new cn,zn=new jt,qr=new I,Xs=new I,kd=new I,Vd=new cn,ih=new I(1,0,0),sh=new I(0,1,0),rh=new I(0,0,1),ah={type:"added"},Hd={type:"removed"},ns={type:"childadded",child:null},xl={type:"childremoved",child:null},xe=class i extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new hn,n=new cn,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new kt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.multiply(es),this}rotateOnWorldAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.premultiply(es),this}rotateX(t){return this.rotateOnAxis(ih,t)}rotateY(t){return this.rotateOnAxis(sh,t)}rotateZ(t){return this.rotateOnAxis(rh,t)}translateOnAxis(t,e){return nh.copy(t).applyQuaternion(this.quaternion),this.position.add(nh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ih,t)}translateY(t){return this.translateOnAxis(sh,t)}translateZ(t){return this.translateOnAxis(rh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qr.copy(t):qr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Xs,qr,this.up):zn.lookAt(qr,Xs,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),es.setFromRotationMatrix(zn),this.quaternion.premultiply(es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ah),ns.child=t,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hd),xl.child=t,this.dispatchEvent(xl),xl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ah),ns.child=t,this.dispatchEvent(ns),ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,kd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,Vd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};xe.DEFAULT_UP=new I(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xn=new I,kn=new I,vl=new I,Vn=new I,is=new I,ss=new I,oh=new I,yl=new I,Ml=new I,bl=new I,Sl=new ee,Tl=new ee,wl=new ee,Hn=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xn.subVectors(t,e),s.cross(xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xn.subVectors(s,e),kn.subVectors(n,e),vl.subVectors(t,e);let a=xn.dot(xn),o=xn.dot(kn),l=xn.dot(vl),c=kn.dot(kn),u=kn.dot(vl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,m=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(a,Vn.y),l.addScaledVector(o,Vn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Sl.setScalar(0),Tl.setScalar(0),wl.setScalar(0),Sl.fromBufferAttribute(t,e),Tl.fromBufferAttribute(t,n),wl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Sl,r.x),a.addScaledVector(Tl,r.y),a.addScaledVector(wl,r.z),a}static isFrontFacing(t,e,n,s){return xn.subVectors(n,e),kn.subVectors(t,e),xn.cross(kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),xn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;is.subVectors(s,n),ss.subVectors(r,n),yl.subVectors(t,n);let l=is.dot(yl),c=ss.dot(yl);if(l<=0&&c<=0)return e.copy(n);Ml.subVectors(t,s);let u=is.dot(Ml),d=ss.dot(Ml);if(u>=0&&d<=u)return e.copy(s);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(is,a);bl.subVectors(t,r);let m=is.dot(bl),g=ss.dot(bl);if(g>=0&&m<=g)return e.copy(r);let _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ss,o);let p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return oh.subVectors(r,s),o=(d-u)/(d-u+(m-g)),e.copy(s).addScaledVector(oh,o);let h=1/(p+_+f);return a=_*h,o=f*h,e.copy(n).addScaledVector(is,a).addScaledVector(ss,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function El(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ct=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=sc(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=El(a,r,t+1/3),this.g=El(a,r,t),this.b=El(a,r,t-1/3)}return qt.colorSpaceToWorking(this,s),this}setStyle(t,e=Me){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Me){let n=ou[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return qt.workingToColorSpace(Ue.copy(this),t),Math.round(Wt(Ue.r*255,0,255))*65536+Math.round(Wt(Ue.g*255,0,255))*256+Math.round(Wt(Ue.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(Ue.copy(this),e);let n=Ue.r,s=Ue.g,r=Ue.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=Me){qt.workingToColorSpace(Ue.copy(this),t);let e=Ue.r,n=Ue.g,s=Ue.b;return t!==Me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(Yr);let n=Ks(si.h,Yr.h,e),s=Ks(si.s,Yr.s,e),r=Ks(si.l,Yr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ue=new Ct;Ct.NAMES=ou;var Gd=0,un=class extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Es(),this.name="",this.type="Material",this.blending=Ci,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fa,this.blendDst=pa,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ol,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fa&&(n.blendSrc=this.blendSrc),this.blendDst!==pa&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ol&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Xe=class extends un{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var _e=new I,$r=new _t,Wd=0,Se=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Bl,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$r.fromBufferAttribute(this,e),$r.applyMatrix3(t),this.setXY(e,$r.x,$r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=cs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=cs(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=cs(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=cs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=cs(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Bl&&(t.usage=this.usage),t}};var ir=class extends Se{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var sr=class extends Se{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ae=class extends Se{constructor(t,e,n){super(new Float32Array(t),e,n)}},Xd=0,on=new jt,Al=new xe,rs=new I,Ke=new Rn,qs=new Rn,Re=new I,de=class i extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rc(t)?sr:ir)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return Al.lookAt(t),Al.updateMatrix(),this.applyMatrix4(Al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ae(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(Ke.min,qs.min),Ke.expandByPoint(Re),Re.addVectors(Ke.max,qs.max),Ke.expandByPoint(Re)):(Ke.expandByPoint(qs.min),Ke.expandByPoint(qs.max))}Ke.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Re.fromBufferAttribute(o,c),l&&(rs.fromBufferAttribute(t,c),Re.add(rs)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Se(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new I,l[R]=new I;let c=new I,u=new I,d=new I,f=new _t,m=new _t,g=new _t,_=new I,p=new I;function h(R,S,E){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,E),f.fromBufferAttribute(r,R),m.fromBufferAttribute(r,S),g.fromBufferAttribute(r,E),u.sub(c),d.sub(c),m.sub(f),g.sub(f);let L=1/(m.x*g.y-g.x*m.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(L),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(L),o[R].add(_),o[S].add(_),o[E].add(_),l[R].add(p),l[S].add(p),l[E].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let R=0,S=T.length;R<S;++R){let E=T[R],L=E.start,z=E.count;for(let G=L,$=L+z;G<$;G+=3)h(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let A=new I,y=new I,v=new I,M=new I;function w(R){v.fromBufferAttribute(s,R),M.copy(v);let S=o[R];A.copy(S),A.sub(v.multiplyScalar(v.dot(S))).normalize(),y.crossVectors(M,S);let L=y.dot(l[R])<0?-1:1;a.setXYZW(R,A.x,A.y,A.z,L)}for(let R=0,S=T.length;R<S;++R){let E=T[R],L=E.start,z=E.count;for(let G=L,$=L+z;G<$;G+=3)w(t.getX(G+0)),w(t.getX(G+1)),w(t.getX(G+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,d=new I;if(t)for(let f=0,m=t.count;f<m;f+=3){let g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u),m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let h=0;h<u;h++)f[g++]=c[m++]}return new Se(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let f=c[u],m=t(f,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let m=c[d];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},lh=new jt,wi=new Xn,Zr=new Pn,ch=new I,Jr=new I,Kr=new I,jr=new I,Cl=new I,Qr=new I,hh=new I,ta=new I,Yt=class extends xe{constructor(t=new de,e=new Xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(Cl.fromBufferAttribute(d,t),a?Qr.addScaledVector(Cl,u):Qr.addScaledVector(Cl.sub(e),u))}e.add(Qr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(r),wi.copy(t.ray).recast(t.near),!(Zr.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Zr,ch)===null||wi.origin.distanceToSquared(ch)>(t.far-t.near)**2))&&(lh.copy(r).invert(),wi.copy(t.ray).applyMatrix4(lh),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let p=f[g],h=a[p.materialIndex],T=Math.max(p.start,m.start),A=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=T,v=A;y<v;y+=3){let M=o.getX(y),w=o.getX(y+1),R=o.getX(y+2);s=ea(this,h,t,n,c,u,d,M,w,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){let T=o.getX(p),A=o.getX(p+1),y=o.getX(p+2);s=ea(this,a,t,n,c,u,d,T,A,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let p=f[g],h=a[p.materialIndex],T=Math.max(p.start,m.start),A=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=T,v=A;y<v;y+=3){let M=y,w=y+1,R=y+2;s=ea(this,h,t,n,c,u,d,M,w,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){let T=p,A=p+1,y=p+2;s=ea(this,a,t,n,c,u,d,T,A,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function qd(i,t,e,n,s,r,a,o){let l;if(t.side===Ie?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Wn,o),l===null)return null;ta.copy(o),ta.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ta);return c<e.near||c>e.far?null:{distance:c,point:ta.clone(),object:i}}function ea(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Jr),i.getVertexPosition(l,Kr),i.getVertexPosition(c,jr);let u=qd(i,t,e,n,Jr,Kr,jr,hh);if(u){let d=new I;Hn.getBarycoord(hh,Jr,Kr,jr,d),s&&(u.uv=Hn.getInterpolatedAttribute(s,o,l,c,d,new _t)),r&&(u.uv1=Hn.getInterpolatedAttribute(r,o,l,c,d,new _t)),a&&(u.normal=Hn.getInterpolatedAttribute(a,o,l,c,d,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new I,materialIndex:0};Hn.getNormal(Jr,Kr,jr,f.normal),u.face=f,u.barycoord=d}return u}var Fe=class i extends de{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],f=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(d,2));function g(_,p,h,T,A,y,v,M,w,R,S){let E=y/w,L=v/R,z=y/2,G=v/2,$=M/2,Z=w+1,q=R+1,at=0,H=0,ct=new I;for(let pt=0;pt<q;pt++){let St=pt*L-G;for(let Bt=0;Bt<Z;Bt++){let te=Bt*E-z;ct[_]=te*T,ct[p]=St*A,ct[h]=$,c.push(ct.x,ct.y,ct.z),ct[_]=0,ct[p]=0,ct[h]=M>0?1:-1,u.push(ct.x,ct.y,ct.z),d.push(Bt/w),d.push(1-pt/R),at+=1}}for(let pt=0;pt<R;pt++)for(let St=0;St<w;St++){let Bt=f+St+Z*pt,te=f+St+Z*(pt+1),Y=f+(St+1)+Z*(pt+1),it=f+(St+1)+Z*pt;l.push(Bt,te,it),l.push(te,Y,it),H+=6}o.addGroup(m,H,S),m+=H,f+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Vi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Oe(i){let t={};for(let e=0;e<i.length;e++){let n=Vi(i[e]);for(let s in n)t[s]=n[s]}return t}function Yd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ac(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}var Kn={clone:Vi,merge:Oe},$d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ve=class extends un{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$d,this.fragmentShader=Zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vi(t.uniforms),this.uniformsGroups=Yd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},rr=class extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ri=new I,uh=new _t,dh=new _t,be=class extends rr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,uh,dh),e.subVectors(dh,uh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(hs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},as=-90,os=1,Ma=class extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new be(as,os,t,e);s.layers=this.layers,this.add(s);let r=new be(as,os,t,e);r.layers=this.layers,this.add(r);let a=new be(as,os,t,e);a.layers=this.layers,this.add(a);let o=new be(as,os,t,e);o.layers=this.layers,this.add(o);let l=new be(as,os,t,e);l.layers=this.layers,this.add(l);let c=new be(as,os,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ar=class extends ke{constructor(t=[],e=zi,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ba=class extends Ne{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ar(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fe(5,5,5),r=new ve({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:bn});r.uniforms.tEquirect.value=e;let a=new Yt(s,r),o=e.minFilter;return e.minFilter===pi&&(e.minFilter=yn),new Ma(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Pe=class extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jd={type:"move"},_s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),h=this._getHandJoint(c,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},or=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ct(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var qn=class extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Sa=class extends ke{constructor(t=null,e=1,n=1,s,r,a,o,l,c=We,u=We,d,f){super(null,a,o,l,c,u,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var lr=class extends Se{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ls=new jt,fh=new jt,na=[],ph=new Rn,Kd=new jt,Ys=new Yt,$s=new Pn,Ii=class extends Yt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new lr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Kd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Rn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ls),ph.copy(t.boundingBox).applyMatrix4(ls),this.boundingBox.union(ph)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ls),$s.copy(t.boundingSphere).applyMatrix4(ls),this.boundingSphere.union($s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(n),t.ray.intersectsSphere($s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ls),fh.multiplyMatrices(n,ls),Ys.matrixWorld=fh,Ys.raycast(t,na);for(let a=0,o=na.length;a<o;a++){let l=na[a];l.instanceId=r,l.object=this,e.push(l)}na.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new lr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sa(new Float32Array(s*this.count),s,this.count,ro,Tn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Rl=new I,jd=new I,Qd=new kt,ln=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Rl.subVectors(n,e).cross(jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Rl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Qd.getNormalMatrix(t),s=this.coplanarPoint(Rl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ei=new Pn,tf=new _t(.5,.5),ia=new I,xs=class{constructor(t=new ln,e=new ln,n=new ln,s=new ln,r=new ln,a=new ln){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],f=r[6],m=r[7],g=r[8],_=r[9],p=r[10],h=r[11],T=r[12],A=r[13],y=r[14],v=r[15];if(s[0].setComponents(c-a,m-u,h-g,v-T).normalize(),s[1].setComponents(c+a,m+u,h+g,v+T).normalize(),s[2].setComponents(c+o,m+d,h+_,v+A).normalize(),s[3].setComponents(c-o,m-d,h-_,v-A).normalize(),n)s[4].setComponents(l,f,p,y).normalize(),s[5].setComponents(c-l,m-f,h-p,v-y).normalize();else if(s[4].setComponents(c-l,m-f,h-p,v-y).normalize(),e===vn)s[5].setComponents(c+l,m+f,h+p,v+y).normalize();else if(e===tr)s[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){Ei.center.set(0,0,0);let e=tf.distanceTo(t.center);return Ei.radius=.7071067811865476+e,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ia.x=s.normal.x>0?t.max.x:t.min.x,ia.y=s.normal.y>0?t.max.y:t.min.y,ia.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ia)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var qe=class extends un{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ta=new I,wa=new I,mh=new jt,Zs=new Xn,sa=new Pn,Pl=new I,gh=new I,li=class extends xe{constructor(t=new de,e=new qe){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ta.fromBufferAttribute(e,s-1),wa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ta.distanceTo(wa);t.setAttribute("lineDistance",new ae(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(s),sa.radius+=r,t.ray.intersectsSphere(sa)===!1)return;mh.copy(s).invert(),Zs.copy(t.ray).applyMatrix4(mh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=m,p=g-1;_<p;_+=c){let h=u.getX(_),T=u.getX(_+1),A=ra(this,t,Zs,l,h,T,_);A&&e.push(A)}if(this.isLineLoop){let _=u.getX(g-1),p=u.getX(m),h=ra(this,t,Zs,l,_,p,g-1);h&&e.push(h)}}else{let m=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=m,p=g-1;_<p;_+=c){let h=ra(this,t,Zs,l,_,_+1,_);h&&e.push(h)}if(this.isLineLoop){let _=ra(this,t,Zs,l,g-1,m,g-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ra(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Ta.fromBufferAttribute(o,s),wa.fromBufferAttribute(o,r),e.distanceSqToSegment(Ta,wa,Pl,gh)>n)return;Pl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Pl);if(!(c<t.near||c>t.far))return{distance:c,point:gh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var _h=new I,xh=new I,Mn=class extends li{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)_h.fromBufferAttribute(e,s),xh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+_h.distanceTo(xh);t.setAttribute("lineDistance",new ae(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var vs=class extends un{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},vh=new jt,zl=new Xn,aa=new Pn,oa=new I,cr=class extends xe{constructor(t=new de,e=new vs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(s),aa.radius+=r,t.ray.intersectsSphere(aa)===!1)return;vh.copy(s).invert(),zl.copy(t.ray).applyMatrix4(vh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=f,_=m;g<_;g++){let p=c.getX(g);oa.fromBufferAttribute(d,p),yh(oa,p,l,s,t,e,this)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=f,_=m;g<_;g++)oa.fromBufferAttribute(d,g),yh(oa,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function yh(i,t,e,n,s,r,a){let o=zl.distanceSqToPoint(i);if(o<e){let l=new I;zl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var hr=class extends ke{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ur=class extends ke{constructor(t,e,n=mi,s,r,a,o=We,l=We,c,u=ds,d=1){if(u!==ds&&u!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ms(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},dr=class extends ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var la=new I,ca=new I,Il=new I,ha=new Hn,Li=class extends de{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(hs*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),f={},m=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:_,b:p,c:h}=ha;if(_.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),h.fromBufferAttribute(o,c[2]),ha.getNormal(Il),d[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,d[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,d[2]=`${Math.round(h.x*s)},${Math.round(h.y*s)},${Math.round(h.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let T=0;T<3;T++){let A=(T+1)%3,y=d[T],v=d[A],M=ha[u[T]],w=ha[u[A]],R=`${y}_${v}`,S=`${v}_${y}`;S in f&&f[S]?(Il.dot(f[S].normal)<=r&&(m.push(M.x,M.y,M.z),m.push(w.x,w.y,w.z)),f[S]=null):R in f||(f[R]={index0:c[T],index1:c[A],normal:Il.clone()})}}for(let g in f)if(f[g]){let{index0:_,index1:p}=f[g];la.fromBufferAttribute(o,_),ca.fromBufferAttribute(o,p),m.push(la.x,la.y,la.z),m.push(ca.x,ca.y,ca.z)}this.setAttribute("position",new ae(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var je=class i extends de{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=t/o,f=e/l,m=[],g=[],_=[],p=[];for(let h=0;h<u;h++){let T=h*f-a;for(let A=0;A<c;A++){let y=A*d-r;g.push(y,-T,0),_.push(0,0,1),p.push(A/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let T=0;T<o;T++){let A=T+c*h,y=T+c*(h+1),v=T+1+c*(h+1),M=T+1+c*h;m.push(A,y,M),m.push(y,v,M)}this.setIndex(m),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(_,3)),this.setAttribute("uv",new ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Di=class i extends de{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new I,f=new I,m=[],g=[],_=[],p=[];for(let h=0;h<=n;h++){let T=[],A=h/n,y=0;h===0&&a===0?y=.5/e:h===n&&l===Math.PI&&(y=-.5/e);for(let v=0;v<=e;v++){let M=v/e;d.x=-t*Math.cos(s+M*r)*Math.sin(a+A*o),d.y=t*Math.cos(a+A*o),d.z=t*Math.sin(s+M*r)*Math.sin(a+A*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(M+y,1-A),T.push(c++)}u.push(T)}for(let h=0;h<n;h++)for(let T=0;T<e;T++){let A=u[h][T+1],y=u[h][T],v=u[h+1][T],M=u[h+1][T+1];(h!==0||a>0)&&m.push(A,y,M),(h!==n-1||l<Math.PI)&&m.push(y,v,M)}this.setIndex(m),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(_,3)),this.setAttribute("uv",new ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ui=class i extends de{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],u=new I,d=new I,f=new I;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){let _=g/s*r,p=m/n*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(_),d.y=(t+e*Math.cos(p))*Math.sin(_),d.z=e*Math.sin(p),o.push(d.x,d.y,d.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){let _=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,h=(s+1)*(m-1)+g,T=(s+1)*m+g;a.push(_,p,T),a.push(p,h,T)}this.setIndex(a),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var fr=class extends un{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ct(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}},pr=class extends ve{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},In=class extends un{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var mr=class extends un{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ea=class extends un{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Aa=class extends un{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ua(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ef(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ni=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ca=class extends Ni{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ul,endingEnd:Ul}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Nl:r=t,o=2*e-n;break;case Fl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nl:a=t,l=2*n-e;break;case Fl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-e)/(s-e),_=g*g,p=_*g,h=-f*p+2*f*_-f*g,T=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,A=(-1-m)*p+(1.5+m)*_+.5*g,y=m*p-m*_;for(let v=0;v!==o;++v)r[v]=h*a[u+v]+T*a[c+v]+A*a[l+v]+y*a[d+v];return r}},Ra=class extends Ni{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),d=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*u;return r}},Pa=class extends Ni{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Qe=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ua(e,this.TimeBufferType),this.values=ua(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ua(t.times,Array),values:ua(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Pa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ra(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ca(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case js:e=this.InterpolantFactoryMethodDiscrete;break;case _a:e=this.InterpolantFactoryMethodLinear;break;case da:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return js;case this.InterpolantFactoryMethodLinear:return _a;case this.InterpolantFactoryMethodSmooth:return da}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&ef(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===da,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,f=d-n,m=d+n;for(let g=0;g!==n;++g){let _=e[d+g];if(_!==e[f+g]||_!==e[m+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,f=a*n;for(let m=0;m!==n;++m)e[f+m]=e[d+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Qe.prototype.ValueTypeName="";Qe.prototype.TimeBufferType=Float32Array;Qe.prototype.ValueBufferType=Float32Array;Qe.prototype.DefaultInterpolation=_a;var ci=class extends Qe{constructor(t,e,n){super(t,e,n)}};ci.prototype.ValueTypeName="bool";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=js;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Ia=class extends Qe{constructor(t,e,n,s){super(t,e,n,s)}};Ia.prototype.ValueTypeName="color";var La=class extends Qe{constructor(t,e,n,s){super(t,e,n,s)}};La.prototype.ValueTypeName="number";var Da=class extends Ni{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)cn.slerpFlat(r,0,a,c-o,a,c,l);return r}},gr=class extends Qe{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Da(this.times,this.values,this.getValueSize(),t)}};gr.prototype.ValueTypeName="quaternion";gr.prototype.InterpolantFactoryMethodSmooth=void 0;var hi=class extends Qe{constructor(t,e,n){super(t,e,n)}};hi.prototype.ValueTypeName="string";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=js;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ua=class extends Qe{constructor(t,e,n,s){super(t,e,n,s)}};Ua.prototype.ValueTypeName="vector";var Na=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},lu=new Na,Fa=class{constructor(t){this.manager=t!==void 0?t:lu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Fa.DEFAULT_MATERIAL_NAME="__DEFAULT";var ys=class extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Fi=class extends ys{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ll=new jt,Mh=new I,bh=new I,Oa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xs,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Mh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mh),bh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bh),e.updateMatrixWorld(),Ll.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ll,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ll)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Sh=new jt,Js=new I,Dl=new I,kl=class extends Oa{constructor(){super(new be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _t(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Js.setFromMatrixPosition(t.matrixWorld),n.position.copy(Js),Dl.copy(n.position),Dl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Dl),n.updateMatrixWorld(),s.makeTranslation(-Js.x,-Js.y,-Js.z),Sh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sh,n.coordinateSystem,n.reversedDepth)}},_r=class extends ys{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new kl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Oi=class extends rr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Vl=class extends Oa{constructor(){super(new Oi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yn=class extends ys{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new Vl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ba=class extends be{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},xr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var oc="\\[\\]\\.:\\/",nf=new RegExp("["+oc+"]","g"),lc="[^"+oc+"]",sf="[^"+oc.replace("\\.","")+"]",rf=/((?:WC+[\/:])*)/.source.replace("WC",lc),af=/(WCOD+)?/.source.replace("WCOD",sf),of=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lc),lf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lc),cf=new RegExp("^"+rf+af+of+lf+"$"),hf=["material","materials","bones","map"],Hl=class{constructor(t,e,n){let s=n||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(nf,"")}static parseTrackName(t){let e=cf.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);hf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ce.Composite=Hl;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var p_=new Float32Array(1);var Th=new jt,Bi=class{constructor(t,e,n=0,s=1/0){this.ray=new Xn(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new gs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Th.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Th),this}intersectObject(t,e=!0,n=[]){return Gl(t,this,n,e),n.sort(wh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Gl(t[s],this,n,e);return n.sort(wh),n}};function wh(i,t){return i.distance-t.distance}function Gl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Gl(r[a],t,e,!0)}}var Ms=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Wt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Wt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var vr=class extends Mn{constructor(t=10,e=10,n=4473924,s=8947848){n=new Ct(n),s=new Ct(s);let r=e/2,a=t/e,o=t/2,l=[],c=[];for(let f=0,m=0,g=-o;f<=e;f++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);let _=f===r?n:s;_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3}let u=new de;u.setAttribute("position",new ae(l,3)),u.setAttribute("color",new ae(c,3));let d=new qe({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var yr=class extends Cn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function cc(i,t,e,n){let s=uf(n);switch(e){case Ql:return i*t;case ro:return i*t/s.components*s.byteLength;case ao:return i*t/s.components*s.byteLength;case ec:return i*t*2/s.components*s.byteLength;case oo:return i*t*2/s.components*s.byteLength;case tc:return i*t*3/s.components*s.byteLength;case fn:return i*t*4/s.components*s.byteLength;case lo:return i*t*4/s.components*s.byteLength;case Sr:case Tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wr:case Er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ho:case fo:return Math.max(i,16)*Math.max(t,8)/4;case co:case uo:return Math.max(i,8)*Math.max(t,8)/2;case po:case mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case vo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case yo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case bo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case So:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case To:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case wo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Co:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ro:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Po:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Io:case Lo:case Do:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Uo:case No:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fo:case Oo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function uf(i){switch(i){case Sn:case Zl:return{byteLength:1,components:1};case Ss:case Jl:case dn:return{byteLength:2,components:1};case io:case so:return{byteLength:2,components:4};case mi:case no:case Tn:return{byteLength:4,components:1};case Kl:case jl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Lu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ff(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){let g=d[f],_=d[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){let _=d[m];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var pf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mf=`#ifdef USE_ALPHAHASH
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
#endif`,gf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yf=`#ifdef USE_AOMAP
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
#endif`,Mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bf=`#ifdef USE_BATCHING
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
#endif`,Sf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ef=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Af=`#ifdef USE_IRIDESCENCE
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
#endif`,Cf=`#ifdef USE_BUMPMAP
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
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Of=`#define PI 3.141592653589793
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
} // validated`,Bf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zf=`vec3 transformedNormal = objectNormal;
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
#endif`,kf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qf=`#ifdef USE_ENVMAP
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
#endif`,Yf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$f=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ep=`#ifdef USE_GRADIENTMAP
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
}`,np=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rp=`uniform bool receiveShadow;
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
#endif`,ap=`#ifdef USE_ENVMAP
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
#endif`,op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,up=`PhysicalMaterial material;
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
#endif`,dp=`struct PhysicalMaterial {
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
}`,fp=`
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
#endif`,pp=`#if defined( RE_IndirectDiffuse )
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
#endif`,mp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_p=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sp=`#if defined( USE_POINTS_UV )
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
#endif`,Tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ep=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rp=`#ifdef USE_MORPHTARGETS
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
#endif`,Pp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ip=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fp=`#ifdef USE_NORMALMAP
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
#endif`,Op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$p=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jp=`float getShadowMask() {
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
}`,Qp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,em=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nm=`#ifdef USE_SKINNING
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
#endif`,im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,am=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,om=`#ifdef USE_TRANSMISSION
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
#endif`,lm=`#ifdef USE_TRANSMISSION
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pm=`uniform sampler2D t2D;
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`#include <common>
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
}`,ym=`#if DEPTH_PACKING == 3200
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
}`,Mm=`#define DISTANCE
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
}`,bm=`#define DISTANCE
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`uniform float scale;
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
}`,Em=`uniform vec3 diffuse;
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
}`,Am=`#include <common>
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Rm=`#define LAMBERT
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
}`,Pm=`#define LAMBERT
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
}`,Im=`#define MATCAP
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
}`,Lm=`#define MATCAP
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
}`,Dm=`#define NORMAL
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
}`,Um=`#define NORMAL
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
}`,Nm=`#define PHONG
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
}`,Fm=`#define PHONG
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
}`,Om=`#define STANDARD
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
}`,Bm=`#define STANDARD
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
}`,zm=`#define TOON
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
}`,km=`#define TOON
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
}`,Vm=`uniform float size;
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Gm=`#include <common>
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
}`,Wm=`uniform vec3 color;
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
}`,Xm=`uniform float rotation;
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
}`,qm=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:pf,alphahash_pars_fragment:mf,alphamap_fragment:gf,alphamap_pars_fragment:_f,alphatest_fragment:xf,alphatest_pars_fragment:vf,aomap_fragment:yf,aomap_pars_fragment:Mf,batching_pars_vertex:bf,batching_vertex:Sf,begin_vertex:Tf,beginnormal_vertex:wf,bsdfs:Ef,iridescence_fragment:Af,bumpmap_pars_fragment:Cf,clipping_planes_fragment:Rf,clipping_planes_pars_fragment:Pf,clipping_planes_pars_vertex:If,clipping_planes_vertex:Lf,color_fragment:Df,color_pars_fragment:Uf,color_pars_vertex:Nf,color_vertex:Ff,common:Of,cube_uv_reflection_fragment:Bf,defaultnormal_vertex:zf,displacementmap_pars_vertex:kf,displacementmap_vertex:Vf,emissivemap_fragment:Hf,emissivemap_pars_fragment:Gf,colorspace_fragment:Wf,colorspace_pars_fragment:Xf,envmap_fragment:qf,envmap_common_pars_fragment:Yf,envmap_pars_fragment:$f,envmap_pars_vertex:Zf,envmap_physical_pars_fragment:ap,envmap_vertex:Jf,fog_vertex:Kf,fog_pars_vertex:jf,fog_fragment:Qf,fog_pars_fragment:tp,gradientmap_pars_fragment:ep,lightmap_pars_fragment:np,lights_lambert_fragment:ip,lights_lambert_pars_fragment:sp,lights_pars_begin:rp,lights_toon_fragment:op,lights_toon_pars_fragment:lp,lights_phong_fragment:cp,lights_phong_pars_fragment:hp,lights_physical_fragment:up,lights_physical_pars_fragment:dp,lights_fragment_begin:fp,lights_fragment_maps:pp,lights_fragment_end:mp,logdepthbuf_fragment:gp,logdepthbuf_pars_fragment:_p,logdepthbuf_pars_vertex:xp,logdepthbuf_vertex:vp,map_fragment:yp,map_pars_fragment:Mp,map_particle_fragment:bp,map_particle_pars_fragment:Sp,metalnessmap_fragment:Tp,metalnessmap_pars_fragment:wp,morphinstance_vertex:Ep,morphcolor_vertex:Ap,morphnormal_vertex:Cp,morphtarget_pars_vertex:Rp,morphtarget_vertex:Pp,normal_fragment_begin:Ip,normal_fragment_maps:Lp,normal_pars_fragment:Dp,normal_pars_vertex:Up,normal_vertex:Np,normalmap_pars_fragment:Fp,clearcoat_normal_fragment_begin:Op,clearcoat_normal_fragment_maps:Bp,clearcoat_pars_fragment:zp,iridescence_pars_fragment:kp,opaque_fragment:Vp,packing:Hp,premultiplied_alpha_fragment:Gp,project_vertex:Wp,dithering_fragment:Xp,dithering_pars_fragment:qp,roughnessmap_fragment:Yp,roughnessmap_pars_fragment:$p,shadowmap_pars_fragment:Zp,shadowmap_pars_vertex:Jp,shadowmap_vertex:Kp,shadowmask_pars_fragment:jp,skinbase_vertex:Qp,skinning_pars_vertex:tm,skinning_vertex:em,skinnormal_vertex:nm,specularmap_fragment:im,specularmap_pars_fragment:sm,tonemapping_fragment:rm,tonemapping_pars_fragment:am,transmission_fragment:om,transmission_pars_fragment:lm,uv_pars_fragment:cm,uv_pars_vertex:hm,uv_vertex:um,worldpos_vertex:dm,background_vert:fm,background_frag:pm,backgroundCube_vert:mm,backgroundCube_frag:gm,cube_vert:_m,cube_frag:xm,depth_vert:vm,depth_frag:ym,distanceRGBA_vert:Mm,distanceRGBA_frag:bm,equirect_vert:Sm,equirect_frag:Tm,linedashed_vert:wm,linedashed_frag:Em,meshbasic_vert:Am,meshbasic_frag:Cm,meshlambert_vert:Rm,meshlambert_frag:Pm,meshmatcap_vert:Im,meshmatcap_frag:Lm,meshnormal_vert:Dm,meshnormal_frag:Um,meshphong_vert:Nm,meshphong_frag:Fm,meshphysical_vert:Om,meshphysical_frag:Bm,meshtoon_vert:zm,meshtoon_frag:km,points_vert:Vm,points_frag:Hm,shadow_vert:Gm,shadow_frag:Wm,sprite_vert:Xm,sprite_frag:qm},ht={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Dn={basic:{uniforms:Oe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Oe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Oe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Oe([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Oe([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Oe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Oe([ht.points,ht.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Oe([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Oe([ht.common,ht.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Oe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Oe([ht.sprite,ht.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Oe([ht.common,ht.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Oe([ht.lights,ht.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Dn.physical={uniforms:Oe([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var zo={r:0,b:0,g:0},Hi=new hn,Ym=new jt;function $m(i,t,e,n,s,r,a){let o=new Ct(0),l=r===!0?0:1,c,u,d=null,f=0,m=null;function g(A){let y=A.isScene===!0?A.background:null;return y&&y.isTexture&&(y=(A.backgroundBlurriness>0?e:t).get(y)),y}function _(A){let y=!1,v=g(A);v===null?h(o,l):v&&v.isColor&&(h(v,1),y=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(A,y){let v=g(y);v&&(v.isCubeTexture||v.mapping===Mr)?(u===void 0&&(u=new Yt(new Fe(1,1,1),new ve({name:"BackgroundCubeMaterial",uniforms:Vi(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Hi.copy(y.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ym.makeRotationFromEuler(Hi)),u.material.toneMapped=qt.getTransfer(v.colorSpace)!==Jt,(d!==v||f!==v.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=v,f=v.version,m=i.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Yt(new je(2,2),new ve({name:"BackgroundMaterial",uniforms:Vi(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=qt.getTransfer(v.colorSpace)!==Jt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,m=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function h(A,y){A.getRGB(zo,ac(i)),n.buffers.color.setClear(zo.r,zo.g,zo.b,y,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,y=1){o.set(A),l=y,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,h(o,l)},render:_,addToRenderList:p,dispose:T}}function Zm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(E,L,z,G,$){let Z=!1,q=d(G,z,L);r!==q&&(r=q,c(r.object)),Z=m(E,G,z,$),Z&&g(E,G,z,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,y(E,L,z,G),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function u(E){return i.deleteVertexArray(E)}function d(E,L,z){let G=z.wireframe===!0,$=n[E.id];$===void 0&&($={},n[E.id]=$);let Z=$[L.id];Z===void 0&&(Z={},$[L.id]=Z);let q=Z[G];return q===void 0&&(q=f(l()),Z[G]=q),q}function f(E){let L=[],z=[],G=[];for(let $=0;$<e;$++)L[$]=0,z[$]=0,G[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:G,object:E,attributes:{},index:null}}function m(E,L,z,G){let $=r.attributes,Z=L.attributes,q=0,at=z.getAttributes();for(let H in at)if(at[H].location>=0){let pt=$[H],St=Z[H];if(St===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(St=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(St=E.instanceColor)),pt===void 0||pt.attribute!==St||St&&pt.data!==St.data)return!0;q++}return r.attributesNum!==q||r.index!==G}function g(E,L,z,G){let $={},Z=L.attributes,q=0,at=z.getAttributes();for(let H in at)if(at[H].location>=0){let pt=Z[H];pt===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(pt=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(pt=E.instanceColor));let St={};St.attribute=pt,pt&&pt.data&&(St.data=pt.data),$[H]=St,q++}r.attributes=$,r.attributesNum=q,r.index=G}function _(){let E=r.newAttributes;for(let L=0,z=E.length;L<z;L++)E[L]=0}function p(E){h(E,0)}function h(E,L){let z=r.newAttributes,G=r.enabledAttributes,$=r.attributeDivisors;z[E]=1,G[E]===0&&(i.enableVertexAttribArray(E),G[E]=1),$[E]!==L&&(i.vertexAttribDivisor(E,L),$[E]=L)}function T(){let E=r.newAttributes,L=r.enabledAttributes;for(let z=0,G=L.length;z<G;z++)L[z]!==E[z]&&(i.disableVertexAttribArray(z),L[z]=0)}function A(E,L,z,G,$,Z,q){q===!0?i.vertexAttribIPointer(E,L,z,$,Z):i.vertexAttribPointer(E,L,z,G,$,Z)}function y(E,L,z,G){_();let $=G.attributes,Z=z.getAttributes(),q=L.defaultAttributeValues;for(let at in Z){let H=Z[at];if(H.location>=0){let ct=$[at];if(ct===void 0&&(at==="instanceMatrix"&&E.instanceMatrix&&(ct=E.instanceMatrix),at==="instanceColor"&&E.instanceColor&&(ct=E.instanceColor)),ct!==void 0){let pt=ct.normalized,St=ct.itemSize,Bt=t.get(ct);if(Bt===void 0)continue;let te=Bt.buffer,Y=Bt.type,it=Bt.bytesPerElement,U=Y===i.INT||Y===i.UNSIGNED_INT||ct.gpuType===no;if(ct.isInterleavedBufferAttribute){let O=ct.data,K=O.stride,tt=ct.offset;if(O.isInstancedInterleavedBuffer){for(let j=0;j<H.locationSize;j++)h(H.location+j,O.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let j=0;j<H.locationSize;j++)p(H.location+j);i.bindBuffer(i.ARRAY_BUFFER,te);for(let j=0;j<H.locationSize;j++)A(H.location+j,St/H.locationSize,Y,pt,K*it,(tt+St/H.locationSize*j)*it,U)}else{if(ct.isInstancedBufferAttribute){for(let O=0;O<H.locationSize;O++)h(H.location+O,ct.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let O=0;O<H.locationSize;O++)p(H.location+O);i.bindBuffer(i.ARRAY_BUFFER,te);for(let O=0;O<H.locationSize;O++)A(H.location+O,St/H.locationSize,Y,pt,St*it,St/H.locationSize*O*it,U)}}else if(q!==void 0){let pt=q[at];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(H.location,pt);break;case 3:i.vertexAttrib3fv(H.location,pt);break;case 4:i.vertexAttrib4fv(H.location,pt);break;default:i.vertexAttrib1fv(H.location,pt)}}}}T()}function v(){R();for(let E in n){let L=n[E];for(let z in L){let G=L[z];for(let $ in G)u(G[$].object),delete G[$];delete L[z]}delete n[E]}}function M(E){if(n[E.id]===void 0)return;let L=n[E.id];for(let z in L){let G=L[z];for(let $ in G)u(G[$].object),delete G[$];delete L[z]}delete n[E.id]}function w(E){for(let L in n){let z=n[L];if(z[E.id]===void 0)continue;let G=z[E.id];for(let $ in G)u(G[$].object),delete G[$];delete z[E.id]}}function R(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:v,releaseStatesOfGeometry:M,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:T}}function Jm(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function o(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];e.update(m,n,1)}function l(c,u,d,f){if(d===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Km(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==fn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let R=w===dn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Sn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Tn&&!R)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=g>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:y,vertexTextures:v,maxSamples:M}}function jm(i){let t=this,e=null,n=0,s=!1,r=!1,a=new ln,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,m){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,h=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{let T=r?0:n,A=T*4,y=h.clippingState||null;l.value=y,y=u(g,f,A,m);for(let v=0;v!==A;++v)y[v]=e[v];h.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,f,m,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let h=m+_*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<h)&&(p=new Float32Array(h));for(let A=0,y=m;A!==_;++A,y+=4)a.copy(d[A]).applyMatrix4(T,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Qm(i){let t=new WeakMap;function e(a,o){return o===Qa?a.mapping=zi:o===to&&(a.mapping=ki),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Qa||o===to)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new ba(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Cs=4,cu=[.125,.215,.35,.446,.526,.582],Xi=20,hc=new Oi,hu=new Ct,uc=null,dc=0,fc=0,pc=!1,Wi=(1+Math.sqrt(5))/2,As=1/Wi,uu=[new I(-Wi,As,0),new I(Wi,As,0),new I(-As,0,Wi),new I(As,0,Wi),new I(0,Wi,-As),new I(0,Wi,As),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],tg=new I,Ps=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=tg}=r;uc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(uc,dc,fc),this._renderer.xr.enabled=pc,t.scissorTest=!1,ko(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zi||t.mapping===ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:dn,format:fn,colorSpace:Pi,depthBuffer:!1},s=du(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=du(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eg(r)),this._blurMaterial=ng(r,t,e)}return s}_compileMaterial(t){let e=new Yt(this._lodPlanes[0],t);this._renderer.compile(e,hc)}_sceneToCubeUV(t,e,n,s,r){let l=new be(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(hu),d.toneMapping=Zn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let _=new Xe({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),p=new Yt(new Fe,_),h=!1,T=t.background;T?T.isColor&&(_.color.copy(T),t.background=null,h=!0):(_.color.copy(hu),h=!0);for(let A=0;A<6;A++){let y=A%3;y===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):y===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));let v=this._cubeSize;ko(s,y*v,A>2?v:0,v,v),d.setRenderTarget(s),h&&d.render(p,l),d.render(t,l)}p.geometry.dispose(),p.material.dispose(),d.toneMapping=m,d.autoClear=f,t.background=T}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===zi||t.mapping===ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Yt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ko(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,hc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=uu[(s-r-1)%uu.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Yt(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Xi-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):Xi;p>Xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Xi}`);let h=[],T=0;for(let w=0;w<Xi;++w){let R=w/_,S=Math.exp(-R*R/2);h.push(S),w===0?T+=S:w<p&&(T+=2*S)}for(let w=0;w<h.length;w++)h[w]=h[w]/T;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:A}=this;f.dTheta.value=g,f.mipInt.value=A-n;let y=this._sizeLods[s],v=3*y*(s>A-Cs?s-A+Cs:0),M=4*(this._cubeSize-y);ko(e,v,M,3*y,2*y),l.setRenderTarget(e),l.render(d,hc)}};function eg(i){let t=[],e=[],n=[],s=i,r=i-Cs+1+cu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Cs?l=cu[a-i+Cs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,_=3,p=2,h=1,T=new Float32Array(_*g*m),A=new Float32Array(p*g*m),y=new Float32Array(h*g*m);for(let M=0;M<m;M++){let w=M%3*2/3-1,R=M>2?0:-1,S=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];T.set(S,_*g*M),A.set(f,p*g*M);let E=[M,M,M,M,M,M];y.set(E,h*g*M)}let v=new de;v.setAttribute("position",new Se(T,_)),v.setAttribute("uv",new Se(A,p)),v.setAttribute("faceIndex",new Se(y,h)),t.push(v),s>Cs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function du(i,t,e){let n=new Ne(i,t,e);return n.texture.mapping=Mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ko(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ng(i,t,e){let n=new Float32Array(Xi),s=new I(0,1,0);return new ve({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function fu(){return new ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function pu(){return new ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Tc(){return`

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
	`}function ig(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Qa||l===to,u=l===zi||l===ki;if(c||u){let d=t.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Ps(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let m=o.image;return c&&m&&m.height>0||u&&m&&s(m)?(e===null&&(e=new Ps(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function sg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ps("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function rg(i,t,e,n){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let m in f)t.update(f[m],i.ARRAY_BUFFER)}function c(d){let f=[],m=d.index,g=d.attributes.position,_=0;if(m!==null){let T=m.array;_=m.version;for(let A=0,y=T.length;A<y;A+=3){let v=T[A+0],M=T[A+1],w=T[A+2];f.push(v,M,M,w,w,v)}}else if(g!==void 0){let T=g.array;_=g.version;for(let A=0,y=T.length/3-1;A<y;A+=3){let v=A+0,M=A+1,w=A+2;f.push(v,M,M,w,w,v)}}else return;let p=new(rc(f)?sr:ir)(f,1);p.version=_;let h=r.get(d);h&&t.remove(h),r.set(d,p)}function u(d){let f=r.get(d);if(f){let m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function ag(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,m){i.drawElements(n,m,r,f*a),e.update(m,n,1)}function c(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,f*a,g),e.update(m,n,g))}function u(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];e.update(p,n,1)}function d(f,m,g,_){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<f.length;h++)c(f[h]/a,m[h],_[h]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,_,0,g);let h=0;for(let T=0;T<g;T++)h+=m[T]*_[T];e.update(h,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function og(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function lg(i,t,e){let n=new WeakMap,s=new ee;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==d){let S=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],A=0;m===!0&&(A=1),g===!0&&(A=2),_===!0&&(A=3);let y=o.attributes.position.count*A,v=1;y>t.maxTextureSize&&(v=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let M=new Float32Array(y*v*4*d),w=new nr(M,y,v,d);w.type=Tn,w.needsUpdate=!0;let R=A*4;for(let E=0;E<d;E++){let L=p[E],z=h[E],G=T[E],$=y*v*4*E;for(let Z=0;Z<L.count;Z++){let q=Z*R;m===!0&&(s.fromBufferAttribute(L,Z),M[$+q+0]=s.x,M[$+q+1]=s.y,M[$+q+2]=s.z,M[$+q+3]=0),g===!0&&(s.fromBufferAttribute(z,Z),M[$+q+4]=s.x,M[$+q+5]=s.y,M[$+q+6]=s.z,M[$+q+7]=0),_===!0&&(s.fromBufferAttribute(G,Z),M[$+q+8]=s.x,M[$+q+9]=s.y,M[$+q+10]=s.z,M[$+q+11]=G.itemSize===4?s.w:1)}}f={count:d,texture:w,size:new _t(y,v)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];let g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function cg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Du=new ke,mu=new ur(1,1),Uu=new nr,Nu=new ya,Fu=new ar,gu=[],_u=[],xu=new Float32Array(16),vu=new Float32Array(9),yu=new Float32Array(4);function Ls(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=gu[s];if(r===void 0&&(r=new Float32Array(s),gu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Te(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function we(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ho(i,t){let e=_u[t];e===void 0&&(e=new Int32Array(t),_u[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function hg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2fv(this.addr,t),we(e,t)}}function dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;i.uniform3fv(this.addr,t),we(e,t)}}function fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4fv(this.addr,t),we(e,t)}}function pg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Te(e,n))return;yu.set(n),i.uniformMatrix2fv(this.addr,!1,yu),we(e,n)}}function mg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Te(e,n))return;vu.set(n),i.uniformMatrix3fv(this.addr,!1,vu),we(e,n)}}function gg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Te(e,n))return;xu.set(n),i.uniformMatrix4fv(this.addr,!1,xu),we(e,n)}}function _g(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2iv(this.addr,t),we(e,t)}}function vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3iv(this.addr,t),we(e,t)}}function yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4iv(this.addr,t),we(e,t)}}function Mg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2uiv(this.addr,t),we(e,t)}}function Sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3uiv(this.addr,t),we(e,t)}}function Tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4uiv(this.addr,t),we(e,t)}}function wg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(mu.compareFunction=nc,r=mu):r=Du,e.setTexture2D(t||r,s)}function Eg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Nu,s)}function Ag(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Fu,s)}function Cg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Uu,s)}function Rg(i){switch(i){case 5126:return hg;case 35664:return ug;case 35665:return dg;case 35666:return fg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return _g;case 35667:case 35671:return xg;case 35668:case 35672:return vg;case 35669:case 35673:return yg;case 5125:return Mg;case 36294:return bg;case 36295:return Sg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Cg}}function Pg(i,t){i.uniform1fv(this.addr,t)}function Ig(i,t){let e=Ls(t,this.size,2);i.uniform2fv(this.addr,e)}function Lg(i,t){let e=Ls(t,this.size,3);i.uniform3fv(this.addr,e)}function Dg(i,t){let e=Ls(t,this.size,4);i.uniform4fv(this.addr,e)}function Ug(i,t){let e=Ls(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ng(i,t){let e=Ls(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Fg(i,t){let e=Ls(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Og(i,t){i.uniform1iv(this.addr,t)}function Bg(i,t){i.uniform2iv(this.addr,t)}function zg(i,t){i.uniform3iv(this.addr,t)}function kg(i,t){i.uniform4iv(this.addr,t)}function Vg(i,t){i.uniform1uiv(this.addr,t)}function Hg(i,t){i.uniform2uiv(this.addr,t)}function Gg(i,t){i.uniform3uiv(this.addr,t)}function Wg(i,t){i.uniform4uiv(this.addr,t)}function Xg(i,t,e){let n=this.cache,s=t.length,r=Ho(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Du,r[a])}function qg(i,t,e){let n=this.cache,s=t.length,r=Ho(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Nu,r[a])}function Yg(i,t,e){let n=this.cache,s=t.length,r=Ho(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Fu,r[a])}function $g(i,t,e){let n=this.cache,s=t.length,r=Ho(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Uu,r[a])}function Zg(i){switch(i){case 5126:return Pg;case 35664:return Ig;case 35665:return Lg;case 35666:return Dg;case 35674:return Ug;case 35675:return Ng;case 35676:return Fg;case 5124:case 35670:return Og;case 35667:case 35671:return Bg;case 35668:case 35672:return zg;case 35669:case 35673:return kg;case 5125:return Vg;case 36294:return Hg;case 36295:return Gg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return $g}}var gc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Rg(e.type)}},_c=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zg(e.type)}},xc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},mc=/(\w+)(\])?(\[|\.)?/g;function Mu(i,t){i.seq.push(t),i.map[t.id]=t}function Jg(i,t,e){let n=i.name,s=n.length;for(mc.lastIndex=0;;){let r=mc.exec(n),a=mc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Mu(e,c===void 0?new gc(o,i,t):new _c(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new xc(o),Mu(e,d)),e=d}}}var Rs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Jg(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function bu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Kg=37297,jg=0;function Qg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Su=new kt;function t0(i){qt._getMatrix(Su,qt.workingColorSpace,i);let t=`mat3( ${Su.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case Qs:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Tu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Qg(i.getShaderSource(t),o)}else return r}function e0(i,t){let e=t0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function n0(i,t){let e;switch(t){case Ya:e="Linear";break;case $a:e="Reinhard";break;case Za:e="Cineon";break;case fi:e="ACESFilmic";break;case Ka:e="AgX";break;case ja:e="Neutral";break;case Ja:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Vo=new I;function i0(){qt.getLuminanceCoefficients(Vo);let i=Vo.x.toFixed(4),t=Vo.y.toFixed(4),e=Vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ar).join(`
`)}function r0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function a0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ar(i){return i!==""}function wu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Eu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var o0=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(i){return i.replace(o0,c0)}var l0=new Map;function c0(i,t){let e=Gt[t];if(e===void 0){let n=l0.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return vc(e)}var h0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Au(i){return i.replace(h0,u0)}function u0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function d0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===bs?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function f0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zi:case ki:t="ENVMAP_TYPE_CUBE";break;case Mr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function p0(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ki&&(t="ENVMAP_MODE_REFRACTION"),t}function m0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case qa:t="ENVMAP_BLENDING_MULTIPLY";break;case qh:t="ENVMAP_BLENDING_MIX";break;case Yh:t="ENVMAP_BLENDING_ADD";break}return t}function g0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function _0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=d0(e),c=f0(e),u=p0(e),d=m0(e),f=g0(e),m=s0(e),g=r0(r),_=s.createProgram(),p,h,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ar).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ar).join(`
`),h.length>0&&(h+=`
`)):(p=[Cu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),h=[Cu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Zn?n0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,e0("linearToOutputTexel",e.outputColorSpace),i0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ar).join(`
`)),a=vc(a),a=wu(a,e),a=Eu(a,e),o=vc(o),o=wu(o,e),o=Eu(o,e),a=Au(a),o=Au(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",e.glslVersion===ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let A=T+p+a,y=T+h+o,v=bu(s,s.VERTEX_SHADER,A),M=bu(s,s.FRAGMENT_SHADER,y);s.attachShader(_,v),s.attachShader(_,M),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(L){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(_)||"",G=s.getShaderInfoLog(v)||"",$=s.getShaderInfoLog(M)||"",Z=z.trim(),q=G.trim(),at=$.trim(),H=!0,ct=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,v,M);else{let pt=Tu(s,v,"vertex"),St=Tu(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Z+`
`+pt+`
`+St)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(q===""||at==="")&&(ct=!1);ct&&(L.diagnostics={runnable:H,programLog:Z,vertexShader:{log:q,prefix:p},fragmentShader:{log:at,prefix:h}})}s.deleteShader(v),s.deleteShader(M),R=new Rs(s,_),S=a0(s,_)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,Kg)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=v,this.fragmentShader=M,this}var x0=0,yc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Mc(t),e.set(t,n)),n}},Mc=class{constructor(t){this.id=x0++,this.code=t,this.usedTimes=0}};function v0(i,t,e,n,s,r,a){let o=new gs,l=new yc,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,E,L,z,G){let $=z.fog,Z=G.geometry,q=S.isMeshStandardMaterial?z.environment:null,at=(S.isMeshStandardMaterial?e:t).get(S.envMap||q),H=at&&at.mapping===Mr?at.image.height:null,ct=g[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));let pt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,St=pt!==void 0?pt.length:0,Bt=0;Z.morphAttributes.position!==void 0&&(Bt=1),Z.morphAttributes.normal!==void 0&&(Bt=2),Z.morphAttributes.color!==void 0&&(Bt=3);let te,Y,it,U;if(ct){let Kt=Dn[ct];te=Kt.vertexShader,Y=Kt.fragmentShader}else te=S.vertexShader,Y=S.fragmentShader,l.update(S),it=l.getVertexShaderID(S),U=l.getFragmentShaderID(S);let O=i.getRenderTarget(),K=i.state.buffers.depth.getReversed(),tt=G.isInstancedMesh===!0,j=G.isBatchedMesh===!0,Ft=!!S.map,Ae=!!S.matcap,P=!!at,he=!!S.aoMap,zt=!!S.lightMap,Ut=!!S.bumpMap,yt=!!S.normalMap,ue=!!S.displacementMap,Mt=!!S.emissiveMap,Ht=!!S.metalnessMap,Ce=!!S.roughnessMap,ge=S.anisotropy>0,C=S.clearcoat>0,x=S.dispersion>0,B=S.iridescence>0,X=S.sheen>0,Q=S.transmission>0,W=ge&&!!S.anisotropyMap,Et=C&&!!S.clearcoatMap,ot=C&&!!S.clearcoatNormalMap,bt=C&&!!S.clearcoatRoughnessMap,Tt=B&&!!S.iridescenceMap,st=B&&!!S.iridescenceThicknessMap,ft=X&&!!S.sheenColorMap,Dt=X&&!!S.sheenRoughnessMap,wt=!!S.specularMap,ut=!!S.specularColorMap,Vt=!!S.specularIntensityMap,D=Q&&!!S.transmissionMap,rt=Q&&!!S.thicknessMap,lt=!!S.gradientMap,gt=!!S.alphaMap,et=S.alphaTest>0,J=!!S.alphaHash,vt=!!S.extensions,Ot=Zn;S.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ot=i.toneMapping);let re={shaderID:ct,shaderType:S.type,shaderName:S.name,vertexShader:te,fragmentShader:Y,defines:S.defines,customVertexShaderID:it,customFragmentShaderID:U,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:j,batchingColor:j&&G._colorsTexture!==null,instancing:tt,instancingColor:tt&&G.instanceColor!==null,instancingMorph:tt&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:O===null?i.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Pi,alphaToCoverage:!!S.alphaToCoverage,map:Ft,matcap:Ae,envMap:P,envMapMode:P&&at.mapping,envMapCubeUVHeight:H,aoMap:he,lightMap:zt,bumpMap:Ut,normalMap:yt,displacementMap:f&&ue,emissiveMap:Mt,normalMapObjectSpace:yt&&S.normalMapType===Kh,normalMapTangentSpace:yt&&S.normalMapType===Bo,metalnessMap:Ht,roughnessMap:Ce,anisotropy:ge,anisotropyMap:W,clearcoat:C,clearcoatMap:Et,clearcoatNormalMap:ot,clearcoatRoughnessMap:bt,dispersion:x,iridescence:B,iridescenceMap:Tt,iridescenceThicknessMap:st,sheen:X,sheenColorMap:ft,sheenRoughnessMap:Dt,specularMap:wt,specularColorMap:ut,specularIntensityMap:Vt,transmission:Q,transmissionMap:D,thicknessMap:rt,gradientMap:lt,opaque:S.transparent===!1&&S.blending===Ci&&S.alphaToCoverage===!1,alphaMap:gt,alphaTest:et,alphaHash:J,combine:S.combine,mapUv:Ft&&_(S.map.channel),aoMapUv:he&&_(S.aoMap.channel),lightMapUv:zt&&_(S.lightMap.channel),bumpMapUv:Ut&&_(S.bumpMap.channel),normalMapUv:yt&&_(S.normalMap.channel),displacementMapUv:ue&&_(S.displacementMap.channel),emissiveMapUv:Mt&&_(S.emissiveMap.channel),metalnessMapUv:Ht&&_(S.metalnessMap.channel),roughnessMapUv:Ce&&_(S.roughnessMap.channel),anisotropyMapUv:W&&_(S.anisotropyMap.channel),clearcoatMapUv:Et&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ot&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:st&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&_(S.sheenRoughnessMap.channel),specularMapUv:wt&&_(S.specularMap.channel),specularColorMapUv:ut&&_(S.specularColorMap.channel),specularIntensityMapUv:Vt&&_(S.specularIntensityMap.channel),transmissionMapUv:D&&_(S.transmissionMap.channel),thicknessMapUv:rt&&_(S.thicknessMap.channel),alphaMapUv:gt&&_(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(yt||ge),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Z.attributes.uv&&(Ft||gt),fog:!!$,useFog:S.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:K,skinning:G.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Bt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Ft&&S.map.isVideoTexture===!0&&qt.getTransfer(S.map.colorSpace)===Jt,decodeVideoTextureEmissive:Mt&&S.emissiveMap.isVideoTexture===!0&&qt.getTransfer(S.emissiveMap.colorSpace)===Jt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ve,flipSided:S.side===Ie,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:vt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&S.extensions.multiDraw===!0||j)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return re.vertexUv1s=c.has(1),re.vertexUv2s=c.has(2),re.vertexUv3s=c.has(3),c.clear(),re}function h(S){let E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(let L in S.defines)E.push(L),E.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(T(E,S),A(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function T(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function A(S,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),E.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){let E=g[S.type],L;if(E){let z=Dn[E];L=Kn.clone(z.uniforms)}else L=S.uniforms;return L}function v(S,E){let L;for(let z=0,G=u.length;z<G;z++){let $=u[z];if($.cacheKey===E){L=$,++L.usedTimes;break}}return L===void 0&&(L=new _0(i,E,S,r),u.push(L)),L}function M(S){if(--S.usedTimes===0){let E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function w(S){l.remove(S)}function R(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:y,acquireProgram:v,releaseProgram:M,releaseShaderCache:w,programs:u,dispose:R}}function y0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function M0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ru(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Pu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,f,m,g,_,p){let h=i[t];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},i[t]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=p),t++,h}function o(d,f,m,g,_,p){let h=a(d,f,m,g,_,p);m.transmission>0?n.push(h):m.transparent===!0?s.push(h):e.push(h)}function l(d,f,m,g,_,p){let h=a(d,f,m,g,_,p);m.transmission>0?n.unshift(h):m.transparent===!0?s.unshift(h):e.unshift(h)}function c(d,f){e.length>1&&e.sort(d||M0),n.length>1&&n.sort(f||Ru),s.length>1&&s.sort(f||Ru)}function u(){for(let d=t,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function b0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Pu,i.set(n,[a])):s>=r.length?(a=new Pu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function S0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Ct};break;case"SpotLight":e={position:new I,direction:new I,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function T0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var w0=0;function E0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function A0(i){let t=new S0,e=T0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new jt,a=new jt;function o(c){let u=0,d=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,g=0,_=0,p=0,h=0,T=0,A=0,y=0,v=0,M=0,w=0;c.sort(E0);for(let S=0,E=c.length;S<E;S++){let L=c[S],z=L.color,G=L.intensity,$=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=z.r*G,d+=z.g*G,f+=z.b*G;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],G);w++}else if(L.isDirectionalLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let at=L.shadow,H=e.get(L);H.shadowIntensity=at.intensity,H.shadowBias=at.bias,H.shadowNormalBias=at.normalBias,H.shadowRadius=at.radius,H.shadowMapSize=at.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=L.shadow.matrix,T++}n.directional[m]=q,m++}else if(L.isSpotLight){let q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(z).multiplyScalar(G),q.distance=$,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[_]=q;let at=L.shadow;if(L.map&&(n.spotLightMap[v]=L.map,v++,at.updateMatrices(L),L.castShadow&&M++),n.spotLightMatrix[_]=at.matrix,L.castShadow){let H=e.get(L);H.shadowIntensity=at.intensity,H.shadowBias=at.bias,H.shadowNormalBias=at.normalBias,H.shadowRadius=at.radius,H.shadowMapSize=at.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=Z,y++}_++}else if(L.isRectAreaLight){let q=t.get(L);q.color.copy(z).multiplyScalar(G),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=q,p++}else if(L.isPointLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let at=L.shadow,H=e.get(L);H.shadowIntensity=at.intensity,H.shadowBias=at.bias,H.shadowNormalBias=at.normalBias,H.shadowRadius=at.radius,H.shadowMapSize=at.mapSize,H.shadowCameraNear=at.camera.near,H.shadowCameraFar=at.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=L.shadow.matrix,A++}n.point[g]=q,g++}else if(L.isHemisphereLight){let q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(G),q.groundColor.copy(L.groundColor).multiplyScalar(G),n.hemi[h]=q,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;let R=n.hash;(R.directionalLength!==m||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==p||R.hemiLength!==h||R.numDirectionalShadows!==T||R.numPointShadows!==A||R.numSpotShadows!==y||R.numSpotMaps!==v||R.numLightProbes!==w)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=y+v-M,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=w,R.directionalLength=m,R.pointLength=g,R.spotLength=_,R.rectAreaLength=p,R.hemiLength=h,R.numDirectionalShadows=T,R.numPointShadows=A,R.numSpotShadows=y,R.numSpotMaps=v,R.numLightProbes=w,n.version=w0++)}function l(c,u){let d=0,f=0,m=0,g=0,_=0,p=u.matrixWorldInverse;for(let h=0,T=c.length;h<T;h++){let A=c[h];if(A.isDirectionalLight){let y=n.directional[d];y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(A.isSpotLight){let y=n.spot[m];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),m++}else if(A.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(A.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(A.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(p),f++}else if(A.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function Iu(i){let t=new A0(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function C0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Iu(i),t.set(s,[o])):r>=a.length?(o=new Iu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var R0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P0=`uniform sampler2D shadow_pass;
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
}`;function I0(i,t,e){let n=new xs,s=new _t,r=new _t,a=new ee,o=new Ea({depthPacking:Jh}),l=new Aa,c={},u=e.maxTextureSize,d={[Wn]:Ie,[Ie]:Wn,[Ve]:Ve},f=new ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:R0,fragmentShader:P0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new de;g.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Yt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xl;let h=this.type;this.render=function(M,w,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;let S=i.getRenderTarget(),E=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),z=i.state;z.setBlending(bn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let G=h!==Ln&&this.type===Ln,$=h===Ln&&this.type!==Ln;for(let Z=0,q=M.length;Z<q;Z++){let at=M[Z],H=at.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let ct=H.getFrameExtents();if(s.multiply(ct),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ct.x),s.x=r.x*ct.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ct.y),s.y=r.y*ct.y,H.mapSize.y=r.y)),H.map===null||G===!0||$===!0){let St=this.type!==Ln?{minFilter:We,magFilter:We}:{};H.map!==null&&H.map.dispose(),H.map=new Ne(s.x,s.y,St),H.map.texture.name=at.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let pt=H.getViewportCount();for(let St=0;St<pt;St++){let Bt=H.getViewport(St);a.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),z.viewport(a),H.updateMatrices(at,St),n=H.getFrustum(),y(w,R,H.camera,at,this.type)}H.isPointLightShadow!==!0&&this.type===Ln&&T(H,R),H.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(S,E,L)};function T(M,w){let R=t.update(_);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Ne(s.x,s.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(w,null,R,f,_,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(w,null,R,m,_,null)}function A(M,w,R,S){let E=null,L=R.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(L!==void 0)E=L;else if(E=R.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let z=E.uuid,G=w.uuid,$=c[z];$===void 0&&($={},c[z]=$);let Z=$[G];Z===void 0&&(Z=E.clone(),$[G]=Z,w.addEventListener("dispose",v)),E=Z}if(E.visible=w.visible,E.wireframe=w.wireframe,S===Ln?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:d[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,R.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let z=i.properties.get(E);z.light=R}return E}function y(M,w,R,S,E){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&E===Ln)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,M.matrixWorld);let G=t.update(M),$=M.material;if(Array.isArray($)){let Z=G.groups;for(let q=0,at=Z.length;q<at;q++){let H=Z[q],ct=$[H.materialIndex];if(ct&&ct.visible){let pt=A(M,ct,S,E);M.onBeforeShadow(i,M,w,R,G,pt,H),i.renderBufferDirect(R,null,G,pt,M,H),M.onAfterShadow(i,M,w,R,G,pt,H)}}}else if($.visible){let Z=A(M,$,S,E);M.onBeforeShadow(i,M,w,R,G,Z,null),i.renderBufferDirect(R,null,G,Z,M,null),M.onAfterShadow(i,M,w,R,G,Z,null)}}let z=M.children;for(let G=0,$=z.length;G<$;G++)y(z[G],w,R,S,E)}function v(M){M.target.removeEventListener("dispose",v);for(let R in c){let S=c[R],E=M.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}var L0={[za]:ka,[Va]:Wa,[Ha]:Xa,[Ri]:Ga,[ka]:za,[Wa]:Va,[Xa]:Ha,[Ga]:Ri};function D0(i,t){function e(){let D=!1,rt=new ee,lt=null,gt=new ee(0,0,0,0);return{setMask:function(et){lt!==et&&!D&&(i.colorMask(et,et,et,et),lt=et)},setLocked:function(et){D=et},setClear:function(et,J,vt,Ot,re){re===!0&&(et*=Ot,J*=Ot,vt*=Ot),rt.set(et,J,vt,Ot),gt.equals(rt)===!1&&(i.clearColor(et,J,vt,Ot),gt.copy(rt))},reset:function(){D=!1,lt=null,gt.set(-1,0,0,0)}}}function n(){let D=!1,rt=!1,lt=null,gt=null,et=null;return{setReversed:function(J){if(rt!==J){let vt=t.get("EXT_clip_control");J?vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.ZERO_TO_ONE_EXT):vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.NEGATIVE_ONE_TO_ONE_EXT),rt=J;let Ot=et;et=null,this.setClear(Ot)}},getReversed:function(){return rt},setTest:function(J){J?O(i.DEPTH_TEST):K(i.DEPTH_TEST)},setMask:function(J){lt!==J&&!D&&(i.depthMask(J),lt=J)},setFunc:function(J){if(rt&&(J=L0[J]),gt!==J){switch(J){case za:i.depthFunc(i.NEVER);break;case ka:i.depthFunc(i.ALWAYS);break;case Va:i.depthFunc(i.LESS);break;case Ri:i.depthFunc(i.LEQUAL);break;case Ha:i.depthFunc(i.EQUAL);break;case Ga:i.depthFunc(i.GEQUAL);break;case Wa:i.depthFunc(i.GREATER);break;case Xa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=J}},setLocked:function(J){D=J},setClear:function(J){et!==J&&(rt&&(J=1-J),i.clearDepth(J),et=J)},reset:function(){D=!1,lt=null,gt=null,et=null,rt=!1}}}function s(){let D=!1,rt=null,lt=null,gt=null,et=null,J=null,vt=null,Ot=null,re=null;return{setTest:function(Kt){D||(Kt?O(i.STENCIL_TEST):K(i.STENCIL_TEST))},setMask:function(Kt){rt!==Kt&&!D&&(i.stencilMask(Kt),rt=Kt)},setFunc:function(Kt,Fn,An){(lt!==Kt||gt!==Fn||et!==An)&&(i.stencilFunc(Kt,Fn,An),lt=Kt,gt=Fn,et=An)},setOp:function(Kt,Fn,An){(J!==Kt||vt!==Fn||Ot!==An)&&(i.stencilOp(Kt,Fn,An),J=Kt,vt=Fn,Ot=An)},setLocked:function(Kt){D=Kt},setClear:function(Kt){re!==Kt&&(i.clearStencil(Kt),re=Kt)},reset:function(){D=!1,rt=null,lt=null,gt=null,et=null,J=null,vt=null,Ot=null,re=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},f=new WeakMap,m=[],g=null,_=!1,p=null,h=null,T=null,A=null,y=null,v=null,M=null,w=new Ct(0,0,0),R=0,S=!1,E=null,L=null,z=null,G=null,$=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,at=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(H)[1]),q=at>=1):H.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),q=at>=2);let ct=null,pt={},St=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),te=new ee().fromArray(St),Y=new ee().fromArray(Bt);function it(D,rt,lt,gt){let et=new Uint8Array(4),J=i.createTexture();i.bindTexture(D,J),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let vt=0;vt<lt;vt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(rt,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,et):i.texImage2D(rt+vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,et);return J}let U={};U[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),U[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),U[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),O(i.DEPTH_TEST),a.setFunc(Ri),Ut(!1),yt(Wl),O(i.CULL_FACE),he(bn);function O(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function K(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function tt(D,rt){return d[D]!==rt?(i.bindFramebuffer(D,rt),d[D]=rt,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=rt),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=rt),!0):!1}function j(D,rt){let lt=m,gt=!1;if(D){lt=f.get(rt),lt===void 0&&(lt=[],f.set(rt,lt));let et=D.textures;if(lt.length!==et.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let J=0,vt=et.length;J<vt;J++)lt[J]=i.COLOR_ATTACHMENT0+J;lt.length=et.length,gt=!0}}else lt[0]!==i.BACK&&(lt[0]=i.BACK,gt=!0);gt&&i.drawBuffers(lt)}function Ft(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let Ae={[oi]:i.FUNC_ADD,[Rh]:i.FUNC_SUBTRACT,[Ph]:i.FUNC_REVERSE_SUBTRACT};Ae[Ih]=i.MIN,Ae[Lh]=i.MAX;let P={[Dh]:i.ZERO,[Uh]:i.ONE,[Nh]:i.SRC_COLOR,[fa]:i.SRC_ALPHA,[Vh]:i.SRC_ALPHA_SATURATE,[zh]:i.DST_COLOR,[Oh]:i.DST_ALPHA,[Fh]:i.ONE_MINUS_SRC_COLOR,[pa]:i.ONE_MINUS_SRC_ALPHA,[kh]:i.ONE_MINUS_DST_COLOR,[Bh]:i.ONE_MINUS_DST_ALPHA,[Hh]:i.CONSTANT_COLOR,[Gh]:i.ONE_MINUS_CONSTANT_COLOR,[Wh]:i.CONSTANT_ALPHA,[Xh]:i.ONE_MINUS_CONSTANT_ALPHA};function he(D,rt,lt,gt,et,J,vt,Ot,re,Kt){if(D===bn){_===!0&&(K(i.BLEND),_=!1);return}if(_===!1&&(O(i.BLEND),_=!0),D!==Ch){if(D!==p||Kt!==S){if((h!==oi||y!==oi)&&(i.blendEquation(i.FUNC_ADD),h=oi,y=oi),Kt)switch(D){case Ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $n:i.blendFunc(i.ONE,i.ONE);break;case ql:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $n:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ql:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,A=null,v=null,M=null,w.set(0,0,0),R=0,p=D,S=Kt}return}et=et||rt,J=J||lt,vt=vt||gt,(rt!==h||et!==y)&&(i.blendEquationSeparate(Ae[rt],Ae[et]),h=rt,y=et),(lt!==T||gt!==A||J!==v||vt!==M)&&(i.blendFuncSeparate(P[lt],P[gt],P[J],P[vt]),T=lt,A=gt,v=J,M=vt),(Ot.equals(w)===!1||re!==R)&&(i.blendColor(Ot.r,Ot.g,Ot.b,re),w.copy(Ot),R=re),p=D,S=!1}function zt(D,rt){D.side===Ve?K(i.CULL_FACE):O(i.CULL_FACE);let lt=D.side===Ie;rt&&(lt=!lt),Ut(lt),D.blending===Ci&&D.transparent===!1?he(bn):he(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let gt=D.stencilWrite;o.setTest(gt),gt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Mt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?O(i.SAMPLE_ALPHA_TO_COVERAGE):K(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(D){E!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),E=D)}function yt(D){D!==Eh?(O(i.CULL_FACE),D!==L&&(D===Wl?i.cullFace(i.BACK):D===Ah?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):K(i.CULL_FACE),L=D}function ue(D){D!==z&&(q&&i.lineWidth(D),z=D)}function Mt(D,rt,lt){D?(O(i.POLYGON_OFFSET_FILL),(G!==rt||$!==lt)&&(i.polygonOffset(rt,lt),G=rt,$=lt)):K(i.POLYGON_OFFSET_FILL)}function Ht(D){D?O(i.SCISSOR_TEST):K(i.SCISSOR_TEST)}function Ce(D){D===void 0&&(D=i.TEXTURE0+Z-1),ct!==D&&(i.activeTexture(D),ct=D)}function ge(D,rt,lt){lt===void 0&&(ct===null?lt=i.TEXTURE0+Z-1:lt=ct);let gt=pt[lt];gt===void 0&&(gt={type:void 0,texture:void 0},pt[lt]=gt),(gt.type!==D||gt.texture!==rt)&&(ct!==lt&&(i.activeTexture(lt),ct=lt),i.bindTexture(D,rt||U[D]),gt.type=D,gt.texture=rt)}function C(){let D=pt[ct];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(D){te.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),te.copy(D))}function Dt(D){Y.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function wt(D,rt){let lt=c.get(rt);lt===void 0&&(lt=new WeakMap,c.set(rt,lt));let gt=lt.get(D);gt===void 0&&(gt=i.getUniformBlockIndex(rt,D.name),lt.set(D,gt))}function ut(D,rt){let gt=c.get(rt).get(D);l.get(rt)!==gt&&(i.uniformBlockBinding(rt,gt,D.__bindingPointIndex),l.set(rt,gt))}function Vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ct=null,pt={},d={},f=new WeakMap,m=[],g=null,_=!1,p=null,h=null,T=null,A=null,y=null,v=null,M=null,w=new Ct(0,0,0),R=0,S=!1,E=null,L=null,z=null,G=null,$=null,te.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:O,disable:K,bindFramebuffer:tt,drawBuffers:j,useProgram:Ft,setBlending:he,setMaterial:zt,setFlipSided:Ut,setCullFace:yt,setLineWidth:ue,setPolygonOffset:Mt,setScissorTest:Ht,activeTexture:Ce,bindTexture:ge,unbindTexture:C,compressedTexImage2D:x,compressedTexImage3D:B,texImage2D:Tt,texImage3D:st,updateUBOMapping:wt,uniformBlockBinding:ut,texStorage2D:ot,texStorage3D:bt,texSubImage2D:X,texSubImage3D:Q,compressedTexSubImage2D:W,compressedTexSubImage3D:Et,scissor:ft,viewport:Dt,reset:Vt}}function U0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _t,u=new WeakMap,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,x){return m?new OffscreenCanvas(C,x):er("canvas")}function _(C,x,B){let X=1,Q=ge(C);if((Q.width>B||Q.height>B)&&(X=B/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let W=Math.floor(X*Q.width),Et=Math.floor(X*Q.height);d===void 0&&(d=g(W,Et));let ot=x?g(W,Et):d;return ot.width=W,ot.height=Et,ot.getContext("2d").drawImage(C,0,0,W,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+W+"x"+Et+")."),ot}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function p(C){return C.generateMipmaps}function h(C){i.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(C,x,B,X,Q=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let W=x;if(x===i.RED&&(B===i.FLOAT&&(W=i.R32F),B===i.HALF_FLOAT&&(W=i.R16F),B===i.UNSIGNED_BYTE&&(W=i.R8)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(W=i.R8UI),B===i.UNSIGNED_SHORT&&(W=i.R16UI),B===i.UNSIGNED_INT&&(W=i.R32UI),B===i.BYTE&&(W=i.R8I),B===i.SHORT&&(W=i.R16I),B===i.INT&&(W=i.R32I)),x===i.RG&&(B===i.FLOAT&&(W=i.RG32F),B===i.HALF_FLOAT&&(W=i.RG16F),B===i.UNSIGNED_BYTE&&(W=i.RG8)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(W=i.RG8UI),B===i.UNSIGNED_SHORT&&(W=i.RG16UI),B===i.UNSIGNED_INT&&(W=i.RG32UI),B===i.BYTE&&(W=i.RG8I),B===i.SHORT&&(W=i.RG16I),B===i.INT&&(W=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(W=i.RGB8UI),B===i.UNSIGNED_SHORT&&(W=i.RGB16UI),B===i.UNSIGNED_INT&&(W=i.RGB32UI),B===i.BYTE&&(W=i.RGB8I),B===i.SHORT&&(W=i.RGB16I),B===i.INT&&(W=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),B===i.UNSIGNED_INT&&(W=i.RGBA32UI),B===i.BYTE&&(W=i.RGBA8I),B===i.SHORT&&(W=i.RGBA16I),B===i.INT&&(W=i.RGBA32I)),x===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),x===i.RGBA){let Et=Q?Qs:qt.getTransfer(X);B===i.FLOAT&&(W=i.RGBA32F),B===i.HALF_FLOAT&&(W=i.RGBA16F),B===i.UNSIGNED_BYTE&&(W=Et===Jt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function y(C,x){let B;return C?x===null||x===mi||x===Ts?B=i.DEPTH24_STENCIL8:x===Tn?B=i.DEPTH32F_STENCIL8:x===Ss&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===mi||x===Ts?B=i.DEPTH_COMPONENT24:x===Tn?B=i.DEPTH_COMPONENT32F:x===Ss&&(B=i.DEPTH_COMPONENT16),B}function v(C,x){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==We&&C.minFilter!==yn?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function M(C){let x=C.target;x.removeEventListener("dispose",M),R(x),x.isVideoTexture&&u.delete(x)}function w(C){let x=C.target;x.removeEventListener("dispose",w),E(x)}function R(C){let x=n.get(C);if(x.__webglInit===void 0)return;let B=C.source,X=f.get(B);if(X){let Q=X[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(C),Object.keys(X).length===0&&f.delete(B)}n.remove(C)}function S(C){let x=n.get(C);i.deleteTexture(x.__webglTexture);let B=C.source,X=f.get(B);delete X[x.__cacheKey],a.memory.textures--}function E(C){let x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let Q=0;Q<x.__webglFramebuffer[X].length;Q++)i.deleteFramebuffer(x.__webglFramebuffer[X][Q]);else i.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)i.deleteFramebuffer(x.__webglFramebuffer[X]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let B=C.textures;for(let X=0,Q=B.length;X<Q;X++){let W=n.get(B[X]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(B[X])}n.remove(C)}let L=0;function z(){L=0}function G(){let C=L;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),L+=1,C}function $(C){let x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function Z(C,x){let B=n.get(C);if(C.isVideoTexture&&Ht(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){let X=C.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(B,C,x);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function q(C,x){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){U(B,C,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function at(C,x){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){U(B,C,x);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function H(C,x){let B=n.get(C);if(C.version>0&&B.__version!==C.version){O(B,C,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}let ct={[ma]:i.REPEAT,[ai]:i.CLAMP_TO_EDGE,[ga]:i.MIRRORED_REPEAT},pt={[We]:i.NEAREST,[$h]:i.NEAREST_MIPMAP_NEAREST,[br]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[eo]:i.LINEAR_MIPMAP_NEAREST,[pi]:i.LINEAR_MIPMAP_LINEAR},St={[jh]:i.NEVER,[su]:i.ALWAYS,[Qh]:i.LESS,[nc]:i.LEQUAL,[tu]:i.EQUAL,[iu]:i.GEQUAL,[eu]:i.GREATER,[nu]:i.NOTEQUAL};function Bt(C,x){if(x.type===Tn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===yn||x.magFilter===eo||x.magFilter===br||x.magFilter===pi||x.minFilter===yn||x.minFilter===eo||x.minFilter===br||x.minFilter===pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ct[x.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ct[x.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ct[x.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,pt[x.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,pt[x.minFilter]),x.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,St[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===We||x.minFilter!==br&&x.minFilter!==pi||x.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function te(C,x){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",M));let X=x.source,Q=f.get(X);Q===void 0&&(Q={},f.set(X,Q));let W=$(x);if(W!==C.__cacheKey){Q[W]===void 0&&(Q[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[W].usedTimes++;let Et=Q[C.__cacheKey];Et!==void 0&&(Q[C.__cacheKey].usedTimes--,Et.usedTimes===0&&S(x)),C.__cacheKey=W,C.__webglTexture=Q[W].texture}return B}function Y(C,x,B){return Math.floor(Math.floor(C/B)/x)}function it(C,x,B,X){let W=C.updateRanges;if(W.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,X,x.data);else{W.sort((st,ft)=>st.start-ft.start);let Et=0;for(let st=1;st<W.length;st++){let ft=W[Et],Dt=W[st],wt=ft.start+ft.count,ut=Y(Dt.start,x.width,4),Vt=Y(ft.start,x.width,4);Dt.start<=wt+1&&ut===Vt&&Y(Dt.start+Dt.count-1,x.width,4)===ut?ft.count=Math.max(ft.count,Dt.start+Dt.count-ft.start):(++Et,W[Et]=Dt)}W.length=Et+1;let ot=i.getParameter(i.UNPACK_ROW_LENGTH),bt=i.getParameter(i.UNPACK_SKIP_PIXELS),Tt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let st=0,ft=W.length;st<ft;st++){let Dt=W[st],wt=Math.floor(Dt.start/4),ut=Math.ceil(Dt.count/4),Vt=wt%x.width,D=Math.floor(wt/x.width),rt=ut,lt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Vt),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,Vt,D,rt,lt,B,X,x.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ot),i.pixelStorei(i.UNPACK_SKIP_PIXELS,bt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Tt)}}function U(C,x,B){let X=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=i.TEXTURE_3D);let Q=te(C,x),W=x.source;e.bindTexture(X,C.__webglTexture,i.TEXTURE0+B);let Et=n.get(W);if(W.version!==Et.__version||Q===!0){e.activeTexture(i.TEXTURE0+B);let ot=qt.getPrimaries(qt.workingColorSpace),bt=x.colorSpace===Jn?null:qt.getPrimaries(x.colorSpace),Tt=x.colorSpace===Jn||ot===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let st=_(x.image,!1,s.maxTextureSize);st=Ce(x,st);let ft=r.convert(x.format,x.colorSpace),Dt=r.convert(x.type),wt=A(x.internalFormat,ft,Dt,x.colorSpace,x.isVideoTexture);Bt(X,x);let ut,Vt=x.mipmaps,D=x.isVideoTexture!==!0,rt=Et.__version===void 0||Q===!0,lt=W.dataReady,gt=v(x,st);if(x.isDepthTexture)wt=y(x.format===ws,x.type),rt&&(D?e.texStorage2D(i.TEXTURE_2D,1,wt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,wt,st.width,st.height,0,ft,Dt,null));else if(x.isDataTexture)if(Vt.length>0){D&&rt&&e.texStorage2D(i.TEXTURE_2D,gt,wt,Vt[0].width,Vt[0].height);for(let et=0,J=Vt.length;et<J;et++)ut=Vt[et],D?lt&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,ut.width,ut.height,ft,Dt,ut.data):e.texImage2D(i.TEXTURE_2D,et,wt,ut.width,ut.height,0,ft,Dt,ut.data);x.generateMipmaps=!1}else D?(rt&&e.texStorage2D(i.TEXTURE_2D,gt,wt,st.width,st.height),lt&&it(x,st,ft,Dt)):e.texImage2D(i.TEXTURE_2D,0,wt,st.width,st.height,0,ft,Dt,st.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){D&&rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,wt,Vt[0].width,Vt[0].height,st.depth);for(let et=0,J=Vt.length;et<J;et++)if(ut=Vt[et],x.format!==fn)if(ft!==null)if(D){if(lt)if(x.layerUpdates.size>0){let vt=cc(ut.width,ut.height,x.format,x.type);for(let Ot of x.layerUpdates){let re=ut.data.subarray(Ot*vt/ut.data.BYTES_PER_ELEMENT,(Ot+1)*vt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,Ot,ut.width,ut.height,1,ft,re)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,ut.width,ut.height,st.depth,ft,ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,wt,ut.width,ut.height,st.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?lt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,ut.width,ut.height,st.depth,ft,Dt,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,wt,ut.width,ut.height,st.depth,0,ft,Dt,ut.data)}else{D&&rt&&e.texStorage2D(i.TEXTURE_2D,gt,wt,Vt[0].width,Vt[0].height);for(let et=0,J=Vt.length;et<J;et++)ut=Vt[et],x.format!==fn?ft!==null?D?lt&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,ut.width,ut.height,ft,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,et,wt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?lt&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,ut.width,ut.height,ft,Dt,ut.data):e.texImage2D(i.TEXTURE_2D,et,wt,ut.width,ut.height,0,ft,Dt,ut.data)}else if(x.isDataArrayTexture)if(D){if(rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,wt,st.width,st.height,st.depth),lt)if(x.layerUpdates.size>0){let et=cc(st.width,st.height,x.format,x.type);for(let J of x.layerUpdates){let vt=st.data.subarray(J*et/st.data.BYTES_PER_ELEMENT,(J+1)*et/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,st.width,st.height,1,ft,Dt,vt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,ft,Dt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,st.width,st.height,st.depth,0,ft,Dt,st.data);else if(x.isData3DTexture)D?(rt&&e.texStorage3D(i.TEXTURE_3D,gt,wt,st.width,st.height,st.depth),lt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,ft,Dt,st.data)):e.texImage3D(i.TEXTURE_3D,0,wt,st.width,st.height,st.depth,0,ft,Dt,st.data);else if(x.isFramebufferTexture){if(rt)if(D)e.texStorage2D(i.TEXTURE_2D,gt,wt,st.width,st.height);else{let et=st.width,J=st.height;for(let vt=0;vt<gt;vt++)e.texImage2D(i.TEXTURE_2D,vt,wt,et,J,0,ft,Dt,null),et>>=1,J>>=1}}else if(Vt.length>0){if(D&&rt){let et=ge(Vt[0]);e.texStorage2D(i.TEXTURE_2D,gt,wt,et.width,et.height)}for(let et=0,J=Vt.length;et<J;et++)ut=Vt[et],D?lt&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,ft,Dt,ut):e.texImage2D(i.TEXTURE_2D,et,wt,ft,Dt,ut);x.generateMipmaps=!1}else if(D){if(rt){let et=ge(st);e.texStorage2D(i.TEXTURE_2D,gt,wt,et.width,et.height)}lt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,Dt,st)}else e.texImage2D(i.TEXTURE_2D,0,wt,ft,Dt,st);p(x)&&h(X),Et.__version=W.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function O(C,x,B){if(x.image.length!==6)return;let X=te(C,x),Q=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+B);let W=n.get(Q);if(Q.version!==W.__version||X===!0){e.activeTexture(i.TEXTURE0+B);let Et=qt.getPrimaries(qt.workingColorSpace),ot=x.colorSpace===Jn?null:qt.getPrimaries(x.colorSpace),bt=x.colorSpace===Jn||Et===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let Tt=x.isCompressedTexture||x.image[0].isCompressedTexture,st=x.image[0]&&x.image[0].isDataTexture,ft=[];for(let J=0;J<6;J++)!Tt&&!st?ft[J]=_(x.image[J],!0,s.maxCubemapSize):ft[J]=st?x.image[J].image:x.image[J],ft[J]=Ce(x,ft[J]);let Dt=ft[0],wt=r.convert(x.format,x.colorSpace),ut=r.convert(x.type),Vt=A(x.internalFormat,wt,ut,x.colorSpace),D=x.isVideoTexture!==!0,rt=W.__version===void 0||X===!0,lt=Q.dataReady,gt=v(x,Dt);Bt(i.TEXTURE_CUBE_MAP,x);let et;if(Tt){D&&rt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Vt,Dt.width,Dt.height);for(let J=0;J<6;J++){et=ft[J].mipmaps;for(let vt=0;vt<et.length;vt++){let Ot=et[vt];x.format!==fn?wt!==null?D?lt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt,0,0,Ot.width,Ot.height,wt,Ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt,Vt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt,0,0,Ot.width,Ot.height,wt,ut,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt,Vt,Ot.width,Ot.height,0,wt,ut,Ot.data)}}}else{if(et=x.mipmaps,D&&rt){et.length>0&&gt++;let J=ge(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Vt,J.width,J.height)}for(let J=0;J<6;J++)if(st){D?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ft[J].width,ft[J].height,wt,ut,ft[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Vt,ft[J].width,ft[J].height,0,wt,ut,ft[J].data);for(let vt=0;vt<et.length;vt++){let re=et[vt].image[J].image;D?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt+1,0,0,re.width,re.height,wt,ut,re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt+1,Vt,re.width,re.height,0,wt,ut,re.data)}}else{D?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,wt,ut,ft[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Vt,wt,ut,ft[J]);for(let vt=0;vt<et.length;vt++){let Ot=et[vt];D?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt+1,0,0,wt,ut,Ot.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt+1,Vt,wt,ut,Ot.image[J])}}}p(x)&&h(i.TEXTURE_CUBE_MAP),W.__version=Q.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function K(C,x,B,X,Q,W){let Et=r.convert(B.format,B.colorSpace),ot=r.convert(B.type),bt=A(B.internalFormat,Et,ot,B.colorSpace),Tt=n.get(x),st=n.get(B);if(st.__renderTarget=x,!Tt.__hasExternalTextures){let ft=Math.max(1,x.width>>W),Dt=Math.max(1,x.height>>W);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,W,bt,ft,Dt,x.depth,0,Et,ot,null):e.texImage2D(Q,W,bt,ft,Dt,0,Et,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Mt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,Q,st.__webglTexture,0,ue(x)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,Q,st.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(C,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,C),x.depthBuffer){let X=x.depthTexture,Q=X&&X.isDepthTexture?X.type:null,W=y(x.stencilBuffer,Q),Et=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=ue(x);Mt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,W,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,W,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,W,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,C)}else{let X=x.textures;for(let Q=0;Q<X.length;Q++){let W=X[Q],Et=r.convert(W.format,W.colorSpace),ot=r.convert(W.type),bt=A(W.internalFormat,Et,ot,W.colorSpace),Tt=ue(x);B&&Mt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,bt,x.width,x.height):Mt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,bt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,bt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function j(C,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let X=n.get(x.depthTexture);X.__renderTarget=x,(!X.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z(x.depthTexture,0);let Q=X.__webglTexture,W=ue(x);if(x.depthTexture.format===ds)Mt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(x.depthTexture.format===ws)Mt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ft(C){let x=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){let X=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){let Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=X}if(C.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");let X=C.texture.mipmaps;X&&X.length>0?j(x.__webglFramebuffer[0],C):j(x.__webglFramebuffer,C)}else if(B){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=i.createRenderbuffer(),tt(x.__webglDepthbuffer[X],C,!1);else{let Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,W)}}else{let X=C.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),tt(x.__webglDepthbuffer,C,!1);else{let Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,W)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(C,x,B){let X=n.get(C);x!==void 0&&K(X.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ft(C)}function P(C){let x=C.texture,B=n.get(C),X=n.get(x);C.addEventListener("dispose",w);let Q=C.textures,W=C.isWebGLCubeRenderTarget===!0,Et=Q.length>1;if(Et||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=x.version,a.memory.textures++),W){B.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[ot]=[];for(let bt=0;bt<x.mipmaps.length;bt++)B.__webglFramebuffer[ot][bt]=i.createFramebuffer()}else B.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)B.__webglFramebuffer[ot]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Et)for(let ot=0,bt=Q.length;ot<bt;ot++){let Tt=n.get(Q[ot]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Mt(C)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ot=0;ot<Q.length;ot++){let bt=Q[ot];B.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ot]);let Tt=r.convert(bt.format,bt.colorSpace),st=r.convert(bt.type),ft=A(bt.internalFormat,Tt,st,bt.colorSpace,C.isXRRenderTarget===!0),Dt=ue(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,ft,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,B.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),tt(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,x);for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0)for(let bt=0;bt<x.mipmaps.length;bt++)K(B.__webglFramebuffer[ot][bt],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt);else K(B.__webglFramebuffer[ot],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(x)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ot=0,bt=Q.length;ot<bt;ot++){let Tt=Q[ot],st=n.get(Tt),ft=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ft=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,st.__webglTexture),Bt(ft,Tt),K(B.__webglFramebuffer,C,Tt,i.COLOR_ATTACHMENT0+ot,ft,0),p(Tt)&&h(ft)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ot=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,X.__webglTexture),Bt(ot,x),x.mipmaps&&x.mipmaps.length>0)for(let bt=0;bt<x.mipmaps.length;bt++)K(B.__webglFramebuffer[bt],C,x,i.COLOR_ATTACHMENT0,ot,bt);else K(B.__webglFramebuffer,C,x,i.COLOR_ATTACHMENT0,ot,0);p(x)&&h(ot),e.unbindTexture()}C.depthBuffer&&Ft(C)}function he(C){let x=C.textures;for(let B=0,X=x.length;B<X;B++){let Q=x[B];if(p(Q)){let W=T(C),Et=n.get(Q).__webglTexture;e.bindTexture(W,Et),h(W),e.unbindTexture()}}}let zt=[],Ut=[];function yt(C){if(C.samples>0){if(Mt(C)===!1){let x=C.textures,B=C.width,X=C.height,Q=i.COLOR_BUFFER_BIT,W=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(C),ot=x.length>1;if(ot)for(let Tt=0;Tt<x.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);let bt=C.texture.mipmaps;bt&&bt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Tt=0;Tt<x.length;Tt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[Tt]);let st=n.get(x[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,st,0)}i.blitFramebuffer(0,0,B,X,0,0,B,X,Q,i.NEAREST),l===!0&&(zt.length=0,Ut.length=0,zt.push(i.COLOR_ATTACHMENT0+Tt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(zt.push(W),Ut.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ut)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,zt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let Tt=0;Tt<x.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[Tt]);let st=n.get(x[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,st,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let x=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ue(C){return Math.min(s.maxSamples,C.samples)}function Mt(C){let x=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ht(C){let x=a.render.frame;u.get(C)!==x&&(u.set(C,x),C.update())}function Ce(C,x){let B=C.colorSpace,X=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Pi&&B!==Jn&&(qt.getTransfer(B)===Jt?(X!==fn||Q!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function ge(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=z,this.setTexture2D=Z,this.setTexture2DArray=q,this.setTexture3D=at,this.setTextureCube=H,this.rebindTextures=Ae,this.setupRenderTarget=P,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=K,this.useMultisampledRTT=Mt}function N0(i,t){function e(n,s=Jn){let r,a=qt.getTransfer(s);if(n===Sn)return i.UNSIGNED_BYTE;if(n===io)return i.UNSIGNED_SHORT_4_4_4_4;if(n===so)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Kl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Zl)return i.BYTE;if(n===Jl)return i.SHORT;if(n===Ss)return i.UNSIGNED_SHORT;if(n===no)return i.INT;if(n===mi)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===dn)return i.HALF_FLOAT;if(n===Ql)return i.ALPHA;if(n===tc)return i.RGB;if(n===fn)return i.RGBA;if(n===ds)return i.DEPTH_COMPONENT;if(n===ws)return i.DEPTH_STENCIL;if(n===ro)return i.RED;if(n===ao)return i.RED_INTEGER;if(n===ec)return i.RG;if(n===oo)return i.RG_INTEGER;if(n===lo)return i.RGBA_INTEGER;if(n===Sr||n===Tr||n===wr||n===Er)if(a===Jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===co||n===ho||n===uo||n===fo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===co)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ho)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===po||n===mo||n===go)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===po||n===mo)return a===Jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===go)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_o||n===xo||n===vo||n===yo||n===Mo||n===bo||n===So||n===To||n===wo||n===Eo||n===Ao||n===Co||n===Ro||n===Po)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_o)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===So)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===To)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Eo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ao)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Co)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ro)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Po)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Io||n===Lo||n===Do)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Io)return a===Jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Do)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uo||n===No||n===Fo||n===Oo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Uo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===No)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var F0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O0=`
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

}`,bc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new dr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ve({vertexShader:F0,fragmentShader:O0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Yt(new je(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sc=class extends Cn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,g=null,_=typeof XRWebGLBinding<"u",p=new bc,h={},T=e.getContextAttributes(),A=null,y=null,v=[],M=[],w=new _t,R=null,S=new be;S.viewport=new ee;let E=new be;E.viewport=new ee;let L=[S,E],z=new Ba,G=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let O=v[U];return O===void 0&&(O=new _s,v[U]=O),O.getTargetRaySpace()},this.getControllerGrip=function(U){let O=v[U];return O===void 0&&(O=new _s,v[U]=O),O.getGripSpace()},this.getHand=function(U){let O=v[U];return O===void 0&&(O=new _s,v[U]=O),O.getHandSpace()};function Z(U){let O=M.indexOf(U.inputSource);if(O===-1)return;let K=v[O];K!==void 0&&(K.update(U.inputSource,U.frame,c||a),K.dispatchEvent({type:U.type,data:U.inputSource}))}function q(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",at);for(let U=0;U<v.length;U++){let O=M[U];O!==null&&(M[U]=null,v[U].disconnect(O))}G=null,$=null,p.reset();for(let U in h)delete h[U];t.setRenderTarget(A),m=null,f=null,d=null,s=null,y=null,it.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",q),s.addEventListener("inputsourceschange",at),T.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,tt=null,j=null;T.depth&&(j=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=T.stencil?ws:ds,tt=T.stencil?Ts:mi);let Ft={colorFormat:e.RGBA8,depthFormat:j,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Ft),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Ne(f.textureWidth,f.textureHeight,{format:fn,type:Sn,depthTexture:new ur(f.textureWidth,f.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let K={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Ne(m.framebufferWidth,m.framebufferHeight,{format:fn,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),it.setContext(s),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function at(U){for(let O=0;O<U.removed.length;O++){let K=U.removed[O],tt=M.indexOf(K);tt>=0&&(M[tt]=null,v[tt].disconnect(K))}for(let O=0;O<U.added.length;O++){let K=U.added[O],tt=M.indexOf(K);if(tt===-1){for(let Ft=0;Ft<v.length;Ft++)if(Ft>=M.length){M.push(K),tt=Ft;break}else if(M[Ft]===null){M[Ft]=K,tt=Ft;break}if(tt===-1)break}let j=v[tt];j&&j.connect(K)}}let H=new I,ct=new I;function pt(U,O,K){H.setFromMatrixPosition(O.matrixWorld),ct.setFromMatrixPosition(K.matrixWorld);let tt=H.distanceTo(ct),j=O.projectionMatrix.elements,Ft=K.projectionMatrix.elements,Ae=j[14]/(j[10]-1),P=j[14]/(j[10]+1),he=(j[9]+1)/j[5],zt=(j[9]-1)/j[5],Ut=(j[8]-1)/j[0],yt=(Ft[8]+1)/Ft[0],ue=Ae*Ut,Mt=Ae*yt,Ht=tt/(-Ut+yt),Ce=Ht*-Ut;if(O.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Ce),U.translateZ(Ht),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),j[10]===-1)U.projectionMatrix.copy(O.projectionMatrix),U.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{let ge=Ae+Ht,C=P+Ht,x=ue-Ce,B=Mt+(tt-Ce),X=he*P/C*ge,Q=zt*P/C*ge;U.projectionMatrix.makePerspective(x,B,X,Q,ge,C),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function St(U,O){O===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(O.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let O=U.near,K=U.far;p.texture!==null&&(p.depthNear>0&&(O=p.depthNear),p.depthFar>0&&(K=p.depthFar)),z.near=E.near=S.near=O,z.far=E.far=S.far=K,(G!==z.near||$!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),G=z.near,$=z.far),z.layers.mask=U.layers.mask|6,S.layers.mask=z.layers.mask&3,E.layers.mask=z.layers.mask&5;let tt=U.parent,j=z.cameras;St(z,tt);for(let Ft=0;Ft<j.length;Ft++)St(j[Ft],tt);j.length===2?pt(z,S,E):z.projectionMatrix.copy(S.projectionMatrix),Bt(U,z,tt)};function Bt(U,O,K){K===null?U.matrix.copy(O.matrixWorld):(U.matrix.copy(K.matrixWorld),U.matrix.invert(),U.matrix.multiply(O.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(O.projectionMatrix),U.projectionMatrixInverse.copy(O.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=fs*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(U){l=U,f!==null&&(f.fixedFoveation=U),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=U)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(U){return h[U]};let te=null;function Y(U,O){if(u=O.getViewerPose(c||a),g=O,u!==null){let K=u.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let tt=!1;K.length!==z.cameras.length&&(z.cameras.length=0,tt=!0);for(let P=0;P<K.length;P++){let he=K[P],zt=null;if(m!==null)zt=m.getViewport(he);else{let yt=d.getViewSubImage(f,he);zt=yt.viewport,P===0&&(t.setRenderTargetTextures(y,yt.colorTexture,yt.depthStencilTexture),t.setRenderTarget(y))}let Ut=L[P];Ut===void 0&&(Ut=new be,Ut.layers.enable(P),Ut.viewport=new ee,L[P]=Ut),Ut.matrix.fromArray(he.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(he.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(zt.x,zt.y,zt.width,zt.height),P===0&&(z.matrix.copy(Ut.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),tt===!0&&z.cameras.push(Ut)}let j=s.enabledFeatures;if(j&&j.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let P=d.getDepthInformation(K[0]);P&&P.isValid&&P.texture&&p.init(P,s.renderState)}if(j&&j.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let P=0;P<K.length;P++){let he=K[P].camera;if(he){let zt=h[he];zt||(zt=new dr,h[he]=zt);let Ut=d.getCameraImage(he);zt.sourceTexture=Ut}}}}for(let K=0;K<v.length;K++){let tt=M[K],j=v[K];tt!==null&&j!==void 0&&j.update(tt,O,c||a)}te&&te(U,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),g=null}let it=new Lu;it.setAnimationLoop(Y),this.setAnimationLoop=function(U){te=U},this.dispose=function(){}}},Gi=new hn,B0=new jt;function z0(i,t){function e(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,ac(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,T,A,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),d(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,y)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),_(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,T,A):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,e(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Ie&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,e(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Ie&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,e(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,e(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let T=t.get(h),A=T.envMap,y=T.envMapRotation;A&&(p.envMap.value=A,Gi.copy(y),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),p.envMapRotation.value.setFromMatrix4(B0.makeRotationFromEuler(Gi)),p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,T,A){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*T,p.scale.value=A*.5,h.map&&(p.map.value=h.map,e(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,T){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ie&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){let T=t.get(h).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function k0(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,A){let y=A.program;n.uniformBlockBinding(T,y)}function c(T,A){let y=s[T.id];y===void 0&&(g(T),y=u(T),s[T.id]=y,T.addEventListener("dispose",p));let v=A.program;n.updateUBOMapping(T,v);let M=t.render.frame;r[T.id]!==M&&(f(T),r[T.id]=M)}function u(T){let A=d();T.__bindingPointIndex=A;let y=i.createBuffer(),v=T.__size,M=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,v,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,y),y}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){let A=s[T.id],y=T.uniforms,v=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let M=0,w=y.length;M<w;M++){let R=Array.isArray(y[M])?y[M]:[y[M]];for(let S=0,E=R.length;S<E;S++){let L=R[S];if(m(L,M,S,v)===!0){let z=L.__offset,G=Array.isArray(L.value)?L.value:[L.value],$=0;for(let Z=0;Z<G.length;Z++){let q=G[Z],at=_(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,z+$,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,$),$+=at.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,A,y,v){let M=T.value,w=A+"_"+y;if(v[w]===void 0)return typeof M=="number"||typeof M=="boolean"?v[w]=M:v[w]=M.clone(),!0;{let R=v[w];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return v[w]=M,!0}else if(R.equals(M)===!1)return R.copy(M),!0}return!1}function g(T){let A=T.uniforms,y=0,v=16;for(let w=0,R=A.length;w<R;w++){let S=Array.isArray(A[w])?A[w]:[A[w]];for(let E=0,L=S.length;E<L;E++){let z=S[E],G=Array.isArray(z.value)?z.value:[z.value];for(let $=0,Z=G.length;$<Z;$++){let q=G[$],at=_(q),H=y%v,ct=H%at.boundary,pt=H+ct;y+=ct,pt!==0&&v-pt<at.storage&&(y+=v-pt),z.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=at.storage}}}let M=y%v;return M>0&&(y+=v-M),T.__size=y,T.__cache={},this}function _(T){let A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),A}function p(T){let A=T.target;A.removeEventListener("dispose",p);let y=a.indexOf(A.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function h(){for(let T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}var Is=class{constructor(t={}){let{canvas:e=ru(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let g=new Uint32Array(4),_=new Int32Array(4),p=null,h=null,T=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,v=!1;this._outputColorSpace=Me;let M=0,w=0,R=null,S=-1,E=null,L=new ee,z=new ee,G=null,$=new Ct(0),Z=0,q=e.width,at=e.height,H=1,ct=null,pt=null,St=new ee(0,0,q,at),Bt=new ee(0,0,q,at),te=!1,Y=new xs,it=!1,U=!1,O=new jt,K=new I,tt=new ee,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ft=!1;function Ae(){return R===null?H:1}let P=n;function he(b,N){return e.getContext(b,N)}try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",et,!1),P===null){let N="webgl2";if(P=he(N,b),P===null)throw he(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let zt,Ut,yt,ue,Mt,Ht,Ce,ge,C,x,B,X,Q,W,Et,ot,bt,Tt,st,ft,Dt,wt,ut,Vt;function D(){zt=new sg(P),zt.init(),wt=new N0(P,zt),Ut=new Km(P,zt,t,wt),yt=new D0(P,zt),Ut.reversedDepthBuffer&&f&&yt.buffers.depth.setReversed(!0),ue=new og(P),Mt=new y0,Ht=new U0(P,zt,yt,Mt,Ut,wt,ue),Ce=new Qm(y),ge=new ig(y),C=new ff(P),ut=new Zm(P,C),x=new rg(P,C,ue,ut),B=new cg(P,x,C,ue),st=new lg(P,Ut,Ht),ot=new jm(Mt),X=new v0(y,Ce,ge,zt,Ut,ut,ot),Q=new z0(y,Mt),W=new b0,Et=new C0(zt),Tt=new $m(y,Ce,ge,yt,B,m,l),bt=new I0(y,B,Ut),Vt=new k0(P,ue,Ut,yt),ft=new Jm(P,zt,ue),Dt=new ag(P,zt,ue),ue.programs=X.programs,y.capabilities=Ut,y.extensions=zt,y.properties=Mt,y.renderLists=W,y.shadowMap=bt,y.state=yt,y.info=ue}D();let rt=new Sc(y,P);this.xr=rt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let b=zt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=zt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(q,at,!1))},this.getSize=function(b){return b.set(q,at)},this.setSize=function(b,N,k=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=b,at=N,e.width=Math.floor(b*H),e.height=Math.floor(N*H),k===!0&&(e.style.width=b+"px",e.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(q*H,at*H).floor()},this.setDrawingBufferSize=function(b,N,k){q=b,at=N,H=k,e.width=Math.floor(b*k),e.height=Math.floor(N*k),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(St)},this.setViewport=function(b,N,k,V){b.isVector4?St.set(b.x,b.y,b.z,b.w):St.set(b,N,k,V),yt.viewport(L.copy(St).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(Bt)},this.setScissor=function(b,N,k,V){b.isVector4?Bt.set(b.x,b.y,b.z,b.w):Bt.set(b,N,k,V),yt.scissor(z.copy(Bt).multiplyScalar(H).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(b){yt.setScissorTest(te=b)},this.setOpaqueSort=function(b){ct=b},this.setTransparentSort=function(b){pt=b},this.getClearColor=function(b){return b.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,k=!0){let V=0;if(b){let F=!1;if(R!==null){let nt=R.texture.format;F=nt===lo||nt===oo||nt===ao}if(F){let nt=R.texture.type,dt=nt===Sn||nt===mi||nt===Ss||nt===Ts||nt===io||nt===so,xt=Tt.getClearColor(),mt=Tt.getClearAlpha(),Lt=xt.r,Nt=xt.g,Rt=xt.b;dt?(g[0]=Lt,g[1]=Nt,g[2]=Rt,g[3]=mt,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Lt,_[1]=Nt,_[2]=Rt,_[3]=mt,P.clearBufferiv(P.COLOR,0,_))}else V|=P.COLOR_BUFFER_BIT}N&&(V|=P.DEPTH_BUFFER_BIT),k&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",et,!1),Tt.dispose(),W.dispose(),Et.dispose(),Mt.dispose(),Ce.dispose(),ge.dispose(),B.dispose(),ut.dispose(),Vt.dispose(),X.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",An),rt.removeEventListener("sessionend",Gc),Mi.stop()};function lt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let b=ue.autoReset,N=bt.enabled,k=bt.autoUpdate,V=bt.needsUpdate,F=bt.type;D(),ue.autoReset=b,bt.enabled=N,bt.autoUpdate=k,bt.needsUpdate=V,bt.type=F}function et(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function J(b){let N=b.target;N.removeEventListener("dispose",J),vt(N)}function vt(b){Ot(b),Mt.remove(b)}function Ot(b){let N=Mt.get(b).programs;N!==void 0&&(N.forEach(function(k){X.releaseProgram(k)}),b.isShaderMaterial&&X.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,k,V,F,nt){N===null&&(N=j);let dt=F.isMesh&&F.matrixWorld.determinant()<0,xt=ud(b,N,k,V,F);yt.setMaterial(V,dt);let mt=k.index,Lt=1;if(V.wireframe===!0){if(mt=x.getWireframeAttribute(k),mt===void 0)return;Lt=2}let Nt=k.drawRange,Rt=k.attributes.position,Xt=Nt.start*Lt,ne=(Nt.start+Nt.count)*Lt;nt!==null&&(Xt=Math.max(Xt,nt.start*Lt),ne=Math.min(ne,(nt.start+nt.count)*Lt)),mt!==null?(Xt=Math.max(Xt,0),ne=Math.min(ne,mt.count)):Rt!=null&&(Xt=Math.max(Xt,0),ne=Math.min(ne,Rt.count));let me=ne-Xt;if(me<0||me===1/0)return;ut.setup(F,V,xt,k,mt);let le,se=ft;if(mt!==null&&(le=C.get(mt),se=Dt,se.setIndex(le)),F.isMesh)V.wireframe===!0?(yt.setLineWidth(V.wireframeLinewidth*Ae()),se.setMode(P.LINES)):se.setMode(P.TRIANGLES);else if(F.isLine){let It=V.linewidth;It===void 0&&(It=1),yt.setLineWidth(It*Ae()),F.isLineSegments?se.setMode(P.LINES):F.isLineLoop?se.setMode(P.LINE_LOOP):se.setMode(P.LINE_STRIP)}else F.isPoints?se.setMode(P.POINTS):F.isSprite&&se.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ps("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),se.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))se.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let It=F._multiDrawStarts,fe=F._multiDrawCounts,Zt=F._multiDrawCount,$e=mt?C.get(mt).bytesPerElement:1,Zi=Mt.get(V).currentProgram.getUniforms();for(let Ze=0;Ze<Zt;Ze++)Zi.setValue(P,"_gl_DrawID",Ze),se.render(It[Ze]/$e,fe[Ze])}else if(F.isInstancedMesh)se.renderInstances(Xt,me,F.count);else if(k.isInstancedBufferGeometry){let It=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,fe=Math.min(k.instanceCount,It);se.renderInstances(Xt,me,fe)}else se.render(Xt,me)};function re(b,N,k){b.transparent===!0&&b.side===Ve&&b.forceSinglePass===!1?(b.side=Ie,b.needsUpdate=!0,zr(b,N,k),b.side=Wn,b.needsUpdate=!0,zr(b,N,k),b.side=Ve):zr(b,N,k)}this.compile=function(b,N,k=null){k===null&&(k=b),h=Et.get(k),h.init(N),A.push(h),k.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),b!==k&&b.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights();let V=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let nt=F.material;if(nt)if(Array.isArray(nt))for(let dt=0;dt<nt.length;dt++){let xt=nt[dt];re(xt,k,F),V.add(xt)}else re(nt,k,F),V.add(nt)}),h=A.pop(),V},this.compileAsync=function(b,N,k=null){let V=this.compile(b,N,k);return new Promise(F=>{function nt(){if(V.forEach(function(dt){Mt.get(dt).currentProgram.isReady()&&V.delete(dt)}),V.size===0){F(b);return}setTimeout(nt,10)}zt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Kt=null;function Fn(b){Kt&&Kt(b)}function An(){Mi.stop()}function Gc(){Mi.start()}let Mi=new Lu;Mi.setAnimationLoop(Fn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(b){Kt=b,rt.setAnimationLoop(b),b===null?Mi.stop():Mi.start()},rt.addEventListener("sessionstart",An),rt.addEventListener("sessionend",Gc),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(N),N=rt.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,N,R),h=Et.get(b,A.length),h.init(N),A.push(h),O.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Y.setFromProjectionMatrix(O,vn,N.reversedDepth),U=this.localClippingEnabled,it=ot.init(this.clippingPlanes,U),p=W.get(b,T.length),p.init(),T.push(p),rt.enabled===!0&&rt.isPresenting===!0){let nt=y.xr.getDepthSensingMesh();nt!==null&&ol(nt,N,-1/0,y.sortObjects)}ol(b,N,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(ct,pt),Ft=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Ft&&Tt.addToRenderList(p,b),this.info.render.frame++,it===!0&&ot.beginShadows();let k=h.state.shadowsArray;bt.render(k,b,N),it===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=p.opaque,F=p.transmissive;if(h.setupLights(),N.isArrayCamera){let nt=N.cameras;if(F.length>0)for(let dt=0,xt=nt.length;dt<xt;dt++){let mt=nt[dt];Xc(V,F,b,mt)}Ft&&Tt.render(b);for(let dt=0,xt=nt.length;dt<xt;dt++){let mt=nt[dt];Wc(p,b,mt,mt.viewport)}}else F.length>0&&Xc(V,F,b,N),Ft&&Tt.render(b),Wc(p,b,N);R!==null&&w===0&&(Ht.updateMultisampleRenderTarget(R),Ht.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(y,b,N),ut.resetDefaultState(),S=-1,E=null,A.pop(),A.length>0?(h=A[A.length-1],it===!0&&ot.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,T.pop(),T.length>0?p=T[T.length-1]:p=null};function ol(b,N,k,V){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)h.pushLight(b),b.castShadow&&h.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Y.intersectsSprite(b)){V&&tt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(O);let dt=B.update(b),xt=b.material;xt.visible&&p.push(b,dt,xt,k,tt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Y.intersectsObject(b))){let dt=B.update(b),xt=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),tt.copy(b.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),tt.copy(dt.boundingSphere.center)),tt.applyMatrix4(b.matrixWorld).applyMatrix4(O)),Array.isArray(xt)){let mt=dt.groups;for(let Lt=0,Nt=mt.length;Lt<Nt;Lt++){let Rt=mt[Lt],Xt=xt[Rt.materialIndex];Xt&&Xt.visible&&p.push(b,dt,Xt,k,tt.z,Rt)}}else xt.visible&&p.push(b,dt,xt,k,tt.z,null)}}let nt=b.children;for(let dt=0,xt=nt.length;dt<xt;dt++)ol(nt[dt],N,k,V)}function Wc(b,N,k,V){let F=b.opaque,nt=b.transmissive,dt=b.transparent;h.setupLightsView(k),it===!0&&ot.setGlobalState(y.clippingPlanes,k),V&&yt.viewport(L.copy(V)),F.length>0&&Br(F,N,k),nt.length>0&&Br(nt,N,k),dt.length>0&&Br(dt,N,k),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Xc(b,N,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[V.id]===void 0&&(h.state.transmissionRenderTarget[V.id]=new Ne(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?dn:Sn,minFilter:pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));let nt=h.state.transmissionRenderTarget[V.id],dt=V.viewport||L;nt.setSize(dt.z*y.transmissionResolutionScale,dt.w*y.transmissionResolutionScale);let xt=y.getRenderTarget(),mt=y.getActiveCubeFace(),Lt=y.getActiveMipmapLevel();y.setRenderTarget(nt),y.getClearColor($),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),Ft&&Tt.render(k);let Nt=y.toneMapping;y.toneMapping=Zn;let Rt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),h.setupLightsView(V),it===!0&&ot.setGlobalState(y.clippingPlanes,V),Br(b,k,V),Ht.updateMultisampleRenderTarget(nt),Ht.updateRenderTargetMipmap(nt),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let ne=0,me=N.length;ne<me;ne++){let le=N[ne],se=le.object,It=le.geometry,fe=le.material,Zt=le.group;if(fe.side===Ve&&se.layers.test(V.layers)){let $e=fe.side;fe.side=Ie,fe.needsUpdate=!0,qc(se,k,V,It,fe,Zt),fe.side=$e,fe.needsUpdate=!0,Xt=!0}}Xt===!0&&(Ht.updateMultisampleRenderTarget(nt),Ht.updateRenderTargetMipmap(nt))}y.setRenderTarget(xt,mt,Lt),y.setClearColor($,Z),Rt!==void 0&&(V.viewport=Rt),y.toneMapping=Nt}function Br(b,N,k){let V=N.isScene===!0?N.overrideMaterial:null;for(let F=0,nt=b.length;F<nt;F++){let dt=b[F],xt=dt.object,mt=dt.geometry,Lt=dt.group,Nt=dt.material;Nt.allowOverride===!0&&V!==null&&(Nt=V),xt.layers.test(k.layers)&&qc(xt,N,k,mt,Nt,Lt)}}function qc(b,N,k,V,F,nt){b.onBeforeRender(y,N,k,V,F,nt),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(y,N,k,V,b,nt),F.transparent===!0&&F.side===Ve&&F.forceSinglePass===!1?(F.side=Ie,F.needsUpdate=!0,y.renderBufferDirect(k,N,V,F,b,nt),F.side=Wn,F.needsUpdate=!0,y.renderBufferDirect(k,N,V,F,b,nt),F.side=Ve):y.renderBufferDirect(k,N,V,F,b,nt),b.onAfterRender(y,N,k,V,F,nt)}function zr(b,N,k){N.isScene!==!0&&(N=j);let V=Mt.get(b),F=h.state.lights,nt=h.state.shadowsArray,dt=F.state.version,xt=X.getParameters(b,F.state,nt,N,k),mt=X.getProgramCacheKey(xt),Lt=V.programs;V.environment=b.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(b.isMeshStandardMaterial?ge:Ce).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Lt===void 0&&(b.addEventListener("dispose",J),Lt=new Map,V.programs=Lt);let Nt=Lt.get(mt);if(Nt!==void 0){if(V.currentProgram===Nt&&V.lightsStateVersion===dt)return $c(b,xt),Nt}else xt.uniforms=X.getUniforms(b),b.onBeforeCompile(xt,y),Nt=X.acquireProgram(xt,mt),Lt.set(mt,Nt),V.uniforms=xt.uniforms;let Rt=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Rt.clippingPlanes=ot.uniform),$c(b,xt),V.needsLights=fd(b),V.lightsStateVersion=dt,V.needsLights&&(Rt.ambientLightColor.value=F.state.ambient,Rt.lightProbe.value=F.state.probe,Rt.directionalLights.value=F.state.directional,Rt.directionalLightShadows.value=F.state.directionalShadow,Rt.spotLights.value=F.state.spot,Rt.spotLightShadows.value=F.state.spotShadow,Rt.rectAreaLights.value=F.state.rectArea,Rt.ltc_1.value=F.state.rectAreaLTC1,Rt.ltc_2.value=F.state.rectAreaLTC2,Rt.pointLights.value=F.state.point,Rt.pointLightShadows.value=F.state.pointShadow,Rt.hemisphereLights.value=F.state.hemi,Rt.directionalShadowMap.value=F.state.directionalShadowMap,Rt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Rt.spotShadowMap.value=F.state.spotShadowMap,Rt.spotLightMatrix.value=F.state.spotLightMatrix,Rt.spotLightMap.value=F.state.spotLightMap,Rt.pointShadowMap.value=F.state.pointShadowMap,Rt.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Nt,V.uniformsList=null,Nt}function Yc(b){if(b.uniformsList===null){let N=b.currentProgram.getUniforms();b.uniformsList=Rs.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function $c(b,N){let k=Mt.get(b);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function ud(b,N,k,V,F){N.isScene!==!0&&(N=j),Ht.resetTextureUnits();let nt=N.fog,dt=V.isMeshStandardMaterial?N.environment:null,xt=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Pi,mt=(V.isMeshStandardMaterial?ge:Ce).get(V.envMap||dt),Lt=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Nt=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Rt=!!k.morphAttributes.position,Xt=!!k.morphAttributes.normal,ne=!!k.morphAttributes.color,me=Zn;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(me=y.toneMapping);let le=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,se=le!==void 0?le.length:0,It=Mt.get(V),fe=h.state.lights;if(it===!0&&(U===!0||b!==E)){let Be=b===E&&V.id===S;ot.setState(V,b,Be)}let Zt=!1;V.version===It.__version?(It.needsLights&&It.lightsStateVersion!==fe.state.version||It.outputColorSpace!==xt||F.isBatchedMesh&&It.batching===!1||!F.isBatchedMesh&&It.batching===!0||F.isBatchedMesh&&It.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&It.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&It.instancing===!1||!F.isInstancedMesh&&It.instancing===!0||F.isSkinnedMesh&&It.skinning===!1||!F.isSkinnedMesh&&It.skinning===!0||F.isInstancedMesh&&It.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&It.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&It.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&It.instancingMorph===!1&&F.morphTexture!==null||It.envMap!==mt||V.fog===!0&&It.fog!==nt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==ot.numPlanes||It.numIntersection!==ot.numIntersection)||It.vertexAlphas!==Lt||It.vertexTangents!==Nt||It.morphTargets!==Rt||It.morphNormals!==Xt||It.morphColors!==ne||It.toneMapping!==me||It.morphTargetsCount!==se)&&(Zt=!0):(Zt=!0,It.__version=V.version);let $e=It.currentProgram;Zt===!0&&($e=zr(V,N,F));let Zi=!1,Ze=!1,Hs=!1,pe=$e.getUniforms(),rn=It.uniforms;if(yt.useProgram($e.program)&&(Zi=!0,Ze=!0,Hs=!0),V.id!==S&&(S=V.id,Ze=!0),Zi||E!==b){yt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),pe.setValue(P,"projectionMatrix",b.projectionMatrix),pe.setValue(P,"viewMatrix",b.matrixWorldInverse);let Ge=pe.map.cameraPosition;Ge!==void 0&&Ge.setValue(P,K.setFromMatrixPosition(b.matrixWorld)),Ut.logarithmicDepthBuffer&&pe.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&pe.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,Ze=!0,Hs=!0)}if(F.isSkinnedMesh){pe.setOptional(P,F,"bindMatrix"),pe.setOptional(P,F,"bindMatrixInverse");let Be=F.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),pe.setValue(P,"boneTexture",Be.boneTexture,Ht))}F.isBatchedMesh&&(pe.setOptional(P,F,"batchingTexture"),pe.setValue(P,"batchingTexture",F._matricesTexture,Ht),pe.setOptional(P,F,"batchingIdTexture"),pe.setValue(P,"batchingIdTexture",F._indirectTexture,Ht),pe.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&pe.setValue(P,"batchingColorTexture",F._colorsTexture,Ht));let an=k.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&st.update(F,k,$e),(Ze||It.receiveShadow!==F.receiveShadow)&&(It.receiveShadow=F.receiveShadow,pe.setValue(P,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(rn.envMap.value=mt,rn.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(rn.envMapIntensity.value=N.environmentIntensity),Ze&&(pe.setValue(P,"toneMappingExposure",y.toneMappingExposure),It.needsLights&&dd(rn,Hs),nt&&V.fog===!0&&Q.refreshFogUniforms(rn,nt),Q.refreshMaterialUniforms(rn,V,H,at,h.state.transmissionRenderTarget[b.id]),Rs.upload(P,Yc(It),rn,Ht)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Rs.upload(P,Yc(It),rn,Ht),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&pe.setValue(P,"center",F.center),pe.setValue(P,"modelViewMatrix",F.modelViewMatrix),pe.setValue(P,"normalMatrix",F.normalMatrix),pe.setValue(P,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Be=V.uniformsGroups;for(let Ge=0,ll=Be.length;Ge<ll;Ge++){let bi=Be[Ge];Vt.update(bi,$e),Vt.bind(bi,$e)}}return $e}function dd(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function fd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,N,k){let V=Mt.get(b);V.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Mt.get(b.texture).__webglTexture=N,Mt.get(b.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:k,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){let k=Mt.get(b);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0};let pd=P.createFramebuffer();this.setRenderTarget=function(b,N=0,k=0){R=b,M=N,w=k;let V=!0,F=null,nt=!1,dt=!1;if(b){let mt=Mt.get(b);if(mt.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(P.FRAMEBUFFER,null),V=!1;else if(mt.__webglFramebuffer===void 0)Ht.setupRenderTarget(b);else if(mt.__hasExternalTextures)Ht.rebindTextures(b,Mt.get(b.texture).__webglTexture,Mt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Rt=b.depthTexture;if(mt.__boundDepthTexture!==Rt){if(Rt!==null&&Mt.has(Rt)&&(b.width!==Rt.image.width||b.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ht.setupDepthRenderbuffer(b)}}let Lt=b.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(dt=!0);let Nt=Mt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Nt[N])?F=Nt[N][k]:F=Nt[N],nt=!0):b.samples>0&&Ht.useMultisampledRTT(b)===!1?F=Mt.get(b).__webglMultisampledFramebuffer:Array.isArray(Nt)?F=Nt[k]:F=Nt,L.copy(b.viewport),z.copy(b.scissor),G=b.scissorTest}else L.copy(St).multiplyScalar(H).floor(),z.copy(Bt).multiplyScalar(H).floor(),G=te;if(k!==0&&(F=pd),yt.bindFramebuffer(P.FRAMEBUFFER,F)&&V&&yt.drawBuffers(b,F),yt.viewport(L),yt.scissor(z),yt.setScissorTest(G),nt){let mt=Mt.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,mt.__webglTexture,k)}else if(dt){let mt=N;for(let Lt=0;Lt<b.textures.length;Lt++){let Nt=Mt.get(b.textures[Lt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Lt,Nt.__webglTexture,k,mt)}}else if(b!==null&&k!==0){let mt=Mt.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,mt.__webglTexture,k)}S=-1},this.readRenderTargetPixels=function(b,N,k,V,F,nt,dt,xt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=Mt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&dt!==void 0&&(mt=mt[dt]),mt){yt.bindFramebuffer(P.FRAMEBUFFER,mt);try{let Lt=b.textures[xt],Nt=Lt.format,Rt=Lt.type;if(!Ut.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-V&&k>=0&&k<=b.height-F&&(b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xt),P.readPixels(N,k,V,F,wt.convert(Nt),wt.convert(Rt),nt))}finally{let Lt=R!==null?Mt.get(R).__webglFramebuffer:null;yt.bindFramebuffer(P.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(b,N,k,V,F,nt,dt,xt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=Mt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&dt!==void 0&&(mt=mt[dt]),mt)if(N>=0&&N<=b.width-V&&k>=0&&k<=b.height-F){yt.bindFramebuffer(P.FRAMEBUFFER,mt);let Lt=b.textures[xt],Nt=Lt.format,Rt=Lt.type;if(!Ut.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Xt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Xt),P.bufferData(P.PIXEL_PACK_BUFFER,nt.byteLength,P.STREAM_READ),b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xt),P.readPixels(N,k,V,F,wt.convert(Nt),wt.convert(Rt),0);let ne=R!==null?Mt.get(R).__webglFramebuffer:null;yt.bindFramebuffer(P.FRAMEBUFFER,ne);let me=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await au(P,me,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Xt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,nt),P.deleteBuffer(Xt),P.deleteSync(me),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,k=0){let V=Math.pow(2,-k),F=Math.floor(b.image.width*V),nt=Math.floor(b.image.height*V),dt=N!==null?N.x:0,xt=N!==null?N.y:0;Ht.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,k,0,0,dt,xt,F,nt),yt.unbindTexture()};let md=P.createFramebuffer(),gd=P.createFramebuffer();this.copyTextureToTexture=function(b,N,k=null,V=null,F=0,nt=null){nt===null&&(F!==0?(ps("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),nt=F,F=0):nt=0);let dt,xt,mt,Lt,Nt,Rt,Xt,ne,me,le=b.isCompressedTexture?b.mipmaps[nt]:b.image;if(k!==null)dt=k.max.x-k.min.x,xt=k.max.y-k.min.y,mt=k.isBox3?k.max.z-k.min.z:1,Lt=k.min.x,Nt=k.min.y,Rt=k.isBox3?k.min.z:0;else{let an=Math.pow(2,-F);dt=Math.floor(le.width*an),xt=Math.floor(le.height*an),b.isDataArrayTexture?mt=le.depth:b.isData3DTexture?mt=Math.floor(le.depth*an):mt=1,Lt=0,Nt=0,Rt=0}V!==null?(Xt=V.x,ne=V.y,me=V.z):(Xt=0,ne=0,me=0);let se=wt.convert(N.format),It=wt.convert(N.type),fe;N.isData3DTexture?(Ht.setTexture3D(N,0),fe=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ht.setTexture2DArray(N,0),fe=P.TEXTURE_2D_ARRAY):(Ht.setTexture2D(N,0),fe=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);let Zt=P.getParameter(P.UNPACK_ROW_LENGTH),$e=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Zi=P.getParameter(P.UNPACK_SKIP_PIXELS),Ze=P.getParameter(P.UNPACK_SKIP_ROWS),Hs=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,le.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,le.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Lt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Nt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Rt);let pe=b.isDataArrayTexture||b.isData3DTexture,rn=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){let an=Mt.get(b),Be=Mt.get(N),Ge=Mt.get(an.__renderTarget),ll=Mt.get(Be.__renderTarget);yt.bindFramebuffer(P.READ_FRAMEBUFFER,Ge.__webglFramebuffer),yt.bindFramebuffer(P.DRAW_FRAMEBUFFER,ll.__webglFramebuffer);for(let bi=0;bi<mt;bi++)pe&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Mt.get(b).__webglTexture,F,Rt+bi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Mt.get(N).__webglTexture,nt,me+bi)),P.blitFramebuffer(Lt,Nt,dt,xt,Xt,ne,dt,xt,P.DEPTH_BUFFER_BIT,P.NEAREST);yt.bindFramebuffer(P.READ_FRAMEBUFFER,null),yt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(F!==0||b.isRenderTargetTexture||Mt.has(b)){let an=Mt.get(b),Be=Mt.get(N);yt.bindFramebuffer(P.READ_FRAMEBUFFER,md),yt.bindFramebuffer(P.DRAW_FRAMEBUFFER,gd);for(let Ge=0;Ge<mt;Ge++)pe?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,an.__webglTexture,F,Rt+Ge):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,an.__webglTexture,F),rn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Be.__webglTexture,nt,me+Ge):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Be.__webglTexture,nt),F!==0?P.blitFramebuffer(Lt,Nt,dt,xt,Xt,ne,dt,xt,P.COLOR_BUFFER_BIT,P.NEAREST):rn?P.copyTexSubImage3D(fe,nt,Xt,ne,me+Ge,Lt,Nt,dt,xt):P.copyTexSubImage2D(fe,nt,Xt,ne,Lt,Nt,dt,xt);yt.bindFramebuffer(P.READ_FRAMEBUFFER,null),yt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else rn?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(fe,nt,Xt,ne,me,dt,xt,mt,se,It,le.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(fe,nt,Xt,ne,me,dt,xt,mt,se,le.data):P.texSubImage3D(fe,nt,Xt,ne,me,dt,xt,mt,se,It,le):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,nt,Xt,ne,dt,xt,se,It,le.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,nt,Xt,ne,le.width,le.height,se,le.data):P.texSubImage2D(P.TEXTURE_2D,nt,Xt,ne,dt,xt,se,It,le);P.pixelStorei(P.UNPACK_ROW_LENGTH,Zt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,$e),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Zi),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ze),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Hs),nt===0&&N.generateMipmaps&&P.generateMipmap(fe),yt.unbindTexture()},this.initRenderTarget=function(b){Mt.get(b).__webglFramebuffer===void 0&&Ht.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ht.setTextureCube(b,0):b.isData3DTexture?Ht.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ht.setTexture2DArray(b,0):Ht.setTexture2D(b,0),yt.unbindTexture()},this.resetState=function(){M=0,w=0,R=null,yt.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}};var Ou={type:"change"},Ac={type:"start"},zu={type:"end"},Go=new Xn,Bu=new ln,V0=Math.cos(70*Le.DEG2RAD),Ee=new I,Ye=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ec=1e-6,Ds=class extends yr{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ui.ROTATE,MIDDLE:ui.DOLLY,RIGHT:ui.PAN},this.touches={ONE:di.ROTATE,TWO:di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new cn,this._lastTargetPosition=new I,this._quat=new cn().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ms,this._sphericalDelta=new Ms,this._scale=1,this._panOffset=new I,this._rotateStart=new _t,this._rotateEnd=new _t,this._rotateDelta=new _t,this._panStart=new _t,this._panEnd=new _t,this._panDelta=new _t,this._dollyStart=new _t,this._dollyEnd=new _t,this._dollyDelta=new _t,this._dollyDirection=new I,this._mouse=new _t,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=G0.bind(this),this._onPointerDown=H0.bind(this),this._onPointerUp=W0.bind(this),this._onContextMenu=K0.bind(this),this._onMouseWheel=Y0.bind(this),this._onKeyDown=$0.bind(this),this._onTouchStart=Z0.bind(this),this._onTouchMove=J0.bind(this),this._onMouseDown=X0.bind(this),this._onMouseMove=q0.bind(this),this._interceptControlDown=j0.bind(this),this._interceptControlUp=Q0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ou),this.update(),this.state=ie.NONE}update(t=null){let e=this.object.position;Ee.copy(e).sub(this.target),Ee.applyQuaternion(this._quat),this._spherical.setFromVector3(Ee),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ye:n>Math.PI&&(n-=Ye),s<-Math.PI?s+=Ye:s>Math.PI&&(s-=Ye),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ee.setFromSpherical(this._spherical),Ee.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ee),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ee.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ee.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Go.origin.copy(this.object.position),Go.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Go.direction))<V0?this.object.lookAt(this.target):(Bu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Go.intersectPlane(Bu,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ec||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ec||this._lastTargetPosition.distanceToSquared(this.target)>Ec?(this.dispatchEvent(Ou),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ye/60*this.autoRotateSpeed*t:Ye/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ee.setFromMatrixColumn(e,0),Ee.multiplyScalar(-t),this._panOffset.add(Ee)}_panUp(t,e){this.screenSpacePanning===!0?Ee.setFromMatrixColumn(e,1):(Ee.setFromMatrixColumn(e,0),Ee.crossVectors(this.object.up,Ee)),Ee.multiplyScalar(t),this._panOffset.add(Ee)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ee.copy(s).sub(this.target);let r=Ee.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ye*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ye*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ye*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ye*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ye*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ye*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ye*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ye*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new _t,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function H0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function G0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function W0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zu),this.state=ie.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function X0(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ui.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ie.DOLLY;break;case ui.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}break;case ui.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Ac)}function q0(i){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Y0(i){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(i.preventDefault(),this.dispatchEvent(Ac),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(zu))}function $0(i){this.enabled!==!1&&this._handleKeyDown(i)}function Z0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case di.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ie.TOUCH_ROTATE;break;case di.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case di.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ie.TOUCH_DOLLY_PAN;break;case di.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Ac)}function J0(i){switch(this._trackPointer(i),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ie.NONE}}function K0(i){this.enabled!==!1&&i.preventDefault()}function j0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Q0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Wo=class extends qn{constructor(){super();let t=new Fe;t.deleteAttribute("uv");let e=new In({side:Ie}),n=new In,s=new _r(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Yt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Ii(t,n,6),o=new xe;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Yt(t,Us(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Yt(t,Us(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Yt(t,Us(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new Yt(t,Us(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let f=new Yt(t,Us(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let m=new Yt(t,Us(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Us(i){return new mr({color:0,emissive:16777215,emissiveIntensity:i})}var Ns={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var tn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},t_=new Oi(-1,1,1,-1,0,1),Cc=class extends de{constructor(){super(),this.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ae([0,2,0,0,2,0],2))}},e_=new Cc,gi=class{constructor(t){this._mesh=new Yt(e_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,t_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Xo=class extends tn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ve?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Kn.clone(t.uniforms),this.material=new ve({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new gi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Cr=class extends tn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},qo=class extends tn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Yo=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new _t);this._width=n.width,this._height=n.height,e=new Ne(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:dn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Xo(Ns),this.copyPass.material.blending=bn,this.clock=new xr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Cr!==void 0&&(a instanceof Cr?n=!0:a instanceof qo&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new _t);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var $o=class extends tn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ct}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var ku={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ct(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Fs=class i extends tn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new _t(t.x,t.y):new _t(256,256),this.clearColor=new Ct(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ne(r,a,{type:dn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Ne(r,a,{type:dn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Ne(r,a,{type:dn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=ku;this.highPassUniforms=Kn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ve({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new _t(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Kn.clone(Ns.uniforms),this.blendMaterial=new ve({uniforms:this.copyUniforms,vertexShader:Ns.vertexShader,fragmentShader:Ns.fragmentShader,blending:$n,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ct,this._oldClearAlpha=1,this._basic=new Xe,this._fsQuad=new gi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new _t(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ve({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new _t(.5,.5)},direction:{value:new _t(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(t){return new ve({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Fs.BlurDirectionX=new _t(1,0);Fs.BlurDirectionY=new _t(0,1);var Rr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Zo=class extends tn{constructor(){super(),this.uniforms=Kn.clone(Rr.uniforms),this.material=new pr({name:Rr.name,uniforms:this.uniforms,vertexShader:Rr.vertexShader,fragmentShader:Rr.fragmentShader}),this._fsQuad=new gi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},qt.getTransfer(this._outputColorSpace)===Jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ya?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===$a?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Za?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===fi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ka?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ja?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ja&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var en=(i,t,e,n,s,r,a,o,l="\u2014")=>({id:i,name:t,cn:e,type:n,shape:s,desc:r,features:a,detail:o,kernel:l,units:s[2]||s[0]}),Pr=[en("input","INPUT","\u4E00\u5F20\u56FE\u50CF\uFF0C\u65C5\u7A0B\u7684\u5F00\u59CB","input",[227,227,3],"\u8BA1\u7B97\u673A\u770B\u4E0D\u5230\u201C\u72D7\u201D\uFF0C\u5B83\u9996\u5148\u63A5\u6536\u7684\u662F\u7EA2\u3001\u7EFF\u3001\u84DD\u4E09\u4E2A\u901A\u9053\u7684\u50CF\u7D20\u6570\u503C\u3002",["RGB \u4E09\u901A\u9053","\u50CF\u7D20 \u2192 \u6570\u503C"],"\u8FD9\u91CC\u7528\u7A0B\u5E8F\u7ED8\u5236\u7684\u72AC\u7C7B\u793A\u610F\u56FE\u4F5C\u4E3A\u8F93\u5165\uFF0C\u4E0D\u4E0A\u4F20\u56FE\u7247\uFF0C\u4E5F\u4E0D\u8FDB\u884C\u771F\u5B9E\u8BC6\u522B\u3002"),en("conv1","CONV1","\u5148\u770B\u89C1\u8FB9\u7F18","conv",[55,55,96],"\u7B2C\u4E00\u5C42\u5377\u79EF\u50CF\u4E00\u7EC4\u5C0F\u578B\u89C6\u89C9\u63A2\u6D4B\u5668\uFF0C\u5728\u56FE\u50CF\u4E0A\u6ED1\u52A8\uFF0C\u5BFB\u627E\u6700\u57FA\u7840\u7684\u89C6\u89C9\u7EBF\u7D22\u3002",["\u8FB9\u7F18\u4E0E\u65B9\u5411","\u8272\u5F69\u5BF9\u6BD4","\u7B80\u5355\u7EB9\u7406"],"96 \u4E2A\u5377\u79EF\u6838\u5F62\u6210 96 \u5F20\u7279\u5F81\u56FE\u3002\u968F\u540E\u4F7F\u7528 ReLU\uFF1B\u539F\u7F51\u7EDC\u8FD8\u5728\u6B64\u9636\u6BB5\u4F7F\u7528\u5C40\u90E8\u54CD\u5E94\u5F52\u4E00\u5316 LRN\u3002","11 \xD7 11 / \u6B65\u957F 4"),en("pool1","POOL1","\u4FDD\u7559\u91CD\u8981\u7684\uFF0C\u7F29\u5C0F\u5176\u4F59","pool",[27,27,96],"\u6C60\u5316\u964D\u4F4E\u7279\u5F81\u56FE\u7684\u7A7A\u95F4\u5C3A\u5BF8\uFF0C\u5728\u5C40\u90E8\u533A\u57DF\u4FDD\u7559\u6700\u5F3A\u7684\u54CD\u5E94\u3002",["\u6700\u5927\u6C60\u5316","\u7A7A\u95F4\u538B\u7F29"],"\u4F7F\u7528\u91CD\u53E0\u6700\u5927\u6C60\u5316\uFF1A\u7A97\u53E3 3\xD73\uFF0C\u6B65\u957F 2\u3002\u901A\u9053\u6570\u4ECD\u4E3A 96\uFF0C\u800C\u5BBD\u3001\u9AD8\u4ECE 55 \u964D\u5230 27\u3002","3 \xD7 3 / \u6B65\u957F 2"),en("conv2","CONV2","\u4ECE\u7EBF\u6761\u8D70\u5411\u7EB9\u7406","conv",[27,27,256],"\u7F51\u7EDC\u628A\u524D\u4E00\u5C42\u7684\u7B80\u5355\u7EBF\u7D22\u7EC4\u5408\u8D77\u6765\uFF0C\u5F00\u59CB\u54CD\u5E94\u7EB9\u7406\u548C\u5C40\u90E8\u56FE\u6848\u3002",["\u91CD\u590D\u7EB9\u7406","\u5C40\u90E8\u56FE\u6848"],"256 \u4E2A\u8F93\u51FA\u901A\u9053\u3002\u539F\u59CB\u6A21\u578B\u5728\u53CC GPU \u95F4\u91C7\u7528\u5206\u7EC4\u8FDE\u63A5\uFF1B\u5377\u79EF\u540E\u63A5 ReLU \u4E0E LRN\u3002","5 \xD7 5 / \u6B65\u957F 1"),en("pool2","POOL2","\u66F4\u7D27\u51D1\u7684\u89C6\u89C9\u6458\u8981","pool",[13,13,256],"\u518D\u4E00\u6B21\u538B\u7F29\u7A7A\u95F4\u4FE1\u606F\uFF0C\u8BA9\u540E\u9762\u7684\u5C42\u5173\u6CE8\u66F4\u5927\u8303\u56F4\u5185\u7684\u89C6\u89C9\u7ED3\u6784\u3002",["\u4FDD\u7559\u5F3A\u54CD\u5E94","\u964D\u4F4E\u8BA1\u7B97\u91CF"],"\u6700\u5927\u6C60\u5316\u7A97\u53E3 3\xD73\u3001\u6B65\u957F 2\u3002\u5BBD\u9AD8\u7531 27 \u964D\u81F3 13\uFF0C256 \u4E2A\u901A\u9053\u4FDD\u7559\u3002","3 \xD7 3 / \u6B65\u957F 2"),en("conv3","CONV3","\u62FC\u51FA\u66F4\u590D\u6742\u7684\u5F62\u72B6","conv",[13,13,384],"\u5728\u66F4\u5927\u7684\u611F\u53D7\u91CE\u4E2D\u7EC4\u5408\u7EB9\u7406\u548C\u8FB9\u7F18\uFF0C\u63D0\u53D6\u66F4\u590D\u6742\u7684\u5C40\u90E8\u5F62\u72B6\u3002",["\u5F62\u72B6\u7EC4\u5408","\u66F4\u5927\u611F\u53D7\u91CE"],"384 \u4E2A\u8F93\u51FA\u901A\u9053\uFF0C\u5377\u79EF\u540E\u4F7F\u7528 ReLU\u3002\u8FD9\u4E00\u5C42\u8FDE\u63A5\u524D\u4E00\u5C42\u5168\u90E8\u901A\u9053\uFF0C\u4E0D\u662F\u7B80\u5355\u9010\u901A\u9053\u8FC7\u6EE4\u3002","3 \xD7 3 / \u6B65\u957F 1"),en("conv4","CONV4","\u5BFB\u627E\u6709\u610F\u4E49\u7684\u7EC4\u5408","conv",[13,13,384],"\u66F4\u6DF1\u7684\u7279\u5F81\u4E0D\u518D\u53EA\u662F\u50CF\u7D20\u8FB9\u7F18\uFF0C\u800C\u662F\u591A\u4E2A\u89C6\u89C9\u7EBF\u7D22\u7684\u7EC4\u5408\u3002",["\u90E8\u4EF6\u5F0F\u7EBF\u7D22","\u5C42\u6B21\u5316\u8868\u793A"],"384 \u4E2A\u8F93\u51FA\u901A\u9053\uFF0C\u539F\u59CB\u5B9E\u73B0\u91C7\u7528\u5206\u7EC4\u8FDE\u63A5\u3002\u6240\u8C13\u201C\u90E8\u4EF6\u201D\u662F\u7406\u89E3\u7F51\u7EDC\u7684\u76F4\u89C2\u6BD4\u55BB\uFF0C\u5E76\u975E\u6BCF\u4E2A\u901A\u9053\u90FD\u5BF9\u5E94\u660E\u786E\u8BED\u4E49\u3002","3 \xD7 3 / \u6B65\u957F 1"),en("conv5","CONV5","\u5F62\u6210\u9AD8\u7EA7\u89C6\u89C9\u7279\u5F81","conv",[13,13,256],"\u6700\u540E\u4E00\u7EC4\u5377\u79EF\u6574\u5408\u4E4B\u524D\u7684\u8868\u793A\uFF0C\u4E3A\u56FE\u50CF\u5206\u7C7B\u51C6\u5907\u66F4\u62BD\u8C61\u7684\u89C6\u89C9\u7279\u5F81\u3002",["\u9AD8\u7EA7\u7279\u5F81","\u8BED\u4E49\u7EC4\u5408"],"256 \u4E2A\u8F93\u51FA\u901A\u9053\uFF0C\u5377\u79EF\u540E\u63A5 ReLU\uFF0C\u518D\u8FDB\u5165\u6700\u540E\u4E00\u6B21\u6700\u5927\u6C60\u5316\u3002","3 \xD7 3 / \u6B65\u957F 1"),en("pool5","POOL5","\u538B\u7F29\u4E3A\u5206\u7C7B\u7684\u539F\u6599","pool",[6,6,256],"\u5C06\u9AD8\u7EA7\u7279\u5F81\u538B\u7F29\u4E3A 6\xD76\xD7256 \u7684\u5F20\u91CF\uFF0C\u518D\u5C55\u5E73\u4E3A 9,216 \u4E2A\u6570\u503C\u3002",["\u6700\u540E\u4E00\u6B21\u6C60\u5316","\u5C55\u5E73\u4E3A\u5411\u91CF"],"\u5C55\u5E73\u53EA\u6539\u53D8\u7EC4\u7EC7\u65B9\u5F0F\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u751F\u6210\u65B0\u7279\u5F81\u3002\u8FD9\u4E2A\u5411\u91CF\u63A5\u5165\u7B2C\u4E00\u4E2A\u5168\u8FDE\u63A5\u5C42\u3002","3 \xD7 3 / \u6B65\u957F 2"),en("fc6","FC6","\u7EC4\u5408\u5168\u5C40\u89C6\u89C9\u8BC1\u636E","fc",[4096],"\u5168\u8FDE\u63A5\u5C42\u5F00\u59CB\u5C06\u524D\u9762\u63D0\u53D6\u51FA\u7684\u89C6\u89C9\u7279\u5F81\u7EC4\u5408\u8D77\u6765\uFF0C\u7528\u4E8E\u6700\u7EC8\u5206\u7C7B\u3002",["4,096 \u4E2A\u795E\u7ECF\u5143","ReLU \xB7 Dropout"],"\u6BCF\u4E2A\u5355\u5143\u63A5\u6536\u5C55\u5E73\u540E\u7684\u7279\u5F81\u3002\u8BAD\u7EC3\u65F6\u4F7F\u7528 Dropout\uFF0C\u964D\u4F4E\u8FC7\u62DF\u5408\uFF1B\u56FE\u4E2D\u7684\u8282\u70B9\u662F\u62BD\u6837\u793A\u610F\uFF0C\u800C\u975E\u5B8C\u6574 4,096 \u4E2A\u3002"),en("fc7","FC7","\u8FDB\u4E00\u6B65\u6574\u5408\u9AD8\u7EA7\u7279\u5F81","fc",[4096],"\u7B2C\u4E8C\u4E2A\u5168\u8FDE\u63A5\u5C42\u7EE7\u7EED\u6574\u5408\u5168\u5C40\u8BC1\u636E\uFF0C\u5F62\u6210\u6709\u5229\u4E8E\u533A\u5206\u7C7B\u522B\u7684\u8868\u793A\u3002",["4,096 \u4E2A\u795E\u7ECF\u5143","\u5168\u5C40\u7279\u5F81\u7EC4\u5408"],"\u540C\u6837\u4F7F\u7528 ReLU\uFF0C\u5E76\u5728\u8BAD\u7EC3\u65F6\u5E94\u7528 Dropout\u3002\u5C42\u4E0E\u5C42\u7684\u8FDE\u63A5\u6743\u91CD\u7531\u8BAD\u7EC3\u5B66\u4E60\u83B7\u5F97\u3002"),en("fc8","FC8","\u6620\u5C04\u5230 1,000 \u4E2A\u7C7B\u522B","fc",[1e3],"\u6700\u540E\u4E00\u5C42\u5C06\u7F51\u7EDC\u63D0\u53D6\u51FA\u7684\u7279\u5F81\u6620\u5C04\u5230 ImageNet \u7684 1,000 \u4E2A\u7C7B\u522B\u3002",["1,000 \u4E2A\u7C7B\u522B\u5206\u6570","\u5206\u7C7B\u5934"],"\u8F93\u51FA\u7684\u662F\u7C7B\u522B\u5206\u6570 logits\uFF0C\u518D\u7ECF Softmax \u8F6C\u4E3A\u76F8\u5BF9\u6982\u7387\u3002\u72D7\u662F\u4E00\u4E2A\u6982\u5FF5\u603B\u7C7B\uFF0C\u5E76\u975E\u8FD9\u91CC\u4E0E\u91D1\u6BDB\u5E76\u5217\u7684\u6807\u51C6 ImageNet \u7C7B\u522B\u3002"),en("output","OUTPUT","\u4ECE\u6570\u503C\u8D70\u5411\u4E00\u4E2A\u5224\u65AD","output",[1e3],"Softmax \u5C06\u7C7B\u522B\u5206\u6570\u8F6C\u6362\u4E3A\u6982\u7387\u5206\u5E03\u3002\u6700\u9AD8\u5206\u7684\u7C7B\u522B\u6210\u4E3A\u8FD9\u6B21\u9884\u6D4B\u3002",["Golden retriever","\u793A\u610F\u6982\u7387 78%"],"78% \u662F\u9884\u8BBE\u7684\u52A8\u753B\u6F14\u793A\u6570\u503C\uFF0C\u4E0D\u662F\u6A21\u578B\u63A8\u7406\u7ED3\u679C\uFF0C\u4E5F\u4E0D\u8868\u793A\u5DF2\u7ECF\u6821\u51C6\u7684\u771F\u5B9E\u7F6E\u4FE1\u5EA6\u3002")];function Rc(i){return Pr.map((t,e)=>(e-6)*(i?3.35:2.25))}var _i=["\u8F93\u5165\u7F16\u7801","\u5377\u79EF\u4E00","\u6C60\u5316\u4E00","\u5377\u79EF\u4E8C","\u6C60\u5316\u4E8C","\u5377\u79EF\u4E09","\u5377\u79EF\u56DB","\u5377\u79EF\u4E94","\u6C60\u5316\u4E0E\u5C55\u5E73","\u5168\u8FDE\u63A5\u516D","\u5168\u8FDE\u63A5\u4E03","\u5206\u7C7B\u6620\u5C04","\u6982\u7387\u8F93\u51FA"],nn=(i,t,e,n,s,r,a,o,l)=>({title:i,mechanism:t,input:e,output:n,formula:s,explain:r,note:a,visual:o,experiment:l}),Ir=[nn("\u50CF\u7D20\u4E0D\u662F\u7269\u4F53\uFF0C\u6570\u503C\u624D\u662F\u8D77\u70B9","\u989C\u8272\u901A\u9053 \xB7 \u5F20\u91CF\u7F16\u7801","\u793A\u4F8B\u56FE\u50CF","227 \xD7 227 \xD7 3","X \u2208 \u211D\xB2\xB2\u2077\xD7\xB2\xB2\u2077\xD7\xB3","\u5F69\u8272\u56FE\u50CF\u8868\u793A\u4E3A\u4E09\u4E2A\u7A7A\u95F4\u5BF9\u9F50\u7684\u989C\u8272\u901A\u9053\u3002\u7F51\u7EDC\u63A5\u6536\u7684\u662F\u6570\u503C\u5F20\u91CF\uFF0C\u800C\u4E0D\u662F\u4EBA\u7C7B\u7406\u89E3\u7684\u201C\u7269\u4F53\u201D\u3002","\u4F7F\u7528\u5E38\u89C1\u7684 227 \u50CF\u7D20\u5DE5\u7A0B\u7EA6\u5B9A\uFF1B\u539F\u8BBA\u6587\u6587\u5B57\u5199\u4F5C 224 \u50CF\u7D20\u3002\u8FD9\u91CC\u91C7\u7528\u81EA\u7ED8\u6D4B\u8BD5\u56FE\uFF0C\u4E0D\u4E0A\u4F20\u56FE\u50CF\u3002","rgb","channels"),nn("\u5171\u4EAB\u5377\u79EF\u6838\uFF0C\u626B\u63CF\u5C40\u90E8\u611F\u53D7\u91CE","\u5C40\u90E8\u8FDE\u63A5 \xB7 \u6743\u91CD\u5171\u4EAB","227 \xD7 227 \xD7 3","55 \xD7 55 \xD7 96","y\u1D62\u2C7C\u2096 = ReLU(\u03A3 w\u2090\u1D66\u{1D68C}\u2096 \xB7 x\u1D62\u208A\u2090,\u2C7C\u208A\u1D66,\u{1D68C} + b\u2096)","96 \u4E2A 11\xD711 \u5377\u79EF\u6838\u4EE5\u6B65\u957F 4 \u63D0\u53D6\u54CD\u5E94\u3002\u6BCF\u4E2A\u6838\u8986\u76D6\u5168\u90E8\u8F93\u5165\u989C\u8272\u901A\u9053\uFF0C\u5728\u4E0D\u540C\u7A7A\u95F4\u4F4D\u7F6E\u5171\u4EAB\u540C\u4E00\u7EC4\u6743\u91CD\u3002","\u539F\u7F51\u7EDC\u968F\u540E\u4F7F\u7528\u5C40\u90E8\u54CD\u5E94\u5F52\u4E00\u5316\u3002\u4E0B\u65B9\u5B9E\u9A8C\u8BA1\u7B97\u5C0F\u7A97\u53E3\u7684\u52A0\u6743\u548C\uFF0C\u793A\u610F\u56FE\u4E0D\u662F\u8BAD\u7EC3\u540E\u7684\u771F\u5B9E\u54CD\u5E94\u3002","scan","convolution"),nn("\u4FDD\u7559\u5C40\u90E8\u6781\u503C\uFF0C\u538B\u7F29\u7A7A\u95F4\u5206\u8FA8\u7387","\u91CD\u53E0\u6700\u5927\u6C60\u5316","55 \xD7 55 \xD7 96","27 \xD7 27 \xD7 96","y\u1D62\u2C7C\u{1D68C} = max(x\u1D64\u1D65\u{1D68C}), (u,v) \u2208 \u03A9\u1D62\u2C7C","3\xD73 \u7A97\u53E3\u4EE5\u6B65\u957F 2 \u6C47\u96C6\u5C40\u90E8\u6700\u5F3A\u54CD\u5E94\u3002\u7A7A\u95F4\u5C3A\u5BF8\u4E0B\u964D\uFF0C\u901A\u9053\u6570\u4FDD\u6301\u4E0D\u53D8\uFF0C\u76F8\u90BB\u7A97\u53E3\u6709\u91CD\u53E0\u3002","\u6C60\u5316\u4E0D\u662F\u6311\u9009\u6574\u5F20\u56FE\u6700\u4EAE\u7684\u533A\u57DF\uFF0C\u4E5F\u4E0D\u662F\u628A\u6240\u6709\u7279\u5F81\u7B80\u5355\u5E73\u5747\u3002","pool","pooling"),nn("\u591A\u901A\u9053\u6C47\u805A\uFF0C\u6784\u9020\u7EB9\u7406\u54CD\u5E94","\u5206\u7EC4\u5377\u79EF \xB7 \u901A\u9053\u6269\u5C55","27 \xD7 27 \xD7 96","27 \xD7 27 \xD7 256","Y = ReLU(W * X + b)","5\xD75 \u5377\u79EF\u6838\u7EC4\u5408\u524D\u4E00\u5C42\u7684\u7279\u5F81\uFF0C\u8F93\u51FA\u6269\u5C55\u4E3A 256 \u4E2A\u901A\u9053\u3002\u5F20\u91CF\u7684\u7A7A\u95F4\u5206\u8FA8\u7387\u4FDD\u6301\u4E0D\u53D8\u3002","\u539F\u7248\u53CC GPU \u5B9E\u73B0\u91C7\u7528\u5206\u7EC4\u8FDE\u63A5\uFF0C\u968F\u540E\u63A5 ReLU \u548C\u5C40\u90E8\u54CD\u5E94\u5F52\u4E00\u5316\u3002\u7EB9\u7406\u662F\u5408\u6210\u8868\u793A\uFF0C\u4E0D\u5BF9\u5E94\u7279\u5B9A\u8BAD\u7EC3\u901A\u9053\u3002","channels","convolution"),nn("\u8FDB\u4E00\u6B65\u964D\u91C7\u6837\uFF0C\u4FDD\u7559\u901A\u9053\u7ED3\u6784","\u7A7A\u95F4\u964D\u91C7\u6837 \xB7 \u6700\u5927\u54CD\u5E94","27 \xD7 27 \xD7 256","13 \xD7 13 \xD7 256","27 \u2192 13\uFF1B\u901A\u9053\u6570 256 \u2192 256","\u518D\u6B21\u6267\u884C 3\xD73\u3001\u6B65\u957F 2 \u7684\u6700\u5927\u6C60\u5316\u3002\u6BCF\u4E2A\u901A\u9053\u5206\u522B\u7F29\u5C0F\u7A7A\u95F4\u5C3A\u5BF8\uFF0C\u4E3A\u540E\u7EED\u6DF1\u5C42\u5377\u79EF\u63D0\u4F9B\u7D27\u51D1\u8868\u793A\u3002","\u964D\u91C7\u6837\u51CF\u5C11\u7A7A\u95F4\u7EC6\u8282\uFF0C\u5E76\u4E0D\u80FD\u4FDD\u8BC1\u4EFB\u4F55\u8F93\u5165\u53D8\u5316\u90FD\u88AB\u5FFD\u7565\u3002","pooldeep","pooling"),nn("\u8DE8\u901A\u9053\u7EC4\u5408\uFF0C\u6269\u5C55\u8868\u5F81\u7A7A\u95F4","\u5168\u901A\u9053\u8FDE\u63A5 \xB7 \u975E\u7EBF\u6027\u53D8\u6362","13 \xD7 13 \xD7 256","13 \xD7 13 \xD7 384","384 \u4E2A 3\xD73 \u5377\u79EF\u6838\uFF1B\u6B65\u957F 1","\u7B2C\u4E09\u5C42\u5377\u79EF\u8FDE\u63A5\u524D\u4E00\u5C42\u7684\u5168\u90E8\u901A\u9053\uFF0C\u8F93\u51FA 384 \u5F20\u7279\u5F81\u56FE\u3002\u591A\u6B21\u5C40\u90E8\u8FD0\u7B97\u7D2F\u79EF\u51FA\u66F4\u5927\u7684\u6709\u6548\u611F\u53D7\u91CE\u3002","\u7279\u5F81\u6DF1\u5EA6\u589E\u52A0\u4E0D\u610F\u5473\u7740\u6BCF\u4E2A\u901A\u9053\u90FD\u5177\u6709\u53EF\u547D\u540D\u7684\u8BED\u4E49\uFF1B\u8FD9\u91CC\u7528\u7A7A\u95F4\u4F53\u7D20\u548C\u8FDE\u7EBF\u8868\u8FBE\u7EC4\u5408\u5173\u7CFB\u3002","volume","convolution"),nn("\u5206\u7EC4\u8BA1\u7B97\u4E2D\u7684\u5C42\u6B21\u5316\u8868\u793A","\u5206\u7EC4\u5377\u79EF \xB7 \u7279\u5F81\u91CD\u7EC4","13 \xD7 13 \xD7 384","13 \xD7 13 \xD7 384","Y\u2081 = W\u2081 * X\u2081\uFF1BY\u2082 = W\u2082 * X\u2082","\u4E24\u4E2A\u5206\u7EC4\u5206\u522B\u6267\u884C 3\xD73 \u5377\u79EF\uFF0C\u518D\u6784\u6210 384 \u901A\u9053\u8F93\u51FA\u3002\u53EF\u89C1\u7684\u53CC\u901A\u9053\u675F\u7528\u4E8E\u5F3A\u8C03\u539F\u7248\u7684\u5206\u7EC4\u7EA6\u675F\u3002","\u5206\u7EC4\u6E90\u4E8E\u539F\u59CB\u53CC GPU \u7684\u8BA1\u7B97\u5E03\u5C40\uFF0C\u4E0D\u662F\u4E24\u5F20\u72EC\u7ACB\u56FE\u7247\uFF0C\u4E5F\u4E0D\u662F\u4E24\u5957\u8BED\u4E49\u5206\u7C7B\u5668\u3002","groups","convolution"),nn("\u5B8C\u6210\u5377\u79EF\u8868\u5F81\uFF0C\u4EA4\u63A5\u5206\u7C7B\u9636\u6BB5","\u9AD8\u7EA7\u7279\u5F81 \xB7 \u6700\u540E\u4E00\u7EC4\u5377\u79EF","13 \xD7 13 \xD7 384","13 \xD7 13 \xD7 256","13 \xD7 13 \xD7 256 \u4E2A\u54CD\u5E94","\u7B2C\u4E94\u5C42\u901A\u8FC7 3\xD73 \u5206\u7EC4\u5377\u79EF\u5C06\u901A\u9053\u6570\u53D8\u4E3A 256\uFF0C\u7ED3\u5408 ReLU \u540E\u8FDB\u5165\u6700\u7EC8\u7684\u6C60\u5316\u4E0E\u5C55\u5E73\u3002","\u9AD8\u7EA7\u8868\u793A\u4ECD\u662F\u6570\u503C\u5F20\u91CF\uFF0C\u4E0D\u662F\u7F51\u7EDC\u5728\u5185\u90E8\u91CD\u65B0\u753B\u51FA\u4E86\u4E00\u53EA\u5B8C\u6574\u7684\u5C0F\u72D7\u3002","deep","convolution"),nn("\u5F20\u91CF\u91CD\u6392\u4E3A\u5411\u91CF\uFF0C\u800C\u975E\u65B0\u589E\u7279\u5F81","\u6700\u7EC8\u6C60\u5316 \xB7 \u5C55\u5E73","13 \xD7 13 \xD7 256","6 \xD7 6 \xD7 256 \u2192 9,216","vec(X) \u2208 \u211D\u2079\xB2\xB9\u2076","\u6700\u540E\u4E00\u6B21\u6700\u5927\u6C60\u5316\u4EA7\u751F 6\xD76\xD7256 \u5F20\u91CF\u3002\u5C55\u5E73\u4FDD\u7559\u6240\u6709\u6570\u503C\uFF0C\u5C06\u7A7A\u95F4\u53CA\u901A\u9053\u7D22\u5F15\u91CD\u6392\u4E3A\u5355\u4E00\u7D22\u5F15\u3002","\u5C55\u5E73\u672C\u8EAB\u4E0D\u5B66\u4E60\u53C2\u6570\u3002\u8FD9\u91CC\u628A\u91CD\u6392\u9644\u5728\u6C60\u5316\u8282\u70B9\u4E2D\u5C55\u793A\uFF0C\u672A\u589E\u52A0\u4E00\u4E2A\u53EF\u5B66\u4E60\u5C42\u3002","flatten","flatten"),nn("\u5168\u5C40\u8FDE\u63A5\uFF0C\u5C06\u7279\u5F81\u5411\u91CF\u52A0\u6743\u6C47\u805A","\u7A20\u5BC6\u77E9\u9635\u4E58\u6CD5 \xB7 ReLU","9,216","4,096","h = ReLU(Wx + b)","\u7B2C\u516D\u5C42\u8FDE\u63A5\u5C55\u5E73\u540E\u7684\u5168\u90E8\u8F93\u5165\uFF0C\u8F93\u51FA 4,096 \u4E2A\u5355\u5143\u3002\u77E9\u9635\u4E2D\u7684\u6BCF\u4E2A\u6743\u91CD\u51B3\u5B9A\u4E00\u4E2A\u8F93\u5165\u5BF9\u4E00\u4E2A\u8F93\u51FA\u7684\u8D21\u732E\u3002","\u8BAD\u7EC3\u65F6\u4F7F\u7528 Dropout\uFF1B\u5E38\u89C4\u63A8\u7406\u65F6\u4E0D\u968F\u673A\u4E22\u5F03\u8282\u70B9\u3002\u56FE\u4E2D\u7684\u8FDE\u63A5\u4E3A\u62BD\u6837\uFF0C\u4E0D\u7ED8\u5236\u6570\u5343\u4E07\u4E2A\u771F\u5B9E\u6743\u91CD\u3002","dense","weights"),nn("\u5728\u9AD8\u7EF4\u7A7A\u95F4\u4E2D\u7EE7\u7EED\u91CD\u7EC4\u5168\u5C40\u8BC1\u636E","\u7A20\u5BC6\u8FDE\u63A5 \xB7 \u975E\u7EBF\u6027","4,096","4,096","h\u2082 = ReLU(W\u2082h\u2081 + b\u2082)","\u7B2C\u4E8C\u4E2A\u5168\u8FDE\u63A5\u5C42\u7EE7\u7EED\u53D8\u6362\u7279\u5F81\u8868\u793A\uFF0C\u4F7F\u6700\u540E\u7684\u7EBF\u6027\u5206\u7C7B\u5668\u80FD\u591F\u533A\u5206\u4E0D\u540C\u7C7B\u522B\u3002","\u540C\u6837\u5728\u8BAD\u7EC3\u65F6\u4F7F\u7528 Dropout\u3002\u8282\u70B9\u7684\u7A7A\u95F4\u6392\u5217\u662F\u5C55\u9648\u8BBE\u8BA1\uFF0C\u4E0D\u5BF9\u5E94\u5927\u8111\u89E3\u5256\u7ED3\u6784\u3002","dense2","weights"),nn("\u4ECE\u7279\u5F81\u5411\u91CF\u6620\u5C04\u5230\u7C7B\u522B\u5206\u6570","\u7EBF\u6027\u5206\u7C7B\u5934 \xB7 \u7C7B\u522B\u5206\u6570","4,096","1,000","z = Wh + b","\u6700\u540E\u4E00\u4E2A\u5168\u8FDE\u63A5\u5C42\u4EA7\u751F 1,000 \u4E2A\u672A\u7ECF\u6982\u7387\u5F52\u4E00\u5316\u7684\u7C7B\u522B\u5206\u6570\u3002\u9AD8\u5206\u8868\u793A\u76F8\u5BF9\u8BC1\u636E\u66F4\u5F3A\uFF0C\u4F46\u5206\u6570\u672C\u8EAB\u4E0D\u662F\u6982\u7387\u3002","\u6B64\u5C42\u4E0D\u4F7F\u7528 ReLU \u622A\u65AD\u7C7B\u522B\u5206\u6570\uFF1B\u63A5\u4E0B\u6765\u7684 Softmax \u624D\u5C06\u5176\u5F52\u4E00\u5316\u4E3A\u6982\u7387\u5206\u5E03\u3002","logits","softmax"),nn("\u5F52\u4E00\u5316\u3001\u6392\u5E8F\uFF0C\u4EE5\u53CA\u89E3\u91CA\u8FB9\u754C","Softmax \xB7 \u7C7B\u522B\u6392\u5E8F","1,000 \u4E2A\u7C7B\u522B\u5206\u6570","1,000 \u4E2A\u76F8\u5BF9\u6982\u7387","p\u1D62 = exp(z\u1D62 \u2212 m) / \u03A3\u2C7C exp(z\u2C7C \u2212 m)","Softmax \u5C06\u4EFB\u610F\u6709\u9650\u5206\u6570\u8F6C\u6362\u6210\u548C\u4E3A 1 \u7684\u975E\u8D1F\u6570\u503C\u3002\u6982\u7387\u53D7\u6240\u6709\u7C7B\u522B\u5206\u6570\u5171\u540C\u5F71\u54CD\uFF0C\u4E0D\u662F\u72EC\u7ACB\u7684\u53EF\u4FE1\u5EA6\u4FDD\u8BC1\u3002","\u5168\u7F51\u6CA1\u6709\u52A0\u8F7D\u6A21\u578B\u6743\u91CD\uFF1B\u7C7B\u522B\u5206\u6570\u548C\u56FE\u50CF\u5747\u4E3A\u9884\u8BBE\u3002\u5C40\u90E8 Softmax \u5B9E\u9A8C\u662F\u771F\u5B9E\u8BA1\u7B97\uFF0C\u4F46\u4E0D\u6784\u6210\u56FE\u50CF\u8BC6\u522B\u3002","output","softmax")],Vu={input:"\u56FE\u50CF\u7F16\u7801",conv:"\u5377\u79EF\u53D8\u6362",pool:"\u7A7A\u95F4\u538B\u7F29",fc:"\u7A20\u5BC6\u8FDE\u63A5",output:"\u6982\u7387\u5206\u5E03"};function Os(i){if(!i.length||!i.every(Number.isFinite))throw new Error("\u5206\u6570\u5FC5\u987B\u662F\u6709\u9650\u6570\u503C");let t=Math.max(...i),e=i.map(s=>Math.exp(s-t)),n=e.reduce((s,r)=>s+r,0);return e.map(s=>s/n)}function jn(i,t){if(i.length!==t.length)throw new Error("\u7A97\u53E3\u4E0E\u5377\u79EF\u6838\u5C3A\u5BF8\u4E0D\u7B26");return i.reduce((e,n,s)=>e+n*t[s],0)}function Hu(i){return Math.max(...i)}function Gu(i){return i.flat(1/0)}function Jo(){return{time:0,running:!1,paused:!1,complete:!1,speed:1}}function Ko(i){let t=Math.max(0,Math.min(13,i/1.65));return{index:Math.min(12,Math.floor(t)),local:t>=13?1:t%1,progress:t/13}}function xi(i,t,e){switch(t){case"run":return{...Jo(),running:!0,speed:i.speed};case"pause":return i.running?{...i,paused:!i.paused}:i;case"speed":return{...i,speed:[.5,1,2].includes(e)?e:i.speed};case"step":{let n=Math.min(13,Math.floor(i.time/1.65+1e-8)+1);return{...i,time:n*1.65,running:n<13,paused:n<13,complete:n===13}}case"tick":{if(!i.running||i.paused)return i;let n=Math.min(21.45,i.time+Math.max(0,e)*i.speed);return{...i,time:n,running:n<21.45,complete:n>=21.45}}case"reset":return Jo();default:return i}}var n_={input:14006935,conv:8698095,pool:7920587,fc:12100077,output:15186825},Wu=new Fe(1,1,1),i_=new Li(Wu),s_=new Di(.055,7,5);function jo(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new hr(n);return s.colorSpace=Me,s}function Lr(i="all"){return jo(384,384,t=>{t.fillStyle="#153047",t.fillRect(0,0,384,384);for(let e=0;e<12;e++)for(let n=0;n<12;n++){let s=Math.sin(n*.5)*Math.cos(e*.4);t.fillStyle=`rgb(${35+s*15},${66+s*20},${86+s*20})`,t.fillRect(n*32,e*32,31,31)}t.fillStyle="#d4b58a",t.beginPath(),t.ellipse(195,310,110,130,0,0,7),t.fill(),t.fillStyle="#96754d",t.beginPath(),t.ellipse(115,184,39,88,.1,0,7),t.ellipse(275,184,39,88,-.1,0,7),t.fill(),t.fillStyle="#e1c296",t.beginPath(),t.ellipse(195,194,91,107,0,0,7),t.fill(),t.fillStyle="#edd5ad",t.beginPath(),t.ellipse(195,243,59,45,0,0,7),t.fill(),t.fillStyle="#222c32";for(let e of[159,231])t.beginPath(),t.arc(e,191,7,0,7),t.fill();if(t.beginPath(),t.ellipse(195,232,14,10,0,0,7),t.fill(),t.strokeStyle="#5d5244",t.lineWidth=2,t.beginPath(),t.moveTo(195,242),t.lineTo(195,257),t.quadraticCurveTo(178,267,168,255),t.moveTo(195,257),t.quadraticCurveTo(210,267,222,255),t.stroke(),i!=="all"){let e=t.getImageData(0,0,384,384),n=["red","green","blue"].indexOf(i);for(let s=0;s<e.data.length;s+=4)for(let r=0;r<3;r++)r!==n&&(e.data[s+r]*=.12);t.putImageData(e,0,0)}t.strokeStyle="#87bbcb",t.globalAlpha=.18;for(let e=0;e<=384;e+=24)t.beginPath(),t.moveTo(e,0),t.lineTo(e,384),t.moveTo(0,e),t.lineTo(384,e),t.stroke()})}function r_(i){return jo(128,128,t=>{t.fillStyle="#10263d",t.fillRect(0,0,128,128);for(let e=0;e<16;e++)for(let n=0;n<16;n++){let s=(Math.sin(n*.6+i)*Math.cos(e*.55+i)+1)/2;t.fillStyle=`rgba(141,204,239,${s*.8})`,t.fillRect(n*8,e*8,7,7)}t.strokeStyle="#bce6f1",t.globalAlpha=.5,t.lineWidth=1.5;for(let e=0;e<4;e++){t.beginPath();for(let n=0;n<128;n+=4){let s=25+e*23+Math.sin(n*.08+i+e)*12;n?t.lineTo(n,s):t.moveTo(n,s)}t.stroke()}})}function a_(){return jo(128,128,i=>{let t=i.createImageData(128,128);for(let e=0;e<128;e++)for(let n=0;n<128;n++){let s=(e*128+n)*4,r=Math.abs(Math.sin(n*.11)*Math.cos(e*.08));t.data[s]=105,t.data[s+1]=201,t.data[s+2]=222,t.data[s+3]=Math.round(r*160)}i.putImageData(t,0,0)})}function Xu(i,t){let e=new Pe,n=new Pe;e.add(n);let s=n_[t],r=[],a=[],o=[],l=(T=s,A={})=>{let y=new In({color:T,metalness:.3,roughness:.43,emissive:T,emissiveIntensity:.12,...A});return r.push(y),y},c=(T,A=.4)=>{let y=new Xe({color:T,transparent:!0,opacity:A,depthWrite:!1});return r.push(y),y},u=(T,A,y=[0,0,0],v=n)=>{let M=new Yt(T,A);return M.position.set(...y),M.castShadow=!0,M.receiveShadow=!0,v.add(M),M},d=(T,A,y=l(),v=n)=>{let M=u(Wu,y,A,v);M.scale.set(...T);let w=new Mn(i_,new qe({color:s,transparent:!0,opacity:.36}));return M.add(w),M},f=(T,A=.06,y=l())=>{let v=u(s_,y,T);return v.scale.setScalar(A/.055),v},m=(T,A=.25,y=s)=>{let v=new de().setFromPoints(T.map(w=>new I(...w))),M=new li(v,new qe({color:y,transparent:!0,opacity:A,depthWrite:!1}));return n.add(M),M},g=(T,A,y=[0,0,0])=>{let v=u(new Ui(T,.018,5,64),c(s,.4),A);return v.rotation.set(...y),v},_=d([1.8,.1,3.3],[0,-2.35,0],l(1319990,{metalness:.35,emissiveIntensity:.01}));d([1.78,.023,.025],[0,-2.28,1.66],c(s,.7));let p=g(1.7,[0,0,0],[0,Math.PI/2,0]);if(p.visible=!1,t==="input"){let T=["red","green","blue"].map(Lr);for(let v=0;v<3;v++){let M=u(new je(2.4,2.8),l(16777215,{map:T[v],transparent:!0,opacity:.58,side:Ve,depthWrite:!1,emissive:16777215,emissiveMap:T[v]}),[(v-1)*.25,0,(v-1)*.24]);M.rotation.y=Math.PI/2,o.push(M)}let A=Lr(),y=u(new je(2.4,2.8),l(16777215,{map:A,side:Ve,emissive:16777215,emissiveMap:A,emissiveIntensity:.2}),[-.55,0,0]);y.rotation.y=0,y.position.set(-.55,0,.6),e.userData.input=y;for(let v=0;v<3;v++)m([[-.7,-1.7,(v-1)*.7],[.8,-1.5,(v-1)*.7]],.55,[13405838,8961195,9021904][v])}else if(t==="conv"){let T=[0,3.7,0,3.15,0,2.65,2.6,2.45][i],A=i===6?6:7,y=l(s,{transparent:!0,opacity:.1,depthWrite:!1});for(let v=0;v<(i===1||i===3?A:0);v++){let M=(v-(A-1)/2)*.14,w=d([.035,T,T],[M,0,0],y);if(v%2===0){let R=new Xe({map:r_(i*13+v),transparent:!0,opacity:.4,side:Ve,depthWrite:!1});r.push(R);let S=u(new je(T*.94,T*.94),R,[M+.024,0,0]);S.rotation.y=Math.PI/2}}if(i===1){let v=new Pe;n.add(v);for(let w of[-.52,.52])d([.12,.025,1.08],[-.67,w,0],c(11993074,.85),v);for(let w of[-.52,.52])d([.12,1.08,.025],[-.67,0,w],c(11993074,.85),v);a.push({object:v,kind:"scan",base:v.position.clone()});let M=d([.4,.72,.72],[-1.12,0,0],l(11002591,{transparent:!0,opacity:.3}));a.push({object:M,kind:"kernel",base:M.position.clone()});for(let w=0;w<3;w++)for(let R=0;R<3;R++)f([-1.32,(w-1)*.2,(R-1)*.2],.035,l(11793637))}else if(i===3){for(let v=0;v<4;v++){let M=g(.55+v*.13,[.8,0,0],[0,Math.PI/2,0]);a.push({object:M,kind:"rotate",base:M.position.clone()})}for(let v=0;v<4;v++)for(let M=0;M<4;M++)f([.85,(v-1.5)*.55,(M-1.5)*.55],.045)}else if(i===6)for(let v of[-1,1]){let M=g(.77,[0,v*.7,0],[0,Math.PI/2,0]);M.scale.z=.75;for(let w=0;w<8;w++){let R=w/8*Math.PI*2;m([[-.8,v*.7+Math.cos(R)*.5,Math.sin(R)*.5],[.8,v*.7+Math.cos(R)*.5,Math.sin(R)*.5]],.4,v<0?10069991:9032917)}}else{let v=new Ii(new Fe(.09,.09,.09),l(s,{emissiveIntensity:.3}),100),M=new jt;for(let w=0;w<100;w++){let R=(w%5-2)*.25,S=(Math.floor(w/5)%5-2)*.37,E=(Math.floor(w/25)-1.5)*.4;M.makeTranslation(R+.9,S,E),v.setMatrixAt(w,M)}n.add(v),a.push({object:v,kind:"volume",base:v.position.clone()})}}else if(t==="pool"){let T=i===8?5:4,A=[];for(let v=0;v<T;v++)for(let M=0;M<T;M++){let w=(Math.sin(v*1.2+M*.6)+1)/2,R=d([.23,.2+w*.4,.23],[-.4,(v-(T-1)/2)*.45,(M-(T-1)/2)*.45],l(w>.75?12775127:s,{transparent:!0,opacity:.55}));A.push(R)}for(let v=0;v<2;v++)for(let M=0;M<2;M++){let w=[.65,(v-.5)*.8,(M-.5)*.8];d([.24,.24,.24],w,l(12840673)),m([[-.5,w[1]*1.2,w[2]*1.2],w],.4)}let y=d([.035,.98,.98],[-.6,.2,.2],l(10677984,{transparent:!0,opacity:.13,depthWrite:!1}));if(a.push({object:y,kind:"pool",base:y.position.clone()}),i===8)for(let v=0;v<32;v++){let M=f([.9,(v%8-3.5)*.22,(Math.floor(v/8)-1.5)*.25],.045);a.push({object:M,kind:"flatten",base:M.position.clone(),j:v})}}else if(t==="fc")if(i===11){for(let T=0;T<12;T++){let A=.25+T*7%13/7,y=d([.1,A,.14],[(T%3-1)*.32,A/2-1,(Math.floor(T/3)-1.5)*.48],l(T===5?15254416:s));a.push({object:y,kind:"bar",base:y.position.clone(),j:T})}g(1.5,[0,0,0],[0,Math.PI/2,0])}else{let T=i===9?3:4,A=6,y=[];for(let M=0;M<T;M++)for(let w=0;w<A;w++)for(let R=0;R<A;R++){let S=[(M-(T-1)/2)*.43,(w-2.5)*.42,(R-2.5)*.42];if(f(S,.045,l(s,{emissiveIntensity:.5})),M>0){let E=[S[0]-.43,((w*3+R)%6-2.5)*.42,((R*2+w)%6-2.5)*.42];y.push(...E,...S)}}let v=new de;v.setAttribute("position",new ae(y,3)),n.add(new Mn(v,new qe({color:s,transparent:!0,opacity:.22})));for(let M=0;M<3;M++){let w=g(1.5+M*.1,[0,0,0],[0,Math.PI/2,M*.4]);a.push({object:w,kind:"rotate",base:w.position.clone()})}}else{let T=[.63,.19,.11,.07];for(let A=0;A<4;A++){let y=d([.32,T[A]*3.7,.5],[(A-1.5)*.43,T[A]*1.85-1.3,0],l(A===0?14992270:7573407));a.push({object:y,kind:"bar",base:y.position.clone(),j:A})}for(let A=0;A<3;A++){let y=g(1.4+A*.12,[0,0,0],[0,Math.PI/2,0]);a.push({object:y,kind:"rotate",base:y.position.clone()})}e.userData.outputBars=!0}let h=new Yt(new je(2.6,2.6),new Xe({map:a_(),color:s,transparent:!0,opacity:0,side:Ve,blending:$n,depthWrite:!1}));return h.rotation.y=Math.PI/2,h.position.x=.78,n.add(h),e.userData.tick=(T,A,y,v,M={})=>{for(let w of r)w.emissive&&(w.emissiveIntensity=.07+A*.55),w.isMeshStandardMaterial&&!w.map&&(w.envMapIntensity=.45);if(p.visible=A>.5,p.material.opacity=Math.max(0,A-.5)*.9,p.scale.setScalar(.65+y*.75),h.material.opacity=A>.5?Math.sin(y*Math.PI)*.42:0,e.userData.input){let w=M.channel||"all";if(e.userData.lastChannel!==w){let R=Lr(w),S=e.userData.input.material;S.map.dispose(),S.map=R,S.emissiveMap=R,e.userData.lastChannel=w}}if(!v)for(let w of a){let R=T*.65;switch(w.kind){case"scan":case"kernel":w.object.position.y=Math.sin(R*1.3)*(w.kind==="scan"?1.1:.65),w.object.position.z=Math.cos(R*.65)*.7;break;case"pool":w.object.position.y=Math.sin(R)*.55,w.object.position.z=Math.cos(R*.8)*.55;break;case"rotate":w.object.rotation.x=R*.22;break;case"volume":w.object.rotation.x=Math.sin(R)*.17;break;case"flatten":{let S=M.flatten?1:A>.55?Math.min(1,y*1.5):0;w.object.position.set(Le.lerp(w.base.x,.9,S),Le.lerp(w.base.y,(w.j-15.5)*.08,S),Le.lerp(w.base.z,0,S));break}case"bar":w.object.scale.y=A>.55?.75+Math.sin(y*Math.PI)*.25:1;break}}},e}function qu(i,t){let e=[],s=new Float32Array(840),r=new Float32Array(280*3),a=new Float32Array(280*6),o=new de;o.setAttribute("position",new Se(s,3)),o.setAttribute("color",new Se(r,3));let l=jo(32,32,m=>{let g=m.createRadialGradient(16,16,0,16,16,16);g.addColorStop(0,"rgba(232,255,250,1)"),g.addColorStop(.2,"rgba(150,233,224,.8)"),g.addColorStop(1,"rgba(80,180,210,0)"),m.fillStyle=g,m.fillRect(0,0,32,32)}),c=new cr(o,new vs({map:l,size:.18,vertexColors:!0,transparent:!0,blending:$n,depthWrite:!1,sizeAttenuation:!0}));c.frustumCulled=!1,i.add(c);let u=new de;u.setAttribute("position",new Se(a,3));let d=new Mn(u,new qe({color:9563876,transparent:!0,opacity:.32,blending:$n,depthWrite:!1}));d.frustumCulled=!1,i.add(d);for(let m=0;m<12;m++){let g=new de;g.setAttribute("position",new Se(new Float32Array(432*6),3));let _=new qe({color:m<8?5867690:10258622,transparent:!0,opacity:.14,depthWrite:!1}),p=new Mn(g,_);p.frustumCulled=!1,i.add(p),e.push(p)}function f(m,g,_){let p=t[m].position.x+.65,h=t[m+1].position.x-.65,T=g/18*Math.PI*2,A=.48+m%3*.16,y=m>=8?.34:.54,v=Le.lerp(A,y,_)+Math.sin(_*Math.PI)*.22;return[Le.lerp(p,h,_),Math.cos(T)*v+Math.sin(_*Math.PI)*.1,Math.sin(T)*v]}return{update(m,g,_,p,h){for(let y=0;y<12;y++){let v=e[y].geometry.attributes.position,M=0;for(let w=0;w<18;w++)for(let R=0;R<24;R++)v.setXYZ(M++,...f(y,w,R/24)),v.setXYZ(M++,...f(y,w,(R+1)/24));v.needsUpdate=!0,e[y].material.opacity=_&&g.index===y?.39:.115}if(c.visible=d.visible=_,!_)return;let T=Math.min(11,g.index),A=g.index===12?1:Math.max(0,(g.local-.08)/.84);for(let y=0;y<280;y++){let v=y%18,M=Math.floor(y/18)*.019,w=A-M,R=y*3,S=w>=0&&w<=1&&g.index<12,E=f(T,v,Math.max(0,Math.min(1,w))),L=f(T,v,Math.max(0,w-.025));s.set(E,R);let z=S?1-M*.8:0;r.set([z*.62,z,z*.94],R),a.set(E,y*6),a.set(S?L:E,y*6+3)}o.attributes.position.needsUpdate=!0,o.attributes.color.needsUpdate=!0,u.attributes.position.needsUpdate=!0,c.material.size=h?.1:.16}}}var Dr=[["origins","00","\u5D1B\u8D77\u524D\u591C"],["match","01","\u4E16\u7EAA\u5BF9\u5C40"],["decision","02","\u51B3\u7B56\u4E4B\u6838"],["dimensions","03","\u7EF4\u5EA6\u89E3\u5256"],["growth","04","\u6210\u957F\u7CFB\u7EDF"],["experiments","05","\u5B9E\u9A8C\u4E0E\u8FB9\u754C"]];function Pc(i){let t=i.replace(/^#/,"");return{history:"origins",model:"dimensions",labs:"experiments"}[t]||(Dr.some(e=>e[0]===t)?t:"origins")}var Ic={year:2016,result:"4 : 1",games:[{date:"3\u67089\u65E5",winner:"\u963F\u5C14\u6CD5\u56F4\u68CB",note:"\u7B2C\u4E00\u5C40\uFF1A\u7A81\u7834\u9884\u671F\uFF0C\u673A\u5668\u8D62\u5F97\u9996\u5C40\u3002"},{date:"3\u670810\u65E5",winner:"\u963F\u5C14\u6CD5\u56F4\u68CB",note:"\u7B2C\u4E8C\u5C40\uFF1A\u7B2C37\u624B\u5F15\u53D1\u5E7F\u6CDB\u8BA8\u8BBA\u3002"},{date:"3\u670812\u65E5",winner:"\u963F\u5C14\u6CD5\u56F4\u68CB",note:"\u7B2C\u4E09\u5C40\uFF1A\u53D6\u5F97\u6BD4\u8D5B\u80DC\u5229\uFF0C\u4F59\u4E0B\u5BF9\u5C40\u7EE7\u7EED\u3002"},{date:"3\u670813\u65E5",winner:"\u674E\u4E16\u77F3",note:"\u7B2C\u56DB\u5C40\uFF1A\u674E\u4E16\u77F3\u7B2C78\u624B\u6210\u4E3A\u5173\u952E\u8F6C\u6298\uFF0C\u8D62\u5F97\u4E00\u5C40\u3002"},{date:"3\u670815\u65E5",winner:"\u963F\u5C14\u6CD5\u56F4\u68CB",note:"\u7B2C\u4E94\u5C40\uFF1A\u6700\u7EC8\u603B\u6BD4\u52064\u6BD41\u3002"}]},Qo=[[3,3,0],[15,15,1],[3,15,0],[15,3,1],[9,3,0],[9,15,1],[4,9,0],[14,9,1],[6,5,0],[6,6,1],[7,5,0],[8,6,1],[11,12,0],[12,12,1],[11,13,0],[13,13,1],[10,9,0],[9,9,1],[10,10,0],[8,10,1],[5,14,0],[14,5,1],[12,4,0],[4,13,1]],Yu=["\u9009\u62E9","\u6269\u5C55","\u8BC4\u4F30","\u56DE\u4F20"];function Lc(){return{phase:0,cycle:0,selected:0,visits:[0,0,0],totals:[0,0,0],values:[0,0,0],prior:[.56,.29,.15]}}function Dc(i){let t={...i,visits:[...i.visits],totals:[...i.totals],values:[...i.values]};if(i.phase===0){let e=i.visits.reduce((s,r)=>s+r,0),n=i.values.map((s,r)=>s+1.6*i.prior[r]*Math.sqrt(e+1)/(1+i.visits[r]));t.selected=n.indexOf(Math.max(...n))}if(i.phase===3){let e=t.selected,n=[.43,.73,.52][e]+Math.sin((i.cycle+1)*1.7)*.06;t.visits[e]++,t.totals[e]+=n,t.values[e]=t.totals[e]/t.visits[e],t.cycle++}return t.phase=(i.phase+1)%4,t}var Uc={weight:.15,epoch:0,error:(.15*.8-.9)**2};function $u(i){let n=i.weight*.8,s=i.weight-.22*2*(n-.9)*.8;return{weight:s,epoch:i.epoch+1,error:(s*.8-.9)**2}}var Zu=[["2016\u5E74\u539F\u59CB\u8BBA\u6587\uFF1A\u6DF1\u5EA6\u795E\u7ECF\u7F51\u7EDC\u4E0E\u6811\u641C\u7D22","https://doi.org/10.1038/nature16961"],["\u5B98\u65B9\u963F\u5C14\u6CD5\u56F4\u68CB\u9879\u76EE\u8D44\u6599","https://deepmind.google/research/breakthroughs/alphago/"],["2017\u5E74\u96F6\u8D77\u70B9\u81EA\u6211\u5BF9\u5F08\u7814\u7A76","https://doi.org/10.1038/nature24270"],["2012\u5E74\u56FE\u50CF\u5206\u7C7B\u539F\u59CB\u8BBA\u6587","https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks"]];function Ju(i){let t=matchMedia("(prefers-reduced-motion: reduce)").matches,e,n,s,r,a,o="match",l=[],c=[],u=[],d,f=0,m=0,g=!1,_=0,p=0,h=new Bi,T=new _t,A={shell:3559525,cpu:10338783,gpu:9292223,memory:12166355,network:14071684},y=new Set,v=new Set,M=(Y,it={})=>{let U=new In({color:Y,roughness:.4,metalness:.45,...it});return v.add(U),U};function w(Y,it,U,O,K=null){let tt=new Fe(...it);y.add(tt);let j=new Yt(tt,M(O));return j.position.set(...U),j.castShadow=!0,j.receiveShadow=!0,Y.add(j),K&&(j.userData.key=K),j}function R(Y,it,U,O){let K=new Li(new Fe(...it));y.add(K);let tt=new qe({color:O,transparent:!0,opacity:.5});v.add(tt);let j=new Mn(K,tt);return j.position.set(...U),Y.add(j),j}function S(Y,it,U,O){let K=new de().setFromPoints([new I(...it),new I(...U)]);y.add(K);let tt=new qe({color:O,transparent:!0,opacity:.45});v.add(tt);let j=new li(K,tt);return Y.add(j),j}function E(Y,it,U,O,K){let tt=new Di(it,14,10);y.add(tt);let j=new Yt(tt,M(O,{emissive:O,emissiveIntensity:.25}));return j.position.set(...U),Y.add(j),j.userData.key=K,j}function L(Y,it,U){let O=new Pe;return O.userData={key:Y,index:it,base:new I,offset:new I},n.add(O),U(O),O.traverse(K=>{K.isMesh&&(K.userData.key=Y)}),l.push(O),O}function z(Y,it=4,U=0,O=!1){let K=new Pe;K.position.set(it,-.65,U),Y.add(K),w(K,[5.7,.3,5.7],[0,0,0],10980194,"board");for(let tt=0;tt<19;tt++){let j=(tt-9)*.282;S(K,[-2.54,.16,j],[2.54,.16,j],4800049),S(K,[j,.16,-2.54],[j,.16,2.54],4800049)}for(let[tt,j,Ft]of Qo){let Ae=E(K,.118,[(tt-9)*.282,.24,(j-9)*.282],Ft?14868949:1516077,"board");Ae.scale.y=.48}return R(K,[.45,.02,.45],[.282,.18,-.282],9102541),d=K,K}function G(){let Y=new Pe;Y.position.x=-3.4,n.add(Y),w(Y,[3.2,.25,3.6],[0,-2.25,0],1979464);let it=L("shell",0,U=>{for(let O of[-1.52,1.52])w(U,[.12,5.2,3.4],[O,.35,0],A.shell);R(U,[3.2,5.3,3.6],[0,.35,0],5667473);for(let O=0;O<8;O++)S(U,[-1.4,-1.6+O*.6,1.75],[1.4,-1.6+O*.6,1.75],3428193)});it.position.x=-3.4;for(let U=0;U<4;U++){let O=["cpu","gpu","memory","network"][U];L(O,U+1,tt=>{if(w(tt,[2.75,.19,2.7],[0,0,0],2639935),O==="cpu"){w(tt,[.9,.18,.9],[0,.15,0],A.cpu);for(let j=0;j<12;j++)w(tt,[.055,.32,1.2],[(j-5.5)*.1,.42,0],6323602)}if(O==="gpu")for(let j=0;j<2;j++){w(tt,[1.06,.18,1.8],[(j-.5)*1.28,.18,0],A.gpu);for(let Ft=0;Ft<9;Ft++)w(tt,[.07,.42,1.15],[(j-.5)*1.28+(Ft-4)*.09,.5,0],5405308)}if(O==="memory")for(let j=0;j<5;j++){w(tt,[.25,.45,1.8],[(j-2)*.48,.3,0],A.memory);for(let Ft=0;Ft<3;Ft++)w(tt,[.27,.19,.32],[(j-2)*.48,.38,(Ft-1)*.49],2503494)}if(O==="network"){w(tt,[2.4,.5,.8],[0,.35,.2],4217199);for(let j=0;j<8;j++)w(tt,[.19,.16,.2],[(j-3.5)*.27,.35,.7],A.network)}for(let j=0;j<7;j++)E(tt,.035,[1.22,.16,(j-3)*.35],10345936)}).position.set(-3.4,-1.25+U*1.03,0)}z(n);for(let U=0;U<5;U++)S(n,[-1.8,-1.4+U*.12,1.4],[1.3,-.5,1.4+U*.12],6861750);for(let U=0;U<35;U++){let O=E(n,.035,[0,0,0],9823702);u.push(O)}s.position.set(12,9,16),r.target.set(.1,-.1,0)}function $(){L("gpu",0,Y=>{w(Y,[6,.18,3.8],[0,-1.25,0],2444099);for(let it=0;it<8;it++)w(Y,[.36,.1,.32],[(it-3.5)*.6,-1.09,1.9],12888694)}),L("gpu",1,Y=>{w(Y,[1.8,.22,1.8],[0,-.6,0],3362149),w(Y,[1.35,.1,1.35],[0,-.43,0],10272444);for(let it=0;it<5;it++)for(let U=0;U<5;U++)w(Y,[.19,.045,.19],[(U-2)*.24,-.35,(it-2)*.24],8439483)}),L("memory",2,Y=>{for(let it of[-2.2,2.2])for(let U of[-1.2,0,1.2])w(Y,[.65,.17,.65],[it,-.65,U],10325430)}),L("shell",3,Y=>{for(let it=0;it<22;it++)w(Y,[.09,.85,3.25],[(it-10.5)*.23,.35,0],6125706)}),L("shell",4,Y=>{for(let it of[-1.5,1.5]){let U=new Ui(.79,.055,6,40);y.add(U);let O=new Yt(U,M(8756648));O.rotation.x=Math.PI/2,O.position.set(it,1.14,0),Y.add(O),c.push(O);for(let K=0;K<7;K++){let tt=w(Y,[.49,.05,.2],[it+Math.cos(K/7*6.28)*.4,1.14,Math.sin(K/7*6.28)*.4],4086640);tt.rotation.y=-K/7*6.28}}}),s.position.set(8,7,10),r.target.set(0,0,0)}function Z(){for(let Y=0;Y<3;Y++){let it=["cpu","gpu","memory"][Y],U=L(it,Y,O=>{let K=[];for(let tt=0;tt<5;tt++)K.push(E(O,.17,[0,(tt-2)*.6,Math.sin(tt)*.3],[9483480,9752511,12625113][Y]));for(let tt=0;tt<4;tt++)S(O,K[tt].position.toArray(),K[tt+1].position.toArray(),6719398);R(O,[1,3.4,1.3],[0,0,0],6126998)});U.position.x=(Y-1)*3}for(let Y=0;Y<2;Y++)for(let it=0;it<5;it++)S(n,[(Y-1)*3+.3,(it-2)*.6,0],[Y*3-.3,(4-it-2)*.6,0],9223347);for(let Y=0;Y<30;Y++)u.push(E(n,.045,[0,0,0],10348242));s.position.set(9,5,12),r.target.set(0,0,0)}function q(){z(n,0,0);for(let Y of[-1,1]){let it=L("network",Y+1,U=>{w(U,[1.7,2.5,1.7],[0,.3,0],2704472);for(let O=0;O<5;O++)R(U,[1.85,.2,1.85],[0,-.6+O*.45,0],Y<0?8896469:12692184)});it.position.x=Y*4.8;for(let U=0;U<3;U++)S(n,[Y*3.9,-.3,U*.3],[Y*2.7,-.3,U*.3],7714993)}for(let Y=0;Y<25;Y++)u.push(E(n,.04,[0,0,0],11978972));s.position.set(11,9,14),r.target.set(0,-.3,0)}function at(){e=new Is({antialias:!0,alpha:!1}),e.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),e.setClearColor(660768),e.outputColorSpace=Me,e.toneMapping=fi,e.toneMappingExposure=1.25,e.shadowMap.enabled=!0,e.shadowMap.type=bs,n=new qn,n.background=new Ct(660768),s=new be(36,1,.1,150),r=new Ds(s,e.domElement),r.enableDamping=!0,r.enablePan=!1,r.minDistance=6,r.maxDistance=35,r.maxPolarAngle=Math.PI*.48,e.domElement.addEventListener("pointerdown",Y=>H=[Y.clientX,Y.clientY]),e.domElement.addEventListener("pointerup",Y=>{if(!H||Math.hypot(Y.clientX-H[0],Y.clientY-H[1])>5)return;let it=e.domElement.getBoundingClientRect();T.set((Y.clientX-it.left)/it.width*2-1,-(Y.clientY-it.top)/it.height*2+1),h.setFromCamera(T,s);let U=h.intersectObjects(n.children,!0).find(O=>O.object.userData.key);U&&i(U.object.userData.key)}),f=requestAnimationFrame(te)}let H=null;function ct(){for(n.traverse(Y=>{Y.isLight&&Y.shadow?.map?.dispose()});n.children.length;)n.remove(n.children[0]);y.forEach(Y=>Y.dispose()),v.forEach(Y=>Y.dispose()),y.clear(),v.clear(),l=[],u=[],c=[],d=null}function pt(){ct(),n.add(new Fi(12113902,1385786,2.5));let Y=new Yn(14477812,3.1);Y.position.set(4,13,7),Y.castShadow=!0,Y.shadow.mapSize.set(1024,1024),Object.assign(Y.shadow.camera,{left:-12,right:12,top:9,bottom:-9,far:40}),n.add(Y);let it=new Yn(8177346,1.7);it.position.set(-8,4,-4),n.add(it);let U=w(n,[24,.12,13],[0,-2.65,0],1056043);U.material.metalness=.05,U.material.roughness=.95,o==="match"?G():o==="gpu"?$():o==="training"?Z():q(),l.forEach((O,K)=>{O.userData.base=O.position.clone(),O.userData.offset=o==="match"?new I(K===0?-2.2:1.1,(K-2)*.5,K===0?-1.3:(K-1.5)*.8):new I(0,(K-2)*.9,0)}),r.update(),_=p=0}function St(){if(!a||!g)return;let Y=a.clientWidth,it=a.clientHeight;!Y||!it||(e.setSize(Y,it,!1),s.aspect=Y/it,Y<600?s.zoom=.7:s.zoom=1,s.updateProjectionMatrix())}let Bt=new ResizeObserver(St);function te(Y){f=requestAnimationFrame(te);let it=Math.min(.06,(Y-m)/1e3||0);if(m=Y,!g||document.hidden)return;_=Le.damp(_,p,4,it),l.forEach(O=>O.position.copy(O.userData.base).addScaledVector(O.userData.offset,_));let U=t?0:Y/1e3;u.forEach((O,K)=>{let tt=(U*.23+K/u.length)%1;o==="match"?O.position.set(Le.lerp(1.2,-1.8,tt),-.55+Math.sin(tt*Math.PI)*.3,1.5+K%3*.1):o==="training"?O.position.set(-3.3+6.6*tt,Math.sin(K*1.2)*.8,Math.cos(K)*.3):O.position.set(-4.3+8.6*tt,-.15,Math.sin(tt*Math.PI*2)*2)}),r.update(),e.render(n,s)}return{show(Y,it="match"){try{e||at(),g=!0,p=0,a=Y,Y.appendChild(e.domElement),(o!==it||l.length===0)&&(o=it,pt()),Bt.disconnect(),Bt.observe(Y),St()}catch(U){Y.innerHTML='<p class="scene-fallback">\u4E09\u7EF4\u73AF\u5883\u672A\u80FD\u521D\u59CB\u5316\uFF0C\u4ECD\u53EF\u9605\u8BFB\u4E0B\u65B9\u539F\u7406\u4E0E\u64CD\u4F5C\u5B9E\u9A8C\u3002</p>',console.error(U)}},hide(){g=!1,Bt.disconnect()},explode(){return p=p?0:1,p===1},dispose(){cancelAnimationFrame(f),Bt.disconnect(),ct(),r?.dispose(),e?.dispose()}}}var Pt=i=>document.querySelector(i),Ur=(i,t,e,n)=>`<div class="museum-heading"><div class="eyebrow">${i} / ${t}</div><h1>${e}</h1><p>${n}</p></div>`,tl=()=>`<div class="museum-sources">${Zu.map(([i,t])=>`<a href="${t}" target="_blank" rel="noopener">${i} \u2197</a>`).join("")}</div>`,Nr=i=>`<div class="deep-cards">${i.map(([t,e,n])=>`<article><span>${t}</span><h3>${e}</h3><p>${n}</p></article>`).join("")}</div>`;function Ku(){let i=Lc(),t={...Uc},e="gpu",n=0,s={shell:["\u673A\u67B6\u4E0E\u5916\u58F3","\u627F\u8F7D\u3001\u4F9B\u7535\u3001\u6563\u70ED\u4E0E\u7EF4\u62A4\u3002\u5916\u5F62\u5C5E\u4E8E\u5C55\u9648\u539F\u7406\u6A21\u578B\uFF0C\u4E0D\u662F2016\u5E74\u539F\u59CB\u8BBE\u5907\u7167\u7247\u6216\u590D\u523B\u3002"],cpu:["\u901A\u7528\u5904\u7406\u5668","\u8C03\u5EA6\u4EFB\u52A1\u3001\u7BA1\u7406\u7A0B\u5E8F\u4E0E\u641C\u7D22\u6D41\u7A0B\u3002\u901A\u7528\u5904\u7406\u5668\u4E0E\u56FE\u5F62\u5904\u7406\u5668\u7684\u5206\u5DE5\uFF0C\u968F\u7CFB\u7EDF\u9636\u6BB5\u4E0E\u90E8\u7F72\u65B9\u5F0F\u53D8\u5316\u3002"],gpu:["\u52A0\u901F\u8BA1\u7B97","\u5927\u91CF\u4E58\u52A0\u8FD0\u7B97\u53EF\u5E76\u884C\u6267\u884C\uFF0C\u9002\u5408\u795E\u7ECF\u7F51\u7EDC\u8BAD\u7EC3\u53CA\u90E8\u5206\u8BC4\u4F30\u5DE5\u4F5C\u3002\u539F\u7CFB\u7EDF\u91C7\u7528\u5206\u5E03\u5F0F\u8BA1\u7B97\uFF0C\u4E0D\u5E94\u88AB\u753B\u6210\u5355\u4E00\u201C\u667A\u80FD\u82AF\u7247\u201D\u3002"],memory:["\u5185\u5B58\u4E0E\u663E\u5B58","\u4FDD\u5B58\u8F93\u5165\u3001\u53C2\u6570\u3001\u4E2D\u95F4\u7ED3\u679C\u548C\u641C\u7D22\u7EDF\u8BA1\u3002\u5E26\u5BBD\u3001\u5BB9\u91CF\u4E0E\u8BBF\u95EE\u5F00\u9500\u90FD\u4F1A\u9650\u5236\u7CFB\u7EDF\u541E\u5410\u3002"],network:["\u8282\u70B9\u4E92\u8054","\u5728\u591A\u4E2A\u8BA1\u7B97\u8282\u70B9\u95F4\u4F20\u9012\u4FE1\u606F\u4E0E\u4EFB\u52A1\u3002\u6B64\u5904\u8DEF\u5F84\u4E3A\u89C6\u89C9\u7F16\u7801\uFF0C\u4E0D\u8868\u793A\u5F53\u5E74\u771F\u5B9E\u7F51\u7EDC\u62D3\u6251\u3002"],board:["\u68CB\u76D8\u4E0E\u72B6\u6001\u7F16\u7801","\u5341\u4E5D\u4E58\u5341\u4E5D\u4EA4\u70B9\u63D0\u4F9B\u7A7A\u95F4\u7ED3\u6784\u3002\u5F53\u524D\u68CB\u5F62\u4E3A\u5408\u6210\u793A\u4F8B\uFF0C\u672A\u5F15\u7528\u6216\u4F2A\u9020\u674E\u4E16\u77F3\u6BD4\u8D5B\u7684\u9010\u624B\u68CB\u8C31\u3002"]},r=Ju(v=>{let M=s[v]||s.network,w=Pt("#hardware-info");w&&(w.innerHTML=`<span>\u90E8\u4EF6\u89E3\u5256</span><h3>${M[0]}</h3><p>${M[1]}</p>`)}),a=document.querySelector(".main-nav");a.innerHTML=Dr.map(([v,M,w])=>`<a id="nav-${v}" href="#${v}"><span>${M}</span>${w}</a>`).join(""),Pt("#brand").href="#origins",Pt("#brand").querySelector("span:last-child").innerHTML="\u673A\u5668\u843D\u4E0B\u7684\u4E00\u624B<small>2016 \xB7 \u4ECE\u963F\u5C14\u6CD5\u56F4\u68CB\u8D70\u8FDB\u4EBA\u5DE5\u667A\u80FD</small>",document.title="2016\uFF1A\u673A\u5668\u843D\u4E0B\u7684\u4E00\u624B\uFF5C\u4EBA\u5DE5\u667A\u80FD\u4EA4\u4E92\u5C55\u9986",Pt("#history-view").id="origins-view",Pt("#model-view").id="dimensions-view",Pt("#labs-view").id="experiments-view";let o=Pt("#origins-view");o.innerHTML=Ur("00","\u5D1B\u8D77\u524D\u591C / \u4ECE\u9ED1\u767D\u5230\u5F69\u8272","\u673A\u5668\u843D\u4E0B\u4E4B\u524D\uFF0C<br><em>\u5DF2\u7ECF\u8D70\u8FC7\u5F88\u957F\u7684\u8DEF\u3002</em>","\u4EE52016\u5E74\u7684\u4E00\u573A\u56F4\u68CB\u8D5B\u4E3A\u5165\u53E3\uFF0C\u56DE\u5230\u89C4\u5219\u3001\u5B66\u4E60\u3001\u6570\u636E\u4E0E\u7B97\u529B\u76F8\u4E92\u63A8\u52A8\u7684\u5386\u53F2\u3002\u989C\u8272\u4EE3\u8868\u5C55\u9648\u53D9\u4E8B\uFF0C\u4E0D\u610F\u5473\u7740\u6B64\u524D\u4E0D\u5B58\u5728\u4EBA\u5DE5\u667A\u80FD\u3002")+`<div class="origins-stage" id="origins-stage"><div class="archive-board" aria-hidden="true">${Array.from({length:49},(v,M)=>`<i class="${[2,8,12,16,24,31,36,40].includes(M)?"stone":""} ${M%2?"white":""}"></i>`).join("")}</div><div class="archive-caption"><span>\u89C4\u5219 \u2192 \u5B66\u4E60 \u2192 \u641C\u7D22</span><b id="era-year">1950</b><h2 id="era-title">\u673A\u5668\u80FD\u5426\u8868\u73B0\u51FA\u667A\u80FD\uFF1F</h2><p id="era-text"></p></div></div><label class="era-control">\u62D6\u52A8\u5386\u53F2\u8FDB\u7A0B\uFF1A\u9ED1\u767D\u9010\u6E10\u8FDB\u5165\u5F69\u8272<input id="era" type="range" min="0" max="5" step="1" value="0" aria-label="\u5386\u53F2\u8FDB\u7A0B"></label><div class="era-tabs">${["1950","1956","1980\u20141998","1997","2009\u20142012","2016"].map((v,M)=>`<button data-era="${M}">${v}</button>`).join("")}</div>`+Nr([["\u7B2C\u4E00\u6761\u7EBF\u7D22","\u89C4\u5219\u548C\u641C\u7D22\u7684\u529B\u91CF","\u65E9\u671F\u7CFB\u7EDF\u5E38\u901A\u8FC7\u7B26\u53F7\u89C4\u5219\u548C\u663E\u5F0F\u641C\u7D22\u89E3\u51B3\u4EFB\u52A1\u30021997\u5E74\u6DF1\u84DD\u6218\u80DC\u56FD\u9645\u8C61\u68CB\u4E16\u754C\u51A0\u519B\uFF0C\u5C55\u793A\u4E86\u4E13\u95E8\u7B97\u6CD5\u3001\u8BC4\u4F30\u4E0E\u8BA1\u7B97\u8D44\u6E90\u7684\u7ED3\u5408\uFF1B\u4E0D\u80FD\u636E\u6B64\u65AD\u8A00\u6240\u6709\u667A\u80FD\u4EFB\u52A1\u90FD\u80FD\u9760\u7A77\u4E3E\u3002"],["\u7B2C\u4E8C\u6761\u7EBF\u7D22","\u4ECE\u6837\u672C\u4E2D\u8C03\u6574\u53C2\u6570","\u795E\u7ECF\u7F51\u7EDC\u4E0E\u53CD\u5411\u4F20\u64AD\u7814\u7A76\u6301\u7EED\u53D1\u5C55\u30021980\u5E74\u7684\u65B0\u8BA4\u77E5\u673A\u30011989\u5E74\u7684\u624B\u5199\u6570\u5B57\u8BC6\u522B\u7814\u7A76\u53CA1998\u5E74\u7684\u5377\u79EF\u6587\u6863\u8BC6\u522B\uFF0C\u662F\u5C42\u6B21\u5316\u89C6\u89C9\u5B66\u4E60\u7684\u91CD\u8981\u8282\u70B9\uFF0C\u8FDC\u65E9\u4E8E2012\u5E74\u3002"],["\u7B2C\u4E09\u6761\u7EBF\u7D22","\u6570\u636E\u4E0E\u5E76\u884C\u8BA1\u7B97\u6C47\u5408","2009\u5E74\u5927\u89C4\u6A21\u56FE\u50CF\u6570\u636E\u5E93\u4E0E\u540E\u7EED\u6311\u6218\u8D5B\u63D0\u4F9B\u8BAD\u7EC3\u4E0E\u8BC4\u4F30\u57FA\u7840\uFF1B2012\u5E74\u4E9A\u5386\u514B\u65AF\u7F51\u7EDC\u51F8\u663E\u6DF1\u5EA6\u5377\u79EF\u3001GPU\u8BA1\u7B97\u548C\u5927\u89C4\u6A21\u6570\u636E\u7ED3\u5408\u7684\u4EF7\u503C\u3002\u5B83\u662F\u6280\u672F\u80CC\u666F\uFF0C\u4E0D\u662F\u963F\u5C14\u6CD5\u56F4\u68CB\u7684\u76F4\u63A5\u67B6\u6784\u3002"]])+`<section class="museum-essay"><h2>\u56F4\u68CB\uFF0C\u4E3A\u4EC0\u4E48\u6210\u4E3A\u4E00\u9053\u96BE\u9898\uFF1F</h2><p>\u56F4\u68CB\u7684\u53EF\u9009\u843D\u70B9\u591A\uFF0C\u5C40\u9762\u8BC4\u4EF7\u96BE\u4EE5\u5B8C\u5168\u8F6C\u5316\u6210\u4EBA\u5DE5\u89C4\u5219\u3002\u4EC5\u4EC5\u589E\u52A0\u641C\u7D22\u6DF1\u5EA6\uFF0C\u5E76\u4E0D\u80FD\u6D88\u9664\u7EC4\u5408\u7206\u70B8\u3002\u963F\u5C14\u6CD5\u56F4\u68CB\u5C06\u5B66\u4E60\u5F97\u5230\u7684\u7B56\u7565\u548C\u4EF7\u503C\u4F30\u8BA1\u4E0E\u6811\u641C\u7D22\u7ED3\u5408\uFF0C\u628A\u6709\u9650\u8BA1\u7B97\u4F18\u5148\u5206\u914D\u7ED9\u66F4\u6709\u5E0C\u671B\u7684\u53D8\u5316\u3002</p><div class="cause-chain"><span>\u4EBA\u7C7B\u77E5\u8BC6</span><b>\u2192</b><span>\u6570\u636E\u9A71\u52A8\u5B66\u4E60</span><b>\uFF0B</b><span>\u641C\u7D22\u4E0E\u8BA1\u7B97</span><b>\u2192</b><span>2016\u5E74\u7A81\u7834</span></div><a class="solid-link" href="#match">\u8FDB\u51652016\u5E74\u4E3B\u5C55\u5385 \u2192</a></section>${tl()}`;let l=document.querySelector("main"),c=(v,M,w)=>{let R=document.createElement("section");return R.id=v+"-view",R.className="page-view",R.hidden=!0,R.innerHTML=M,l.insertBefore(R,w||Pt("#dimensions-view")),R};c("match",Ur("01","\u4E16\u7EAA\u5BF9\u5C40 / \u9996\u5C14 / 2016\u5E743\u6708","\u4E00\u5F20\u68CB\u76D8\uFF0C<br><em>\u4E0E\u4E00\u5957\u5206\u5E03\u5F0F\u8BA1\u7B97\u7CFB\u7EDF\u3002</em>","2016\u5E743\u67089\u65E5\u81F315\u65E5\uFF0C\u963F\u5C14\u6CD5\u56F4\u68CB\u4E0E\u674E\u4E16\u77F3\u8FDB\u884C\u4E94\u756A\u68CB\uFF0C\u4EE54\u6BD41\u83B7\u80DC\u3002\u8FD9\u91CC\u62C6\u5F00\u7684\u4E0D\u662F\u865A\u6784\u7684\u4EBA\u5F62\u673A\u5668\uFF0C\u800C\u662F\u8BA1\u7B97\u7CFB\u7EDF\u7684\u539F\u7406\u7ED3\u6784\u3002")+`<div class="museum-exhibit"><div><div id="match-scene" class="museum-canvas" aria-label="\u53EF\u65CB\u8F6C\u7684\u8BA1\u7B97\u673A\u67B6\u548C\u5341\u4E5D\u8DEF\u68CB\u76D8"></div><div class="museum-scene-controls"><button id="machine-explode" class="solid-link">\u62C6\u89E3\u8BA1\u7B97\u7CFB\u7EDF</button><span>\u62D6\u52A8\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u70B9\u51FB\u90E8\u4EF6</span></div></div><aside id="hardware-info"><span>\u539F\u7406\u6A21\u578B / \u975E\u539F\u673A\u590D\u523B</span><h3>\u673A\u5668\u4E0D\u7B49\u4E8E\u5355\u4E2A\u673A\u7BB1</h3><p>\u795E\u7ECF\u7F51\u7EDC\u8BC4\u4F30\u3001\u641C\u7D22\u4E0E\u8BA1\u7B97\u8D44\u6E90\u5171\u540C\u53C2\u4E0E\u51B3\u7B56\u3002\u673A\u67B6\u3001\u901A\u7528\u5904\u7406\u5668\u3001\u52A0\u901F\u6A21\u5757\u3001\u5185\u5B58\u4E0E\u4E92\u8054\u5728\u8FD9\u91CC\u88AB\u5206\u5C42\u8868\u8FBE\u3002</p><p>\u65C1\u8FB9\u7684\u68CB\u76D8\u4E3A\u5408\u6210\u5C40\u9762\uFF0C\u4EC5\u7528\u4E8E\u5C55\u793A\u72B6\u6001\u8F93\u5165\u4E0E\u8BA1\u7B97\u8F93\u51FA\u7684\u5173\u7CFB\uFF1B\u4E0D\u662F\u6BD4\u8D5B\u5B9E\u6218\u590D\u76D8\u3002</p></aside></div><div class="match-score"><b>4 <i>:</i> 1</b><div><span>\u963F\u5C14\u6CD5\u56F4\u68CB / \u674E\u4E16\u77F3</span><p>\u4E13\u95E8\u4EFB\u52A1\u4E0A\u7684\u91CD\u5927\u7A81\u7834\uFF0C\u4E0D\u662F\u901A\u7528\u667A\u80FD\u6216\u673A\u5668\u610F\u8BC6\u7684\u8BC1\u660E\u3002</p></div></div><div class="game-picker">${Ic.games.map((v,M)=>`<button data-game="${M}" class="${M===0?"active":""}"><span>\u7B2C${M+1}\u5C40 \xB7 ${v.date}</span><b>${v.winner} \u80DC</b></button>`).join("")}</div><div id="game-note" class="game-note"></div>`+Nr([["\u5C40\u9762\u4E0E\u5224\u65AD","\u7B2C\u4E8C\u5C40\u7B2C37\u624B","\u963F\u5C14\u6CD5\u56F4\u68CB\u7684\u4E00\u6B21\u9009\u62E9\u5F15\u8D77\u4E13\u4E1A\u68CB\u624B\u4E0E\u516C\u4F17\u8BA8\u8BBA\u3002\u5B83\u9002\u5408\u8BF4\u660E\u673A\u5668\u7684\u7B56\u7565\u4E0D\u5FC5\u4E0E\u4EBA\u7C7B\u76F4\u89C9\u76F8\u540C\uFF0C\u4F46\u4E0D\u5E94\u88AB\u5305\u88C5\u6210\u673A\u5668\u4EA7\u751F\u60C5\u611F\u3001\u7075\u611F\u6216\u610F\u8BC6\u7684\u8BC1\u636E\u3002"],["\u5931\u8BEF\u4E0E\u8FB9\u754C","\u7B2C\u56DB\u5C40\u7B2C78\u624B","\u674E\u4E16\u77F3\u5728\u7B2C\u56DB\u5C40\u53D6\u80DC\uFF0C\u663E\u793A\u7CFB\u7EDF\u4ECD\u53EF\u80FD\u51FA\u73B0\u5224\u65AD\u4E0E\u641C\u7D22\u4E0A\u7684\u8584\u5F31\u70B9\u3002\u5355\u5C40\u7ED3\u679C\u9700\u8981\u7ED3\u5408\u5C40\u9762\u548C\u540E\u7EED\u53D8\u5316\u7406\u89E3\uFF0C\u4E0D\u80FD\u628A\u4E00\u624B\u68CB\u5F53\u4F5C\u5B8C\u6574\u7B97\u6CD5\u89E3\u91CA\u3002"],["\u7ED3\u679C\u4E0E\u610F\u4E49","\u4ECE\u80DC\u8D1F\u8F6C\u5411\u673A\u5236","\u4E94\u756A\u68CB\u8BA9\u5B66\u4E60\u4E0E\u641C\u7D22\u7684\u7ED3\u5408\u8FDB\u5165\u516C\u4F17\u89C6\u91CE\u3002\u771F\u6B63\u503C\u5F97\u62C6\u89E3\u7684\uFF0C\u662F\u5019\u9009\u5982\u4F55\u4EA7\u751F\u3001\u5C40\u9762\u5982\u4F55\u8BC4\u4EF7\u3001\u5206\u652F\u5982\u4F55\u88AB\u63A2\u7D22\uFF0C\u4EE5\u53CA\u8BAD\u7EC3\u548C\u63A8\u7406\u5982\u4F55\u5206\u5F00\u3002"]])+tl()),c("decision",Ur("02","\u51B3\u7B56\u4E4B\u6838 / 2016\u5E74\u7CFB\u7EDF\u673A\u5236","\u5148\u63D0\u51FA\u5019\u9009\uFF0C<br><em>\u518D\u628A\u8BA1\u7B97\u7528\u5728\u503C\u5F97\u63A2\u7D22\u7684\u5730\u65B9\u3002</em>","\u7B56\u7565\u7F51\u7EDC\u63D0\u4F9B\u843D\u5B50\u503E\u5411\uFF0C\u4EF7\u503C\u7F51\u7EDC\u8BC4\u4F30\u5C40\u9762\uFF0C\u8499\u7279\u5361\u6D1B\u6811\u641C\u7D22\u53CD\u590D\u9009\u62E9\u3001\u6269\u5C55\u3001\u8BC4\u4F30\u548C\u56DE\u4F20\u3002\u5B83\u4E0D\u662F\u201C\u68CB\u76D8\u901A\u8FC7\u4E00\u6B21\u5206\u7C7B\u7F51\u7EDC\u5C31\u5F97\u5230\u6700\u4F73\u843D\u5B50\u201D\u3002")+'<div class="decision-path"><button data-mechanism="policy" class="active">01 \u7B56\u7565\u7F51\u7EDC<small>\u54EA\u4E9B\u843D\u5B50\u503C\u5F97\u8003\u8651\uFF1F</small></button><span>\uFF0B</span><button data-mechanism="value">02 \u4EF7\u503C\u7F51\u7EDC<small>\u5C40\u9762\u5BF9\u8C01\u66F4\u6709\u5229\uFF1F</small></button><span>\u21C4</span><button data-mechanism="search">03 \u6811\u641C\u7D22<small>\u5982\u4F55\u5206\u914D\u63A2\u7D22\u9884\u7B97\uFF1F</small></button></div><div class="decision-detail" id="mechanism-detail"></div><div class="search-experiment"><div class="section-head"><div><span class="eyebrow">\u53EF\u64CD\u4F5C / \u6559\u5B66\u641C\u7D22\u6A21\u578B</span><h2>\u8BA9\u8BC4\u4F30\u7ED3\u679C\uFF0C\u6CBF\u641C\u7D22\u6811\u56DE\u4F20\u3002</h2></div><button id="search-reset">\u91CD\u7F6E\u641C\u7D22 \u21BA</button></div><div class="tree-stage" id="tree-stage"></div><div class="search-actions"><button id="search-step" class="solid-link">\u6267\u884C\u4E0B\u4E00\u9636\u6BB5 \u2192</button><button id="search-cycle">\u8FD0\u884C\u4E00\u6B21\u5B8C\u6574\u5FAA\u73AF</button><span id="search-status" role="status"></span></div><div class="search-table" id="search-table"></div><p class="technical">\u672C\u5B9E\u9A8C\u91C7\u7528\u4EBA\u5DE5\u5148\u9A8C\u4E0E\u5408\u6210\u8BC4\u4F30\u503C\uFF0C\u53EA\u89E3\u91CA\u63A2\u7D22\u3001\u5229\u7528\u4E0E\u56DE\u4F20\u3002\u9009\u62E9\u516C\u5F0F\u4E3A\u7B80\u5316\u6559\u5B66\u5F62\u5F0F\uFF0C\u4E0D\u662F2016\u5E74\u963F\u5C14\u6CD5\u56F4\u68CB\u7684\u5B8C\u6574\u5B9E\u73B0\u3002</p></div>'+Nr([["\u7B56\u7565","\u76D1\u7763\u5B66\u4E60\u4E0E\u5F3A\u5316\u5B66\u4E60","2016\u5E74\u7CFB\u7EDF\u5148\u4ECE\u4EBA\u7C7B\u68CB\u8C31\u5B66\u4E60\u843D\u5B50\uFF0C\u518D\u4F7F\u7528\u5F3A\u5316\u5B66\u4E60\u6539\u8FDB\u7B56\u7565\u3002\u7B56\u7565\u5206\u5E03\u5F15\u5BFC\u641C\u7D22\uFF0C\u5E76\u4E0D\u4FDD\u8BC1\u6700\u9AD8\u5148\u9A8C\u5019\u9009\u6700\u7EC8\u83B7\u9009\u3002"],["\u4EF7\u503C","\u51CF\u5C11\u5BF9\u5B8C\u6574\u7EC8\u5C40\u6A21\u62DF\u7684\u4F9D\u8D56","\u4EF7\u503C\u7F51\u7EDC\u5B66\u4E60\u4F30\u8BA1\u5C40\u9762\u7ED3\u679C\u30022016\u5E74\u7CFB\u7EDF\u8FD8\u7ED3\u5408\u5FEB\u901F\u6A21\u62DF\u7B56\u7565\u7B49\u673A\u5236\uFF1B\u4E0D\u80FD\u628A\u540E\u7EED\u96F6\u8D77\u70B9\u7CFB\u7EDF\u7684\u8BBE\u8BA1\u5168\u90E8\u56DE\u5199\u8FDB2016\u5E74\u3002"],["\u641C\u7D22","\u9009\u62E9\u2014\u6269\u5C55\u2014\u8BC4\u4F30\u2014\u56DE\u4F20","\u641C\u7D22\u4E0D\u662F\u628A\u6574\u68F5\u535A\u5F08\u6811\u7A77\u5C3D\u3002\u5DF2\u6709\u4F30\u8BA1\u4E0E\u8BBF\u95EE\u7EDF\u8BA1\u5F71\u54CD\u540E\u7EED\u8D44\u6E90\u5206\u914D\uFF0C\u66F4\u591A\u8BBF\u95EE\u4E5F\u4E0D\u81EA\u52A8\u6784\u6210\u5BF9\u67D0\u4E00\u843D\u5B50\u7684\u6570\u5B66\u80DC\u5229\u8BC1\u660E\u3002"]])+`<div class="bridge-note"><h3>\u548C\u539F\u6765\u7684\u795E\u7ECF\u7F51\u7EDC\u5C55\u54C1\u6709\u4EC0\u4E48\u5173\u7CFB\uFF1F</h3><p>\u5377\u79EF\u3001\u5F20\u91CF\u4E0E\u6743\u91CD\u5B66\u4E60\u662F\u5171\u540C\u6280\u672F\u8BED\u8A00\u3002\u4F46\u963F\u5C14\u6CD5\u56F4\u68CB\u5904\u7406\u68CB\u76D8\u7279\u5F81\u5E73\u9762\uFF0C\u8F93\u51FA\u7B56\u7565\u6216\u4EF7\u503C\uFF1B\u4E9A\u5386\u514B\u65AF\u7F51\u7EDC\u5904\u7406\u56FE\u50CF\u5E76\u8F93\u51FA\u7C7B\u522B\u3002\u4E8C\u8005\u4E0D\u662F\u540C\u4E00\u4E2A\u7F51\u7EDC\u3002</p><a href="#dimensions">\u5BF9\u7167\u67E5\u770B\u56FE\u50CF\u4E0E\u68CB\u76D8\u8F93\u5165 \u2192</a></div>${tl()}`),c("growth",Ur("04","\u6210\u957F\u7CFB\u7EDF / \u4E09\u7EC4\u53EF\u64CD\u4F5C\u7684\u539F\u7406\u6A21\u578B","\u4E0D\u662F\u957F\u51FA\u4EBA\u683C\uFF0C<br><em>\u800C\u662F\u6539\u53D8\u53C2\u6570\u4E0E\u80FD\u529B\u3002</em>","\u7528\u201C\u5DE5\u5177\u3001\u7EC3\u4E60\u3001\u5BF9\u624B\u201D\u7684\u6210\u957F\u6863\u6848\u8FDE\u63A5\u786C\u4EF6\u3001\u53CD\u9988\u4E0E\u81EA\u6211\u5BF9\u5F08\u3002\u62DF\u4EBA\u53EA\u662F\u4E00\u79CD\u89E3\u91CA\u65B9\u5F0F\uFF0C\u4E0D\u610F\u5473\u7740\u673A\u5668\u62E5\u6709\u4EBA\u7684\u60C5\u7EEA\u3001\u610F\u56FE\u6216\u610F\u8BC6\u3002")+'<div class="growth-tabs"><button data-growth="gpu" class="active">01 \u7EC3\u4E60\u5DE5\u5177 / \u52A0\u901F\u8BA1\u7B97</button><button data-growth="training">02 \u53CD\u9988\u5B66\u4E60 / \u66F4\u65B0\u53C2\u6570</button><button data-growth="selfplay">03 \u81EA\u6211\u5BF9\u5F08 / \u751F\u6210\u7ECF\u9A8C</button></div><div class="museum-exhibit"><div><div id="growth-scene" class="museum-canvas" aria-label="\u8BA1\u7B97\u6A21\u5757\u3001\u8BAD\u7EC3\u5FAA\u73AF\u548C\u53CC\u7B56\u7565\u5BF9\u5F08\u7684\u4E09\u7EF4\u6A21\u578B"></div><div class="museum-scene-controls"><button id="growth-explode" class="solid-link">\u62C6\u5F00\u5F53\u524D\u6A21\u578B</button><span>\u4E09\u7EC4\u539F\u7406\u6A21\u578B \xB7 \u975E\u771F\u5B9E\u8BBE\u5907\u590D\u523B</span></div></div><aside id="growth-info"></aside></div><div id="growth-experiment"></div>'+Nr([["\u5DE5\u5177\u4E0D\u662F\u667A\u80FD","\u5E76\u884C\u4E58\u52A0\u4E0E\u6570\u636E\u642C\u8FD0","\u52A0\u901F\u5668\u9002\u5408\u5927\u91CF\u76F8\u4F3C\u6570\u503C\u64CD\u4F5C\uFF0C\u663E\u5B58\u548C\u4E92\u8054\u8D1F\u8D23\u4F9B\u7ED9\u6570\u636E\u3002\u6027\u80FD\u53D6\u51B3\u4E8E\u7B97\u6CD5\u3001\u5E76\u884C\u5EA6\u3001\u5185\u5B58\u5E26\u5BBD\u548C\u8C03\u5EA6\uFF0C\u4E0D\u662F\u53EA\u770B\u82AF\u7247\u6570\u91CF\u3002"],["\u8BAD\u7EC3\u4E0D\u7B49\u4E8E\u6BD4\u8D5B","\u5B66\u4E60\u53C2\u6570\u4E0E\u4F7F\u7528\u53C2\u6570","\u8BAD\u7EC3\u9636\u6BB5\u4F7F\u7528\u6837\u672C\u548C\u53CD\u9988\u6539\u53D8\u6743\u91CD\uFF1B\u6BD4\u8D5B\u9636\u6BB5\u4F7F\u7528\u65E2\u5B9A\u7CFB\u7EDF\u8BC4\u4F30\u5E76\u641C\u7D22\u3002\u6B64\u5904\u7684\u5355\u6743\u91CD\u5E73\u65B9\u8BEF\u5DEE\u5B9E\u9A8C\u4E0D\u662F\u7B56\u7565\u68AF\u5EA6\u6216\u5B8C\u6574\u7F51\u7EDC\u8BAD\u7EC3\u3002"],["2016 \u2260 2017","\u4ECE\u4EBA\u7C7B\u7ECF\u9A8C\u5230\u96F6\u8D77\u70B9\u7814\u7A76","2016\u5E74\u7248\u672C\u4F7F\u7528\u4EBA\u7C7B\u68CB\u8C31\u4E0E\u81EA\u6211\u5BF9\u5F08\u30022017\u5E74\u963F\u5C14\u6CD5\u56F4\u68CB\u96F6\u7248\u672C\u91C7\u7528\u4E0D\u540C\u7684\u5B66\u4E60\u65B9\u6848\uFF0C\u4E0D\u4F9D\u8D56\u4EBA\u7C7B\u68CB\u8C31\uFF1B\u4E0D\u80FD\u5C06\u4E24\u8005\u6DF7\u4E3A\u540C\u4E00\u4E2A\u6D41\u7A0B\u3002"]])+tl(),Pt("#experiments-view")),Pt("#dimensions-view").insertAdjacentHTML("afterbegin",Ur("03","\u7EF4\u5EA6\u89E3\u5256 / \u56FE\u50CF\u4E0E\u68CB\u76D8\u7684\u5BF9\u7167","\u62C6\u5F00\u5E73\u9762\uFF0C<br><em>\u770B\u89C1\u6570\u636E\u5982\u4F55\u7EC4\u7EC7\u3002</em>","\u539F\u4E9A\u5386\u514B\u65AF\u7F51\u7EDC\u4FDD\u7559\u4E3A\u56FE\u50CF\u5377\u79EF\u793A\u4F8B\u3002\u4E0B\u65B9\u5BF9\u7167\u53F0\u5C06\u56FE\u50CF\u989C\u8272\u5E73\u9762\u5207\u6362\u4E3A\u68CB\u76D8\u72B6\u6001\u5E73\u9762\uFF1A\u76F8\u540C\u7684\u5F20\u91CF\u8BED\u8A00\uFF0C\u4E0D\u540C\u7684\u8F93\u5165\u610F\u4E49\u4E0E\u4EFB\u52A1\u8F93\u51FA\u3002")+'<div class="dimension-lab"><div><span class="eyebrow">\u5207\u7247\u4E0E\u901A\u9053 / \u53EF\u64CD\u4F5C\u5BF9\u7167</span><div class="dimension-controls"><button id="dim-image" class="active">\u56FE\u50CF\u989C\u8272\u7F16\u7801</button><button id="dim-board">\u68CB\u76D8\u72B6\u6001\u7F16\u7801</button></div><label>\u5E73\u9762\u5206\u79BB\u91CF<input id="plane-spread" type="range" min="0" max="100" value="35" aria-label="\u5E73\u9762\u5206\u79BB\u91CF"></label><label>\u89C2\u5BDF\u5207\u7247<input id="plane-slice" type="range" min="0" max="2" value="0" step="1" aria-label="\u89C2\u5BDF\u5207\u7247"></label><p id="plane-caption"></p></div><div class="plane-stack" id="plane-stack"><canvas width="240" height="240"></canvas><canvas width="240" height="240"></canvas><canvas width="240" height="240"></canvas></div></div><p class="dimension-boundary">\u68CB\u76D8\u4F7F\u7528\u201C\u9ED1\u68CB\u3001\u767D\u68CB\u3001\u7A7A\u4F4D\u201D\u4E09\u4E2A\u7B80\u5316\u5E73\u9762\uFF0C\u4EC5\u8BF4\u660E\u7F16\u7801\u601D\u60F3\uFF1B2016\u5E74\u539F\u7CFB\u7EDF\u7684\u7279\u5F81\u7F16\u7801\u8FDC\u6BD4\u8FD9\u590D\u6742\u3002\u4E0B\u65B9\u5341\u4E09\u5C42\u6A21\u578B\u4ECD\u662F\u56FE\u50CF\u5206\u7C7B\u793A\u4F8B\uFF0C\u4E0D\u662F\u963F\u5C14\u6CD5\u56F4\u68CB\u7F51\u7EDC\u590D\u523B\u3002</p>'),Pt("#experiments-view").insertAdjacentHTML("beforeend",'<section class="boundary-lab"><div class="section-head"><div><span class="eyebrow">05 / \u8FFD\u52A0\u5B9E\u9A8C\u4E0E\u8FB9\u754C</span><h2>\u7B2C\u4E00\u5370\u8C61\uFF0C\u8FD8\u662F\u641C\u7D22\u540E\u7684\u5224\u65AD\uFF1F</h2></div><a class="solid-link" href="#decision">\u8FDB\u5165\u641C\u7D22\u5B9E\u9A8C \u2192</a></div><p>\u5148\u9A8C\u503E\u5411\u53EA\u662F\u5019\u9009\u8D77\u70B9\u3002\u524D\u5F80\u51B3\u7B56\u4E4B\u6838\u9010\u6B21\u5206\u914D\u63A2\u7D22\u9884\u7B97\uFF0C\u5BF9\u6BD4\u8BBF\u95EE\u6B21\u6570\u4E0E\u5E73\u5747\u8BC4\u4F30\u503C\uFF0C\u89C2\u5BDF\u641C\u7D22\u662F\u5426\u6539\u53D8\u5019\u9009\u6392\u5E8F\u3002</p>'+Nr([["\u53EF\u9760\u6027","\u6982\u7387\u4E0D\u662F\u627F\u8BFA","\u5F52\u4E00\u5316\u5206\u5E03\u53D7\u5019\u9009\u7C7B\u522B\u3001\u8F93\u5165\u3001\u8BAD\u7EC3\u4E0E\u6821\u51C6\u5F71\u54CD\u3002\u6700\u5927\u6982\u7387\u4E0D\u7B49\u4E8E\u4E00\u5B9A\u6B63\u786E\uFF0C\u6559\u5B66\u5206\u6570\u66F4\u4E0D\u80FD\u5F53\u4F5C\u771F\u5B9E\u8BC6\u522B\u7ED3\u679C\u3002"],["\u4E13\u7528\u667A\u80FD","\u6BD4\u8D5B\u83B7\u80DC\u4E0D\u7B49\u4E8E\u901A\u7528\u80FD\u529B","\u56F4\u68CB\u89C4\u5219\u660E\u786E\u3001\u53CD\u9988\u660E\u786E\u3002\u5BF9\u56F4\u68CB\u7684\u9AD8\u6C34\u5E73\u4E0D\u81EA\u52A8\u610F\u5473\u7740\u7CFB\u7EDF\u80FD\u7406\u89E3\u6240\u6709\u73B0\u5B9E\u95EE\u9898\uFF0C\u66F4\u4E0D\u80FD\u8BC1\u660E\u610F\u8BC6\u3002"],["\u5B9E\u73B0\u8FB9\u754C","\u5C55\u793A\u3001\u5C40\u90E8\u8BA1\u7B97\u4E0E\u771F\u5B9E\u63A8\u7406","\u4E09\u7EF4\u7ED3\u6784\u3001\u7C92\u5B50\u8DEF\u5F84\u4E0E\u5386\u53F2\u786C\u4EF6\u4E3A\u539F\u7406\u8868\u8FBE\uFF1B\u5C40\u90E8\u5C0F\u5B9E\u9A8C\u6267\u884C\u6570\u503C\u8FD0\u7B97\uFF1B\u5168\u7CFB\u7EDF\u6CA1\u6709\u52A0\u8F7D\u5386\u53F2\u6A21\u578B\u6743\u91CD\u3002"]])+"</section>");let d=[["1950","\u673A\u5668\u80FD\u5426\u8868\u73B0\u51FA\u667A\u80FD\uFF1F","\u56FE\u7075\u4ECE\u53EF\u89C2\u5BDF\u7684\u884C\u4E3A\u51FA\u53D1\u8BA8\u8BBA\u673A\u5668\u667A\u80FD\u3002\u8FD9\u91CC\u4E0D\u628A\u667A\u80FD\u8868\u73B0\u548C\u4E3B\u89C2\u610F\u8BC6\u6DF7\u4E3A\u4E00\u8C08\u3002"],["1956","\u4EBA\u5DE5\u667A\u80FD\u6210\u4E3A\u4E00\u4E2A\u7814\u7A76\u65B9\u5411","\u8FBE\u7279\u8305\u65AF\u590F\u5B63\u7814\u7A76\u9879\u76EE\u6210\u4E3A\u8FD9\u4E00\u9886\u57DF\u7684\u5386\u53F2\u8282\u70B9\uFF1B\u4E4B\u540E\u89C4\u5219\u3001\u63A8\u7406\u3001\u641C\u7D22\u4E0E\u5B66\u4E60\u8DEF\u7EBF\u957F\u671F\u5E76\u884C\u3002"],["1980\u20141998","\u5C40\u90E8\u8FDE\u63A5\u4E0E\u5B66\u4E60\u65B9\u6CD5\u79EF\u7D2F","\u4ECE\u65B0\u8BA4\u77E5\u673A\u5230\u5377\u79EF\u624B\u5199\u8BC6\u522B\uFF0C\u591A\u5C42\u89C6\u89C9\u8868\u793A\u9010\u6B65\u8D70\u5411\u5B9E\u9645\u5E94\u7528\u3002"],["1997","\u4E13\u7528\u7CFB\u7EDF\u5728\u56FD\u9645\u8C61\u68CB\u4E0A\u7A81\u7834","\u6DF1\u84DD\u4F9D\u9760\u4E13\u95E8\u8BBE\u8BA1\u7684\u641C\u7D22\u3001\u8BC4\u4F30\u4E0E\u8BA1\u7B97\u8D44\u6E90\u6218\u80DC\u5361\u65AF\u5E15\u7F57\u592B\u3002\u56F4\u68CB\u7684\u5C40\u9762\u8BC4\u4EF7\u4E0E\u5206\u652F\u89C4\u6A21\u4ECD\u63D0\u51FA\u4E0D\u540C\u6311\u6218\u3002"],["2009\u20142012","\u6570\u636E\u3001\u7B97\u529B\u4E0E\u6DF1\u5EA6\u7F51\u7EDC\u6C47\u5408","\u5927\u89C4\u6A21\u56FE\u50CF\u6570\u636E\u4E0E\u5E76\u884C\u8BA1\u7B97\u63A8\u52A8\u89C6\u89C9\u5B66\u4E60\u3002\u4E9A\u5386\u514B\u65AF\u7F51\u7EDC\u662F\u91CD\u8981\u91CC\u7A0B\u7891\uFF0C\u800C\u4E0D\u662F\u6DF1\u5EA6\u5B66\u4E60\u7684\u53D1\u660E\u3002"],["2016","\u5B66\u4E60\u4E0E\u641C\u7D22\uFF0C\u8D70\u5230\u68CB\u76D8\u4E2D\u592E","\u7B56\u7565\u7F51\u7EDC\u3001\u4EF7\u503C\u7F51\u7EDC\u548C\u8499\u7279\u5361\u6D1B\u6811\u641C\u7D22\u7ED3\u5408\u3002\u4E09\u6708\u9996\u5C14\u4E94\u756A\u68CB\uFF0C\u963F\u5C14\u6CD5\u56F4\u68CB\u4EE54\u6BD41\u6218\u80DC\u674E\u4E16\u77F3\u3002"]];function f(v){let[M,w,R]=d[v];Pt("#era-year").textContent=M,Pt("#era-title").textContent=w,Pt("#era-text").textContent=R,Pt("#era").value=v,Pt("#origins-stage").style.filter=`grayscale(${1-v/5})`,document.querySelectorAll("[data-era]").forEach(S=>S.classList.toggle("active",+S.dataset.era===v))}Pt("#era").oninput=v=>f(+v.target.value),document.querySelectorAll("[data-era]").forEach(v=>v.onclick=()=>f(+v.dataset.era)),f(0);function m(){let v=Ic.games[n];Pt("#game-note").innerHTML=`<span>\u7B2C${n+1}\u5C40 \xB7 2016\u5E74${v.date}</span><h3>${v.winner} \u80DC</h3><p>${v.note}</p><small>\u4E0A\u65B9\u4E09\u7EF4\u68CB\u5F62\u4E3A\u7EDF\u4E00\u5408\u6210\u793A\u4F8B\uFF0C\u5207\u6362\u5BF9\u5C40\u4EC5\u6539\u53D8\u5386\u53F2\u8BB2\u89E3\uFF0C\u4E0D\u5192\u5145\u5BF9\u5E94\u5B9E\u6218\u5C40\u9762\u3002</small>`}document.querySelectorAll("[data-game]").forEach(v=>v.onclick=()=>{n=+v.dataset.game,document.querySelectorAll("[data-game]").forEach(M=>M.classList.toggle("active",M===v)),m()}),m(),Pt("#machine-explode").onclick=v=>{let M=r.explode();v.target.textContent=M?"\u6062\u590D\u8BA1\u7B97\u7CFB\u7EDF":"\u62C6\u89E3\u8BA1\u7B97\u7CFB\u7EDF",v.target.setAttribute("aria-pressed",M)};let g={policy:["\u7B56\u7565\u7F51\u7EDC","\u68CB\u76D8\u72B6\u6001 \u2192 \u5377\u79EF\u8868\u793A \u2192 \u843D\u5B50\u5206\u5E03","\u5728\u5408\u6CD5\u843D\u70B9\u4E2D\u5F62\u6210\u76F8\u5BF9\u503E\u5411\uFF0C\u5F15\u5BFC\u641C\u7D22\u4F18\u5148\u63A2\u7D22\u3002\u5206\u5E03\u6765\u81EA\u5C40\u9762\u8BC4\u4F30\uFF0C\u4E0D\u662F\u9010\u9879\u624B\u5199\u7684\u68CB\u5F62\u89C4\u5219\u3002"],value:["\u4EF7\u503C\u7F51\u7EDC","\u68CB\u76D8\u72B6\u6001 \u2192 \u5C40\u9762\u8868\u793A \u2192 \u7ED3\u679C\u4F30\u8BA1","\u4F30\u8BA1\u5C40\u9762\u5BF9\u5F53\u524D\u68CB\u624B\u7684\u6709\u5229\u7A0B\u5EA6\u3002\u5B83\u4E0D\u8F93\u51FA\u5B8C\u6574\u7684\u6700\u4F73\u540E\u7EED\u53D8\u5316\uFF0C\u4E5F\u4E0D\u4FDD\u8BC1\u6BD4\u8D5B\u7ED3\u679C\u3002"],search:["\u8499\u7279\u5361\u6D1B\u6811\u641C\u7D22","\u9009\u62E9 \u2192 \u6269\u5C55 \u2192 \u8BC4\u4F30 \u2192 \u56DE\u4F20 \u2192 \u518D\u9009\u62E9","\u53CD\u590D\u66F4\u65B0\u8BBF\u95EE\u7EDF\u8BA1\u4E0E\u8BC4\u4F30\uFF0C\u517C\u987E\u5DF2\u6709\u9AD8\u503C\u5206\u652F\u548C\u63A2\u7D22\u4E0D\u8DB3\u7684\u5206\u652F\u3002\u8BA1\u7B97\u9884\u7B97\u6709\u9650\uFF0C\u56E0\u6B64\u8D44\u6E90\u5206\u914D\u672C\u8EAB\u5F88\u91CD\u8981\u3002"]};function _(v){let[M,w,R]=g[v];Pt("#mechanism-detail").innerHTML=`<div class="mechanism-symbol" aria-hidden="true">${v==="policy"?"\u03C0":v==="value"?"V":"\u219F"}</div><div><span>\u51B3\u7B56\u673A\u5236 / \u975E\u5386\u53F2\u6743\u91CD\u63A8\u7406</span><h2>${M}</h2><div class="formula">${w}</div><p>${R}</p></div>`}document.querySelectorAll("[data-mechanism]").forEach(v=>v.onclick=()=>{_(v.dataset.mechanism),document.querySelectorAll("[data-mechanism]").forEach(M=>M.classList.toggle("active",M===v))}),_("policy");function p(){let v=i.visits.reduce((M,w)=>M+w,0);Pt("#tree-stage").innerHTML=`<svg viewBox="0 0 760 280" role="img" aria-label="\u4E09\u4E2A\u5019\u9009\u5206\u652F\u7684\u641C\u7D22\u6811"><g class="tree-lines">${[140,380,620].map((M,w)=>`<path class="${i.selected===w?"chosen":""}" d="M380 55 Q380 100 ${M} 160"/>${[-55,0,55].map(R=>`<path d="M${M} 170 L${M+R} 245"/>`).join("")}`).join("")}</g><g><circle cx="380" cy="45" r="25" class="root"/><text x="380" y="50">\u5C40\u9762</text>${[140,380,620].map((M,w)=>`<circle cx="${M}" cy="165" r="30" class="${i.selected===w?"chosen":""}"/><text x="${M}" y="162">${["\u7532","\u4E59","\u4E19"][w]}</text><text x="${M}" y="181" class="stat">\u8BBF\u95EE ${i.visits[w]}</text>${[-55,0,55].map(R=>`<circle cx="${M+R}" cy="247" r="9"/>`).join("")}`).join("")}</g></svg>`,Pt("#search-status").textContent=`\u4E0B\u4E00\u9636\u6BB5\uFF1A${Yu[i.phase]} \xB7 \u5DF2\u56DE\u4F20 ${v} \u6B21`,Pt("#search-table").innerHTML=[0,1,2].map(M=>`<div><b>\u5019\u9009${["\u7532","\u4E59","\u4E19"][M]}</b><span>\u5148\u9A8C ${(i.prior[M]*100).toFixed(0)}%</span><span>\u8BBF\u95EE ${i.visits[M]}</span><strong>\u5747\u503C ${i.values[M].toFixed(3)}</strong></div>`).join("")}Pt("#search-step").onclick=()=>{i=Dc(i),p()},Pt("#search-cycle").onclick=()=>{for(let v=0;v<4;v++)i=Dc(i);p()},Pt("#search-reset").onclick=()=>{i=Lc(),p()},p();let h={gpu:["\u7EC3\u4E60\u5DE5\u5177 / \u52A0\u901F\u8BA1\u7B97","\u62C6\u5F00\u7684\u662F\u56FE\u5F62\u52A0\u901F\u5668\u539F\u7406\u7ED3\u6784","\u4ECE\u5E95\u677F\u3001\u8BA1\u7B97\u6838\u5FC3\u3001\u5B58\u50A8\u6A21\u5757\u5230\u6563\u70ED\u7ED3\u6784\u3002\u70B9\u51FB\u201C\u62C6\u5F00\u5F53\u524D\u6A21\u578B\u201D\u5206\u79BB\u90E8\u4EF6\uFF1B\u6B64\u56FE\u4E0D\u590D\u523B2016\u5E74\u7684\u5177\u4F53\u663E\u5361\u6216\u670D\u52A1\u5668\u3002"],training:["\u53CD\u9988\u5B66\u4E60 / \u7B80\u5316\u68AF\u5EA6\u66F4\u65B0","\u628A\u8BEF\u5DEE\u53CD\u9988\u7ED9\u53C2\u6570","\u6F14\u793A\u5355\u4E2A\u6743\u91CD\u7684\u5E73\u65B9\u8BEF\u5DEE\u66F4\u65B0\u3002\u8F93\u51650.8\u3001\u76EE\u68070.9\uFF0C\u9010\u6B65\u8C03\u6574\u6743\u91CD\uFF1B\u8FD9\u662F\u771F\u5B9E\u6570\u503C\u8BA1\u7B97\uFF0C\u4F46\u4E0D\u662F\u5B8C\u6574\u795E\u7ECF\u7F51\u7EDC\u8BAD\u7EC3\u3002"],selfplay:["\u81EA\u6211\u5BF9\u5F08 / \u751F\u6210\u7ECF\u9A8C","\u540C\u4E00\u89C4\u5219\u4E0B\uFF0C\u7B56\u7565\u6210\u4E3A\u5BF9\u624B","\u4E24\u4FA7\u7ED3\u6784\u8868\u793A\u7B56\u7565\u5B9E\u4F8B\uFF0C\u5171\u4EAB\u7684\u68CB\u76D8\u4EA7\u751F\u5BF9\u5C40\u53CD\u9988\u3002\u52A8\u753B\u4EC5\u8BF4\u660E\u4EA4\u4E92\u5173\u7CFB\uFF0C\u4E0D\u5305\u542B\u68CB\u529B\uFF0C\u4E0D\u6267\u884C\u5408\u6CD5\u843D\u5B50\u3001\u63D0\u5B50\u6216\u80DC\u8D1F\u5224\u5B9A\u3002"]};function T(){let[v,M,w]=h[e];if(Pt("#growth-info").innerHTML=`<span>${v}</span><h3>${M}</h3><p>${w}</p><p>\u201C\u6210\u957F\u201D\u53EA\u6307\u8BAD\u7EC3\u53C2\u6570\u53CA\u4EFB\u52A1\u80FD\u529B\u7684\u53D8\u5316\uFF0C\u4E0D\u662F\u83B7\u5F97\u4EBA\u7684\u4E3B\u89C2\u4F53\u9A8C\u3002</p>`,Pt("#growth-experiment").innerHTML=e==="training"?'<div class="training-panel"><div><span>\u8F93\u51650.8 \xB7 \u76EE\u68070.9 \xB7 \u5355\u6743\u91CD\u5E73\u65B9\u8BEF\u5DEE</span><h3>\u8BEF\u5DEE\u4E0B\u964D\uFF0C\u4F46\u4E0D\u610F\u5473\u7740\u5B66\u4F1A\u4E86\u56F4\u68CB\u3002</h3><button id="train-step" class="solid-link">\u66F4\u65B0\u4E00\u6B21\u53C2\u6570</button><button id="train-reset">\u91CD\u7F6E\u8BAD\u7EC3</button></div><div class="training-values"><b id="train-epoch"></b><strong id="train-error"></strong><span id="train-weight"></span></div></div>':`<div class="bridge-note"><h3>${e==="gpu"?"\u62C6\u89E3\u540E\u8BF7\u89C2\u5BDF\u4E09\u4E2A\u95EE\u9898":"\u539F\u7248\u4E0E\u96F6\u8D77\u70B9\u7CFB\u7EDF\uFF0C\u4E0D\u662F\u540C\u4E00\u6761\u8D77\u8DD1\u7EBF"}</h3><p>${e==="gpu"?"\u8BA1\u7B97\u5728\u54EA\u91CC\u53D1\u751F\uFF1F\u53C2\u6570\u5B58\u5728\u54EA\u91CC\uFF1F\u70ED\u91CF\u5982\u4F55\u79BB\u5F00\uFF1F\u786C\u4EF6\u90E8\u4EF6\u7684\u5F62\u72B6\u53EA\u662F\u539F\u7406\u8868\u8FBE\uFF0C\u8BAD\u7EC3\u901F\u5EA6\u4ECD\u9700\u5B9E\u9645\u6D4B\u8BD5\u3002":"2016\u5E74\u7CFB\u7EDF\u5148\u4F7F\u7528\u4EBA\u7C7B\u68CB\u8C31\u5E76\u8FDB\u884C\u81EA\u6211\u5BF9\u5F08\u5B66\u4E60\u30022017\u5E74\u96F6\u7248\u672C\u4ECE\u81EA\u6211\u5BF9\u5F08\u5B66\u4E60\uFF0C\u91C7\u7528\u4E0D\u540C\u65B9\u6848\u3002\u672C\u5C55\u533A\u53EA\u89E3\u91CA\u53CD\u9988\u5FAA\u73AF\uFF0C\u4E0D\u58F0\u79F0\u590D\u73B0\u4EFB\u4E00\u7CFB\u7EDF\u3002"}</p></div>`,e==="training"){let R=()=>{Pt("#train-epoch").textContent=`\u7B2C ${t.epoch} \u6B21\u66F4\u65B0`,Pt("#train-error").textContent=`\u8BEF\u5DEE ${t.error.toFixed(6)}`,Pt("#train-weight").textContent=`\u6743\u91CD ${t.weight.toFixed(6)}`};Pt("#train-step").onclick=()=>{t=$u(t),R()},Pt("#train-reset").onclick=()=>{t={...Uc},R()},R()}}document.querySelectorAll("[data-growth]").forEach(v=>v.onclick=()=>{e=v.dataset.growth,document.querySelectorAll("[data-growth]").forEach(M=>M.classList.toggle("active",M===v)),r.show(Pt("#growth-scene"),e),Pt("#growth-explode").textContent="\u62C6\u5F00\u5F53\u524D\u6A21\u578B",T()}),Pt("#growth-explode").onclick=v=>{v.target.textContent=r.explode()?"\u6062\u590D\u5F53\u524D\u6A21\u578B":"\u62C6\u5F00\u5F53\u524D\u6A21\u578B"},T();let A="image";function y(){let v=+Pt("#plane-spread").value,M=+Pt("#plane-slice").value,w=A==="image"?["\u7EA2\u8272","\u7EFF\u8272","\u84DD\u8272"]:["\u9ED1\u68CB","\u767D\u68CB","\u7A7A\u4F4D"];document.querySelectorAll("#plane-stack canvas").forEach((R,S)=>{let E=R.getContext("2d");E.clearRect(0,0,240,240),E.fillStyle=["#392328","#183f35","#20334d"][S],E.fillRect(0,0,240,240);for(let L=0;L<19;L++)for(let z=0;z<19;z++){let G=Qo.find(Z=>Z[0]===z&&Z[1]===L),$=A==="board"?S===2?!G:G&&G[2]===S:Math.sin(z*.25+S)*Math.cos(L*.21-S)>.1;E.fillStyle=$?["#de9c99","#8bc8ae","#8caedd"][S]:"#152536",E.fillRect(6+z*12,6+L*12,10,10)}E.fillStyle="#e2edf2",E.font="14px sans-serif",E.fillText(w[S]+"\u5E73\u9762",12,225),R.style.transform=`translate(${(S-1)*v*.65}px,${(S-1)*v*.24}px) rotateY(-28deg) rotateX(13deg)`,R.style.opacity=S===M?"1":".43",R.style.zIndex=S===M?5:S}),Pt("#plane-caption").textContent=`\u5F53\u524D\u5207\u7247\uFF1A${w[M]}\u5E73\u9762\u3002${A==="board"?"19\xD719\u7B80\u5316\u72B6\u6001\u7F16\u7801\uFF0C\u4E0D\u662F\u539F\u59CB\u5B8C\u6574\u7279\u5F81\u3002":"\u5408\u6210\u901A\u9053\u7EB9\u7406\u7528\u4E8E\u8BF4\u660E\u5E73\u9762\u7EC4\u7EC7\uFF0C\u4E0D\u662F\u539F\u59CB\u7167\u7247\u50CF\u7D20\u3002"}`}return Pt("#dim-image").onclick=()=>{A="image",Pt("#dim-image").classList.add("active"),Pt("#dim-board").classList.remove("active"),y()},Pt("#dim-board").onclick=()=>{A="board",Pt("#dim-board").classList.add("active"),Pt("#dim-image").classList.remove("active"),y()},Pt("#plane-spread").oninput=Pt("#plane-slice").oninput=y,y(),{show(v){r.hide(),v==="match"&&(r.show(Pt("#match-scene"),"match"),Pt("#machine-explode").textContent="\u62C6\u89E3\u8BA1\u7B97\u7CFB\u7EDF",Pt("#machine-explode").setAttribute("aria-pressed","false")),v==="growth"&&(r.show(Pt("#growth-scene"),e),Pt("#growth-explode").textContent="\u62C6\u5F00\u5F53\u524D\u6A21\u578B")},dispose(){r.dispose()}}}var el=[{name:"\u901A\u9053\u5206\u79BB",tag:"\u56FE\u50CF\u7F16\u7801",goal:"\u5206\u522B\u67E5\u770B\u7EA2\u3001\u7EFF\u3001\u84DD\u4E09\u4E2A\u901A\u9053\uFF0C\u89C2\u5BDF\u540C\u4E00\u56FE\u50CF\u7684\u6570\u503C\u7EC4\u6210\u3002",hint:"\u4F9D\u6B21\u70B9\u51FB\u4E09\u4E2A\u989C\u8272\u901A\u9053\uFF1B\u5408\u6210\u56FE\u4E0D\u8BA1\u4F5C\u72EC\u7ACB\u901A\u9053\u3002",layer:0},{name:"\u5377\u79EF\u626B\u63CF",tag:"\u5C40\u90E8\u611F\u53D7\u91CE",goal:"\u628A\u5377\u79EF\u7A97\u53E3\u79FB\u5230\u81F3\u5C11\u4E24\u4E2A\u4E0D\u540C\u4F4D\u7F6E\uFF0C\u6BD4\u8F83\u8F93\u51FA\u54CD\u5E94\u3002",hint:"\u79FB\u52A8\u4E0B\u65B9\u6ED1\u6761\uFF0C\u6216\u70B9\u51FB\u8F93\u5165\u77E9\u9635\u3002\u81F3\u5C11\u626B\u63CF\u4E24\u4E2A\u4E0D\u540C\u7A97\u53E3\u3002",layer:1},{name:"\u6700\u5927\u6C60\u5316",tag:"\u54CD\u5E94\u4FDD\u7559",goal:"\u5728\u8FD9\u4E2A\u5C40\u90E8\u7A97\u53E3\u4E2D\uFF0C\u9009\u51FA\u5E94\u88AB\u4FDD\u7559\u7684\u6700\u5927\u503C\u3002",hint:"\u6BD4\u8F83\u5168\u90E8\u4E5D\u4E2A\u6570\u503C\uFF0C\u6700\u5927\u503C\u662F 7\uFF1B\u5E76\u975E\u9009\u62E9\u4E2D\u5FC3\u4F4D\u7F6E\u3002",layer:2},{name:"\u5F20\u91CF\u5C55\u5E73",tag:"\u7D22\u5F15\u91CD\u6392",goal:"\u6267\u884C\u4E00\u6B21\u5C55\u5E73\uFF0C\u518D\u5224\u65AD\u5143\u7D20\u6570\u91CF\u662F\u5426\u53D1\u751F\u6539\u53D8\u3002",hint:"\u5C55\u5E73\u53EA\u6539\u53D8\u7D22\u5F15\u7EC4\u7EC7\u65B9\u5F0F\u3002\u5148\u6267\u884C\u91CD\u6392\uFF0C\u518D\u56DE\u7B54\u95EE\u9898\u3002",layer:8},{name:"\u6743\u91CD\u8C03\u8282",tag:"\u7EBF\u6027\u7EC4\u5408\u4E0E\u6574\u6D41",goal:"\u8C03\u8282\u8FDE\u63A5\u6743\u91CD\uFF0C\u8BA9\u6574\u6D41\u540E\u7684\u8F93\u51FA\u6070\u597D\u53D8\u6210 0\u3002",hint:"\u5148\u8BA9\u52A0\u6743\u548C\u4E0D\u5927\u4E8E 0\u3002\u6574\u6D41\u51FD\u6570\u4F1A\u628A\u8D1F\u503C\u622A\u65AD\u4E3A 0\u3002",layer:9},{name:"\u6982\u7387\u7ADE\u4E89",tag:"\u5F52\u4E00\u5316\u5206\u5E03",goal:"\u8C03\u8282\u7B2C\u4E00\u7C7B\u5206\u6570\uFF0C\u4F7F\u5176\u5F52\u4E00\u5316\u6982\u7387\u8FBE\u5230 80% \u6216\u66F4\u9AD8\u3002",hint:"\u63D0\u9AD8\u7B2C\u4E00\u9879\u5206\u6570\uFF0C\u89C2\u5BDF\u5176\u4F59\u6982\u7387\u4E00\u8D77\u4E0B\u964D\u3002\u5206\u6570\u4E0D\u7B49\u4E8E\u6982\u7387\u3002",layer:12}];function qi(){return{index:0,completed:[],channels:[],scans:[],flattened:!1,weight:1,score:2,passed:!1,feedback:"\u7B49\u5F85\u64CD\u4F5C\u3002"}}var Bs=(i,t)=>({...i,passed:!0,completed:[...new Set([...i.completed,i.index])],feedback:t});function ju(i,t,e){let n={...i};if(t==="reset")return qi();if(t==="retry")return{...qi(),index:n.index,completed:n.completed.filter(s=>s!==n.index)};if(t==="next")return n.passed&&n.index<5?{...qi(),index:n.index+1,completed:n.completed}:n;if(n.index===0&&t==="channel"&&["red","green","blue"].includes(e)&&(n.channels=[...new Set([...n.channels,e])],n.feedback=`\u5DF2\u89C2\u5BDF ${n.channels.length} / 3 \u4E2A\u901A\u9053\u3002`,n.channels.length===3))return Bs(n,"\u901A\u9053\u5206\u79BB\u5B8C\u6210\u3002\u5F69\u8272\u56FE\u50CF\u7531\u7A7A\u95F4\u5BF9\u9F50\u7684\u4E09\u4E2A\u989C\u8272\u901A\u9053\u7EC4\u6210\u3002");if(n.index===1&&t==="scan"&&Number.isInteger(e)&&e>=0&&e<=8&&(n.scans=[...new Set([...n.scans,e])],n.feedback=`\u5DF2\u626B\u63CF ${n.scans.length} \u4E2A\u4E0D\u540C\u7A97\u53E3\u3002`,n.scans.length>=2))return Bs(n,"\u5377\u79EF\u626B\u63CF\u5B8C\u6210\u3002\u540C\u4E00\u7EC4\u6743\u91CD\u5728\u4E0D\u540C\u4F4D\u7F6E\u91CD\u590D\u5E94\u7528\uFF0C\u8F93\u51FA\u968F\u5C40\u90E8\u8F93\u5165\u53D8\u5316\u3002");if(n.index===2&&t==="pool"&&(n.feedback=e===7?"":"\u8FD9\u4E2A\u503C\u4E0D\u662F\u5C40\u90E8\u6700\u5927\u503C\uFF0C\u8BF7\u518D\u6B21\u6BD4\u8F83\u3002",e===7))return Bs(n,"\u6700\u5927\u6C60\u5316\u8F93\u51FA\u4E3A 7\u3002\u7A7A\u95F4\u7A97\u53E3\u7F29\u5C0F\uFF0C\u5C40\u90E8\u6700\u5927\u54CD\u5E94\u88AB\u4FDD\u7559\u3002");if(n.index===3&&t==="flatten"&&(n.flattened=!0,n.feedback="\u91CD\u6392\u5B8C\u6210\uFF1A2\xD73 \u5F20\u91CF \u2192 \u957F\u5EA6\u4E3A 6 \u7684\u5411\u91CF\u3002\u8BF7\u5224\u65AD\u5143\u7D20\u6570\u91CF\u3002"),n.index===3&&t==="answer")if(!n.flattened)n.feedback="\u8BF7\u5148\u6267\u884C\u5C55\u5E73\uFF0C\u518D\u5224\u65AD\u3002";else{if(e==="same")return Bs(n,"\u5C55\u5E73\u5B8C\u6210\u3002\u6392\u5217\u6539\u53D8\uFF0C\u4F46\u516D\u4E2A\u6570\u503C\u53CA\u5176\u6570\u91CF\u90FD\u672A\u6539\u53D8\u3002");n.feedback="\u6CE8\u610F\uFF1A\u5C55\u5E73\u6CA1\u6709\u6DFB\u52A0\u6216\u5220\u9664\u6570\u503C\uFF0C\u8BF7\u518D\u89C2\u5BDF\u3002"}if(n.index===4&&t==="weight"&&Number.isFinite(e)){n.weight=e;let s=jn([.8,-.4,.6],[e,.5,-.2])+.1;if(n.feedback=`\u52A0\u6743\u548C ${s.toFixed(3)} \u2192 \u6574\u6D41\u8F93\u51FA ${Math.max(0,s).toFixed(3)}`,s<=0)return Bs(n,"\u8F93\u51FA\u5F52\u96F6\uFF1A\u6574\u6D41\u51FD\u6570\u622A\u65AD\u975E\u6B63\u8F93\u5165\uFF0C\u800C\u4E0D\u662F\u628A\u8FDE\u63A5\u6743\u91CD\u5168\u90E8\u6E05\u7A7A\u3002")}if(n.index===5&&t==="score"&&Number.isFinite(e)){n.score=e;let s=Os([e,1,.4,-.1])[0];if(n.feedback=`\u7B2C\u4E00\u7C7B\u6982\u7387 ${(s*100).toFixed(1)}%\uFF0C\u76EE\u6807\u81F3\u5C11 80%\u3002`,s>=.8)return Bs(n,"\u5F52\u4E00\u5316\u5B9E\u9A8C\u5B8C\u6210\u3002\u63D0\u9AD8\u4E00\u4E2A\u7C7B\u522B\u7684\u5206\u6570\uFF0C\u4F1A\u6539\u53D8\u6240\u6709\u7C7B\u522B\u7684\u76F8\u5BF9\u6982\u7387\u3002")}return n}var Un=i=>document.querySelector(i);function Qu({onModel:i,inspect:t}){let e=Ku(),n=Pc(location.hash),s=qi(),r="all",a=0,o=!1,l=null;function c(){n=Pc(location.hash);for(let[_]of Dr){document.getElementById(_+"-view").hidden=_!==n;let p=document.getElementById("nav-"+_);_===n?p.setAttribute("aria-current","page"):p.removeAttribute("aria-current")}e.show(n),i(n==="dimensions"),n==="dimensions"&&l!==null&&(t(l),l=null),n==="experiments"&&m(),window.scrollTo({top:0,behavior:"instant"})}window.addEventListener("hashchange",c),document.querySelectorAll(".main-nav a").forEach((_,p,h)=>_.addEventListener("keydown",T=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(T.key))return;T.preventDefault();let A=T.key==="Home"?0:T.key==="End"?h.length-1:(p+(T.key==="ArrowRight"?1:h.length-1))%h.length;h[A].focus(),location.hash=h[A].hash}));function u(_,p){s=ju(s,_,p),m()}function d(){let _=Math.floor(a/3),p=a%3;return Array.from({length:9},(h,T)=>Math.round((Math.sin((T%3+p)*.7)+Math.cos((Math.floor(T/3)+_)*.9)+2)*2)/10)}function f(){let _=s.index;if(_===0)return`<div class="lab-image-wrap"><canvas id="lab-image" width="384" height="384" aria-label="\u989C\u8272\u901A\u9053\u793A\u4F8B"></canvas><div class="image-metadata"><span>\u6F14\u793A\u8F93\u5165</span><b>\u4E09\u901A\u9053\u989C\u8272\u7F16\u7801</b><p>\u901A\u9053\u53EA\u6539\u53D8\u663E\u793A\u65B9\u5F0F\uFF0C\u5E76\u672A\u8BC6\u522B\u56FE\u50CF\u5185\u5BB9\u3002</p><div class="channel-status">${["red","green","blue"].map((h,T)=>`<span class="${s.channels.includes(h)?"seen":""}">${["\u7EA2","\u7EFF","\u84DD"][T]} ${s.channels.includes(h)?"\u5DF2\u67E5\u770B":"\u5F85\u67E5\u770B"}</span>`).join("")}</div></div></div><div class="lab-controls">${[["all","\u5408\u6210\u56FE\u50CF"],["red","\u7EA2\u8272\u901A\u9053"],["green","\u7EFF\u8272\u901A\u9053"],["blue","\u84DD\u8272\u901A\u9053"]].map(([h,T])=>`<button data-channel="${h}" class="${r===h?"chosen":""}">${T}</button>`).join("")}</div>`;if(_===1){let h=Math.floor(a/3),T=a%3,A=d(),y=[-1,0,1,-2,0,2,-1,0,1];return`<div class="scan-layout"><div><div class="lab-caption">\u5408\u6210\u8F93\u5165\u77E9\u9635 \xB7 5 \xD7 5</div><div class="input-matrix">${Array.from({length:25},(v,M)=>{let w=Math.floor(M/5),R=M%5;return`<button class="${w>=h&&w<h+3&&R>=T&&R<T+3?"in-window":""}" data-scan="${Math.min(2,w)*3+Math.min(2,R)}" aria-label="\u4ECE\u7B2C${w+1}\u884C\u7B2C${R+1}\u5217\u9644\u8FD1\u626B\u63CF">${(Math.round((Math.sin(R*.7)+Math.cos(w*.9)+2)*2)/10).toFixed(1)}</button>`}).join("")}</div></div><div><div class="lab-caption">\u5171\u4EAB\u5377\u79EF\u6838 \xB7 3 \xD7 3</div><div class="kernel-matrix">${y.map(v=>`<span>${v}</span>`).join("")}</div><div class="lab-calculation">\u52A0\u6743\u548C <b>${jn(A,y).toFixed(3)}</b><small>\u4E5D\u9879\u76F8\u4E58\u540E\u6C42\u548C\uFF0C\u65E0\u504F\u7F6E</small></div></div></div><label class="lab-range">\u626B\u63CF\u7A97\u53E3\uFF1A\u884C ${h+1} / \u5217 ${T+1}<input id="lab-scan" aria-label="\u5B9E\u9A8C\u626B\u63CF\u7A97\u53E3" type="range" min="0" max="8" step="1" value="${a}"></label>`}if(_===2)return`<div class="lab-caption">\u9009\u62E9\u5C40\u90E8\u6700\u5927\u503C\uFF0C\u63D0\u4EA4\u5230\u6C60\u5316\u8F93\u51FA</div><div class="pool-matrix">${[1,3,2,4,7,5,0,6,2].map((h,T)=>`<button data-pool="${h}" aria-label="\u7B2C${T+1}\u683C \u6570\u503C${h}">${h}</button>`).join("")}</div><div class="pool-output"><span>\u6700\u5927\u6C60\u5316\u8F93\u51FA</span><b>${s.passed?"7":"?"}</b></div>`;if(_===3)return`<div class="flatten-stage ${s.flattened?"flat":""}" aria-label="\u516D\u4E2A\u5143\u7D20\u7684\u91CD\u6392">${[1,2,3,4,5,6].map((h,T)=>`<span style="--i:${T};--row:${Math.floor(T/3)};--col:${T%3}">${h}</span>`).join("")}</div><div class="flatten-label">${s.flattened?"\u5411\u91CF\uFF1A1\uFF0C2\uFF0C3\uFF0C4\uFF0C5\uFF0C6":"\u5F20\u91CF\uFF1A2 \xD7 3\uFF0C\u5171\u516D\u4E2A\u5143\u7D20"}</div><div class="lab-controls"><button id="lab-flatten" ${s.flattened?"disabled":""}>\u6267\u884C\u5C55\u5E73 \u2192</button></div><p class="lab-question">\u91CD\u6392\u5B8C\u6210\u540E\uFF0C\u5143\u7D20\u6570\u91CF\u4F1A\u600E\u6837\uFF1F</p><div class="lab-controls"><button data-answer="more">\u589E\u52A0</button><button data-answer="same">\u4E0D\u53D8</button><button data-answer="less">\u51CF\u5C11</button></div>`;if(_===4){let h=jn([.8,-.4,.6],[s.weight,.5,-.2])+.1;return`<div class="weight-network"><div><span>\u8F93\u5165</span><b>0.8</b><b>\u22120.4</b><b>0.6</b></div><div class="weight-lines"><span>\xD7 ${s.weight.toFixed(1)}</span><span>\xD7 0.5</span><span>\xD7 \u22120.2</span></div><div class="sum-node">\u03A3<small>\u504F\u7F6E + 0.1</small></div><div class="weight-result"><span>\u6574\u6D41\u8F93\u51FA</span><strong>${Math.max(0,h).toFixed(3)}</strong><small>\u52A0\u6743\u548C ${h.toFixed(3)}</small></div></div><label class="lab-range">\u7B2C\u4E00\u6761\u8FDE\u63A5\u6743\u91CD\uFF1A${s.weight.toFixed(1)}<input id="lab-weight" aria-label="\u5B9E\u9A8C\u6743\u91CD" type="range" min="-2" max="2" step="0.1" value="${s.weight}"></label><p class="lab-caption">\u76EE\u6807\u4E0D\u662F\u628A\u6240\u6709\u8F93\u5165\u8BBE\u4E3A\u96F6\uFF0C\u800C\u662F\u4EE4\u52A0\u6743\u548C\u4E0D\u5927\u4E8E\u96F6\u3002</p>`}let p=Os([s.score,1,.4,-.1]);return`<div class="score-comparison">${p.map((h,T)=>`<div><span>\u7C7B\u522B${["\u4E00","\u4E8C","\u4E09","\u56DB"][T]}</span><i><b style="width:${h*100}%"></b></i><strong>${(h*100).toFixed(1)}%</strong></div>`).join("")}</div><label class="lab-range">\u7B2C\u4E00\u7C7B\u5206\u6570\uFF1A${s.score.toFixed(1)}<input id="lab-score" aria-label="\u5B9E\u9A8C\u7C7B\u522B\u5206\u6570" type="range" min="-2" max="5" step="0.1" value="${s.score}"></label><div class="score-sum">\u6982\u7387\u603B\u548C <b>${p.reduce((h,T)=>h+T,0).toFixed(6)}</b><span>\u76EE\u6807\uFF1A\u7B2C\u4E00\u7C7B\u6982\u7387 \u2265 80%</span></div>`}function m(){let _=el[s.index];Un("#lab-total").textContent=`${String(s.completed.length).padStart(2,"0")} / 06`,Un("#lab-stages").innerHTML=el.map((h,T)=>`<button data-lab="${T}" ${T>Math.max(s.index,Math.min(5,s.completed.length))&&!s.completed.includes(T)?"disabled":""} class="${T===s.index?"current":""} ${s.completed.includes(T)?"done":""}"><span>${String(T+1).padStart(2,"0")}</span><div><b>${h.name}</b><small>${s.completed.includes(T)?"\u5DF2\u5B8C\u6210":T===s.index?"\u5F53\u524D\u5B9E\u9A8C":"\u7B49\u5F85\u89E3\u9501"}</small></div><i>${s.completed.includes(T)?"\u2713":"\u2192"}</i></button>`).join(""),Un("#lab-body").innerHTML=`<div class="lab-topline"><span>\u5B9E\u9A8C ${String(s.index+1).padStart(2,"0")} / 06 \xB7 ${_.tag}</span><span>\u771F\u5B9E\u5C40\u90E8\u8BA1\u7B97</span></div><h2>${_.name}</h2><p class="lab-goal">${_.goal}</p><div class="lab-board">${f()}</div><div class="lab-feedback ${s.passed?"passed":""}" role="status"><span>${s.passed?"\u2713":"\u25CC"}</span>${s.feedback}</div>${o?`<p class="lab-hint">\u63D0\u793A\uFF1A${_.hint}</p>`:""}<div class="lab-bottom-actions"><button id="lab-hint">${o?"\u6536\u8D77\u63D0\u793A":"\u67E5\u770B\u63D0\u793A"}</button><button id="lab-retry">\u91CD\u8BD5\u672C\u5173</button><button id="lab-inspect">\u5728\u4E09\u7EF4\u6A21\u578B\u4E2D\u67E5\u770B \u2197</button><button id="lab-next" class="solid-link" ${!s.passed||s.index===5?"disabled":""}>\u4E0B\u4E00\u5B9E\u9A8C \u2192</button></div>${s.completed.length===6?'<div class="lab-complete"><span>\u516D\u9879\u5B9E\u9A8C\u5DF2\u5B8C\u6210</span><h3>\u4F60\u5DF2\u8D70\u8FC7\u4E00\u6761\u53EF\u9A8C\u8BC1\u7684\u8BA1\u7B97\u8DEF\u5F84\u3002</h3><p>\u989C\u8272\u7F16\u7801 \u2192 \u5C40\u90E8\u5377\u79EF \u2192 \u6700\u5927\u6C60\u5316 \u2192 \u5C55\u5E73 \u2192 \u52A0\u6743\u6C47\u805A \u2192 \u6982\u7387\u5F52\u4E00\u5316</p><a href="#dimensions">\u8FD4\u56DE\u5B8C\u6574\u4E09\u7EF4\u7F51\u7EDC \u2197</a></div>':""}`;let p=Un("#lab-stages .current");if(p){let h=Un("#lab-stages");h.scrollLeft=Math.max(0,p.offsetLeft-h.offsetLeft-12)}if(s.index===0){let h=Lr(r);Un("#lab-image").getContext("2d").drawImage(h.image,0,0,384,384),h.dispose()}}Un("#lab-body").addEventListener("click",_=>{let p=_.target.closest("button");!p||p.disabled||(p.dataset.channel?(r=p.dataset.channel,u("channel",r)):p.dataset.scan!==void 0?(a=+p.dataset.scan,u("scan",a)):p.dataset.pool!==void 0?u("pool",+p.dataset.pool):p.dataset.answer?u("answer",p.dataset.answer):p.id==="lab-flatten"?u("flatten"):p.id==="lab-hint"?(o=!o,m()):p.id==="lab-retry"?(r="all",a=0,o=!1,u("retry")):p.id==="lab-next"?(o=!1,u("next")):p.id==="lab-inspect"&&(l=g(),location.hash="#dimensions"))});function g(){return el[s.index].layer}return Un("#lab-body").addEventListener("change",_=>{_.target.id==="lab-scan"&&(a=+_.target.value,u("scan",a)),_.target.id==="lab-weight"&&u("weight",+_.target.value),_.target.id==="lab-score"&&u("score",+_.target.value)}),Un("#lab-stages").addEventListener("click",_=>{let p=_.target.closest("[data-lab]");if(!p||p.disabled)return;let h=+p.dataset.lab;h!==s.index&&(s={...qi(),index:h,completed:s.completed,passed:s.completed.includes(h)},r="all",a=0,o=!1,m())}),Un("#lab-reset").onclick=()=>{s=qi(),r="all",a=0,o=!1,m()},m(),c(),{isModel:()=>n==="dimensions"}}var Bc,zs=!1,At=i=>document.querySelector(i),nl=matchMedia("(prefers-reduced-motion: reduce)").matches,yi=At("#viewport"),wn=At("#scene"),il=new Pe,Vs=[],od=[],zc=[],pn,He,sn,ye,vi,ld,Nc,kc,td=0,sl=!1,oe=-1,Yi=!1,Nn=!1,Qn=-1,rl=-1,mn=null,ed=0,$t=Jo(),Qt={channel:"all",kernel:"edge",cell:4,pooling:null,flatten:!1,weight:1,logit:2},nd=new Bi,id=new _t,Fr=new I,cd=()=>Os([Qt.logit,1,.4,-.1]),o_=["\u91D1\u6BDB\u5BFB\u56DE\u72AC","\u62C9\u5E03\u62C9\u591A\u72AC","\u53EF\u5361\u72AC","\u5176\u4ED6\u793A\u4F8B\u7C7B\u522B"];function l_(i){return Array.isArray(i.material)?i.material:[i.material]}function Vc(){let i=yi.clientWidth<600;return new I(i?-24:-15,i?24:15,i?52:32)}function al(i,t,e=!1){e||nl?(sn.position.copy(i),ye.target.copy(t),mn=null,ye.update()):mn={from:sn.position.clone(),to:i,fromTarget:ye.target.clone(),target:t,t:0}}function Fc(){Nn=!1,At("#view-mode").textContent="\u5168\u5C40\u89C6\u89D2",al(Vc(),new I(0,-.35,0))}function Oc(){if(oe<0){En(1);return}Nn=!0,At("#view-mode").textContent="\u5C40\u90E8\u805A\u7126 \xB7 "+_i[oe];let i=Vs[oe].position.x;al(new I(i-5.6,3.6,7.8),new I(i,0,0))}function Or(){let i=yi.clientWidth,t=yi.clientHeight;!i||!t||(pn.setSize(i,t,!1),sn.aspect=i/t,sn.updateProjectionMatrix(),vi.setSize(i,t),Math.abs(i-ed)>140&&!Nn&&al(Vc(),new I(0,-.35,0),!0),ed=i)}function c_(){pn=new Is({canvas:wn,antialias:!0,powerPreference:"high-performance"}),pn.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),pn.setClearColor(594462),pn.outputColorSpace=Me,pn.toneMapping=fi,pn.toneMappingExposure=1.12,pn.shadowMap.enabled=!0,pn.shadowMap.type=bs,He=new qn,He.background=new Ct(594462),He.fog=new or(594462,.009),He.add(il),sn=new be(35,1,.1,200),ye=new Ds(sn,wn),ye.enableDamping=!0,ye.dampingFactor=.075,ye.enablePan=!1,ye.minDistance=5,ye.maxDistance=100,ye.minPolarAngle=.25,ye.maxPolarAngle=Math.PI*.52,ye.autoRotateSpeed=.35,ye.addEventListener("start",()=>{mn=null});let i=new Wo,t=new Ps(pn),e=t.fromScene(i,.08);He.environment=e.texture,He.userData.environment=e,i.dispose(),t.dispose(),He.add(new Fi(12112875,1253945,1.7));let n=new Yn(12901621,2.3);n.position.set(-8,15,8),n.castShadow=!0,n.shadow.mapSize.set(2048,1024),Object.assign(n.shadow.camera,{left:-26,right:26,top:14,bottom:-14,near:1,far:55}),n.shadow.normalBias=.025,He.add(n);let s=new Yn(7518908,1.7);s.position.set(8,5,-8),He.add(s);let r=new Yt(new je(150,150),new Xe({color:594462}));r.rotation.x=-Math.PI/2,r.position.y=-2.58,He.add(r);let a=new Yt(new je(52,12),new fr({opacity:.23,color:0,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=-2.56,a.receiveShadow=!0,He.add(a);let o=new vr(120,100,2638166,1518398);o.position.y=-2.55,o.material.transparent=!0,o.material.opacity=.28,He.add(o);let l=Rc(!1);Pr.forEach((u,d)=>{let f=Xu(d,u.type);f.position.x=l[d],il.add(f),Vs.push(f);let m=new Yt(new Fe(1.7,4.6,3.9),new Xe({visible:!1}));m.userData.index=d,f.add(m),od.push(m);let g=document.createElement("button");g.className="layer-label",g.textContent=_i[d],g.setAttribute("aria-label","\u9009\u62E9"+_i[d]),g.addEventListener("click",()=>En(d)),yi.appendChild(g),zc.push(g)}),ld=qu(il,Vs),vi=new Yo(pn),vi.addPass(new $o(He,sn));let c=new Fs(new _t(800,600),.3,.45,.94);vi.addPass(c),vi.addPass(new Zo),al(Vc(),new I(0,-.35,0),!0),Or(),Nc=new ResizeObserver(Or),Nc.observe(yi),window.addEventListener("resize",Or),wn.addEventListener("webglcontextlost",u=>{u.preventDefault(),At("#gl-error").hidden=!1,At("#gl-error").textContent="\u56FE\u5F62\u4E0A\u4E0B\u6587\u5DF2\u4E22\u5931\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u91CD\u65B0\u6784\u5EFA\u5C55\u54C1\u3002"}),At("#loader").hidden=!0}function h_(){return`<div class="panel-kicker">\u7ED3\u6784\u4E0E\u673A\u5236 / 2012</div><h2 class="panel-title">\u8FDB\u5165\u8BA1\u7B97\u7684\u5185\u90E8</h2><h3 class="panel-subtitle">\u516B\u4E2A\u53EF\u5B66\u4E60\u5C42\uFF0C\u4E00\u6761\u5C42\u6B21\u5316\u7684\u89C6\u89C9\u8DEF\u5F84\u3002</h3><p class="description">\u4ECE\u5C40\u90E8\u611F\u53D7\u91CE\u5230\u5168\u5C40\u52A0\u6743\u6C47\u805A\uFF0C\u89C2\u5BDF\u7F51\u7EDC\u5982\u4F55\u9010\u6B65\u6539\u53D8\u4FE1\u606F\u7684\u7EC4\u7EC7\u65B9\u5F0F\u3002\u9009\u62E9\u4EFB\u4E00\u5C42\uFF0C\u67E5\u770B\u5F20\u91CF\u3001\u8BA1\u7B97\u673A\u5236\u4E0E\u5C40\u90E8\u5B9E\u9A8C\u3002</p><div class="overview-types">${"<i></i>".repeat(13)}</div><div class="overview-grid"><div><strong>5 + 3</strong><span>\u5377\u79EF\u5C42 + \u5168\u8FDE\u63A5\u5C42</span></div><div><strong>1,000</strong><span>\u5206\u7C7B\u8F93\u51FA\u7EF4\u5EA6</span></div></div><p class="technical">\u591A\u901A\u9053\u7C92\u5B50\u675F\u6CBF\u8BA1\u7B97\u65B9\u5411\u4F20\u9012\uFF0C\u8FDB\u5165\u5404\u5C42\u540E\u89E6\u53D1\u5C40\u90E8\u54CD\u5E94\u3002\u53D1\u5149\u5F3A\u5EA6\u4E0E\u7C92\u5B50\u901F\u5EA6\u662F\u5C55\u9648\u7F16\u7801\uFF0C\u4E0D\u4EE3\u8868\u6FC0\u6D3B\u5E45\u5EA6\u6216\u771F\u5B9E\u8BA1\u7B97\u65F6\u95F4\u3002</p><button class="focus-inline" data-select="1">\u4ECE\u7B2C\u4E00\u5C42\u5377\u79EF\u5F00\u59CB \u2192</button><div class="experiment"><div class="experiment-header">\u53EF\u64CD\u4F5C\u7684\u5C40\u90E8\u5B9E\u9A8C<span>\u771F\u5B9E\u6570\u503C\u8BA1\u7B97</span></div><p>\u9009\u62E9\u4E00\u5C42\u540E\u53EF\u64CD\u4F5C\u901A\u9053\u5206\u79BB\u3001\u5377\u79EF\u5C0F\u7A97\u53E3\u3001\u6700\u5927\u6C60\u5316\u3001\u5F20\u91CF\u5C55\u5E73\u3001\u52A0\u6743\u6C47\u805A\u53CA\u6982\u7387\u5F52\u4E00\u5316\u3002</p></div>`}function u_(i){let t=Ir[i].experiment,e="";return t==="channels"?e=`<p>\u67E5\u770B\u540C\u4E00\u5F20\u56FE\u50CF\u4E2D\u7684\u989C\u8272\u901A\u9053\u3002\u53EA\u6539\u53D8\u663E\u793A\uFF0C\u4E0D\u6267\u884C\u7F51\u7EDC\u63A8\u7406\u3002</p><div class="row-buttons">${[["all","\u5408\u6210"],["red","\u7EA2\u901A\u9053"],["green","\u7EFF\u901A\u9053"],["blue","\u84DD\u901A\u9053"]].map(([n,s])=>`<button data-channel="${n}" class="${Qt.channel===n?"active":""}">${s}</button>`).join("")}</div><div class="experiment-output" id="experiment-output"></div>`:t==="convolution"?e=`<p>\u5728\u5408\u6210\u7684 5\xD75 \u8F93\u5165\u4E0A\u79FB\u52A8 3\xD73 \u7A97\u53E3\uFF0C\u8BA1\u7B97\u771F\u5B9E\u52A0\u6743\u548C\u3002\u5377\u79EF\u6838\u4E3A\u4EBA\u5DE5\u8BBE\u5B9A\uFF0C\u975E\u5B66\u4E60\u6743\u91CD\u3002</p><label>\u7B97\u5B50<select id="kernel"><option value="edge">\u7EB5\u5411\u8FB9\u7F18</option><option value="horizontal">\u6A2A\u5411\u8FB9\u7F18</option><option value="blur">\u5C40\u90E8\u5747\u503C</option></select></label><label>\u7A97\u53E3\u4F4D\u7F6E <span id="cell-read"></span></label><input id="cell" aria-label="\u7A97\u53E3\u4F4D\u7F6E" type="range" min="0" max="8" step="1" value="${Qt.cell}"><div id="sample-grid" class="sample-grid"></div><div class="experiment-output" id="experiment-output"></div>`:t==="pooling"?e=`<p>\u8FD9\u662F\u4E00\u4E2A 3\xD73 \u5C40\u90E8\u7A97\u53E3\u3002\u70B9\u51FB\u4EFB\u610F\u503C\uFF0C\u5BF9\u6BD4\u5B83\u4E0E\u6700\u5927\u6C60\u5316\u8F93\u51FA\u3002</p><div class="sample-grid">${[.12,.45,.23,.31,.92,.64,.08,.52,.37].map((n,s)=>`<button data-pool="${s}" aria-label="\u6570\u503C ${n}">${n.toFixed(2)}</button>`).join("")}</div><div class="experiment-output" id="experiment-output"></div>`:t==="flatten"?e=`<p>\u5C06\u6F14\u793A\u5F20\u91CF\u7684 32 \u4E2A\u91C7\u6837\u70B9\u91CD\u6392\u4E3A\u5411\u91CF\u3002\u5B83\u4EEC\u7684\u4F4D\u7F6E\u6539\u53D8\uFF0C\u5143\u7D20\u6570\u91CF\u548C\u53D6\u503C\u4E0D\u53D8\u3002</p><button class="experiment-action" id="flatten">${Qt.flatten?"\u6062\u590D\u5F20\u91CF\u6392\u5217":"\u6267\u884C\u5C55\u5E73"}</button><div class="experiment-output" id="experiment-output"></div>`:t==="weights"?e=`<p>\u4E09\u4E2A\u8F93\u5165\u4E3A [0.8, \u22120.4, 0.6]\uFF0C\u6743\u91CD\u4E3A [w, 0.5, \u22120.2]\uFF0C\u504F\u7F6E\u4E3A 0.1\u3002\u8C03\u6574\u7B2C\u4E00\u6761\u8FDE\u63A5\u7684\u6743\u91CD\u3002</p><label>\u8FDE\u63A5\u6743\u91CD <span id="weight-read"></span></label><input id="weight" aria-label="\u8FDE\u63A5\u6743\u91CD" type="range" min="-2" max="2" step="0.1" value="${Qt.weight}"><div class="experiment-output" id="experiment-output"></div>`:e=`<p>\u56DB\u4E2A\u793A\u4F8B\u5206\u6570\u4E3A [z, 1, 0.4, \u22120.1]\u3002\u8C03\u6574\u9996\u9879\u5206\u6570\uFF0C\u89C2\u5BDF\u6240\u6709\u6982\u7387\u4E00\u8D77\u53D8\u5316\u3002\u6B64\u5B9E\u9A8C\u53EA\u542B\u56DB\u4E2A\u793A\u4F8B\u7C7B\u522B\uFF0C\u4E0D\u7B49\u4E8E\u539F\u7F51\u7EDC\u4E00\u5343\u7C7B\u5206\u5E03\u3002</p><label>\u9996\u9879\u7C7B\u522B\u5206\u6570 <span id="logit-read"></span></label><input id="logit" aria-label="\u9996\u9879\u7C7B\u522B\u5206\u6570" type="range" min="-2" max="5" step="0.1" value="${Qt.logit}"><div id="probabilities" class="mini-probs"></div><div class="experiment-output" id="experiment-output"></div>`,`<section class="experiment"><div class="experiment-header">\u5C40\u90E8\u8BA1\u7B97\u5B9E\u9A8C<span>\u53EF\u64CD\u4F5C / \u771F\u8BA1\u7B97</span></div>${e}</section>`}function Hc(){let i=At("#panel-body");if(At(".inspector").scrollTop=0,At("#panel-index").textContent=oe<0?"\u603B\u89C8 / 13":`${String(oe+1).padStart(2,"0")} / 13`,oe<0)i.innerHTML=h_();else{let t=Ir[oe],e=Pr[oe];i.innerHTML=`<div class="panel-kicker">${Vu[e.type]} / ${e.id.toUpperCase()}</div><h2 class="panel-title">${_i[oe]}</h2><h3 class="panel-subtitle">${t.title}</h3><p class="description">${t.explain}</p><div class="tensor"><div><small>\u8F93\u5165\u5F20\u91CF</small><b>${t.input}</b></div><span>\u2192</span><div><small>\u8F93\u51FA\u5F20\u91CF</small><b>${t.output}</b></div></div><div class="formula">${t.formula}</div><p class="technical">${t.note}</p><button class="focus-inline" id="focus-inline">\u805A\u7126\u6B64\u5C42\u7684\u4E09\u7EF4\u8BA1\u7B97\u7ED3\u6784 \u2197</button>${oe===12&&$t.complete?`<div class="result-box"><small>\u9884\u8BBE\u793A\u4F8B \xB7 \u65E0\u6A21\u578B\u63A8\u7406</small><b>\u91D1\u6BDB\u5BFB\u56DE\u72AC</b><p>\u56DB\u7C7B\u522B\u5B9E\u9A8C\u5F52\u4E00\u5316\u503C\uFF1A${(cd()[0]*100).toFixed(1)}%</p></div>`:""}${u_(oe)}`,ks()}document.querySelectorAll("#timeline button").forEach((t,e)=>{t.classList.toggle("active",e===oe),t.setAttribute("aria-pressed",e===oe)}),zc.forEach((t,e)=>t.classList.toggle("active",e===oe))}function ks(){if(oe<0)return;let i=Ir[oe].experiment,t=At("#experiment-output");if(t)if(i==="channels")t.textContent="\u5F53\u524D\u7F16\u7801\uFF1A"+{all:"\u4E09\u901A\u9053\u5408\u6210",red:"\u7EA2\u8272\u901A\u9053",green:"\u7EFF\u8272\u901A\u9053",blue:"\u84DD\u8272\u901A\u9053"}[Qt.channel];else if(i==="convolution"){let e=Math.floor(Qt.cell/3),n=Qt.cell%3,s=[];for(let o=0;o<3;o++)for(let l=0;l<3;l++)s.push(Math.round((Math.sin((l+n)*.7)+Math.cos((o+e)*.9)+2)*2)/10);let r={edge:[-1,0,1,-2,0,2,-1,0,1],horizontal:[-1,-2,-1,0,0,0,1,2,1],blur:Array(9).fill(1/9)},a=r[Qt.kernel];At("#sample-grid").innerHTML=s.map((o,l)=>`<span title="\u6743\u91CD ${a[l].toFixed(2)}">${o.toFixed(1)}<small style="display:block;font-size:8px;color:#6e9da9">\xD7 ${a[l].toFixed(2)}</small></span>`).join(""),At("#cell-read").textContent=`\u884C ${e+1} / \u5217 ${n+1}`,At("#kernel").value=Qt.kernel,t.textContent=`\u52A0\u6743\u548C\uFF1A${jn(s,a).toFixed(3)} \u2192 \u6574\u6D41\u540E\uFF1A${Math.max(0,jn(s,a)).toFixed(3)}`}else if(i==="pooling"){let e=[.12,.45,.23,.31,.92,.64,.08,.52,.37],n=Hu(e);t.textContent=Qt.pooling===null?"\u6700\u5927\u6C60\u5316\u8F93\u51FA = 0.92":Qt.pooling===4?"\u6240\u9009\u503C 0.92 = \u5C40\u90E8\u6700\u5927\u503C \u2192 \u8F93\u51FA 0.92":`\u6240\u9009\u503C ${e[Qt.pooling].toFixed(2)} \u2260 \u5C40\u90E8\u6700\u5927\u503C \u2192 \u8F93\u51FA\u4ECD\u4E3A 0.92`,document.querySelectorAll("[data-pool]").forEach((s,r)=>s.classList.toggle("winner",r===4&&Qt.pooling!==null))}else if(i==="flatten"){let e=Gu(Array.from({length:4},(n,s)=>Array.from({length:8},(r,a)=>s*8+a)));t.textContent=`${Qt.flatten?"\u4E00\u7EF4\u5411\u91CF":"4 \xD7 8 \u91C7\u6837\u77E9\u9635"} \xB7 ${e.length} \u4E2A\u5143\u7D20 \xB7 \u6570\u503C\u603B\u548C ${e.reduce((n,s)=>n+s,0)}`}else if(i==="weights"){let e=jn([.8,-.4,.6],[Qt.weight,.5,-.2])+.1;At("#weight-read").textContent=Qt.weight.toFixed(1),t.textContent=`\u52A0\u6743\u548C + \u504F\u7F6E = ${e.toFixed(3)}\uFF1B\u6574\u6D41\u8F93\u51FA = ${Math.max(0,e).toFixed(3)}`}else{let e=cd();At("#logit-read").textContent=Qt.logit.toFixed(1),At("#probabilities").innerHTML=e.map((n,s)=>`<div class="prob-row"><span>${o_[s]}</span><i><b style="width:${n*100}%"></b></i><span>${(n*100).toFixed(1)}%</span></div>`).join(""),t.textContent="\u6982\u7387\u603B\u548C = "+e.reduce((n,s)=>n+s,0).toFixed(6)}}function En(i,t=!1){!Number.isInteger(i)||i<0||i>12||(oe=i,At("#scene-caption").textContent=_i[i]+" \xB7 "+Ir[i].mechanism,Hc(),Nn&&Oc())}function $i(){let i=Ko($t.time);At("#pause").disabled=!$t.running,At("#pause").textContent=$t.paused?"\u7EE7\u7EED":"\u6682\u505C",At("#run").textContent=$t.running?"\u21BB \u91CD\u65B0\u8FD0\u884C":"\u25B6 \u8FD0\u884C\u6570\u636E\u6D41",At("#progress").style.width=i.progress*100+"%",At("#progress-text").textContent=`${String($t.time>0?i.index+1:0).padStart(2,"0")} / 13`,At("#status").textContent=$t.complete?"\u4F20\u64AD\u7ED3\u675F \xB7 \u793A\u610F\u6027\u6F14\u793A\uFF0C\u672A\u6267\u884C\u771F\u5B9E\u63A8\u7406":$t.running?($t.paused?"\u5DF2\u6682\u505C \xB7 ":"\u524D\u5411\u4F20\u64AD \xB7 ")+_i[i.index]:"\u5C31\u7EEA \xB7 \u7B49\u5F85\u4E00\u6B21\u524D\u5411\u4F20\u64AD",document.querySelectorAll("#timeline button").forEach((t,e)=>t.classList.toggle("visited",e<i.index&&$t.time>0))}function sd(){$t=xi($t,"run"),Qn=-1,$i()}function rd(){$t=xi($t,"reset"),Yi=!1,oe=-1,Qn=-1,Nn=!1,ye.autoRotate=!1,Qt.flatten=!1,At("#speed").value="1",At("#orbit").setAttribute("aria-pressed","false"),At("#expand").setAttribute("aria-pressed","false"),At("#expand").textContent="\u5C55\u5F00\u7ED3\u6784",Hc(),Fc(),$i(),At("#scene-caption").textContent="\u9009\u62E9\u4E00\u5C42\uFF0C\u8FDB\u5165\u8BA1\u7B97\u5185\u90E8\u3002"}function ad(i){let t=wn.getBoundingClientRect();id.set((i.clientX-t.left)/t.width*2-1,-(i.clientY-t.top)/t.height*2+1),nd.setFromCamera(id,sn);let e=nd.intersectObjects(od,!1);return e.length?e[0].object.userData.index:-1}function d_(){At("#timeline").innerHTML=Pr.map((t,e)=>`<button data-layer="${e}" data-type="${t.type}" aria-pressed="false">${_i[e]}</button>`).join(""),At("#timeline").addEventListener("click",t=>{let e=t.target.closest("[data-layer]");e&&En(+e.dataset.layer)}),At("#run").onclick=sd,At("#pause").onclick=()=>{$t=xi($t,"pause"),$i()},At("#step").onclick=()=>{$t=xi($t,"step"),Qn=Ko($t.time).index,En(Qn),$i()},At("#speed").onchange=t=>{$t=xi($t,"speed",+t.target.value)},At("#expand").onclick=()=>{Yi=!Yi,At("#expand").setAttribute("aria-pressed",Yi),At("#expand").textContent=Yi?"\u6536\u62E2\u7ED3\u6784":"\u5C55\u5F00\u7ED3\u6784"},At("#reset").onclick=rd,At("#focus").onclick=Oc,At("#home").onclick=Fc,At("#orbit").onclick=()=>{ye.autoRotate=!ye.autoRotate,At("#orbit").setAttribute("aria-pressed",ye.autoRotate),mn=null},At("#panel-body").addEventListener("click",t=>{let e=t.target.closest("[data-select]");e&&En(+e.dataset.select),t.target.closest("#focus-inline")&&Oc();let n=t.target.closest("[data-channel]");n&&(Qt.channel=n.dataset.channel,document.querySelectorAll("[data-channel]").forEach(r=>r.classList.toggle("active",r===n)),ks());let s=t.target.closest("[data-pool]");s&&(Qt.pooling=+s.dataset.pool,ks()),t.target.closest("#flatten")&&(Qt.flatten=!Qt.flatten,At("#flatten").textContent=Qt.flatten?"\u6062\u590D\u5F20\u91CF\u6392\u5217":"\u6267\u884C\u5C55\u5E73",ks())}),At("#panel-body").addEventListener("input",t=>{let e=t.target.id;e==="cell"&&(Qt.cell=+t.target.value),e==="weight"&&(Qt.weight=+t.target.value),e==="logit"&&(Qt.logit=+t.target.value),["cell","weight","logit"].includes(e)&&ks()}),At("#panel-body").addEventListener("change",t=>{t.target.id==="kernel"&&(Qt.kernel=t.target.value,ks())});let i;wn.addEventListener("pointerdown",t=>i=[t.clientX,t.clientY]),wn.addEventListener("pointercancel",()=>i=null),wn.addEventListener("pointerup",t=>{if(i&&Math.hypot(t.clientX-i[0],t.clientY-i[1])<5){let e=ad(t);e>=0&&En(e)}i=null}),wn.addEventListener("pointermove",t=>{rl=ad(t),wn.style.cursor=rl>=0?"pointer":"grab"}),wn.addEventListener("pointerleave",()=>rl=-1),wn.addEventListener("dblclick",Fc),At("#notes-open").onclick=At("#notes-bottom").onclick=()=>At("#notes").showModal(),document.querySelectorAll("[data-close]").forEach(t=>t.onclick=()=>t.closest("dialog").close()),document.querySelectorAll("dialog").forEach(t=>t.addEventListener("click",e=>{if(e.target!==t)return;let n=t.getBoundingClientRect();(e.clientX<n.left||e.clientX>n.right||e.clientY<n.top||e.clientY>n.bottom)&&t.close()})),document.addEventListener("keydown",t=>{!Bc?.isModel()||At("dialog[open]")||t.target.closest("button,input,select,a")||(t.code==="Space"&&(t.preventDefault(),$t.running?($t=xi($t,"pause"),$i()):sd()),(t.key==="ArrowRight"||t.key==="ArrowLeft")&&(t.preventDefault(),En(Le.clamp(oe+(t.key==="ArrowRight"?1:-1),0,12))),t.key.toLowerCase()==="r"&&rd())}),Hc(),$i()}function hd(i){kc=requestAnimationFrame(hd);let t=Math.max(0,(i-td)/1e3);if(td=i,document.hidden||!Bc?.isModel()){sl=!0;return}let e=sl?0:Math.min(t,.12);sl=!1,$t=xi($t,"tick",e);let n=Ko($t.time);$t.running&&Qn!==n.index&&(Qn=n.index,En(Qn,!0)),$t.complete&&Qn!==13&&(Qn=13,En(12,!0)),$i();let s=Rc(Yi),r=i/1e3;if(Vs.forEach((a,o)=>{a.visible=!Nn||o===oe,a.position.x=Le.damp(a.position.x,s[o],nl?35:4,e);let l=$t.running?n.index===o:oe===o;a.userData.energy=Le.damp(a.userData.energy||0,l?1:oe<0?.34:o===rl?.5:.12,8,e),a.userData.tick($t.running?$t.time:r,a.userData.energy,l?n.local:0,nl,Qt)}),mn){mn.t+=e;let a=Math.min(1,mn.t/.85),o=a*a*(3-2*a);sn.position.lerpVectors(mn.from,mn.to,o),ye.target.lerpVectors(mn.fromTarget,mn.target,o),a===1&&(mn=null)}ye.update(),sn.zoom=Le.damp(sn.zoom,Nn?1:Yi?.76:1,4,e),sn.updateProjectionMatrix();for(let a=0;a<Vs.length;a++){Fr.set(Vs[a].position.x,2.55,0).project(sn);let o=zc[a];o.style.left=(Fr.x+1)*yi.clientWidth/2+"px",o.style.top=(-Fr.y+1)*yi.clientHeight/2+"px",o.style.opacity=oe<0||oe===a?"1":".52",o.hidden=Nn&&a!==oe||Math.abs(Fr.x)>.94||Math.abs(Fr.y)>.85||yi.clientWidth<600&&a!==oe&&a!==0&&a!==6&&a!==12}ld.update($t.time,n,$t.running&&!Nn,$t.paused,nl),il.children.filter(a=>a.isLineSegments).forEach(a=>a.visible=!Nn),vi.render()}function f_(){cancelAnimationFrame(kc),Nc?.disconnect(),window.removeEventListener("resize",Or),ye?.dispose();let i=new Set,t=new Set,e=new Set;He?.traverse(n=>{if(n.geometry&&i.add(n.geometry),n.material)for(let s of l_(n)){t.add(s);for(let r of Object.values(s))r?.isTexture&&e.add(r)}}),i.forEach(n=>n.dispose()),t.forEach(n=>n.dispose()),e.forEach(n=>n.dispose()),He?.userData.environment?.dispose(),vi?.passes.forEach(n=>n.dispose?.()),vi?.dispose(),pn?.dispose()}Bc=Qu({onModel(i){if(i&&!zs)try{c_(),d_(),zs=!0,kc=requestAnimationFrame(hd),document.body.dataset.ready="true"}catch(t){console.error(t),At("#loader").hidden=!0,At("#gl-error").hidden=!1}else i&&zs&&(sl=!0,requestAnimationFrame(Or))},inspect(i){zs?En(i):requestAnimationFrame(()=>{zs&&En(i)})}});At("#notes-open").onclick=At("#notes-bottom").onclick=()=>At("#notes").showModal();document.querySelectorAll("[data-close]").forEach(i=>i.onclick=()=>i.closest("dialog").close());window.addEventListener("pagehide",i=>{!i.persisted&&zs&&f_()});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
