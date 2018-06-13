import React, {Component} from 'react';

class Connexion extends Component{
    render(){
        return (
            <div>
               <div class="form-group">
                    <h1>Connexion</h1>
                    <form method="post">

                        <p> Nom de compte ou email : </p>
                        <input type="text" name="co_username" placeholder="Nom de compte"required/>

                        <p> Mot de passe :</p>
                        <input type="password" name="co_password" placeholder="Mot de passe"required/>

                        <input type="submit" value="Connexion" name="connexion"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Connexion;