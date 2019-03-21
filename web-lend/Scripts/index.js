$(() => {

    var formModel = {
        "goal": "",
        "type": "",
        "occupancy": "",
        "when": "",
        "location": "",
        "agent": false,
        "price": 0,
        "downpmt": 0,
        "firsttime": false,
        "creditscore": 0,
        "military": false,
        "name": "",
        "email": "",
        "phone": ""
    };

    // PAGE INDIC HANDLER
    $('.dot').click((e) => {

        var selIdx = $(e.target).index();

        $('.dot.selected').removeClass('selected');
        $('.dot').eq(selIdx).addClass('selected');

        $('.qpage').fadeOut(500);
        $('.qpage').eq(selIdx).fadeIn(500);

    });
})