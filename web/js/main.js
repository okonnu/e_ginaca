document.addEventListener('contextmenu', event => event.preventDefault());


initcolo = perc2color(10)
const opts = {
    cutout: 110,
    responsive: false,
    plugins: {
        legend: {
            display: false,
        }
    },
    tooltips: {
        enabled: false
    },
    animation: {
        duration: 500
    }
}

const ds = [{
    data: ["1", "99"],
    backgroundColor: [
        initcolo,
        "transparent"
    ]
}]

let target_c1 = 200
let target_c2 = 200
let target_c3 = 200
let target_c4 = 200
let target_c6 = 200
let target_c7 = 200
let target_c8 = 200
let target_c9 = 200



var myChart1 = new Chart(document.getElementById('mychart1'), {
    type: 'doughnut',
    data: {
        datasets: ds
    },
    options: opts
});

var myChart2 = new Chart(document.getElementById('mychart2'), {
    type: 'doughnut',
    data: {
        datasets: ds
    },
    options: opts
});

var myChart3 = new Chart(document.getElementById('mychart3'), {
    type: 'doughnut',
    data: {
        datasets: ds
    },
    options: opts
});
var myChart4 = new Chart(document.getElementById('mychart4'), {
    type: 'doughnut',
    data: {
        datasets: ds
    },
    options: opts
});

var myChart6 = new Chart(document.getElementById('mychart6'), {
    type: 'doughnut',
    data: {
        datasets: ds
    },
    options: opts
});
var myChart7 = new Chart(document.getElementById('myChart7'), {
    type: 'doughnut',
    data: {
        datasets: ds
    },
    options: opts
});
var myChart8 = new Chart(document.getElementById('myChart8'), {
    type: 'doughnut',
    data: {
        datasets: ds
    },
    options: opts
});
var myChart9 = new Chart(document.getElementById('myChart9'), {
    type: 'doughnut',
    data: {
        datasets: ds
    },
    options: opts
});

function toObject(map) {
    let obj = Object.create(null);
    for (let [key, value] of map.entries()) {
        obj[key] = value;
    }
    return obj;
}

function addData1(data) {
    data = Math.round(data)
    data > 100 ? data : 100
    colo = perc2color(data)
    alt = 100 - data
    if (alt < 1) { alt = 0 }
    myChart1.data.datasets.forEach((dataset) => {
        dataset.data[0] = data;
        dataset.data[1] = alt;
        dataset.backgroundColor[0] = colo
    });
    document.getElementById('efficiency1').innerHTML = data + '%'
    myChart1.update(0);
}

function addData2(data) {
    data = Math.round(data)
    data > 100 ? data : 100
    colo = perc2color(data)
    alt = 100 - data
    if (alt < 1) { alt = 0 }
    myChart2.data.datasets.forEach((dataset) => {
        dataset.data[0] = data;
        dataset.data[1] = alt;
        dataset.backgroundColor[0] = colo
    });
    document.getElementById('efficiency2').innerHTML = data + '%'
    myChart2.update(0);
}

function addData3(data) {
    data = Math.round(data)
    data > 100 ? data : 100
    colo = perc2color(data)
    alt = 100 - data
    if (alt < 1) { alt = 0 }
    myChart3.data.datasets.forEach((dataset) => {
        dataset.data[0] = data;
        dataset.data[1] = alt;
        dataset.backgroundColor[0] = colo
    });
    document.getElementById('efficiency3').innerHTML = data + '%'
    myChart3.update(0);
}

function addData4(data) {
    data = Math.round(data)
    data > 100 ? data : 100
    colo = perc2color(data)
    alt = 100 - data
    if (alt < 1) { alt = 0 }
    myChart4.data.datasets.forEach((dataset) => {
        dataset.data[0] = data;
        dataset.data[1] = alt;
        dataset.backgroundColor[0] = colo
    });
    document.getElementById('efficiency4').innerHTML = data + '%'
    myChart4.update(0);
}


function addData6(data) {
    data = Math.round(data)
    data > 100 ? data : 100
    colo = perc2color(data)
    alt = 100 - data
    if (alt < 1) { alt = 0 }
    myChart6.data.datasets.forEach((dataset) => {
        dataset.data[0] = data;
        dataset.data[1] = alt;
        dataset.backgroundColor[0] = colo
    });
    document.getElementById('efficiency6').innerHTML = data + '%'
    myChart6.update(0);
}


function addData7(data) {
    data = Math.round(data)
    data > 100 ? data : 100
    colo = perc2color(data)
    alt = 100 - data
    if (alt < 1) { alt = 0 }
    myChart7.data.datasets.forEach((dataset) => {
        dataset.data[0] = data;
        dataset.data[1] = alt;
        dataset.backgroundColor[0] = colo
    });
    document.getElementById('efficiency7').innerHTML = data + '%'
    myChart7.update(0);
}


