import { Request, Response, NextFunction } from 'express';


export default async(req: Request, res: Response, next: NextFunction): Promise<void> => {

    const {aaa} = req.body;
    
    console.log(aaa);

    res.status(200).json({
        status: 'success',
        datas: {
            aaa: aaa
        }
    })
    
}

//https://dev.to/gathoni/express-req-params-req-query-and-req-body-4lpc