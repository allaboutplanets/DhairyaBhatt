!function(t){function e(e){for(var o,s,i=e[0],l=e[1],r=0,c=[];r<i.length;r++)s=i[r],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&c.push(n[s][0]),n[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);for(a&&a(e);c.length;)c.shift()()}var o={},n={14:0};function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],o=n[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise((function(e,s){o=n[t]=[e,s]}));e.push(o[2]=i);var l,r=document.createElement("script");r.charset="utf-8",r.timeout=120,s.nc&&r.setAttribute("nonce",s.nc),r.src=function(t){return s.p+""+t+".1053988f0e60b62b89c3.js"}(t);var a=new Error;l=function(e){r.onerror=r.onload=null,clearTimeout(c);var o=n[t];if(0!==o){if(o){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;a.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",a.name="ChunkLoadError",a.type=s,a.request=i,o[1](a)}n[t]=void 0}};var c=setTimeout((function(){l({type:"timeout",target:r})}),12e4);r.onerror=r.onload=l,document.head.appendChild(r)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/dist/",s.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var r=0;r<i.length;r++)e(i[r]);var a=l;s(s.s=83)}({0:function(t,e,o){"use strict";function n(t,e,o,n,s,i,l,r){var a,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=o,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),l?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},c._ssrRegister=a):s&&(a=r?function(){s.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:s),a)if(c.functional){c._injectStyles=a;var d=c.render;c.render=function(t,e){return a.call(e),d(t,e)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,a):[a]}return{exports:t,options:c}}o.d(e,"a",(function(){return n}))},83:function(t,e,o){"use strict";o.r(e);var n={components:{OptionsDropdown:()=>o.e(0).then(o.bind(null,226)),ShareButton:()=>o.e(3).then(o.bind(null,230)),ContentShare:()=>o.e(2).then(o.bind(null,231)),ContentComments:()=>o.e(1).then(o.bind(null,225))},data:()=>({meta:store.meta,content:store.content,l:store.l,checkedAnswers:[],enteredName:store.user?store.user.displayname:"",isLoading:!1,isShareSectionVisible:!0,isEmbedModalActive:!1,isQrCodeModalActive:!1,notification:null,notificationType:"is-light",voteMessage:null,token:""}),mounted(){setInterval(()=>{dayjs(new Date).diff(dayjs(this.content.deadline))>0&&(this.content.poll.is_votable=0)},1e3)},methods:{validateVote(t){if(t.preventDefault(),0===this.checkedAnswers.length)return this.notificationType="is-danger",void(this.notification=this.l["poll.validate.select_answer"]);if(this.content.poll.poll_info.enter_name&&!this.enteredName)return;this.notification=this.l["poll.validate.loading"],this.notificationType="is-light",this.isLoading=!0;let e=_getCookie("voter");if(!e){let t=document.createElement("script");t.setAttribute("src","/dist/poll_security.js?v=1189"),document.head.appendChild(t)}if(this.content.poll.poll_info.captcha&&"undefined"==typeof grecaptcha){let t=document.createElement("script");t.setAttribute("src","https://www.google.com/recaptcha/api.js?render=6Lfx2sEaAAAAAGHiNQ-UEueKoOrIQT-DcttQMAOb"),document.head.appendChild(t)}let o=0;const n=this;let s=setInterval((function(){o+=1,100===o&&(clearInterval(s),this.notification=this.l["poll.validate.error"],this.notificationType="is-danger"),e=_getCookie("voter"),e&&(n.content.poll.poll_info.captcha?"undefined"!=typeof grecaptcha&&(clearInterval(s),n.captchaVotePoll()):(clearInterval(s),n.votePoll()))}),100)},captchaVotePoll(){const t=this;grecaptcha.ready((function(){grecaptcha.execute("6Lfx2sEaAAAAAGHiNQ-UEueKoOrIQT-DcttQMAOb",{action:"submit"}).then((function(e){t.token=e,t.votePoll()}))}))},async votePoll(){this.isLoading=!0;try{const{data:t}=await this.axios.post("/poll/vote",{content_id:this.content.id,checked_answers:this.checkedAnswers,name:this.enteredName,token:this.token});t.success?window.location.href="/"+this.content.id+"/voted":(this.notificationType="is-danger",this.notification=t.message)}catch(t){this.$buefy.toast.open({message:this.l["toast.request_failed"],type:"is-danger"})}this.checkedAnswers=[],this.isLoading=!1}}},s=o(0),i=Object(s.a)(n,void 0,void 0,!1,null,null,null).exports,l={components:{OptionsDropdown:()=>o.e(0).then(o.bind(null,226)),ShareButton:()=>o.e(3).then(o.bind(null,230)),ContentShare:()=>o.e(2).then(o.bind(null,231)),ContentComments:()=>o.e(1).then(o.bind(null,225))},data:()=>({meta:store.meta,content:store.content,l:store.l})},r=Object(s.a)(l,void 0,void 0,!1,null,null,null).exports,a={data:()=>({content:store.content,l:store.l,error:null,isLoading:!1,updatedContent:{id:null,title:null,description:null,answers:[]}}),mounted(){this.updatedContent.id=this.content.id,this.updatedContent.title=this.content.poll.title,this.updatedContent.description=this.content.poll.poll_info.description,this.updatedContent.answers=this.content.poll.poll_answers},methods:{async updatePoll(){try{const{data:t}=await this.axios.post("/poll/update",{updated:this.updatedContent});t.success?window.location.href="/"+this.content.id:this.error=t.message}catch(t){this.$buefy.toast.open({message:this.l["toast.request_failed"],type:"is-danger"})}},addOption(){this.updatedContent.answers.push({id:null,answer:null,type:"text",sorting:this.updatedContent.answers[this.updatedContent.answers.length-1].sorting+1})}}},c=Object(s.a)(a,void 0,void 0,!1,null,null,null).exports,d={data:()=>({meta:store.meta,content:store.content,l:store.l,checkedAnswers:[],showDescriptionEditBox:!1,pollDescription:null,enteredName:null,isLoading:!1,isRefreshing:!1,showResults:!1,baseColors:["#3EB991","#FF7563","#AA66CC","#FFBB33","#FF8800","#33B5E5","#AA66CC"],token:"",notification:null,notificationType:"is-light"}),computed:{sortedAnswers(){return JSON.parse(JSON.stringify(this.content.poll.poll_answers)).sort((t,e)=>e.votes-t.votes)},percent(){return 0===this.content.poll.total_votes?this.sortedAnswers.map(t=>0):this.sortedAnswers.map(t=>(t.votes/this.content.poll.total_votes*100).toFixed(2))},colors(){return[].concat.apply([],Array(this.sortedAnswers.length).fill(this.baseColors))}},mounted(){},methods:{validateVote(){if(0===this.checkedAnswers.length)return this.notificationType="is-danger",void(this.notification=this.l["poll.validate.select_answer"]);if(this.content.poll.poll_info.enter_name&&!this.enteredName)return;const t=this;let e=_getCookie("mojolicious");if(console.log("session: ".session),!e){try{localStorage.setItem("test",1)}catch(e){return t.notificationType="is-danger",void(t.notification="An error occured. If you are using incognito mode, try to disable it.")}if(localStorage.getItem("strawpoll:voted:"+this.content.cookie_id))return this.notificationType="is-danger",void(this.notification=this.l["backend.message.poll_vote_error_already_user"])}this.notification=this.l["poll.validate.loading"],this.notificationType="is-light",this.isLoading=!0;let o=_getCookie("voter");if(!o){let t=document.createElement("script");t.setAttribute("src","/dist/poll_security.js?v=1192"),document.head.appendChild(t)}if(this.content.poll.poll_info.captcha&&"undefined"==typeof grecaptcha){let t=document.createElement("script");t.setAttribute("src","https://www.google.com/recaptcha/api.js?render=6Lfx2sEaAAAAAGHiNQ-UEueKoOrIQT-DcttQMAOb"),document.head.appendChild(t)}let n=0,s=setInterval((function(){if(n+=1,100===n)return clearInterval(s),t.notificationType="is-danger",void(t.notification="Request timed out. Please try again.");o=_getCookie("voter"),!o&&window.voter&&(o=window.voter),o&&(t.content.poll.poll_info.captcha?"undefined"!=typeof grecaptcha&&(clearInterval(s),t.captchaVotePoll(o)):(clearInterval(s),t.votePoll(o)))}),100)},captchaVotePoll(t){const e=this;grecaptcha.ready((function(){grecaptcha.execute("6Lfx2sEaAAAAAGHiNQ-UEueKoOrIQT-DcttQMAOb",{action:"submit"}).then((function(o){e.token=o,e.votePoll(t)}))}))},async votePoll(t){this.isLoading=!0;try{const{data:e}=await this.axios.post("/poll/vote",{content_id:this.content.id,checked_answers:this.checkedAnswers,name:this.enteredName,token:this.token,voter:t});e.success?(this.$buefy.toast.open({message:e.message,type:"is-success"}),localStorage.setItem("strawpoll:voted:"+this.content.cookie_id,1),this.refreshResults(),this.showResults=!0):(this.notificationType="is-danger",this.notification=e.message)}catch(t){this.$buefy.toast.open({message:this.l["toast.request_failed"],type:"is-danger"})}this.isLoading=!1},async refreshResults(){this.isRefreshing=!0;try{const{data:t}=await this.axios.get("/poll/"+this.content.id);t.success&&(this.content.poll.total_votes=t.content.poll.total_votes,this.content.poll.poll_answers=t.content.poll.poll_answers)}catch(t){this.$buefy.toast.open({message:this.l["toast.request_failed"],type:"is-danger"})}this.isRefreshing=!1}}},h=Object(s.a)(d,void 0,void 0,!1,null,null,null).exports,p={components:{OptionsDropdown:()=>o.e(0).then(o.bind(null,226)),ShareButton:()=>o.e(3).then(o.bind(null,230)),ContentShare:()=>o.e(2).then(o.bind(null,231)),ContentComments:()=>o.e(1).then(o.bind(null,225)),PieChart:()=>Promise.all([o.e(4),o.e(5)]).then(o.bind(null,242))},data:()=>({meta:store.meta,content:store.content,votedAnswers:store.voted_answers,l:store.l,baseColors:["#3EB991","#FF7563","#AA66CC","#FFBB33","#FF8800","#33B5E5","#AA66CC"],isLoadingRefresh:!1,isShareSectionVisible:!0,isEmbedModalActive:!1,isQrCodeModalActive:!1,sortedParticipants:[],pollVoters:[],autoRefreshResults:!1,autoRefreshIntervalId:null}),mounted(){setInterval(()=>{dayjs(new Date).diff(dayjs(this.content.deadline))>0&&(this.content.poll.is_votable=0)},1e3),this.content.poll.poll_info.enter_name&&(this.pollVoters=this.content.poll.voters)},computed:{pollRows(){const t=[];return this.pollVoters.forEach(e=>{t.push(e)}),t},pollColumns(){const t=[];for(let e=0;e<this.content.poll.poll_answers.length;e++)t.push({id:e,hash:this.content.poll.poll_answers[e].id,name:this.content.poll.poll_answers[e].answer,width:150,type:"vote"});return t},sortedAnswers(){let t=JSON.parse(JSON.stringify(this.content.poll.poll_answers));return t.forEach(t=>{this.votedAnswers.forEach(e=>{t.id==e&&(t.isVoted=1)})}),t.sort((t,e)=>e.votes-t.votes)},votes(){return this.sortedAnswers.map(t=>t.votes)},labels(){return this.sortedAnswers.map(t=>t.answer)},percent(){return 0===this.content.poll.total_votes?this.sortedAnswers.map(t=>0):this.sortedAnswers.map(t=>(t.votes/this.content.poll.total_votes*100).toFixed(2))},colors(){return[].concat.apply([],Array(this.sortedAnswers.length).fill(this.baseColors))},countTotalParticipants(){return"new"===this.pollRows[this.pollRows.length-1].hash?this.pollRows.length-1:this.pollRows.length},showStickyHeader(){return"desktop"==this.meta.device_type&&this.pollRows.length>=10},showStickyNames(){return"desktop"==this.meta.device_type&&this.pollColumns.length>=7}},methods:{toggleAutoRefresh(){if(1==this.autoRefreshResults){const t=this;this.refreshResults(),this.autoRefreshIntervalId=setInterval((function(){t.refreshResults()}),3e3)}else clearInterval(this.autoRefreshIntervalId)},async refreshResults(){this.isLoadingRefresh=!0;try{const{data:t}=await this.axios.get("/poll/"+this.content.id);t.success&&t.content.poll.total_voters!=this.content.poll.total_voters&&(this.content.poll.total_voters=t.content.poll.total_voters,this.content.poll.total_votes=t.content.poll.total_votes,this.content.poll.poll_answers=t.content.poll.poll_answers)}catch(t){this.$buefy.toast.open({message:this.l["toast.request_failed"],type:"is-danger"})}this.isLoadingRefresh=!1},countTimeParticipants(t){let e=0;return this.sortedParticipants[t]=[],this.pollRows.forEach(o=>{"new"!==o.hash&&"summary"!==o.hash&&o.votes.forEach(n=>{n.hash===t&&(1===n.vote&&(e+=1),this.sortedParticipants[t].push({row:o,vote:n}))})}),this.sortedParticipants[t].sort((t,e)=>e.vote.vote-t.vote.vote),e},showVoteAnalyticsModal(){this.$buefy.modal.open({parent:this,component:()=>o.e(16).then(o.bind(null,238)),hasModalCard:!0,trapFocus:!0,props:{contentId:this.content.id}})},confirmDeleteVoter(t){this.$buefy.dialog.confirm({title:this.l["poll.dialog.delete_voter.title"],message:this.l["poll.dialog.delete_voter.message"],confirmText:this.l["poll.dialog.delete_voter.confirm"],type:"is-danger",hasIcon:!0,onConfirm:()=>{this.deleteVoter(t)}})},async deleteVoter(t){this.isLoadingRefresh=!0;try{const{data:e}=await this.axios.post("/poll/delete_vote",{content_id:this.content.id,voter_name:t});e.success&&this.refreshResults()}catch(t){this.$buefy.toast.open({message:this.l["toast.request_failed"],type:"is-danger"})}this.isLoadingRefresh=!1}},beforeDestory(){clearInterval(this.autoRefreshIntervalId)}},u=Object(s.a)(p,void 0,void 0,!1,null,null,null).exports;document.getElementById("poll")&&new Vue(i).$mount("#poll"),document.getElementById("poll_voted")&&new Vue(r).$mount("#poll_voted"),document.getElementById("poll_edit")&&new Vue(c).$mount("#poll_edit"),document.getElementById("embed_poll")&&new Vue(h).$mount("#embed_poll"),document.getElementById("poll_results")&&new Vue(u).$mount("#poll_results")}});