(this["webpackJsonptest-gh"]=this["webpackJsonptest-gh"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),s=a(3),r=a.n(s),o=(a(12),a(13),a(4)),c=a(5),l=a(7),d=a(6),u=a(0),m=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={index:2,currentTime:"0:00",musicList:[{name:"Red",author:"Taylor Swift",img:"https://pbs.twimg.com/media/E4LtA9ZXwAsgl1V?format=jpg&name=large",audio:"https://firebasestorage.googleapis.com/v0/b/music-6fc30.appspot.com/o/02%20Red%20(Taylor's%20Version).m4a?alt=media&token=070662d0-a7d1-4ff0-a41b-103a1b951239",duration:"3:43"},{name:"I Knew You Were Trouble",author:"Taylor Swift",img:"https://pbs.twimg.com/media/E4LtA9ZXwAsgl1V?format=jpg&name=large",audio:"https://firebasestorage.googleapis.com/v0/b/music-6fc30.appspot.com/o/04%20I%20Knew%20You%20Were%20Trouble%20(Taylor's.m4a?alt=media&token=01a643d8-c27e-42c2-aee0-81622f831f47",duration:"3:39"},{name:"All Too Well",author:"Taylor Swift",img:"https://pbs.twimg.com/media/E4LtA9ZXwAsgl1V?format=jpg&name=large",audio:"https://firebasestorage.googleapis.com/v0/b/music-6fc30.appspot.com/o/05%20All%20Too%20Well%20(Taylor's%20Version).m4a?alt=media&token=d81bfaa5-6ca5-412e-bb7e-b0ee487aa337",duration:"5:29"}],pause:!1},e.changeCurrentTime=function(t){var a=e.playerRef.duration,i=e.timelineRef.offsetWidth,n=e.timelineRef.offsetLeft,s=100*(t.clientX-n)/i;e.playheadRef.style.width=s+"%",e.playerRef.currentTime=a*s/100},e.hoverTimeLine=function(t){var a=e.playerRef.duration,i=e.timelineRef.offsetWidth,n=e.timelineRef.offsetLeft,s=100*(t.clientX-n)/i;s<=100&&(e.hoverPlayheadRef.style.width=s+"%");var r=a*s/100;r>=0&&r<=a&&(e.hoverPlayheadRef.dataset.content=e.formatTime(r))},e.resetTimeLine=function(){e.hoverPlayheadRef.style.width=0},e.timeUpdate=function(){var t=e.playerRef.duration,a=(e.timelineRef.offsetWidth,e.playheadRef.offsetWidth,e.playerRef.currentTime/t*100);e.playheadRef.style.width=a+"%";var i=e.formatTime(parseInt(e.playerRef.currentTime));e.setState({currentTime:i})},e.formatTime=function(e){var t=Math.floor(e/60),a=Math.floor(e%60);return t+":"+(a=a>=10?a:"0"+a%60)},e.updatePlayer=function(){var t=e.state,a=t.musicList[t.index];new Audio(a.audio);e.playerRef.load()},e.nextSong=function(){var t=e.state,a=t.musicList,i=t.index,n=t.pause;e.setState({index:(i+1)%a.length}),e.updatePlayer(),n&&e.playerRef.play()},e.prevSong=function(){var t=e.state,a=t.musicList,i=t.index,n=t.pause;e.setState({index:(i+a.length-1)%a.length}),e.updatePlayer(),n&&e.playerRef.play()},e.playOrPause=function(){var t=e.state,a=t.musicList,i=t.index,n=t.pause,s=a[i];new Audio(s.audio);e.state.pause?e.playerRef.pause():e.playerRef.play(),e.setState({pause:!n})},e.clickAudio=function(t){var a=e.state.pause;e.setState({index:t}),e.updatePlayer(),a&&e.playerRef.play()},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.playerRef.addEventListener("timeupdate",this.timeUpdate,!1),this.playerRef.addEventListener("ended",this.nextSong,!1),this.timelineRef.addEventListener("click",this.changeCurrentTime,!1),this.timelineRef.addEventListener("mousemove",this.hoverTimeLine,!1),this.timelineRef.addEventListener("mouseout",this.resetTimeLine,!1)}},{key:"componentWillUnmount",value:function(){this.playerRef.removeEventListener("timeupdate",this.timeUpdate),this.playerRef.removeEventListener("ended",this.nextSong),this.timelineRef.removeEventListener("click",this.changeCurrentTime),this.timelineRef.removeEventListener("mousemove",this.hoverTimeLine),this.timelineRef.removeEventListener("mouseout",this.resetTimeLine)}},{key:"render",value:function(){var e=this,t=this.state,a=t.musicList,i=t.index,n=t.currentTime,s=t.pause,r=a[i];return Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:"current-song",children:[Object(u.jsxs)("audio",{ref:function(t){return e.playerRef=t},children:[Object(u.jsx)("source",{src:r.audio,type:"audio/ogg"}),"Your browser does not support the audio element."]}),Object(u.jsx)("div",{className:"img-wrap",children:Object(u.jsx)("img",{src:r.img})}),Object(u.jsx)("span",{className:"song-name",children:r.name}),Object(u.jsx)("span",{className:"song-autor",children:r.author}),Object(u.jsxs)("div",{className:"time",children:[Object(u.jsx)("div",{className:"current-time",children:n}),Object(u.jsx)("div",{className:"end-time",children:r.duration})]}),Object(u.jsxs)("div",{ref:function(t){return e.timelineRef=t},id:"timeline",children:[Object(u.jsx)("div",{ref:function(t){return e.playheadRef=t},id:"playhead"}),Object(u.jsx)("div",{ref:function(t){return e.hoverPlayheadRef=t},class:"hover-playhead","data-content":"0:00"})]}),Object(u.jsxs)("div",{className:"controls",children:[Object(u.jsx)("button",{onClick:this.prevSong,className:"prev prev-next current-btn",children:Object(u.jsx)("i",{className:"fas fa-backward"})}),Object(u.jsx)("button",{onClick:this.playOrPause,className:"play current-btn",children:s?Object(u.jsx)("i",{class:"fas fa-pause"}):Object(u.jsx)("i",{className:"fas fa-play"})}),Object(u.jsx)("button",{onClick:this.nextSong,className:"next prev-next current-btn",children:Object(u.jsx)("i",{className:"fas fa-forward"})})]})]})})}}]),a}(n.a.Component);var f=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(m,{})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),i(e),n(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.9f37ad5e.chunk.js.map