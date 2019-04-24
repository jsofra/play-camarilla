// Compiled by ClojureScript 1.10.516 {}
goog.provide('camarilla.rules');
goog.require('cljs.core');
camarilla.rules.players = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"N","N",-640629860),new cljs.core.Keyword(null,"E","E",230849842),new cljs.core.Keyword(null,"S","S",1267293308),new cljs.core.Keyword(null,"W","W",-2035370425)], null);
camarilla.rules.shuffle_cards = (function camarilla$rules$shuffle_cards(all_cards){
return cljs.core.reduce_kv.call(null,(function (m,k,cards){
return cljs.core.assoc.call(null,m,k,cljs.core.shuffle.call(null,cards));
}),cljs.core.PersistentArrayMap.EMPTY,all_cards);
});
camarilla.rules.deal_cards = (function camarilla$rules$deal_cards(p__10664,player){
var map__10665 = p__10664;
var map__10665__$1 = (((((!((map__10665 == null))))?(((((map__10665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10665):map__10665);
var table = map__10665__$1;
var hand_counts = cljs.core.get.call(null,map__10665__$1,new cljs.core.Keyword(null,"hand-counts","hand-counts",-1390565069));
var kings_domain = cljs.core.get.call(null,map__10665__$1,new cljs.core.Keyword(null,"kings-domain","kings-domain",1340864154));
return cljs.core.update.call(null,cljs.core.assoc_in.call(null,table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),player], null),cljs.core.reduce_kv.call(null,((function (map__10665,map__10665__$1,table,hand_counts,kings_domain){
return (function (m,k,cards){
var temp__5718__auto__ = cljs.core.get.call(null,hand_counts,k);
if(cljs.core.truth_(temp__5718__auto__)){
var n = temp__5718__auto__;
return cljs.core.assoc.call(null,m,k,cljs.core.take.call(null,n,cards));
} else {
return m;
}
});})(map__10665,map__10665__$1,table,hand_counts,kings_domain))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dir","dir",1734754661),player], null),kings_domain)),new cljs.core.Keyword(null,"kings-domain","kings-domain",1340864154),((function (map__10665,map__10665__$1,table,hand_counts,kings_domain){
return (function (p1__10663_SHARP_){
return cljs.core.reduce_kv.call(null,((function (map__10665,map__10665__$1,table,hand_counts,kings_domain){
return (function (m,k,cards){
var temp__5718__auto__ = cljs.core.get.call(null,hand_counts,k);
if(cljs.core.truth_(temp__5718__auto__)){
var n = temp__5718__auto__;
return cljs.core.assoc.call(null,m,k,cljs.core.drop.call(null,n,cards));
} else {
return cljs.core.assoc.call(null,m,k,cards);
}
});})(map__10665,map__10665__$1,table,hand_counts,kings_domain))
,cljs.core.PersistentArrayMap.EMPTY,p1__10663_SHARP_);
});})(map__10665,map__10665__$1,table,hand_counts,kings_domain))
);
});
camarilla.rules.init_law_sides = (function camarilla$rules$init_law_sides(kings_domain){
return cljs.core.update.call(null,kings_domain,new cljs.core.Keyword(null,"lawcards","lawcards",1643536535),(function (p1__10667_SHARP_){
return cljs.core.reduce.call(null,(function (cards,card){
return cljs.core.assoc.call(null,cards,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(card),cljs.core.assoc.call(null,card,new cljs.core.Keyword(null,"side","side",389652279),"a"));
}),cljs.core.PersistentArrayMap.EMPTY,p1__10667_SHARP_);
}));
});
camarilla.rules.set_up = (function camarilla$rules$set_up(table){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.reduce.call(null,(function (table__$1,player){
return camarilla.rules.deal_cards.call(null,table__$1,player);
}),cljs.core.update.call(null,cljs.core.update.call(null,table,new cljs.core.Keyword(null,"kings-domain","kings-domain",1340864154),camarilla.rules.shuffle_cards),new cljs.core.Keyword(null,"kings-domain","kings-domain",1340864154),camarilla.rules.init_law_sides),camarilla.rules.players),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"N","N",-640629860)], null),cljs.core.assoc,new cljs.core.Keyword(null,"turn","turn",75759344),true),new cljs.core.Keyword(null,"current-turn","current-turn",-593026573),new cljs.core.Keyword(null,"N","N",-640629860),new cljs.core.Keyword(null,"turns","turns",-1118736892),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kings-domain","kings-domain",1340864154),new cljs.core.Keyword(null,"discarded-actions","discarded-actions",-843821114)], null),cljs.core.PersistentVector.EMPTY);
});
camarilla.rules.active_player_take_action_card = (function camarilla$rules$active_player_take_action_card(p__10669){
var map__10670 = p__10669;
var map__10670__$1 = (((((!((map__10670 == null))))?(((((map__10670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10670):map__10670);
var table = map__10670__$1;
var kings_domain = cljs.core.get.call(null,map__10670__$1,new cljs.core.Keyword(null,"kings-domain","kings-domain",1340864154));
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"actioncards","actioncards",-2013329382).cljs$core$IFn$_invoke$arity$1(kings_domain))){
var G__10672 = cljs.core.update_in.call(null,cljs.core.update_in.call(null,table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kings-domain","kings-domain",1340864154),new cljs.core.Keyword(null,"actioncards","actioncards",-2013329382)], null),((function (map__10670,map__10670__$1,table,kings_domain){
return (function (p1__10668_SHARP_){
return cljs.core.drop.call(null,(1),p1__10668_SHARP_);
});})(map__10670,map__10670__$1,table,kings_domain))
),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"current-turn","current-turn",-593026573).cljs$core$IFn$_invoke$arity$1(table),new cljs.core.Keyword(null,"actioncards","actioncards",-2013329382)], null),cljs.core.conj,cljs.core.first.call(null,new cljs.core.Keyword(null,"actioncards","actioncards",-2013329382).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"kings-domain","kings-domain",1340864154).cljs$core$IFn$_invoke$arity$1(table))));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"actioncards","actioncards",-2013329382).cljs$core$IFn$_invoke$arity$1(kings_domain)),(1))){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,G__10672,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kings-domain","kings-domain",1340864154),new cljs.core.Keyword(null,"actioncards","actioncards",-2013329382)], null),cljs.core.shuffle.call(null,new cljs.core.Keyword(null,"discarded-actions","discarded-actions",-843821114).cljs$core$IFn$_invoke$arity$1(kings_domain))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kings-domain","kings-domain",1340864154),new cljs.core.Keyword(null,"discarded-actions","discarded-actions",-843821114)], null),cljs.core.PersistentVector.EMPTY);
} else {
return G__10672;
}
} else {
return table;
}
});
camarilla.rules.remove_card = (function camarilla$rules$remove_card(cards,idx){
return cljs.core.concat.call(null,cljs.core.take.call(null,idx,cards),cljs.core.drop.call(null,(idx + (1)),cards));
});
camarilla.rules.move_card = (function camarilla$rules$move_card(table,from_path,idx,to_path){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,table,from_path,(function (p1__10673_SHARP_){
return camarilla.rules.remove_card.call(null,p1__10673_SHARP_,idx);
})),to_path,cljs.core.conj,cljs.core.nth.call(null,cljs.core.get_in.call(null,table,from_path),idx));
});
camarilla.rules.shuffle_titles = (function camarilla$rules$shuffle_titles(table){
var new_titles = cljs.core.shuffle.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,(function (p1__10674_SHARP_){
return cljs.core.get_in.call(null,table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),p1__10674_SHARP_,new cljs.core.Keyword(null,"titlecards","titlecards",-1221765024)], null));
}),camarilla.rules.players),cljs.core.get_in.call(null,table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kings-domain","kings-domain",1340864154),new cljs.core.Keyword(null,"titlecards","titlecards",-1221765024)], null))));
return cljs.core.reduce.call(null,((function (new_titles){
return (function (table__$1,player){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,table__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),player,new cljs.core.Keyword(null,"titlecards","titlecards",-1221765024)], null),cljs.core.take.call(null,(1),cljs.core.get_in.call(null,table__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kings-domain","kings-domain",1340864154),new cljs.core.Keyword(null,"titlecards","titlecards",-1221765024)], null)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kings-domain","kings-domain",1340864154),new cljs.core.Keyword(null,"titlecards","titlecards",-1221765024)], null),((function (new_titles){
return (function (p1__10675_SHARP_){
return cljs.core.drop.call(null,(1),p1__10675_SHARP_);
});})(new_titles))
);
});})(new_titles))
,cljs.core.assoc_in.call(null,table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kings-domain","kings-domain",1340864154),new cljs.core.Keyword(null,"titlecards","titlecards",-1221765024)], null),new_titles),camarilla.rules.players);
});
camarilla.rules.next_turn = (function camarilla$rules$next_turn(table){
var current_turn = new cljs.core.Keyword(null,"current-turn","current-turn",-593026573).cljs$core$IFn$_invoke$arity$1(table);
var next_dir = cljs.core.second.call(null,cljs.core.drop_while.call(null,((function (current_turn){
return (function (p1__10676_SHARP_){
return cljs.core.not_EQ_.call(null,p1__10676_SHARP_,current_turn);
});})(current_turn))
,cljs.core.cycle.call(null,camarilla.rules.players)));
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,cljs.core.update.call(null,cljs.core.assoc.call(null,table,new cljs.core.Keyword(null,"current-turn","current-turn",-593026573),next_dir),new cljs.core.Keyword(null,"turns","turns",-1118736892),cljs.core.inc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),current_turn], null),cljs.core.dissoc,new cljs.core.Keyword(null,"turn","turn",75759344)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),next_dir,new cljs.core.Keyword(null,"turn","turn",75759344)], null),true),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),current_turn,new cljs.core.Keyword(null,"actioncards","actioncards",-2013329382)], null),((function (current_turn,next_dir){
return (function (p1__10677_SHARP_){
return cljs.core.remove.call(null,new cljs.core.Keyword(null,"played","played",-1713723590),p1__10677_SHARP_);
});})(current_turn,next_dir))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kings-domain","kings-domain",1340864154),new cljs.core.Keyword(null,"discarded-actions","discarded-actions",-843821114)], null),cljs.core.into,cljs.core.map.call(null,((function (current_turn,next_dir){
return (function (p1__10678_SHARP_){
return cljs.core.dissoc.call(null,p1__10678_SHARP_,new cljs.core.Keyword(null,"played","played",-1713723590));
});})(current_turn,next_dir))
,cljs.core.filter.call(null,new cljs.core.Keyword(null,"played","played",-1713723590),cljs.core.get_in.call(null,table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),current_turn,new cljs.core.Keyword(null,"actioncards","actioncards",-2013329382)], null)))));
});
camarilla.rules.mark_action_as_played = (function camarilla$rules$mark_action_as_played(table,idx){
return cljs.core.update_in.call(null,table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"current-turn","current-turn",-593026573).cljs$core$IFn$_invoke$arity$1(table),new cljs.core.Keyword(null,"actioncards","actioncards",-2013329382)], null),(function (cards){
return cljs.core.seq.call(null,cljs.core.update.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cards),idx,cljs.core.assoc,new cljs.core.Keyword(null,"played","played",-1713723590),true));
}));
});
camarilla.rules.mark_action_as_unplayed = (function camarilla$rules$mark_action_as_unplayed(table,idx){
return cljs.core.update_in.call(null,table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"current-turn","current-turn",-593026573).cljs$core$IFn$_invoke$arity$1(table),new cljs.core.Keyword(null,"actioncards","actioncards",-2013329382)], null),(function (cards){
return cljs.core.seq.call(null,cljs.core.update.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cards),idx,cljs.core.dissoc,new cljs.core.Keyword(null,"played","played",-1713723590)));
}));
});
