import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth'
import {AngularFirestore,AngularFirestoreDocument} from '@angular/fire/firestore';

import {  Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {User} from './userinterfaceauth.model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$:Observable< User >

  constructor(private afAuth: AngularFireAuth, private afs:AngularFirestore, private router:Router) 
  {
  this.user$ = this.afAuth.authState.pipe(
  switchMap(user =>{
      if(user){
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else{
        return of (null);
      }
    })
    );
}
googleLogin(){
  const provider = new auth.GoogleAuthProvider()
  return this.oAuthLogin(provider);
}
private oAuthLogin(provider){
  return this.afAuth.signInWithPopup(provider)
  .then((credential)=>{
    this.updateUserData(credential.user)
  })
}
//iworkhere
async register(){

    const provider = new auth.GoogleAuthProvider();
    
    const credential = await this.afAuth.signInWithPopup(provider);
    
    return this.updateUserData(credential.user);

}
async googleSignin(){

  const provider = new auth.GoogleAuthProvider();
  
  const credential = await this.afAuth.signInWithPopup(provider);
  
  return this.getUserData(credential.user);

}
//iworkhere
async signOut(){
  await this.afAuth.signOut();
  return this.router.navigate(['/login']);
}
private updateUserData(user){
  // Sets user data to firestore on login
  
  const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

  const data = {
    uid:user.uid,
    email:user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    roles:{
      subscriber:true
    },
    orderStatus:{
      status: status = "1"
    }
    
  };
    return userRef.set(data,{ merge: true });
}
private async getUserData(user){
  // Sets user data to firestore on login
  
  const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

  const data = {
    uid:user.uid,
    email:user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    roles:{
      subscriber:true
    },
    orderStatus:{
      status: status = "1"
    }
    
  };
    return userRef.get();
}
//assigen roles to an ability method
//1)Read
canRead(user:User):boolean{
  const allowed = ['admin','editor','subscriber']
  return this.checkAuthorization(user,allowed)
}
//2)Edit
canEdit(user:User):boolean{
  const allowed = ['admin','editor']
  return this.checkAuthorization(user,allowed)
}
//3)Delete
canDelete(user:User):boolean{
  const allowed = ['admin']
  return this.checkAuthorization(user,allowed)
}
//determines if user has matching role
private checkAuthorization(user:User,allowedRoles:string[]){
  if(!user) return false
  for(const role of allowedRoles){
    if( user.roles[role] ) {
      return true
    }
  }
  return false
}
}
