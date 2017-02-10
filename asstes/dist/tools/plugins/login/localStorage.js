/**
 * Created by hy on 16-6-14.
 */
(function($){
    var localStorage = window.localStorage;

    var setStorage = $.localStorage = function(key, value){

        if(!localStorage && value,key === undefined){
            return false;
        }else{
            localStorage.setItem(key, value);
        }
    }

    var remove = $.removeLocalStorage = function(key){
        if(!localStorage && key === undefined){
            return false;
        }else{
            localStorage.removeItem(key);
        }
    }

})(jQuery);