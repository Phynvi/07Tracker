var types=[];var baseUrl;var siteUrl;types["default"]="varrock";types["varrock_bank"]="varrock_bank";types["lumbridge"]="lumbridge";types["canifis"]="canifis";types["chaos_altar"]="chaos_altar";types["dark_warriors"]="dark_warriors_fortress";types["farming"]="farming";types["lesser_demons"]="lesser_demons";types["rellekka"]="rellekka";types["ruins"]="ruins";types["seers"]="seers";types["wildy"]="wilderness_ditch";$("#type").change(function(){var e=$("#type option:selected").val();$("#example").attr("src",baseUrl+"assets/img/ajax-loader.gif");var t=$("<img/>").attr({id:"example",src:siteUrl+"sig/Vault/"+types[e]+".png"}).load(function(){if(!this.complete||typeof this.naturalWidth=="undefined"||this.naturalWidth==0){alert("broken image!")}else{$("#example").replaceWith(t)}})});$("#form").submit(function(e){var t=$('input[name="username"]').val().replace(" ","+");var n=$('select[name="type"]').val();$("#links").fadeIn("slow",function(){$("#links").show()});$("#direct").val(siteUrl+"sig/"+t+"/"+types[n]+".png");$("#bbcode").val("[url=http://www.07tracker.com][img]"+siteUrl+"sig/"+t+"/"+types[n]+".png[/img][/url]");$("#html").val('<a href="http://www.07tracker.com"><img src="'+siteUrl+"sig/"+t+"/"+types[n]+'.png" /></a>');$("#finishedExample").attr("src",siteUrl+"sig/"+t+"/"+types[n]+".png");e.preventDefault()});$("#direct,#bbcode,#html").click(function(e){this.select()});$(function(){var e=$("#type option:selected").val();$("#example").attr("src",siteUrl+"sig/Vault/"+types[e]+".png")})