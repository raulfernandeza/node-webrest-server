import { envs } from './config/env';
import { AppRouters } from './presentation/routes';
import {Server} from './presentation/server';


(()=>{

    main();
})();


function main(){
    //console.log('main');

    const server = new Server({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH,
        routes: AppRouters.routes,

    });

    server.start();
}






