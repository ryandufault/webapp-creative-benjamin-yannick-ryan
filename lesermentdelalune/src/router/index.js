/* On importe les méthodes nécessaires depuis le module `vue-router` */
import { createRouter, createWebHashHistory  } from 'vue-router';

/* 
On importe les différentes views (pages) du projet, par exemple pour le 
projet "Mémoires interactives", on pourrait imaginer 4 views (pages) de base:
*/
import ChapterView from '../views/ChapterView.vue';
import EndingView from '../views/EndingView.vue';
import HomeView from '../views/HomeView.vue';

/* Définition des routes dans un tableau [ ] d'objets { } */
const routes = [
  {
    path: '/',
    component: HomeView,
    name: 'home'
  },
  {
    path: '/chapter/:id',  // ← Exemple de route avec paramètre dynamique
    component: ChapterView,
    name: 'chapitre'
  },
  {
    path: '/ending/:id',
    component: EndingView,
    name: 'fin'
  }
];

// Création du router via la méthode createRouter
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

/*
Le routeur étant maintenant configuré, nous allons l'exporter
pour l'importation dans le fichier main.js 
*/
export default router;