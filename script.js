const root = document.documentElement,
    $form = document.getElementById('form'),
    $code = document.getElementById('code'),
    $widthInput = document.getElementById('widthInput'),
    $heightInput = document.getElementById('heightInput'),
    $paddingInput = document.getElementById('paddingInput'),
    $borderInput = document.getElementById('borderInput'),
    $boxSizing = document.getElementById('boxSizing'),
    $marginInput = document.getElementById('marginInput'),
    $box = document.getElementById('box');

const operate = (number, sum) => (sum) ? number + 1 : number - 1;

const setCSSVarible = (arr = [], value) => arr.forEach(E => root.style.setProperty(E, value));

const changeBoxModel = (e) => {
    const $E = e.target,
        value = $E.value.trim();
    if ($E.classList.contains('input') && value.match(/\d/gi).length > 0) {
        if (e.key === "ArrowUp" || e.key === "ArrowDown")
            $E.value = `${operate(parseInt(value.match(/\d/g).join('')), e.key === "ArrowUp")}${value.match(/[^\d]/g).join('')}`;
    }
    switch ($E) {
        case $widthInput:
            root.style.setProperty('--width', value);
            break;
        case $heightInput:
            root.style.setProperty('--height', value);
            break;
        case $paddingInput:
            root.style.setProperty('--padding', value);
            break;
        case $borderInput:
            root.style.setProperty('--border-width', value);
            break;
        case $boxSizing:
            $box.classList.toggle('content-box');
            break;
    }
}
$code.addEventListener('change', changeBoxModel);
$code.addEventListener('keydown', changeBoxModel);

$form.addEventListener('click', (e) => {
    if (e.target.classList.contains('fieldset'))
        $form.toggleAttribute('hidden')
});