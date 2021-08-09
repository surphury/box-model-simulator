/* All HTMLElements have a "$" at the beggining */
/* HTMLElements */
const root = document.documentElement,
    $form = document.getElementById('form'),
    $code = document.getElementById('code'),
    $widthInput = document.getElementById('widthInput'),
    $heightInput = document.getElementById('heightInput'),
    $paddingTopInput = document.getElementById('paddingTopInput'),
    $paddingRightInput = document.getElementById('paddingRightInput'),
    $paddingBottomInput = document.getElementById('paddingBottomInput'),
    $paddingLeftInput = document.getElementById('paddingLeftInput'),
    $borderInput = document.getElementById('borderInput'),
    $boxSizing = document.getElementById('boxSizing'),
    $marginInputTop = document.getElementById('marginInputTop'),
    $marginInputRight = document.getElementById('marginInputRight'),
    $marginInputBottom = document.getElementById('marginInputBottom'),
    $marginInputLeft = document.getElementById('marginInputLeft'),
    $box = document.getElementById('box');

const operate = (number, sum) => (sum) ? number + 1 : number - 1;

const setCSSVarible = (arr = [], value) => arr.forEach(E => root.style.setProperty(E, value));

const boxModelListener = (e) => {
    const $E = e.target,
        value = $E.value.trim();

    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        console.log(value.match(/\d/gi) !== 0);
        if ($E.classList.contains('input') && value.match(/\d/gi).length !== 0) {
            $E.value = `${operate(parseInt(value.match(/[-\d]/gi).join('')), e.key === "ArrowUp")}${value.match(/[^-\d]/gi).join('')}`;
        }
    } else if (value.length !== 0) {
        changeBoxModel($E, value);
    }
}

const changeBoxModel = ($E, value) => {
    switch ($E) {
        case $widthInput:
            root.style.setProperty('--width', value);
            break;
        case $heightInput:
            root.style.setProperty('--height', value);
            break;
        case $borderInput:
            root.style.setProperty('--border-width', value);
            break;
        case $paddingTopInput:
            root.style.setProperty('--padding-top', value);
            break;
        case $paddingRightInput:
            root.style.setProperty('--padding-right', value);
            break;
        case $paddingBottomInput:
            root.style.setProperty('--padding-bottom', value);
            break;
        case $paddingLeftInput:
            root.style.setProperty('--padding-left', value);
            break;
        case $boxSizing:
            $box.classList.toggle('content-box');
            break;
        case $marginInputTop:
            root.style.setProperty('--margin-top', value);
            break;
        case $marginInputRight:
            root.style.setProperty('--margin-right', value);
            break;
        case $marginInputBottom:
            root.style.setProperty('--margin-bottom', value);
            break;
        case $marginInputLeft:
            root.style.setProperty('--margin-left', value);
            break;
    }
}


$code.addEventListener('keypress', boxModelListener);
$code.addEventListener('change', boxModelListener);
$code.addEventListener('keyup', boxModelListener);
/* 
$form.addEventListener('click', (e) => {
    if (e.target.classList.contains('fieldset'))
        $form.toggleAttribute('hidden')
}); */