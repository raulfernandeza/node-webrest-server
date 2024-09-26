import { Router } from "express";
import { TodosController } from "./controlller";



export class TodoRouters {

    static get routes(): Router {

        const router = Router();
        
        const todoController = new TodosController();
        //aca no se define ruta, lo que dice MDW es la ruta de entrada
        router.get('/', todoController.getTodos );
        //router.get('/:id', todoController.getTodosId );
        router.get('/:id', todoController.getASN );

        //* Para un POST
        router.post('/', todoController.createTodo );



    return router;
}

}