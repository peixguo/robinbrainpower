// ==UserScript==
// @name         ROBIN AUTOVOTER - BRAIN POWER EDITION
// @namespace    http://www.howlongsincekatyperryslastalbum.com
// @version      1.989
// @description  Autovotes via text on /r/robin and spams BRAIN POWER
// @author       /u/peix (credit to /u/keythkatz for original Robin Autovoter)
// @match        https://www.reddit.com/robin*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

function sendMessage(message){
    $("#robinSendMessage > input[type='text']").val(message);
    $("#robinSendMessage > input[type='submit']").click();
}

// Auto votes grow
setTimeout(function(){
    sendMessage("/vote grow");
    setTimeout(function(){
        window.location.reload();
    }, 300000);
    
}, 5000);

// Brain Power Spam Here (can be deleted if you'd like)
setInterval(function(){
    sendMessage("O-oooooooooo AAAAE-A-A-I-A-U- JO-oooooooooooo AAE-O-A-A-U-U-A- E-eee-ee-eee AAAAE-A-E-I-E-A- JO-ooo-oo-oo-oo EEEEO-A-AAA-AAAA")    
}, 10000);
