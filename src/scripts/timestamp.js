let upto = 0;
let count = ''
function timeStamp() {

    let counts = setInterval(updated, 1000);

    function updated() {
        if (upto < 1)
            count = 'now';
        else if (upto < 60)
            count = `${upto.toFixed(0)}s`
        else if (upto < 3600)
            count = `${(upto / 60).toFixed(0)}m`
        else if (upto < 3600 * 24)
            count = `${(upto / (3600)).toFixed(0)}h`
        else
            count = `${(upto / (3600 * 24)).toFixed(0)}d`

        ++upto;    

        return count
    }

    return counts
}

export default timeStamp;
