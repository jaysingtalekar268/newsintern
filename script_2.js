
function get_news()
{

    fetch('./data_3.json').then(res => res.json()).then(data => {
            data.forEach(post => {
                console.log(post.body)
                // document.write(post.body)
                document.getElementById("nc1").insertAdjacentHTML("beforeend",post.body+" ");
            });
    });

}