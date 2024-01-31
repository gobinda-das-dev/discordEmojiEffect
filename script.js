const discordH1 = document.querySelector("main h1");
const myH1 = document.querySelector("main div:nth-child(2) h1");
const emojis = ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", "😘", "🥰", "😗", "😙", "🥲", "😚", "☺️", "🙂", "🤗", "🤩", "🤔", "🫡", "🤨", "😐", "😑", "😶", "🫥", "😶‍🌫️", "🙄", "😏", "😣", "😥", "😮", "🤐", "😯", "😪", "😫", "🥱", "😴", "😌", "😛", "😜", "😝", "🤤", "😒", "😓", "😔", "😕", "🙃", "🫠", "🤑", "😲", "☹️", "🙁", "😖", "😞", "😕", "😟", "😤", "😢", "😭", "😦", "😧", "😨", "😩", "🤯", "😬", "😮‍💨", "😰", "😱", "🥵", "🥶", "😳", "🤪", "😵", "😵‍💫", "🥴", "😠", "😡", "🤬", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "😇", "🥳", "🥸", "🥺", "🥹", "🤠", "🤡", "🤥", "🫨", "🤫", "🤭", "🫢", "🫣", "🧐", "🤓", "😈", "👿", "👻", "💩", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🙈", "🙉", "🙊", "🐵"];


discordEmojiEffect();
myEmojiEffect();



// Creating Important Functions
function discordEmojiEffect() {
    let emojiNo = Math.round(Math.random() * emojis.length)
    discordH1.innerHTML = emojis[emojiNo - 1];


    discordH1.onmouseenter = () => {
        emojiNo = Math.round(Math.random() * emojis.length)

        discordH1.innerHTML = emojis[emojiNo - 1];

        gsap.to(discordH1, {
            scale: 1.1,
            filter: "saturate(100%)",
            ease: "elastic.out"
        })
    }

    discordH1.onmouseleave = () => {
        gsap.to(discordH1, {
            scale: 1,
            filter: "saturate(0%)",
            ease: "elastic.out"
        })
    }
}

function myEmojiEffect() {
    let emojiNo = Math.round(Math.random() * emojis.length)
    myH1.innerHTML = emojis[emojiNo - 1];

    let intervalId;
    myH1.onmouseenter = () => {
        intervalId = setInterval(() => {
            emojiNo = Math.round(Math.random() * emojis.length)

            myH1.innerHTML = emojis[emojiNo - 1];

            gsap.timeline()
                .to(myH1, {
                    scale: 1.1,
                    duration: .1,
                    filter: "saturate(100%)",
                    ease: "elastic.out"
                })
                .to(myH1, {
                    scale: 1,
                    duration: .1,
                    filter: "saturate(0%)",
                    ease: "elastic.out"
                })
        }, 200);

    }

    myH1.onmouseleave = () => {
        clearInterval(intervalId);

        gsap.to(myH1, {
            scale: 1,
            filter: "saturate(0%)",
            ease: "elastic.out"
        })
    }
}