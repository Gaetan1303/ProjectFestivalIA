const { Role } = require('../../src/models/role');
const { v4: uuidv4 } = require('uuid');

describe('Role Model', () => {
  it('doit créer un rôle valide avec tous les champs requis', () => {
    const role = new Role({
      id: uuidv4(),
      nom: 'ADMIN'
    });
    expect(role.nom).toBe('ADMIN');
    expect(role.id).toBeDefined();
  });

  it('doit accepter tous les rôles valides du MLD', () => {
    const rolesValides = ['VISITOR', 'ADMIN', 'COMITE', 'JURY', 'DIRECTOR'];
    
    rolesValides.forEach(nomRole => {
      const role = new Role({
        id: uuidv4(),
        nom: nomRole
      });
      expect(role.nom).toBe(nomRole);
    });
  });

  it('doit valider que l\'ID est un UUID', () => {
    const roleId = uuidv4();
    const role = new Role({
      id: roleId,
      nom: 'JURY'
    });
    expect(role.id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
  });

  it('doit rejeter un rôle avec un nom invalide', () => {
    expect(() => {
      new Role({
        id: uuidv4(),
        nom: 'ROLE_INVALIDE'
      });
    }).toThrow('Nom de rôle invalide');
  });

  it('doit permettre de vérifier les permissions par rôle', () => {
    const adminRole = new Role({ id: uuidv4(), nom: 'ADMIN' });
    const juryRole = new Role({ id: uuidv4(), nom: 'JURY' });
    const visitorRole = new Role({ id: uuidv4(), nom: 'VISITOR' });
    
    expect(adminRole.hasAdminPrivileges()).toBe(true);
    expect(juryRole.hasAdminPrivileges()).toBe(false);
    expect(juryRole.canRate()).toBe(true);
    expect(visitorRole.canRate()).toBe(false);
  });

  it('doit rejeter un rôle sans nom', () => {
    expect(() => {
      new Role({
        id: uuidv4()
      });
    }).toThrow();
  });

  it('doit permettre de récupérer tous les rôles disponibles', async () => {
    // Supposons une méthode statique Role.getAllRoles
    const roles = await Role.getAllRoles();
    expect(Array.isArray(roles)).toBe(true);
    expect(roles.length).toBeGreaterThanOrEqual(5);
    
    const nomRoles = roles.map(r => r.nom);
    expect(nomRoles).toContain('VISITOR');
    expect(nomRoles).toContain('ADMIN');
    expect(nomRoles).toContain('COMITE');
    expect(nomRoles).toContain('JURY');
    expect(nomRoles).toContain('DIRECTOR');
  });
});
