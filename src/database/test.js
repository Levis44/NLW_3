const Database =  require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then( async db => {
    
    // inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.6555874",
        name: "Lar dos meninos",
        about: "Presta assistência a crinças de 06 a 15 anos que se encontrem em situação de risco.",
        whatsapp: "9999999",
        images: [
            "https://images.unsplash.com/photo-1602827827969-a3994ddc9d98?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1590966473477-e74b95a0c407?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1601564267830-523b71e24db0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1601180964280-88c506668304?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1598802586325-849b09477776?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1598454444314-28649fcaa0e9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"

        ].toString(),
        instructions: "Venha como se sentir a vontade e traha muito amor e paciência para dar",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"

    }
        )


    //consultar dados na tabela
    const selectedOrphanages =  await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)


    // consultar somente 1 orfanato pelo id
    /*const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)*/

    // deletar dado na tabela
    //  console.log(await db.run("DELETE FROM orphanages WHERE id = '1'"))
})