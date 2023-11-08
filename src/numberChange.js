let persian = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];


function change_number(num=0) {


    let text = num.toString();


    let text_to_array = text.split("")


    let number_array = text_to_array.map(a => persian[a]);


    return number_array.join("")
}

export { change_number }