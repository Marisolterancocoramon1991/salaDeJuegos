export class Validar {
    validarNacionalidad(nacionalidad: string ) {
        const nacionalidadesSudamericanas = [
            "argentina", "bolivia", "brasil", "chile", "colombia", "ecuador", "guyana", "paraguay", "peru", "surinam", "uruguay", "venezuela"
        ];
        const nacionalidadMinusculas = nacionalidad.toLowerCase();
        return nacionalidadesSudamericanas.includes(nacionalidadMinusculas);
    }

     validarFormatoCorreo(correo: string) {
        let arrobaEncontrada = false;
        let puntoComEncontrado = false;
    
        for (let i = 0; i < correo.length; i++) {
            if (correo[i] === '@') {
                arrobaEncontrada = true;
            } else if (correo[i] === '.' && arrobaEncontrada) {
                puntoComEncontrado = true;
            }
        }
    
        return arrobaEncontrada && puntoComEncontrado;
    }
    cambiarPestana()
    {
      const formularioInicioSesion = document.getElementById("loginForm");
      const formularioRegistro = document.getElementById("registerForm"); 
      if(formularioInicioSesion && formularioRegistro){
        if(formularioInicioSesion.style.display === "block")
          {
            formularioInicioSesion.style.display = "none";
            formularioRegistro.style.display = "block";
          }else
          {
            formularioInicioSesion.style.display = "block";
            formularioRegistro.style.display = "none";
          }
       
      }
    
    }
  
    
}
