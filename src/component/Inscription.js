import React, {Component} from 'react';

class Inscription extends Component{
    render(){
        return (
            <div>
               <div class="form-group">
                    <h1>Inscription</h1>
                    <form method="post">


                        <p> Nom d'utilisateur :</p>
                        <input 
                        type="text" 
                        id ="pseudo" 
                        name="username" 
                        pattern="[a-zA-Z0-9_]{3,20}"  
                        placeholder="Votre pseudo, 3 - 20 caractères" 
                        required/>

                        <p> Mot de passe :</p>
                        <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        oncopy="return false" 
                        onpaste="return false" 
                        placeholder="Entrez votre mot passe" 
                        required/>

                        <p> Confirmation mot de passe :</p>
                        <input 
                        type="password" 
                        name="password2" 
                        oncopy="return false" 
                        onpaste="return false" 
                        placeholder="Confirmez votre mot de passe"
                        required/>

                        <p>Adresse mail :</p>
                        <input 
                        type="email" 
                        name="mail" 
                        placeholder="Entrez votre adresse mail" 
                        required/>

                        <p>Année de naissance :</p>
                        <input 
                        type="number" 
                        name="year" 
                        placeholder="Année de naissance"
                        required/>

                        <input 
                        type="submit" 
                        value="Inscription" 
                        name="inscrire"/>
	                </form>
	            </div>
            </div>
        );
    }
}

export default Inscription;