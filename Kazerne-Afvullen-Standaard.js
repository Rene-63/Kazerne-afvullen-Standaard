// ==UserScript==
// @name         Kazerne afvullen Standaard
// @namespace    http://tampermonkey.net/
// @version      2023.08.08
// @description  Doneer aan het Vergeten Kind
// @author       Rene-MKS & Piet2001
// @match        https://www.meldkamerspel.com/buildings/*
// @match        https://politie.meldkamerspel.com/*
// @grant        none
// @updateURL    https://github.com/Rene-63/Kazerne-afvullen-Standaard/raw/main/Kazerne-Afvullen-Standaard.js
// @downloadURL  https://github.com/Rene-63/Kazerne-afvullen-Standaard/raw/main/Kazerne-Afvullen-Standaard.js

// ==/UserScript==

var runPage = false;

(async function () {
    'use strict';

    setlocalstorageitems()
    setnavitems()

    function setlocalstorageitems() {
        if (!localStorage.KAS_VNL_Shortcut) {
            localStorage.setItem("KAS_VNL_Shortcut", 'off');
        }
    }

    function setnavitems() {
        var navKAS_VNL_Shortcut = '<a role="presentation" href="#" id="setKAS_VNL_Shortcut" data-KAS_VNL_Shortcut="' + localStorage.getItem('KAS_VNL_Shortcut') + '" >KAS_VNL Sneltoets (R): <strong><span id="showKAS_VNL_Shortcut">' + (localStorage.getItem('KAS_VNL_Shortcut') == 'on' ? 'Aan' : 'Uit') + '</span></strong></a>';
        $("ul .dropdown-menu[aria-labelledby='menu_alliance'] >> a[href='/freunde']").parent().after(navKAS_VNL_Shortcut);
    }

    $("#setKAS_VNL_Shortcut").click(function () {
        if (localStorage.getItem('KAS_VNL_Shortcut') == 'on') {
            localStorage.setItem("KAS_VNL_Shortcut", 'off');
        } else {
            localStorage.setItem("KAS_VNL_Shortcut", 'on');
        }
        $("#showKAS_VNL_Shortcut").html((localStorage.getItem('KAS_VNL_Shortcut') == 'on' ? 'Aan' : 'Uit'));
    });

    function checkurl() {
        var url = window.location.pathname.split("/");
        $.each(url, function (index, value) {
            if (value == 'missions') {
                runPage = true;
            }
        });
        return runPage;
    }

    

const delay = ms => new Promise(res => setTimeout(res, ms));
const GewensteLevelBrandweer = 24;


(function () {
    'use strict';

    $('.dl-horizontal').append('<button class="btn btn-xs btn-default" id="BrandweerVullen">Brandweer Afvullen Standaard </button>');


    $('#BrandweerVullen').on('click', function (e) {
        console.log("Kazerne vullen");
        Brandweer();
    });

})();

async function Brandweer() {
    var id = window.location.pathname.split("/").pop();
    var level = GewensteLevelBrandweer - 1

    var levelurl = 'https://www.meldkamerspel.com/buildings/' + id + '/expand_do/credits?level=' + level;
    console.log(levelurl)
    $.ajax({ url: levelurl })

    await delay(2000)
    KoopVoertuig(id, 31)
    await delay(2000)
    KoopVoertuig(id, 19)
    await delay(2000)
    KoopVoertuig(id, 5)
    await delay(2000)
    KoopVoertuig(id, 24)
    await delay(2000)
    KoopVoertuig(id, 24)
    await delay(2000)
    KoopVoertuig(id, 4)
    await delay(2000)
    KoopVoertuig(id, 3)
    await delay(2000)
    KoopVoertuig(id, 18)
    await delay(2000)
    KoopVoertuig(id, 2)
    await delay(2000)
    KoopVoertuig(id, 10)
    await delay(2000)
    KoopVoertuig(id, 34)
    await delay(2000)
    KoopVoertuig(id, 12)
    await delay(2000)
    KoopVoertuig(id, 12)
    await delay(2000)
    KoopVoertuig(id, 12)
    await delay(2000)
    KoopVoertuig(id, 11)
    await delay(2000)
    KoopVoertuig(id, 11)
    await delay(2000)
    KoopVoertuig(id, 56)
    await delay(2000)
    KoopVoertuig(id, 56)
    await delay(2000)

    location.reload()
}



function KoopVoertuig(gebouw, type) {
    var url = 'https://www.meldkamerspel.com/buildings/' + gebouw + '/vehicle/' + gebouw + '/' + type + '/credits'
    console.log(url)
    $.ajax({ url: url })
}
