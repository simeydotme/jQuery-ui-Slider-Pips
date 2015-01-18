$(function() {

    $("#circles-slider")
        .slider({
            max: 10,
            value: 5
        })
        .slider("pips");



    $("#scale-slider")
        .slider({
            max: 50,
            min: -50,
            values: [-20, 20],
            range: true
        })
        .slider("pips", {
            rest: "label"
        });

});