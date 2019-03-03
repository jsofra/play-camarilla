// Compiled by ClojureScript 1.10.516 {}
goog.provide('camarilla.ui');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('camarilla.gapi_auth');
goog.require('camarilla.db');
goog.require('camarilla.data');
cljs.core.enable_console_print_BANG_.call(null);
camarilla.ui.corner = (function camarilla$ui$corner(style,body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.float-left","div.float-left",-1633203932),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"2em",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px"], null),style)], null),body], null);
});
camarilla.ui.card = (function camarilla$ui$card(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13438 = arguments.length;
var i__4731__auto___13439 = (0);
while(true){
if((i__4731__auto___13439 < len__4730__auto___13438)){
args__4736__auto__.push((arguments[i__4731__auto___13439]));

var G__13440 = (i__4731__auto___13439 + (1));
i__4731__auto___13439 = G__13440;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return camarilla.ui.card.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

camarilla.ui.card.cljs$core$IFn$_invoke$arity$variadic = (function (attr,corner,title,text,p__13434){
var vec__13435 = p__13434;
var footer = cljs.core.nth.call(null,vec__13435,(0),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),cljs.core.merge_with.call(null,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"11em",new cljs.core.Keyword(null,"height","height",1025178622),"12em"], null)], null),attr),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body","div.card-body",1538579065),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"4px",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"2px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-title.text-center","div.card-title.text-center",46974253),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"5px"], null)], null),corner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"'Open Sans Condensed', sans-serif",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),title], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"'Open Sans Condensed', sans-serif",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),text], null)], null),(cljs.core.truth_(footer)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-footer","div.card-footer",1034080687),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"2px"], null)], null),footer], null):null)], null);
});

camarilla.ui.card.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
camarilla.ui.card.cljs$lang$applyTo = (function (seq13429){
var G__13430 = cljs.core.first.call(null,seq13429);
var seq13429__$1 = cljs.core.next.call(null,seq13429);
var G__13431 = cljs.core.first.call(null,seq13429__$1);
var seq13429__$2 = cljs.core.next.call(null,seq13429__$1);
var G__13432 = cljs.core.first.call(null,seq13429__$2);
var seq13429__$3 = cljs.core.next.call(null,seq13429__$2);
var G__13433 = cljs.core.first.call(null,seq13429__$3);
var seq13429__$4 = cljs.core.next.call(null,seq13429__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13430,G__13431,G__13432,G__13433,seq13429__$4);
});

