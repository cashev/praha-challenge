(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[179],{"./src/index.css":function(){},"./src/stories/Board.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},Draw:function(){return Draw},FillWithCircle:function(){return FillWithCircle},FillWithCross:function(){return FillWithCross},FillWithTriangle:function(){return FillWithTriangle},WinCircle:function(){return WinCircle},WinCross:function(){return WinCross},__namedExportsOrder:function(){return __namedExportsOrder}});var _home_parallels_workspace_praha_challenge_testing_my_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Board__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/Board.jsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Board",component:_Board__WEBPACK_IMPORTED_MODULE_1__.Z};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Board__WEBPACK_IMPORTED_MODULE_1__.Z,(0,_home_parallels_workspace_praha_challenge_testing_my_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},args))},Default=Template.bind({});Default.args={squares:Array(9).fill(null)};var WinCross=Template.bind({});WinCross.args={squares:[null,"X","O",null,"X","O",null,"X",null]};var WinCircle=Template.bind({});WinCircle.args={squares:[null,null,"O","X","X","O","X",null,"O"]};var Draw=Template.bind({});Draw.args={squares:["O","X","X","X","X","O","O","O","X"]};var FillWithCross=Template.bind({});FillWithCross.args={squares:Array(9).fill("X")};var FillWithCircle=Template.bind({});FillWithCircle.args={squares:Array(9).fill("O")};var FillWithTriangle=Template.bind({});FillWithTriangle.args={squares:Array(9).fill("△")},Default.parameters=(0,_home_parallels_workspace_praha_challenge_testing_my_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:"args => <Board {...args} />"}},Default.parameters),WinCross.parameters=(0,_home_parallels_workspace_praha_challenge_testing_my_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:"args => <Board {...args} />"}},WinCross.parameters),WinCircle.parameters=(0,_home_parallels_workspace_praha_challenge_testing_my_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:"args => <Board {...args} />"}},WinCircle.parameters),Draw.parameters=(0,_home_parallels_workspace_praha_challenge_testing_my_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:"args => <Board {...args} />"}},Draw.parameters),FillWithCross.parameters=(0,_home_parallels_workspace_praha_challenge_testing_my_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:"args => <Board {...args} />"}},FillWithCross.parameters),FillWithCircle.parameters=(0,_home_parallels_workspace_praha_challenge_testing_my_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:"args => <Board {...args} />"}},FillWithCircle.parameters),FillWithTriangle.parameters=(0,_home_parallels_workspace_praha_challenge_testing_my_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:"args => <Board {...args} />"}},FillWithTriangle.parameters);var __namedExportsOrder=["Default","WinCross","WinCircle","Draw","FillWithCross","FillWithCircle","FillWithTriangle"]},"./src/stories/Game.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Game_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),createSuper=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createSuper.js"),Board=__webpack_require__("./src/Board.jsx"),jsx_runtime=(__webpack_require__("./src/index.css"),__webpack_require__("./node_modules/react/jsx-runtime.js")),Game=function(_React$Component){(0,inherits.Z)(Game,_React$Component);var _super=(0,createSuper.Z)(Game);function Game(props){var _this;return(0,classCallCheck.Z)(this,Game),(_this=_super.call(this,props)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},_this}return(0,createClass.Z)(Game,[{key:"handleClick",value:function handleClick(i){var history=this.state.history.slice(0,this.state.stepNumber+1),squares=history[history.length-1].squares.slice();calculateWinner(squares)||squares[i]||(squares[i]=this.state.xIsNext?"X":"O",this.setState({history:history.concat([{squares:squares}]),stepNumber:history.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function jumpTo(step){this.setState({stepNumber:step,xIsNext:step%2==0})}},{key:"render",value:function render(){var status,_this2=this,history=this.state.history,current=history[this.state.stepNumber],winner=calculateWinner(current.squares),moves=history.map((function(step,move){var desc=move?"Go to move #"+move:"Go to game start";return(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return _this2.jumpTo(move)},children:desc})},move)}));return status=winner?"Winner: "+winner:"次のプレイヤー: "+(this.state.xIsNext?"X":"O"),(0,jsx_runtime.jsxs)("div",{className:"game",children:[(0,jsx_runtime.jsx)("div",{className:"game-board",children:(0,jsx_runtime.jsx)(Board.Z,{squares:current.squares,onClick:function onClick(i){return _this2.handleClick(i)}})}),(0,jsx_runtime.jsxs)("div",{className:"game-info",children:[(0,jsx_runtime.jsx)("div",{"data-e2e":"status",children:status}),(0,jsx_runtime.jsx)("ol",{children:moves})]})]})}}]),Game}(react.Component);function calculateWinner(squares){for(var lines=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],i=0;i<lines.length;i++){var _lines$i=(0,slicedToArray.Z)(lines[i],3),a=_lines$i[0],b=_lines$i[1],c=_lines$i[2];if(squares[a]&&squares[a]===squares[b]&&squares[a]===squares[c])return squares[a]}return null}Game.__docgenInfo={description:"",methods:[{name:"handleClick",docblock:null,modifiers:[],params:[{name:"i",type:null}],returns:null},{name:"jumpTo",docblock:null,modifiers:[],params:[{name:"step",type:null}],returns:null}],displayName:"Game"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Game.jsx"]={name:"Game",docgenInfo:Game.__docgenInfo,path:"src/Game.jsx"});var Game_stories={title:"Game",component:Game},Default=function Template(args){return(0,jsx_runtime.jsx)(Game,(0,objectSpread2.Z)({},args))}.bind({});Default.parameters=(0,objectSpread2.Z)({storySource:{source:"args => <Game {...args} />"}},Default.parameters);var __namedExportsOrder=["Default"]},"./src/stories/Square.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Circle:function(){return Circle},Cross:function(){return Cross},Default:function(){return Default},Triangle:function(){return Triangle},__namedExportsOrder:function(){return __namedExportsOrder}});var _home_parallels_workspace_praha_challenge_testing_my_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Square__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/Square.jsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Square",component:_Square__WEBPACK_IMPORTED_MODULE_1__.Z};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Square__WEBPACK_IMPORTED_MODULE_1__.Z,(0,_home_parallels_workspace_praha_challenge_testing_my_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},args))},Default=Template.bind({});Default.args={value:null};var Cross=Template.bind({});Cross.args={value:"X"};var Circle=Template.bind({});Circle.args={value:"O"};var Triangle=Template.bind({});Triangle.args={value:"△"},Default.parameters=(0,_home_parallels_workspace_praha_challenge_testing_my_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:"args => <Square {...args} />"}},Default.parameters),Cross.parameters=(0,_home_parallels_workspace_praha_challenge_testing_my_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:"args => <Square {...args} />"}},Cross.parameters),Circle.parameters=(0,_home_parallels_workspace_praha_challenge_testing_my_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:"args => <Square {...args} />"}},Circle.parameters),Triangle.parameters=(0,_home_parallels_workspace_praha_challenge_testing_my_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:"args => <Square {...args} />"}},Triangle.parameters);var __namedExportsOrder=["Default","Cross","Circle","Triangle"]},"./.storybook/preview.js-generated-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:function(){return __namedExportsOrder},parameters:function(){return parameters}});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},__namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src/Board.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return Board}});var _home_parallels_workspace_praha_challenge_testing_my_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_parallels_workspace_praha_challenge_testing_my_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_parallels_workspace_praha_challenge_testing_my_app_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),_home_parallels_workspace_praha_challenge_testing_my_app_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createSuper.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Square__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Square.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/index.css"),__webpack_require__("./node_modules/react/jsx-runtime.js")),Board=function(_React$Component){(0,_home_parallels_workspace_praha_challenge_testing_my_app_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__.Z)(Board,_React$Component);var _super=(0,_home_parallels_workspace_praha_challenge_testing_my_app_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__.Z)(Board);function Board(){return(0,_home_parallels_workspace_praha_challenge_testing_my_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__.Z)(this,Board),_super.apply(this,arguments)}return(0,_home_parallels_workspace_praha_challenge_testing_my_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__.Z)(Board,[{key:"renderSquare",value:function renderSquare(i){var _this=this;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Square__WEBPACK_IMPORTED_MODULE_1__.Z,{value:this.props.squares[i],onClick:function onClick(){return _this.props.onClick(i)},index:i})}},{key:"render",value:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),Board}(react__WEBPACK_IMPORTED_MODULE_0__.Component);Board.__docgenInfo={description:"",methods:[{name:"renderSquare",docblock:null,modifiers:[],params:[{name:"i",type:null}],returns:null}],displayName:"Board"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Board.jsx"]={name:"Board",docgenInfo:Board.__docgenInfo,path:"src/Board.jsx"})},"./src/Square.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return Square}});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/index.css");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Square(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"square",onClick:props.onClick,style:{color:"red"},"data-e2e":"square-index-".concat(props.index),children:props.value})}Square.__docgenInfo={description:"",methods:[],displayName:"Square"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Square.jsx"]={name:"Square",docgenInfo:Square.__docgenInfo,path:"src/Square.jsx"})},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./stories/Board.stories.jsx":"./src/stories/Board.stories.jsx","./stories/Game.stories.jsx":"./src/stories/Game.stories.jsx","./stories/Square.stories.jsx":"./src/stories/Square.stories.jsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"./storybook-init-framework-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":function(){},"./generated-stories-entry.cjs":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[748],(function(){return __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs")}));__webpack_require__.O()}]);