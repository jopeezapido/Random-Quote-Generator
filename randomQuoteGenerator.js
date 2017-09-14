$(document).ready(function() {
    $('#button').on('click'.function() {
        $ajax({
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
                $("#quote-box").html(newQuote)
            }
        })
    })  
    
})