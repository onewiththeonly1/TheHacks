// STEP - 0 : Fire PageDown key on the page, so that all the comments are loaded.
// ----------

// STEP - 1 : 
// ----------
l0 = document.getElementsByTagName("paper-button")
l0[0].attributes["aria-label"].value == "Reply"
fl = Array()
var i = 0
for (i = 0; i < l0.length; ++i){
	if (l0[i].attributes.hasOwnProperty("aria-label")){
		if (l0[i].attributes["aria-label"].value == 'Reply'){
			fl.push(l0[i])		
		}	
	}
}
for (i = 0; i < fl.length; ++i){
	fl[i].click()
}
fl[0].focus()
// ---
ll0 = document.getElementsByTagName("yt-formatted-string")
fl0 = Array()
var i = 0
for (i = 0; i < ll0.length; ++i){
	if (ll0[i].attributes.hasOwnProperty("slot")){
		if (ll0[i].attributes["slot"].value == 'input'){
			fl0.push(ll0[i])		
		}	
	}
}
for (i = 0; i < fl0.length; ++i){
	fl0[i].childNodes[1].textContent = "Well, you know what, you must watch this video - <LINK>"
}
// STEP - 2 : Now fire Tab Key on the page, so that all the Reply buttons get activated.
// STEP - 3 : The following will just post the reply one after the another.
// ---
l0 = document.getElementsByTagName("paper-button")
l0[0].attributes["aria-label"].value == "Reply"
fl = Array()
var i = 0
for (i = 0; i < l0.length; ++i){
	if (l0[i].attributes.hasOwnProperty("aria-label")){
		if (l0[i].attributes["aria-label"].value == 'Reply'){
			fl.push(l0[i])		
		}	
	}
}
realReply = Array()
for (i = 1; i < fl.length; i += 2){
	realReply.push(fl[i])
}
realReply[0].style.backgroundColor = "red";

for (i = 0; i < realReply.length; i += 1){
	setTimeout(function(i){realReply[i].click();}, 1000*(i+1), i);
}