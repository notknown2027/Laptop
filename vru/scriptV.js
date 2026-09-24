/* =====================================================
   VRUSHIT 🐬 BIRTHDAY WEBSITE
   FIXED JAVASCRIPT
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("JavaScript loaded successfully ✅");


    /* =================================================
       LOADING SCREEN
       ================================================= */

    setTimeout(function () {

        const loader = document.getElementById("loader");

        if (loader) {
            loader.classList.add("hide");
        }

    }, 1800);


    /* =================================================
       COUNTDOWN
       ================================================= */

    const birthdayDate = new Date(
        "September 20, 2026 00:00:00"
    ).getTime();


    function updateCountdown() {

        const now = new Date().getTime();

        const difference =
            birthdayDate - now;


        if (difference <= 0) {

            setText("days", "00");
            setText("hours", "00");
            setText("minutes", "00");
            setText("seconds", "00");

            setText(
                "countdownMessage",
                "It's your day, 🐬! 🎉"
            );

            const reveal =
                document.getElementById(
                    "birthdayReveal"
                );

            if (reveal) {
                reveal.classList.remove("hidden");
            }

            confetti();

            return;
        }


        const days =
            Math.floor(
                difference /
                (1000 * 60 * 60 * 24)
            );


        const hours =
            Math.floor(
                (difference %
                    (1000 * 60 * 60 * 24)) /
                    (1000 * 60 * 60)
            );


        const minutes =
            Math.floor(
                (difference %
                    (1000 * 60 * 60)) /
                    (1000 * 60)
            );


        const seconds =
            Math.floor(
                (difference %
                    (1000 * 60)) /
                    1000
            );


        setText(
            "days",
            String(days).padStart(2, "0")
        );

        setText(
            "hours",
            String(hours).padStart(2, "0")
        );

        setText(
            "minutes",
            String(minutes).padStart(2, "0")
        );

        setText(
            "seconds",
            String(seconds).padStart(2, "0")
        );
    }


    updateCountdown();

    setInterval(
        updateCountdown,
        1000
    );


    /* =================================================
       STORY BUTTON
       ================================================= */

    const storyButton =
        document.getElementById(
            "storyBtn"
        );


    if (storyButton) {

        storyButton.addEventListener(
            "click",
            function () {

                const story =
                    document.getElementById(
                        "storyReveal"
                    );

                if (story) {
                    story.classList.toggle(
                        "hidden"
                    );
                }

            }
        );

    }


    /* =================================================
       JEALOUSY
       ================================================= */

    let jealousy = 0;


    const jealousButton =
        document.getElementById(
            "jealousBtn"
        );


    if (jealousButton) {

        jealousButton.addEventListener(
            "click",
            function () {

                jealousy += 25;


                if (jealousy > 100) {
                    jealousy = 100;
                }


                const fill =
                    document.getElementById(
                        "jealousFill"
                    );


                const value =
                    document.getElementById(
                        "jealousValue"
                    );


                const text =
                    document.getElementById(
                        "jealousText"
                    );


                if (fill) {
                    fill.style.width =
                        jealousy + "%";
                }


                if (value) {
                    value.innerText =
                        jealousy + "%";
                }


                if (text) {

                    if (jealousy === 25) {

                        text.innerText =
                            "Vat ker tu mari nathi badti...😌";

                    }

                    else if (jealousy === 50) {

                        text.innerText =
                            "Hmm... kerje to screen share...👀";

                    }

                    else if (jealousy === 75) {

                        text.innerText =
                            "Buss have, bov ho....😤";

                    }

                    else {

                        text.innerText =
                            "BROKEN 💀 maris hu vansh ne tya jai ne 😡, maybe I care too much 😂";

                    }

                }

            }
        );

    }


    /* =================================================
       SUPPORT BUTTON
       ================================================= */

    const supportButton =
        document.getElementById(
            "supportBtn"
        );


    if (supportButton) {

        supportButton.addEventListener(
            "click",
            function () {

                const reveal =
                    document.getElementById(
                        "supportReveal"
                    );

                if (reveal) {
                    reveal.classList.remove(
                        "hidden"
                    );
                }

            }
        );

    }


    /* =================================================
       TRUST COUNTERS
       ================================================= */

    const counters =
        document.querySelectorAll(
            "[data-counter]"
        );


    counters.forEach(function (counter) {

        let current = 0;

        const target =
            Number(
                counter.getAttribute(
                    "data-counter"
                )
            );


        const interval =
            setInterval(function () {

                current += 2;


                if (current >= target) {

                    current = target;

                    clearInterval(interval);

                }


                counter.innerText = current + "%";
                

            }, 30);

    });


    /* =================================================
       FAVOURITE THINGS
       ================================================= */

    const favouriteMessages = {

        pani:
            "Pani Puri is on top 🔝, but also pizza🍕😋, Frankie🌭😋",

        cake:
            "Chocolate cake with chocolate frosting and chocolate chips. 🍫🍰",

        nude:
            "Of course. Everything has to be soft, pretty and nude. 🤎",

        reels:
            "Aa vakhte tara ma reels ho, hal hal screen share kerrrr.....😂",

        sea:
            "Let's go to the beach! 🌊🐬🐹, Date mate puchu chu babe 😉🫣",

    };


    const favourites =
        document.querySelectorAll(
            ".favourite"
        );


    favourites.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const type =
                    button.getAttribute(
                        "data-fav"
                    );


                const message =
                    document.getElementById(
                        "favMessage"
                    );


                if (
                    message &&
                    favouriteMessages[type]
                ) {

                    message.innerText =
                        favouriteMessages[type];

                }

            }
        );

    });


    /* =================================================
       REELS
       ================================================= */

    const reels = [

        {
            emoji: "😂",
            title: "One reel.",
            text: "Promise. Aa chheli."
        },

        {
            emoji: "👀",
            title: "Okay... next.",
            text: "Dobeshhh aa to ganai j naii ne !! 🤷🏻‍♂️"
        },

        {
            emoji: "😭",
            title: "Sachhe aa chhelii Ho 😢",
            text: "Definitely."
        },

        {
            emoji: "💀",
            title: "WAIT.",
            text: "Aa to jovi j pade em che..."
        },

        {
            emoji: "🫠",
            title: "3 hours later...",
            text: "Still watching 😂"
        }

    ];


    let reelIndex = 0;


    const nextReel =
        document.getElementById(
            "nextReel"
        );


    if (nextReel) {

        nextReel.addEventListener(
            "click",
            function () {

                reelIndex++;


                if (
                    reelIndex >=
                    reels.length
                ) {

                    reelIndex =
                        reels.length - 1;

                }


                const reel =
                    reels[reelIndex];


                setText(
                    "reelEmoji",
                    reel.emoji
                );

                setText(
                    "reelTitle",
                    reel.title
                );

                setText(
                    "reelText",
                    reel.text
                );

                setText(
                    "reelCount",
                    "Reel " +
                    (reelIndex + 1)
                );


                if (
                    reelIndex ===
                    reels.length - 1
                ) {

                    const ending =
                        document.getElementById(
                            "reelEnding"
                        );

                    if (ending) {
                        ending.classList.remove(
                            "hidden"
                        );
                    }

                }

            }
        );

    }


    /* =================================================
       DOLPHIN MODE
       ================================================= */

    const dolphinButton =
        document.getElementById(
            "dolphinBtn"
        );


    if (dolphinButton) {

        dolphinButton.addEventListener(
            "click",
            function () {

                const fill =
                    document.getElementById(
                        "teaseFill"
                    );

                const percent =
                    document.getElementById(
                        "teasePercent"
                    );

                const text =
                    document.getElementById(
                        "dolphinText"
                    );


                if (fill) {
                    fill.style.width =
                        "100%";
                }


                if (percent) {
                    percent.innerText =
                        "100%";
                }


                if (text) {

                    text.innerText =
                        "🐬 has successfully made 🐹 jealous. Mission Puru huhh. 🙄😤";

                }

            }
        );

    }


    /* =================================================
       FLIRTING
       ================================================= */

    const flirtingLines = [

        "Hii, Bol ne su keto to 😣",

        "sambhaddd nee pn ...😅, ek vat che koi ne keti nai hoo Koi etle koi j naii 🥴",

        "Bolijaa hal bol 🙄, bol jaldiii hal 😮‍💨",

        "Ahaa, tara gal no khhadoo ema hu padi gayoo chuu yrr 💕😅",

        "Bus hoo te to bov kari,nakri linu j marvi hoyy, I am blushingggg 🤭🫣"

    ];


    let flirtIndex = 0;


    const flirtButton =
        document.getElementById(
            "flirtBtn"
        );


    if (flirtButton) {

        flirtButton.addEventListener(
            "click",
            function () {

                if (
                    flirtIndex >=
                    flirtingLines.length
                ) {

                    flirtIndex = 0;

                }


                const message =
                    document.createElement(
                        "div"
                    );


                message.className =
                    "flirt-message";


                message.innerText =
                    flirtingLines[
                        flirtIndex
                    ];


                const container =
                    document.getElementById(
                        "flirtMessages"
                    );


                if (container) {

                    container.appendChild(
                        message
                    );

                }


                flirtIndex++;

            }
        );

    }


    /* =================================================
       BONK
       ================================================= */

    const bonkButton =
        document.getElementById(
            "bonkBtn"
        );


    if (bonkButton) {

        bonkButton.addEventListener(
            "click",
            function () {

                bonkButton.classList.remove(
                    "bonked"
                );


                void bonkButton.offsetWidth;


                bonkButton.classList.add(
                    "bonked"
                );

            }
        );

    }


    /* =================================================
       CAKE / WISH
       ================================================= */

    const wishButton =
        document.getElementById(
            "wishBtn"
        );


    if (wishButton) {

        wishButton.addEventListener(
            "click",
            function () {

                const cake =
                    document.querySelector(
                        ".cake-wrap"
                    );


                if (cake) {

                    cake.classList.add(
                        "blown"
                    );

                }


                setText(
                    "wishText",
                    "I hope 18 gives you everything you've been wishing for... and maybe a little less trouble for 🐹. 😂"
                );


                confetti();

            }
        );

    }


    /* =================================================
       CANDLES
       ================================================= */

    const candles =
        document.querySelectorAll(
            ".candle"
        );


    candles.forEach(function (candle) {

        candle.addEventListener(
            "click",
            function () {

                const cake =
                    document.querySelector(
                        ".cake-wrap"
                    );


                if (cake) {

                    cake.classList.add(
                        "blown"
                    );

                }


                setText(
                    "wishText",
                    "Wish made. ✨"
                );


                confetti();

            }
        );

    });


    /* =================================================
       ENVELOPE
       ================================================= */

    const envelope =
        document.getElementById(
            "envelopeBtn"
        );


    if (envelope) {

        envelope.addEventListener(
            "click",
            function () {

                envelope.classList.toggle(
                    "open"
                );


                const letter =
                    document.getElementById(
                        "letter"
                    );


                if (letter) {

                    letter.classList.toggle(
                        "hidden"
                    );

                }

            }
        );

    }


    /* =================================================
       MEMORY WALL
       ================================================= */

    const memories = [

        {
            image: "C:\\Users\\zeesh\\OneDrive\\Documents\\birthday\\vru\\IMG_3216[1].JPG",
            date: "Memory #01",
            caption:
                "First photo of us... 😊🤗"
        },

        {
            image: "C:\\Users\\zeesh\\OneDrive\\Documents\\birthday\\vru\\DTAY6447[1].JPG",
            date: "Memory #02",
            caption:
                "One random day that became a favourite."
        },

        {
            image: "C:\\Users\\zeesh\\OneDrive\\Documents\\birthday\\vru\\IMG_E3471.JPG",
            date: "Memory #03",
            caption:
                "The late night talk in VC..💻😶‍🌫️"
        },

        {
            image: "C:\\Users\\zeesh\\OneDrive\\Documents\\birthday\\vru\\WhatsApp Image 2026-09-07 at 11.36.11 AM.jpeg",
            date: "Memory #04",
            caption:
                "Kutraa veda chlu kerva mandya nee 🐶🦴"
        },

        {
            image: "C:\\Users\\zeesh\\OneDrive\\Documents\\birthday\\vru\\Vandi.jpeg",
            date: "Memory #05",
            caption:
                "My swag Gurllll 😎😉"
        },

        {
            image: "",
            date: "Memory #06",
            caption:
                "More memories loading..."
        }

    ];


    const memoryGrid =
        document.getElementById(
            "memoryGrid"
        );


    if (memoryGrid) {

        memories.forEach(
            function (memory, index) {

                const card =
                    document.createElement(
                        "div"
                    );


                card.className =
                    "memory-card";


                let imageHTML;


                if (memory.image !== "") {

                    imageHTML = `
                        <img
                            src="${memory.image}"
                            alt="${memory.caption}"
                        >
                    `;

                }

                else {

                    imageHTML = `
                        <span>
                            📸
                            <br>
                            Add your photo here
                        </span>
                    `;

                }


                card.innerHTML = `

                    <div class="memory-image">

                        ${imageHTML}

                    </div>

                    <div class="memory-body">

                        <small>
                            ${memory.date}
                        </small>

                        <h3>
                            Memory #${String(
                                index + 1
                            ).padStart(2, "0")}
                        </h3>

                        <p>
                            ${memory.caption}
                        </p>

                    </div>

                `;


                memoryGrid.appendChild(
                    card
                );

            }
        );

    }


    /* =================================================
       MUSIC
       ================================================= */

    const musicButton =
        document.getElementById(
            "musicBtn"
        );


    const music =
        document.getElementById(
            "birthdayMusic"
        );

    music.src = "C:/Users/zeesh/OneDrive/Documents/birthday/vru/zara_sa_lofi_themesong.mp3";
    
    if (musicButton && music) {

        musicButton.addEventListener(
            "click",
            function () {

                if (!music.src) {

                    showToast(
                        "Add your music file first 🎵"
                    );

                    return;

                }


                if (music.paused) {

                    music.play()
                        .then(function () {

                            musicButton.innerHTML =
                                "⏸️ <span>Pause our vibe</span>";

                        })
                        .catch(function () {

                            showToast(
                                "Click again to play the music 🎵"
                            );

                        });

                }

                else {

                    music.pause();

                    musicButton.innerHTML =
                        "🎵 <span>Play our vibe</span>";

                }

            }
        );

    }


    /* =================================================
       BACK TO TOP
       ================================================= */

    document
        .querySelectorAll(
            'a[href="#"]'
        )
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                }
            );

        });


    /* =================================================
       DONE
       ================================================= */

    console.log(
        "Vrushit Birthday Website ready 🎂🐬🐹"
    );

});


