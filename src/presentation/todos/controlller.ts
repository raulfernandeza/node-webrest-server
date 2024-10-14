
import { error } from "console";
import { Request, Response } from "express";
import { text } from "stream/consumers";


const todos = [
    { id: 1, text: 'Comprar SKU', completedAt: new Date() },
    { id: 2, text: 'Comprar PACK', completedAt: null },
    { id: 3, text: 'Comprar ASN', completedAt: new Date() },
]

const asn = [

    { id: 1, text: 'NAC123456', completedAt: new Date() },
    { id: 2, text: 'XPC123456', completedAt: new Date() },
    { id: 3, text: 'F12123456', completedAt: new Date() },

]


export class TodosController {

    //* Dependency Inyection
    constructor() {}

    public getTodos = (req:Request, res:Response) => {
        
       return res.json( todos );

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
        ////const body = req.body;
        const { text } = req.body;
        //validacion
        if ( !text  ) return res.status( 400 ).json( { error: 'Text is requerido' } );
        const newTodo = {
            id: todos.length + 1,
            text: text,
            completedAt: null
        };

        todos.push( newTodo );
        res.json( newTodo );

        //res.json( body );


    };

    //* Metodo para un PUT o PATCH
    public updateTodo = ( req: Request, res: Response ) => {
        const id = +req.params.id;
        if (isNaN(id)) return res.status(400).json({error: `ID argumento no es numero` });


        const todo = todos.find( todo => todo.id === id );
        if ( !todo ) return res.status(404).json({error: `ID ${ id } no se encuentra para ser actualizado` });

        const { text, completedAt } = req.body;
        ////if ( !text  ) return res.status( 400 ).json( { error: 'Text is requerido' } );

        //* si viene un valor, considerar para actualizar, si no, omitir

        todo.text = text || todo.text;
        //restriccion de accion
        ( completedAt === 'null' )
        ? todo.completedAt = null
        : todo.completedAt = new Date( completedAt || todo.completedAt );

        res.json( todo);
    }

    //* Metodo para un Delete
    public deleteTodo = (req: Request, res: Response) => {
        const id = +req.params.id;

        const todo = todos.find(todo => todo.id === id);
        if ( !todo ) return res.status(404).json({ error: `ID ${ id } no se encuentra para ser eliminado`})

        todos.splice( todos.indexOf(todo), 1 );
        res.json( todo );
    }



  }
  





