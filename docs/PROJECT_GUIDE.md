# 📁 Gestion de projet – Solo Dev (GitHub Based)

Ce fichier documente la structure de gestion de projet utilisée dans ce repository. Elle repose uniquement sur les outils GitHub : Issues (pour le backlog) et GitHub Projects (pour le suivi visuel).

---

## ✅ 1. Les Issues = mon backlog

Chaque idée, bug, amélioration ou tâche technique est créée sous forme d’Issue GitHub.  
Cela permet de centraliser tout le travail à faire dans un format structuré, traçable, et lié au code.

- Une issue = 1 unité de travail claire
- Toutes les issues sont connectées à un tableau GitHub Project (Kanban)
- Une Pull Request peut fermer automatiquement une issue via :  
  `Closes #id`, `Fixes #id`, `Resolves #id`

---

## 🏷️ 2. Convention de labels

Chaque issue doit avoir des labels qui indiquent :

### a. Le type de tâche :
- `bug` — une anomalie à corriger
- `feature` — une nouvelle fonctionnalité
- `enhancement` — amélioration visuelle ou UX
- `refactor` — nettoyage, restructuration du code
- `test` — couverture ou ajout de tests

### b. Le domaine concerné :
- `front`
- `back`
- `global`
- `infra` — CI/CD, déploiement, GitHub Action

### c. La priorité :
- `P1 – Urgent`
- `P2 – Important`
- `P3 – Optionnel`

➡️ Exemple de combinaison :
> `bug`, `front`, `P1 – Urgent`

---

## 📋 3. Template d'issue

> 💡 Copie-colle ce modèle quand tu crées une nouvelle issue :

```markdown
### ✅ Objectif
Décris clairement ce que tu veux faire ou corriger.

### 📍 Contexte
Pourquoi cette tâche est-elle nécessaire ? Quel est l’impact ? (UX, performance, dette technique…)

### 🔧 Étapes à faire
- [ ] Étape 1
- [ ] Étape 2
- [ ] Étape 3

### 🧪 Tests / critères de validation
- [ ] Comportement attendu
- [ ] Capture écran ou URL de test (si applicable)

### ⏱️ Priorité
<!-- Ex: P1 – Urgent -->

### 📦 Domaine
<!-- Ex: front / back / global -->

### 🏷️ Labels recommandés
<!-- bug / feature / enhancement / etc. -->