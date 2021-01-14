import React, { Children, Component } from 'react';

export class Profil extends Component {
    
    render() {
        // const variableDescription = this.props.description ? (`Description : ${this.props.description}`): (`Pas de description`);
        return (
            <div>
                <h1 className="prenom">Prénom : {this.props.prenom} </h1>
                <h2 className="nom">Nom : {this.props.nom} </h2>
                <p className="description">{variableDescription} </p>
            </div>
        )
    }
}

export default Profil