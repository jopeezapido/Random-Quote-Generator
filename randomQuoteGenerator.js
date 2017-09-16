$(document).ready(function() {
    loadData();
    

    var newQuote;
    var newAuthor;

    function loadData() {

        //Make an AJAX Request
        $.ajax({
            url: "http://api.forismatic.com/api/1.0/",
            jsonp: "jsonp",
            dataType: "jsonp",
            data: {
                method: "getQuote",
                lang: "en",
                format: "jsonp"
            },
            success: function(res) {
                newQuote = res.quoteText;
                newAuthor = res.quoteAuthor;
                $("#quote-box").html('"' + newQuote + '"');
                if(newAuthor) {
                    $("#author").html("- " + newAuthor)
                } else {
                    $("#author").html("- " + newAuthor = "Anonymous")
                }
            }
        });
    };

    
    $("#quote-btn").on("click", function(){ loadData()
    });

    $("#twt-btn").on("click", function() {
        var myWindow = window.open("https://twitter.com/intent/tweet?text=" + newQuote + " --" + newAuthor, "width=400,height=300")
    });
})