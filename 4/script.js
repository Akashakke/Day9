var request =new XMLHttpRequest();
 request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
     console.log(data);
var final=data.map((ele)=>ele.population);
var final1=final.reduce((sum,cv)=>sum+cv);
console.log(`The Total population of all countries are ${final1}`)

}




