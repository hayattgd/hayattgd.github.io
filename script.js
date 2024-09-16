function copyText(str) {
    navigator.clipboard.writeText(str).then(() => {
        console.log('copied')
    }).catch(err => {
        console.error('failed to copy :', err);
    });
}