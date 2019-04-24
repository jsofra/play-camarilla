// Compiled by ClojureScript 1.10.516 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.url');
goog.require('ajax.json');
goog.require('ajax.transit');
goog.require('ajax.ring');
goog.require('ajax.formats');
goog.require('ajax.util');
goog.require('ajax.interceptors');
goog.require('ajax.simple');
goog.require('ajax.easy');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
goog.require('ajax.xml_http_request');
ajax.core.to_interceptor = ajax.interceptors.to_interceptor;
ajax.core.abort = (function ajax$core$abort(this$){

return ajax.protocols._abort.call(null,this$);
});
ajax.core.json_request_format = ajax.json.json_request_format;
ajax.core.json_response_format = ajax.json.json_response_format;
ajax.core.transit_request_format = ajax.transit.transit_request_format;
ajax.core.transit_response_format = ajax.transit.transit_response_format;
ajax.core.ring_response_format = ajax.ring.ring_response_format;
ajax.core.url_request_format = ajax.url.url_request_format;
ajax.core.text_request_format = ajax.formats.text_request_format;
ajax.core.text_response_format = ajax.formats.text_response_format;
ajax.core.raw_response_format = ajax.formats.raw_response_format;
ajax.core.default_interceptors = ajax.simple.default_interceptors;
ajax.core.ajax_request = ajax.simple.ajax_request;
ajax.core.default_formats = ajax.easy.default_formats;
ajax.core.detect_response_format = ajax.easy.detect_response_format;
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10599 = arguments.length;
var i__4731__auto___10600 = (0);
while(true){
if((i__4731__auto___10600 < len__4730__auto___10599)){
args__4736__auto__.push((arguments[i__4731__auto___10600]));

var G__10601 = (i__4731__auto___10600 + (1));
i__4731__auto___10600 = G__10601;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__10159__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"GET",(((f__10159__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__10159__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.GET.cljs$lang$applyTo = (function (seq10597){
var G__10598 = cljs.core.first.call(null,seq10597);
var seq10597__$1 = cljs.core.next.call(null,seq10597);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10598,seq10597__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10604 = arguments.length;
var i__4731__auto___10605 = (0);
while(true){
if((i__4731__auto___10605 < len__4730__auto___10604)){
args__4736__auto__.push((arguments[i__4731__auto___10605]));

var G__10606 = (i__4731__auto___10605 + (1));
i__4731__auto___10605 = G__10606;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__10159__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"HEAD",(((f__10159__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__10159__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.HEAD.cljs$lang$applyTo = (function (seq10602){
var G__10603 = cljs.core.first.call(null,seq10602);
var seq10602__$1 = cljs.core.next.call(null,seq10602);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10603,seq10602__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10609 = arguments.length;
var i__4731__auto___10610 = (0);
while(true){
if((i__4731__auto___10610 < len__4730__auto___10609)){
args__4736__auto__.push((arguments[i__4731__auto___10610]));

var G__10611 = (i__4731__auto___10610 + (1));
i__4731__auto___10610 = G__10611;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__10159__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"POST",(((f__10159__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__10159__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.POST.cljs$lang$applyTo = (function (seq10607){
var G__10608 = cljs.core.first.call(null,seq10607);
var seq10607__$1 = cljs.core.next.call(null,seq10607);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10608,seq10607__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10614 = arguments.length;
var i__4731__auto___10615 = (0);
while(true){
if((i__4731__auto___10615 < len__4730__auto___10614)){
args__4736__auto__.push((arguments[i__4731__auto___10615]));

var G__10616 = (i__4731__auto___10615 + (1));
i__4731__auto___10615 = G__10616;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__10159__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PUT",(((f__10159__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__10159__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.PUT.cljs$lang$applyTo = (function (seq10612){
var G__10613 = cljs.core.first.call(null,seq10612);
var seq10612__$1 = cljs.core.next.call(null,seq10612);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10613,seq10612__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10619 = arguments.length;
var i__4731__auto___10620 = (0);
while(true){
if((i__4731__auto___10620 < len__4730__auto___10619)){
args__4736__auto__.push((arguments[i__4731__auto___10620]));

var G__10621 = (i__4731__auto___10620 + (1));
i__4731__auto___10620 = G__10621;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__10159__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"DELETE",(((f__10159__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__10159__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.DELETE.cljs$lang$applyTo = (function (seq10617){
var G__10618 = cljs.core.first.call(null,seq10617);
var seq10617__$1 = cljs.core.next.call(null,seq10617);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10618,seq10617__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10624 = arguments.length;
var i__4731__auto___10625 = (0);
while(true){
if((i__4731__auto___10625 < len__4730__auto___10624)){
args__4736__auto__.push((arguments[i__4731__auto___10625]));

var G__10626 = (i__4731__auto___10625 + (1));
i__4731__auto___10625 = G__10626;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__10159__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"OPTIONS",(((f__10159__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__10159__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq10622){
var G__10623 = cljs.core.first.call(null,seq10622);
var seq10622__$1 = cljs.core.next.call(null,seq10622);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10623,seq10622__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10629 = arguments.length;
var i__4731__auto___10630 = (0);
while(true){
if((i__4731__auto___10630 < len__4730__auto___10629)){
args__4736__auto__.push((arguments[i__4731__auto___10630]));

var G__10631 = (i__4731__auto___10630 + (1));
i__4731__auto___10630 = G__10631;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__10159__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"TRACE",(((f__10159__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__10159__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.TRACE.cljs$lang$applyTo = (function (seq10627){
var G__10628 = cljs.core.first.call(null,seq10627);
var seq10627__$1 = cljs.core.next.call(null,seq10627);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10628,seq10627__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10634 = arguments.length;
var i__4731__auto___10635 = (0);
while(true){
if((i__4731__auto___10635 < len__4730__auto___10634)){
args__4736__auto__.push((arguments[i__4731__auto___10635]));

var G__10636 = (i__4731__auto___10635 + (1));
i__4731__auto___10635 = G__10636;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__10159__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PATCH",(((f__10159__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__10159__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.PATCH.cljs$lang$applyTo = (function (seq10632){
var G__10633 = cljs.core.first.call(null,seq10632);
var seq10632__$1 = cljs.core.next.call(null,seq10632);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10633,seq10632__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PURGE = (function ajax$core$PURGE(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10639 = arguments.length;
var i__4731__auto___10640 = (0);
while(true){
if((i__4731__auto___10640 < len__4730__auto___10639)){
args__4736__auto__.push((arguments[i__4731__auto___10640]));

var G__10641 = (i__4731__auto___10640 + (1));
i__4731__auto___10640 = G__10641;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__10159__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PURGE",(((f__10159__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__10159__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.PURGE.cljs$lang$applyTo = (function (seq10637){
var G__10638 = cljs.core.first.call(null,seq10637);
var seq10637__$1 = cljs.core.next.call(null,seq10637);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10638,seq10637__$1);
});

