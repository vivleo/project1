import React, {Component} from 'react';

class Download extends Component{
    render(){
        return (<div>
            <div className="form-group">
                <form action="https://maximalcrazzy.fr/Launcher.jar">
                    <p>Cliquez ici pour lancer le téléchargement : </p>
                    <input type="submit" download="" value="Téléchargement" name="inscrire"/>
                </form>
            </div>
        </div>);
    }
}

export default Download;