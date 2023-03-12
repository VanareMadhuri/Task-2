
function getImage()
{
    url="https://dog.ceo/api/breeds/image/random";
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data)
    {
        display_image(data.message);
    })
    .catch(function(err)
    {
        console.log(err);
    });
}

function display_image(image_src)
{
    document.getElementById("image").src=image_src;
}












// const container = document.querySelector('.container');
// const getPost = async ()=>{
//     const response = await fetch(`https://dog.ceo/api/breeds/image/random`)
//     console.log(response);
//     const data = await response.json();
    
// }









// let btn1 = document.getElementById("btn1");
// let img1 = document.getElementById("image");

// btn1.addEventListener('click', function() {
//     fetch('https://dog.ceo/api/breeds/image/random')
//     .then(res=>res.json())
//     .then(result => 
//         {
//             console.log(result)
//             img1.src = result.message
//         })
//         .catch(err=>console.log(err))
// })