const Api_key= 'd9086859e4c7d9b2dea2e610360e8885'
        const appurl='https://api.openweathermap.org/data/2.5/weather?units=metric&q='
        const weather_img=document.querySelector('.weather_img');
        const place_element=document.querySelector('.input_text');
        const searchbtn=document.querySelector('.search_icon');

        
        
             async function collectdata(place) {
                const responce  = await fetch(appurl+place+`&appid=${Api_key}`);
                var data = await responce.json();

                if (responce.status == 404){
                    document.querySelector('.error').style.display='block'
                }else{
            console.log(data)
            document.querySelector('.error').style.display='none'
                
                    document.querySelector('.temp').innerHTML= Math.round(data.main.temp)+'°C';
        document.querySelector('.place').innerHTML=data.name 
        document.querySelector('.min').innerHTML=Math.round(data.main.temp_min)+'°';
        document.querySelector('.max').innerHTML=Math.round(data.main.temp_max)+'°';
        document.querySelector('.humidity').innerHTML=Math.round(data.main.humidity)+'%';
        document.querySelector('.wind').innerHTML=Math.round(data.wind.speed)+'km/h';


            

        let climate =data.weather[0].main;
            if (climate='clouds') {
                weather_img.src="images/clouds.png"
                
            } else if (climate='clear') {
                weather_img.src="images/clear.png"
                
            }else if (climate='drizzle') {
                weather_img.src="images/drizzle.png"
                
            }else if (climate='mist') {
                weather_img.src="images/mist.png"
                
            }else if (climate='rain') {
                weather_img.src="images\rain.png"
                
            }else if (climate='snow') {
                weather_img.src="images/snow.png"

            }else{
                weather_img.src="https://i.pinimg.com/236x/90/75/b4/9075b45769a6f3edae2e13424e0016d6.jpg"
            }
            document.querySelector('.weather').style.display='block'
                }
                
                }
        place_element.addEventListener('keypress',function(){
            if (event.key === "Enter") {
                event.preventDefault();
                    collectdata(place_element.value);

            }
        })
        searchbtn.addEventListener('click',()=>{
            collectdata(place_element.value);
        })
        