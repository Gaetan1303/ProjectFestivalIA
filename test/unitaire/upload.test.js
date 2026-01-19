const { UploadService } = require('../../src/services/uploadService');
const { Film } = require('../../src/models/film');
const { v4: uuidv4 } = require('uuid');

describe('Upload Service', () => {
  it('doit valider le format vidéo accepté (16:9)', () => {
    const uploadService = new UploadService();
    expect(uploadService.isValidFormat('16:9')).toBe(true);
    expect(uploadService.isValidFormat('4:3')).toBe(false);
    expect(uploadService.isValidFormat('21:9')).toBe(false);
  });

  it('doit valider la durée maximale (60 secondes)', () => {
    const uploadService = new UploadService();
    expect(uploadService.isValidDuration(59)).toBe(true);
    expect(uploadService.isValidDuration(60)).toBe(true);
    expect(uploadService.isValidDuration(61)).toBe(false);
    expect(uploadService.isValidDuration(120)).toBe(false);
  });

  it('doit accepter les fichiers vidéo valides (mp4, mov, avi)', () => {
    const uploadService = new UploadService();
    expect(uploadService.isValidVideoFile('film.mp4')).toBe(true);
    expect(uploadService.isValidVideoFile('film.mov')).toBe(true);
    expect(uploadService.isValidVideoFile('film.avi')).toBe(true);
    expect(uploadService.isValidVideoFile('film.mkv')).toBe(true);
  });

  it('doit rejeter les fichiers non-vidéo', () => {
    const uploadService = new UploadService();
    expect(uploadService.isValidVideoFile('document.pdf')).toBe(false);
    expect(uploadService.isValidVideoFile('image.jpg')).toBe(false);
    expect(uploadService.isValidVideoFile('audio.mp3')).toBe(false);
  });

  it('doit créer un chemin de fichier unique pour chaque upload', () => {
    const uploadService = new UploadService();
    const userId = uuidv4();
    const filename = 'mon-film.mp4';
    
    const path1 = uploadService.generateFilePath(userId, filename);
    const path2 = uploadService.generateFilePath(userId, filename);
    
    expect(path1).not.toBe(path2);
    expect(path1).toContain(userId);
    expect(path2).toContain(userId);
  });

  it('doit valider les sous-titres optionnels (srt, vtt)', () => {
    const uploadService = new UploadService();
    expect(uploadService.isValidSubtitleFile('subtitles.srt')).toBe(true);
    expect(uploadService.isValidSubtitleFile('subtitles.vtt')).toBe(true);
    expect(uploadService.isValidSubtitleFile('subtitles.txt')).toBe(false);
  });

  it('doit créer un film après upload réussi avec UUID', async () => {
    const uploadService = new UploadService();
    const userId = uuidv4();
    const candidatureId = uuidv4();
    
    const uploadData = {
      titre: 'Film Upload Test',
      description: 'Description du film',
      duree: 45,
      format: '16:9',
      urlYoutube: 'https://youtube.com/watch?v=test123',
      chemin: '/uploads/films/test.mp4',
      user_id: userId,
      candidature_id: candidatureId
    };
    
    const film = await uploadService.createFilmFromUpload(uploadData);
    
    expect(film).toBeInstanceOf(Film);
    expect(film.titre).toBe('Film Upload Test');
    expect(film.duree).toBe(45);
    expect(film.format).toBe('16:9');
    expect(film.user_id).toBe(userId);
    expect(film.candidature_id).toBe(candidatureId);
  });

  it('doit rejeter un upload avec durée excessive', async () => {
    const uploadService = new UploadService();
    
    const uploadData = {
      titre: 'Film Trop Long',
      duree: 75,
      format: '16:9',
      user_id: uuidv4()
    };
    
    await expect(uploadService.createFilmFromUpload(uploadData))
      .rejects
      .toThrow('La durée du film ne peut pas dépasser 60 secondes');
  });

  it('doit rejeter un upload avec format invalide', async () => {
    const uploadService = new UploadService();
    
    const uploadData = {
      titre: 'Film Format Invalide',
      duree: 45,
      format: '4:3',
      user_id: uuidv4()
    };
    
    await expect(uploadService.createFilmFromUpload(uploadData))
      .rejects
      .toThrow('Le format doit être 16:9');
  });

  it('doit gérer l\'upload de sous-titres optionnels', async () => {
    const uploadService = new UploadService();
    const userId = uuidv4();
    
    const uploadData = {
      titre: 'Film avec sous-titres',
      duree: 50,
      format: '16:9',
      chemin: '/uploads/films/film.mp4',
      'fichier des sous-titres': '/uploads/subtitles/film.srt',
      user_id: userId
    };
    
    const film = await uploadService.createFilmFromUpload(uploadData);
    
    expect(film['fichier des sous-titres']).toBe('/uploads/subtitles/film.srt');
  });
});
