/* On importe les méthodes nécessaires depuis le module `vue-router` */
import { createRouter, createWebHistory } from 'vue-router';

/* 
On importe les différentes views (pages) du projet, par exemple pour le 
projet "Mémoires interactives", on pourrait imaginer 4 views (pages) de base:
*/


/* Définition des routes dans un tableau [ ] d'objets { } */
const routes = [

];

// Création du router via la méthode createRouter
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // outil d'historique
  routes // contient les routes déclarées préalablement
});

/*
Le routeur étant maintenant configuré, nous allons l'exporter
pour l'importation dans le fichier main.js 
*/
export default router;