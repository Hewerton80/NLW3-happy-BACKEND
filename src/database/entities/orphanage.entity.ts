import {PrimaryGeneratedColumn, Entity, Column, OneToMany} from 'typeorm';
import { ImageOrphanage } from './orphanate-image.entity';
@Entity('orphanage')
export class Orphanage{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar'
    })
    name: string;

    @Column({
        type: 'float'
    })
    latitude: number;

    @Column({
        type: 'float'
    })
    longitude: number;

    @Column({
        type: 'text'
    })
    about: string;

    @Column({
        type: 'text'
    })
    instructions: string;

    @Column({
        type: 'varchar'
    })
    opening_hours: string;

    @Column({
        type: 'boolean',
        default: false
    })
    open_on_weekends: boolean;

    @OneToMany(()=>ImageOrphanage, image=>image.orphanage)
    images: ImageOrphanage[];

}