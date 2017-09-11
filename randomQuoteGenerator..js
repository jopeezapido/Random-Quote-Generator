$(document).ready(function() {
    

    $ajax({
        url: "http://api.forismatic.com/api/1.0/",
        dataType: 'jsonp',
        data: {
            method: getQuote,
            lang: "en",
            jsonp: jsonp,
        },
        success: function(res) {
            
        }    
    })          
})