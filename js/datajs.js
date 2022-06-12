let dataJS = [
post = {
    title: "Клонирование",
    description: "В виду не частого использования, забываю отдельные детали, ввиду этого предпочитаю, подглядывать за своим кодом, перед написанием чего-то подобного, что бы меньше потом дебажить!",
    code: `
<pre>
let arr = [
    post = {title: "Вася",text: "1 sdlksl sdlkvl skdvlsdvsd kgkhkvnm"},
    post = {title: "Петя",text: "2 sdlksl sdlkvl skdvlsdvsd kgkhkvnm"},
    post = {title: "Женя",text: "3 sdlksl sdlkvl skdvlsdvsd kgkhkvnm"},
    post = {title: "Вадим",text: "4 sdlksl sdlkvl skdvlsdvsd kgkhkvnm"}
];

let block = document.querySelector('#template').content.querySelector('.block');
let news = document.querySelector('.news');

function cloning(){
    let newBlock = block.cloneNode(true);
    
    newBlock.querySelector('h3').textContent = arr[i].title;
    newBlock.querySelector('.text').textContent = arr[i].text;
    
    return newBlock;
};

let fragment = document.createDocumentFragment();
for (var i = 0; i < arr.length; i++){
    
    fragment.appendChild(cloning(i));
    
};

news.appendChild(fragment);</pre>`
},
post = {
    title: "Slider",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum perspiciatis fuga quis aut itaque reprehenderit! Deleniti doloribus blanditiis provident?",
    code: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum perspiciatis fuga quis aut itaque reprehenderit! Deleniti doloribus blanditiis provident?`
},
post = {
    title: "Таб",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum perspiciatis fuga quis aut itaque reprehenderit! Deleniti doloribus blanditiis provident?",
    code: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum perspiciatis fuga quis aut itaque reprehenderit! Deleniti doloribus blanditiis provident?`
},
post = {
    title: "Модалка",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum perspiciatis fuga quis aut itaque reprehenderit! Deleniti doloribus blanditiis provident?",
    code: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum perspiciatis fuga quis aut itaque reprehenderit! Deleniti doloribus blanditiis provident?`
},
post = {
    title: "Slider",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum perspiciatis fuga quis aut itaque reprehenderit! Deleniti doloribus blanditiis provident?",
    code: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum perspiciatis fuga quis aut itaque reprehenderit! Deleniti doloribus blanditiis provident?`
},
post = {
    title: "Таб",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum perspiciatis fuga quis aut itaque reprehenderit! Deleniti doloribus blanditiis provident?",
    code: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum perspiciatis fuga quis aut itaque reprehenderit! Deleniti doloribus blanditiis provident?`
},
post = {
    title: "Модалка",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum perspiciatis fuga quis aut itaque reprehenderit! Deleniti doloribus blanditiis provident?",
    code: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum perspiciatis fuga quis aut itaque reprehenderit! Deleniti doloribus blanditiis provident?`
},
post = {
    title: "Slider",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum perspiciatis fuga quis aut itaque reprehenderit! Deleniti doloribus blanditiis provident?",
    code: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum perspiciatis fuga quis aut itaque reprehenderit! Deleniti doloribus blanditiis provident?`
},
post = {
    title: "Таб",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum perspiciatis fuga quis aut itaque reprehenderit! Deleniti doloribus blanditiis provident?",
    code: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum perspiciatis fuga quis aut itaque reprehenderit! Deleniti doloribus blanditiis provident?`
},
post = {
    title: "Модалка",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum perspiciatis fuga quis aut itaque reprehenderit! Deleniti doloribus blanditiis provident?",
    code: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum perspiciatis fuga quis aut itaque reprehenderit! Deleniti doloribus blanditiis provident?`
},
post = {
    title: "Slider",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum perspiciatis fuga quis aut itaque reprehenderit! Deleniti doloribus blanditiis provident?",
    code: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum perspiciatis fuga quis aut itaque reprehenderit! Deleniti doloribus blanditiis provident?`
},
post = {
    title: "Таб",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum perspiciatis fuga quis aut itaque reprehenderit! Deleniti doloribus blanditiis provident?",
    code: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum perspiciatis fuga quis aut itaque reprehenderit! Deleniti doloribus blanditiis provident?`
},
post = {
    title: "Модалка",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum perspiciatis fuga quis aut itaque reprehenderit! Deleniti doloribus blanditiis provident?",
    code: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum perspiciatis fuga quis aut itaque reprehenderit! Deleniti doloribus blanditiis provident?`
},
post = {
    title: "Модалка",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum perspiciatis fuga quis aut itaque reprehenderit! Deleniti doloribus blanditiis provident?",
    code: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum perspiciatis fuga quis aut itaque reprehenderit! Deleniti doloribus blanditiis provident?`
},
post = {
    title: "Slider",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum perspiciatis fuga quis aut itaque reprehenderit! Deleniti doloribus blanditiis provident?",
    code: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum perspiciatis fuga quis aut itaque reprehenderit! Deleniti doloribus blanditiis provident?`
},
post = {
    title: "Таб",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum perspiciatis fuga quis aut itaque reprehenderit! Deleniti doloribus blanditiis provident?",
    code: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum perspiciatis fuga quis aut itaque reprehenderit! Deleniti doloribus blanditiis provident?`
}
];