camarilla.ui.action_card = (function camarilla$ui$action_card(style,p__13441,p__13442){
var map__13443 = p__13441;
var map__13443__$1 = (((((!((map__13443 == null))))?(((((map__13443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13443):map__13443);
var name = cljs.core.get.call(null,map__13443__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var piety_cost = cljs.core.get.call(null,map__13443__$1,new cljs.core.Keyword(null,"piety-cost","piety-cost",-1725330701));
var effect_text = cljs.core.get.call(null,map__13443__$1,new cljs.core.Keyword(null,"effect-text","effect-text",1647605793));
var cost_icon = cljs.core.get.call(null,map__13443__$1,new cljs.core.Keyword(null,"cost-icon","cost-icon",554401246));
var idx = cljs.core.get.call(null,map__13443__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var played = cljs.core.get.call(null,map__13443__$1,new cljs.core.Keyword(null,"played","played",-1713723590));
var map__13444 = p__13442;
var map__13444__$1 = (((((!((map__13444 == null))))?(((((map__13444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13444):map__13444);
var turn = cljs.core.get.call(null,map__13444__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var dir = cljs.core.get.call(null,map__13444__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [camarilla.ui.card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(played)?"#e6e6e6":"#cceeff")], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [camarilla.ui.corner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#ffffff"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),piety_cost], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px"], null)], null),cost_icon], null)], null)], null),name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",-1445267512),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#ffffff"], null)], null),effect_text], null)], null),(cljs.core.truth_((function (){var and__4120__auto__ = turn;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,played);
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-group","div.btn-group",1563487258),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-secondary","button.btn.btn-secondary",-2100184270),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__13443,map__13443__$1,name,piety_cost,effect_text,cost_icon,idx,played,map__13444,map__13444__$1,turn,dir){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("action","play","action/play",-2143749148),idx], null));
});})(map__13443,map__13443__$1,name,piety_cost,effect_text,cost_icon,idx,played,map__13444,map__13444__$1,turn,dir))
], null),"Play!"], null)], null):null)], null);
});
camarilla.ui.move_card_btns = (function camarilla$ui$move_card_btns(from_path,idx,type){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-group","div.btn-group",1563487258),(function (){var iter__4523__auto__ = (function camarilla$ui$move_card_btns_$_iter__13447(s__13448){
return (new cljs.core.LazySeq(null,(function (){
var s__13448__$1 = s__13448;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__13448__$1);
if(temp__5720__auto__){
var s__13448__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13448__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__13448__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__13450 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__13449 = (0);
while(true){
if((i__13449 < size__4522__auto__)){
var vec__13451 = cljs.core._nth.call(null,c__4521__auto__,i__13449);
var to_path = cljs.core.nth.call(null,vec__13451,(0),null);
var label = cljs.core.nth.call(null,vec__13451,(1),null);
if(cljs.core.not_EQ_.call(null,to_path,from_path)){
cljs.core.chunk_append.call(null,b__13450,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-light","button.btn.btn-light",-1832046595),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__13449,s__13448__$1,vec__13451,to_path,label,c__4521__auto__,size__4522__auto__,b__13450,s__13448__$2,temp__5720__auto__){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("table","move-card","table/move-card",455981103),cljs.core.conj.call(null,from_path,type),idx,cljs.core.conj.call(null,to_path,type)], null));
});})(i__13449,s__13448__$1,vec__13451,to_path,label,c__4521__auto__,size__4522__auto__,b__13450,s__13448__$2,temp__5720__auto__))
], null),cljs.core.name.call(null,label)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_path,to_path,idx,type,cljs.core.rand.call(null)], null)], null)));

