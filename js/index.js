/*
Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

    http://aws.amazon.com/apache2.0/

or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/	

	$(document).ready(function() {
		$("#clipsbutton").on("click", function(e){  
			/* Clean up existing divs containing clips */
			$("#clips-display").children().remove();
			/* GET request for top clips using client id and game */
			$.get("https://api.twitch.tv/kraken/clips/top", {client_id : $("#client-id").val(), game : $("#game").val(), api_version: "4"})
				.done(clipsLoaded);
			/* GET request for search api to get game logo */
			

			// $.get("https://api.twitch.tv/kraken/search/games", {client_id : $("#client-id").val(), query : $("#game").val(), api_version: "5"})
			// 	.done(embedgameimage);


		    /* GET request for search  game*/		
		  //  $.get("https://api.twitch.tv/kraken/search/channels", {client_id : $("#client-id").val(), query : $("#game").val(),limit: 20,offset: 1, api_version: "5"})
				// .done(embedgameimage);


			$.get("https://api.twitch.tv/kraken/search/streams", {client_id : $("#client-id").val(), query : $("#game").val(), api_version: "5"})
				.done(embedgameimage);

	   		e.preventDefault();   		
	   	});
	});

	/*
	This function takes the JSON data from the Clips API GET response and displays it in <div> tags by creating child tags for clips-display div
	*/
	function clipsLoaded(data) {
		var $clips= $("#clips-display");

		$clips.children().remove();

		data.clips.forEach(function(clip) {
			//var $iframe = $('<iframe width="640" height="360" frameborder="0" scrolling="no" allowfullscreen="true">');
			//$iframe.src = clip.embed_url;
			


			//var $iframe =clip.embed_html;
			//$clips.append($iframe);
		});
	}

   	function embedgameimage(data) {

   		//console.log(data.streams[0].channel.name);
		var $clips= $("#clips-display");

		$clips.children().remove();
   		data.streams.forEach(function(stream){

	        var $iframe = $('<iframe width="640" height="360" frameborder="0" scrolling="no" allowfullscreen="true">');
			var str = "https://player.twitch.tv/?autoplay=false&channel="+stream.channel.name+"";

			$iframe.attr("src",str);

			$clips.append($iframe);


   		});
	}
