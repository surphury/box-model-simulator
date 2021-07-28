const root = document.documentElement,
    $code = document.getElementById('code'),
    $widthInput = document.getElementById('widthInput'),
    $heightInput = document.getElementById('heightInput'),
    $paddingInput = document.getElementById('paddingInput'),
    $borderInput = document.getElementById('borderInput'),
    $boxSizing = document.getElementById('boxSizing'),
    $boxSizingLabel = document.getElementById('boxSizingLabel'),
    $box = document.getElementById('box');

$code.addEventListener('input', (e) => {
    const $E = e.target;
    switch ($E) {
        case $widthInput:
            root.style.setProperty('--width', $widthInput.value.trim());
            break;
        case $heightInput:
            root.style.setProperty('--height', $heightInput.value.trim());
            break;
        case $paddingInput:
            root.style.setProperty('--padding', $paddingInput.value.trim());
            break;
        case $borderInput:
            root.style.setProperty('--border-width', $borderInput.value.trim());
            break;
        case $boxSizing:
            $box.classList.toggle('content-box');
            break;
    }
});