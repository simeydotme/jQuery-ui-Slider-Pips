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
