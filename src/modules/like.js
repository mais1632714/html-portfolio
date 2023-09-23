
import $ from 'jquery';
class Like {
    constructor(){
   this.events();
    }
    events(){
     $(".like-box").on("click", this.ourClickDispatcher.bind(this));

    }
    //method
    ourClickDispatcher() {
        var currentLinkBox = $(e.target).closest(".like-box");

        if ( currentLinkBox.data('exists') == 'yes'){
            this.deleteLike();
        } else {
            this.createLike();

        }

    }

    createLike(){
        alert("creat test message");

    }
   
    deleteLike(){
        alert("deleat test message");

    }
}
export default like
