// Compiled by ClojureScript 1.10.516 {}
goog.provide('camarilla.db');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('camarilla.data');
goog.require('camarilla.rules');
goog.require('clojure.string');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("camarilla.db","initialize","camarilla.db/initialize",-1651256219),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","signed-in?","user/signed-in?",-1156909147),false], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("game","set-up","game/set-up",873352976),(function (db,p__13390){
var vec__13391 = p__13390;
var _ = cljs.core.nth.call(null,vec__13391,(0),null);
var map__13394 = cljs.core.nth.call(null,vec__13391,(1),null);
var map__13394__$1 = (((((!((map__13394 == null))))?(((((map__13394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13394):map__13394);
var cards = map__13394__$1;
var startinghand = cljs.core.get.call(null,map__13394__$1,new cljs.core.Keyword(null,"startinghand","startinghand",-1663595972));
var table = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hand-counts","hand-counts",-1390565069),cljs.core.reduce.call(null,((function (vec__13391,_,map__13394,map__13394__$1,cards,startinghand){
return (function (m,v){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(v));
});})(vec__13391,_,map__13394,map__13394__$1,cards,startinghand))
,cljs.core.PersistentArrayMap.EMPTY,startinghand),new cljs.core.Keyword(null,"kings-domain","kings-domain",1340864154),camarilla.data.explode_cards.call(null,cljs.core.dissoc.call(null,cards,new cljs.core.Keyword(null,"startinghand","startinghand",-1663595972)))], null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("game","table","game/table",-563874954),camarilla.rules.set_up.call(null,table));
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("game","load-data","game/load-data",-1794833998),(function (){
return camarilla.data.load_data_BANG_.call(null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("user","sign-in-status","user/sign-in-status",-184579203),(function (p__13396,p__13397){
var map__13398 = p__13396;
var map__13398__$1 = (((((!((map__13398 == null))))?(((((map__13398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13398):map__13398);
var db = cljs.core.get.call(null,map__13398__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__13399 = p__13397;
var _ = cljs.core.nth.call(null,vec__13399,(0),null);
var status = cljs.core.nth.call(null,vec__13399,(1),null);
var G__13403 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("user","signed-in?","user/signed-in?",-1156909147),status)], null);
var G__13403__$1 = (cljs.core.truth_(status)?cljs.core.assoc.call(null,G__13403,new cljs.core.Keyword("game","load-data","game/load-data",-1794833998),cljs.core.PersistentVector.EMPTY):G__13403);
if(cljs.core.not.call(null,status)){
return cljs.core.assoc.call(null,G__13403__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","set-up","game/set-up",873352976),cljs.core.PersistentArrayMap.EMPTY], null));
} else {
return G__13403__$1;
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("active-player","take-action-card","active-player/take-action-card",-787429424),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword("game","table","game/table",-563874954),camarilla.rules.active_player_take_action_card);
}));
camarilla.db.flip_law = (function camarilla$db$flip_law(card){
return cljs.core.assoc.call(null,card,new cljs.core.Keyword(null,"side","side",389652279),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"side","side",389652279).cljs$core$IFn$_invoke$arity$1(card),"a"))?"b":"a"));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("kings-domain","flip-law","kings-domain/flip-law",-1849578451),(function (db,p__13404){
var vec__13405 = p__13404;
var _ = cljs.core.nth.call(null,vec__13405,(0),null);
var law_type = cljs.core.nth.call(null,vec__13405,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","table","game/table",-563874954),new cljs.core.Keyword(null,"kings-domain","kings-domain",1340864154),new cljs.core.Keyword(null,"lawcards","lawcards",1643536535),law_type], null),camarilla.db.flip_law);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("table","move-card","table/move-card",455981103),(function (db,p__13408){
var vec__13409 = p__13408;
var _ = cljs.core.nth.call(null,vec__13409,(0),null);
var from_path = cljs.core.nth.call(null,vec__13409,(1),null);
var idx = cljs.core.nth.call(null,vec__13409,(2),null);
var to_path = cljs.core.nth.call(null,vec__13409,(3),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword("game","table","game/table",-563874954),camarilla.rules.move_card,from_path,idx,to_path);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("table","shuffle-titles","table/shuffle-titles",803549697),(function (db,p__13412){
var vec__13413 = p__13412;
var _ = cljs.core.nth.call(null,vec__13413,(0),null);
var from_path = cljs.core.nth.call(null,vec__13413,(1),null);
var idx = cljs.core.nth.call(null,vec__13413,(2),null);
var to_path = cljs.core.nth.call(null,vec__13413,(3),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword("game","table","game/table",-563874954),camarilla.rules.shuffle_titles);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("table","next-turn","table/next-turn",-366521210),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword("game","table","game/table",-563874954),camarilla.rules.next_turn);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("action","play","action/play",-2143749148),(function (db,p__13416){
var vec__13417 = p__13416;
var _ = cljs.core.nth.call(null,vec__13417,(0),null);
var idx = cljs.core.nth.call(null,vec__13417,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword("game","table","game/table",-563874954),camarilla.rules.mark_action_as_played,idx);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("user","signed-in?","user/signed-in?",-1156909147),(function (db,_){
return new cljs.core.Keyword("user","signed-in?","user/signed-in?",-1156909147).cljs$core$IFn$_invoke$arity$1(db);
}));
camarilla.db.parse_law_card = (function camarilla$db$parse_law_card(p__13420){
var map__13421 = p__13420;
var map__13421__$1 = (((((!((map__13421 == null))))?(((((map__13421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13421):map__13421);
var card = map__13421__$1;
var side = cljs.core.get.call(null,map__13421__$1,new cljs.core.Keyword(null,"side","side",389652279));
return cljs.core.reduce_kv.call(null,((function (map__13421,map__13421__$1,card,side){
return (function (card__$1,k,v){
var vec__13423 = cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(side),"-(.*)"].join('')),cljs.core.name.call(null,k));
var _ = cljs.core.nth.call(null,vec__13423,(0),null);
var new_name = cljs.core.nth.call(null,vec__13423,(1),null);
if(cljs.core.truth_(new_name)){
return cljs.core.assoc.call(null,card__$1,cljs.core.keyword.call(null,new_name),v);
} else {
return card__$1;
}
});})(map__13421,map__13421__$1,card,side))
,cljs.core.select_keys.call(null,card,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"side","side",389652279)], null)),card);
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("game","table","game/table",-563874954),(function (db,_){
return cljs.core.update_in.call(null,new cljs.core.Keyword("game","table","game/table",-563874954).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kings-domain","kings-domain",1340864154),new cljs.core.Keyword(null,"lawcards","lawcards",1643536535)], null),(function (p1__13426_SHARP_){
return cljs.core.map.call(null,camarilla.db.parse_law_card,cljs.core.vals.call(null,p1__13426_SHARP_));
}));
}));