function addData8(data) {
    data = Math.round(data)
    data > 100 ? data : 100
    colo = perc2color(data)
    alt = 100 - data
    if (alt < 1) { alt = 0 }
    myChart7.data.datasets.forEach((dataset) => {
        dataset.data[0] = data;
        dataset.data[1] = alt;
        dataset.backgroundColor[0] = colo
    });
    document.getElementById('efficiency8').innerHTML = data + '%'
    myChart8.update(0);
}


function addData9(data) {
    data = Math.round(data)
    data > 100 ? data : 100
    colo = perc2color(data)
    alt = 100 - data
    if (alt < 1) { alt = 0 }
    myChart9.data.datasets.forEach((dataset) => {
        dataset.data[0] = data;
        dataset.data[1] = alt;
        dataset.backgroundColor[0] = colo
    });
    console.log(data)
    document.getElementById('efficiency9').innerHTML = data + '%'
    myChart9.update(0);
}

function openmodal() {
    $('#passwordmodal').modal('show')
}


// retrieve settings from python, and save on js
eel.expose(set_jsconfigs);

function set_jsconfigs(tl1, tl2, tl3, tl4, tl5, tl6) {
    // // console.log(client_id)
    // target_c1 = tl1,
    //     target_c1 = tl1,
    //     document.getElementById("target1").innerHTML = target_c
    // document.getElementById("target2").innerHTML = target_r
}



document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('actv').click()
});

function updatetarget() {
    const tgt = document.getElementById('ftarget').value
    document.getElementById('rangee').innerHTML = tgt
}



function perc2color(perc) {
    perc = perc / 1.5
    var r, g, b = 0;
    if (perc < 50) {
        r = 255;
        g = Math.round(5.1 * perc);
    } else {
        g = 255;
        r = Math.round(510 - 5.10 * perc);
    }
    var h = r * 0x10000 + g * 0x100 + b * 0x1;
    return '#' + ('000000' + h.toString(16)).slice(-6);
}

function arr_avg(arr) {
    const total = arr.reduce((acc, c) => acc + parseInt(c), 0)
    return total / arr.length
}

function jsqueue(num, arr) {
    // if (arr.length > 1) {
    //     arr.shift()
    //     arr.push(num)
    // } else {
    //     arr.push(num)
    // }
    // const avg = arr_avg(arr)
    return num
}

function summap(ob) {
    let sum = 0;
    for (let key in ob) {
        sum += ob[key];
    }
    return sum
}

function sumarray(object) {
    total = 0
    for (const items of object) {
        total += items.value
    }
    return total
}

function assigndata(object, pos) {
    for (const [index, item] of object.entries()) {
        console.log(index)
        let x = 0
        if (pos === 'r') {
            x = 21 + index
        } else {
            x = 11 + index
        }
        x = 'hour' + x
        console.log(x)
        document.getElementById(x).innerHTML = item.value
    }
}



eel.expose(set_metrics);

function set_metrics(pload) {

    str = pload.substring(2);
    str = str.slice(0, -1);
    payload = JSON.parse(str)


    // {"clientID":"C7","target":"150","cans":" 1","canspercase":"48","cases":"0.0","cspeed":"0","tstamp":"25185","damages":"0","downtime":"0.01"}
    if (payload.clientID.replace(/[0-9]/g, '') == 'C') {


        //labeller number
        const lab_num = payload.clientID.replace(/^\D+/g, '');
        // console.log(payload.clientID)

        //client id
        document.getElementById("c" + lab_num).innerHTML = 'SEAMER ' + lab_num
            // speed
        document.getElementById("DTIME" + lab_num).innerHTML = Math.floor(payload.downtime / 60)
        document.getElementById("cases" + lab_num).innerHTML = payload.cases
            // document.getElementById("ceff" + lab_num).innerHTML = Math.round(payload.cases / (target.tstamp * (payload.target / 3600)) * 100)
            // efficiency

        switch (parseInt(lab_num)) {
            case 1:
                eff = Math.floor((payload.cspeed / payload.target) * 100)
                addData1(eff)
                break;
            case 2:
                eff = Math.floor((payload.cspeed / payload.target) * 100)
                addData2(eff)
                break;
            case 3:
                eff = Math.floor((payload.cspeed / payload.target) * 100)
                addData3(eff)
                break;
            case 4:
                eff = Math.floor((payload.cspeed / payload.target) * 100)
                addData4(eff)
                break;

            case 6:
                eff = Math.floor((payload.cspeed / payload.target) * 100)
                addData6(eff)
                console.log("L6 target" + target_c6)
                break;
            case 7:
                eff = Math.floor((payload.cspeed / payload.target) * 100)
                addData7(eff)
                break;
            case 8:
                eff = Math.floor((payload.cspeed / payload.target) * 100)
                addData8(eff)
                break;
            case 9:
                eff = Math.floor((payload.cspeed / payload.target) * 100)
                addData9(eff)
                break;

            default:
                break;
        }

    }

}