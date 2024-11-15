// =========================================================================
// Déclaration des variables                                               =
// =========================================================================
const REGEX_CODE_PRODUIT = /(([\d\w]){5}-){2,4}([\d\w]){5}/;
const listeProduits = {
    "Q1JBC-3ZPX8-TVHUH" : "Final Fantasy 1",
    "P3CJN-JNGJM-XYYT4" : "Contra",
    "2RCWA-XPRPX-GJHPR" : "The Legend of Zelda",
    "H4LS8-L1L3T-08D9X" : "Rygar",
    "KBZB7-PQYDY-D5TMZ-MUABS-JNGJM" : "Metroid",
    "VPTU1-9UZXA-X4ED4-F596J-XPRPX" : "Ninja Gaiden",
    "SUY17-21D57-5QYJU-UE6PN-HZ452" : "Kirby's Adventure"
};
const erreurValidation = {
    "terme" : "Vous devez accepter les termes de l’Accord de souscription Vapeur pour finaliser la transaction.",
    "formatInvalide" : "Le code produit que vous avez saisie est invalide, il ne respecte pas le format requis.",
    "produitInexistant" : "Aucun produit n'est associé au code de produit saisie."
};
const inputCodeProduit = document.getElementById('cle-activation');
const messageErreur = document.getElementById('message-erreur');
const declarationCheckbox = document.getElementById('declaration');
const declarationLabel = document.querySelector('label[for="declaration"]');

// Code pour provoquer une animation sur le bouton Activer
const boutonActiver = document.querySelector('.bouton-activation');
boutonActiver.addEventListener('click', (e) => e.target.classList.add('bouton-click'));
boutonActiver.addEventListener('transitionend', (e) =>  e.target.classList.remove('bouton-click'));

/**
 * Recherche dans le tableau listeProduits un produit associé a un code de produit
 * @param {string} codeProduit Le code de produit à valider
 * @returns true si le produit existe dans le tableau
 */
function isProduitExiste(codeProduit) {
    return listeProduits[codeProduit.toString().toUpperCase()] ? true : false;
}

// =========================================================================
// Ajoutez votre code plus bas                                             =
// =========================================================================


boutonActiver.addEventListener('submit', ValidationForm);   

function ValidationForm () {

    const valeurCodeProduit = inputCodeProduit.value;
    messageErreur.style.display = 'none';

    if (!declaration.checked)
    {
        declarationLabel.style.color = 'var(--couleur-texte-invalide)';
        messageErreur.textContent = erreurValidation.terme;
        messageErreur.style.display = 'block';
        return false;
    }
    if (!REGEX_CODE_PRODUIT.test(valeurCodeProduit))
    {
        messageErreur.textContent = erreurValidation.formatInvalide;
        messageErreur.style.display = 'block';
        return false;
    }
    if (!isProduitExiste(valeurCodeProduit))
    {
        messageErreur.textContent = erreurValidation.produitInexistant;
        messageErreur.style.display = 'block';
        return false;
    }
}




