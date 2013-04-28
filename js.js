
$( "#button" ).click( function(){
	appIDVal = $( "#appID" ).val();
	appIDLen = $( "#appID" ).val().length;
	appURL = $( "#appURL" ).val();

	if( appIDVal != "" && appIDLen == 15 && appURL != "" ){
		window.location.href = "https://www.facebook.com/dialog/pagetab?app_id=" + appIDVal + "&next=" + appURL;
	}
});