function sidebar() {
    $("body").prepend("<nav class='sidebar'>");
    $(".sidebar").append("<div class='sidebar-header'>").append("<div class='sidebar-nav'>");
    $(".sidebar-header").append("<div class='photo'>");

    if ($(window).width() <= 768) {
        $("main").toggleClass("haut");
        $(".sidebar-header")
            .append("<div class='prenomnom'><h3 class='title_item name'>BENJAMIN BUSSELET</h3></div>")
            .append("<div class='button'><img id='toggleButton' class='toggle-button' src='assets/img/menu.png' alt='Button Toggle'></div>");
    }


    $(".photo").append("<img src='assets/img/profile.jpg' alt='Benjamin Busselet' title='photo'>");

    $(".sidebar-nav").append("<div class='nav-link' data-value='presentation'>Présentation</div>").append("<div class='menu_competences'>Compétences</div>").append("<div class='nav-link' data-value='experiences'>Expériences</div>").append("<div class='nav-link' data-value='formations'>Formations</div>").append("<div class='nav-link' data-value='projets'>Projets</div>").append("<div class='nav-link' data-value='hobbys'>Hobbys</div>");

    $(".menu_competences").append("<div class='sub_menu'>");

    $(".sub_menu").append("<div class='nav-link' data-value='devweb'>Développement Web</div>").append("<div class='nav-link' data-value='autres'>Autres</div>");
}

function presentation() {
    $("main").empty();
    $("main").append("<section class='presentation'>");
    $(".presentation").append("<div class='title'>").append("<article>");

    if ($(window).width() >= 768) {
        $(".title").prepend("<h2 class='title_item name'>BENJAMIN BUSSELET</h2>");
        $(".title").append("<h3 class='title_item'>Développeur Web</h3>")
    } else {
        $(".title").append("<h3 class='title_item'>Développeur Web</h3>")
    }

    $("article").append("<h3>Après 10 ans dans la maintenance informatique, je me suis reconverti dans le développement web afin de mettre en pratique ma créativité.</h3>");

    $("article").append("<h3 class='subtitle'>Contacts</h3>").append("<div class='contacts'>");
    $(".contacts").append("<div class='row'><i class='fas fa-phone-square-alt'></i><span> 06 22 15 43 99</span></div>").append("<div class='row'><i class='fas fa-envelope'></i><a href='mailto:benjamin.busselet@icloud.com'> benjamin.busselet@icloud.com</a></div>").append("<div class='row'><i class='fab fa-linkedin'></i><a href='http://linkedin.com/in/benjamin-busselet'> Profil Linkedin</a></div>").append("<div class='row'><i class='fas fa-file-download'></i><a href='assets/files/cv.pdf'> Téléchargez mon CV au format PDF</a></div>");
}

function devweb() {
    $("main").empty();
    $("main").append("<section class='devweb'>");
    $(".devweb").append("<div class='title'>").append("<article>");
    $(".title").prepend("<h2 class='title_item name'>BENJAMIN BUSSELET</h2>");
    $(".title").append("<h3>COMPÉTENCES - Développement Web</h3>");
    $("article").append("<div class='languages_grid'>");

    let titles_front = ["HTML5", "CSS", "Bootstrap", "Javascript", "Jquery", "React", "NextJS"];
    let values_front = ["⭐️⭐️⭐️⭐️⭐️", "⭐️⭐️⭐️⭐️⭐️", "⭐️⭐️⭐️⭐️⭐️", "⭐️⭐️⭐️⭐️⭐️", "⭐️⭐️⭐️⭐️⭐️", "⭐️⭐️⭐️⭐️", "⭐️⭐️⭐️⭐️"];

    let table_front = $('<table>').addClass('front');

    let headerRow_front = $('<tr>');
    headerRow_front.append($('<th>').attr('colspan', '2').html('<h3 class="table_title">Langages Front-End</h3>'));
    table_front.append(headerRow_front);

    for (let i = 0; i < titles_front.length; i++) {
        let row = $('<tr>');
        row.append($('<td>').text(titles_front[i]));
        row.append($('<td>').text(values_front[i]));
        table_front.append(row);
    }

    $(".languages_grid").append(table_front);

    let titles_back = ["PHP", "NodeJS", "ExpressJS"];
    let values_back = ["⭐️⭐️⭐️⭐️", "⭐️⭐️⭐️⭐️", "⭐️⭐️⭐️⭐️"];

    let table_back = $('<table>').addClass('back');

    let headerRow_back = $('<tr>');
    headerRow_back.append($('<th>').attr('colspan', '2').html('<h3 class="table_title">Langages Back-End</h3>'));
    table_back.append(headerRow_back);

    for (let i = 0; i < titles_back.length; i++) {
        let row = $('<tr>');
        row.append($('<td>').text(titles_back[i]));
        row.append($('<td>').text(values_back[i]));
        table_back.append(row);
    }

    $(".languages_grid").append(table_back);

    let titles_base = ["SQL", "MySQL", "MsSQL", "MongoDB"];
    let values_base = ["⭐️⭐️⭐️⭐️", "⭐️⭐️⭐️⭐️", "⭐️⭐️⭐️⭐️", "⭐️⭐️⭐️⭐️"];

    let table_base = $('<table>').addClass('back');

    let headerRow_base = $('<tr>');
    headerRow_base.append($('<th>').attr('colspan', '2').html('<h3 class="table_title">Bases de données</h3>'));
    table_base.append(headerRow_base);

    for (let i = 0; i < titles_base.length; i++) {
        let row = $('<tr>');
        row.append($('<td>').text(titles_base[i]));
        row.append($('<td>').text(values_base[i]));
        table_base.append(row);
    }

    $(".languages_grid").append(table_base);
}

