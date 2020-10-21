import { getRepository, Repository } from 'typeorm';
import { Orphanage } from '../../database/entities/orphanage.entity';
import { ImageOrphanage } from '../../database/entities/orphanate-image.entity';
import { Request, Response } from 'express';
import { getUrlFile } from '../../utils/get-url-file';

export class OphanageService {

    async findAllOrphanages(req: Request, res: Response) {
        const orpharnageRepository = getRepository(Orphanage)

        const orphanages = await orpharnageRepository
            .createQueryBuilder('orphanage')
            .leftJoinAndSelect('orphanage.images', 'images')
            .getMany();

        orphanages.forEach(orphanage => {
            orphanage.images.forEach(image => {
                image.path = getUrlFile(image.name);
            })
        })
        return res.status(200).json(orphanages);

    }
    async finOneOrphanageById(req: Request, res: Response) {
        const { id } = req.params;
        const orpharnageRepository = getRepository(Orphanage);

        const orphanage = await orpharnageRepository
            .createQueryBuilder('orphanage')
            .where('orphanage.id = :id', { id })
            .leftJoinAndSelect('orphanage.images', 'images')
            .getOne();


        orphanage?.images.forEach(image => {
            image.path = getUrlFile(image.name);
        })
        return res.status(200).json(orphanage);

    }
    async createOrphanage(req: Request, res: Response) {
        const files = req.files as Express.Multer.File[];
        console.log(req.body)
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = req.body;

        const imageOrphanageRepository = getRepository(ImageOrphanage)
        const orpharnageRepository = getRepository(Orphanage)


        const orphanage = orpharnageRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends:open_on_weekends==='true',

        });
        try {
            await orpharnageRepository.save(orphanage);

        }
        catch (err) {
            console.log('erro ao salvar orfanato')
            return res.status(500).json(err)

        }
        for (const file of files) {
            const image = imageOrphanageRepository.create({
                orphanage_id: orphanage.id,
                name: file.filename,
            })
            try {
                await imageOrphanageRepository.save(image)

            }
            catch (err) {
                console.log('erro ao salvar imagem')
                return res.status(500).json(err)

            }
        }


        return res.status(201).json(orphanage);


    }
}