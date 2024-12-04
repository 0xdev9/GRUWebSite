# GRU - Guardia Recon Unit

Site web de présentation pour la Guardia Recon Unit (GRU), une organisation spécialisée dans la sensibilisation à la sécurité numérique et à l'OSINT.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- [Node.js](https://nodejs.org/) (version 18.0.0 ou supérieure)
- [npm](https://www.npmjs.com/) (généralement installé avec Node.js)

## Installation

### Windows

1. Ouvrez PowerShell ou CMD
2. Clonez le projet ou téléchargez-le
3. Naviguez vers le dossier du projet :
```bash
cd chemin/vers/le/projet
```
4. Installez les dépendances :
```bash
npm install
```

### macOS / Linux

1. Ouvrez le Terminal
2. Clonez le projet ou téléchargez-le
3. Naviguez vers le dossier du projet :
```bash
cd chemin/vers/le/projet
```
4. Installez les dépendances :
```bash
npm install
```

## Lancement du projet

### Développement

Pour lancer le serveur de développement avec le rechargement à chaud :

```bash
npm run dev
```

Le site sera accessible à l'adresse : `http://localhost:5173`

### Production

Pour construire le projet pour la production :

```bash
npm run build
```

Pour prévisualiser la version de production :

```bash
npm run preview
```

## Structure du projet

```
gru-portfolio/
├── src/
│   ├── components/     # Composants réutilisables
│   ├── pages/         # Pages principales
│   ├── App.tsx        # Composant racine
│   └── main.tsx       # Point d'entrée
├── public/            # Fichiers statiques
└── index.html         # Page HTML principale
```

## Technologies utilisées

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React (pour les icônes)

## Personnalisation

### Thème et couleurs

Les couleurs principales sont définies dans les classes Tailwind :
- Fond principal : noir (`bg-black`)
- Accents : bleu (`text-blue-400`, `border-blue-400`)
- Texte : blanc et gris (`text-white`, `text-gray-300`)

### Images

Les images de fond sont hébergées sur Unsplash. Pour modifier une image, changez simplement l'URL dans le composant correspondant.

### Navigation

La navigation est gérée par React Router DOM. Les routes sont définies dans `App.tsx`.

## Résolution des problèmes courants

### Le serveur ne démarre pas

1. Vérifiez que le port 5173 n'est pas déjà utilisé
2. Essayez de supprimer le dossier `node_modules` et `package-lock.json`, puis réinstallez les dépendances :
```bash
rm -rf node_modules package-lock.json
npm install
```

### Les styles ne s'appliquent pas

1. Vérifiez que Tailwind CSS est correctement configuré
2. Assurez-vous que le fichier `index.css` est importé dans `main.tsx`

## Support

Pour toute question ou problème, contactez-nous à :
- Email : contact@gru-security.com
- Téléphone : +33 1 23 45 67 89

## Licence

Ce projet est privé et propriétaire. Tous droits réservés.
