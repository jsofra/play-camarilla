// Compiled by ClojureScript 1.10.516 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__11929__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__11929 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11930__i = 0, G__11930__a = new Array(arguments.length -  0);
while (G__11930__i < G__11930__a.length) {G__11930__a[G__11930__i] = arguments[G__11930__i + 0]; ++G__11930__i;}
  args = new cljs.core.IndexedSeq(G__11930__a,0,null);
} 
return G__11929__delegate.call(this,args);};
G__11929.cljs$lang$maxFixedArity = 0;
G__11929.cljs$lang$applyTo = (function (arglist__11931){
var args = cljs.core.seq(arglist__11931);
return G__11929__delegate(args);
});
G__11929.cljs$core$IFn$_invoke$arity$variadic = G__11929__delegate;
return G__11929;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__11932__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__11932 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11933__i = 0, G__11933__a = new Array(arguments.length -  0);
while (G__11933__i < G__11933__a.length) {G__11933__a[G__11933__i] = arguments[G__11933__i + 0]; ++G__11933__i;}
  args = new cljs.core.IndexedSeq(G__11933__a,0,null);
} 
return G__11932__delegate.call(this,args);};
G__11932.cljs$lang$maxFixedArity = 0;
G__11932.cljs$lang$applyTo = (function (arglist__11934){
var args = cljs.core.seq(arglist__11934);
return G__11932__delegate(args);
});
G__11932.cljs$core$IFn$_invoke$arity$variadic = G__11932__delegate;
return G__11932;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