function autres() {
    $("main").empty();
    $("main").append("<section class='autres'>");
    $(".autres").append("<div class='title'>").append("<article>");
    $(".title").prepend("<h2 class='title_item name'>BENJAMIN BUSSELET</h2>");
    $(".title").append("<h3>COMPÉTENCES - Autres</h3>");
    $("article").append("<div class='item1'>").append("<div class='item2'>");
    $(".item1").append("<h3 class='subtitle'>Gestion De Parc Informatique</h3>").append("<ul>");
    $(".item1 ul").append("<li>diagnostiquer une panne</li>").append("<li>remplacer un matériel défectueux</li>").append("<li>tester les équipements</li>").append("<li>effectuer l’entretien des matériels</li>").append("<li>conseiller la clientèle</li>");
    $(".item2").append("<h3 class='subtitle'>Cours et Support Informatique</h3>").append("<ul>");
    $(".item2 ul").append("<li>Animation de cours</li>").append("<li>Aide à l'utilisation des équipements informatiques</li>").append("<li>Soutien dans la pratique des systèmes et logiciels</li>");
}

function experiences() {
    $("main").empty();
    $("main").append("<section class='experiences'>");
    $(".experiences").append("<div class='title'>").append("<article>");
    $(".title").prepend("<h2 class='title_item name'>BENJAMIN BUSSELET</h2>");
    $(".title").append("<h3>EXPÉRIENCES PROFESSIONNELLES</h3>");
    $("article").append("<div class='item1'>").append("<div class='item2'>").append("<div class='item3'>").append("<div class='item4'>").append("<div class='item5'>").append("<div class='item6'>");
    $(".item1").append("<small>Depuis 2022</small>").append("<h4 class='subtitle'>Smart Global Governance</h4>").append("<p>Intégrateur</p>");
    $(".item2").append("<small>2020-2022</small>").append("<h4 class='subtitle'>Auto-Entrepreneur</h4>").append("<p>Créateur de site Web</p>");
    $(".item3").append("<small>2015-2017</small>").append("<h4 class='subtitle'>Teledom Sécurité</h4>").append("<p>Technicien Support Informatique</p>");
    $(".item4").append("<small>2007-2013</small>").append("<h4 class='subtitle'>Education Nationale (Collèges)</h4>").append("<p>Gestion Du Parc Informatique</p>");
    $(".item5").append("<small>2004-2007</small>").append("<h4 class='subtitle'>Auto-Entrepreneur</h4>").append("<p>Formation et Maintenance</p>");
    $(".item6").append("<small>2001-2003</small>").append("<h4 class='subtitle'>Extreme Agency</h4>").append("<p>Gestion Du Parc Informatique</p>");
}

function formations() {
    $("main").empty();
    $("main").append("<section class='formations'>");
    $(".formations").append("<div class='title'>").append("<article>");
    $(".title").prepend("<h2 class='title_item name'>BENJAMIN BUSSELET</h2>");
    $(".title").append("<h3>FORMATIONS</h3>");
    $("article").append("<div class='item1'>").append("<div class='item2'>").append("<div class='item3'>");
    $(".item1").append("<small>2019</small>").append("<h4 class='subtitle'>OpenClassrooms - Bac+3</h4>").append("<p>Développeur d'Application - Frontend</p>");
    $(".item2").append("<small>2014</small>").append("<h4 class='subtitle'>Validation Des Acquis - Bac+2</h4>").append("<p>Services Informatique Aux Organisations</p>");
    $(".item3").append("<small>2002</small>").append("<h4 class='subtitle'>CFA en Alternance - Bac</h4>").append("<p>Technicien de Maintenance Informatique</p>");
}

