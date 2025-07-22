import { makeServer } from './Mirage/server.js'; 
import { templates } from '../data/templates';
import mockUserData from '../data/mockUserData';


export function makeServer() {

    createServer({
        routes() {
            this.namespace = 'api'

            this.get('/templates', () => {
                return {
                    templates
                }
            });
            this.get('/user-data', () => {
                return {
                    data: mockUserData
                }
            });
        }
    });

}

