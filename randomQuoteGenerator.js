$(document).ready(function() {
    $('#quote-box').on('click'.function() {
        $ajax({
            url: "/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
            dataType: 'json',
            success: function() {
            }
        }
    })
    
})