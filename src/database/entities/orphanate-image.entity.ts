import {PrimaryGeneratedColumn, Entity, Column, ManyToOne, JoinColumn} from 'typeorm';
import { Orphanage } from './orphanage.entity';
@Entity('image_orphanage')
export class ImageOrphanage{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    orphanage_id: number;

    @Column({
        type: 'varchar'
    })
    name: string;

    path: string;

    @ManyToOne(()=>Orphanage, orphanage=> orphanage.images, {onDelete: 'CASCADE'})
    @JoinColumn({name:'orphanage_id'})
    orphanage: Orphanage

}