$(function() {



    $("#circles-slider")
        .slider({
            max: 10,
            value: 5
        })
        .slider("pips");





    $("#alternating-slider")
        .slider({
            max: 1000,
            values: [0, 300, 700, 1000]
        })
        .slider("pips", {
            step: 25,
            rest: "label",
            labels: { first: "Min", last: "Max" }
        })
        .slider("float");






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






    var rainbow = ["Infra-Red", "Red", "Orange", "Yellow", "Lime", "Green", "Turquoise", "Blue", "Indigo", "Violet", "Ultra-Violet"];

    $("#rainbow-slider")
        .slider({
            max: rainbow.length - 1,
            min: 0,
            value: 8
        })
        .slider("pips", {
            rest: "label",
            labels: rainbow
        });






    $("#flat-slider")
        .slider({
            max: 50,
            min: 0,
            range: true,
            values: [15, 35]
        })
        .slider("pips", {
            first: "pip",
            last: "pip"
        });

    $("#flat-slider-vertical-1")
        .slider({
            max: 25,
            min: 0,
            range: "min",
            value: 25,
            orientation: "vertical"
        });

    $("#flat-slider-vertical-2")
        .slider({
            max: 25,
            min: 0,
            range: "max",
            value: 12,
            orientation: "vertical"
        });

    $("#flat-slider-vertical-3")
        .slider({
            max: 25,
            min: 0,
            range: "min",
            value: 0,
            orientation: "vertical"
        });

    $("#flat-slider-vertical-1, #flat-slider-vertical-2, #flat-slider-vertical-3")
        .slider("pips", {
            first: "pip",
            last: "pip"
        })
        .slider("float");






    var emoji = [ "🐌", "🐐", "🐘", "🐙", "🐞", "🐠", "🐈", "🐕", "🐦", "🐬", "🐖", "🐇", "🐅", "🐃" ],
        mine = "🐕",
        $baa = $("<audio src='dist/sound/baa.mp3'></audio>");

    $("#styling-emoji h3, #styling-emoji-js pre").twemoji();

    $("#emoji-slider")

        .slider({
            max: 13,
            value: 6
        })

        .slider("pips", {
            rest: "label",
            labels: emoji
        })

        .on("slidechange", function( e, ui ) {

                var mineIs = ( emoji[ui.value] === mine ) ? "Mine too!! 😂✌" : "But mine is a " + mine + "! 😞",
                    yoursIs;

                if ( emoji[ui.value] === "🐐" ) {
                    $baa[0].play();
                    mineIs = "bleeeeet! 😏 silly Goats!";
                }

                yoursIs = "Oh golly gosh, your favourite animal is a " + emoji[ui.value] + "? &mdash; " + mineIs;

                $(".emoji-slider-question")
                    .css({ opacity: 0 });

                setTimeout(function() {

                    $(".emoji-slider-question")
                        .html( yoursIs )
                        .twemoji()
                        .css({ opacity: 1 });

                }, 200 );

        
        });

    $("#emoji-slider .ui-slider-label").twemoji();



















});
