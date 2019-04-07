// Compiled by ClojureScript 1.10.516 {}
goog.provide('camarilla.gapi_auth');
goog.require('cljs.core');
goog.require('re_frame.core');
camarilla.gapi_auth.update_sign_in_status = (function camarilla$gapi_auth$update_sign_in_status(status){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","sign-in-status","user/sign-in-status",-184579203),status], null));
});
camarilla.gapi_auth.init_gapi_client = (function camarilla$gapi_auth$init_gapi_client(){
return gapi.client.init(({"clientId": "498608089004-f19mc97bsi1v592kshic5fd89gvims57.apps.googleusercontent.com", "discoveryDocs": ["https://sheets.googleapis.com/$discovery/rest?version=v4"], "scope": "https://www.googleapis.com/auth/spreadsheets.readonly"})).then((function (){
gapi.auth2.getAuthInstance().isSignedIn.listen(camarilla.gapi_auth.update_sign_in_status);

return camarilla.gapi_auth.update_sign_in_status.call(null,gapi.auth2.getAuthInstance().isSignedIn.get());
}),(function (error){
return console.log("gapi init error:",error);
}));
});
camarilla.gapi_auth.handle_client_load = (function camarilla$gapi_auth$handle_client_load(){
return gapi.load("client:auth2",camarilla.gapi_auth.init_gapi_client);
});
camarilla.gapi_auth.handle_auth_click = (function camarilla$gapi_auth$handle_auth_click(_){
return gapi.auth2.getAuthInstance().signIn();
});
camarilla.gapi_auth.handle_signout_click = (function camarilla$gapi_auth$handle_signout_click(_){
return gapi.auth2.getAuthInstance().signOut();
});
camarilla.gapi_auth.google_auth = (function camarilla$gapi_auth$google_auth(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Google Auth"], null),((cljs.core.not.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","signed-in?","user/signed-in?",-1156909147)], null)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#authorize_button","button#authorize_button",330697768),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),camarilla.gapi_auth.handle_auth_click], null),"Authorize"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#signout_button","button#signout_button",-417977989),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),camarilla.gapi_auth.handle_signout_click], null),"Sign Out"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre#content","pre#content",1687061412),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"pre-wrap"], null)], null)], null)], null);
});
