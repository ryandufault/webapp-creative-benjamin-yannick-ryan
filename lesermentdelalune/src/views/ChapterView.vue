<template>
  <div class="chapitre-container">
    <div class="chapitre-header">
      <h1>Chapitre {{ chapitreId }}</h1>
      <h2>{{ chapitreTitre }}</h2>
    </div>

    <div class="chapitre-contenu">
      <NarrativeText :texte="chapitreTexte" />
      <ChoicePanel :choix1="chapitreChoix1" :choix2="chapitreChoix2" />
    </div>

    <button class="btn-continuer" @click="goToNextChapter">Continuer</button>
  </div>
</template>

<script>
import NarrativeText from '../components/NarrativeText.vue'
import ChoicePanel from '../components/ChoicePanel.vue'

export default {
name: 'ChapterView',
components: {
  NarrativeText,
  ChoicePanel
},
data() {
  return {
    chapitreId: null,
    chapitreTitre: '',
    chapitreTexte: '',
    chapitreChoix1: null,
    chapitreChoix2: null,
    chapitres: [] // tableau qui contiendra les données du JSON
  }
},
mounted() {
  // Récup l'id du chapitre avec l'url (paramètres)
  this.chapitreId = this.$route.params.id;
  
  // fetch pour recup les données du json
  fetch('/src/assets/chapitres.json')
    .then(response => {
      if (!response.ok) {
        throw new Error("Erreur lors du chargement du fichier JSON");
      }
      return response.json();
    })
    .then(data => {
      this.chapitres = data.chapitres; // stock les chapitres dans le tableau
      this.loadChapterData(); // load les données du chapitre actuel
    })
    .catch(error => {
      console.error('Erreur lors du chargement du JSON :', error);
    });
},
methods: {
  loadChapterData() {
    // boucle pour chaque chapitres du tableau
    this.chapitres.forEach(chapitre => {
    // si l'id correspond à l'id du chapitre actuel
      if (chapitre.id === parseInt(this.chapitreId)) {
        this.chapitreTitre = chapitre.titre;
        this.chapitreTexte = chapitre.texte;
        this.chapitreChoix1 = chapitre.choix1;
        this.chapitreChoix2 = chapitre.choix2;
      }
    });
  },
  goToNextChapter() {
    // Convert l'id en int et rajoute 1
    const nextChapterId = parseInt(this.chapitreId) + 1;
    
    // Navigation programmatique vers chap suivant
    this.$router.push({ 
      name: 'chapitre', 
      params: { id: nextChapterId } 
    });
  }
},
watch: {
  // Changement params url
  '$route.params.id'(newId) {
    this.chapitreId = newId;
    this.loadChapterData(); // Recharge les données du nouveau chapitre
  }
}
}
</script>

<style scoped>
.chapitre-container {
width: 100%;
height: 93vh;
background-color: white;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

.chapitre-header {
position: absolute;
top: 20px;
left: 30px;
}

.chapitre-header h1 {
font-size: 2rem;
margin-bottom: 5px;
color: #333;
}

.chapitre-header h2 {
font-size: 1.3rem;
font-weight: 400;
color: #666;
}

.chapitre-contenu {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
}

.btn-continuer {
position: absolute;
bottom: 20px;
right: 30px;
background: none;
border: none;
font-size: 1.1rem;
color: #333;
cursor: pointer;
transition: 0.3s;
}

.btn-continuer:hover {
color: rgb(255, 251, 171);
}
</style>