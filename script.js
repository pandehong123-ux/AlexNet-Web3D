(()=>{var mi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uh=0,Kl=1,Nh=2;var Ql=1,Es=2,Nn=3,$n=0,De=1,We=2,wn=0,Di=1,Kn=2,tc=3,ec=4,Fh=5,ui=100,Oh=101,Bh=102,zh=103,kh=104,Vh=200,Hh=201,Gh=202,Wh=203,va=204,ya=205,Xh=206,qh=207,$h=208,Yh=209,Zh=210,jh=211,Jh=212,Kh=213,Qh=214,Xa=0,qa=1,$a=2,Ui=3,Ya=4,Za=5,ja=6,Ja=7,Ka=0,tu=1,eu=2,Qn=0,Qa=1,to=2,eo=3,_i=4,no=5,io=6,so=7;var nc=300,Gi=301,Wi=302,ro=303,ao=304,Er=306,Ma=1e3,hi=1001,ba=1002,$e=1003,nu=1004;var Ar=1005;var Sn=1006,oo=1007;var xi=1008;var En=1009,ic=1010,sc=1011,As=1012,lo=1013,vi=1014,An=1015,pn=1016,co=1017,ho=1018,Cs=1020,rc=35902,ac=35899,oc=1021,lc=1022,mn=1023,gs=1026,Rs=1027,uo=1028,fo=1029,cc=1030,po=1031;var mo=1033,Cr=33776,Rr=33777,Pr=33778,Ir=33779,go=35840,_o=35841,xo=35842,vo=35843,yo=36196,Mo=37492,bo=37496,So=37808,To=37809,wo=37810,Eo=37811,Ao=37812,Co=37813,Ro=37814,Po=37815,Io=37816,Lo=37817,Do=37818,Uo=37819,No=37820,Fo=37821,Oo=36492,Bo=36494,zo=36495,ko=36283,Vo=36284,Ho=36285,Go=36286;var nr=2300,Sa=2301,xa=2302,Hl=2400,Gl=2401,Wl=2402;var iu=3200,su=3201;var Wo=0,ru=1,ti="",Se="srgb",Ni="srgb-linear",ir="linear",Kt="srgb";var Li=7680;var Xl=519,au=512,ou=513,lu=514,hc=515,cu=516,hu=517,uu=518,du=519,ql=35044;var uc="300 es",bn=2e3,sr=2001;var In=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ih=1234567,ps=Math.PI/180,_s=180/Math.PI;function Ps(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function Wt(i,t,e){return Math.max(t,Math.min(e,i))}function dc(i,t){return(i%t+t)%t}function Ad(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Cd(i,t,e){return i!==t?(e-i)/(t-i):0}function er(i,t,e){return(1-e)*i+e*t}function Rd(i,t,e,n){return er(i,t,1-Math.exp(-e*n))}function Pd(i,t=1){return t-Math.abs(dc(i,t*2)-t)}function Id(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ld(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Dd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ud(i,t){return i+Math.random()*(t-i)}function Nd(i){return i*(.5-Math.random())}function Fd(i){i!==void 0&&(ih=i);let t=ih+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Od(i){return i*ps}function Bd(i){return i*_s}function zd(i){return(i&i-1)===0&&i!==0}function kd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Vd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hd(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),d=r((t-n)/2),f=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*d,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ue={DEG2RAD:ps,RAD2DEG:_s,generateUUID:Ps,clamp:Wt,euclideanModulo:dc,mapLinear:Ad,inverseLerp:Cd,lerp:er,damp:Rd,pingpong:Pd,smoothstep:Id,smootherstep:Ld,randInt:Dd,randFloat:Ud,randFloatSpread:Nd,seededRandom:Fd,degToRad:Od,radToDeg:Bd,isPowerOfTwo:zd,ceilPowerOfTwo:kd,floorPowerOfTwo:Vd,setQuaternionFromProperEuler:Hd,normalize:He,denormalize:fs},vt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},un=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==f||c!==p||u!==g){let m=1-o,h=l*f+c*p+u*g+d*_,b=h>=0?1:-1,A=1-h*h;if(A>Number.EPSILON){let x=Math.sqrt(A),M=Math.atan2(x,h*b);m=Math.sin(m*M)/x,o=Math.sin(o*M)/x}let y=o*b;if(l=l*m+f*y,c=c*m+p*y,u=u*m+g*y,d=d*m+_*y,m===1-o){let x=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=x,c*=x,u*=x,d*=x}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+u*d+l*p-c*f,t[e+1]=l*g+u*f+c*d-o*p,t[e+2]=c*g+u*p+o*f-l*d,t[e+3]=u*g-o*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"YZX":this._x=f*u*d+c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d-f*p*g;break;case"XZY":this._x=f*u*d-c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=n+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _l.copy(this).projectOnVector(t),this.sub(_l)}reflect(t){return this.sub(_l.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_l=new I,sh=new un,kt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],h=s[6],b=s[1],A=s[4],y=s[7],x=s[2],M=s[5],E=s[8];return r[0]=a*_+o*b+l*x,r[3]=a*m+o*A+l*M,r[6]=a*h+o*y+l*E,r[1]=c*_+u*b+d*x,r[4]=c*m+u*A+d*M,r[7]=c*h+u*y+d*E,r[2]=f*_+p*b+g*x,r[5]=f*m+p*A+g*M,r[8]=f*h+p*y+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,f=o*l-u*r,p=c*r-a*l,g=e*d+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(s*c-u*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(xl.makeScale(t,e)),this}rotate(t){return this.premultiply(xl.makeRotation(-t)),this}translate(t,e){return this.premultiply(xl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},xl=new kt;function fc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fu(){let i=rr("canvas");return i.style.display="block",i}var rh={};function xs(i){i in rh||(rh[i]=!0,console.warn(i))}function pu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var ah=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),oh=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gd(){let i={enabled:!0,workingColorSpace:Ni,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Kt&&(s.r=qn(s.r),s.g=qn(s.g),s.b=qn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Kt&&(s.r=ms(s.r),s.g=ms(s.g),s.b=ms(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ti?ir:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return xs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return xs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ni]:{primaries:t,whitePoint:n,transfer:ir,toXYZ:ah,fromXYZ:oh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Se},outputColorSpaceConfig:{drawingBufferColorSpace:Se}},[Se]:{primaries:t,whitePoint:n,transfer:Kt,toXYZ:ah,fromXYZ:oh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Se}}}),i}var Yt=Gd();function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ts,Ta=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ts===void 0&&(ts=rr("canvas")),ts.width=t.width,ts.height=t.height;let s=ts.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ts}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=rr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Wd=0,vs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=Ps(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(vl(s[a].image)):r.push(vl(s[a]))}else r=vl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function vl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ta.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Xd=0,yl=new I,Ge=class i extends In{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=hi,s=hi,r=Sn,a=xi,o=mn,l=En,c=i.DEFAULT_ANISOTROPY,u=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Ps(),this.name="",this.source=new vs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(yl).x}get height(){return this.source.getSize(yl).y}get depth(){return this.source.getSize(yl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ma:t.x=t.x-Math.floor(t.x);break;case hi:t.x=t.x<0?0:1;break;case ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ma:t.y=t.y-Math.floor(t.y);break;case hi:t.y=t.y<0?0:1;break;case ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=nc;Ge.DEFAULT_ANISOTROPY=1;var ie=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,y=(p+1)/2,x=(h+1)/2,M=(u+f)/4,E=(d+_)/4,C=(g+m)/4;return A>y&&A>x?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=M/n,r=E/n):y>x?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=M/s,r=C/s):x<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(x),n=E/r,s=C/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-_)/b,this.z=(f-u)/b,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wa=class extends In{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new Ge(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new vs(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Be=class extends wa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ar=class extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ea=class extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ln=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qr.copy(n.boundingBox)),qr.applyMatrix4(t.matrixWorld),this.union(qr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($s),$r.subVectors(this.max,$s),es.subVectors(t.a,$s),ns.subVectors(t.b,$s),is.subVectors(t.c,$s),si.subVectors(ns,es),ri.subVectors(is,ns),Ci.subVectors(es,is);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Ci.z,Ci.y,si.z,0,-si.x,ri.z,0,-ri.x,Ci.z,0,-Ci.x,-si.y,si.x,0,-ri.y,ri.x,0,-Ci.y,Ci.x,0];return!Ml(e,es,ns,is,$r)||(e=[1,0,0,0,1,0,0,0,1],!Ml(e,es,ns,is,$r))?!1:(Yr.crossVectors(si,ri),e=[Yr.x,Yr.y,Yr.z],Ml(e,es,ns,is,$r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},kn=[new I,new I,new I,new I,new I,new I,new I,new I],vn=new I,qr=new Ln,es=new I,ns=new I,is=new I,si=new I,ri=new I,Ci=new I,$s=new I,$r=new I,Yr=new I,Ri=new I;function Ml(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ri.fromArray(i,r);let o=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),l=t.dot(Ri),c=e.dot(Ri),u=n.dot(Ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var qd=new Ln,Ys=new I,bl=new I,Dn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):qd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ys.subVectors(t,this.center);let e=Ys.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ys,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ys.copy(t.center).add(bl)),this.expandByPoint(Ys.copy(t.center).sub(bl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Vn=new I,Sl=new I,Zr=new I,ai=new I,Tl=new I,jr=new I,wl=new I,Yn=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Sl.copy(t).add(e).multiplyScalar(.5),Zr.copy(e).sub(t).normalize(),ai.copy(this.origin).sub(Sl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Zr),o=ai.dot(this.direction),l=-ai.dot(Zr),c=ai.lengthSq(),u=Math.abs(1-a*a),d,f,p,g;if(u>0)if(d=a*l-o,f=a*o-l,g=r*u,d>=0)if(f>=-g)if(f<=g){let _=1/u;d*=_,f*=_,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Sl).addScaledVector(Zr,f),p}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);let n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,s,r){Tl.subVectors(e,t),jr.subVectors(n,t),wl.crossVectors(Tl,jr);let a=this.direction.dot(wl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ai.subVectors(this.origin,t);let l=o*this.direction.dot(jr.crossVectors(ai,jr));if(l<0)return null;let c=o*this.direction.dot(Tl.cross(ai));if(c<0||l+c>a)return null;let u=-o*ai.dot(wl);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ee=class i{constructor(t,e,n,s,r,a,o,l,c,u,d,f,p,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,d,f,p,g,_,m)}set(t,e,n,s,r,a,o,l,c,u,d,f,p,g,_,m){let h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ss.setFromMatrixColumn(t,0).length(),r=1/ss.setFromMatrixColumn(t,1).length(),a=1/ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=a*u,p=a*d,g=o*u,_=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*u,p=l*d,g=c*u,_=c*d;e[0]=f+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*u,p=l*d,g=c*u,_=c*d;e[0]=f-_*o,e[4]=-a*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*u,p=a*d,g=o*u,_=o*d;e[0]=l*u,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-f*d,e[8]=g*d+p,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*d+g,e[10]=f-_*d}else if(t.order==="XZY"){let f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+_,e[5]=a*u,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*u,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($d,t,Yd)}lookAt(t,e,n){let s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),oi.crossVectors(n,Ke),oi.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),oi.crossVectors(n,Ke)),oi.normalize(),Jr.crossVectors(Ke,oi),s[0]=oi.x,s[4]=Jr.x,s[8]=Ke.x,s[1]=oi.y,s[5]=Jr.y,s[9]=Ke.y,s[2]=oi.z,s[6]=Jr.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],h=n[14],b=n[3],A=n[7],y=n[11],x=n[15],M=s[0],E=s[4],C=s[8],S=s[12],T=s[1],L=s[5],U=s[9],X=s[13],Y=s[2],K=s[6],j=s[10],lt=s[14],q=s[3],ut=s[7],gt=s[11],Mt=s[15];return r[0]=a*M+o*T+l*Y+c*q,r[4]=a*E+o*L+l*K+c*ut,r[8]=a*C+o*U+l*j+c*gt,r[12]=a*S+o*X+l*lt+c*Mt,r[1]=u*M+d*T+f*Y+p*q,r[5]=u*E+d*L+f*K+p*ut,r[9]=u*C+d*U+f*j+p*gt,r[13]=u*S+d*X+f*lt+p*Mt,r[2]=g*M+_*T+m*Y+h*q,r[6]=g*E+_*L+m*K+h*ut,r[10]=g*C+_*U+m*j+h*gt,r[14]=g*S+_*X+m*lt+h*Mt,r[3]=b*M+A*T+y*Y+x*q,r[7]=b*E+A*L+y*K+x*ut,r[11]=b*C+A*U+y*j+x*gt,r[15]=b*S+A*X+y*lt+x*Mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],h=t[15];return g*(+r*l*d-s*c*d-r*o*f+n*c*f+s*o*p-n*l*p)+_*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*u-r*l*u)+m*(+e*c*d-e*o*p-r*a*d+n*a*p+r*o*u-n*c*u)+h*(-s*o*u-e*l*d+e*o*f+s*a*d-n*a*f+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],h=t[15],b=d*m*c-_*f*c+_*l*p-o*m*p-d*l*h+o*f*h,A=g*f*c-u*m*c-g*l*p+a*m*p+u*l*h-a*f*h,y=u*_*c-g*d*c+g*o*p-a*_*p-u*o*h+a*d*h,x=g*d*l-u*_*l-g*o*f+a*_*f+u*o*m-a*d*m,M=e*b+n*A+s*y+r*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/M;return t[0]=b*E,t[1]=(_*f*r-d*m*r-_*s*p+n*m*p+d*s*h-n*f*h)*E,t[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*h+n*l*h)*E,t[3]=(d*l*r-o*f*r-d*s*c+n*f*c+o*s*p-n*l*p)*E,t[4]=A*E,t[5]=(u*m*r-g*f*r+g*s*p-e*m*p-u*s*h+e*f*h)*E,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*h-e*l*h)*E,t[7]=(a*f*r-u*l*r+u*s*c-e*f*c-a*s*p+e*l*p)*E,t[8]=y*E,t[9]=(g*d*r-u*_*r-g*n*p+e*_*p+u*n*h-e*d*h)*E,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*h+e*o*h)*E,t[11]=(u*o*r-a*d*r-u*n*c+e*d*c+a*n*p-e*o*p)*E,t[12]=x*E,t[13]=(u*_*s-g*d*s+g*n*f-e*_*f-u*n*m+e*d*m)*E,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*m-e*o*m)*E,t[15]=(a*d*s-u*o*s+u*n*l-e*d*l-a*n*f+e*o*f)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,f=r*c,p=r*u,g=r*d,_=a*u,m=a*d,h=o*d,b=l*c,A=l*u,y=l*d,x=n.x,M=n.y,E=n.z;return s[0]=(1-(_+h))*x,s[1]=(p+y)*x,s[2]=(g-A)*x,s[3]=0,s[4]=(p-y)*M,s[5]=(1-(f+h))*M,s[6]=(m+b)*M,s[7]=0,s[8]=(g+A)*E,s[9]=(m-b)*E,s[10]=(1-(f+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ss.set(s[0],s[1],s[2]).length(),a=ss.set(s[4],s[5],s[6]).length(),o=ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],yn.copy(this);let c=1/r,u=1/a,d=1/o;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=d,yn.elements[9]*=d,yn.elements[10]*=d,e.setFromRotationMatrix(yn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=bn,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===bn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===sr)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=bn,l=!1){let c=this.elements,u=2/(e-t),d=2/(n-s),f=-(e+t)/(e-t),p=-(n+s)/(n-s),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===bn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===sr)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ss=new I,yn=new ee,$d=new I(0,0,0),Yd=new I(1,1,1),oi=new I,Jr=new I,Ke=new I,lh=new ee,ch=new un,dn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ch.setFromEuler(this),this.setFromQuaternion(ch,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};dn.DEFAULT_ORDER="XYZ";var ys=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Zd=0,hh=new I,rs=new un,Hn=new ee,Kr=new I,Zs=new I,jd=new I,Jd=new un,uh=new I(1,0,0),dh=new I(0,1,0),fh=new I(0,0,1),ph={type:"added"},Kd={type:"removed"},as={type:"childadded",child:null},El={type:"childremoved",child:null},ye=class i extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new dn,n=new un,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new kt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ys,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.multiply(rs),this}rotateOnWorldAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.premultiply(rs),this}rotateX(t){return this.rotateOnAxis(uh,t)}rotateY(t){return this.rotateOnAxis(dh,t)}rotateZ(t){return this.rotateOnAxis(fh,t)}translateOnAxis(t,e){return hh.copy(t).applyQuaternion(this.quaternion),this.position.add(hh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uh,t)}translateY(t){return this.translateOnAxis(dh,t)}translateZ(t){return this.translateOnAxis(fh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Kr.copy(t):Kr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Zs,Kr,this.up):Hn.lookAt(Kr,Zs,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(Hn),this.quaternion.premultiply(rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ph),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kd),El.child=t,this.dispatchEvent(El),El.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ph),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,t,jd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,Jd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ye.DEFAULT_UP=new I(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mn=new I,Gn=new I,Al=new I,Wn=new I,os=new I,ls=new I,mh=new I,Cl=new I,Rl=new I,Pl=new I,Il=new ie,Ll=new ie,Dl=new ie,Xn=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Mn.subVectors(t,e),s.cross(Mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Mn.subVectors(s,e),Gn.subVectors(n,e),Al.subVectors(t,e);let a=Mn.dot(Mn),o=Mn.dot(Gn),l=Mn.dot(Al),c=Gn.dot(Gn),u=Gn.dot(Al),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wn.x),l.addScaledVector(a,Wn.y),l.addScaledVector(o,Wn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Il.setScalar(0),Ll.setScalar(0),Dl.setScalar(0),Il.fromBufferAttribute(t,e),Ll.fromBufferAttribute(t,n),Dl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Il,r.x),a.addScaledVector(Ll,r.y),a.addScaledVector(Dl,r.z),a}static isFrontFacing(t,e,n,s){return Mn.subVectors(n,e),Gn.subVectors(t,e),Mn.cross(Gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),Mn.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;os.subVectors(s,n),ls.subVectors(r,n),Cl.subVectors(t,n);let l=os.dot(Cl),c=ls.dot(Cl);if(l<=0&&c<=0)return e.copy(n);Rl.subVectors(t,s);let u=os.dot(Rl),d=ls.dot(Rl);if(u>=0&&d<=u)return e.copy(s);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(os,a);Pl.subVectors(t,r);let p=os.dot(Pl),g=ls.dot(Pl);if(g>=0&&p<=g)return e.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ls,o);let m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return mh.subVectors(r,s),o=(d-u)/(d-u+(p-g)),e.copy(s).addScaledVector(mh,o);let h=1/(m+_+f);return a=_*h,o=f*h,e.copy(n).addScaledVector(os,a).addScaledVector(ls,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function Ul(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Pt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Yt.workingColorSpace){if(t=dc(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ul(a,r,t+1/3),this.g=Ul(a,r,t),this.b=Ul(a,r,t-1/3)}return Yt.colorSpaceToWorking(this,s),this}setStyle(t,e=Se){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Se){let n=mu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Se){return Yt.workingToColorSpace(Oe.copy(this),t),Math.round(Wt(Oe.r*255,0,255))*65536+Math.round(Wt(Oe.g*255,0,255))*256+Math.round(Wt(Oe.b*255,0,255))}getHexString(t=Se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(Oe.copy(this),e);let n=Oe.r,s=Oe.g,r=Oe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=Se){Yt.workingToColorSpace(Oe.copy(this),t);let e=Oe.r,n=Oe.g,s=Oe.b;return t!==Se?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(li),this.setHSL(li.h+t,li.s+e,li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(li),t.getHSL(Qr);let n=er(li.h,Qr.h,e),s=er(li.s,Qr.s,e),r=er(li.l,Qr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Oe=new Pt;Pt.NAMES=mu;var Qd=0,fn=class extends In{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Ps(),this.name="",this.type="Material",this.blending=Di,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=va,this.blendDst=ya,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==va&&(n.blendSrc=this.blendSrc),this.blendDst!==ya&&(n.blendDst=this.blendDst),this.blendEquation!==ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ze=class extends fn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ve=new I,ta=new vt,tf=0,we=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ql,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ta.fromBufferAttribute(this,e),ta.applyMatrix3(t),this.setXY(e,ta.x,ta.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fs(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fs(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fs(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ql&&(t.usage=this.usage),t}};var or=class extends we{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var lr=class extends we{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var se=class extends we{constructor(t,e,n){super(new Float32Array(t),e,n)}},ef=0,cn=new ee,Nl=new ye,cs=new I,Qe=new Ln,js=new Ln,Pe=new I,pe=class i extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fc(t)?lr:or)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return Nl.lookAt(t),Nl.updateMatrix(),this.applyMatrix4(Nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new se(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];js.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(Qe.min,js.min),Qe.expandByPoint(Pe),Pe.addVectors(Qe.max,js.max),Qe.expandByPoint(Pe)):(Qe.expandByPoint(js.min),Qe.expandByPoint(js.max))}Qe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Pe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Pe.fromBufferAttribute(o,c),l&&(cs.fromBufferAttribute(t,c),Pe.add(cs)),s=Math.max(s,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new we(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new I,l[C]=new I;let c=new I,u=new I,d=new I,f=new vt,p=new vt,g=new vt,_=new I,m=new I;function h(C,S,T){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,T),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,T),u.sub(c),d.sub(c),p.sub(f),g.sub(f);let L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(L),o[C].add(_),o[S].add(_),o[T].add(_),l[C].add(m),l[S].add(m),l[T].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let C=0,S=b.length;C<S;++C){let T=b[C],L=T.start,U=T.count;for(let X=L,Y=L+U;X<Y;X+=3)h(t.getX(X+0),t.getX(X+1),t.getX(X+2))}let A=new I,y=new I,x=new I,M=new I;function E(C){x.fromBufferAttribute(s,C),M.copy(x);let S=o[C];A.copy(S),A.sub(x.multiplyScalar(x.dot(S))).normalize(),y.crossVectors(M,S);let L=y.dot(l[C])<0?-1:1;a.setXYZW(C,A.x,A.y,A.z,L)}for(let C=0,S=b.length;C<S;++C){let T=b[C],L=T.start,U=T.count;for(let X=L,Y=L+U;X<Y;X+=3)E(t.getX(X+0)),E(t.getX(X+1)),E(t.getX(X+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,d=new I;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u),p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let h=0;h<u;h++)f[g++]=c[p++]}return new we(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let f=c[u],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},gh=new ee,Pi=new Yn,ea=new Dn,_h=new I,na=new I,ia=new I,sa=new I,Fl=new I,ra=new I,xh=new I,aa=new I,Xt=class extends ye{constructor(t=new pe,e=new ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ra.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(Fl.fromBufferAttribute(d,t),a?ra.addScaledVector(Fl,u):ra.addScaledVector(Fl.sub(e),u))}e.add(ra)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(r),Pi.copy(t.ray).recast(t.near),!(ea.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(ea,_h)===null||Pi.origin.distanceToSquared(_h)>(t.far-t.near)**2))&&(gh.copy(r).invert(),Pi.copy(t.ray).applyMatrix4(gh),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],h=a[m.materialIndex],b=Math.max(m.start,p.start),A=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,x=A;y<x;y+=3){let M=o.getX(y),E=o.getX(y+1),C=o.getX(y+2);s=oa(this,h,t,n,c,u,d,M,E,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){let b=o.getX(m),A=o.getX(m+1),y=o.getX(m+2);s=oa(this,a,t,n,c,u,d,b,A,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],h=a[m.materialIndex],b=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,x=A;y<x;y+=3){let M=y,E=y+1,C=y+2;s=oa(this,h,t,n,c,u,d,M,E,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){let b=m,A=m+1,y=m+2;s=oa(this,a,t,n,c,u,d,b,A,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function nf(i,t,e,n,s,r,a,o){let l;if(t.side===De?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===$n,o),l===null)return null;aa.copy(o),aa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(aa);return c<e.near||c>e.far?null:{distance:c,point:aa.clone(),object:i}}function oa(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,na),i.getVertexPosition(l,ia),i.getVertexPosition(c,sa);let u=nf(i,t,e,n,na,ia,sa,xh);if(u){let d=new I;Xn.getBarycoord(xh,na,ia,sa,d),s&&(u.uv=Xn.getInterpolatedAttribute(s,o,l,c,d,new vt)),r&&(u.uv1=Xn.getInterpolatedAttribute(r,o,l,c,d,new vt)),a&&(u.normal=Xn.getInterpolatedAttribute(a,o,l,c,d,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new I,materialIndex:0};Xn.getNormal(na,ia,sa,f.normal),u.face=f,u.barycoord=d}return u}var Le=class i extends pe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(d,2));function g(_,m,h,b,A,y,x,M,E,C,S){let T=y/E,L=x/C,U=y/2,X=x/2,Y=M/2,K=E+1,j=C+1,lt=0,q=0,ut=new I;for(let gt=0;gt<j;gt++){let Mt=gt*L-X;for(let Gt=0;Gt<K;Gt++){let re=Gt*T-U;ut[_]=re*b,ut[m]=Mt*A,ut[h]=Y,c.push(ut.x,ut.y,ut.z),ut[_]=0,ut[m]=0,ut[h]=M>0?1:-1,u.push(ut.x,ut.y,ut.z),d.push(Gt/E),d.push(1-gt/C),lt+=1}}for(let gt=0;gt<C;gt++)for(let Mt=0;Mt<E;Mt++){let Gt=f+Mt+K*gt,re=f+Mt+K*(gt+1),ce=f+(Mt+1)+K*(gt+1),jt=f+(Mt+1)+K*gt;l.push(Gt,re,jt),l.push(re,ce,jt),q+=6}o.addGroup(p,q,S),p+=q,f+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Xi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ke(i){let t={};for(let e=0;e<i.length;e++){let n=Xi(i[e]);for(let s in n)t[s]=n[s]}return t}function sf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function pc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}var ei={clone:Xi,merge:ke},rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Me=class extends fn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rf,this.fragmentShader=af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xi(t.uniforms),this.uniformsGroups=sf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},cr=class extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ci=new I,vh=new vt,yh=new vt,Te=class extends cr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=_s*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,vh,yh),e.subVectors(yh,vh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ps*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},hs=-90,us=1,Aa=class extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Te(hs,us,t,e);s.layers=this.layers,this.add(s);let r=new Te(hs,us,t,e);r.layers=this.layers,this.add(r);let a=new Te(hs,us,t,e);a.layers=this.layers,this.add(a);let o=new Te(hs,us,t,e);o.layers=this.layers,this.add(o);let l=new Te(hs,us,t,e);l.layers=this.layers,this.add(l);let c=new Te(hs,us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},hr=class extends Ge{constructor(t=[],e=Gi,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ca=class extends Be{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new hr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Le(5,5,5),r=new Me({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:wn});r.uniforms.tEquirect.value=e;let a=new Xt(s,r),o=e.minFilter;return e.minFilter===xi&&(e.minFilter=Sn),new Aa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Ie=class extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},of={type:"move"},Ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(of)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ur=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Zn=class extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ra=class extends Ge{constructor(t=null,e=1,n=1,s,r,a,o,l,c=$e,u=$e,d,f){super(null,a,o,l,c,u,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dr=class extends we{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ds=new ee,Mh=new ee,la=[],bh=new Ln,lf=new ee,Js=new Xt,Ks=new Dn,Fi=class extends Xt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new dr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,lf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),bh.copy(t.boundingBox).applyMatrix4(ds),this.boundingBox.union(bh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),Ks.copy(t.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(Ks)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ks.copy(this.boundingSphere),Ks.applyMatrix4(n),t.ray.intersectsSphere(Ks)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ds),Mh.multiplyMatrices(n,ds),Js.matrixWorld=Mh,Js.raycast(t,la);for(let a=0,o=la.length;a<o;a++){let l=la[a];l.instanceId=r,l.object=this,e.push(l)}la.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new dr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ra(new Float32Array(s*this.count),s,this.count,uo,An));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ol=new I,cf=new I,hf=new kt,hn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ol.subVectors(n,e).cross(cf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ol),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||hf.getNormalMatrix(t),s=this.coplanarPoint(Ol).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ii=new Dn,uf=new vt(.5,.5),ca=new I,bs=class{constructor(t=new hn,e=new hn,n=new hn,s=new hn,r=new hn,a=new hn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],f=r[6],p=r[7],g=r[8],_=r[9],m=r[10],h=r[11],b=r[12],A=r[13],y=r[14],x=r[15];if(s[0].setComponents(c-a,p-u,h-g,x-b).normalize(),s[1].setComponents(c+a,p+u,h+g,x+b).normalize(),s[2].setComponents(c+o,p+d,h+_,x+A).normalize(),s[3].setComponents(c-o,p-d,h-_,x-A).normalize(),n)s[4].setComponents(l,f,m,y).normalize(),s[5].setComponents(c-l,p-f,h-m,x-y).normalize();else if(s[4].setComponents(c-l,p-f,h-m,x-y).normalize(),e===bn)s[5].setComponents(c+l,p+f,h+m,x+y).normalize();else if(e===sr)s[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(t){Ii.center.set(0,0,0);let e=uf.distanceTo(t.center);return Ii.radius=.7071067811865476+e,Ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ca.x=s.normal.x>0?t.max.x:t.min.x,ca.y=s.normal.y>0?t.max.y:t.min.y,ca.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ca)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ye=class extends fn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Pa=new I,Ia=new I,Sh=new ee,Qs=new Yn,ha=new Dn,Bl=new I,Th=new I,di=class extends ye{constructor(t=new pe,e=new Ye){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Pa.fromBufferAttribute(e,s-1),Ia.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Pa.distanceTo(Ia);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(s),ha.radius+=r,t.ray.intersectsSphere(ha)===!1)return;Sh.copy(s).invert(),Qs.copy(t.ray).applyMatrix4(Sh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){let h=u.getX(_),b=u.getX(_+1),A=ua(this,t,Qs,l,h,b,_);A&&e.push(A)}if(this.isLineLoop){let _=u.getX(g-1),m=u.getX(p),h=ua(this,t,Qs,l,_,m,g-1);h&&e.push(h)}}else{let p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){let h=ua(this,t,Qs,l,_,_+1,_);h&&e.push(h)}if(this.isLineLoop){let _=ua(this,t,Qs,l,g-1,p,g-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ua(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Pa.fromBufferAttribute(o,s),Ia.fromBufferAttribute(o,r),e.distanceSqToSegment(Pa,Ia,Bl,Th)>n)return;Bl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Bl);if(!(c<t.near||c>t.far))return{distance:c,point:Th.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var wh=new I,Eh=new I,Tn=class extends di{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)wh.fromBufferAttribute(e,s),Eh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+wh.distanceTo(Eh);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ss=class extends fn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ah=new ee,$l=new Yn,da=new Dn,fa=new I,fr=class extends ye{constructor(t=new pe,e=new Ss){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(s),da.radius+=r,t.ray.intersectsSphere(da)===!1)return;Ah.copy(s).invert(),$l.copy(t.ray).applyMatrix4(Ah);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,_=p;g<_;g++){let m=c.getX(g);fa.fromBufferAttribute(d,m),Ch(fa,m,l,s,t,e,this)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=f,_=p;g<_;g++)fa.fromBufferAttribute(d,g),Ch(fa,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ch(i,t,e,n,s,r,a){let o=$l.distanceSqToPoint(i);if(o<e){let l=new I;$l.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var pr=class extends Ge{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},mr=class extends Ge{constructor(t,e,n=vi,s,r,a,o=$e,l=$e,c,u=gs,d=1){if(u!==gs&&u!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},gr=class extends Ge{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var _r=class i extends pe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],f=[],p=[],g=0,_=[],m=n/2,h=0;b(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new se(d,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(p,2));function b(){let y=new I,x=new I,M=0,E=(e-t)/n;for(let C=0;C<=r;C++){let S=[],T=C/r,L=T*(e-t)+t;for(let U=0;U<=s;U++){let X=U/s,Y=X*l+o,K=Math.sin(Y),j=Math.cos(Y);x.x=L*K,x.y=-T*n+m,x.z=L*j,d.push(x.x,x.y,x.z),y.set(K,E,j).normalize(),f.push(y.x,y.y,y.z),p.push(X,1-T),S.push(g++)}_.push(S)}for(let C=0;C<s;C++)for(let S=0;S<r;S++){let T=_[S][C],L=_[S+1][C],U=_[S+1][C+1],X=_[S][C+1];(t>0||S!==0)&&(u.push(T,L,X),M+=3),(e>0||S!==r-1)&&(u.push(L,U,X),M+=3)}c.addGroup(h,M,0),h+=M}function A(y){let x=g,M=new vt,E=new I,C=0,S=y===!0?t:e,T=y===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,m*T,0),f.push(0,T,0),p.push(.5,.5),g++;let L=g;for(let U=0;U<=s;U++){let Y=U/s*l+o,K=Math.cos(Y),j=Math.sin(Y);E.x=S*j,E.y=m*T,E.z=S*K,d.push(E.x,E.y,E.z),f.push(0,T,0),M.x=K*.5+.5,M.y=j*.5*T+.5,p.push(M.x,M.y),g++}for(let U=0;U<s;U++){let X=x+U,Y=L+U;y===!0?u.push(Y,Y+1,X):u.push(Y+1,Y,X),C+=3}c.addGroup(h,C,y===!0?1:2),h+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var pa=new I,ma=new I,zl=new I,ga=new Xn,Oi=class extends pe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(ps*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:_,b:m,c:h}=ga;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),h.fromBufferAttribute(o,c[2]),ga.getNormal(zl),d[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(h.x*s)},${Math.round(h.y*s)},${Math.round(h.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let b=0;b<3;b++){let A=(b+1)%3,y=d[b],x=d[A],M=ga[u[b]],E=ga[u[A]],C=`${y}_${x}`,S=`${x}_${y}`;S in f&&f[S]?(zl.dot(f[S].normal)<=r&&(p.push(M.x,M.y,M.z),p.push(E.x,E.y,E.z)),f[S]=null):C in f||(f[C]={index0:c[b],index1:c[A],normal:zl.clone()})}}for(let g in f)if(f[g]){let{index0:_,index1:m}=f[g];pa.fromBufferAttribute(o,_),ma.fromBufferAttribute(o,m),p.push(pa.x,pa.y,pa.z),p.push(ma.x,ma.y,ma.z)}this.setAttribute("position",new se(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var tn=class i extends pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=t/o,f=e/l,p=[],g=[],_=[],m=[];for(let h=0;h<u;h++){let b=h*f-a;for(let A=0;A<c;A++){let y=A*d-r;g.push(y,-b,0),_.push(0,0,1),m.push(A/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<o;b++){let A=b+c*h,y=b+c*(h+1),x=b+1+c*(h+1),M=b+1+c*h;p.push(A,y,M),p.push(y,x,M)}this.setIndex(p),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Bi=class i extends pe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new I,f=new I,p=[],g=[],_=[],m=[];for(let h=0;h<=n;h++){let b=[],A=h/n,y=0;h===0&&a===0?y=.5/e:h===n&&l===Math.PI&&(y=-.5/e);for(let x=0;x<=e;x++){let M=x/e;d.x=-t*Math.cos(s+M*r)*Math.sin(a+A*o),d.y=t*Math.cos(a+A*o),d.z=t*Math.sin(s+M*r)*Math.sin(a+A*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),m.push(M+y,1-A),b.push(c++)}u.push(b)}for(let h=0;h<n;h++)for(let b=0;b<e;b++){let A=u[h][b+1],y=u[h][b],x=u[h+1][b],M=u[h+1][b+1];(h!==0||a>0)&&p.push(A,y,M),(h!==n-1||l<Math.PI)&&p.push(y,x,M)}this.setIndex(p),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var jn=class i extends pe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],u=new I,d=new I,f=new I;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let _=g/s*r,m=p/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,h=(s+1)*(p-1)+g,b=(s+1)*p+g;a.push(_,m,b),a.push(m,h,b)}this.setIndex(a),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var xr=class extends fn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Pt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}},vr=class extends Me{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Un=class extends fn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wo,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var yr=class extends fn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wo,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},La=class extends fn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Da=class extends fn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function _a(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function df(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var zi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ua=class extends zi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hl,endingEnd:Hl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Gl:r=t,o=2*e-n;break;case Wl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Gl:a=t,l=2*n-e;break;case Wl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,h=-f*m+2*f*_-f*g,b=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,A=(-1-p)*m+(1.5+p)*_+.5*g,y=p*m-p*_;for(let x=0;x!==o;++x)r[x]=h*a[u+x]+b*a[c+x]+A*a[l+x]+y*a[d+x];return r}},Na=class extends zi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),d=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*u;return r}},Fa=class extends zi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},en=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_a(e,this.TimeBufferType),this.values=_a(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:_a(t.times,Array),values:_a(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Na(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ua(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case nr:e=this.InterpolantFactoryMethodDiscrete;break;case Sa:e=this.InterpolantFactoryMethodLinear;break;case xa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nr;case this.InterpolantFactoryMethodLinear:return Sa;case this.InterpolantFactoryMethodSmooth:return xa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&df(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===xa,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,f=d-n,p=d+n;for(let g=0;g!==n;++g){let _=e[d+g];if(_!==e[f+g]||_!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,f=a*n;for(let p=0;p!==n;++p)e[f+p]=e[d+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};en.prototype.ValueTypeName="";en.prototype.TimeBufferType=Float32Array;en.prototype.ValueBufferType=Float32Array;en.prototype.DefaultInterpolation=Sa;var fi=class extends en{constructor(t,e,n){super(t,e,n)}};fi.prototype.ValueTypeName="bool";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=nr;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Oa=class extends en{constructor(t,e,n,s){super(t,e,n,s)}};Oa.prototype.ValueTypeName="color";var Ba=class extends en{constructor(t,e,n,s){super(t,e,n,s)}};Ba.prototype.ValueTypeName="number";var za=class extends zi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)un.slerpFlat(r,0,a,c-o,a,c,l);return r}},Mr=class extends en{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new za(this.times,this.values,this.getValueSize(),t)}};Mr.prototype.ValueTypeName="quaternion";Mr.prototype.InterpolantFactoryMethodSmooth=void 0;var pi=class extends en{constructor(t,e,n){super(t,e,n)}};pi.prototype.ValueTypeName="string";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=nr;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var ka=class extends en{constructor(t,e,n,s){super(t,e,n,s)}};ka.prototype.ValueTypeName="vector";var Va=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},gu=new Va,Ha=class{constructor(t){this.manager=t!==void 0?t:gu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ha.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ts=class extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ki=class extends Ts{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},kl=new ee,Rh=new I,Ph=new I,Ga=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bs,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Rh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rh),Ph.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ph),e.updateMatrixWorld(),kl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(kl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ih=new ee,tr=new I,Vl=new I,Yl=class extends Ga{constructor(){super(new Te(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vt(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),tr.setFromMatrixPosition(t.matrixWorld),n.position.copy(tr),Vl.copy(n.position),Vl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Vl),n.updateMatrixWorld(),s.makeTranslation(-tr.x,-tr.y,-tr.z),Ih.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ih,n.coordinateSystem,n.reversedDepth)}},br=class extends Ts{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Yl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Vi=class extends cr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Zl=class extends Ga{constructor(){super(new Vi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Jn=class extends Ts{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new Zl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Wa=class extends Te{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Sr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var mc="\\[\\]\\.:\\/",ff=new RegExp("["+mc+"]","g"),gc="[^"+mc+"]",pf="[^"+mc.replace("\\.","")+"]",mf=/((?:WC+[\/:])*)/.source.replace("WC",gc),gf=/(WCOD+)?/.source.replace("WCOD",pf),_f=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gc),xf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gc),vf=new RegExp("^"+mf+gf+_f+xf+"$"),yf=["material","materials","bones","map"],jl=class{constructor(t,e,n){let s=n||fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ff,"")}static parseTrackName(t){let e=vf.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);yf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fe.Composite=jl;fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fe.prototype.GetterByBindingType=[fe.prototype._getValue_direct,fe.prototype._getValue_array,fe.prototype._getValue_arrayElement,fe.prototype._getValue_toArray];fe.prototype.SetterByBindingTypeAndVersioning=[[fe.prototype._setValue_direct,fe.prototype._setValue_direct_setNeedsUpdate,fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_array,fe.prototype._setValue_array_setNeedsUpdate,fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_arrayElement,fe.prototype._setValue_arrayElement_setNeedsUpdate,fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_fromArray,fe.prototype._setValue_fromArray_setNeedsUpdate,fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var T_=new Float32Array(1);var Lh=new ee,Hi=class{constructor(t,e,n=0,s=1/0){this.ray=new Yn(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ys,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Lh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lh),this}intersectObject(t,e=!0,n=[]){return Jl(t,this,n,e),n.sort(Dh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Jl(t[s],this,n,e);return n.sort(Dh),n}};function Dh(i,t){return i.distance-t.distance}function Jl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Jl(r[a],t,e,!0)}}var ws=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Wt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Wt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Tr=class extends Tn{constructor(t=10,e=10,n=4473924,s=8947848){n=new Pt(n),s=new Pt(s);let r=e/2,a=t/e,o=t/2,l=[],c=[];for(let f=0,p=0,g=-o;f<=e;f++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);let _=f===r?n:s;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}let u=new pe;u.setAttribute("position",new se(l,3)),u.setAttribute("color",new se(c,3));let d=new Ye({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var wr=class extends In{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function _c(i,t,e,n){let s=Mf(n);switch(e){case oc:return i*t;case uo:return i*t/s.components*s.byteLength;case fo:return i*t/s.components*s.byteLength;case cc:return i*t*2/s.components*s.byteLength;case po:return i*t*2/s.components*s.byteLength;case lc:return i*t*3/s.components*s.byteLength;case mn:return i*t*4/s.components*s.byteLength;case mo:return i*t*4/s.components*s.byteLength;case Cr:case Rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pr:case Ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _o:case vo:return Math.max(i,16)*Math.max(t,8)/4;case go:case xo:return Math.max(i,8)*Math.max(t,8)/2;case yo:case Mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case So:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case To:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case wo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Co:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Po:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Io:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Do:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case No:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Fo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Oo:case Bo:case zo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ko:case Vo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ho:case Go:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mf(i){switch(i){case En:case ic:return{byteLength:1,components:1};case As:case sc:case pn:return{byteLength:2,components:1};case co:case ho:return{byteLength:2,components:4};case vi:case lo:case An:return{byteLength:4,components:1};case rc:case ac:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function ku(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Sf(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){let g=d[f],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){let _=d[p];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Tf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wf=`#ifdef USE_ALPHAHASH
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
#endif`,Ef=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Af=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pf=`#ifdef USE_AOMAP
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
#endif`,If=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lf=`#ifdef USE_BATCHING
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
#endif`,Df=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ff=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Of=`#ifdef USE_IRIDESCENCE
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
#endif`,Bf=`#ifdef USE_BUMPMAP
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
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$f=`#define PI 3.141592653589793
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
} // validated`,Yf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zf=`vec3 transformedNormal = objectNormal;
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
#endif`,jf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",ep=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,np=`#ifdef USE_ENVMAP
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
#endif`,ip=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sp=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
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
#endif`,op=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,up=`#ifdef USE_GRADIENTMAP
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
}`,dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mp=`uniform bool receiveShadow;
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
#endif`,gp=`#ifdef USE_ENVMAP
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
#endif`,_p=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mp=`PhysicalMaterial material;
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
#endif`,bp=`struct PhysicalMaterial {
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
}`,Sp=`
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
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
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
#endif`,wp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ep=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ap=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ip=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dp=`#if defined( USE_POINTS_UV )
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
#endif`,Up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Np=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Op=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zp=`#ifdef USE_MORPHTARGETS
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
#endif`,kp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qp=`#ifdef USE_NORMALMAP
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
#endif`,$p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,em=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lm=`float getShadowMask() {
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
}`,cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hm=`#ifdef USE_SKINNING
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
#endif`,um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dm=`#ifdef USE_SKINNING
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
#endif`,fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_m=`#ifdef USE_TRANSMISSION
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
#endif`,xm=`#ifdef USE_TRANSMISSION
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tm=`uniform sampler2D t2D;
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
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Em=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`#include <common>
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
}`,Pm=`#if DEPTH_PACKING == 3200
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
}`,Im=`#define DISTANCE
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
}`,Lm=`#define DISTANCE
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
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Um=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nm=`uniform float scale;
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
}`,Fm=`uniform vec3 diffuse;
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
}`,Om=`#include <common>
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
}`,Bm=`uniform vec3 diffuse;
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
}`,zm=`#define LAMBERT
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
}`,km=`#define LAMBERT
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
}`,Vm=`#define MATCAP
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
}`,Hm=`#define MATCAP
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
}`,Gm=`#define NORMAL
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
}`,Wm=`#define NORMAL
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
}`,Xm=`#define PHONG
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
}`,qm=`#define PHONG
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
}`,$m=`#define STANDARD
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
}`,Ym=`#define STANDARD
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
}`,Zm=`#define TOON
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
}`,jm=`#define TOON
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
}`,Jm=`uniform float size;
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
}`,Km=`uniform vec3 diffuse;
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
}`,Qm=`#include <common>
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
}`,tg=`uniform vec3 color;
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
}`,eg=`uniform float rotation;
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
}`,ng=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:Tf,alphahash_pars_fragment:wf,alphamap_fragment:Ef,alphamap_pars_fragment:Af,alphatest_fragment:Cf,alphatest_pars_fragment:Rf,aomap_fragment:Pf,aomap_pars_fragment:If,batching_pars_vertex:Lf,batching_vertex:Df,begin_vertex:Uf,beginnormal_vertex:Nf,bsdfs:Ff,iridescence_fragment:Of,bumpmap_pars_fragment:Bf,clipping_planes_fragment:zf,clipping_planes_pars_fragment:kf,clipping_planes_pars_vertex:Vf,clipping_planes_vertex:Hf,color_fragment:Gf,color_pars_fragment:Wf,color_pars_vertex:Xf,color_vertex:qf,common:$f,cube_uv_reflection_fragment:Yf,defaultnormal_vertex:Zf,displacementmap_pars_vertex:jf,displacementmap_vertex:Jf,emissivemap_fragment:Kf,emissivemap_pars_fragment:Qf,colorspace_fragment:tp,colorspace_pars_fragment:ep,envmap_fragment:np,envmap_common_pars_fragment:ip,envmap_pars_fragment:sp,envmap_pars_vertex:rp,envmap_physical_pars_fragment:gp,envmap_vertex:ap,fog_vertex:op,fog_pars_vertex:lp,fog_fragment:cp,fog_pars_fragment:hp,gradientmap_pars_fragment:up,lightmap_pars_fragment:dp,lights_lambert_fragment:fp,lights_lambert_pars_fragment:pp,lights_pars_begin:mp,lights_toon_fragment:_p,lights_toon_pars_fragment:xp,lights_phong_fragment:vp,lights_phong_pars_fragment:yp,lights_physical_fragment:Mp,lights_physical_pars_fragment:bp,lights_fragment_begin:Sp,lights_fragment_maps:Tp,lights_fragment_end:wp,logdepthbuf_fragment:Ep,logdepthbuf_pars_fragment:Ap,logdepthbuf_pars_vertex:Cp,logdepthbuf_vertex:Rp,map_fragment:Pp,map_pars_fragment:Ip,map_particle_fragment:Lp,map_particle_pars_fragment:Dp,metalnessmap_fragment:Up,metalnessmap_pars_fragment:Np,morphinstance_vertex:Fp,morphcolor_vertex:Op,morphnormal_vertex:Bp,morphtarget_pars_vertex:zp,morphtarget_vertex:kp,normal_fragment_begin:Vp,normal_fragment_maps:Hp,normal_pars_fragment:Gp,normal_pars_vertex:Wp,normal_vertex:Xp,normalmap_pars_fragment:qp,clearcoat_normal_fragment_begin:$p,clearcoat_normal_fragment_maps:Yp,clearcoat_pars_fragment:Zp,iridescence_pars_fragment:jp,opaque_fragment:Jp,packing:Kp,premultiplied_alpha_fragment:Qp,project_vertex:tm,dithering_fragment:em,dithering_pars_fragment:nm,roughnessmap_fragment:im,roughnessmap_pars_fragment:sm,shadowmap_pars_fragment:rm,shadowmap_pars_vertex:am,shadowmap_vertex:om,shadowmask_pars_fragment:lm,skinbase_vertex:cm,skinning_pars_vertex:hm,skinning_vertex:um,skinnormal_vertex:dm,specularmap_fragment:fm,specularmap_pars_fragment:pm,tonemapping_fragment:mm,tonemapping_pars_fragment:gm,transmission_fragment:_m,transmission_pars_fragment:xm,uv_pars_fragment:vm,uv_pars_vertex:ym,uv_vertex:Mm,worldpos_vertex:bm,background_vert:Sm,background_frag:Tm,backgroundCube_vert:wm,backgroundCube_frag:Em,cube_vert:Am,cube_frag:Cm,depth_vert:Rm,depth_frag:Pm,distanceRGBA_vert:Im,distanceRGBA_frag:Lm,equirect_vert:Dm,equirect_frag:Um,linedashed_vert:Nm,linedashed_frag:Fm,meshbasic_vert:Om,meshbasic_frag:Bm,meshlambert_vert:zm,meshlambert_frag:km,meshmatcap_vert:Vm,meshmatcap_frag:Hm,meshnormal_vert:Gm,meshnormal_frag:Wm,meshphong_vert:Xm,meshphong_frag:qm,meshphysical_vert:$m,meshphysical_frag:Ym,meshtoon_vert:Zm,meshtoon_frag:jm,points_vert:Jm,points_frag:Km,shadow_vert:Qm,shadow_frag:tg,sprite_vert:eg,sprite_frag:ng},dt={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Fn={basic:{uniforms:ke([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:ke([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:ke([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:ke([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:ke([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:ke([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:ke([dt.points,dt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:ke([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:ke([dt.common,dt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:ke([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:ke([dt.sprite,dt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:ke([dt.common,dt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:ke([dt.lights,dt.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Fn.physical={uniforms:ke([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Xo={r:0,b:0,g:0},qi=new dn,ig=new ee;function sg(i,t,e,n,s,r,a){let o=new Pt(0),l=r===!0?0:1,c,u,d=null,f=0,p=null;function g(A){let y=A.isScene===!0?A.background:null;return y&&y.isTexture&&(y=(A.backgroundBlurriness>0?e:t).get(y)),y}function _(A){let y=!1,x=g(A);x===null?h(o,l):x&&x.isColor&&(h(x,1),y=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(A,y){let x=g(y);x&&(x.isCubeTexture||x.mapping===Er)?(u===void 0&&(u=new Xt(new Le(1,1,1),new Me({name:"BackgroundCubeMaterial",uniforms:Xi(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),qi.copy(y.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ig.makeRotationFromEuler(qi)),u.material.toneMapped=Yt.getTransfer(x.colorSpace)!==Kt,(d!==x||f!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=x,f=x.version,p=i.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Xt(new tn(2,2),new Me({name:"BackgroundMaterial",uniforms:Xi(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(x.colorSpace)!==Kt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=x,f=x.version,p=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function h(A,y){A.getRGB(Xo,pc(i)),n.buffers.color.setClear(Xo.r,Xo.g,Xo.b,y,a)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,y=1){o.set(A),l=y,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,h(o,l)},render:_,addToRenderList:m,dispose:b}}function rg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(T,L,U,X,Y){let K=!1,j=d(X,U,L);r!==j&&(r=j,c(r.object)),K=p(T,X,U,Y),K&&g(T,X,U,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,y(T,L,U,X),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return i.createVertexArray()}function c(T){return i.bindVertexArray(T)}function u(T){return i.deleteVertexArray(T)}function d(T,L,U){let X=U.wireframe===!0,Y=n[T.id];Y===void 0&&(Y={},n[T.id]=Y);let K=Y[L.id];K===void 0&&(K={},Y[L.id]=K);let j=K[X];return j===void 0&&(j=f(l()),K[X]=j),j}function f(T){let L=[],U=[],X=[];for(let Y=0;Y<e;Y++)L[Y]=0,U[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:X,object:T,attributes:{},index:null}}function p(T,L,U,X){let Y=r.attributes,K=L.attributes,j=0,lt=U.getAttributes();for(let q in lt)if(lt[q].location>=0){let gt=Y[q],Mt=K[q];if(Mt===void 0&&(q==="instanceMatrix"&&T.instanceMatrix&&(Mt=T.instanceMatrix),q==="instanceColor"&&T.instanceColor&&(Mt=T.instanceColor)),gt===void 0||gt.attribute!==Mt||Mt&&gt.data!==Mt.data)return!0;j++}return r.attributesNum!==j||r.index!==X}function g(T,L,U,X){let Y={},K=L.attributes,j=0,lt=U.getAttributes();for(let q in lt)if(lt[q].location>=0){let gt=K[q];gt===void 0&&(q==="instanceMatrix"&&T.instanceMatrix&&(gt=T.instanceMatrix),q==="instanceColor"&&T.instanceColor&&(gt=T.instanceColor));let Mt={};Mt.attribute=gt,gt&&gt.data&&(Mt.data=gt.data),Y[q]=Mt,j++}r.attributes=Y,r.attributesNum=j,r.index=X}function _(){let T=r.newAttributes;for(let L=0,U=T.length;L<U;L++)T[L]=0}function m(T){h(T,0)}function h(T,L){let U=r.newAttributes,X=r.enabledAttributes,Y=r.attributeDivisors;U[T]=1,X[T]===0&&(i.enableVertexAttribArray(T),X[T]=1),Y[T]!==L&&(i.vertexAttribDivisor(T,L),Y[T]=L)}function b(){let T=r.newAttributes,L=r.enabledAttributes;for(let U=0,X=L.length;U<X;U++)L[U]!==T[U]&&(i.disableVertexAttribArray(U),L[U]=0)}function A(T,L,U,X,Y,K,j){j===!0?i.vertexAttribIPointer(T,L,U,Y,K):i.vertexAttribPointer(T,L,U,X,Y,K)}function y(T,L,U,X){_();let Y=X.attributes,K=U.getAttributes(),j=L.defaultAttributeValues;for(let lt in K){let q=K[lt];if(q.location>=0){let ut=Y[lt];if(ut===void 0&&(lt==="instanceMatrix"&&T.instanceMatrix&&(ut=T.instanceMatrix),lt==="instanceColor"&&T.instanceColor&&(ut=T.instanceColor)),ut!==void 0){let gt=ut.normalized,Mt=ut.itemSize,Gt=t.get(ut);if(Gt===void 0)continue;let re=Gt.buffer,ce=Gt.type,jt=Gt.bytesPerElement,tt=ce===i.INT||ce===i.UNSIGNED_INT||ut.gpuType===lo;if(ut.isInterleavedBufferAttribute){let nt=ut.data,_t=nt.stride,Ut=ut.offset;if(nt.isInstancedInterleavedBuffer){for(let wt=0;wt<q.locationSize;wt++)h(q.location+wt,nt.meshPerAttribute);T.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let wt=0;wt<q.locationSize;wt++)m(q.location+wt);i.bindBuffer(i.ARRAY_BUFFER,re);for(let wt=0;wt<q.locationSize;wt++)A(q.location+wt,Mt/q.locationSize,ce,gt,_t*jt,(Ut+Mt/q.locationSize*wt)*jt,tt)}else{if(ut.isInstancedBufferAttribute){for(let nt=0;nt<q.locationSize;nt++)h(q.location+nt,ut.meshPerAttribute);T.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let nt=0;nt<q.locationSize;nt++)m(q.location+nt);i.bindBuffer(i.ARRAY_BUFFER,re);for(let nt=0;nt<q.locationSize;nt++)A(q.location+nt,Mt/q.locationSize,ce,gt,Mt*jt,Mt/q.locationSize*nt*jt,tt)}}else if(j!==void 0){let gt=j[lt];if(gt!==void 0)switch(gt.length){case 2:i.vertexAttrib2fv(q.location,gt);break;case 3:i.vertexAttrib3fv(q.location,gt);break;case 4:i.vertexAttrib4fv(q.location,gt);break;default:i.vertexAttrib1fv(q.location,gt)}}}}b()}function x(){C();for(let T in n){let L=n[T];for(let U in L){let X=L[U];for(let Y in X)u(X[Y].object),delete X[Y];delete L[U]}delete n[T]}}function M(T){if(n[T.id]===void 0)return;let L=n[T.id];for(let U in L){let X=L[U];for(let Y in X)u(X[Y].object),delete X[Y];delete L[U]}delete n[T.id]}function E(T){for(let L in n){let U=n[L];if(U[T.id]===void 0)continue;let X=U[T.id];for(let Y in X)u(X[Y].object),delete X[Y];delete U[T.id]}}function C(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:S,dispose:x,releaseStatesOfGeometry:M,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function ag(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function o(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];e.update(p,n,1)}function l(c,u,d,f){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function og(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==mn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let C=E===pn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==En&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==An&&!C)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=g>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:y,vertexTextures:x,maxSamples:M}}function lg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new hn,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,p){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,h=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let b=r?0:n,A=b*4,y=h.clippingState||null;l.value=y,y=u(g,f,A,p);for(let x=0;x!==A;++x)y[x]=e[x];h.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,f,p,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let h=p+_*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<h)&&(m=new Float32Array(h));for(let A=0,y=p;A!==_;++A,y+=4)a.copy(d[A]).applyMatrix4(b,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function cg(i){let t=new WeakMap;function e(a,o){return o===ro?a.mapping=Gi:o===ao&&(a.mapping=Wi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ro||o===ao)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ca(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ls=4,_u=[.125,.215,.35,.446,.526,.582],Zi=20,xc=new Vi,xu=new Pt,vc=null,yc=0,Mc=0,bc=!1,Yi=(1+Math.sqrt(5))/2,Is=1/Yi,vu=[new I(-Yi,Is,0),new I(Yi,Is,0),new I(-Is,0,Yi),new I(Is,0,Yi),new I(0,Yi,-Is),new I(0,Yi,Is),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],hg=new I,yi=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=hg}=r;vc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vc,yc,Mc),this._renderer.xr.enabled=bc,t.scissorTest=!1,qo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gi||t.mapping===Wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:pn,format:mn,colorSpace:Ni,depthBuffer:!1},s=yu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ug(r)),this._blurMaterial=dg(r,t,e)}return s}_compileMaterial(t){let e=new Xt(this._lodPlanes[0],t);this._renderer.compile(e,xc)}_sceneToCubeUV(t,e,n,s,r){let l=new Te(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(xu),d.toneMapping=Qn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let _=new ze({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),m=new Xt(new Le,_),h=!1,b=t.background;b?b.isColor&&(_.color.copy(b),t.background=null,h=!0):(_.color.copy(xu),h=!0);for(let A=0;A<6;A++){let y=A%3;y===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):y===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));let x=this._cubeSize;qo(s,y*x,A>2?x:0,x,x),d.setRenderTarget(s),h&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Gi||t.mapping===Wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Xt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;qo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,xc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=vu[(s-r-1)%vu.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Xt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Zi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Zi;m>Zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zi}`);let h=[],b=0;for(let E=0;E<Zi;++E){let C=E/_,S=Math.exp(-C*C/2);h.push(S),E===0?b+=S:E<m&&(b+=2*S)}for(let E=0;E<h.length;E++)h[E]=h[E]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:A}=this;f.dTheta.value=g,f.mipInt.value=A-n;let y=this._sizeLods[s],x=3*y*(s>A-Ls?s-A+Ls:0),M=4*(this._cubeSize-y);qo(e,x,M,3*y,2*y),l.setRenderTarget(e),l.render(d,xc)}};function ug(i){let t=[],e=[],n=[],s=i,r=i-Ls+1+_u.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ls?l=_u[a-i+Ls-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,_=3,m=2,h=1,b=new Float32Array(_*g*p),A=new Float32Array(m*g*p),y=new Float32Array(h*g*p);for(let M=0;M<p;M++){let E=M%3*2/3-1,C=M>2?0:-1,S=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];b.set(S,_*g*M),A.set(f,m*g*M);let T=[M,M,M,M,M,M];y.set(T,h*g*M)}let x=new pe;x.setAttribute("position",new we(b,_)),x.setAttribute("uv",new we(A,m)),x.setAttribute("faceIndex",new we(y,h)),t.push(x),s>Ls&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yu(i,t,e){let n=new Be(i,t,e);return n.texture.mapping=Er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function dg(i,t,e){let n=new Float32Array(Zi),s=new I(0,1,0);return new Me({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Mu(){return new Me({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function bu(){return new Me({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Lc(){return`

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
	`}function fg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===ro||l===ao,u=l===Gi||l===Wi;if(c||u){let d=t.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new yi(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new yi(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function pg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&xs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function mg(i,t,e,n){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let p in f)t.update(f[p],i.ARRAY_BUFFER)}function c(d){let f=[],p=d.index,g=d.attributes.position,_=0;if(p!==null){let b=p.array;_=p.version;for(let A=0,y=b.length;A<y;A+=3){let x=b[A+0],M=b[A+1],E=b[A+2];f.push(x,M,M,E,E,x)}}else if(g!==void 0){let b=g.array;_=g.version;for(let A=0,y=b.length/3-1;A<y;A+=3){let x=A+0,M=A+1,E=A+2;f.push(x,M,M,E,E,x)}}else return;let m=new(fc(f)?lr:or)(f,1);m.version=_;let h=r.get(d);h&&t.remove(h),r.set(d,m)}function u(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function gg(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),e.update(p,n,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];e.update(m,n,1)}function d(f,p,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/a,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let h=0;for(let b=0;b<g;b++)h+=p[b]*_[b];e.update(h,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function _g(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function xg(i,t,e){let n=new WeakMap,s=new ie;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==d){let S=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],A=0;p===!0&&(A=1),g===!0&&(A=2),_===!0&&(A=3);let y=o.attributes.position.count*A,x=1;y>t.maxTextureSize&&(x=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let M=new Float32Array(y*x*4*d),E=new ar(M,y,x,d);E.type=An,E.needsUpdate=!0;let C=A*4;for(let T=0;T<d;T++){let L=m[T],U=h[T],X=b[T],Y=y*x*4*T;for(let K=0;K<L.count;K++){let j=K*C;p===!0&&(s.fromBufferAttribute(L,K),M[Y+j+0]=s.x,M[Y+j+1]=s.y,M[Y+j+2]=s.z,M[Y+j+3]=0),g===!0&&(s.fromBufferAttribute(U,K),M[Y+j+4]=s.x,M[Y+j+5]=s.y,M[Y+j+6]=s.z,M[Y+j+7]=0),_===!0&&(s.fromBufferAttribute(X,K),M[Y+j+8]=s.x,M[Y+j+9]=s.y,M[Y+j+10]=s.z,M[Y+j+11]=X.itemSize===4?s.w:1)}}f={count:d,texture:E,size:new vt(y,x)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function vg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Vu=new Ge,Su=new mr(1,1),Hu=new ar,Gu=new Ea,Wu=new hr,Tu=[],wu=[],Eu=new Float32Array(16),Au=new Float32Array(9),Cu=new Float32Array(4);function Ns(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Tu[s];if(r===void 0&&(r=new Float32Array(s),Tu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Yo(i,t){let e=wu[t];e===void 0&&(e=new Int32Array(t),wu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function yg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function Sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function Tg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Ee(e,n))return;Cu.set(n),i.uniformMatrix2fv(this.addr,!1,Cu),Ae(e,n)}}function wg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Ee(e,n))return;Au.set(n),i.uniformMatrix3fv(this.addr,!1,Au),Ae(e,n)}}function Eg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Ee(e,n))return;Eu.set(n),i.uniformMatrix4fv(this.addr,!1,Eu),Ae(e,n)}}function Ag(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function Rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function Pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function Ig(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function Dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function Ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function Ng(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Su.compareFunction=hc,r=Su):r=Vu,e.setTexture2D(t||r,s)}function Fg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Gu,s)}function Og(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Wu,s)}function Bg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Hu,s)}function zg(i){switch(i){case 5126:return yg;case 35664:return Mg;case 35665:return bg;case 35666:return Sg;case 35674:return Tg;case 35675:return wg;case 35676:return Eg;case 5124:case 35670:return Ag;case 35667:case 35671:return Cg;case 35668:case 35672:return Rg;case 35669:case 35673:return Pg;case 5125:return Ig;case 36294:return Lg;case 36295:return Dg;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Bg}}function kg(i,t){i.uniform1fv(this.addr,t)}function Vg(i,t){let e=Ns(t,this.size,2);i.uniform2fv(this.addr,e)}function Hg(i,t){let e=Ns(t,this.size,3);i.uniform3fv(this.addr,e)}function Gg(i,t){let e=Ns(t,this.size,4);i.uniform4fv(this.addr,e)}function Wg(i,t){let e=Ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Xg(i,t){let e=Ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function qg(i,t){let e=Ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $g(i,t){i.uniform1iv(this.addr,t)}function Yg(i,t){i.uniform2iv(this.addr,t)}function Zg(i,t){i.uniform3iv(this.addr,t)}function jg(i,t){i.uniform4iv(this.addr,t)}function Jg(i,t){i.uniform1uiv(this.addr,t)}function Kg(i,t){i.uniform2uiv(this.addr,t)}function Qg(i,t){i.uniform3uiv(this.addr,t)}function t0(i,t){i.uniform4uiv(this.addr,t)}function e0(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Vu,r[a])}function n0(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Gu,r[a])}function i0(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Wu,r[a])}function s0(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Hu,r[a])}function r0(i){switch(i){case 5126:return kg;case 35664:return Vg;case 35665:return Hg;case 35666:return Gg;case 35674:return Wg;case 35675:return Xg;case 35676:return qg;case 5124:case 35670:return $g;case 35667:case 35671:return Yg;case 35668:case 35672:return Zg;case 35669:case 35673:return jg;case 5125:return Jg;case 36294:return Kg;case 36295:return Qg;case 36296:return t0;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return s0}}var Tc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zg(e.type)}},wc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=r0(e.type)}},Ec=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Sc=/(\w+)(\])?(\[|\.)?/g;function Ru(i,t){i.seq.push(t),i.map[t.id]=t}function a0(i,t,e){let n=i.name,s=n.length;for(Sc.lastIndex=0;;){let r=Sc.exec(n),a=Sc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ru(e,c===void 0?new Tc(o,i,t):new wc(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Ec(o),Ru(e,d)),e=d}}}var Ds=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);a0(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Pu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var o0=37297,l0=0;function c0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Iu=new kt;function h0(i){Yt._getMatrix(Iu,Yt.workingColorSpace,i);let t=`mat3( ${Iu.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case ir:return[t,"LinearTransferOETF"];case Kt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Lu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+c0(i.getShaderSource(t),o)}else return r}function u0(i,t){let e=h0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function d0(i,t){let e;switch(t){case Qa:e="Linear";break;case to:e="Reinhard";break;case eo:e="Cineon";break;case _i:e="ACESFilmic";break;case io:e="AgX";break;case so:e="Neutral";break;case no:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var $o=new I;function f0(){Yt.getLuminanceCoefficients($o);let i=$o.x.toFixed(4),t=$o.y.toFixed(4),e=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function m0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function g0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Lr(i){return i!==""}function Du(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Uu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(i){return i.replace(_0,v0)}var x0=new Map;function v0(i,t){let e=Ht[t];if(e===void 0){let n=x0.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ac(e)}var y0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nu(i){return i.replace(y0,M0)}function M0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function b0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ql?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Es?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Nn&&(t="SHADOWMAP_TYPE_VSM"),t}function S0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gi:case Wi:t="ENVMAP_TYPE_CUBE";break;case Er:t="ENVMAP_TYPE_CUBE_UV";break}return t}function T0(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Wi&&(t="ENVMAP_MODE_REFRACTION"),t}function w0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ka:t="ENVMAP_BLENDING_MULTIPLY";break;case tu:t="ENVMAP_BLENDING_MIX";break;case eu:t="ENVMAP_BLENDING_ADD";break}return t}function E0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function A0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=b0(e),c=S0(e),u=T0(e),d=w0(e),f=E0(e),p=p0(e),g=m0(r),_=s.createProgram(),m,h,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lr).join(`
`),h.length>0&&(h+=`
`)):(m=[Fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),h=[Fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Qn?d0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,u0("linearToOutputTexel",e.outputColorSpace),f0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lr).join(`
`)),a=Ac(a),a=Du(a,e),a=Uu(a,e),o=Ac(o),o=Du(o,e),o=Uu(o,e),a=Nu(a),o=Nu(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let A=b+m+a,y=b+h+o,x=Pu(s,s.VERTEX_SHADER,A),M=Pu(s,s.FRAGMENT_SHADER,y);s.attachShader(_,x),s.attachShader(_,M),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(L){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(_)||"",X=s.getShaderInfoLog(x)||"",Y=s.getShaderInfoLog(M)||"",K=U.trim(),j=X.trim(),lt=Y.trim(),q=!0,ut=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,x,M);else{let gt=Lu(s,x,"vertex"),Mt=Lu(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+K+`
`+gt+`
`+Mt)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(j===""||lt==="")&&(ut=!1);ut&&(L.diagnostics={runnable:q,programLog:K,vertexShader:{log:j,prefix:m},fragmentShader:{log:lt,prefix:h}})}s.deleteShader(x),s.deleteShader(M),C=new Ds(s,_),S=g0(s,_)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(_,o0)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=l0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=x,this.fragmentShader=M,this}var C0=0,Cc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Rc(t),e.set(t,n)),n}},Rc=class{constructor(t){this.id=C0++,this.code=t,this.usedTimes=0}};function R0(i,t,e,n,s,r,a){let o=new ys,l=new Cc,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,T,L,U,X){let Y=U.fog,K=X.geometry,j=S.isMeshStandardMaterial?U.environment:null,lt=(S.isMeshStandardMaterial?e:t).get(S.envMap||j),q=lt&&lt.mapping===Er?lt.image.height:null,ut=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let gt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Mt=gt!==void 0?gt.length:0,Gt=0;K.morphAttributes.position!==void 0&&(Gt=1),K.morphAttributes.normal!==void 0&&(Gt=2),K.morphAttributes.color!==void 0&&(Gt=3);let re,ce,jt,tt;if(ut){let te=Fn[ut];re=te.vertexShader,ce=te.fragmentShader}else re=S.vertexShader,ce=S.fragmentShader,l.update(S),jt=l.getVertexShaderID(S),tt=l.getFragmentShaderID(S);let nt=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),Ut=X.isInstancedMesh===!0,wt=X.isBatchedMesh===!0,qt=!!S.map,xe=!!S.matcap,P=!!lt,V=!!S.aoMap,N=!!S.lightMap,B=!!S.bumpMap,z=!!S.normalMap,$=!!S.displacementMap,H=!!S.emissiveMap,Q=!!S.metalnessMap,Ft=!!S.roughnessMap,Qt=S.anisotropy>0,R=S.clearcoat>0,v=S.dispersion>0,k=S.iridescence>0,J=S.sheen>0,it=S.transmission>0,Z=Qt&&!!S.anisotropyMap,Ct=R&&!!S.clearcoatMap,ct=R&&!!S.clearcoatNormalMap,Tt=R&&!!S.clearcoatRoughnessMap,Et=k&&!!S.iridescenceMap,at=k&&!!S.iridescenceThicknessMap,mt=J&&!!S.sheenColorMap,Nt=J&&!!S.sheenRoughnessMap,At=!!S.specularMap,ft=!!S.specularColorMap,Vt=!!S.specularIntensityMap,D=it&&!!S.transmissionMap,ot=it&&!!S.thicknessMap,ht=!!S.gradientMap,yt=!!S.alphaMap,st=S.alphaTest>0,et=!!S.alphaHash,St=!!S.extensions,zt=Qn;S.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(zt=i.toneMapping);let he={shaderID:ut,shaderType:S.type,shaderName:S.name,vertexShader:re,fragmentShader:ce,defines:S.defines,customVertexShaderID:jt,customFragmentShaderID:tt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:wt,batchingColor:wt&&X._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&X.instanceColor!==null,instancingMorph:Ut&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Ni,alphaToCoverage:!!S.alphaToCoverage,map:qt,matcap:xe,envMap:P,envMapMode:P&&lt.mapping,envMapCubeUVHeight:q,aoMap:V,lightMap:N,bumpMap:B,normalMap:z,displacementMap:f&&$,emissiveMap:H,normalMapObjectSpace:z&&S.normalMapType===ru,normalMapTangentSpace:z&&S.normalMapType===Wo,metalnessMap:Q,roughnessMap:Ft,anisotropy:Qt,anisotropyMap:Z,clearcoat:R,clearcoatMap:Ct,clearcoatNormalMap:ct,clearcoatRoughnessMap:Tt,dispersion:v,iridescence:k,iridescenceMap:Et,iridescenceThicknessMap:at,sheen:J,sheenColorMap:mt,sheenRoughnessMap:Nt,specularMap:At,specularColorMap:ft,specularIntensityMap:Vt,transmission:it,transmissionMap:D,thicknessMap:ot,gradientMap:ht,opaque:S.transparent===!1&&S.blending===Di&&S.alphaToCoverage===!1,alphaMap:yt,alphaTest:st,alphaHash:et,combine:S.combine,mapUv:qt&&_(S.map.channel),aoMapUv:V&&_(S.aoMap.channel),lightMapUv:N&&_(S.lightMap.channel),bumpMapUv:B&&_(S.bumpMap.channel),normalMapUv:z&&_(S.normalMap.channel),displacementMapUv:$&&_(S.displacementMap.channel),emissiveMapUv:H&&_(S.emissiveMap.channel),metalnessMapUv:Q&&_(S.metalnessMap.channel),roughnessMapUv:Ft&&_(S.roughnessMap.channel),anisotropyMapUv:Z&&_(S.anisotropyMap.channel),clearcoatMapUv:Ct&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ct&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:at&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&_(S.sheenRoughnessMap.channel),specularMapUv:At&&_(S.specularMap.channel),specularColorMapUv:ft&&_(S.specularColorMap.channel),specularIntensityMapUv:Vt&&_(S.specularIntensityMap.channel),transmissionMapUv:D&&_(S.transmissionMap.channel),thicknessMapUv:ot&&_(S.thicknessMap.channel),alphaMapUv:yt&&_(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(z||Qt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!K.attributes.uv&&(qt||yt),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_t,skinning:X.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Gt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:qt&&S.map.isVideoTexture===!0&&Yt.getTransfer(S.map.colorSpace)===Kt,decodeVideoTextureEmissive:H&&S.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(S.emissiveMap.colorSpace)===Kt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===We,flipSided:S.side===De,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:St&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&S.extensions.multiDraw===!0||wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return he.vertexUv1s=c.has(1),he.vertexUv2s=c.has(2),he.vertexUv3s=c.has(3),c.clear(),he}function h(S){let T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(let L in S.defines)T.push(L),T.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(b(T,S),A(T,S),T.push(i.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function b(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function A(S,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),T.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){let T=g[S.type],L;if(T){let U=Fn[T];L=ei.clone(U.uniforms)}else L=S.uniforms;return L}function x(S,T){let L;for(let U=0,X=u.length;U<X;U++){let Y=u[U];if(Y.cacheKey===T){L=Y,++L.usedTimes;break}}return L===void 0&&(L=new A0(i,T,S,r),u.push(L)),L}function M(S){if(--S.usedTimes===0){let T=u.indexOf(S);u[T]=u[u.length-1],u.pop(),S.destroy()}}function E(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:x,releaseProgram:M,releaseShaderCache:E,programs:u,dispose:C}}function P0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function I0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ou(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Bu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,f,p,g,_,m){let h=i[t];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[t]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=m),t++,h}function o(d,f,p,g,_,m){let h=a(d,f,p,g,_,m);p.transmission>0?n.push(h):p.transparent===!0?s.push(h):e.push(h)}function l(d,f,p,g,_,m){let h=a(d,f,p,g,_,m);p.transmission>0?n.unshift(h):p.transparent===!0?s.unshift(h):e.unshift(h)}function c(d,f){e.length>1&&e.sort(d||I0),n.length>1&&n.sort(f||Ou),s.length>1&&s.sort(f||Ou)}function u(){for(let d=t,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function L0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Bu,i.set(n,[a])):s>=r.length?(a=new Bu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function D0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Pt};break;case"SpotLight":e={position:new I,direction:new I,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function U0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var N0=0;function F0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function O0(i){let t=new D0,e=U0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new ee,a=new ee;function o(c){let u=0,d=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,h=0,b=0,A=0,y=0,x=0,M=0,E=0;c.sort(F0);for(let S=0,T=c.length;S<T;S++){let L=c[S],U=L.color,X=L.intensity,Y=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=U.r*X,d+=U.g*X,f+=U.b*X;else if(L.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(L.sh.coefficients[j],X);E++}else if(L.isDirectionalLight){let j=t.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let lt=L.shadow,q=e.get(L);q.shadowIntensity=lt.intensity,q.shadowBias=lt.bias,q.shadowNormalBias=lt.normalBias,q.shadowRadius=lt.radius,q.shadowMapSize=lt.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=L.shadow.matrix,b++}n.directional[p]=j,p++}else if(L.isSpotLight){let j=t.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(U).multiplyScalar(X),j.distance=Y,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,n.spot[_]=j;let lt=L.shadow;if(L.map&&(n.spotLightMap[x]=L.map,x++,lt.updateMatrices(L),L.castShadow&&M++),n.spotLightMatrix[_]=lt.matrix,L.castShadow){let q=e.get(L);q.shadowIntensity=lt.intensity,q.shadowBias=lt.bias,q.shadowNormalBias=lt.normalBias,q.shadowRadius=lt.radius,q.shadowMapSize=lt.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=K,y++}_++}else if(L.isRectAreaLight){let j=t.get(L);j.color.copy(U).multiplyScalar(X),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=j,m++}else if(L.isPointLight){let j=t.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),j.distance=L.distance,j.decay=L.decay,L.castShadow){let lt=L.shadow,q=e.get(L);q.shadowIntensity=lt.intensity,q.shadowBias=lt.bias,q.shadowNormalBias=lt.normalBias,q.shadowRadius=lt.radius,q.shadowMapSize=lt.mapSize,q.shadowCameraNear=lt.camera.near,q.shadowCameraFar=lt.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=L.shadow.matrix,A++}n.point[g]=j,g++}else if(L.isHemisphereLight){let j=t.get(L);j.skyColor.copy(L.color).multiplyScalar(X),j.groundColor.copy(L.groundColor).multiplyScalar(X),n.hemi[h]=j,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==h||C.numDirectionalShadows!==b||C.numPointShadows!==A||C.numSpotShadows!==y||C.numSpotMaps!==x||C.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=y+x-M,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=E,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=h,C.numDirectionalShadows=b,C.numPointShadows=A,C.numSpotShadows=y,C.numSpotMaps=x,C.numLightProbes=E,n.version=N0++)}function l(c,u){let d=0,f=0,p=0,g=0,_=0,m=u.matrixWorldInverse;for(let h=0,b=c.length;h<b;h++){let A=c[h];if(A.isDirectionalLight){let y=n.directional[d];y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(A.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(A.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(A.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(A.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),f++}else if(A.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function zu(i){let t=new O0(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function B0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new zu(i),t.set(s,[o])):r>=a.length?(o=new zu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var z0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k0=`uniform sampler2D shadow_pass;
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
}`;function V0(i,t,e){let n=new bs,s=new vt,r=new vt,a=new ie,o=new La({depthPacking:su}),l=new Da,c={},u=e.maxTextureSize,d={[$n]:De,[De]:$n,[We]:We},f=new Me({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:z0,fragmentShader:k0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new pe;g.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Xt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ql;let h=this.type;this.render=function(M,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;let S=i.getRenderTarget(),T=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),U=i.state;U.setBlending(wn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let X=h!==Nn&&this.type===Nn,Y=h===Nn&&this.type!==Nn;for(let K=0,j=M.length;K<j;K++){let lt=M[K],q=lt.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",lt,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let ut=q.getFrameExtents();if(s.multiply(ut),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ut.x),s.x=r.x*ut.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ut.y),s.y=r.y*ut.y,q.mapSize.y=r.y)),q.map===null||X===!0||Y===!0){let Mt=this.type!==Nn?{minFilter:$e,magFilter:$e}:{};q.map!==null&&q.map.dispose(),q.map=new Be(s.x,s.y,Mt),q.map.texture.name=lt.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let gt=q.getViewportCount();for(let Mt=0;Mt<gt;Mt++){let Gt=q.getViewport(Mt);a.set(r.x*Gt.x,r.y*Gt.y,r.x*Gt.z,r.y*Gt.w),U.viewport(a),q.updateMatrices(lt,Mt),n=q.getFrustum(),y(E,C,q.camera,lt,this.type)}q.isPointLightShadow!==!0&&this.type===Nn&&b(q,C),q.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(S,T,L)};function b(M,E){let C=t.update(_);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Be(s.x,s.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(E,null,C,f,_,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(E,null,C,p,_,null)}function A(M,E,C,S){let T=null,L=C.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(L!==void 0)T=L;else if(T=C.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let U=T.uuid,X=E.uuid,Y=c[U];Y===void 0&&(Y={},c[U]=Y);let K=Y[X];K===void 0&&(K=T.clone(),Y[X]=K,E.addEventListener("dispose",x)),T=K}if(T.visible=E.visible,T.wireframe=E.wireframe,S===Nn?T.side=E.shadowSide!==null?E.shadowSide:E.side:T.side=E.shadowSide!==null?E.shadowSide:d[E.side],T.alphaMap=E.alphaMap,T.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,T.map=E.map,T.clipShadows=E.clipShadows,T.clippingPlanes=E.clippingPlanes,T.clipIntersection=E.clipIntersection,T.displacementMap=E.displacementMap,T.displacementScale=E.displacementScale,T.displacementBias=E.displacementBias,T.wireframeLinewidth=E.wireframeLinewidth,T.linewidth=E.linewidth,C.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let U=i.properties.get(T);U.light=C}return T}function y(M,E,C,S,T){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&T===Nn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);let X=t.update(M),Y=M.material;if(Array.isArray(Y)){let K=X.groups;for(let j=0,lt=K.length;j<lt;j++){let q=K[j],ut=Y[q.materialIndex];if(ut&&ut.visible){let gt=A(M,ut,S,T);M.onBeforeShadow(i,M,E,C,X,gt,q),i.renderBufferDirect(C,null,X,gt,M,q),M.onAfterShadow(i,M,E,C,X,gt,q)}}}else if(Y.visible){let K=A(M,Y,S,T);M.onBeforeShadow(i,M,E,C,X,K,null),i.renderBufferDirect(C,null,X,K,M,null),M.onAfterShadow(i,M,E,C,X,K,null)}}let U=M.children;for(let X=0,Y=U.length;X<Y;X++)y(U[X],E,C,S,T)}function x(M){M.target.removeEventListener("dispose",x);for(let C in c){let S=c[C],T=M.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}var H0={[Xa]:qa,[$a]:ja,[Ya]:Ja,[Ui]:Za,[qa]:Xa,[ja]:$a,[Ja]:Ya,[Za]:Ui};function G0(i,t){function e(){let D=!1,ot=new ie,ht=null,yt=new ie(0,0,0,0);return{setMask:function(st){ht!==st&&!D&&(i.colorMask(st,st,st,st),ht=st)},setLocked:function(st){D=st},setClear:function(st,et,St,zt,he){he===!0&&(st*=zt,et*=zt,St*=zt),ot.set(st,et,St,zt),yt.equals(ot)===!1&&(i.clearColor(st,et,St,zt),yt.copy(ot))},reset:function(){D=!1,ht=null,yt.set(-1,0,0,0)}}}function n(){let D=!1,ot=!1,ht=null,yt=null,st=null;return{setReversed:function(et){if(ot!==et){let St=t.get("EXT_clip_control");et?St.clipControlEXT(St.LOWER_LEFT_EXT,St.ZERO_TO_ONE_EXT):St.clipControlEXT(St.LOWER_LEFT_EXT,St.NEGATIVE_ONE_TO_ONE_EXT),ot=et;let zt=st;st=null,this.setClear(zt)}},getReversed:function(){return ot},setTest:function(et){et?nt(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(et){ht!==et&&!D&&(i.depthMask(et),ht=et)},setFunc:function(et){if(ot&&(et=H0[et]),yt!==et){switch(et){case Xa:i.depthFunc(i.NEVER);break;case qa:i.depthFunc(i.ALWAYS);break;case $a:i.depthFunc(i.LESS);break;case Ui:i.depthFunc(i.LEQUAL);break;case Ya:i.depthFunc(i.EQUAL);break;case Za:i.depthFunc(i.GEQUAL);break;case ja:i.depthFunc(i.GREATER);break;case Ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=et}},setLocked:function(et){D=et},setClear:function(et){st!==et&&(ot&&(et=1-et),i.clearDepth(et),st=et)},reset:function(){D=!1,ht=null,yt=null,st=null,ot=!1}}}function s(){let D=!1,ot=null,ht=null,yt=null,st=null,et=null,St=null,zt=null,he=null;return{setTest:function(te){D||(te?nt(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(te){ot!==te&&!D&&(i.stencilMask(te),ot=te)},setFunc:function(te,zn,Pn){(ht!==te||yt!==zn||st!==Pn)&&(i.stencilFunc(te,zn,Pn),ht=te,yt=zn,st=Pn)},setOp:function(te,zn,Pn){(et!==te||St!==zn||zt!==Pn)&&(i.stencilOp(te,zn,Pn),et=te,St=zn,zt=Pn)},setLocked:function(te){D=te},setClear:function(te){he!==te&&(i.clearStencil(te),he=te)},reset:function(){D=!1,ot=null,ht=null,yt=null,st=null,et=null,St=null,zt=null,he=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,h=null,b=null,A=null,y=null,x=null,M=null,E=new Pt(0,0,0),C=0,S=!1,T=null,L=null,U=null,X=null,Y=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,lt=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(q)[1]),j=lt>=1):q.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),j=lt>=2);let ut=null,gt={},Mt=i.getParameter(i.SCISSOR_BOX),Gt=i.getParameter(i.VIEWPORT),re=new ie().fromArray(Mt),ce=new ie().fromArray(Gt);function jt(D,ot,ht,yt){let st=new Uint8Array(4),et=i.createTexture();i.bindTexture(D,et),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let St=0;St<ht;St++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,st):i.texImage2D(ot+St,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,st);return et}let tt={};tt[i.TEXTURE_2D]=jt(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=jt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=jt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=jt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(i.DEPTH_TEST),a.setFunc(Ui),B(!1),z(Kl),nt(i.CULL_FACE),V(wn);function nt(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function _t(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Ut(D,ot){return d[D]!==ot?(i.bindFramebuffer(D,ot),d[D]=ot,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ot),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function wt(D,ot){let ht=p,yt=!1;if(D){ht=f.get(ot),ht===void 0&&(ht=[],f.set(ot,ht));let st=D.textures;if(ht.length!==st.length||ht[0]!==i.COLOR_ATTACHMENT0){for(let et=0,St=st.length;et<St;et++)ht[et]=i.COLOR_ATTACHMENT0+et;ht.length=st.length,yt=!0}}else ht[0]!==i.BACK&&(ht[0]=i.BACK,yt=!0);yt&&i.drawBuffers(ht)}function qt(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let xe={[ui]:i.FUNC_ADD,[Oh]:i.FUNC_SUBTRACT,[Bh]:i.FUNC_REVERSE_SUBTRACT};xe[zh]=i.MIN,xe[kh]=i.MAX;let P={[Vh]:i.ZERO,[Hh]:i.ONE,[Gh]:i.SRC_COLOR,[va]:i.SRC_ALPHA,[Zh]:i.SRC_ALPHA_SATURATE,[$h]:i.DST_COLOR,[Xh]:i.DST_ALPHA,[Wh]:i.ONE_MINUS_SRC_COLOR,[ya]:i.ONE_MINUS_SRC_ALPHA,[Yh]:i.ONE_MINUS_DST_COLOR,[qh]:i.ONE_MINUS_DST_ALPHA,[jh]:i.CONSTANT_COLOR,[Jh]:i.ONE_MINUS_CONSTANT_COLOR,[Kh]:i.CONSTANT_ALPHA,[Qh]:i.ONE_MINUS_CONSTANT_ALPHA};function V(D,ot,ht,yt,st,et,St,zt,he,te){if(D===wn){_===!0&&(_t(i.BLEND),_=!1);return}if(_===!1&&(nt(i.BLEND),_=!0),D!==Fh){if(D!==m||te!==S){if((h!==ui||y!==ui)&&(i.blendEquation(i.FUNC_ADD),h=ui,y=ui),te)switch(D){case Di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kn:i.blendFunc(i.ONE,i.ONE);break;case tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ec:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case tc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ec:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,A=null,x=null,M=null,E.set(0,0,0),C=0,m=D,S=te}return}st=st||ot,et=et||ht,St=St||yt,(ot!==h||st!==y)&&(i.blendEquationSeparate(xe[ot],xe[st]),h=ot,y=st),(ht!==b||yt!==A||et!==x||St!==M)&&(i.blendFuncSeparate(P[ht],P[yt],P[et],P[St]),b=ht,A=yt,x=et,M=St),(zt.equals(E)===!1||he!==C)&&(i.blendColor(zt.r,zt.g,zt.b,he),E.copy(zt),C=he),m=D,S=!1}function N(D,ot){D.side===We?_t(i.CULL_FACE):nt(i.CULL_FACE);let ht=D.side===De;ot&&(ht=!ht),B(ht),D.blending===Di&&D.transparent===!1?V(wn):V(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let yt=D.stencilWrite;o.setTest(yt),yt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),H(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function B(D){T!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),T=D)}function z(D){D!==Uh?(nt(i.CULL_FACE),D!==L&&(D===Kl?i.cullFace(i.BACK):D===Nh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),L=D}function $(D){D!==U&&(j&&i.lineWidth(D),U=D)}function H(D,ot,ht){D?(nt(i.POLYGON_OFFSET_FILL),(X!==ot||Y!==ht)&&(i.polygonOffset(ot,ht),X=ot,Y=ht)):_t(i.POLYGON_OFFSET_FILL)}function Q(D){D?nt(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function Ft(D){D===void 0&&(D=i.TEXTURE0+K-1),ut!==D&&(i.activeTexture(D),ut=D)}function Qt(D,ot,ht){ht===void 0&&(ut===null?ht=i.TEXTURE0+K-1:ht=ut);let yt=gt[ht];yt===void 0&&(yt={type:void 0,texture:void 0},gt[ht]=yt),(yt.type!==D||yt.texture!==ot)&&(ut!==ht&&(i.activeTexture(ht),ut=ht),i.bindTexture(D,ot||tt[D]),yt.type=D,yt.texture=ot)}function R(){let D=gt[ut];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(D){re.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),re.copy(D))}function Nt(D){ce.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ce.copy(D))}function At(D,ot){let ht=c.get(ot);ht===void 0&&(ht=new WeakMap,c.set(ot,ht));let yt=ht.get(D);yt===void 0&&(yt=i.getUniformBlockIndex(ot,D.name),ht.set(D,yt))}function ft(D,ot){let yt=c.get(ot).get(D);l.get(ot)!==yt&&(i.uniformBlockBinding(ot,yt,D.__bindingPointIndex),l.set(ot,yt))}function Vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ut=null,gt={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,h=null,b=null,A=null,y=null,x=null,M=null,E=new Pt(0,0,0),C=0,S=!1,T=null,L=null,U=null,X=null,Y=null,re.set(0,0,i.canvas.width,i.canvas.height),ce.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:nt,disable:_t,bindFramebuffer:Ut,drawBuffers:wt,useProgram:qt,setBlending:V,setMaterial:N,setFlipSided:B,setCullFace:z,setLineWidth:$,setPolygonOffset:H,setScissorTest:Q,activeTexture:Ft,bindTexture:Qt,unbindTexture:R,compressedTexImage2D:v,compressedTexImage3D:k,texImage2D:Et,texImage3D:at,updateUBOMapping:At,uniformBlockBinding:ft,texStorage2D:ct,texStorage3D:Tt,texSubImage2D:J,texSubImage3D:it,compressedTexSubImage2D:Z,compressedTexSubImage3D:Ct,scissor:mt,viewport:Nt,reset:Vt}}function W0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,v){return p?new OffscreenCanvas(R,v):rr("canvas")}function _(R,v,k){let J=1,it=Qt(R);if((it.width>k||it.height>k)&&(J=k/Math.max(it.width,it.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Z=Math.floor(J*it.width),Ct=Math.floor(J*it.height);d===void 0&&(d=g(Z,Ct));let ct=v?g(Z,Ct):d;return ct.width=Z,ct.height=Ct,ct.getContext("2d").drawImage(R,0,0,Z,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+Z+"x"+Ct+")."),ct}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),R;return R}function m(R){return R.generateMipmaps}function h(R){i.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(R,v,k,J,it=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=v;if(v===i.RED&&(k===i.FLOAT&&(Z=i.R32F),k===i.HALF_FLOAT&&(Z=i.R16F),k===i.UNSIGNED_BYTE&&(Z=i.R8)),v===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.R8UI),k===i.UNSIGNED_SHORT&&(Z=i.R16UI),k===i.UNSIGNED_INT&&(Z=i.R32UI),k===i.BYTE&&(Z=i.R8I),k===i.SHORT&&(Z=i.R16I),k===i.INT&&(Z=i.R32I)),v===i.RG&&(k===i.FLOAT&&(Z=i.RG32F),k===i.HALF_FLOAT&&(Z=i.RG16F),k===i.UNSIGNED_BYTE&&(Z=i.RG8)),v===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RG8UI),k===i.UNSIGNED_SHORT&&(Z=i.RG16UI),k===i.UNSIGNED_INT&&(Z=i.RG32UI),k===i.BYTE&&(Z=i.RG8I),k===i.SHORT&&(Z=i.RG16I),k===i.INT&&(Z=i.RG32I)),v===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),k===i.UNSIGNED_INT&&(Z=i.RGB32UI),k===i.BYTE&&(Z=i.RGB8I),k===i.SHORT&&(Z=i.RGB16I),k===i.INT&&(Z=i.RGB32I)),v===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),k===i.UNSIGNED_INT&&(Z=i.RGBA32UI),k===i.BYTE&&(Z=i.RGBA8I),k===i.SHORT&&(Z=i.RGBA16I),k===i.INT&&(Z=i.RGBA32I)),v===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),v===i.RGBA){let Ct=it?ir:Yt.getTransfer(J);k===i.FLOAT&&(Z=i.RGBA32F),k===i.HALF_FLOAT&&(Z=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Z=Ct===Kt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function y(R,v){let k;return R?v===null||v===vi||v===Cs?k=i.DEPTH24_STENCIL8:v===An?k=i.DEPTH32F_STENCIL8:v===As&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===vi||v===Cs?k=i.DEPTH_COMPONENT24:v===An?k=i.DEPTH_COMPONENT32F:v===As&&(k=i.DEPTH_COMPONENT16),k}function x(R,v){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==$e&&R.minFilter!==Sn?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function M(R){let v=R.target;v.removeEventListener("dispose",M),C(v),v.isVideoTexture&&u.delete(v)}function E(R){let v=R.target;v.removeEventListener("dispose",E),T(v)}function C(R){let v=n.get(R);if(v.__webglInit===void 0)return;let k=R.source,J=f.get(k);if(J){let it=J[v.__cacheKey];it.usedTimes--,it.usedTimes===0&&S(R),Object.keys(J).length===0&&f.delete(k)}n.remove(R)}function S(R){let v=n.get(R);i.deleteTexture(v.__webglTexture);let k=R.source,J=f.get(k);delete J[v.__cacheKey],a.memory.textures--}function T(R){let v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let it=0;it<v.__webglFramebuffer[J].length;it++)i.deleteFramebuffer(v.__webglFramebuffer[J][it]);else i.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)i.deleteFramebuffer(v.__webglFramebuffer[J]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let k=R.textures;for(let J=0,it=k.length;J<it;J++){let Z=n.get(k[J]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(k[J])}n.remove(R)}let L=0;function U(){L=0}function X(){let R=L;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),L+=1,R}function Y(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function K(R,v){let k=n.get(R);if(R.isVideoTexture&&Q(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){let J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(k,R,v);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+v)}function j(R,v){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){tt(k,R,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+v)}function lt(R,v){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){tt(k,R,v);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+v)}function q(R,v){let k=n.get(R);if(R.version>0&&k.__version!==R.version){nt(k,R,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+v)}let ut={[Ma]:i.REPEAT,[hi]:i.CLAMP_TO_EDGE,[ba]:i.MIRRORED_REPEAT},gt={[$e]:i.NEAREST,[nu]:i.NEAREST_MIPMAP_NEAREST,[Ar]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[oo]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},Mt={[au]:i.NEVER,[du]:i.ALWAYS,[ou]:i.LESS,[hc]:i.LEQUAL,[lu]:i.EQUAL,[uu]:i.GEQUAL,[cu]:i.GREATER,[hu]:i.NOTEQUAL};function Gt(R,v){if(v.type===An&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Sn||v.magFilter===oo||v.magFilter===Ar||v.magFilter===xi||v.minFilter===Sn||v.minFilter===oo||v.minFilter===Ar||v.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ut[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ut[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ut[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,gt[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,gt[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Mt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===$e||v.minFilter!==Ar&&v.minFilter!==xi||v.type===An&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function re(R,v){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",M));let J=v.source,it=f.get(J);it===void 0&&(it={},f.set(J,it));let Z=Y(v);if(Z!==R.__cacheKey){it[Z]===void 0&&(it[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),it[Z].usedTimes++;let Ct=it[R.__cacheKey];Ct!==void 0&&(it[R.__cacheKey].usedTimes--,Ct.usedTimes===0&&S(v)),R.__cacheKey=Z,R.__webglTexture=it[Z].texture}return k}function ce(R,v,k){return Math.floor(Math.floor(R/k)/v)}function jt(R,v,k,J){let Z=R.updateRanges;if(Z.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,k,J,v.data);else{Z.sort((at,mt)=>at.start-mt.start);let Ct=0;for(let at=1;at<Z.length;at++){let mt=Z[Ct],Nt=Z[at],At=mt.start+mt.count,ft=ce(Nt.start,v.width,4),Vt=ce(mt.start,v.width,4);Nt.start<=At+1&&ft===Vt&&ce(Nt.start+Nt.count-1,v.width,4)===ft?mt.count=Math.max(mt.count,Nt.start+Nt.count-mt.start):(++Ct,Z[Ct]=Nt)}Z.length=Ct+1;let ct=i.getParameter(i.UNPACK_ROW_LENGTH),Tt=i.getParameter(i.UNPACK_SKIP_PIXELS),Et=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let at=0,mt=Z.length;at<mt;at++){let Nt=Z[at],At=Math.floor(Nt.start/4),ft=Math.ceil(Nt.count/4),Vt=At%v.width,D=Math.floor(At/v.width),ot=ft,ht=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Vt),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,Vt,D,ot,ht,k,J,v.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ct),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Tt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Et)}}function tt(R,v,k){let J=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=i.TEXTURE_3D);let it=re(R,v),Z=v.source;e.bindTexture(J,R.__webglTexture,i.TEXTURE0+k);let Ct=n.get(Z);if(Z.version!==Ct.__version||it===!0){e.activeTexture(i.TEXTURE0+k);let ct=Yt.getPrimaries(Yt.workingColorSpace),Tt=v.colorSpace===ti?null:Yt.getPrimaries(v.colorSpace),Et=v.colorSpace===ti||ct===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let at=_(v.image,!1,s.maxTextureSize);at=Ft(v,at);let mt=r.convert(v.format,v.colorSpace),Nt=r.convert(v.type),At=A(v.internalFormat,mt,Nt,v.colorSpace,v.isVideoTexture);Gt(J,v);let ft,Vt=v.mipmaps,D=v.isVideoTexture!==!0,ot=Ct.__version===void 0||it===!0,ht=Z.dataReady,yt=x(v,at);if(v.isDepthTexture)At=y(v.format===Rs,v.type),ot&&(D?e.texStorage2D(i.TEXTURE_2D,1,At,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,At,at.width,at.height,0,mt,Nt,null));else if(v.isDataTexture)if(Vt.length>0){D&&ot&&e.texStorage2D(i.TEXTURE_2D,yt,At,Vt[0].width,Vt[0].height);for(let st=0,et=Vt.length;st<et;st++)ft=Vt[st],D?ht&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ft.width,ft.height,mt,Nt,ft.data):e.texImage2D(i.TEXTURE_2D,st,At,ft.width,ft.height,0,mt,Nt,ft.data);v.generateMipmaps=!1}else D?(ot&&e.texStorage2D(i.TEXTURE_2D,yt,At,at.width,at.height),ht&&jt(v,at,mt,Nt)):e.texImage2D(i.TEXTURE_2D,0,At,at.width,at.height,0,mt,Nt,at.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){D&&ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,At,Vt[0].width,Vt[0].height,at.depth);for(let st=0,et=Vt.length;st<et;st++)if(ft=Vt[st],v.format!==mn)if(mt!==null)if(D){if(ht)if(v.layerUpdates.size>0){let St=_c(ft.width,ft.height,v.format,v.type);for(let zt of v.layerUpdates){let he=ft.data.subarray(zt*St/ft.data.BYTES_PER_ELEMENT,(zt+1)*St/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,zt,ft.width,ft.height,1,mt,he)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,ft.width,ft.height,at.depth,mt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,At,ft.width,ft.height,at.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ht&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,ft.width,ft.height,at.depth,mt,Nt,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,At,ft.width,ft.height,at.depth,0,mt,Nt,ft.data)}else{D&&ot&&e.texStorage2D(i.TEXTURE_2D,yt,At,Vt[0].width,Vt[0].height);for(let st=0,et=Vt.length;st<et;st++)ft=Vt[st],v.format!==mn?mt!==null?D?ht&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,ft.width,ft.height,mt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,st,At,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ht&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ft.width,ft.height,mt,Nt,ft.data):e.texImage2D(i.TEXTURE_2D,st,At,ft.width,ft.height,0,mt,Nt,ft.data)}else if(v.isDataArrayTexture)if(D){if(ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,At,at.width,at.height,at.depth),ht)if(v.layerUpdates.size>0){let st=_c(at.width,at.height,v.format,v.type);for(let et of v.layerUpdates){let St=at.data.subarray(et*st/at.data.BYTES_PER_ELEMENT,(et+1)*st/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,at.width,at.height,1,mt,Nt,St)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,mt,Nt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,at.width,at.height,at.depth,0,mt,Nt,at.data);else if(v.isData3DTexture)D?(ot&&e.texStorage3D(i.TEXTURE_3D,yt,At,at.width,at.height,at.depth),ht&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,mt,Nt,at.data)):e.texImage3D(i.TEXTURE_3D,0,At,at.width,at.height,at.depth,0,mt,Nt,at.data);else if(v.isFramebufferTexture){if(ot)if(D)e.texStorage2D(i.TEXTURE_2D,yt,At,at.width,at.height);else{let st=at.width,et=at.height;for(let St=0;St<yt;St++)e.texImage2D(i.TEXTURE_2D,St,At,st,et,0,mt,Nt,null),st>>=1,et>>=1}}else if(Vt.length>0){if(D&&ot){let st=Qt(Vt[0]);e.texStorage2D(i.TEXTURE_2D,yt,At,st.width,st.height)}for(let st=0,et=Vt.length;st<et;st++)ft=Vt[st],D?ht&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,mt,Nt,ft):e.texImage2D(i.TEXTURE_2D,st,At,mt,Nt,ft);v.generateMipmaps=!1}else if(D){if(ot){let st=Qt(at);e.texStorage2D(i.TEXTURE_2D,yt,At,st.width,st.height)}ht&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Nt,at)}else e.texImage2D(i.TEXTURE_2D,0,At,mt,Nt,at);m(v)&&h(J),Ct.__version=Z.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function nt(R,v,k){if(v.image.length!==6)return;let J=re(R,v),it=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+k);let Z=n.get(it);if(it.version!==Z.__version||J===!0){e.activeTexture(i.TEXTURE0+k);let Ct=Yt.getPrimaries(Yt.workingColorSpace),ct=v.colorSpace===ti?null:Yt.getPrimaries(v.colorSpace),Tt=v.colorSpace===ti||Ct===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let Et=v.isCompressedTexture||v.image[0].isCompressedTexture,at=v.image[0]&&v.image[0].isDataTexture,mt=[];for(let et=0;et<6;et++)!Et&&!at?mt[et]=_(v.image[et],!0,s.maxCubemapSize):mt[et]=at?v.image[et].image:v.image[et],mt[et]=Ft(v,mt[et]);let Nt=mt[0],At=r.convert(v.format,v.colorSpace),ft=r.convert(v.type),Vt=A(v.internalFormat,At,ft,v.colorSpace),D=v.isVideoTexture!==!0,ot=Z.__version===void 0||J===!0,ht=it.dataReady,yt=x(v,Nt);Gt(i.TEXTURE_CUBE_MAP,v);let st;if(Et){D&&ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Vt,Nt.width,Nt.height);for(let et=0;et<6;et++){st=mt[et].mipmaps;for(let St=0;St<st.length;St++){let zt=st[St];v.format!==mn?At!==null?D?ht&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,St,0,0,zt.width,zt.height,At,zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,St,Vt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,St,0,0,zt.width,zt.height,At,ft,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,St,Vt,zt.width,zt.height,0,At,ft,zt.data)}}}else{if(st=v.mipmaps,D&&ot){st.length>0&&yt++;let et=Qt(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Vt,et.width,et.height)}for(let et=0;et<6;et++)if(at){D?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,mt[et].width,mt[et].height,At,ft,mt[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Vt,mt[et].width,mt[et].height,0,At,ft,mt[et].data);for(let St=0;St<st.length;St++){let he=st[St].image[et].image;D?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,St+1,0,0,he.width,he.height,At,ft,he.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,St+1,Vt,he.width,he.height,0,At,ft,he.data)}}else{D?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,At,ft,mt[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Vt,At,ft,mt[et]);for(let St=0;St<st.length;St++){let zt=st[St];D?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,St+1,0,0,At,ft,zt.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,St+1,Vt,At,ft,zt.image[et])}}}m(v)&&h(i.TEXTURE_CUBE_MAP),Z.__version=it.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function _t(R,v,k,J,it,Z){let Ct=r.convert(k.format,k.colorSpace),ct=r.convert(k.type),Tt=A(k.internalFormat,Ct,ct,k.colorSpace),Et=n.get(v),at=n.get(k);if(at.__renderTarget=v,!Et.__hasExternalTextures){let mt=Math.max(1,v.width>>Z),Nt=Math.max(1,v.height>>Z);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,Z,Tt,mt,Nt,v.depth,0,Ct,ct,null):e.texImage2D(it,Z,Tt,mt,Nt,0,Ct,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),H(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,it,at.__webglTexture,0,$(v)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,it,at.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(R,v,k){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){let J=v.depthTexture,it=J&&J.isDepthTexture?J.type:null,Z=y(v.stencilBuffer,it),Ct=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=$(v);H(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,Z,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,Z,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Z,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,R)}else{let J=v.textures;for(let it=0;it<J.length;it++){let Z=J[it],Ct=r.convert(Z.format,Z.colorSpace),ct=r.convert(Z.type),Tt=A(Z.internalFormat,Ct,ct,Z.colorSpace),Et=$(v);k&&H(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,Tt,v.width,v.height):H(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,Tt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(R,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(v.depthTexture);J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K(v.depthTexture,0);let it=J.__webglTexture,Z=$(v);if(v.depthTexture.format===gs)H(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(v.depthTexture.format===Rs)H(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function qt(R){let v=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let J=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),J){let it=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,J.removeEventListener("dispose",it)};J.addEventListener("dispose",it),v.__depthDisposeCallback=it}v.__boundDepthTexture=J}if(R.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");let J=R.texture.mipmaps;J&&J.length>0?wt(v.__webglFramebuffer[0],R):wt(v.__webglFramebuffer,R)}else if(k){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]===void 0)v.__webglDepthbuffer[J]=i.createRenderbuffer(),Ut(v.__webglDepthbuffer[J],R,!1);else{let it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,Z)}}else{let J=R.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ut(v.__webglDepthbuffer,R,!1);else{let it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,Z)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(R,v,k){let J=n.get(R);v!==void 0&&_t(J.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&qt(R)}function P(R){let v=R.texture,k=n.get(R),J=n.get(v);R.addEventListener("dispose",E);let it=R.textures,Z=R.isWebGLCubeRenderTarget===!0,Ct=it.length>1;if(Ct||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=v.version,a.memory.textures++),Z){k.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[ct]=[];for(let Tt=0;Tt<v.mipmaps.length;Tt++)k.__webglFramebuffer[ct][Tt]=i.createFramebuffer()}else k.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let ct=0;ct<v.mipmaps.length;ct++)k.__webglFramebuffer[ct]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let ct=0,Tt=it.length;ct<Tt;ct++){let Et=n.get(it[ct]);Et.__webglTexture===void 0&&(Et.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&H(R)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ct=0;ct<it.length;ct++){let Tt=it[ct];k.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ct]);let Et=r.convert(Tt.format,Tt.colorSpace),at=r.convert(Tt.type),mt=A(Tt.internalFormat,Et,at,Tt.colorSpace,R.isXRRenderTarget===!0),Nt=$(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,mt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,k.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Ut(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Gt(i.TEXTURE_CUBE_MAP,v);for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0)for(let Tt=0;Tt<v.mipmaps.length;Tt++)_t(k.__webglFramebuffer[ct][Tt],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt);else _t(k.__webglFramebuffer[ct],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(v)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ct=0,Tt=it.length;ct<Tt;ct++){let Et=it[ct],at=n.get(Et),mt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(mt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,at.__webglTexture),Gt(mt,Et),_t(k.__webglFramebuffer,R,Et,i.COLOR_ATTACHMENT0+ct,mt,0),m(Et)&&h(mt)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ct=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,J.__webglTexture),Gt(ct,v),v.mipmaps&&v.mipmaps.length>0)for(let Tt=0;Tt<v.mipmaps.length;Tt++)_t(k.__webglFramebuffer[Tt],R,v,i.COLOR_ATTACHMENT0,ct,Tt);else _t(k.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,ct,0);m(v)&&h(ct),e.unbindTexture()}R.depthBuffer&&qt(R)}function V(R){let v=R.textures;for(let k=0,J=v.length;k<J;k++){let it=v[k];if(m(it)){let Z=b(R),Ct=n.get(it).__webglTexture;e.bindTexture(Z,Ct),h(Z),e.unbindTexture()}}}let N=[],B=[];function z(R){if(R.samples>0){if(H(R)===!1){let v=R.textures,k=R.width,J=R.height,it=i.COLOR_BUFFER_BIT,Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(R),ct=v.length>1;if(ct)for(let Et=0;Et<v.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);let Tt=R.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Et=0;Et<v.length;Et++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Et]);let at=n.get(v[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,at,0)}i.blitFramebuffer(0,0,k,J,0,0,k,J,it,i.NEAREST),l===!0&&(N.length=0,B.length=0,N.push(i.COLOR_ATTACHMENT0+Et),R.depthBuffer&&R.resolveDepthBuffer===!1&&(N.push(Z),B.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,N))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let Et=0;Et<v.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Et]);let at=n.get(v[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,at,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function $(R){return Math.min(s.maxSamples,R.samples)}function H(R){let v=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Q(R){let v=a.render.frame;u.get(R)!==v&&(u.set(R,v),R.update())}function Ft(R,v){let k=R.colorSpace,J=R.format,it=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Ni&&k!==ti&&(Yt.getTransfer(k)===Kt?(J!==mn||it!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function Qt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=U,this.setTexture2D=K,this.setTexture2DArray=j,this.setTexture3D=lt,this.setTextureCube=q,this.rebindTextures=xe,this.setupRenderTarget=P,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=H}function X0(i,t){function e(n,s=ti){let r,a=Yt.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===co)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ho)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ac)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ic)return i.BYTE;if(n===sc)return i.SHORT;if(n===As)return i.UNSIGNED_SHORT;if(n===lo)return i.INT;if(n===vi)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===pn)return i.HALF_FLOAT;if(n===oc)return i.ALPHA;if(n===lc)return i.RGB;if(n===mn)return i.RGBA;if(n===gs)return i.DEPTH_COMPONENT;if(n===Rs)return i.DEPTH_STENCIL;if(n===uo)return i.RED;if(n===fo)return i.RED_INTEGER;if(n===cc)return i.RG;if(n===po)return i.RG_INTEGER;if(n===mo)return i.RGBA_INTEGER;if(n===Cr||n===Rr||n===Pr||n===Ir)if(a===Kt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===go||n===_o||n===xo||n===vo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===go)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yo||n===Mo||n===bo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yo||n===Mo)return a===Kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bo)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===So||n===To||n===wo||n===Eo||n===Ao||n===Co||n===Ro||n===Po||n===Io||n===Lo||n===Do||n===Uo||n===No||n===Fo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===So)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===To)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wo)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Eo)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ao)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Co)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ro)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Po)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Io)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lo)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Do)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uo)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===No)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fo)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oo||n===Bo||n===zo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Oo)return a===Kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ko||n===Vo||n===Ho||n===Go)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ko)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ho)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Go)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$0=`
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

}`,Pc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new gr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Me({vertexShader:q0,fragmentShader:$0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xt(new tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ic=class extends In{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,g=null,_=typeof XRWebGLBinding<"u",m=new Pc,h={},b=e.getContextAttributes(),A=null,y=null,x=[],M=[],E=new vt,C=null,S=new Te;S.viewport=new ie;let T=new Te;T.viewport=new ie;let L=[S,T],U=new Wa,X=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let nt=x[tt];return nt===void 0&&(nt=new Ms,x[tt]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(tt){let nt=x[tt];return nt===void 0&&(nt=new Ms,x[tt]=nt),nt.getGripSpace()},this.getHand=function(tt){let nt=x[tt];return nt===void 0&&(nt=new Ms,x[tt]=nt),nt.getHandSpace()};function K(tt){let nt=M.indexOf(tt.inputSource);if(nt===-1)return;let _t=x[nt];_t!==void 0&&(_t.update(tt.inputSource,tt.frame,c||a),_t.dispatchEvent({type:tt.type,data:tt.inputSource}))}function j(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",lt);for(let tt=0;tt<x.length;tt++){let nt=M[tt];nt!==null&&(M[tt]=null,x[tt].disconnect(nt))}X=null,Y=null,m.reset();for(let tt in h)delete h[tt];t.setRenderTarget(A),p=null,f=null,d=null,s=null,y=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){o=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",j),s.addEventListener("inputsourceschange",lt),b.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Ut=null,wt=null;b.depth&&(wt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=b.stencil?Rs:gs,Ut=b.stencil?Cs:vi);let qt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(qt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Be(f.textureWidth,f.textureHeight,{format:mn,type:En,depthTexture:new mr(f.textureWidth,f.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let _t={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Be(p.framebufferWidth,p.framebufferHeight,{format:mn,type:En,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function lt(tt){for(let nt=0;nt<tt.removed.length;nt++){let _t=tt.removed[nt],Ut=M.indexOf(_t);Ut>=0&&(M[Ut]=null,x[Ut].disconnect(_t))}for(let nt=0;nt<tt.added.length;nt++){let _t=tt.added[nt],Ut=M.indexOf(_t);if(Ut===-1){for(let qt=0;qt<x.length;qt++)if(qt>=M.length){M.push(_t),Ut=qt;break}else if(M[qt]===null){M[qt]=_t,Ut=qt;break}if(Ut===-1)break}let wt=x[Ut];wt&&wt.connect(_t)}}let q=new I,ut=new I;function gt(tt,nt,_t){q.setFromMatrixPosition(nt.matrixWorld),ut.setFromMatrixPosition(_t.matrixWorld);let Ut=q.distanceTo(ut),wt=nt.projectionMatrix.elements,qt=_t.projectionMatrix.elements,xe=wt[14]/(wt[10]-1),P=wt[14]/(wt[10]+1),V=(wt[9]+1)/wt[5],N=(wt[9]-1)/wt[5],B=(wt[8]-1)/wt[0],z=(qt[8]+1)/qt[0],$=xe*B,H=xe*z,Q=Ut/(-B+z),Ft=Q*-B;if(nt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Ft),tt.translateZ(Q),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),wt[10]===-1)tt.projectionMatrix.copy(nt.projectionMatrix),tt.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let Qt=xe+Q,R=P+Q,v=$-Ft,k=H+(Ut-Ft),J=V*P/R*Qt,it=N*P/R*Qt;tt.projectionMatrix.makePerspective(v,k,J,it,Qt,R),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function Mt(tt,nt){nt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(nt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let nt=tt.near,_t=tt.far;m.texture!==null&&(m.depthNear>0&&(nt=m.depthNear),m.depthFar>0&&(_t=m.depthFar)),U.near=T.near=S.near=nt,U.far=T.far=S.far=_t,(X!==U.near||Y!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),X=U.near,Y=U.far),U.layers.mask=tt.layers.mask|6,S.layers.mask=U.layers.mask&3,T.layers.mask=U.layers.mask&5;let Ut=tt.parent,wt=U.cameras;Mt(U,Ut);for(let qt=0;qt<wt.length;qt++)Mt(wt[qt],Ut);wt.length===2?gt(U,S,T):U.projectionMatrix.copy(S.projectionMatrix),Gt(tt,U,Ut)};function Gt(tt,nt,_t){_t===null?tt.matrix.copy(nt.matrixWorld):(tt.matrix.copy(_t.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(nt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(nt.projectionMatrix),tt.projectionMatrixInverse.copy(nt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=_s*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(tt){l=tt,f!==null&&(f.fixedFoveation=tt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=tt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(tt){return h[tt]};let re=null;function ce(tt,nt){if(u=nt.getViewerPose(c||a),g=nt,u!==null){let _t=u.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Ut=!1;_t.length!==U.cameras.length&&(U.cameras.length=0,Ut=!0);for(let P=0;P<_t.length;P++){let V=_t[P],N=null;if(p!==null)N=p.getViewport(V);else{let z=d.getViewSubImage(f,V);N=z.viewport,P===0&&(t.setRenderTargetTextures(y,z.colorTexture,z.depthStencilTexture),t.setRenderTarget(y))}let B=L[P];B===void 0&&(B=new Te,B.layers.enable(P),B.viewport=new ie,L[P]=B),B.matrix.fromArray(V.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(V.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(N.x,N.y,N.width,N.height),P===0&&(U.matrix.copy(B.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ut===!0&&U.cameras.push(B)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let P=d.getDepthInformation(_t[0]);P&&P.isValid&&P.texture&&m.init(P,s.renderState)}if(wt&&wt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let P=0;P<_t.length;P++){let V=_t[P].camera;if(V){let N=h[V];N||(N=new gr,h[V]=N);let B=d.getCameraImage(V);N.sourceTexture=B}}}}for(let _t=0;_t<x.length;_t++){let Ut=M[_t],wt=x[_t];Ut!==null&&wt!==void 0&&wt.update(Ut,nt,c||a)}re&&re(tt,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}let jt=new ku;jt.setAnimationLoop(ce),this.setAnimationLoop=function(tt){re=tt},this.dispose=function(){}}},$i=new dn,Y0=new ee;function Z0(i,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,pc(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,b,A,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),d(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(r(m,h),g(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),_(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,b,A):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===De&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===De&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let b=t.get(h),A=b.envMap,y=b.envMapRotation;A&&(m.envMap.value=A,$i.copy(y),$i.x*=-1,$i.y*=-1,$i.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),m.envMapRotation.value.setFromMatrix4(Y0.makeRotationFromEuler($i)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,b,A){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*b,m.scale.value=A*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,b){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===De&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){let b=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function j0(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,A){let y=A.program;n.uniformBlockBinding(b,y)}function c(b,A){let y=s[b.id];y===void 0&&(g(b),y=u(b),s[b.id]=y,b.addEventListener("dispose",m));let x=A.program;n.updateUBOMapping(b,x);let M=t.render.frame;r[b.id]!==M&&(f(b),r[b.id]=M)}function u(b){let A=d();b.__bindingPointIndex=A;let y=i.createBuffer(),x=b.__size,M=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,x,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,y),y}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let A=s[b.id],y=b.uniforms,x=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let M=0,E=y.length;M<E;M++){let C=Array.isArray(y[M])?y[M]:[y[M]];for(let S=0,T=C.length;S<T;S++){let L=C[S];if(p(L,M,S,x)===!0){let U=L.__offset,X=Array.isArray(L.value)?L.value:[L.value],Y=0;for(let K=0;K<X.length;K++){let j=X[K],lt=_(j);typeof j=="number"||typeof j=="boolean"?(L.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,U+Y,L.__data)):j.isMatrix3?(L.__data[0]=j.elements[0],L.__data[1]=j.elements[1],L.__data[2]=j.elements[2],L.__data[3]=0,L.__data[4]=j.elements[3],L.__data[5]=j.elements[4],L.__data[6]=j.elements[5],L.__data[7]=0,L.__data[8]=j.elements[6],L.__data[9]=j.elements[7],L.__data[10]=j.elements[8],L.__data[11]=0):(j.toArray(L.__data,Y),Y+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,A,y,x){let M=b.value,E=A+"_"+y;if(x[E]===void 0)return typeof M=="number"||typeof M=="boolean"?x[E]=M:x[E]=M.clone(),!0;{let C=x[E];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return x[E]=M,!0}else if(C.equals(M)===!1)return C.copy(M),!0}return!1}function g(b){let A=b.uniforms,y=0,x=16;for(let E=0,C=A.length;E<C;E++){let S=Array.isArray(A[E])?A[E]:[A[E]];for(let T=0,L=S.length;T<L;T++){let U=S[T],X=Array.isArray(U.value)?U.value:[U.value];for(let Y=0,K=X.length;Y<K;Y++){let j=X[Y],lt=_(j),q=y%x,ut=q%lt.boundary,gt=q+ut;y+=ut,gt!==0&&x-gt<lt.storage&&(y+=x-gt),U.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=lt.storage}}}let M=y%x;return M>0&&(y+=x-M),b.__size=y,b.__cache={},this}function _(b){let A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=48,A.storage=48):b.isMatrix4?(A.boundary=64,A.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),A}function m(b){let A=b.target;A.removeEventListener("dispose",m);let y=a.indexOf(A.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function h(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}var Us=class{constructor(t={}){let{canvas:e=fu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),_=new Int32Array(4),m=null,h=null,b=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,x=!1;this._outputColorSpace=Se;let M=0,E=0,C=null,S=-1,T=null,L=new ie,U=new ie,X=null,Y=new Pt(0),K=0,j=e.width,lt=e.height,q=1,ut=null,gt=null,Mt=new ie(0,0,j,lt),Gt=new ie(0,0,j,lt),re=!1,ce=new bs,jt=!1,tt=!1,nt=new ee,_t=new I,Ut=new ie,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function xe(){return C===null?q:1}let P=n;function V(w,F){return e.getContext(w,F)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",st,!1),P===null){let F="webgl2";if(P=V(F,w),P===null)throw V(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let N,B,z,$,H,Q,Ft,Qt,R,v,k,J,it,Z,Ct,ct,Tt,Et,at,mt,Nt,At,ft,Vt;function D(){N=new pg(P),N.init(),At=new X0(P,N),B=new og(P,N,t,At),z=new G0(P,N),B.reversedDepthBuffer&&f&&z.buffers.depth.setReversed(!0),$=new _g(P),H=new P0,Q=new W0(P,N,z,H,B,At,$),Ft=new cg(y),Qt=new fg(y),R=new Sf(P),ft=new rg(P,R),v=new mg(P,R,$,ft),k=new vg(P,v,R,$),at=new xg(P,B,Q),ct=new lg(H),J=new R0(y,Ft,Qt,N,B,ft,ct),it=new Z0(y,H),Z=new L0,Ct=new B0(N),Et=new sg(y,Ft,Qt,z,k,p,l),Tt=new V0(y,k,B),Vt=new j0(P,$,B,z),mt=new ag(P,N,$),Nt=new gg(P,N,$),$.programs=J.programs,y.capabilities=B,y.extensions=N,y.properties=H,y.renderLists=Z,y.shadowMap=Tt,y.state=z,y.info=$}D();let ot=new Ic(y,P);this.xr=ot,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let w=N.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=N.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(j,lt,!1))},this.getSize=function(w){return w.set(j,lt)},this.setSize=function(w,F,G=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=w,lt=F,e.width=Math.floor(w*q),e.height=Math.floor(F*q),G===!0&&(e.style.width=w+"px",e.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(j*q,lt*q).floor()},this.setDrawingBufferSize=function(w,F,G){j=w,lt=F,q=G,e.width=Math.floor(w*G),e.height=Math.floor(F*G),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(Mt)},this.setViewport=function(w,F,G,W){w.isVector4?Mt.set(w.x,w.y,w.z,w.w):Mt.set(w,F,G,W),z.viewport(L.copy(Mt).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(Gt)},this.setScissor=function(w,F,G,W){w.isVector4?Gt.set(w.x,w.y,w.z,w.w):Gt.set(w,F,G,W),z.scissor(U.copy(Gt).multiplyScalar(q).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(w){z.setScissorTest(re=w)},this.setOpaqueSort=function(w){ut=w},this.setTransparentSort=function(w){gt=w},this.getClearColor=function(w){return w.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor(...arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,G=!0){let W=0;if(w){let O=!1;if(C!==null){let rt=C.texture.format;O=rt===mo||rt===po||rt===fo}if(O){let rt=C.texture.type,pt=rt===En||rt===vi||rt===As||rt===Cs||rt===co||rt===ho,bt=Et.getClearColor(),xt=Et.getClearAlpha(),Dt=bt.r,Ot=bt.g,It=bt.b;pt?(g[0]=Dt,g[1]=Ot,g[2]=It,g[3]=xt,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Dt,_[1]=Ot,_[2]=It,_[3]=xt,P.clearBufferiv(P.COLOR,0,_))}else W|=P.COLOR_BUFFER_BIT}F&&(W|=P.DEPTH_BUFFER_BIT),G&&(W|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",st,!1),Et.dispose(),Z.dispose(),Ct.dispose(),H.dispose(),Ft.dispose(),Qt.dispose(),k.dispose(),ft.dispose(),Vt.dispose(),J.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Pn),ot.removeEventListener("sessionend",Jc),Ei.stop()};function ht(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let w=$.autoReset,F=Tt.enabled,G=Tt.autoUpdate,W=Tt.needsUpdate,O=Tt.type;D(),$.autoReset=w,Tt.enabled=F,Tt.autoUpdate=G,Tt.needsUpdate=W,Tt.type=O}function st(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function et(w){let F=w.target;F.removeEventListener("dispose",et),St(F)}function St(w){zt(w),H.remove(w)}function zt(w){let F=H.get(w).programs;F!==void 0&&(F.forEach(function(G){J.releaseProgram(G)}),w.isShaderMaterial&&J.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,G,W,O,rt){F===null&&(F=wt);let pt=O.isMesh&&O.matrixWorld.determinant()<0,bt=Md(w,F,G,W,O);z.setMaterial(W,pt);let xt=G.index,Dt=1;if(W.wireframe===!0){if(xt=v.getWireframeAttribute(G),xt===void 0)return;Dt=2}let Ot=G.drawRange,It=G.attributes.position,$t=Ot.start*Dt,ae=(Ot.start+Ot.count)*Dt;rt!==null&&($t=Math.max($t,rt.start*Dt),ae=Math.min(ae,(rt.start+rt.count)*Dt)),xt!==null?($t=Math.max($t,0),ae=Math.min(ae,xt.count)):It!=null&&($t=Math.max($t,0),ae=Math.min(ae,It.count));let _e=ae-$t;if(_e<0||_e===1/0)return;ft.setup(O,W,bt,G,xt);let de,le=mt;if(xt!==null&&(de=R.get(xt),le=Nt,le.setIndex(de)),O.isMesh)W.wireframe===!0?(z.setLineWidth(W.wireframeLinewidth*xe()),le.setMode(P.LINES)):le.setMode(P.TRIANGLES);else if(O.isLine){let Lt=W.linewidth;Lt===void 0&&(Lt=1),z.setLineWidth(Lt*xe()),O.isLineSegments?le.setMode(P.LINES):O.isLineLoop?le.setMode(P.LINE_LOOP):le.setMode(P.LINE_STRIP)}else O.isPoints?le.setMode(P.POINTS):O.isSprite&&le.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)xs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),le.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(N.get("WEBGL_multi_draw"))le.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Lt=O._multiDrawStarts,me=O._multiDrawCounts,Jt=O._multiDrawCount,je=xt?R.get(xt).bytesPerElement:1,Qi=H.get(W).currentProgram.getUniforms();for(let Je=0;Je<Jt;Je++)Qi.setValue(P,"_gl_DrawID",Je),le.render(Lt[Je]/je,me[Je])}else if(O.isInstancedMesh)le.renderInstances($t,_e,O.count);else if(G.isInstancedBufferGeometry){let Lt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,me=Math.min(G.instanceCount,Lt);le.renderInstances($t,_e,me)}else le.render($t,_e)};function he(w,F,G){w.transparent===!0&&w.side===We&&w.forceSinglePass===!1?(w.side=De,w.needsUpdate=!0,Xr(w,F,G),w.side=$n,w.needsUpdate=!0,Xr(w,F,G),w.side=We):Xr(w,F,G)}this.compile=function(w,F,G=null){G===null&&(G=w),h=Ct.get(G),h.init(F),A.push(h),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),w!==G&&w.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),h.setupLights();let W=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let rt=O.material;if(rt)if(Array.isArray(rt))for(let pt=0;pt<rt.length;pt++){let bt=rt[pt];he(bt,G,O),W.add(bt)}else he(rt,G,O),W.add(rt)}),h=A.pop(),W},this.compileAsync=function(w,F,G=null){let W=this.compile(w,F,G);return new Promise(O=>{function rt(){if(W.forEach(function(pt){H.get(pt).currentProgram.isReady()&&W.delete(pt)}),W.size===0){O(w);return}setTimeout(rt,10)}N.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let te=null;function zn(w){te&&te(w)}function Pn(){Ei.stop()}function Jc(){Ei.start()}let Ei=new ku;Ei.setAnimationLoop(zn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(w){te=w,ot.setAnimationLoop(w),w===null?Ei.stop():Ei.start()},ot.addEventListener("sessionstart",Pn),ot.addEventListener("sessionend",Jc),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(F),F=ot.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,F,C),h=Ct.get(w,A.length),h.init(F),A.push(h),nt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ce.setFromProjectionMatrix(nt,bn,F.reversedDepth),tt=this.localClippingEnabled,jt=ct.init(this.clippingPlanes,tt),m=Z.get(w,b.length),m.init(),b.push(m),ot.enabled===!0&&ot.isPresenting===!0){let rt=y.xr.getDepthSensingMesh();rt!==null&&ml(rt,F,-1/0,y.sortObjects)}ml(w,F,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ut,gt),qt=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,qt&&Et.addToRenderList(m,w),this.info.render.frame++,jt===!0&&ct.beginShadows();let G=h.state.shadowsArray;Tt.render(G,w,F),jt===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,O=m.transmissive;if(h.setupLights(),F.isArrayCamera){let rt=F.cameras;if(O.length>0)for(let pt=0,bt=rt.length;pt<bt;pt++){let xt=rt[pt];Qc(W,O,w,xt)}qt&&Et.render(w);for(let pt=0,bt=rt.length;pt<bt;pt++){let xt=rt[pt];Kc(m,w,xt,xt.viewport)}}else O.length>0&&Qc(W,O,w,F),qt&&Et.render(w),Kc(m,w,F);C!==null&&E===0&&(Q.updateMultisampleRenderTarget(C),Q.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(y,w,F),ft.resetDefaultState(),S=-1,T=null,A.pop(),A.length>0?(h=A[A.length-1],jt===!0&&ct.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function ml(w,F,G,W){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ce.intersectsSprite(w)){W&&Ut.setFromMatrixPosition(w.matrixWorld).applyMatrix4(nt);let pt=k.update(w),bt=w.material;bt.visible&&m.push(w,pt,bt,G,Ut.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ce.intersectsObject(w))){let pt=k.update(w),bt=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ut.copy(w.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Ut.copy(pt.boundingSphere.center)),Ut.applyMatrix4(w.matrixWorld).applyMatrix4(nt)),Array.isArray(bt)){let xt=pt.groups;for(let Dt=0,Ot=xt.length;Dt<Ot;Dt++){let It=xt[Dt],$t=bt[It.materialIndex];$t&&$t.visible&&m.push(w,pt,$t,G,Ut.z,It)}}else bt.visible&&m.push(w,pt,bt,G,Ut.z,null)}}let rt=w.children;for(let pt=0,bt=rt.length;pt<bt;pt++)ml(rt[pt],F,G,W)}function Kc(w,F,G,W){let O=w.opaque,rt=w.transmissive,pt=w.transparent;h.setupLightsView(G),jt===!0&&ct.setGlobalState(y.clippingPlanes,G),W&&z.viewport(L.copy(W)),O.length>0&&Wr(O,F,G),rt.length>0&&Wr(rt,F,G),pt.length>0&&Wr(pt,F,G),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Qc(w,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[W.id]===void 0&&(h.state.transmissionRenderTarget[W.id]=new Be(1,1,{generateMipmaps:!0,type:N.has("EXT_color_buffer_half_float")||N.has("EXT_color_buffer_float")?pn:En,minFilter:xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));let rt=h.state.transmissionRenderTarget[W.id],pt=W.viewport||L;rt.setSize(pt.z*y.transmissionResolutionScale,pt.w*y.transmissionResolutionScale);let bt=y.getRenderTarget(),xt=y.getActiveCubeFace(),Dt=y.getActiveMipmapLevel();y.setRenderTarget(rt),y.getClearColor(Y),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),qt&&Et.render(G);let Ot=y.toneMapping;y.toneMapping=Qn;let It=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),h.setupLightsView(W),jt===!0&&ct.setGlobalState(y.clippingPlanes,W),Wr(w,G,W),Q.updateMultisampleRenderTarget(rt),Q.updateRenderTargetMipmap(rt),N.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let ae=0,_e=F.length;ae<_e;ae++){let de=F[ae],le=de.object,Lt=de.geometry,me=de.material,Jt=de.group;if(me.side===We&&le.layers.test(W.layers)){let je=me.side;me.side=De,me.needsUpdate=!0,th(le,G,W,Lt,me,Jt),me.side=je,me.needsUpdate=!0,$t=!0}}$t===!0&&(Q.updateMultisampleRenderTarget(rt),Q.updateRenderTargetMipmap(rt))}y.setRenderTarget(bt,xt,Dt),y.setClearColor(Y,K),It!==void 0&&(W.viewport=It),y.toneMapping=Ot}function Wr(w,F,G){let W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,rt=w.length;O<rt;O++){let pt=w[O],bt=pt.object,xt=pt.geometry,Dt=pt.group,Ot=pt.material;Ot.allowOverride===!0&&W!==null&&(Ot=W),bt.layers.test(G.layers)&&th(bt,F,G,xt,Ot,Dt)}}function th(w,F,G,W,O,rt){w.onBeforeRender(y,F,G,W,O,rt),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(y,F,G,W,w,rt),O.transparent===!0&&O.side===We&&O.forceSinglePass===!1?(O.side=De,O.needsUpdate=!0,y.renderBufferDirect(G,F,W,O,w,rt),O.side=$n,O.needsUpdate=!0,y.renderBufferDirect(G,F,W,O,w,rt),O.side=We):y.renderBufferDirect(G,F,W,O,w,rt),w.onAfterRender(y,F,G,W,O,rt)}function Xr(w,F,G){F.isScene!==!0&&(F=wt);let W=H.get(w),O=h.state.lights,rt=h.state.shadowsArray,pt=O.state.version,bt=J.getParameters(w,O.state,rt,F,G),xt=J.getProgramCacheKey(bt),Dt=W.programs;W.environment=w.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(w.isMeshStandardMaterial?Qt:Ft).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Dt===void 0&&(w.addEventListener("dispose",et),Dt=new Map,W.programs=Dt);let Ot=Dt.get(xt);if(Ot!==void 0){if(W.currentProgram===Ot&&W.lightsStateVersion===pt)return nh(w,bt),Ot}else bt.uniforms=J.getUniforms(w),w.onBeforeCompile(bt,y),Ot=J.acquireProgram(bt,xt),Dt.set(xt,Ot),W.uniforms=bt.uniforms;let It=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(It.clippingPlanes=ct.uniform),nh(w,bt),W.needsLights=Sd(w),W.lightsStateVersion=pt,W.needsLights&&(It.ambientLightColor.value=O.state.ambient,It.lightProbe.value=O.state.probe,It.directionalLights.value=O.state.directional,It.directionalLightShadows.value=O.state.directionalShadow,It.spotLights.value=O.state.spot,It.spotLightShadows.value=O.state.spotShadow,It.rectAreaLights.value=O.state.rectArea,It.ltc_1.value=O.state.rectAreaLTC1,It.ltc_2.value=O.state.rectAreaLTC2,It.pointLights.value=O.state.point,It.pointLightShadows.value=O.state.pointShadow,It.hemisphereLights.value=O.state.hemi,It.directionalShadowMap.value=O.state.directionalShadowMap,It.directionalShadowMatrix.value=O.state.directionalShadowMatrix,It.spotShadowMap.value=O.state.spotShadowMap,It.spotLightMatrix.value=O.state.spotLightMatrix,It.spotLightMap.value=O.state.spotLightMap,It.pointShadowMap.value=O.state.pointShadowMap,It.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Ot,W.uniformsList=null,Ot}function eh(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=Ds.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function nh(w,F){let G=H.get(w);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Md(w,F,G,W,O){F.isScene!==!0&&(F=wt),Q.resetTextureUnits();let rt=F.fog,pt=W.isMeshStandardMaterial?F.environment:null,bt=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ni,xt=(W.isMeshStandardMaterial?Qt:Ft).get(W.envMap||pt),Dt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ot=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),It=!!G.morphAttributes.position,$t=!!G.morphAttributes.normal,ae=!!G.morphAttributes.color,_e=Qn;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(_e=y.toneMapping);let de=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,le=de!==void 0?de.length:0,Lt=H.get(W),me=h.state.lights;if(jt===!0&&(tt===!0||w!==T)){let Ve=w===T&&W.id===S;ct.setState(W,w,Ve)}let Jt=!1;W.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==me.state.version||Lt.outputColorSpace!==bt||O.isBatchedMesh&&Lt.batching===!1||!O.isBatchedMesh&&Lt.batching===!0||O.isBatchedMesh&&Lt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Lt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Lt.instancing===!1||!O.isInstancedMesh&&Lt.instancing===!0||O.isSkinnedMesh&&Lt.skinning===!1||!O.isSkinnedMesh&&Lt.skinning===!0||O.isInstancedMesh&&Lt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Lt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Lt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Lt.instancingMorph===!1&&O.morphTexture!==null||Lt.envMap!==xt||W.fog===!0&&Lt.fog!==rt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==ct.numPlanes||Lt.numIntersection!==ct.numIntersection)||Lt.vertexAlphas!==Dt||Lt.vertexTangents!==Ot||Lt.morphTargets!==It||Lt.morphNormals!==$t||Lt.morphColors!==ae||Lt.toneMapping!==_e||Lt.morphTargetsCount!==le)&&(Jt=!0):(Jt=!0,Lt.__version=W.version);let je=Lt.currentProgram;Jt===!0&&(je=Xr(W,F,O));let Qi=!1,Je=!1,qs=!1,ge=je.getUniforms(),on=Lt.uniforms;if(z.useProgram(je.program)&&(Qi=!0,Je=!0,qs=!0),W.id!==S&&(S=W.id,Je=!0),Qi||T!==w){z.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ge.setValue(P,"projectionMatrix",w.projectionMatrix),ge.setValue(P,"viewMatrix",w.matrixWorldInverse);let qe=ge.map.cameraPosition;qe!==void 0&&qe.setValue(P,_t.setFromMatrixPosition(w.matrixWorld)),B.logarithmicDepthBuffer&&ge.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ge.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),T!==w&&(T=w,Je=!0,qs=!0)}if(O.isSkinnedMesh){ge.setOptional(P,O,"bindMatrix"),ge.setOptional(P,O,"bindMatrixInverse");let Ve=O.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),ge.setValue(P,"boneTexture",Ve.boneTexture,Q))}O.isBatchedMesh&&(ge.setOptional(P,O,"batchingTexture"),ge.setValue(P,"batchingTexture",O._matricesTexture,Q),ge.setOptional(P,O,"batchingIdTexture"),ge.setValue(P,"batchingIdTexture",O._indirectTexture,Q),ge.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&ge.setValue(P,"batchingColorTexture",O._colorsTexture,Q));let ln=G.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&at.update(O,G,je),(Je||Lt.receiveShadow!==O.receiveShadow)&&(Lt.receiveShadow=O.receiveShadow,ge.setValue(P,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(on.envMap.value=xt,on.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(on.envMapIntensity.value=F.environmentIntensity),Je&&(ge.setValue(P,"toneMappingExposure",y.toneMappingExposure),Lt.needsLights&&bd(on,qs),rt&&W.fog===!0&&it.refreshFogUniforms(on,rt),it.refreshMaterialUniforms(on,W,q,lt,h.state.transmissionRenderTarget[w.id]),Ds.upload(P,eh(Lt),on,Q)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ds.upload(P,eh(Lt),on,Q),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ge.setValue(P,"center",O.center),ge.setValue(P,"modelViewMatrix",O.modelViewMatrix),ge.setValue(P,"normalMatrix",O.normalMatrix),ge.setValue(P,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Ve=W.uniformsGroups;for(let qe=0,gl=Ve.length;qe<gl;qe++){let Ai=Ve[qe];Vt.update(Ai,je),Vt.bind(Ai,je)}}return je}function bd(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Sd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,F,G){let W=H.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),H.get(w.texture).__webglTexture=F,H.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){let G=H.get(w);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0};let Td=P.createFramebuffer();this.setRenderTarget=function(w,F=0,G=0){C=w,M=F,E=G;let W=!0,O=null,rt=!1,pt=!1;if(w){let xt=H.get(w);if(xt.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(P.FRAMEBUFFER,null),W=!1;else if(xt.__webglFramebuffer===void 0)Q.setupRenderTarget(w);else if(xt.__hasExternalTextures)Q.rebindTextures(w,H.get(w.texture).__webglTexture,H.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let It=w.depthTexture;if(xt.__boundDepthTexture!==It){if(It!==null&&H.has(It)&&(w.width!==It.image.width||w.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(w)}}let Dt=w.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(pt=!0);let Ot=H.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ot[F])?O=Ot[F][G]:O=Ot[F],rt=!0):w.samples>0&&Q.useMultisampledRTT(w)===!1?O=H.get(w).__webglMultisampledFramebuffer:Array.isArray(Ot)?O=Ot[G]:O=Ot,L.copy(w.viewport),U.copy(w.scissor),X=w.scissorTest}else L.copy(Mt).multiplyScalar(q).floor(),U.copy(Gt).multiplyScalar(q).floor(),X=re;if(G!==0&&(O=Td),z.bindFramebuffer(P.FRAMEBUFFER,O)&&W&&z.drawBuffers(w,O),z.viewport(L),z.scissor(U),z.setScissorTest(X),rt){let xt=H.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,xt.__webglTexture,G)}else if(pt){let xt=F;for(let Dt=0;Dt<w.textures.length;Dt++){let Ot=H.get(w.textures[Dt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Dt,Ot.__webglTexture,G,xt)}}else if(w!==null&&G!==0){let xt=H.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xt.__webglTexture,G)}S=-1},this.readRenderTargetPixels=function(w,F,G,W,O,rt,pt,bt=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=H.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pt!==void 0&&(xt=xt[pt]),xt){z.bindFramebuffer(P.FRAMEBUFFER,xt);try{let Dt=w.textures[bt],Ot=Dt.format,It=Dt.type;if(!B.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!B.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-W&&G>=0&&G<=w.height-O&&(w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+bt),P.readPixels(F,G,W,O,At.convert(Ot),At.convert(It),rt))}finally{let Dt=C!==null?H.get(C).__webglFramebuffer:null;z.bindFramebuffer(P.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(w,F,G,W,O,rt,pt,bt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=H.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pt!==void 0&&(xt=xt[pt]),xt)if(F>=0&&F<=w.width-W&&G>=0&&G<=w.height-O){z.bindFramebuffer(P.FRAMEBUFFER,xt);let Dt=w.textures[bt],Ot=Dt.format,It=Dt.type;if(!B.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!B.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $t=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,$t),P.bufferData(P.PIXEL_PACK_BUFFER,rt.byteLength,P.STREAM_READ),w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+bt),P.readPixels(F,G,W,O,At.convert(Ot),At.convert(It),0);let ae=C!==null?H.get(C).__webglFramebuffer:null;z.bindFramebuffer(P.FRAMEBUFFER,ae);let _e=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await pu(P,_e,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,$t),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,rt),P.deleteBuffer($t),P.deleteSync(_e),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,G=0){let W=Math.pow(2,-G),O=Math.floor(w.image.width*W),rt=Math.floor(w.image.height*W),pt=F!==null?F.x:0,bt=F!==null?F.y:0;Q.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,G,0,0,pt,bt,O,rt),z.unbindTexture()};let wd=P.createFramebuffer(),Ed=P.createFramebuffer();this.copyTextureToTexture=function(w,F,G=null,W=null,O=0,rt=null){rt===null&&(O!==0?(xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),rt=O,O=0):rt=0);let pt,bt,xt,Dt,Ot,It,$t,ae,_e,de=w.isCompressedTexture?w.mipmaps[rt]:w.image;if(G!==null)pt=G.max.x-G.min.x,bt=G.max.y-G.min.y,xt=G.isBox3?G.max.z-G.min.z:1,Dt=G.min.x,Ot=G.min.y,It=G.isBox3?G.min.z:0;else{let ln=Math.pow(2,-O);pt=Math.floor(de.width*ln),bt=Math.floor(de.height*ln),w.isDataArrayTexture?xt=de.depth:w.isData3DTexture?xt=Math.floor(de.depth*ln):xt=1,Dt=0,Ot=0,It=0}W!==null?($t=W.x,ae=W.y,_e=W.z):($t=0,ae=0,_e=0);let le=At.convert(F.format),Lt=At.convert(F.type),me;F.isData3DTexture?(Q.setTexture3D(F,0),me=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Q.setTexture2DArray(F,0),me=P.TEXTURE_2D_ARRAY):(Q.setTexture2D(F,0),me=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);let Jt=P.getParameter(P.UNPACK_ROW_LENGTH),je=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Qi=P.getParameter(P.UNPACK_SKIP_PIXELS),Je=P.getParameter(P.UNPACK_SKIP_ROWS),qs=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,de.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,de.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Dt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ot),P.pixelStorei(P.UNPACK_SKIP_IMAGES,It);let ge=w.isDataArrayTexture||w.isData3DTexture,on=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){let ln=H.get(w),Ve=H.get(F),qe=H.get(ln.__renderTarget),gl=H.get(Ve.__renderTarget);z.bindFramebuffer(P.READ_FRAMEBUFFER,qe.__webglFramebuffer),z.bindFramebuffer(P.DRAW_FRAMEBUFFER,gl.__webglFramebuffer);for(let Ai=0;Ai<xt;Ai++)ge&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,H.get(w).__webglTexture,O,It+Ai),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,H.get(F).__webglTexture,rt,_e+Ai)),P.blitFramebuffer(Dt,Ot,pt,bt,$t,ae,pt,bt,P.DEPTH_BUFFER_BIT,P.NEAREST);z.bindFramebuffer(P.READ_FRAMEBUFFER,null),z.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||w.isRenderTargetTexture||H.has(w)){let ln=H.get(w),Ve=H.get(F);z.bindFramebuffer(P.READ_FRAMEBUFFER,wd),z.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ed);for(let qe=0;qe<xt;qe++)ge?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ln.__webglTexture,O,It+qe):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ln.__webglTexture,O),on?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ve.__webglTexture,rt,_e+qe):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ve.__webglTexture,rt),O!==0?P.blitFramebuffer(Dt,Ot,pt,bt,$t,ae,pt,bt,P.COLOR_BUFFER_BIT,P.NEAREST):on?P.copyTexSubImage3D(me,rt,$t,ae,_e+qe,Dt,Ot,pt,bt):P.copyTexSubImage2D(me,rt,$t,ae,Dt,Ot,pt,bt);z.bindFramebuffer(P.READ_FRAMEBUFFER,null),z.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else on?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(me,rt,$t,ae,_e,pt,bt,xt,le,Lt,de.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(me,rt,$t,ae,_e,pt,bt,xt,le,de.data):P.texSubImage3D(me,rt,$t,ae,_e,pt,bt,xt,le,Lt,de):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,rt,$t,ae,pt,bt,le,Lt,de.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,rt,$t,ae,de.width,de.height,le,de.data):P.texSubImage2D(P.TEXTURE_2D,rt,$t,ae,pt,bt,le,Lt,de);P.pixelStorei(P.UNPACK_ROW_LENGTH,Jt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,je),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Qi),P.pixelStorei(P.UNPACK_SKIP_ROWS,Je),P.pixelStorei(P.UNPACK_SKIP_IMAGES,qs),rt===0&&F.generateMipmaps&&P.generateMipmap(me),z.unbindTexture()},this.initRenderTarget=function(w){H.get(w).__webglFramebuffer===void 0&&Q.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Q.setTextureCube(w,0):w.isData3DTexture?Q.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Q.setTexture2DArray(w,0):Q.setTexture2D(w,0),z.unbindTexture()},this.resetState=function(){M=0,E=0,C=null,z.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}};var Xu={type:"change"},Nc={type:"start"},$u={type:"end"},Zo=new Yn,qu=new hn,J0=Math.cos(70*Ue.DEG2RAD),Ce=new I,Ze=2*Math.PI,oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Uc=1e-6,Fs=class extends wr{constructor(t,e=null){super(t,e),this.state=oe.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mi.ROTATE,MIDDLE:mi.DOLLY,RIGHT:mi.PAN},this.touches={ONE:gi.ROTATE,TWO:gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new un,this._lastTargetPosition=new I,this._quat=new un().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ws,this._sphericalDelta=new ws,this._scale=1,this._panOffset=new I,this._rotateStart=new vt,this._rotateEnd=new vt,this._rotateDelta=new vt,this._panStart=new vt,this._panEnd=new vt,this._panDelta=new vt,this._dollyStart=new vt,this._dollyEnd=new vt,this._dollyDelta=new vt,this._dollyDirection=new I,this._mouse=new vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Q0.bind(this),this._onPointerDown=K0.bind(this),this._onPointerUp=t_.bind(this),this._onContextMenu=o_.bind(this),this._onMouseWheel=i_.bind(this),this._onKeyDown=s_.bind(this),this._onTouchStart=r_.bind(this),this._onTouchMove=a_.bind(this),this._onMouseDown=e_.bind(this),this._onMouseMove=n_.bind(this),this._interceptControlDown=l_.bind(this),this._interceptControlUp=c_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Xu),this.update(),this.state=oe.NONE}update(t=null){let e=this.object.position;Ce.copy(e).sub(this.target),Ce.applyQuaternion(this._quat),this._spherical.setFromVector3(Ce),this.autoRotate&&this.state===oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ze:n>Math.PI&&(n-=Ze),s<-Math.PI?s+=Ze:s>Math.PI&&(s-=Ze),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ce.setFromSpherical(this._spherical),Ce.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ce),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ce.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ce.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Zo.origin.copy(this.object.position),Zo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zo.direction))<J0?this.object.lookAt(this.target):(qu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zo.intersectPlane(qu,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Uc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Uc||this._lastTargetPosition.distanceToSquared(this.target)>Uc?(this.dispatchEvent(Xu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ze/60*this.autoRotateSpeed*t:Ze/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ce.setFromMatrixColumn(e,0),Ce.multiplyScalar(-t),this._panOffset.add(Ce)}_panUp(t,e){this.screenSpacePanning===!0?Ce.setFromMatrixColumn(e,1):(Ce.setFromMatrixColumn(e,0),Ce.crossVectors(this.object.up,Ce)),Ce.multiplyScalar(t),this._panOffset.add(Ce)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ce.copy(s).sub(this.target);let r=Ce.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new vt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function K0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Q0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function t_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($u),this.state=oe.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function e_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case mi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=oe.DOLLY;break;case mi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=oe.ROTATE}break;case mi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=oe.PAN}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(Nc)}function n_(i){switch(this.state){case oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function i_(i){this.enabled===!1||this.enableZoom===!1||this.state!==oe.NONE||(i.preventDefault(),this.dispatchEvent(Nc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent($u))}function s_(i){this.enabled!==!1&&this._handleKeyDown(i)}function r_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case gi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=oe.TOUCH_ROTATE;break;case gi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=oe.TOUCH_PAN;break;default:this.state=oe.NONE}break;case 2:switch(this.touches.TWO){case gi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=oe.TOUCH_DOLLY_PAN;break;case gi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=oe.TOUCH_DOLLY_ROTATE;break;default:this.state=oe.NONE}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(Nc)}function a_(i){switch(this._trackPointer(i),this.state){case oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=oe.NONE}}function o_(i){this.enabled!==!1&&i.preventDefault()}function l_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function c_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Bs=class extends Zn{constructor(){super();let t=new Le;t.deleteAttribute("uv");let e=new Un({side:De}),n=new Un,s=new br(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Xt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Fi(t,n,6),o=new ye;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Xt(t,Os(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Xt(t,Os(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Xt(t,Os(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new Xt(t,Os(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let f=new Xt(t,Os(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new Xt(t,Os(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Os(i){return new yr({color:0,emissive:16777215,emissiveIntensity:i})}var zs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var nn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},h_=new Vi(-1,1,1,-1,0,1),Fc=class extends pe{constructor(){super(),this.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new se([0,2,0,0,2,0],2))}},u_=new Fc,Mi=class{constructor(t){this._mesh=new Xt(u_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,h_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var jo=class extends nn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Me?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ei.clone(t.uniforms),this.material=new Me({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Mi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Dr=class extends nn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Jo=class extends nn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ko=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new vt);this._width=n.width,this._height=n.height,e=new Be(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new jo(zs),this.copyPass.material.blending=wn,this.clock=new Sr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Dr!==void 0&&(a instanceof Dr?n=!0:a instanceof Jo&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new vt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Qo=class extends nn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var Yu={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ks=class i extends nn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new vt(t.x,t.y):new vt(256,256),this.clearColor=new Pt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Be(r,a,{type:pn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Be(r,a,{type:pn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Be(r,a,{type:pn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=Yu;this.highPassUniforms=ei.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Me({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new vt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ei.clone(zs.uniforms),this.blendMaterial=new Me({uniforms:this.copyUniforms,vertexShader:zs.vertexShader,fragmentShader:zs.fragmentShader,blending:Kn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Pt,this._oldClearAlpha=1,this._basic=new ze,this._fsQuad=new Mi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new vt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Me({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new vt(.5,.5)},direction:{value:new vt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(t){return new Me({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};ks.BlurDirectionX=new vt(1,0);ks.BlurDirectionY=new vt(0,1);var Ur={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var tl=class extends nn{constructor(){super(),this.uniforms=ei.clone(Ur.uniforms),this.material=new vr({name:Ur.name,uniforms:this.uniforms,vertexShader:Ur.vertexShader,fragmentShader:Ur.fragmentShader}),this._fsQuad=new Mi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Yt.getTransfer(this._outputColorSpace)===Kt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Qa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===to?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===eo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===_i?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===io?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===so?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===no&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var sn=(i,t,e,n,s,r,a,o,l="\u2014")=>({id:i,name:t,cn:e,type:n,shape:s,desc:r,features:a,detail:o,kernel:l,units:s[2]||s[0]}),Nr=[sn("input","INPUT","\u4E00\u5F20\u56FE\u50CF\uFF0C\u65C5\u7A0B\u7684\u5F00\u59CB","input",[227,227,3],"\u8BA1\u7B97\u673A\u770B\u4E0D\u5230\u201C\u72D7\u201D\uFF0C\u5B83\u9996\u5148\u63A5\u6536\u7684\u662F\u7EA2\u3001\u7EFF\u3001\u84DD\u4E09\u4E2A\u901A\u9053\u7684\u50CF\u7D20\u6570\u503C\u3002",["RGB \u4E09\u901A\u9053","\u50CF\u7D20 \u2192 \u6570\u503C"],"\u8FD9\u91CC\u7528\u7A0B\u5E8F\u7ED8\u5236\u7684\u72AC\u7C7B\u793A\u610F\u56FE\u4F5C\u4E3A\u8F93\u5165\uFF0C\u4E0D\u4E0A\u4F20\u56FE\u7247\uFF0C\u4E5F\u4E0D\u8FDB\u884C\u771F\u5B9E\u8BC6\u522B\u3002"),sn("conv1","CONV1","\u5148\u770B\u89C1\u8FB9\u7F18","conv",[55,55,96],"\u7B2C\u4E00\u5C42\u5377\u79EF\u50CF\u4E00\u7EC4\u5C0F\u578B\u89C6\u89C9\u63A2\u6D4B\u5668\uFF0C\u5728\u56FE\u50CF\u4E0A\u6ED1\u52A8\uFF0C\u5BFB\u627E\u6700\u57FA\u7840\u7684\u89C6\u89C9\u7EBF\u7D22\u3002",["\u8FB9\u7F18\u4E0E\u65B9\u5411","\u8272\u5F69\u5BF9\u6BD4","\u7B80\u5355\u7EB9\u7406"],"96 \u4E2A\u5377\u79EF\u6838\u5F62\u6210 96 \u5F20\u7279\u5F81\u56FE\u3002\u968F\u540E\u4F7F\u7528 ReLU\uFF1B\u539F\u7F51\u7EDC\u8FD8\u5728\u6B64\u9636\u6BB5\u4F7F\u7528\u5C40\u90E8\u54CD\u5E94\u5F52\u4E00\u5316 LRN\u3002","11 \xD7 11 / \u6B65\u957F 4"),sn("pool1","POOL1","\u4FDD\u7559\u91CD\u8981\u7684\uFF0C\u7F29\u5C0F\u5176\u4F59","pool",[27,27,96],"\u6C60\u5316\u964D\u4F4E\u7279\u5F81\u56FE\u7684\u7A7A\u95F4\u5C3A\u5BF8\uFF0C\u5728\u5C40\u90E8\u533A\u57DF\u4FDD\u7559\u6700\u5F3A\u7684\u54CD\u5E94\u3002",["\u6700\u5927\u6C60\u5316","\u7A7A\u95F4\u538B\u7F29"],"\u4F7F\u7528\u91CD\u53E0\u6700\u5927\u6C60\u5316\uFF1A\u7A97\u53E3 3\xD73\uFF0C\u6B65\u957F 2\u3002\u901A\u9053\u6570\u4ECD\u4E3A 96\uFF0C\u800C\u5BBD\u3001\u9AD8\u4ECE 55 \u964D\u5230 27\u3002","3 \xD7 3 / \u6B65\u957F 2"),sn("conv2","CONV2","\u4ECE\u7EBF\u6761\u8D70\u5411\u7EB9\u7406","conv",[27,27,256],"\u7F51\u7EDC\u628A\u524D\u4E00\u5C42\u7684\u7B80\u5355\u7EBF\u7D22\u7EC4\u5408\u8D77\u6765\uFF0C\u5F00\u59CB\u54CD\u5E94\u7EB9\u7406\u548C\u5C40\u90E8\u56FE\u6848\u3002",["\u91CD\u590D\u7EB9\u7406","\u5C40\u90E8\u56FE\u6848"],"256 \u4E2A\u8F93\u51FA\u901A\u9053\u3002\u539F\u59CB\u6A21\u578B\u5728\u53CC GPU \u95F4\u91C7\u7528\u5206\u7EC4\u8FDE\u63A5\uFF1B\u5377\u79EF\u540E\u63A5 ReLU \u4E0E LRN\u3002","5 \xD7 5 / \u6B65\u957F 1"),sn("pool2","POOL2","\u66F4\u7D27\u51D1\u7684\u89C6\u89C9\u6458\u8981","pool",[13,13,256],"\u518D\u4E00\u6B21\u538B\u7F29\u7A7A\u95F4\u4FE1\u606F\uFF0C\u8BA9\u540E\u9762\u7684\u5C42\u5173\u6CE8\u66F4\u5927\u8303\u56F4\u5185\u7684\u89C6\u89C9\u7ED3\u6784\u3002",["\u4FDD\u7559\u5F3A\u54CD\u5E94","\u964D\u4F4E\u8BA1\u7B97\u91CF"],"\u6700\u5927\u6C60\u5316\u7A97\u53E3 3\xD73\u3001\u6B65\u957F 2\u3002\u5BBD\u9AD8\u7531 27 \u964D\u81F3 13\uFF0C256 \u4E2A\u901A\u9053\u4FDD\u7559\u3002","3 \xD7 3 / \u6B65\u957F 2"),sn("conv3","CONV3","\u62FC\u51FA\u66F4\u590D\u6742\u7684\u5F62\u72B6","conv",[13,13,384],"\u5728\u66F4\u5927\u7684\u611F\u53D7\u91CE\u4E2D\u7EC4\u5408\u7EB9\u7406\u548C\u8FB9\u7F18\uFF0C\u63D0\u53D6\u66F4\u590D\u6742\u7684\u5C40\u90E8\u5F62\u72B6\u3002",["\u5F62\u72B6\u7EC4\u5408","\u66F4\u5927\u611F\u53D7\u91CE"],"384 \u4E2A\u8F93\u51FA\u901A\u9053\uFF0C\u5377\u79EF\u540E\u4F7F\u7528 ReLU\u3002\u8FD9\u4E00\u5C42\u8FDE\u63A5\u524D\u4E00\u5C42\u5168\u90E8\u901A\u9053\uFF0C\u4E0D\u662F\u7B80\u5355\u9010\u901A\u9053\u8FC7\u6EE4\u3002","3 \xD7 3 / \u6B65\u957F 1"),sn("conv4","CONV4","\u5BFB\u627E\u6709\u610F\u4E49\u7684\u7EC4\u5408","conv",[13,13,384],"\u66F4\u6DF1\u7684\u7279\u5F81\u4E0D\u518D\u53EA\u662F\u50CF\u7D20\u8FB9\u7F18\uFF0C\u800C\u662F\u591A\u4E2A\u89C6\u89C9\u7EBF\u7D22\u7684\u7EC4\u5408\u3002",["\u90E8\u4EF6\u5F0F\u7EBF\u7D22","\u5C42\u6B21\u5316\u8868\u793A"],"384 \u4E2A\u8F93\u51FA\u901A\u9053\uFF0C\u539F\u59CB\u5B9E\u73B0\u91C7\u7528\u5206\u7EC4\u8FDE\u63A5\u3002\u6240\u8C13\u201C\u90E8\u4EF6\u201D\u662F\u7406\u89E3\u7F51\u7EDC\u7684\u76F4\u89C2\u6BD4\u55BB\uFF0C\u5E76\u975E\u6BCF\u4E2A\u901A\u9053\u90FD\u5BF9\u5E94\u660E\u786E\u8BED\u4E49\u3002","3 \xD7 3 / \u6B65\u957F 1"),sn("conv5","CONV5","\u5F62\u6210\u9AD8\u7EA7\u89C6\u89C9\u7279\u5F81","conv",[13,13,256],"\u6700\u540E\u4E00\u7EC4\u5377\u79EF\u6574\u5408\u4E4B\u524D\u7684\u8868\u793A\uFF0C\u4E3A\u56FE\u50CF\u5206\u7C7B\u51C6\u5907\u66F4\u62BD\u8C61\u7684\u89C6\u89C9\u7279\u5F81\u3002",["\u9AD8\u7EA7\u7279\u5F81","\u8BED\u4E49\u7EC4\u5408"],"256 \u4E2A\u8F93\u51FA\u901A\u9053\uFF0C\u5377\u79EF\u540E\u63A5 ReLU\uFF0C\u518D\u8FDB\u5165\u6700\u540E\u4E00\u6B21\u6700\u5927\u6C60\u5316\u3002","3 \xD7 3 / \u6B65\u957F 1"),sn("pool5","POOL5","\u538B\u7F29\u4E3A\u5206\u7C7B\u7684\u539F\u6599","pool",[6,6,256],"\u5C06\u9AD8\u7EA7\u7279\u5F81\u538B\u7F29\u4E3A 6\xD76\xD7256 \u7684\u5F20\u91CF\uFF0C\u518D\u5C55\u5E73\u4E3A 9,216 \u4E2A\u6570\u503C\u3002",["\u6700\u540E\u4E00\u6B21\u6C60\u5316","\u5C55\u5E73\u4E3A\u5411\u91CF"],"\u5C55\u5E73\u53EA\u6539\u53D8\u7EC4\u7EC7\u65B9\u5F0F\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u751F\u6210\u65B0\u7279\u5F81\u3002\u8FD9\u4E2A\u5411\u91CF\u63A5\u5165\u7B2C\u4E00\u4E2A\u5168\u8FDE\u63A5\u5C42\u3002","3 \xD7 3 / \u6B65\u957F 2"),sn("fc6","FC6","\u7EC4\u5408\u5168\u5C40\u89C6\u89C9\u8BC1\u636E","fc",[4096],"\u5168\u8FDE\u63A5\u5C42\u5F00\u59CB\u5C06\u524D\u9762\u63D0\u53D6\u51FA\u7684\u89C6\u89C9\u7279\u5F81\u7EC4\u5408\u8D77\u6765\uFF0C\u7528\u4E8E\u6700\u7EC8\u5206\u7C7B\u3002",["4,096 \u4E2A\u795E\u7ECF\u5143","ReLU \xB7 Dropout"],"\u6BCF\u4E2A\u5355\u5143\u63A5\u6536\u5C55\u5E73\u540E\u7684\u7279\u5F81\u3002\u8BAD\u7EC3\u65F6\u4F7F\u7528 Dropout\uFF0C\u964D\u4F4E\u8FC7\u62DF\u5408\uFF1B\u56FE\u4E2D\u7684\u8282\u70B9\u662F\u62BD\u6837\u793A\u610F\uFF0C\u800C\u975E\u5B8C\u6574 4,096 \u4E2A\u3002"),sn("fc7","FC7","\u8FDB\u4E00\u6B65\u6574\u5408\u9AD8\u7EA7\u7279\u5F81","fc",[4096],"\u7B2C\u4E8C\u4E2A\u5168\u8FDE\u63A5\u5C42\u7EE7\u7EED\u6574\u5408\u5168\u5C40\u8BC1\u636E\uFF0C\u5F62\u6210\u6709\u5229\u4E8E\u533A\u5206\u7C7B\u522B\u7684\u8868\u793A\u3002",["4,096 \u4E2A\u795E\u7ECF\u5143","\u5168\u5C40\u7279\u5F81\u7EC4\u5408"],"\u540C\u6837\u4F7F\u7528 ReLU\uFF0C\u5E76\u5728\u8BAD\u7EC3\u65F6\u5E94\u7528 Dropout\u3002\u5C42\u4E0E\u5C42\u7684\u8FDE\u63A5\u6743\u91CD\u7531\u8BAD\u7EC3\u5B66\u4E60\u83B7\u5F97\u3002"),sn("fc8","FC8","\u6620\u5C04\u5230 1,000 \u4E2A\u7C7B\u522B","fc",[1e3],"\u6700\u540E\u4E00\u5C42\u5C06\u7F51\u7EDC\u63D0\u53D6\u51FA\u7684\u7279\u5F81\u6620\u5C04\u5230 ImageNet \u7684 1,000 \u4E2A\u7C7B\u522B\u3002",["1,000 \u4E2A\u7C7B\u522B\u5206\u6570","\u5206\u7C7B\u5934"],"\u8F93\u51FA\u7684\u662F\u7C7B\u522B\u5206\u6570 logits\uFF0C\u518D\u7ECF Softmax \u8F6C\u4E3A\u76F8\u5BF9\u6982\u7387\u3002\u72D7\u662F\u4E00\u4E2A\u6982\u5FF5\u603B\u7C7B\uFF0C\u5E76\u975E\u8FD9\u91CC\u4E0E\u91D1\u6BDB\u5E76\u5217\u7684\u6807\u51C6 ImageNet \u7C7B\u522B\u3002"),sn("output","OUTPUT","\u4ECE\u6570\u503C\u8D70\u5411\u4E00\u4E2A\u5224\u65AD","output",[1e3],"Softmax \u5C06\u7C7B\u522B\u5206\u6570\u8F6C\u6362\u4E3A\u6982\u7387\u5206\u5E03\u3002\u6700\u9AD8\u5206\u7684\u7C7B\u522B\u6210\u4E3A\u8FD9\u6B21\u9884\u6D4B\u3002",["Golden retriever","\u793A\u610F\u6982\u7387 78%"],"78% \u662F\u9884\u8BBE\u7684\u52A8\u753B\u6F14\u793A\u6570\u503C\uFF0C\u4E0D\u662F\u6A21\u578B\u63A8\u7406\u7ED3\u679C\uFF0C\u4E5F\u4E0D\u8868\u793A\u5DF2\u7ECF\u6821\u51C6\u7684\u771F\u5B9E\u7F6E\u4FE1\u5EA6\u3002")];function Oc(i){return Nr.map((t,e)=>(e-6)*(i?3.35:2.25))}var bi=["\u8F93\u5165\u7F16\u7801","\u5377\u79EF\u4E00","\u6C60\u5316\u4E00","\u5377\u79EF\u4E8C","\u6C60\u5316\u4E8C","\u5377\u79EF\u4E09","\u5377\u79EF\u56DB","\u5377\u79EF\u4E94","\u6C60\u5316\u4E0E\u5C55\u5E73","\u5168\u8FDE\u63A5\u516D","\u5168\u8FDE\u63A5\u4E03","\u5206\u7C7B\u6620\u5C04","\u6982\u7387\u8F93\u51FA"],rn=(i,t,e,n,s,r,a,o,l)=>({title:i,mechanism:t,input:e,output:n,formula:s,explain:r,note:a,visual:o,experiment:l}),Fr=[rn("\u50CF\u7D20\u4E0D\u662F\u7269\u4F53\uFF0C\u6570\u503C\u624D\u662F\u8D77\u70B9","\u989C\u8272\u901A\u9053 \xB7 \u5F20\u91CF\u7F16\u7801","\u793A\u4F8B\u56FE\u50CF","227 \xD7 227 \xD7 3","X \u2208 \u211D\xB2\xB2\u2077\xD7\xB2\xB2\u2077\xD7\xB3","\u5F69\u8272\u56FE\u50CF\u8868\u793A\u4E3A\u4E09\u4E2A\u7A7A\u95F4\u5BF9\u9F50\u7684\u989C\u8272\u901A\u9053\u3002\u7F51\u7EDC\u63A5\u6536\u7684\u662F\u6570\u503C\u5F20\u91CF\uFF0C\u800C\u4E0D\u662F\u4EBA\u7C7B\u7406\u89E3\u7684\u201C\u7269\u4F53\u201D\u3002","\u4F7F\u7528\u5E38\u89C1\u7684 227 \u50CF\u7D20\u5DE5\u7A0B\u7EA6\u5B9A\uFF1B\u539F\u8BBA\u6587\u6587\u5B57\u5199\u4F5C 224 \u50CF\u7D20\u3002\u8FD9\u91CC\u91C7\u7528\u81EA\u7ED8\u6D4B\u8BD5\u56FE\uFF0C\u4E0D\u4E0A\u4F20\u56FE\u50CF\u3002","rgb","channels"),rn("\u5171\u4EAB\u5377\u79EF\u6838\uFF0C\u626B\u63CF\u5C40\u90E8\u611F\u53D7\u91CE","\u5C40\u90E8\u8FDE\u63A5 \xB7 \u6743\u91CD\u5171\u4EAB","227 \xD7 227 \xD7 3","55 \xD7 55 \xD7 96","y\u1D62\u2C7C\u2096 = ReLU(\u03A3 w\u2090\u1D66\u{1D68C}\u2096 \xB7 x\u1D62\u208A\u2090,\u2C7C\u208A\u1D66,\u{1D68C} + b\u2096)","96 \u4E2A 11\xD711 \u5377\u79EF\u6838\u4EE5\u6B65\u957F 4 \u63D0\u53D6\u54CD\u5E94\u3002\u6BCF\u4E2A\u6838\u8986\u76D6\u5168\u90E8\u8F93\u5165\u989C\u8272\u901A\u9053\uFF0C\u5728\u4E0D\u540C\u7A7A\u95F4\u4F4D\u7F6E\u5171\u4EAB\u540C\u4E00\u7EC4\u6743\u91CD\u3002","\u539F\u7F51\u7EDC\u968F\u540E\u4F7F\u7528\u5C40\u90E8\u54CD\u5E94\u5F52\u4E00\u5316\u3002\u4E0B\u65B9\u5B9E\u9A8C\u8BA1\u7B97\u5C0F\u7A97\u53E3\u7684\u52A0\u6743\u548C\uFF0C\u793A\u610F\u56FE\u4E0D\u662F\u8BAD\u7EC3\u540E\u7684\u771F\u5B9E\u54CD\u5E94\u3002","scan","convolution"),rn("\u4FDD\u7559\u5C40\u90E8\u6781\u503C\uFF0C\u538B\u7F29\u7A7A\u95F4\u5206\u8FA8\u7387","\u91CD\u53E0\u6700\u5927\u6C60\u5316","55 \xD7 55 \xD7 96","27 \xD7 27 \xD7 96","y\u1D62\u2C7C\u{1D68C} = max(x\u1D64\u1D65\u{1D68C}), (u,v) \u2208 \u03A9\u1D62\u2C7C","3\xD73 \u7A97\u53E3\u4EE5\u6B65\u957F 2 \u6C47\u96C6\u5C40\u90E8\u6700\u5F3A\u54CD\u5E94\u3002\u7A7A\u95F4\u5C3A\u5BF8\u4E0B\u964D\uFF0C\u901A\u9053\u6570\u4FDD\u6301\u4E0D\u53D8\uFF0C\u76F8\u90BB\u7A97\u53E3\u6709\u91CD\u53E0\u3002","\u6C60\u5316\u4E0D\u662F\u6311\u9009\u6574\u5F20\u56FE\u6700\u4EAE\u7684\u533A\u57DF\uFF0C\u4E5F\u4E0D\u662F\u628A\u6240\u6709\u7279\u5F81\u7B80\u5355\u5E73\u5747\u3002","pool","pooling"),rn("\u591A\u901A\u9053\u6C47\u805A\uFF0C\u6784\u9020\u7EB9\u7406\u54CD\u5E94","\u5206\u7EC4\u5377\u79EF \xB7 \u901A\u9053\u6269\u5C55","27 \xD7 27 \xD7 96","27 \xD7 27 \xD7 256","Y = ReLU(W * X + b)","5\xD75 \u5377\u79EF\u6838\u7EC4\u5408\u524D\u4E00\u5C42\u7684\u7279\u5F81\uFF0C\u8F93\u51FA\u6269\u5C55\u4E3A 256 \u4E2A\u901A\u9053\u3002\u5F20\u91CF\u7684\u7A7A\u95F4\u5206\u8FA8\u7387\u4FDD\u6301\u4E0D\u53D8\u3002","\u539F\u7248\u53CC GPU \u5B9E\u73B0\u91C7\u7528\u5206\u7EC4\u8FDE\u63A5\uFF0C\u968F\u540E\u63A5 ReLU \u548C\u5C40\u90E8\u54CD\u5E94\u5F52\u4E00\u5316\u3002\u7EB9\u7406\u662F\u5408\u6210\u8868\u793A\uFF0C\u4E0D\u5BF9\u5E94\u7279\u5B9A\u8BAD\u7EC3\u901A\u9053\u3002","channels","convolution"),rn("\u8FDB\u4E00\u6B65\u964D\u91C7\u6837\uFF0C\u4FDD\u7559\u901A\u9053\u7ED3\u6784","\u7A7A\u95F4\u964D\u91C7\u6837 \xB7 \u6700\u5927\u54CD\u5E94","27 \xD7 27 \xD7 256","13 \xD7 13 \xD7 256","27 \u2192 13\uFF1B\u901A\u9053\u6570 256 \u2192 256","\u518D\u6B21\u6267\u884C 3\xD73\u3001\u6B65\u957F 2 \u7684\u6700\u5927\u6C60\u5316\u3002\u6BCF\u4E2A\u901A\u9053\u5206\u522B\u7F29\u5C0F\u7A7A\u95F4\u5C3A\u5BF8\uFF0C\u4E3A\u540E\u7EED\u6DF1\u5C42\u5377\u79EF\u63D0\u4F9B\u7D27\u51D1\u8868\u793A\u3002","\u964D\u91C7\u6837\u51CF\u5C11\u7A7A\u95F4\u7EC6\u8282\uFF0C\u5E76\u4E0D\u80FD\u4FDD\u8BC1\u4EFB\u4F55\u8F93\u5165\u53D8\u5316\u90FD\u88AB\u5FFD\u7565\u3002","pooldeep","pooling"),rn("\u8DE8\u901A\u9053\u7EC4\u5408\uFF0C\u6269\u5C55\u8868\u5F81\u7A7A\u95F4","\u5168\u901A\u9053\u8FDE\u63A5 \xB7 \u975E\u7EBF\u6027\u53D8\u6362","13 \xD7 13 \xD7 256","13 \xD7 13 \xD7 384","384 \u4E2A 3\xD73 \u5377\u79EF\u6838\uFF1B\u6B65\u957F 1","\u7B2C\u4E09\u5C42\u5377\u79EF\u8FDE\u63A5\u524D\u4E00\u5C42\u7684\u5168\u90E8\u901A\u9053\uFF0C\u8F93\u51FA 384 \u5F20\u7279\u5F81\u56FE\u3002\u591A\u6B21\u5C40\u90E8\u8FD0\u7B97\u7D2F\u79EF\u51FA\u66F4\u5927\u7684\u6709\u6548\u611F\u53D7\u91CE\u3002","\u7279\u5F81\u6DF1\u5EA6\u589E\u52A0\u4E0D\u610F\u5473\u7740\u6BCF\u4E2A\u901A\u9053\u90FD\u5177\u6709\u53EF\u547D\u540D\u7684\u8BED\u4E49\uFF1B\u8FD9\u91CC\u7528\u7A7A\u95F4\u4F53\u7D20\u548C\u8FDE\u7EBF\u8868\u8FBE\u7EC4\u5408\u5173\u7CFB\u3002","volume","convolution"),rn("\u5206\u7EC4\u8BA1\u7B97\u4E2D\u7684\u5C42\u6B21\u5316\u8868\u793A","\u5206\u7EC4\u5377\u79EF \xB7 \u7279\u5F81\u91CD\u7EC4","13 \xD7 13 \xD7 384","13 \xD7 13 \xD7 384","Y\u2081 = W\u2081 * X\u2081\uFF1BY\u2082 = W\u2082 * X\u2082","\u4E24\u4E2A\u5206\u7EC4\u5206\u522B\u6267\u884C 3\xD73 \u5377\u79EF\uFF0C\u518D\u6784\u6210 384 \u901A\u9053\u8F93\u51FA\u3002\u53EF\u89C1\u7684\u53CC\u901A\u9053\u675F\u7528\u4E8E\u5F3A\u8C03\u539F\u7248\u7684\u5206\u7EC4\u7EA6\u675F\u3002","\u5206\u7EC4\u6E90\u4E8E\u539F\u59CB\u53CC GPU \u7684\u8BA1\u7B97\u5E03\u5C40\uFF0C\u4E0D\u662F\u4E24\u5F20\u72EC\u7ACB\u56FE\u7247\uFF0C\u4E5F\u4E0D\u662F\u4E24\u5957\u8BED\u4E49\u5206\u7C7B\u5668\u3002","groups","convolution"),rn("\u5B8C\u6210\u5377\u79EF\u8868\u5F81\uFF0C\u4EA4\u63A5\u5206\u7C7B\u9636\u6BB5","\u9AD8\u7EA7\u7279\u5F81 \xB7 \u6700\u540E\u4E00\u7EC4\u5377\u79EF","13 \xD7 13 \xD7 384","13 \xD7 13 \xD7 256","13 \xD7 13 \xD7 256 \u4E2A\u54CD\u5E94","\u7B2C\u4E94\u5C42\u901A\u8FC7 3\xD73 \u5206\u7EC4\u5377\u79EF\u5C06\u901A\u9053\u6570\u53D8\u4E3A 256\uFF0C\u7ED3\u5408 ReLU \u540E\u8FDB\u5165\u6700\u7EC8\u7684\u6C60\u5316\u4E0E\u5C55\u5E73\u3002","\u9AD8\u7EA7\u8868\u793A\u4ECD\u662F\u6570\u503C\u5F20\u91CF\uFF0C\u4E0D\u662F\u7F51\u7EDC\u5728\u5185\u90E8\u91CD\u65B0\u753B\u51FA\u4E86\u4E00\u53EA\u5B8C\u6574\u7684\u5C0F\u72D7\u3002","deep","convolution"),rn("\u5F20\u91CF\u91CD\u6392\u4E3A\u5411\u91CF\uFF0C\u800C\u975E\u65B0\u589E\u7279\u5F81","\u6700\u7EC8\u6C60\u5316 \xB7 \u5C55\u5E73","13 \xD7 13 \xD7 256","6 \xD7 6 \xD7 256 \u2192 9,216","vec(X) \u2208 \u211D\u2079\xB2\xB9\u2076","\u6700\u540E\u4E00\u6B21\u6700\u5927\u6C60\u5316\u4EA7\u751F 6\xD76\xD7256 \u5F20\u91CF\u3002\u5C55\u5E73\u4FDD\u7559\u6240\u6709\u6570\u503C\uFF0C\u5C06\u7A7A\u95F4\u53CA\u901A\u9053\u7D22\u5F15\u91CD\u6392\u4E3A\u5355\u4E00\u7D22\u5F15\u3002","\u5C55\u5E73\u672C\u8EAB\u4E0D\u5B66\u4E60\u53C2\u6570\u3002\u8FD9\u91CC\u628A\u91CD\u6392\u9644\u5728\u6C60\u5316\u8282\u70B9\u4E2D\u5C55\u793A\uFF0C\u672A\u589E\u52A0\u4E00\u4E2A\u53EF\u5B66\u4E60\u5C42\u3002","flatten","flatten"),rn("\u5168\u5C40\u8FDE\u63A5\uFF0C\u5C06\u7279\u5F81\u5411\u91CF\u52A0\u6743\u6C47\u805A","\u7A20\u5BC6\u77E9\u9635\u4E58\u6CD5 \xB7 ReLU","9,216","4,096","h = ReLU(Wx + b)","\u7B2C\u516D\u5C42\u8FDE\u63A5\u5C55\u5E73\u540E\u7684\u5168\u90E8\u8F93\u5165\uFF0C\u8F93\u51FA 4,096 \u4E2A\u5355\u5143\u3002\u77E9\u9635\u4E2D\u7684\u6BCF\u4E2A\u6743\u91CD\u51B3\u5B9A\u4E00\u4E2A\u8F93\u5165\u5BF9\u4E00\u4E2A\u8F93\u51FA\u7684\u8D21\u732E\u3002","\u8BAD\u7EC3\u65F6\u4F7F\u7528 Dropout\uFF1B\u5E38\u89C4\u63A8\u7406\u65F6\u4E0D\u968F\u673A\u4E22\u5F03\u8282\u70B9\u3002\u56FE\u4E2D\u7684\u8FDE\u63A5\u4E3A\u62BD\u6837\uFF0C\u4E0D\u7ED8\u5236\u6570\u5343\u4E07\u4E2A\u771F\u5B9E\u6743\u91CD\u3002","dense","weights"),rn("\u5728\u9AD8\u7EF4\u7A7A\u95F4\u4E2D\u7EE7\u7EED\u91CD\u7EC4\u5168\u5C40\u8BC1\u636E","\u7A20\u5BC6\u8FDE\u63A5 \xB7 \u975E\u7EBF\u6027","4,096","4,096","h\u2082 = ReLU(W\u2082h\u2081 + b\u2082)","\u7B2C\u4E8C\u4E2A\u5168\u8FDE\u63A5\u5C42\u7EE7\u7EED\u53D8\u6362\u7279\u5F81\u8868\u793A\uFF0C\u4F7F\u6700\u540E\u7684\u7EBF\u6027\u5206\u7C7B\u5668\u80FD\u591F\u533A\u5206\u4E0D\u540C\u7C7B\u522B\u3002","\u540C\u6837\u5728\u8BAD\u7EC3\u65F6\u4F7F\u7528 Dropout\u3002\u8282\u70B9\u7684\u7A7A\u95F4\u6392\u5217\u662F\u5C55\u9648\u8BBE\u8BA1\uFF0C\u4E0D\u5BF9\u5E94\u5927\u8111\u89E3\u5256\u7ED3\u6784\u3002","dense2","weights"),rn("\u4ECE\u7279\u5F81\u5411\u91CF\u6620\u5C04\u5230\u7C7B\u522B\u5206\u6570","\u7EBF\u6027\u5206\u7C7B\u5934 \xB7 \u7C7B\u522B\u5206\u6570","4,096","1,000","z = Wh + b","\u6700\u540E\u4E00\u4E2A\u5168\u8FDE\u63A5\u5C42\u4EA7\u751F 1,000 \u4E2A\u672A\u7ECF\u6982\u7387\u5F52\u4E00\u5316\u7684\u7C7B\u522B\u5206\u6570\u3002\u9AD8\u5206\u8868\u793A\u76F8\u5BF9\u8BC1\u636E\u66F4\u5F3A\uFF0C\u4F46\u5206\u6570\u672C\u8EAB\u4E0D\u662F\u6982\u7387\u3002","\u6B64\u5C42\u4E0D\u4F7F\u7528 ReLU \u622A\u65AD\u7C7B\u522B\u5206\u6570\uFF1B\u63A5\u4E0B\u6765\u7684 Softmax \u624D\u5C06\u5176\u5F52\u4E00\u5316\u4E3A\u6982\u7387\u5206\u5E03\u3002","logits","softmax"),rn("\u5F52\u4E00\u5316\u3001\u6392\u5E8F\uFF0C\u4EE5\u53CA\u89E3\u91CA\u8FB9\u754C","Softmax \xB7 \u7C7B\u522B\u6392\u5E8F","1,000 \u4E2A\u7C7B\u522B\u5206\u6570","1,000 \u4E2A\u76F8\u5BF9\u6982\u7387","p\u1D62 = exp(z\u1D62 \u2212 m) / \u03A3\u2C7C exp(z\u2C7C \u2212 m)","Softmax \u5C06\u4EFB\u610F\u6709\u9650\u5206\u6570\u8F6C\u6362\u6210\u548C\u4E3A 1 \u7684\u975E\u8D1F\u6570\u503C\u3002\u6982\u7387\u53D7\u6240\u6709\u7C7B\u522B\u5206\u6570\u5171\u540C\u5F71\u54CD\uFF0C\u4E0D\u662F\u72EC\u7ACB\u7684\u53EF\u4FE1\u5EA6\u4FDD\u8BC1\u3002","\u5168\u7F51\u6CA1\u6709\u52A0\u8F7D\u6A21\u578B\u6743\u91CD\uFF1B\u7C7B\u522B\u5206\u6570\u548C\u56FE\u50CF\u5747\u4E3A\u9884\u8BBE\u3002\u5C40\u90E8 Softmax \u5B9E\u9A8C\u662F\u771F\u5B9E\u8BA1\u7B97\uFF0C\u4F46\u4E0D\u6784\u6210\u56FE\u50CF\u8BC6\u522B\u3002","output","softmax")],Zu={input:"\u56FE\u50CF\u7F16\u7801",conv:"\u5377\u79EF\u53D8\u6362",pool:"\u7A7A\u95F4\u538B\u7F29",fc:"\u7A20\u5BC6\u8FDE\u63A5",output:"\u6982\u7387\u5206\u5E03"};function Vs(i){if(!i.length||!i.every(Number.isFinite))throw new Error("\u5206\u6570\u5FC5\u987B\u662F\u6709\u9650\u6570\u503C");let t=Math.max(...i),e=i.map(s=>Math.exp(s-t)),n=e.reduce((s,r)=>s+r,0);return e.map(s=>s/n)}function ni(i,t){if(i.length!==t.length)throw new Error("\u7A97\u53E3\u4E0E\u5377\u79EF\u6838\u5C3A\u5BF8\u4E0D\u7B26");return i.reduce((e,n,s)=>e+n*t[s],0)}function ju(i){return Math.max(...i)}function Ju(i){return i.flat(1/0)}function el(){return{time:0,running:!1,paused:!1,complete:!1,speed:1}}function nl(i){let t=Math.max(0,Math.min(13,i/1.65));return{index:Math.min(12,Math.floor(t)),local:t>=13?1:t%1,progress:t/13}}function Si(i,t,e){switch(t){case"run":return{...el(),running:!0,speed:i.speed};case"pause":return i.running?{...i,paused:!i.paused}:i;case"speed":return{...i,speed:[.5,1,2].includes(e)?e:i.speed};case"step":{let n=Math.min(13,Math.floor(i.time/1.65+1e-8)+1);return{...i,time:n*1.65,running:n<13,paused:n<13,complete:n===13}}case"tick":{if(!i.running||i.paused)return i;let n=Math.min(21.45,i.time+Math.max(0,e)*i.speed);return{...i,time:n,running:n<21.45,complete:n>=21.45}}case"reset":return el();default:return i}}var d_={input:14006935,conv:8698095,pool:7920587,fc:12100077,output:15186825},Ku=new Le(1,1,1),f_=new Oi(Ku),p_=new Bi(.055,7,5);function il(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new pr(n);return s.colorSpace=Se,s}function Or(i="all"){return il(384,384,t=>{t.fillStyle="#153047",t.fillRect(0,0,384,384);for(let e=0;e<12;e++)for(let n=0;n<12;n++){let s=Math.sin(n*.5)*Math.cos(e*.4);t.fillStyle=`rgb(${35+s*15},${66+s*20},${86+s*20})`,t.fillRect(n*32,e*32,31,31)}t.fillStyle="#d4b58a",t.beginPath(),t.ellipse(195,310,110,130,0,0,7),t.fill(),t.fillStyle="#96754d",t.beginPath(),t.ellipse(115,184,39,88,.1,0,7),t.ellipse(275,184,39,88,-.1,0,7),t.fill(),t.fillStyle="#e1c296",t.beginPath(),t.ellipse(195,194,91,107,0,0,7),t.fill(),t.fillStyle="#edd5ad",t.beginPath(),t.ellipse(195,243,59,45,0,0,7),t.fill(),t.fillStyle="#222c32";for(let e of[159,231])t.beginPath(),t.arc(e,191,7,0,7),t.fill();if(t.beginPath(),t.ellipse(195,232,14,10,0,0,7),t.fill(),t.strokeStyle="#5d5244",t.lineWidth=2,t.beginPath(),t.moveTo(195,242),t.lineTo(195,257),t.quadraticCurveTo(178,267,168,255),t.moveTo(195,257),t.quadraticCurveTo(210,267,222,255),t.stroke(),i!=="all"){let e=t.getImageData(0,0,384,384),n=["red","green","blue"].indexOf(i);for(let s=0;s<e.data.length;s+=4)for(let r=0;r<3;r++)r!==n&&(e.data[s+r]*=.12);t.putImageData(e,0,0)}t.strokeStyle="#87bbcb",t.globalAlpha=.18;for(let e=0;e<=384;e+=24)t.beginPath(),t.moveTo(e,0),t.lineTo(e,384),t.moveTo(0,e),t.lineTo(384,e),t.stroke()})}function m_(i){return il(128,128,t=>{t.fillStyle="#10263d",t.fillRect(0,0,128,128);for(let e=0;e<16;e++)for(let n=0;n<16;n++){let s=(Math.sin(n*.6+i)*Math.cos(e*.55+i)+1)/2;t.fillStyle=`rgba(141,204,239,${s*.8})`,t.fillRect(n*8,e*8,7,7)}t.strokeStyle="#bce6f1",t.globalAlpha=.5,t.lineWidth=1.5;for(let e=0;e<4;e++){t.beginPath();for(let n=0;n<128;n+=4){let s=25+e*23+Math.sin(n*.08+i+e)*12;n?t.lineTo(n,s):t.moveTo(n,s)}t.stroke()}})}function g_(){return il(128,128,i=>{let t=i.createImageData(128,128);for(let e=0;e<128;e++)for(let n=0;n<128;n++){let s=(e*128+n)*4,r=Math.abs(Math.sin(n*.11)*Math.cos(e*.08));t.data[s]=105,t.data[s+1]=201,t.data[s+2]=222,t.data[s+3]=Math.round(r*160)}i.putImageData(t,0,0)})}function Qu(i,t){let e=new Ie,n=new Ie;e.add(n);let s=d_[t],r=[],a=[],o=[],l=(b=s,A={})=>{let y=new Un({color:b,metalness:.3,roughness:.43,emissive:b,emissiveIntensity:.12,...A});return r.push(y),y},c=(b,A=.4)=>{let y=new ze({color:b,transparent:!0,opacity:A,depthWrite:!1});return r.push(y),y},u=(b,A,y=[0,0,0],x=n)=>{let M=new Xt(b,A);return M.position.set(...y),M.castShadow=!0,M.receiveShadow=!0,x.add(M),M},d=(b,A,y=l(),x=n)=>{let M=u(Ku,y,A,x);M.scale.set(...b);let E=new Tn(f_,new Ye({color:s,transparent:!0,opacity:.36}));return M.add(E),M},f=(b,A=.06,y=l())=>{let x=u(p_,y,b);return x.scale.setScalar(A/.055),x},p=(b,A=.25,y=s)=>{let x=new pe().setFromPoints(b.map(E=>new I(...E))),M=new di(x,new Ye({color:y,transparent:!0,opacity:A,depthWrite:!1}));return n.add(M),M},g=(b,A,y=[0,0,0])=>{let x=u(new jn(b,.018,5,64),c(s,.4),A);return x.rotation.set(...y),x},_=d([1.8,.1,3.3],[0,-2.35,0],l(1319990,{metalness:.35,emissiveIntensity:.01}));d([1.78,.023,.025],[0,-2.28,1.66],c(s,.7));let m=g(1.7,[0,0,0],[0,Math.PI/2,0]);if(m.visible=!1,t==="input"){let b=["red","green","blue"].map(Or);for(let x=0;x<3;x++){let M=u(new tn(2.4,2.8),l(16777215,{map:b[x],transparent:!0,opacity:.58,side:We,depthWrite:!1,emissive:16777215,emissiveMap:b[x]}),[(x-1)*.25,0,(x-1)*.24]);M.rotation.y=Math.PI/2,o.push(M)}let A=Or(),y=u(new tn(2.4,2.8),l(16777215,{map:A,side:We,emissive:16777215,emissiveMap:A,emissiveIntensity:.2}),[-.55,0,0]);y.rotation.y=0,y.position.set(-.55,0,.6),e.userData.input=y;for(let x=0;x<3;x++)p([[-.7,-1.7,(x-1)*.7],[.8,-1.5,(x-1)*.7]],.55,[13405838,8961195,9021904][x])}else if(t==="conv"){let b=[0,3.7,0,3.15,0,2.65,2.6,2.45][i],A=i===6?6:7,y=l(s,{transparent:!0,opacity:.1,depthWrite:!1});for(let x=0;x<(i===1||i===3?A:0);x++){let M=(x-(A-1)/2)*.14,E=d([.035,b,b],[M,0,0],y);if(x%2===0){let C=new ze({map:m_(i*13+x),transparent:!0,opacity:.4,side:We,depthWrite:!1});r.push(C);let S=u(new tn(b*.94,b*.94),C,[M+.024,0,0]);S.rotation.y=Math.PI/2}}if(i===1){let x=new Ie;n.add(x);for(let E of[-.52,.52])d([.12,.025,1.08],[-.67,E,0],c(11993074,.85),x);for(let E of[-.52,.52])d([.12,1.08,.025],[-.67,0,E],c(11993074,.85),x);a.push({object:x,kind:"scan",base:x.position.clone()});let M=d([.4,.72,.72],[-1.12,0,0],l(11002591,{transparent:!0,opacity:.3}));a.push({object:M,kind:"kernel",base:M.position.clone()});for(let E=0;E<3;E++)for(let C=0;C<3;C++)f([-1.32,(E-1)*.2,(C-1)*.2],.035,l(11793637))}else if(i===3){for(let x=0;x<4;x++){let M=g(.55+x*.13,[.8,0,0],[0,Math.PI/2,0]);a.push({object:M,kind:"rotate",base:M.position.clone()})}for(let x=0;x<4;x++)for(let M=0;M<4;M++)f([.85,(x-1.5)*.55,(M-1.5)*.55],.045)}else if(i===6)for(let x of[-1,1]){let M=g(.77,[0,x*.7,0],[0,Math.PI/2,0]);M.scale.z=.75;for(let E=0;E<8;E++){let C=E/8*Math.PI*2;p([[-.8,x*.7+Math.cos(C)*.5,Math.sin(C)*.5],[.8,x*.7+Math.cos(C)*.5,Math.sin(C)*.5]],.4,x<0?10069991:9032917)}}else{let x=new Fi(new Le(.09,.09,.09),l(s,{emissiveIntensity:.3}),100),M=new ee;for(let E=0;E<100;E++){let C=(E%5-2)*.25,S=(Math.floor(E/5)%5-2)*.37,T=(Math.floor(E/25)-1.5)*.4;M.makeTranslation(C+.9,S,T),x.setMatrixAt(E,M)}n.add(x),a.push({object:x,kind:"volume",base:x.position.clone()})}}else if(t==="pool"){let b=i===8?5:4,A=[];for(let x=0;x<b;x++)for(let M=0;M<b;M++){let E=(Math.sin(x*1.2+M*.6)+1)/2,C=d([.23,.2+E*.4,.23],[-.4,(x-(b-1)/2)*.45,(M-(b-1)/2)*.45],l(E>.75?12775127:s,{transparent:!0,opacity:.55}));A.push(C)}for(let x=0;x<2;x++)for(let M=0;M<2;M++){let E=[.65,(x-.5)*.8,(M-.5)*.8];d([.24,.24,.24],E,l(12840673)),p([[-.5,E[1]*1.2,E[2]*1.2],E],.4)}let y=d([.035,.98,.98],[-.6,.2,.2],l(10677984,{transparent:!0,opacity:.13,depthWrite:!1}));if(a.push({object:y,kind:"pool",base:y.position.clone()}),i===8)for(let x=0;x<32;x++){let M=f([.9,(x%8-3.5)*.22,(Math.floor(x/8)-1.5)*.25],.045);a.push({object:M,kind:"flatten",base:M.position.clone(),j:x})}}else if(t==="fc")if(i===11){for(let b=0;b<12;b++){let A=.25+b*7%13/7,y=d([.1,A,.14],[(b%3-1)*.32,A/2-1,(Math.floor(b/3)-1.5)*.48],l(b===5?15254416:s));a.push({object:y,kind:"bar",base:y.position.clone(),j:b})}g(1.5,[0,0,0],[0,Math.PI/2,0])}else{let b=i===9?3:4,A=6,y=[];for(let M=0;M<b;M++)for(let E=0;E<A;E++)for(let C=0;C<A;C++){let S=[(M-(b-1)/2)*.43,(E-2.5)*.42,(C-2.5)*.42];if(f(S,.045,l(s,{emissiveIntensity:.5})),M>0){let T=[S[0]-.43,((E*3+C)%6-2.5)*.42,((C*2+E)%6-2.5)*.42];y.push(...T,...S)}}let x=new pe;x.setAttribute("position",new se(y,3)),n.add(new Tn(x,new Ye({color:s,transparent:!0,opacity:.22})));for(let M=0;M<3;M++){let E=g(1.5+M*.1,[0,0,0],[0,Math.PI/2,M*.4]);a.push({object:E,kind:"rotate",base:E.position.clone()})}}else{let b=[.63,.19,.11,.07];for(let A=0;A<4;A++){let y=d([.32,b[A]*3.7,.5],[(A-1.5)*.43,b[A]*1.85-1.3,0],l(A===0?14992270:7573407));a.push({object:y,kind:"bar",base:y.position.clone(),j:A})}for(let A=0;A<3;A++){let y=g(1.4+A*.12,[0,0,0],[0,Math.PI/2,0]);a.push({object:y,kind:"rotate",base:y.position.clone()})}e.userData.outputBars=!0}let h=new Xt(new tn(2.6,2.6),new ze({map:g_(),color:s,transparent:!0,opacity:0,side:We,blending:Kn,depthWrite:!1}));return h.rotation.y=Math.PI/2,h.position.x=.78,n.add(h),e.userData.tick=(b,A,y,x,M={})=>{for(let E of r)E.emissive&&(E.emissiveIntensity=.07+A*.55),E.isMeshStandardMaterial&&!E.map&&(E.envMapIntensity=.45);if(m.visible=A>.5,m.material.opacity=Math.max(0,A-.5)*.9,m.scale.setScalar(.65+y*.75),h.material.opacity=A>.5?Math.sin(y*Math.PI)*.42:0,e.userData.input){let E=M.channel||"all";if(e.userData.lastChannel!==E){let C=Or(E),S=e.userData.input.material;S.map.dispose(),S.map=C,S.emissiveMap=C,e.userData.lastChannel=E}}if(!x)for(let E of a){let C=b*.65;switch(E.kind){case"scan":case"kernel":E.object.position.y=Math.sin(C*1.3)*(E.kind==="scan"?1.1:.65),E.object.position.z=Math.cos(C*.65)*.7;break;case"pool":E.object.position.y=Math.sin(C)*.55,E.object.position.z=Math.cos(C*.8)*.55;break;case"rotate":E.object.rotation.x=C*.22;break;case"volume":E.object.rotation.x=Math.sin(C)*.17;break;case"flatten":{let S=M.flatten?1:A>.55?Math.min(1,y*1.5):0;E.object.position.set(Ue.lerp(E.base.x,.9,S),Ue.lerp(E.base.y,(E.j-15.5)*.08,S),Ue.lerp(E.base.z,0,S));break}case"bar":E.object.scale.y=A>.55?.75+Math.sin(y*Math.PI)*.25:1;break}}},e}function td(i,t){let e=[],s=new Float32Array(840),r=new Float32Array(280*3),a=new Float32Array(280*6),o=new pe;o.setAttribute("position",new we(s,3)),o.setAttribute("color",new we(r,3));let l=il(32,32,p=>{let g=p.createRadialGradient(16,16,0,16,16,16);g.addColorStop(0,"rgba(232,255,250,1)"),g.addColorStop(.2,"rgba(150,233,224,.8)"),g.addColorStop(1,"rgba(80,180,210,0)"),p.fillStyle=g,p.fillRect(0,0,32,32)}),c=new fr(o,new Ss({map:l,size:.18,vertexColors:!0,transparent:!0,blending:Kn,depthWrite:!1,sizeAttenuation:!0}));c.frustumCulled=!1,i.add(c);let u=new pe;u.setAttribute("position",new we(a,3));let d=new Tn(u,new Ye({color:9563876,transparent:!0,opacity:.32,blending:Kn,depthWrite:!1}));d.frustumCulled=!1,i.add(d);for(let p=0;p<12;p++){let g=new pe;g.setAttribute("position",new we(new Float32Array(432*6),3));let _=new Ye({color:p<8?5867690:10258622,transparent:!0,opacity:.14,depthWrite:!1}),m=new Tn(g,_);m.frustumCulled=!1,i.add(m),e.push(m)}function f(p,g,_){let m=t[p].position.x+.65,h=t[p+1].position.x-.65,b=g/18*Math.PI*2,A=.48+p%3*.16,y=p>=8?.34:.54,x=Ue.lerp(A,y,_)+Math.sin(_*Math.PI)*.22;return[Ue.lerp(m,h,_),Math.cos(b)*x+Math.sin(_*Math.PI)*.1,Math.sin(b)*x]}return{update(p,g,_,m,h){for(let y=0;y<12;y++){let x=e[y].geometry.attributes.position,M=0;for(let E=0;E<18;E++)for(let C=0;C<24;C++)x.setXYZ(M++,...f(y,E,C/24)),x.setXYZ(M++,...f(y,E,(C+1)/24));x.needsUpdate=!0,e[y].material.opacity=_&&g.index===y?.39:.115}if(c.visible=d.visible=_,!_)return;let b=Math.min(11,g.index),A=g.index===12?1:Math.max(0,(g.local-.08)/.84);for(let y=0;y<280;y++){let x=y%18,M=Math.floor(y/18)*.019,E=A-M,C=y*3,S=E>=0&&E<=1&&g.index<12,T=f(b,x,Math.max(0,Math.min(1,E))),L=f(b,x,Math.max(0,E-.025));s.set(T,C);let U=S?1-M*.8:0;r.set([U*.62,U,U*.94],C),a.set(T,y*6),a.set(S?L:T,y*6+3)}o.attributes.position.needsUpdate=!0,o.attributes.color.needsUpdate=!0,u.attributes.position.needsUpdate=!0,c.material.size=h?.1:.16}}}var Br=[["origins","00","\u5D1B\u8D77\u524D\u591C"],["match","01","\u4E16\u7EAA\u5BF9\u5C40"],["decision","02","\u51B3\u7B56\u4E4B\u6838"],["dimensions","03","\u7EF4\u5EA6\u89E3\u5256"],["growth","04","\u6210\u957F\u7CFB\u7EDF"],["experiments","05","\u5B9E\u9A8C\u4E0E\u8FB9\u754C"]];function Bc(i){let t=i.replace(/^#/,"");return{history:"origins",model:"dimensions",labs:"experiments"}[t]||(Br.some(e=>e[0]===t)?t:"origins")}var zc={year:2016,result:"4 : 1",games:[{date:"3\u67089\u65E5",winner:"\u963F\u5C14\u6CD5\u56F4\u68CB",note:"\u7B2C\u4E00\u5C40\uFF1A\u7A81\u7834\u9884\u671F\uFF0C\u673A\u5668\u8D62\u5F97\u9996\u5C40\u3002"},{date:"3\u670810\u65E5",winner:"\u963F\u5C14\u6CD5\u56F4\u68CB",note:"\u7B2C\u4E8C\u5C40\uFF1A\u7B2C37\u624B\u5F15\u53D1\u5E7F\u6CDB\u8BA8\u8BBA\u3002"},{date:"3\u670812\u65E5",winner:"\u963F\u5C14\u6CD5\u56F4\u68CB",note:"\u7B2C\u4E09\u5C40\uFF1A\u53D6\u5F97\u6BD4\u8D5B\u80DC\u5229\uFF0C\u4F59\u4E0B\u5BF9\u5C40\u7EE7\u7EED\u3002"},{date:"3\u670813\u65E5",winner:"\u674E\u4E16\u77F3",note:"\u7B2C\u56DB\u5C40\uFF1A\u674E\u4E16\u77F3\u7B2C78\u624B\u6210\u4E3A\u5173\u952E\u8F6C\u6298\uFF0C\u8D62\u5F97\u4E00\u5C40\u3002"},{date:"3\u670815\u65E5",winner:"\u963F\u5C14\u6CD5\u56F4\u68CB",note:"\u7B2C\u4E94\u5C40\uFF1A\u6700\u7EC8\u603B\u6BD4\u52064\u6BD41\u3002"}]},sl=[[3,3,0],[15,15,1],[3,15,0],[15,3,1],[9,3,0],[9,15,1],[4,9,0],[14,9,1],[6,5,0],[6,6,1],[7,5,0],[8,6,1],[11,12,0],[12,12,1],[11,13,0],[13,13,1],[10,9,0],[9,9,1],[10,10,0],[8,10,1],[5,14,0],[14,5,1],[12,4,0],[4,13,1]],ed=["\u9009\u62E9","\u6269\u5C55","\u8BC4\u4F30","\u56DE\u4F20"];function kc(){return{phase:0,cycle:0,selected:0,visits:[0,0,0],totals:[0,0,0],values:[0,0,0],prior:[.56,.29,.15]}}function Vc(i){let t={...i,visits:[...i.visits],totals:[...i.totals],values:[...i.values]};if(i.phase===0){let e=i.visits.reduce((s,r)=>s+r,0),n=i.values.map((s,r)=>s+1.6*i.prior[r]*Math.sqrt(e+1)/(1+i.visits[r]));t.selected=n.indexOf(Math.max(...n))}if(i.phase===3){let e=t.selected,n=[.43,.73,.52][e]+Math.sin((i.cycle+1)*1.7)*.06;t.visits[e]++,t.totals[e]+=n,t.values[e]=t.totals[e]/t.visits[e],t.cycle++}return t.phase=(i.phase+1)%4,t}var Hc={weight:.15,epoch:0,error:(.15*.8-.9)**2};function nd(i){let n=i.weight*.8,s=i.weight-.22*2*(n-.9)*.8;return{weight:s,epoch:i.epoch+1,error:(s*.8-.9)**2}}var id=[["2016\u5E74\u539F\u59CB\u8BBA\u6587\uFF1A\u6DF1\u5EA6\u795E\u7ECF\u7F51\u7EDC\u4E0E\u6811\u641C\u7D22","https://doi.org/10.1038/nature16961"],["\u5B98\u65B9\u963F\u5C14\u6CD5\u56F4\u68CB\u9879\u76EE\u8D44\u6599","https://deepmind.google/research/breakthroughs/alphago/"],["2017\u5E74\u96F6\u8D77\u70B9\u81EA\u6211\u5BF9\u5F08\u7814\u7A76","https://doi.org/10.1038/nature24270"],["2012\u5E74\u56FE\u50CF\u5206\u7C7B\u539F\u59CB\u8BBA\u6587","https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks"]];var zr=new I;function gn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;zr.copy(t),zr[n]=0,zr.normalize();let c=.5*a/(a+o),u=1-zr.angleTo(i)/l;return Math.sign(zr[e])===1?u*c:o/(a+o)+c+c*(1-u)}var rl=class i extends Le{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new I,c=new I,u=new I(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,g=d.length/6,_=new I,m=.5/a;for(let h=0,b=0;h<d.length;h+=3,b+=2)switch(l.fromArray(d,h),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[h+0]=u.x*Math.sign(l.x)+c.x*r,d[h+1]=u.y*Math.sign(l.y)+c.y*r,d[h+2]=u.z*Math.sign(l.z)+c.z*r,f[h+0]=c.x,f[h+1]=c.y,f[h+2]=c.z,Math.floor(h/g)){case 0:_.set(1,0,0),p[b+0]=gn(_,c,"z","y",r,n),p[b+1]=1-gn(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),p[b+0]=1-gn(_,c,"z","y",r,n),p[b+1]=1-gn(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),p[b+0]=1-gn(_,c,"x","z",r,t),p[b+1]=gn(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),p[b+0]=1-gn(_,c,"x","z",r,t),p[b+1]=1-gn(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),p[b+0]=1-gn(_,c,"x","y",r,t),p[b+1]=1-gn(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),p[b+0]=gn(_,c,"x","y",r,t),p[b+1]=1-gn(_,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};function sd(i){let t=matchMedia("(prefers-reduced-motion: reduce)").matches,e,n,s,r,a,o,l="match",c=[],u=[],d=[],f,p=0,g=0,_=!1,m=0,h=0,b=new Hi,A=new vt,y={shell:5857382,cpu:12699330,gpu:9415329,memory:11248822,network:12889735},x=new Set,M=new Set,E=(V,N={})=>{let B=new Un({color:V,roughness:.36,metalness:.62,envMapIntensity:.42,...N});return M.add(B),B};function C(V,N,B,z,$=null){let H=new rl(...N,2,Math.min(.07,Math.min(...N)*.16));x.add(H);let Q=new Xt(H,E(z));return Q.position.set(...B),Q.castShadow=!0,Q.receiveShadow=!0,V.add(Q),$&&(Q.userData.key=$),Q}function S(V,N,B,z){let $=new Oi(new Le(...N));x.add($);let H=new Ye({color:z,transparent:!0,opacity:.5});M.add(H);let Q=new Tn($,H);return Q.position.set(...B),V.add(Q),Q}function T(V,N,B,z){let $=new pe().setFromPoints([new I(...N),new I(...B)]);x.add($);let H=new Ye({color:z,transparent:!0,opacity:.45});M.add(H);let Q=new di($,H);return V.add(Q),Q}function L(V,N,B,z,$){let H=new Bi(N,14,10);x.add(H);let Q=new Xt(H,E(z,{emissive:z,emissiveIntensity:.25}));return Q.position.set(...B),V.add(Q),Q.userData.key=$,Q}function U(V,N,B){let z=new Ie;return z.userData={key:V,index:N,base:new I,offset:new I},s.add(z),B(z),z.traverse($=>{$.isMesh&&($.userData.key=V)}),c.push(z),z}function X(V,N=4,B=0,z=!1){let $=new Ie;$.position.set(N,-.65,B),V.add($),C($,[5.7,.3,5.7],[0,0,0],10980194,"board");for(let H=0;H<19;H++){let Q=(H-9)*.282;T($,[-2.54,.16,Q],[2.54,.16,Q],4800049),T($,[Q,.16,-2.54],[Q,.16,2.54],4800049)}for(let[H,Q,Ft]of sl){let Qt=L($,.118,[(H-9)*.282,.24,(Q-9)*.282],Ft?14868949:1516077,"board");Qt.scale.y=.48}return S($,[.45,.02,.45],[.282,.18,-.282],9102541),f=$,$}function Y(){let V=new Ie;V.position.x=-3.4,s.add(V),C(V,[3.2,.25,3.6],[0,-2.25,0],1979464);let N=U("shell",0,B=>{for(let z of[-1.52,1.52])C(B,[.12,5.2,3.4],[z,.35,0],y.shell);S(B,[3.2,5.3,3.6],[0,.35,0],5667473);for(let z=0;z<8;z++)T(B,[-1.4,-1.6+z*.6,1.75],[1.4,-1.6+z*.6,1.75],3428193)});N.position.x=-3.4;for(let B=0;B<4;B++){let z=["cpu","gpu","memory","network"][B];U(z,B+1,H=>{if(C(H,[2.75,.19,2.7],[0,0,0],2639935),z==="cpu"){C(H,[.9,.18,.9],[0,.15,0],y.cpu);for(let Q=0;Q<12;Q++)C(H,[.055,.32,1.2],[(Q-5.5)*.1,.42,0],6323602)}if(z==="gpu")for(let Q=0;Q<2;Q++){C(H,[1.06,.18,1.8],[(Q-.5)*1.28,.18,0],y.gpu);for(let Ft=0;Ft<9;Ft++)C(H,[.07,.42,1.15],[(Q-.5)*1.28+(Ft-4)*.09,.5,0],5405308)}if(z==="memory")for(let Q=0;Q<5;Q++){C(H,[.25,.45,1.8],[(Q-2)*.48,.3,0],y.memory);for(let Ft=0;Ft<3;Ft++)C(H,[.27,.19,.32],[(Q-2)*.48,.38,(Ft-1)*.49],2503494)}if(z==="network"){C(H,[2.4,.5,.8],[0,.35,.2],4217199);for(let Q=0;Q<8;Q++)C(H,[.19,.16,.2],[(Q-3.5)*.27,.35,.7],y.network)}for(let Q=0;Q<7;Q++)L(H,.035,[1.22,.16,(Q-3)*.35],10345936)}).position.set(-3.4,-1.25+B*1.03,0)}X(s);for(let B=0;B<5;B++)T(s,[-1.8,-1.4+B*.12,1.4],[1.3,-.5,1.4+B*.12],6861750);for(let B=0;B<35;B++){let z=L(s,.035,[0,0,0],9823702);d.push(z)}r.position.set(12,9,16),a.target.set(.1,-.1,0)}function K(){U("gpu",0,V=>{C(V,[6,.18,3.8],[0,-1.25,0],2444099);for(let N=0;N<8;N++)C(V,[.36,.1,.32],[(N-3.5)*.6,-1.09,1.9],12888694)}),U("gpu",1,V=>{C(V,[1.8,.22,1.8],[0,-.6,0],3362149),C(V,[1.35,.1,1.35],[0,-.43,0],10272444);for(let N=0;N<5;N++)for(let B=0;B<5;B++)C(V,[.19,.045,.19],[(B-2)*.24,-.35,(N-2)*.24],8439483)}),U("memory",2,V=>{for(let N of[-2.2,2.2])for(let B of[-1.2,0,1.2])C(V,[.65,.17,.65],[N,-.65,B],10325430)}),U("shell",3,V=>{for(let N=0;N<22;N++)C(V,[.09,.85,3.25],[(N-10.5)*.23,.35,0],6125706)}),U("shell",4,V=>{for(let N of[-1.5,1.5]){let B=new jn(.79,.055,6,40);x.add(B);let z=new Xt(B,E(8756648));z.rotation.x=Math.PI/2,z.position.set(N,1.14,0),V.add(z),u.push(z);for(let $=0;$<7;$++){let H=C(V,[.49,.05,.2],[N+Math.cos($/7*6.28)*.4,1.14,Math.sin($/7*6.28)*.4],4086640);H.rotation.y=-$/7*6.28}}}),r.position.set(8,7,10),a.target.set(0,0,0)}function j(){for(let V=0;V<3;V++){let N=["cpu","gpu","memory"][V],B=U(N,V,z=>{let $=[];for(let H=0;H<5;H++)$.push(L(z,.17,[0,(H-2)*.6,Math.sin(H)*.3],[9483480,9752511,12625113][V]));for(let H=0;H<4;H++)T(z,$[H].position.toArray(),$[H+1].position.toArray(),6719398);S(z,[1,3.4,1.3],[0,0,0],6126998)});B.position.x=(V-1)*3}for(let V=0;V<2;V++)for(let N=0;N<5;N++)T(s,[(V-1)*3+.3,(N-2)*.6,0],[V*3-.3,(4-N-2)*.6,0],9223347);for(let V=0;V<30;V++)d.push(L(s,.045,[0,0,0],10348242));r.position.set(9,5,12),a.target.set(0,0,0)}function lt(){X(s,0,0);for(let V of[-1,1]){let N=U("network",V+1,B=>{C(B,[1.7,2.5,1.7],[0,.3,0],2704472);for(let z=0;z<5;z++)S(B,[1.85,.2,1.85],[0,-.6+z*.45,0],V<0?8896469:12692184)});N.position.x=V*4.8;for(let B=0;B<3;B++)T(s,[V*3.9,-.3,B*.3],[V*2.7,-.3,B*.3],7714993)}for(let V=0;V<25;V++)d.push(L(s,.04,[0,0,0],11978972));r.position.set(11,9,14),a.target.set(0,-.3,0)}function q(V,N,B,z,$,H){let Q=new _r(N,N,B,24);x.add(Q);let Ft=new Xt(Q,E($));return Ft.position.set(...z),Ft.castShadow=!0,Ft.userData.key=H,V.add(Ft),Ft}function ut(V,N){let B=q(V,.047,.035,N,11711919,"shell");return T(V,[N[0]-.025,N[1]+.019,N[2]],[N[0]+.025,N[1]+.019,N[2]],3159608),B}function gt(V,N,B,z=7901067){T(V,N,[B[0],N[1],N[2]],z),T(V,[B[0],N[1],N[2]],B,z)}function Mt(V,N,B,z){for(let $ of[-N/2+.18,N/2-.18])for(let H of[-B/2+.18,B/2-.18])ut(V,[$,z+.05,H]);for(let $=0;$<16;$++){let H=($-7.5)*N/20;gt(V,[H,z+.02,-B*.38],[H*.8,z+.02,B*.35],$%3?6388592:12101507)}for(let $=0;$<12;$++){let H=($%6-2.5)*N/7,Q=$<6?-B*.32:B*.32;C(V,[.12,.07,.17],[H,z+.04,Q],3488573)}}function Gt(V,N,B,z,$=.75){q(V,.19,.12,[N,B,z],5068120,"shell");for(let Ft=0;Ft<9;Ft++){let Qt=Ft/9*Math.PI*2,R=C(V,[$*.51,.05,$*.22],[N+Math.cos(Qt)*$*.48,B,z+Math.sin(Qt)*$*.48],4279120);R.rotation.y=-Qt+.38}let H=new jn($,.045,7,48);x.add(H);let Q=new Xt(H,E(11185837));Q.rotation.x=Math.PI/2,Q.position.set(N,B+.04,z),V.add(Q)}function re(){let V=U("shell",0,$=>{C($,[7.7,.22,5.4],[0,-1.8,0],3356730),Mt($,7.3,5,-1.65)}),N=U("cpu",1,$=>{for(let H=0;H<5;H++){let Q=(H-2)*.83;q($,.28,.15,[-2.8,-.6,Q],12564647,"cpu"),L($,.11,[-2.8,-.42,Q],11189942,"cpu"),T($,[-2.55,-.5,Q],[-.6,.1,Q*.18],9546661)}}),B=U("memory",2,$=>{for(let H=0;H<5;H++){let Q=(H-2)*.83;C($,[.4,.28,.43],[-1.55,-.25,Q*.68],10259570);for(let Ft=0;Ft<3;Ft++)T($,[-1.7+Ft*.13,-.09,Q*.68-.13],[-1.7+Ft*.13,-.09,Q*.68+.13],14076076)}}),z=U("gpu",3,$=>{q($,.96,.36,[0,.12,0],7703437,"gpu");for(let Ft=0;Ft<20;Ft++){let Qt=Ft/20*6.28;L($,.035,[Math.cos(Qt)*.87,.33,Math.sin(Qt)*.87],12369065)}let H=new jn(.56,.04,8,48);x.add(H);let Q=new Xt(H,E(13219719));Q.rotation.x=Math.PI/2,Q.position.y=.36,$.add(Q),T($,[.8,.12,0],[2.05,.12,0],11978689)});U("network",4,$=>{C($,[.7,1.1,1.45],[2.7,.12,0],6976633),S($,[.76,1.18,1.53],[2.7,.12,0],13154712);for(let H=0;H<5;H++)C($,[.03,.08,.12],[3.07,-.15+H*.17,0],11061693)});for(let $=0;$<28;$++)d.push(L(s,.035,[0,0,0],13228238));r.position.set(9,7,11),a.target.set(0,-.2,0)}function ce(){U("shell",0,N=>{C(N,[8,.2,5.6],[0,-1.8,0],3159609),Mt(N,7.7,5.2,-1.67)});let V=[[-3,0,0],[-1.15,.15,-1.3],[-1.15,.15,1.3],[1.15,.25,-1.75],[1.15,.25,0],[1.15,.25,1.75],[3.1,.3,0]];V.forEach((N,B)=>{U(B<3?"cpu":"memory",B+1,z=>{C(z,[.9,.28,.8],N,B<3?8821658:12167819),S(z,[1,.4,.9],[N[0],N[1]+.08,N[2]],9871262);for(let $=0;$<3;$++)C(z,[.15,.04,.05],[N[0]-.23+$*.23,N[1]+.16,N[2]],14403741)})});for(let[N,B]of[[0,1],[0,2],[1,3],[1,4],[2,4],[2,5],[3,6],[4,6],[5,6]])gt(s,[V[N][0],V[N][1]-.2,V[N][2]],[V[B][0],V[B][1]-.2,V[B][2]],9412249);r.position.set(10,9,10),a.target.set(0,-.4,0)}function jt(){U("shell",0,N=>{C(N,[9,.18,6],[0,-1.8,0],3159608),Mt(N,8.6,5.6,-1.68)});let V=L(s,.27,[-3,.1,0],12759436,"network");for(let N=0;N<3;N++){let B=(N-1)*1.9,z=U("network",N+1,$=>{L($,.2,[-.6,.25,B],N===1?10798010:9213596),T($,[-3,.1,0],[-.6,.25,B],10533042);for(let H=0;H<3;H++){let Q=B+(H-1)*.52;L($,.13,[1.7,.5,Q],11183765),T($,[-.6,.25,B],[1.7,.5,Q],6651776),q($,.13,.12,[3.25,.02,Q],7440519,"network"),T($,[1.7,.5,Q],[3.25,.02,Q],6716800)}})}for(let N=0;N<20;N++)d.push(L(s,.035,[0,0,0],12703176));r.position.set(8,10,12),a.target.set(0,-.2,0)}function tt(){U("shell",0,V=>{C(V,[8.3,.2,5.8],[0,-1.9,0],2962230),Mt(V,7.9,5.4,-1.78)}),U("memory",1,V=>{for(let N=0;N<6;N++){C(V,[1.55,.08,1.9],[-2.65,-1.1+N*.2,0],N%2?10332067:7307909);for(let B=0;B<6;B++)T(V,[-3.25,-1.04+N*.2,-.65+B*.23],[-2.2,-1.04+N*.2,-.65+B*.23],13023639)}}),U("cpu",2,V=>{for(let N=0;N<4;N++)for(let B=0;B<4;B++){let z=[-.6+N*.4,-.9+B*.5,Math.sin(B)*.45];if(L(V,.07,z,10929079),N>0)for(let $=0;$<4;$++)T(V,[z[0]-.4,-.9+$*.5,Math.sin($)*.45],z,5401712)}S(V,[2,2.5,1.7],[0,-.05,0],8427670)}),U("gpu",3,V=>{C(V,[1.8,.2,2.4],[2.65,-.9,0],6781051);for(let N=0;N<6;N++)for(let B=0;B<4;B++)C(V,[.22,.08,.22],[2.65+(B-1.5)*.33,-.73,(N-2.5)*.33],12694931);for(let N=0;N<12;N++)C(V,[.055,.65,1.75],[2.65+(N-5.5)*.12,-.35,0],8292749)}),gt(s,[-1.8,-1.2,0],[1.7,-1.2,0],10469302),T(s,[2.5,-1.4,1.8],[-2.5,-1.4,1.8],12891023);for(let V=0;V<30;V++)d.push(L(s,.035,[0,0,0],12769230));r.position.set(9,8,12),a.target.set(0,-.3,0)}function nt(){n=new Us({antialias:!0,alpha:!1}),n.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),n.setClearColor(1118996),n.outputColorSpace=Se,n.toneMapping=_i,n.toneMappingExposure=1.05,n.shadowMap.enabled=!0,n.shadowMap.type=Es,s=new Zn,s.background=new Pt(1118996);let V=new yi(n),N=new Bs;e=V.fromScene(N,.06),s.environment=e.texture,V.dispose(),N.dispose(),r=new Te(36,1,.1,150),a=new Fs(r,n.domElement),a.enableDamping=!0,a.enablePan=!1,a.minDistance=6,a.maxDistance=35,a.maxPolarAngle=Math.PI*.48,n.domElement.addEventListener("pointerdown",B=>_t=[B.clientX,B.clientY]),n.domElement.addEventListener("pointerup",B=>{if(!_t||Math.hypot(B.clientX-_t[0],B.clientY-_t[1])>5)return;let z=n.domElement.getBoundingClientRect();A.set((B.clientX-z.left)/z.width*2-1,-(B.clientY-z.top)/z.height*2+1),b.setFromCamera(A,r);let $=b.intersectObjects(s.children,!0).find(H=>H.object.userData.key);$&&i($.object.userData.key)}),p=requestAnimationFrame(P)}let _t=null;function Ut(){for(s.traverse(V=>{V.isLight&&V.shadow?.map?.dispose()});s.children.length;)s.remove(s.children[0]);x.forEach(V=>V.dispose()),M.forEach(V=>V.dispose()),x.clear(),M.clear(),c=[],d=[],u=[],f=null}function wt(){Ut(),s.add(new ki(15460316,2237222,2));let V=new Jn(15920095,3);V.position.set(4,13,7),V.castShadow=!0,V.shadow.mapSize.set(1024,1024),Object.assign(V.shadow.camera,{left:-12,right:12,top:9,bottom:-9,far:40}),s.add(V);let N=new Jn(10270907,1.25);N.position.set(-8,4,-4),s.add(N);let B=C(s,[24,.12,13],[0,-2.65,0],2106147);if(M.delete(B.material),B.material.dispose(),B.material=new ze({color:1580061}),M.add(B.material),l==="match"?Y():l==="gpu"?K():l==="training"?j():l==="neuron"?re():l==="rules"?ce():l==="search"?jt():l==="learning"?tt():lt(),l==="match"){c.slice(1).forEach(z=>Mt(z,2.65,2.6,.12));for(let z=0;z<14;z++)q(s,.075,.15,[-4.88,-1.6+z*.3,1.5],10922662,"shell"),q(s,.075,.15,[-1.92,-1.6+z*.3,1.5],10922662,"shell")}if(l==="gpu"){Mt(c[0],5.8,3.6,-1.12);for(let z of[-1.5,1.5])Gt(c[4],z,1.2,0);for(let z=0;z<18;z++)C(c[0],[.15,.04,.2],[-2.3+z*.26,-1.1,-1.65],12823936)}c.forEach((z,$)=>{z.userData.base=z.position.clone(),z.userData.offset=["neuron","rules","search","learning"].includes(l)?new I(0,($-1)*.45,0):l==="match"?new I($===0?-2.2:1.1,($-2)*.5,$===0?-1.3:($-1.5)*.8):new I(0,($-2)*.9,0)}),a.update(),m=h=0}function qt(){if(!o||!_)return;let V=o.clientWidth,N=o.clientHeight;!V||!N||(n.setSize(V,N,!1),r.aspect=V/N,V<600?r.zoom=.7:r.zoom=1,r.updateProjectionMatrix())}let xe=new ResizeObserver(qt);function P(V){p=requestAnimationFrame(P);let N=Math.min(.06,(V-g)/1e3||0);if(g=V,!_||document.hidden)return;m=Ue.damp(m,h,4,N),c.forEach(z=>z.position.copy(z.userData.base).addScaledVector(z.userData.offset,m));let B=t?0:V/1e3;d.forEach((z,$)=>{let H=(B*.23+$/d.length)%1;l==="match"?z.position.set(Ue.lerp(1.2,-1.8,H),-.55+Math.sin(H*Math.PI)*.3,1.5+$%3*.1):l==="neuron"?z.position.set(-2.9+5.8*H,.15,Math.sin($*1.7)*(1-H)*1.6):l==="search"?z.position.set(-3+6.3*H,.2,Math.sin($*2)*(H<.5?H*3:1.5)):l==="learning"?z.position.set(-2.8+5.6*H,-.1,Math.sin(H*6.28)*.45):l==="training"?z.position.set(-3.3+6.6*H,Math.sin($*1.2)*.8,Math.cos($)*.3):z.position.set(-4.3+8.6*H,-.15,Math.sin(H*Math.PI*2)*2)}),a.update(),n.render(s,r)}return{show(V,N="match"){try{n||nt(),_=!0,h=0,o=V,V.appendChild(n.domElement),(l!==N||c.length===0)&&(l=N,wt()),xe.disconnect(),xe.observe(V),qt()}catch(B){V.innerHTML='<p class="scene-fallback">\u4E09\u7EF4\u73AF\u5883\u672A\u80FD\u521D\u59CB\u5316\uFF0C\u4ECD\u53EF\u9605\u8BFB\u4E0B\u65B9\u539F\u7406\u4E0E\u64CD\u4F5C\u5B9E\u9A8C\u3002</p>',console.error(B)}},hide(){_=!1,xe.disconnect()},explode(){return h=h?0:1,h===1},dispose(){cancelAnimationFrame(p),xe.disconnect(),Ut(),a?.dispose(),e?.dispose(),n?.dispose()}}}var al={neuron:{mode:"neuron",name:"\u4EBA\u5DE5\u795E\u7ECF\u5143",subtitle:"\u8F93\u5165\u3001\u6743\u91CD\u4E0E\u9608\u503C\u7684\u53EF\u62C6\u89E3\u5173\u7CFB",note:"\u539F\u7406\u5C55\u54C1 / \u4E0D\u662F1940\u62161950\u5E74\u4EE3\u5B9E\u7269\u590D\u523B",parts:["\u8F93\u5165\u4FE1\u53F7","\u8FDE\u63A5\u6743\u91CD","\u6C42\u548C\u6838\u5FC3","\u8F93\u51FA\u9608\u503C"]},rules:{mode:"rules",name:"\u89C4\u5219\u63A8\u7406\u673A",subtitle:"\u6761\u4EF6\u3001\u5206\u652F\u4E0E\u77E5\u8BC6\u7EF4\u62A4\u7684\u7ED3\u6784",note:"\u539F\u7406\u5C55\u54C1 / \u4E0D\u5BF9\u5E94\u67D0\u53F0\u5386\u53F2\u8BA1\u7B97\u673A",parts:["\u6761\u4EF6\u8F93\u5165","\u89C4\u5219\u8282\u70B9","\u903B\u8F91\u5206\u652F","\u63A8\u7406\u7ED3\u679C"]},search:{mode:"search",name:"\u641C\u7D22\u4E0E\u8BC4\u4F30\u88C5\u7F6E",subtitle:"\u5206\u652F\u589E\u957F\u4E0E\u6709\u9650\u8BA1\u7B97\u9884\u7B97",note:"\u5408\u6210\u641C\u7D22\u6811 / \u975E\u771F\u5B9E\u68CB\u8C31\u4E0E\u539F\u7B97\u6CD5\u91CD\u73B0",parts:["\u5F53\u524D\u5C40\u9762","\u5019\u9009\u5206\u652F","\u5C40\u9762\u8BC4\u4F30","\u641C\u7D22\u56DE\u4F20"]},learning:{mode:"learning",name:"\u6DF1\u5EA6\u5B66\u4E60\u8BA1\u7B97\u8231",subtitle:"\u6570\u636E\u3001\u7F51\u7EDC\u4E0E\u5E76\u884C\u8BA1\u7B97\u7684\u6C47\u5408",note:"\u539F\u521B\u539F\u7406\u6A21\u578B / \u975E\u539F\u59CB\u8BBE\u5907\u590D\u523B",parts:["\u6570\u636E\u6837\u672C","\u53C2\u6570\u7F51\u7EDC","\u8BA1\u7B97\u9635\u5217","\u53CD\u9988\u8FDE\u63A5"]}},Re=(i,t)=>({name:i,url:t}),ol=[{years:"1943\u20141956",short:"\u667A\u80FD\u7684\u8BBE\u60F3",title:"\u8BA9\u201C\u667A\u80FD\u201D\u6210\u4E3A\u4E00\u4E2A\u53EF\u4EE5\u7814\u7A76\u7684\u95EE\u9898\u3002",object:"neuron",question:"\u5982\u679C\u63A8\u7406\u53EF\u4EE5\u5199\u6210\u903B\u8F91\u3001\u8BA1\u7B97\u53EF\u4EE5\u7531\u673A\u5668\u6267\u884C\uFF0C\u90A3\u4E48\u5B66\u4E60\u4E0E\u667A\u80FD\u884C\u4E3A\u80FD\u5426\u540C\u6837\u5F97\u5230\u5F62\u5F0F\u5316\u63CF\u8FF0\uFF1F\u8FD9\u4E00\u65F6\u671F\u9996\u5148\u5EFA\u7ACB\u95EE\u9898\u4E0E\u6570\u5B66\u8BED\u8A00\uFF0C\u800C\u4E0D\u662F\u5DF2\u7ECF\u62E5\u6709\u53EF\u4EE5\u7406\u89E3\u4E16\u754C\u7684\u4EBA\u5DE5\u667A\u80FD\u3002",method:"1943\u5E74\u7684\u4EBA\u5DE5\u795E\u7ECF\u5143\u903B\u8F91\u6A21\u578B\uFF0C\u628A\u8F93\u5165\u3001\u9608\u503C\u548C\u903B\u8F91\u8FD0\u7B97\u8054\u7CFB\u8D77\u6765\uFF1B1950\u5E74\u56FE\u7075\u8BA8\u8BBA\u673A\u5668\u667A\u80FD\u7684\u53EF\u89C2\u5BDF\u5224\u636E\uFF1B1955\u5E74\u63D0\u51FA\u30011956\u5E74\u5F00\u5C55\u7684\u8FBE\u7279\u8305\u65AF\u9879\u76EE\u63A8\u52A8\u4EBA\u5DE5\u667A\u80FD\u6210\u4E3A\u660E\u786E\u7684\u7814\u7A76\u8BAE\u9898\u3002",limit:"\u65E9\u671F\u6A21\u578B\u9AD8\u5EA6\u62BD\u8C61\uFF0C\u65E2\u4E0D\u662F\u5BF9\u771F\u5B9E\u5927\u8111\u7684\u5B8C\u6574\u590D\u5236\uFF0C\u4E5F\u6CA1\u6709\u4ECA\u5929\u7684\u5927\u89C4\u6A21\u6570\u636E\u3001\u7A33\u5B9A\u8BAD\u7EC3\u65B9\u6CD5\u548C\u8BA1\u7B97\u8D44\u6E90\u3002\u884C\u4E3A\u4E0A\u8868\u73B0\u51FA\u67D0\u79CD\u80FD\u529B\uFF0C\u4E0D\u7B49\u4E8E\u5DF2\u7ECF\u89E3\u51B3\u610F\u8BC6\u6216\u666E\u904D\u7406\u89E3\u7684\u95EE\u9898\u3002",bridge:"\u5F62\u5F0F\u5316\u95EE\u9898\u4F7F\u7814\u7A76\u8005\u80FD\u591F\u8BBE\u8BA1\u5177\u4F53\u7A0B\u5E8F\u3002\u63A5\u4E0B\u6765\u7684\u63A2\u7D22\u5206\u522B\u6CBF\u7B26\u53F7\u89C4\u5219\u3001\u641C\u7D22\u3001\u6A21\u5F0F\u8BC6\u522B\u4E0E\u5B66\u4E60\u5C55\u5F00\uFF1B\u8FD9\u4E9B\u8DEF\u7EBF\u6709\u4EA4\u6D41\u4E5F\u6709\u7ADE\u4E89\uFF0C\u5E76\u4E0D\u662F\u540C\u4E00\u6761\u6280\u672F\u94FE\u6309\u5E74\u4EFD\u4E0D\u65AD\u66FF\u4EE3\u3002",events:[["1943","\u903B\u8F91\u795E\u7ECF\u5143\u6A21\u578B","\u9EA6\u5361\u6D1B\u514B\u4E0E\u76AE\u8328\u7814\u7A76\u795E\u7ECF\u6D3B\u52A8\u7684\u903B\u8F91\u6F14\u7B97\uFF0C\u4E3A\u4EBA\u5DE5\u795E\u7ECF\u5143\u63D0\u4F9B\u65E9\u671F\u6570\u5B66\u62BD\u8C61\u3002"],["1950","\u673A\u5668\u667A\u80FD\u7684\u8BA8\u8BBA","\u56FE\u7075\u4EE5\u6A21\u4EFF\u6E38\u620F\u8BA8\u8BBA\u5224\u65AD\u673A\u5668\u667A\u80FD\u7684\u65B9\u5F0F\uFF0C\u4E0D\u662F\u5BA3\u5E03\u673A\u5668\u5DF2\u6709\u610F\u8BC6\u3002"],["1955 / 1956","\u7814\u7A76\u8BAE\u7A0B\u5F62\u6210","\u8FBE\u7279\u8305\u65AF\u7814\u7A76\u8BA1\u5212\u63D0\u51FA\u4EBA\u5DE5\u667A\u80FD\u7814\u7A76\u613F\u666F\uFF0C\u968F\u540E\u57281956\u5E74\u5F00\u5C55\u590F\u5B63\u9879\u76EE\u3002"]],sources:[Re("1943\u5E74\u903B\u8F91\u795E\u7ECF\u5143\u8BBA\u6587","https://doi.org/10.1007/BF02478259"),Re("1950\u5E74\u56FE\u7075\u8BBA\u6587","https://doi.org/10.1093/mind/LIX.236.433"),Re("\u8FBE\u7279\u8305\u65AF\u8BA1\u5212\u539F\u6587","https://www-formal.stanford.edu/jmc/history/dartmouth/dartmouth.html")]},{years:"1957\u20141972",short:"\u89C4\u5219\u4E0E\u65E9\u671F\u5B66\u4E60",title:"\u4F1A\u63A8\u7406\uFF0C\u4E0D\u7B49\u4E8E\u80FD\u5E94\u5BF9\u5F00\u653E\u4E16\u754C\u3002",object:"rules",question:"\u600E\u6837\u8BA9\u7A0B\u5E8F\u4E0D\u53EA\u6267\u884C\u56FA\u5B9A\u7B97\u672F\uFF0C\u8FD8\u80FD\u5BFB\u627E\u89E3\u9898\u6B65\u9AA4\u3001\u5206\u7C7B\u6A21\u5F0F\uFF0C\u751A\u81F3\u5728\u73AF\u5883\u4E2D\u884C\u52A8\uFF1F\u7814\u7A76\u8005\u5C1D\u8BD5\u628A\u77E5\u8BC6\u5199\u6210\u7B26\u53F7\uFF0C\u4E5F\u5C1D\u8BD5\u8BA9\u7B80\u5355\u5206\u7C7B\u5668\u4ECE\u6837\u672C\u4E2D\u8C03\u6574\u8FDE\u63A5\u3002",method:"\u7B26\u53F7\u7CFB\u7EDF\u7528\u660E\u786E\u7684\u72B6\u6001\u3001\u89C4\u5219\u548C\u76EE\u6807\u7EC4\u7EC7\u95EE\u9898\uFF1B\u611F\u77E5\u673A\u63A2\u7D22\u6570\u636E\u9A71\u52A8\u7684\u6A21\u5F0F\u5206\u7C7B\uFF1B\u65E9\u671F\u79FB\u52A8\u673A\u5668\u4EBA\u628A\u611F\u77E5\u3001\u89C4\u5212\u4E0E\u884C\u52A8\u8FDE\u63A5\u8D77\u6765\u3002\u4E0D\u540C\u4EFB\u52A1\u4E2D\u7684\u8FDB\u5C55\uFF0C\u4E3A\u4EBA\u5DE5\u667A\u80FD\u5F62\u6210\u591A\u6837\u7684\u65B9\u6CD5\u5DE5\u5177\u3002",limit:"\u624B\u5DE5\u89C4\u5219\u9700\u8981\u9886\u57DF\u77E5\u8BC6\u548C\u7EF4\u62A4\uFF0C\u72B6\u6001\u7A7A\u95F4\u4F1A\u968F\u7740\u95EE\u9898\u89C4\u6A21\u6025\u5267\u589E\u957F\uFF1B\u5355\u5C42\u611F\u77E5\u673A\u4E5F\u6709\u8868\u8FBE\u80FD\u529B\u9650\u5236\u3002\u8FD9\u4E9B\u5C40\u9650\u4E0D\u80FD\u88AB\u7B80\u5316\u4E3A\u201C\u6240\u6709\u795E\u7ECF\u7F51\u7EDC\u90FD\u65E0\u6548\u201D\uFF0C\u66F4\u4E0D\u80FD\u4E0E\u540E\u6765\u591A\u5C42\u7F51\u7EDC\u6DF7\u4E3A\u4E00\u8C08\u3002",bridge:"\u6F14\u793A\u7CFB\u7EDF\u5F80\u5F80\u5728\u53D7\u63A7\u6761\u4EF6\u4E0B\u8868\u73B0\u826F\u597D\uFF0C\u5374\u96BE\u4EE5\u63A8\u5E7F\u5230\u590D\u6742\u73B0\u5B9E\u3002\u627F\u8BFA\u3001\u5B9E\u9645\u80FD\u529B\u3001\u8BA1\u7B97\u9884\u7B97\u548C\u6570\u636E\u6761\u4EF6\u4E4B\u95F4\u7684\u843D\u5DEE\uFF0C\u9010\u6E10\u5F15\u51FA\u8BC4\u4F30\u3001\u8D44\u91D1\u4E0E\u7814\u7A76\u65B9\u5411\u7684\u8C03\u6574\u3002",events:[["1957 / 1958","\u611F\u77E5\u673A","\u7F57\u68EE\u5E03\u62C9\u7279\u53D1\u5C55\u611F\u77E5\u673A\u601D\u60F3\uFF0C\u63A2\u7D22\u80FD\u591F\u4ECE\u6837\u672C\u4E2D\u5B66\u4E60\u7684\u6A21\u5F0F\u5206\u7C7B\u7CFB\u7EDF\u3002"],["1966\u20141972","\u65E9\u671F\u673A\u5668\u4EBA\u7814\u7A76","\u6C99\u57FA\u673A\u5668\u4EBA\u5C06\u73AF\u5883\u8868\u793A\u3001\u89C4\u5212\u4E0E\u884C\u52A8\u8FDE\u63A5\uFF0C\u5728\u53D7\u63A7\u573A\u666F\u4E2D\u6F14\u793A\u667A\u80FD\u884C\u4E3A\u3002"],["1969","\u8868\u8FBE\u80FD\u529B\u7684\u8BA8\u8BBA","\u611F\u77E5\u673A\u7684\u7406\u8BBA\u5206\u6790\u63ED\u793A\u67D0\u4E9B\u7ED3\u6784\u7684\u5C40\u9650\uFF0C\u7ED3\u8BBA\u5E94\u9650\u5B9A\u5728\u5176\u7814\u7A76\u6A21\u578B\u4E0E\u5047\u8BBE\u5185\u3002"]],sources:[Re("\u611F\u77E5\u673A\u8BBA\u6587","https://doi.org/10.1037/h0042519"),Re("\u6C99\u57FA\u673A\u5668\u4EBA\u9879\u76EE\u6863\u6848","https://www.sri.com/hoi/shakey-the-robot/"),Re("\u611F\u77E5\u673A\u7406\u8BBA\u8457\u4F5C","https://mitpress.mit.edu/9780262631112/perceptrons/")]},{years:"1970\u5E74\u4EE3\u20141990\u5E74\u4EE3\u521D",short:"\u671F\u5F85\u4E0E\u4F4E\u8C37",title:"\u80FD\u529B\u8FB9\u754C\uFF0C\u5F00\u59CB\u8FFD\u8D76\u5B8F\u5927\u7684\u627F\u8BFA\u3002",object:"rules",question:"\u5F53\u65E9\u671F\u6210\u679C\u65E0\u6CD5\u6309\u9884\u671F\u6269\u5C55\uFF0C\u600E\u6837\u5224\u65AD\u4E00\u9879\u6280\u672F\u7684\u771F\u5B9E\u4EF7\u503C\uFF1F\u4EBA\u5DE5\u667A\u80FD\u7ECF\u5386\u7684\u4F4E\u8C37\u4E0D\u662F\u6240\u6709\u7814\u7A76\u540C\u65F6\u505C\u6B62\uFF0C\u800C\u662F\u8D44\u52A9\u3001\u5546\u4E1A\u9884\u671F\u4E0E\u5177\u4F53\u65B9\u6CD5\u5728\u4E0D\u540C\u5730\u533A\u548C\u9636\u6BB5\u51FA\u73B0\u6536\u7F29\u3002",method:"\u77E5\u8BC6\u5BC6\u96C6\u7684\u4E13\u5BB6\u7CFB\u7EDF\u5728\u7279\u5B9A\u9886\u57DF\u83B7\u5F97\u5E94\u7528\uFF0C\u4EE5\u89C4\u5219\u548C\u63A8\u7406\u5F15\u64CE\u5229\u7528\u4E13\u5BB6\u7ECF\u9A8C\u3002\u4E0E\u6B64\u540C\u65F6\uFF0C\u6A21\u5F0F\u8BC6\u522B\u3001\u7EDF\u8BA1\u5B66\u4E60\u548C\u795E\u7ECF\u7F51\u7EDC\u7814\u7A76\u7EE7\u7EED\u63A8\u8FDB\uFF1B1986\u5E74\u7684\u53CD\u5411\u4F20\u64AD\u7814\u7A76\u63A8\u52A8\u591A\u5C42\u7F51\u7EDC\u8BAD\u7EC3\u53D7\u5230\u5173\u6CE8\u3002",limit:"\u77E5\u8BC6\u83B7\u53D6\u4E0E\u7EF4\u62A4\u6210\u672C\u3001\u89C4\u5219\u51B2\u7A81\u3001\u5BF9\u65B0\u73AF\u5883\u7684\u8106\u5F31\u6027\u4EE5\u53CA\u8BA1\u7B97\u9650\u5236\uFF0C\u4F7F\u90E8\u5206\u7CFB\u7EDF\u96BE\u4EE5\u5151\u73B0\u63A8\u5E7F\u627F\u8BFA\u3002\u6240\u8C13\u4EBA\u5DE5\u667A\u80FD\u5BD2\u51AC\u5177\u6709\u591A\u91CD\u539F\u56E0\uFF0C\u4E0D\u80FD\u5F52\u7ED3\u4E3A\u67D0\u4E00\u7BC7\u8BBA\u6587\u6216\u67D0\u4E00\u4E2A\u7B97\u6CD5\u7684\u5931\u8D25\u3002",bridge:"\u53D7\u632B\u8FEB\u4F7F\u7814\u7A76\u66F4\u91CD\u89C6\u53EF\u8BC4\u4F30\u4EFB\u52A1\u4E0E\u5B9E\u9645\u6761\u4EF6\u3002\u4E13\u5BB6\u77E5\u8BC6\u8DEF\u7EBF\u5E76\u672A\u6D88\u5931\uFF0C\u4F46\u4ECE\u6570\u636E\u5B66\u4E60\u8868\u793A\u3001\u4F18\u5316\u591A\u5C42\u6A21\u578B\u4EE5\u53CA\u8BBE\u8BA1\u7EDF\u4E00\u6D4B\u8BD5\u96C6\u7684\u8DEF\u7EBF\uFF0C\u9010\u6B65\u79EF\u7D2F\u8D77\u65B0\u7684\u5B9E\u9A8C\u57FA\u7840\u3002",events:[["1973","\u80FD\u529B\u4E0E\u6295\u5165\u53D7\u5230\u5BA1\u89C6","\u83B1\u7279\u5E0C\u5C14\u62A5\u544A\u662F\u82F1\u56FD\u4EBA\u5DE5\u667A\u80FD\u7814\u7A76\u8D44\u52A9\u8BA8\u8BBA\u7684\u91CD\u8981\u5386\u53F2\u8282\u70B9\uFF0C\u4E0D\u80FD\u4EE3\u8868\u6240\u6709\u5730\u533A\u7684\u5168\u90E8\u7814\u7A76\u3002"],["1980\u5E74\u4EE3","\u4E13\u5BB6\u7CFB\u7EDF\u5174\u8D77","\u9886\u57DF\u77E5\u8BC6\u88AB\u7F16\u7801\u4E3A\u89C4\u5219\uFF0C\u5728\u7279\u5B9A\u5DE5\u4F5C\u6D41\u4E2D\u63D0\u4F9B\u5EFA\u8BAE\uFF0C\u4E5F\u5E26\u6765\u77E5\u8BC6\u5DE5\u7A0B\u4E0E\u7EF4\u62A4\u8D1F\u62C5\u3002"],["1986","\u591A\u5C42\u7F51\u7EDC\u7684\u8BAD\u7EC3","\u53CD\u5411\u4F20\u64AD\u7528\u4E8E\u5B66\u4E60\u5185\u90E8\u8868\u793A\uFF0C\u6210\u4E3A\u540E\u6765\u6DF1\u5EA6\u5B66\u4E60\u7684\u91CD\u8981\u5DE5\u5177\u4E4B\u4E00\u3002"],["1980\u5E74\u4EE3\u672B\u20141990\u5E74\u4EE3\u521D","\u5546\u4E1A\u4E0E\u8D44\u52A9\u6CE2\u52A8","\u90E8\u5206\u5E02\u573A\u4E0E\u7814\u7A76\u6295\u5165\u56DE\u843D\uFF0C\u4F46\u7EDF\u8BA1\u65B9\u6CD5\u3001\u795E\u7ECF\u7F51\u7EDC\u548C\u5B9E\u9645\u5E94\u7528\u7EE7\u7EED\u53D1\u5C55\u3002"]],sources:[Re("\u82F1\u56FD\u4EBA\u5DE5\u667A\u80FD\u53F2\u4E0E\u83B1\u7279\u5E0C\u5C14\u62A5\u544A","https://www.aiai.ed.ac.uk/events/lighthill1973/"),Re("\u53CD\u5411\u4F20\u64AD\u4E0E\u5185\u90E8\u8868\u793A","https://doi.org/10.1038/323533a0"),Re("\u4E13\u5BB6\u7CFB\u7EDF\u77E5\u8BC6\u5DE5\u7A0B\u7684\u5386\u53F2\u8BBA\u8FF0","https://www.ijcai.org/Proceedings/77-2/Papers/092.pdf")]},{years:"1980\u20142000\u5E74\u4EE3",short:"\u641C\u7D22\u4E0E\u5B66\u4E60\u5E76\u884C",title:"\u51FB\u8D25\u4E00\u4E2A\u4EFB\u52A1\uFF0C\u4E0E\u5B66\u4E60\u4E00\u79CD\u8868\u793A\u3002",object:"search",question:"\u590D\u6742\u4EFB\u52A1\u53EF\u4EE5\u4F9D\u9760\u66F4\u597D\u7684\u641C\u7D22\u4E0E\u8BC4\u4F30\u89E3\u51B3\uFF0C\u4E5F\u53EF\u4EE5\u8BA9\u6A21\u578B\u4ECE\u6837\u672C\u4E2D\u5B66\u4E60\u7279\u5F81\u3002\u8FD9\u4E24\u79CD\u601D\u8DEF\u957F\u671F\u5E76\u884C\uFF1A\u4E13\u7528\u641C\u7D22\u64C5\u957F\u7ED3\u6784\u6E05\u6670\u7684\u95EE\u9898\uFF0C\u5B66\u4E60\u65B9\u6CD5\u9010\u6B65\u51CF\u5C11\u5BF9\u624B\u5DE5\u7279\u5F81\u7684\u4F9D\u8D56\u3002",method:"\u65B0\u8BA4\u77E5\u673A\u63A2\u7D22\u5C42\u6B21\u5316\u89C6\u89C9\u8BC6\u522B\uFF0C\u5377\u79EF\u624B\u5199\u8BC6\u522B\u628A\u5C40\u90E8\u8FDE\u63A5\u548C\u5171\u4EAB\u6743\u91CD\u4E0E\u68AF\u5EA6\u5B66\u4E60\u7ED3\u5408\u3002\u53E6\u4E00\u8FB9\uFF0C\u6DF1\u84DD\u4F7F\u7528\u4E13\u95E8\u7684\u56FD\u9645\u8C61\u68CB\u641C\u7D22\u3001\u8BC4\u4F30\u548C\u8BA1\u7B97\u8D44\u6E90\uFF0C\u57281997\u5E74\u6218\u80DC\u5361\u65AF\u5E15\u7F57\u592B\u3002",limit:"\u56FD\u9645\u8C61\u68CB\u4E0A\u7684\u80DC\u5229\u5E76\u4E0D\u81EA\u52A8\u89E3\u51B3\u56F4\u68CB\u3002\u56F4\u68CB\u5206\u652F\u591A\uFF0C\u5C40\u9762\u4EF7\u503C\u96BE\u4EE5\u4EC5\u9760\u4EBA\u5DE5\u89C4\u5219\u53EF\u9760\u5224\u65AD\uFF1B\u56FE\u50CF\u8BC6\u522B\u91CC\u7684\u6210\u529F\u4E5F\u4E0D\u80FD\u76F4\u63A5\u89C6\u4E3A\u56F4\u68CB\u51B3\u7B56\u80FD\u529B\uFF0C\u66F4\u4E0D\u80FD\u8BC1\u660E\u901A\u7528\u667A\u80FD\u3002",bridge:"\u8FD9\u4E00\u65F6\u671F\u7559\u4E0B\u4E24\u79CD\u540E\u6765\u4F1A\u5728\u963F\u5C14\u6CD5\u56F4\u68CB\u4E2D\u76F8\u9047\u7684\u80FD\u529B\uFF1A\u641C\u7D22\u80FD\u591F\u7EC4\u7EC7\u5019\u9009\u53D8\u5316\uFF0C\u5B66\u4E60\u80FD\u591F\u63D0\u4F9B\u96BE\u4EE5\u624B\u5199\u7684\u8BC4\u4F30\u3002\u5B83\u4EEC\u7684\u6C47\u5408\u9700\u8981\u66F4\u6709\u6548\u7684\u6A21\u578B\u3001\u6570\u636E\u4E0E\u8BA1\u7B97\u6761\u4EF6\u3002",events:[["1980","\u65B0\u8BA4\u77E5\u673A","\u798F\u5C9B\u90A6\u5F66\u63A2\u7D22\u5C42\u6B21\u5316\u7684\u89C6\u89C9\u6A21\u5F0F\u8BC6\u522B\uFF0C\u6210\u4E3A\u5377\u79EF\u7F51\u7EDC\u7684\u5148\u9A71\u4E4B\u4E00\u3002"],["1989 / 1998","\u5377\u79EF\u6587\u6863\u8BC6\u522B","\u5C40\u90E8\u8FDE\u63A5\u3001\u6743\u91CD\u5171\u4EAB\u4E0E\u53CD\u5411\u4F20\u64AD\u7528\u4E8E\u624B\u5199\u6570\u5B57\u53CA\u6587\u6863\u4EFB\u52A1\uFF0C\u53D1\u5C55\u4E3A\u53EF\u5E94\u7528\u7684\u8BC6\u522B\u7CFB\u7EDF\u3002"],["1997","\u6DF1\u84DD\u6218\u80DC\u5361\u65AF\u5E15\u7F57\u592B","\u4E13\u95E8\u641C\u7D22\u3001\u5C40\u9762\u8BC4\u4F30\u4E0E\u786C\u4EF6\u534F\u540C\u5728\u56FD\u9645\u8C61\u68CB\u9886\u57DF\u53D6\u5F97\u7A81\u7834\u3002"]],sources:[Re("\u65B0\u8BA4\u77E5\u673A\u539F\u8BBA\u6587","https://doi.org/10.1007/BF00344251"),Re("\u68AF\u5EA6\u5B66\u4E60\u4E0E\u6587\u6863\u8BC6\u522B","https://doi.org/10.1109/5.726791"),Re("\u6DF1\u84DD\u7CFB\u7EDF\u8BBA\u6587","https://doi.org/10.1016/S0004-3702(01)00129-1")]},{years:"2006\u20142012",short:"\u6761\u4EF6\u6C47\u5408",title:"\u6570\u636E\u3001\u8BA1\u7B97\u4E0E\u6DF1\u5EA6\u7F51\u7EDC\uFF0C\u76F8\u4E92\u653E\u5927\u3002",object:"learning",question:"\u4E3A\u4EC0\u4E48\u591A\u5C42\u7F51\u7EDC\u5E76\u975E\u65B0\u6982\u5FF5\uFF0C\u5374\u5728\u8FD9\u4E00\u65F6\u671F\u83B7\u5F97\u65B0\u7684\u5B9E\u8DF5\u7A81\u7834\uFF1F\u4E0D\u80FD\u53EA\u5F52\u529F\u4E8E\u201C\u5C42\u6570\u589E\u52A0\u201D\uFF1A\u8BAD\u7EC3\u65B9\u6CD5\u3001\u5DE5\u7A0B\u7ECF\u9A8C\u3001\u53EF\u83B7\u5F97\u7684\u6570\u636E\u3001\u8BC4\u4F30\u57FA\u51C6\u4E0E\u5E76\u884C\u8BA1\u7B97\u5171\u540C\u6539\u53D8\u4E86\u5B9E\u9A8C\u6761\u4EF6\u3002",method:"\u6DF1\u5C42\u6A21\u578B\u8BAD\u7EC3\u91CD\u65B0\u53D7\u5230\u5173\u6CE8\uFF1B\u5927\u89C4\u6A21\u56FE\u50CF\u6570\u636E\u5E93\u548C\u8BC6\u522B\u6311\u6218\u63D0\u4F9B\u7EDF\u4E00\u7684\u6837\u672C\u4E0E\u6BD4\u8F83\u5E73\u53F0\uFF1B\u56FE\u5F62\u5904\u7406\u5668\u52A0\u901F\u5927\u91CF\u6570\u503C\u8BA1\u7B97\u30022012\u5E74\u4E9A\u5386\u514B\u65AF\u7F51\u7EDC\u628A\u6DF1\u5EA6\u5377\u79EF\u3001\u6574\u6D41\u6FC0\u6D3B\u3001\u589E\u5F3A\u3001\u968F\u673A\u5931\u6D3B\u7B49\u5B9E\u8DF5\u7EC4\u5408\u8D77\u6765\u3002",limit:"2012\u5E74\u7684\u89C6\u89C9\u8FDB\u6B65\u4E0D\u610F\u5473\u7740\u6240\u6709\u4EFB\u52A1\u5DF2\u89E3\u51B3\u3002\u6BD4\u8D5B\u6307\u6807\u53D7\u6570\u636E\u5206\u5E03\u548C\u8BC4\u4F30\u7EA6\u5B9A\u5F71\u54CD\uFF1B15.3%\u7684\u524D\u4E94\u9879\u9519\u8BEF\u7387\u6765\u81EA\u83B7\u80DC\u96C6\u6210\u63D0\u4EA4\uFF0C\u4E0D\u5E94\u8BEF\u5199\u4E3A\u5355\u4E2A\u7F51\u7EDC\u7684\u9996\u9879\u9519\u8BEF\u7387\u3002",bridge:"\u8FD9\u4E9B\u8FDB\u5C55\u5C55\u793A\u4E86\u5B66\u4E60\u590D\u6742\u8868\u793A\u7684\u53EF\u884C\u6027\uFF0C\u4E5F\u4E3A\u56F4\u68CB\u5C40\u9762\u8BC4\u4F30\u63D0\u4F9B\u6280\u672F\u80CC\u666F\u3002\u4F46\u4E9A\u5386\u514B\u65AF\u7F51\u7EDC\u5E76\u4E0D\u662F\u963F\u5C14\u6CD5\u56F4\u68CB\u76F4\u63A5\u4F7F\u7528\u7684\u7F51\u7EDC\uFF1A\u4EFB\u52A1\u3001\u8F93\u5165\u3001\u8F93\u51FA\u548C\u641C\u7D22\u673A\u5236\u4ECD\u9700\u91CD\u65B0\u8BBE\u8BA1\u3002",events:[["2006","\u6DF1\u5C42\u6A21\u578B\u8BAD\u7EC3\u63A2\u7D22","\u6DF1\u5EA6\u4FE1\u5FF5\u7F51\u7EDC\u7B49\u7814\u7A76\u91CD\u65B0\u63A8\u52A8\u591A\u5C42\u8868\u793A\u5B66\u4E60\u7684\u5B9E\u9A8C\uFF0C\u4E0D\u662F\u6DF1\u5EA6\u5B66\u4E60\u7684\u552F\u4E00\u5F00\u7AEF\u3002"],["2009 / 2010","\u6570\u636E\u4E0E\u7EDF\u4E00\u7ADE\u8D5B","\u5927\u89C4\u6A21\u56FE\u50CF\u6570\u636E\u5E93\u53CA\u968F\u540E\u6311\u6218\u8D5B\uFF0C\u4F7F\u8BAD\u7EC3\u89C4\u6A21\u3001\u516C\u5F00\u6BD4\u8F83\u4E0E\u590D\u73B0\u5B9E\u9A8C\u7684\u91CD\u8981\u6027\u63D0\u5347\u3002"],["2012","\u4E9A\u5386\u514B\u65AF\u7F51\u7EDC\u7A81\u7834","\u7814\u7A76\u8005\u5728\u5927\u89C4\u6A21\u89C6\u89C9\u5206\u7C7B\u4E0A\u5C55\u793A\u6DF1\u5C42\u5377\u79EF\u6A21\u578B\u3001\u6570\u636E\u548CGPU\u8BA1\u7B97\u7684\u7ED3\u5408\u4F18\u52BF\u3002"]],sources:[Re("\u6DF1\u5C42\u6A21\u578B\u8BAD\u7EC3\u7814\u7A76","https://doi.org/10.1162/neco.2006.18.7.1527"),Re("\u5927\u89C4\u6A21\u56FE\u50CF\u6570\u636E\u5E93\u8D44\u6599","https://www.image-net.org/about.php"),Re("2012\u5E74\u539F\u59CB\u8BBA\u6587","https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks")]},{years:"2006\u20142016",short:"\u8D70\u5411\u56F4\u68CB",title:"\u8BA9\u5B66\u4E60\u63D0\u4F9B\u5224\u65AD\uFF0C\u8BA9\u641C\u7D22\u7EC4\u7EC7\u63A2\u7D22\u3002",object:"learning",question:"\u9762\u5BF9\u56F4\u68CB\u5E9E\u5927\u7684\u5019\u9009\u7A7A\u95F4\uFF0C\u600E\u6837\u628A\u8BA1\u7B97\u6295\u5165\u66F4\u6709\u5E0C\u671B\u7684\u5206\u652F\uFF0C\u53C8\u600E\u6837\u8BC4\u4F30\u5C1A\u672A\u8D70\u5B8C\u7684\u5C40\u9762\uFF1F\u5355\u7EAF\u7A77\u4E3E\u4E0D\u53EF\u884C\uFF0C\u53EA\u6309\u76F4\u89C9\u9009\u5148\u9A8C\u6700\u9AD8\u7684\u70B9\u4E5F\u4E0D\u8DB3\u4EE5\u83B7\u5F97\u7A33\u5B9A\u7684\u9AD8\u6C34\u5E73\u51B3\u7B56\u3002",method:"\u8499\u7279\u5361\u6D1B\u6811\u641C\u7D22\u53D1\u5C55\u51FA\u4EE5\u6A21\u62DF\u7EDF\u8BA1\u5F15\u5BFC\u63A2\u7D22\u7684\u8DEF\u7EBF\u30022016\u5E74\u7CFB\u7EDF\u7ED3\u5408\u7B56\u7565\u7F51\u7EDC\u3001\u4EF7\u503C\u7F51\u7EDC\u3001\u5FEB\u901F\u6A21\u62DF\u4E0E\u641C\u7D22\uFF1A\u4ECE\u4EBA\u7C7B\u68CB\u8C31\u5B66\u4E60\uFF0C\u518D\u901A\u8FC7\u81EA\u6211\u5BF9\u5F08\u6539\u8FDB\uFF0C\u53CD\u590D\u9009\u62E9\u3001\u6269\u5C55\u3001\u8BC4\u4F30\u548C\u56DE\u4F20\u3002",limit:"2015\u5E74\u5BF9\u6A0A\u9EBE\u7684\u7ED3\u679C\u4E0E2016\u5E74\u5BF9\u674E\u4E16\u77F3\u7684\u6BD4\u8D5B\u5E94\u6309\u65F6\u95F4\u4E0E\u5BF9\u624B\u533A\u5206\u30022016\u5E74\u7684\u67B6\u6784\u4E0D\u80FD\u75282017\u5E74\u7684\u96F6\u8D77\u70B9\u7CFB\u7EDF\u66FF\u4EE3\u89E3\u91CA\u3002\u7F51\u7EDC\u4F30\u8BA1\u3001\u6709\u9650\u641C\u7D22\u548C\u8BAD\u7EC3\u7ECF\u9A8C\u4ECD\u53EF\u80FD\u5B58\u5728\u8584\u5F31\u70B9\u3002",bridge:"2016\u5E743\u67089\u65E5\u81F315\u65E5\uFF0C\u963F\u5C14\u6CD5\u56F4\u68CB\u4E0E\u674E\u4E16\u77F3\u4E94\u756A\u68CB\u4EE54\u6BD41\u7ED3\u675F\u3002\u7B2C\u56DB\u5C40\u674E\u4E16\u77F3\u53D6\u80DC\uFF0C\u63D0\u9192\u6211\u4EEC\u540C\u65F6\u89C2\u5BDF\u80FD\u529B\u4E0E\u5931\u8BEF\u3002\u63A5\u4E0B\u6765\u62C6\u89E3\u7CFB\u7EDF\u65F6\uFF0C\u8981\u5206\u6E05\u5B9E\u9645\u5386\u53F2\u3001\u539F\u7406\u5C55\u54C1\u4E0E\u5408\u6210\u8BA1\u7B97\u793A\u610F\u3002",events:[["2006","\u8499\u7279\u5361\u6D1B\u6811\u641C\u7D22\u7814\u7A76","\u5305\u62EC\u7F6E\u4FE1\u4E0A\u754C\u6811\u641C\u7D22\u5728\u5185\u7684\u65B9\u6CD5\uFF0C\u7528\u63A2\u7D22\u4E0E\u5229\u7528\u7684\u6743\u8861\u5B89\u6392\u6709\u9650\u8BA1\u7B97\u9884\u7B97\u3002"],["2015\u5E7410\u6708","\u5BF9\u6A0A\u9EBE\u7684\u4E94\u5C40\u6BD4\u8D5B","\u963F\u5C14\u6CD5\u56F4\u68CB\u4EE55\u6BD40\u6218\u80DC\u6B27\u6D32\u56F4\u68CB\u51A0\u519B\u6A0A\u9EBE\uFF0C\u7ED3\u679C\u968F\u540E\u968F2016\u5E74\u7814\u7A76\u516C\u5F00\u3002"],["2016\u5E741\u6708","\u8BBA\u6587\u516C\u5F00\u7CFB\u7EDF\u65B9\u6CD5","\u7B56\u7565\u7F51\u7EDC\u3001\u4EF7\u503C\u7F51\u7EDC\u4E0E\u6811\u641C\u7D22\u7684\u7EC4\u5408\u8FDB\u5165\u516C\u5F00\u7814\u7A76\u8BA8\u8BBA\u3002"],["2016\u5E743\u6708","\u4E0E\u674E\u4E16\u77F3\u4E94\u756A\u68CB","\u603B\u6BD4\u52064\u6BD41\uFF0C\u674E\u4E16\u77F3\u8D62\u5F97\u7B2C\u56DB\u5C40\u3002\u610F\u4E49\u5728\u4E8E\u4E13\u95E8\u4EFB\u52A1\u7684\u91CD\u5927\u7A81\u7834\uFF0C\u800C\u975E\u673A\u5668\u83B7\u5F97\u610F\u8BC6\u3002"]],sources:[Re("\u6811\u641C\u7D22\u63A2\u7D22\u4E0E\u5229\u7528\u7814\u7A76","https://doi.org/10.1007/11871842_29"),Re("2016\u5E74\u539F\u59CB\u7814\u7A76","https://doi.org/10.1038/nature16961"),Re("\u5B98\u65B9\u963F\u5C14\u6CD5\u56F4\u68CB\u8D44\u6599","https://deepmind.google/research/breakthroughs/alphago/"),Re("2017\u5E74\u96F6\u8D77\u70B9\u7CFB\u7EDF\u4F5C\u5BF9\u7167","https://doi.org/10.1038/nature24270")]}];function rd(i){return Math.max(0,Math.min(5,Math.round(Number.isFinite(+i)?+i:0)))}var Ne=i=>document.querySelector(i);function ad(i){let t=0,e=!1,n="neuron",s=Ne("#origins-view");s.innerHTML=`<section class="curator-hero"><div class="curator-line"><span>00 / \u4EBA\u5DE5\u667A\u80FD\u5386\u53F2\u4E3B\u5C55\u533A</span><span>1943 \u2014 2016</span></div><div class="curator-cover"><div><span class="folio">\u4E03\u5341\u4E09\u5E74\u7684\u95EE\u9898\uFF0C\u4E0E\u4E00\u6B21\u6C47\u5408\u3002</span><h1>\u667A\u80FD\u7684\u957F\u591C\uFF0C<br><em>\u5E76\u975E\u4E00\u77AC\u7834\u6653\u3002</em></h1><p>\u4ECE\u903B\u8F91\u795E\u7ECF\u5143\u5230\u9996\u5C14\u68CB\u76D8\uFF0C\u4ECE\u89C4\u5219\u7684\u96C4\u5FC3\u5230\u5B66\u4E60\u7684\u7A81\u7834\u3002<br>\u8FD9\u4E0D\u662F\u4E00\u6761\u4E0D\u65AD\u80DC\u5229\u7684\u76F4\u7EBF\uFF0C\u800C\u662F\u65B9\u6CD5\u3001\u74F6\u9888\u4E0E\u6761\u4EF6\u76F8\u4E92\u6539\u53D8\u7684\u5386\u53F2\u3002</p><div class="cover-actions"><a href="#match" class="solid-link">\u8FDB\u51652016\u5E74\u4E3B\u5C55\u5385 \u2197</a><button id="history-read">\u4ECE\u7B2C\u4E00\u7AE0\u5F00\u59CB\u9605\u8BFB \u2193</button></div></div><div class="cover-seal"><div class="seal-ring one"></div><div class="seal-ring two"></div><span>2016<small>\u673A\u5668\u843D\u4E0B\u7684\u4E00\u624B</small></span><i>\u89C4\u5219 / \u5B66\u4E60 / \u641C\u7D22</i></div></div><div class="history-thesis"><span>\u7B56\u5C55\u5BFC\u8A00</span><p>\u4E3A\u4EC0\u4E48\u57282016\u5E74\uFF1F\u4E0D\u53EA\u662F\u66F4\u591A\u8BA1\u7B97\uFF0C\u4E5F\u4E0D\u53EA\u662F\u66F4\u6DF1\u7F51\u7EDC\u3002\u5B83\u9700\u8981\u6211\u4EEC\u540C\u65F6\u7406\u89E3\uFF1A<b>\u4EC0\u4E48\u80FD\u591F\u88AB\u5F62\u5F0F\u5316\uFF0C\u4EC0\u4E48\u80FD\u591F\u4ECE\u6570\u636E\u4E2D\u5B66\u4E60\uFF0C\u4EE5\u53CA\u6709\u9650\u8BA1\u7B97\u5982\u4F55\u88AB\u5B89\u6392\u3002</b></p><span>\u516D\u7AE0 \xB7 \u56DB\u7EC4\u539F\u7406\u5C55\u54C1<br>\u95EE\u9898 \u2192 \u65B9\u6CD5 \u2192 \u9650\u5236 \u2192 \u8F6C\u6298</span></div></section>
 <nav class="chapter-rail" aria-label="\u5386\u53F2\u7AE0\u8282">${ol.map((o,l)=>`<button data-chapter="${l}" aria-pressed="false"><span>${String(l+1).padStart(2,"0")}</span><b>${o.short}</b><small>${o.years}</small></button>`).join("")}</nav>
 <section class="historical-object" id="historical-object"><div class="object-topline"><span>\u539F\u7406\u9986\u85CF / \u53EF\u65CB\u8F6C\u4E0E\u62C6\u89E3</span><span id="object-number">\u5C55\u54C1 01 / 04</span></div><div class="object-layout"><div class="object-stage-wrap"><div id="history-scene" class="history-scene" aria-label="\u5386\u53F2\u8BA1\u7B97\u539F\u7406\u4E09\u7EF4\u5C55\u54C1"></div><div class="object-caption"><span id="object-note"></span><small>\u62D6\u52A8\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u7ED3\u6784\u5206\u79BB</small></div></div><aside class="object-inspector"><span id="object-category"></span><h2 id="object-title"></h2><p id="object-subtitle"></p><ol id="object-parts"></ol><button id="history-explode" class="solid-link" aria-pressed="false">\u62C6\u89E3\u539F\u7406\u7ED3\u6784</button><p class="object-boundary">\u6A21\u578B\u662F\u4E3A\u89E3\u91CA\u65B9\u6CD5\u800C\u8BBE\u8BA1\u7684\u539F\u521B\u539F\u7406\u88C5\u7F6E\uFF0C\u4E0D\u662F\u5386\u53F2\u5B9E\u7269\u7684\u6570\u5B57\u590D\u523B\u3002</p></aside></div><div class="object-selector">${Object.entries(al).map(([o,l],c)=>`<button data-object="${o}"><span>0${c+1}</span>${l.name}</button>`).join("")}</div></section>
 <div class="reading-control"><span id="reading-now"></span><label>\u53D9\u4E8B\u8272\u5F69<input id="era" aria-label="\u5386\u53F2\u8FDB\u7A0B" type="range" min="0" max="5" step="1" value="0"></label><span>\u5355\u8272\u6863\u6848 \u2192 \u5F69\u8272\u8BA1\u7B97</span></div>
 <div class="history-volumes">${ol.map((o,l)=>`<article class="history-chapter" id="chapter-${l}" data-index="${l}"><header><span class="chapter-num">${String(l+1).padStart(2,"0")}</span><div><span class="chapter-period">${o.years}</span><h2>${o.title}</h2></div><button data-chapter-model="${l}">\u67E5\u770B\u5BF9\u5E94\u5C55\u54C1 \u2197</button></header><div class="chapter-grid"><div class="chapter-narrative"><div><span>\u5F53\u65F6\u7684\u95EE\u9898</span><p>${o.question}</p></div><div><span>\u65B9\u6CD5\u4E0E\u8FDB\u5C55</span><p>${o.method}</p></div><div class="limit-note"><span>\u80FD\u529B\u8FB9\u754C</span><p>${o.limit}</p></div></div><aside class="chapter-events">${o.events.map(([c,u,d])=>`<div><time>${c}</time><h3>${u}</h3><p>${d}</p></div>`).join("")}</aside></div><div class="chapter-transition"><span>\u901A\u5411\u4E0B\u4E00\u5E55</span><p>${o.bridge}</p></div><div class="chapter-sources"><span>\u6765\u6E90</span>${o.sources.map(c=>`<a href="${c.url}" target="_blank" rel="noopener">${c.name} \u2197</a>`).join("")}</div></article>`).join("")}</div>
 <section class="history-finale"><div><span class="eyebrow">\u4E0D\u662F\u8D77\u70B9\uFF0C\u4E5F\u4E0D\u662F\u7EC8\u70B9\u3002</span><h2>\u5386\u53F2\u89E3\u91CA\u5B83\u4E3A\u4F55\u51FA\u73B0\u3002<br><em>\u4E0B\u4E00\u5385\uFF0C\u62C6\u5F00\u5B83\u5982\u4F55\u5DE5\u4F5C\u3002</em></h2><p>2016\u5E743\u6708\uFF0C4\u6BD41\u3002\u4E0D\u8981\u628A\u6BD4\u5206\u5F53\u4F5C\u901A\u7528\u667A\u80FD\u7684\u8BC1\u660E\uFF1B\u628A\u5B83\u5F53\u4F5C\u5165\u53E3\uFF0C\u7EE7\u7EED\u89C2\u5BDF\u5B66\u4E60\u3001\u641C\u7D22\u4E0E\u8BA1\u7B97\u7684\u7ED3\u5408\u3002</p></div><a class="solid-link" href="#match">01 \u4E16\u7EAA\u5BF9\u5C40 \u2192</a></section>`;function r(o){n=o;let l=al[o],c=Object.keys(al).indexOf(o);Ne("#object-number").textContent=`\u5C55\u54C1 0${c+1} / 04`,Ne("#object-category").textContent=`\u65B9\u6CD5\u6863\u6848 / 0${c+1}`,Ne("#object-title").textContent=l.name,Ne("#object-subtitle").textContent=l.subtitle,Ne("#object-note").textContent=l.note,Ne("#object-parts").innerHTML=l.parts.map((u,d)=>`<li><span>0${d+1}</span>${u}</li>`).join(""),Ne("#history-explode").textContent="\u62C6\u89E3\u539F\u7406\u7ED3\u6784",Ne("#history-explode").setAttribute("aria-pressed","false"),s.querySelectorAll("[data-object]").forEach(u=>u.classList.toggle("active",u.dataset.object===o)),e&&i.show(Ne("#history-scene"),l.mode)}function a(o,l=!1){t=rd(o);let c=ol[t];Ne("#era").value=t,Ne("#reading-now").textContent=`\u5F53\u524D\u7AE0\u8282\uFF1A0${t+1} \xB7 ${c.short}`,Ne("#historical-object").style.setProperty("--history-gray",String(1-t/5)),s.querySelectorAll("[data-chapter]").forEach(u=>{u.classList.toggle("active",+u.dataset.chapter===t),u.setAttribute("aria-pressed",+u.dataset.chapter===t)}),s.querySelectorAll(".history-chapter").forEach((u,d)=>u.classList.toggle("is-current",d===t)),r(c.object),l&&document.getElementById("chapter-"+t).scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth",block:"start"})}return s.addEventListener("click",o=>{let l=o.target.closest("[data-chapter]");l&&a(+l.dataset.chapter,!0);let c=o.target.closest("[data-chapter-model]");c&&(a(+c.dataset.chapterModel),Ne("#historical-object").scrollIntoView({behavior:"smooth",block:"start"}));let u=o.target.closest("[data-object]");u&&r(u.dataset.object)}),Ne("#era").oninput=o=>a(+o.target.value),Ne("#history-read").onclick=()=>a(0,!0),Ne("#history-explode").onclick=o=>{let l=i.explode();o.target.textContent=l?"\u91CD\u65B0\u7EC4\u5408":"\u62C6\u89E3\u539F\u7406\u7ED3\u6784",o.target.setAttribute("aria-pressed",l)},a(0),{show(){e=!0,r(n)},hide(){e=!1}}}var Bt=i=>document.querySelector(i),kr=(i,t,e,n)=>`<div class="museum-heading"><div class="eyebrow">${i} / ${t}</div><h1>${e}</h1><p>${n}</p></div>`,ll=()=>`<div class="museum-sources">${id.map(([i,t])=>`<a href="${t}" target="_blank" rel="noopener">${i} \u2197</a>`).join("")}</div>`,Vr=i=>`<div class="deep-cards">${i.map(([t,e,n])=>`<article><span>${t}</span><h3>${e}</h3><p>${n}</p></article>`).join("")}</div>`;function od(){let i=kc(),t={...Hc},e="gpu",n=0,s={shell:["\u673A\u67B6\u4E0E\u5916\u58F3","\u627F\u8F7D\u3001\u4F9B\u7535\u3001\u6563\u70ED\u4E0E\u7EF4\u62A4\u3002\u5916\u5F62\u5C5E\u4E8E\u5C55\u9648\u539F\u7406\u6A21\u578B\uFF0C\u4E0D\u662F2016\u5E74\u539F\u59CB\u8BBE\u5907\u7167\u7247\u6216\u590D\u523B\u3002"],cpu:["\u901A\u7528\u5904\u7406\u5668","\u8C03\u5EA6\u4EFB\u52A1\u3001\u7BA1\u7406\u7A0B\u5E8F\u4E0E\u641C\u7D22\u6D41\u7A0B\u3002\u901A\u7528\u5904\u7406\u5668\u4E0E\u56FE\u5F62\u5904\u7406\u5668\u7684\u5206\u5DE5\uFF0C\u968F\u7CFB\u7EDF\u9636\u6BB5\u4E0E\u90E8\u7F72\u65B9\u5F0F\u53D8\u5316\u3002"],gpu:["\u52A0\u901F\u8BA1\u7B97","\u5927\u91CF\u4E58\u52A0\u8FD0\u7B97\u53EF\u5E76\u884C\u6267\u884C\uFF0C\u9002\u5408\u795E\u7ECF\u7F51\u7EDC\u8BAD\u7EC3\u53CA\u90E8\u5206\u8BC4\u4F30\u5DE5\u4F5C\u3002\u539F\u7CFB\u7EDF\u91C7\u7528\u5206\u5E03\u5F0F\u8BA1\u7B97\uFF0C\u4E0D\u5E94\u88AB\u753B\u6210\u5355\u4E00\u201C\u667A\u80FD\u82AF\u7247\u201D\u3002"],memory:["\u5185\u5B58\u4E0E\u663E\u5B58","\u4FDD\u5B58\u8F93\u5165\u3001\u53C2\u6570\u3001\u4E2D\u95F4\u7ED3\u679C\u548C\u641C\u7D22\u7EDF\u8BA1\u3002\u5E26\u5BBD\u3001\u5BB9\u91CF\u4E0E\u8BBF\u95EE\u5F00\u9500\u90FD\u4F1A\u9650\u5236\u7CFB\u7EDF\u541E\u5410\u3002"],network:["\u8282\u70B9\u4E92\u8054","\u5728\u591A\u4E2A\u8BA1\u7B97\u8282\u70B9\u95F4\u4F20\u9012\u4FE1\u606F\u4E0E\u4EFB\u52A1\u3002\u6B64\u5904\u8DEF\u5F84\u4E3A\u89C6\u89C9\u7F16\u7801\uFF0C\u4E0D\u8868\u793A\u5F53\u5E74\u771F\u5B9E\u7F51\u7EDC\u62D3\u6251\u3002"],board:["\u68CB\u76D8\u4E0E\u72B6\u6001\u7F16\u7801","\u5341\u4E5D\u4E58\u5341\u4E5D\u4EA4\u70B9\u63D0\u4F9B\u7A7A\u95F4\u7ED3\u6784\u3002\u5F53\u524D\u68CB\u5F62\u4E3A\u5408\u6210\u793A\u4F8B\uFF0C\u672A\u5F15\u7528\u6216\u4F2A\u9020\u674E\u4E16\u77F3\u6BD4\u8D5B\u7684\u9010\u624B\u68CB\u8C31\u3002"]},r=sd(x=>{let M=s[x]||s.network,E=Bt("#hardware-info");E&&(E.innerHTML=`<span>\u90E8\u4EF6\u89E3\u5256</span><h3>${M[0]}</h3><p>${M[1]}</p>`)}),a=document.querySelector(".main-nav");a.innerHTML=Br.map(([x,M,E])=>`<a id="nav-${x}" href="#${x}"><span>${M}</span>${E}</a>`).join(""),Bt("#brand").href="#origins",Bt("#brand").querySelector("span:last-child").innerHTML="\u673A\u5668\u843D\u4E0B\u7684\u4E00\u624B<small>2016 \xB7 \u4ECE\u963F\u5C14\u6CD5\u56F4\u68CB\u8D70\u8FDB\u4EBA\u5DE5\u667A\u80FD</small>",document.title="2016\uFF1A\u673A\u5668\u843D\u4E0B\u7684\u4E00\u624B\uFF5C\u4EBA\u5DE5\u667A\u80FD\u4EA4\u4E92\u5C55\u9986",Bt("#history-view").id="origins-view",Bt("#model-view").id="dimensions-view",Bt("#labs-view").id="experiments-view";let o=Bt("#origins-view");o.innerHTML=kr("00","\u5D1B\u8D77\u524D\u591C / \u4ECE\u9ED1\u767D\u5230\u5F69\u8272","\u673A\u5668\u843D\u4E0B\u4E4B\u524D\uFF0C<br><em>\u5DF2\u7ECF\u8D70\u8FC7\u5F88\u957F\u7684\u8DEF\u3002</em>","\u4EE52016\u5E74\u7684\u4E00\u573A\u56F4\u68CB\u8D5B\u4E3A\u5165\u53E3\uFF0C\u56DE\u5230\u89C4\u5219\u3001\u5B66\u4E60\u3001\u6570\u636E\u4E0E\u7B97\u529B\u76F8\u4E92\u63A8\u52A8\u7684\u5386\u53F2\u3002\u989C\u8272\u4EE3\u8868\u5C55\u9648\u53D9\u4E8B\uFF0C\u4E0D\u610F\u5473\u7740\u6B64\u524D\u4E0D\u5B58\u5728\u4EBA\u5DE5\u667A\u80FD\u3002")+`<div class="origins-stage" id="origins-stage"><div class="archive-board" aria-hidden="true">${Array.from({length:49},(x,M)=>`<i class="${[2,8,12,16,24,31,36,40].includes(M)?"stone":""} ${M%2?"white":""}"></i>`).join("")}</div><div class="archive-caption"><span>\u89C4\u5219 \u2192 \u5B66\u4E60 \u2192 \u641C\u7D22</span><b id="era-year">1950</b><h2 id="era-title">\u673A\u5668\u80FD\u5426\u8868\u73B0\u51FA\u667A\u80FD\uFF1F</h2><p id="era-text"></p></div></div><label class="era-control">\u62D6\u52A8\u5386\u53F2\u8FDB\u7A0B\uFF1A\u9ED1\u767D\u9010\u6E10\u8FDB\u5165\u5F69\u8272<input id="era" type="range" min="0" max="5" step="1" value="0" aria-label="\u5386\u53F2\u8FDB\u7A0B"></label><div class="era-tabs">${["1950","1956","1980\u20141998","1997","2009\u20142012","2016"].map((x,M)=>`<button data-era="${M}">${x}</button>`).join("")}</div>`+Vr([["\u7B2C\u4E00\u6761\u7EBF\u7D22","\u89C4\u5219\u548C\u641C\u7D22\u7684\u529B\u91CF","\u65E9\u671F\u7CFB\u7EDF\u5E38\u901A\u8FC7\u7B26\u53F7\u89C4\u5219\u548C\u663E\u5F0F\u641C\u7D22\u89E3\u51B3\u4EFB\u52A1\u30021997\u5E74\u6DF1\u84DD\u6218\u80DC\u56FD\u9645\u8C61\u68CB\u4E16\u754C\u51A0\u519B\uFF0C\u5C55\u793A\u4E86\u4E13\u95E8\u7B97\u6CD5\u3001\u8BC4\u4F30\u4E0E\u8BA1\u7B97\u8D44\u6E90\u7684\u7ED3\u5408\uFF1B\u4E0D\u80FD\u636E\u6B64\u65AD\u8A00\u6240\u6709\u667A\u80FD\u4EFB\u52A1\u90FD\u80FD\u9760\u7A77\u4E3E\u3002"],["\u7B2C\u4E8C\u6761\u7EBF\u7D22","\u4ECE\u6837\u672C\u4E2D\u8C03\u6574\u53C2\u6570","\u795E\u7ECF\u7F51\u7EDC\u4E0E\u53CD\u5411\u4F20\u64AD\u7814\u7A76\u6301\u7EED\u53D1\u5C55\u30021980\u5E74\u7684\u65B0\u8BA4\u77E5\u673A\u30011989\u5E74\u7684\u624B\u5199\u6570\u5B57\u8BC6\u522B\u7814\u7A76\u53CA1998\u5E74\u7684\u5377\u79EF\u6587\u6863\u8BC6\u522B\uFF0C\u662F\u5C42\u6B21\u5316\u89C6\u89C9\u5B66\u4E60\u7684\u91CD\u8981\u8282\u70B9\uFF0C\u8FDC\u65E9\u4E8E2012\u5E74\u3002"],["\u7B2C\u4E09\u6761\u7EBF\u7D22","\u6570\u636E\u4E0E\u5E76\u884C\u8BA1\u7B97\u6C47\u5408","2009\u5E74\u5927\u89C4\u6A21\u56FE\u50CF\u6570\u636E\u5E93\u4E0E\u540E\u7EED\u6311\u6218\u8D5B\u63D0\u4F9B\u8BAD\u7EC3\u4E0E\u8BC4\u4F30\u57FA\u7840\uFF1B2012\u5E74\u4E9A\u5386\u514B\u65AF\u7F51\u7EDC\u51F8\u663E\u6DF1\u5EA6\u5377\u79EF\u3001GPU\u8BA1\u7B97\u548C\u5927\u89C4\u6A21\u6570\u636E\u7ED3\u5408\u7684\u4EF7\u503C\u3002\u5B83\u662F\u6280\u672F\u80CC\u666F\uFF0C\u4E0D\u662F\u963F\u5C14\u6CD5\u56F4\u68CB\u7684\u76F4\u63A5\u67B6\u6784\u3002"]])+`<section class="museum-essay"><h2>\u56F4\u68CB\uFF0C\u4E3A\u4EC0\u4E48\u6210\u4E3A\u4E00\u9053\u96BE\u9898\uFF1F</h2><p>\u56F4\u68CB\u7684\u53EF\u9009\u843D\u70B9\u591A\uFF0C\u5C40\u9762\u8BC4\u4EF7\u96BE\u4EE5\u5B8C\u5168\u8F6C\u5316\u6210\u4EBA\u5DE5\u89C4\u5219\u3002\u4EC5\u4EC5\u589E\u52A0\u641C\u7D22\u6DF1\u5EA6\uFF0C\u5E76\u4E0D\u80FD\u6D88\u9664\u7EC4\u5408\u7206\u70B8\u3002\u963F\u5C14\u6CD5\u56F4\u68CB\u5C06\u5B66\u4E60\u5F97\u5230\u7684\u7B56\u7565\u548C\u4EF7\u503C\u4F30\u8BA1\u4E0E\u6811\u641C\u7D22\u7ED3\u5408\uFF0C\u628A\u6709\u9650\u8BA1\u7B97\u4F18\u5148\u5206\u914D\u7ED9\u66F4\u6709\u5E0C\u671B\u7684\u53D8\u5316\u3002</p><div class="cause-chain"><span>\u4EBA\u7C7B\u77E5\u8BC6</span><b>\u2192</b><span>\u6570\u636E\u9A71\u52A8\u5B66\u4E60</span><b>\uFF0B</b><span>\u641C\u7D22\u4E0E\u8BA1\u7B97</span><b>\u2192</b><span>2016\u5E74\u7A81\u7834</span></div><a class="solid-link" href="#match">\u8FDB\u51652016\u5E74\u4E3B\u5C55\u5385 \u2192</a></section>${ll()}`;let l=document.querySelector("main"),c=(x,M,E)=>{let C=document.createElement("section");return C.id=x+"-view",C.className="page-view",C.hidden=!0,C.innerHTML=M,l.insertBefore(C,E||Bt("#dimensions-view")),C};c("match",kr("01","\u4E16\u7EAA\u5BF9\u5C40 / \u9996\u5C14 / 2016\u5E743\u6708","\u4E00\u5F20\u68CB\u76D8\uFF0C<br><em>\u4E0E\u4E00\u5957\u5206\u5E03\u5F0F\u8BA1\u7B97\u7CFB\u7EDF\u3002</em>","2016\u5E743\u67089\u65E5\u81F315\u65E5\uFF0C\u963F\u5C14\u6CD5\u56F4\u68CB\u4E0E\u674E\u4E16\u77F3\u8FDB\u884C\u4E94\u756A\u68CB\uFF0C\u4EE54\u6BD41\u83B7\u80DC\u3002\u8FD9\u91CC\u62C6\u5F00\u7684\u4E0D\u662F\u865A\u6784\u7684\u4EBA\u5F62\u673A\u5668\uFF0C\u800C\u662F\u8BA1\u7B97\u7CFB\u7EDF\u7684\u539F\u7406\u7ED3\u6784\u3002")+`<div class="museum-exhibit"><div><div id="match-scene" class="museum-canvas" aria-label="\u53EF\u65CB\u8F6C\u7684\u8BA1\u7B97\u673A\u67B6\u548C\u5341\u4E5D\u8DEF\u68CB\u76D8"></div><div class="museum-scene-controls"><button id="machine-explode" class="solid-link">\u62C6\u89E3\u8BA1\u7B97\u7CFB\u7EDF</button><span>\u62D6\u52A8\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u70B9\u51FB\u90E8\u4EF6</span></div></div><aside id="hardware-info"><span>\u539F\u7406\u6A21\u578B / \u975E\u539F\u673A\u590D\u523B</span><h3>\u673A\u5668\u4E0D\u7B49\u4E8E\u5355\u4E2A\u673A\u7BB1</h3><p>\u795E\u7ECF\u7F51\u7EDC\u8BC4\u4F30\u3001\u641C\u7D22\u4E0E\u8BA1\u7B97\u8D44\u6E90\u5171\u540C\u53C2\u4E0E\u51B3\u7B56\u3002\u673A\u67B6\u3001\u901A\u7528\u5904\u7406\u5668\u3001\u52A0\u901F\u6A21\u5757\u3001\u5185\u5B58\u4E0E\u4E92\u8054\u5728\u8FD9\u91CC\u88AB\u5206\u5C42\u8868\u8FBE\u3002</p><p>\u65C1\u8FB9\u7684\u68CB\u76D8\u4E3A\u5408\u6210\u5C40\u9762\uFF0C\u4EC5\u7528\u4E8E\u5C55\u793A\u72B6\u6001\u8F93\u5165\u4E0E\u8BA1\u7B97\u8F93\u51FA\u7684\u5173\u7CFB\uFF1B\u4E0D\u662F\u6BD4\u8D5B\u5B9E\u6218\u590D\u76D8\u3002</p></aside></div><div class="match-score"><b>4 <i>:</i> 1</b><div><span>\u963F\u5C14\u6CD5\u56F4\u68CB / \u674E\u4E16\u77F3</span><p>\u4E13\u95E8\u4EFB\u52A1\u4E0A\u7684\u91CD\u5927\u7A81\u7834\uFF0C\u4E0D\u662F\u901A\u7528\u667A\u80FD\u6216\u673A\u5668\u610F\u8BC6\u7684\u8BC1\u660E\u3002</p></div></div><div class="game-picker">${zc.games.map((x,M)=>`<button data-game="${M}" class="${M===0?"active":""}"><span>\u7B2C${M+1}\u5C40 \xB7 ${x.date}</span><b>${x.winner} \u80DC</b></button>`).join("")}</div><div id="game-note" class="game-note"></div>`+Vr([["\u5C40\u9762\u4E0E\u5224\u65AD","\u7B2C\u4E8C\u5C40\u7B2C37\u624B","\u963F\u5C14\u6CD5\u56F4\u68CB\u7684\u4E00\u6B21\u9009\u62E9\u5F15\u8D77\u4E13\u4E1A\u68CB\u624B\u4E0E\u516C\u4F17\u8BA8\u8BBA\u3002\u5B83\u9002\u5408\u8BF4\u660E\u673A\u5668\u7684\u7B56\u7565\u4E0D\u5FC5\u4E0E\u4EBA\u7C7B\u76F4\u89C9\u76F8\u540C\uFF0C\u4F46\u4E0D\u5E94\u88AB\u5305\u88C5\u6210\u673A\u5668\u4EA7\u751F\u60C5\u611F\u3001\u7075\u611F\u6216\u610F\u8BC6\u7684\u8BC1\u636E\u3002"],["\u5931\u8BEF\u4E0E\u8FB9\u754C","\u7B2C\u56DB\u5C40\u7B2C78\u624B","\u674E\u4E16\u77F3\u5728\u7B2C\u56DB\u5C40\u53D6\u80DC\uFF0C\u663E\u793A\u7CFB\u7EDF\u4ECD\u53EF\u80FD\u51FA\u73B0\u5224\u65AD\u4E0E\u641C\u7D22\u4E0A\u7684\u8584\u5F31\u70B9\u3002\u5355\u5C40\u7ED3\u679C\u9700\u8981\u7ED3\u5408\u5C40\u9762\u548C\u540E\u7EED\u53D8\u5316\u7406\u89E3\uFF0C\u4E0D\u80FD\u628A\u4E00\u624B\u68CB\u5F53\u4F5C\u5B8C\u6574\u7B97\u6CD5\u89E3\u91CA\u3002"],["\u7ED3\u679C\u4E0E\u610F\u4E49","\u4ECE\u80DC\u8D1F\u8F6C\u5411\u673A\u5236","\u4E94\u756A\u68CB\u8BA9\u5B66\u4E60\u4E0E\u641C\u7D22\u7684\u7ED3\u5408\u8FDB\u5165\u516C\u4F17\u89C6\u91CE\u3002\u771F\u6B63\u503C\u5F97\u62C6\u89E3\u7684\uFF0C\u662F\u5019\u9009\u5982\u4F55\u4EA7\u751F\u3001\u5C40\u9762\u5982\u4F55\u8BC4\u4EF7\u3001\u5206\u652F\u5982\u4F55\u88AB\u63A2\u7D22\uFF0C\u4EE5\u53CA\u8BAD\u7EC3\u548C\u63A8\u7406\u5982\u4F55\u5206\u5F00\u3002"]])+ll()),c("decision",kr("02","\u51B3\u7B56\u4E4B\u6838 / 2016\u5E74\u7CFB\u7EDF\u673A\u5236","\u5148\u63D0\u51FA\u5019\u9009\uFF0C<br><em>\u518D\u628A\u8BA1\u7B97\u7528\u5728\u503C\u5F97\u63A2\u7D22\u7684\u5730\u65B9\u3002</em>","\u7B56\u7565\u7F51\u7EDC\u63D0\u4F9B\u843D\u5B50\u503E\u5411\uFF0C\u4EF7\u503C\u7F51\u7EDC\u8BC4\u4F30\u5C40\u9762\uFF0C\u8499\u7279\u5361\u6D1B\u6811\u641C\u7D22\u53CD\u590D\u9009\u62E9\u3001\u6269\u5C55\u3001\u8BC4\u4F30\u548C\u56DE\u4F20\u3002\u5B83\u4E0D\u662F\u201C\u68CB\u76D8\u901A\u8FC7\u4E00\u6B21\u5206\u7C7B\u7F51\u7EDC\u5C31\u5F97\u5230\u6700\u4F73\u843D\u5B50\u201D\u3002")+'<div class="decision-path"><button data-mechanism="policy" class="active">01 \u7B56\u7565\u7F51\u7EDC<small>\u54EA\u4E9B\u843D\u5B50\u503C\u5F97\u8003\u8651\uFF1F</small></button><span>\uFF0B</span><button data-mechanism="value">02 \u4EF7\u503C\u7F51\u7EDC<small>\u5C40\u9762\u5BF9\u8C01\u66F4\u6709\u5229\uFF1F</small></button><span>\u21C4</span><button data-mechanism="search">03 \u6811\u641C\u7D22<small>\u5982\u4F55\u5206\u914D\u63A2\u7D22\u9884\u7B97\uFF1F</small></button></div><div class="decision-detail" id="mechanism-detail"></div><div class="search-experiment"><div class="section-head"><div><span class="eyebrow">\u53EF\u64CD\u4F5C / \u6559\u5B66\u641C\u7D22\u6A21\u578B</span><h2>\u8BA9\u8BC4\u4F30\u7ED3\u679C\uFF0C\u6CBF\u641C\u7D22\u6811\u56DE\u4F20\u3002</h2></div><button id="search-reset">\u91CD\u7F6E\u641C\u7D22 \u21BA</button></div><div class="tree-stage" id="tree-stage"></div><div class="search-actions"><button id="search-step" class="solid-link">\u6267\u884C\u4E0B\u4E00\u9636\u6BB5 \u2192</button><button id="search-cycle">\u8FD0\u884C\u4E00\u6B21\u5B8C\u6574\u5FAA\u73AF</button><span id="search-status" role="status"></span></div><div class="search-table" id="search-table"></div><p class="technical">\u672C\u5B9E\u9A8C\u91C7\u7528\u4EBA\u5DE5\u5148\u9A8C\u4E0E\u5408\u6210\u8BC4\u4F30\u503C\uFF0C\u53EA\u89E3\u91CA\u63A2\u7D22\u3001\u5229\u7528\u4E0E\u56DE\u4F20\u3002\u9009\u62E9\u516C\u5F0F\u4E3A\u7B80\u5316\u6559\u5B66\u5F62\u5F0F\uFF0C\u4E0D\u662F2016\u5E74\u963F\u5C14\u6CD5\u56F4\u68CB\u7684\u5B8C\u6574\u5B9E\u73B0\u3002</p></div>'+Vr([["\u7B56\u7565","\u76D1\u7763\u5B66\u4E60\u4E0E\u5F3A\u5316\u5B66\u4E60","2016\u5E74\u7CFB\u7EDF\u5148\u4ECE\u4EBA\u7C7B\u68CB\u8C31\u5B66\u4E60\u843D\u5B50\uFF0C\u518D\u4F7F\u7528\u5F3A\u5316\u5B66\u4E60\u6539\u8FDB\u7B56\u7565\u3002\u7B56\u7565\u5206\u5E03\u5F15\u5BFC\u641C\u7D22\uFF0C\u5E76\u4E0D\u4FDD\u8BC1\u6700\u9AD8\u5148\u9A8C\u5019\u9009\u6700\u7EC8\u83B7\u9009\u3002"],["\u4EF7\u503C","\u51CF\u5C11\u5BF9\u5B8C\u6574\u7EC8\u5C40\u6A21\u62DF\u7684\u4F9D\u8D56","\u4EF7\u503C\u7F51\u7EDC\u5B66\u4E60\u4F30\u8BA1\u5C40\u9762\u7ED3\u679C\u30022016\u5E74\u7CFB\u7EDF\u8FD8\u7ED3\u5408\u5FEB\u901F\u6A21\u62DF\u7B56\u7565\u7B49\u673A\u5236\uFF1B\u4E0D\u80FD\u628A\u540E\u7EED\u96F6\u8D77\u70B9\u7CFB\u7EDF\u7684\u8BBE\u8BA1\u5168\u90E8\u56DE\u5199\u8FDB2016\u5E74\u3002"],["\u641C\u7D22","\u9009\u62E9\u2014\u6269\u5C55\u2014\u8BC4\u4F30\u2014\u56DE\u4F20","\u641C\u7D22\u4E0D\u662F\u628A\u6574\u68F5\u535A\u5F08\u6811\u7A77\u5C3D\u3002\u5DF2\u6709\u4F30\u8BA1\u4E0E\u8BBF\u95EE\u7EDF\u8BA1\u5F71\u54CD\u540E\u7EED\u8D44\u6E90\u5206\u914D\uFF0C\u66F4\u591A\u8BBF\u95EE\u4E5F\u4E0D\u81EA\u52A8\u6784\u6210\u5BF9\u67D0\u4E00\u843D\u5B50\u7684\u6570\u5B66\u80DC\u5229\u8BC1\u660E\u3002"]])+`<div class="bridge-note"><h3>\u548C\u539F\u6765\u7684\u795E\u7ECF\u7F51\u7EDC\u5C55\u54C1\u6709\u4EC0\u4E48\u5173\u7CFB\uFF1F</h3><p>\u5377\u79EF\u3001\u5F20\u91CF\u4E0E\u6743\u91CD\u5B66\u4E60\u662F\u5171\u540C\u6280\u672F\u8BED\u8A00\u3002\u4F46\u963F\u5C14\u6CD5\u56F4\u68CB\u5904\u7406\u68CB\u76D8\u7279\u5F81\u5E73\u9762\uFF0C\u8F93\u51FA\u7B56\u7565\u6216\u4EF7\u503C\uFF1B\u4E9A\u5386\u514B\u65AF\u7F51\u7EDC\u5904\u7406\u56FE\u50CF\u5E76\u8F93\u51FA\u7C7B\u522B\u3002\u4E8C\u8005\u4E0D\u662F\u540C\u4E00\u4E2A\u7F51\u7EDC\u3002</p><a href="#dimensions">\u5BF9\u7167\u67E5\u770B\u56FE\u50CF\u4E0E\u68CB\u76D8\u8F93\u5165 \u2192</a></div>${ll()}`),c("growth",kr("04","\u6210\u957F\u7CFB\u7EDF / \u4E09\u7EC4\u53EF\u64CD\u4F5C\u7684\u539F\u7406\u6A21\u578B","\u4E0D\u662F\u957F\u51FA\u4EBA\u683C\uFF0C<br><em>\u800C\u662F\u6539\u53D8\u53C2\u6570\u4E0E\u80FD\u529B\u3002</em>","\u7528\u201C\u5DE5\u5177\u3001\u7EC3\u4E60\u3001\u5BF9\u624B\u201D\u7684\u6210\u957F\u6863\u6848\u8FDE\u63A5\u786C\u4EF6\u3001\u53CD\u9988\u4E0E\u81EA\u6211\u5BF9\u5F08\u3002\u62DF\u4EBA\u53EA\u662F\u4E00\u79CD\u89E3\u91CA\u65B9\u5F0F\uFF0C\u4E0D\u610F\u5473\u7740\u673A\u5668\u62E5\u6709\u4EBA\u7684\u60C5\u7EEA\u3001\u610F\u56FE\u6216\u610F\u8BC6\u3002")+'<div class="growth-tabs"><button data-growth="gpu" class="active">01 \u7EC3\u4E60\u5DE5\u5177 / \u52A0\u901F\u8BA1\u7B97</button><button data-growth="training">02 \u53CD\u9988\u5B66\u4E60 / \u66F4\u65B0\u53C2\u6570</button><button data-growth="selfplay">03 \u81EA\u6211\u5BF9\u5F08 / \u751F\u6210\u7ECF\u9A8C</button></div><div class="museum-exhibit"><div><div id="growth-scene" class="museum-canvas" aria-label="\u8BA1\u7B97\u6A21\u5757\u3001\u8BAD\u7EC3\u5FAA\u73AF\u548C\u53CC\u7B56\u7565\u5BF9\u5F08\u7684\u4E09\u7EF4\u6A21\u578B"></div><div class="museum-scene-controls"><button id="growth-explode" class="solid-link">\u62C6\u5F00\u5F53\u524D\u6A21\u578B</button><span>\u4E09\u7EC4\u539F\u7406\u6A21\u578B \xB7 \u975E\u771F\u5B9E\u8BBE\u5907\u590D\u523B</span></div></div><aside id="growth-info"></aside></div><div id="growth-experiment"></div>'+Vr([["\u5DE5\u5177\u4E0D\u662F\u667A\u80FD","\u5E76\u884C\u4E58\u52A0\u4E0E\u6570\u636E\u642C\u8FD0","\u52A0\u901F\u5668\u9002\u5408\u5927\u91CF\u76F8\u4F3C\u6570\u503C\u64CD\u4F5C\uFF0C\u663E\u5B58\u548C\u4E92\u8054\u8D1F\u8D23\u4F9B\u7ED9\u6570\u636E\u3002\u6027\u80FD\u53D6\u51B3\u4E8E\u7B97\u6CD5\u3001\u5E76\u884C\u5EA6\u3001\u5185\u5B58\u5E26\u5BBD\u548C\u8C03\u5EA6\uFF0C\u4E0D\u662F\u53EA\u770B\u82AF\u7247\u6570\u91CF\u3002"],["\u8BAD\u7EC3\u4E0D\u7B49\u4E8E\u6BD4\u8D5B","\u5B66\u4E60\u53C2\u6570\u4E0E\u4F7F\u7528\u53C2\u6570","\u8BAD\u7EC3\u9636\u6BB5\u4F7F\u7528\u6837\u672C\u548C\u53CD\u9988\u6539\u53D8\u6743\u91CD\uFF1B\u6BD4\u8D5B\u9636\u6BB5\u4F7F\u7528\u65E2\u5B9A\u7CFB\u7EDF\u8BC4\u4F30\u5E76\u641C\u7D22\u3002\u6B64\u5904\u7684\u5355\u6743\u91CD\u5E73\u65B9\u8BEF\u5DEE\u5B9E\u9A8C\u4E0D\u662F\u7B56\u7565\u68AF\u5EA6\u6216\u5B8C\u6574\u7F51\u7EDC\u8BAD\u7EC3\u3002"],["2016 \u2260 2017","\u4ECE\u4EBA\u7C7B\u7ECF\u9A8C\u5230\u96F6\u8D77\u70B9\u7814\u7A76","2016\u5E74\u7248\u672C\u4F7F\u7528\u4EBA\u7C7B\u68CB\u8C31\u4E0E\u81EA\u6211\u5BF9\u5F08\u30022017\u5E74\u963F\u5C14\u6CD5\u56F4\u68CB\u96F6\u7248\u672C\u91C7\u7528\u4E0D\u540C\u7684\u5B66\u4E60\u65B9\u6848\uFF0C\u4E0D\u4F9D\u8D56\u4EBA\u7C7B\u68CB\u8C31\uFF1B\u4E0D\u80FD\u5C06\u4E24\u8005\u6DF7\u4E3A\u540C\u4E00\u4E2A\u6D41\u7A0B\u3002"]])+ll(),Bt("#experiments-view")),Bt("#dimensions-view").insertAdjacentHTML("afterbegin",kr("03","\u7EF4\u5EA6\u89E3\u5256 / \u56FE\u50CF\u4E0E\u68CB\u76D8\u7684\u5BF9\u7167","\u62C6\u5F00\u5E73\u9762\uFF0C<br><em>\u770B\u89C1\u6570\u636E\u5982\u4F55\u7EC4\u7EC7\u3002</em>","\u539F\u4E9A\u5386\u514B\u65AF\u7F51\u7EDC\u4FDD\u7559\u4E3A\u56FE\u50CF\u5377\u79EF\u793A\u4F8B\u3002\u4E0B\u65B9\u5BF9\u7167\u53F0\u5C06\u56FE\u50CF\u989C\u8272\u5E73\u9762\u5207\u6362\u4E3A\u68CB\u76D8\u72B6\u6001\u5E73\u9762\uFF1A\u76F8\u540C\u7684\u5F20\u91CF\u8BED\u8A00\uFF0C\u4E0D\u540C\u7684\u8F93\u5165\u610F\u4E49\u4E0E\u4EFB\u52A1\u8F93\u51FA\u3002")+'<div class="dimension-lab"><div><span class="eyebrow">\u5207\u7247\u4E0E\u901A\u9053 / \u53EF\u64CD\u4F5C\u5BF9\u7167</span><div class="dimension-controls"><button id="dim-image" class="active">\u56FE\u50CF\u989C\u8272\u7F16\u7801</button><button id="dim-board">\u68CB\u76D8\u72B6\u6001\u7F16\u7801</button></div><label>\u5E73\u9762\u5206\u79BB\u91CF<input id="plane-spread" type="range" min="0" max="100" value="35" aria-label="\u5E73\u9762\u5206\u79BB\u91CF"></label><label>\u89C2\u5BDF\u5207\u7247<input id="plane-slice" type="range" min="0" max="2" value="0" step="1" aria-label="\u89C2\u5BDF\u5207\u7247"></label><p id="plane-caption"></p></div><div class="plane-stack" id="plane-stack"><canvas width="240" height="240"></canvas><canvas width="240" height="240"></canvas><canvas width="240" height="240"></canvas></div></div><p class="dimension-boundary">\u68CB\u76D8\u4F7F\u7528\u201C\u9ED1\u68CB\u3001\u767D\u68CB\u3001\u7A7A\u4F4D\u201D\u4E09\u4E2A\u7B80\u5316\u5E73\u9762\uFF0C\u4EC5\u8BF4\u660E\u7F16\u7801\u601D\u60F3\uFF1B2016\u5E74\u539F\u7CFB\u7EDF\u7684\u7279\u5F81\u7F16\u7801\u8FDC\u6BD4\u8FD9\u590D\u6742\u3002\u4E0B\u65B9\u5341\u4E09\u5C42\u6A21\u578B\u4ECD\u662F\u56FE\u50CF\u5206\u7C7B\u793A\u4F8B\uFF0C\u4E0D\u662F\u963F\u5C14\u6CD5\u56F4\u68CB\u7F51\u7EDC\u590D\u523B\u3002</p>'),Bt("#experiments-view").insertAdjacentHTML("beforeend",'<section class="boundary-lab"><div class="section-head"><div><span class="eyebrow">05 / \u8FFD\u52A0\u5B9E\u9A8C\u4E0E\u8FB9\u754C</span><h2>\u7B2C\u4E00\u5370\u8C61\uFF0C\u8FD8\u662F\u641C\u7D22\u540E\u7684\u5224\u65AD\uFF1F</h2></div><a class="solid-link" href="#decision">\u8FDB\u5165\u641C\u7D22\u5B9E\u9A8C \u2192</a></div><p>\u5148\u9A8C\u503E\u5411\u53EA\u662F\u5019\u9009\u8D77\u70B9\u3002\u524D\u5F80\u51B3\u7B56\u4E4B\u6838\u9010\u6B21\u5206\u914D\u63A2\u7D22\u9884\u7B97\uFF0C\u5BF9\u6BD4\u8BBF\u95EE\u6B21\u6570\u4E0E\u5E73\u5747\u8BC4\u4F30\u503C\uFF0C\u89C2\u5BDF\u641C\u7D22\u662F\u5426\u6539\u53D8\u5019\u9009\u6392\u5E8F\u3002</p>'+Vr([["\u53EF\u9760\u6027","\u6982\u7387\u4E0D\u662F\u627F\u8BFA","\u5F52\u4E00\u5316\u5206\u5E03\u53D7\u5019\u9009\u7C7B\u522B\u3001\u8F93\u5165\u3001\u8BAD\u7EC3\u4E0E\u6821\u51C6\u5F71\u54CD\u3002\u6700\u5927\u6982\u7387\u4E0D\u7B49\u4E8E\u4E00\u5B9A\u6B63\u786E\uFF0C\u6559\u5B66\u5206\u6570\u66F4\u4E0D\u80FD\u5F53\u4F5C\u771F\u5B9E\u8BC6\u522B\u7ED3\u679C\u3002"],["\u4E13\u7528\u667A\u80FD","\u6BD4\u8D5B\u83B7\u80DC\u4E0D\u7B49\u4E8E\u901A\u7528\u80FD\u529B","\u56F4\u68CB\u89C4\u5219\u660E\u786E\u3001\u53CD\u9988\u660E\u786E\u3002\u5BF9\u56F4\u68CB\u7684\u9AD8\u6C34\u5E73\u4E0D\u81EA\u52A8\u610F\u5473\u7740\u7CFB\u7EDF\u80FD\u7406\u89E3\u6240\u6709\u73B0\u5B9E\u95EE\u9898\uFF0C\u66F4\u4E0D\u80FD\u8BC1\u660E\u610F\u8BC6\u3002"],["\u5B9E\u73B0\u8FB9\u754C","\u5C55\u793A\u3001\u5C40\u90E8\u8BA1\u7B97\u4E0E\u771F\u5B9E\u63A8\u7406","\u4E09\u7EF4\u7ED3\u6784\u3001\u7C92\u5B50\u8DEF\u5F84\u4E0E\u5386\u53F2\u786C\u4EF6\u4E3A\u539F\u7406\u8868\u8FBE\uFF1B\u5C40\u90E8\u5C0F\u5B9E\u9A8C\u6267\u884C\u6570\u503C\u8FD0\u7B97\uFF1B\u5168\u7CFB\u7EDF\u6CA1\u6709\u52A0\u8F7D\u5386\u53F2\u6A21\u578B\u6743\u91CD\u3002"]])+"</section>");let d=[["1950","\u673A\u5668\u80FD\u5426\u8868\u73B0\u51FA\u667A\u80FD\uFF1F","\u56FE\u7075\u4ECE\u53EF\u89C2\u5BDF\u7684\u884C\u4E3A\u51FA\u53D1\u8BA8\u8BBA\u673A\u5668\u667A\u80FD\u3002\u8FD9\u91CC\u4E0D\u628A\u667A\u80FD\u8868\u73B0\u548C\u4E3B\u89C2\u610F\u8BC6\u6DF7\u4E3A\u4E00\u8C08\u3002"],["1956","\u4EBA\u5DE5\u667A\u80FD\u6210\u4E3A\u4E00\u4E2A\u7814\u7A76\u65B9\u5411","\u8FBE\u7279\u8305\u65AF\u590F\u5B63\u7814\u7A76\u9879\u76EE\u6210\u4E3A\u8FD9\u4E00\u9886\u57DF\u7684\u5386\u53F2\u8282\u70B9\uFF1B\u4E4B\u540E\u89C4\u5219\u3001\u63A8\u7406\u3001\u641C\u7D22\u4E0E\u5B66\u4E60\u8DEF\u7EBF\u957F\u671F\u5E76\u884C\u3002"],["1980\u20141998","\u5C40\u90E8\u8FDE\u63A5\u4E0E\u5B66\u4E60\u65B9\u6CD5\u79EF\u7D2F","\u4ECE\u65B0\u8BA4\u77E5\u673A\u5230\u5377\u79EF\u624B\u5199\u8BC6\u522B\uFF0C\u591A\u5C42\u89C6\u89C9\u8868\u793A\u9010\u6B65\u8D70\u5411\u5B9E\u9645\u5E94\u7528\u3002"],["1997","\u4E13\u7528\u7CFB\u7EDF\u5728\u56FD\u9645\u8C61\u68CB\u4E0A\u7A81\u7834","\u6DF1\u84DD\u4F9D\u9760\u4E13\u95E8\u8BBE\u8BA1\u7684\u641C\u7D22\u3001\u8BC4\u4F30\u4E0E\u8BA1\u7B97\u8D44\u6E90\u6218\u80DC\u5361\u65AF\u5E15\u7F57\u592B\u3002\u56F4\u68CB\u7684\u5C40\u9762\u8BC4\u4EF7\u4E0E\u5206\u652F\u89C4\u6A21\u4ECD\u63D0\u51FA\u4E0D\u540C\u6311\u6218\u3002"],["2009\u20142012","\u6570\u636E\u3001\u7B97\u529B\u4E0E\u6DF1\u5EA6\u7F51\u7EDC\u6C47\u5408","\u5927\u89C4\u6A21\u56FE\u50CF\u6570\u636E\u4E0E\u5E76\u884C\u8BA1\u7B97\u63A8\u52A8\u89C6\u89C9\u5B66\u4E60\u3002\u4E9A\u5386\u514B\u65AF\u7F51\u7EDC\u662F\u91CD\u8981\u91CC\u7A0B\u7891\uFF0C\u800C\u4E0D\u662F\u6DF1\u5EA6\u5B66\u4E60\u7684\u53D1\u660E\u3002"],["2016","\u5B66\u4E60\u4E0E\u641C\u7D22\uFF0C\u8D70\u5230\u68CB\u76D8\u4E2D\u592E","\u7B56\u7565\u7F51\u7EDC\u3001\u4EF7\u503C\u7F51\u7EDC\u548C\u8499\u7279\u5361\u6D1B\u6811\u641C\u7D22\u7ED3\u5408\u3002\u4E09\u6708\u9996\u5C14\u4E94\u756A\u68CB\uFF0C\u963F\u5C14\u6CD5\u56F4\u68CB\u4EE54\u6BD41\u6218\u80DC\u674E\u4E16\u77F3\u3002"]];function f(){let x=zc.games[n];Bt("#game-note").innerHTML=`<span>\u7B2C${n+1}\u5C40 \xB7 2016\u5E74${x.date}</span><h3>${x.winner} \u80DC</h3><p>${x.note}</p><small>\u4E0A\u65B9\u4E09\u7EF4\u68CB\u5F62\u4E3A\u7EDF\u4E00\u5408\u6210\u793A\u4F8B\uFF0C\u5207\u6362\u5BF9\u5C40\u4EC5\u6539\u53D8\u5386\u53F2\u8BB2\u89E3\uFF0C\u4E0D\u5192\u5145\u5BF9\u5E94\u5B9E\u6218\u5C40\u9762\u3002</small>`}document.querySelectorAll("[data-game]").forEach(x=>x.onclick=()=>{n=+x.dataset.game,document.querySelectorAll("[data-game]").forEach(M=>M.classList.toggle("active",M===x)),f()}),f(),Bt("#machine-explode").onclick=x=>{let M=r.explode();x.target.textContent=M?"\u6062\u590D\u8BA1\u7B97\u7CFB\u7EDF":"\u62C6\u89E3\u8BA1\u7B97\u7CFB\u7EDF",x.target.setAttribute("aria-pressed",M)};let p={policy:["\u7B56\u7565\u7F51\u7EDC","\u68CB\u76D8\u72B6\u6001 \u2192 \u5377\u79EF\u8868\u793A \u2192 \u843D\u5B50\u5206\u5E03","\u5728\u5408\u6CD5\u843D\u70B9\u4E2D\u5F62\u6210\u76F8\u5BF9\u503E\u5411\uFF0C\u5F15\u5BFC\u641C\u7D22\u4F18\u5148\u63A2\u7D22\u3002\u5206\u5E03\u6765\u81EA\u5C40\u9762\u8BC4\u4F30\uFF0C\u4E0D\u662F\u9010\u9879\u624B\u5199\u7684\u68CB\u5F62\u89C4\u5219\u3002"],value:["\u4EF7\u503C\u7F51\u7EDC","\u68CB\u76D8\u72B6\u6001 \u2192 \u5C40\u9762\u8868\u793A \u2192 \u7ED3\u679C\u4F30\u8BA1","\u4F30\u8BA1\u5C40\u9762\u5BF9\u5F53\u524D\u68CB\u624B\u7684\u6709\u5229\u7A0B\u5EA6\u3002\u5B83\u4E0D\u8F93\u51FA\u5B8C\u6574\u7684\u6700\u4F73\u540E\u7EED\u53D8\u5316\uFF0C\u4E5F\u4E0D\u4FDD\u8BC1\u6BD4\u8D5B\u7ED3\u679C\u3002"],search:["\u8499\u7279\u5361\u6D1B\u6811\u641C\u7D22","\u9009\u62E9 \u2192 \u6269\u5C55 \u2192 \u8BC4\u4F30 \u2192 \u56DE\u4F20 \u2192 \u518D\u9009\u62E9","\u53CD\u590D\u66F4\u65B0\u8BBF\u95EE\u7EDF\u8BA1\u4E0E\u8BC4\u4F30\uFF0C\u517C\u987E\u5DF2\u6709\u9AD8\u503C\u5206\u652F\u548C\u63A2\u7D22\u4E0D\u8DB3\u7684\u5206\u652F\u3002\u8BA1\u7B97\u9884\u7B97\u6709\u9650\uFF0C\u56E0\u6B64\u8D44\u6E90\u5206\u914D\u672C\u8EAB\u5F88\u91CD\u8981\u3002"]};function g(x){let[M,E,C]=p[x];Bt("#mechanism-detail").innerHTML=`<div class="mechanism-symbol" aria-hidden="true">${x==="policy"?"\u03C0":x==="value"?"V":"\u219F"}</div><div><span>\u51B3\u7B56\u673A\u5236 / \u975E\u5386\u53F2\u6743\u91CD\u63A8\u7406</span><h2>${M}</h2><div class="formula">${E}</div><p>${C}</p></div>`}document.querySelectorAll("[data-mechanism]").forEach(x=>x.onclick=()=>{g(x.dataset.mechanism),document.querySelectorAll("[data-mechanism]").forEach(M=>M.classList.toggle("active",M===x))}),g("policy");function _(){let x=i.visits.reduce((M,E)=>M+E,0);Bt("#tree-stage").innerHTML=`<svg viewBox="0 0 760 280" role="img" aria-label="\u4E09\u4E2A\u5019\u9009\u5206\u652F\u7684\u641C\u7D22\u6811"><g class="tree-lines">${[140,380,620].map((M,E)=>`<path class="${i.selected===E?"chosen":""}" d="M380 55 Q380 100 ${M} 160"/>${[-55,0,55].map(C=>`<path d="M${M} 170 L${M+C} 245"/>`).join("")}`).join("")}</g><g><circle cx="380" cy="45" r="25" class="root"/><text x="380" y="50">\u5C40\u9762</text>${[140,380,620].map((M,E)=>`<circle cx="${M}" cy="165" r="30" class="${i.selected===E?"chosen":""}"/><text x="${M}" y="162">${["\u7532","\u4E59","\u4E19"][E]}</text><text x="${M}" y="181" class="stat">\u8BBF\u95EE ${i.visits[E]}</text>${[-55,0,55].map(C=>`<circle cx="${M+C}" cy="247" r="9"/>`).join("")}`).join("")}</g></svg>`,Bt("#search-status").textContent=`\u4E0B\u4E00\u9636\u6BB5\uFF1A${ed[i.phase]} \xB7 \u5DF2\u56DE\u4F20 ${x} \u6B21`,Bt("#search-table").innerHTML=[0,1,2].map(M=>`<div><b>\u5019\u9009${["\u7532","\u4E59","\u4E19"][M]}</b><span>\u5148\u9A8C ${(i.prior[M]*100).toFixed(0)}%</span><span>\u8BBF\u95EE ${i.visits[M]}</span><strong>\u5747\u503C ${i.values[M].toFixed(3)}</strong></div>`).join("")}Bt("#search-step").onclick=()=>{i=Vc(i),_()},Bt("#search-cycle").onclick=()=>{for(let x=0;x<4;x++)i=Vc(i);_()},Bt("#search-reset").onclick=()=>{i=kc(),_()},_();let m={gpu:["\u7EC3\u4E60\u5DE5\u5177 / \u52A0\u901F\u8BA1\u7B97","\u62C6\u5F00\u7684\u662F\u56FE\u5F62\u52A0\u901F\u5668\u539F\u7406\u7ED3\u6784","\u4ECE\u5E95\u677F\u3001\u8BA1\u7B97\u6838\u5FC3\u3001\u5B58\u50A8\u6A21\u5757\u5230\u6563\u70ED\u7ED3\u6784\u3002\u70B9\u51FB\u201C\u62C6\u5F00\u5F53\u524D\u6A21\u578B\u201D\u5206\u79BB\u90E8\u4EF6\uFF1B\u6B64\u56FE\u4E0D\u590D\u523B2016\u5E74\u7684\u5177\u4F53\u663E\u5361\u6216\u670D\u52A1\u5668\u3002"],training:["\u53CD\u9988\u5B66\u4E60 / \u7B80\u5316\u68AF\u5EA6\u66F4\u65B0","\u628A\u8BEF\u5DEE\u53CD\u9988\u7ED9\u53C2\u6570","\u6F14\u793A\u5355\u4E2A\u6743\u91CD\u7684\u5E73\u65B9\u8BEF\u5DEE\u66F4\u65B0\u3002\u8F93\u51650.8\u3001\u76EE\u68070.9\uFF0C\u9010\u6B65\u8C03\u6574\u6743\u91CD\uFF1B\u8FD9\u662F\u771F\u5B9E\u6570\u503C\u8BA1\u7B97\uFF0C\u4F46\u4E0D\u662F\u5B8C\u6574\u795E\u7ECF\u7F51\u7EDC\u8BAD\u7EC3\u3002"],selfplay:["\u81EA\u6211\u5BF9\u5F08 / \u751F\u6210\u7ECF\u9A8C","\u540C\u4E00\u89C4\u5219\u4E0B\uFF0C\u7B56\u7565\u6210\u4E3A\u5BF9\u624B","\u4E24\u4FA7\u7ED3\u6784\u8868\u793A\u7B56\u7565\u5B9E\u4F8B\uFF0C\u5171\u4EAB\u7684\u68CB\u76D8\u4EA7\u751F\u5BF9\u5C40\u53CD\u9988\u3002\u52A8\u753B\u4EC5\u8BF4\u660E\u4EA4\u4E92\u5173\u7CFB\uFF0C\u4E0D\u5305\u542B\u68CB\u529B\uFF0C\u4E0D\u6267\u884C\u5408\u6CD5\u843D\u5B50\u3001\u63D0\u5B50\u6216\u80DC\u8D1F\u5224\u5B9A\u3002"]};function h(){let[x,M,E]=m[e];if(Bt("#growth-info").innerHTML=`<span>${x}</span><h3>${M}</h3><p>${E}</p><p>\u201C\u6210\u957F\u201D\u53EA\u6307\u8BAD\u7EC3\u53C2\u6570\u53CA\u4EFB\u52A1\u80FD\u529B\u7684\u53D8\u5316\uFF0C\u4E0D\u662F\u83B7\u5F97\u4EBA\u7684\u4E3B\u89C2\u4F53\u9A8C\u3002</p>`,Bt("#growth-experiment").innerHTML=e==="training"?'<div class="training-panel"><div><span>\u8F93\u51650.8 \xB7 \u76EE\u68070.9 \xB7 \u5355\u6743\u91CD\u5E73\u65B9\u8BEF\u5DEE</span><h3>\u8BEF\u5DEE\u4E0B\u964D\uFF0C\u4F46\u4E0D\u610F\u5473\u7740\u5B66\u4F1A\u4E86\u56F4\u68CB\u3002</h3><button id="train-step" class="solid-link">\u66F4\u65B0\u4E00\u6B21\u53C2\u6570</button><button id="train-reset">\u91CD\u7F6E\u8BAD\u7EC3</button></div><div class="training-values"><b id="train-epoch"></b><strong id="train-error"></strong><span id="train-weight"></span></div></div>':`<div class="bridge-note"><h3>${e==="gpu"?"\u62C6\u89E3\u540E\u8BF7\u89C2\u5BDF\u4E09\u4E2A\u95EE\u9898":"\u539F\u7248\u4E0E\u96F6\u8D77\u70B9\u7CFB\u7EDF\uFF0C\u4E0D\u662F\u540C\u4E00\u6761\u8D77\u8DD1\u7EBF"}</h3><p>${e==="gpu"?"\u8BA1\u7B97\u5728\u54EA\u91CC\u53D1\u751F\uFF1F\u53C2\u6570\u5B58\u5728\u54EA\u91CC\uFF1F\u70ED\u91CF\u5982\u4F55\u79BB\u5F00\uFF1F\u786C\u4EF6\u90E8\u4EF6\u7684\u5F62\u72B6\u53EA\u662F\u539F\u7406\u8868\u8FBE\uFF0C\u8BAD\u7EC3\u901F\u5EA6\u4ECD\u9700\u5B9E\u9645\u6D4B\u8BD5\u3002":"2016\u5E74\u7CFB\u7EDF\u5148\u4F7F\u7528\u4EBA\u7C7B\u68CB\u8C31\u5E76\u8FDB\u884C\u81EA\u6211\u5BF9\u5F08\u5B66\u4E60\u30022017\u5E74\u96F6\u7248\u672C\u4ECE\u81EA\u6211\u5BF9\u5F08\u5B66\u4E60\uFF0C\u91C7\u7528\u4E0D\u540C\u65B9\u6848\u3002\u672C\u5C55\u533A\u53EA\u89E3\u91CA\u53CD\u9988\u5FAA\u73AF\uFF0C\u4E0D\u58F0\u79F0\u590D\u73B0\u4EFB\u4E00\u7CFB\u7EDF\u3002"}</p></div>`,e==="training"){let C=()=>{Bt("#train-epoch").textContent=`\u7B2C ${t.epoch} \u6B21\u66F4\u65B0`,Bt("#train-error").textContent=`\u8BEF\u5DEE ${t.error.toFixed(6)}`,Bt("#train-weight").textContent=`\u6743\u91CD ${t.weight.toFixed(6)}`};Bt("#train-step").onclick=()=>{t=nd(t),C()},Bt("#train-reset").onclick=()=>{t={...Hc},C()},C()}}document.querySelectorAll("[data-growth]").forEach(x=>x.onclick=()=>{e=x.dataset.growth,document.querySelectorAll("[data-growth]").forEach(M=>M.classList.toggle("active",M===x)),r.show(Bt("#growth-scene"),e),Bt("#growth-explode").textContent="\u62C6\u5F00\u5F53\u524D\u6A21\u578B",h()}),Bt("#growth-explode").onclick=x=>{x.target.textContent=r.explode()?"\u6062\u590D\u5F53\u524D\u6A21\u578B":"\u62C6\u5F00\u5F53\u524D\u6A21\u578B"},h();let b="image";function A(){let x=+Bt("#plane-spread").value,M=+Bt("#plane-slice").value,E=b==="image"?["\u7EA2\u8272","\u7EFF\u8272","\u84DD\u8272"]:["\u9ED1\u68CB","\u767D\u68CB","\u7A7A\u4F4D"];document.querySelectorAll("#plane-stack canvas").forEach((C,S)=>{let T=C.getContext("2d");T.clearRect(0,0,240,240),T.fillStyle=["#392328","#183f35","#20334d"][S],T.fillRect(0,0,240,240);for(let L=0;L<19;L++)for(let U=0;U<19;U++){let X=sl.find(K=>K[0]===U&&K[1]===L),Y=b==="board"?S===2?!X:X&&X[2]===S:Math.sin(U*.25+S)*Math.cos(L*.21-S)>.1;T.fillStyle=Y?["#de9c99","#8bc8ae","#8caedd"][S]:"#152536",T.fillRect(6+U*12,6+L*12,10,10)}T.fillStyle="#e2edf2",T.font="14px sans-serif",T.fillText(E[S]+"\u5E73\u9762",12,225),C.style.transform=`translate(${(S-1)*x*.65}px,${(S-1)*x*.24}px) rotateY(-28deg) rotateX(13deg)`,C.style.opacity=S===M?"1":".43",C.style.zIndex=S===M?5:S}),Bt("#plane-caption").textContent=`\u5F53\u524D\u5207\u7247\uFF1A${E[M]}\u5E73\u9762\u3002${b==="board"?"19\xD719\u7B80\u5316\u72B6\u6001\u7F16\u7801\uFF0C\u4E0D\u662F\u539F\u59CB\u5B8C\u6574\u7279\u5F81\u3002":"\u5408\u6210\u901A\u9053\u7EB9\u7406\u7528\u4E8E\u8BF4\u660E\u5E73\u9762\u7EC4\u7EC7\uFF0C\u4E0D\u662F\u539F\u59CB\u7167\u7247\u50CF\u7D20\u3002"}`}Bt("#dim-image").onclick=()=>{b="image",Bt("#dim-image").classList.add("active"),Bt("#dim-board").classList.remove("active"),A()},Bt("#dim-board").onclick=()=>{b="board",Bt("#dim-board").classList.add("active"),Bt("#dim-image").classList.remove("active"),A()},Bt("#plane-spread").oninput=Bt("#plane-slice").oninput=A,A();let y=ad(r);return{show(x){y.hide(),r.hide(),x==="origins"&&y.show(),x==="match"&&(r.show(Bt("#match-scene"),"match"),Bt("#machine-explode").textContent="\u62C6\u89E3\u8BA1\u7B97\u7CFB\u7EDF",Bt("#machine-explode").setAttribute("aria-pressed","false")),x==="growth"&&(r.show(Bt("#growth-scene"),e),Bt("#growth-explode").textContent="\u62C6\u5F00\u5F53\u524D\u6A21\u578B")},dispose(){r.dispose()}}}var cl=[{name:"\u901A\u9053\u5206\u79BB",tag:"\u56FE\u50CF\u7F16\u7801",goal:"\u5206\u522B\u67E5\u770B\u7EA2\u3001\u7EFF\u3001\u84DD\u4E09\u4E2A\u901A\u9053\uFF0C\u89C2\u5BDF\u540C\u4E00\u56FE\u50CF\u7684\u6570\u503C\u7EC4\u6210\u3002",hint:"\u4F9D\u6B21\u70B9\u51FB\u4E09\u4E2A\u989C\u8272\u901A\u9053\uFF1B\u5408\u6210\u56FE\u4E0D\u8BA1\u4F5C\u72EC\u7ACB\u901A\u9053\u3002",layer:0},{name:"\u5377\u79EF\u626B\u63CF",tag:"\u5C40\u90E8\u611F\u53D7\u91CE",goal:"\u628A\u5377\u79EF\u7A97\u53E3\u79FB\u5230\u81F3\u5C11\u4E24\u4E2A\u4E0D\u540C\u4F4D\u7F6E\uFF0C\u6BD4\u8F83\u8F93\u51FA\u54CD\u5E94\u3002",hint:"\u79FB\u52A8\u4E0B\u65B9\u6ED1\u6761\uFF0C\u6216\u70B9\u51FB\u8F93\u5165\u77E9\u9635\u3002\u81F3\u5C11\u626B\u63CF\u4E24\u4E2A\u4E0D\u540C\u7A97\u53E3\u3002",layer:1},{name:"\u6700\u5927\u6C60\u5316",tag:"\u54CD\u5E94\u4FDD\u7559",goal:"\u5728\u8FD9\u4E2A\u5C40\u90E8\u7A97\u53E3\u4E2D\uFF0C\u9009\u51FA\u5E94\u88AB\u4FDD\u7559\u7684\u6700\u5927\u503C\u3002",hint:"\u6BD4\u8F83\u5168\u90E8\u4E5D\u4E2A\u6570\u503C\uFF0C\u6700\u5927\u503C\u662F 7\uFF1B\u5E76\u975E\u9009\u62E9\u4E2D\u5FC3\u4F4D\u7F6E\u3002",layer:2},{name:"\u5F20\u91CF\u5C55\u5E73",tag:"\u7D22\u5F15\u91CD\u6392",goal:"\u6267\u884C\u4E00\u6B21\u5C55\u5E73\uFF0C\u518D\u5224\u65AD\u5143\u7D20\u6570\u91CF\u662F\u5426\u53D1\u751F\u6539\u53D8\u3002",hint:"\u5C55\u5E73\u53EA\u6539\u53D8\u7D22\u5F15\u7EC4\u7EC7\u65B9\u5F0F\u3002\u5148\u6267\u884C\u91CD\u6392\uFF0C\u518D\u56DE\u7B54\u95EE\u9898\u3002",layer:8},{name:"\u6743\u91CD\u8C03\u8282",tag:"\u7EBF\u6027\u7EC4\u5408\u4E0E\u6574\u6D41",goal:"\u8C03\u8282\u8FDE\u63A5\u6743\u91CD\uFF0C\u8BA9\u6574\u6D41\u540E\u7684\u8F93\u51FA\u6070\u597D\u53D8\u6210 0\u3002",hint:"\u5148\u8BA9\u52A0\u6743\u548C\u4E0D\u5927\u4E8E 0\u3002\u6574\u6D41\u51FD\u6570\u4F1A\u628A\u8D1F\u503C\u622A\u65AD\u4E3A 0\u3002",layer:9},{name:"\u6982\u7387\u7ADE\u4E89",tag:"\u5F52\u4E00\u5316\u5206\u5E03",goal:"\u8C03\u8282\u7B2C\u4E00\u7C7B\u5206\u6570\uFF0C\u4F7F\u5176\u5F52\u4E00\u5316\u6982\u7387\u8FBE\u5230 80% \u6216\u66F4\u9AD8\u3002",hint:"\u63D0\u9AD8\u7B2C\u4E00\u9879\u5206\u6570\uFF0C\u89C2\u5BDF\u5176\u4F59\u6982\u7387\u4E00\u8D77\u4E0B\u964D\u3002\u5206\u6570\u4E0D\u7B49\u4E8E\u6982\u7387\u3002",layer:12}];function ji(){return{index:0,completed:[],channels:[],scans:[],flattened:!1,weight:1,score:2,passed:!1,feedback:"\u7B49\u5F85\u64CD\u4F5C\u3002"}}var Hs=(i,t)=>({...i,passed:!0,completed:[...new Set([...i.completed,i.index])],feedback:t});function ld(i,t,e){let n={...i};if(t==="reset")return ji();if(t==="retry")return{...ji(),index:n.index,completed:n.completed.filter(s=>s!==n.index)};if(t==="next")return n.passed&&n.index<5?{...ji(),index:n.index+1,completed:n.completed}:n;if(n.index===0&&t==="channel"&&["red","green","blue"].includes(e)&&(n.channels=[...new Set([...n.channels,e])],n.feedback=`\u5DF2\u89C2\u5BDF ${n.channels.length} / 3 \u4E2A\u901A\u9053\u3002`,n.channels.length===3))return Hs(n,"\u901A\u9053\u5206\u79BB\u5B8C\u6210\u3002\u5F69\u8272\u56FE\u50CF\u7531\u7A7A\u95F4\u5BF9\u9F50\u7684\u4E09\u4E2A\u989C\u8272\u901A\u9053\u7EC4\u6210\u3002");if(n.index===1&&t==="scan"&&Number.isInteger(e)&&e>=0&&e<=8&&(n.scans=[...new Set([...n.scans,e])],n.feedback=`\u5DF2\u626B\u63CF ${n.scans.length} \u4E2A\u4E0D\u540C\u7A97\u53E3\u3002`,n.scans.length>=2))return Hs(n,"\u5377\u79EF\u626B\u63CF\u5B8C\u6210\u3002\u540C\u4E00\u7EC4\u6743\u91CD\u5728\u4E0D\u540C\u4F4D\u7F6E\u91CD\u590D\u5E94\u7528\uFF0C\u8F93\u51FA\u968F\u5C40\u90E8\u8F93\u5165\u53D8\u5316\u3002");if(n.index===2&&t==="pool"&&(n.feedback=e===7?"":"\u8FD9\u4E2A\u503C\u4E0D\u662F\u5C40\u90E8\u6700\u5927\u503C\uFF0C\u8BF7\u518D\u6B21\u6BD4\u8F83\u3002",e===7))return Hs(n,"\u6700\u5927\u6C60\u5316\u8F93\u51FA\u4E3A 7\u3002\u7A7A\u95F4\u7A97\u53E3\u7F29\u5C0F\uFF0C\u5C40\u90E8\u6700\u5927\u54CD\u5E94\u88AB\u4FDD\u7559\u3002");if(n.index===3&&t==="flatten"&&(n.flattened=!0,n.feedback="\u91CD\u6392\u5B8C\u6210\uFF1A2\xD73 \u5F20\u91CF \u2192 \u957F\u5EA6\u4E3A 6 \u7684\u5411\u91CF\u3002\u8BF7\u5224\u65AD\u5143\u7D20\u6570\u91CF\u3002"),n.index===3&&t==="answer")if(!n.flattened)n.feedback="\u8BF7\u5148\u6267\u884C\u5C55\u5E73\uFF0C\u518D\u5224\u65AD\u3002";else{if(e==="same")return Hs(n,"\u5C55\u5E73\u5B8C\u6210\u3002\u6392\u5217\u6539\u53D8\uFF0C\u4F46\u516D\u4E2A\u6570\u503C\u53CA\u5176\u6570\u91CF\u90FD\u672A\u6539\u53D8\u3002");n.feedback="\u6CE8\u610F\uFF1A\u5C55\u5E73\u6CA1\u6709\u6DFB\u52A0\u6216\u5220\u9664\u6570\u503C\uFF0C\u8BF7\u518D\u89C2\u5BDF\u3002"}if(n.index===4&&t==="weight"&&Number.isFinite(e)){n.weight=e;let s=ni([.8,-.4,.6],[e,.5,-.2])+.1;if(n.feedback=`\u52A0\u6743\u548C ${s.toFixed(3)} \u2192 \u6574\u6D41\u8F93\u51FA ${Math.max(0,s).toFixed(3)}`,s<=0)return Hs(n,"\u8F93\u51FA\u5F52\u96F6\uFF1A\u6574\u6D41\u51FD\u6570\u622A\u65AD\u975E\u6B63\u8F93\u5165\uFF0C\u800C\u4E0D\u662F\u628A\u8FDE\u63A5\u6743\u91CD\u5168\u90E8\u6E05\u7A7A\u3002")}if(n.index===5&&t==="score"&&Number.isFinite(e)){n.score=e;let s=Vs([e,1,.4,-.1])[0];if(n.feedback=`\u7B2C\u4E00\u7C7B\u6982\u7387 ${(s*100).toFixed(1)}%\uFF0C\u76EE\u6807\u81F3\u5C11 80%\u3002`,s>=.8)return Hs(n,"\u5F52\u4E00\u5316\u5B9E\u9A8C\u5B8C\u6210\u3002\u63D0\u9AD8\u4E00\u4E2A\u7C7B\u522B\u7684\u5206\u6570\uFF0C\u4F1A\u6539\u53D8\u6240\u6709\u7C7B\u522B\u7684\u76F8\u5BF9\u6982\u7387\u3002")}return n}var On=i=>document.querySelector(i);function cd({onModel:i,inspect:t}){let e=od(),n=Bc(location.hash),s=ji(),r="all",a=0,o=!1,l=null;function c(){n=Bc(location.hash);for(let[_]of Br){document.getElementById(_+"-view").hidden=_!==n;let m=document.getElementById("nav-"+_);_===n?m.setAttribute("aria-current","page"):m.removeAttribute("aria-current")}e.show(n),i(n==="dimensions"),n==="dimensions"&&l!==null&&(t(l),l=null),n==="experiments"&&p(),window.scrollTo({top:0,behavior:"instant"})}window.addEventListener("hashchange",c),document.querySelectorAll(".main-nav a").forEach((_,m,h)=>_.addEventListener("keydown",b=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(b.key))return;b.preventDefault();let A=b.key==="Home"?0:b.key==="End"?h.length-1:(m+(b.key==="ArrowRight"?1:h.length-1))%h.length;h[A].focus(),location.hash=h[A].hash}));function u(_,m){s=ld(s,_,m),p()}function d(){let _=Math.floor(a/3),m=a%3;return Array.from({length:9},(h,b)=>Math.round((Math.sin((b%3+m)*.7)+Math.cos((Math.floor(b/3)+_)*.9)+2)*2)/10)}function f(){let _=s.index;if(_===0)return`<div class="lab-image-wrap"><canvas id="lab-image" width="384" height="384" aria-label="\u989C\u8272\u901A\u9053\u793A\u4F8B"></canvas><div class="image-metadata"><span>\u6F14\u793A\u8F93\u5165</span><b>\u4E09\u901A\u9053\u989C\u8272\u7F16\u7801</b><p>\u901A\u9053\u53EA\u6539\u53D8\u663E\u793A\u65B9\u5F0F\uFF0C\u5E76\u672A\u8BC6\u522B\u56FE\u50CF\u5185\u5BB9\u3002</p><div class="channel-status">${["red","green","blue"].map((h,b)=>`<span class="${s.channels.includes(h)?"seen":""}">${["\u7EA2","\u7EFF","\u84DD"][b]} ${s.channels.includes(h)?"\u5DF2\u67E5\u770B":"\u5F85\u67E5\u770B"}</span>`).join("")}</div></div></div><div class="lab-controls">${[["all","\u5408\u6210\u56FE\u50CF"],["red","\u7EA2\u8272\u901A\u9053"],["green","\u7EFF\u8272\u901A\u9053"],["blue","\u84DD\u8272\u901A\u9053"]].map(([h,b])=>`<button data-channel="${h}" class="${r===h?"chosen":""}">${b}</button>`).join("")}</div>`;if(_===1){let h=Math.floor(a/3),b=a%3,A=d(),y=[-1,0,1,-2,0,2,-1,0,1];return`<div class="scan-layout"><div><div class="lab-caption">\u5408\u6210\u8F93\u5165\u77E9\u9635 \xB7 5 \xD7 5</div><div class="input-matrix">${Array.from({length:25},(x,M)=>{let E=Math.floor(M/5),C=M%5;return`<button class="${E>=h&&E<h+3&&C>=b&&C<b+3?"in-window":""}" data-scan="${Math.min(2,E)*3+Math.min(2,C)}" aria-label="\u4ECE\u7B2C${E+1}\u884C\u7B2C${C+1}\u5217\u9644\u8FD1\u626B\u63CF">${(Math.round((Math.sin(C*.7)+Math.cos(E*.9)+2)*2)/10).toFixed(1)}</button>`}).join("")}</div></div><div><div class="lab-caption">\u5171\u4EAB\u5377\u79EF\u6838 \xB7 3 \xD7 3</div><div class="kernel-matrix">${y.map(x=>`<span>${x}</span>`).join("")}</div><div class="lab-calculation">\u52A0\u6743\u548C <b>${ni(A,y).toFixed(3)}</b><small>\u4E5D\u9879\u76F8\u4E58\u540E\u6C42\u548C\uFF0C\u65E0\u504F\u7F6E</small></div></div></div><label class="lab-range">\u626B\u63CF\u7A97\u53E3\uFF1A\u884C ${h+1} / \u5217 ${b+1}<input id="lab-scan" aria-label="\u5B9E\u9A8C\u626B\u63CF\u7A97\u53E3" type="range" min="0" max="8" step="1" value="${a}"></label>`}if(_===2)return`<div class="lab-caption">\u9009\u62E9\u5C40\u90E8\u6700\u5927\u503C\uFF0C\u63D0\u4EA4\u5230\u6C60\u5316\u8F93\u51FA</div><div class="pool-matrix">${[1,3,2,4,7,5,0,6,2].map((h,b)=>`<button data-pool="${h}" aria-label="\u7B2C${b+1}\u683C \u6570\u503C${h}">${h}</button>`).join("")}</div><div class="pool-output"><span>\u6700\u5927\u6C60\u5316\u8F93\u51FA</span><b>${s.passed?"7":"?"}</b></div>`;if(_===3)return`<div class="flatten-stage ${s.flattened?"flat":""}" aria-label="\u516D\u4E2A\u5143\u7D20\u7684\u91CD\u6392">${[1,2,3,4,5,6].map((h,b)=>`<span style="--i:${b};--row:${Math.floor(b/3)};--col:${b%3}">${h}</span>`).join("")}</div><div class="flatten-label">${s.flattened?"\u5411\u91CF\uFF1A1\uFF0C2\uFF0C3\uFF0C4\uFF0C5\uFF0C6":"\u5F20\u91CF\uFF1A2 \xD7 3\uFF0C\u5171\u516D\u4E2A\u5143\u7D20"}</div><div class="lab-controls"><button id="lab-flatten" ${s.flattened?"disabled":""}>\u6267\u884C\u5C55\u5E73 \u2192</button></div><p class="lab-question">\u91CD\u6392\u5B8C\u6210\u540E\uFF0C\u5143\u7D20\u6570\u91CF\u4F1A\u600E\u6837\uFF1F</p><div class="lab-controls"><button data-answer="more">\u589E\u52A0</button><button data-answer="same">\u4E0D\u53D8</button><button data-answer="less">\u51CF\u5C11</button></div>`;if(_===4){let h=ni([.8,-.4,.6],[s.weight,.5,-.2])+.1;return`<div class="weight-network"><div><span>\u8F93\u5165</span><b>0.8</b><b>\u22120.4</b><b>0.6</b></div><div class="weight-lines"><span>\xD7 ${s.weight.toFixed(1)}</span><span>\xD7 0.5</span><span>\xD7 \u22120.2</span></div><div class="sum-node">\u03A3<small>\u504F\u7F6E + 0.1</small></div><div class="weight-result"><span>\u6574\u6D41\u8F93\u51FA</span><strong>${Math.max(0,h).toFixed(3)}</strong><small>\u52A0\u6743\u548C ${h.toFixed(3)}</small></div></div><label class="lab-range">\u7B2C\u4E00\u6761\u8FDE\u63A5\u6743\u91CD\uFF1A${s.weight.toFixed(1)}<input id="lab-weight" aria-label="\u5B9E\u9A8C\u6743\u91CD" type="range" min="-2" max="2" step="0.1" value="${s.weight}"></label><p class="lab-caption">\u76EE\u6807\u4E0D\u662F\u628A\u6240\u6709\u8F93\u5165\u8BBE\u4E3A\u96F6\uFF0C\u800C\u662F\u4EE4\u52A0\u6743\u548C\u4E0D\u5927\u4E8E\u96F6\u3002</p>`}let m=Vs([s.score,1,.4,-.1]);return`<div class="score-comparison">${m.map((h,b)=>`<div><span>\u7C7B\u522B${["\u4E00","\u4E8C","\u4E09","\u56DB"][b]}</span><i><b style="width:${h*100}%"></b></i><strong>${(h*100).toFixed(1)}%</strong></div>`).join("")}</div><label class="lab-range">\u7B2C\u4E00\u7C7B\u5206\u6570\uFF1A${s.score.toFixed(1)}<input id="lab-score" aria-label="\u5B9E\u9A8C\u7C7B\u522B\u5206\u6570" type="range" min="-2" max="5" step="0.1" value="${s.score}"></label><div class="score-sum">\u6982\u7387\u603B\u548C <b>${m.reduce((h,b)=>h+b,0).toFixed(6)}</b><span>\u76EE\u6807\uFF1A\u7B2C\u4E00\u7C7B\u6982\u7387 \u2265 80%</span></div>`}function p(){let _=cl[s.index];On("#lab-total").textContent=`${String(s.completed.length).padStart(2,"0")} / 06`,On("#lab-stages").innerHTML=cl.map((h,b)=>`<button data-lab="${b}" ${b>Math.max(s.index,Math.min(5,s.completed.length))&&!s.completed.includes(b)?"disabled":""} class="${b===s.index?"current":""} ${s.completed.includes(b)?"done":""}"><span>${String(b+1).padStart(2,"0")}</span><div><b>${h.name}</b><small>${s.completed.includes(b)?"\u5DF2\u5B8C\u6210":b===s.index?"\u5F53\u524D\u5B9E\u9A8C":"\u7B49\u5F85\u89E3\u9501"}</small></div><i>${s.completed.includes(b)?"\u2713":"\u2192"}</i></button>`).join(""),On("#lab-body").innerHTML=`<div class="lab-topline"><span>\u5B9E\u9A8C ${String(s.index+1).padStart(2,"0")} / 06 \xB7 ${_.tag}</span><span>\u771F\u5B9E\u5C40\u90E8\u8BA1\u7B97</span></div><h2>${_.name}</h2><p class="lab-goal">${_.goal}</p><div class="lab-board">${f()}</div><div class="lab-feedback ${s.passed?"passed":""}" role="status"><span>${s.passed?"\u2713":"\u25CC"}</span>${s.feedback}</div>${o?`<p class="lab-hint">\u63D0\u793A\uFF1A${_.hint}</p>`:""}<div class="lab-bottom-actions"><button id="lab-hint">${o?"\u6536\u8D77\u63D0\u793A":"\u67E5\u770B\u63D0\u793A"}</button><button id="lab-retry">\u91CD\u8BD5\u672C\u5173</button><button id="lab-inspect">\u5728\u4E09\u7EF4\u6A21\u578B\u4E2D\u67E5\u770B \u2197</button><button id="lab-next" class="solid-link" ${!s.passed||s.index===5?"disabled":""}>\u4E0B\u4E00\u5B9E\u9A8C \u2192</button></div>${s.completed.length===6?'<div class="lab-complete"><span>\u516D\u9879\u5B9E\u9A8C\u5DF2\u5B8C\u6210</span><h3>\u4F60\u5DF2\u8D70\u8FC7\u4E00\u6761\u53EF\u9A8C\u8BC1\u7684\u8BA1\u7B97\u8DEF\u5F84\u3002</h3><p>\u989C\u8272\u7F16\u7801 \u2192 \u5C40\u90E8\u5377\u79EF \u2192 \u6700\u5927\u6C60\u5316 \u2192 \u5C55\u5E73 \u2192 \u52A0\u6743\u6C47\u805A \u2192 \u6982\u7387\u5F52\u4E00\u5316</p><a href="#dimensions">\u8FD4\u56DE\u5B8C\u6574\u4E09\u7EF4\u7F51\u7EDC \u2197</a></div>':""}`;let m=On("#lab-stages .current");if(m){let h=On("#lab-stages");h.scrollLeft=Math.max(0,m.offsetLeft-h.offsetLeft-12)}if(s.index===0){let h=Or(r);On("#lab-image").getContext("2d").drawImage(h.image,0,0,384,384),h.dispose()}}On("#lab-body").addEventListener("click",_=>{let m=_.target.closest("button");!m||m.disabled||(m.dataset.channel?(r=m.dataset.channel,u("channel",r)):m.dataset.scan!==void 0?(a=+m.dataset.scan,u("scan",a)):m.dataset.pool!==void 0?u("pool",+m.dataset.pool):m.dataset.answer?u("answer",m.dataset.answer):m.id==="lab-flatten"?u("flatten"):m.id==="lab-hint"?(o=!o,p()):m.id==="lab-retry"?(r="all",a=0,o=!1,u("retry")):m.id==="lab-next"?(o=!1,u("next")):m.id==="lab-inspect"&&(l=g(),location.hash="#dimensions"))});function g(){return cl[s.index].layer}return On("#lab-body").addEventListener("change",_=>{_.target.id==="lab-scan"&&(a=+_.target.value,u("scan",a)),_.target.id==="lab-weight"&&u("weight",+_.target.value),_.target.id==="lab-score"&&u("score",+_.target.value)}),On("#lab-stages").addEventListener("click",_=>{let m=_.target.closest("[data-lab]");if(!m||m.disabled)return;let h=+m.dataset.lab;h!==s.index&&(s={...ji(),index:h,completed:s.completed,passed:s.completed.includes(h)},r="all",a=0,o=!1,p())}),On("#lab-reset").onclick=()=>{s=ji(),r="all",a=0,o=!1,p()},p(),c(),{isModel:()=>n==="dimensions"}}var qc,Gs=!1,Rt=i=>document.querySelector(i),hl=matchMedia("(prefers-reduced-motion: reduce)").matches,wi=Rt("#viewport"),Cn=Rt("#scene"),ul=new Ie,Xs=[],_d=[],$c=[],_n,Xe,an,be,Ti,xd,Gc,Yc,hd=0,dl=!1,ue=-1,Ji=!1,Bn=!1,ii=-1,fl=-1,xn=null,ud=0,Zt=el(),ne={channel:"all",kernel:"edge",cell:4,pooling:null,flatten:!1,weight:1,logit:2},dd=new Hi,fd=new vt,Hr=new I,vd=()=>Vs([ne.logit,1,.4,-.1]),__=["\u91D1\u6BDB\u5BFB\u56DE\u72AC","\u62C9\u5E03\u62C9\u591A\u72AC","\u53EF\u5361\u72AC","\u5176\u4ED6\u793A\u4F8B\u7C7B\u522B"];function x_(i){return Array.isArray(i.material)?i.material:[i.material]}function Zc(){let i=wi.clientWidth<600;return new I(i?-24:-15,i?24:15,i?52:32)}function pl(i,t,e=!1){e||hl?(an.position.copy(i),be.target.copy(t),xn=null,be.update()):xn={from:an.position.clone(),to:i,fromTarget:be.target.clone(),target:t,t:0}}function Wc(){Bn=!1,Rt("#view-mode").textContent="\u5168\u5C40\u89C6\u89D2",pl(Zc(),new I(0,-.35,0))}function Xc(){if(ue<0){Rn(1);return}Bn=!0,Rt("#view-mode").textContent="\u5C40\u90E8\u805A\u7126 \xB7 "+bi[ue];let i=Xs[ue].position.x;pl(new I(i-5.6,3.6,7.8),new I(i,0,0))}function Gr(){let i=wi.clientWidth,t=wi.clientHeight;!i||!t||(_n.setSize(i,t,!1),an.aspect=i/t,an.updateProjectionMatrix(),Ti.setSize(i,t),Math.abs(i-ud)>140&&!Bn&&pl(Zc(),new I(0,-.35,0),!0),ud=i)}function v_(){_n=new Us({canvas:Cn,antialias:!0,powerPreference:"high-performance"}),_n.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),_n.setClearColor(594462),_n.outputColorSpace=Se,_n.toneMapping=_i,_n.toneMappingExposure=1.12,_n.shadowMap.enabled=!0,_n.shadowMap.type=Es,Xe=new Zn,Xe.background=new Pt(594462),Xe.fog=new ur(594462,.009),Xe.add(ul),an=new Te(35,1,.1,200),be=new Fs(an,Cn),be.enableDamping=!0,be.dampingFactor=.075,be.enablePan=!1,be.minDistance=5,be.maxDistance=100,be.minPolarAngle=.25,be.maxPolarAngle=Math.PI*.52,be.autoRotateSpeed=.35,be.addEventListener("start",()=>{xn=null});let i=new Bs,t=new yi(_n),e=t.fromScene(i,.08);Xe.environment=e.texture,Xe.userData.environment=e,i.dispose(),t.dispose(),Xe.add(new ki(12112875,1253945,1.7));let n=new Jn(12901621,2.3);n.position.set(-8,15,8),n.castShadow=!0,n.shadow.mapSize.set(2048,1024),Object.assign(n.shadow.camera,{left:-26,right:26,top:14,bottom:-14,near:1,far:55}),n.shadow.normalBias=.025,Xe.add(n);let s=new Jn(7518908,1.7);s.position.set(8,5,-8),Xe.add(s);let r=new Xt(new tn(150,150),new ze({color:594462}));r.rotation.x=-Math.PI/2,r.position.y=-2.58,Xe.add(r);let a=new Xt(new tn(52,12),new xr({opacity:.23,color:0,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=-2.56,a.receiveShadow=!0,Xe.add(a);let o=new Tr(120,100,2638166,1518398);o.position.y=-2.55,o.material.transparent=!0,o.material.opacity=.28,Xe.add(o);let l=Oc(!1);Nr.forEach((u,d)=>{let f=Qu(d,u.type);f.position.x=l[d],ul.add(f),Xs.push(f);let p=new Xt(new Le(1.7,4.6,3.9),new ze({visible:!1}));p.userData.index=d,f.add(p),_d.push(p);let g=document.createElement("button");g.className="layer-label",g.textContent=bi[d],g.setAttribute("aria-label","\u9009\u62E9"+bi[d]),g.addEventListener("click",()=>Rn(d)),wi.appendChild(g),$c.push(g)}),xd=td(ul,Xs),Ti=new Ko(_n),Ti.addPass(new Qo(Xe,an));let c=new ks(new vt(800,600),.3,.45,.94);Ti.addPass(c),Ti.addPass(new tl),pl(Zc(),new I(0,-.35,0),!0),Gr(),Gc=new ResizeObserver(Gr),Gc.observe(wi),window.addEventListener("resize",Gr),Cn.addEventListener("webglcontextlost",u=>{u.preventDefault(),Rt("#gl-error").hidden=!1,Rt("#gl-error").textContent="\u56FE\u5F62\u4E0A\u4E0B\u6587\u5DF2\u4E22\u5931\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u91CD\u65B0\u6784\u5EFA\u5C55\u54C1\u3002"}),Rt("#loader").hidden=!0}function y_(){return`<div class="panel-kicker">\u7ED3\u6784\u4E0E\u673A\u5236 / 2012</div><h2 class="panel-title">\u8FDB\u5165\u8BA1\u7B97\u7684\u5185\u90E8</h2><h3 class="panel-subtitle">\u516B\u4E2A\u53EF\u5B66\u4E60\u5C42\uFF0C\u4E00\u6761\u5C42\u6B21\u5316\u7684\u89C6\u89C9\u8DEF\u5F84\u3002</h3><p class="description">\u4ECE\u5C40\u90E8\u611F\u53D7\u91CE\u5230\u5168\u5C40\u52A0\u6743\u6C47\u805A\uFF0C\u89C2\u5BDF\u7F51\u7EDC\u5982\u4F55\u9010\u6B65\u6539\u53D8\u4FE1\u606F\u7684\u7EC4\u7EC7\u65B9\u5F0F\u3002\u9009\u62E9\u4EFB\u4E00\u5C42\uFF0C\u67E5\u770B\u5F20\u91CF\u3001\u8BA1\u7B97\u673A\u5236\u4E0E\u5C40\u90E8\u5B9E\u9A8C\u3002</p><div class="overview-types">${"<i></i>".repeat(13)}</div><div class="overview-grid"><div><strong>5 + 3</strong><span>\u5377\u79EF\u5C42 + \u5168\u8FDE\u63A5\u5C42</span></div><div><strong>1,000</strong><span>\u5206\u7C7B\u8F93\u51FA\u7EF4\u5EA6</span></div></div><p class="technical">\u591A\u901A\u9053\u7C92\u5B50\u675F\u6CBF\u8BA1\u7B97\u65B9\u5411\u4F20\u9012\uFF0C\u8FDB\u5165\u5404\u5C42\u540E\u89E6\u53D1\u5C40\u90E8\u54CD\u5E94\u3002\u53D1\u5149\u5F3A\u5EA6\u4E0E\u7C92\u5B50\u901F\u5EA6\u662F\u5C55\u9648\u7F16\u7801\uFF0C\u4E0D\u4EE3\u8868\u6FC0\u6D3B\u5E45\u5EA6\u6216\u771F\u5B9E\u8BA1\u7B97\u65F6\u95F4\u3002</p><button class="focus-inline" data-select="1">\u4ECE\u7B2C\u4E00\u5C42\u5377\u79EF\u5F00\u59CB \u2192</button><div class="experiment"><div class="experiment-header">\u53EF\u64CD\u4F5C\u7684\u5C40\u90E8\u5B9E\u9A8C<span>\u771F\u5B9E\u6570\u503C\u8BA1\u7B97</span></div><p>\u9009\u62E9\u4E00\u5C42\u540E\u53EF\u64CD\u4F5C\u901A\u9053\u5206\u79BB\u3001\u5377\u79EF\u5C0F\u7A97\u53E3\u3001\u6700\u5927\u6C60\u5316\u3001\u5F20\u91CF\u5C55\u5E73\u3001\u52A0\u6743\u6C47\u805A\u53CA\u6982\u7387\u5F52\u4E00\u5316\u3002</p></div>`}function M_(i){let t=Fr[i].experiment,e="";return t==="channels"?e=`<p>\u67E5\u770B\u540C\u4E00\u5F20\u56FE\u50CF\u4E2D\u7684\u989C\u8272\u901A\u9053\u3002\u53EA\u6539\u53D8\u663E\u793A\uFF0C\u4E0D\u6267\u884C\u7F51\u7EDC\u63A8\u7406\u3002</p><div class="row-buttons">${[["all","\u5408\u6210"],["red","\u7EA2\u901A\u9053"],["green","\u7EFF\u901A\u9053"],["blue","\u84DD\u901A\u9053"]].map(([n,s])=>`<button data-channel="${n}" class="${ne.channel===n?"active":""}">${s}</button>`).join("")}</div><div class="experiment-output" id="experiment-output"></div>`:t==="convolution"?e=`<p>\u5728\u5408\u6210\u7684 5\xD75 \u8F93\u5165\u4E0A\u79FB\u52A8 3\xD73 \u7A97\u53E3\uFF0C\u8BA1\u7B97\u771F\u5B9E\u52A0\u6743\u548C\u3002\u5377\u79EF\u6838\u4E3A\u4EBA\u5DE5\u8BBE\u5B9A\uFF0C\u975E\u5B66\u4E60\u6743\u91CD\u3002</p><label>\u7B97\u5B50<select id="kernel"><option value="edge">\u7EB5\u5411\u8FB9\u7F18</option><option value="horizontal">\u6A2A\u5411\u8FB9\u7F18</option><option value="blur">\u5C40\u90E8\u5747\u503C</option></select></label><label>\u7A97\u53E3\u4F4D\u7F6E <span id="cell-read"></span></label><input id="cell" aria-label="\u7A97\u53E3\u4F4D\u7F6E" type="range" min="0" max="8" step="1" value="${ne.cell}"><div id="sample-grid" class="sample-grid"></div><div class="experiment-output" id="experiment-output"></div>`:t==="pooling"?e=`<p>\u8FD9\u662F\u4E00\u4E2A 3\xD73 \u5C40\u90E8\u7A97\u53E3\u3002\u70B9\u51FB\u4EFB\u610F\u503C\uFF0C\u5BF9\u6BD4\u5B83\u4E0E\u6700\u5927\u6C60\u5316\u8F93\u51FA\u3002</p><div class="sample-grid">${[.12,.45,.23,.31,.92,.64,.08,.52,.37].map((n,s)=>`<button data-pool="${s}" aria-label="\u6570\u503C ${n}">${n.toFixed(2)}</button>`).join("")}</div><div class="experiment-output" id="experiment-output"></div>`:t==="flatten"?e=`<p>\u5C06\u6F14\u793A\u5F20\u91CF\u7684 32 \u4E2A\u91C7\u6837\u70B9\u91CD\u6392\u4E3A\u5411\u91CF\u3002\u5B83\u4EEC\u7684\u4F4D\u7F6E\u6539\u53D8\uFF0C\u5143\u7D20\u6570\u91CF\u548C\u53D6\u503C\u4E0D\u53D8\u3002</p><button class="experiment-action" id="flatten">${ne.flatten?"\u6062\u590D\u5F20\u91CF\u6392\u5217":"\u6267\u884C\u5C55\u5E73"}</button><div class="experiment-output" id="experiment-output"></div>`:t==="weights"?e=`<p>\u4E09\u4E2A\u8F93\u5165\u4E3A [0.8, \u22120.4, 0.6]\uFF0C\u6743\u91CD\u4E3A [w, 0.5, \u22120.2]\uFF0C\u504F\u7F6E\u4E3A 0.1\u3002\u8C03\u6574\u7B2C\u4E00\u6761\u8FDE\u63A5\u7684\u6743\u91CD\u3002</p><label>\u8FDE\u63A5\u6743\u91CD <span id="weight-read"></span></label><input id="weight" aria-label="\u8FDE\u63A5\u6743\u91CD" type="range" min="-2" max="2" step="0.1" value="${ne.weight}"><div class="experiment-output" id="experiment-output"></div>`:e=`<p>\u56DB\u4E2A\u793A\u4F8B\u5206\u6570\u4E3A [z, 1, 0.4, \u22120.1]\u3002\u8C03\u6574\u9996\u9879\u5206\u6570\uFF0C\u89C2\u5BDF\u6240\u6709\u6982\u7387\u4E00\u8D77\u53D8\u5316\u3002\u6B64\u5B9E\u9A8C\u53EA\u542B\u56DB\u4E2A\u793A\u4F8B\u7C7B\u522B\uFF0C\u4E0D\u7B49\u4E8E\u539F\u7F51\u7EDC\u4E00\u5343\u7C7B\u5206\u5E03\u3002</p><label>\u9996\u9879\u7C7B\u522B\u5206\u6570 <span id="logit-read"></span></label><input id="logit" aria-label="\u9996\u9879\u7C7B\u522B\u5206\u6570" type="range" min="-2" max="5" step="0.1" value="${ne.logit}"><div id="probabilities" class="mini-probs"></div><div class="experiment-output" id="experiment-output"></div>`,`<section class="experiment"><div class="experiment-header">\u5C40\u90E8\u8BA1\u7B97\u5B9E\u9A8C<span>\u53EF\u64CD\u4F5C / \u771F\u8BA1\u7B97</span></div>${e}</section>`}function jc(){let i=Rt("#panel-body");if(Rt(".inspector").scrollTop=0,Rt("#panel-index").textContent=ue<0?"\u603B\u89C8 / 13":`${String(ue+1).padStart(2,"0")} / 13`,ue<0)i.innerHTML=y_();else{let t=Fr[ue],e=Nr[ue];i.innerHTML=`<div class="panel-kicker">${Zu[e.type]} / ${e.id.toUpperCase()}</div><h2 class="panel-title">${bi[ue]}</h2><h3 class="panel-subtitle">${t.title}</h3><p class="description">${t.explain}</p><div class="tensor"><div><small>\u8F93\u5165\u5F20\u91CF</small><b>${t.input}</b></div><span>\u2192</span><div><small>\u8F93\u51FA\u5F20\u91CF</small><b>${t.output}</b></div></div><div class="formula">${t.formula}</div><p class="technical">${t.note}</p><button class="focus-inline" id="focus-inline">\u805A\u7126\u6B64\u5C42\u7684\u4E09\u7EF4\u8BA1\u7B97\u7ED3\u6784 \u2197</button>${ue===12&&Zt.complete?`<div class="result-box"><small>\u9884\u8BBE\u793A\u4F8B \xB7 \u65E0\u6A21\u578B\u63A8\u7406</small><b>\u91D1\u6BDB\u5BFB\u56DE\u72AC</b><p>\u56DB\u7C7B\u522B\u5B9E\u9A8C\u5F52\u4E00\u5316\u503C\uFF1A${(vd()[0]*100).toFixed(1)}%</p></div>`:""}${M_(ue)}`,Ws()}document.querySelectorAll("#timeline button").forEach((t,e)=>{t.classList.toggle("active",e===ue),t.setAttribute("aria-pressed",e===ue)}),$c.forEach((t,e)=>t.classList.toggle("active",e===ue))}function Ws(){if(ue<0)return;let i=Fr[ue].experiment,t=Rt("#experiment-output");if(t)if(i==="channels")t.textContent="\u5F53\u524D\u7F16\u7801\uFF1A"+{all:"\u4E09\u901A\u9053\u5408\u6210",red:"\u7EA2\u8272\u901A\u9053",green:"\u7EFF\u8272\u901A\u9053",blue:"\u84DD\u8272\u901A\u9053"}[ne.channel];else if(i==="convolution"){let e=Math.floor(ne.cell/3),n=ne.cell%3,s=[];for(let o=0;o<3;o++)for(let l=0;l<3;l++)s.push(Math.round((Math.sin((l+n)*.7)+Math.cos((o+e)*.9)+2)*2)/10);let r={edge:[-1,0,1,-2,0,2,-1,0,1],horizontal:[-1,-2,-1,0,0,0,1,2,1],blur:Array(9).fill(1/9)},a=r[ne.kernel];Rt("#sample-grid").innerHTML=s.map((o,l)=>`<span title="\u6743\u91CD ${a[l].toFixed(2)}">${o.toFixed(1)}<small style="display:block;font-size:8px;color:#6e9da9">\xD7 ${a[l].toFixed(2)}</small></span>`).join(""),Rt("#cell-read").textContent=`\u884C ${e+1} / \u5217 ${n+1}`,Rt("#kernel").value=ne.kernel,t.textContent=`\u52A0\u6743\u548C\uFF1A${ni(s,a).toFixed(3)} \u2192 \u6574\u6D41\u540E\uFF1A${Math.max(0,ni(s,a)).toFixed(3)}`}else if(i==="pooling"){let e=[.12,.45,.23,.31,.92,.64,.08,.52,.37],n=ju(e);t.textContent=ne.pooling===null?"\u6700\u5927\u6C60\u5316\u8F93\u51FA = 0.92":ne.pooling===4?"\u6240\u9009\u503C 0.92 = \u5C40\u90E8\u6700\u5927\u503C \u2192 \u8F93\u51FA 0.92":`\u6240\u9009\u503C ${e[ne.pooling].toFixed(2)} \u2260 \u5C40\u90E8\u6700\u5927\u503C \u2192 \u8F93\u51FA\u4ECD\u4E3A 0.92`,document.querySelectorAll("[data-pool]").forEach((s,r)=>s.classList.toggle("winner",r===4&&ne.pooling!==null))}else if(i==="flatten"){let e=Ju(Array.from({length:4},(n,s)=>Array.from({length:8},(r,a)=>s*8+a)));t.textContent=`${ne.flatten?"\u4E00\u7EF4\u5411\u91CF":"4 \xD7 8 \u91C7\u6837\u77E9\u9635"} \xB7 ${e.length} \u4E2A\u5143\u7D20 \xB7 \u6570\u503C\u603B\u548C ${e.reduce((n,s)=>n+s,0)}`}else if(i==="weights"){let e=ni([.8,-.4,.6],[ne.weight,.5,-.2])+.1;Rt("#weight-read").textContent=ne.weight.toFixed(1),t.textContent=`\u52A0\u6743\u548C + \u504F\u7F6E = ${e.toFixed(3)}\uFF1B\u6574\u6D41\u8F93\u51FA = ${Math.max(0,e).toFixed(3)}`}else{let e=vd();Rt("#logit-read").textContent=ne.logit.toFixed(1),Rt("#probabilities").innerHTML=e.map((n,s)=>`<div class="prob-row"><span>${__[s]}</span><i><b style="width:${n*100}%"></b></i><span>${(n*100).toFixed(1)}%</span></div>`).join(""),t.textContent="\u6982\u7387\u603B\u548C = "+e.reduce((n,s)=>n+s,0).toFixed(6)}}function Rn(i,t=!1){!Number.isInteger(i)||i<0||i>12||(ue=i,Rt("#scene-caption").textContent=bi[i]+" \xB7 "+Fr[i].mechanism,jc(),Bn&&Xc())}function Ki(){let i=nl(Zt.time);Rt("#pause").disabled=!Zt.running,Rt("#pause").textContent=Zt.paused?"\u7EE7\u7EED":"\u6682\u505C",Rt("#run").textContent=Zt.running?"\u21BB \u91CD\u65B0\u8FD0\u884C":"\u25B6 \u8FD0\u884C\u6570\u636E\u6D41",Rt("#progress").style.width=i.progress*100+"%",Rt("#progress-text").textContent=`${String(Zt.time>0?i.index+1:0).padStart(2,"0")} / 13`,Rt("#status").textContent=Zt.complete?"\u4F20\u64AD\u7ED3\u675F \xB7 \u793A\u610F\u6027\u6F14\u793A\uFF0C\u672A\u6267\u884C\u771F\u5B9E\u63A8\u7406":Zt.running?(Zt.paused?"\u5DF2\u6682\u505C \xB7 ":"\u524D\u5411\u4F20\u64AD \xB7 ")+bi[i.index]:"\u5C31\u7EEA \xB7 \u7B49\u5F85\u4E00\u6B21\u524D\u5411\u4F20\u64AD",document.querySelectorAll("#timeline button").forEach((t,e)=>t.classList.toggle("visited",e<i.index&&Zt.time>0))}function pd(){Zt=Si(Zt,"run"),ii=-1,Ki()}function md(){Zt=Si(Zt,"reset"),Ji=!1,ue=-1,ii=-1,Bn=!1,be.autoRotate=!1,ne.flatten=!1,Rt("#speed").value="1",Rt("#orbit").setAttribute("aria-pressed","false"),Rt("#expand").setAttribute("aria-pressed","false"),Rt("#expand").textContent="\u5C55\u5F00\u7ED3\u6784",jc(),Wc(),Ki(),Rt("#scene-caption").textContent="\u9009\u62E9\u4E00\u5C42\uFF0C\u8FDB\u5165\u8BA1\u7B97\u5185\u90E8\u3002"}function gd(i){let t=Cn.getBoundingClientRect();fd.set((i.clientX-t.left)/t.width*2-1,-(i.clientY-t.top)/t.height*2+1),dd.setFromCamera(fd,an);let e=dd.intersectObjects(_d,!1);return e.length?e[0].object.userData.index:-1}function b_(){Rt("#timeline").innerHTML=Nr.map((t,e)=>`<button data-layer="${e}" data-type="${t.type}" aria-pressed="false">${bi[e]}</button>`).join(""),Rt("#timeline").addEventListener("click",t=>{let e=t.target.closest("[data-layer]");e&&Rn(+e.dataset.layer)}),Rt("#run").onclick=pd,Rt("#pause").onclick=()=>{Zt=Si(Zt,"pause"),Ki()},Rt("#step").onclick=()=>{Zt=Si(Zt,"step"),ii=nl(Zt.time).index,Rn(ii),Ki()},Rt("#speed").onchange=t=>{Zt=Si(Zt,"speed",+t.target.value)},Rt("#expand").onclick=()=>{Ji=!Ji,Rt("#expand").setAttribute("aria-pressed",Ji),Rt("#expand").textContent=Ji?"\u6536\u62E2\u7ED3\u6784":"\u5C55\u5F00\u7ED3\u6784"},Rt("#reset").onclick=md,Rt("#focus").onclick=Xc,Rt("#home").onclick=Wc,Rt("#orbit").onclick=()=>{be.autoRotate=!be.autoRotate,Rt("#orbit").setAttribute("aria-pressed",be.autoRotate),xn=null},Rt("#panel-body").addEventListener("click",t=>{let e=t.target.closest("[data-select]");e&&Rn(+e.dataset.select),t.target.closest("#focus-inline")&&Xc();let n=t.target.closest("[data-channel]");n&&(ne.channel=n.dataset.channel,document.querySelectorAll("[data-channel]").forEach(r=>r.classList.toggle("active",r===n)),Ws());let s=t.target.closest("[data-pool]");s&&(ne.pooling=+s.dataset.pool,Ws()),t.target.closest("#flatten")&&(ne.flatten=!ne.flatten,Rt("#flatten").textContent=ne.flatten?"\u6062\u590D\u5F20\u91CF\u6392\u5217":"\u6267\u884C\u5C55\u5E73",Ws())}),Rt("#panel-body").addEventListener("input",t=>{let e=t.target.id;e==="cell"&&(ne.cell=+t.target.value),e==="weight"&&(ne.weight=+t.target.value),e==="logit"&&(ne.logit=+t.target.value),["cell","weight","logit"].includes(e)&&Ws()}),Rt("#panel-body").addEventListener("change",t=>{t.target.id==="kernel"&&(ne.kernel=t.target.value,Ws())});let i;Cn.addEventListener("pointerdown",t=>i=[t.clientX,t.clientY]),Cn.addEventListener("pointercancel",()=>i=null),Cn.addEventListener("pointerup",t=>{if(i&&Math.hypot(t.clientX-i[0],t.clientY-i[1])<5){let e=gd(t);e>=0&&Rn(e)}i=null}),Cn.addEventListener("pointermove",t=>{fl=gd(t),Cn.style.cursor=fl>=0?"pointer":"grab"}),Cn.addEventListener("pointerleave",()=>fl=-1),Cn.addEventListener("dblclick",Wc),Rt("#notes-open").onclick=Rt("#notes-bottom").onclick=()=>Rt("#notes").showModal(),document.querySelectorAll("[data-close]").forEach(t=>t.onclick=()=>t.closest("dialog").close()),document.querySelectorAll("dialog").forEach(t=>t.addEventListener("click",e=>{if(e.target!==t)return;let n=t.getBoundingClientRect();(e.clientX<n.left||e.clientX>n.right||e.clientY<n.top||e.clientY>n.bottom)&&t.close()})),document.addEventListener("keydown",t=>{!qc?.isModel()||Rt("dialog[open]")||t.target.closest("button,input,select,a")||(t.code==="Space"&&(t.preventDefault(),Zt.running?(Zt=Si(Zt,"pause"),Ki()):pd()),(t.key==="ArrowRight"||t.key==="ArrowLeft")&&(t.preventDefault(),Rn(Ue.clamp(ue+(t.key==="ArrowRight"?1:-1),0,12))),t.key.toLowerCase()==="r"&&md())}),jc(),Ki()}function yd(i){Yc=requestAnimationFrame(yd);let t=Math.max(0,(i-hd)/1e3);if(hd=i,document.hidden||!qc?.isModel()){dl=!0;return}let e=dl?0:Math.min(t,.12);dl=!1,Zt=Si(Zt,"tick",e);let n=nl(Zt.time);Zt.running&&ii!==n.index&&(ii=n.index,Rn(ii,!0)),Zt.complete&&ii!==13&&(ii=13,Rn(12,!0)),Ki();let s=Oc(Ji),r=i/1e3;if(Xs.forEach((a,o)=>{a.visible=!Bn||o===ue,a.position.x=Ue.damp(a.position.x,s[o],hl?35:4,e);let l=Zt.running?n.index===o:ue===o;a.userData.energy=Ue.damp(a.userData.energy||0,l?1:ue<0?.34:o===fl?.5:.12,8,e),a.userData.tick(Zt.running?Zt.time:r,a.userData.energy,l?n.local:0,hl,ne)}),xn){xn.t+=e;let a=Math.min(1,xn.t/.85),o=a*a*(3-2*a);an.position.lerpVectors(xn.from,xn.to,o),be.target.lerpVectors(xn.fromTarget,xn.target,o),a===1&&(xn=null)}be.update(),an.zoom=Ue.damp(an.zoom,Bn?1:Ji?.76:1,4,e),an.updateProjectionMatrix();for(let a=0;a<Xs.length;a++){Hr.set(Xs[a].position.x,2.55,0).project(an);let o=$c[a];o.style.left=(Hr.x+1)*wi.clientWidth/2+"px",o.style.top=(-Hr.y+1)*wi.clientHeight/2+"px",o.style.opacity=ue<0||ue===a?"1":".52",o.hidden=Bn&&a!==ue||Math.abs(Hr.x)>.94||Math.abs(Hr.y)>.85||wi.clientWidth<600&&a!==ue&&a!==0&&a!==6&&a!==12}xd.update(Zt.time,n,Zt.running&&!Bn,Zt.paused,hl),ul.children.filter(a=>a.isLineSegments).forEach(a=>a.visible=!Bn),Ti.render()}function S_(){cancelAnimationFrame(Yc),Gc?.disconnect(),window.removeEventListener("resize",Gr),be?.dispose();let i=new Set,t=new Set,e=new Set;Xe?.traverse(n=>{if(n.geometry&&i.add(n.geometry),n.material)for(let s of x_(n)){t.add(s);for(let r of Object.values(s))r?.isTexture&&e.add(r)}}),i.forEach(n=>n.dispose()),t.forEach(n=>n.dispose()),e.forEach(n=>n.dispose()),Xe?.userData.environment?.dispose(),Ti?.passes.forEach(n=>n.dispose?.()),Ti?.dispose(),_n?.dispose()}qc=cd({onModel(i){if(i&&!Gs)try{v_(),b_(),Gs=!0,Yc=requestAnimationFrame(yd),document.body.dataset.ready="true"}catch(t){console.error(t),Rt("#loader").hidden=!0,Rt("#gl-error").hidden=!1}else i&&Gs&&(dl=!0,requestAnimationFrame(Gr))},inspect(i){Gs?Rn(i):requestAnimationFrame(()=>{Gs&&Rn(i)})}});Rt("#notes-open").onclick=Rt("#notes-bottom").onclick=()=>Rt("#notes").showModal();document.querySelectorAll("[data-close]").forEach(i=>i.onclick=()=>i.closest("dialog").close());window.addEventListener("pagehide",i=>{!i.persisted&&Gs&&S_()});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
