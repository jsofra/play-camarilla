// Compiled by ClojureScript 1.10.516 {}
goog.provide('camarilla.db');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('day8.re_frame.http_fx');
goog.require('ajax.core');
goog.require('camarilla.data');
goog.require('camarilla.rules');
goog.require('clojure.string');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("camarilla.db","initialize","camarilla.db/initialize",-1651256219),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("user","signed-in?","user/signed-in?",-1156909147),false,new cljs.core.Keyword("game","printable?","game/printable?",-179805602),false,new cljs.core.Keyword("game","history","game/history",-231751674),cljs.core.PersistentVector.EMPTY], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("game","set-up","game/set-up",873352976),(function (db,p__10708){
var vec__10709 = p__10708;
var _ = cljs.core.nth.call(null,vec__10709,(0),null);
var map__10712 = cljs.core.nth.call(null,vec__10709,(1),null);
var map__10712__$1 = (((((!((map__10712 == null))))?(((((map__10712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10712):map__10712);
var cards = map__10712__$1;
var startinghand = cljs.core.get.call(null,map__10712__$1,new cljs.core.Keyword(null,"startinghand","startinghand",-1663595972));
var exploded_cards = camarilla.data.explode_cards.call(null,cljs.core.dissoc.call(null,cards,new cljs.core.Keyword(null,"startinghand","startinghand",-1663595972)));
var table = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hand-counts","hand-counts",-1390565069),cljs.core.reduce.call(null,((function (exploded_cards,vec__10709,_,map__10712,map__10712__$1,cards,startinghand){
return (function (m,v){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(v));
});})(exploded_cards,vec__10709,_,map__10712,map__10712__$1,cards,startinghand))
,cljs.core.PersistentArrayMap.EMPTY,startinghand),new cljs.core.Keyword(null,"kings-domain","kings-domain",1340864154),exploded_cards], null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("game","table","game/table",-563874954),camarilla.rules.set_up.call(null,table),new cljs.core.Keyword("raw","deck","raw/deck",1145368513),exploded_cards);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("game","load-data","game/load-data",-1794833998),(function (){
return camarilla.data.load_and_setup_game_BANG_.call(null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("user","sign-in-status","user/sign-in-status",-184579203),(function (p__10714,p__10715){
var map__10716 = p__10714;
var map__10716__$1 = (((((!((map__10716 == null))))?(((((map__10716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10716):map__10716);
var db = cljs.core.get.call(null,map__10716__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__10717 = p__10715;
var _ = cljs.core.nth.call(null,vec__10717,(0),null);
var status = cljs.core.nth.call(null,vec__10717,(1),null);
var G__10721 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("user","signed-in?","user/signed-in?",-1156909147),status)], null);
var G__10721__$1 = (cljs.core.truth_(status)?cljs.core.assoc.call(null,G__10721,new cljs.core.Keyword("game","load-data","game/load-data",-1794833998),cljs.core.PersistentVector.EMPTY):G__10721);
if(cljs.core.not.call(null,status)){
return cljs.core.assoc.call(null,G__10721__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","set-up","game/set-up",873352976),cljs.core.PersistentArrayMap.EMPTY], null));
} else {
return G__10721__$1;
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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("kings-domain","flip-law","kings-domain/flip-law",-1849578451),(function (db,p__10722){
var vec__10723 = p__10722;
var _ = cljs.core.nth.call(null,vec__10723,(0),null);
var law_type = cljs.core.nth.call(null,vec__10723,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","table","game/table",-563874954),new cljs.core.Keyword(null,"kings-domain","kings-domain",1340864154),new cljs.core.Keyword(null,"lawcards","lawcards",1643536535),law_type], null),camarilla.db.flip_law);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("table","move-card","table/move-card",455981103),(function (db,p__10726){
var vec__10727 = p__10726;
var _ = cljs.core.nth.call(null,vec__10727,(0),null);
var from_path = cljs.core.nth.call(null,vec__10727,(1),null);
var idx = cljs.core.nth.call(null,vec__10727,(2),null);
var to_path = cljs.core.nth.call(null,vec__10727,(3),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword("game","table","game/table",-563874954),camarilla.rules.move_card,from_path,idx,to_path);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("table","shuffle-titles","table/shuffle-titles",803549697),(function (db,p__10730){
var vec__10731 = p__10730;
var _ = cljs.core.nth.call(null,vec__10731,(0),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword("game","table","game/table",-563874954),camarilla.rules.shuffle_titles);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("table","next-turn","table/next-turn",-366521210),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword("game","table","game/table",-563874954),camarilla.rules.next_turn);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("action","play","action/play",-2143749148),(function (db,p__10734){
var vec__10735 = p__10734;
var _ = cljs.core.nth.call(null,vec__10735,(0),null);
var idx = cljs.core.nth.call(null,vec__10735,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword("game","table","game/table",-563874954),camarilla.rules.mark_action_as_played,idx);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("action","unplay","action/unplay",-10551023),(function (db,p__10738){
var vec__10739 = p__10738;
var _ = cljs.core.nth.call(null,vec__10739,(0),null);
var idx = cljs.core.nth.call(null,vec__10739,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword("game","table","game/table",-563874954),camarilla.rules.mark_action_as_unplayed,idx);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("stats","write-success","stats/write-success",-1111291806),(function (db,p__10742){
var vec__10743 = p__10742;
var _ = cljs.core.nth.call(null,vec__10743,(0),null);
var result = cljs.core.nth.call(null,vec__10743,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("stats","write-result","stats/write-result",-1847469379),result);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("stats","write-failure","stats/write-failure",222956035),(function (db,p__10746){
var vec__10747 = p__10746;
var _ = cljs.core.nth.call(null,vec__10747,(0),null);
var result = cljs.core.nth.call(null,vec__10747,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("stats","write-result","stats/write-result",-1847469379),result);
}));
camarilla.db.history_url = "https://script.google.com/macros/s/AKfycbwzHLJDHn78ih__bIJ8IQBPzB9dik_UKtgnq363UoghzO7dK40/exec";
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("game","finish","game/finish",-589820464),(function (p__10752,_){
var map__10753 = p__10752;
var map__10753__$1 = (((((!((map__10753 == null))))?(((((map__10753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10753):map__10753);
var db = cljs.core.get.call(null,map__10753__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__10755 = new cljs.core.Keyword("game","table","game/table",-563874954).cljs$core$IFn$_invoke$arity$1(db);
var map__10755__$1 = (((((!((map__10755 == null))))?(((((map__10755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10755):map__10755);
var turns = cljs.core.get.call(null,map__10755__$1,new cljs.core.Keyword(null,"turns","turns",-1118736892));
var players = cljs.core.get.call(null,map__10755__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
var current_turn = cljs.core.get.call(null,map__10755__$1,new cljs.core.Keyword(null,"current-turn","current-turn",-593026573));
var map__10756 = cljs.core.get.call(null,players,current_turn);
var map__10756__$1 = (((((!((map__10756 == null))))?(((((map__10756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10756):map__10756);
var actioncards = cljs.core.get.call(null,map__10756__$1,new cljs.core.Keyword(null,"actioncards","actioncards",-2013329382));
var militarycards = cljs.core.get.call(null,map__10756__$1,new cljs.core.Keyword(null,"militarycards","militarycards",902950542));
var titlecards = cljs.core.get.call(null,map__10756__$1,new cljs.core.Keyword(null,"titlecards","titlecards",-1221765024));
var pietycards = cljs.core.get.call(null,map__10756__$1,new cljs.core.Keyword(null,"pietycards","pietycards",501426707));
var landcards = cljs.core.get.call(null,map__10756__$1,new cljs.core.Keyword(null,"landcards","landcards",-147963932));
var sum_power = ((function (map__10755,map__10755__$1,turns,players,current_turn,map__10756,map__10756__$1,actioncards,militarycards,titlecards,pietycards,landcards,map__10753,map__10753__$1,db){
return (function (cards){
return cljs.core.reduce.call(null,((function (map__10755,map__10755__$1,turns,players,current_turn,map__10756,map__10756__$1,actioncards,militarycards,titlecards,pietycards,landcards,map__10753,map__10753__$1,db){
return (function (p1__10750_SHARP_,p2__10751_SHARP_){
return (p1__10750_SHARP_ + parseInt(new cljs.core.Keyword(null,"power","power",-937852079).cljs$core$IFn$_invoke$arity$1(p2__10751_SHARP_)));
});})(map__10755,map__10755__$1,turns,players,current_turn,map__10756,map__10756__$1,actioncards,militarycards,titlecards,pietycards,landcards,map__10753,map__10753__$1,db))
,(0),cards);
});})(map__10755,map__10755__$1,turns,players,current_turn,map__10756,map__10756__$1,actioncards,militarycards,titlecards,pietycards,landcards,map__10753,map__10753__$1,db))
;
var stats = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"turns","turns",-1118736892),turns,new cljs.core.Keyword(null,"rounds","rounds",1157201084),(turns / (4)),new cljs.core.Keyword(null,"dir","dir",1734754661),current_turn,new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.count.call(null,actioncards),new cljs.core.Keyword(null,"piety","piety",1055126989),cljs.core.count.call(null,pietycards),new cljs.core.Keyword(null,"military","military",1724894572),sum_power.call(null,militarycards),new cljs.core.Keyword(null,"land","land",-1402569867),sum_power.call(null,landcards),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,titlecards))], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","set-up","game/set-up",873352976),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),camarilla.db.history_url,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"params","params",710516235),stats,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stats","write-success","stats/write-success",-1111291806)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stats","write-failure","stats/write-failure",222956035)], null)], null)], null);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("user","signed-in?","user/signed-in?",-1156909147),(function (db,_){
return new cljs.core.Keyword("user","signed-in?","user/signed-in?",-1156909147).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("game","printable?","game/printable?",-179805602),(function (db,_){
return new cljs.core.Keyword("game","printable?","game/printable?",-179805602).cljs$core$IFn$_invoke$arity$1(db);
}));
camarilla.db.parse_law_card = (function camarilla$db$parse_law_card(p__10759){
var map__10760 = p__10759;
var map__10760__$1 = (((((!((map__10760 == null))))?(((((map__10760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10760):map__10760);
var card = map__10760__$1;
var side = cljs.core.get.call(null,map__10760__$1,new cljs.core.Keyword(null,"side","side",389652279));
return cljs.core.reduce_kv.call(null,((function (map__10760,map__10760__$1,card,side){
return (function (card__$1,k,v){
var vec__10762 = cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(side),"-(.*)"].join('')),cljs.core.name.call(null,k));
var _ = cljs.core.nth.call(null,vec__10762,(0),null);
var new_name = cljs.core.nth.call(null,vec__10762,(1),null);
if(cljs.core.truth_(new_name)){
return cljs.core.assoc.call(null,card__$1,cljs.core.keyword.call(null,new_name),v);
} else {
return card__$1;
}
});})(map__10760,map__10760__$1,card,side))
,cljs.core.select_keys.call(null,card,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"side","side",389652279)], null)),card);
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("game","table","game/table",-563874954),(function (db,_){
return cljs.core.update_in.call(null,new cljs.core.Keyword("game","table","game/table",-563874954).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kings-domain","kings-domain",1340864154),new cljs.core.Keyword(null,"lawcards","lawcards",1643536535)], null),(function (p1__10765_SHARP_){
return cljs.core.map.call(null,camarilla.db.parse_law_card,cljs.core.vals.call(null,p1__10765_SHARP_));
}));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("deck","cards","deck/cards",157704419),(function (db,_){
var lawcards = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("raw","deck","raw/deck",1145368513),new cljs.core.Keyword(null,"lawcards","lawcards",1643536535)], null));
return cljs.core.assoc.call(null,new cljs.core.Keyword("raw","deck","raw/deck",1145368513).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"lawcards","lawcards",1643536535),cljs.core.map.call(null,camarilla.db.parse_law_card,cljs.core.concat.call(null,cljs.core.map.call(null,((function (lawcards){
return (function (p1__10766_SHARP_){
return cljs.core.assoc.call(null,p1__10766_SHARP_,new cljs.core.Keyword(null,"side","side",389652279),"a");
});})(lawcards))
,lawcards),cljs.core.map.call(null,((function (lawcards){
return (function (p1__10767_SHARP_){
return cljs.core.assoc.call(null,p1__10767_SHARP_,new cljs.core.Keyword(null,"side","side",389652279),"b");
});})(lawcards))
,lawcards))));
}));
