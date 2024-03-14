$(window).on("load", function() {
    // Animation du point de chargement
    var initDot = document.getElementById("loading");
    var loading = setInterval(function() {
        if(initDot.innerHTML.length == 5) {
            initDot.innerHTML = "";
        } else {
            initDot.innerHTML += ".";
        }
    }, 350); // Vitesse du point
 
    // Masquer le message de chargement après un certain délai
    var $loadingMessage = $('#loadingH1');
    setTimeout(function() {
        clearInterval(loading);
        $loadingMessage.hide();
    }, 1500);
 
    // Définir les messages à afficher
    setTimeout(function(){
        var greeting = "UNIDENTIFIED ORGANIC LIFEFORM DETECTED";
        var message = "Running code protocol for.. Web Development Student | 📆Available for a 2-year internship starting September 2024 | Passionate about the Web and Gaming 🎮 | Aspiring Full Stack Developer... 01001000 01100101 01101100 01101100 01101111";
        var $identityDiv = $("#identity-results");
        var $name = "NAME: ILAN SERVAIS";
        var $alias = "KNOWN ALIAS: SL4SH"
        var $occupation  = "OCCUPATION: WEB DEVELOPER | GAMER";
        var $frontEnd  = "Skills developed in web developer specialization";
        var $JSFrameworks = "Front & Back-end Development: HTML | CSS | PHP | MySQL";
        var $JSLibs = "Full-stack Development: JavaScript | Node.js | React | Symfony";
        var $CSSFrameworks = "API Development: API Platform | Express";
        var $CSSPre = "Project Management | Agile Methodology | Design (UML / Merise)";
        var $frontEndAnimation = "Mobile Development | SEO | Documentation and Deployment";
        var $cmsDevelopment = "00111100 00110011";
        var $wordpress = "LOADING PROJECTS...";
        var $design = " ";
 
        // Afficher progressivement les messages
        function initIdentityResults(i){
            $("#message").addClass("sign cursor").text(message.substring(0, i));
            if(i < message.length){
                setTimeout(function(){
                    initIdentityResults(i + 1);
                }, 35);   
            }else{
                $('#message').removeClass("cursor");
                // Fonction pour charger le CV
                var loadingResume = function(){
                    $("#loadingMessage2").show()
                    var dotAlpha = document.getElementById("alpha-loading");
                    var loadingAlpha = setInterval(function() {
                        if(dotAlpha.innerHTML.length == 6) {
                            dotAlpha.innerHTML = "";
                        } else {
                            dotAlpha.innerHTML += ".";
                            setTimeout(function() {
                                clearInterval(loadingAlpha);
                                $("#loadingMessage2").hide();
                            }, 2000);
                        }
                    }, 350);  // Vitesse du point
                }
                loadingResume();
                // Fonctions pour afficher les informations
                function initName(i){
                    $("#name").addClass("sign cursor").text($name.substring(0, i));
                    if(i < $name.length){
                        setTimeout(function(){
                            initName(i + 1);   
                        }, 35);
                    }else{
                        $("#name").removeClass("cursor");
                        setTimeout(function() {
                            initAlias(0);
                        }, 1500);      
                    }
                }
                setTimeout(function() {
                    initName(0);
                }, 2500);
            }
            // Fonction pour afficher le nom d'utilisateur
            function initAlias(i){
                $("#alias").addClass("sign cursor").text($alias.substring(0, i));
                if(i < $alias.length){
                    setTimeout(function(){
                        initAlias(i + 1);   
                    }, 35);
                }else{
                    $("#alias").removeClass("cursor");
                    setTimeout(function() {
                        initOccupation(0);
                    }, 1500);
                }
            }
            // Fonction pour afficher l'occupation
            function initOccupation(i){
                $("#occupation").addClass("sign cursor").text($occupation.substring(0, i));
                if(i < $occupation.length){
                    setTimeout(function(){
                        initOccupation(i + 1);   
                    }, 35);
                }else{
                    $("#occupation").removeClass("cursor");
                    setTimeout(function() {
                        initFrontEnd(0);
                    }, 1500);
                }
            }
            // Fonction pour afficher txt  
            function initFrontEnd(i){
                $('#front-end-span').addClass('fa fa-wrench');
                $('#front-end').addClass("cursor").text($frontEnd.substring(0, i));
                if(i < $frontEnd.length){
                    setTimeout(function(){
                        initFrontEnd(i + 1);  
                    }, 35);
                }else{
                    $('#front-end').removeClass("cursor");
                    setTimeout(function() {
                        initJSFrameworks(0);
                    }, 1500);
                }
            }
            // Fonction pour afficher txt  
            function initJSFrameworks(i){
                $('#js-frameworks').addClass("sign cursor").text($JSFrameworks.substring(0, i));
                if(i < $JSFrameworks.length){
                    setTimeout(function(){
                        initJSFrameworks(i + 1);  
                    }, 35);
                }else{
                    $('#js-frameworks').removeClass("cursor");
                    setTimeout(function() {
                        initJSLibs(0);
                    }, 1500);
                }
            }
            // Fonction pour afficher txt  
            function initJSLibs(i){
                $('#js-libs').addClass("sign cursor").text($JSLibs.substring(0, i));
                if(i < $JSLibs.length){
                    setTimeout(function(){
                        initJSLibs(i + 1);  
                    }, 35);
                }else{
                    $('#js-libs').removeClass("cursor");
                    setTimeout(function() {
                        initCSSFrameworks(0);
                    }, 1500);
                }
            }
            // Fonction pour afficher txt  
            function initCSSFrameworks(i){
                $('#css-frameworks').addClass("sign cursor").text($CSSFrameworks.substring(0, i));
                if(i < $CSSFrameworks.length){
                    setTimeout(function(){
                        initCSSFrameworks(i + 1);  
                    }, 35);
                }else{
                    $('#css-frameworks').removeClass("cursor");
                    setTimeout(function() {
                        initCSSPre(0);
                    }, 1500);
                }
            }
            // Fonction pour afficher txt  
            function initCSSPre(i){
                $('#css-pre').addClass("sign cursor").text($CSSPre.substring(0, i));
                if(i < $CSSPre.length){
                    setTimeout(function(){
                        initCSSPre(i + 1);  
                    }, 35);
                }else{
                    $('#css-pre').removeClass("cursor");
                    setTimeout(function() {
                        initFrontEndAnimation(0);
                    }, 1500);
                }
            }
            // Fonction pour afficher txt  
            function initFrontEndAnimation(i){
                $('#front-end-animation').addClass("sign cursor").text($frontEndAnimation.substring(0, i));
                if(i < $frontEndAnimation.length){
                    setTimeout(function(){
                        initFrontEndAnimation(i + 1);  
                    }, 35);
                }else{
                    $('#front-end-animation').removeClass("cursor");
                    setTimeout(function() {
                        initCMSDevelopment(0);
                    }, 1500);
                }
            }
            // Fonction pour afficher txt  
            function initCMSDevelopment(i){
                $('#cms-span').addClass("fa fa-wordpress")
                $('#CMS-development').addClass("cursor").text($cmsDevelopment.substring(0, i));
                if(i < $cmsDevelopment.length){
                    setTimeout(function(){
                        initCMSDevelopment(i + 1);  
                    }, 35);
                }else{
                    $('#CMS-development').removeClass("cursor");
                    setTimeout(function() {
                        initWordpress(0);
                    }, 1500);
                }
            }
            // Fonction pour afficher txt  
            function initWordpress(i){
                $('#wordpress').addClass("sign cursor").text($wordpress.substring(0, i));
                if(i < $wordpress.length){
                    setTimeout(function(){
                        initWordpress(i + 1);  
                    }, 35);
                }else{
                    $('#wordpress').removeClass("cursor");
                    setTimeout(function() {
                        initDesign(0);
                    }, 1500);
                }
            }
            // Fonction pour afficher txt  
            function initDesign(i){
                $('#design-span').addClass('fa fa-paint-brush');
                $('#design').addClass("cursor").text($design.substring(0, i));
                if(i < $design.length){
                    setTimeout(function(){
                        initDesign(i + 1);  
                    }, 35);
                }else{
                    $('#design').removeClass("cursor");
                    setTimeout(function() {
                        initWebDesign(0);
                    }, 1500);
                }
            }
            // Fonction pour afficher txt  
            function initWebDesign(i){
                $('#web-design').addClass("sign cursor").text($webDesign.substring(0, i));
                if(i < $webDesign.length){
                    setTimeout(function(){
                        initWebDesign(i + 1);  
                    }, 35);
                }else{
                    $('#web-design').removeClass("cursor");
                    setTimeout(function() {
                        initBranding(0);
                    }, 1500);
                }
            }
            // Fonction pour afficher txt  
            function initBranding(i){
                $('#branding').addClass("sign cursor").text($branding.substring(0, i));
                if(i < $branding.length){
                    setTimeout(function(){
                        initBranding(i + 1);  
                    }, 35);
                }else{
                    $('#branding').removeClass("cursor");
                    setTimeout(function() {
                        initDesignAnimation(0);
                    }, 1500);
                }
            }
            // Fonction pour afficher txt  
            function initDesignAnimation(i){
                $('#design-animation').addClass("sign cursor").text($designAnimation.substring(0, i));
                if(i < $designAnimation.length){
                    setTimeout(function(){
                        initDesignAnimation(i + 1);  
                    }, 35);
                }else{
                    //$('#design-animation').removeClass("cursor");
                }
            }
        }
         
        // Fonction pour afficher le message d'accueil
        function initProgramAlpha(i){
            $("#greeting").addClass("cursor").text(greeting.substring(0, i));
            if(i < greeting.length){
                setTimeout(function(){
                    initProgramAlpha(i + 1);
                }, 35);   
            }else{
                $("#greeting").removeClass("cursor");
                initIdentityResults(0);
            }
        }
        initProgramAlpha(0)
 
    }, 1500);
 
    // Supprimer la classe img-hidden une fois que la page est chargée
    $(".img-container img").css("opacity", "0").each(function(index) {
        $(this).delay(500 * index).animate({ opacity: 1 }, 45000);
    });
 });
 
// Fonction pour changer le volume
function changeVolume() {
    var player = document.getElementById('musicPlayer');
    var volume = document.getElementById('volumeControl').value;
    player.volume = volume;
}

// Fonction pour mettre en pause ou jouer la musique
function togglePlayPause() {
    var player = document.getElementById('musicPlayer');
    if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
}

// Définir le volume initial à 5% au chargement de la page
window.onload = function() {
    var player = document.getElementById('musicPlayer');
    player.volume = 0.05;
};
