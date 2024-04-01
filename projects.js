window.addEventListener('DOMContentLoaded', function() {
    var initialText = 'MatchaTea';
    document.querySelector('.bg-text').innerHTML = initialText;

    var isOpen = false;
    var toggleButton = document.getElementById('toggleButton');
    var additionalText = `<div class="centered-title">
                            <h2>Projet d'école</h2>
                        </div>
                        <h3>Contexte :</h3>
                        <p>Durée : 5 jours | Équipe : 3 personnes | Objectif : Maîtrise de HTML et CSS</p>
                        <p>Développement d'un site web de vente de thé matcha, où chaque membre de l'équipe devait créer minimum deux pages HTML utilisant un fichier CSS commun, nommé matchaX.css (avec X représentant un membre de l'équipe).</p>
                        <h3>Contribution :</h3>
                        <p>J'ai dirigé la création du design sur Trello et élaboré la charte graphique. Responsable de la création et du stylisme des cinq pages HTML, ainsi que de la mise en place du CSS et des éléments de design (header footer sidenav).</p>
                        <h3>Réussites :</h3>
                        <p>J'ai concentré mes efforts sur l'écriture, la structuration, le rangement et les commentaires du code, des éléments que j'ai réussi à aborder avec une certaine efficacité.</p>
                        <h3>Difficultés rencontrées :</h3>
                        <p>Malheureusement la collaboration a été limitée malgré mes efforts pour stimuler mes camarades, retardant le projet à 90% de sa réalisation. Ce manque de communication a entraîné une charge de travail imprévue au dernier moment, nécessitant un effort supplémentaire pour finaliser le projet</p> `;

    // Affiche ou cache le texte supplémentaire et l'image carrée lorsque le bouton est cliqué
    toggleButton.addEventListener('click', function() {
        var bgText = document.querySelector('.bg-text');
        var squareImage = document.querySelector('.square-image');
        if (!isOpen) {
            bgText.innerHTML += additionalText;
            squareImage.style.display = 'inline-block'; // Affiche l'image carrée
            isOpen = true;
            toggleButton.textContent = 'Click on the image!';
        } else {
            bgText.innerHTML = initialText;
            squareImage.style.display = 'none'; // Cache l'image carrée
            isOpen = false;
            toggleButton.textContent = 'Click me!';
        }
    });

    // Gestion de l'événement pour le deuxième bouton
    var toggleButton2 = document.getElementById('toggleButton2');
    var isOpen2 = false;
    var additionalText2 = `<div class="centered-title">
                            <h2>Projet 2</h2>
                        </div>
                        <h3>Contexte :</h3>
                        <p>Description du projet 2</p>`;

    toggleButton2.addEventListener('click', function() {
        var bgText = document.querySelector('.bg-text');
        if (!isOpen2) {
            bgText.innerHTML += additionalText2;
            isOpen2 = true;
            toggleButton2.textContent = 'Click on the image!';
        } else {
            bgText.innerHTML = initialText;
            isOpen2 = false;
            toggleButton2.textContent = 'Click me!';
        }
    });

    // Gestion du troisième bouton
    var toggleButton3 = document.getElementById('toggleButton3');
    var isOpen3 = false;
    var additionalText3 = `<div class="centered-title">
                            <h2>Projet 3</h2>
                        </div>
                        <h3>Contexte :</h3>
                        <p>Description du projet 3</p>`;

    toggleButton3.addEventListener('click', function() {
        var bgText = document.querySelector('.bg-text');
        if (!isOpen3) {
            bgText.innerHTML += additionalText3;
            isOpen3 = true;
            toggleButton3.textContent = 'Click on the image!';
        } else {
            bgText.innerHTML = initialText;
            isOpen3 = false;
            toggleButton3.textContent = 'Click me!';
        }
    });


    // Gestion du défilement Scroll

    // Gestion du défilement Scroll
    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        var percentScrolled = (scrollPosition / document.documentElement.scrollHeight) * 100; // Calculer le pourcentage du défilement

        var newText = '';

        // Déterminez le texte en fonction de la position de défilement en pourcentage
        if (percentScrolled < 16) { // Par exemple, vous pouvez ajuster cette valeur selon vos besoins
            newText = 'MatchaTea<br>';
            document.querySelector('.square-image').style.display = 'none'; // Cacher l'image carrée
        } else if (percentScrolled < 50) {
            newText = 'Project : Perso (test JS)';
            document.querySelector('.square-image').style.display = 'none'; // Cacher l'image carrée
        } else {
            newText = 'Project : Ville Marseille';
            document.querySelector('.square-image').style.display = 'none'; // Cacher l'image carrée
        }

        // Mettez à jour le texte dans la balise div avec la propriété innerHTML
        document.querySelector('.bg-text').innerHTML = newText;
    });
});

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    var scrollPercent = (scrollPosition / maxScroll) * 100;

    var gradientColor;

    if (scrollPercent < 25) {
        gradientColor = `linear-gradient(#9CC757 ${scrollPercent}%, #FFA500 ${scrollPercent}%)`;
    } else if (scrollPercent < 50) {
        gradientColor = `linear-gradient(#FFA500 ${scrollPercent}%, #FF6347 ${scrollPercent}%)`;
    } else if (scrollPercent < 75) {
        gradientColor = `linear-gradient(#FF6347 ${scrollPercent}%, #6495ED ${scrollPercent}%)`;
    } else {
        gradientColor = `linear-gradient(#6495ED ${scrollPercent}%, #9CC757 ${scrollPercent}%)`;
    }

    var scrollbar = document.documentElement.style;
    scrollbar.setProperty('--scrollbar-gradient', gradientColor);
});
