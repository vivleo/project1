import React, {Component} from 'react';

class Contact extends Component{
    render(){
        return (
            <div>
               <div class="form-group">
			        <h1>Contact :</h1>
                    <form method="post" >

                        <p>Adresse mail :</p>
                        <input 
                        type="email" 
                        name="mail"  
                        placeholder="Votre adresse mail" 
                        required/>

                        <p>Sujet :</p>
                        <input type="text" 
                        name="sujet"  
                        placeholder="Le sujet de votre message" 
                        required/>

                        <p>Votre message :</p>
                        <textarea 
                        rows="15" 
                        cols="40" 
                        name="message" 
                        onfocus="" 
                        placeholder="Votre message" 
                        maxlength="290" 
                        required>
                        </textarea> 

                        <input 
                        type="submit" 
                        value="Envoyer" 
                        name="connexion"/>
	                </form>
	            </div>
            </div>
        );
    }
}

export default Contact;