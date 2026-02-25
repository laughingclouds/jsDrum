btnMap = {
    "KeyA": "clap",
    "KeyS": "hihat",
    "KeyD": "kick",
    "KeyF": "openhat",
    "KeyG": "boom",
    "KeyH": "ride",
    "KeyJ": "snare",
    "KeyK": "tom",
    "KeyL": "tink"
};

function musicPlayBtn(id, key, desc) {
    const mainBtn = document.createElement("div");
    mainBtn.classList.add("musicBtn");
    mainBtn.id = `btn${id}`; // ex: btnKeyA

    const keyName = document.createElement("kbd");

    const keyDesc = document.createElement("div");

    keyName.innerHTML = key;
    keyDesc.innerHTML = desc;

    mainBtn.appendChild(keyName);
    mainBtn.appendChild(keyDesc);

    return mainBtn;
}

const musicPlayBtnContainer = document.createElement("div");
musicPlayBtnContainer.classList.add("musicBtnContainer");

for (const [key, desc] of Object.entries(btnMap)) {
    musicPlayBtnContainer.appendChild(musicPlayBtn(key, key.at(-1), desc));
    
    const audioFile = document.createElement("audio");
    audioFile.id = `audio${key}`;
    audioFile.src = `sounds/${desc}.wav`;

    document.body.appendChild(audioFile)
}

document.body.appendChild(musicPlayBtnContainer);

document.addEventListener("keydown", (event) => {
    if (event.code in btnMap) {
        const musicBtn = document.getElementById(`btn${event.code}`);
        const audioFile = document.getElementById(`audio${event.code}`);

        audioFile.currentTime = 0;
        audioFile.play();

        musicBtn.classList.add("active");

        for (const child of musicBtn.children) {
            child.classList.add("text-pop");
        }
    }
});

document.addEventListener("keyup", (event) => {
    if (event.code in btnMap) {
        const musicBtn = document.getElementById(`btn${event.code}`);
        musicBtn.classList.remove("active");

        for (const child of musicBtn.children) {
            child.classList.remove("text-pop");
        }
    }
});