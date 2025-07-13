export function getServiceTemplate(name: string): string {
  const lowerName = name.toLowerCase();

  return `import axios from 'axios';

export const ${name}Service = {
  fetchAll: async () => {
    const response = await axios.get('/api/${lowerName}');
    return response.data;
  },

  fetchById: async (id: string | number) => {
    const response = await axios.get(\`/api/${lowerName}/\${id}\`);
    return response.data;
  },

  create: async (data: any) => {
    const response = await axios.post('/api/${lowerName}', data);
    return response.data;
  },

  update: async (id: string | number, data: any) => {
    const response = await axios.put(\`/api/${lowerName}/\${id}\`, data);
    return response.data;
  },

  delete: async (id: string | number) => {
    const response = await axios.delete(\`/api/${lowerName}/\${id}\`);
    return response.data;
  },
};
`;
}

export function getServiceTestTemplate(name: string): string {
  return `import { ${name}Service } from './${name}Service';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('${name}Service', () => {
  it('should fetch all data', async () => {
    mockedAxios.get.mockResolvedValue({ data: ['item1', 'item2'] });
    const data = await ${name}Service.fetchAll();
    expect(data).toEqual(['item1', 'item2']);
  });
});
`;
}
