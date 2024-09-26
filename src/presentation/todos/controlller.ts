
import { Request, Response } from "express";


const todos = [
    { id: 1, text: 'Buy Milk', createdAt: new Date() },
    { id: 2, text: 'Buy Bread', createdAt: null },
    { id: 3, text: 'Buy Butter', createdAt: new Date() },
]

const asn = [

    { id: 1, text: 'NAC123456', createdAt: new Date() },
    { id: 2, text: 'XPC123456', createdAt: new Date() },
    { id: 3, text: 'F12123456', createdAt: new Date() },

]


export class TodosController {

    //* Dependency Inyection
    constructor() {}

    public getTodos = (req:Request, res:Response) => {
        
       return res.json(todos);

    }


    public getTodosId = (req:Request, res:Response) => {
        const id = +req.params.id;

        if (isNaN(id)) return res.status(400).json({error: `Todo with id ${ id } not found` })
        const todo = todos.find( todo => todo.id === id );

        (todo)
          ? res.json(todo)
          : res.status(404).json( {error: `Todo with id ${ id } not found` })
          //* res.json({todo});
    }

    public getASN = (req: Request, res: Response) => {
        const id = +req.params.id;

        if (isNaN(id)) return res.status(400).json({error: `ASN con id ${ id } no existe` })
        const todo = asn.find( asn => asn.id === id );

        (todo)
          ? res.json(todo)
          : res.status(404).json( {error: `ASN con id ${ id } no es posible buscar` })

    }

    //* Metodo para un POST
    public createTodo = (req: Request, res: Response ) => {
        const body = req.body;

        res.json( body );


    }
  }
  





