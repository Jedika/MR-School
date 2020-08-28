export const items = [
  {
    label: 'Accueil',
    path: '/home',
    children: []
  },
  {
    label: 'Gestion des élèves',
    path: '/drawer',
    children: [
      {
        label: 'Listes des élèves',
        path: ''
      }
    ]
  },
  {
    label: 'Frais de scolarité',
    path: '/main/frais',
    children: []
  },
  {
    label: 'Gestion des responsables',
    path: '/drawer',
    children: []
  }
];

//Four parents items
export const isOpen = [false, false, false, false];
