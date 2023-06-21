import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './pages/categories/shared/category.model';

export class InmemoryDataBase implements InMemoryDbService {


    createDb() {

        const categories: Category[] = [
            { id: 1, name: 'Ponto Inicial', type: 'Concluída', description: 'Bater o ponto iniciar' },
            { id: 1, name: 'Email', type: 'Concluída', description: 'Verificar os emails' },
            { id: 2, name: 'Git', type: 'Concluída', description: 'Dar um pull' },
            { id: 3, name: 'Reunião diaria', type: 'Pendente', description: 'Dailly' },
            { id: 4, name: 'Reunião quinzenal', type: 'Pendente', description: 'Refinamento' },
            { id: 5, name: 'Almoço', type: 'Pendente', description: 'Parada para refeição' },
            { id: 6, name: 'Card Css', type: 'Pendente', description: 'Card layout' },
            { id: 7, name: 'Card TypeScript', type: 'Pendente', description: 'Criação de logica' },
            { id: 8, name: 'Card Serviço', type: 'Pendente', description: 'Consumo do serviço' },
            { id: 9, name: 'Card Jasmine', type: 'Pendente', description: 'Teste unitario' },
            { id: 10, name: 'Ponto Final', type: 'Pendente', description: 'Bater o ponto final' },


        ];

        return { categories }
    }

}