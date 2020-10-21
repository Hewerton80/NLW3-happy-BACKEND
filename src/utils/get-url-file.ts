export const getUrlFile = ((namaFile: string)=>{
    return `${process.env.HOST}:${process.env.PORT}/files/${namaFile}`
})
