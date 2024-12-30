const paragraphs = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Pariatur libero necessitatibus amet voluptates ipsum dolorem nam magni', 
    'non nostrum quia sint perspiciatis sit aliquid.', 
    'Magni, voluptas. Error, corporis nemo? Unde distinctio amet delectus', 
    'minus dolore iste eum aliquam neque velit pariatur obcaecati quisquam odit quia quae blanditiis quibusdam id', 
    'expedita laudantium corrupti debitis nostrum quos excepturi eveniet.', 
    'Voluptatum doloremque totam, deleniti quo quia suscipit dignissimos nesciunt assumenda fugit ipsum mollitia!', 
    'Ipsum consequatur illum,',
    'debitis repellendus nostrum maxime libero necessitatibus harum.',
    'Tempore iusto nobis iste quaerat nisi dignissimos corporis corrupti sed consequatur', 
    'dolores distinctio nostrum fugiat aliquid inventore temporibus commodi magnam?'
];

const item = document.getElementById("items");
const dataContainer = document.getElementById("data");


function shuffle(array){
    let currentIndex = array.length;
    let randomIndex;

    while(currentIndex!=0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}

function generate(){

    if(item.value == 0){
        alert("The value cannot be zero");
    }else if (item.value > paragraphs.length){
        const randomIndex = Math.floor(Math.random() * paragraphs.length);
        dataContainer.innerHTML = `${paragraphs[randomIndex]}`;
    }else{

        const shuffleParagraphs = paragraphs;
        shuffle(paragraphs);
        
        const selectedParagraphs = shuffleParagraphs.slice(0, item.value);
        const paragraphsHTML = selectedParagraphs.map(paragraphs => `<p>${paragraphs}</p>`).join("");
        dataContainer.innerHTML = paragraphsHTML;
    }
}