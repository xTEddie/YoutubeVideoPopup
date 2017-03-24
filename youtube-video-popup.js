$(document).ready(function() {
    $(".youtube-video-popup").click(function(event){
        event.preventDefault();

        var popup_id = "video-popup";        
        
        // If element DNE
        if($('#' + popup_id).length == 0){
            var div = document.createElement('div');    
            div.setAttribute('id', popup_id);
            document.body.append(div);
        } 

        var popup = $('#' + popup_id);

        // Disable scroll bar
        $('body').css("overflow", "hidden");

        popup.css({
            "background-color": "rgba(0, 0, 0, 0.5)",       
            "position": "absolute",
            "top": $('body').scrollTop(),            
            "text-align": "center",                                    
            "width": "100%",
            "height": "100%",
            "padding-top": "5%"            
        });
        
        var div = document.createElement("div");
        div.setAttribute("style", "width:100%;text-align:right;padding-right:10%;font-size:3em;margin-bottom:1em;");

        var x = document.createElement("i");
        x.setAttribute("class", "fa fa-times");
        x.setAttribute("aria-hidden", "true");        
        
        var iframe = document.createElement('iframe');
        iframe.setAttribute('src', $(this).attr('href').replace("watch?v=", "embed/"));
        iframe.setAttribute('width', "70%");
        iframe.setAttribute('height', "75%");
        iframe.setAttribute('frameborder', "0");

        div.appendChild(x);
        popup.append(div);                                     
        popup.append(iframe);

        $(".fa-times").click(function(){
            // Set scroll bar setting to default
            $('body').css("overflow", "initial");
            popup.remove();
        });
    });        
});