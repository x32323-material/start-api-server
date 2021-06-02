import { Request, Response, NextFunction } from 'express';


export default async(req: Request, res: Response, next: NextFunction): Promise<void> => {

    const {ccc} = req.query;

    console.log(ccc);

    res.status(200).json({
        status: 'success',
        datas: {
            ccc: ccc
        }
    })
    
}

//https://dev.to/gathoni/express-req-params-req-query-and-req-body-4lpc