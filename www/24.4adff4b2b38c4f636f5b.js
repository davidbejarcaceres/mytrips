(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{cVvZ:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=u("mrSG"),e=u("yTNM"),i=u("S+eF"),b=function(){function l(l,n){this.apiService=l,this.router=n}return l.prototype.getTravelers=function(){var l=this;this.apiService.getTravelers().subscribe(function(n){return o.b(l,void 0,void 0,function(){return o.e(this,function(l){switch(l.label){case 0:return[4,Object(i.delay)(1500)];case 1:return l.sent(),console.log(n),this.travelers=n,[2]}})})})},l.prototype.goHome=function(){console.log("BACK!"),this.router.navigateByUrl("tabs/tab1")},l.prototype.ngOnInit=function(){},l.prototype.ionViewWillEnter=function(){this.getTravelers()},l}(),r=function(){return function(){}}(),c=u("pMnS"),a=u("oBZk"),p=u("ZZ/e"),f=u("ZYCi"),d=u("Ip0R"),s=t.nb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:10vh;overflow:hidden}.welcome-card[_ngcontent-%COMP%]{background-color:#fff}.card-manager[_ngcontent-%COMP%]{background-color:#3171e0;color:#fff}.form-input[_ngcontent-%COMP%]{background-color:#3171e0;color:#202020;--ion-background-color:#fff}.card-manager[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{background-color:#3171e0;color:#fff;font-weight:700}button[_ngcontent-%COMP%]   ion-ripple-effect[_ngcontent-%COMP%], button[_ngcontent-%COMP%] > ion-ripple-effect[_ngcontent-%COMP%]{color:#3ae1f7;--ripple-color:#3ae1f7}ion-list[_ngcontent-%COMP%]{--ion-background-color:#fff}.ion-item-border[_ngcontent-%COMP%]{border-radius:10px!important;padding:5px 10px}.ion-item-border[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{border-radius:15px!important;padding-left:10px;padding-right:10px}.footer-dbc770[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{color:#d2d2d2e0;font-size:small}.ion-img[_ngcontent-%COMP%]{visibility:hidden}.full-image[_ngcontent-%COMP%]{background-color:#0ff;width:50%;height:50%;align-content:flex-end;align-items:center}"]],data:{}});function g(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,16,"ion-item",[["button",""],["routerDirection","forward"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.zb(l,2).onClick()&&o),"click"===n&&(o=!1!==t.zb(l,4).onClick(u)&&o),o},a.Y,a.t)),t.ob(1,49152,null,0,p.F,[t.h,t.k],{button:[0,"button"],routerDirection:[1,"routerDirection"]},null),t.ob(2,16384,null,0,f.n,[f.m,f.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(3,2),t.ob(4,737280,null,0,p.Ib,[d.g,p.Eb,t.k,f.m,[2,f.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),t.pb(5,0,null,0,1,"ion-ripple-effect",[],null,null,null,a.cb,a.x)),t.ob(6,49152,null,0,p.eb,[t.h,t.k],null,null),(l()(),t.pb(7,0,null,0,1,"ion-icon",[["name","airplane"],["slot","start"]],null,null,null,a.V,a.q)),t.ob(8,49152,null,0,p.A,[t.h,t.k],{name:[0,"name"]},null),(l()(),t.pb(9,0,null,0,1,"ion-icon",[["name","create"],["slot","end"]],null,null,null,a.V,a.q)),t.ob(10,49152,null,0,p.A,[t.h,t.k],{name:[0,"name"]},null),(l()(),t.pb(11,0,null,0,5,"ion-label",[],null,null,null,a.Z,a.u)),t.ob(12,49152,null,0,p.L,[t.h,t.k],null,null),(l()(),t.pb(13,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),t.Eb(14,null,["",""])),(l()(),t.pb(15,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),t.Eb(16,null,["",""]))],function(l,n){l(n,1,0,"","forward");var u=l(n,3,0,"edit-traveler",n.context.$implicit);l(n,2,0,u),l(n,4,0,"forward"),l(n,8,0,"airplane"),l(n,10,0,"create")},function(l,n){l(n,14,0,n.context.$implicit.firstname),l(n,16,0,n.context.$implicit.lastname)})}function h(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,3,"ion-list",[["class","ion-item-border"]],null,null,null,a.bb,a.v)),t.ob(1,49152,null,0,p.M,[t.h,t.k],null,null),(l()(),t.gb(16777216,null,0,1,null,g)),t.ob(3,278528,null,0,d.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,3,0,n.component.travelers)},null)}function k(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,19,"ion-item",[["button",""]],null,null,null,a.Y,a.t)),t.ob(1,49152,null,0,p.F,[t.h,t.k],{button:[0,"button"]},null),(l()(),t.pb(2,0,null,0,1,"ion-ripple-effect",[],null,null,null,a.cb,a.x)),t.ob(3,49152,null,0,p.eb,[t.h,t.k],null,null),(l()(),t.pb(4,0,null,0,3,"ion-avatar",[["slot","start"]],null,null,null,a.G,a.b)),t.ob(5,49152,null,0,p.d,[t.h,t.k],null,null),(l()(),t.pb(6,0,null,0,1,"ion-skeleton-text",[["animated",""]],null,null,null,a.eb,a.z)),t.ob(7,49152,null,0,p.mb,[t.h,t.k],{animated:[0,"animated"]},null),(l()(),t.pb(8,0,null,0,3,"ion-avatar",[["slot","end"]],null,null,null,a.G,a.b)),t.ob(9,49152,null,0,p.d,[t.h,t.k],null,null),(l()(),t.pb(10,0,null,0,1,"ion-skeleton-text",[["animated",""]],null,null,null,a.eb,a.z)),t.ob(11,49152,null,0,p.mb,[t.h,t.k],{animated:[0,"animated"]},null),(l()(),t.pb(12,0,null,0,7,"ion-label",[],null,null,null,a.Z,a.u)),t.ob(13,49152,null,0,p.L,[t.h,t.k],null,null),(l()(),t.pb(14,0,null,0,2,"h2",[],null,null,null,null,null)),(l()(),t.pb(15,0,null,null,1,"ion-skeleton-text",[["width","10%"]],null,null,null,a.eb,a.z)),t.ob(16,49152,null,0,p.mb,[t.h,t.k],{width:[0,"width"]},null),(l()(),t.pb(17,0,null,0,2,"h2",[],null,null,null,null,null)),(l()(),t.pb(18,0,null,null,1,"ion-skeleton-text",[["width","10%"]],null,null,null,a.eb,a.z)),t.ob(19,49152,null,0,p.mb,[t.h,t.k],{width:[0,"width"]},null)],function(l,n){l(n,1,0,""),l(n,7,0,""),l(n,11,0,""),l(n,16,0,"10%"),l(n,19,0,"10%")},null)}function m(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,4,"ion-list",[["class","ion-item-border"]],null,null,null,a.bb,a.v)),t.ob(1,49152,null,0,p.M,[t.h,t.k],null,null),(l()(),t.gb(16777216,null,0,2,null,k)),t.ob(3,278528,null,0,d.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),t.Ab(4,6)],function(l,n){var u=l(n,4,0,1,2,3,4,5,6);l(n,3,0,u)},null)}function x(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,13,"ion-header",[],null,null,null,a.U,a.p)),t.ob(1,49152,null,0,p.z,[t.h,t.k],null,null),(l()(),t.pb(2,0,null,0,11,"ion-toolbar",[],null,null,null,a.jb,a.E)),t.ob(3,49152,null,0,p.zb,[t.h,t.k],null,null),(l()(),t.pb(4,0,null,0,6,"ion-buttons",[["slot","start"]],null,null,null,a.J,a.e)),t.ob(5,49152,null,0,p.j,[t.h,t.k],null,null),(l()(),t.pb(6,0,null,0,4,"ion-back-button",[["defaultHref","tabs/tab1"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.zb(l,8).onClick(u)&&o),o},a.H,a.c)),t.ob(7,49152,null,0,p.e,[t.h,t.k],{defaultHref:[0,"defaultHref"]},null),t.ob(8,16384,null,0,p.f,[[2,p.fb],p.Eb],{defaultHref:[0,"defaultHref"]},null),(l()(),t.pb(9,0,null,0,1,"ion-ripple-effect",[["type","bounded"]],null,null,null,a.cb,a.x)),t.ob(10,49152,null,0,p.eb,[t.h,t.k],{type:[0,"type"]},null),(l()(),t.pb(11,0,null,0,2,"ion-title",[],null,null,null,a.ib,a.D)),t.ob(12,49152,null,0,p.xb,[t.h,t.k],null,null),(l()(),t.Eb(-1,0,["Manage travelers"])),(l()(),t.pb(14,0,null,null,7,"ion-content",[],null,null,null,a.R,a.m)),t.ob(15,49152,null,0,p.s,[t.h,t.k],null,null),(l()(),t.pb(16,0,null,0,5,"ion-grid",[["fixed",""]],null,null,null,a.T,a.o)),t.ob(17,49152,null,0,p.y,[t.h,t.k],{fixed:[0,"fixed"]},null),(l()(),t.gb(16777216,null,0,1,null,h)),t.ob(19,16384,null,0,d.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,m)),t.ob(21,16384,null,0,d.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(22,0,null,null,11,"ion-footer",[["class","footer-dbc770"]],null,null,null,a.S,a.n)),t.ob(23,49152,null,0,p.x,[t.h,t.k],null,null),(l()(),t.pb(24,0,null,0,9,"ion-toolbar",[],null,null,null,a.jb,a.E)),t.ob(25,49152,null,0,p.zb,[t.h,t.k],null,null),(l()(),t.pb(26,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,a.J,a.e)),t.ob(27,49152,null,0,p.j,[t.h,t.k],null,null),(l()(),t.pb(28,0,null,0,1,"ion-ripple-effect",[["type","bounded"]],null,null,null,a.cb,a.x)),t.ob(29,49152,null,0,p.eb,[t.h,t.k],{type:[0,"type"]},null),(l()(),t.pb(30,0,null,0,0,"img",[["button",""],["routerDirection","root"],["src","http://localhost:3000/res/images/contratipoHorizontal.png"],["width","100px"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.goHome()&&t),t},null,null)),(l()(),t.pb(31,0,null,0,2,"ion-title",[],null,null,null,a.ib,a.D)),t.ob(32,49152,null,0,p.xb,[t.h,t.k],null,null),(l()(),t.Eb(-1,0,["Developed by: David B\xe9jar C\xe1ceres 2019"]))],function(l,n){var u=n.component;l(n,7,0,"tabs/tab1"),l(n,8,0,"tabs/tab1"),l(n,10,0,"bounded"),l(n,17,0,""),l(n,19,0,u.travelers),l(n,21,0,!u.travelers),l(n,29,0,"bounded")},null)}function v(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"app-travelers",[],null,null,null,x,s)),t.ob(1,114688,null,0,b,[e.a,f.m],null,null)],function(l,n){l(n,1,0)},null)}var O=t.lb("app-travelers",b,v,{},{},[]),C=u("gIcY");u.d(n,"TravelersPageModuleNgFactory",function(){return M});var M=t.mb(r,[],function(l){return t.wb([t.xb(512,t.j,t.bb,[[8,[c.a,O]],[3,t.j],t.x]),t.xb(4608,d.k,d.j,[t.u,[2,d.q]]),t.xb(4608,C.o,C.o,[]),t.xb(4608,p.a,p.a,[t.z,t.g]),t.xb(4608,p.Db,p.Db,[p.a,t.j,t.q,d.c]),t.xb(4608,p.Hb,p.Hb,[p.a,t.j,t.q,d.c]),t.xb(1073742336,d.b,d.b,[]),t.xb(1073742336,C.m,C.m,[]),t.xb(1073742336,C.d,C.d,[]),t.xb(1073742336,p.Bb,p.Bb,[]),t.xb(1073742336,f.o,f.o,[[2,f.u],[2,f.m]]),t.xb(1073742336,r,r,[]),t.xb(1024,f.k,function(){return[[{path:"",component:b}]]},[])])})}}]);