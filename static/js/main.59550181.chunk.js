(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){},16:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var c=i(6),a=i.n(c),s=(i(13),i(8)),n=i(2),r=i(1),l=(i(14),i(15),i(16),i(0)),d=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},o=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(d,{movie:e},e.imdbId)}))})},j=(i(18),i(7)),m=i.n(j);var b=function(e){var t=e.addMovieToList,i=Object(r.useState)({}),c=Object(n.a)(i,2),a=c[0],s=c[1],o=Object(r.useState)(""),j=Object(n.a)(o,2),b=j[0],u=j[1],h=Object(r.useState)(!1),v=Object(n.a)(h,2),O=v[0],x=v[1],f=Object(r.useState)(!1),p=Object(n.a)(f,2),N=p[0],g=p[1],y=function(){g(!0),function(e){return fetch("".concat(" http://www.omdbapi.com/?i=tt3896198&apikey=4073d7","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}(b).then((function(e){if("Error"in e&&x(!0),"Title"in e){var t={title:e.Title,description:e.Plot,imgUrl:"N/A"===e.Poster?"https://via.placeholder.com/360x270.png?text=no%20preview":e.Poster,imdbUrl:"https://www.imdb.com/title/".concat(e.imdbID),imdbId:e.imdbID};s(t)}})).finally((function(){g(!1)}))};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),y()},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input ".concat(O?"is-danger":""),value:b,onChange:function(e){u(e.target.value),x(!1)}})}),O&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(l.jsx)("div",{className:"field is-grouped",children:Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"searchButton",type:"submit",className:m()("button","is-light",{"is-loading":N}),disabled:!b,children:a.title?"Search again":"Find a movie"})})}),Object(l.jsx)("div",{className:"contol",children:a.title&&Object(l.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){t(a),s({}),u("")},children:"Add to the list"})})]}),a.title&&Object(l.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(d,{movie:a})]})]})},u=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),i=t[0],c=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(o,{movies:i})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(b,{addMovieToList:function(e){i.some((function(t){return t.imdbId===e.imdbId}))||c([].concat(Object(s.a)(i),[e]))}})})]})};a.a.render(Object(l.jsx)(u,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.59550181.chunk.js.map