/* =====================================================
   HELPER FUNCTION
   ===================================================== */

function setText(id, text) {

    const element =
        document.getElementById(id);


    if (element) {

        element.innerText =
            text;

    }

}


/* =====================================================
   CONFETTI
   ===================================================== */

function confetti() {

    const symbols = [
        "✨",
        "♡",
        "✦",
        "🎉",
        "🤎",
        "🐬",
        "🐹"
    ];


    for (
        let i = 0;
        i < 60;
        i++
    ) {

        const element =
            document.createElement(
                "div"
            );


        element.innerText =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        element.style.position =
            "fixed";


        element.style.left =
            Math.random() * 100 +
            "%";


        element.style.top =
            Math.random() * 20 +
            "%";


        element.style.fontSize =
            15 +
            Math.random() * 20 +
            "px";            


        element.style.zIndex =
            "9999";


        element.style.pointerEvents =
            "none";


        document.body.appendChild(
            element
        );


        const animation =
            element.animate(

                [
                    {
                        transform:
                            "translateY(0) rotate(0)",
                        opacity: 1
                    },

                    {
                        transform:
                            `translateY(90vh)
                             rotate(${Math.random() * 720}deg)`,
                        opacity: 0
                    }
                ],

                {
                    duration:
                        2500 +
                        Math.random() * 2000,

                    easing:
                        "cubic-bezier(.2,.8,.2,1)"
                }

            );


        animation.onfinish =
            function () {

                element.remove();

            };

    }

}


/* =====================================================
   TOAST
   ===================================================== */

function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    if (!toast) {
        return;
    }


    toast.innerText =
        message;


    toast.classList.add(
        "show"
    );


    setTimeout(
        function () {

            toast.classList.remove(
                "show"
            );

        },
        2500
    );

}