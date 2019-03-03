// Compiled by ClojureScript 1.10.516 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__13006 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__13007 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__13007;

try{try{var seq__13008 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__13009 = null;
var count__13010 = (0);
var i__13011 = (0);
while(true){
if((i__13011 < count__13010)){
var vec__13018 = cljs.core._nth.call(null,chunk__13009,i__13011);
var effect_key = cljs.core.nth.call(null,vec__13018,(0),null);
var effect_value = cljs.core.nth.call(null,vec__13018,(1),null);
var temp__5718__auto___13040 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___13040)){
var effect_fn_13041 = temp__5718__auto___13040;
effect_fn_13041.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__13042 = seq__13008;
var G__13043 = chunk__13009;
var G__13044 = count__13010;
var G__13045 = (i__13011 + (1));
seq__13008 = G__13042;
chunk__13009 = G__13043;
count__13010 = G__13044;
i__13011 = G__13045;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__13008);
if(temp__5720__auto__){
var seq__13008__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13008__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__13008__$1);
var G__13046 = cljs.core.chunk_rest.call(null,seq__13008__$1);
var G__13047 = c__4550__auto__;
var G__13048 = cljs.core.count.call(null,c__4550__auto__);
var G__13049 = (0);
seq__13008 = G__13046;
chunk__13009 = G__13047;
count__13010 = G__13048;
i__13011 = G__13049;
continue;
} else {
var vec__13021 = cljs.core.first.call(null,seq__13008__$1);
var effect_key = cljs.core.nth.call(null,vec__13021,(0),null);
var effect_value = cljs.core.nth.call(null,vec__13021,(1),null);
var temp__5718__auto___13050 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___13050)){
var effect_fn_13051 = temp__5718__auto___13050;
effect_fn_13051.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__13052 = cljs.core.next.call(null,seq__13008__$1);
var G__13053 = null;
var G__13054 = (0);
var G__13055 = (0);
seq__13008 = G__13052;
chunk__13009 = G__13053;
count__13010 = G__13054;
i__13011 = G__13055;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__12835__auto___13056 = re_frame.interop.now.call(null);
var duration__12836__auto___13057 = (end__12835__auto___13056 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12836__auto___13057,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__12835__auto___13056);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__13006;
}} else {
var seq__13024 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__13025 = null;
var count__13026 = (0);
var i__13027 = (0);
while(true){
if((i__13027 < count__13026)){
var vec__13034 = cljs.core._nth.call(null,chunk__13025,i__13027);
var effect_key = cljs.core.nth.call(null,vec__13034,(0),null);
var effect_value = cljs.core.nth.call(null,vec__13034,(1),null);
var temp__5718__auto___13058 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___13058)){
var effect_fn_13059 = temp__5718__auto___13058;
effect_fn_13059.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__13060 = seq__13024;
var G__13061 = chunk__13025;
var G__13062 = count__13026;
var G__13063 = (i__13027 + (1));
seq__13024 = G__13060;
chunk__13025 = G__13061;
count__13026 = G__13062;
i__13027 = G__13063;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__13024);
if(temp__5720__auto__){
var seq__13024__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13024__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__13024__$1);
var G__13064 = cljs.core.chunk_rest.call(null,seq__13024__$1);
var G__13065 = c__4550__auto__;
var G__13066 = cljs.core.count.call(null,c__4550__auto__);
var G__13067 = (0);
seq__13024 = G__13064;
chunk__13025 = G__13065;
count__13026 = G__13066;
i__13027 = G__13067;
continue;
} else {
var vec__13037 = cljs.core.first.call(null,seq__13024__$1);
var effect_key = cljs.core.nth.call(null,vec__13037,(0),null);
var effect_value = cljs.core.nth.call(null,vec__13037,(1),null);
var temp__5718__auto___13068 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___13068)){
var effect_fn_13069 = temp__5718__auto___13068;
effect_fn_13069.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__13070 = cljs.core.next.call(null,seq__13024__$1);
var G__13071 = null;
var G__13072 = (0);
var G__13073 = (0);
seq__13024 = G__13070;
chunk__13025 = G__13071;
count__13026 = G__13072;
i__13027 = G__13073;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__13074 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__13075 = null;
var count__13076 = (0);
var i__13077 = (0);
while(true){
if((i__13077 < count__13076)){
var map__13082 = cljs.core._nth.call(null,chunk__13075,i__13077);
var map__13082__$1 = (((((!((map__13082 == null))))?(((((map__13082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13082):map__13082);
var effect = map__13082__$1;
var ms = cljs.core.get.call(null,map__13082__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__13082__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__13074,chunk__13075,count__13076,i__13077,map__13082,map__13082__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__13074,chunk__13075,count__13076,i__13077,map__13082,map__13082__$1,effect,ms,dispatch))
,ms);
}


var G__13086 = seq__13074;
var G__13087 = chunk__13075;
var G__13088 = count__13076;
var G__13089 = (i__13077 + (1));
seq__13074 = G__13086;
chunk__13075 = G__13087;
count__13076 = G__13088;
i__13077 = G__13089;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__13074);
if(temp__5720__auto__){
var seq__13074__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13074__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__13074__$1);
var G__13090 = cljs.core.chunk_rest.call(null,seq__13074__$1);
var G__13091 = c__4550__auto__;
var G__13092 = cljs.core.count.call(null,c__4550__auto__);
var G__13093 = (0);
seq__13074 = G__13090;
chunk__13075 = G__13091;
count__13076 = G__13092;
i__13077 = G__13093;
continue;
} else {
var map__13084 = cljs.core.first.call(null,seq__13074__$1);
var map__13084__$1 = (((((!((map__13084 == null))))?(((((map__13084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13084):map__13084);
var effect = map__13084__$1;
var ms = cljs.core.get.call(null,map__13084__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__13084__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__13074,chunk__13075,count__13076,i__13077,map__13084,map__13084__$1,effect,ms,dispatch,seq__13074__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__13074,chunk__13075,count__13076,i__13077,map__13084,map__13084__$1,effect,ms,dispatch,seq__13074__$1,temp__5720__auto__))
,ms);
}


var G__13094 = cljs.core.next.call(null,seq__13074__$1);
var G__13095 = null;
var G__13096 = (0);
var G__13097 = (0);
seq__13074 = G__13094;
chunk__13075 = G__13095;
count__13076 = G__13096;
i__13077 = G__13097;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__13098 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__13099 = null;
var count__13100 = (0);
var i__13101 = (0);
while(true){
if((i__13101 < count__13100)){
var event = cljs.core._nth.call(null,chunk__13099,i__13101);
re_frame.router.dispatch.call(null,event);


var G__13102 = seq__13098;
var G__13103 = chunk__13099;
var G__13104 = count__13100;
var G__13105 = (i__13101 + (1));
seq__13098 = G__13102;
chunk__13099 = G__13103;
count__13100 = G__13104;
i__13101 = G__13105;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__13098);
if(temp__5720__auto__){
var seq__13098__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13098__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__13098__$1);
var G__13106 = cljs.core.chunk_rest.call(null,seq__13098__$1);
var G__13107 = c__4550__auto__;
var G__13108 = cljs.core.count.call(null,c__4550__auto__);
var G__13109 = (0);
seq__13098 = G__13106;
chunk__13099 = G__13107;
count__13100 = G__13108;
i__13101 = G__13109;
continue;
} else {
var event = cljs.core.first.call(null,seq__13098__$1);
re_frame.router.dispatch.call(null,event);


var G__13110 = cljs.core.next.call(null,seq__13098__$1);
var G__13111 = null;
var G__13112 = (0);
var G__13113 = (0);
seq__13098 = G__13110;
chunk__13099 = G__13111;
count__13100 = G__13112;
i__13101 = G__13113;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__13114 = cljs.core.seq.call(null,value);
var chunk__13115 = null;
var count__13116 = (0);
var i__13117 = (0);
while(true){
if((i__13117 < count__13116)){
var event = cljs.core._nth.call(null,chunk__13115,i__13117);
clear_event.call(null,event);


var G__13118 = seq__13114;
var G__13119 = chunk__13115;
var G__13120 = count__13116;
var G__13121 = (i__13117 + (1));
seq__13114 = G__13118;
chunk__13115 = G__13119;
count__13116 = G__13120;
i__13117 = G__13121;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__13114);
if(temp__5720__auto__){
var seq__13114__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13114__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__13114__$1);
var G__13122 = cljs.core.chunk_rest.call(null,seq__13114__$1);
var G__13123 = c__4550__auto__;
var G__13124 = cljs.core.count.call(null,c__4550__auto__);
var G__13125 = (0);
seq__13114 = G__13122;
chunk__13115 = G__13123;
count__13116 = G__13124;
i__13117 = G__13125;
continue;
} else {
var event = cljs.core.first.call(null,seq__13114__$1);
clear_event.call(null,event);


var G__13126 = cljs.core.next.call(null,seq__13114__$1);
var G__13127 = null;
var G__13128 = (0);
var G__13129 = (0);
seq__13114 = G__13126;
chunk__13115 = G__13127;
count__13116 = G__13128;
i__13117 = G__13129;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));
