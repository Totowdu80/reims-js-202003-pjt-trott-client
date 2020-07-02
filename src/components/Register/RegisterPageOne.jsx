import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPageOne = () => {
  return (
    <div className="landing-page">
      <figure className="fig">
        <img
          src="https://cdn.discordapp.com/attachments/714501146701463636/720283550003363880/TROTT.png"
          className="logo"
          alt="logo"
        />
      </figure>
      <div className="divText">
        <h2 className="createProfile">Commence par créer ton profil</h2>
        <p className="pConnect">(ou te reconnecter)</p>
        <p className="pConnect">
          1 étape restante
          <img
            src="https://images.emojiterra.com/google/android-10/512px/1f609.png"
            className="smiley"
            alt="test"
          />
        </p>
      </div>
      <figure className="imageConnect">
        <img src="https://zupimages.net/up/20/24/wkww.png" alt="PlaceHolder" />
      </figure>
      <div className="buttonDiv">
        <Link className="link_as_button" to="/register?step=2">
          S'inscrire
        </Link>
        <Link className="link_as_button" to="/login">
          Se connecter
        </Link>
        <p className="pWconnect">Continuer sans se connecter</p>
      </div>
    </div>
  );
}


export default RegisterPageOne;