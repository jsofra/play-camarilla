// Compiled by ClojureScript 1.10.516 {}
goog.provide('camarilla.db');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('camarilla.data');
goog.require('camarilla.rules');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("camarilla.db","initialize","camarilla.db/initialize",-1651256219),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("user","signed-in?","user/signed-in?",-1156909147),false,new cljs.core.Keyword("game","printable?","game/printable?",-179805602),false,new cljs.core.Keyword("game","history","game/history",-231751674),cljs.core.PersistentVector.EMPTY], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("game","set-up","game/set-up",873352976),(function (db,p__9982){
var vec__9983 = p__9982;
var _ = cljs.core.nth.call(null,vec__9983,(0),null);
var map__9986 = cljs.core.nth.call(null,vec__9983,(1),null);
var map__9986__$1 = (((((!((map__9986 == null))))?(((((map__9986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9986):map__9986);
var cards = map__9986__$1;
var startinghand = cljs.core.get.call(null,map__9986__$1,new cljs.core.Keyword(null,"startinghand","startinghand",-1663595972));
var exploded_cards = camarilla.data.explode_cards.call(null,cljs.core.dissoc.call(null,cards,new cljs.core.Keyword(null,"startinghand","startinghand",-1663595972)));
var table = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hand-counts","hand-counts",-1390565069),cljs.core.reduce.call(null,((function (exploded_cards,vec__9983,_,map__9986,map__9986__$1,cards,startinghand){
return (function (m,v){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(v));
});})(exploded_cards,vec__9983,_,map__9986,map__9986__$1,cards,startinghand))
,cljs.core.PersistentArrayMap.EMPTY,startinghand),new cljs.core.Keyword(null,"kings-domain","kings-domain",1340864154),exploded_cards], null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("game","table","game/table",-563874954),camarilla.rules.set_up.call(null,table),new cljs.core.Keyword("raw","deck","raw/deck",1145368513),exploded_cards);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("game","load-data","game/load-data",-1794833998),(function (){
return camarilla.data.load_and_setup_game_BANG_.call(null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("user","sign-in-status","user/sign-in-status",-184579203),(function (p__9988,p__9989){
var map__9990 = p__9988;
var map__9990__$1 = (((((!((map__9990 == null))))?(((((map__9990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9990):map__9990);
var db = cljs.core.get.call(null,map__9990__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__9991 = p__9989;
var _ = cljs.core.nth.call(null,vec__9991,(0),null);
var status = cljs.core.nth.call(null,vec__9991,(1),null);
var G__9995 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("user","signed-in?","user/signed-in?",-1156909147),status)], null);
var G__9995__$1 = (cljs.core.truth_(status)?cljs.core.assoc.call(null,G__9995,new cljs.core.Keyword("game","load-data","game/load-data",-1794833998),cljs.core.PersistentVector.EMPTY):G__9995);
if(cljs.core.not.call(null,status)){
return cljs.core.assoc.call(null,G__9995__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","set-up","game/set-up",873352976),cljs.core.PersistentArrayMap.EMPTY], null));
} else {
return G__9995__$1;
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("game","toggle-printable","game/toggle-printable",-284332784),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword("game","printable?","game/printable?",-179805602),cljs.core.not);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("active-player","take-action-card","active-player/take-action-card",-787429424),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword("game","table","game/table",-563874954),camarilla.rules.active_player_take_action_card);
}));
camarilla.db.flip_law = (function camarilla$db$flip_law(card){
return cljs.core.assoc.call(null,card,new cljs.core.Keyword(null,"side","side",389652279),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"side","side",389652279).cljs$core$IFn$_invoke$arity$1(card),"a"))?"b":"a"));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("kings-domain","flip-law","kings-domain/flip-law",-1849578451),(function (db,p__9996){
var vec__9997 = p__9996;
var _ = cljs.core.nth.call(null,vec__9997,(0),null);
var law_type = cljs.core.nth.call(null,vec__9997,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","table","game/table",-563874954),new cljs.core.Keyword(null,"kings-domain","kings-domain",1340864154),new cljs.core.Keyword(null,"lawcards","lawcards",1643536535),law_type], null),camarilla.db.flip_law);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("table","move-card","table/move-card",455981103),(function (db,p__10000){
var vec__10001 = p__10000;
var _ = cljs.core.nth.call(null,vec__10001,(0),null);
var from_path = cljs.core.nth.call(null,vec__10001,(1),null);
var idx = cljs.core.nth.call(null,vec__10001,(2),null);
var to_path = cljs.core.nth.call(null,vec__10001,(3),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword("game","table","game/table",-563874954),camarilla.rules.move_card,from_path,idx,to_path);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("table","shuffle-titles","table/shuffle-titles",803549697),(function (db,p__10004){
var vec__10005 = p__10004;
var _ = cljs.core.nth.call(null,vec__10005,(0),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword("game","table","game/table",-563874954),camarilla.rules.shuffle_titles);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("table","next-turn","table/next-turn",-366521210),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword("game","table","game/table",-563874954),camarilla.rules.next_turn);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("action","play","action/play",-2143749148),(function (db,p__10008){
var vec__10009 = p__10008;
var _ = cljs.core.nth.call(null,vec__10009,(0),null);
var idx = cljs.core.nth.call(null,vec__10009,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword("game","table","game/table",-563874954),camarilla.rules.mark_action_as_played,idx);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("action","unplay","action/unplay",-10551023),(function (db,p__10012){
var vec__10013 = p__10012;
var _ = cljs.core.nth.call(null,vec__10013,(0),null);
var idx = cljs.core.nth.call(null,vec__10013,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword("game","table","game/table",-563874954),camarilla.rules.mark_action_as_unplayed,idx);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("user","signed-in?","user/signed-in?",-1156909147),(function (db,_){
return new cljs.core.Keyword("user","signed-in?","user/signed-in?",-1156909147).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("game","printable?","game/printable?",-179805602),(function (db,_){
return new cljs.core.Keyword("game","printable?","game/printable?",-179805602).cljs$core$IFn$_invoke$arity$1(db);
}));
camarilla.db.parse_law_card = (function camarilla$db$parse_law_card(p__10016){
var map__10017 = p__10016;
var map__10017__$1 = (((((!((map__10017 == null))))?(((((map__10017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10017):map__10017);
var card = map__10017__$1;
var side = cljs.core.get.call(null,map__10017__$1,new cljs.core.Keyword(null,"side","side",389652279));
return cljs.core.reduce_kv.call(null,((function (map__10017,map__10017__$1,card,side){
return (function (card__$1,k,v){
var vec__10019 = cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(side),"-(.*)"].join('')),cljs.core.name.call(null,k));
var _ = cljs.core.nth.call(null,vec__10019,(0),null);
var new_name = cljs.core.nth.call(null,vec__10019,(1),null);
if(cljs.core.truth_(new_name)){
return cljs.core.assoc.call(null,card__$1,cljs.core.keyword.call(null,new_name),v);
} else {
return card__$1;
}
});})(map__10017,map__10017__$1,card,side))
,cljs.core.select_keys.call(null,card,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"side","side",389652279)], null)),card);
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("game","table","game/table",-563874954),(function (db,_){
return cljs.core.update_in.call(null,new cljs.core.Keyword("game","table","game/table",-563874954).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kings-domain","kings-domain",1340864154),new cljs.core.Keyword(null,"lawcards","lawcards",1643536535)], null),(function (p1__10022_SHARP_){
return cljs.core.map.call(null,camarilla.db.parse_law_card,cljs.core.vals.call(null,p1__10022_SHARP_));
}));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("deck","cards","deck/cards",157704419),(function (db,_){
var lawcards = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("raw","deck","raw/deck",1145368513),new cljs.core.Keyword(null,"lawcards","lawcards",1643536535)], null));
return cljs.core.assoc.call(null,new cljs.core.Keyword("raw","deck","raw/deck",1145368513).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"lawcards","lawcards",1643536535),cljs.core.map.call(null,camarilla.db.parse_law_card,cljs.core.concat.call(null,cljs.core.map.call(null,((function (lawcards){
return (function (p1__10023_SHARP_){
return cljs.core.assoc.call(null,p1__10023_SHARP_,new cljs.core.Keyword(null,"side","side",389652279),"a");
});})(lawcards))
,lawcards),cljs.core.map.call(null,((function (lawcards){
return (function (p1__10024_SHARP_){
return cljs.core.assoc.call(null,p1__10024_SHARP_,new cljs.core.Keyword(null,"side","side",389652279),"b");
});})(lawcards))
,lawcards))));
}));
