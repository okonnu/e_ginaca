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

let target_l1 = 200
let target_l2 = 300
let target_l3 = 400
let target_l4 = 400
let target_l5 = 300
let target_l6 = 300



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
var myChart5 = new Chart(document.getElementById('mychart5'), {
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

function addData5(data) {
    data = Math.round(data)
    data > 100 ? data : 100
    colo = perc2color(data)
    alt = 100 - data
    if (alt < 1) { alt = 0 }
    myChart5.data.datasets.forEach((dataset) => {
        dataset.data[0] = data;
        dataset.data[1] = alt;
        dataset.backgroundColor[0] = colo
    });
    document.getElementById('efficiency5').innerHTML = data + '%'
    myChart5.update(0);
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

function openmodal() {
    $('#passwordmodal').modal('show')
}


// retrieve settings from python, and save on js
eel.expose(set_jsconfigs);

function set_jsconfigs(tl1, tl2, tl3, tl4, tl5, tl6) {
    // console.log(client_id)
    target_l1 = tl1,
        target_l1 = tl1,
        document.getElementById("target1").innerHTML = target_l
    document.getElementById("target2").innerHTML = target_r
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


    //  {"clientID":"L1","cans":"0","packs":"0","lcases":"0","cases":"0","lspeed":"0","tstamp":"13917942","targetcases":"240","canspercase":"24","unitspercase":"1","hr_output":"0,0,0,0,0,0,0,0,0"}
    if (payload.clientID.replace(/[0-9]/g, '') == 'L') {


        //labeller number
        const lab_num = payload.clientID.replace(/^\D+/g, '');
        console.log(payload.clientID)

        //client id
        document.getElementById("l" + lab_num).innerHTML = 'LABELLER ' + lab_num
            // cans
        document.getElementById("cans" + lab_num).innerHTML = payload.cans
            // speed
        document.getElementById("speed" + lab_num).innerHTML = payload.lspeed
            // efficiency

        switch (lab_num) {
            case 1:
                document.getElementById("target1").innerHTML = target_l1
                eff = (payload.lspeed / target_l1) * 100
                addData1(eff)
                console.log(target_l1)
                break;
            case 2:
                document.getElementById("target2").innerHTML = target_l2
                eff = (payload.lspeed / target_l2) * 100
                addData2(eff)
                break;
            case 3:
                document.getElementById("target3").innerHTML = target_l3
                eff = (payload.lspeed / target_l3) * 100
                addData3(eff)
                break;
            case 4:
                document.getElementById("target4").innerHTML = target_l4
                eff = (payload.lspeed / target_l4) * 100
                addData4(eff)
                break;
            case 5:
                document.getElementById("target5").innerHTML = target_l5
                eff = (payload.lspeed / target_l5) * 100
                addData5(eff)
                break;
            case 6:
                document.getElementById("target6").innerHTML = target_l6
                eff = (payload.lspeed / target_l6) * 100
                addData6(eff)
                break;

            default:
                break;
        }

    }

}