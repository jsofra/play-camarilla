// Compiled by ClojureScript 1.10.516 {}
goog.provide('camarilla.data');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clojure.string');
camarilla.data.normalise_name = (function camarilla$data$normalise_name(name){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.re_seq.call(null,/[a-z0-9\-]/,clojure.string.lower_case.call(null,clojure.string.replace.call(null,name," ","-")))));
});
camarilla.data.results__GT_map = (function camarilla$data$results__GT_map(p__9949){
var vec__9950 = p__9949;
var seq__9951 = cljs.core.seq.call(null,vec__9950);
var first__9952 = cljs.core.first.call(null,seq__9951);
var seq__9951__$1 = cljs.core.next.call(null,seq__9951);
var headers = first__9952;
var rows = seq__9951__$1;
var keys = cljs.core.map.call(null,camarilla.data.normalise_name,headers);
return cljs.core.map.call(null,((function (keys,vec__9950,seq__9951,first__9952,seq__9951__$1,headers,rows){
return (function (p1__9948_SHARP_){
return cljs.core.assoc.call(null,p1__9948_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),camarilla.data.normalise_name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__9948_SHARP_)));
});})(keys,vec__9950,seq__9951,first__9952,seq__9951__$1,headers,rows))
,cljs.core.map.call(null,((function (keys,vec__9950,seq__9951,first__9952,seq__9951__$1,headers,rows){
return (function (p1__9947_SHARP_){
return cljs.core.zipmap.call(null,keys,p1__9947_SHARP_);
});})(keys,vec__9950,seq__9951,first__9952,seq__9951__$1,headers,rows))
,rows));
});
camarilla.data.coerce_counts = (function camarilla$data$coerce_counts(rows){
return cljs.core.map.call(null,(function (row){
var G__9953 = row;
if(cljs.core.truth_(new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(row))){
return cljs.core.update.call(null,G__9953,new cljs.core.Keyword(null,"count","count",2139924085),parseInt);
} else {
return G__9953;
}
}),rows);
});
camarilla.data.parse_row_results = (function camarilla$data$parse_row_results(ranges,range_values){
return cljs.core.reduce.call(null,(function (m,p__9954){
var vec__9955 = p__9954;
var name = cljs.core.nth.call(null,vec__9955,(0),null);
var map__9958 = cljs.core.nth.call(null,vec__9955,(1),null);
var map__9958__$1 = (((((!((map__9958 == null))))?(((((map__9958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9958):map__9958);
var values = cljs.core.get.call(null,map__9958__$1,"values");
return cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,camarilla.data.normalise_name.call(null,name)),camarilla.data.coerce_counts.call(null,camarilla.data.results__GT_map.call(null,values)));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vector,ranges,cljs.core.js__GT_clj.call(null,range_values)));
});
camarilla.data.explode_cards = (function camarilla$data$explode_cards(cards){
var explode = (function (p1__9960_SHARP_){
return cljs.core.mapcat.call(null,(function (p__9961){
var map__9962 = p__9961;
var map__9962__$1 = (((((!((map__9962 == null))))?(((((map__9962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9962):map__9962);
var card = map__9962__$1;
var count = cljs.core.get.call(null,map__9962__$1,new cljs.core.Keyword(null,"count","count",2139924085));
if(cljs.core.truth_(count)){
return cljs.core.take.call(null,count,cljs.core.repeat.call(null,cljs.core.dissoc.call(null,card,new cljs.core.Keyword(null,"count","count",2139924085))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [card], null);
}
}),p1__9960_SHARP_);
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
camarilla.data.load_and_setup_game_BANG_ = (function camarilla$data$load_and_setup_game_BANG_(){
return camarilla.data.get_sheet_values_BANG_.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ActionCards","MilitaryCards","LawCards","TitleCards","PietyCards","LandCards","StartingHand"], null),new cljs.core.Keyword("game","set-up","game/set-up",873352976));
});
