$(document).ready(function() {
    loadData();
    

    var newQuote;
    var newAuthor;
    

    function loadData() {

        //prepend cors data to solve cross browser issues

        var url = "https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en";

        //Make an AJAX Request - Old version (did not work because of redundant json and url format indications)

        /*$.ajax({
            url: url,
            json: "json",
            dataType: "json",
            data: {
                method: "getQuote",
                lang: "en",
                format: "json"
            },
            success: function(res) {
                newQuote = res.quoteText;
                newAuthor = res.quoteAuthor;
                $("#quote-box").html('"' + newQuote + '"');
                if(newAuthor) {
                    $("#author").html("- " + newAuthor)
                } else {
                    $("#author").html("- " + "Anonymous")
                }
            }
        });*/

        //new JSON request

        $get.JSON(url, function(res){
            var newQuote = res.quoteText;
            var newAuthor = res.quoteAuthor;
            if(newAuthor) {
                $("#author").html('"' + newAuthor + '"')
            } else {
                $("#author").html("Unknown")
            }
        })
    };

    
    $("#quote-btn").on("click", function(){ loadData()
    });

    $("#twt-btn").on("click", function() {
        var myWindow = window.open("https://twitter.com/intent/tweet?text=" + newQuote + "--" + newAuthor, "myWindow" )
    });

})

