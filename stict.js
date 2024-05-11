function mystrictfun(){
    "use strict";

    function nested(){
        return "So am I";
    }
    return "Hi all I am a strict mode function";
}
function mynotStrictfun(){
    return "I am not strict";
}