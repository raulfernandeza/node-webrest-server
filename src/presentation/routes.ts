import { Router } from "express";
import { TodosController } from "./todos/controlller";
import { TodoRouters } from "./todos/routes";




export class AppRouters {

    static get routes(): Router {

        const router = Router();
        //Diferentes rutas Path
        router.use('/api/todos', TodoRouters.routes );

    return router;
}

}
