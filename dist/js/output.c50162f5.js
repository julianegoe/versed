(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["output"],{"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return x})),n.d(e,"b",(function(){return Vo})),n.d(e,"c",(function(){return Gi})),n.d(e,"d",(function(){return Xi})),n.d(e,"e",(function(){return Uo})),n.d(e,"f",(function(){return Ro})),n.d(e,"g",(function(){return _o}));var r=n("5606"),s=n("ffa6"),i=n("4fc1"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let h="9.2.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l=new i["b"]("@firebase/firestore");function d(){return l.logLevel}function f(t,...e){if(l.logLevel<=i["a"].DEBUG){const n=e.map(m);l.debug(`Firestore (${h}): ${t}`,...n)}}function g(t,...e){if(l.logLevel<=i["a"].ERROR){const n=e.map(m);l.error(`Firestore (${h}): ${t}`,...n)}}function p(t,...e){if(l.logLevel<=i["a"].WARN){const n=e.map(m);l.warn(`Firestore (${h}): ${t}`,...n)}}function m(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(t="Unexpected state"){const e=`FIRESTORE (${h}) INTERNAL ASSERTION FAILED: `+t;throw g(e),new Error(e)}function v(t,e){t||y()}function w(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization="Bearer "+t}}class S{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class A{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new T;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new T,t.enqueueRetryable(()=>r(this.currentUser))};const i=()=>{const e=s;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{f("FirebaseCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(f("FirebaseCredentialsProvider","Auth not yet detected"),s.resolve(),s=new T)}},0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(f("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(v("string"==typeof e.accessToken),new I(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return v(null===t||"string"==typeof t),new u(t)}}class N{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=u.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},e=this.h.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class O{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new N(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.g(t),this.p=t=>e.writeSequenceNumber(t))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */D.T=-1;class _{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=C(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%t.length))}return n}}function k(t,e){return t<e?-1:t>e?1:0}function R(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class x{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new E(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new E(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new E(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new E(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return x.fromMillis(Date.now())}static fromDate(t){return x.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new x(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?k(this.nanoseconds,t.nanoseconds):k(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t){this.timestamp=t}static fromTimestamp(t){return new L(t)}static min(){return new L(new x(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function M(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function V(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t,e,n){void 0===e?e=0:e>t.length&&y(),void 0===n?n=t.length-e:n>t.length-e&&y(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===U.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof U?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),s=e.get(r);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class P extends U{construct(t,e,n){return new P(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new E(b.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new P(e)}static emptyPath(){return new P([])}}const F=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class q extends U{construct(t,e,n){return new q(t,e,n)}static isValidIdentifier(t){return F.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),q.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new q(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(0===n.length)throw new E(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new E(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new E(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(s(),r++)}if(s(),i)throw new E(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new q(e)}static emptyPath(){return new q([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t){this.fields=t,t.sort(q.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return R(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class K{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new K(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new K(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return k(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}K.EMPTY_BYTE_STRING=new K("");const H=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function G(t){if(v(!!t),"string"==typeof t){let e=0;const n=H.exec(t);if(v(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:$(t.seconds),nanos:$(t.nanos)}}function $(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function z(t){return"string"==typeof t?K.fromBase64String(t):K.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function W(t){const e=t.mapValue.fields.__previous_value__;return Q(e)?W(e):e}function X(t){const e=G(t.mapValue.fields.__local_write_time__.timestampValue);return new x(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t){return null==t}function J(t){return 0===t&&1/t==-1/0}function Z(t){return"number"==typeof t&&Number.isInteger(t)&&!J(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.path=t}static fromPath(t){return new tt(P.fromString(t))}static fromName(t){return new tt(P.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===P.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return P.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new tt(new P(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Q(t)?4:10:y()}function nt(t,e){const n=et(t);if(n!==et(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return X(t).isEqual(X(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=G(t.timestampValue),r=G(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return z(t.bytesValue).isEqual(z(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return $(t.geoPointValue.latitude)===$(e.geoPointValue.latitude)&&$(t.geoPointValue.longitude)===$(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return $(t.integerValue)===$(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=$(t.doubleValue),r=$(e.doubleValue);return n===r?J(n)===J(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return R(t.arrayValue.values||[],e.arrayValue.values||[],nt);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(j(n)!==j(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!nt(n[s],r[s])))return!1;return!0}(t,e);default:return y()}}function rt(t,e){return void 0!==(t.values||[]).find(t=>nt(t,e))}function st(t,e){const n=et(t),r=et(e);if(n!==r)return k(n,r);switch(n){case 0:return 0;case 1:return k(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=$(t.integerValue||t.doubleValue),r=$(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return it(t.timestampValue,e.timestampValue);case 4:return it(X(t),X(e));case 5:return k(t.stringValue,e.stringValue);case 6:return function(t,e){const n=z(t),r=z(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let s=0;s<n.length&&s<r.length;s++){const t=k(n[s],r[s]);if(0!==t)return t}return k(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=k($(t.latitude),$(e.latitude));return 0!==n?n:k($(t.longitude),$(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const t=st(n[s],r[s]);if(t)return t}return k(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),s=e.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const t=k(r[o],i[o]);if(0!==t)return t;const e=st(n[r[o]],s[i[o]]);if(0!==e)return e}return k(r.length,i.length)}(t.mapValue,e.mapValue);default:throw y()}}function it(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return k(t,e);const n=G(t),r=G(e),s=k(n.seconds,r.seconds);return 0!==s?s:k(n.nanos,r.nanos)}function ot(t){return at(t)}function at(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=G(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?z(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,tt.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=at(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const s of e)r?r=!1:n+=",",n+=`${s}:${at(t.fields[s])}`;return n+"}"}(t.mapValue):y();var e,n}function ct(t){return!!t&&"integerValue"in t}function ut(t){return!!t&&"arrayValue"in t}function ht(t){return!!t&&"nullValue"in t}function lt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function dt(t){return!!t&&"mapValue"in t}function ft(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return M(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=ft(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ft(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.value=t}static empty(){return new gt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!dt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ft(e)}setAll(t){let e=q.emptyPath(),n={},r=[];t.forEach((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=s.popLast()}t?n[s.lastSegment()]=ft(t):r.push(s.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());dt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return nt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];dt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){M(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new gt(ft(this.value))}}function pt(t){const e=[];return M(t.fields,(t,n)=>{const r=new q([t]);if(dt(n)){const t=pt(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new B(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class mt{constructor(t,e,n,r,s){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=s}static newInvalidDocument(t){return new mt(t,0,L.min(),gt.empty(),0)}static newFoundDocument(t,e,n){return new mt(t,1,e,n,0)}static newNoDocument(t,e){return new mt(t,2,e,gt.empty(),0)}static newUnknownDocument(t,e){return new mt(t,3,e,gt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof mt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new mt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t,e=null,n=[],r=[],s=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.A=null}}function vt(t,e=null,n=[],r=[],s=null,i=null,o=null){return new yt(t,e,n,r,s,i,o)}function wt(t){const e=w(t);if(null===e.A){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>St(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),Y(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Lt(e.startAt)),e.endAt&&(t+="|ub:",t+=Lt(e.endAt)),e.A=t}return e.A}function bt(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${ot(e.value)}`;var e}).join(", ")}]`),Y(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Lt(t.startAt)),t.endAt&&(e+=", endAt: "+Lt(t.endAt)),`Target(${e})`}function Et(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!Mt(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!nt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ut(t.startAt,e.startAt)&&Ut(t.endAt,e.endAt)}function Tt(t){return tt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class It extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.R(t,e,n):new At(t,e,n):"array-contains"===e?new Ct(t,n):"in"===e?new _t(t,n):"not-in"===e?new kt(t,n):"array-contains-any"===e?new Rt(t,n):new It(t,e,n)}static R(t,e,n){return"in"===e?new Nt(t,n):new Ot(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.P(st(e,this.value)):null!==e&&et(this.value)===et(e)&&this.P(st(e,this.value))}P(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return y()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function St(t){return t.field.canonicalString()+t.op.toString()+ot(t.value)}class At extends It{constructor(t,e,n){super(t,e,n),this.key=tt.fromName(n.referenceValue)}matches(t){const e=tt.comparator(t.key,this.key);return this.P(e)}}class Nt extends It{constructor(t,e){super(t,"in",e),this.keys=Dt("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Ot extends It{constructor(t,e){super(t,"not-in",e),this.keys=Dt("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Dt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>tt.fromName(t.referenceValue))}class Ct extends It{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ut(e)&&rt(e.arrayValue,this.value)}}class _t extends It{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&rt(this.value.arrayValue,e)}}class kt extends It{constructor(t,e){super(t,"not-in",e)}matches(t){if(rt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!rt(this.value.arrayValue,e)}}class Rt extends It{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ut(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>rt(this.value.arrayValue,t))}}class xt{constructor(t,e){this.position=t,this.before=e}}function Lt(t){return`${t.before?"b":"a"}:${t.position.map(t=>ot(t)).join(",")}`}class jt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Mt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Vt(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(r=i.field.isKeyField()?tt.comparator(tt.fromName(o.referenceValue),n.key):st(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function Ut(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nt(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t,e=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function Ft(t,e,n,r,s,i,o,a){return new Pt(t,e,n,r,s,i,o,a)}function qt(t){return new Pt(t)}function Bt(t){return!Y(t.limit)&&"F"===t.limitType}function Kt(t){return!Y(t.limit)&&"L"===t.limitType}function Ht(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Gt(t){for(const e of t.filters)if(e.v())return e.field;return null}function $t(t){return null!==t.collectionGroup}function zt(t){const e=w(t);if(null===e.V){e.V=[];const t=Gt(e),n=Ht(e);if(null!==t&&null===n)t.isKeyField()||e.V.push(new jt(t)),e.V.push(new jt(q.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.V.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new jt(q.keyField(),t))}}}return e.V}function Qt(t){const e=w(t);if(!e.S)if("F"===e.limitType)e.S=vt(e.path,e.collectionGroup,zt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of zt(e)){const e="desc"===s.dir?"asc":"desc";t.push(new jt(s.field,e))}const n=e.endAt?new xt(e.endAt.position,!e.endAt.before):null,r=e.startAt?new xt(e.startAt.position,!e.startAt.before):null;e.S=vt(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.S}function Wt(t,e,n){return new Pt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xt(t,e){return Et(Qt(t),Qt(e))&&t.limitType===e.limitType}function Yt(t){return`${wt(Qt(t))}|lt:${t.limitType}`}function Jt(t){return`Query(target=${bt(Qt(t))}; limitType=${t.limitType})`}function Zt(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):tt.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!Vt(t.startAt,zt(t),e))&&(!t.endAt||!Vt(t.endAt,zt(t),e))}(t,e)}function te(t){return(e,n)=>{let r=!1;for(const s of zt(t)){const t=ee(s,e,n);if(0!==t)return t;r=r||s.field.isKeyField()}return 0}}function ee(t,e,n){const r=t.field.isKeyField()?tt.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),s=n.data.field(t);return null!==r&&null!==s?st(r,s):y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:J(e)?"-0":e}}function re(t){return{integerValue:""+t}}function se(t,e){return Z(e)?re(e):ne(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(){this._=void 0}}function oe(t,e,n){return t instanceof ue?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof he?le(t,e):t instanceof de?fe(t,e):function(t,e){const n=ce(t,e),r=pe(n)+pe(t.C);return ct(n)&&ct(t.C)?re(r):ne(t.N,r)}(t,e)}function ae(t,e,n){return t instanceof he?le(t,e):t instanceof de?fe(t,e):n}function ce(t,e){return t instanceof ge?ct(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class ue extends ie{}class he extends ie{constructor(t){super(),this.elements=t}}function le(t,e){const n=me(e);for(const r of t.elements)n.some(t=>nt(t,r))||n.push(r);return{arrayValue:{values:n}}}class de extends ie{constructor(t){super(),this.elements=t}}function fe(t,e){let n=me(e);for(const r of t.elements)n=n.filter(t=>!nt(t,r));return{arrayValue:{values:n}}}class ge extends ie{constructor(t,e){super(),this.N=t,this.C=e}}function pe(t){return $(t.integerValue||t.doubleValue)}function me(t){return ut(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof he&&e instanceof he||t instanceof de&&e instanceof de?R(t.elements,e.elements,nt):t instanceof ge&&e instanceof ge?nt(t.C,e.C):t instanceof ue&&e instanceof ue}(t.transform,e.transform)}class ve{constructor(t,e){this.version=t,this.transformResults=e}}class we{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new we}static exists(t){return new we(void 0,t)}static updateTime(t){return new we(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function be(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ee{}function Te(t,e,n){t instanceof Oe?function(t,e,n){const r=t.value.clone(),s=_e(t.fieldTransforms,e,n.transformResults);r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof De?function(t,e,n){if(!be(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=_e(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(Ce(t)),s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Ie(t,e,n){t instanceof Oe?function(t,e,n){if(!be(t.precondition,e))return;const r=t.value.clone(),s=ke(t.fieldTransforms,n,e);r.setAll(s),e.convertToFoundDocument(Ne(e),r).setHasLocalMutations()}(t,e,n):t instanceof De?function(t,e,n){if(!be(t.precondition,e))return;const r=ke(t.fieldTransforms,n,e),s=e.data;s.setAll(Ce(t)),s.setAll(r),e.convertToFoundDocument(Ne(e),s).setHasLocalMutations()}(t,e,n):function(t,e){be(t.precondition,e)&&e.convertToNoDocument(L.min())}(t,e)}function Se(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),s=ce(r.transform,t||null);null!=s&&(null==n&&(n=gt.empty()),n.set(r.field,s))}return n||null}function Ae(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&R(t,e,(t,e)=>ye(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Ne(t){return t.isFoundDocument()?t.version:L.min()}class Oe extends Ee{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class De extends Ee{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}}function Ce(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function _e(t,e,n){const r=new Map;v(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,ae(o,a,n[s]))}return r}function ke(t,e,n){const r=new Map;for(const s of t){const t=s.transform,i=n.data.field(s.field);r.set(s.field,oe(t,i,e))}return r}class Re extends Ee{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class xe extends Ee{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,Me;function Ve(t){switch(t){default:return y();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Ue(t){if(void 0===t)return g("GRPC error has no .code"),b.UNKNOWN;switch(t){case je.OK:return b.OK;case je.CANCELLED:return b.CANCELLED;case je.UNKNOWN:return b.UNKNOWN;case je.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case je.INTERNAL:return b.INTERNAL;case je.UNAVAILABLE:return b.UNAVAILABLE;case je.UNAUTHENTICATED:return b.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case je.NOT_FOUND:return b.NOT_FOUND;case je.ALREADY_EXISTS:return b.ALREADY_EXISTS;case je.PERMISSION_DENIED:return b.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case je.ABORTED:return b.ABORTED;case je.OUT_OF_RANGE:return b.OUT_OF_RANGE;case je.UNIMPLEMENTED:return b.UNIMPLEMENTED;case je.DATA_LOSS:return b.DATA_LOSS;default:return y()}}(Me=je||(je={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pe{constructor(t,e){this.comparator=t,this.root=e||qe.EMPTY}insert(t,e){return new Pe(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(t){return new Pe(this.comparator,this.root.remove(t,this.comparator).copy(null,null,qe.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Fe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Fe(this.root,t,this.comparator,!1)}getReverseIterator(){return new Fe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Fe(this.root,t,this.comparator,!0)}}class Fe{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class qe{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=null!=n?n:qe.RED,this.left=null!=r?r:qe.EMPTY,this.right=null!=s?s:qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new qe(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===s?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return qe.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const t=this.left.check();if(t!==this.right.check())throw y();return t+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1,qe.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(t,e,n,r,s){return this}insert(t,e,n){return new qe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Be{constructor(t){this.comparator=t,this.data=new Pe(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ke(this.data.getIterator())}getIteratorFrom(t){return new Ke(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Be))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Be(this.comparator);return e.data=t,e}}class Ke{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=new Pe(tt.comparator);function Ge(){return He}const $e=new Pe(tt.comparator);function ze(){return $e}const Qe=new Pe(tt.comparator);function We(){return Qe}const Xe=new Be(tt.comparator);function Ye(...t){let e=Xe;for(const n of t)e=e.add(n);return e}const Je=new Be(k);function Ze(){return Je}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,en.createSynthesizedTargetChangeForCurrentChange(t,e)),new tn(L.min(),n,Ze(),Ge(),Ye())}}class en{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e){return new en(K.EMPTY_BYTE_STRING,e,Ye(),Ye(),Ye())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(t,e,n,r){this.k=t,this.removedTargetIds=e,this.key=n,this.$=r}}class rn{constructor(t,e){this.targetId=t,this.O=e}}class sn{constructor(t,e,n=K.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class on{constructor(){this.F=0,this.M=un(),this.L=K.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(t){t.approximateByteSize()>0&&(this.U=!0,this.L=t)}W(){let t=Ye(),e=Ye(),n=Ye();return this.M.forEach((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:y()}}),new en(this.L,this.B,t,e,n)}G(){this.U=!1,this.M=un()}H(t,e){this.U=!0,this.M=this.M.insert(t,e)}J(t){this.U=!0,this.M=this.M.remove(t)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class an{constructor(t){this.tt=t,this.et=new Map,this.nt=Ge(),this.st=cn(),this.it=new Be(k)}rt(t){for(const e of t.k)t.$&&t.$.isFoundDocument()?this.ot(e,t.$):this.ct(e,t.key,t.$);for(const e of t.removedTargetIds)this.ct(e,t.key,t.$)}at(t){this.forEachTarget(t,e=>{const n=this.ut(e);switch(t.state){case 0:this.ht(e)&&n.j(t.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(t.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(e);break;case 3:this.ht(e)&&(n.Z(),n.j(t.resumeToken));break;case 4:this.ht(e)&&(this.lt(e),n.j(t.resumeToken));break;default:y()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.et.forEach((t,n)=>{this.ht(n)&&e(n)})}ft(t){const e=t.targetId,n=t.O.count,r=this.dt(e);if(r){const t=r.target;if(Tt(t))if(0===n){const n=new tt(t.path);this.ct(e,n,mt.newNoDocument(n,L.min()))}else v(1===n);else this.wt(e)!==n&&(this.lt(e),this.it=this.it.add(e))}}_t(t){const e=new Map;this.et.forEach((n,r)=>{const s=this.dt(r);if(s){if(n.current&&Tt(s.target)){const e=new tt(s.target.path);null!==this.nt.get(e)||this.gt(r,e)||this.ct(r,e,mt.newNoDocument(e,t))}n.K&&(e.set(r,n.W()),n.G())}});let n=Ye();this.st.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.dt(t);return!e||2===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))});const r=new tn(t,e,this.it,this.nt,n);return this.nt=Ge(),this.st=cn(),this.it=new Be(k),r}ot(t,e){if(!this.ht(t))return;const n=this.gt(t,e.key)?2:0;this.ut(t).H(e.key,n),this.nt=this.nt.insert(e.key,e),this.st=this.st.insert(e.key,this.yt(e.key).add(t))}ct(t,e,n){if(!this.ht(t))return;const r=this.ut(t);this.gt(t,e)?r.H(e,1):r.J(e),this.st=this.st.insert(e,this.yt(e).delete(t)),n&&(this.nt=this.nt.insert(e,n))}removeTarget(t){this.et.delete(t)}wt(t){const e=this.ut(t).W();return this.tt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Y(t){this.ut(t).Y()}ut(t){let e=this.et.get(t);return e||(e=new on,this.et.set(t,e)),e}yt(t){let e=this.st.get(t);return e||(e=new Be(k),this.st=this.st.insert(t,e)),e}ht(t){const e=null!==this.dt(t);return e||f("WatchChangeAggregator","Detected inactive target",t),e}dt(t){const e=this.et.get(t);return e&&e.q?null:this.tt.Tt(t)}lt(t){this.et.set(t,new on),this.tt.getRemoteKeysForTarget(t).forEach(e=>{this.ct(t,e,null)})}gt(t,e){return this.tt.getRemoteKeysForTarget(t).has(e)}}function cn(){return new Pe(tt.comparator)}function un(){return new Pe(tt.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),ln=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class dn{constructor(t,e){this.databaseId=t,this.D=e}}function fn(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gn(t,e){return t.D?e.toBase64():e.toUint8Array()}function pn(t,e){return fn(t,e.toTimestamp())}function mn(t){return v(!!t),L.fromTimestamp(function(t){const e=G(t);return new x(e.seconds,e.nanos)}(t))}function yn(t,e){return function(t){return new P(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function vn(t){const e=P.fromString(t);return v(Kn(e)),e}function wn(t,e){return yn(t.databaseId,e.path)}function bn(t,e){const n=vn(e);if(n.get(1)!==t.databaseId.projectId)throw new E(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new E(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new tt(Sn(n))}function En(t,e){return yn(t.databaseId,e)}function Tn(t){const e=vn(t);return 4===e.length?P.emptyPath():Sn(e)}function In(t){return new P(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Sn(t){return v(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function An(t,e,n){return{name:wn(t,e),fields:n.value.mapValue.fields}}function Nn(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:y()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(t,e){return t.D?(v(void 0===e||"string"==typeof e),K.fromBase64String(e||"")):(v(void 0===e||e instanceof Uint8Array),K.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?b.UNKNOWN:Ue(t.code);return new E(e,t.message||"")}(o);n=new sn(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=bn(t,r.document.name),i=mn(r.document.updateTime),o=new gt({mapValue:{fields:r.document.fields}}),a=mt.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new nn(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=bn(t,r.document),i=r.readTime?mn(r.readTime):L.min(),o=mt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new nn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=bn(t,r.document),i=r.removedTargetIds||[];n=new nn([],i,s,null)}else{if(!("filter"in e))return y();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,s=new Le(r),i=t.targetId;n=new rn(i,s)}}return n}function On(t,e){let n;if(e instanceof Oe)n={update:An(t,e.key,e.value)};else if(e instanceof Re)n={delete:wn(t,e.key)};else if(e instanceof De)n={update:An(t,e.key,e.data),updateMask:Bn(e.fieldMask)};else{if(!(e instanceof xe))return y();n={verify:wn(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof ue)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof he)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof de)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ge)return{fieldPath:e.field.canonicalString(),increment:n.C};throw y()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:pn(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:y()}(t,e.precondition)),n}function Dn(t,e){return t&&t.length>0?(v(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?mn(t.updateTime):mn(e);return n.isEqual(L.min())&&(n=mn(e)),new ve(n,t.transformResults||[])}(t,e))):[]}function Cn(t,e){return{documents:[En(t,e.path)]}}function _n(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=En(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=En(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(lt(t.value))return{unaryFilter:{field:Un(t.field),op:"IS_NAN"}};if(ht(t.value))return{unaryFilter:{field:Un(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(lt(t.value))return{unaryFilter:{field:Un(t.field),op:"IS_NOT_NAN"}};if(ht(t.value))return{unaryFilter:{field:Un(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Un(t.field),op:Vn(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Un(t.field),direction:Mn(t.dir)}}(t))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(t,e){return t.D||Y(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Ln(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Ln(e.endAt)),n}function kn(t){let e=Tn(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){v(1===r);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=xn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new jt(Pn(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Y(e)?null:e}(n.limit));let c=null;n.startAt&&(c=jn(n.startAt));let u=null;return n.endAt&&(u=jn(n.endAt)),Ft(e,s,o,i,a,"F",c,u)}function Rn(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function xn(t){return t?void 0!==t.unaryFilter?[qn(t)]:void 0!==t.fieldFilter?[Fn(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>xn(t)).reduce((t,e)=>t.concat(e)):y():[]}function Ln(t){return{before:t.before,values:t.position}}function jn(t){const e=!!t.before,n=t.values||[];return new xt(n,e)}function Mn(t){return hn[t]}function Vn(t){return ln[t]}function Un(t){return{fieldPath:t.canonicalString()}}function Pn(t){return q.fromServerFormat(t.fieldPath)}function Fn(t){return It.create(Pn(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(t.fieldFilter.op),t.fieldFilter.value)}function qn(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Pn(t.unaryFilter.field);return It.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Pn(t.unaryFilter.field);return It.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Pn(t.unaryFilter.field);return It.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Pn(t.unaryFilter.field);return It.create(s,"!=",{nullValue:"NULL_VALUE"});default:return y()}}function Bn(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Kn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=$n(e)),e=Gn(t.get(n),e);return $n(e)}function Gn(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const e=t.charAt(s);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function $n(t){return t+""}class zn{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}zn.store="owner",zn.key="owner";class Qn{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}Qn.store="mutationQueues",Qn.keyPath="userId";class Wn{constructor(t,e,n,r,s){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=s}}Wn.store="mutations",Wn.keyPath="batchId",Wn.userMutationsIndex="userMutationsIndex",Wn.userMutationsKeyPath=["userId","batchId"];class Xn{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,Hn(e)]}static key(t,e,n){return[t,Hn(e),n]}}Xn.store="documentMutations",Xn.PLACEHOLDER=new Xn;class Yn{constructor(t,e,n,r,s,i){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=s,this.parentPath=i}}Yn.store="remoteDocuments",Yn.readTimeIndex="readTimeIndex",Yn.readTimeIndexPath="readTime",Yn.collectionReadTimeIndex="collectionReadTimeIndex",Yn.collectionReadTimeIndexPath=["parentPath","readTime"];class Jn{constructor(t){this.byteSize=t}}Jn.store="remoteDocumentGlobal",Jn.key="remoteDocumentGlobalKey";class Zn{constructor(t,e,n,r,s,i,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=s,this.lastLimboFreeSnapshotVersion=i,this.query=o}}Zn.store="targets",Zn.keyPath="targetId",Zn.queryTargetsIndexName="queryTargetsIndex",Zn.queryTargetsKeyPath=["canonicalId","targetId"];class tr{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}tr.store="targetDocuments",tr.keyPath=["targetId","path"],tr.documentTargetsIndex="documentTargetsIndex",tr.documentTargetsKeyPath=["path","targetId"];class er{constructor(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}er.key="targetGlobalKey",er.store="targetGlobal";class nr{constructor(t,e){this.collectionId=t,this.parent=e}}nr.store="collectionParents",nr.keyPath=["collectionId","parent"];class rr{constructor(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}}rr.store="clientMetadata",rr.keyPath="clientId";class sr{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}sr.store="bundles",sr.keyPath="bundleId";class ir{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}ir.store="namedQueries",ir.keyPath="name";Qn.store,Wn.store,Xn.store,Yn.store,Zn.store,zn.store,er.store,tr.store,rr.store,Jn.store,nr.store,sr.store,ir.store;const or="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ar{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new cr((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof cr?e:cr.resolve(e)}catch(t){return cr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):cr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):cr.reject(e)}static resolve(t){return new cr((e,n)=>{e(t)})}static reject(t){return new cr((e,n)=>{n(t)})}static waitFor(t){return new cr((e,n)=>{let r=0,s=0,i=!1;t.forEach(t=>{++r,t.next(()=>{++s,i&&s===r&&e()},t=>n(t))}),i=!0,s===r&&e()})}static or(t){let e=cr.resolve(!1);for(const n of t)e=e.next(t=>t?cr.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hr{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Te(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Ie(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Ie(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(L.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Ye())}isEqual(t){return this.batchId===t.batchId&&R(this.mutations,t.mutations,(t,e)=>Ae(t,e))&&R(this.baseMutations,t.baseMutations,(t,e)=>Ae(t,e))}}class lr{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){v(t.mutations.length===n.length);let r=We();const s=t.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new lr(t,e,n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t,e,n,r,s=L.min(),i=L.min(),o=K.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(t){return new dr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t){this.Wt=t}}function gr(t){const e=kn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Wt(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pr{constructor(){this.Gt=new mr}addToCollectionParentIndex(t,e){return this.Gt.add(e),cr.resolve()}getCollectionParents(t,e){return cr.resolve(this.Gt.getEntries(e))}}class mr{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Be(P.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Be(P.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new yr(t,yr.DEFAULT_COLLECTION_PERCENTILE,yr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yr.DEFAULT_COLLECTION_PERCENTILE=10,yr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yr.DEFAULT=new yr(41943040,yr.DEFAULT_COLLECTION_PERCENTILE,yr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yr.DISABLED=new yr(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vr{constructor(t){this.ne=t}next(){return this.ne+=2,this.ne}static se(){return new vr(0)}static ie(){return new vr(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function wr(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==or)throw t;f("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class br{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){M(this.inner,(e,n)=>{for(const[r,s]of n)t(r,s)})}isEmpty(){return V(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this.changes=new br(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:L.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:mt.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?cr.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tr{constructor(t,e,n){this.He=t,this.In=e,this.Ht=n}An(t,e){return this.In.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.Rn(t,e,n))}Rn(t,e,n){return this.He.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}bn(t,e){t.forEach((t,n)=>{for(const r of e)r.applyToLocalView(n)})}Pn(t,e){return this.He.getEntries(t,e).next(e=>this.vn(t,e).next(()=>e))}vn(t,e){return this.In.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.bn(e,t))}getDocumentsMatchingQuery(t,e,n){return function(t){return tt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Vn(t,e.path):$t(e)?this.Sn(t,e,n):this.Dn(t,e,n)}Vn(t,e){return this.An(t,new tt(e)).next(t=>{let e=ze();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Sn(t,e,n){const r=e.collectionGroup;let s=ze();return this.Ht.getCollectionParents(t,r).next(i=>cr.forEach(i,i=>{const o=function(t,e){return new Pt(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(r));return this.Dn(t,o,n).next(t=>{t.forEach((t,e)=>{s=s.insert(t,e)})})}).next(()=>s))}Dn(t,e,n){let r,s;return this.He.getDocumentsMatchingQuery(t,e,n).next(n=>(r=n,this.In.getAllMutationBatchesAffectingQuery(t,e))).next(e=>(s=e,this.Cn(t,s,r).next(t=>{r=t;for(const e of s)for(const t of e.mutations){const n=t.key;let s=r.get(n);null==s&&(s=mt.newInvalidDocument(n),r=r.insert(n,s)),Ie(t,s,e.localWriteTime),s.isFoundDocument()||(r=r.remove(n))}}))).next(()=>(r.forEach((t,n)=>{Zt(e,n)||(r=r.remove(t))}),r))}Cn(t,e,n){let r=Ye();for(const i of e)for(const t of i.mutations)t instanceof De&&null===n.get(t.key)&&(r=r.add(t.key));let s=n;return this.He.getEntries(t,r).next(t=>(t.forEach((t,e)=>{e.isFoundDocument()&&(s=s.insert(t,e))}),s))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Nn=n,this.xn=r}static kn(t,e){let n=Ye(),r=Ye();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Ir(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{$n(t){this.On=t}getDocumentsMatchingQuery(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(L.min())?this.Fn(t,e):this.On.Pn(t,r).next(s=>{const o=this.Mn(e,s);return(Bt(e)||Kt(e))&&this.Ln(e.limitType,o,r,n)?this.Fn(t,e):(d()<=i["a"].DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Jt(e)),this.On.getDocumentsMatchingQuery(t,e,n).next(t=>(o.forEach(e=>{t=t.insert(e.key,e)}),t)))})}Mn(t,e){let n=new Be(te(t));return e.forEach((e,r)=>{Zt(t,r)&&(n=n.add(r))}),n}Ln(t,e,n,r){if(n.size!==e.size)return!0;const s="F"===t?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Fn(t,e){return d()<=i["a"].DEBUG&&f("QueryEngine","Using full collection scan to execute query:",Jt(e)),this.On.getDocumentsMatchingQuery(t,e,L.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t,e,n,r){this.persistence=t,this.Bn=e,this.N=r,this.Un=new Pe(k),this.qn=new br(t=>wt(t),Et),this.Kn=L.min(),this.In=t.getMutationQueue(n),this.jn=t.getRemoteDocumentCache(),this.ze=t.getTargetCache(),this.Qn=new Tr(this.jn,this.In,this.persistence.getIndexManager()),this.Je=t.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Un))}}function Nr(t,e,n,r){return new Ar(t,e,n,r)}async function Or(t,e){const n=w(t);let r=n.In,s=n.Qn;const i=await n.persistence.runTransaction("Handle user change","readonly",t=>{let i;return n.In.getAllMutationBatches(t).next(o=>(i=o,r=n.persistence.getMutationQueue(e),s=new Tr(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t))).next(e=>{const n=[],r=[];let o=Ye();for(const t of i){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return s.Pn(t,o).next(t=>({Wn:t,removedBatchIds:n,addedBatchIds:r}))})});return n.In=r,n.Qn=s,n.Bn.$n(n.Qn),i}function Dr(t,e){const n=w(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),s=n.jn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const s=n.batch,i=s.keys();let o=cr.resolve();return i.forEach(t=>{o=o.next(()=>r.getEntry(e,t)).next(e=>{const i=n.docVersions.get(t);v(null!==i),e.version.compareTo(i)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&r.addEntry(e,n.commitVersion))})}),o.next(()=>t.In.removeMutationBatch(e,s))}(n,t,e,s).next(()=>s.apply(t)).next(()=>n.In.performConsistencyCheck(t)).next(()=>n.Qn.Pn(t,r))})}function Cr(t){const e=w(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ze.getLastRemoteSnapshotVersion(t))}function _r(t,e){const n=w(t),r=e.snapshotVersion;let s=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const i=n.jn.newChangeBuffer({trackRemovals:!0});s=n.Un;const o=[];e.targetChanges.forEach((e,i)=>{const a=s.get(i);if(!a)return;o.push(n.ze.removeMatchingKeys(t,e.removedDocuments,i).next(()=>n.ze.addMatchingKeys(t,e.addedDocuments,i)));const c=e.resumeToken;if(c.approximateByteSize()>0){const u=a.withResumeToken(c,r).withSequenceNumber(t.currentSequenceNumber);s=s.insert(i,u),function(t,e,n){return v(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,u,e)&&o.push(n.ze.updateTargetData(t,u))}});let a=Ge();if(e.documentUpdates.forEach((r,s)=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push(kr(t,i,e.documentUpdates,r,void 0).next(t=>{a=t})),!r.isEqual(L.min())){const e=n.ze.getLastRemoteSnapshotVersion(t).next(e=>n.ze.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return cr.waitFor(o).next(()=>i.apply(t)).next(()=>n.Qn.vn(t,a)).next(()=>a)}).then(t=>(n.Un=s,t))}function kr(t,e,n,r,s){let i=Ye();return n.forEach(t=>i=i.add(t)),e.getEntries(t,i).next(t=>{let i=Ge();return n.forEach((n,o)=>{const a=t.get(n),c=(null==s?void 0:s.get(n))||r;o.isNoDocument()&&o.version.isEqual(L.min())?(e.removeEntry(n,c),i=i.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),i=i.insert(n,o)):f("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)}),i})}function Rr(t,e){const n=w(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.In.getNextMutationBatchAfterBatchId(t,e)))}function xr(t,e){const n=w(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.ze.getTargetData(t,e).next(s=>s?(r=s,cr.resolve(r)):n.ze.allocateTargetId(t).next(s=>(r=new dr(e,s,0,t.currentSequenceNumber),n.ze.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.Un.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(t.targetId,t),n.qn.set(e,t.targetId)),t})}async function Lr(t,e,n){const r=w(t),s=r.Un.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,t=>r.persistence.referenceDelegate.removeTarget(t,s))}catch(t){if(!ur(t))throw t;f("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Un=r.Un.remove(e),r.qn.delete(s.target)}function jr(t,e,n){const r=w(t);let s=L.min(),i=Ye();return r.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const r=w(t),s=r.qn.get(n);return void 0!==s?cr.resolve(r.Un.get(s)):r.ze.getTargetData(e,n)}(r,t,Qt(e)).next(e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(t,e.targetId).next(t=>{i=t})}).next(()=>r.Bn.getDocumentsMatchingQuery(t,e,n?s:L.min(),n?i:Ye())).next(t=>({documents:t,Gn:i})))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mr{constructor(t){this.N=t,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return cr.resolve(this.Yn.get(e))}saveBundleMetadata(t,e){var n;return this.Yn.set(e.id,{id:(n=e).id,version:n.version,createTime:mn(n.createTime)}),cr.resolve()}getNamedQuery(t,e){return cr.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:gr(t.bundledQuery),readTime:mn(t.readTime)}}(e)),cr.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(){this.Zn=new Be(Ur.ts),this.es=new Be(Ur.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new Ur(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.rs(new Ur(t,e))}os(t,e){t.forEach(t=>this.removeReference(t,e))}cs(t){const e=new tt(new P([])),n=new Ur(e,t),r=new Ur(e,t+1),s=[];return this.es.forEachInRange([n,r],t=>{this.rs(t),s.push(t.key)}),s}us(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new tt(new P([])),n=new Ur(e,t),r=new Ur(e,t+1);let s=Ye();return this.es.forEachInRange([n,r],t=>{s=s.add(t.key)}),s}containsKey(t){const e=new Ur(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Ur{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return tt.comparator(t.key,e.key)||k(t.ls,e.ls)}static ns(t,e){return k(t.ls,e.ls)||tt.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t,e){this.Ht=t,this.referenceDelegate=e,this.In=[],this.fs=1,this.ds=new Be(Ur.ts)}checkEmpty(t){return cr.resolve(0===this.In.length)}addMutationBatch(t,e,n,r){const s=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const i=new hr(s,e,n,r);this.In.push(i);for(const o of r)this.ds=this.ds.add(new Ur(o.key,s)),this.Ht.addToCollectionParentIndex(t,o.key.path.popLast());return cr.resolve(i)}lookupMutationBatch(t,e){return cr.resolve(this.ws(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this._s(n),s=r<0?0:r;return cr.resolve(this.In.length>s?this.In[s]:null)}getHighestUnacknowledgedBatchId(){return cr.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(t){return cr.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ur(e,0),r=new Ur(e,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([n,r],t=>{const e=this.ws(t.ls);s.push(e)}),cr.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Be(k);return e.forEach(t=>{const e=new Ur(t,0),r=new Ur(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],t=>{n=n.add(t.ls)})}),cr.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;tt.isDocumentKey(s)||(s=s.child(""));const i=new Ur(new tt(s),0);let o=new Be(k);return this.ds.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)},i),cr.resolve(this.gs(o))}gs(t){const e=[];return t.forEach(t=>{const n=this.ws(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){v(0===this.ys(e.batchId,"removed")),this.In.shift();let n=this.ds;return cr.forEach(e.mutations,r=>{const s=new Ur(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ds=n})}te(t){}containsKey(t,e){const n=new Ur(e,0),r=this.ds.firstAfterOrEqual(n);return cr.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.In.length,cr.resolve()}ys(t,e){return this._s(t)}_s(t){return 0===this.In.length?0:t-this.In[0].batchId}ws(t){const e=this._s(t);return e<0||e>=this.In.length?null:this.In[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t,e){this.Ht=t,this.ps=e,this.docs=new Pe(tt.comparator),this.size=0}addEntry(t,e,n){const r=e.key,s=this.docs.get(r),i=s?s.size:0,o=this.ps(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:o,readTime:n}),this.size+=o-i,this.Ht.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return cr.resolve(n?n.document.clone():mt.newInvalidDocument(e))}getEntries(t,e){let n=Ge();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():mt.newInvalidDocument(t))}),cr.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=Ge();const s=new tt(e.path.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:t,value:{document:s,readTime:o}}=i.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||Zt(e,s)&&(r=r.insert(s.key,s.clone()))}return cr.resolve(r)}Ts(t,e){return cr.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new qr(this)}getSize(t){return cr.resolve(this.size)}}class qr extends Er{constructor(t){super(),this.Se=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.document.isValidDocument()?e.push(this.Se.addEntry(t,r.document,this.getReadTime(n))):this.Se.removeEntry(n)}),cr.waitFor(e)}getFromCache(t,e){return this.Se.getEntry(t,e)}getAllFromCache(t,e){return this.Se.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(t){this.persistence=t,this.Es=new br(t=>wt(t),Et),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.Is=0,this.As=new Vr,this.targetCount=0,this.Rs=vr.se()}forEachTarget(t,e){return this.Es.forEach((t,n)=>e(n)),cr.resolve()}getLastRemoteSnapshotVersion(t){return cr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return cr.resolve(this.Is)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),cr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Is&&(this.Is=e),cr.resolve()}ce(t){this.Es.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new vr(e),this.highestTargetId=e),t.sequenceNumber>this.Is&&(this.Is=t.sequenceNumber)}addTargetData(t,e){return this.ce(e),this.targetCount+=1,cr.resolve()}updateTargetData(t,e){return this.ce(e),cr.resolve()}removeTargetData(t,e){return this.Es.delete(e.target),this.As.cs(e.targetId),this.targetCount-=1,cr.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.Es.forEach((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Es.delete(i),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),cr.waitFor(s).next(()=>r)}getTargetCount(t){return cr.resolve(this.targetCount)}getTargetData(t,e){const n=this.Es.get(e)||null;return cr.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),cr.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach(e=>{s.push(r.markPotentiallyOrphaned(t,e))}),cr.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.As.cs(e),cr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return cr.resolve(n)}containsKey(t,e){return cr.resolve(this.As.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(t,e){this.bs={},this.Le=new D(0),this.Be=!1,this.Be=!0,this.referenceDelegate=t(this),this.ze=new Br(this),this.Ht=new pr,this.He=function(t,e){return new Fr(t,e)}(this.Ht,t=>this.referenceDelegate.Ps(t)),this.N=new fr(e),this.Je=new Mr(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new Pr(this.Ht,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(t,e,n){f("MemoryPersistence","Starting transaction:",t);const r=new Hr(this.Le.next());return this.referenceDelegate.vs(),n(r).next(t=>this.referenceDelegate.Vs(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ss(t,e){return cr.or(Object.values(this.bs).map(n=>()=>n.containsKey(t,e)))}}class Hr extends ar{constructor(t){super(),this.currentSequenceNumber=t}}class Gr{constructor(t){this.persistence=t,this.Ds=new Vr,this.Cs=null}static Ns(t){return new Gr(t)}get xs(){if(this.Cs)return this.Cs;throw y()}addReference(t,e,n){return this.Ds.addReference(n,e),this.xs.delete(n.toString()),cr.resolve()}removeReference(t,e,n){return this.Ds.removeReference(n,e),this.xs.add(n.toString()),cr.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),cr.resolve()}removeTarget(t,e){this.Ds.cs(e.targetId).forEach(t=>this.xs.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.xs.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}vs(){this.Cs=new Set}Vs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return cr.forEach(this.xs,n=>{const r=tt.fromPath(n);return this.ks(t,r).next(t=>{t||e.removeEntry(r)})}).next(()=>(this.Cs=null,e.apply(t)))}updateLimboDocument(t,e){return this.ks(t,e).next(t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())})}Ps(t){return 0}ks(t,e){return cr.or([()=>cr.resolve(this.Ds.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ss(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.activeTargetIds=Ze()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ms(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class zr{constructor(){this.yi=new $r,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.yi.Fs(t),this.pi[t]||"not-current"}updateQueryState(t,e,n){this.pi[t]=e}removeLocalQueryTarget(t){this.yi.Ms(t)}isLocalQueryTarget(t){return this.yi.activeTargetIds.has(t)}clearQueryState(t){delete this.pi[t]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(t){return this.yi.activeTargetIds.has(t)}start(){return this.yi=new $r,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{Ti(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Ri(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(t){this.vi=t.vi,this.Vi=t.Vi}Si(t){this.Di=t}Ci(t){this.Ni=t}onMessage(t){this.xi=t}close(){this.Vi()}send(t){this.vi(t)}ki(){this.Di()}$i(t){this.Ni(t)}Oi(t){this.xi(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(t,e,n,r){const s=this.Bi(t,e);f("RestConnection","Sending: ",s,n);const i={};return this.Ui(i,r),this.qi(t,s,i,n).then(t=>(f("RestConnection","Received: ",t),t),e=>{throw p("RestConnection",t+" failed with error: ",e,"url: ",s,"request:",n),e})}Ki(t,e,n,r){return this.Li(t,e,n,r)}Ui(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+h,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e)for(const n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])}Bi(t,e){const n=Xr[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}qi(t,e,n,r){return new Promise((s,i)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const e=o.getResponseJson();f("Connection","XHR received:",JSON.stringify(e)),s(e);break;case a["a"].TIMEOUT:f("Connection",'RPC "'+t+'" timed out'),i(new E(b.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(f("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(e)>=0?e:b.UNKNOWN}(t.status);i(new E(e,t.message))}else i(new E(b.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new E(b.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{f("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);o.send(e,"POST",c,n,15)})}ji(t,e){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Object(a["h"])(),s=Object(a["i"])(),i={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(i.xmlHttpFactory=new a["d"]({})),this.Ui(i.initMessageHeaders,e),Object(o["p"])()||Object(o["q"])()||Object(o["l"])()||Object(o["n"])()||Object(o["s"])()||Object(o["k"])()||(i.httpHeadersOverwriteParam="$httpHeaders");const c=n.join("");f("Connection","Creating WebChannel: "+c,i);const u=r.createWebChannel(c,i);let h=!1,l=!1;const d=new Yr({vi:t=>{l?f("Connection","Not sending because WebChannel is closed:",t):(h||(f("Connection","Opening WebChannel transport."),u.open(),h=!0),f("Connection","WebChannel sending:",t),u.send(t))},Vi:()=>u.close()}),g=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return g(u,a["f"].EventType.OPEN,()=>{l||f("Connection","WebChannel transport opened.")}),g(u,a["f"].EventType.CLOSE,()=>{l||(l=!0,f("Connection","WebChannel transport closed"),d.$i())}),g(u,a["f"].EventType.ERROR,t=>{l||(l=!0,p("Connection","WebChannel transport errored:",t),d.$i(new E(b.UNAVAILABLE,"The operation could not be completed")))}),g(u,a["f"].EventType.MESSAGE,t=>{var e;if(!l){const n=t.data[0];v(!!n);const r=n,s=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(s){f("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=je[t];if(void 0!==e)return Ue(e)}(t),n=s.message;void 0===e&&(e=b.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),l=!0,d.$i(new E(e,n)),u.close()}else f("Connection","WebChannel received:",n),d.Oi(n)}}),g(s,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?f("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&f("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ki()},0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(t){return new dn(t,!0)}class es{constructor(t,e,n=1e3,r=1.5,s=6e4){this.Oe=t,this.timerId=e,this.Qi=n,this.Wi=r,this.Gi=s,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const e=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),r=Math.max(0,e-n);r>0&&f("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Ji=Date.now(),t())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(t,e,n,r,s,i,o){this.Oe=t,this.er=n,this.nr=r,this.sr=s,this.credentialsProvider=i,this.listener=o,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new es(t,e)}ur(){return 1===this.state||5===this.state||this.hr()}hr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&null===this.rr&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this._r()))}mr(t){this.gr(),this.stream.send(t)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(t,e){this.gr(),this.yr(),this.ar.cancel(),this.ir++,4!==t?this.ar.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(g(e.toString()),g("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):e&&e.code===b.UNAUTHENTICATED&&3!==this.state&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.pr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ci(e)}pr(){}auth(){this.state=1;const t=this.Tr(this.ir),e=this.ir;this.credentialsProvider.getToken().then(t=>{this.ir===e&&this.Er(t)},e=>{t(()=>{const t=new E(b.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ir(t)})})}Er(t){const e=this.Tr(this.ir);this.stream=this.Ar(t),this.stream.Si(()=>{e(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,()=>(this.hr()&&(this.state=3),Promise.resolve())),this.listener.Si()))}),this.stream.Ci(t=>{e(()=>this.Ir(t))}),this.stream.onMessage(t=>{e(()=>this.onMessage(t))})}lr(){this.state=5,this.ar.Xi(async()=>{this.state=0,this.start()})}Ir(t){return f("PersistentStream","close with error: "+t),this.stream=null,this.close(4,t)}Tr(t){return e=>{this.Oe.enqueueAndForget(()=>this.ir===t?e():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rs extends ns{constructor(t,e,n,r,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s),this.N=r}Ar(t){return this.sr.ji("Listen",t)}onMessage(t){this.ar.reset();const e=Nn(this.N,t),n=function(t){if(!("targetChange"in t))return L.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?L.min():e.readTime?mn(e.readTime):L.min()}(t);return this.listener.Rr(e,n)}br(t){const e={};e.database=In(this.N),e.addTarget=function(t,e){let n;const r=e.target;return n=Tt(r)?{documents:Cn(t,r)}:{query:_n(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=gn(t,e.resumeToken):e.snapshotVersion.compareTo(L.min())>0&&(n.readTime=fn(t,e.snapshotVersion.toTimestamp())),n}(this.N,t);const n=Rn(this.N,t);n&&(e.labels=n),this.mr(e)}Pr(t){const e={};e.database=In(this.N),e.removeTarget=t,this.mr(e)}}class ss extends ns{constructor(t,e,n,r,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s),this.N=r,this.vr=!1}get Vr(){return this.vr}start(){this.vr=!1,this.lastStreamToken=void 0,super.start()}pr(){this.vr&&this.Sr([])}Ar(t){return this.sr.ji("Write",t)}onMessage(t){if(v(!!t.streamToken),this.lastStreamToken=t.streamToken,this.vr){this.ar.reset();const e=Dn(t.writeResults,t.commitTime),n=mn(t.commitTime);return this.listener.Dr(n,e)}return v(!t.writeResults||0===t.writeResults.length),this.vr=!0,this.listener.Cr()}Nr(){const t={};t.database=In(this.N),this.mr(t)}Sr(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>On(this.N,t))};this.mr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is extends class{}{constructor(t,e,n){super(),this.credentials=t,this.sr=e,this.N=n,this.kr=!1}$r(){if(this.kr)throw new E(b.FAILED_PRECONDITION,"The client has already been terminated.")}Li(t,e,n){return this.$r(),this.credentials.getToken().then(r=>this.sr.Li(t,e,n,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new E(b.UNKNOWN,t.toString())})}Ki(t,e,n){return this.$r(),this.credentials.getToken().then(r=>this.sr.Ki(t,e,n,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new E(b.UNKNOWN,t.toString())})}terminate(){this.kr=!0}}class os{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){0===this.Or&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve())))}qr(t){"Online"===this.state?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur("Connection failed 1 times. Most recent error: "+t.toString()),this.Br("Offline")))}set(t){this.Kr(),this.Or=0,"Online"===t&&(this.Mr=!1),this.Br(t)}Br(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Ur(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(g(e),this.Mr=!1):f("OnlineStateTracker",e)}Kr(){null!==this.Fr&&(this.Fr.cancel(),this.Fr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=s,this.zr.Ti(t=>{n.enqueueAndForget(async()=>{ms(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=w(t);e.Wr.add(4),await us(e),e.Hr.set("Unknown"),e.Wr.delete(4),await cs(e)}(this))})}),this.Hr=new os(n,r)}}async function cs(t){if(ms(t))for(const e of t.Gr)await e(!0)}async function us(t){for(const e of t.Gr)await e(!1)}function hs(t,e){const n=w(t);n.Qr.has(e.targetId)||(n.Qr.set(e.targetId,e),ps(n)?gs(n):xs(n).hr()&&ds(n,e))}function ls(t,e){const n=w(t),r=xs(n);n.Qr.delete(e),r.hr()&&fs(n,e),0===n.Qr.size&&(r.hr()?r.wr():ms(n)&&n.Hr.set("Unknown"))}function ds(t,e){t.Jr.Y(e.targetId),xs(t).br(e)}function fs(t,e){t.Jr.Y(e),xs(t).Pr(e)}function gs(t){t.Jr=new an({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.Qr.get(e)||null}),xs(t).start(),t.Hr.Lr()}function ps(t){return ms(t)&&!xs(t).ur()&&t.Qr.size>0}function ms(t){return 0===w(t).Wr.size}function ys(t){t.Jr=void 0}async function vs(t){t.Qr.forEach((e,n)=>{ds(t,e)})}async function ws(t,e){ys(t),ps(t)?(t.Hr.qr(e),gs(t)):t.Hr.set("Unknown")}async function bs(t,e,n){if(t.Hr.set("Online"),e instanceof sn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Qr.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Qr.delete(r),t.Jr.removeTarget(r))}(t,e)}catch(n){f("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Es(t,n)}else if(e instanceof nn?t.Jr.rt(e):e instanceof rn?t.Jr.ft(e):t.Jr.at(e),!n.isEqual(L.min()))try{const e=await Cr(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Jr._t(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.Qr.get(r);s&&t.Qr.set(r,s.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.Qr.get(e);if(!n)return;t.Qr.set(e,n.withResumeToken(K.EMPTY_BYTE_STRING,n.snapshotVersion)),fs(t,e);const r=new dr(n.target,e,1,n.sequenceNumber);ds(t,r)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){f("RemoteStore","Failed to raise snapshot:",e),await Es(t,e)}}async function Es(t,e,n){if(!ur(e))throw e;t.Wr.add(1),await us(t),t.Hr.set("Offline"),n||(n=()=>Cr(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),t.Wr.delete(1),await cs(t)})}function Ts(t,e){return e().catch(n=>Es(t,n,e))}async function Is(t){const e=w(t),n=Ls(e);let r=e.jr.length>0?e.jr[e.jr.length-1].batchId:-1;for(;Ss(e);)try{const t=await Rr(e.localStore,r);if(null===t){0===e.jr.length&&n.wr();break}r=t.batchId,As(e,t)}catch(t){await Es(e,t)}Ns(e)&&Os(e)}function Ss(t){return ms(t)&&t.jr.length<10}function As(t,e){t.jr.push(e);const n=Ls(t);n.hr()&&n.Vr&&n.Sr(e.mutations)}function Ns(t){return ms(t)&&!Ls(t).ur()&&t.jr.length>0}function Os(t){Ls(t).start()}async function Ds(t){Ls(t).Nr()}async function Cs(t){const e=Ls(t);for(const n of t.jr)e.Sr(n.mutations)}async function _s(t,e,n){const r=t.jr.shift(),s=lr.from(r,e,n);await Ts(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Is(t)}async function ks(t,e){e&&Ls(t).Vr&&await async function(t,e){if(n=e.code,Ve(n)&&n!==b.ABORTED){const n=t.jr.shift();Ls(t).dr(),await Ts(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await Is(t)}var n}(t,e),Ns(t)&&Os(t)}async function Rs(t,e){const n=w(t);e?(n.Wr.delete(2),await cs(n)):e||(n.Wr.add(2),await us(n),n.Hr.set("Unknown"))}function xs(t){return t.Yr||(t.Yr=function(t,e,n){const r=w(t);return r.$r(),new rs(e,r.sr,r.credentials,r.N,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Si:vs.bind(null,t),Ci:ws.bind(null,t),Rr:bs.bind(null,t)}),t.Gr.push(async e=>{e?(t.Yr.dr(),ps(t)?gs(t):t.Hr.set("Unknown")):(await t.Yr.stop(),ys(t))})),t.Yr}function Ls(t){return t.Xr||(t.Xr=function(t,e,n){const r=w(t);return r.$r(),new ss(e,r.sr,r.credentials,r.N,n)}(t.datastore,t.asyncQueue,{Si:Ds.bind(null,t),Ci:ks.bind(null,t),Cr:Cs.bind(null,t),Dr:_s.bind(null,t)}),t.Gr.push(async e=>{e?(t.Xr.dr(),await Is(t)):(await t.Xr.stop(),t.jr.length>0&&(f("RemoteStore",`Stopping write stream with ${t.jr.length} pending writes`),t.jr=[]))})),t.Xr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class js{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,s){const i=Date.now()+n,o=new js(t,e,i,r,s);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new E(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ms(t,e){if(g("AsyncQueue",`${e}: ${t}`),ur(t))return new E(b.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(t){this.comparator=t?(e,n)=>t(e,n)||tt.comparator(e.key,n.key):(t,e)=>tt.comparator(t.key,e.key),this.keyedMap=ze(),this.sortedSet=new Pe(this.comparator)}static emptySet(t){return new Vs(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Vs))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Vs;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(){this.Zr=new Pe(tt.comparator)}track(t){const e=t.doc.key,n=this.Zr.get(e);n?0!==t.type&&3===n.type?this.Zr=this.Zr.insert(e,t):3===t.type&&1!==n.type?this.Zr=this.Zr.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Zr=this.Zr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Zr=this.Zr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Zr=this.Zr.remove(e):1===t.type&&2===n.type?this.Zr=this.Zr.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Zr=this.Zr.insert(e,{type:2,doc:t.doc}):y():this.Zr=this.Zr.insert(e,t)}eo(){const t=[];return this.Zr.inorderTraversal((e,n)=>{t.push(n)}),t}}class Ps{constructor(t,e,n,r,s,i,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const s=[];return e.forEach(t=>{s.push({type:0,doc:t})}),new Ps(t,e,Vs.emptySet(e),s,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Xt(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(){this.no=void 0,this.listeners=[]}}class qs{constructor(){this.queries=new br(t=>Yt(t),Xt),this.onlineState="Unknown",this.so=new Set}}async function Bs(t,e){const n=w(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Fs),s)try{i.no=await n.onListen(r)}catch(t){const n=Ms(t,`Initialization of query '${Jt(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,i),i.listeners.push(e),e.io(n.onlineState),i.no&&e.ro(i.no)&&$s(n)}async function Ks(t,e){const n=w(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Hs(t,e){const n=w(t);let r=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.ro(s)&&(r=!0);e.no=s}}r&&$s(n)}function Gs(t,e,n){const r=w(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function $s(t){t.so.forEach(t=>{t.next()})}class zs{constructor(t,e,n){this.query=t,this.oo=e,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=n||{}}ro(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Ps(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.co?this.uo(t)&&(this.oo.next(t),e=!0):this.ho(t,this.onlineState)&&(this.lo(t),e=!0),this.ao=t,e}onError(t){this.oo.error(t)}io(t){this.onlineState=t;let e=!1;return this.ao&&!this.co&&this.ho(this.ao,t)&&(this.lo(this.ao),e=!0),e}ho(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.fo||!n)&&(!t.docs.isEmpty()||"Offline"===e)}uo(t){if(t.docChanges.length>0)return!0;const e=this.ao&&this.ao.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}lo(t){t=Ps.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.co=!0,this.oo.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qs{constructor(t){this.key=t}}class Ws{constructor(t){this.key=t}}class Xs{constructor(t,e){this.query=t,this.po=e,this.To=null,this.current=!1,this.Eo=Ye(),this.mutatedKeys=Ye(),this.Io=te(t),this.Ao=new Vs(this.Io)}get Ro(){return this.po}bo(t,e){const n=e?e.Po:new Us,r=e?e.Ao:this.Ao;let s=e?e.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a=Bt(this.query)&&r.size===this.query.limit?r.last():null,c=Kt(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),h=Zt(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.vo(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Io(h,a)>0||c&&this.Io(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(i=i.add(h),s=d?s.add(t):s.delete(t)):(i=i.delete(t),s=s.delete(t)))}),Bt(this.query)||Kt(this.query))for(;i.size>this.query.limit;){const t=Bt(this.query)?i.last():i.first();i=i.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Ao:i,Po:n,Ln:o,mutatedKeys:s}}vo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Ao;this.Ao=t.Ao,this.mutatedKeys=t.mutatedKeys;const s=t.Po.eo();s.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Io(t.doc,e.doc)),this.Vo(n);const i=e?this.So():[],o=0===this.Eo.size&&this.current?1:0,a=o!==this.To;return this.To=o,0!==s.length||a?{snapshot:new Ps(this.query,t.Ao,r,s,t.mutatedKeys,0===o,a,!1),Do:i}:{Do:i}}io(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new Us,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(t){return!this.po.has(t)&&!!this.Ao.has(t)&&!this.Ao.get(t).hasLocalMutations}Vo(t){t&&(t.addedDocuments.forEach(t=>this.po=this.po.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.po=this.po.delete(t)),this.current=t.current)}So(){if(!this.current)return[];const t=this.Eo;this.Eo=Ye(),this.Ao.forEach(t=>{this.Co(t.key)&&(this.Eo=this.Eo.add(t.key))});const e=[];return t.forEach(t=>{this.Eo.has(t)||e.push(new Ws(t))}),this.Eo.forEach(n=>{t.has(n)||e.push(new Qs(n))}),e}No(t){this.po=t.Gn,this.Eo=Ye();const e=this.bo(t.documents);return this.applyChanges(e,!0)}xo(){return Ps.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,0===this.To)}}class Ys{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Js{constructor(t){this.key=t,this.ko=!1}}class Zs{constructor(t,e,n,r,s,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.$o={},this.Oo=new br(t=>Yt(t),Xt),this.Fo=new Map,this.Mo=new Set,this.Lo=new Pe(tt.comparator),this.Bo=new Map,this.Uo=new Vr,this.qo={},this.Ko=new Map,this.jo=vr.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return!0===this.Qo}}async function ti(t,e){const n=wi(t);let r,s;const i=n.Oo.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.xo();else{const t=await xr(n.localStore,Qt(e)),i=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,s=await ei(n,e,r,"current"===i),n.isPrimaryClient&&hs(n.remoteStore,t)}return s}async function ei(t,e,n,r){t.Wo=(e,n,r)=>async function(t,e,n,r){let s=e.view.bo(n);s.Ln&&(s=await jr(t.localStore,e.query,!1).then(({documents:t})=>e.view.bo(t,s)));const i=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,i);return fi(t,e.targetId,o.Do),o.snapshot}(t,e,n,r);const s=await jr(t.localStore,e,!0),i=new Xs(e,s.Gn),o=i.bo(s.documents),a=en.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=i.applyChanges(o,t.isPrimaryClient,a);fi(t,n,c.Do);const u=new Ys(e,n,i);return t.Oo.set(e,u),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),c.snapshot}async function ni(t,e){const n=w(t),r=n.Oo.get(e),s=n.Fo.get(r.targetId);if(s.length>1)return n.Fo.set(r.targetId,s.filter(t=>!Xt(t,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Lr(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ls(n.remoteStore,r.targetId),li(n,r.targetId)}).catch(wr)):(li(n,r.targetId),await Lr(n.localStore,r.targetId,!0))}async function ri(t,e,n){const r=bi(t);try{const t=await function(t,e){const n=w(t),r=x.now(),s=e.reduce((t,e)=>t.add(e.key),Ye());let i;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>n.Qn.Pn(t,s).next(s=>{i=s;const o=[];for(const t of e){const e=Se(t,i.get(t.key));null!=e&&o.push(new De(t.key,e,pt(e.value.mapValue),we.exists(!0)))}return n.In.addMutationBatch(t,r,o,e)})).then(t=>(t.applyToLocalDocumentSet(i),{batchId:t.batchId,changes:i}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.qo[t.currentUser.toKey()];r||(r=new Pe(k)),r=r.insert(e,n),t.qo[t.currentUser.toKey()]=r}(r,t.batchId,n),await mi(r,t.changes),await Is(r.remoteStore)}catch(t){const e=Ms(t,"Failed to persist write");n.reject(e)}}async function si(t,e){const n=w(t);try{const t=await _r(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.Bo.get(e);r&&(v(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.ko=!0:t.modifiedDocuments.size>0?v(r.ko):t.removedDocuments.size>0&&(v(r.ko),r.ko=!1))}),await mi(n,t,e)}catch(t){await wr(t)}}function ii(t,e,n){const r=w(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Oo.forEach((n,r)=>{const s=r.view.io(e);s.snapshot&&t.push(s.snapshot)}),function(t,e){const n=w(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const s of n.listeners)s.io(e)&&(r=!0)}),r&&$s(n)}(r.eventManager,e),t.length&&r.$o.Rr(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function oi(t,e,n){const r=w(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Bo.get(e),i=s&&s.key;if(i){let t=new Pe(tt.comparator);t=t.insert(i,mt.newNoDocument(i,L.min()));const n=Ye().add(i),s=new tn(L.min(),new Map,new Be(k),t,n);await si(r,s),r.Lo=r.Lo.remove(i),r.Bo.delete(e),pi(r)}else await Lr(r.localStore,e,!1).then(()=>li(r,e,n)).catch(wr)}async function ai(t,e){const n=w(t),r=e.batch.batchId;try{const t=await Dr(n.localStore,e);hi(n,r,null),ui(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await mi(n,t)}catch(t){await wr(t)}}async function ci(t,e,n){const r=w(t);try{const t=await function(t,e){const n=w(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.In.lookupMutationBatch(t,e).next(e=>(v(null!==e),r=e.keys(),n.In.removeMutationBatch(t,e))).next(()=>n.In.performConsistencyCheck(t)).next(()=>n.Qn.Pn(t,r))})}(r.localStore,e);hi(r,e,n),ui(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await mi(r,t)}catch(n){await wr(n)}}function ui(t,e){(t.Ko.get(e)||[]).forEach(t=>{t.resolve()}),t.Ko.delete(e)}function hi(t,e,n){const r=w(t);let s=r.qo[r.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),r.qo[r.currentUser.toKey()]=s}}function li(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fo.get(e))t.Oo.delete(r),n&&t.$o.Go(r,n);t.Fo.delete(e),t.isPrimaryClient&&t.Uo.cs(e).forEach(e=>{t.Uo.containsKey(e)||di(t,e)})}function di(t,e){t.Mo.delete(e.path.canonicalString());const n=t.Lo.get(e);null!==n&&(ls(t.remoteStore,n),t.Lo=t.Lo.remove(e),t.Bo.delete(n),pi(t))}function fi(t,e,n){for(const r of n)r instanceof Qs?(t.Uo.addReference(r.key,e),gi(t,r)):r instanceof Ws?(f("SyncEngine","Document no longer in limbo: "+r.key),t.Uo.removeReference(r.key,e),t.Uo.containsKey(r.key)||di(t,r.key)):y()}function gi(t,e){const n=e.key,r=n.path.canonicalString();t.Lo.get(n)||t.Mo.has(r)||(f("SyncEngine","New document in limbo: "+n),t.Mo.add(r),pi(t))}function pi(t){for(;t.Mo.size>0&&t.Lo.size<t.maxConcurrentLimboResolutions;){const e=t.Mo.values().next().value;t.Mo.delete(e);const n=new tt(P.fromString(e)),r=t.jo.next();t.Bo.set(r,new Js(n)),t.Lo=t.Lo.insert(n,r),hs(t.remoteStore,new dr(Qt(qt(n.path)),r,2,D.T))}}async function mi(t,e,n){const r=w(t),s=[],i=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach((t,a)=>{o.push(r.Wo(a,e,n).then(t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),s.push(t);const e=Ir.kn(a.targetId,t);i.push(e)}}))}),await Promise.all(o),r.$o.Rr(s),await async function(t,e){const n=w(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>cr.forEach(e,e=>cr.forEach(e.Nn,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>cr.forEach(e.xn,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!ur(t))throw t;f("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Un.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.Un=n.Un.insert(t,s)}}}(r.localStore,i))}async function yi(t,e){const n=w(t);if(!n.currentUser.isEqual(e)){f("SyncEngine","User change. New user:",e.toKey());const t=await Or(n.localStore,e);n.currentUser=e,function(t,e){t.Ko.forEach(t=>{t.forEach(t=>{t.reject(new E(b.CANCELLED,e))})}),t.Ko.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await mi(n,t.Wn)}}function vi(t,e){const n=w(t),r=n.Bo.get(e);if(r&&r.ko)return Ye().add(r.key);{let t=Ye();const r=n.Fo.get(e);if(!r)return t;for(const e of r){const r=n.Oo.get(e);t=t.unionWith(r.view.Ro)}return t}}function wi(t){const e=w(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=si.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vi.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=oi.bind(null,e),e.$o.Rr=Hs.bind(null,e.eventManager),e.$o.Go=Gs.bind(null,e.eventManager),e}function bi(t){const e=w(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ai.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ci.bind(null,e),e}class Ei{constructor(){this.synchronizeTabs=!1}async initialize(t){this.N=ts(t.databaseInfo.databaseId),this.sharedClientState=this.Ho(t),this.persistence=this.Jo(t),await this.persistence.start(),this.gcScheduler=this.Yo(t),this.localStore=this.Xo(t)}Yo(t){return null}Xo(t){return Nr(this.persistence,new Sr,t.initialUser,this.N)}Jo(t){return new Kr(Gr.Ns,this.N)}Ho(t){return new zr}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ti{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>ii(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=yi.bind(null,this.syncEngine),await Rs(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new qs}createDatastore(t){const e=ts(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Jr(r));var r;return function(t,e,n){return new is(t,e,n)}(t.credentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,s=t=>ii(this.syncEngine,t,0),i=Wr.bt()?new Wr:new Qr,new as(e,n,r,s,i);var e,n,r,s,i}createSyncEngine(t,e){return function(t,e,n,r,s,i,o){const a=new Zs(t,e,n,r,s,i);return o&&(a.Qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=w(t);f("RemoteStore","RemoteStore shutting down."),e.Wr.add(5),await us(e),e.zr.shutdown(),e.Hr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ii{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.tc(this.observer.next,t)}error(t){this.observer.error?this.tc(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}ec(){this.muted=!0}tc(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Si{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=u.UNAUTHENTICATED,this.clientId=_.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(e,async t=>{f("FirestoreClient","Received user=",t.uid),await this.credentialListener(t),this.user=t})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(e){const n=Ms(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Ai(t,e){t.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await Or(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Ni(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Oi(t);f("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>async function(t,e){const n=w(t);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const r=ms(n);n.Wr.add(3),await us(n),r&&n.Hr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Wr.delete(3),await cs(n)}(e.remoteStore,t)),t.onlineComponents=e}async function Oi(t){return t.offlineComponents||(f("FirestoreClient","Using default OfflineComponentProvider"),await Ai(t,new Ei)),t.offlineComponents}async function Di(t){return t.onlineComponents||(f("FirestoreClient","Using default OnlineComponentProvider"),await Ni(t,new Ti)),t.onlineComponents}function Ci(t){return Di(t).then(t=>t.syncEngine)}async function _i(t){const e=await Di(t),n=e.eventManager;return n.onListen=ti.bind(null,e.syncEngine),n.onUnlisten=ni.bind(null,e.syncEngine),n}class ki{constructor(t,e,n,r,s,i,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ri{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ri&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(t,e,n){if(!n)throw new E(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ji(t,e,n,r){if(!0===e&&!0===r)throw new E(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Mi(t){if(!tt.isDocumentKey(t))throw new E(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Vi(t){if(tt.isDocumentKey(t))throw new E(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ui(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":y()}function Pi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new E(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ui(t);throw new E(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fi{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new E(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new E(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,ji("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(t,e){this._credentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fi({}),this._settingsFrozen=!1,t instanceof Ri?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new E(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ri(t.options.projectId)}(t))}get app(){if(!this._app)throw new E(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new E(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fi(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new S;switch(t.type){case"gapi":const e=t.client;return v(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new O(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new E(b.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=xi.get(t);e&&(f("ComponentProvider","Removing Datastore"),xi.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bi{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hi(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Bi(this.firestore,t,this._key)}}class Ki{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Ki(this.firestore,t,this._query)}}class Hi extends Ki{constructor(t,e,n){super(t,e,qt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Bi(this.firestore,null,new tt(t))}withConverter(t){return new Hi(this.firestore,t,this._path)}}function Gi(t,e,...n){if(t=Object(o["i"])(t),Li("collection","path",e),t instanceof qi){const r=P.fromString(e,...n);return Vi(r),new Hi(t,null,r)}{if(!(t instanceof Bi||t instanceof Hi))throw new E(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(P.fromString(e,...n));return Vi(r),new Hi(t.firestore,null,r)}}function $i(t,e,...n){if(t=Object(o["i"])(t),1===arguments.length&&(e=_.I()),Li("doc","path",e),t instanceof qi){const r=P.fromString(e,...n);return Mi(r),new Bi(t,null,new tt(r))}{if(!(t instanceof Bi||t instanceof Hi))throw new E(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(P.fromString(e,...n));return Mi(r),new Bi(t.firestore,t instanceof Hi?t.converter:null,new tt(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zi{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new es(this,"async_queue_retry"),this.Rc=()=>{const t=Zr();t&&f("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ar.tr()};const t=Zr();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.bc(),this.Pc(t)}enterRestrictedMode(t){if(!this.gc){this.gc=!0,this.Ic=t||!1;const e=Zr();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Rc)}}enqueue(t){if(this.bc(),this.gc)return new Promise(()=>{});const e=new T;return this.Pc(()=>this.gc&&this.Ic?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.mc.push(t),this.vc()))}async vc(){if(0!==this.mc.length){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(t){if(!ur(t))throw t;f("AsyncQueue","Operation failed with retryable error: "+t)}this.mc.length>0&&this.ar.Xi(()=>this.vc())}}Pc(t){const e=this._c.then(()=>(this.Ec=!0,t().catch(t=>{this.Tc=t,this.Ec=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw g("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.Ec=!1,t))));return this._c=e,e}enqueueAfterDelay(t,e,n){this.bc(),this.Ac.indexOf(t)>-1&&(e=0);const r=js.createAndSchedule(this,t,e,n,t=>this.Vc(t));return this.yc.push(r),r}bc(){this.Tc&&y()}verifyOperationInProgress(){}async Sc(){let t;do{t=this._c,await t}while(t!==this._c)}Dc(t){for(const e of this.yc)if(e.timerId===t)return!0;return!1}Cc(t){return this.Sc().then(()=>{this.yc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.yc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Sc()})}Nc(t){this.Ac.push(t)}Vc(t){const e=this.yc.indexOf(t);this.yc.splice(e,1)}}function Qi(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class Wi extends qi{constructor(t,e){super(t,e),this.type="firestore",this._queue=new zi,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Ji(this),this._firestoreClient.terminate()}}function Xi(t=Object(r["m"])()){return Object(r["i"])(t,"firestore").getImmediate()}function Yi(t){return t._firestoreClient||Ji(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ji(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new ki(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Si(t._credentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zi{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new E(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new q(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class to{constructor(t){this._byteString=t}static fromBase64String(t){try{return new to(K.fromBase64String(t))}catch(t){throw new E(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new to(K.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new E(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new E(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return k(this._lat,t._lat)||k(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=/^__.*__$/;class so{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new De(t,this.data,this.fieldMask,e,this.fieldTransforms):new Oe(t,this.data,e,this.fieldTransforms)}}function io(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class oo{constructor(t,e,n,r,s,i){this.settings=t,this.databaseId=e,this.N=n,this.ignoreUndefinedProperties=r,void 0===s&&this.xc(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get kc(){return this.settings.kc}$c(t){return new oo(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Oc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.$c({path:n,Fc:!1});return r.Mc(t),r}Lc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.$c({path:n,Fc:!1});return r.xc(),r}Bc(t){return this.$c({path:void 0,Fc:!0})}Uc(t){return vo(t,this.settings.methodName,this.settings.qc||!1,this.path,this.settings.Kc)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.Mc(this.path.get(t))}Mc(t){if(0===t.length)throw this.Uc("Document fields must not be empty");if(io(this.kc)&&ro.test(t))throw this.Uc('Document fields cannot begin and end with "__"')}}class ao{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.N=n||ts(t)}jc(t,e,n,r=!1){return new oo({kc:t,methodName:e,Kc:n,path:q.emptyPath(),Fc:!1,qc:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function co(t){const e=t._freezeSettings(),n=ts(t._databaseId);return new ao(t._databaseId,!!e.ignoreUndefinedProperties,n)}function uo(t,e,n,r,s,i={}){const o=t.jc(i.merge||i.mergeFields?2:0,e,n,s);go("Data must be an object, but it was:",o,r);const a=lo(r,o);let c,u;if(i.merge)c=new B(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const r of i.mergeFields){const s=po(e,r,n);if(!o.contains(s))throw new E(b.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);wo(t,s)||t.push(s)}c=new B(t),u=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=o.fieldTransforms;return new so(new gt(a),c,u)}function ho(t,e){if(fo(t=Object(o["i"])(t)))return go("Unsupported field value:",e,t),lo(t,e);if(t instanceof eo)return function(t,e){if(!io(e.kc))throw e.Uc(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.Uc(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&4!==e.kc)throw e.Uc("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const s of t){let t=ho(s,e.Bc(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o["i"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return se(e.N,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=x.fromDate(t);return{timestampValue:fn(e.N,n)}}if(t instanceof x){const n=new x(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:fn(e.N,n)}}if(t instanceof no)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof to)return{bytesValue:gn(e.N,t._byteString)};if(t instanceof Bi){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Uc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:yn(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Uc("Unsupported field value: "+Ui(t))}(t,e)}function lo(t,e){const n={};return V(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):M(t,(t,r)=>{const s=ho(r,e.Oc(t));null!=s&&(n[t]=s)}),{mapValue:{fields:n}}}function fo(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof x||t instanceof no||t instanceof to||t instanceof Bi||t instanceof eo)}function go(t,e,n){if(!fo(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Ui(n);throw"an object"===r?e.Uc(t+" a custom object"):e.Uc(t+" "+r)}}function po(t,e,n){if((e=Object(o["i"])(e))instanceof Zi)return e._internalPath;if("string"==typeof e)return yo(t,e);throw vo("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const mo=new RegExp("[~\\*/\\[\\]]");function yo(t,e,n){if(e.search(mo)>=0)throw vo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zi(...e.split("."))._internalPath}catch(r){throw vo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function vo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=" in field "+r),o&&(c+=" in document "+s),c+=")"),new E(b.INVALID_ARGUMENT,a+t+c)}function wo(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Bi(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Eo(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(To("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Eo extends bo{data(){return super.data()}}function To(t,e){return"string"==typeof e?yo(t,e):e instanceof Zi?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class So extends bo{constructor(t,e,n,r,s,i){super(t,e,n,r,i),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ao(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(To("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Ao extends So{data(t={}){return super.data(t)}}class No{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Io(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Ao(this._firestore,this._userDataWriter,n.key,n,new Io(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new E(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new Ao(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Io(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new Ao(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Io(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,i=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:Oo(e.type),doc:r,oldIndex:s,newIndex:i}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Oo(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Do(t){if(Kt(t)&&0===t.explicitOrderBy.length)throw new E(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Co{}function _o(t,...e){for(const n of e)t=n._apply(t);return t}class ko extends Co{constructor(t,e){super(),this.Gc=t,this.Jc=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new E(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new E(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new jt(e,n);return function(t,e){if(null===Ht(t)){const n=Gt(t);null!==n&&xo(t,n,e.field)}}(t,r),r}(t._query,this.Gc,this.Jc);return new Ki(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Pt(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function Ro(t,e="asc"){const n=e,r=To("orderBy",t);return new ko(r,n)}function xo(t,e,n){if(!n.isEqual(e))throw new E(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{convertValue(t,e="none"){switch(et(t)){case 0:return null;case 1:return t.booleanValue;case 2:return $(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(z(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw y()}}convertObject(t,e){const n={};return M(t.fields,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new no($(t.latitude),$(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=W(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(X(t));default:return null}}convertTimestamp(t){const e=G(t);return new x(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=P.fromString(t);v(Kn(n));const r=new Ri(n.get(1),n.get(3)),s=new tt(n.popFirst(5));return r.isEqual(e)||g(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Mo extends Lo{constructor(t){super(),this.firestore=t}convertBytes(t){return new to(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Bi(this.firestore,null,e)}}function Vo(t,e){const n=Pi(t.firestore,Wi),r=$i(t),s=jo(t.converter,e);return Po(n,[uo(co(t.firestore),"addDoc",r._key,s,null!==t.converter,{}).toMutation(r._key,we.exists(!1))]).then(()=>r)}function Uo(t,...e){var n,r,s;t=Object(o["i"])(t);let i={includeMetadataChanges:!1},a=0;"object"!=typeof e[a]||Qi(e[a])||(i=e[a],a++);const c={includeMetadataChanges:i.includeMetadataChanges};if(Qi(e[a])){const t=e[a];e[a]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[a+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[a+2]=null===(s=t.complete)||void 0===s?void 0:s.bind(t)}let u,h,l;if(t instanceof Bi)h=Pi(t.firestore,Wi),l=qt(t._key.path),u={next:n=>{e[a]&&e[a](Fo(h,t,n))},error:e[a+1],complete:e[a+2]};else{const n=Pi(t,Ki);h=Pi(n.firestore,Wi),l=n._query;const r=new Mo(h);u={next:t=>{e[a]&&e[a](new No(h,r,n,t))},error:e[a+1],complete:e[a+2]},Do(t._query)}return function(t,e,n,r){const s=new Ii(r),i=new zs(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>Bs(await _i(t),i)),()=>{s.ec(),t.asyncQueue.enqueueAndForget(async()=>Ks(await _i(t),i))}}(Yi(h),l,c,u)}function Po(t,e){return function(t,e){const n=new T;return t.asyncQueue.enqueueAndForget(async()=>ri(await Ci(t),e,n)),n.promise}(Yi(t),e)}function Fo(t,e,n){const r=n.docs.get(e._key),s=new Mo(t);return new So(t,s,e._key,r,new Io(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){h=t}(r["b"]),Object(r["j"])(new s["a"]("firestore",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=new Wi(r,new A(t.getProvider("auth-internal")));return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s},"PUBLIC")),Object(r["q"])(c,"3.2.0",t),Object(r["q"])(c,"3.2.0","esm2017")}()}).call(this,n("4362"))},"0b37":function(t,e,n){"use strict";n("5192")},"0b42":function(t,e,n){var r=n("da84"),s=n("e8b5"),i=n("68ee"),o=n("861d"),a=n("b622"),c=a("species"),u=r.Array;t.exports=function(t){var e;return s(t)&&(e=t.constructor,i(e)&&(e===u||s(e.prototype))?e=void 0:o(e)&&(e=e[c],null===e&&(e=void 0))),void 0===e?u:e}},"11c1":function(t,e,n){var r=n("c437"),s=n("c64e"),i=s;i.v1=r,i.v4=s,t.exports=i},1276:function(t,e,n){"use strict";var r=n("2ba4"),s=n("c65b"),i=n("e330"),o=n("d784"),a=n("44e7"),c=n("825a"),u=n("1d80"),h=n("4840"),l=n("8aa5"),d=n("50c4"),f=n("577e"),g=n("dc4a"),p=n("f36a"),m=n("14c3"),y=n("9263"),v=n("9f7f"),w=n("d039"),b=v.UNSUPPORTED_Y,E=4294967295,T=Math.min,I=[].push,S=i(/./.exec),A=i(I),N=i("".slice),O=!w((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));o("split",(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=f(u(this)),o=void 0===n?E:n>>>0;if(0===o)return[];if(void 0===t)return[i];if(!a(t))return s(e,i,t,o);var c,h,l,d=[],g=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,v=new RegExp(t.source,g+"g");while(c=s(y,v,i)){if(h=v.lastIndex,h>m&&(A(d,N(i,m,c.index)),c.length>1&&c.index<i.length&&r(I,d,p(c,1)),l=c[0].length,m=h,d.length>=o))break;v.lastIndex===c.index&&v.lastIndex++}return m===i.length?!l&&S(v,"")||A(d,""):A(d,N(i,m)),d.length>o?p(d,0,o):d}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:s(e,this,t,n)}:e,[function(e,n){var r=u(this),o=void 0==e?void 0:g(e,t);return o?s(o,e,r,n):s(i,f(r),e,n)},function(t,r){var s=c(this),o=f(t),a=n(i,s,o,r,i!==e);if(a.done)return a.value;var u=h(s,RegExp),g=s.unicode,p=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(b?"g":"y"),y=new u(b?"^(?:"+s.source+")":s,p),v=void 0===r?E:r>>>0;if(0===v)return[];if(0===o.length)return null===m(y,o)?[o]:[];var w=0,I=0,S=[];while(I<o.length){y.lastIndex=b?0:I;var O,D=m(y,b?N(o,I):o);if(null===D||(O=T(d(y.lastIndex+(b?I:0)),o.length))===w)I=l(o,I,g);else{if(A(S,N(o,w,I)),S.length===v)return S;for(var C=1;C<=D.length-1;C++)if(A(S,D[C]),S.length===v)return S;I=w=O}}return A(S,N(o,w)),S}]}),!O,b)},1518:function(t,e,n){"use strict";n.r(e);var r=n("7a23"),s={class:"verses-layout"};function i(t,e,n,i,o,a){var c=Object(r["z"])("Modal"),u=Object(r["z"])("Verse"),h=Object(r["z"])("AddButton");return Object(r["s"])(),Object(r["g"])(r["a"],null,[Object(r["j"])(r["b"],{name:"fade"},{default:Object(r["F"])((function(){return[o.modalOpen?(Object(r["s"])(),Object(r["e"])(c,{key:0,onClose:a.closeModal,line1:o.line1,"onUpdate:line1":e[0]||(e[0]=function(t){return o.line1=t}),line2:o.line2,"onUpdate:line2":e[1]||(e[1]=function(t){return o.line2=t}),line3:o.line3,"onUpdate:line3":e[2]||(e[2]=function(t){return o.line3=t}),line4:o.line4,"onUpdate:line4":e[3]||(e[3]=function(t){return o.line4=t}),line5:o.line5,"onUpdate:line5":e[4]||(e[4]=function(t){return o.line5=t}),onAddDoc:a.addDocument},null,8,["onClose","line1","line2","line3","line4","line5","onAddDoc"])):Object(r["f"])("",!0)]})),_:1}),Object(r["h"])("div",null,[Object(r["h"])("div",s,[(Object(r["s"])(!0),Object(r["g"])(r["a"],null,Object(r["y"])(o.verses,(function(t,e){return Object(r["s"])(),Object(r["e"])(u,{key:e,verse:t},null,8,["verse"])})),128))])]),Object(r["j"])(h,{onOpen:a.openModal},null,8,["onOpen"])],64)}var o=n("1da1"),a=(n("96cf"),n("159b"),n("ac1f"),n("1276"),n("5319"),n("ea7b")),c=n("0829"),u=n("11c1"),h=function(t){return Object(r["v"])("data-v-c94cef2e"),t=t(),Object(r["t"])(),t},l={class:"verse-container"},d={class:"verse"},f={class:"metadata"},g={class:"metadata__type"},p=h((function(){return Object(r["h"])("div",{class:"metadata__user"},[Object(r["h"])("div",null,"Placeholder for Username")],-1)}));function m(t,e,n,s,i,o){return Object(r["s"])(),Object(r["g"])("div",l,[Object(r["h"])("div",d,[(Object(r["s"])(!0),Object(r["g"])(r["a"],null,Object(r["y"])(n.verse.line1,(function(t,e){return Object(r["s"])(),Object(r["g"])(r["a"],{key:e},[],64)})),128)),Object(r["h"])("div",null,[(Object(r["s"])(!0),Object(r["g"])(r["a"],null,Object(r["y"])(n.verse.line1,(function(t,e){return Object(r["s"])(),Object(r["g"])("span",{class:"word",key:e},Object(r["B"])(t),1)})),128))]),Object(r["h"])("div",null,[(Object(r["s"])(!0),Object(r["g"])(r["a"],null,Object(r["y"])(n.verse.line2,(function(t,e){return Object(r["s"])(),Object(r["g"])("span",{class:"word",key:e},Object(r["B"])(t),1)})),128))]),Object(r["h"])("div",null,[(Object(r["s"])(!0),Object(r["g"])(r["a"],null,Object(r["y"])(n.verse.line3,(function(t,e){return Object(r["s"])(),Object(r["g"])("span",{class:"word",key:e},Object(r["B"])(t),1)})),128))]),Object(r["h"])("div",null,[(Object(r["s"])(!0),Object(r["g"])(r["a"],null,Object(r["y"])(n.verse.line4,(function(t,e){return Object(r["s"])(),Object(r["g"])("span",{class:"word",key:e},Object(r["B"])(t),1)})),128))]),Object(r["h"])("div",null,[(Object(r["s"])(!0),Object(r["g"])(r["a"],null,Object(r["y"])(n.verse.line5,(function(t,e){return Object(r["s"])(),Object(r["g"])("span",{class:"word",key:e},Object(r["B"])(t),1)})),128))])]),Object(r["h"])("div",f,[Object(r["h"])("div",g,Object(r["B"])(n.verse.type),1),p])])}var y={name:"Header",props:{verse:{type:Object,required:!1}}},v=(n("4d50"),n("6b0d")),w=n.n(v);const b=w()(y,[["render",m],["__scopeId","data-v-c94cef2e"]]);var E=b,T=n("9aa7"),I=n.n(T),S=function(t){return Object(r["v"])("data-v-dfe365ec"),t=t(),Object(r["t"])(),t},A={class:"btn-container"},N=S((function(){return Object(r["h"])("img",{src:I.a,alt:"Bootstrap",width:"32",height:"32"},null,-1)})),O=[N];function D(t,e,n,s,i,o){return Object(r["s"])(),Object(r["g"])("div",A,[Object(r["h"])("button",{onClick:e[0]||(e[0]=function(e){return t.$emit("open")}),class:"add-btn"},O)])}var C={name:"Header",emits:["open"]};n("4c53");const _=w()(C,[["render",D],["__scopeId","data-v-dfe365ec"]]);var k=_,R=n("7387"),x=n.n(R),L=function(t){return Object(r["v"])("data-v-065cef54"),t=t(),Object(r["t"])(),t},j={class:"modal-container"},M={class:"modal"},V=L((function(){return Object(r["h"])("img",{src:x.a,alt:"Bootstrap",width:"32",height:"32"},null,-1)})),U=[V],P=L((function(){return Object(r["h"])("h2",null,"Schreibe ein Elfchen",-1)})),F=["value"],q=["value"],B=["value"],K=["value"],H=["value"],G=L((function(){return Object(r["h"])("button",{type:"submit"},"Send Elfchen",-1)}));function $(t,e,n,s,i,o){return Object(r["s"])(),Object(r["g"])("div",j,[Object(r["h"])("div",M,[Object(r["h"])("button",{class:"close-btn",onClick:e[0]||(e[0]=function(e){return t.$emit("close")})},U),P,Object(r["h"])("form",{class:"form-group",onSubmit:e[6]||(e[6]=Object(r["H"])((function(e){return t.$emit("addDoc")}),["prevent"]))},[Object(r["h"])("input",{onInput:e[1]||(e[1]=function(e){return t.$emit("update:line1",e.target.value)}),value:n.line1,type:"text"},null,40,F),Object(r["h"])("input",{onInput:e[2]||(e[2]=function(e){return t.$emit("update:line2",e.target.value)}),value:n.line2,type:"text"},null,40,q),Object(r["h"])("input",{onInput:e[3]||(e[3]=function(e){return t.$emit("update:line3",e.target.value)}),value:n.line3,type:"text"},null,40,B),Object(r["h"])("input",{onInput:e[4]||(e[4]=function(e){return t.$emit("update:line4",e.target.value)}),value:n.line4,type:"text"},null,40,K),Object(r["h"])("input",{onInput:e[5]||(e[5]=function(e){return t.$emit("update:line5",e.target.value)}),value:n.line5,type:"text"},null,40,H),G],32)])])}var z={name:"Verses",emits:["close","update:line1","update:line2","update:line3","update:line4","update:line5","addDoc"],props:{line1:String,line2:String,line3:String,line4:String,line5:String},data:function(){return{type:"Elfchen"}}};n("6ebd");const Q=w()(z,[["render",$],["__scopeId","data-v-065cef54"]]);var W=Q,X=Object(a["b"])(),Y=Object(c["d"])(),J={name:"Verses",components:{Verse:E,AddButton:k,Modal:W},data:function(){return{isLoggedIn:!1,verses:{},line1:"",line2:"",line3:"",line4:"",line5:"",type:"Elfchen",currentUser:null,unsubscribe:null,modalOpen:!1}},methods:{listenToDataChange:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=Object(c["g"])(Object(c["c"])(Y,"Verses"),Object(c["f"])("created","desc")),t.unsubscribe=Object(c["e"])(n,(function(e){var n=[];e.forEach((function(t){n.push(t.data())})),t.verses=n,console.log("Current verses in database: ",n)}));case 2:case"end":return e.stop()}}),e)})))()},addDocument:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.modalOpen=!1,n={id:Object(u["v4"])(),line1:t.line1.split(" "),line2:t.line2.split(" "),line3:t.line3.split(" "),line4:t.line4.split(" "),line5:t.line5.split(" "),type:t.type,created:c["a"].fromDate(new Date),creator:t.currentUser},console.log(n),e.next=5,Object(c["b"])(Object(c["c"])(Y,"Verses"),n);case 5:r=e.sent,console.log("Document written with ID: ",r.id);case 7:case"end":return e.stop()}}),e)})))()},openModal:function(){this.modalOpen=!0},closeModal:function(){this.modalOpen=!1}},mounted:function(){var t=this;Object(a["c"])(X,function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n?(t.isLoggedIn=!0,t.currentUser=n.uid,t.listenToDataChange()):(t.isLoggedIn=!1,t.unsubscribe(),t.$router.replace({name:"Login"}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},beforeUnmount:function(){this.unsubscribe()}};n("874e");const Z=w()(J,[["render",i],["__scopeId","data-v-12ea0c40"]]);e["default"]=Z},"159b":function(t,e,n){var r=n("da84"),s=n("fdbc"),i=n("785a"),o=n("17c2"),a=n("9112"),c=function(t){if(t&&t.forEach!==o)try{a(t,"forEach",o)}catch(e){t.forEach=o}};for(var u in s)s[u]&&c(r[u]&&r[u].prototype);c(i)},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,s=n("a640"),i=s("forEach");t.exports=i?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},2366:function(t,e){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);function s(t,e){var r=e||0,s=n;return[s[t[r++]],s[t[r++]],s[t[r++]],s[t[r++]],"-",s[t[r++]],s[t[r++]],"-",s[t[r++]],s[t[r++]],"-",s[t[r++]],s[t[r++]],"-",s[t[r++]],s[t[r++]],s[t[r++]],s[t[r++]],s[t[r++]],s[t[r++]]].join("")}t.exports=s},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44e7":function(t,e,n){var r=n("861d"),s=n("c6b6"),i=n("b622"),o=i("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==s(t))}},"4aa8":function(t,e,n){},"4c20":function(t,e,n){},"4c53":function(t,e,n){"use strict";n("8955")},"4d50":function(t,e,n){"use strict";n("b58b")},5192:function(t,e,n){},"625d":function(t,e,n){"use strict";n("4c20")},"65f0":function(t,e,n){var r=n("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},"6ebd":function(t,e,n){"use strict";n("4aa8")},7387:function(t,e,n){t.exports=n.p+"img/x.df13156b.svg"},"73cf":function(t,e,n){"use strict";n.r(e);var r=n("7a23"),s=function(t){return Object(r["v"])("data-v-4cd6dbaf"),t=t(),Object(r["t"])(),t},i={class:"email"},o={class:"password"},a=s((function(){return Object(r["h"])("button",{type:"submit"},"Register",-1)}));function c(t,e,n,s,c,u){return Object(r["s"])(),Object(r["g"])("div",null,[Object(r["h"])("form",{onSubmit:e[2]||(e[2]=Object(r["H"])((function(){return u.registerUser&&u.registerUser.apply(u,arguments)}),["prevent"]))},[Object(r["h"])("div",i,[Object(r["G"])(Object(r["h"])("input",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return c.email=t}),type:"email",placeholder:"Email"},null,512),[[r["D"],c.email]])]),Object(r["h"])("div",o,[Object(r["G"])(Object(r["h"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return c.password=t}),type:"password",placeholder:"Password"},null,512),[[r["D"],c.password]])]),a],32)])}var u=n("1da1"),h=(n("96cf"),n("ac1f"),n("5319"),n("ea7b")),l=Object(h["b"])(),d={name:"Register",data:function(){return{email:"",password:"",auth:{}}},methods:{registerUser:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(h["a"])(l,t.email,t.password);case 3:return n=e.sent,console.log(n),t.$router.replace({name:"Login"}),e.abrupt("return",n);case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},f=(n("625d"),n("6b0d")),g=n.n(f);const p=g()(d,[["render",c],["__scopeId","data-v-4cd6dbaf"]]);e["default"]=p},"874e":function(t,e,n){"use strict";n("b83e")},8955:function(t,e,n){},"8f6b":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Dr})),n.d(e,"b",(function(){return _r})),n.d(e,"c",(function(){return Cr})),n.d(e,"d",(function(){return Rr})),n.d(e,"e",(function(){return kr})),n.d(e,"f",(function(){return xr})),n.d(e,"g",(function(){return Lr})),n.d(e,"h",(function(){return Nr})),n.d(e,"i",(function(){return Or}));var r,s="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},i={},o=o||{},a=s||self;function c(){}function u(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function h(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function l(t){return Object.prototype.hasOwnProperty.call(t,d)&&t[d]||(t[d]=++f)}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function g(t,e,n){return t.call.apply(t.bind,arguments)}function p(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g:p,m.apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function v(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}function w(){this.s=this.s,this.o=this.o}var b=0,E={};w.prototype.s=!1,w.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=b)){var t=l(this);delete E[t]}},w.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const T=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},I=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s="string"===typeof t?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function S(t){t:{var e=Bn;const n=t.length,r="string"===typeof t?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function A(t){return Array.prototype.concat.apply([],arguments)}function N(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function O(t){return/^[\s\xa0]*$/.test(t)}var D,C=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function _(t,e){return-1!=t.indexOf(e)}function k(t,e){return t<e?-1:t>e?1:0}t:{var R=a.navigator;if(R){var x=R.userAgent;if(x){D=x;break t}}D=""}function L(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function j(t){const e={};for(const n in t)e[n]=t[n];return e}var M="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function V(t,e){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)t[n]=r[n];for(let e=0;e<M.length;e++)n=M[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function U(t){return U[" "](t),t}function P(t){var e=J;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}U[" "]=c;var F,q=_(D,"Opera"),B=_(D,"Trident")||_(D,"MSIE"),K=_(D,"Edge"),H=K||B,G=_(D,"Gecko")&&!(_(D.toLowerCase(),"webkit")&&!_(D,"Edge"))&&!(_(D,"Trident")||_(D,"MSIE"))&&!_(D,"Edge"),$=_(D.toLowerCase(),"webkit")&&!_(D,"Edge");function z(){var t=a.document;return t?t.documentMode:void 0}t:{var Q="",W=function(){var t=D;return G?/rv:([^\);]+)(\)|;)/.exec(t):K?/Edge\/([\d\.]+)/.exec(t):B?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):$?/WebKit\/(\S+)/.exec(t):q?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(W&&(Q=W?W[1]:""),B){var X=z();if(null!=X&&X>parseFloat(Q)){F=String(X);break t}}F=Q}var Y,J={};function Z(){return P((function(){let t=0;const e=C(String(F)).split("."),n=C("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;t=k(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||k(0==s[2].length,0==i[2].length)||k(s[2],i[2]),s=s[3],i=i[3]}while(0==t)}return 0<=t}))}if(a.document&&B){var tt=z();Y=tt||(parseInt(F,10)||void 0)}else Y=void 0;var et=Y,nt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",c,e),a.removeEventListener("test",c,e)}catch(n){}return t}();function rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function st(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(G){t:{try{U(e.nodeName);var s=!0;break t}catch(i){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:it[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&st.Z.h.call(this)}}rt.prototype.h=function(){this.defaultPrevented=!0},v(st,rt);var it={2:"touch",3:"pen",4:"mouse"};st.prototype.h=function(){st.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ot="closure_listenable_"+(1e6*Math.random()|0),at=0;function ct(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++at,this.ca=this.fa=!1}function ut(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ht(t){this.src=t,this.g={},this.h=0}function lt(t,e){var n=e.type;if(n in t.g){var r,s=t.g[n],i=T(s,e);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(ut(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function dt(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}ht.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=dt(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ct(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};var ft="closure_lm_"+(1e6*Math.random()|0),gt={};function pt(t,e,n,r,s){if(r&&r.once)return vt(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)pt(t,e[i],n,r,s);return null}return n=At(n),t&&t[ot]?t.N(e,n,h(r)?!!r.capture:!!r,s):mt(t,e,n,!1,r,s)}function mt(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=h(s)?!!s.capture:!!s,a=It(t);if(a||(t[ft]=a=new ht(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=yt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)nt||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Et(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function yt(){function t(n){return e.call(t.src,t.listener,n)}var e=Tt;return t}function vt(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)vt(t,e[i],n,r,s);return null}return n=At(n),t&&t[ot]?t.O(e,n,h(r)?!!r.capture:!!r,s):mt(t,e,n,!0,r,s)}function wt(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)wt(t,e[i],n,r,s);else r=h(r)?!!r.capture:!!r,n=At(n),t&&t[ot]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=dt(i,n,r,s),-1<n&&(ut(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=It(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dt(e,n,r,s)),(n=-1<t?e[t]:null)&&bt(n))}function bt(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ot])lt(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Et(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=It(e))?(lt(n,t),0==n.h&&(n.src=null,e[ft]=null)):ut(t)}}}function Et(t){return t in gt?gt[t]:gt[t]="on"+t}function Tt(t,e){if(t.ca)t=!0;else{e=new st(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&bt(t),t=n.call(r,e)}return t}function It(t){return t=t[ft],t instanceof ht?t:null}var St="__closure_events_fn_"+(1e9*Math.random()>>>0);function At(t){return"function"===typeof t?t:(t[St]||(t[St]=function(e){return t.handleEvent(e)}),t[St])}function Nt(){w.call(this),this.i=new ht(this),this.P=this,this.I=null}function Ot(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new rt(e,t);else if(e instanceof rt)e.target=e.target||t;else{var s=e;e=new rt(r,t),V(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Dt(o,r,!0,e)&&s}if(o=e.g=t,s=Dt(o,r,!0,e)&&s,s=Dt(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Dt(o,r,!1,e)&&s}function Dt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&lt(t.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}v(Nt,w),Nt.prototype[ot]=!0,Nt.prototype.removeEventListener=function(t,e,n,r){wt(this,t,e,n,r)},Nt.prototype.M=function(){if(Nt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ut(n[r]);delete e.g[t],e.h--}}this.I=null},Nt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Nt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Ct=a.JSON.stringify;function _t(){var t=Pt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class kt{constructor(){this.h=this.g=null}add(t,e){const n=xt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Rt,xt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Lt,t=>t.reset());class Lt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function jt(t){a.setTimeout(()=>{throw t},0)}function Mt(t,e){Rt||Vt(),Ut||(Rt(),Ut=!0),Pt.add(t,e)}function Vt(){var t=a.Promise.resolve(void 0);Rt=function(){t.then(Ft)}}var Ut=!1,Pt=new kt;function Ft(){for(var t;t=_t();){try{t.h.call(t.g)}catch(n){jt(n)}var e=xt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ut=!1}function qt(t,e){Nt.call(this),this.h=t||1,this.g=e||a,this.j=m(this.kb,this),this.l=Date.now()}function Bt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Kt(t,e,n){if("function"===typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function Ht(t){t.g=Kt(()=>{t.g=null,t.i&&(t.i=!1,Ht(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}v(qt,Nt),r=qt.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ot(this,"tick"),this.da&&(Bt(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){qt.Z.M.call(this),Bt(this),delete this.g};class Gt extends w{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ht(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $t(t){w.call(this),this.h=t,this.g={}}v($t,w);var zt=[];function Qt(t,e,n,r){Array.isArray(n)||(n&&(zt[0]=n.toString()),n=zt);for(var s=0;s<n.length;s++){var i=pt(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Wt(t){L(t.g,(function(t,e){this.g.hasOwnProperty(e)&&bt(t)}),t),t.g={}}function Xt(){this.g=!0}function Yt(t,e,n,r,s,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}function Jt(t,e,n,r,s,i,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function Zt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(r?" "+r:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return Ct(n)}catch(a){return e}}$t.prototype.M=function(){$t.Z.M.call(this),Wt(this)},$t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Xt.prototype.Aa=function(){this.g=!1},Xt.prototype.info=function(){};var ne={},re=null;function se(){return re=re||new Nt}function ie(t){rt.call(this,ne.Ma,t)}function oe(t){const e=se();Ot(e,new ie(e,t))}function ae(t,e){rt.call(this,ne.STAT_EVENT,t),this.stat=e}function ce(t){const e=se();Ot(e,new ae(e,t))}function ue(t,e){rt.call(this,ne.Na,t),this.size=e}function he(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}ne.Ma="serverreachability",v(ie,rt),ne.STAT_EVENT="statevent",v(ae,rt),ne.Na="timingevent",v(ue,rt);var le={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},de={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function fe(){}function ge(t){return t.h||(t.h=t.i())}function pe(){}fe.prototype.h=null;var me,ye={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ve(){rt.call(this,"d")}function we(){rt.call(this,"c")}function be(){}function Ee(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new $t(this),this.P=Ie,t=H?125:void 0,this.W=new qt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Te}function Te(){this.i=null,this.g="",this.h=!1}v(ve,rt),v(we,rt),v(be,fe),be.prototype.g=function(){return new XMLHttpRequest},be.prototype.i=function(){return{}},me=new be;var Ie=45e3,Se={},Ae={};function Ne(t,e,n){t.K=1,t.v=Ye(Ge(e)),t.s=n,t.U=!0,Oe(t,null)}function Oe(t,e){t.F=Date.now(),ke(t),t.A=Ge(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),fn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Te,t.g=wr(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Gt(m(t.Ia,t,t.g),t.O)),Qt(t.V,t.g,"readystatechange",t.gb),e=t.H?j(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),oe(1),Yt(t.j,t.u,t.A,t.m,t.X,t.s)}function De(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Ce(t,e,n){let r,s=!0;for(;!t.I&&t.C<n.length;){if(r=_e(t,n),r==Ae){4==e&&(t.o=4,ce(14),s=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(r==Se){t.o=4,ce(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}Zt(t.j,t.m,r,null),Me(t,r)}De(t)&&r!=Ae&&r!=Se&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ce(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),lr(e),e.L=!0,ce(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),je(t),Le(t))}function _e(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Ae:(n=Number(e.substring(n,r)),isNaN(n)?Se:(r+=1,r+n>e.length?Ae:(e=e.substr(r,n),t.C=r+n,e)))}function ke(t){t.Y=Date.now()+t.P,Re(t,t.P)}function Re(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=he(m(t.eb,t),e)}function xe(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function Le(t){0==t.l.G||t.I||gr(t.l,t)}function je(t){xe(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Bt(t.W),Wt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Me(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||En(n.i,t)))if(n.I=t.N,!t.J&&En(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;fr(n),er(n)}hr(n),ce(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=he(m(n.ab,n),6e3));if(1>=bn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else mr(n,11)}else if((t.J||n.g==t)&&fr(n),!O(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const s=u[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const h=u[5];null!=h&&"number"===typeof h&&0<h&&(r=1.5*h,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=r.i;!i.g&&(_(t,"spdy")||_(t,"quic")||_(t,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Tn(i,i.h),i.h=null))}if(r.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,Xe(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=vr(r,r.H?r.la:null,r.W),o.J){In(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(xe(a),ke(a)),r.g=o}else ur(r);0<n.l.length&&sr(n)}else"stop"!=u[0]&&"close"!=u[0]||mr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?mr(n,7):tr(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}oe(4)}catch(u){}}function Ve(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Ue(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"===typeof t)I(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(u(t)||"string"===typeof t){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=Ve(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function Pe(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Pe)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Fe(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];qe(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],qe(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}function qe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r=Ee.prototype,r.setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Qn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const l=Qn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>l)&&(3!=l||H||this.g&&(this.h.h||this.g.ga()||Wn(this.g)))){this.I||4!=l||7==e||oe(8==e||0>=d?3:2),xe(this);var n=this.g.ba();this.N=n;e:if(De(this)){var r=Wn(this.g);t="";var s=r.length,i=4==Qn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){je(this),Le(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Jt(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(c)){var h=c;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,ce(12),je(this),Le(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Me(this,n)}this.U?(Ce(this,l,o),H&&this.i&&3==l&&(Qt(this.V,this.W,"tick",this.fb),this.W.start())):(Zt(this.j,this.m,o,null),Me(this,o)),4==l&&je(this),this.i&&!this.I&&(4==l?gr(this.l,this):(this.i=!1,ke(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),je(this),Le(this)}}}catch(l){}},r.fb=function(){if(this.g){var t=Qn(this.g),e=this.g.ga();this.C<e.length&&(xe(this),Ce(this,t,e),this.i&&4!=t&&ke(this))}},r.cancel=function(){this.I=!0,je(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(te(this.j,this.A),2!=this.K&&(oe(3),ce(17)),je(this),this.o=2,Le(this)):Re(this,this.Y-t)},r=Pe.prototype,r.R=function(){Fe(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return Fe(this),this.g.concat()},r.get=function(t,e){return qe(this.h,t)?this.h[t]:e},r.set=function(t,e){qe(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};var Be=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ke(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function He(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof He){this.g=void 0!==e?e:t.g,$e(this,t.j),this.s=t.s,ze(this,t.i),Qe(this,t.m),this.l=t.l,e=t.h;var n=new un;n.i=e.i,e.g&&(n.g=new Pe(e.g),n.h=e.h),We(this,n),this.o=t.o}else t&&(n=String(t).match(Be))?(this.g=!!e,$e(this,n[1]||"",!0),this.s=tn(n[2]||""),ze(this,n[3]||"",!0),Qe(this,n[4]),this.l=tn(n[5]||"",!0),We(this,n[6]||"",!0),this.o=tn(n[7]||"")):(this.g=!!e,this.h=new un(null,this.g))}function Ge(t){return new He(t)}function $e(t,e,n){t.j=n?tn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ze(t,e,n){t.i=n?tn(e,!0):e}function Qe(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function We(t,e,n){e instanceof un?(t.h=e,pn(t.h,t.g)):(n||(e=en(e,an)),t.h=new un(e,t.g))}function Xe(t,e,n){t.h.set(e,n)}function Ye(t){return Xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Je(t){return t instanceof He?Ge(t):new He(t,void 0)}function Ze(t,e,n,r){var s=new He(null,void 0);return t&&$e(s,t),e&&ze(s,e),n&&Qe(s,n),r&&(s.l=r),s}function tn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function en(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,nn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}He.prototype.toString=function(){var t=[],e=this.j;e&&t.push(en(e,rn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(en(e,rn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(en(n,"/"==n.charAt(0)?on:sn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",en(n,cn)),t.join("")};var rn=/[#\/\?@]/g,sn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function un(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function hn(t){t.g||(t.g=new Pe,t.h=0,t.i&&Ke(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function ln(t,e){hn(t),e=gn(t,e),qe(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,qe(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Fe(t)))}function dn(t,e){return hn(t),e=gn(t,e),qe(t.g.h,e)}function fn(t,e,n){ln(t,e),0<n.length&&(t.i=null,t.g.set(gn(t,e),N(n)),t.h+=n.length)}function gn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function pn(t,e){e&&!t.j&&(hn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(ln(this,e),fn(this,n,t))}),t)),t.j=e}r=un.prototype,r.add=function(t,e){hn(this),this.i=null,t=gn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){hn(this),this.g.forEach((function(n,r){I(n,(function(n){t.call(e,n,r,this)}),this)}),this)},r.T=function(){hn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n},r.R=function(t){hn(this);var e=[];if("string"===typeof t)dn(this,t)&&(e=A(e,this.g.get(gn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=A(e,t[n])}return e},r.set=function(t,e){return hn(this),this.i=null,t=gn(this,t),dn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;""!==r[i]&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};var mn=class{constructor(t,e){this.h=t,this.g=e}};function yn(t){this.l=t||vn,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vn=10;function wn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function bn(t){return t.h?1:t.g?t.g.size:0}function En(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Tn(t,e){t.g?t.g.add(e):t.h=e}function In(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Sn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return N(t.i)}function An(){}function Nn(){this.g=new An}function On(t,e,n){const r=n||"";try{Ue(t,(function(t,n){let s=t;h(t)&&(s=Ct(t)),e.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Dn(t,e){const n=new Xt;if(a.Image){const r=new Image;r.onload=y(Cn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=y(Cn,n,r,"TestLoadImage: error",!1,e),r.onabort=y(Cn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=y(Cn,n,r,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Cn(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch(i){}}function _n(t){this.l=t.$b||null,this.j=t.ib||!1}function kn(t,e){Nt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Rn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}yn.prototype.cancel=function(){if(this.i=Sn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},An.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},An.prototype.parse=function(t){return a.JSON.parse(t,void 0)},v(_n,fe),_n.prototype.g=function(){return new kn(this.l,this.j)},_n.prototype.i=function(t){return function(){return t}}({}),v(kn,Nt);var Rn=0;function xn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Ln(t){t.readyState=4,t.l=null,t.j=null,t.A=null,jn(t)}function jn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=kn.prototype,r.open=function(t,e){if(this.readyState!=Rn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,jn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ln(this)),this.readyState=Rn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,jn(this)),this.g&&(this.readyState=3,jn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ln(this):jn(this),3==this.readyState&&xn(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,Ln(this))},r.Ta=function(t){this.g&&(this.response=t,Ln(this))},r.ha=function(){this.g&&Ln(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(kn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Mn=a.JSON.parse;function Vn(t){Nt.call(this),this.headers=new Pe,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Un,this.K=this.L=!1}v(Vn,Nt);var Un="",Pn=/^https?$/i,Fn=["POST","PUT"];function qn(t){return B&&Z()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Bn(t){return"content-type"==t.toLowerCase()}function Kn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Hn(t),$n(t)}function Hn(t){t.D||(t.D=!0,Ot(t,"complete"),Ot(t,"error"))}function Gn(t){if(t.h&&"undefined"!=typeof o&&(!t.C[1]||4!=Qn(t)||2!=t.ba()))if(t.v&&4==Qn(t))Kt(t.Fa,0,t);else if(Ot(t,"readystatechange"),4==Qn(t)){t.h=!1;try{const o=t.ba();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var s=String(t.H).match(Be)[1]||null;if(!s&&a.self&&a.self.location){var i=a.self.location.protocol;s=i.substr(0,i.length-1)}r=!Pn.test(s?s.toLowerCase():"")}n=r}if(n)Ot(t,"complete"),Ot(t,"success");else{t.m=6;try{var c=2<Qn(t)?t.g.statusText:""}catch(u){c=""}t.j=c+" ["+t.ba()+"]",Hn(t)}}finally{$n(t)}}}function $n(t,e){if(t.g){zn(t);const r=t.g,s=t.C[0]?c:null;t.g=null,t.C=null,e||Ot(t,"ready");try{r.onreadystatechange=s}catch(n){}}}function zn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function Qn(t){return t.g?t.g.readyState:0}function Wn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Un:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Xn(t){let e="";return L(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Yn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Xn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Xe(t,e,n))}function Jn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zn(t){this.za=0,this.l=[],this.h=new Xt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Jn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Jn("baseRetryDelayMs",5e3,t),this.$a=Jn("retryDelaySeedMs",1e4,t),this.Ya=Jn("forwardChannelMaxRetries",2,t),this.ra=Jn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new yn(t&&t.concurrentRequestLimit),this.Ca=new Nn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function tr(t){if(nr(t),3==t.G){var e=t.V++,n=Ge(t.F);Xe(n,"SID",t.J),Xe(n,"RID",e),Xe(n,"TYPE","terminate"),ar(t,n),e=new Ee(t,t.h,e,void 0),e.K=2,e.v=Ye(Ge(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=wr(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ke(e)}yr(t)}function er(t){t.g&&(lr(t),t.g.cancel(),t.g=null)}function nr(t){er(t),t.u&&(a.clearTimeout(t.u),t.u=null),fr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&a.clearTimeout(t.m),t.m=null)}function rr(t,e){t.l.push(new mn(t.Za++,e)),3==t.G&&sr(t)}function sr(t){wn(t.i)||t.m||(t.m=!0,Mt(t.Ha,t),t.C=0)}function ir(t,e){return!(bn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=he(m(t.Ha,t,e),pr(t,t.C)),t.C++,!0))}function or(t,e){var n;n=e?e.m:t.V++;const r=Ge(t.F);Xe(r,"SID",t.J),Xe(r,"RID",n),Xe(r,"AID",t.U),ar(t,r),t.o&&t.s&&Yn(r,t.o,t.s),n=new Ee(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=cr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Tn(t.i,n),Ne(n,r,e)}function ar(t,e){t.j&&Ue({},(function(t,n){Xe(e,n,t)}))}function cr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?m(t.j.Oa,t.j,t):null;t:{var s=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=s[a].h;const c=s[a].g;if(n-=e,0>n)e=Math.max(0,s[a].h-100),o=!1;else try{On(c,t,"req"+n+"_")}catch(i){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function ur(t){t.g||t.u||(t.Y=1,Mt(t.Ga,t),t.A=0)}function hr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=he(m(t.Ga,t),pr(t,t.A)),t.A++,!0)}function lr(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function dr(t){t.g=new Ee(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Ge(t.oa);Xe(e,"RID","rpc"),Xe(e,"SID",t.J),Xe(e,"CI",t.N?"0":"1"),Xe(e,"AID",t.U),ar(t,e),Xe(e,"TYPE","xmlhttp"),t.o&&t.s&&Yn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ye(Ge(e)),n.s=null,n.U=!0,Oe(n,t)}function fr(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function gr(t,e){var n=null;if(t.g==e){fr(t),lr(t),t.g=null;var r=2}else{if(!En(t.i,e))return;n=e.D,In(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=se(),Ot(r,new ue(r,n,e,s)),sr(t)}else ur(t);else if(s=e.o,3==s||0==s&&0<t.I||!(1==r&&ir(t,e)||2==r&&hr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:mr(t,5);break;case 4:mr(t,10);break;case 3:mr(t,6);break;default:mr(t,2)}}function pr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function mr(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=m(t.jb,t);n||(n=new He("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||$e(n,"https"),Ye(n)),Dn(n.toString(),r)}else ce(2);t.G=0,t.j&&t.j.va(e),yr(t),nr(t)}function yr(t){t.G=0,t.I=-1,t.j&&(0==Sn(t.i).length&&0==t.l.length||(t.i.i.length=0,N(t.l),t.l.length=0),t.j.ua())}function vr(t,e,n){let r=Je(n);if(""!=r.i)e&&ze(r,e+"."+r.i),Qe(r,r.m);else{const t=a.location;r=Ze(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&L(t.aa,(function(t,e){Xe(r,e,t)})),e=t.D,n=t.sa,e&&n&&Xe(r,e,n),Xe(r,"VER",t.ma),ar(t,r),r}function wr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Vn(new _n({ib:!0})):new Vn(t.qa),e.L=t.H,e}function br(){}function Er(){if(B&&!(10<=Number(et)))throw Error("Environmental error: no available transport.")}function Tr(t,e){Nt.call(this),this.g=new Zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!O(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!O(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ar(this)}function Ir(t){ve.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Sr(){we.call(this),this.status=1}function Ar(t){this.g=t}r=Vn.prototype,r.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():me.g(),this.C=this.u?ge(this.u):ge(me),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){return void Kn(this,i)}t=n||"";const s=new Pe(this.headers);r&&Ue(r,(function(t,e){s.set(e,t)})),r=S(s.T()),n=a.FormData&&t instanceof a.FormData,!(0<=T(Fn,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{zn(this),0<this.B&&((this.K=qn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=Kt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Kn(this,i)}},r.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ot(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ot(this,"complete"),Ot(this,"abort"),$n(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$n(this,!0)),Vn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Gn(this):this.cb())},r.cb=function(){Gn(this)},r.ba=function(){try{return 2<Qn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Mn(e)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Zn.prototype,r.ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Ee(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=j(i),V(i,this.P)):i=this.P),null===this.o&&(s.H=i),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=cr(this,s,e),n=Ge(this.F),Xe(n,"RID",t),Xe(n,"CVER",22),this.D&&Xe(n,"X-HTTP-Session-Id",this.D),ar(this,n),this.o&&i&&Yn(n,this.o,i),Tn(this.i,s),this.Ra&&Xe(n,"TYPE","init"),this.ja?(Xe(n,"$req",e),Xe(n,"SID","null"),s.$=!0,Ne(s,n,null)):Ne(s,n,e),this.G=2}}else 3==this.G&&(t?or(this,t):0==this.l.length||wn(this.i)||or(this))},r.Ga=function(){if(this.u=null,dr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=he(m(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ce(10),er(this),dr(this))},r.ab=function(){null!=this.v&&(this.v=null,er(this),hr(this),ce(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ce(2)):(this.h.info("Failed to ping google.com"),ce(1))},r=br.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},Er.prototype.g=function(t,e){return new Tr(t,e)},v(Tr,Nt),Tr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Mt(m(t.hb,t,e))),ce(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=vr(t,null,t.W),sr(t)},Tr.prototype.close=function(){tr(this.g)},Tr.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,rr(this.g,e)}else this.v?(e={},e.__data__=Ct(t),rr(this.g,e)):rr(this.g,t)},Tr.prototype.M=function(){this.g.j=null,delete this.j,tr(this.g),delete this.g,Tr.Z.M.call(this)},v(Ir,ve),v(Sr,we),v(Ar,br),Ar.prototype.xa=function(){Ot(this.g,"a")},Ar.prototype.wa=function(t){Ot(this.g,new Ir(t))},Ar.prototype.va=function(t){Ot(this.g,new Sr(t))},Ar.prototype.ua=function(){Ot(this.g,"b")},Er.prototype.createWebChannel=Er.prototype.g,Tr.prototype.send=Tr.prototype.u,Tr.prototype.open=Tr.prototype.m,Tr.prototype.close=Tr.prototype.close,le.NO_ERROR=0,le.TIMEOUT=8,le.HTTP_ERROR=6,de.COMPLETE="complete",pe.EventType=ye,ye.OPEN="a",ye.CLOSE="b",ye.ERROR="c",ye.MESSAGE="d",Nt.prototype.listen=Nt.prototype.N,Vn.prototype.listenOnce=Vn.prototype.O,Vn.prototype.getLastError=Vn.prototype.La,Vn.prototype.getLastErrorCode=Vn.prototype.Da,Vn.prototype.getStatus=Vn.prototype.ba,Vn.prototype.getResponseJson=Vn.prototype.Qa,Vn.prototype.getResponseText=Vn.prototype.ga,Vn.prototype.send=Vn.prototype.ea;var Nr=i.createWebChannelTransport=function(){return new Er},Or=i.getStatEventTarget=function(){return se()},Dr=i.ErrorCode=le,Cr=i.EventType=de,_r=i.Event=ne,kr=i.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Rr=i.FetchXmlHttpFactory=_n,xr=i.WebChannel=pe,Lr=i.XhrIo=Vn}).call(this,n("c8ba"))},"9aa7":function(t,e,n){t.exports=n.p+"img/vector-pen.08b2b169.svg"},a55b:function(t,e,n){"use strict";n.r(e);var r=n("7a23"),s=function(t){return Object(r["v"])("data-v-33ea61b5"),t=t(),Object(r["t"])(),t},i={class:"email"},o={class:"password"},a=s((function(){return Object(r["h"])("button",{type:"submit"},"Log In",-1)}));function c(t,e,n,s,c,u){return Object(r["s"])(),Object(r["g"])("div",null,[Object(r["h"])("form",{onSubmit:e[2]||(e[2]=Object(r["H"])((function(){return u.loginUser&&u.loginUser.apply(u,arguments)}),["prevent"]))},[Object(r["h"])("div",i,[Object(r["G"])(Object(r["h"])("input",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return c.email=t}),type:"email",placeholder:"Email"},null,512),[[r["D"],c.email]])]),Object(r["h"])("div",o,[Object(r["G"])(Object(r["h"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return c.password=t}),type:"password",placeholder:"Password"},null,512),[[r["D"],c.password]])]),a],32)])}var u=n("1da1"),h=(n("96cf"),n("ac1f"),n("5319"),n("ea7b")),l=Object(h["b"])(),d={name:"Login",data:function(){return{email:"",password:""}},methods:{loginUser:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.email),console.log(t.password),e.prev=2,e.next=5,Object(h["d"])(l,t.email,t.password);case 5:t.$router.replace({name:"Verses"}),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})))()}}},f=(n("0b37"),n("6b0d")),g=n.n(f);const p=g()(d,[["render",c],["__scopeId","data-v-33ea61b5"]]);e["default"]=p},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},b58b:function(t,e,n){},b727:function(t,e,n){var r=n("0366"),s=n("e330"),i=n("44ad"),o=n("7b0b"),a=n("07fa"),c=n("65f0"),u=s([].push),h=function(t){var e=1==t,n=2==t,s=3==t,h=4==t,l=6==t,d=7==t,f=5==t||l;return function(g,p,m,y){for(var v,w,b=o(g),E=i(b),T=r(p,m),I=a(E),S=0,A=y||c,N=e?A(g,I):n||d?A(g,0):void 0;I>S;S++)if((f||S in E)&&(v=E[S],w=T(v,S,b),t))if(e)N[S]=w;else if(w)switch(t){case 3:return!0;case 5:return v;case 6:return S;case 2:u(N,v)}else switch(t){case 4:return!1;case 7:u(N,v)}return l?-1:s||h?h:N}};t.exports={forEach:h(0),map:h(1),filter:h(2),some:h(3),every:h(4),find:h(5),findIndex:h(6),filterReject:h(7)}},b83e:function(t,e,n){},c437:function(t,e,n){var r,s,i=n("e1f4"),o=n("2366"),a=0,c=0;function u(t,e,n){var u=e&&n||0,h=e||[];t=t||{};var l=t.node||r,d=void 0!==t.clockseq?t.clockseq:s;if(null==l||null==d){var f=i();null==l&&(l=r=[1|f[0],f[1],f[2],f[3],f[4],f[5]]),null==d&&(d=s=16383&(f[6]<<8|f[7]))}var g=void 0!==t.msecs?t.msecs:(new Date).getTime(),p=void 0!==t.nsecs?t.nsecs:c+1,m=g-a+(p-c)/1e4;if(m<0&&void 0===t.clockseq&&(d=d+1&16383),(m<0||g>a)&&void 0===t.nsecs&&(p=0),p>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");a=g,c=p,s=d,g+=122192928e5;var y=(1e4*(268435455&g)+p)%4294967296;h[u++]=y>>>24&255,h[u++]=y>>>16&255,h[u++]=y>>>8&255,h[u++]=255&y;var v=g/4294967296*1e4&268435455;h[u++]=v>>>8&255,h[u++]=255&v,h[u++]=v>>>24&15|16,h[u++]=v>>>16&255,h[u++]=d>>>8|128,h[u++]=255&d;for(var w=0;w<6;++w)h[u+w]=l[w];return e||o(h)}t.exports=u},c64e:function(t,e,n){var r=n("e1f4"),s=n("2366");function i(t,e,n){var i=e&&n||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null),t=t||{};var o=t.random||(t.rng||r)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e)for(var a=0;a<16;++a)e[i+a]=o[a];return e||s(o)}t.exports=i},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var s=t[r];"."===s?t.splice(r,1):".."===s?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,s=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!s){n=e+1;break}}else-1===r&&(s=!1,r=e+1);return-1===r?"":t.slice(n,r)}function s(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var o=i>=0?arguments[i]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,r="/"===o.charAt(0))}return e=n(s(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===i(t,-1);return t=n(s(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(s(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var s=r(t.split("/")),i=r(n.split("/")),o=Math.min(s.length,i.length),a=o,c=0;c<o;c++)if(s[c]!==i[c]){a=c;break}var u=[];for(c=a;c<s.length;c++)u.push("..");return u=u.concat(i.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,s=!0,i=t.length-1;i>=1;--i)if(e=t.charCodeAt(i),47===e){if(!s){r=i;break}}else s=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,s=!0,i=0,o=t.length-1;o>=0;--o){var a=t.charCodeAt(o);if(47!==a)-1===r&&(s=!1,r=o+1),46===a?-1===e?e=o:1!==i&&(i=1):-1!==e&&(i=-1);else if(!s){n=o+1;break}}return-1===e||-1===r||0===i||1===i&&e===r-1&&e===n+1?"":t.slice(e,r)};var i="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e1f4:function(t,e){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);t.exports=function(){return n(r),r}}else{var s=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0===(3&e)&&(t=4294967296*Math.random()),s[e]=t>>>((3&e)<<3)&255;return s}}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=output.c50162f5.js.map