import fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAEOtkYaKIiJbqYHmDEUTzZkX0Ojj0Hr3U");

async function generarPagina() {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
  Genera una página web con los siguientes requisitos:
  - Encabezado verde oscuro con el título "Feliz Día de la Antioqueñidad"
  - Otro encabezado verde claro con el título "Antioquía Flower Icon" y abajo un pequeño texto que diga "¡Tierra de la Feria de las Flores!"
  - Una sección con un título de "Historia" con una rayita abajo del mismo color del texto, el fondo de este título lo quiero en color hueso amarillento, y el texto verde
  - Investiga acerca de la historia más importante de esta festividad y lo coloques como texto con fondo blanco esa sección
  - Una galería con flechas que cuando oprimas aparezca la siguiente con 5 imágenes que la que este selecionada aparzca en grande y las que no aparezcan a los lados más pequeñas y un poco difuminadas y quiero que cada imagen tenga un borde blanco con bordes redondos con el título de lugares emblematicos de la misma forma que se hizo el título de historia y quiero que quede centrado
  - Otra sección con un título que diga "Comidas Típicas" y una lista de  4 platos típicos de manera horizontal que vengan con un título y una breve descripción, quiero que cada platillo este dentro de una cajita blanca con bordes redondos e imagenes por encima del titulo y el texto de descripción y esten todo esto en el cuadro
  - Otra sección con un título que diga "Feria de las Flores" y un subtitulo que diga "Celebración Cultural" y un poco de contexto acerca de esta feria y que este dentro de una cajita blanca con bordes redondos e una imagen por encima del titutlo
  - Otra sección con un título que diga "Leyendas y Música" y una lista de 4 leyendas con espacio para imagenes en horizontal las 4 no vertical y tienen que caber los 4 cuadros  y 4 canciones típicas que tengan la opcion de poner un audio y en paralelo debajo de las leyendas sin imagenes
  - Un footer oscuro con el texto "Hecho por Loren Sofía"
  Quiero que toda la información se base en la región de Antioquia, ya que trata sobre el día de la antioqueñidad
  Quiero que toda la página tenga el color de fondo hueso amarillento 
  Quiero que todos los cuadros queden centrados menos los textos
  Las imagenes te las daré yo
  Devuélvelo en un solo archivo HTML con CSS incluido.
  `;

  const result = await model.generateContent(prompt);


  const pagina = result.response.text();


  fs.writeFileSync("index.html", pagina);
  console.log("✅ Página generada en index.html");
}

generarPagina();
