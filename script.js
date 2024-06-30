document.getElementById('calculate').addEventListener('click', function() {
    const name1 = document.getElementById('name1').value.trim().toLowerCase();
    const name2 = document.getElementById('name2').value.trim().toLowerCase();
    const resultDiv = document.getElementById('result');

    if (name1 === '' || name2 === '') {
        resultDiv.textContent = 'Please enter both names!';
        return;
    }

    if ((name1.startsWith('a') && name2.startsWith('b')) || (name1.startsWith('b') && name2.startsWith('a'))) {
        resultDiv.textContent = `${name1} and ${name2} have a love score of 3000💘`;
    } else {
        const loveScore = Math.floor(Math.random() * 100) + 1;
        resultDiv.textContent = `${name1} and ${name2} have a love score of ${loveScore}%!`;
    }
});
