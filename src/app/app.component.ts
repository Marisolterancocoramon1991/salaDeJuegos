import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import HomeComponent from './components/home/home.component';
import { UsuariosService } from '../app/services/usuarios.service';
import { Validar } from './clases/validar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
constructor(private router:Router,private usuariosService: UsuariosService) { }




  animacionRegistro(): void {
    // Aquí puedes escribir la lógica para buscar usuarios
    const username = (<HTMLInputElement>document.getElementById('username')).value;
    const password = (<HTMLInputElement>document.getElementById('password')).value;  
    const formlogin = document.getElementById('loginForm');
    const formRegistro = document.getElementById('registerForm');

    if (formlogin && formRegistro) {
      formlogin.classList.add('form-desaparecer');
      
      // Opcional: Agregar un tiempo de espera antes de desaparecer el formulario
      setTimeout(() => {
        formlogin.style.display = 'none';
        

      }, 500); // 500 ms es el tiempo de duración de la animación en CSS
      
      setTimeout(() => {
        formRegistro.style.display = 'block';
        formRegistro.classList.add('form-aparecer');
      },500);
      
    }

   // this.router.navigateByUrl('/home');



  }
  
    registrarUsuario() 
    {
      // Obtener los elementos de los formularios y los valores de los campos
      const nombre: string = (document.getElementById('nombre') as HTMLInputElement).value.trim();
      const apellido: string = (document.getElementById('apellido') as HTMLInputElement).value.trim();
      const nacionalidad: string = (document.getElementById('nacionalidad') as HTMLInputElement).value.trim();
      const correo: string = (document.getElementById('correo') as HTMLInputElement).value.trim();
      const contrasena: string = (document.getElementById('contrasena') as HTMLInputElement).value.trim();
      const alias: string = (document.getElementById('alias') as HTMLInputElement).value.trim();
      
    const validador = new Validar();
      // Validar que todos los campos estén completos
      if ( nombre && apellido && nacionalidad && correo && contrasena && alias) 
        {
          if(validador.validarNacionalidad(nacionalidad) && validador.validarFormatoCorreo(correo))
            {
              try 
              {
              this.usuariosService.guardar(nombre, apellido, nacionalidad, correo, contrasena, alias);
              const appComponent = new Validar();
              appComponent.cambiarPestana();
              alert("usuario registrado");
              }catch (error)
               {
                console.error("Error al intentar registrar usuario:", error);
               
              }
            }
      } else
       {
          // Mostrar un mensaje de error si algún campo está vacío
          console.error("Por favor, complete todos los campos del formulario.");
      }
    }
    buscarUsuario() {
      const usernameInput = (document.getElementById("username") as HTMLInputElement).value.trim();
      const passwordInput = (document.getElementById("password") as HTMLInputElement).value.trim();
      const formlogin = document.getElementById('loginForm');
    
      if (usernameInput === "" || passwordInput === "") {
        alert("Por favor, complete todos los campos.");
      } else {
        try {
          this.usuariosService.loginUsuario(usernameInput, passwordInput);
          if(formlogin)
            {
              formlogin.classList.add('form-desaparecer');
      
          // Opcional: Agregar un tiempo de espera antes de desaparecer el formulario
          setTimeout(() => {
            formlogin.style.display = 'none';
            
    
          }, 500);
          this.router.navigateByUrl('/home');
            }
          
        } catch (error) {
          console.error("Error al intentar iniciar sesión:", error);
          // Puedes hacer algo más con el error aquí, como mostrar un mensaje al usuario
        }
      }
    }

    completarAutomaticamente(): void {
      // Obtener los elementos de los inputs por su id
      const usernameInput = document.getElementById('username') as HTMLInputElement;
      const passwordInput = document.getElementById('password') as HTMLInputElement;
    
      // Completar los valores automáticamente
      if (usernameInput && passwordInput) {
        usernameInput.value = 'kervin@gmail.com';
        passwordInput.value = '123456';
      }
    }
    
}

