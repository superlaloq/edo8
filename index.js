import express from "express";
import {dirname, join} from "path";
import {fileURLToPath} from "url";
import indexRoutes from "./routes/routes.js";
import * as helpers from "./utils/helpers/hbs.js";
import hbs from "hbs";
import bodyParser from 'body-parser';



const app = express();

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 



const __dirname = dirname(fileURLToPath(import.meta.url));
hbs.registerPartials(join(__dirname,"/views/partials"));
app.use(indexRoutes);
app.set('view engine', 'hbs');
app.set('views' , './views');
app.use(express.static("public"));



app.listen(3000);


  
  var esfera1 = document.querySelector('#esfera1');
  var esfera2 = document.querySelector('#esfera2');
  var esfera3 = document.querySelector('#esfera3');

  // mover esferas por la pantalla
  window.setInterval(function() {
    esfera1.style.left = Math.random() * (window.innerWidth-200) + 'px';
    esfera1.style.top = Math.random() * (window.innerHeight-200) + 'px';

    esfera2.style.left = Math.random() * (window.innerWidth-100) + 'px';
    esfera2.style.top = Math.random() *(window.innerHeight-100) + 'px';

    esfera3.style.left = Math.random() * (window.innerWidth-150) + 'px';
    esfera3.style.top = Math.random() * (window.innerHeight-150) + 'px';
  }, 1000);

  // agregar función al botón
  esfera1.addEventListener('click', function() {
    window.location.href = 'esferas1.hbs';
  });

  esfera2.addEventListener('click', function() {
    window.location.href = 'esferas2.hbs';
  });

  esfera3.addEventListener('click', function() {
    window.location.href = 'esferas3.hbs';
  });
  

