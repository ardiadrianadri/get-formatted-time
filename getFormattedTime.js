function getFormattedTime(format) {
    if (!format) {
        throw new Error('format is required');
    }
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let formattedTime = format
        .replace('hh', hours.toString().padStart(2, '0'))
        .replace('mm', minutes.toString().padStart(2, '0'))
        .replace('ss', seconds.toString().padStart(2, '0'));
    return formattedTime;
}

module.exports = getFormattedTime;