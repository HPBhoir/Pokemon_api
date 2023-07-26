var button = document.querySelector('button');

function clickMe() {
    var number = document.querySelector('.number').value;
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${number}`)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not OK");
        })
        .then(function (response) {
            const results = response.results;
            var display = document.querySelector('.display');
            
            
            var i = 1;
            results.forEach(function (element) {
                display.innerHTML +=
                `<table class="table">
                    <tr>
                        <td class="index">${i}.&nbsp&nbsp</td>
                        <td class="poke_name">${element.name}</td>
                        <td><img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png'></td>
                    </tr>
                 </table>`
                i++;
            });
        
        })
        .catch(function (error) {
            console.log("Fetch error:", error);
        });

}

button.addEventListener('click', clickMe);






