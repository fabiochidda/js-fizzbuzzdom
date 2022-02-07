const ul = document.querySelector("ul#ms_list")

for (let i=1; i<=100; i++) {

    console.log(i)

    if (i % 3 === 0 && i % 5 === 0) {

        console.log( i + " is multiple of 3 and 5" )
        const ms_list_item = `<li class="ms_square ms_square_${i} ms_red fs-3">FizzBuzz</li>`
        ul.innerHTML += ms_list_item;

    } else if (i % 3 === 0) {

        console.log( i + " is multiple of 3" )
        const ms_list_item = `<li class="ms_square ms_square_${i} ms_green fs-3">Fizz</li>`
        ul.innerHTML += ms_list_item;

    } else if (i % 5 === 0) {

        console.log( i + " is multiple of 5")
        const ms_list_item = `<li class="ms_square ms_square_${i} ms_yellow fs-3">Buzz</li>`
        ul.innerHTML += ms_list_item;

    } else {

        const ms_list_item = `<li class="ms_square ms_square_${i} ms_light_blue fs-3">${i}</li>`
        ul.innerHTML += ms_list_item;

    }
}

