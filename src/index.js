import './styles/index.css';
// import countryJson from './jsonData/countries.json';
// import categoryJson from './jsonData/category.json';
//get search element
let inputele = document.getElementById("search");

window.onload = ()=>{
    document.querySelector('.loader').classList.add('fadeOut');
    document.querySelector('.loader').classList.remove('loader');
    
    iterateNews();
    //news iterator function
};

//start news top-articles display code
function iterateNews(){
    if(inputele.value === ""){

        var url = 'https://newsapi.org/v2/top-headlines?' +
                'country=in&' +
                'apiKey=f95bc5db28994a1da7895f7e38cdb7f3'; 
        display(url);
    }
}
//end  news top-articles display code

//start news search code :Search bar 
function myFunction(){
    let url = 'https://newsapi.org/v2/everything?' +
          'q='+inputele.value+'&' +
          'pageSize=80&' +
          'from=2020-04-10&' +
          'sortBy=popularity&' +
          'apiKey=f95bc5db28994a1da7895f7e38cdb7f3';
    display(url);
   
}
//end news search code 

//filter Submit section
let countryTxt='',categoryTxt='',datefrom='',dateTo='';
document.getElementById("getfilter").addEventListener("click", function(event){
    event.preventDefault();

    var x = document.getElementById("frm1");

    countryTxt = x.elements[0].value;
    countryTxt = countryTxt.toLowerCase();
    categoryTxt = x.elements[1].value;
    datefrom = x.elements[2].value;
    dateTo = x.elements[3].value;

    let url = 'https://newsapi.org/v2/top-headlines?' +
    'country='+countryTxt+'&' +
    'category='+categoryTxt+'&' +
    'pageSize=80&' +
    'from='+datefrom+'&' +
    'to='+dateTo+'&' +
    'sortBy=popularity&' +
    'apiKey=f95bc5db28994a1da7895f7e38cdb7f3';

    display(url);

});

//end filter Submit section

//display news function
function display(url){

    var req = new Request(url);
    //fetch request
    fetch(req)
        .then(function(response) {
            return response.json();

        })
        .then((data) => {
            let news=data.articles;
            let output='';
    
            if(data.totalResults > 0){
                news.forEach(element => {
                    output+='<li class="article"><a href="'+element.url+'" class="article-link" target="_blank">'
                        +'<img class="article-img" src="'+ element.urlToImage+'" alt=""></img>'
                        +'<h2 class="article-title">'+element.title+'</h2>'
                        +'<p class="article-description">'+element.description+'</p>'
                        +'<span class="article-author">-'+element.author+'</span>'
                        +'</a>'
                    +'</li>';
    
                });
                
                document.querySelector('#news-articles').innerHTML = output;
                document.querySelector('#news-articles').style.display = '';
                showArticles();//pagiantion function
                document.querySelector('.not-found').style.display = 'none';
                
    
            }else if(data.totalResults === 0){
                document.querySelector('.not-found').style.display = 'block';
                document.querySelector('#news-articles').style.display = 'none';
            
            }else{
                iterateNews();
            }
           
        });
}
//end display news function

//start dark/light mode code
let check = document.getElementById('switch');
let article = document.getElementsByClassName('article');

check.addEventListener('change', (e)=>{
    if(check.checked){
        trans();

        // console.log("checked");
        document.body.classList.add('body-dark');//body theme

        inputele.style.backgroundColor= "#333333";//input theme
        inputele.style.color="#b5b5b5";

    }else{
        trans();

        // console.log("unchecked");
        document.body.classList.remove('body-dark');//body theme
        
        inputele.style.backgroundColor= "#FCFCFC";//input theme
        inputele.style.color="#333333";

    }
});

let trans = () =>{

    document.body.classList.add('transition');

    window.setTimeout(() =>{

        document.body.classList.remove('transition');

    }, 1000);

};
//end dark/light mode code

// set filter section option values
let country = document.getElementById('country');

import(
    /* webpackChunkName: "json_menu" */
    './jsonData/countries.json'
)
    .then(function({default: jsonMenu}) {
        let output = '';
        console.log("data ",jsonMenu);
        jsonMenu.forEach(element => {
            output+='<option value="'+element.code+'">'+element.name+'</option>';
        });
        country.innerHTML = output;
        country.value = 'IN';

    });

let category = document.getElementById('category');

import('./jsonData/category.json')
    .then(function({default: jsonMenu}) {
        let output = '';
        jsonMenu.forEach(element => {
            output+='<option>'+element.name+'</option>';
        });
        category.innerHTML = output;

    });
//end set filter section option values

//pagination code
const newsArticles=document.getElementById('news-articles').children;

const maxArticles= 12;
let curindex = 1;

document.getElementById('prev').addEventListener('click', ()=>{
    curindex--;
    showArticles();
});

document.getElementById('next').addEventListener('click', ()=>{
    curindex++;
    showArticles();
});

function showArticles(){
    for(let i=0; i< newsArticles.length; i++){
        newsArticles[i].style.display = 'none';
        // newsArticles[i].classList.add("hide");

        if(i >= (curindex*maxArticles)-maxArticles && i < curindex * maxArticles){
            newsArticles[i].style.display = '';
            // newsArticles[i].classList.add('show');
            // newsArticles[i].classList.remove("hide");
        }
    }
    document.getElementById('page').innerHTML = curindex; 
}
//end pagination code