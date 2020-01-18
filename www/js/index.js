 $(document).ready(function() {
 		var http = "https://";
 		var endPoint = "api.rd-nextgen.kf4d";
 		var environment = "-qa";
 		var port="";
 		var extension= ".com";
 		var projExtension = "/RD-WebApp/";

 		function loadPage(page){
 			console.log("page"+page+".html");
 			document.location = page+".html";
 		}
 		
        $("#submit").click(function(){
        	var url = http+endPoint+environment+port+extension+projExtension;
 			var authenticateApi = "user/authenticate";
        	var userName = $("#userName"). val();
        	var password = $("#password"). val();
        	var jsonObj = '{"email": "' + userName + '"}'
        	authURL = url+authenticateApi;
        	console.log("authURL"+authURL);
            $.ajax({
			 type: "POST",
			 url: authURL,
			 headers: {
			 		"Application-Key":"3u6NTh/ezWAkrMrjaZqGkLbgN1xHWKJ5QIbUmf6/0mM="
			 		 },
			 data: jsonObj,
			 contentType:"application/json; charset=utf-8",
			 dataType : 'json',
			 success: function(output, status, xhr){
	              var headers = xhr.getAllResponseHeaders();
	              var arr = headers.trim().split(/[\r\n]+/);
  			     // Create a map of header names to values
			     var headerMap = {};
			     arr.forEach(function (line) {
			       console.log(line);
			       var parts = line.split(': ');
			       var header = parts.shift();
			       if(header==="rd-access-token"){
			       	var value = parts.join(': ');
			       	sessionStorage.setItem("rd-access-token", value);
			       }
			       //headerMap[header] = value;
			       console.log(headerMap[header]);
			     });
			     loadPage("clientList");
	         },
	         error: function( jqXHR,textStatus, errorThrown){
			      console.log("Error askdjk");
			      console.log(jqXHR);
			      console.log(textStatus);
			      console.log(errorThrown);
			    }
			});
        });
  });