const { User } = require('../../src/models/user');

describe('User Model', () => {
  it('doit créer un utilisateur valide', () => {
    const user = new User({
      name: 'Jean',
      surname: 'Dupont',
      email: 'jean.dupont@gmail.com',
      password: 'motdepassehashé',
      dateNaissance: '1990-01-01',
      biographie: 'Réalisateur IA',
      ecole: 'Polytech',
      reseauxSociaux: { twitter: 'https://twitter.com/jean' },
      portfolio: 'https://portfolio.com/jean',
      accepteCGU: true,
      dateInscription: new Date(),
      statut: 'Actif',
      role: 'Utilisateur'
    });
    expect(user.name).toBe('Jean');
    expect(user.accepteCGU).toBe(true);
    expect(user.email).toMatch(/@gmail.com$/);
  });

  it('doit refuser la création si CGU non acceptées', () => {
    expect(() => {
      new User({
        name: 'Marie',
        accepteCGU: false
      });
    }).toThrow();
  });

  it('doit valider l\'unicité de l\'email', async () => {
    // Supposons une méthode statique User.isEmailUnique
    const isUnique = await User.isEmailUnique('unique@gmail.com');
    expect(isUnique).toBe(true);
  });

  it('doit vérifier la majorité de l\'utilisateur', () => {
    const user = new User({
      dateNaissance: '2010-01-01',
      accepteCGU: true
    });
    expect(user.isMajor()).toBe(false);
  });
});
