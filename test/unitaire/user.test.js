const { User } = require('../../src/models/user');
const { v4: uuidv4 } = require('uuid');

describe('User Model', () => {
  it('doit créer un utilisateur valide avec tous les champs requis', () => {
    const user = new User({
      id: uuidv4(),
      nom: 'Dupont',
      prenom: 'Jean',
      email: 'jean.dupont@gmail.com',
      motDePasse: 'motdepassehashé',
      dateNaissance: new Date('1990-01-01'),
      accepteCGU: true,
      statut: 'ACTIVE',
      created_at: new Date(),
      updated_at: new Date(),
      lastLoginAt: new Date(),
      emailVerified: true
    });
    expect(user.nom).toBe('Dupont');
    expect(user.prenom).toBe('Jean');
    expect(user.accepteCGU).toBe(true);
    expect(user.email).toMatch(/@gmail.com$/);
    expect(user.statut).toBe('ACTIVE');
  });

  it('doit refuser la création si CGU non acceptées', () => {
    expect(() => {
      new User({
        id: uuidv4(),
        nom: 'Martin',
        prenom: 'Marie',
        email: 'marie@gmail.com',
        motDePasse: 'hash',
        dateNaissance: new Date('1995-01-01'),
        accepteCGU: false
      });
    }).toThrow();
  });

  it('doit valider l\'unicité de l\'email', async () => {
    // Supposons une méthode statique User.isEmailUnique
    const isUnique = await User.isEmailUnique('unique@gmail.com');
    expect(isUnique).toBe(true);
  });

  it('doit accepter les statuts valides (ACTIVE, INACTIVE, SUSPENDED)', () => {
    const userActive = new User({ statut: 'ACTIVE', accepteCGU: true });
    expect(userActive.statut).toBe('ACTIVE');
    
    const userInactive = new User({ statut: 'INACTIVE', accepteCGU: true });
    expect(userInactive.statut).toBe('INACTIVE');
    
    const userSuspended = new User({ statut: 'SUSPENDED', accepteCGU: true });
    expect(userSuspended.statut).toBe('SUSPENDED');
  });

  it('doit gérer correctement les timestamps', () => {
    const now = new Date();
    const user = new User({
      id: uuidv4(),
      nom: 'Test',
      prenom: 'User',
      email: 'test@example.com',
      accepteCGU: true,
      created_at: now,
      updated_at: now
    });
    expect(user.created_at).toEqual(now);
    expect(user.updated_at).toEqual(now);
  });
});
