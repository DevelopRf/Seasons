const months = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avqust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr']
let month = document.getElementById('month')
let result = '';
let img = document.getElementById('image')
let pic = '';

for (let index = 0; index < months.length; index++) {

    result +=
        `<option value="${months[index]}">${months[index]}</option>`
}

month.innerHTML = result


function what_season(m) {
    switch (m) {
        case 'Dekabr':
        case 'Yanvar':
        case 'Fevral':
            pic = `<img src="./img/winter.jpg" alt="">`;
            break;
        case 'Mart':
        case 'Aprel':
        case 'May':
            pic = `<img src="./img/spring.jpg" alt="">`;
            break;
        case 'Iyun':
        case 'Iyul':
        case 'Avqust':
            pic = `<img src="./img/summer.jpg" alt="">`;
            break;
        case 'Sentyabr':
        case 'Oktyabr':
        case 'Noyabr':
            pic = `<img src="./img/autumn.jpg" alt="">`;
            break;
    }
    img.innerHTML = pic
}


