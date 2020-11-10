(this.webpackJsonpironchess=this.webpackJsonpironchess||[]).push([[0],{100:function(e,t,n){},135:function(e,t){},139:function(e,t,n){},140:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),o=n.n(a),c=n(69),s=n.n(c),i=n(11),u=n(5),l=n(13),j=n(20),b=n.n(j),d=n(4),h="https://ironchess.herokuapp.com/api",m=(n(99),n(75));n(100);var p=function(e){return Object(r.jsxs)(m.a,{className:"myNav",children:[Object(r.jsx)(i.b,{to:"/",children:"IronChess"}),e.loggedUser?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.b,{onClick:e.onLogout,children:"Log out"}),Object(r.jsx)(i.b,{to:"/private",children:e.loggedUser.username})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.b,{to:"/signin",children:"Sign in"}),Object(r.jsx)(i.b,{to:"/signup",children:"Sign up"})]})]})};var O=function(e){return Object(a.useEffect)((function(){return e.onUnmount}),[]),Object(r.jsxs)("form",{onSubmit:e.onSignin,children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{children:"Email address"}),Object(r.jsx)("input",{name:"email",type:"text"})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{children:"Password"}),Object(r.jsx)("input",{name:"password",type:"password"})]}),Object(r.jsx)("button",{type:"submit",children:"Submit"}),e.errorMsg?Object(r.jsx)("p",{style:{color:"red"},children:e.errorMsg}):null]})};var f=function(e){return Object(r.jsxs)("form",{onSubmit:e.onSignup,children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{children:"Username"}),Object(r.jsx)("input",{name:"username",type:"text"})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{children:"Email address"}),Object(r.jsx)("input",{name:"email",type:"text"})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{children:"Password"}),Object(r.jsx)("input",{name:"password",type:"password"})]}),Object(r.jsx)("button",{type:"submit",children:"Submit"}),e.errorMessage?Object(r.jsx)("p",{style:{color:"red"},children:e.errorMessage}):null]})};var g=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:e.loggedUser.username}),Object(r.jsx)("p",{children:e.loggedUser.games}),Object(r.jsx)("p",{children:e.loggedUser.elo})]})};var v=function(){return Object(r.jsx)("div",{children:"Your're in public home."})},x=n(143),w=n(142);var S=function(e){return Object(r.jsxs)("div",{className:"myPrivateHome",children:[Object(r.jsx)("h1",{children:"Create a game"}),Object(r.jsxs)("div",{className:"myTimeButtons",children:[Object(r.jsx)(w.a,{size:"lg",variant:"dark",children:Object(r.jsx)(i.b,{to:"/stockfish",children:"Stockfish"})}),Object(r.jsx)(w.a,{size:"lg",variant:"light",children:Object(r.jsx)(i.b,{to:"/game/".concat(Object(x.a)(),"/").concat("w"),children:"Timeless"})}),Object(r.jsx)(w.a,{size:"lg",variant:"danger",children:"1 min"}),Object(r.jsx)(w.a,{size:"lg",variant:"warning",children:"3 min"}),Object(r.jsx)(w.a,{size:"lg",variant:"warning",children:"5 min"}),Object(r.jsx)(w.a,{size:"lg",variant:"primary",children:"10 min"}),Object(r.jsx)(w.a,{size:"lg",variant:"primary",children:"15 min"}),Object(r.jsx)(w.a,{size:"lg",variant:"success",children:"60 min"})]})]})},y=n(71),k=n(72),q=n(77),C=n(74),M=n(28),D=n.n(M),N=n(29),U=n.n(N),R=n(144);var T=function(e){return Object(r.jsxs)(R.a,{children:["w"===e.turn?Object(r.jsx)(R.a.Item,{variant:"light",children:"White to move."}):Object(r.jsx)(R.a.Item,{variant:"dark",children:"Black to move."}),Object(r.jsx)(R.a.Item,{variant:"info",children:e.moves})]})},I=(n(56),{borderRadius:"5px",boxShadow:"0 5px 15px rgba(0, 0, 0, 0.5)"}),z=window.STOCKFISH,B=new D.a,E=function(e){Object(q.a)(n,e);var t=Object(C.a)(n);function n(){var e;Object(y.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={fen:"start",history:[],moves:"",turn:""},e.onDrop=function(t){var n=t.sourceSquare,r=t.targetSquare;if(null!==B.move({from:n,to:r,promotion:"q"}))return new Promise((function(t){e.setState({fen:B.fen()}),t()})).then((function(){return e.engineGame().prepareMove()}))},e.engineGame=function(t){t=t||{};var n,r="function"===typeof z?z():new Worker(t.stockfishjs||"stockfish.js"),a="function"===typeof z?z():new Worker(t.stockfishjs||"stockfish.js"),o={},c={wtime:3e3,btime:3e3,winc:1500,binc:1500},s=null;function i(e,t){(t||r).postMessage(e)}function u(){var e=("white"===c.clockColor?c.wtime:c.btime)+c.startTime-Date.now();s=setTimeout(u,e%1e3+1)}function l(){for(var e="",t=B.history({verbose:!0}),n=0;n<t.length;++n){var r=t[n];e+=" "+r.from+r.to+(r.promotion?r.promotion:"")}return e}setInterval((function(){n||B.game_over()&&(n=!0)}),500),i("uci");var j=function(){!function(){if(null!==s&&(clearTimeout(s),s=null),c.startTime>0){var e=Date.now()-c.startTime;c.startTime=null,"white"===c.clockColor?c.wtime=Math.max(0,c.wtime-e):c.btime=Math.max(0,c.btime-e)}}();var e="w"===B.turn()?"white":"black";B.game_over()||("black"!==e&&(i("position startpos moves"+l()),i("position startpos moves"+l(),a),i("eval",a),c&&c.wtime?i("go "+(c.depth?"depth "+c.depth:"")+" wtime "+c.wtime+" winc "+c.winc+" btime "+c.btime+" binc "+c.binc):i("go "+(c.depth?"depth "+c.depth:""))),B.history().length>=2&&!c.depth&&!c.nodes&&("w"===B.turn()?(c.wtime+=c.winc,c.clockColor="white"):(c.btime+=c.binc,c.clockColor="black"),c.startTime=Date.now(),u()))};return a.onmessage=function(e){var t;"uciok"!==(t=e&&"object"===typeof e?e.data:e)&&"readyok"!==t&&t.substr(0,11)},r.onmessage=function(t){var n;if("uciok"===(n=t&&"object"===typeof t?t.data:t))o.engineLoaded=!0;else if("readyok"===n)o.engineReady=!0;else{var r=n.match(/^bestmove ([a-h][1-8])([a-h][1-8])([qrbn])?/);if(r?(B.move({from:r[1],to:r[2],promotion:r[3]}),e.setState({fen:B.fen()}),j(),i("eval",a)):(r=n.match(/^info .*\bdepth (\d+) .*\bnps (\d+)/))&&(o.search="Depth: "+r[1]+" Nps: "+r[2]),r=n.match(/^info .*\bscore (\w+) (-?\d+)/)){var c=parseInt(r[2],10)*("w"===B.turn()?1:-1);"cp"===r[1]?o.score=(c/100).toFixed(2):"mate"===r[1]&&(o.score="Mate in "+Math.abs(c)),(r=n.match(/\b(upper|lower)bound\b/))&&(o.score=("upper"===r[1]===("w"===B.turn())?"<= ":">= ")+o.score)}}},{start:function(){i("ucinewgame"),i("isready"),o.engineReady=!1,o.search=null,j(),n=!1},prepareMove:function(){j()}}},e}return Object(k.a)(n,[{key:"componentDidMount",value:function(){this.setState({fen:B.fen()}),this.engineGame().prepareMove()}},{key:"componentDidUpdate",value:function(){this.moves=B.pgn(),"w"===B.turn()?this.turn="White to move.":this.turn="Black to move.",console.log(this.moves),console.log(this.turn)}},{key:"render",value:function(){var e=this.state.fen;return this.props.children({position:e,onDrop:this.onDrop,moves:this.moves,turn:this.turn})}}]),n}(a.Component);var _,F,P,G,H=function(){return Object(r.jsxs)("div",{className:"myGamespace",children:[Object(r.jsx)(E,{children:function(e){var t=e.position,n=e.onDrop,a=e.moves,o=e.turn;return Object(r.jsxs)("div",{className:"myChessboard",children:[Object(r.jsx)(U.a,{id:"stockfish",position:t,width:550,onDrop:n,boardStyle:I,orientation:"black"}),Object(r.jsx)(T,{moves:a,turn:o})]})}}),Object(r.jsxs)("div",{className:"myButtons",children:[Object(r.jsx)(w.a,{children:"Resign"}),Object(r.jsx)(w.a,{children:"Offer draw"}),Object(r.jsx)(w.a,{children:"Save game"})]})]})},L=n(15),W=n(76),A=n(73),J=n.n(A);function K(e){var t=Object(a.useState)("start"),n=Object(l.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)({}),s=Object(l.a)(c,2),i=s[0],j=s[1],b=Object(a.useState)({}),d=Object(l.a)(b,2),h=d[0],m=d[1],p=Object(a.useState)(""),O=Object(l.a)(p,2),f=O[0],g=(O[1],Object(a.useState)([])),v=Object(l.a)(g,2),x=v[0],w=v[1],S=Object(a.useState)(""),y=Object(l.a)(S,2),k=y[0],q=y[1],C=Object(a.useState)("w"),M=Object(l.a)(C,2),N=M[0],U=M[1];Object(a.useEffect)((function(){P=D()(),F=J()("https://ironchess.herokuapp.com/"),_=e.match.params.id,G=e.match.params.color,F.emit("join_game",_)}),[]),Object(a.useEffect)((function(){F.on("receive_info",(function(e){console.log("Information received.",e),o(e.position),q(e.moves),U(e.turn),P.load_pgn(e.moves)}))}));return e.children({position:r,handleMouseOverSquare:function(e){var t=P.moves({square:e,verbose:!0});if(0!==t.length){for(var n=[],r=0;r<t.length;r++)n.push(t[r].to);!function(e,t){var n=[e].concat(Object(W.a)(t)).reduce((function(e,t){return Object(u.a)(Object(u.a)(Object(u.a)({},e),Object(L.a)({},t,{background:"radial-gradient(circle, #fffc00 36%, transparent 40%)",borderRadius:"50%"})),V({history:x,pieceSquare:f}))}),{});m(Object(u.a)(Object(u.a)({},h),n))}(e,n)}},handleMouseOutSquare:function(e){m(V({pieceSquare:f,history:x}))},handleDrop:function(e){var t=e.sourceSquare,n=e.targetSquare;G===P.turn()&&(null!==P.move({from:t,to:n,promotion:"q"})&&(o(P.fen()),w(P.history({verbose:!0})),q(P.pgn()),U(P.turn()),m(V({pieceSquare:f,history:x})),F.emit("send_game_info",{room:_,moves:P.pgn(),position:P.fen(),turn:P.turn()})))},handleSquareRightClick:function(e){return m(Object(L.a)({},e,{backgroundColor:"deepPink"}))},handleDragOverSquare:function(e){j("e4"===e||"d4"===e||"e5"===e||"d5"===e?{backgroundColor:"cornFlowerBlue"}:{boxShadow:"inset 0 0 1px 4px rgb(255, 255, 0)"})},dropSquareStyle:i,squareStyles:h,moves:k,turn:N})}var V=function(e){var t=e.pieceSquare,n=e.history,r=n.length&&n[n.length-1].from,a=n.length&&n[n.length-1].to;return Object(u.a)(Object(u.a)(Object(L.a)({},t,{backgroundColor:"rgba(255, 255, 0, 0.4)"}),n.length&&Object(L.a)({},r,{backgroundColor:"rgba(255, 255, 0, 0.4)"})),n.length&&Object(L.a)({},a,{backgroundColor:"rgba(255, 255, 0, 0.4)"}))},Y=function(e){return Object(r.jsx)(K,Object(u.a)(Object(u.a)({},e),{},{children:function(e){var t=e.position,n=e.handleDrop,a=e.handleMouseOverSquare,o=e.handleMouseOutSquare,c=e.handleDragOverSquare,s=e.handleSquareRightClick,i=e.squareStyles,u=e.dropSquareStyle,l=e.moves,j=e.turn;return Object(r.jsxs)("div",{className:"myChessboard",children:[Object(r.jsx)(U.a,{id:"HumanVsHuman",width:560,position:t,onDrop:n,onMouseOverSquare:a,onMouseOutSquare:o,onSquareRightClick:s,onDragOverSquare:c,squareStyles:i,dropSquareStyle:u,boardStyle:{borderRadius:"5px",boxShadow:"0 5px 15px rgba(0, 0, 0, 0.5)"}}),Object(r.jsxs)("div",{className:"myButtons",children:[Object(r.jsx)(w.a,{children:"Resign"}),Object(r.jsx)(w.a,{children:"Offer draw"}),Object(r.jsx)(w.a,{children:"Save game"})]}),Object(r.jsx)(T,{moves:l,turn:j})]})}}))};var Q=function(e){return console.log(e),"/stockfish"===e.match.path?Object(r.jsx)(H,{}):Object(r.jsx)(Y,Object(u.a)({},e))};var X=Object(d.f)((function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(null),s=Object(l.a)(c,2),i=s[0],j=s[1];Object(a.useEffect)((function(){n||b.a.get("".concat(h,"/user"),{withCredentials:!0}).then((function(e){o(e.data)}))}),[]);var m=function(e){e.preventDefault();var t=e.target,n=t.username,r=t.email,a=t.password;b.a.post("".concat(h,"/signup"),{username:n.value,email:r.value,password:a.value},{withCredentials:!0}).then((function(e){o(e.data,(function(){props.history.push("/")}))})).catch((function(e){j(e.response.data.error)}))},x=function(e){e.preventDefault();var t=e.target,n=t.email,r=t.password;b.a.post("".concat(h,"/signin"),{email:n.value,password:r.value},{withCredentials:!0}).then((function(e){o(e.data,(function(){props.history.push("/")}))})).catch((function(e){j(e.response.data.error)}))},w=function(){j(null)};return Object(r.jsxs)("div",{className:"myApp",children:[Object(r.jsx)("header",{children:Object(r.jsx)(p,{loggedUser:n,onLogout:function(e){b.a.post("".concat(h,"/logout"),{},{withCredentials:!0}).then((function(){o(null)}))}})}),Object(r.jsx)("main",{children:Object(r.jsxs)(d.c,{children:[Object(r.jsx)(d.a,{exact:!0,path:"/",render:function(){return n?Object(r.jsx)(S,{}):Object(r.jsx)(v,{})}}),Object(r.jsx)(d.a,{path:"/signin",render:function(e){return Object(r.jsx)(O,Object(u.a)({onUnmount:w,errorMsg:i,onSignin:x},e))}}),Object(r.jsx)(d.a,{path:"/signup",render:function(e){return Object(r.jsx)(f,Object(u.a)({onSignup:m},e))}}),Object(r.jsx)(d.a,{path:"/private",render:function(){return Object(r.jsx)(g,{loggedUser:n})}}),Object(r.jsx)(d.a,{path:"/public/:id",render:function(){return Object(r.jsx)(g,{loggedUser:n})}}),Object(r.jsx)(d.a,{path:"/stockfish",render:function(e){return Object(r.jsx)(Q,Object(u.a)({loggedUser:n},e))}}),Object(r.jsx)(d.a,{exact:!0,path:"/game/:id/:color",render:function(e){return Object(r.jsx)(Q,Object(u.a)({loggedUser:n},e))}})]})})]})}));n(138),n(139);s.a.render(Object(r.jsx)(i.a,{children:Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(X,{})})}),document.getElementById("root"))},56:function(e,t,n){},99:function(e,t,n){}},[[140,1,2]]]);
//# sourceMappingURL=main.20047afd.chunk.js.map