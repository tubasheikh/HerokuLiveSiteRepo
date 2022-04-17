import express, { Request, Response, NextFunction, response } from 'express';
import { request } from 'http';
import { UserDisplayName } from '../Server/Util/index';

export function DisplayHomePage(req: Request, res: Response, next: NextFunction ): void
{
    res.render('index', { title: 'Home', page: 'home', displayName: UserDisplayName(req) });
}

export function DisplayAboutPage(req: Request, res: Response, next: NextFunction ): void
{
    res.render('index', { title: 'About Us', page: 'about', displayName: UserDisplayName(req) });
}

export function DisplayServicesPage(req: Request, res: Response, next: NextFunction ): void
{
    res.render('index', { title: 'Our Services', page: 'services', displayName: UserDisplayName(req) });
}

export function DisplayProductsPage(req: Request, res: Response, next: NextFunction ): void
{
    res.render('index', { title: 'Our Projects', page: 'projects', displayName: UserDisplayName(req) });
}

export function DisplayContactPage(req: Request, res: Response, next: NextFunction ): void
{
    res.render('index', { title: 'Contact Us', page: 'contact', displayName: UserDisplayName(req) });
}