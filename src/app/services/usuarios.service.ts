import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc,query, where, getDocs, DocumentData, QuerySnapshot  } from '@angular/fire/firestore'; 

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private firestore: Firestore) { }

  guardar(nombre: string, apellido: string, nacionalidad: string,
    correoElectronico: string, contrasena: string, alias: string) {
   
    const col = collection(this.firestore, 'usuarios');
    addDoc(col,{Nombre:nombre, Apellido: apellido, Nacionalidad: nacionalidad,
       CorreoElectronico: correoElectronico, Contrasena: contrasena, Alias: alias,
       recordPrimerJuego: 0, recordSegundoJuego: 0, recordTercerJuego: 0, recordCuartoJuego: 0})
  }

  async loginUsuario(correoElectronico: string, contrasena: string): Promise<DocumentData | null> {
    // Consulta para buscar un usuario con el correo electrónico y la contraseña dados
    const q = query(collection(this.firestore, 'usuarios'), 
                    where('CorreoElectronico', '==', correoElectronico),
                    where('Contrasena', '==', contrasena));
    
    // Ejecutar la consulta
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);

    // Verificar si se encontró algún usuario
    if (!querySnapshot.empty) {
      // Devolver el primer usuario encontrado
      return querySnapshot.docs[0].data();
    } else {
      // No se encontró ningún usuario
      return null;
    }
  }
}
