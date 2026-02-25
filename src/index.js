btnMap = {
    "KeyA": "CLAP",
    "KeyS": "HIHAT",
    "KeyD": "KICK",
    "KeyF": "OPENHAT",
    "KeyG": "BOOM",
    "KeyH": "RIDE",
    "KeyJ": "SNARE",
    "KeyK": "TOM",
    "KeyL": "TINK"
};

function musicPlayBtn(id, key, desc) {
    const mainBtn = document.createElement("div");
    mainBtn.classList.add("musicBtn");
    mainBtn.id = `btn${id}`; // ex: btnKeyA

    const keyName = document.createElement("div");

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
}

document.body.appendChild(musicPlayBtnContainer);

document.addEventListener("keydown", (event) => {
    if (event.code in btnMap) {
        const musicBtn = document.getElementById(`btn${event.code}`);
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