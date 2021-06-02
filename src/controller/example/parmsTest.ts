import { Request, Response, NextFunction } from 'express';


export default async(req: Request, res: Response, next: NextFunction): Promise<void> => {

    const {bbb} = req.params;

    console.log(bbb);

    res.status(200).json({
        status: 'success',
        datas: {
            bbb: bbb
        }
    })
    
}

//https://dev.to/gathoni/express-req-params-req-query-and-req-body-4lpc