function projets() {
    $("main").empty();
    $("main").append("<section class='projets'>");
    $(".projets").append("<div class='title'>").append("<article>");
    $(".title").prepend("<h2 class='title_item name'>BENJAMIN BUSSELET</h2>");
    $(".title").append("<h3 class='mb2'>PROJETS</h3>");
    $("article").append("<div class='card flip-card1'><div class='flip-card-inner'><div class='flip-card-front'><img src='assets/img/1.png' alt='2'></div><div class='flip-card-back'><div class='flip-card-text'><small>Un site OnePage 100% responsive pour un festival</small><a href='../projects/lesfilmsdepleinair/' target='_blank'>Voir le site</a>");
    $("article").append("<div class='card flip-card2'><div class='flip-card-inner'><div class='flip-card-front'><img src='assets/img/2.png' alt='3'></div><div class='flip-card-back'><div class='flip-card-text'><small>Un générateur de citations en JavaScript</small><a href='../projects/lepredicator/' target='_blank''>Voir le site</a>");
    $("article").append("<div class='card flip-card3'><div class='flip-card-inner'><div class='flip-card-front'><img src='assets/img/3.png' alt='4'></div><div class='flip-card-back'><div class='flip-card-text'><small>Un jeu de plateau tour par tour en JavaScript</small><a href='../projects/laravsnathan/' target='_blank''>Voir le site</a>");
    $("article").append("<div class='card flip-card4'><div class='flip-card-inner'><div class='flip-card-front'><img src='assets/img/4.png' alt='5'></div><div class='flip-card-back'><div class='flip-card-text'><small>Un site d'avis de restaurants en JavaScript</small><a href='../projects/kelresto/'  target='_blank''>Voir le site</a>");
    $("article").append("<div class='card flip-card5'><div class='flip-card-inner'><div class='flip-card-front'><img src='assets/img/5.png' alt='5'></div><div class='flip-card-back'><div class='flip-card-text'><small>Un site de prise de rendez-vous</small><a href='https://www.puresophro.com' target='_blank'>Voir le site</a>");
}

function hobbys() {
    $("main").empty();
    $("main").append("<section class='hobbys'>");
    $(".hobbys").append("<div class='title'>").append("<article>");
    $(".title").prepend("<h2 class='title_item name'>BENJAMIN BUSSELET</h2>");
    $(".title").append("<h3>HOBBYS</h3>");
    $("article").append("<div class='item1'>").append("<div class='item2'>").append("<div class='item3'>").append("<div class='item4'>").append("<div class='item5'>");
    $(".item1").append("<i class='fas fa-music' title='Musique'></i>").append("<span> Musique</span>");
    $(".item2").append("<i class='fas fa-tv' title='Séries'></i>").append("<span> Séries</span>");
    $(".item3").append("<i class='fas fa-film' title='Films'></i>").append("<span> Films</span>");
    $(".item4").append("<i class='fas fa-running' title='Sport'></i>").append("<span> Sport</span>");
}

$(document).on("click", ".nav-link", function (e) {
    let datatarget = e.target.dataset.value;
    window[datatarget](e);

    if ($(window).width() <= 768) {
        $(".sidebar-nav").toggleClass("active");
        $("main").toggleClass("haut");
    }
});


$(document).ready(function () {
    sidebar()
    presentation()
});

$(window).resize(function () {
    if ($(".name").length && $(window).width() <= 768) {
        $(".name").remove();
    }

    if (!$(".prenomnom").length && $(window).width() <= 768) {
        $(".sidebar-header").append("<div class='prenomnom'>").append("<div class='button'>");
        $(".prenomnom").append("<h3 class='title_item'>BENJAMIN BUSSELET</h3>");
        $(".button").append("<img id='toggleButton' class='toggle-button' src='assets/img/menu.png' alt='Button Toggle'>");
    }


    if (!$(".name").length && $(window).width() >= 768) {
        $(".title").prepend("<h2 class='title_item name'>BENJAMIN BUSSELET</h2>");
    }

    if ($(".prenomnom").length && $(window).width() >= 768) {
        $(".prenomnom").remove();
        $(".button").remove();
    }

    if ($(".haut").length && $(window).width() >= 768) {
        $("main").toggleClass("haut");
    }

    if (!$(".haut").length && $(window).width() <= 768) {
        $("main").toggleClass("haut");
    }
});

$(document).on("click", "#toggleButton", function () {
    $(".sidebar-nav").toggleClass("active");
    $("main").toggleClass("haut");
});