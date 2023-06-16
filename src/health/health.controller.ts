import { HttpStatusCode } from 'axios';
import { Request, Response } from 'express';

export const healthController = async (req: Request, res: Response) => {
  res.status(HttpStatusCode.Ok).json({
    version: '1',
    releaseID: '1.0.0',
    appID: 'podcast_backend',
    isAuthenticated: req.oidc.isAuthenticated(),
    details: {
      uptime: {
        componentType: 'system',
        metricValue: process.uptime(),
        metricUnit: 'seconds',
        time: new Date()
      }
    }
  });
};