var G__13457 = (i__13449 + (1));
i__13449 = G__13457;
continue;
} else {
var G__13458 = (i__13449 + (1));
i__13449 = G__13458;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13450),camarilla$ui$move_card_btns_$_iter__13447.call(null,cljs.core.chunk_rest.call(null,s__13448__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13450),null);
}
} else {
var vec__13454 = cljs.core.first.call(null,s__13448__$2);
var to_path = cljs.core.nth.call(null,vec__13454,(0),null);
var label = cljs.core.nth.call(null,vec__13454,(1),null);
if(cljs.core.not_EQ_.call(null,to_path,from_path)){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-light","button.btn.btn-light",-1832046595),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__13448__$1,vec__13454,to_path,label,s__13448__$2,temp__5720__auto__){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("table","move-card","table/move-card",455981103),cljs.core.conj.call(null,from_path,type),idx,cljs.core.conj.call(null,to_path,type)], null));
});})(s__13448__$1,vec__13454,to_path,label,s__13448__$2,temp__5720__auto__))
], null),cljs.core.name.call(null,label)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_path,to_path,idx,type,cljs.core.rand.call(null)], null)], null)),camarilla$ui$move_card_btns_$_iter__13447.call(null,cljs.core.rest.call(null,s__13448__$2)));
} else {
var G__13459 = cljs.core.rest.call(null,s__13448__$2);
s__13448__$1 = G__13459;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"W","W",-2035370425)], null),new cljs.core.Keyword(null,"W","W",-2035370425)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"N","N",-640629860)], null),new cljs.core.Keyword(null,"N","N",-640629860)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"S","S",1267293308)], null),new cljs.core.Keyword(null,"S","S",1267293308)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"E","E",230849842)], null),new cljs.core.Keyword(null,"E","E",230849842)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kings-domain","kings-domain",1340864154)], null),"\uD83D\uDC51"], null)], null));
})()], null);
});
camarilla.ui.military_card = (function camarilla$ui$military_card(style,p__13460,p__13461){
var map__13462 = p__13460;
var map__13462__$1 = (((((!((map__13462 == null))))?(((((map__13462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13462):map__13462);
var name = cljs.core.get.call(null,map__13462__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var power = cljs.core.get.call(null,map__13462__$1,new cljs.core.Keyword(null,"power","power",-937852079));
var icon = cljs.core.get.call(null,map__13462__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var idx = cljs.core.get.call(null,map__13462__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var map__13463 = p__13461;
var map__13463__$1 = (((((!((map__13463 == null))))?(((((map__13463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13463):map__13463);
var dir = cljs.core.get.call(null,map__13463__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [camarilla.ui.card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#ffcccc"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [camarilla.ui.corner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#cc0000",new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),power], null)], null),name,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"62px"], null)], null),icon], null),camarilla.ui.move_card_btns.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),dir], null),idx,new cljs.core.Keyword(null,"militarycards","militarycards",902950542))], null);
});
camarilla.ui.piety_card = (function camarilla$ui$piety_card(style,p__13466,p__13467){
var map__13468 = p__13466;
var map__13468__$1 = (((((!((map__13468 == null))))?(((((map__13468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13468):map__13468);
var name = cljs.core.get.call(null,map__13468__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var icon = cljs.core.get.call(null,map__13468__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var idx = cljs.core.get.call(null,map__13468__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var map__13469 = p__13467;
var map__13469__$1 = (((((!((map__13469 == null))))?(((((map__13469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13469):map__13469);
var dir = cljs.core.get.call(null,map__13469__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [camarilla.ui.card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#ffffe6"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [camarilla.ui.corner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#ffffff"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),"1"], null)], null),name,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"62px"], null)], null),icon], null),camarilla.ui.move_card_btns.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),dir], null),idx,new cljs.core.Keyword(null,"pietycards","pietycards",501426707))], null);
});
camarilla.ui.land_card = (function camarilla$ui$land_card(style,p__13472,p__13473){
var map__13474 = p__13472;
var map__13474__$1 = (((((!((map__13474 == null))))?(((((map__13474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13474):map__13474);
var name = cljs.core.get.call(null,map__13474__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var icon = cljs.core.get.call(null,map__13474__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var idx = cljs.core.get.call(null,map__13474__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var map__13475 = p__13473;
var map__13475__$1 = (((((!((map__13475 == null))))?(((((map__13475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13475):map__13475);
var dir = cljs.core.get.call(null,map__13475__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [camarilla.ui.card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#adebad"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [camarilla.ui.corner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#2db92d",new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),"1"], null)], null),name,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"62px"], null)], null),icon], null),camarilla.ui.move_card_btns.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),dir], null),idx,new cljs.core.Keyword(null,"landcards","landcards",-147963932))], null);
});
camarilla.ui.title_card = (function camarilla$ui$title_card(style,p__13478,_){
var map__13479 = p__13478;
var map__13479__$1 = (((((!((map__13479 == null))))?(((((map__13479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13479):map__13479);
var name = cljs.core.get.call(null,map__13479__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var advantage = cljs.core.get.call(null,map__13479__$1,new cljs.core.Keyword(null,"advantage","advantage",1383686497));
var disadvantage = cljs.core.get.call(null,map__13479__$1,new cljs.core.Keyword(null,"disadvantage","disadvantage",-788807798));
var icon = cljs.core.get.call(null,map__13479__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [camarilla.ui.card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#e6ccff"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [camarilla.ui.corner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#d24dff",new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),icon], null)], null),name,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",-1445267512),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#ffffe6"], null)], null),advantage], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#ffcccc"], null)], null),disadvantage], null)], null)], null);
});
camarilla.ui.law_card = (function camarilla$ui$law_card(style,p__13481,_){
var map__13482 = p__13481;
var map__13482__$1 = (((((!((map__13482 == null))))?(((((map__13482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13482):map__13482);
var name = cljs.core.get.call(null,map__13482__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var law_name = cljs.core.get.call(null,map__13482__$1,new cljs.core.Keyword(null,"law-name","law-name",-1689914911));
var text = cljs.core.get.call(null,map__13482__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var side = cljs.core.get.call(null,map__13482__$1,new cljs.core.Keyword(null,"side","side",389652279));
var targets = cljs.core.get.call(null,map__13482__$1,new cljs.core.Keyword(null,"targets","targets",2014963406));
var type = cljs.core.get.call(null,map__13482__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var vec__13484 = ((cljs.core._EQ_.call(null,side,"a"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#ff6633","#ffffff","#ff9f80"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#ffff33","#000000","#ffffb3"], null));
var corner_background = cljs.core.nth.call(null,vec__13484,(0),null);
var corner_color = cljs.core.nth.call(null,vec__13484,(1),null);
var card_background = cljs.core.nth.call(null,vec__13484,(2),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [camarilla.ui.card,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),card_background], null)),new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (vec__13484,corner_background,corner_color,card_background,map__13482,map__13482__$1,name,law_name,text,side,targets,type){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kings-domain","flip-law","kings-domain/flip-law",-1849578451),type], null));
});})(vec__13484,corner_background,corner_color,card_background,map__13482,map__13482__$1,name,law_name,text,side,targets,type))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [camarilla.ui.corner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),corner_background,new cljs.core.Keyword(null,"color","color",1011675173),corner_color], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),side], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," \uD83D\uDD04"].join(''),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",-1445267512),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1px",new cljs.core.Keyword(null,"background-color","background-color",570434026),corner_background,new cljs.core.Keyword(null,"color","color",1011675173),corner_color], null)], null),law_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#ffffff"], null)], null),text], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#ffffcc"], null)], null),["targets: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(targets)].join('')], null)], null)], null);
});
camarilla.ui.action_cards_pile = (function camarilla$ui$action_cards_pile(cards,discards){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [camarilla.ui.card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#cceeff"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [camarilla.ui.corner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#0066ff",new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),cljs.core.count.call(null,cards)], null)], null),"Action Cards",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.column","div.container.column",1420011229),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"62px"], null)], null),"\u26A1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("active-player","take-action-card","active-player/take-action-card",-787429424)], null));
})], null),"Take a card"], null)], null),["# played - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,discards))].join('')], null);
});
camarilla.ui.land_cards_pile = (function camarilla$ui$land_cards_pile(cards){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [camarilla.ui.card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#adebad"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [camarilla.ui.corner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#2db92d",new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),cljs.core.count.call(null,cards)], null)], null),"Land Cards",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"62px"], null)], null),"\uD83C\uDF3E"], null),camarilla.ui.move_card_btns.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kings-domain","kings-domain",1340864154)], null),(0),new cljs.core.Keyword(null,"landcards","landcards",-147963932))], null);
});
camarilla.ui.military_cards_pile = (function camarilla$ui$military_cards_pile(cards){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [camarilla.ui.card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#ffcccc"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [camarilla.ui.corner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#cc0000",new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),cljs.core.count.call(null,cards)], null)], null),"Military Cards",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"62px"], null)], null),"\uD83C\uDF96"], null),camarilla.ui.move_card_btns.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kings-domain","kings-domain",1340864154)], null),(0),new cljs.core.Keyword(null,"militarycards","militarycards",902950542))], null);
});
camarilla.ui.cards = (function camarilla$ui$cards(style,source,card_comp,type){
if(cljs.core.truth_(source)){
var iter__4523__auto__ = (function camarilla$ui$cards_$_iter__13487(s__13488){
return (new cljs.core.LazySeq(null,(function (){
var s__13488__$1 = s__13488;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__13488__$1);
if(temp__5720__auto__){
var s__13488__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13488__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__13488__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__13490 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__13489 = (0);
while(true){
if((i__13489 < size__4522__auto__)){
var vec__13491 = cljs.core._nth.call(null,c__4521__auto__,i__13489);
var i = cljs.core.nth.call(null,vec__13491,(0),null);
var card = cljs.core.nth.call(null,vec__13491,(1),null);
cljs.core.chunk_append.call(null,b__13490,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [card_comp,style,cljs.core.assoc.call(null,card,new cljs.core.Keyword(null,"idx","idx",1053688473),i),source], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(source);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "kings-domain";
}
})())].join('')], null)));

var G__13497 = (i__13489 + (1));
i__13489 = G__13497;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13490),camarilla$ui$cards_$_iter__13487.call(null,cljs.core.chunk_rest.call(null,s__13488__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13490),null);
}
} else {
var vec__13494 = cljs.core.first.call(null,s__13488__$2);
var i = cljs.core.nth.call(null,vec__13494,(0),null);
var card = cljs.core.nth.call(null,vec__13494,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [card_comp,style,cljs.core.assoc.call(null,card,new cljs.core.Keyword(null,"idx","idx",1053688473),i),source], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(source);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "kings-domain";
}
})())].join('')], null)),camarilla$ui$cards_$_iter__13487.call(null,cljs.core.rest.call(null,s__13488__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.get.call(null,source,type)));
} else {
return null;
}
});
camarilla.ui.hand = (function camarilla$ui$hand(style,player){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),camarilla.ui.cards.call(null,style,player,camarilla.ui.piety_card,new cljs.core.Keyword(null,"pietycards","pietycards",501426707)),camarilla.ui.cards.call(null,style,player,camarilla.ui.land_card,new cljs.core.Keyword(null,"landcards","landcards",-147963932)),camarilla.ui.cards.call(null,style,player,camarilla.ui.military_card,new cljs.core.Keyword(null,"militarycards","militarycards",902950542)),camarilla.ui.cards.call(null,style,player,camarilla.ui.action_card,new cljs.core.Keyword(null,"actioncards","actioncards",-2013329382)),camarilla.ui.cards.call(null,style,player,camarilla.ui.title_card,new cljs.core.Keyword(null,"titlecards","titlecards",-1221765024))], null);
});
camarilla.ui.hand_h = (function camarilla$ui$hand_h(player){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [camarilla.ui.hand,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"-8em"], null),player], null);
});
camarilla.ui.hand_v = (function camarilla$ui$hand_v(player){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [camarilla.ui.hand,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"-10em"], null),player], null);
});
camarilla.ui.table = (function camarilla$ui$table(){
var map__13498 = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","table","game/table",-563874954)], null)));
var map__13498__$1 = (((((!((map__13498 == null))))?(((((map__13498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13498):map__13498);
var contents = map__13498__$1;
var map__13499 = cljs.core.get.call(null,map__13498__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
var map__13499__$1 = (((((!((map__13499 == null))))?(((((map__13499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13499):map__13499);
var N = cljs.core.get.call(null,map__13499__$1,new cljs.core.Keyword(null,"N","N",-640629860));
var S = cljs.core.get.call(null,map__13499__$1,new cljs.core.Keyword(null,"S","S",1267293308));
var E = cljs.core.get.call(null,map__13499__$1,new cljs.core.Keyword(null,"E","E",230849842));
var W = cljs.core.get.call(null,map__13499__$1,new cljs.core.Keyword(null,"W","W",-2035370425));
var map__13500 = cljs.core.get.call(null,map__13498__$1,new cljs.core.Keyword(null,"kings-domain","kings-domain",1340864154));
var map__13500__$1 = (((((!((map__13500 == null))))?(((((map__13500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13500):map__13500);
var kings_domain = map__13500__$1;
var actioncards = cljs.core.get.call(null,map__13500__$1,new cljs.core.Keyword(null,"actioncards","actioncards",-2013329382));
var lawcards = cljs.core.get.call(null,map__13500__$1,new cljs.core.Keyword(null,"lawcards","lawcards",1643536535));
var titlecards = cljs.core.get.call(null,map__13500__$1,new cljs.core.Keyword(null,"titlecards","titlecards",-1221765024));
var landcards = cljs.core.get.call(null,map__13500__$1,new cljs.core.Keyword(null,"landcards","landcards",-147963932));
var militarycards = cljs.core.get.call(null,map__13500__$1,new cljs.core.Keyword(null,"militarycards","militarycards",902950542));
var discarded_actions = cljs.core.get.call(null,map__13500__$1,new cljs.core.Keyword(null,"discarded-actions","discarded-actions",-843821114));
var non_turn_opacity = "0.4";
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1.h-100.d-flex.justify-content-between","div.mt-1.h-100.d-flex.justify-content-between",1510088831),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.align-self-center","div.align-self-center",581978768),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.d-flex.align-items-center","div.d-flex.align-items-center",-1526073083),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"writing-mode","writing-mode",-1707110905),"vertical-rl",new cljs.core.Keyword(null,"text-orientation","text-orientation",561880685),"upright"], null)], null),"West"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-deck.flex-column.text-center","div.card-deck.flex-column.text-center",299854448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"50%",new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(W))?"1.0":non_turn_opacity)], null)], null),camarilla.ui.hand_v.call(null,W)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.d-flex.flex-column","div.d-flex.flex-column",1567796796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-auto.text-center","div.mb-auto.text-center",288592796),"North",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.d-flex.justify-content-center","div.d-flex.justify-content-center",1785182291),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(N))?"1.0":non_turn_opacity)], null)], null),camarilla.ui.hand_h.call(null,N)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-center","div.text-center",921869624),"King's Domain \uD83D\uDC51",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-info","button.btn.btn-info",-749622712),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__13498,map__13498__$1,contents,map__13499,map__13499__$1,N,S,E,W,map__13500,map__13500__$1,kings_domain,actioncards,lawcards,titlecards,landcards,militarycards,discarded_actions,non_turn_opacity){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("table","shuffle-titles","table/shuffle-titles",803549697)], null));
});})(map__13498,map__13498__$1,contents,map__13499,map__13499__$1,N,S,E,W,map__13500,map__13500__$1,kings_domain,actioncards,lawcards,titlecards,landcards,militarycards,discarded_actions,non_turn_opacity))
], null),"Shuffle Titles"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-success","button.btn.btn-success",574341715),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__13498,map__13498__$1,contents,map__13499,map__13499__$1,N,S,E,W,map__13500,map__13500__$1,kings_domain,actioncards,lawcards,titlecards,landcards,militarycards,discarded_actions,non_turn_opacity){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("table","next-turn","table/next-turn",-366521210)], null));
});})(map__13498,map__13498__$1,contents,map__13499,map__13499__$1,N,S,E,W,map__13500,map__13500__$1,kings_domain,actioncards,lawcards,titlecards,landcards,militarycards,discarded_actions,non_turn_opacity))
], null),"End Turn"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.row","span.row",251881359),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0px"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [camarilla.ui.action_cards_pile,actioncards,discarded_actions], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [camarilla.ui.land_cards_pile,landcards], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [camarilla.ui.military_cards_pile,militarycards], null),camarilla.ui.cards.call(null,cljs.core.PersistentArrayMap.EMPTY,kings_domain,camarilla.ui.title_card,new cljs.core.Keyword(null,"titlecards","titlecards",-1221765024))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0px"], null)], null),camarilla.ui.cards.call(null,cljs.core.PersistentArrayMap.EMPTY,kings_domain,camarilla.ui.law_card,new cljs.core.Keyword(null,"lawcards","lawcards",1643536535))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-auto.text-center","div.mt-auto.text-center",96520711),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.d-flex.justify-content-center","div.d-flex.justify-content-center",1785182291),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(S))?"1.0":non_turn_opacity)], null)], null),camarilla.ui.hand_h.call(null,S)], null),"South"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.align-self-center","div.align-self-center",581978768),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.d-flex.align-items-center","div.d-flex.align-items-center",-1526073083),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-deck.flex-column.text-center","div.card-deck.flex-column.text-center",299854448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"50%",new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(E))?"1.0":non_turn_opacity)], null)], null),camarilla.ui.hand_v.call(null,E)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"writing-mode","writing-mode",-1707110905),"vertical-rl",new cljs.core.Keyword(null,"text-orientation","text-orientation",561880685),"upright"], null)], null),"East"], null)], null)], null)], null);
});
camarilla.ui.re_render = (function camarilla$ui$re_render(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.h-100","div.h-100",1804561247),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fixed-top","div.fixed-top",1244327641),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [camarilla.gapi_auth.google_auth], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [camarilla.ui.table], null)], null),document.getElementById("app"));
});
camarilla.ui.init = (function camarilla$ui$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("camarilla.db","initialize","camarilla.db/initialize",-1651256219)], null));

return camarilla.ui.re_render.call(null);
});
goog.exportSymbol('camarilla.ui.init', camarilla.ui.init);
if((typeof camarilla !== 'undefined') && (typeof camarilla.ui !== 'undefined') && (typeof camarilla.ui.start_up !== 'undefined')){
} else {
camarilla.ui.start_up = (function (){
camarilla.ui.init.call(null);

return true;
})()
;
}
