const { AiTool, VideoAiTool } = require('../../src/models/ai_tool');

describe('AiTool Model', () => {
  it('doit créer un outil IA unique', () => {
    const aiTool = new AiTool({ name: 'StableDiffusion', status: 'Approuvée', created_by_user_id: 1 });
    expect(aiTool.name).toBe('StableDiffusion');
    expect(aiTool.status).toBe('Approuvée');
  });

  it('doit garantir l\'unicité du nom de l\'outil IA', async () => {
    // Supposons une méthode statique AiTool.isNameUnique
    const isUnique = await AiTool.isNameUnique('StableDiffusion');
    expect(isUnique).toBe(true);
  });

  it('doit lier un outil IA à une vidéo', () => {
    const link = new VideoAiTool({ video_id: 1, ai_tool_id: 2 });
    expect(link.video_id).toBe(1);
    expect(link.ai_tool_id).toBe(2);
  });
});
