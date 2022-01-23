const input = document.querySelector('#input-text');
const output = document.querySelector('#output-text');
const reset = document.querySelector('#reset');
const upper = document.querySelector('#upper');
const lower = document.querySelector('#lower');
const firstUpper = document.querySelector('#first-upper');
const bold = document.querySelector('#bold');
const embed = document.querySelector('#embed');
const under = document.querySelector('#under');
const whiteSpace = document.querySelector('#white-space');

////////////////////////////////////////////////////////////////////////
input.addEventListener("keyup", () => {
    output.value = input.value;
    toolText.style.opacity = "0";
});
////////////////////////////////////////////////////////////////////////
upper.addEventListener("click", () => {
    toolText.style.opacity = "0";
    return (output.value = output.value.toUpperCase());
});
////////////////////////////////////////////////////////////////////////
lower.addEventListener("click", () => {
    toolText.style.opacity = "0";
    return (output.value = output.value.toLowerCase());
});

////////////////////////////////////////////////////////////////////////
firstUpper.addEventListener("click", function() {
    //return (output.value = output.value.charAt(0).toUpperCase() + output.value.slice(1).toLowerCase());
    let parent = output.value.toLowerCase();
    let split = parent.split(" ");
    const newArr = [];
    for (let i = 0; i < split.length; i++) {
        let temp = split[i].charAt(0).toUpperCase() + split[i].slice(1);
        newArr.push(temp);
    }
    toolText.style.opacity = "0";
    return (output.value = newArr.join(" "));
});

////////////////////////////////////////////////////////////////////////
let isBolding = false;
bold.addEventListener("click", () => {
    toolText.style.opacity = "0";
    isBolding ? offBold() : onBold();
});

const onBold = () => {
    isBolding = true;
    output.classList.add('active');
    return output.value;
}

const offBold = () => {
    isBolding = false;
    output.classList.remove('active');
    return output.value;
}

//////////////////////////////////////////////////////////////////////////
let isEmbing = false;
embed.addEventListener("click", () => {
    toolText.style.opacity = "0";
    isEmbing ? offEmbed() : onEmbed();
});

const onEmbed = () => {
    isEmbing = true;
    output.style.fontStyle = "italic";
    return output.value;
};
const offEmbed = () => {
    isEmbing = false;
    output.style.fontStyle = "normal";
    return output.value;
};

////////////////////////////////////////////////////////////////////////
let isUndering = false;
under.addEventListener("click", () => {
    toolText.style.opacity = "0";
    isUndering ? offUnder() : onUnder();
});

const onUnder = () => {
    isUndering = true;
    output.style.textDecoration = "underline";
    return output.value;
};
const offUnder = () => {
    isUndering = false;
    output.style.textDecoration = "none";
    return output.value;
};

////////////////////////////////////////////////////////////////////////
reset.addEventListener("click", function() {
    input.value = ""
    output.value = "";
    toolText.style.opacity = "0";
});

////////////////////////////////////////////////////////////////////////
whiteSpace.addEventListener("click", () => {
    return (output.value = output.value.replace(/\s+/g, " "));
});

////////////////////////////////////////////////////////////////////////
/*const copyBtn = document.querySelector('.output');
pseudoStyle = getComputedStyle(copyBtn, '::after');     //get property ::after from css style
pseudoStyle.addEventListener("click", () => {});*/

//-----------------------------------------------------------------------------------
const toolText = document.querySelector('#tool-text');

function copy() {
    output.select(); //Get and select the text field
    output.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(output.value); //Copy the text inside the text field
    toolText.innerHTML = "Copied: " + output.value;
    toolText.style.opacity = "1";
}