import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  
  auth = inject(AngularFireAuth);


  // ==================== Autenticacion ==============


  // ============== Acceder ==============
  signIn(user: User){
    return signInWithEmailAndPassword(getAuth(), user.email, user.password )
  }

  // ============== CreaR Usuario ==============
  signUp(user: User){
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password )
  }
  
// ===================== Actualizar usuario ================
updateUser(displayName: string){
  return updateProfile(getAuth().currentUser, {displayName})
}

}
