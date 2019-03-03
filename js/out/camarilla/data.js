// Compiled by ClojureScript 1.10.516 {}
goog.provide('camarilla.data');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clojure.string');
camarilla.data.normalise_name = (function camarilla$data$normalise_name(name){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.re_seq.call(null,/[a-z0-9\-]/,clojure.string.lower_case.call(null,clojure.string.replace.call(null,name," ","-")))));
});
camarilla.data.results__GT_map = (function camarilla$data$results__GT_map(p__13355){
var vec__13356 = p__13355;
var seq__13357 = cljs.core.seq.call(null,vec__13356);
var first__13358 = cljs.core.first.call(null,seq__13357);
var seq__13357__$1 = cljs.core.next.call(null,seq__13357);
var headers = first__13358;
var rows = seq__13357__$1;
var keys = cljs.core.map.call(null,camarilla.data.normalise_name,headers);
return cljs.core.map.call(null,((function (keys,vec__13356,seq__13357,first__13358,seq__13357__$1,headers,rows){
return (function (p1__13354_SHARP_){
return cljs.core.assoc.call(null,p1__13354_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),camarilla.data.normalise_name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__13354_SHARP_)));
});})(keys,vec__13356,seq__13357,first__13358,seq__13357__$1,headers,rows))
,cljs.core.map.call(null,((function (keys,vec__13356,seq__13357,first__13358,seq__13357__$1,headers,rows){
return (function (p1__13353_SHARP_){
return cljs.core.zipmap.call(null,keys,p1__13353_SHARP_);
});})(keys,vec__13356,seq__13357,first__13358,seq__13357__$1,headers,rows))
,rows));
});
camarilla.data.coerce_counts = (function camarilla$data$coerce_counts(rows){
return cljs.core.map.call(null,(function (row){
var G__13359 = row;
if(cljs.core.truth_(new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(row))){
return cljs.core.update.call(null,G__13359,new cljs.core.Keyword(null,"count","count",2139924085),parseInt);
} else {
return G__13359;
}
}),rows);
});
camarilla.data.parse_row_results = (function camarilla$data$parse_row_results(ranges,range_values){
return cljs.core.reduce.call(null,(function (m,p__13360){
var vec__13361 = p__13360;
var name = cljs.core.nth.call(null,vec__13361,(0),null);
var map__13364 = cljs.core.nth.call(null,vec__13361,(1),null);
var map__13364__$1 = (((((!((map__13364 == null))))?(((((map__13364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13364):map__13364);
var range = cljs.core.get.call(null,map__13364__$1,"range");
var values = cljs.core.get.call(null,map__13364__$1,"values");
return cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,camarilla.data.normalise_name.call(null,name)),camarilla.data.coerce_counts.call(null,camarilla.data.results__GT_map.call(null,values)));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vector,ranges,cljs.core.js__GT_clj.call(null,range_values)));
});
camarilla.data.explode_cards = (function camarilla$data$explode_cards(cards){
var explode = (function (p1__13366_SHARP_){
return cljs.core.mapcat.call(null,(function (p__13367){
var map__13368 = p__13367;
var map__13368__$1 = (((((!((map__13368 == null))))?(((((map__13368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13368):map__13368);
var card = map__13368__$1;
var count = cljs.core.get.call(null,map__13368__$1,new cljs.core.Keyword(null,"count","count",2139924085));
if(cljs.core.truth_(count)){
return cljs.core.take.call(null,count,cljs.core.repeat.call(null,cljs.core.dissoc.call(null,card,new cljs.core.Keyword(null,"count","count",2139924085))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [card], null);
}
}),p1__13366_SHARP_);
});
return cljs.core.reduce_kv.call(null,((function (explode){
return (function (m,k,v){
return cljs.core.assoc.call(null,m,k,explode.call(null,v));
});})(explode))
,cljs.core.PersistentArrayMap.EMPTY,cards);
});
camarilla.data.get_sheet_values_BANG_ = (function camarilla$data$get_sheet_values_BANG_(ranges,dispatch_key){
return gapi.client.sheets.spreadsheets.values.batchGet(({"spreadsheetId": "1UUkdhJgO_GKBj4MFJDQhIn9-zHv8ZYqbzQZNRlG2DiU", "ranges": cljs.core.clj__GT_js.call(null,ranges)})).then((function (response){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dispatch_key,camarilla.data.parse_row_results.call(null,ranges,response.result.valueRanges)], null));
}));
});
camarilla.data.load_data_BANG_ = (function camarilla$data$load_data_BANG_(){
return camarilla.data.get_sheet_values_BANG_.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ActionCards","MilitaryCards","LawCards","TitleCards","PietyCards","LandCards","StartingHand"], null),new cljs.core.Keyword("game","set-up","game/set-up",873352976));
});
