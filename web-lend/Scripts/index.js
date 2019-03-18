$(() => {
    console.log('durr');

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
        console.log($(this).index());
    });

})